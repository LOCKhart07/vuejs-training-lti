import { createRouter, createWebHistory } from "vue-router";

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
},
{
    path: '/user',
    name: 'Users',
    component: () => import('../views/UsersView.vue')
},
{
    path: '/user/:id',
    name: 'UserSingle',
    props: true,
    component: () => import('../views/UserSingleView.vue')
}]

export const router = createRouter({
    history: createWebHistory(),
    routes
})