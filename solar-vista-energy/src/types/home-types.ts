import { questionType } from "@/enums/home-enums";

export type calculatorStep = {
  index: number;
  title: string;
  stepCompleted: boolean;
  question?: question;
  answered: boolean;
};

export type question = {
  question: string;
  choices?: string[];
  answer: any;
  type: questionType;
};
