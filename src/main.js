import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

// Import the components
import PlantSearch from '@/components/PlantSearch.vue';
import GardenPage from '@/components/GardenPage.vue';
import HomePage from '@/components/HomePage.vue';
import PlantDetails from '@/components/PlantDetails.vue';

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
