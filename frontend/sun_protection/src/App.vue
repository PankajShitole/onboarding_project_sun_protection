<script setup>
import BHeader from './components/BHeader.vue';
</script>

<template>
  <div class="main-container">
    <BHeader />
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: white;
  padding-top: 80px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 900px;
  flex-grow: 1;
}
</style>