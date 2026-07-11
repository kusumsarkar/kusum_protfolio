export type FlightCode =
  | "AB101"
  | "ED202"
  | "EX303"
  | "SK404"
  | "PR505"
  | "CT606";

export interface FlightMeta {
  code: FlightCode;
  destination: string;
  gate: string;
  boardingTime: string;
  href: string;
  short: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  board: string;
  year: string;
  score: string;
  status: "Completed" | "In Progress";
  note?: string;
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  location: string;
  duration: string;
  city: string;
  responsibilities: string[];
}

export interface SkillEntry {
  name: string;
  category: "Communication" | "Leadership" | "Business" | "Technical" | "Language" | "Other";
  level: 1 | 2 | 3 | 4 | 5;
  description: string;
}

export interface ProjectEntry {
  name: string;
  overview: string;
  role: string;
  outcome: string;
  impact: string;
  tags: string[];
}

export interface AchievementEntry {
  title: string;
  description: string;
  date?: string;
}

export interface ReferenceEntry {
  name: string;
  role: string;
  organization: string;
}
