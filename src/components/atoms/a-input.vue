<template>
  <input
    :type="inputType"
    :name="inputName"
    :value="modelValue"
    v-bind="$attrs"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="a-input"
  />
</template>

<script setup lang="ts">
defineProps(['inputType', 'inputName', 'modelValue'])
defineEmits(['update:modelValue'])
</script>

<style scoped>
.a-input {
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  display: inline-flex;
}
</style>