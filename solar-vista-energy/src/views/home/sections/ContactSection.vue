<script setup lang="ts">
import { reactive } from "vue";
import ButtonSpinner from "@/components/animation/ButtonSpinner.vue";

const data = reactive({
  form: {
    name: "",
    company: "",
    email: "",
    message: "",
    submitted: false as boolean,
  },
  submission: false,
  loading: false,
});

const validateForm = () => {
  if (
    data.form.name.length &&
    data.form.company.length &&
    data.form.email.length &&
    data.form.message.length
  ) {
    return true;
  } else {
    return false;
  }
};

const submitForm = (e: event) => {
  e.preventDefault();
  data.loading = true;
};
</script>

<template>
  <div class="contact-section container m-auto my-20">
    <h3 class="text-4xl text-center md:text-left md:text-6xl my-5 font-bold">
      Contact Us
    </h3>
    <p class="text-lg mt-6 my-5 text-center md:text-left">
      Want to get in touch? We'd love to hear from you! You can reach us by
      filling out the form below or by emailing us at
      <a href="mailto:tim.rayner2020@gmail.com">contact@solarvista.com</a>
    </p>

    <form class="container w-3/4 m-auto max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Name*
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            v-model="data.form.name"
            @input="(event) => (data.form.name = event.target.value)"
            :class="{
              'border-red-500': !data.form.name.length && data.submission,
            }"
          />
          <p
            v-if="!data.form.name.length && data.submission"
            class="text-red-500 text-xs italic"
          >
            Please fill out this field.
          </p>
        </div>

        <div class="w-full md:w-1/2 mb-6 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Company
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
            :class="{
              'border-red-500': !data.form.company.length && data.submission,
            }"
          />
          <p
            v-if="!data.form.company.length && data.submission"
            class="text-red-500 text-xs italic"
          >
            Please fill out this field.
          </p>
        </div>

        <div class="w-full md:w-1/2 mb-6 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
            :class="{
              'border-red-500': !data.form.email.length && data.submission,
            }"
          />
          <p
            v-if="!data.form.email.length && data.submission"
            class="text-red-500 text-xs italic"
          >
            Please fill out this field.
          </p>
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Message
          </label>
          <textarea
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Type message here..."
            rows="5"
            :class="{
              'border-red-500': !data.form.message.length && data.submission,
            }"
          />
          <p
            v-if="!data.form.message.length && data.submission"
            class="text-red-500 text-xs italic"
          >
            Please fill out this field.
          </p>
        </div>
        <div class="w-full md:w-1/2 px-3 mt-6">
          <button
            type="submit"
            @click="(e) => submitForm(e)"
            class="btn block bg-[#41B883] text-white rounded-md p-3 w-full mb-6 m-auto md:m-0 md:w-4/12 text-center"
          >
            <span v-if="!data.form.submitted && !data.loading">Send</span>
            <span v-else-if="data.form.submitted"> Sent</span>
            <ButtonSpinner v-if="data.loading" />
          </button>

          <p v-if="data.form.submitted" class="text-xs italic">
            Thanks for contacting Solar Vista. We'll be in contact 🌞
          </p>
        </div>
      </div>
    </form>
  </div>
</template>
