import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      data: [] 
    }
  },
  mutations: {
    GET_API(state, payload) {
      state.data = payload
    }
  }
})

export default store