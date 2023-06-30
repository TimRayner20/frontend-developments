<script setup lang="ts">
import { computed, reactive, watch } from "vue";
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
  answered: boolean;
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

const data = reactive({
  currentCalculatorStep: defaultSteps[0] as calculatorStep,
  calculatorSteps: defaultSteps as calculatorStep[],
});

const selectChoice = (choice: string) => {
  data.currentCalculatorStep.question!.answer = choice;
  data.currentCalculatorStep.answered = true;
};

watch(
  () => data.currentCalculatorStep.question?.answer,
  () => {
    console.log("watch");
    if (data.currentCalculatorStep.question) {
      const answer = data.currentCalculatorStep.question.answer;

      if (typeof answer === "number" || answer.length) {
        data.currentCalculatorStep.answered = true;
      }
    }
  }
);

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
          <!-- Choice -->
          <div
            v-if="
            data.currentCalculatorStep.question!.type === questionType.choice 
          "
            class="container grid grid-cols-1 md:grid-cols-2 m-auto items-center align-middle w-full text-center"
          >
            <div
              class="mb-6"
              v-for="choice in data.currentCalculatorStep.question!.choices"
            >
              <button
                class="btn bg-[#c4c9c7] text-white rounded-md p-3 mt-6 w-full lg:w-3/4 mr-5 m-auto md:ml-0 m"
                @click="selectChoice(choice)"
                :class="{
                  answered:
                    data.currentCalculatorStep.question.answer === choice,
                }"
              >
                {{ choice }}
              </button>
            </div>
          </div>
          <!-- Number-->
          <div
            v-if="
            data.currentCalculatorStep.question!.type === questionType.number
          "
          >
            <input
              type="number"
              v-model="data.currentCalculatorStep.question!.answer"
              class="shadow appearance-none border rounded w-full md:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-auto"
            />
          </div>
          <!-- Text-->
          <div
            v-if="data.currentCalculatorStep.question!.type === questionType.text"
          >
            <input
              type="text"
              v-model="data.currentCalculatorStep.question!.answer"
              class="shadow appearance-none border rounded w-full md:w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-auto"
            />
          </div>
        </div>
        <div class="" v-else>
          <p>With the information you have provided, you could save:</p>
          <p>£1000.00</p>
          <p>per year</p>
          <p>£250000.00</p>
          <p>over 25 years</p>
        </div>
      </div>
    </div>
    <!-- FOOTER-->
    <div class="footer flex m-auto">
      <button
        v-if="data.currentCalculatorStep.index > 0"
        type="button"
        @click="decrementStep"
        class="btn bg-[#41B883] text-white rounded-md p-3 mt-6 mr-5 m-auto md:ml-0"
      >
        Back
      </button>
      <button
        v-if="
          data.currentCalculatorStep.index < data.calculatorSteps.length - 1
        "
        type="button"
        @click="incrementStep"
        :disabled="!data.currentCalculatorStep.answered"
        class="btn text-white rounded-md p-3 mt-6 mr-5 m-auto md:ml-0"
        :class="{
          'bg-[#41B883]': data.currentCalculatorStep.answered,
          'bg-[#c4c9c7]': !data.currentCalculatorStep.answered,
        }"
      >
        Next
      </button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.answered {
  background-color: #41b883;
  color: white;
}
</style>
