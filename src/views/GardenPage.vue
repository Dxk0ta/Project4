<template>
  <div class="garden-page">
    <h1>Garden Page</h1>
    <div v-for="plant in garden" :key="plant.id" class="cardId">
      <img :src="plant.thumbnail" alt="Plant thumbnail" />
      <h2>{{ plant.commonName }}</h2>
      <h4>Plant Cycle: {{ plant.cycle }}</h4>
      <!-- Display other plant details here -->
      <button @click="deletePlantHandler(plant.id)">Delete</button>
    </div>

    <div>
      <button @click="goToPlantSearch">Back to Plant Search</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getGarden']),
    garden() {
      return this.getGarden;
    }
  },
  methods: {
    ...mapActions(['deletePlant']),
    deletePlantHandler(plantId) {
      this.deletePlant(plantId);
    },
    goToPlantSearch() {
      // Navigate to the search details page
      this.$router.push('/plantsearch');
    }
  }
};
</script>

<style scoped>
.garden-page {
  height: 100vh; /* Set the height to 100% of the viewport height */
  background-color: #e4f4e8; /* Background image */
  background-size: cover;
  background-position: center;
  padding: 20px;
  font-family: 'Verdana', sans-serif;
  /* background-color: rgba(255, 255, 255, 0.8); */
}

html,
body {
  height: 100%; /* Set the height of the html and body elements to 100% */
  margin: 0;
  padding: 0;
}
</style>
