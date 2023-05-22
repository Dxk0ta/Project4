<template>
  <div>
    <h1>Search Plants Page</h1>

    <div v-for="item in namesAndPictures" :key="item.id">
      <h3>{{ item.common_name }}</h3>
      <!-- <img :src="item.picture" alt="User picture" /> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      namesAndPictures: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        // const apiKey = /
        const response = await fetch(`    https://perenual.com/api/species-list?page=1&key=${process.env.API_KEY}`);
        const data = await response.json();
        this.namesAndPictures = data.data;
        console.log('names', this.namesAndPictures)
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style scoped>
/* Add any custom styles for your component */
</style>
