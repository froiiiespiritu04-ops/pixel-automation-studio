import { ArrowUpRight, ZoomIn } from "lucide-react";
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

function youtubeEmbedUrl(url: string) {
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
    if (!/^[A-Za-z0-9_-]{6,}$/.test(id)) return null;
    return `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;
  } catch {
    return null;
  }
}

function ProjectDemo({ project }: { project: Project }) {
  const embed = youtubeEmbedUrl(project.videoUrl ?? "");
  if (!embed) return null;
  return (
    <div className="project-demo">
      <h4 className="demo-title">Watch the Project Demo</h4>
      <p className="demo-note">Plays right here — no need to leave the page.</p>
      <div className="video-frame">
        <iframe
          src={embed}
          title={`${project.title} demo video`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
