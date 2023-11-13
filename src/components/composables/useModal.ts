import { ref } from "vue";
import { defineStore } from "pinia";

export const useModal = defineStore("modal", () => {
  const openAddModal = ref(false);
  const openEditModal = ref(false);
  return { openAddModal, openEditModal };
});