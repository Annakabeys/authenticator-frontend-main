<template>
	<Teleport to="body">
		<div v-if="(modal.openAddModal = true)" class="modal">
			<div class="modal-content a-form">
        <form action="/direct-chat" name="direct-chat-form" method="POST" @submit.prevent="store.addDirectChat">
          <a-receiver v-model="store.directChatForm.receiver"/>
          <a-button button-type="submit" button-name="add-direct-chat"> Add Direct Chat </a-button>
        </form>
        <button @click="modal.openAddModal = false" class="close-button">
          <span class="close-icon">X</span>
        </button>
      </div>
		</div>
	</Teleport>
</template>

<script setup lang="ts">
import AReceiver from '../molecules/a-receiver-input.vue'
import AButton from '../atoms/a-button.vue'
import { useUser } from '../composables/useUser'
import { useModal } from '../composables/useModal';

const store = useUser()
const modal = useModal()
</script>

<style scoped>
.a-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 2rem auto;
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
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 30%;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
}

.close-icon {
  font-size: 20px;
  color: #000;
}
</style>