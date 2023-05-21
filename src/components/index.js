import HomePage from './components/HomePage.vue';
import PlantSearch from './components/PlantSearch.vue';
import PlantDetails from './components/PlantDetails.vue';
import GardenPage from './components/GardenPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/plantsearch', component: PlantSearch },
  { path: '/plantdetails', component: PlantDetails },
  { path: '/gardenpage', component: GardenPage }
];

export default routes;
