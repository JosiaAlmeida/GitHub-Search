import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/', component: () => import('../view/HomeView.vue')
    },
    {
        path: '/result',
        component: () => import('../view/ResultView.vue')
    },
    {
        path: '/favourit',
        component: () => import('../view/FavouritView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router