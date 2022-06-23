<script setup lang="ts">
const { modelValue } = defineProps<{
  modelValue?: boolean
}>()
</script>

<template>
  <div border="base" p4>
    <TimezoneSearch />
  </div>
</template>
