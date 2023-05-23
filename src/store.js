import { createStore } from 'vuex';

export default createStore({
  state: {
    garden: []
  },
  mutations: {
    addToGarden(state, plant) {
      // Assign the id property to the plant object
      plant.id = plant.id || Math.random().toString(36).substr(2, 9);
      state.garden.push(plant);
    },
    deletePlant(state, plantId) {
      state.garden = state.garden.filter(plant => plant.id !== plantId);
    }
  },
  actions: {
    addToGarden({ commit }, plant) {
      commit('addToGarden', plant);
    },
    deletePlant({ commit }, plantId) {
      commit('deletePlant', plantId);
    }
  },
  getters: {
    getPlantById: state => plantId => {
      return state.garden.find(plant => plant.id === plantId);
    }
  }
});
