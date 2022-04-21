export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  options?: string[];
};

export type Category = { id: number; name: string };
