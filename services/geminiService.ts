
import { GoogleGenAI } from "@google/genai";
import type { AnalysisContent } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development and should not appear in production.
  // The environment variable is expected to be set.
  console.warn("API_KEY environment variable not set. Using placeholder data.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const generateContentWithFallback = async (prompt: string, fallback: string): Promise<string> => {
    if (!API_KEY) {
        return new Promise(resolve => setTimeout(() => resolve(fallback), 1000));
    }
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                temperature: 0.5,
                topP: 0.95,
            },
        });
        return response.text;
    } catch (error) {
        console.error("Error fetching content from Gemini API:", error);
        throw new Error("Failed to generate content from Gemini API. Please check your API key and network connection.");
    }
};

export const fetchAllAnalysis = async (): Promise<AnalysisContent> => {
    const economicModelPrompt = `
    Analyze the economic model of a non-monetary, reciprocal peer-to-peer skill-sharing platform.
    Discuss its potential impact on local economies, focusing on community building, social capital, and access to knowledge outside traditional markets.
    Keep the analysis to a concise paragraph.
    `;
    const ratingSystemPrompt = `
    Discuss the ethical considerations of a rating system in a peer-to-peer skill-sharing platform.
    Focus on the potential for implicit bias (racial, gender, etc.) to influence ratings and how this could create inequalities within the system.
    Suggest one potential mitigation strategy.
    Keep the discussion to a concise paragraph.
    `;
    const skillVerificationPrompt = `
    Discuss the security and trust challenges of verifying user-provided skills on a peer-to-peer platform.
    What are the risks of unverified skills?
    Briefly mention two methods a platform could implement to build trust in the skills being offered.
    Keep the discussion to a concise paragraph.
    `;
    const tokenSystemPrompt = `
    Explain how a flexible token system could be used to value contributions to a group project on a peer-to-peer skill-sharing platform.
    Discuss how it could ensure fair compensation for different roles (e.g., project manager, designer, coder) and varying levels of effort.
    Keep the explanation to a concise paragraph.
    `;
    const projectManagementPrompt = `
    Analyze the primary technical and social challenges of managing a decentralized project team within a community-driven environment like a skill-sharing platform.
    Focus on accountability, milestone tracking, and conflict resolution.
    Suggest one potential solution or approach for each challenge.
    Keep the analysis to a concise paragraph.
    `;


    const fallbackEconomicModel = "A non-monetary, reciprocal exchange system fosters a gift economy, strengthening community bonds and social capital. By decoupling learning from financial capacity, it democratizes access to skills, empowering individuals and enriching the local economy with a diverse, resilient, and collaborative workforce. This model prioritizes human connection and mutual growth over profit.";
    const fallbackRatingSystem = "Rating systems risk perpetuating societal biases, where users may unconsciously rate individuals differently based on stereotypes. This can disadvantage marginalized groups. To mitigate this, platforms could implement 'blind' initial reviews or use structured feedback focusing on objective skill criteria rather than subjective personality traits to promote fairness.";
    const fallbackSkillVerification = "The primary risk of unverified skills is the potential for low-quality or even fraudulent knowledge exchange, eroding user trust. To counter this, a platform could implement a peer-vouching system, where users who have successfully learned a skill can endorse the provider. Another method is requiring providers to submit a portfolio or complete a small, platform-administered test to earn a 'verified' badge.";
    const fallbackTokenSystem = "A flexible token system allows a project's credit pool to be distributed based on agreed-upon task values. Roles like project management can be assigned a steady credit 'drip' for ongoing effort, while task-based work like coding or design is rewarded upon completion of milestones. This ensures compensation reflects both the time and value of diverse contributions, fostering fairness and motivation.";
    const fallbackProjectManagement = "Decentralized teams face challenges in accountability, milestone tracking, and conflict resolution. Accountability can be addressed with transparent, public task boards. Milestones can be tied to automated credit distribution upon team approval. For conflicts, a system of elected community moderators can offer mediation, ensuring disputes are resolved fairly and constructively within the platform's community-driven ethos.";


    const [economicModel, ratingSystem, skillVerification, tokenSystem, projectManagement] = await Promise.all([
        generateContentWithFallback(economicModelPrompt, fallbackEconomicModel),
        generateContentWithFallback(ratingSystemPrompt, fallbackRatingSystem),
        generateContentWithFallback(skillVerificationPrompt, fallbackSkillVerification),
        generateContentWithFallback(tokenSystemPrompt, fallbackTokenSystem),
        generateContentWithFallback(projectManagementPrompt, fallbackProjectManagement),
    ]);

    return { economicModel, ratingSystem, skillVerification, tokenSystem, projectManagement };
};
