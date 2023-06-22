<script setup lang="ts">
import ProjectPreview from "./ProjectPreview.vue";

const projects: Array<any> = [
  {
    title: "Project 1",
    image: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
  },
  {
    title: "Project 2",
    image: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
  },
  {
    title: "Project 3",
    image: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
  },
  {
    title: "Project 4",
    image: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
  },
];

// https://www.youtube.com/watch?v=3Z780EOzIQs
/**
 *       <ProjectPreview
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :image="project.image"
        :description="project.description"
      />
 */
</script>
<template>
  <div class="projects border">
    <div class="slider">
      <div class="slide-track">
        <!-- 9 SLIDES -->
        <div class="slide">
          1
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div class="slide">
          2
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div class="slide">
          3
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div class="slide">
          4
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div class="slide">
          5
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div class="slide">
          6
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div class="slide">
          7
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div class="slide">
          8
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div class="slide">
          9
          <img src="https://picsum.photos/200/300" alt="" />
        </div>

        <!-- SAME 9 SLIDES (DOUBLED) -->
        <div class="slide">
          1
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div class="slide">
          2
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div class="slide">
          3
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div class="slide">
          4
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div class="slide">
          5
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div class="slide">
          6
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div class="slide">
          7
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div class="slide">
          8
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
        <div class="slide">
          9
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.projects {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

.slider {
  height: 250px; /** think this makes it un-responsive */
  margin: auto;
  position: relative;
  width: 90%;
  display: grid;
  place-items: center;
}

.slide-track {
  display: flex;
  /** slide track width = total number of slides (9x2=18) x individual slide width (250px) */
  width: calc(250px * 18);
  animation: scroll 40s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 9));
  }
}

.slide {
  height: 200px;
  width: 250px;
  display: flex;
  align-items: center;
  padding: 15px;
  perspective: 100px;
}

img {
  width: 100%;
  transition: transform 0.5s;
  &:hover {
    transform: translateZ(20px); /** Maybe dont transform here? */
  }
}

/** GRADIENT SHADOWS  */
.slider::before,
.slider::after {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  content: "";
  height: 100%;
  position: absolute;
  width: 15%;
  z-index: 2;
}

.slider::before {
  left: 0;
  top: 0;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
</style>
