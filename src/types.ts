// src/types.ts
export interface Mistake {
  word: string;
  article: 'der' | 'die' | 'das';
  translations: Record<string, string>; 
  ruleId: string;
  count: number;
  lastAttempt: Date;
}

export interface Statistics {
  totalAttempts: number;
  correctAnswers: number;
  mistakes: Mistake[];
  byRule: Record<string, { attempts: number; mistakes: number }>;
}

export type ViewMode = 'learning' | 'mistakes' | 'statistics' | 'rules';