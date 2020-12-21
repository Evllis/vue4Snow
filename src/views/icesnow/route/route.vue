<template>
    <div class="icesnow-route">
        <!-- <iframe id="geoPage" width="100%" height="30%" frameborder=0 scrolling="no"
    src="https://apis.map.qq.com/tools/geolocation?key=YEMBZ-CRUWU-TGNVB-2BGS5-EXSS2-6HBGE&referer=myapp&effect=circle"></iframe> -->
        <iframe
            v-if="isHide"
            :src="`https://map.qq.com/nav/drive#routes/page?eword=${ endName }&epointx=${ endlat }&epointy=${ endlng }&referer=myapp&start=${ lat },${ lng }&dest=${ endlat },${ endlng }&sword=${ formattedAddress ? formattedAddress : province }&zoombutton=&trafficbutton=&rehttps=&_user_gps_track=&navimenu=&transport=&backurl=&back=&footdetail=&graytest=&ref=&showSimunavi=&topbar=&spointy=&spointx=`" ref="iframe"></iframe>
        <!-- <iframe src="https://www.baidu.com" ref="iframe"></iframe> -->
        <!-- <div id="map-container"></div> -->
    </div>
</template>

<script>

    export default {
        name: 'icesnow-route',
        data() {
            return {
                loc: '',
                isMapInit: false,
                isHide: false,
                lat: '',
                lng: '',
                endlat: '',
                endlng: '',
                endName: '',
                province: '',
                city: '',
                district: '',
                formattedAddress: ''
            }
        },
        computed: {

        },
        methods: {
            getLocation() {
                let geolocation = new qq.maps.Geolocation()
                geolocation.getLocation(success => {
                    this.lat = success.lat
                    this.lng = success.lng
                    this.isHide = true
                    if (success.city) this.city = success.city
                    if (success.district) this.district = success.district
                    if (success.addr) this.formattedAddress = success.addr
                    if (!success.city && !success.district && !success.addr) this.province = success.province
                    // this.formattedAddress = success.addr
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
        },
        created() {

        },
        mounted() {
            console.log('====================================')
            console.log(222222, this.$route.params.end, this.$route.params.name)
            console.log('====================================')
            if (this.$route.params.end) {
                let pos = this.$route.params.end.split(',')
                this.endlat = pos[0]
                this.endlng = pos[1]
                this.endName = this.$route.params.name
            }
            this.getLocation()
        },
    }
</script>

<style lang="less" scoped>

    @import './route.less';

</style>
