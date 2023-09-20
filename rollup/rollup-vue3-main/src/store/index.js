import { createStore } from "vuex";

// module
import User from "./modules/user.js";

export default createStore({
  state() {
    return {
      systemName: "rollup+vue3",
      activeMenu: "",
    };
  },
  mutations: {
    changeSytemName(state, payload) {
      state.systemName = payload;
    },
    changeMenu(state, payload) {
      state.activeMenu = payload;
    },
  },
  modules: {
    user: User,
  },
});
