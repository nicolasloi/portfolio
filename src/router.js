import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Projects from '@/components/Projects.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
