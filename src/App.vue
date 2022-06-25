<script setup lang="ts">
</script>

<template>
  <div font-sans bg-canvas h-screen>
    <NavBar />
    <div
      border="~ base rounded"
      bg-base shadow mx10 mt2
    >
      <ActionBar />
      <TimeScheduler />
    </div>
  </div>
</template>

<style>
html.dark {
  background: #222;
  color: white;
  color-scheme: dark;
}
</style>
