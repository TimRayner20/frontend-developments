<script setup lang="ts">
import { computed, reactive, watch, ref } from "vue";

import type { calculatorStep } from "@/types/home-types.ts";
import { questionType } from "@/enums/home-enums.ts";
import { defaultSteps } from "@/constants/home-constants.ts";

import CalculatorProgress from "../components/CalculatorProgress.vue";
//https://www.sunsave.energy/signup - price calculator

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
  <div class="">
    <div class="container m-auto">
      <h3 class="text-4xl text-center lg:text-6xl my-2 font-bold py-8">
        Solar Vista Price Calculator
      </h3>
    </div>
    <div class="container display flex flex-col m-auto p-16">
      <!-- HEADER-->
      <div class="text-center md:text-left">
        <!-- progressbar -->
        <CalculatorProgress
          :steps="data.calculatorSteps"
          :currentStep="data.currentCalculatorStep.index"
          :activeColor="'#41B883'"
          :passiveColor="'#c4c9c7'"
        />
      </div>
      <div class="step-content text-center md:text-left p-5">
        <!-- STEP [1-6] -->
        <div
          class="step content-center items-center justify-center"
          id="step"
          ref="step"
        >
          <h3 class="text-white text-center">
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
                  class="btn bg-[#ffff] text-[#34495e] rounded-md p-3 mt-6 w-full lg:w-3/4 mr-5 m-auto md:ml-0 m"
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
              class="w-full md:w-1/2 m-auto"
              v-if="
            data.currentCalculatorStep.question!.type === questionType.number
          "
            >
              <input
                type="number"
                v-model="data.currentCalculatorStep.question!.answer"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <!-- Text-->
            <div
              class="w-full md:w-1/2 m-auto"
              v-if="data.currentCalculatorStep.question!.type === questionType.text"
            >
              <input
                type="text"
                v-model="data.currentCalculatorStep.question!.answer"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-auto"
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
  </div>
</template>
<style scoped lang="scss">
.answered {
  background-color: #41b883;
  color: white;
}
</style>
