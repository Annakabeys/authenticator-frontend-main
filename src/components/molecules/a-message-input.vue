<template>
  <a-label label-name="message"> Message </a-label>
  <a-input
    input-type="text"
    input-name="message"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup lang="ts">
import ALabel from '../atoms/a-label.vue'
import AInput from '../atoms/a-input.vue'

defineProps(['modelValue'])

defineEmits(['update:modelValue'])
</script>