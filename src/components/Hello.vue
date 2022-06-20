<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const upperCase = computed(() => props.name.toUpperCase())
</script>

<template>
  <div text="red-500 3xl" font="sans bold">
    Hello, {{ upperCase }}
  </div>
  <div i-carbon-bee text="yellow 5xl" />
</template>

<style>
</style>
