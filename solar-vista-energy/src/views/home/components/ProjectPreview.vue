<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="preview-wrapper flex flex-col ml-5 rounded-lg hover:bg-[#34495e] hover:cursor-pointer transition-all duration-300 ease-in-out animated-box in"
  >
    <div class="preview-image w-full">
      <img :src="props.image" :alt="props.title" class="h-[300px] w-full" />
    </div>
    <div class="preview-content text-center md:text-start md:px-5">
      <h3 class="text-xl font-bold my-2">{{ props.title }}</h3>
      <p class="text-lg">
        {{ props.description }}
      </p>
      <a
        href="/about"
        class="btn block bg-[#41B883] text-white rounded-md p-3 w-2/3 mb-6 m-auto md:m-0 md:my-6 md:w-4/12 text-center mt-5"
      >
        Read more
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.preview-wrapper:hover .preview-content {
  color: #ffff;
}

/**
 Animated border effect 
 */

/* The animation starts here */

.animated-box:hover:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 4px;
  background: linear-gradient(120deg, #00f260, #0575e6, #00f260);
  background-size: 300% 300%;
  clip-path: polygon(
    0% 100%,
    3px 100%,
    3px 3px,
    calc(100% - 3px) 3px,
    calc(100% - 3px) calc(100% - 3px),
    3px calc(100% - 3px),
    3px 100%,
    100% 100%,
    100% 0%,
    0% 0%
  );
}

.animated-box:hover:after {
  animation: frame-enter 1s forwards ease-in-out reverse,
    gradient-animation 4s ease-in-out infinite;
}

/* motion */
@keyframes gradient-animation {
  0% {
    background-position: 15% 0%;
  }
  50% {
    background-position: 85% 100%;
  }
  100% {
    background-position: 15% 0%;
  }
}

@keyframes frame-enter {
  0% {
    clip-path: polygon(
      0% 100%,
      3px 100%,
      3px 3px,
      calc(100% - 3px) 3px,
      calc(100% - 3px) calc(100% - 3px),
      3px calc(100% - 3px),
      3px 100%,
      100% 100%,
      100% 0%,
      0% 0%
    );
  }
  25% {
    clip-path: polygon(
      0% 100%,
      3px 100%,
      3px 3px,
      calc(100% - 3px) 3px,
      calc(100% - 3px) calc(100% - 3px),
      calc(100% - 3px) calc(100% - 3px),
      calc(100% - 3px) 100%,
      100% 100%,
      100% 0%,
      0% 0%
    );
  }
  50% {
    clip-path: polygon(
      0% 100%,
      3px 100%,
      3px 3px,
      calc(100% - 3px) 3px,
      calc(100% - 3px) 3px,
      calc(100% - 3px) 3px,
      calc(100% - 3px) 3px,
      calc(100% - 3px) 3px,
      100% 0%,
      0% 0%
    );
  }
  75% {
    -webkit-clip-path: polygon(
      0% 100%,
      3px 100%,
      3px 3px,
      3px 3px,
      3px 3px,
      3px 3px,
      3px 3px,
      3px 3px,
      3px 0%,
      0% 0%
    );
  }
  100% {
    -webkit-clip-path: polygon(
      0% 100%,
      3px 100%,
      3px 100%,
      3px 100%,
      3px 100%,
      3px 100%,
      3px 100%,
      3px 100%,
      3px 100%,
      0% 100%
    );
  }
}
</style>
