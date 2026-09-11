import { Webhook, Braces } from "lucide-react";
const tools = [
  { name: "n8n", color: "#EA4B71" },
  { name: "Zapier", color: "#FF4A00" },
  { name: "Make", color: "#6D00CC" },
  { name: "OpenAI", color: "#10A37F" },
  { name: "Google", color: "#EA4335" },
  { name: "Airtable", color: "#FCB400" },
  { name: "HubSpot", color: "#FF7A59" },
  { name: "Stripe", color: "#635BFF" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Gmail", color: "#EA4335" },
  { name: "Google Sheets", color: "#0F9D58" },
  { name: "Asana", color: "#F06A6A" },
  { name: "HighLevel", color: "#FFB84D" },
  { name: "Slack", color: "#4A154B" },
  { name: "Notion", color: "#E8E4DD" },
  { name: "Webhooks", color: "#C46A3A" },
  { name: "APIs", color: "#6B7040" },
];

function Chip({ name }: { name: string; color: string }) {
  return (
    <div className="tool-card pixel-card mx-3 inline-flex shrink-0 items-center gap-3 px-4 py-3">
      {name === "Webhooks" ? (
        <Webhook className="tool-logo" aria-hidden />
      ) : name === "APIs" ? (
        <Braces className="tool-logo" aria-hidden />
      ) : (
        <img
          className="tool-logo"
          src={`/tool-logos/${name === "HighLevel" ? "highlevel.png" : name.toLowerCase().replaceAll(" ", "") + ".svg"}`}
          width={28}
          height={28}
          alt=""
          aria-hidden
        />
      )}
      <span className="text-sm text-cream tracking-wider">{name}</span>
    </div>
  );
}

function Row({ direction }: { direction: "left" | "right" }) {
  return (
    <div className="marquee-row overflow-hidden py-2">
      <div className={`marquee-track flex w-max marquee-${direction}`}>
        {[false, true].map((duplicate) => (
          <div
            className="marquee-group"
            key={String(duplicate)}
            aria-hidden={duplicate || undefined}
          >
            {tools.map((tool) => (
              <Chip key={tool.name} {...tool} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
export function ToolMarquee() {
  return (
    <section
      id="skills"
      aria-label="Tools and platforms"
      className="tool-marquee border-y-2 border-border bg-olive-brown py-16"
    >
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="mb-8 text-sm tracking-widest text-sunset">◆ STACKS I PLUG INTO ◆</p>
      </div>
      <div className="space-y-2">
        <Row direction="left" />
        <Row direction="right" />
      </div>
    </section>
  );
}
