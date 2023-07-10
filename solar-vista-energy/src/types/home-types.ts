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

//TODO: move company badge to a more generic global type location
export type CompanyBadge = {
  company: string;
  image: string;
  link: string;
};
