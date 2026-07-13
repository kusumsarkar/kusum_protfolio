import type {
  FlightMeta,
  EducationEntry,
  ExperienceEntry,
  SkillEntry,
  ProjectEntry,
  AchievementEntry,
  ReferenceEntry,
} from "@/types";

export const passenger = {
  fullName: "Kusum Sarkar",
  title: "BBA Student | Marketing & Communications | Content Creator",
  tagline: "Marketing & communications student and content creator.",
  location: "Kalikanagar, Butwal",
  city: "Butwal",
  country: "Nepal",
  email: "kusumsarkar2005@gmail.com",
  phone: "+977 976-4689190",
  website: "www.kusumsarkar.com.np",
  objective:
    "To be part of a professional organization and work in a challenging environment that offers the opportunity to grow, develop, and contribute to the growth of the organization.",
  summary:
    "Business Administration student specializing in marketing and communications, with practical experience across education, event marketing, and media including test-prep instruction, sponsorship coordination, and public hosting and modelling work. Recognized internationally for a client-facing role opportunity, contingent on degree completion. Known for adaptability, empathy, and the ability to connect confidently with audiences.",
  status: "BBA student, 2nd semester  currently in transit toward graduation.",
};

export const airportCode = "KUS";
export const airportName = `${passenger.fullName} International Airport`;

export const flights: FlightMeta[] = [
  {
    code: "AB101",
    destination: "ABOUT ME",
    gate: "A1",
    boardingTime: "09:00",
    href: "/about",
    short: "About",
  },
  {
    code: "ED202",
    destination: "EDUCATION",
    gate: "B2",
    boardingTime: "10:15",
    href: "/education",
    short: "Education",
  },
  {
    code: "EX303",
    destination: "EXPERIENCE",
    gate: "C3",
    boardingTime: "11:30",
    href: "/experience",
    short: "Experience",
  },
  {
    code: "SK404",
    destination: "SKILLS",
    gate: "D4",
    boardingTime: "12:45",
    href: "/skills",
    short: "Skills",
  },
  {
    code: "PR505",
    destination: "PROJECTS",
    gate: "E5",
    boardingTime: "14:00",
    href: "/projects",
    short: "Projects",
  },
  {
    code: "CT606",
    destination: "CONTACT",
    gate: "F6",
    boardingTime: "15:15",
    href: "/contact",
    short: "Contact",
  },
];

export const education: EducationEntry[] = [
  {
    degree: "Bachelor's Degree, BBA (Current, 2nd Semester)",
    institution: "Siddhartha International College",
    board: "Pokhara University",
    year: "2nd Semester — In Progress",
    score: "—",
    status: "In Progress",
    note: "Currently pursuing the degree.",
  },
  {
    degree: "S.L.C. (School Leaving Certificate)",
    institution: "Tilottama Secondary School",
    board: "—",
    year: "2024",
    score: "B+ Grade",
    status: "Completed",
  },
  {
    degree: "S.E.E. (Secondary Education Examination)",
    institution: "Meditech Academy",
    board: "—",
    year: "2022",
    score: "B+ Grade",
    status: "Completed",
  },
];

export const training = {
  title: "Independent Learning",
  description:
    "Self-directed learning in scripting and astrology through digital platforms.",
};

export const experience: ExperienceEntry[] = [
  {
    role: "Content Creator",
    organization: "OG Records & Aagan Restaurant",
    location: "Butwal, Nepal",
    city: "Butwal",
    duration: "Ongoing",
    responsibilities: [
      "Working as a content creator for OG Records.",
      "Working as a content creator for Aagan Restaurant.",
    ],
  },
  {
    role: "Social Media Influencer",
    organization: "Independent",
    location: "Butwal, Nepal",
    city: "Butwal",
    duration: "Ongoing",
    responsibilities: [
      "Built an Instagram presence with content generating over 1 million views on a single post.",
      "Grew audience engagement through consistent content creation across short-form video and photo formats, developing a recognizable public persona.",
      "Extended reach beyond Instagram with podcast guest appearances — the \"Seat Down\" series with Mr. Sangeet Sunar and a New Zealand immigration breakdown episode with Student Visa Network on YouTube.",
      "Collaborated with local brands and events as part of a broader public-facing media presence.",
    ],
  },
  {
    role: "Event Manager",
    organization: "Event Batauli",
    location: "Butwal, Nepal",
    city: "Butwal",
    duration: "Completed",
    responsibilities: [
      "Lead sponsorship acquisition and marketing coordination for live events, including concerts for artists VZN and Bikki Gurung.",
      "Manage sponsor relationships and negotiate partnership terms to support event viability.",
      "Coordinate marketing execution alongside the event organizing team, from planning through event day.",
    ],
  },
  {
    role: "IELTS / PTE Instructor",
    organization: "AE Global",
    location: "Butwal, Nepal",
    city: "Butwal",
    duration: "May 2025 — August 2025",
    responsibilities: [
      "Delivered IELTS and PTE preparation instruction to test candidates, covering all four exam modules (Listening, Reading, Writing, Speaking).",
      "Conducted a one-month IELTS morning session at Apollo Education Consultancy Pvt. Ltd. (April 2025).",
      "Guided students through exam strategies, practice tests, and personalized feedback to build test-day confidence.",
      "Maintained a structured, engaging classroom environment suited to varying proficiency levels.",
    ],
  },
  {
    role: "Face Model and Host",
    organization: "GBA Unisex Salon",
    location: "Kalikanagar, Butwal, Nepal",
    city: "Butwal",
    duration: "Completed",
    responsibilities: [
      "Hosted a certification ceremony for the salon, managing stage presence and program flow for a live audience.",
      "Served as the face model for the salon's brand representation across promotional material.",
      "Represented the brand professionally in both a hosting and modelling capacity.",
    ],
  },
  {
    role: "Junior Frontend Developer",
    organization: "Inovex Media & Tech",
    location: "Nepal",
    city: "Butwal",
    duration: "Completed",
    responsibilities: [
      "Assisted a senior frontend developer in building and maintaining client websites using HTML, CSS, Next.js, and Tailwind CSS.",
      "Built and styled UI components and page layouts based on design direction, contributing to live project builds.",
      "Gained hands-on experience with modern frontend workflows while supporting an experienced developer on real client work.",
    ],
  },
];

export const skills: SkillEntry[] = [
  {
    name: "Communication & Teamwork",
    category: "Communication",
    level: 5,
    description: "Strong communication skills with proven ability to work effectively in a team environment.",
  },
  {
    name: "Public Speaking",
    category: "Communication",
    level: 5,
    description: "Confident public speaker — won the guest round at Lumbini Toastmasters Club.",
  },
  {
    name: "Audience Engagement",
    category: "Communication",
    level: 5,
    description: "Grows and engages audiences across Instagram, YouTube, and live events.",
  },
  {
    name: "Leadership",
    category: "Leadership",
    level: 4,
    description: "Leads sponsorship acquisition and marketing coordination for live events.",
  },
  {
    name: "Empathy & Interpersonal Skills",
    category: "Other",
    level: 5,
    description: "Connects confidently with audiences and respects the dignity of each individual.",
  },
  {
    name: "Event & Sponsorship Management",
    category: "Business",
    level: 4,
    description: "Coordinates sponsorship handling and marketing for live events with Event Batauli.",
  },
  {
    name: "Marketing Coordination",
    category: "Business",
    level: 4,
    description: "Executes marketing plans alongside event organizing teams from planning through event day.",
  },
  {
    name: "Business Planning & Presentation",
    category: "Business",
    level: 4,
    description: "2nd runner-up, Business Plan Challenge 4.0, presenting a full business plan built around Agave.",
  },
  {
    name: "React.js / Next.js / TypeScript",
    category: "Technical",
    level: 3,
    description: "Building and styling UI components and page layouts on live client projects.",
  },
  {
    name: "TailwindCSS / ShadCN / Redux",
    category: "Technical",
    level: 3,
    description: "Styling and state tooling used in frontend development work.",
  },
  {
    name: "Git / GitHub",
    category: "Technical",
    level: 3,
    description: "Version control for collaborative frontend development.",
  },
  {
    name: "Vercel / Railway",
    category: "Technical",
    level: 3,
    description: "Deployment platforms used for shipping frontend projects.",
  },
  {
    name: "Photoshop / Illustrator",
    category: "Technical",
    level: 3,
    description: "Visual design tools used for content and promotional material.",
  },
];

export const projects: ProjectEntry[] = [
  {
    name: "Podcast Appearances",
    overview:
      "Featured guest across two YouTube podcast productions: a 'Seat Down' conversation series with Mr. Sangeet Sunar, and a New Zealand immigration breakdown episode with Student Visa Network.",
    role: "Guest / Speaker",
    outcome: "Two published long-form video conversations reaching a public YouTube audience.",
    impact: "Built public-facing communication experience and topical credibility on immigration and visa themes.",
    tags: ["Media", "Public Speaking", "YouTube"],
  },
  {
    name: "GBA Unisex Salon — Certification Ceremony",
    overview: "Hosted a certification ceremony for GBA Unisex Salon in Kalikanagar, Butwal.",
    role: "Host / Emcee",
    outcome: "Successfully hosted the live ceremony program from start to finish.",
    impact: "Demonstrated event-hosting and stage presence for a business client.",
    tags: ["Hosting", "Events"],
  },
  {
    name: "GBA Unisex Salon — Face Model",
    overview: "Worked as the face model for GBA Unisex Salon's brand representation.",
    role: "Model",
    outcome: "Represented the salon's brand image in promotional material.",
    impact: "Contributed to the salon's public brand identity.",
    tags: ["Modelling", "Brand"],
  },
  {
    name: "Event Batauli — Concerts & Sponsorship",
    overview:
      "Led sponsorship acquisition and marketing coordination for live concerts, including shows for artists VZN and Bikki Gurung.",
    role: "Event Manager",
    outcome: "Secured and managed sponsor partnerships supporting event viability.",
    impact: "Contributed directly to the commercial viability of live concert events.",
    tags: ["Marketing", "Sponsorship", "Events"],
  },
  {
    name: "Client Frontend Builds",
    overview:
      "Supported a senior frontend developer in building and maintaining client websites using HTML, CSS, Next.js, and Tailwind CSS.",
    role: "Junior Frontend Developer",
    outcome: "Built and styled UI components and page layouts contributing to live client projects.",
    impact: "Gained hands-on experience with modern frontend workflows on real client work.",
    tags: ["Next.js", "Tailwind CSS", "Frontend"],
  },
];

export const achievements: AchievementEntry[] = [
  {
    title: "2nd Runner-Up — Business Plan Challenge 4.0",
    description:
      "Placed 3rd out of competing teams with a fully functional business plan built around Agave as the main ingredient, producing environmentally and cost-effective products.",
  },
  {
    title: "Mr. and Miss. Fresher 2024 — Winner",
    description: "Won Miss Fresher 2024 at Tilottama Campus.",
    date: "17 December 2024",
  },
  {
    title: "International Recognition — New Zealand",
    description:
      "Recognized and selected to work at Immigration Visa Network, 22 Avanda Avenue, Rolleston, New Zealand, as a Client Relationship Manager. The opportunity required completion of a bachelor's degree, which was still in progress.",
  },
  {
    title: "Lumbini Toastmasters Club — Guest Round Winner",
    description: "Attended and won the guest round at Lumbini Toastmasters Club.",
  },
];

export const strengths = [
  "Good communication skills and ability to work in a team environment",
  "Hardworking, dedicated, and able to work under pressure",
  "Respects the dignity and potential of each individual",
  "Ability to connect with audiences",
  "Empathy",
  "Very versatile",
];

export const references: ReferenceEntry[] = [
  {
    name: "Suhan Shrestha",
    role: "Senior Full Stack Developer",
    organization: "Inovex Media & Tech",
  },
  {
    name: "Prem Raj Pokhrel",
    role: "Co-ordinator",
    organization: "Siddhartha International College",
  },
  {
    name: "Alzina Gurung",
    role: "C.E.O.",
    organization: "GBA Unisex Salon",
  },
  {
    name: "Sangeet Sunar",
    role: "Senior IELTS/PTE Instructor",
    organization: "",
  },
];
