<template>
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
      <img src="https://images.unsplash.com/photo-1506220990430-8b1e267d3c06" alt="Sun Safety" />
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToInfo = () => {
  router.push('/about'); // 导航到 About 页面（你可以修改）
};
</script>

<style scoped>
/* 页面整体布局 */
.home {
  width: 100%;
  text-align: center;
  font-family: 'Arial', sans-serif;
}

/* 顶部 Hero 区域 */
.hero {
  width: 100%;
  height: 60vh;
  background: url('https://images.unsplash.com/photo-1600180758890-6ac614c261aa') no-repeat center center/cover;
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
  color: black;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.hero button:hover {
  background: #ff9900;
}

/* 介绍信息区域 */
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 10%;
  background: white;
  text-align: left;
}

.info-content {
  width: 50%;
}

.info h2 {
  font-size: 28px;
  margin-bottom: 15px;
}

.info p {
  font-size: 18px;
  margin-bottom: 10px;
}

.highlight {
  color: #007bff;
  font-weight: bold;
}

.info img {
  width: 40%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
</style>
