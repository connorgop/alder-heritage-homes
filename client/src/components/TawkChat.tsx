/* ============================================================
   TAWK.TO LIVE CHAT WIDGET — Alder Heritage Homes
   ============================================================
   TO ACTIVATE:
   1. Sign up free at https://www.tawk.to
   2. Go to Administration → Chat Widget → Direct Chat Link
   3. Copy your Property ID (e.g. "64abc123def456789abc1234")
   4. Replace TAWK_PROPERTY_ID below with your real ID
   5. Replace TAWK_WIDGET_ID below (usually "default" or "1abc2def3")
   ============================================================ */
import { useEffect } from "react";

// ⬇️ REPLACE THESE with your real tawk.to IDs after signup
const TAWK_PROPERTY_ID = "YOUR_PROPERTY_ID";
const TAWK_WIDGET_ID = "default";

declare global {
  interface Window {
    Tawk_API?: {
      customStyle?: object;
      onLoad?: () => void;
    };
    Tawk_LoadStart?: Date;
  }
}

export default function TawkChat() {
  useEffect(() => {
    // Don't load if placeholder ID hasn't been replaced yet
    if (TAWK_PROPERTY_ID === "YOUR_PROPERTY_ID") return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Customize the widget to match brand colors
    window.Tawk_API.customStyle = {
      zIndex: 999,
    };

    // Set a custom greeting when widget loads
    window.Tawk_API.onLoad = function () {
      if (window.Tawk_API) {
        // Widget loaded successfully
      }
    };

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector(
        `script[src*="embed.tawk.to"]`
      );
      if (existingScript) existingScript.remove();
    };
  }, []);

  return null;
}
