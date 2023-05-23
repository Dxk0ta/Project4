<template>
  <div>
    <h1>Garden Page</h1>
    <div v-for="plant in garden" :key="plant.commonName" class="cardId">
      <img :src="plant.thumbnail" alt="Plant thumbnail" />
      <h2>{{ plant.commonName }}</h2>
      <!-- Display other plant details here -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['garden'])
  }
};
</script>

<style scoped>
/* Add any custom styles for your component */
</style>
