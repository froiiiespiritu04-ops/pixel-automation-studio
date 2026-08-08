import { useEffect, useRef } from "react";

const CALENDLY_URL =
  "https://calendly.com/froiiiespiritu04/new-meeting" +
  "?hide_landing_page_details=1&hide_event_type_details=1&hide_gdpr_banner=1" +
  "&background_color=38281d&text_color=f0e0cc&primary_color=c96f39";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export function CalendlyInline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const SRC = "https://assets.calendly.com/assets/external/widget.js";

    const init = () => {
      if (ref.current && window.Calendly && ref.current.childElementCount === 0) {
        window.Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: ref.current });
      }
    };

    if (window.Calendly) {
      init();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", init);
    return () => script?.removeEventListener("load", init);
  }, []);

  return (
    <div className="mt-6 border-2 border-border bg-[#38281d] p-2">
      <div
        ref={ref}
        className="w-full"
        style={{ minWidth: "280px", height: "clamp(560px, 70vh, 700px)" }}
      />
    </div>
  );
}
