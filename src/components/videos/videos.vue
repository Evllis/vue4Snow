<template>
    <div class="videos">
        <div class="videos-single" v-if="type === 'single'"
            :class="{
                'embed': data[0].titleIsEmbedded,
                'playing': isPlaying
            }">
            <video-player
                class="vjs-custom-skin"
                ref="videoPlayer"
                :options="data[0]"
                :playsinline="true"
                @play="onPlayerPlay($event)"
                @pause="onPlayerPause($event)"
                @ended="onPlayerEnded($event)"
                @loadeddata="onPlayerLoadeddata($event)"
                @waiting="onPlayerWaiting($event)"
                @playing="onPlayerPlaying($event)"
                @timeupdate="onPlayerTimeupdate($event)"
                @canplay="onPlayerCanplay($event)"
                @canplaythrough="onPlayerCanplaythrough($event)"
                @ready="playerReadied"
                @statechanged="playerStateChanged($event)">
            </video-player>
            <h4 class="title" v-if="data[0].title">{{ data[0].title }}</h4>
            <div class="details-info" v-if="data[0].author || data[0].date">
                <span class="author">{{ data[0].author }}</span>
                <span class="date">{{ data[0].date }}</span>
            </div>
        </div>
        <div class="videos-list" v-if="type !== 'single'">
            <swiper :options="tabSwiperOption" ref="videosListSwiper">
                <swiper-slide v-for="(item, index) of data" :key="item.id">
                    <video-player
                        class="vjs-custom-skin"
                        ref="videoPlayer"
                        :options="item"
                        :playsinline="true"
                        @play="onPlayerPlay($event, index)"
                        @pause="onPlayerPause($event, index)"
                        @ended="onPlayerEnded($event)"
                        @loadeddata="onPlayerLoadeddata($event)"
                        @waiting="onPlayerWaiting($event)"
                        @playing="onPlayerPlaying($event)"
                        @timeupdate="onPlayerTimeupdate($event)"
                        @canplay="onPlayerCanplay($event)"
                        @canplaythrough="onPlayerCanplaythrough($event)"
                        @ready="playerReadied"
                        @statechanged="playerStateChanged($event)">
                    </video-player>
                    <div class="video-info">
                        <h4>{{ item.title }}</h4>
                        <time>{{ item.time }}</time>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'videos',
        props: {
            type: {
                type: String,
                default: 'single'
            },
            data: {
                type: Array,
                default: () => [],
                required: true
            }
        },
        data() {
            return {
                isPlaying: false,
                tabSwiperOption: {
                    slidesOffsetAfter: -80,
                    direction: 'horizontal',
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    loop: false,
                },
                videos: []
            }
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        },
        methods: {
            pauseVideo(id) {
                if (Object.prototype.toString.call(this.$refs.videoPlayer) === '[object Array]') {
                    this.$refs.videoPlayer.forEach((item, index) => {
                        if (id !== item.player.id()) {
                            item.player.pause()
                        }
                    })
                }
                else {
                    if (id !== this.$refs.videoPlayer.player.id()) {
                        this.$refs.videoPlayer.player.pause()
                    }
                }
            },
            // listen event
            onPlayerPlay(player, index) {
                this.isPlaying = true
                this.$emit('videoControl', player.id())
                // document.getElementById('2_html5_api')[0].pause()
                // for (let i = 0; i < this.videos.length; i++) {
                //     console.log('====================================')
                //     console.log(444444, this.videos[i][0], this.videos[i].id, player.id() + '_html5_api')
                //     console.log('====================================')
                //     if (this.videos[i].id !== player.id() + '_html5_api') {
                //         this.videos[i].pasue()
                //     }
                // }
                // console.log('====================================')
                // console.log(2222, document.getElementsByTagName('video'))
                // console.log('====================================')
                // var that = this.$refs.videoPlayer
                // for (let i = 0; i < that.length; i++) {
                //     if (i !== index) that[i].player.pause()
                // }
                // console.log('player play!', player)
            },
            onPlayerPause(player, index) {
                // console.log('player pause!', player)
            },
            onPlayerEnded(player) {
                // console.log('player ended!', player)
            },
            onPlayerLoadeddata(player) {
                // console.log('player Loadeddata!', player)
            },
            onPlayerWaiting(player) {
                // console.log('player Waiting!', player)
            },
            onPlayerPlaying(player) {
                // console.log('player Playing!', player)
            },
            onPlayerTimeupdate(player) {
                // console.log('player Timeupdate!', player.currentTime())
            },
            onPlayerCanplay(player) {
                // console.log('player Canplay!', player)
            },
            onPlayerCanplaythrough(player) {
                // console.log('player Canplaythrough!', player)
            },
            // or listen state event
            playerStateChanged(playerCurrentState) {
                // console.log('player current update state', playerCurrentState)
            },
            // player is ready
            playerReadied(player) {
                // seek to 10s
                // console.log('example player 1 readied', player)
                // player.currentTime(10)
                // console.log('example 01: the player is readied', player)
            }
        },
        created() {
            // this.players.length = 0
            this.videos = document.getElementsByTagName('video')
        },
        mounted() {

        },
    }
</script>

<style lang="less">

    @import './videos.less';

</style>
