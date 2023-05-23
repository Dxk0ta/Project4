<template>
  <div>
    <h1>Garden Page</h1>
    <div v-for="plant in garden" :key="plant.id" class="cardId">
      <img :src="plant.thumbnail" alt="Plant thumbnail" />
      <h2>{{ plant.commonName }}</h2>
      <!-- Display other plant details here -->
      <button @click="deletePlantHandler(plant.id)">Delete</button>
    </div>

    <div>
      <button @click="goToPlantSearch">Back to Plant Search</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['garden'])
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
/* Add any custom styles for your component */
</style>
