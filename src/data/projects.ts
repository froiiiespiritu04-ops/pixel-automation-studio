import type { Project } from "@/components/ProjectCard";
import zapierShot from "@/assets/zapier-ai-content.png";
import makeShot from "@/assets/make-asana-xero.png";
import fbShot from "@/assets/facebook-ai-agent.png";
import jobShot from "@/assets/job-application-ai.png";
import ghlShot from "@/assets/ghl-n8n-leads.png";
export const projects: Project[] = [
  {
    title: "From new lead to the right next step",
    category: "FEATURED BUILD / LEAD HANDLING",
    screenshot: ghlShot,
    tech: ["GoHighLevel", "n8n", "REST API", "Slack"],
    summary:
      "A GoHighLevel + n8n working demo that cleans incoming lead data, updates CRM contacts, and flags priority inquiries for the team.",
    outcome:
      "Less manual lead sorting. Clearer CRM records. Priority inquiries brought to the team’s attention.",
    problem:
      "New inquiries need to be reviewed, categorized, and entered into the CRM. When that work piles up, promising leads can be overlooked.",
    solution:
      "GoHighLevel sends each lead to n8n. The workflow applies defined inquiry and budget rules, updates the contact through the API, and routes a relevant Slack notification. Qualification here is rules-based.",
    steps: [
      "Receive the GoHighLevel webhook and clean the contact data.",
      "Retrieve and update the CRM contact using the GoHighLevel API.",
      "Route buyer inquiries and general inquiries into separate paths.",
      "Apply lead tags and check the budget threshold.",
      "Notify Slack and flag high-priority leads in GoHighLevel.",
    ],
    source: "https://github.com/froiiiespiritu04-ops/ghl-n8n-lead-capture-automation",
  },
  {
    title: "Give Messenger inquiries a faster answer",
    category: "AI CUSTOMER CONVERSATIONS",
    screenshot: fbShot,
    tech: ["n8n", "Facebook Messenger", "Gemini"],
    summary:
      "An AI Messenger workflow that uses a business FAQ knowledge base and conversation memory to answer common customer questions.",
    outcome:
      "Routine questions can get an answer while the team focuses on conversations that need personal attention.",
    problem:
      "Customers ask the same questions throughout the day and after hours. Answering each one manually slows down the inbox.",
    solution:
      "An n8n workflow receives Messenger events, filters incoming user messages, and gives a Gemini agent the business FAQ context before sending its reply.",
    steps: [
      "Verify the Facebook webhook and receive message events.",
      "Filter real user messages before processing.",
      "Load the FAQ knowledge base and conversation context.",
      "Generate an answer with Gemini and send it back to Messenger.",
    ],
  },
  {
    title: "Turn one recording into reusable content",
    category: "CONTENT OPERATIONS",
    screenshot: zapierShot,
    tech: ["Zapier", "AI by Zapier", "Google Drive", "LinkedIn"],
    summary:
      "A workflow that takes an uploaded recording through transcription, blog and social copy generation, and platform-specific publishing.",
    outcome:
      "Fewer repeated steps between creating a recording and repurposing it for different channels.",
    problem:
      "Transcribing a recording and adapting it for each social platform means repeating similar work.",
    solution:
      "A Google Drive upload starts a Zapier workflow that transcribes the file, generates copy, and routes posts to Facebook Pages and LinkedIn.",
    steps: [
      "Watch the source folder and filter incoming files.",
      "Generate a transcription and repurposed copy with AI.",
      "Loop over the generated posts and select the platform path.",
      "Publish through the relevant Facebook or LinkedIn action.",
    ],
  },
  {
    title: "Connect project work with finance records",
    category: "OPERATIONS & API INTEGRATION",
    screenshot: makeShot,
    tech: ["Make.com", "Asana", "Xero", "Google Sheets"],
    summary:
      "A Make.com scenario that connects completed Asana tasks with Xero, logs records in Google Sheets, and attaches a summary back in Asana.",
    outcome: "Less copying between project, finance, and reporting tools.",
    problem:
      "Completed work has to be copied into finance tools and spreadsheets before a project summary can be shared.",
    solution:
      "The scenario calls Xero when an Asana task is completed, routes records into Google Sheets, and aggregates them into a report for Asana.",
    steps: [
      "Watch for completed Asana tasks and call the Xero API.",
      "Split the workflow to log individual records in Google Sheets.",
      "Read the logged range and aggregate a summary.",
      "Attach the report to Asana and reset the working range.",
    ],
  },
  {
    title: "Bring a human review step to AI job applications",
    category: "AI WORKFLOW DEMO",
    screenshot: jobShot,
    tech: ["n8n", "OpenRouter", "Slack", "Gmail"],
    summary:
      "A Slack-triggered assistant that searches jobs, tailors a resume, saves it to Google Drive, and prepares a Gmail draft for review.",
    outcome:
      "Application materials arrive together for review, with the final email left as a draft.",
    problem:
      "Job research, resume changes, file management, and email preparation create a long sequence of repetitive tasks.",
    solution:
      "n8n connects a Slack request to job results, structured AI output, Drive files, and Gmail drafts, then returns an update to Slack.",
    steps: [
      "Validate the Slack search request and retrieve job results.",
      "Process each result and generate tailored resume content.",
      "Find or create the resume file in Google Drive.",
      "Prepare a Gmail draft with the attachment and notify Slack.",
    ],
  },
];
