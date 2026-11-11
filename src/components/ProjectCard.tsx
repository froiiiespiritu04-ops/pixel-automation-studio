import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
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
  return (
    <article className={`project-card ${featured ? "project-featured" : ""}`}>
      <div className="project-image">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="workflowImage" size="portfolio" aria-label={`Enlarge ${project.title} workflow`}>
              <img
                src={project.screenshot}
                alt={`${project.title}: original automation workflow`}
                loading="lazy"
                width={1200}
                height={675}
              />
              <span className="zoom-label">
                <ZoomIn size={14} /> View workflow screenshot
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent className="workflow-dialog">
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription>
              Original screenshot from a demonstration workflow.
            </DialogDescription>
            <img src={project.screenshot} alt={`${project.title} enlarged workflow`} />
          </DialogContent>
        </Dialog>
      </div>
      <div className="project-body">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {project.note && <p className="project-note">{project.note}</p>}
        <div className="project-outcome">
          <span>THE BUSINESS BENEFITS</span>
          {project.benefits ? <ul className="benefit-list">{project.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul> : <p>{project.outcome}</p>}
        </div>
        <details>
          <summary>
            Explore the solution <ArrowUpRight size={16} />
          </summary>
          <div className="case-study">
            <h4>The business challenge</h4>
            <p>{project.problem}</p>
            <h4>What I built</h4>
            <p>{project.solution}</p>
            <h4>How it works</h4>
            <ol>
              {project.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <h4>Tools and integrations</h4>
            <div className="tags">{project.tech.map((tool) => <span key={tool}>{tool}</span>)}</div>
          </div>
        </details>
      </div>
      {project.videoUrl && <ProjectDemo project={project} />}
    </article>
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
