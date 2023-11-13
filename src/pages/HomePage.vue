<template>
  <MainPage>
    <template #header>
      <h1>Home Page</h1>
    </template>

    <template #page>
      <section>
        <a-button @click="openModal()">
					+ Add Direct Chat!
				</a-button>
        <direct-chat-form v-if="modal.openAddModal"/>
      </section>
    </template>

    <template #footer>
      <a-button @click="store.logoutUser">Logout</a-button>
    </template>
  </MainPage>
</template>

<script setup lang="ts">
import AButton from '../components/atoms/a-button.vue'
import MainPage from '../components/templates/MainPage.vue'
import DirectChatForm from '../components/organisms/a-direct-chat-form.vue'
import { useUser } from '../components/composables/useUser.ts'
import { useModal } from '../components/composables/useModal.ts'

const store = useUser()
const modal = useModal()

const openModal = () => {
	modal.openAddModal= true;
};

</script>