<template>
  <MDBCarousel v-model="carousel1" :items="items1" fade innerClass="rounded-5 shadow-4-strong"/>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="overlay">
        <h1>Protect Your Skin, Enjoy the Sun</h1>
        <p>Learn how to stay safe from harmful UV rays and prevent skin damage.</p>
        <button @click="goToInfo">Learn More</button>
      </div>
    </section>

    <!-- Info Section -->
    <section class="info">
      <div class="info-content">
        <h2>Why Sun Protection Matters?</h2>
        <p>
          Australia has one of the highest rates of <span class="highlight">skin cancer</span> in the world.
          Proper sun protection reduces the risk of harmful UV exposure and helps maintain healthy skin.
        </p>
        <p>
          Discover the best sun protection tips, recommended products, and stay informed about
          how to safely enjoy the sun.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { MDBCarousel } from "mdb-vue-ui-kit";

  const items1 = [
    {
      src: sunProtectionImage,
      alt: "...",
      href: "https://mdbootstrap.com/docs/vue/content-styles/images/#!",
      label: "First slide label",
      caption: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp",
      alt: "...",
      label: "Second slide label",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp",
      alt: "...",
      label: "Third slide label",
      caption:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }
  ];

  const carousel1 = ref(0);

import { useRouter } from 'vue-router';
import sunProtectionImage from '@/assets/The_Importance_of_Sun_Protection_for_Australian_Kids.webp'; 
const router = useRouter();

const goToInfo = () => {
  router.push('/uv'); 
};
</script>

<style scoped>
.home {
  width: 100%;
  text-align: center;
  font-family: 'Arial', sans-serif;
}

.hero {
  width: 100%;
  height: 60vh;
  background:#ffcc00;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  color: white;
}

.hero h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.hero p {
  font-size: 18px;
  margin-bottom: 20px;
}

.hero button {
  background: #ffcc00;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.hero button:hover {
  background: #ff9900;
}

.info {
  display: flex;
  background: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 40px 10%;
}

.info-content {
  width: 50%;
}

.info h2 {
  font-size: 28px;
  margin-bottom: 15px;
  color: #ff9900;
}

.info p {
  font-size: 18px;
  margin-bottom: 10px;
  color: #ffcc00;
}

.highlight {
  color: #007bff;
  font-weight: bold;
}
</style>
