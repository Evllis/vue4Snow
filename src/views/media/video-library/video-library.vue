<template>
    <div class="video-library">
        <ys-video
            ref="videoElement1"
            :type="'single'"
            :data="videoSingle"
            @videoControl="videoControl">
        </ys-video>
        <div class="more-btn" v-if="isHideMore">
            <button @click="loadMore" :disabled="btnDisabled">
                <i class="icon" v-if="isLoading"></i>
                查看更多
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'video-library',
        data() {
            return {
                isLoading: false,
                btnDisabled: false,
                isHideMore: true,
                videoSingle: [
                    {
                        title: '花滑国手故意抛摔女伴？圈内人：大概率是失平昌曾见证融洽',
                        author: '人民网',
                        date: '2020年12月15日',
                        // height: '360',
                        // autoplay: true,
                        // muted: true,
                        controlBar: {
                            // 当前时间和持续时间的分隔符
                            timeDivider: false,
                            // 是否显示剩余时间
                            remainingTimeDisplay: false,
                            // 音量控制显示
                            volumePanel: false,
                            // 显示持续时间
                            durationDisplay: false
                        },
                        language: 'en',
                        playbackRates: false,
                        sources: [{
                            type: "video/mp4",
                            // mp4
                            src: "http://vjs.zencdn.net/v/oceans.mp4",
                            // webm
                            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                        }],
                        poster: "http://img.daimg.com/uploads/allimg/201202/1-201202160211.jpg",
                    },
                ],
            }
        },
        computed: {

        },
        methods: {
            videoControl(id) {
                this.$refs.videoElement1.pauseVideo(id)
            },
            loadMore() {
                this.$http.get('https://www.fastmock.site/mock/8cfa08f9f31b41ff8daccd7a369bb930/w3chack/api/loadMoreBigPic')
                    .then(res => {
                        // this.listBig = [...this.listBig, ...res.data]
                        // setTimeout(() => {
                        //     this.$refs.listBig.isLoading = false
                        //     this.$refs.listBig.btnDisabled = false
                        // }, 2000)
                    })
            }
        },
        created() {

        },
        mounted() {

        },
    }
</script>

<style lang="less">

    @import './video-library.less';

</style>
