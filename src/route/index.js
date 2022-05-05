import { createRouter, createWebHashHistory } from 'vue-router'

const HomeView = () => import('../view/HomeView.vue')

const routes = [
    {
        path: '/', component: HomeView
    },
    {
        path: '/result',
        component: () => import('../view/ResultView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router