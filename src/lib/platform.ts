/** Platform / input-mode detection for cross-platform UX gating.
 *
 *  Conventions:
 *  - `isMobileOS`: based on userAgent - used for Tauri-runtime decisions like
 *    whether to call `close_splashscreen` (the splashscreen window only exists
 *    on desktop targets).
 *  - `isTouchPrimary`: based on `(pointer: coarse)` media query - used for UX
 *    decisions like skipping keyboard shortcuts or autofocus that would pop the
 *    on-screen keyboard. A desktop with a touchscreen reports `pointer: fine`
 *    (the mouse is primary) so this correctly returns false there. */

export function isMobileOS(): boolean {
    if (typeof navigator === "undefined") return false;
    return /android|iphone|ipad|ipod|mobile/i.test(navigator.userAgent);
}

export function isTouchPrimary(): boolean {
    if (typeof window === "undefined") return false;
    try {
        return window.matchMedia("(pointer: coarse)").matches;
    } catch {
        return false;
    }
}
