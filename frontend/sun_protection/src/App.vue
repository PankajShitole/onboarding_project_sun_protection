<script setup>
import JSON from './components/JSON.vue';
import Form from './components/Form.vue';
</script>

<template>
  <div class="main-container">
    <header>
      <BHeader />
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
    <section id="section3" class="section">Section 3 Content</section>
  </main>

  <div>
    <footer class="p-4 bg-gray-200 text-center text-sm">
      <a href="/settings" class="mr-4">Setting</a>
      <a href="/help" class="mr-4">Help</a>
      web 2025
    </footer>
  </div>
</template>

<style scoped>
* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}
</style>


