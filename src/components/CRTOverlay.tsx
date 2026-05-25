import { useEffect, useRef, useState } from "react";
import { CRT_CHANGE_EVENT, CRTPreference, getCRTPreference } from "../lib/crt";

const VERTEX_SHADER = `#version 300 es
in vec2 a_pos;
void main() {
    gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `#version 300 es
precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_reduced;

out vec4 outColor;

void main() {
    vec2 px = gl_FragCoord.xy;
    vec2 uv = px / u_resolution.xy;
    vec2 centered = uv - 0.5;
    float dist = length(centered);

    // Strong tight scanlines — every other physical pixel row darker
    // (modulo 2.0 on absolute fragment-y, dark band on even rows)
    float scanlineDark = (1.0 - step(1.0, mod(px.y, 2.0))) * 0.22;

    // Vignette — corners noticeably darker, classic CRT bulge
    float vignette = smoothstep(0.42, 0.95, dist) * 0.55;

    // Slight curvature shading — pretends the screen bulges by darkening edges along a curve
    float curvature = pow(max(abs(centered.x) - 0.34, 0.0) * 3.0, 2.0)
                    + pow(max(abs(centered.y) - 0.42, 0.0) * 3.0, 2.0);
    float curvDarken = clamp(curvature, 0.0, 1.0) * 0.45;

    // Chromatic aberration — strong red phosphor on left edge, cyan on right
    float edgeMaskX = smoothstep(0.32, 0.5, abs(centered.x));
    float edgeMaskY = smoothstep(0.38, 0.5, abs(centered.y));
    float edgeMask = max(edgeMaskX, edgeMaskY);
    vec3 chroma;
    if (centered.x < 0.0) {
        chroma = vec3(1.0, 0.18, 0.32) * edgeMask * 0.30;
    } else {
        chroma = vec3(0.20, 0.62, 1.0) * edgeMask * 0.30;
    }

    // Subtle constant flicker — two low-freq sines, very small magnitude
    float flicker = (sin(u_time * 4.7) + sin(u_time * 11.3)) * 0.008 * (1.0 - u_reduced);

    // Compose dark overlay
    float darken = vignette + curvDarken + scanlineDark + flicker;
    darken = clamp(darken, 0.0, 0.85);

    // Final pixel: black with computed darkness alpha + colored chromatic edges
    vec3 outRgb = vec3(0.0);
    float alpha = darken;

    // Mix in chromatic — overlay-style brighten via colored alpha
    outRgb = mix(outRgb, chroma, clamp(edgeMask * 0.65, 0.0, 1.0));
    alpha = max(alpha, edgeMask * 0.22);

    outColor = vec4(outRgb, alpha);
}
`;

function compileShader(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader | null {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}

const CRTOverlay = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [pref, setPref] = useState<CRTPreference>(() => getCRTPreference());

    // React to preference changes from Settings
    useEffect(() => {
        const handler = (e: Event) => {
            const detail = (e as CustomEvent<CRTPreference>).detail;
            setPref(detail);
        };
        window.addEventListener(CRT_CHANGE_EVENT, handler);
        return () => window.removeEventListener(CRT_CHANGE_EVENT, handler);
    }, []);

    useEffect(() => {
        if (pref === "off") return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const gl = canvas.getContext("webgl2", { premultipliedAlpha: false, antialias: false });
        if (!gl) return;

        const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
        const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
        if (!vs || !fs) return;

        const program = gl.createProgram();
        if (!program) return;
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

        gl.useProgram(program);

        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
            gl.STATIC_DRAW
        );
        const posLoc = gl.getAttribLocation(program, "a_pos");
        gl.enableVertexAttribArray(posLoc);
        gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

        const uResLoc = gl.getUniformLocation(program, "u_resolution");
        const uTimeLoc = gl.getUniformLocation(program, "u_time");
        const uReducedLoc = gl.getUniformLocation(program, "u_reduced");

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        gl.uniform1f(uReducedLoc, reducedMotion ? 1.0 : 0.0);

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const width = window.innerWidth * dpr;
            const height = window.innerHeight * dpr;
            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
            }
            gl.viewport(0, 0, width, height);
            gl.uniform2f(uResLoc, width, height);
        };
        resize();
        window.addEventListener("resize", resize);

        let rafId = 0;
        const start = performance.now();
        const render = (now: number) => {
            const t = (now - start) / 1000;
            gl.uniform1f(uTimeLoc, t);
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.drawArrays(gl.TRIANGLES, 0, 6);
            if (!reducedMotion) {
                rafId = requestAnimationFrame(render);
            }
        };
        rafId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(rafId);
            gl.deleteProgram(program);
            gl.deleteShader(vs);
            gl.deleteShader(fs);
            gl.deleteBuffer(buffer);
        };
    }, [pref]);

    if (pref === "off") return null;

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none z-[51] w-screen h-screen"
            style={{ mixBlendMode: "multiply" }}
        />
    );
};

export default CRTOverlay;
