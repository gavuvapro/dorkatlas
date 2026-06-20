export interface Operator {
  id: string;
  name: string;
  description: string;
  syntax: string;
  useCases: string[];
  examples: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  professionTags: string[];
  intentTags: string[];
  category: string;
  isAdvanced: boolean;
}

export interface Profession {
  id: string;
  name: string;
  description: string;
  icon: string;
  exampleQueries: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Intent {
  id: string;
  name: string;
  description: string;
}

export interface SearchQuery {
  id: string;
  query: string;
  description: string;
  operators: string[];
  profession: string;
  intent: string;
  category: string;
  timestamp: string;
}

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type ProfessionFilter = string;
export type IntentFilter = string;