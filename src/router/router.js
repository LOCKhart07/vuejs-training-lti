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
}, {
    path: '/employees',
    name: 'Employees',
    component: () => import('../views/Employees.vue')
},
{
    path: '/employees/:id',
    name: 'EmployeeSingle',
    props: true,
    component: () => import('../views/EmployeeSingle.vue')
}]

export const router = createRouter({
    history: createWebHistory(),
    routes
})