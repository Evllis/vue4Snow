import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = r => require.ensure([], () => r(require('../views/home/home.vue')), 'home')
const Media = r => require.ensure([], () => r(require('../views/media/media.vue')), 'media')
const PictureLibrary = r => require.ensure([], () => r(require('../views/media/picture-library/picture-library.vue')), 'picture-library')
const Scene = r => require.ensure([], () => r(require('../views/scene/scene.vue')), 'scene')
const Icesnow = r => require.ensure([], () => r(require('../views/icesnow/icesnow.vue')), 'icesnow')
const Live = r => require.ensure([], () => r(require('../views/live/live.vue')), 'live')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect() {
            return '/home'
        }
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            title: '首页',
            keepAlive: false,
        },
    },
    {
        path: '/media',
        name: 'media',
        component: Media,
        meta: {
            title: '媒体云',
            keepAlive: false,
        },
        children: [
            {
                path: '/media/pic',
                name: 'picture-library',
                component: PictureLibrary
            }
        ]
    },
    {
        path: '/scene',
        name: 'scene',
        component: Scene,
        meta: {
            title: '现场云',
            keepAlive: false,
        },
    },
    {
        path: '/icesnow',
        name: 'icesnow',
        component: Icesnow,
        meta: {
            title: '冰雪云',
            keepAlive: false,
        },
    },
    {
        path: '/live',
        name: 'live',
        component: Live,
        meta: {
            title: '直播',
            keepAlive: false,
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior: () => ({
        y: 0,
    }),
})

export default router
