<script setup lang="ts">
import { reactive } from "vue";
import ButtonSpinner from "@/components/animation/ButtonSpinner.vue";
import SocialIconsSmall from "@/components/social/SocialIconsSmall.vue";
import { isValidEmail } from "@/helpers/email-helpers";
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
    //check if email is valid format
    isValidEmail(data.form.email) &&
    data.form.message.length
  ) {
    return true;
  } else {
    if (!isValidEmail(data.form.email)) {
      data.form.email = "";
    }
    return false;
  }
};

const submitForm = (e: event) => {
  e.preventDefault();
  data.submission = true;

  data.loading = true;

  if (validateForm()) {
    setTimeout(() => {
      data.form.submitted = true;
      console.warn(
        "sorry guys, this form doesn't actually submit anywhere. this is just a demo."
      );
      data.loading = false;
    }, 1000);
  } else {
    data.loading = false;
  }
};
</script>

<template>
  <div
    class="hero-container min-h-screen h-full m-auto flex flex-col md:flex-row p-5 md:pl-0 pr-0"
  >
    <div
      class="content-wrapper w-full md:w-1/2 h-full items-center content-center align-middle m-auto"
    >
      <div class="content-overlay"></div>
      <div class="content relative text-white w-fit m-auto my-16 md:my-0">
        <h1
          class="text-4xl md:text-8xl my-5 p2 font-bold text-center md:text-left"
        >
          Let's Work <strong>Together</strong>
        </h1>
        <h3 class="text-3xl p-2">Start your solar journey today</h3>
        <p class="text-xs hidden md:block italic">
          Lets just pretend like these AI generated human faces aren't blank
        </p>
        <div class="contact-info">
          <p class="my-4 flex items-center justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="mr-3 h-5 w-5"
            >
              <path
                d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
              />
              <path
                d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
              />
            </svg>
            info@example.com
          </p>
          <p class="mb-4 flex items-center justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="mr-3 h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clip-rule="evenodd"
              />
            </svg>
            + 01 234 567 88
          </p>
        </div>
        <div class="social-icons mt-4 mx-auto items-center">
          <SocialIconsSmall />
        </div>
      </div>
    </div>
    <!-- Form Section-->
    <div
      class="form-wrapper w-full md:w-1/2 items-center content-center align-middle m-auto px-20"
    >
      <div class="form-overlay"></div>
      <div class="form md:mt-[80px] mx-auto h-full relative w-fit m-auto">
        <form id="home-contact-form" class="w-3/4 lg:w-full m-auto">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
                for="grid-first-name"
              >
                Name<span :class="{ 'text-red-500': !data.form.name.length }">
                  &nbsp;*</span
                >
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                v-model="data.form.name"
                :class="{
                  'border-red-500': !data.form.name.length && data.submission,
                }"
              />
              <p
                v-if="!data.form.name.length && data.submission"
                class="text-[--primary-error-overlay]"
              >
                Please fill out this field.
              </p>
            </div>

            <div class="w-full md:w-1/2 mb-6 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
                for="grid-company-name"
              >
                Company<span
                  :class="{ 'text-red-500': !data.form.company.length }"
                >
                  &nbsp;*</span
                >
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-company-name"
                type="text"
                placeholder="Doe"
                v-model="data.form.company"
                :class="{
                  'border-red-500':
                    !data.form.company.length && data.submission,
                }"
              />
              <p
                v-if="!data.form.company.length && data.submission"
                class="text-[--primary-error-overlay]"
              >
                Please fill out this field.
              </p>
            </div>

            <div class="w-full md:w-full mb-6 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
                for="grid-email"
              >
                Email<span
                  :class="{
                    'text-red-500':
                      !data.form.email.length || !isValidEmail(data.form.email),
                  }"
                >
                  &nbsp;*</span
                >
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="example@solarvista.com"
                v-model="data.form.email"
                :class="{
                  'border-red-500': !data.form.email.length && data.submission,
                }"
              />
              <p
                v-if="!data.form.email.length && data.submission"
                class="text-[--primary-error-overlay]"
              >
                Please enter a valid email.
              </p>
            </div>

            <div class="w-full md:w-full px-3 mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 font-bold mb-2"
                for="grid-message"
              >
                Message<span
                  :class="{ 'text-red-500': !data.form.message.length }"
                >
                  &nbsp;*</span
                >
              </label>
              <textarea
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-message"
                type="text"
                placeholder="Type message here..."
                rows="5"
                :class="{
                  'border-red-500':
                    !data.form.message.length && data.submission,
                }"
                v-model="data.form.message"
              />
              <p
                v-if="!data.form.message.length && data.submission"
                class="text-[--primary-error-overlay]"
              >
                Please fill out this field.
              </p>
            </div>
            <div class="w-full px-3 mt-6">
              <button
                type="submit"
                @click="(e) => submitForm(e)"
                class="btn block bg-[--secondary] text-white rounded-md p-3 w-full mb-6 m-auto md:m-0 text-center"
              >
                <span v-if="!data.form.submitted && !data.loading">Send</span>
                <span v-else-if="data.form.submitted"> Sent</span>
                <ButtonSpinner v-else-if="data.loading" />
              </button>

              <p v-if="data.form.submitted">
                Thank you {{ data.form.name }} for contacting Solar Vista. We'll
                be in contact 🌞
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.hero-container {
  background-image: url("https://cdn.discordapp.com/attachments/1119779286174408716/1130059223594709002/rayn3r_a_company_meeting_for_a_solar_panel_company_hosted_at_a_b30e7ba9-90aa-42d7-b45c-891ed5e07849.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: bottom;
}

.content-overlay {
  background-color: var(--secondary-overlay);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  @media (min-width: 640px) {
    width: 50%;
    background-color: var(--primary-overlay);
  }
}
.content {
  z-index: 10;
}
.form-overlay {
  @media (min-width: 640px) {
    background-color: var(--primary);
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    z-index: 1;
  }
}
.form {
  z-index: 10;
}
</style>
