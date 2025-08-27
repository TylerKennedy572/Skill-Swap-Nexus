
export interface Skill {
  id: number;
  title: string;
  providerName: string;
  providerAvatar: string;
  rating: number;
  isVerified: boolean;
  cost: number; // in "Time Credits"
}

export interface Project {
    id: number;
    title: string;
    description: string;
    requiredSkills: string[];
    teamMembers: { name: string; avatar: string }[];
    creditPool: number;
}

export interface AnalysisContent {
  economicModel: string;
  ratingSystem: string;
  skillVerification: string;
  tokenSystem: string;
  projectManagement: string;
}
