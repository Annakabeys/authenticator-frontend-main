<!-- <template>
  <div>
    <a-label label-name="portfolio-holdings">Select receiver</a-label>
    <a-select
      select-name="receiver"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="a-select"
    >
      <option v-for="user in store.users" :key="user.id" :value="user.receiver">
        {{ user.receiver }}
      </option>
    </a-select>
  </div>
</template>

<script setup lang="ts">
import ASelect from '../atoms/a-select.vue'
import ALabel from '../atoms/a-label.vue'
import { useUser } from '../composables/useUser'

defineProps(['modelValue'])

defineEmits(['update:modelValue'])

const store = useUser();
</script>

<style scoped>
.a-select {
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 30%;
}
</style> -->


<template>
  <a-label label-name="receiver"> Receiver </a-label>
  <a-input
    input-type="text"
    input-name="receiver"
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