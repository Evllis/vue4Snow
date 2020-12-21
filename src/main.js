import Vue from 'vue'
// import Navigation from 'vue-navigation'
import App from './App.vue'
// import Router from 'vue-router'
import router from './router'
import store from './store'

import VideoPlayer from 'vue-video-player'
import preview from 'vue-photo-preview'

import Swiper2, { Autoplay, Navigation, Pagination} from 'swiper'

Swiper2.use([Autoplay, Navigation, Pagination])

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'

import './components/icon/index'
import 'videojs-contrib-hls'

import Dialog from './components/dialog'
import Loading from './components/loading'
import toast from './components/toast'

import './JS/plugin'
import './JS/FastClick'
import filters from './JS/filter'
import utils from './JS/utils'
import VueScroller from 'vue-scroller'
import {
    get,
    post
} from './JS/ajax'

// 加载全局组件
import './components'

Vue.use(VideoPlayer)
Vue.use(preview, {
    fullscreenEl: false,
    arrowEl: false,
    zoomEl: false,
    shareEl: false,
    likeEl: true,
    tapToClose: false,
    addCaptionHTMLFn: function(item, captionEl, isFake) {
        if(!item.title) {
            captionEl.children[0].innerHTML = '';
            return false;
        }
        captionEl.children[0].innerHTML = `
            ${ item.title }图片集锦，精彩内容抢先看<br>
            <span class="source">来源：正北方网</span>
        `;
        return true;
    }
})
Vue.use(VueScroller)
Vue.use(utils)

Vue.prototype.$dialog = Dialog
Vue.prototype.$loading = Loading
Vue.prototype.$toast = toast
Vue.prototype.$http = {
    get,
    post,
}

// 注入全局过滤器
Object.keys(filters).forEach(item => {
    Vue.filter(item, filters[item])
})

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (to.path !== '/home' && from.path === '/') {
        router.replace('/home')
    }
    window.document.title = to.meta.title == undefined ? '十四冬奥会' : to.meta.title
    const userInfo = sessionStorage.getItem('userInfo') || null
    if (!userInfo && to.meta.auth) {
        next('/login')
    } else {
        next()
    }
})

// Vue.use(Navigation, { router, })
Vue.use(VueAwesomeSwiper)

export default new Vue(
    {
        el: '#app',
        router,
        store,
        render: h => h(App),
    }
)
