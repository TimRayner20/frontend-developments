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
  <div class="steps-container" :style="cssStyle">
    <ul class="steps-list">
      <li
        class="step"
        v-for="(step, index) in data.steps"
        :key="index"
        :class="{
          'step-active': index == data.currentStep,
          'step-done': index < data.currentStep,
        }"
      >
        <div class="step-bubble"></div>
        <div class="step-line">
          <div class="line-fill"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.steps-container {
  width: 95%;
  margin: 0 auto;
}

.steps-list {
  display: flex;
  list-style: none;
}

.step {
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  height: 60px; /* not responsive */
}

.step:last-child {
  width: 60px;
  max-width: 60px;
}

.step-bubble {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: var(--passive-color);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
}

.step-line {
  width: 100%;
  height: 5px;
  background-color: var(--passive-color);
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: -10;
}

.line-fill {
  width: 0;
  height: 5px;
  background-color: var(--active-color);
  transition: all 0.3s ease;
}

.step:last-child .step-line {
  display: none;
}

.step-active .step-bubble,
.step-done .step-bubble {
  width: 60px;
  height: 60px;
  background-color: var(--active-color);
}

.step-done .line-fill {
  width: 100%;
}
</style>
