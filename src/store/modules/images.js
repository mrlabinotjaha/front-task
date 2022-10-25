import axios from "axios";

const state = {
  images: [],
  quotes: [],
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
};

const actions = {
  async getImages({ commit }) {
    try {
      let response = await axios.get("/suppliers/?page=1");
      const data = await response.data.results;
      commit("SET_IMAGE", data);
      return data;
    } catch (error) {
      console.error(error);
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
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
