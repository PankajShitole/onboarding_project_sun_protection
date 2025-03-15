<script setup>
import JSON from './components/JSON.vue';
import Form from './components/Form.vue';
import UVapi from './UVapi.vue';
</script>

<template>
  <div>
    <header class="p-4 bg-blue-500 text-black text-center text-xl font-bold">
      Sun Protection
    </header>
  </div>

  <nav class="bg-gray-300 p-4 flex justify-between max-w-4xl mx-auto">
    <a href="#section1" class="nav-link">Section 1</a>
    <a href="#section2" class="nav-link">Section 2</a>
    <a href="#section3" class="nav-link">Section 3</a>
  </nav>

  <main>
    <section id="section1" class="section">Section 1 Content <JSON /> </section>
    <section id="section2" class="section">Section 2 Content <Form /> </section>
    <section id="section3" class="section">Section 3 Content <UVapi /></section>
  </main>

  <div>
    <footer class="p-4 bg-gray-200 text-center text-sm">
      <a href="/settings" class="mr-4">Setting</a>
      <a href="/help" class="mr-4">Help</a>
      web 2025
    </footer>
  </div>

</template>

<style>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Ensure sections do not overlap */
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section {
  width: 100%;
  min-height: 100vh; /* Ensure full viewport height */
  padding: 50px;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
}

nav {
  display: flex;
  justify-content: space-between; /* Spreads items evenly */
  align-items: center;
  max-width: 600px; /* Controls width */
  margin: 0 auto; /* Centers nav */
}

.nav-link {
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 10px 20px;
}

.nav-link:hover {
  color: blue;
}
</style>