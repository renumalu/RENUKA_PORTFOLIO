export interface EducationInfo {
  degree: string;
  major: string;
  institution: string;
  cgpa: string;
  duration: string;
}

export interface SkillItem {
  name: string;
  icon?: string; // name of lucide-react icon or generic
  level?: string; // e.g. "Proficient", "Intermediate"
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  features?: string[];
  githubLink?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  year?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
}
