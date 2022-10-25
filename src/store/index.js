import { createStore } from 'vuex'
import login from './modules/login'
import images from './modules/images'
import albums from './modules/albums'

export default createStore({
  modules: {
    login,
    images,
    albums
  }
})