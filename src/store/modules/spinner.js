export default {
  namespaced: true,
  state() {
    return {
      loadingState: true,
    };
  },
  mutations: {
    setLoadingStateTrue(state) {
      state.loadingState = true;
    },
    setLoadingStateFalse(state) {
      state.loadingState = false;
    },
  },
  actions: {
    setLoadingStateTrue({ commit }) {
      commit("setLoadingStateTrue");
    },
    setLoadingStateFalse({ commit }) {
      commit("setLoadingStateFalse");
    },
  },
};
