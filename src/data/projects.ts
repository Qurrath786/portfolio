// src/data/projects.ts
export type Project = {
    id: string;
    title: string;
    stack: string;
    type: string;
    description: string;
    highlights: string[];
  };
  
  export const PROJECTS: Project[] = [
    {
      id: "mehrkaan",
      title: "MehrKaan — AI-Powered Mehndi Design App",
      stack: "Flutter, TensorFlow, Keras, Firebase, OpenAI API",
      type: "AI + Mobile App",
      description:
        "AI app that analyzes hand/leg images and suggests personalized Mehndi patterns, AR preview, sharing and artist community.",
      highlights: [
        "Hand/leg detection & shape analysis ML model",
        "AR-based virtual try-on",
        "OpenAI-based personalized suggestions",
        "Save & share, artist booking",
      ],
    },
    {
      id: "aiyana",
      title: "AIYANA — The All-in-One AI Companion",
      stack: "Flutter, Node.js, Firebase, OpenAI GPT",
      type: "AI + Productivity App",
      description:
        "A friendly AI companion that chats, tracks wellness, manages tasks and personalizes over time.",
      highlights: [
        "Emotionally aware chat",
        "To-do, music, wellness tracker",
        "Personalized recommendations",
      ],
    },
    {
      id: "nexacode",
      title: "NexaCode — Mobile IDE for Programmers",
      stack: "Flutter, Firebase, Python, Node.js",
      type: "Developer Tool",
      description:
        "Mobile-first IDE enabling writing, running and debugging code with AI assistance & GitHub integration.",
      highlights: [
        "Multi-language support",
        "Built-in compiler & AI assistant",
        "Offline mode & cloud sync",
      ],
    },
    {
      id: "shesafe",
      title: "SheSafe — Women's Safety & Community App",
      stack: "Flutter, Firebase, Google Maps API",
      type: "Safety / Social Impact",
      description:
        "Real-time tracking, safe zones, SOS, and community alerts to improve safety.",
      highlights: [
        "One-tap SOS & live tracking",
        "Verified safe zones",
        "Community alert wall",
      ],
    },
    {
      id: "sheconomy",
      title: "SHEconomy — AI for Financial Inclusion",
      stack: "Flutter, Firebase, Python, OpenAI API",
      type: "FinTech / Hackathon",
      description:
        "Financial literacy and smart budgeting with AI-driven tips and voice navigation.",
      highlights: ["Financial literacy hub", "Expense analytics", "AI budgeting tips"],
    },
    {
      id: "flashgen",
      title: "FlashGen — AI Hackathon Idea",
      stack: "OpenAI, JS",
      type: "Concept / Hackathon",
      description:
        "Instantly generates interactive, story-based learning micro-challenges to teach via gamified stories.",
      highlights: ["Interactive learning generator", "Short gamified challenges"],
    },
  ];
  