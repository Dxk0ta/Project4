import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

// Import the components
import PlantSearch from '@/views/PlantSearch.vue';
import GardenPage from '@/views/GardenPage.vue';
import HomePage from '@/views/HomePage.vue';
import PlantDetails from '@/views/PlantDetails.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/plantsearch',
      name: 'PlantSearch',
      component: PlantSearch,
    },
    {
      path: '/plant/:plantId',
      name: 'PlantDetails',
      component: PlantDetails,
    },
    {
      path: '/gardenpage',
      name: 'GardenPage',
      component: GardenPage,
    },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');