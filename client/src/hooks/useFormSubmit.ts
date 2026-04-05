/* ============================================================
   useFormSubmit — Alder Heritage Homes
   Posts form data to Formspree → connor@primeinvestpartners.com
   Also fires ntfy.sh push notification to Connor's phone.

   NTFY SETUP (free, 2 min):
   1. Download "ntfy" app (iOS or Android)
   2. Subscribe to topic: alder-heritage-leads-cv2026
   3. Every lead will instantly push to your phone
   ============================================================ */

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdaplywz";
const NTFY_TOPIC = "alder-heritage-leads-cv2026";

type FormState = "idle" | "submitting" | "success" | "error";

export function useFormSubmit() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(data: Record<string, string>) {
    setState("submitting");
    setErrorMessage("");

    const name = data.name || data.phone || "Unknown";
    const address = data.address || "No address given";
    const phone = data.phone || "No phone";
    const source = data._source || "Website";
    const situation = data.situation ? ` | ${data.situation}` : "";
    const timeline = data.timeline ? ` | Timeline: ${data.timeline}` : "";
    const notifBody = `📍 ${address}\n📞 ${phone}${situation}${timeline}\n📌 Source: ${source}`;

    // Fire Formspree (email) and ntfy.sh (push) in parallel
    const [formResult] = await Promise.allSettled([
      fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `🏠 New Lead — ${name} | ${address}`,
          _replyto: data.email || "",
        }),
      }),
      // Push notification to Connor's phone via ntfy app
      fetch(`https://ntfy.sh/${NTFY_TOPIC}`, {
        method: "POST",
        headers: {
          "Title": `🏠 New Lead — ${name}`,
          "Priority": "urgent",
          "Tags": "house,bell,rotating_light",
          "Content-Type": "text/plain",
        },
        body: notifBody,
      }).catch(() => null),
    ]);

    try {
      if (formResult.status === "fulfilled" && formResult.value.ok) {
        setState("success");
      } else if (formResult.status === "fulfilled") {
        const json = await formResult.value.json().catch(() => ({}));
        setErrorMessage(
          (json as { error?: string }).error ||
            "Something went wrong. Please call us at (559) 281-8016."
        );
        setState("error");
      } else {
        setErrorMessage("Network error. Please call us directly at (559) 281-8016.");
        setState("error");
      }
    } catch {
      setErrorMessage("Network error. Please call us directly at (559) 281-8016.");
      setState("error");
    }
  }

  function reset() {
    setState("idle");
    setErrorMessage("");
  }

  return { state, errorMessage, submit, reset };
}
