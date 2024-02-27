<template>
  <div ref="target">
    <h1>Hello world</h1>
    <p>Mouse position: {{ x }}, {{ y }}</p>
    <p v-if="isOutside">Mouse is outside</p>
  </div>
</template>

<script setup lang="ts">
const target = ref(null)

const { x, y, isOutside } = useMouseInElement(target)
</script>

<style scoped></style>
