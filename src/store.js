import { createStore } from 'vuex';

export default createStore({
  state: {
    garden: [],
  },
  mutations: {
    addToGarden(state, plant) {
      state.garden.push(plant);
    },
    deletePlant(state, plantId) {
      state.garden = state.garden.filter(plant => plant.id !== plantId);
    },
  },
  actions: {
    addToGarden({ commit, state }, plant) {
      const isDuplicate = state.garden.some((p) => p.id === plant.id);
      if (!isDuplicate) {
        commit('addToGarden', plant);
      } else {
        console.log('Plant already exists in the garden.');
      }
    },    
    deletePlant({ commit }, plantId) {
      commit('deletePlant', plantId);
    },
  },
  getters: {
    getGarden: state => {
      return state.garden;
    },
    getPlantById: state => plantId => {
      return state.garden.find(plant => plant.id === plantId);
    },
  },
});
