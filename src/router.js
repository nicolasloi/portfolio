import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Projects from '@/components/Projects.vue'
import NotFound from '@/components/NotFound.vue'
import moviemanager from "@/components/ProjectsPage/moviemanager.vue";
import umbrella from "@/components/ProjectsPage/umbrella.vue";
import jobtreksuivis from "@/components/ProjectsPage/jobtreksuivis.vue";
import savoria from "@/components/ProjectsPage/savoria.vue";

const routes = [
    { path: '/portfolio/', component: Home },
    { path: '/portfolio/projects', component: Projects },
    { path: '/portfolio/:pathMatch(.*)*', component: NotFound },
    { path: '/portfolio/projects/moviemanager', component: moviemanager },
    { path: '/portfolio/projects/umbrella', component: umbrella },
    { path: '/portfolio/projects/jobtreksuivis', component: jobtreksuivis },
    { path: '/portfolio/projects/savoria', component: savoria },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
