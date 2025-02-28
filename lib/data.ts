import { Job, UserSkills } from './types';

export const mockJobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "$70,000 - $90,000",
    requiredSkills: ["React", "Next.js", "JavaScript", "Tailwind CSS"],
    matchScore: 85,
    description: "We're looking for a skilled Frontend Developer to join our remote team. You'll be responsible for building responsive user interfaces using React and Next.js. The ideal candidate has strong JavaScript skills and experience with modern CSS frameworks like Tailwind."
  },
  {
    id: 2,
    title: "UI Engineer",
    company: "DesignPro",
    location: "New York, USA",
    salary: "$80,000 - $100,000",
    requiredSkills: ["Figma", "React", "CSS"],
    matchScore: 70,
    description: "DesignPro is seeking a UI Engineer to create beautiful, intuitive interfaces. You'll work closely with our design team to implement pixel-perfect UIs. Experience with Figma and strong React skills are essential."
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Innovate Inc",
    location: "Remote",
    salary: "$90,000 - $120,000",
    requiredSkills: ["React", "Node.js", "MongoDB", "Express"],
    matchScore: 65,
    description: "Join our dynamic team as a Full Stack Developer. You'll be working on both frontend and backend aspects of our applications. Strong knowledge of the MERN stack is required."
  },
  {
    id: 4,
    title: "React Native Developer",
    company: "MobileFirst",
    location: "Remote",
    salary: "$75,000 - $95,000",
    requiredSkills: ["React Native", "JavaScript", "TypeScript", "Redux"],
    matchScore: 45,
    description: "MobileFirst is looking for a React Native Developer to build cross-platform mobile applications. Experience with TypeScript and state management using Redux is highly desired."
  },
  {
    id: 5,
    title: "Senior Frontend Architect",
    company: "Enterprise Solutions",
    location: "Asaba, Delta",
    salary: "$120,000 - $150,000",
    requiredSkills: ["React", "TypeScript", "Next.js", "System Design", "Performance Optimization"],
    matchScore: 90,
    description: "We're seeking a Senior Frontend Architect to lead our frontend development efforts. You'll be responsible for making architectural decisions, implementing best practices, and mentoring junior developers."
  }
];

export const mockUserSkills: UserSkills = {
  skills: ["React", "JavaScript", "Tailwind CSS", "Next.js", "TypeScript"]
};

export function fetchJobs(): Promise<Job[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockJobs);
    }, 500);
  });
}

export function fetchUserSkills(): Promise<UserSkills> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUserSkills);
    }, 300);
  });
}

export function getSkillGapSuggestions(requiredSkills: string[], userSkills: string[]): string[] {
  return requiredSkills.filter(skill => !userSkills.includes(skill));
}