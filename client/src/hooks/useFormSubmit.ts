/* ============================================================
   useFormSubmit — Alder Heritage Homes
   Posts form data to Formspree → connor@primeinvestpartners.com
   Form ID: xdaplywz
   ============================================================ */

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdaplywz";

type FormState = "idle" | "submitting" | "success" | "error";

export function useFormSubmit() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function submit(data: Record<string, string>) {
    setState("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: `🏠 New Cash Offer Request — ${data.name || "Unknown"} | ${data.address || "No address"}`,
          _replyto: data.email || "",
        }),
      });

      if (response.ok) {
        setState("success");
      } else {
        const json = await response.json().catch(() => ({}));
        setErrorMessage(
          (json as { error?: string }).error ||
            "Something went wrong. Please call us at (559) 281-8016."
        );
        setState("error");
      }
    } catch {
      setErrorMessage(
        "Network error. Please call us directly at (559) 281-8016."
      );
      setState("error");
    }
  }

  function reset() {
    setState("idle");
    setErrorMessage("");
  }

  return { state, errorMessage, submit, reset };
}
