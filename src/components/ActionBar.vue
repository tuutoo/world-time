<script setup lang="ts">
const { modelValue } = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div border="b gray/20" p2>
    <TimezoneSearch />
  </div>
</template>
