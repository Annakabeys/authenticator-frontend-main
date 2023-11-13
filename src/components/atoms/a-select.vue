<template>
  <select
    :name="selectName"
    :value="modelValue"
    @change="$emit('update:modelValue', $event.target.value)"
    class="a-select"
  >
    <slot :item="item" />
  </select>
</template>

<script setup>
defineProps(['selectName', 'modelValue'])

defineEmits(['update:modelValue'])
</script>

<style scoped>
.a-select {
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100% !important;
}
</style>