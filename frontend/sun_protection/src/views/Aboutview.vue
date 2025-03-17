<template>
  <div class="tableau-container">
    <div class="header">
      <h1>📊 Data Visualization</h1>
    </div>

    <div ref="tableauContainer" class="tableauPlaceholder viz-card">
      <p v-if="loading" class="loading">Loading Tableau visualization...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true, 
    };
  },
  mounted() {
    this.loadTableau();
  },
  methods: {
    loadTableau() {
      let divElement = this.$refs.tableauContainer;
      divElement.innerHTML = `
        <noscript>
          <img alt='Dashboard' src='https://public.tableau.com/static/images/Mo/Mortality_vs_Incidence/Dashboard2/1_rss.png' style='border: none' />
        </noscript>
        <object class='tableauViz'>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
          <param name='embed_code_version' value='3' />
          <param name='site_root' value='' />
          <param name='name' value='Mortality_vs_Incidence/Dashboard2' />
          <param name='tabs' value='no' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https://public.tableau.com/static/images/Mo/Mortality_vs_Incidence/Dashboard2/1.png' />
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
          <param name='language' value='en-US' />
        </object>
      `;

      let vizElement = divElement.getElementsByTagName("object")[0];
      vizElement.style.width = "100%"; 
      vizElement.style.height = "900px";

      let scriptElement = document.createElement("script");
      scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
      scriptElement.onload = () => {
        new window.tableau.Viz(divElement, "https://public.tableau.com/views/Mortality_vs_Incidence/Dashboard2");
        this.loading = false;
      };
      document.body.appendChild(scriptElement);
    },
  },
};
</script>

<style scoped>

.tableau-container {
  text-align: center;
  padding: 40px 20px;
  font-family: 'Arial', sans-serif;
  background: linear-gradient(to bottom, #87CEFA, #f0f8ff);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header h1 {
  font-size: 28px;
  color: #333;
}
.header p {
  color: #555;
}

.viz-card {
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out;
  animation: fadeIn 0.5s ease-in-out;

  width: 1200px;
  max-width: 95%;
  height: 600px;  
  overflow-y: auto;  
  overflow-x: auto;  
  margin: 0 auto;  

  display: flex;
  justify-content: center;
  align-items: center;
}

.tableauViz {
  max-width: 100%;
  width: auto;
  display: block;
  margin: 0 auto;
}

.loading {
  font-size: 18px;
  color: #007bff;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>


