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
    <section id="book" className="border-b-2 border-border py-20">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal>
          <p className="mb-3 text-center text-xs tracking-[0.3em] text-sunset">
            ◆ BOOK A CALL ◆
          </p>
          <h2 className="mb-4 text-center text-2xl text-cream md:text-3xl">
            Free discovery call
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-loose text-beige">
            Pick a time that works for you. We'll map out the manual work eating
            your week and where automation fits.
          </p>
        </Reveal>

        <Reveal>
          <div
            className="p-2"
            style={{
              backgroundColor: "#38281d",
              border: "3px solid #c46a3a",
              boxShadow: "6px 6px 0 0 rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="calendly-inline-widget"
              data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=2b2418&text_color=f0e0cc&primary_color=e88a4a`}
              style={{ minWidth: "280px", height: "700px" }}
            />
          </div>
          <div className="mt-6 text-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn"
            >
              Open in Calendly
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
