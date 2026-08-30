import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

import heroImg from "@/assets/hero-rooftop.png";
import headshot from "@/assets/headshot.png";
import zapierShot from "@/assets/zapier-ai-content.png";
import makeShot from "@/assets/make-asana-xero.png";
import fbShot from "@/assets/facebook-ai-agent.png";
import jobShot from "@/assets/job-application-ai.png";
import ghlShot from "@/assets/ghl-n8n-leads.png";

import { ToolMarquee } from "@/components/ToolMarquee";
import { ProjectCard, type Project } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { CalendlyInline } from "@/components/CalendlyInline";




export const Route = createFileRoute("/")({
  component: Home,
});

const projects: Project[] = [
  {
    title: "AI Content Repurposing Automation",
    summary:
      "Turns a single uploaded audio/video into a transcription, an AI-generated blog post, and multi-platform social posts pushed to Facebook and LinkedIn — automatically.",
    screenshot: zapierShot,
    tech: ["Zapier", "OpenAI", "Google Drive", "Facebook Pages", "LinkedIn"],
    problem:
      "Content creators spend hours manually transcribing, writing blog posts, and reformatting the same content for each social platform.",
    solution:
      "A Zapier workflow watches a Google Drive folder, transcribes new files with AI, generates blog + social copy, then splits into paths that publish to Facebook Pages and LinkedIn simultaneously.",
    steps: [
      "New File in Google Drive triggers the Zap.",
      "Filter conditions check the file type and folder before continuing.",
      "AI by Zapier generates a transcription from the source file.",
      "AI by Zapier writes tailored blog & social posts from the transcription.",
      "Looping by Zapier creates line items so each generated post is handled individually.",
      "Split into Paths sends each post down Path A or Path B based on platform.",
      "Path A publishes to Facebook Pages via Create Page Post.",
      "Path B publishes to LinkedIn via Create Share Update.",
    ],
    skills: [
      "AI Automation",
      "Multi-path Workflows",
      "Content Repurposing",
      "Conditional Logic",
      "API Integrations",
    ],
    stats: {
      modules: "10 steps",
      apps: "5",
      type: "AI + Content Publishing",
      difficulty: "Intermediate",
      status: "Live",
      builtWith: "Zapier",
    },
    impact: {
      timeSaved: "5–8 hrs/week",
      operationalImpact: "Streamlined Content Publishing",
      apps: {
        count: "5 Apps",
        names: "Zapier • Google Drive • OpenAI • Facebook • LinkedIn",
      },
      complexity: "Intermediate",
      complexitySub: "Automation Steps: 10",
    },
  },
  {
    title: "Asana → Xero Automation",
    summary:
      "Syncs completed Asana tasks with Xero, logs everything to Google Sheets, and generates a summary report back into Asana as an attachment.",
    screenshot: makeShot,
    tech: ["Make.com", "Asana", "Xero", "Google Sheets"],
    problem:
      "Finance teams manually copy completed project tasks into invoicing tools and spreadsheets, then re-generate summary reports for project managers.",
    solution:
      "A Make.com scenario watches completed Asana tasks, calls Xero, then routes into two branches — one iterates each item into Google Sheets, the other aggregates the range into a text report uploaded back to Asana.",
    steps: [
      "Asana module watches for completed tasks.",
      "Xero — Make an API Call fires against the newly completed task.",
      "Router splits the flow into two branches.",
      "Branch 1: Iterator expands the items → Google Sheets adds a row per task.",
      "Branch 2: Tools (Sleep) waits so Sheets is fully written.",
      "Google Sheets — Get Range Values pulls the full logged range.",
      "Tools — Text Aggregator combines the rows into a formatted report.",
      "Asana — Upload an Attachment attaches the report to the project.",
      "Google Sheets — Clear Values from a Range resets the working range.",
    ],
    skills: [
      "Routers",
      "Iterators",
      "Text Aggregation",
      "Data Processing",
      "Multi-step Automation",
    ],
    stats: {
      modules: "13",
      apps: "4",
      type: "Ops + Finance Sync",
      difficulty: "Advanced",
      status: "Live",
      builtWith: "Make.com",
    },
    impact: {
      timeSaved: "10+ hrs/week",
      operationalImpact: "Reduced Manual Data Entry",
      apps: {
        count: "4 Apps",
        names: "Make.com • Asana • Xero • Google Sheets",
      },
      complexity: "Advanced",
      complexitySub: "Modules: 13",
    },
  },
  {
    title: "AI Agent for Facebook Messenger",
    summary:
      "An n8n chatbot that answers customer inquiries 24/7 on Facebook Messenger using a custom FAQ knowledge base — no human agent needed for common questions.",
    screenshot: fbShot,
    tech: ["n8n", "Facebook Messenger", "Google Gemini", "FAQ Knowledge Base"],
    problem:
      "Small businesses lose leads on Messenger because common questions go unanswered overnight, and hiring a 24/7 agent isn't realistic.",
    solution:
      "An n8n workflow verifies the Messenger webhook, filters real user messages, loads a custom FAQ knowledge base, and lets a Gemini-powered support agent with conversation memory reply automatically.",
    steps: [
      "Messenger Webhook receives incoming events.",
      "GET requests hit the verification branch and return the challenge to Facebook.",
      "POST requests are filtered so only real user messages continue.",
      "Load FAQ Knowledge Base pulls the business's answers into context.",
      "Customer Support AI (Google Gemini) generates a reply with conversation memory.",
      "Send Reply to Messenger posts the response back to the customer.",
    ],
    skills: [
      "Webhook Verification",
      "AI Chatbots",
      "Knowledge Base Retrieval",
      "Conversation Memory",
      "Conditional Logic",
    ],
    stats: {
      modules: "8",
      apps: "3",
      type: "AI Chatbot",
      difficulty: "Intermediate",
      status: "Live",
      builtWith: "n8n",
    },
    impact: {
      timeSaved: "10+ hrs/week",
      operationalImpact: "Faster Lead Response",
      apps: { count: "3 Apps", names: "n8n • Facebook Messenger • Google Gemini" },
      complexity: "Intermediate",
      complexitySub: "Modules: 8",
    },
  },
  {
    title: "AI Job Application Automation",
    summary:
      "An n8n workflow that searches jobs, tailors a resume with AI, saves it to Google Drive, drafts an email with the resume attached, and notifies Slack when each application is ready.",
    screenshot: jobShot,
    tech: ["n8n", "Slack", "OpenRouter", "Google Drive", "Gmail"],
    problem:
      "Applying to jobs manually — searching, tailoring a resume, saving files, drafting emails — takes hours per role and kills consistency.",
    solution:
      "A Slack-triggered n8n workflow validates the query, searches jobs, generates a tailored resume via OpenRouter with structured output, manages the Drive file, drafts a Gmail email, and reports back to Slack.",
    steps: [
      "Slack Trigger receives the job-search query.",
      "Check if Query is Valid — invalid queries return an Invalid Query message.",
      "Send \"Searching for Jobs\" acknowledgement back to Slack.",
      "Get All Jobs and Check Results.",
      "Split Out & Loop Over Items iterates each job posting.",
      "Get Resume Content, then Create Resume Content with AI (OpenRouter + Structured Output Parser).",
      "Search Files/Folders to check if a resume already exists → Wait → Copy Resume → Wait → Update Document.",
      "If branch decides whether to Create an Email Draft in Gmail with the resume attached.",
      "Send application details back to the Slack jobs channel.",
    ],
    skills: [
      "AI Content Generation",
      "Structured Output Parsing",
      "File Search & Management",
      "Conditional Logic",
      "Multi-step Automation",
    ],
    stats: {
      modules: "15+",
      apps: "5",
      type: "AI Agent + Multi-step Automation",
      difficulty: "Advanced",
      status: "Live",
      builtWith: "n8n",
    },
    impact: {
      timeSaved: "10+ hrs/week",
      operationalImpact: "Faster Job Applications",
      apps: {
        count: "5 Apps",
        names: "n8n • Slack • OpenRouter • Google Drive • Gmail",
      },
      complexity: "Advanced",
      complexitySub: "Modules: 15+",
    },
  },
  {
    title: "GHL + n8n Lead Management Automation",
    summary:
      "Automated lead processing system that connects GoHighLevel with n8n to qualify leads, update CRM records, apply tags, and notify the team through Slack.",
    screenshot: ghlShot,
    tech: ["n8n", "GoHighLevel", "Slack", "REST API", "Webhooks"],
    problem:
      "Manually reviewing new leads, checking their inquiry type and budget, updating CRM records, and notifying the team takes time and can cause high-value leads to be missed.",
    solution:
      "An n8n workflow receives new leads from GoHighLevel through a webhook, cleans the data, retrieves and updates the contact through the GHL API, identifies buyer inquiries, checks the lead's budget, applies the correct GHL tags, and sends Slack notifications to the team.",
    steps: [
      "Lead Received — GHL sends a new lead to the n8n webhook.",
      "Clean Lead Data — the workflow organizes the contact information into a consistent format.",
      "Retrieve GHL Contact — the workflow retrieves the contact from GoHighLevel using the GHL API.",
      "Update Contact — contact information is updated in GHL using an HTTP PUT request.",
      "Check Inquiry Type — the workflow checks whether the lead is a buyer inquiry.",
      "Buyer Lead Route — buyer leads are tagged in GHL and a Slack notification is sent to the team.",
      "General Lead Route — general leads are routed separately and the team receives a general lead notification.",
      "Check Budget — the workflow checks whether the lead meets the high-budget criteria.",
      "High-Priority Lead — high-budget leads trigger a high-priority Slack alert and receive a high-priority tag in GHL.",
    ],
    skills: [
      "n8n Workflow Automation",
      "Webhook Integration",
      "REST API Integration",
      "HTTP GET & PUT Requests",
      "JSON Data Handling",
      "Conditional Logic & Routing",
      "GoHighLevel CRM Automation",
      "Automated Lead Tagging",
      "Slack Notifications",
      "Lead Qualification",
    ],
    stats: {
      modules: "10+",
      apps: "3",
      type: "Lead Management + CRM Automation",
      difficulty: "Intermediate",
      status: "Working Demo",
      builtWith: "n8n • GoHighLevel • Slack",
    },
    impact: {
      timeSaved: "Less Manual Lead Processing",
      operationalImpact: "Faster Lead Response",
      apps: {
        count: "3 Apps",
        names: "n8n • GoHighLevel • Slack",
      },
      complexity: "Intermediate",
      complexitySub:
        "Webhooks • API Requests • Conditional Routing • CRM Updates • Automated Notifications",
    },
  },
];

const services = [
  { icon: "🤖", name: "AI Automation" },
  { icon: "🔄", name: "Workflow Automation" },
  { icon: "📧", name: "Email Automation" },
  { icon: "📊", name: "Google Workspace Automation" },
  { icon: "📁", name: "CRM Automation" },
  { icon: "🔗", name: "API Integrations" },
  { icon: "📅", name: "Business Process Automation" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <WhatIBuild />
      <ToolMarquee />
      <Projects />
      <WorkflowGallery />
      <Services />
      <Contact />

      <Footer />
    </div>
  );
}


/* ---------- Nav ---------- */
function Nav() {
  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Gallery", "#gallery"],
    ["Services", "#services"],
    ["Contact", "#contact"],

  ];

  return (
    <header className="sticky top-0 z-40 border-b-2 border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <a href="#top" className="text-sm text-sunset tracking-widest">◆ AUTO.DEV</a>
        <nav className="hidden gap-6 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-xs uppercase tracking-wider text-beige transition-colors hover:text-sunset"
            >
              {label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="pixel-btn !py-2 !px-4 !text-xs">Hire Me</a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b-2 border-border">
      {/* Artwork band */}
      <div className="relative">
        <img
          src={heroImg}
          alt="Pixel-art automation workspace at sunset: three monitors with n8n, Zapier and Make workflows, shelves, plants, coffee mug and a sleeping cat"
          width={1920}
          height={768}
          className="h-[38vh] w-full object-cover md:h-[52vh]"
        />
        {/* Drifting cloud */}
        <div className="pointer-events-none absolute left-0 top-8 h-4 w-24 bg-cream/20 cloud-drift" />
        {/* Lamp glow */}
        <div
          className="pointer-events-none absolute right-[14%] top-[18%] h-40 w-40 rounded-full lamp-glow"
          style={{
            background:
              "radial-gradient(circle, rgba(255,190,120,0.30) 0%, rgba(255,190,120,0) 70%)",
          }}
        />
        <div className="pointer-events-none absolute inset-0 border-b-4 border-sunset/40" />
      </div>


      {/* Text zone — solid background, clearly separated */}
      <div className="bg-background">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center md:py-20">
          <Reveal>
            <p className="mb-4 text-xs tracking-[0.3em] text-sunset">
              ◆ AUTOMATION SPECIALIST ◆
            </p>
            <h1 className="text-3xl leading-[1.25] text-cream md:text-5xl">
              Building Smart Automations
              <br />
              That Save Businesses Time
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm text-beige md:text-base">
              Automation Specialist • n8n • Zapier • Make.com • AI
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              I build workflow automations that connect your apps, eliminate repetitive
              work, and simplify business operations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#projects" className="pixel-btn">View Projects</a>
              <a href="#contact" className="pixel-btn-outline">Contact Me</a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="border-b-2 border-border py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="mb-3 text-center text-xs tracking-[0.3em] text-sunset">
            ◆ ABOUT ◆
          </p>
          <h2 className="mb-12 text-center text-2xl text-cream md:text-4xl">
            Automations, brewed slowly.
          </h2>
        </Reveal>

        <div className="grid items-start gap-10 md:grid-cols-[280px_1fr] md:gap-16">
          <Reveal>
            <div
              className="mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-full p-2"
              style={{
                backgroundColor: "#38281d",
                border: "4px solid #c46a3a",
                boxShadow: "0 0 0 6px rgba(0,0,0,0.35)",
              }}
            >
              <img
                src={headshot}
                alt="Portrait of Froilan, automation specialist"
                className="block h-full w-full rounded-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-5 text-sm leading-loose text-beige md:text-base">
              <h3 className="text-xl text-cream md:text-3xl">Hi, I'm Froilan</h3>
              <p>
                I'm an Automation Specialist who builds the boring, repetitive
                plumbing out of business operations — so teams can spend their
                hours on the work that actually needs a human.
              </p>
              <p>
                My days are split between n8n, Zapier, Make.com, and a growing
                stack of AI tools. I like workflows that are quiet, reliable, and
                easy for a non-technical owner to trust.
              </p>
              <p>
                Coffee first. Then a whiteboard. Then a workflow that shaves a few
                hours off someone's week — every week, forever.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

/* ---------- What I Build ---------- */
function WhatIBuild() {
  return (
    <section id="skills" className="border-b-2 border-border bg-olive-brown py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="mb-3 text-center text-xs tracking-[0.3em] text-sunset">
            ◆ WHAT I BUILD ◆
          </p>
          <h2 className="mb-12 text-center text-2xl text-cream md:text-3xl">
            Automations across your whole stack
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          {services.map((s) => (
            <Reveal key={s.name}>
              <div className="pixel-card pixel-card-hover flex h-full flex-col items-center justify-center p-4 text-center">
                <span className="mb-3 text-3xl">{s.icon}</span>
                <p className="text-[11px] leading-snug tracking-wider text-cream">
                  {s.name}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */
function Projects() {
  return (
    <section id="projects" className="border-b-2 border-border py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="mb-3 text-center text-xs tracking-[0.3em] text-sunset">
            ◆ FEATURED PROJECTS ◆
          </p>
          <h2 className="mb-12 text-center text-2xl text-cream md:text-3xl">
            Real workflows, running in production
          </h2>
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((p) => (
            <Reveal key={p.title}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Workflow Gallery ---------- */
function WorkflowGallery() {
  const items = [
    { src: fbShot, title: "AI Agent for Facebook Messenger", tag: "n8n • Gemini" },
    { src: jobShot, title: "AI Job Application Assistant", tag: "n8n • OpenRouter • Slack" },
    { src: zapierShot, title: "AI Content Repurposing", tag: "Zapier" },
    { src: makeShot, title: "Asana ↔ Xero Sync", tag: "Make.com" },
  ];
  return (
    <section id="gallery" className="border-b-2 border-border bg-olive-brown py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="mb-3 text-center text-xs tracking-[0.3em] text-sunset">
            ◆ WORKFLOW GALLERY ◆
          </p>
          <h2 className="mb-12 text-center text-2xl text-cream md:text-3xl">
            A peek inside the toolbox
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((it) => (
            <Reveal key={it.title}>
              <div className="pixel-card pixel-card-hover overflow-hidden">
                <div className="bg-input-bg">
                  <img
                    src={it.src}
                    alt={it.title}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between border-t-2 border-border p-4">
                  <span className="text-xs text-cream">{it.title}</span>
                  <span className="text-[10px] tracking-wider text-sunset">{it.tag}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Services() {
  const list = [
    {
      icon: "🔄",
      title: "Workflow Design & Build",
      desc: "End-to-end automations across n8n, Zapier, and Make.com — designed, built, and documented.",
    },
    {
      icon: "🤖",
      title: "AI Integrations",
      desc: "Adding GPT / Gemini / Claude to existing flows: content generation, extraction, classification, and agents.",
    },
    {
      icon: "🧰",
      title: "System Cleanup & Audit",
      desc: "Audit your existing Zaps and scenarios, kill the duplicates, cut the errors, and make them boring again.",
    },
    {
      icon: "🔗",
      title: "API & Webhook Work",
      desc: "Custom API calls, webhook handling, data transformation between tools that don't natively talk to each other.",
    },
  ];
  return (
    <section id="services" className="border-b-2 border-border py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="mb-3 text-center text-xs tracking-[0.3em] text-sunset">
            ◆ SERVICES ◆
          </p>
          <h2 className="mb-12 text-center text-2xl text-cream md:text-3xl">
            How we can work together
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {list.map((s) => (
            <Reveal key={s.title}>
              <div className="pixel-card pixel-card-hover h-full p-6">
                <div className="mb-3 text-3xl">{s.icon}</div>
                <h3 className="mb-2 text-base text-cream">{s.title}</h3>
                <p className="text-sm leading-relaxed text-beige">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [showCal, setShowCal] = useState(false);


  const cards = [
    {
      icon: Mail,
      label: "Email",
      value: "froiiiespiritu04@gmail.com",
      href: "mailto:froiiiespiritu04@gmail.com",
      external: false,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 927 514 3811",
      href: "tel:+639275143811",
      external: false,
    },
    { icon: MapPin, label: "Location", value: "Philippines — Remote" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/froilan-espiritu-2a79603aa/",
      href: "https://www.linkedin.com/in/froilan-espiritu-2a79603aa/",
      external: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@froiiiespiritu04-ops",
      href: "https://github.com/froiiiespiritu04-ops",
      external: true,
    },
  ] as const;

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24"
      style={{ backgroundColor: "#2b1e14" }}
    >
      {/* pixel dust */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-1 w-1 float-dust"
            style={{
              backgroundColor: i % 3 === 0 ? "#c46a3a" : "#d7b89a",
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              opacity: 0.5,
              animationDelay: `${(i % 6) * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="mb-3 text-xs tracking-[0.3em] text-sunset">
                ◆ GET IN TOUCH ◆
              </p>
              <h2 className="mb-4 text-2xl leading-tight text-cream md:text-4xl">
                Let's Build Something Together
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-beige md:text-base">
                Looking for workflow automation, AI integrations, or business process
                optimization? I'd love to help automate repetitive work and build
                solutions that save your business time.
              </p>

              <div className="mb-8 space-y-3">
                {cards.map((card) => {
                  const Icon = card.icon;
                  const inner = (
                    <>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-sunset bg-input-bg text-sunset">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          {card.label}
                        </p>
                        <p className="text-sm text-cream">{card.value}</p>
                      </div>
                    </>
                  );
                  const cls =
                    "pixel-card pixel-card-hover flex items-center gap-4 p-4";
                  return "href" in card && card.href ? (
                    <a
                      key={card.label}
                      href={card.href}
                      className={cls}
                      {...(card.external
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={card.label} className={cls}>
                      {inner}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.upwork.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="pixel-btn"
                >
                  Hire Me on Upwork
                </a>
                <a
                  href="https://www.onlinejobs.ph/"
                  target="_blank"
                  rel="noreferrer"
                  className="pixel-btn-outline"
                >
                  View OnlineJobs.ph
                </a>
              </div>
            </div>

            {/* Right — form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStatus("sent");
                setTimeout(() => setStatus("idle"), 3500);
                setForm({ name: "", email: "", subject: "", message: "" });
              }}
              className="pixel-card space-y-5 p-6 md:p-8"
            >
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="pixel-input"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="pixel-input"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">
                  Subject
                </label>
                <input
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="pixel-input"
                  placeholder="What do you want to automate?"
                />
              </div>
              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="pixel-input resize-none"
                  placeholder="Tell me about the workflow you have in mind..."
                />
              </div>
              <div className="flex flex-col gap-3 md:flex-row">
                <button type="submit" className="pixel-btn w-full md:w-auto md:flex-1">
                  <Send className="mr-2 h-4 w-4" />
                  {status === "sent" ? "✦ Message Sent!" : "Send Message"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowCal((v) => !v)}
                  className="pixel-btn-outline w-full md:w-auto md:flex-1 text-center"
                >
                  {showCal ? "Hide Calendar" : "Book Call (Calendly)"}
                </button>
              </div>
              {showCal && <CalendlyInline />}


            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t-2 border-border bg-background py-8 text-center">
      <p className="text-[10px] tracking-widest text-muted-foreground">
        ◆ BUILT WITH COFFEE & WORKFLOWS ◆ © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
