import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import PlantSearch from './components/PlantSearch.vue';
import PlantDetails from './components/PlantDetails.vue';
import GardenPage from './components/GardenPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/plantsearch', component: PlantSearch },
  { path: '/plantdetails', component: PlantDetails },
  { path: '/gardenpage', component: GardenPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp({});
app.use(router);
app.mount('#app');