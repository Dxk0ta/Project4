<template>
  <div>
    <h1>Search Plants Page</h1>

    <input type="text" v-model="searchQuery" placeholder="Search plants..." />

    <div v-for="item in filteredNamesAndPictures" :key="item.id" @click="navigateToPlantDetails(item)">
      <h3>{{ item.common_name }}</h3>
      <img :src="item.default_image.thumbnail" alt="User picture" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allNamesAndPictures: [],
      searchQuery: ''
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(`https://perenual.com/api/species-list?page=1&key=${process.env.API_KEY}`);
        const data = await response.json();
        this.allNamesAndPictures = data.data;
      } catch (error) {
        console.error(error);
      }
    },
    navigateToPlantDetails(plant) {
      this.$router.push({
        name: 'PlantDetails',
        params: { plantId: plant.id, commonName: plant.common_name, thumbnail: plant.default_image.thumbnail }
      });
    }
  },
  computed: {
    filteredNamesAndPictures() {
      return this.allNamesAndPictures.filter(item =>
        item.common_name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>

<style scoped>
/* Add any custom styles for your component */
</style>