<template>
  <button :type="buttonType" :name="buttonType" @click="$emit('click', $event)" class="a-button">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps(['buttonType', 'buttonType'])
</script>

<style scoped>
.a-button {
  padding: 10px 20px;
  margin-top: 1rem;
  background-color: #6260c6;
  color: white;
  margin-right: 1rem;
  border-radius: 70px;
  border: none;
  margin-bottom: 1rem;
}
</style>