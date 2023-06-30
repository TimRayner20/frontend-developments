<script setup lang="ts">
import { reactive } from "vue";
//https://www.sunsave.energy/signup - price calculator

enum questionType {
  text,
  number,
  choice,
  list,
}

type calculatorStep = {
  index: number;
  title: string;
  stepCompleted: boolean;
  question?: question;
};

type question = {
  question: string;
  choices?: string[];
  answer: any;
  type: questionType;
};

const defaultSteps: calculatorStep[] = [
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
  },
  {
    index: 4,
    title: "Where would you like the solar panels to be installed? (address)",
    stepCompleted: false,
    question: {
      question: "Where would you like the solar panels to be installed?",
      answer: "",
      type: questionType.text,
    },
  },
  {
    index: 5,
    title: "How large is your roof? (m2)",
    stepCompleted: false,
    question: {
      question: "How large is your roof?",
      answer: "",
      type: questionType.number,
    },
  },
  {
    index: 6,
    title: "You could save (with contact form)",
    stepCompleted: false,
  },
];
const data = reactive({
  currentCalculatorStep: defaultSteps[0] as calculatorStep,
  calculatorSteps: defaultSteps as calculatorStep[],
});

const incrementStep = () => {
  console.log("I worked");
  if (data.currentCalculatorStep.index === data.calculatorSteps.length - 1)
    return;
  const nextStepIndex = data.currentCalculatorStep.index + 1;
  data.currentCalculatorStep = data.calculatorSteps[nextStepIndex];
};

const decrementStep = () => {
  if (data.currentCalculatorStep.index === 0) return;
  const previousStepIndex = data.currentCalculatorStep.index - 1;
  data.currentCalculatorStep = data.calculatorSteps[previousStepIndex];
};
</script>

<template>
  <!-- Step Bar-->

  <div class="container display flex flex-col m-auto border">
    <!-- HEADER-->
    <div class="text-center md:text-left">
      Step {{ data.currentCalculatorStep.index + 1 }}
    </div>
    <div class="step-content text-center md:text-left">
      <!-- STEP [1-6] -->
      <div class="step" id="step" ref="step">
        <h3>
          {{
            data.currentCalculatorStep.question?.question
              ? data.currentCalculatorStep.question?.question
              : data.currentCalculatorStep.title
          }}
        </h3>
        <div class="" v-if="data.currentCalculatorStep.question">
          <div
            v-if="
            data.currentCalculatorStep.question!.type === questionType.choice 
          "
          >
            <div
              class="mb-6 px-5"
              v-for="choice in data.currentCalculatorStep.question!.choices"
            >
              <button
                class="btn bg-[#41B883] text-white rounded-md p-3 mt-6 w-1/2 mr-5 m-auto md:ml-0"
              >
                {{ choice }}
              </button>
            </div>
          </div>
          <div
            v-if="
            data.currentCalculatorStep.question!.type === questionType.number
          "
          >
            <input
              type="number"
              v-model="data.currentCalculatorStep.question!.answer"
            />
          </div>
          <div
            v-if="data.currentCalculatorStep.question!.type === questionType.text"
          >
            <input
              type="text"
              v-model="data.currentCalculatorStep.question!.answer"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- FOOTER-->
    <div class="footer flex m-auto">
      <button
        v-if="data.currentCalculatorStep.index > 0"
        type="button"
        @click="decrementStep"
      >
        Back
      </button>
      <button
        v-if="
          data.currentCalculatorStep.index < data.calculatorSteps.length - 1
        "
        type="button"
        @click="incrementStep"
      >
        Next
      </button>
    </div>
  </div>
</template>
