<template>
  <div>
    <h1>Home Page</h1>
    <button id="goToSearchBtn" @click="goToPlantSearch">Let's Get Started!</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToPlantSearch() {
      this.$router.push('/plantsearch');
    }
  }
}
</script>