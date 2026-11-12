import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Play, X, ZoomIn } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
export interface Project {
  title: string;
  summary: string;
  screenshot: string;
  tech: string[];
  problem: string;
  solution: string;
  steps: string[];
  outcome: string;
  category: string;
  source?: string;
  benefits?: string[];
  note?: string;
  videoUrl?: string;
  videoPoster?: string;
}
export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`project-card ${featured ? "project-featured" : ""}`}>
      <div className="project-image">
        <Button variant="workflowImage" size="portfolio" onClick={() => setOpen(true)} aria-label={`Open the ${project.title} case study`}>
          <img src={project.screenshot} alt={`${project.title}: original automation workflow`} loading="lazy" width={1200} height={675} />
          <span className="zoom-label"><ZoomIn size={14} /> Open case study</span>
        </Button>
      </div>
      <div className="project-body">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {project.note && <p className="project-note">{project.note}</p>}
        <div className="project-outcome">
          <span>THE BUSINESS BENEFITS</span>
          {project.benefits ? <ul className="benefit-list">{project.benefits.map((b) => <li key={b}>{b}</li>)}</ul> : <p>{project.outcome}</p>}
        </div>
        <Button variant="portfolioOutline" size="portfolio" onClick={() => setOpen(true)}>
          Explore the case study <ArrowUpRight size={16} />
        </Button>
      </div>
      <CaseStudyModal project={project} open={open} onOpenChange={setOpen} />
    </article>
  );
}

function CaseStudyModal({ project, open, onOpenChange }: { project: Project; open: boolean; onOpenChange: (o: boolean) => void }) {
  const detailsRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(false);
  const results = project.benefits ?? [project.outcome];
  const explore = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    detailsRef.current?.scrollIntoView({ behavior: reduce ? "instant" : "smooth", block: "start" });
  };
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="cs-overlay" />
        <DialogPrimitive.Content className="cs-modal">
          <DialogPrimitive.Close className="cs-close" aria-label="Close case study"><X size={18} /></DialogPrimitive.Close>
          <div className="cs-scroll">
            <div className="cs-hero">
              <button type="button" className="cs-image" onClick={() => setZoom(true)} aria-label={`Zoom into the ${project.title} screenshot`}>
                <img src={project.screenshot} alt={`${project.title} project showcase`} width={1200} height={675} />
                <span className="zoom-label"><ZoomIn size={14} /> Click to zoom</span>
              </button>
              <div className="cs-intro">
                <p className="eyebrow">{project.category}</p>
                <DialogPrimitive.Title className="cs-title">{project.title}</DialogPrimitive.Title>
                <DialogPrimitive.Description className="cs-overview">{project.summary}</DialogPrimitive.Description>
                {project.note && <p className="project-note">{project.note}</p>}
                <h4 className="cs-label">Key business benefits</h4>
                <ul className="benefit-list">{results.map((b) => <li key={b}>{b}</li>)}</ul>
                <Button variant="portfolio" size="portfolio" onClick={explore}>Explore the solution <ArrowDown size={16} /></Button>
              </div>
            </div>
            {project.videoUrl && <ProjectDemo project={project} />}
            <div className="cs-details" ref={detailsRef}>
              <section className="cs-block">
                <p className="cs-num">01</p><h4>The Challenge</h4><p>{project.problem}</p>
              </section>
              <section className="cs-block">
                <p className="cs-num">02</p><h4>The Solution</h4><p>{project.solution}</p>
                <div className="tags">{project.tech.map((t) => <span key={t}>{t}</span>)}</div>
              </section>
              <section className="cs-block">
                <p className="cs-num">03</p><h4>Customer Journey</h4>
                <ol className="cs-flow">
                  {project.steps.map((s, i) => (
                    <li key={s}><span className="cs-step-num">{i + 1}</span><span>{s}</span>{i < project.steps.length - 1 && <ArrowDown className="cs-arrow" size={16} aria-hidden="true" />}</li>
                  ))}
                </ol>
              </section>
              <section className="cs-block">
                <p className="cs-num">04</p><h4>The Results</h4>
                <p>{project.outcome}</p>
                <ul className="cs-results">{results.map((b) => <li key={b}><Check size={15} /> {b}</li>)}</ul>
              </section>
            </div>
          </div>
          <Dialog open={zoom} onOpenChange={setZoom}>
            <DialogContent className="workflow-dialog">
              <DialogTitle>{project.title}</DialogTitle>
              <DialogDescription>Original screenshot from a demonstration workflow.</DialogDescription>
              <img src={project.screenshot} alt={`${project.title} enlarged workflow`} />
            </DialogContent>
          </Dialog>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

function youtubeVideoId(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    const id =
      host === "youtu.be"
        ? parsed.pathname.slice(1)
        : host === "youtube.com" || host === "youtube-nocookie.com"
          ? parsed.pathname === "/watch"
            ? (parsed.searchParams.get("v") ?? "")
            : (parsed.pathname.split("/").filter(Boolean)[1] ?? "")
          : "";
    return /^[A-Za-z0-9_-]{6,}$/.test(id) ? id : "";
  } catch {
    return "";
  }
}

function ProjectDemo({ project }: { project: Project }) {
  const id = youtubeVideoId(project.videoUrl ?? "");
  const [open, setOpen] = useState(false);
  const previewRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpened = useRef(false);

  useEffect(() => {
    if (open) {
      wasOpened.current = true;
      closeRef.current?.focus();
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
    if (wasOpened.current) previewRef.current?.focus();
  }, [open]);

  if (!id) return null;
  const poster =
    project.videoPoster ?? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

  return (
    <div className="project-demo">
      <h4 className="demo-title">Watch the Project Demo</h4>
      <p className="demo-note">
        {open
          ? "Playing right here. Close it with the X to go back to the preview."
          : "Press play to watch it right here — no need to leave the page."}
      </p>
      {open ? (
        <div className="video-frame video-reveal">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&autoplay=1`}
            title={`${project.title} demo video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <button
            type="button"
            className="video-close"
            onClick={() => setOpen(false)}
            aria-label="Close the project demo video"
            ref={closeRef}
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          className="video-preview"
          onClick={() => setOpen(true)}
          aria-label={`Play the ${project.title} demo video`}
          ref={previewRef}
        >
          <img
            src={poster}
            alt={`${project.title} demo video preview`}
            width={1280}
            height={720}
            loading="lazy"
          />
          <span className="video-preview-shade" aria-hidden="true" />
          <span className="video-play" aria-hidden="true">
            <Play size={20} fill="currentColor" />
          </span>
          <span className="video-preview-label">Play demo</span>
        </button>
      )}
    </div>
  );
}
