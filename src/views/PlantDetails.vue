<template>
  <div>
    <h1>Plant Details</h1>

    <div class="cardId">
      <img :src="plant.thumbnail" alt="Plant thumbnail" />
      <h2>{{ plant.commonName }}</h2>
      <!-- Display other plant details here -->
    </div>

    <div>
      <button @click="addToGardenHandler">Add To Garden</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      plant: {
        commonName: '',
        thumbnail: ''
        // Add other properties for plant details
      }
    };
  },
  mounted() {
    this.plant.commonName = this.$route.query.commonName;
    this.plant.thumbnail = this.$route.query.thumbnail;
  },
  methods: {
    ...mapActions(['addToGarden']),

    addToGardenHandler() {
      this.addToGarden(this.plant);
      this.$router.push({ name: 'GardenPage' });
    }
  }
};
</script>

<style scoped>
/* Add any custom styles for your component */
</style>
