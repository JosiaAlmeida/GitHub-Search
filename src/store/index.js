import { createStore } from 'vuex'
import { Axios } from '@/api'

const store = createStore({
    state() {
        return {
            search: '',
            favorite: [],
            user: {},
            repositoryUser: [],
            stars: 0,
            errorFind: false
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
        },
        setStars(state, payload) {
            state.stars = payload
        },
        setErrorFind(state, payload) {
            state.errorFind = payload
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
            commit("setErrorFind", false)
            new Promise((resolve, reject) => {
                Axios.get(`${payload}`).then(({ data }) => {
                    commit("setUser", data)
                    resolve()
                }).catch(err => {
                    commit("setErrorFind", true)
                    commit("setUser", {})
                    reject(err)
                })
            })
        },
        repositoryUser({ commit }, payload) {
            new Promise((resolve, reject) => {
                Axios.get(`${payload}/repos`).then(({ data }) => {
                    const orderDesc = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
                    commit('setRepositoryUser', orderDesc)
                    resolve()
                }).catch(err => {
                    commit('setRepositoryUser', {})
                    reject(err)
                })
            })
        },
        stars({ commit }, payload) {
            new Promise((resolve, reject) => {
                Axios.get(`/${payload}/starred`).then(({ data }) => {
                    commit('setStars', data.length)
                    resolve()
                }).catch(err => reject(err))
            })
        }
    },
    getters: {
        getSearch: (state) => state.search,
        getFavorite: (state) => state.favorite,
        getUser: (state) => state.user,
        getRepositoryUser: (state) => state.repositoryUser,
        getStars: (state) => state.stars,
        getErrorFind: (state) => state.errorFind
    }
})

export default store