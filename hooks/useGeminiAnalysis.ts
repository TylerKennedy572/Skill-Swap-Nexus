
import { useState, useEffect } from 'react';
import { fetchAllAnalysis } from '../services/geminiService';
import type { AnalysisContent } from '../types';

const initialState: AnalysisContent = {
  economicModel: 'Loading analysis...',
  ratingSystem: 'Loading analysis...',
  skillVerification: 'Loading analysis...',
  tokenSystem: 'Loading analysis...',
  projectManagement: 'Loading analysis...',
};

export const useGeminiAnalysis = () => {
  const [analysis, setAnalysis] = useState<AnalysisContent>(initialState);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAnalysis = async () => {
      try {
        setLoading(true);
        setError(null);
        const content = await fetchAllAnalysis();
        setAnalysis(content);
      } catch (e) {
        if (e instanceof Error) {
            setError(e.message);
        } else {
            setError("An unknown error occurred.");
        }
        // Set to fallback text on error
        setAnalysis({
            economicModel: "Could not load analysis. This model fosters community by removing financial barriers to learning.",
            ratingSystem: "Could not load analysis. It's crucial to design rating systems that mitigate unconscious bias.",
            skillVerification: "Could not load analysis. Verifying skills through peer reviews or portfolios builds trust.",
            tokenSystem: "Could not load analysis. A flexible token system can fairly reward diverse contributions in group projects.",
            projectManagement: "Could not load analysis. Clear processes for accountability and conflict resolution are vital for decentralized teams."
        });
      } finally {
        setLoading(false);
      }
    };

    getAnalysis();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs only once on mount.

  return { analysis, loading, error };
};
