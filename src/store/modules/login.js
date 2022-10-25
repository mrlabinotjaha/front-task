const state = {
  isLogged: false,
};

const getters = {
  isLogged: (state) => state.isLogged,
};

const mutations = {
  SET_LOGIN(state, payload) {
    state.isLogged = payload;
  },
  INIT_CHECK(state, payload) {
    if (localStorage.getItem("token")) {
      state.isLogged = payload;
    }
  },
  SET_LOGOUT(state, payload) {
    localStorage.removeItem("token");
    state.isLogged = payload;
  },
};

const actions = {
  triggerInitCheck({ commit }) {
    commit("INIT_CHECK", true);
  },
  logIn({ commit }) {
    commit("SET_LOGIN", true);
  },
  logOut({ commit }) {
    commit("SET_LOGOUT", false);
  },
};

export default {
  namedspaced: true,
  state,
  actions,
  mutations,
};
