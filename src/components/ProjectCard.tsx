import { ArrowUpRight, ZoomIn } from "lucide-react";
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
            <button className="image-button" aria-label={`Enlarge ${project.title} workflow`}>
              <img
                src={project.screenshot}
                alt={`${project.title}: original automation workflow`}
                loading="lazy"
                width={1200}
                height={675}
              />
              <span className="zoom-label">
                <ZoomIn size={14} /> View workflow
              </span>
            </button>
          </DialogTrigger>
          <DialogContent className="workflow-dialog">
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription>
              Original workflow screenshot. Open the full image for a closer look.
            </DialogDescription>
            <a href={project.screenshot} target="_blank" rel="noreferrer">
              <img src={project.screenshot} alt={`${project.title} enlarged workflow`} />
            </a>
          </DialogContent>
        </Dialog>
      </div>
      <div className="project-body">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tags">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="project-outcome">
          <span>WHAT IT CHANGES</span>
          <p>{project.outcome}</p>
        </div>
        <details>
          <summary>
            Explore the workflow <ArrowUpRight size={16} />
          </summary>
          <div className="case-study">
            <h4>The problem</h4>
            <p>{project.problem}</p>
            <h4>The approach</h4>
            <p>{project.solution}</p>
            <h4>How it works</h4>
            <ol>
              {project.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            {project.source && (
              <a className="text-link" href={project.source} target="_blank" rel="noreferrer">
                View project on GitHub <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </details>
      </div>
    </article>
  );
}
