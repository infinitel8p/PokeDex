import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/pixelify-sans/500.css";
import "@fontsource/pixelify-sans/600.css";
import "@fontsource/pixelify-sans/700.css";
import "@fontsource/geist-sans/400.css";
import "@fontsource/geist-sans/500.css";
import "@fontsource/geist-sans/700.css";
import "@fontsource/vt323/400.css";

import CRTOverlay from "./components/CRTOverlay";
import Navbar from "./components/Navbar";
import ShortcutsModal from "./components/ShortcutsModal";
import { applyCRTClass, getCRTPreference } from "./lib/crt";
import { applyFontClass, getFontPreference } from "./lib/font";
import { applyLanguageAttr, getLanguagePreference } from "./lib/i18n";
import { applyTheme, getInitialTheme } from "./lib/theme";

import App from "./App";
import Uranium from "./pages/Uranium";
import Insurgence from "./pages/Insurgence";
import Settings from "./pages/Settings";

applyTheme(getInitialTheme());
applyCRTClass(getCRTPreference());
applyFontClass(getFontPreference());
applyLanguageAttr(getLanguagePreference());

if (typeof window !== "undefined") {
    console.log(
        `%c  PokéDex  %c  v${__APP_VERSION__}  `,
        "font: bold 22px 'Pixelify Sans', ui-monospace, monospace; background: #ef4444; color: #ffffff; padding: 6px 4px; letter-spacing: 0.04em;",
        "font: bold 11px ui-monospace, monospace; background: #1a212c; color: #e8eaee; padding: 6px 4px; letter-spacing: 0.2em;"
    );
    console.log(
        "%cInspecting in the wild? https://github.com/infinitel8p/PokeDex",
        "color: #828a9a; font-style: italic;"
    );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <CRTOverlay />
      <ShortcutsModal />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/uranium" element={<Uranium />} />
        <Route path="/insurgence" element={<Insurgence />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
