import { useEffect } from "react";
import { Reveal } from "@/components/Reveal";

const CALENDLY_URL = "https://calendly.com/froiiiespiritu04/new-meeting";

export function BookCall() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <section id="book" className="border-b-2 border-border py-10 md:py-12">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="mb-4 flex flex-col items-center gap-1">
            <p className="text-[10px] tracking-[0.28em] text-sunset">
              ◆ BOOK A CALL ◆
            </p>
            <h2 className="text-xl text-cream md:text-2xl">
              Free discovery call
            </h2>
            <p className="max-w-2xl text-center text-xs leading-relaxed text-beige">
              Pick a time that works for you. We'll map out the manual work
              eating your week and where automation fits.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="p-1.5"
            style={{
              backgroundColor: "#38281d",
              border: "3px solid #c46a3a",
              boxShadow: "6px 6px 0 0 rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="calendly-inline-widget"
              data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&hide_landing_page_details=1&hide_event_type_details=1&background_color=2b2418&text_color=f0e0cc&primary_color=e88a4a`}
              style={{
                minWidth: "280px",
                height: "clamp(520px, calc(100vh - 230px), 640px)",
              }}
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn !py-2 !px-4 !text-xs"
            >
              Open in Calendly
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
