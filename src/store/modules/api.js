import axios from "axios";

const state = {
  suppliers: [],
  quotes: [],
  lastRequest: false,
};

const getters = {
  suppliersObject: (state) => state.suppliers,
  quotesObject: (state) => state.quotes,
};

const mutations = {
  SET_SUPPLIERS(state, payload) {
    state.suppliers.push(...payload);
  },
  SET_QUOTES(state, payload) {
    state.quotes.push(...payload);
  },
  LAST_REQUEST(state, payload) {
    state.lastRequest = payload;
  },
  LAST_REQUEST_RESET(state) {
    state.lastRequest = false;
  },
};

const actions = {
  async getSuppliers({ commit }, { pageNumber }) {
    try {
      let response = await axios.get(`/suppliers/?page=${pageNumber}`);
      const data = await response.data;
      commit("SET_SUPPLIERS", data.results);
      if (data.next == null) {
        commit("LAST_REQUEST", true);
      }
      return data;
    } catch (error) {
      console.error(error);
    }
  },

  async getQuotes({ commit }, { pageNumber }) {
    try {
      let response = await axios.get(`/quotes/?page=${pageNumber}`);
      const data = await response.data;
      commit("SET_QUOTES", data.results);
      if (data.next == null) {
        commit("LAST_REQUEST", true);
      }
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  lastRequestReset({ commit }) {
    commit("LAST_REQUEST_RESET");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
