const state = {
  albums: [],
  toast: false,
 };

const getters = {
  getAlbums: (state) => state.albums,
  getAlbumImages: (state) => {
    return state.albums
  },
  getToastBoolean: (state) => state.toast,
};

const mutations = {
  SET_IMAGE_TO_ALBUM(state, payload) {
    state.albums.filter((album) => {
      if (album.id === payload.id) {
        console.log(payload)
        console.log(album)
        if(!album.images) {
          album.images = []
        }
        album.images.push(payload.image);
        
      }
    });
  },

  SET_ALBUM(state, payload) {
    state.albums.push(payload)
  },

  SET_TOAST(state, payload) {
    state.toast = payload
  }
}

const actions = {
  addImageToAlbum({ commit }, payload) {
    commit('SET_IMAGE_TO_ALBUM', payload)
  },

   createAlbum({ commit }, payload) {
      commit('SET_ALBUM', payload.object)
  },

  showToast({ commit }, payload = true) {
    console.log(payload)
    commit('SET_TOAST', payload)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}