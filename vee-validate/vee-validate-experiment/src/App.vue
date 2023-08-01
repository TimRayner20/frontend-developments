<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";

const onSubmit = (values: any) => {
  console.log(values);
};

const validateEmail = (value: any) => {
  // if the field is empty
  if (!value) {
    return "This field is required";
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return "This field must be a valid email";
  }
  // All is good
  return true;
};
</script>

<template>
  <div id="app">
    <Form @submit="onSubmit">
      <Field type="email" name="email" :rules="validateEmail" />
      <ErrorMessage name="email" />

      <button>Sign up for newsletter</button>
    </Form>
  </div>
</template>

<style scoped></style>
