<template>
  <a-label label-name="first-name"> First Name </a-label>
  <a-input
    input-type="text"
    input-name="first-name"
    :value="modelValue"
    required
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup lang="ts">
import ALabel from '../atoms/a-label.vue'
import AInput from '../atoms/a-input.vue'

defineProps(['modelValue'])

defineEmits(['update:modelValue'])
</script>