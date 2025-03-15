<template>
  <div class="uv-container">
    <h1>Check UV Index by City</h1>
    <p>Enter a city name to view the real-time UV index:</p>

    <div class="input-group">
      <input type="text" v-model="city" placeholder="Enter city name (e.g. Melbourne)" />
      <button @click="fetchUVIndex">Get UV Index</button>
    </div>

    <div v-if="uvData" class="uv-info" :style="{ backgroundColor: getUVColor(uvData.uv) }">
      <h2>{{ uvData.city }}</h2>
      <p>Latitude: {{ uvData.latitude }}, Longitude: {{ uvData.longitude }}</p>
      <p>UV Index: <strong>{{ uvData.uv }}</strong></p>
      <p>{{ getUVMessage(uvData.uv) }}</p>
    </div>

    <p v-if="loading">Loading...</p>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const city = ref('');
const uvData = ref(null);
const loading = ref(false);
const error = ref(null);

const fetchUVIndex = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await fetch(`http://localhost:5000/api/uv-index?city=${encodeURIComponent(city.value)}`);
    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    uvData.value = data;
  } catch (err) {
    error.value = err.message || 'Failed to fetch UV index!';
  } finally {
    loading.value = false;
  }
};

const getUVColor = (uv) => {
  if (uv < 3) return '#4CAF50';
  if (uv < 6) return '#FFEB3B';
  if (uv < 8) return '#FF9800';
  if (uv < 11) return '#F44336';
  return '#9C27B0';
};
const getUVMessage = (uv) => {
  if (uv < 3) return 'Low risk. Enjoy the sun!';
  if (uv < 6) return 'Moderate risk. Wear sunscreen!';
  if (uv < 8) return 'High risk. Seek shade!';
  if (uv < 11) return 'Very high risk. Avoid direct sun!';
  return 'Extreme risk! Stay indoors if possible!';
};
</script>

<style scoped>
.uv-container { text-align: center; padding: 20px; }
.input-group { display: flex; justify-content: center; gap: 10px; margin: 20px 0; }
input { padding: 10px; font-size: 16px; width: 200px; }
button { background: #ffcc00; padding: 10px 15px; font-size: 16px; border: none; border-radius: 5px; }
button:hover { background: #ff9900; }
.uv-info { padding: 20px; margin-top: 20px; color: white; border-radius: 10px; }
.error { color: red; font-weight: bold; }
</style>
