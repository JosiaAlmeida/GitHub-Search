import { createStore } from 'vuex'
import { Axios } from '@/api'

const store = createStore({
    state() {
        return {
            search: '',
            favorite: [],
            user: {},
            repositoryUser: []
        }
    },
    mutations: {
        setSearch(state, payload) {
            state.search = payload
        },
        setFavorite(state, payload) {
            state.favorite.push(payload)
            state.favorite = state.favorite.filter((este, i) => state.favorite.indexOf(este) === i)
        },
        setRemoveFavorite(state, payload) {
            state.favorite.filter((favorite) => {
                if (state.favorite.indexOf(favorite) === payload) {
                    console.log(favorite)
                    state.favorite.splice(payload, 1)
                }
                return favorite
            })

        },
        setUser(state, payload) {
            state.user = payload
        },
        setRepositoryUser(state, payload) {
            state.repositoryUser = payload
        }
    },
    actions: {
        Search({ commit }, payload) {
            commit("setSearch", payload)
        },
        Favorite({ commit }, payload) {
            commit("setFavorite", payload)
        },
        removeFavorite({ commit }, payload) {
            commit('setRemoveFavorite', payload)
        },
        User({ commit }, payload) {
            new Promise((resolve, reject) => {
                Axios.get(`/${payload}`).then(({ data }) => {
                    commit("setUser", data)
                    resolve()
                }).catch(err => reject(err))
            })
        },
        repositoryUser({ commit }, payload) {
            new Promise((resolve, reject) => {
                Axios.get(`/${payload}/repos`).then(({ data }) => {
                    const orderDesc = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
                    commit('setRepositoryUser', orderDesc)
                    resolve()
                }).catch(err => reject(err))
            })
        }
    },
    getters: {
        getSearch: (state) => state.search,
        getFavorite: (state) => state.favorite,
        getUser: (state) => state.user,
        getRepositoryUser: (state) => state.repositoryUser
    }
})

export default store