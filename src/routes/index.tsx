import { useEffect, useState } from "react";
import headshot from "@/assets/headshot.png";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { ToolMarquee } from "@/components/ToolMarquee";
import { CalendlyInline } from "@/components/CalendlyInline";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  Workflow,
  Check,
  MessageSquare,
  SlidersHorizontal,
  Bell,
} from "lucide-react";
export const Route = createFileRoute("/")({ component: Home });
function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container nav-row">
          <a className="brand" href="#top">
            <span className="brand-mark">
              <Workflow size={21} />
            </span>
            the tech froi<span className="brand-dot">.</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#projects">Work</a>
            <a href="#about">About</a>
          </nav>
          <a className="button small" href="#contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>
        </div>
      </header>
      <main id="main">
        <Hero />
        <About />
        <ToolMarquee />
        <Services />
        <Projects />
        <Proof />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">
            <span className="status-dot" /> AI AUTOMATION SPECIALIST
          </p>
          <h1>
            Less busywork.
            <br />
            Faster follow-ups.
            <br />
            <span>More room to grow.</span>
          </h1>
          <p className="hero-description">
            I help service businesses capture leads, keep their CRM organized, and follow up faster
            with n8n, GoHighLevel, and practical AI automation.
          </p>
          <div className="button-row">
            <a className="button" href="#contact">
              Let’s automate your workflow <ArrowUpRight size={18} />
            </a>
            <a className="text-link" href="#projects">
              Explore my work <ArrowRight size={17} />
            </a>
          </div>
          <div className="hero-signoff">
            <img className="avatar-mini" src={headshot} alt="" width={34} height={34} />
            <span>
              Froilan Espiritu <span className="muted">/ Philippines · Working remotely</span>
            </span>
          </div>
        </div>
        <WorkflowVisual />
      </div>
    </section>
  );
}
function WorkflowVisual() {
  return (
    <div
      className="workflow-visual"
      aria-label="Illustrative lead workflow: capture an inquiry, qualify the lead, update the CRM, and notify your team"
    >
      <div className="workflow-heading">
        <span>
          <Workflow size={16} /> LEAD HANDLING WORKFLOW
        </span>
        <span className="workflow-label">EXAMPLE FLOW</span>
      </div>
      <div className="flow">
        <div className="flow-node">
          <span className="node-icon">
            <MessageSquare />
          </span>
          <div>
            <strong>New inquiry comes in</strong>
            <small>Website form or Messenger</small>
          </div>
          <Check className="node-check" size={16} />
        </div>
        <span className="connector" />
        <div className="flow-node featured-node">
          <span className="node-icon">
            <SlidersHorizontal />
          </span>
          <div>
            <strong>Qualify & route the lead</strong>
            <small>n8n · Your business rules</small>
          </div>
          <Check className="node-check" size={16} />
        </div>
        <div className="flow-branch">
          <div>
            <span className="connector" />
            <div className="flow-node compact">
              <Workflow size={20} />
              <strong>Update CRM</strong>
              <small>GoHighLevel</small>
            </div>
          </div>
          <div>
            <span className="connector" />
            <div className="flow-node compact">
              <Bell size={20} />
              <strong>Notify your team</strong>
              <small>Slack</small>
            </div>
          </div>
        </div>
      </div>
      <div className="workflow-footer">
        <span className="status-dot" /> A clear next step for every inquiry{" "}
        <ArrowUpRight size={16} />
      </div>
    </div>
  );
}

const services = [
  {
    icon: Workflow,
    title: "Lead capture & CRM automation",
    description:
      "Bring form submissions and inquiries into GoHighLevel, clean up contact data, and keep tags and records consistent.",
    outcome: "Give every lead a clear place to go.",
  },
  {
    icon: SlidersHorizontal,
    title: "AI lead qualification & follow-ups",
    description:
      "Use AI to interpret inquiries, organize key details, and prepare relevant responses, with your criteria and review steps guiding the workflow.",
    outcome: "Spend less time sorting your inbox.",
  },
  {
    icon: MessageSquare,
    title: "Messenger & AI assistants",
    description:
      "Answer common questions using your business information and connect customer conversations to the next step in your process.",
    outcome: "Help customers get answers sooner.",
  },
  {
    icon: ArrowRight,
    title: "APIs & connected operations",
    description:
      "Connect tools that don’t talk to each other. Move the right data between your forms, CRM, spreadsheets, and team notifications.",
    outcome: "Stop entering the same information twice.",
  },
  {
    icon: Bell,
    title: "n8n error monitoring & repairs",
    description:
      "Find fragile steps, add failure notifications, and make errors easier to investigate so issues don’t stay hidden in the background.",
    outcome: "Know when a workflow needs attention.",
  },
  {
    icon: Check,
    title: "Workflow design & handover",
    description:
      "Turn a manual process into a practical workflow, test the important paths, and explain how to use and maintain it.",
    outcome: "Understand the system you’re relying on.",
  },
];
function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / HOW I CAN HELP</p>
            <h2>
              Keep your business moving.
              <br />
              <span className="muted">Cut the repetitive work.</span>
            </h2>
          </div>
          <p>
            For service businesses juggling new inquiries, follow-ups, and too many disconnected
            tools.
          </p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, ...s }) => (
            <article className="service" key={s.title}>
              <div className="service-icon">
                <Icon size={20} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div className="service-outcome">
                <ArrowUpRight size={14} />
                {s.outcome}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function Projects() {
  return (
    <section className="section work-section" id="projects">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / SELECTED WORK</p>
            <h2>
              See the systems
              <br />
              behind the service.
            </h2>
          </div>
          <p>
            Explore the actual workflows, the problems they address, and how the pieces connect.
          </p>
        </div>
        <ProjectCard project={projects[0]} featured />
        <ProjectCard project={projects[1]} featured />
        <div className="additional-work" id="gallery">
          <h3>More ways I connect the dots</h3>
          <p className="muted">Content, operations, and AI workflow projects.</p>
          <div className="project-grid">
            {projects.slice(2).map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function Proof() {
  return (
    <section className="section proof-section">
      <div className="container">
        <p className="eyebrow">PRACTICAL WORK. VISIBLE DETAILS.</p>
        <div className="proof-grid">
          <h2>
            Look inside
            <br />
            the workflow.
          </h2>
          <div>
            <span className="proof-number">01</span>
            <h3>Original workflow screenshots</h3>
            <p>
              Inspect the actual builds. Each project includes its approach and the steps that
              connect the tools.
            </p>
          </div>
          <div>
            <span className="proof-number">02</span>
            <h3>A working GoHighLevel demo</h3>
            <p>
              Trace a lead from the incoming webhook to CRM updates, tags, and team notifications.
              Explore the project repository for a closer look.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="portrait-wrap">
          <img
            src={headshot}
            alt="Froilan Espiritu, AI Automation Specialist"
            width={600}
            height={600}
            loading="lazy"
          />
          <div className="portrait-caption">
            <strong>Froilan Espiritu</strong>
            <span>Philippines · Working remotely</span>
          </div>
        </div>
        <div>
          <p className="eyebrow">03 / THE PERSON BEHIND THE WORKFLOWS</p>
          <h2>
            Hi, I’m Froilan.
            <br />
            <span className="muted">
              I make your tools
              <br />
              work together.
            </span>
          </h2>
          <p className="about-intro">
            I build automation systems that help businesses respond to leads faster, reduce
            repetitive work, and keep their CRM and operations organized.
          </p>
          <p className="muted about-copy">
            My focus is n8n, GoHighLevel, APIs, webhooks, and AI integrations. I enjoy taking a
            process that feels messy or manual and turning it into a system that’s easier to run and
            understand.
          </p>
          <p className="muted about-copy">
            I start with how your business works: where inquiries arrive, what your team does next,
            and which steps keep getting repeated. That’s where we find the right place to automate.
          </p>
          <a className="text-link" href="#contact">
            Tell me about your workflow <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
      <div className="container process">
        <div>
          <span>01 / UNDERSTAND</span>
          <h3>Map the process</h3>
          <p>Walk through your tools, bottlenecks, and the outcome you need.</p>
        </div>
        <div>
          <span>02 / BUILD & TEST</span>
          <h3>Connect the steps</h3>
          <p>Build the workflow and check both the normal path and likely exceptions.</p>
        </div>
        <div>
          <span>03 / HAND OVER</span>
          <h3>Make it usable</h3>
          <p>Explain how it works, what to watch, and how to manage it day to day.</p>
        </div>
      </div>
    </section>
  );
}
const email = "froiiiespiritu04@gmail.com";
function Contact() {
  const [showCal, setShowCal] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [prepared, setPrepared] = useState(false);
  useEffect(() => {
    if (showCal)
      document.getElementById("booking")?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      });
  }, [showCal]);
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">
            <span className="status-dot" /> LET’S TALK AUTOMATION
          </p>
          <h2>
            What’s taking up
            <br />
            too much of
            <br />
            <span>your team’s time?</span>
          </h2>
          <p className="contact-intro">
            Tell me what happens today and what you’d like to work better. We’ll start with a
            practical conversation about the next step.
          </p>
          <button
            className="button"
            type="button"
            aria-expanded={showCal}
            aria-controls="booking"
            onClick={() => setShowCal(!showCal)}
          >
            {showCal ? "Hide booking calendar" : "Book a discovery call"}
            <ArrowUpRight size={17} />
          </button>
          <a className="contact-email" href={`mailto:${email}`}>
            {email}
            <ArrowUpRight size={16} />
          </a>
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/froilan-espiritu-2a79603aa/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={13} />
            </a>
            <a href="https://github.com/froiiiespiritu04-ops" target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={13} />
            </a>
            <a href="tel:+639275143811">+63 927 514 3811</a>
          </div>
        </div>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            const body = `Hi Froilan,\n\n${form.message}\n\nFrom: ${form.name}\nReply to: ${form.email}`;
            window.location.href = `mailto:${email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
            setPrepared(true);
          }}
        >
          <h3>Tell me what you’d like to automate</h3>
          <p>Share the process, the tools you use, and where things slow down.</p>
          <div className="form-row">
            <div>
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                autoComplete="name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                maxLength={200}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@business.com"
              />
            </div>
          </div>
          <label htmlFor="subject">What do you need help with?</label>
          <input
            id="subject"
            required
            maxLength={150}
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            placeholder="e.g. Following up with new leads"
          />
          <label htmlFor="message">Your current workflow</label>
          <textarea
            id="message"
            required
            maxLength={3000}
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Our leads arrive through… Then we manually…"
          />
          <button className="button" type="submit">
            Prepare email <ArrowUpRight size={16} />
          </button>
          <p className="form-note" role="status">
            {prepared
              ? "Your email draft is ready to open in your email app. Review and send it there. If nothing opened, email me directly using the address beside this form."
              : "Opens a draft in your email app. You review and send it there."}
          </p>
        </form>
      </div>
      <div className="container" id="booking">
        {showCal && (
          <div className="booking-panel">
            <h3>Choose a time to talk</h3>
            <p className="muted">
              If the calendar doesn’t load,{" "}
              <a
                className="text-link"
                href="https://calendly.com/froiiiespiritu04/new-meeting"
                target="_blank"
                rel="noreferrer"
              >
                open the booking page <ArrowUpRight size={14} />
              </a>
              .
            </p>
            <CalendlyInline />
          </div>
        )}
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="container footer">
      <a className="brand" href="#top">
        <Workflow size={19} /> the tech froi<span className="brand-dot">.</span>
      </a>
      <span>© {new Date().getFullYear()} Froilan Espiritu</span>
      <a href="#top" className="text-link">
        Back to top ↑
      </a>
    </footer>
  );
}
