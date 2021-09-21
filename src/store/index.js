import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  cart: [],
  mutations: {
  addProducts(state, payload){
    state.cart.push(payload)
  },
  },
  actions: {

  },
  modules: {
  }
})
