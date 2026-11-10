import { CalendarCheck, Clock3, MessageSquare, Settings2, Users, Workflow } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const problems = [
  { icon: Users, title: "You're Losing Potential Customers", solution: "Lead Capture & Follow-Up Automation", benefits: ["Capture incoming inquiries.", "Organize and categorize new leads.", "Send faster responses.", "Notify your team about important opportunities."] },
  { icon: Clock3, title: "Your Team Is Spending Too Much Time on Repetitive Tasks", solution: "Business Process Automation", benefits: ["Reduce repetitive administrative work.", "Connect different business applications.", "Automate routine processes.", "Give your team more time for important work."] },
  { icon: MessageSquare, title: "Your Customer Inquiries Are Difficult to Manage", solution: "AI Chat & Customer Communication Automation", benefits: ["Answer common questions around the clock.", "Help customers find the information they need.", "Capture potential customer details.", "Direct inquiries to the appropriate team or booking process."] },
  { icon: Settings2, title: "Your CRM Is Disorganized", solution: "CRM & GoHighLevel Automation", benefits: ["Keep customer information organized.", "Automatically update contact records.", "Apply relevant tags.", "Route inquiries to the right team.", "Make important leads easier to identify."] },
];
export function BusinessProblems() {
  return <section className="section" id="solutions"><div className="container">
    <div className="section-heading"><div><p className="eyebrow">01 / BUSINESS PROBLEMS I SOLVE</p><h2 className="business-heading">Your Business Has Enough to Handle. <span className="muted">Let Automation Take Care of the Repetitive Work.</span></h2></div></div>
    <div className="business-grid">{problems.map(({ icon: Icon, ...problem }) => <Reveal key={problem.title}><article className="business-card"><Icon className="text-primary" size={24} /><h3>{problem.title}</h3><p className="solution-label">{problem.solution}</p><ul className="benefit-list">{problem.benefits.map(benefit => <li key={benefit}>{benefit}</li>)}</ul></article></Reveal>)}</div>
  </div></section>;
}
const results = [
  { icon: Clock3, title: "More Time for Growth", description: "Spend less time on repetitive tasks and more time serving customers and growing your business." },
  { icon: Users, title: "Faster Lead Response", description: "Organize inquiries and automate follow-ups so potential customers don't get overlooked." },
  { icon: Workflow, title: "Smoother Operations", description: "Connect your tools and reduce unnecessary manual steps between business processes." },
  { icon: CalendarCheck, title: "Better Customer Experience", description: "Give customers faster answers, clearer communication, and easier access to your services." },
];
export function BusinessBenefits() {
  return <section className="section" id="benefits"><div className="container"><div className="section-heading"><div><p className="eyebrow">04 / BUSINESS BENEFITS</p><h2 className="business-heading">What Changes When Your Business Starts Working Smarter?</h2></div></div><div className="industry-grid">{results.map(({ icon: Icon, ...result }) => <Reveal key={result.title}><article className="business-card"><Icon className="text-primary" size={24} /><h3>{result.title}</h3><p>{result.description}</p></article></Reveal>)}</div></div></section>;
}
export function WorkingProcess() {
  return <section className="section" id="process"><div className="container"><p className="eyebrow">05 / MY WORKING PROCESS</p><h2>Understand the Business.<br /><span className="muted">Then Connect the Right Steps.</span></h2><div className="process process-standalone">
    <div><span>01 / UNDERSTAND</span><h3>Map the process</h3><p>Walk through your tools, bottlenecks, and the outcome you need.</p></div>
    <div><span>02 / BUILD & TEST</span><h3>Connect the steps</h3><p>Build the workflow and check both the normal path and likely exceptions.</p></div>
    <div><span>03 / HAND OVER</span><h3>Make it usable</h3><p>Explain how it works, what to watch, and how to manage it day to day.</p></div>
  </div></div></section>;
}