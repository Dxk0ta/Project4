import { createStore } from 'vuex';

export default createStore({
  state: {
    garden: []
  },
  mutations: {
    addToGarden(state, plant) {
      state.garden.push(plant);
    },
    deletePlant(state, plantId) {
      state.garden = state.garden.filter(plant => plant.id !== plantId);
    }
  },
  actions: {
    addToGarden({ commit }, plant) {
      commit('addToGarden', plant);
    }
  },
  getters: {
    getGarden(state) {
      return state.garden;
    }
  }
});
