import React, { createContext, useContext, useEffect, useState } from "react";

export interface PersonalInfo {
  name: string;
  initials: string;
  email: string;
  phone: string;
  location: string;
  titles: string[];
  summary: string;
  github: string;
  linkedin: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: SkillItem[];
}

export interface Certification {
  name: string;
  short: string;
  issuer: string;
  year: string;
  color: string;
  logo: string;
  description: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
}

export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  tools: string[];
  metrics: string[];
  github: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  stats: Stat[];
  skills: SkillCategory[];
  certifications: Certification[];
  experience: Experience[];
  projects: Project[];
}

interface PortfolioContextType {
  data: PortfolioData | null;
  loading: boolean;
  error: string | null;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Failed to load portfolio data");
        }
        const json = await response.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <PortfolioContext.Provider value={{ data, loading, error }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};
