import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
// import axios from 'axios';
// Import the components
import PlantSearch from '@/views/PlantSearch.vue';
import GardenPage from '@/views/GardenPage.vue';
import HomePage from '@/views/HomePage.vue';
import PlantDetails from '@/views/PlantDetails.vue';
// axios.defaults.baseURL = 'mongodb://0.0.0.0:27017/api'; // Replace with your server URL

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
app.use(store);
app.mount('#app');