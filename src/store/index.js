import { createStore } from "vuex";

const store = createStore({
  state: {
    darkMode: true,
  },
  mutations: {
    SWITCH_DARK_MODE(state, darkMode) {
      state.darkMode = darkMode;
    },
  },
});

export default store;
