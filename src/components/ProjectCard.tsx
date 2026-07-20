import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";

export interface ProjectStat {
  label: string;
  value: string;
  sub?: string;
  icon: string;
}

export interface Project {
  title: string;
  summary: string;
  screenshot: string;
  tech: string[];
  problem: string;
  solution: string;
  steps: string[];
  skills: string[];
  stats: {
    modules: string;
    apps: string;
    type: string;
    difficulty: string;
    status: string;
    builtWith: string;
  };
  impact: {
    timeSaved: string;
    operationalImpact: string;
    apps: { count: string; names: string };
    complexity: string;
    complexitySub?: string;
  };
}

export function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState(false);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <>
      <article
        onClick={() => !expanded && setExpanded(true)}
        className={`pixel-card pixel-card-hover cursor-pointer transition-all duration-300 ${
          expanded ? "scale-[1.01] shadow-[8px_8px_0_0_rgba(0,0,0,0.5)]" : ""
        }`}
      >
        {/* Screenshot */}
        <div
          className="group relative overflow-hidden border-b-2 border-border bg-input-bg"
          onClick={(e) => {
            e.stopPropagation();
            setLightbox(true);
          }}
        >
          <img
            src={project.screenshot}
            alt={`${project.title} workflow screenshot`}
            loading="lazy"
            className="w-full transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
            <span className="pixel-card px-4 py-2 text-xs text-cream">
              <ZoomIn className="mr-2 inline h-4 w-4" />
              Click to enlarge
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-4 p-6">
          <h3 className="text-lg text-cream">{project.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="border border-sunset/60 bg-input-bg px-2 py-1 text-[10px] tracking-wider text-beige"
              >
                {t}
              </span>
            ))}
          </div>

          {!expanded && (
            <p className="pt-2 text-xs tracking-wider text-sunset">
              ▼ Click card to expand
            </p>
          )}

          {expanded && (
            <div className="space-y-6 border-t-2 border-border pt-6">
              {/* Overview */}
              <Section title="▼ Overview">
                <p>
                  <span className="text-sunset">Problem:</span> {project.problem}
                </p>
                <p className="mt-2">
                  <span className="text-sunset">Solution:</span> {project.solution}
                </p>
              </Section>

              {/* Impact */}
              <div>
                <h4 className="mb-3 text-sm tracking-wider text-sunset">
                  ▼ Project Impact
                </h4>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <ImpactCard
                    icon="⏱"
                    label="Time Saved Weekly"
                    value={project.impact.timeSaved}
                    sub="Estimated based on replacing repetitive manual tasks."
                  />
                  <ImpactCard
                    icon="📈"
                    label="Operational Impact"
                    value={project.impact.operationalImpact}
                  />
                  <ImpactCard
                    icon="🔗"
                    label="Apps Connected"
                    value={project.impact.apps.count}
                    sub={project.impact.apps.names}
                  />
                  <ImpactCard
                    icon="⚙"
                    label="Workflow Complexity"
                    value={project.impact.complexity}
                    sub={project.impact.complexitySub}
                  />
                </div>
              </div>

              {/* How it works */}
              <Section title="▼ Workflow Explanation">
                <ol className="space-y-2">
                  {project.steps.map((s, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="shrink-0 text-sunset">{String(i + 1).padStart(2, "0")}.</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </Section>

              {/* Skills */}
              <Section title="▼ Skills Demonstrated">
                <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                  {project.skills.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span className="text-olive-accent">✔</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Stats */}
              <Section title="▼ Project Stats">
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                  <StatRow k="Modules" v={project.stats.modules} />
                  <StatRow k="Apps Connected" v={project.stats.apps} />
                  <StatRow k="Automation Type" v={project.stats.type} />
                  <StatRow k="Difficulty" v={project.stats.difficulty} />
                  <StatRow k="Status" v={project.stats.status} />
                  <StatRow k="Built With" v={project.stats.builtWith} />
                </dl>
              </Section>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setExpanded(false);
                }}
                className="pixel-btn-outline w-full"
              >
                ▲ Collapse
              </button>
            </div>
          )}
        </div>
      </article>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(false)}
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 pixel-btn-outline !p-3"
            onClick={() => setLightbox(false)}
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={project.screenshot}
            alt={project.title}
            className="max-h-[90vh] max-w-[95vw] border-2 border-sunset"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-2 text-sm tracking-wider text-sunset">{title}</h4>
      <div className="text-sm leading-relaxed text-beige">{children}</div>
    </div>
  );
}

function StatRow({ k, v }: { k: string; v: string }) {
  return (
    <>
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="text-cream">{v}</dd>
    </>
  );
}

function ImpactCard({
  icon,
  label,
  value,
  sub,
}: {
  icon: string;
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="pixel-card pixel-card-hover rounded-md p-4">
      <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
        <span className="text-base">{icon}</span>
        <span className="tracking-wider">{label}</span>
      </div>
      <p className="text-base leading-tight text-sunset">{value}</p>
      {sub && <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}
