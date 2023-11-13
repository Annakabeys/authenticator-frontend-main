<template>
  <div class="a-form">
    <form name="login-form" method="POST" @submit.prevent="store.loginUser">
      <a-username v-model="store.loginForm.username"/>
      <a-password v-model="store.loginForm.password"/>
      <a-button type="submit" button-name="login-user">Log in</a-button>
    </form>
    <a-button type="button" button-name="register-user" @click="router.push('/register')">
      Register
    </a-button>
  </div>
</template>

<script setup lang="ts">
import AUsername from '../molecules/a-username-input.vue'
import APassword from '../molecules/a-password-input.vue'
import AButton from '../atoms/a-button.vue'
import { useUser } from '../composables/useUser'
import { useRouter } from 'vue-router'

const store = useUser()
const router = useRouter()
</script>

<style scoped>
.a-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 2rem auto;
  border: 1px solid black;
  border-radius: 5px;
}

.a-form input {
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.a-form button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.a-form button:hover {
  background-color: #0056b3;
}
</style>