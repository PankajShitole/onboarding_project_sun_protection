<template>
  <!-- 限制轮播图大小 -->
  <MDBCarousel 
    v-model="carousel1" 
    :items="items1" 
    fade 
    innerClass="rounded-5 shadow-4-strong carousel-container"
  />

  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="overlay">
        <h1>Protect Your Skin, Stay Safe Under the Sun</h1>
        <p>Australia has one of the highest rates of skin cancer. Know your risks and take action today!</p>
        <div class="button-group">
          <button @click="goToDataVisualization" class="btn-data">📊 Disease Data</button>
          <button @click="goToUVIndex" class="btn-uv">☀️ UV Index</button>
        </div>
      </div>
    </section>

    <!-- Info Section -->
    <section class="info">
      <div class="info-content">
        <h2>Why Sun Protection is Essential?</h2>
        <p>
          Every year, thousands of Australians are diagnosed with <span class="highlight">skin cancer</span>. 
          Understanding the risks of excessive UV exposure can help you make better decisions for your health.
        </p>
        <p>
          Protecting your skin today means a healthier future. Start by staying informed!
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { MDBCarousel } from "mdb-vue-ui-kit";
import { useRouter } from "vue-router";
import sunProtectionImage from '@/assets/The_Importance_of_Sun_Protection_for_Australian_Kids.webp'; 

const router = useRouter();

// const items1 = [
//   {
//     src: sunProtectionImage,
//     alt: "Sun Protection"
//   },
//   {
//     src: "https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp",
//     alt: "Sun Safety"
//   },
//   {
//     src: "https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp",
//     alt: "Skin Health"
//   }
// ];

const carousel1 = ref(0);

const goToDataVisualization = () => {
  router.push('/about');
};

const goToUVIndex = () => {
  router.push('/uv');
};
</script>

<style scoped>
.carousel-container {
  max-width: 70%; 
  height: 300px; 
  margin: auto; 
}


.carousel-container img {
  width: 100%;
  height: 100%;
  object-fit: contain; 
}


.home {
  width: 100%;
  text-align: center;
  font-family: 'Arial', sans-serif;
}


.hero {
  width: 100%;
  height: 60vh;
  background: #ffcc00;
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

.button-group {
  display: flex;
  gap: 15px;
  justify-content: center;
}

button {
  padding: 12px 20px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease, transform 0.2s ease;
}

.btn-data {
  background: #007bff;
  color: white;
}

.btn-uv {
  background: #ff5733;
  color: white;
}

button:hover {
  transform: scale(1.05);
}

.btn-data:hover {
  background: #0056b3;
}

.btn-uv:hover {
  background: #d43f00;
}

/* 📌 Info Section */
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
  color: #444;
}

.highlight {
  color: #007bff;
  font-weight: bold;
}
</style>
