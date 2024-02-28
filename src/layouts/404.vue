<template>
  <div class="flex flex-col items-center justify-center h-full space-y-4">
    <h1 class="text-4xl font-bold">404</h1>
    <router-view />
    <!-- 按钮点击 路由后退 -->
    <button @click="router.back()">后退</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>
<style scoped></style>
