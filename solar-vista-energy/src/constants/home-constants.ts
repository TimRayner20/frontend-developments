import { questionType } from "@/enums/home-enums";
import type { CompanyBadge, calculatorStep } from "@/types/home-types";

export const defaultSteps: calculatorStep[] = [
  {
    index: 0,
    title: "Select your home type",
    stepCompleted: false,
    question: {
      question: "Select your home type",
      choices: [
        "Detached",
        "Semi-detached",
        "Terraced",
        "Flat",
        "Bungalow",
        "Other",
      ],
      answer: "",
      type: questionType.choice,
    },
    answered: false,
  },

  {
    index: 1,
    title: "How many people live in your home?",
    stepCompleted: false,
    question: {
      question: "How many people live in your home?",
      answer: "",
      type: questionType.number,
    },
    answered: false,
  },
  {
    index: 2,
    title: "Do you own your home?",
    stepCompleted: false,
    question: {
      question: "Do you own your home?",
      choices: ["Yes", "No"],
      answer: "",
      type: questionType.choice,
    },
    answered: false,
  },
  {
    index: 3,
    title: "How much do you spend on electricity per month?",
    stepCompleted: false,
    question: {
      question: "How much do you spend on electricity per month?",
      answer: "",
      type: questionType.number,
    },
    answered: false,
  },
  {
    index: 4,
    title:
      "Where would you like the solar panels to be installed? (address, our adv satalite tech will determine roof space)",
    stepCompleted: false,
    question: {
      question: "Where would you like the solar panels to be installed?",
      answer: "",
      type: questionType.text,
    },
    answered: false,
  },
  {
    index: 5,
    title: "What's your email address?",
    stepCompleted: false,
    question: {
      question: "Now we just need your email address",
      answer: "",
      type: questionType.text,
    },
    answered: false,
  },
  {
    index: 6,
    title: "You could save (with contact form)",
    stepCompleted: false,
    answered: false,
  },
];

export const companyBadges: Array<CompanyBadge> = [
  {
    company: "Amazon AWS",
    image:
      "https://cdn.icon-icons.com/icons2/2389/PNG/512/amazon_aws_logo_icon_145507.png",
    link: "https://aws.amazon.com/",
  },
  {
    company: "Land Rover",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Land_Rover_logo_black.svg/2560px-Land_Rover_logo_black.svg.png",
    link: "https://www.landrover.co.uk/index.html",
  },
  {
    company: "Cisco",
    image:
      "https://cdn.freebiesupply.com/images/large/2x/cisco-logo-black-transparent.png",
    link: "https://www.cisco.com/site/uk",
  },
  {
    company: "Airbnb",
    image:
      "https://cdn.freebiesupply.com/images/large/2x/airbnb-logo-black-transparent.png",
    link: "https://www.airbnb.co.uk/",
  },
  {
    company: "Nissan",
    image: "https://www.carlogos.org/car-logos/nissan-logo-2020-black.png",
    link: "https://www.nissan.co.uk/",
  },
  {
    company: "WWF",
    image:
      "https://cdn.freebiesupply.com/logos/large/2x/wwf-3-logo-black-and-white.png",
    link: "https://www.wwf.org.uk/",
  },
];

export const companyHighlights: Array<any> = [
  {
    title: "96GW solar modules shipments",
    icon: "fa-standard fa-solar-panel",
  },
  {
    title: "Module capacity 75GW",
    icon: "fa-standard fa-battery-full",
  },
  {
    title: "25GW project pipeline",
    icon: "fa-standard fa-leaf",
  },
  {
    title: "Subsidiaries in 23 countries",
    icon: "fa-standard fa-earth-americas",
  },
  {
    title: "Over 20 manufacturing facilities",
    icon: "fa-standard fa-industry",
  },
];
