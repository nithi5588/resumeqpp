export interface ProfileData {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
}

export interface ExperienceData {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface EducationData {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export interface SkillData {
  category: string;
  skills: string[];
}

export interface ProjectData {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  startDate: string;
  endDate: string;
}

export interface AchievementData {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export interface ResumeData {
  profile: ProfileData;
  experience: ExperienceData[];
  education: EducationData[];
  skills: SkillData[];
  projects: ProjectData[];
  achievements: AchievementData[];
}
