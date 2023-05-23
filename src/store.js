import { createStore } from 'vuex';

export default createStore({
  state: {
    garden: []
  },
  mutations: {
    addToGarden(state, plant) {
      state.garden.push(plant);
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
