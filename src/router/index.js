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
const IceSnowVr = r => require.ensure([], () => r(require('../views/icesnow/vr/vr.vue')), 'icesnow-vr')
const IceSnowTravel = r => require.ensure([], () => r(require('../views/icesnow/travel/travel.vue')), 'icesnow-travel')
const TravelHome = r => require.ensure([], () => r(require('../views/icesnow/travel/home/home.vue')), 'travel-home')
const TravelDetails = r => require.ensure([], () => r(require('../views/icesnow/travel/details/details.vue')), 'travel-details')
// const IceSnowRoute = r => require.ensure([], () => r(require('../views/icesnow/route/route.vue')), 'icesnow-route')
const IceSnowCulture = r => require.ensure([], () => r(require('../views/icesnow/culture/culture.vue')), 'icesnow-culture')
const CultureHome = r => require.ensure([], () => r(require('../views/icesnow/culture/home/home.vue')), 'culture-home')
const CultureDetails = r => require.ensure([], () => r(require('../views/icesnow/culture/details/details.vue')), 'culture-details')
const IceSnowStrategy = r => require.ensure([], () => r(require('../views/icesnow/strategy/strategy.vue')), 'icesnow-strategy')
const StrategyHome = r => require.ensure([], () => r(require('../views/icesnow/strategy/home/home.vue')), 'strategy-home')
const StrategyDetails = r => require.ensure([], () => r(require('../views/icesnow/strategy/details/details.vue')), 'strategy-details')
const IceSnowTaste = r => require.ensure([], () => r(require('../views/icesnow/taste/taste.vue')), 'icesnow-taste')
const TasteHome = r => require.ensure([], () => r(require('../views/icesnow/taste/home/home.vue')), 'taste-home')
const TasteDetails = r => require.ensure([], () => r(require('../views/icesnow/taste/details/details.vue')), 'taste-details')


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
            title: '十四冬奥会',
            keepAlive: false,
        },
    },
    {
        path: '/media',
        name: 'media',
        component: Media,
        meta: {
            title: '媒体云',
            keepAlive: true,
        },
        children: [
            {
                path: '/',
                name: 'media-home',
                component: MediaHome,
                meta: {
                    title: '媒体云',
                    keepAlive: true,
                },
            },
            {
                path: 'pic',
                name: 'picture-library',
                component: PictureLibrary,
                meta: {
                    title: '媒体云',
                    keepAlive: true,
                },
            },
            {
                path: 'video',
                name: 'video-library',
                component: VideoLibrary,
                meta: {
                    title: '媒体云',
                    keepAlive: true,
                },
            },
            {
                path: 'new',
                name: 'new-library',
                component: NewLibrary,
                meta: {
                    title: '媒体云',
                    keepAlive: true,
                },
                children: [
                    {
                        path: '/',
                        name: 'new-library-home',
                        component: NewLibraryHome,
                        meta: {
                            title: '媒体云',
                            keepAlive: true,
                        },
                    },
                    {
                        path: 'details/:id',
                        name: 'new-library-details',
                        component: NewLibraryDetails,
                        meta: {
                            title: '媒体云',
                            keepAlive: true,
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
                    keepAlive: true,
                },
            },
            {
                path: 'live',
                name: 'media-live',
                component: MediaLive,
                meta: {
                    title: '媒体云',
                    keepAlive: true,
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
            keepAlive: true,
        },
        children: [
            {
                path: '/',
                name: 'scene-home',
                component: SceneHome,
                meta: {
                    title: '现场云',
                    keepAlive: true,
                },
            },
            {
                path: 'live',
                name: 'scene-live',
                component: SceneLive,
                meta: {
                    title: '现场云',
                    keepAlive: true,
                },
            },
            {
                path: '5g',
                name: 'scene-5g',
                component: Scene5G,
                meta: {
                    title: '现场云',
                    keepAlive: true,
                },
            },
            {
                path: 'team',
                name: 'scene-team',
                component: SceneTeam,
                meta: {
                    title: '现场云',
                    keepAlive: true,
                },
                children: [
                    {
                        path: '/',
                        name: 'scene-team-home',
                        component: SceneTeamHome,
                        meta: {
                            title: '现场云',
                            keepAlive: true,
                        },
                    },
                    {
                        path: 'details/:id',
                        name: 'scene-details',
                        component: SceneDetails,
                        meta: {
                            title: '现场云',
                            keepAlive: true,
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
                    keepAlive: true,
                },
            },
            {
                path: 'back',
                name: 'scene-back',
                component: SceneBack,
                meta: {
                    title: '现场云',
                    keepAlive: true,
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
            keepAlive: true,
        },
        children: [
            {
                path: '/',
                name: 'icesnow-home',
                component: IceSnowHome,
                meta: {
                    title: '冰雪云',
                    keepAlive: true,
                },
            },
            {
                path: 'vr',
                name: 'icesnow-vr',
                component: IceSnowVr,
                meta: {
                    title: '冰雪云',
                    keepAlive: true,
                },
            },
            {
                path: 'travel',
                name: 'icesnow-travel',
                component: IceSnowTravel,
                meta: {
                    title: '冰雪云',
                    keepAlive: true,
                },
                children: [
                    {
                        path: '/',
                        name: 'travel-home',
                        component: TravelHome,
                        meta: {
                            title: '冰雪云',
                            keepAlive: true,
                        },
                    },
                    {
                        path: 'details/:id',
                        name: 'travel-details',
                        component: TravelDetails,
                        meta: {
                            title: '冰雪云',
                            keepAlive: true,
                        },
                    },
                ]
            },
            // {
            //     path: 'route',
            //     name: 'icesnow-route',
            //     component: IceSnowRoute,
            //     meta: {
            //         title: '冰雪云',
            //         keepAlive: true,
            //     },
            // },
            {
                path: 'culture',
                name: 'icesnow-culture',
                component: IceSnowCulture,
                meta: {
                    title: '冰雪云',
                    keepAlive: true,
                },
                children: [
                    {
                        path: '/',
                        name: 'culture-home',
                        component: CultureHome,
                        meta: {
                            title: '冰雪云',
                            keepAlive: true,
                        },
                    },
                    {
                        path: 'details/:id',
                        name: 'culture-details',
                        component: CultureDetails,
                        meta: {
                            title: '冰雪云',
                            keepAlive: true,
                        },
                    },
                ]
            },
            {
                path: 'strategy',
                name: 'icesnow-strategy',
                component: IceSnowStrategy,
                meta: {
                    title: '冰雪云',
                    keepAlive: true,
                },
                children: [
                    {
                        path: '/',
                        name: 'strategy-home',
                        component: StrategyHome,
                        meta: {
                            title: '冰雪云',
                            keepAlive: true,
                        },
                    },
                    {
                        path: 'details/:id',
                        name: 'strategy-details',
                        component: StrategyDetails,
                        meta: {
                            title: '冰雪云',
                            keepAlive: true,
                        },
                    },
                ]
            },
            {
                path: 'taste',
                name: 'icesnow-taste',
                component: IceSnowTaste,
                meta: {
                    title: '冰雪云',
                    keepAlive: true,
                },
                children: [
                    {
                        path: '/',
                        name: 'taste-home',
                        component: TasteHome,
                        meta: {
                            title: '冰雪云',
                            keepAlive: true,
                        },
                    },
                    {
                        path: 'details/:id',
                        name: 'taste-details',
                        component: TasteDetails,
                        meta: {
                            title: '冰雪云',
                            keepAlive: true,
                        },
                    },
                ]
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
    base: '/vue/',
    routes,
    scrollBehavior: () => ({
        y: 0,
    }),
})

export default router
