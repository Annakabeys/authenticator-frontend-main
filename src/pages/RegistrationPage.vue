<template >
  <AuthForms>
    <template #header>
      <h1>Registration</h1>
    </template>

    <template #form>
      <RegistrationForm />
    </template>

    <template #footer></template>
  </AuthForms>
</template>

<script setup lang="ts">
import AuthForms from '../components/templates/AuthForms.vue'
import RegistrationForm from '../components/organisms/a-registrationForm.vue'
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>