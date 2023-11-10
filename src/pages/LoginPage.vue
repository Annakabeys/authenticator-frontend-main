<template >
  <AuthForms>
    <template #header>
      <h1>Login</h1>
    </template>

    <template #form>
      <LoginForm />
    </template>

    <template #footer></template>
  </AuthForms>
</template>

<script setup lang="ts">
import AuthForms from '../components/templates/AuthForms.vue'
import LoginForm from '../components/organisms/a-loginForm.vue'
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>