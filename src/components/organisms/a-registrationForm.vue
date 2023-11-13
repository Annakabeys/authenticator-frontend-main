<template>
  <div class="a-form">
    <form name="register-form" method="POST" @submit.prevent="store.addUser">
      <a-first-name v-model="store.userForm.firstName"/>
      <a-middle-name v-model="store.userForm.middleName"/>
      <a-last-name v-model="store.userForm.lastName"/>
      <a-username v-model="store.userForm.username"/>
      <a-password v-model="store.userForm.password"/>
      <a-button button-type="submit" button-name="add-user"> Register </a-button>
    </form>

    <a-button button-type="submit" button-name="register-user" @click="router.push('/')">
      Log in
    </a-button>
  </div>
</template>

<script setup lang="ts">
import AFirstName from '../molecules/a-firstName-input.vue'
import AMiddleName from '../molecules/a-middleName-input.vue'
import ALastName from '../molecules/a-lastName-input.vue'
import AUsername from '../molecules/a-username-input.vue'
import APassword from '../molecules/a-password-input.vue'
import AButton from '../atoms/a-button.vue'
import { useRouter } from 'vue-router'
import { useUser } from '../composables/useUser'

const router = useRouter()
const store = useUser()
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