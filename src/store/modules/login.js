const state = {
  isLogged: false,
  auth: {},
};

const getters = {
  isLogged: (state) => state.isLogged,
};

const mutations = {
  SET_USER(state, payload) {
    state.auth = payload[0];
    console.log(state.auth, payload);
  },
  SET_LOGIN(state, payload) {
    state.isLogged = payload;
  },
  INIT_CHECK(state, payload) {
    if (localStorage.getItem("logedIn")) {
      state.isLogged = payload;
    }
  },
  SET_LOGOUT(state, payload) {
    state.isLogged = payload;
  },
};

const actions = {
  async getUser({ commit }) {
    const response = await fetch("/user.json");
    const data = await response.json();
    commit("SET_USER", data);
  },
  triggerInitCheck({ commit }) {
    commit("INIT_CHECK", true);
  },
  logIn({ commit }) {
    localStorage.setItem("logedIn", "true");
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
