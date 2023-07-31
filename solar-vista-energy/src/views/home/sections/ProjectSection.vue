<script setup lang="ts">
import ProjectPreview from "../components/ProjectPreview.vue";

const projects: Array<any> = [
  {
    title: "Amazon: Project Desert",
    image:
      "https://images.unsplash.com/photo-1502637098811-fa9526d2b659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
  },
  {
    title: "Lakeside Eco Build",
    image:
      "https://images.unsplash.com/flagged/photo-1566838803980-56bfa5300e8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
  },
  {
    title: "Cisco Data Centre",
    image:
      "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
  },
  {
    title: "E-Shuttle: Charging Stations",
    image:
      "https://plus.unsplash.com/premium_photo-1661916408325-5280388bf1e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
  <div class="container m-auto overflow-hidden my-20 lg:mb-8">
    <h3 class="text-center lg:text-left my-5 lg:px-2 font-bold">
      Proud Projects
    </h3>
    <p class="px-2 mb-8 text-center lg:text-left">
      Just a few notable names we've worked with, to help the world be a better
      place, and give our next generaton a brighter future.
    </p>
    <div class="projects grid place-items-center relative lg:min-h-[50vh] my-6">
      <div class="slider m-auto w-[90%] lg:w-full lg:overflow-hidden lg:py-5">
        <div class="slide-track flex">
          <!-- 4 SLIDES -->
          <ProjectPreview
            v-for="project in projects"
            :key="project.title"
            :title="project.title"
            :image="project.image"
            :description="project.description"
            class="slide border shadow-lg"
          />

          <!-- SAME 4 SLIDES (DOUBLED) -->
          <ProjectPreview
            v-for="project in projects"
            :key="project.title"
            :title="project.title"
            :image="project.image"
            :description="project.description"
            class="slide border shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.slide-track {
  display: flex;
  /** slide track width = total number of slides (9x2=18) x individual slide width (250px) */
  width: calc(85vw * 8);
  animation: scroll 20s linear infinite;
  @media (min-width: 768px) {
    width: calc(60vw * 8);
  }
  @media (min-width: 1280px) {
    width: calc(25vw * 8);
  }
  &:hover {
    animation-play-state: paused;
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-85vw * 4));
  }
}

//md
@media (min-width: 768px) {
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-60vw * 4));
    }
  }
}

//lg
@media (min-width: 1280px) {
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-25vw * 4));
    }
  }
}

.slide {
  width: 85vw;
  display: flex;
  align-items: center;

  perspective: 100px;
  @media (min-width: 768px) {
    width: 60vw;
  }
  @media (min-width: 1280px) {
    width: 25vw;
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
  @media (min-width: 768px) {
    width: 5%;
  }
  @media (min-width: 1280px) {
    width: 10%;
  }
}

.slider::before {
  left: 0;
  top: 0;
}
.slider::after {
  right: -10px;
  top: 0;
  transform: rotateZ(180deg);
}
</style>
