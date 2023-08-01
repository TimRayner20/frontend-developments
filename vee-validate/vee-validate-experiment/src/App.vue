<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

//rules
const passwordRules = yup.string().required().min(8);
const emailRules = yup.string().required().email();

const onSubmit = (values: any) => {
  console.log(values);
};
</script>

<template>
  <div id="app">
    <Form @submit="onSubmit">
      <label for="email"> email </label>
      <br />
      <Field type="email" name="email" :rules="emailRules" />
      <br />
      <ErrorMessage name="email" />
      <br />
      <label for="password"> password </label>
      <br />
      <Field type="password" name="password" :rules="passwordRules" />
      <br />
      <ErrorMessage name="password" />
      <br />
      <button>Log in</button>
    </Form>
  </div>
</template>

<style scoped></style>
