<template>
    <div id="app" class="app">
        <div class="page-content">
            <!--
                :enter-active-class="enterTransition"
                :leave-active-class="leaveTransition"
            -->
            <keep-alive v-if="!$route.meta.noKeepAlive">
                <router-view></router-view>
            </keep-alive>
            <router-view v-if="$route.meta.noKeepAlive"></router-view>
            <!-- <router-view v-if="isRouterAlive"></router-view> -->
            <!-- <transition>
                <navigation>
                    <router-view v-if="isRouterAlive"></router-view>
                    <router-view v-if="!$route.meta.keepAlive"></router-view>
                    <keep-alive>
                        <router-view v-if="$route.meta.keepAlive"></router-view>
                    </keep-alive>
                </navigation>
            </transition> -->
        </div>
        <ys-footer></ys-footer>
        <div class="back-btn" v-if="btnFlag" @click="goBack">
            <i class="icon"></i>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'App',
        provide() {
            return {
                reload: this.reload
            }
        },
        data() {
            return {
                isRouterAlive: true,
                scrollTop: 0,
                btnFlag: false,
                speed: 0.5
                // isBanner: false,
                // enterTransition: 'animate__animated animate__fadeIn',
                // leaveTransition: 'animate__animated animate__fadeOut',
            }
        },
        created() {
            // this.$navigation.on('forward', (to, from) => {
            //     console.log('====================================')
            //     console.log(22222, to)
            //     console.log('====================================')
            //     this.enterTransition = 'animate__animated animate__fadeInRight'
            //     this.leaveTransition = 'animate__animated animate__fadeOutLeft'
            // })
            // this.$navigation.on('back', (to, from) => {
            //     this.enterTransition = 'animate__animated animate__fadeInLeft'
            //     this.leaveTransition = 'animate__animated animate__fadeOutRight'
            // })
            // this.$navigation.on('replace', (to, from) => {
            //     this.enterTransition = 'aanimate__animated animate__fadeIn'
            //     this.leaveTransition = 'animate__animated animate__fadeOut'
            // })
        },
        mounted() {
            // window.addEventListener('scroll', this.scrollToTop, true)
            this.element.addEventListener('scroll', this.scrollToTop)
        },
        destroyed() {
            // window.removeEventListener('scroll', this.scrollToTop, true)
            this.element.removeEventListener('scroll', this.scrollToTop)
        },
        computed: {
            element() {
                return document.getElementsByClassName('page-content')[0]
            }
            // key() {
            //     return this.$route.path + Math.random()
            // }
            // isBanner() {
            //     return this.$store.state.bannerStatus
            // }
        },
        methods: {
            reload() {
                this.isRouterAlive = false
                this.$nextTick(() => {
                    this.isRouterAlive = true
                })
            },
            scrollToTop() {
                let top = this.element.scrollTop
                this.scrollTop = top
                if (this.scrollTop > 50) {
                    this.btnFlag = true
                } else {
                    this.btnFlag = false
                }
            },
            goBack() {
                let timer = setInterval(() => {
                    let ispeed = Math.floor(-this.scrollTop / 5)
                    this.element.scrollTop = this.scrollTop + ispeed
                    if (this.scrollTop === 0) {
                        clearInterval(timer)
                    }
                }, 16)
            }
        }
    }
</script>

<style lang="less">

    * { touch-action: pan-y; }
    @import '../node_modules/video.js/dist/video-js.css';
    @import './plugins/aos/aos.css';
    @import '../node_modules/vue-photo-preview/dist/skin.css';
    @import './plugins/swiper/swiper.min.css';
    // @import './assets/css/animate.min.css';
    @import './assets/css/reset.css';
    @import './assets/css/common.less';


    .back-btn {
        width: 34px;
        height: 34px;
        position: fixed;
        right: 7px;
        bottom: 82px;
        background-color: rgba(0, 0, 0, .3);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
        .icon {
            display: inline-block;
            width: 18px;
            height: 25px;
            background-image: url('./assets/images/back-home.png');
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
</style>
