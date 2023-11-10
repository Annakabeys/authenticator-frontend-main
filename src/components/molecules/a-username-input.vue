<template>
  <a-label label-name="username"> Username </a-label>
  <a-input
    input-type="text"
    input-name="username"
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