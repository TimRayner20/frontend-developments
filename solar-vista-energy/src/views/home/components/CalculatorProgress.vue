<script setup lang="ts">
import type { calculatorStep } from "@/types/home-types";
import type { PropType } from "vue";
import { computed, reactive, onMounted, watch } from "vue";

/**
 * @tutorial - https://www.youtube.com/watch?v=TphsZyv1oRo&t=29s
 */
const props = defineProps({
  steps: {
    type: Array as PropType<calculatorStep[]>,
    required: true,
  },
  currentStep: {
    type: Number,
    required: true,
  },
  activeColor: {
    type: String,
    required: true,
  },
  passiveColor: {
    type: String,
    required: true,
  },
});

const data = reactive({
  steps: props.steps as calculatorStep[],
  currentStep: 0 as Number,
  activeColor: props.activeColor as String,
  passiveColor: props.passiveColor as String,
});

watch(props, () => {
  data.steps = props.steps;
  data.currentStep = props.currentStep;
  data.activeColor = props.activeColor;
  data.passiveColor = props.passiveColor;
});

const cssStyle = computed(() => {
  return {
    "--active-color": data.activeColor,
    "--passive-color": data.passiveColor,
  };
});
</script>

<template>
  <div class="steps-container w-[95%] m-auto" :style="cssStyle">
    <ul class="steps-list flex list-none">
      <li
        class="step flex items-center flex-grow-[1] max-w-[100%] relative h-[60px]"
        v-for="(step, index) in data.steps"
        :key="index"
        :class="{
          'step-active': index == data.currentStep,
          'step-done': index < data.currentStep,
        }"
      >
        <div
          class="step-bubble w-[17.5px] h-[17.5px] lg:w-[35px] lg:h-[35px] rounded-full bg-[--passive-color] transition-all duration-[0.3s] ease-in-out flex items-center justify-center absolute z-20"
        ></div>
        <div
          class="step-line w-full h-[2.5px] bg-[--passive-color] top-[50%] left-0 z-10 transform -translate-y-1/2"
        >
          <div
            class="line-fill w-0 h-[2.5px] bg-[--active-color] transition-all duration-[0.3s] ease-in-out"
          ></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.step:last-child {
  width: 60px;
  max-width: 60px;
}

.step:last-child .step-line {
  display: none;
}

.step-active .step-bubble,
.step-done .step-bubble {
  width: 30px;
  height: 30px;

  /** media query for screen ports above mobile */
  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
  background-color: var(--active-color);
}

.step-done .line-fill {
  width: 100%;
}
</style>
