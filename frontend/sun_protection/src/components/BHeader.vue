<script setup lang="ts">
</script>

<template>
  <!-- https://getbootstrap.com/docs/5.0/examples/headers/ -->
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page">Home </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/uv" class="nav-link" active-class="active">UV</router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  padding: 15px 0;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  max-width: 100%;
  overflow-x: auto;
}
</style>

