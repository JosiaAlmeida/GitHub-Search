import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            search: '',
            favourit: []
        }
    },
    mutations: {
        setSearch(state, payload) {
            state.search = payload
        }
    },
    actions: {
        Search({ commit }, payload) {
            commit("setSearch", payload)
        }
    },
    getters: {
        getSearch: (state) => state.search
    }
})

export default store