import { createStore } from "vuex";
import login from "./modules/login";
import api from "./modules/api";

export default createStore({
  modules: {
    login,
    api,
  },
});
