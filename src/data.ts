import { EducationInfo, SkillCategory, ProjectItem, AchievementItem, ContactInfo } from "./types";

export const personalInfo = {
  name: "C R Renuka",
  title: "Computer Science Engineering Student | AI & Full Stack Developer",
  introduction: "I am a passionate third-year Computer Science Engineering student who enjoys building intelligent software solutions and modern web applications. I love solving real-world problems using Artificial Intelligence, Web Development, and Programming. I continuously learn new technologies and strive to become a Software Engineer."
};

export const aboutMeInfo = {
  heading: "About Me",
  paragraphs: [
    "Hello! I'm C R Renuka, a Computer Science Engineering student from Agni College of Technology, Chennai.",
    "I enjoy creating innovative software projects, exploring Artificial Intelligence, and developing responsive websites. I am passionate about problem solving, learning new technologies and working on impactful real-world applications.",
    "My goal is to become a highly skilled Software Engineer capable of building scalable AI-powered solutions that improve people's lives."
  ],
  interests: [
    "Artificial Intelligence & ML",
    "Full Stack Web Development",
    "Competitive Programming",
    "Open Source Contribution"
  ]
};

export const educationInfo: EducationInfo = {
  degree: "Bachelor of Engineering",
  major: "Computer Science and Engineering",
  institution: "Agni College of Technology",
  cgpa: "8.87",
  duration: "2023 – 2027"
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "C"]
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React", "JavaScript"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"]
  },
  {
    title: "Database",
    skills: ["MongoDB", "Supabase"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "REST APIs"]
  }
];

export const projectsInfo: ProjectItem[] = [
  {
    id: "flowpilot",
    title: "FlowPilot – Voice Driven Productivity Assistant",
    description: "A productivity web application that automates task workflows using voice interaction while providing a responsive user experience.",
    tags: ["React", "Node.js", "Web Speech API", "Tailwind CSS", "Framer Motion"],
    features: [
      "Voice commands recognition for scheduling, notes, and task actions",
      "Dynamic interactive dashboard with voice logs",
      "Beautiful custom state-driven tasks automation workflows"
    ],
    githubLink: "https://github.com/renumalu/AgenticAI"
  },
  {
    id: "actisolve",
    title: "ActiSolve AI – AI Strategy Engine",
    description: "An AI-powered full-stack application that converts complex goals into structured workflows using modern technologies.",
    tags: ["React", "Express.js", "MongoDB", "AI Orchestration", "Dynamic Visualization"],
    features: [
      "Translates long-term goals into actionable micro-steps",
      "Real-time feedback loops and adaptive workflow restructuring",
      "Interactive strategy boards with drag-and-drop roadmap nodes"
    ],
    githubLink: "https://github.com/renumalu/AntiSolve"
  }
];

export const achievementsInfo: AchievementItem[] = [
  {
    id: "acad-excel",
    title: "Academic Excellence Award",
    subtitle: "2nd Rank in CSE Department (2024–2025)"
  },
  {
    id: "eclearnix",
    title: "Finalist",
    subtitle: "Eclearnix National Hackathon"
  },
  {
    id: "elite",
    title: "Finalist",
    subtitle: "Elite National Level Hackathon"
  },
  {
    id: "tancam",
    title: "Certificate of Appreciation",
    subtitle: "TANCAM Hackathon for Women"
  }
];

export const contactInfo: ContactInfo = {
  email: "crrenuka28@gmail.com",
  phone: "+91 9940211156",
  location: "Chennai, India",
  github: "https://github.com/renumalu",
  linkedin: "https://linkedin.com/"
};
