<template>
  <div class="plant-details container">
    <h1 class="mt-5">Plant Details</h1>

    <div class="card mt-4">
      <img :src="plant.thumbnail" alt="Plant thumbnail" class="card-img-top" />
      <div class="card-body">
        <h2 class="card-title">{{ plant.commonName }}</h2>
        <h4 class="card-text">Plant Cycle: {{ plant.cycle }}</h4>
        <!-- Display other plant details here -->
      </div>
    </div>

    <div class="mt-4">
      <button @click="addToGardenHandler" class="btn btn-success">Add To Garden</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      plant: {
        commonName: '',
        thumbnail: '',
        cycle: '' // Corrected typo: "cycle" instead of "cyle"
        // Add other properties for plant details
      }
    };
  },
  mounted() {
    const { commonName, thumbnail, cycle } = this.$route.query;
    this.plant = { commonName, thumbnail, cycle };
  },
  computed: {
    ...mapGetters(['getGarden']),
  },
  methods: {
    ...mapActions(['addToGarden']),
    addToGardenHandler() {
      const isDuplicate = this.getGarden.some(p => p.id === this.plant.id);
      if (!isDuplicate) {
        const plant = { ...this.plant };
        plant.id = Math.random().toString(36).substr(2, 9); // Generate a unique ID for the plant
        this.addToGarden(plant);
        this.$router.push('/gardenpage');
      } else {
        console.log('Plant already exists in the garden.');
      }
    },
  },
};
</script>


<style scoped>
.plant-details {
  background-color: #e4f4e8; /* Light green background color */
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

/* Style specific elements as needed */
</style>