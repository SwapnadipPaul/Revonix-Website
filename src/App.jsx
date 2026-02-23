/**
 * APP COMPONENT
 * =============
 * The root component. Sets up page routing and
 * renders the animated background on every page.
 *
 * PAGES:
 *   /            → Home page (hero, event details, challenge cards)
 *   /event       → Event details (objectives, rules, schedule)
 *   /register    → Registration (fees, QR code, contact)
 *
 * To add a new page:
 *   1. Create a file in src/pages/
 *   2. Import it here
 *   3. Add a <Route path="/your-path" element={<YourPage />} />
 *   4. Add a link in src/components/Navbar.jsx
 */

import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import HomePage from "./pages/HomePage.jsx";
import EventPage from "./pages/EventPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";

function App() {
  return (
    /* Relative positioning context for the fixed background */
    <div className="relative min-h-screen">
      {/* ── ANIMATED BACKGROUND ─────────────────────────────────────
          Rendered once here so it appears on ALL pages.
          To change the background style, open:
            src/components/AnimatedBackground.jsx
          and edit the BACKGROUND_CONFIG object at the top.
      ──────────────────────────────────────────────────────────── */}
      <AnimatedBackground />

      {/* Scroll to top on every route change */}
      <ScrollToTop />

      {/* ── VERCEL ANALYTICS ────────────────────────────────────────
          Tracks page views and user interactions.
      ──────────────────────────────────────────────────────────── */}
      <Analytics />

      {/* ── MAIN CONTENT ────────────────────────────────────────────
          z-10 ensures content appears above the background canvas.
      ──────────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky navigation bar */}
        <Navbar />

        {/* Page content — routes decide which page renders */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/event" element={<EventPage />} />
            <Route path="/register" element={<RegistrationPage />} />
          </Routes>
        </main>

        {/* Footer — appears on every page */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
