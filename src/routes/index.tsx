import { useEffect, useState } from "react";
import headshot from "@/assets/headshot.png";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { BusinessProblems, BusinessBenefits, WorkingProcess } from "@/components/BusinessSections";
import { CalendlyInline } from "@/components/CalendlyInline";
import { ToolMarquee } from "@/components/ToolMarquee";
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
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "The WorkFroi | Business Automation with Froilan Espiritu" },
    { name: "description", content: "Save time and simplify your operations with Froilan Espiritu. Business automation for lead management, customer communication, bookings, and organized CRMs." },
    { property: "og:title", content: "The WorkFroi | Smarter Business Automation" },
    { property: "og:description", content: "Less manual work. Faster growth. Smarter business. Practical automation solutions for service businesses, agencies, clinics, and salons." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Home,
});
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
              <img
                className="brand-logo"
                src="/favicon.png"
                alt=""
                width={33}
                height={33}
                decoding="async"
              />
            </span>
            The WorkFroi
          </a>
          <nav aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#projects">Work</a>
          </nav>
          <a className="button small" href="#contact">
            Let’s talk <ArrowUpRight size={16} />
          </a>
        </div>
      </header>
      <main id="main">
        <Hero />
        <BusinessProblems />
        <Services />
        <ToolMarquee />
        <Projects />
        <BusinessBenefits />
        <WorkingProcess />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
function Hero() {
  return (
    <section className="hero" id="about">
      <div className="container introduction-grid">
        <div className="introduction-photo">
          <img src={headshot} alt="Froilan Espiritu, AI Automation Specialist" width={600} height={600} fetchPriority="high" />
          <p className="intro-name">Hi, I’m Froilan Espiritu.</p>
          <p className="muted intro-location">Philippines · Working remotely</p>
        </div>
        <div className="introduction-copy">
          <p className="eyebrow professional-identity">AI Automation Specialist | Business Process Automation | GoHighLevel &amp; n8n</p>
          <h1>Less Manual Work.<br />Faster Growth.<br /><span>Smarter Business.</span></h1>
          <p className="hero-description">I help businesses automate lead management, customer communication, appointment bookings, and repetitive tasks so they can save time and focus on growing.</p>
          <p className="muted intro-description">From missed inquiries to disorganized CRMs, I build practical automation systems that connect your tools, simplify operations, and help your business run more efficiently.</p>
          <div className="button-row">
            <Button asChild variant="portfolio" size="portfolio"><a href="#contact">Let's Automate Your Business <ArrowUpRight size={18} /></a></Button>
            <Button asChild variant="portfolioLink" size="portfolio"><a href="#solutions">See How I Help Businesses <ArrowRight size={17} /></a></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: MessageSquare, title: "AI Chat & Booking Assistants", description: "Help customers get answers and reach the right booking step without leaving your team to handle every routine inquiry.", outcome: "Faster answers. Easier appointment inquiries." },
  { icon: Bell, title: "Lead Capture & Follow-Up Automation", description: "Capture inquiries, organize new leads, and connect follow-up steps so promising opportunities don't get lost in a busy inbox.", outcome: "Keep the next step clear for every lead." },
  { icon: SlidersHorizontal, title: "GoHighLevel CRM Setup & Automation", description: "Bring scattered customer information into an organized CRM, with consistent records, tags, and inquiry routing.", outcome: "Less manual CRM management." },
  { icon: Workflow, title: "n8n Workflow Automation", description: "Turn repeated tasks into connected workflows, with checks and notifications that make exceptions easier to handle.", outcome: "Spend less time repeating the same steps." },
  { icon: ArrowRight, title: "API & Webhook Integrations", description: "Connect business tools so the right information moves between your forms, CRM, spreadsheets, and team.", outcome: "Stop entering the same information twice." },
  { icon: Check, title: "Business Process Automation", description: "Simplify administrative work and handoffs with a process built around how your business actually runs.", outcome: "Give your team more time for important work." },
];
function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / SERVICES</p>
            <h2>
              Here's What I Can Automate for You.
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
            <p className="eyebrow">03 / AUTOMATION CASE STUDIES</p>
            <h2>
              Business Challenges.<br />Practical Solutions.
            </h2>
          </div>
          <p>
            Demonstration projects showing what I can build—not client engagements or measured performance claims.
          </p>
        </div>
        {projects.slice(5).map(project => <ProjectCard key={project.title} project={project} featured />)}
        <ProjectCard project={projects[0]} featured />
        <ProjectCard project={projects[4]} featured />
        <div className="additional-work" id="gallery">
          <h3>More Business Processes, Connected</h3>
          <p className="muted">Customer communication, content, and connected operations.</p>
          <div className="project-grid">
            {projects.slice(1, 4).map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
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
            <span className="status-dot" /> 06 / LET’S WORK TOGETHER
          </p>
          <h2>
            How Much Time Is Your Business Losing to <span>Manual Work?</span>
          </h2>
          <p className="contact-intro">
            Let's identify the repetitive tasks slowing down your business and find opportunities to automate them. You don't need more complicated software. You need systems that work together.
          </p>
          <Button asChild variant="portfolio" size="portfolio"><a href="#name">Let's Discuss Your Business <ArrowUpRight size={17} /></a></Button>
          <p className="contact-secondary">Tell me what's taking up your time. I'll help you identify what can be automated.</p>
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
          <h3>Let’s Discuss Your Business</h3>
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
          <div className="contact-actions">
            <Button variant="portfolio" size="portfolio" type="submit">Prepare email <ArrowUpRight size={16} /></Button>
            <Button variant="portfolioOutline" size="portfolio" type="button" aria-expanded={showCal} aria-controls="booking" onClick={() => setShowCal(!showCal)}>{showCal ? "Hide booking calendar" : "Book a discovery call"}<ArrowUpRight size={16} /></Button>
          </div>
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
        <Workflow size={19} /> The WorkFroi
      </a>
      <span>© {new Date().getFullYear()} Froilan Espiritu</span>
      <a href="#top" className="text-link">
        Back to top ↑
      </a>
    </footer>
  );
}
