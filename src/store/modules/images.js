import axios from "axios";

const state = {
  images: [],
  quotes: [],
  lastRequest: false,
};

const getters = {
  imagesObject: (state) => state.images,
  quotesObject: (state) => state.quotes,
};

const mutations = {
  SET_IMAGE(state, payload) {
    state.images.push(...payload);
  },
  SET_QUOTES(state, payload) {
    state.quotes.push(...payload);
  },
  LAST_REQUEST(state, payload) {
    state.lastRequest = payload;
  },
  LAST_REQUEST_RESET(state) {
    state.lastRequest = false;
  }
};

const actions = {
  async getImages({ commit },  { pageNumber } ) {
    try {
      let response = await axios.get(`/suppliers/?page=${pageNumber}`);
      const data = await response.data.results;
      commit("SET_IMAGE", data);
      return data;
    } catch (error) {
      console.error(error);
      commit("LAST_REQUEST", true);
    }
  },

  async getQuotes({ commit }) {
    try {
      let response = await axios.get("/quotes/?page=1");
      const data = await response.data.results;
      commit("SET_QUOTES", data);
      return data;
    } catch (error) {
      console.error(error);
      commit("LAST_REQUEST", true);
    }
  },
  lastRequestReset() {
    commit("LAST_REQUEST_RESET");
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
