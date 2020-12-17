import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = r => require.ensure([], () => r(require('../views/home/home.vue')), 'home')

const Media = r => require.ensure([], () => r(require('../views/media/media.vue')), 'media')
const MediaHome = r => require.ensure([], () => r(require('../views/media/home/home.vue')), 'media-home')
const PictureLibrary = r => require.ensure([], () => r(require('../views/media/picture-library/picture-library.vue')), 'picture-library')
const VideoLibrary = r => require.ensure([], () => r(require('../views/media/video-library/video-library.vue')), 'video-library')
const NewLibrary = r => require.ensure([], () => r(require('../views/media/new-library/new-library.vue')), 'new-library')
const NewLibraryHome = r => require.ensure([], () => r(require('../views/media/new-library/home/home.vue')), 'new-library-home')
const NewLibraryDetails = r => require.ensure([], () => r(require('../views/media/new-library/details/details.vue')), 'new-library-details')
const MediaRace = r => require.ensure([], () => r(require('../views/media/race/race.vue')), 'media-race')
const MediaLive = r => require.ensure([], () => r(require('../views/media/live/live.vue')), 'media-live')

const Scene = r => require.ensure([], () => r(require('../views/scene/scene.vue')), 'scene')
const SceneHome = r => require.ensure([], () => r(require('../views/scene/home/home.vue')), 'scene-home')
const SceneLive = r => require.ensure([], () => r(require('../views/scene/live/live.vue')), 'scene-live')
const Scene5G = r => require.ensure([], () => r(require('../views/scene/5g/5g.vue')), 'scene-5g')
const SceneTeam = r => require.ensure([], () => r(require('../views/scene/team/team.vue')), 'scene-team')
const SceneTeamHome = r => require.ensure([], () => r(require('../views/scene/team/home/home.vue')), 'scene-team-home')
const SceneDetails = r => require.ensure([], () => r(require('../views/scene/team/details/details.vue')), 'scene-details')
const SceneDemand = r => require.ensure([], () => r(require('../views/scene/demand/demand.vue')), 'scene-demand')
const SceneBack = r => require.ensure([], () => r(require('../views/scene/back/back.vue')), 'scene-back')

const IceSnow = r => require.ensure([], () => r(require('../views/icesnow/icesnow.vue')), 'icesnow')
const IceSnowHome = r => require.ensure([], () => r(require('../views/icesnow/home/home.vue')), 'icesnow-home')


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
                path: '/',
                name: 'media-home',
                component: MediaHome,
                meta: {
                    title: '媒体云',
                    keepAlive: false,
                },
            },
            {
                path: 'pic',
                name: 'picture-library',
                component: PictureLibrary,
                meta: {
                    title: '媒体云',
                    keepAlive: false,
                },
            },
            {
                path: 'video',
                name: 'video-library',
                component: VideoLibrary,
                meta: {
                    title: '媒体云',
                    keepAlive: false,
                },
            },
            {
                path: 'new',
                name: 'new-library',
                component: NewLibrary,
                meta: {
                    title: '媒体云',
                    keepAlive: false,
                },
                children: [
                    {
                        path: '/',
                        name: 'new-library-home',
                        component: NewLibraryHome,
                        meta: {
                            title: '媒体云',
                            keepAlive: false,
                        },
                    },
                    {
                        path: 'details/:id',
                        name: 'new-library-details',
                        component: NewLibraryDetails,
                        meta: {
                            title: '媒体云',
                            keepAlive: false,
                        },
                    },
                ]
            },
            {
                path: 'race',
                name: 'media-race',
                component: MediaRace,
                meta: {
                    title: '媒体云',
                    keepAlive: false,
                },
            },
            {
                path: 'live',
                name: 'media-live',
                component: MediaLive,
                meta: {
                    title: '媒体云',
                    keepAlive: false,
                },
            },
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
        children: [
            {
                path: '/',
                name: 'scene-home',
                component: SceneHome,
                meta: {
                    title: '现场云',
                    keepAlive: false,
                },
            },
            {
                path: 'live',
                name: 'scene-live',
                component: SceneLive,
                meta: {
                    title: '现场云',
                    keepAlive: false,
                },
            },
            {
                path: '5g',
                name: 'scene-5g',
                component: Scene5G,
                meta: {
                    title: '现场云',
                    keepAlive: false,
                },
            },
            {
                path: 'team',
                name: 'scene-team',
                component: SceneTeam,
                meta: {
                    title: '现场云',
                    keepAlive: false,
                },
                children: [
                    {
                        path: '/',
                        name: 'scene-team-home',
                        component: SceneTeamHome,
                        meta: {
                            title: '现场云',
                            keepAlive: false,
                        },
                    },
                    {
                        path: 'details/:id',
                        name: 'scene-details',
                        component: SceneDetails,
                        meta: {
                            title: '现场云',
                            keepAlive: false,
                        },
                    },
                ]
            },
            {
                path: 'demand',
                name: 'scene-demand',
                component: SceneDemand,
                meta: {
                    title: '现场云',
                    keepAlive: false,
                },
            },
            {
                path: 'back',
                name: 'scene-back',
                component: SceneBack,
                meta: {
                    title: '现场云',
                    keepAlive: false,
                },
            },
        ]
    },
    {
        path: '/icesnow',
        name: 'icesnow',
        component: IceSnow,
        meta: {
            title: '冰雪云',
            keepAlive: false,
        },
        children: [
            {
                path: '/',
                name: 'icesnow-home',
                component: IceSnowHome,
                meta: {
                    title: '冰雪云',
                    keepAlive: false,
                },
            },
        ]
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
