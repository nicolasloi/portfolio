import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Projects from '@/components/Projects.vue'
import NotFound from '@/components/NotFound.vue'
import moviemanager from "@/components/ProjectsPage/moviemanager.vue";
import umbrella from "@/components/ProjectsPage/umbrella.vue";
import jobtreksuivis from "@/components/ProjectsPage/jobtreksuivis.vue";
import savoria from "@/components/ProjectsPage/savoria.vue";

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/:pathMatch(.*)*', component: NotFound },
    { path: '/projects/moviemanager', component: moviemanager },
    { path: '/projects/umbrella', component: umbrella },
    { path: '/projects/jobtreksuivis', component: jobtreksuivis },
    { path: '/projects/savoria', component: savoria },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
