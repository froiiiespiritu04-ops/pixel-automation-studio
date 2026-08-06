import { useEffect } from "react";
import { Reveal } from "@/components/Reveal";
import officeBg from "@/assets/booking-office.png";

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
    <section
      id="book"
      className="relative overflow-hidden border-b-2 border-border py-12 md:py-16"
    >
      {/* pixel-art office backdrop */}
      <img
        src={officeBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={1088}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />
      {/* soft dark overlay + smooth top/bottom blend into the page */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #2b2418 0%, rgba(43,36,24,0.78) 22%, rgba(43,36,24,0.7) 78%, #2b2418 100%)",
        }}
      />
      {/* lamp glow */}
      <div
        className="pointer-events-none absolute -top-16 left-[calc(50%-8rem)] h-64 w-64 rounded-full lamp-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(232,138,74,0.28) 0%, rgba(232,138,74,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4">
        <Reveal>
          <div className="mb-5 flex flex-col items-center gap-1">
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
            className="rounded-md p-2 backdrop-blur-[2px]"
            style={{
              backgroundColor: "rgba(56,40,29,0.92)",
              border: "3px solid #c46a3a",
              boxShadow:
                "6px 6px 0 0 rgba(0,0,0,0.45), 0 0 40px rgba(232,138,74,0.12)",
            }}
          >
            <div
              className="calendly-inline-widget overflow-hidden rounded-sm"
              data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&hide_landing_page_details=1&hide_event_type_details=1&background_color=38281d&text_color=f0e0cc&primary_color=c96f39`}
              style={{
                minWidth: "280px",
                height: "clamp(520px, calc(100vh - 230px), 640px)",
              }}
            />
          </div>
          <div className="mt-5 text-center">
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
