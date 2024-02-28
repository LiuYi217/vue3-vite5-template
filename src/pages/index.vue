<template>
  <div ref="target">
    <h1>Hello world</h1>
    <p>Mouse position: {{ x }}, {{ y }}</p>
    <p v-if="isOutside">Mouse is outside</p>
    <HelloWorld></HelloWorld>
    <!-- A basic anchor icon from Phosphor icons -->
    <div class="i-ph-anchor-simple-thin" />
    <!-- An orange alarm from Material Design Icons -->
    <div class="i-mdi-alarm text-orange-400" />
    <!-- A large Vue logo -->
    <div class="i-logos-vue text-3xl" />
    <!-- Sun in light mode, Moon in dark mode, from Carbon -->
    <button class="i-carbon-sun dark:i-carbon-moon" />
    <!-- Twemoji of laugh, turns to tear on hovering -->
    <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
  </div>
</template>

<script setup lang="ts">
const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
</script>

<style scoped></style>
<route lang="yaml">
meta:
  layout: default
</route>
