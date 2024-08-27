import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";

import App from "./App";
import Uranium from './pages/Uranium';
import Insurgence from "./pages/Insurgence";
import Settings from "./pages/Settings";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/uranium" element={<Uranium />} />
        <Route path="/insurgence" element={<Insurgence />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);