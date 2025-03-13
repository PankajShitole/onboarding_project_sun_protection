import 'bootstrap/dist/css/bootstrap.min.css'

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.mount('#app');
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});