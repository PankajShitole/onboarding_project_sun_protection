<template>
    <div class="container">
      <h1>Sunscreen Usage Calculator</h1>
  
      <!-- Gender Selection -->
      <div class="form-group">
        <label>Gender:</label>
        <select v-model="gender">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>
  
      <div class="divider"></div>
  
      <!-- Exposed Skin Area Selection -->
      <div class="form-group">
        <label>Exposed Skin Areas:</label>
        <div>
          <input type="checkbox" v-model="exposedAreas" value="face" /> Face
          <input type="checkbox" v-model="exposedAreas" value="body" /> Body
        </div>
      </div>
  
      <div class="divider"></div>
  
      <!-- UV Level Selection -->
      <div class="form-group">
        <label>UV Level:</label>
        <select v-model="uvLevel">
          <option value="0-2">Low (0-2)</option>
          <option value="3-5">Moderate (3-5)</option>
          <option value="6-7">High (6-7)</option>
          <option value="8+">Very High (8+)</option>
        </select>
      </div>
  
      <div class="divider"></div>
  
      <!-- Skin Type Selection -->
      <div class="form-group">
        <label>Select Your Skin Type:</label>
        <div class="skin-types">
          <div
            v-for="(type, index) in skinTypes"
            :key="index"
            :class="['skin-box', { selected: selectedSkinType === type.name }]"
            @click="selectSkinType(type)"
          >
            <div class="color-circle" :style="{ background: type.color }"></div>
            <p>{{ type.name }}</p>
          </div>
        </div>
        <p v-if="!selectedSkinType" class="warning">Please select your skin type!</p>
      </div>
  
      <div class="divider"></div>
  
      <!-- Calculation Button -->
      <button @click="calculateSunscreen">Calculate Sunscreen Usage</button>
  
      <div class="divider"></div>
  
      <!-- Results Display -->
      <div v-if="result">
        <h2>Sunscreen Usage</h2>
        <p v-if="result.face">Face: {{ result.face }} ml ({{ result.faceTeaspoons }} teaspoons)</p>
        <p v-if="result.body">Body: {{ result.body }} ml ({{ result.bodyTeaspoons }} teaspoons)</p>
  
        <div class="divider"></div>
  
        <!-- <h2>Your Skin Category: {{ selectedCategory }}</h2> -->
        <h2>Sunscreen Recommendation</h2>
        <p>{{ result.advice }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from "vue";
  
  export default {
    setup() {
      const gender = ref("");
      const exposedAreas = ref([]);
      const uvLevel = ref("");
      const selectedSkinType = ref(null);
  
      // Skin type list
      const skinTypes = ref([
        { name: "Type I", color: "#FCE1C9", category: "pale skin" },
        { name: "Type II", color: "#F8D2A4", category: "pale skin" },
        { name: "Type III", color: "#E0A885", category: "darker white skin" },
        { name: "Type IV", color: "#B47A5F", category: "darker white skin" },
        { name: "Type V", color: "#7C4A35", category: "darker skin" },
        { name: "Type VI", color: "#4A2D21", category: "darker skin" },
      ]);
  
      const selectedCategory = computed(() => {
        const selected = skinTypes.value.find((type) => type.name === selectedSkinType.value);
        return selected ? selected.category : null;
      });
  
      const result = ref(null);
  
      const calculateSunscreen = () => {
        if (!selectedSkinType.value) {
      alert("*Please select your skin type first!");
      return;
    }
  

    let totalFace = 0, totalFaceTeaspoons = 0;
    let totalBody = 0, totalBodyTeaspoons = 0;
    let advice = "";
  
    let uvFactor = 1;
    if (uvLevel.value === "3-5") uvFactor = 1.1;
    if (uvLevel.value === "6-7") uvFactor = 1.2;
    if (uvLevel.value === "8+") uvFactor = 1.3;
  
    if (exposedAreas.value.includes("face")) {
      totalFace = 3.73 * uvFactor;
      totalFaceTeaspoons = 0.7 * uvFactor;
    }
  
    if (exposedAreas.value.includes("body")) {
      if (gender.value === "female") {
        totalBody = 34 * uvFactor;
        totalBodyTeaspoons = 7 * uvFactor;
      } else {
        totalBody = 38 * uvFactor;
        totalBodyTeaspoons = 8 * uvFactor;
      }
    }
  
    if (selectedCategory.value === "pale skin") {
      if (uvLevel.value === "0-2") {
        advice = "Use SPF 30-50.";
      } else {
        advice = "Use SPF 50 and avoid prolonged sun exposure.";
      }
    } else if (selectedCategory.value === "darker white skin") {
      if (uvLevel.value === "0-2") {
        advice = "Use SPF 15-30.";
      } else {
        advice = "Use SPF 30-50.";
      }
    } else if (selectedCategory.value === "darker skin") {
      if (uvLevel.value === "0-2") {
        advice = "Sunscreen is optional, but SPF 15 is recommended.";
      } else {
        advice = "Use SPF 30 if needed.";
      }
    }
  
    result.value = {
      face: totalFace ? totalFace.toFixed(2) : null,
      faceTeaspoons: totalFaceTeaspoons ? totalFaceTeaspoons.toFixed(2) : null,
      body: totalBody ? totalBody.toFixed(2) : null,
      bodyTeaspoons: totalBodyTeaspoons ? totalBodyTeaspoons.toFixed(2) : null,
      advice,
    };
  };
  
      const selectSkinType = (type) => {
        selectedSkinType.value = type.name;
      };
  
      return {
        gender,
        exposedAreas,
        uvLevel,
        skinTypes,
        selectedSkinType,
        selectedCategory,
        result,
        calculateSunscreen,
        selectSkinType,
      };
    },
  };
  </script>
  
  <style scoped>
  body {
  background: linear-gradient(to bottom, #a8c0ff, #3f2b96);
  font-family: 'Arial', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  }
  /* Global styling */
  .container {
    max-width: 600px;
    margin: auto;
    padding: 30px;
    text-align: left;
    border-radius: 10px;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 20px;
    font-size: 18px;
  }
  
  label {
    font-weight: bold;
  }
  
  /* Divider (light gray line) */
  .divider {
    width: 100%;
    height: 2px;
    background: rgba(200, 200, 200, 0.5);
    margin: 15px 0;
  }
  
  /* Skin type selection */
  .skin-types {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .skin-box {
    cursor: pointer;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out;
    border: 2px solid transparent;
  }
  
  .skin-box:hover {
    transform: scale(1.1);
  }
  
  .selected {
    border: 3px solid #007bff;
  }
  
  .color-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 auto;
  }
  
  button {
    width: 100%;
    padding: 12px;
    font-size: 18px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  button:hover {
    background: #0056b3;
  }
  
  /* Warning message */
  .warning {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  </style>
  
  
  