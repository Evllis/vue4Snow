<template>
    <div id="app" class="app">
        <div class="page-content">
            <!--
                :enter-active-class="enterTransition"
                :leave-active-class="leaveTransition"
            -->
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
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
        <div class="route-btn" @click="goRoute"></div>
        <div class="back-btn" v-if="btnFlag" @click="goBack">
            <i class="icon"></i>
        </div>
        <div class="route-wrap" :class="{ 'in': isRouteIn }">
            <div class="route-inner">
                <div class="route-icon">
                    冰雪路线
                    <i class="route-back" @click="routeBack"></i>
                </div>
                <ys-route-line
                    @routeParams="getRouteParams"
                    @routeCurrent="getRouteCurrent"></ys-route-line>
                <iframe
                    v-if="isLine"
                    :src="lineSrc" ref="iframe">
                </iframe>
                <iframe
                    v-if="isPoint"
                    :src="pointSrc" ref="iframe">
                </iframe>
            </div>
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

                type: 1,

                isRouteIn: false,
                isRouterAlive: true,
                scrollTop: 0,
                btnFlag: false,
                speed: 0.5,

                loc: '',
                isMapInit: false,
                isLine: false,
                isPoint: false,
                pointSrc: '',
                lineSrc: '',
                lat: '',
                lng: '',
                endlat: '',
                endlng: '',
                endName: '',
                province: '',
                city: '',
                district: '',
                formattedAddress: ''
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
            // if (this.$route.params.end) {
            //     let pos = this.$route.params.end.split(',')
            //     this.endlat = pos[0]
            //     this.endlng = pos[1]
            //     this.endName = this.$route.params.name
            // }
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
            },
            goRoute() {
                this.isRouteIn = true
                this.type = 1
                setTimeout(() => {
                    this.getLocation()
                }, 1000)
            },
            routeBack() {
                this.isRouteIn = false
            },
            getRouteParams(params) {
                this.type = 2
                this.getLocation(params)
            },
            getRouteCurrent(params) {
                this.type = 3
                this.getLocation(params)
            },
            getLocation(params) {
                let geolocation = new qq.maps.Geolocation()
                geolocation.getLocation(success => {
                    this.lat = success.lat
                    this.lng = success.lng
                    if (success.city) this.city = success.city
                    if (success.district) this.district = success.district
                    if (success.addr) this.formattedAddress = success.addr
                    this.province = success.province
                    if (this.type == 1) {
                        this.isPoint = true
                        this.isLine = false
                        this.pointSrc = `https://apis.map.qq.com/tools/poimarker?type=1&keyword=${ !this.formattedAddress && !this.province ? this.city : this.formattedAddress }&center=${ this.lat },${ this.lng }&radius=1000&key=YEMBZ-CRUWU-TGNVB-2BGS5-EXSS2-6HBGE&referer=myapp`
                    }
                    if (this.type == 2) {
                        let pos = params.coordinate.split(',')
                        this.isPoint = false
                        this.isLine = true
                        this.lineSrc = `https://map.qq.com/nav/drive#routes/page?eword=${ params.address }&epointx=${ pos[0] }&epointy=${ pos[1] }&referer=myapp&start=${ this.lat },${ this.lng }&dest=${ pos[0] },${ pos[1] }&sword=${ this.formattedAddress ? this.formattedAddress : this.province }&zoombutton=&trafficbutton=&rehttps=&_user_gps_track=&navimenu=&transport=&backurl=&back=&footdetail=&graytest=&ref=&showSimunavi=&topbar=&spointy=&spointx=`
                    }
                    if (this.type == 3) {
                        let pos = params.coordinate.split(',')
                        this.isPoint = true
                        this.isLine = false
                        this.pointSrc = `https://apis.map.qq.com/tools/poimarker?type=1&keyword=${ params.address }&center=${ pos[1] },${ pos[0] }&radius=1000&key=YEMBZ-CRUWU-TGNVB-2BGS5-EXSS2-6HBGE&referer=myapp`
                    }
                }, error => {
                    console.log('====================================')
                    console.log(44444, error)
                    console.log('====================================')
                })
                // let geolocation = this.$util.initMap('map-container', 'develop') //定位
                // AMap.event.addListener(geolocation, 'complete', result => {
                //     this.lat = result.position.lat
                //     this.lng = result.position.lng
                //     this.isHide = true
                //     if (result.addressComponent) {
                //         this.formattedAddress = result.formattedAddress
                //         this.province = result.addressComponent.province
                //         this.city = result.addressComponent.city
                //         this.district = result.addressComponent.district
                //     }
                // })
                // AMap.event.addListener(geolocation, 'error', result => {
                //     this.formattedAddress = result
                // })
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

</style>
