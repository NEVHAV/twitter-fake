import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Timeline from './views/Timeline.vue'
import Signup from './views/Signup.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Login
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/timeline',
            name: 'timeline',
            component: Timeline
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
