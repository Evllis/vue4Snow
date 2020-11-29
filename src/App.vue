<template>
    <div id="app" class="app">
        <div class="page-content">
            <!--
                :enter-active-class="enterTransition"
                :leave-active-class="leaveTransition"
            -->
            <router-view v-if="isRouterAlive"></router-view>
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
                isRouterAlive: true
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
        computed: {
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
            }
        }
    }
</script>

<style lang="less">

    @import './plugins/aos/aos.css';
    @import './plugins/swiper/swiper.min.css';
    // @import './assets/css/animate.min.css';
    @import './assets/css/reset.css';
    @import './assets/css/common.less';
</style>
