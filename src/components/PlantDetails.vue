<template>
  <div>
    <h1>Plant Details</h1>

    <h2>{{ plant.commonName }}</h2>
    <img :src="plant.thumbnail" alt="Plant thumbnail" />

    <!-- Display other plant details here -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      plant: {
        commonName: '',
        thumbnail: ''
        // Add other properties for plant details
      },
      plantId: ''
    };
  },
  mounted() {
    this.plant.commonName = this.$route.query.commonName;
    this.plant.thumbnail = this.$route.query.thumbnail;
    // Retrieve plantId from route parameters
    this.plantId = this.$route.params.plantId;
  }
};
</script>

<style scoped>
/* Add any custom styles for your component */
</style>

