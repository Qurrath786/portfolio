// src/data/skills.ts
export type Skill = {
    id: string;
    name: string;
    pct: number; // 0..100
    category?: string;
  };
  
  export const SKILLS: Skill[] = [
    // Programming Languages
    { id: "c_cpp", name: "C / C++", pct: 85, category: "Programming Languages" },
    { id: "java", name: "Java", pct: 78, category: "Programming Languages" },
    { id: "python", name: "Python", pct: 90, category: "Programming Languages" },
    { id: "javascript", name: "JavaScript (ES6+)", pct: 88, category: "Programming Languages" },
  
    // Frameworks & Libraries
    { id: "flutter", name: "Flutter", pct: 88, category: "Frameworks & Libraries" },
    { id: "react", name: "React.js", pct: 90, category: "Frameworks & Libraries" },
    { id: "node", name: "Node.js & Express", pct: 82, category: "Frameworks & Libraries" },
    { id: "tf", name: "TensorFlow / Keras", pct: 80, category: "Frameworks & Libraries" },
    { id: "openai", name: "OpenAI API", pct: 84, category: "Frameworks & Libraries" },
  
    // Databases & Cloud
    { id: "firebase", name: "Firebase", pct: 88, category: "Database & Cloud" },
    { id: "mysql", name: "MySQL", pct: 75, category: "Database & Cloud" },
    { id: "mongodb", name: "MongoDB", pct: 76, category: "Database & Cloud" },
    { id: "gcloud", name: "Google Cloud (basics)", pct: 60, category: "Database & Cloud" },
  
    // UI/UX & Tools
    { id: "figma", name: "Figma", pct: 86, category: "UI/UX & Tools" },
    { id: "canva", name: "Canva", pct: 80, category: "UI/UX & Tools" },
    { id: "adobexd", name: "Adobe XD (basic)", pct: 60, category: "UI/UX & Tools" },
    { id: "arvr", name: "AR/VR Basics", pct: 50, category: "UI/UX & Tools" },
  
    // Dev Tools & Workflow
    { id: "git", name: "Git & GitHub", pct: 92, category: "Developer Tools" },
    { id: "vscode", name: "VS Code / Android Studio", pct: 90, category: "Developer Tools" },
    { id: "postman", name: "Postman", pct: 82, category: "Developer Tools" },
    { id: "cli", name: "Command Line / Terminal", pct: 88, category: "Developer Tools" },
  
    // AI, ML & Data
    { id: "mlmodels", name: "ML Models & CV", pct: 85, category: "AI, ML & Data" },
    { id: "dataviz", name: "DataViz (Matplotlib / Pandas)", pct: 78, category: "AI, ML & Data" },
    { id: "prompt", name: "Prompt Engineering", pct: 83, category: "AI, ML & Data" },
  
    // Web Tech
    { id: "htmlcss", name: "HTML5 & CSS3", pct: 90, category: "Web Technologies" },
    { id: "responsive", name: "Responsive Design", pct: 88, category: "Web Technologies" },
    { id: "rest", name: "RESTful APIs / JSON", pct: 86, category: "Web Technologies" },
  
    // Soft Skills
    { id: "problem", name: "Problem Solving", pct: 92, category: "Soft Skills" },
    { id: "team", name: "Team Collaboration", pct: 88, category: "Soft Skills" },
    { id: "creative", name: "Creativity & Design Thinking", pct: 90, category: "Soft Skills" },
    { id: "adapt", name: "Adaptability", pct: 90, category: "Soft Skills" },
    { id: "comm", name: "Communication & Presentation", pct: 88, category: "Soft Skills" },
  
    // Currently Learning (lower proficiency shown)
    { id: "adv_flutter", name: "Advanced Flutter Animations", pct: 40, category: "Currently Learning" },
    { id: "node_mongo", name: "Backend with Node.js & MongoDB", pct: 45, category: "Currently Learning" },
    { id: "ai_deploy", name: "Advanced AI Integration & Deployment", pct: 55, category: "Currently Learning" },
    { id: "dsa_java", name: "DSA in Java", pct: 60, category: "Currently Learning" },
  ];
  