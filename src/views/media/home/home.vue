<template>
    <div class="media-home">
        <!-- swiper -->
        <ys-broadcast
            :isAutoPlay="true"
            :swiperList="broadcastList"
            :toPath="'/media/new/details/'">
        </ys-broadcast>
        <!-- list-smaill -->
        <ys-list-small
            :isLoadMore="listSmaill.isLoadMore"
            :list="listSmaill.data"
            :toPath="'/media/new/details/'"></ys-list-small>
        <!-- picture -->
        <div class="picture-library">
            <div class="title-icon"></div>
            <ys-list-big :list="listBig"></ys-list-big>
        </div>
        <!-- video -->
        <div class="video-library">
            <div class="title-icon"></div>
            <ys-video
                ref="videoElement1"
                :type="'single'"
                :data="videoSingle"
                @videoControl="videoControl">
            </ys-video>
            <ys-video
                ref="videoElement2"
                :type="'list'"
                :data="videoList"
                @videoControl="videoControl">
            </ys-video>
        </div>
        <!-- news media -->
        <div class="news-media">
            <div class="title-icon"></div>
            <ys-list-pic
                :list="picList"
                :toPath="'/media/new/details/'"></ys-list-pic>
        </div>
        <!-- index pic -->
        <div class="index-pic">
            <div class="title-icon"></div>
            <ys-index-pic
                :list="indexList"
                :toPath="'/media/new/details/'"></ys-index-pic>
        </div>
        <!-- live -->
        <div class="live">
            <div class="title-icon"></div>
            <ys-video
                ref="videoElement3"
                :type="'single'"
                :data="liveData"
                @videoControl="videoControl">
            </ys-video>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'media-home',
        data() {
            return {
                broadcastList: [
                    {
                        id: 1,
                        img: 'https://cdn.pixabay.com/photo/2018/03/28/00/31/winter-3267925_960_720.jpg',
                        title: '内蒙古冰上运动训练中心',
                        link: 'https://www.baidu.com',
                        ischain: true
                    },
                    {
                        id: 2,
                        img: 'https://cdn.pixabay.com/photo/2020/12/15/15/33/building-5834006_960_720.jpg',
                        title: '内蒙古冰上运动训练中心'
                    },
                    {
                        id: 3,
                        img: 'https://cdn.pixabay.com/photo/2020/04/07/13/12/bicycle-5013316_960_720.jpg',
                        title: '内蒙古冰上运动训练中心'
                    }
                ],
                listSmaill: {
                    isLoadMore: false,
                    data: [
                        {
                            id: 1,
                            img: 'https://cdn.pixabay.com/photo/2020/01/11/14/36/winter-4757707_960_720.jpg',
                            link: 'https://www.baidu.com',
                            title: '观赛“十四冬”、冬游内蒙古，你有这6种选择！',
                            author: '腾格里新闻'
                        },
                        {
                            id: 2,
                            img: 'https://cdn.pixabay.com/photo/2020/12/03/05/23/lion-5799523_960_720.jpg',
                            link: 'https://www.baidu.com',
                            title: '冬泳挑战冷极限 再掀冬季英雄 会新高潮',
                            author: '海拉尔文旅体育微频'
                        },
                        {
                            id: 3,
                            img: 'https://cdn.pixabay.com/photo/2020/12/11/19/46/court-church-5823672_960_720.jpg',
                            link: 'https://www.baidu.com',
                            title: '观赛“十四冬”、冬游内蒙古，你有这6种选择！',
                            author: '腾格里新闻'
                        }
                    ]
                },
                listBig: [
                    {
                        id: 1,
                        title: '观赛“十四冬”、冬游内蒙古，你有这6种选择！',
                        time: '2020-12-5',
                        imgs: [
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/12/14/21/36/mountains-5832116_960_720.jpg',
                                preview: 1
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/11/25/22/17/christmas-5777361_960_720.jpg',
                                preview: 1
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/12/15/23/39/sparrow-5835249_960_720.jpg',
                                preview: 1
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/06/27/21/53/chicago-5347324_960_720.jpg',
                                preview: 1
                            },
                            {
                                src: 'https://images.alphacoders.com/111/thumb-350-1119569.jpg',
                                preview: 1
                            },
                            {
                                src: 'https://images8.alphacoders.com/111/thumb-350-1119568.jpg',
                                preview: 1
                            },
                        ]
                    },
                    {
                        id: 2,
                        title: '第二套图',
                        time: '2020-12-11',
                        imgs: [
                            {
                                src: 'https://cdn.pixabay.com/photo/2018/03/28/00/31/winter-3267925_960_720.jpg',
                                preview: 2
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/12/15/15/33/building-5834006_960_720.jpg',
                                preview: 2
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/04/07/13/12/bicycle-5013316_960_720.jpg',
                                preview: 2
                            },
                        ]
                    },
                    {
                        id: 3,
                        title: '天气突然冷起来了',
                        time: '2020-12-15',
                        imgs: [
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/01/11/14/36/winter-4757707_960_720.jpg',
                                preview: 3
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/12/03/05/23/lion-5799523_960_720.jpg',
                                preview: 3
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/12/11/19/46/court-church-5823672_960_720.jpg',
                                preview: 3
                            },
                        ]
                    },
                    {
                        id: 4,
                        title: '吃好吃的啦',
                        time: '2020-12-22',
                        imgs: [
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/12/14/21/36/mountains-5832116_960_720.jpg',
                                preview: 4
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/11/25/22/17/christmas-5777361_960_720.jpg',
                                preview: 4
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/12/15/23/39/sparrow-5835249_960_720.jpg',
                                preview: 4
                            },
                        ]
                    },
                ],
                videoSingle: [
                    {
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
                        poster: "https://cdn.pixabay.com/photo/2020/12/14/14/04/winding-road-5830986_960_720.jpg",
                    },
                ],
                videoList: [
                    {
                        id: 1,
                        // height: '360',
                        // autoplay: true,
                        // muted: true,
                        title: '单板滑雪U型场地技巧',
                        time: '2020-12-01',
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
                        // playbackRates: [0.7, 1.0, 1.5, 2.0],
                        sources: [{
                            type: "video/mp4",
                            // mp4
                            src: "http://vjs.zencdn.net/v/oceans.mp4",
                            // webm
                            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                        }],
                        poster: "https://cdn.pixabay.com/photo/2019/12/19/10/56/christmas-market-4705882_960_720.jpg",
                    },
                    {
                        id: 2,
                        // height: '360',
                        // autoplay: true,
                        // muted: true,
                        title: '单板滑雪U型场地技巧',
                        time: '2020-12-01',
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
                        // playbackRates: [0.7, 1.0, 1.5, 2.0],
                        sources: [{
                            type: "video/mp4",
                            // mp4
                            src: "http://vjs.zencdn.net/v/oceans.mp4",
                            // webm
                            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                        }],
                        poster: "https://cdn.pixabay.com/photo/2020/11/22/16/45/nutcracker-5767159_960_720.jpg",
                    },
                    {
                        id: 3,
                        // height: '360',
                        // autoplay: true,
                        // muted: true,
                        title: '单板滑雪U型场地技巧',
                        time: '2020-12-01',
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
                        // playbackRates: [0.7, 1.0, 1.5, 2.0],
                        sources: [{
                            type: "video/mp4",
                            // mp4
                            src: "http://vjs.zencdn.net/v/oceans.mp4",
                            // webm
                            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                        }],
                        poster: "https://cdn.pixabay.com/photo/2020/11/17/02/16/dog-5751151_960_720.jpg",
                    },
                    {
                        id: 4,
                        // height: '360',
                        // autoplay: true,
                        // muted: true,
                        title: '单板滑雪U型场地技巧',
                        time: '2020-12-01',
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
                        // playbackRates: [0.7, 1.0, 1.5, 2.0],
                        sources: [{
                            type: "video/mp4",
                            // mp4
                            src: "http://vjs.zencdn.net/v/oceans.mp4",
                            // webm
                            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                        }],
                        poster: "https://cdn.pixabay.com/photo/2020/12/01/16/11/ornaments-5794746_960_720.jpg",
                    },
                    {
                        id: 5,
                        // height: '360',
                        // autoplay: true,
                        // muted: true,
                        title: '单板滑雪U型场地技巧',
                        time: '2020-12-01',
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
                        // playbackRates: [0.7, 1.0, 1.5, 2.0],
                        sources: [{
                            type: "video/mp4",
                            // mp4
                            src: "http://vjs.zencdn.net/v/oceans.mp4",
                            // webm
                            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                        }],
                        poster: "https://cdn.pixabay.com/photo/2018/03/09/18/55/snow-3212345_960_720.jpg",
                    },
                    {
                        id: 6,
                        // height: '360',
                        // autoplay: true,
                        // muted: true,
                        title: '单板滑雪U型场地技巧',
                        time: '2020-12-01',
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
                        // playbackRates: [0.7, 1.0, 1.5, 2.0],
                        sources: [{
                            type: "video/mp4",
                            // mp4
                            src: "http://vjs.zencdn.net/v/oceans.mp4",
                            // webm
                            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                        }],
                        poster: "https://cdn.pixabay.com/photo/2020/12/08/14/13/blackbird-5814541_960_720.jpg",
                    },
                    {
                        id: 7,
                        // height: '360',
                        // autoplay: true,
                        // muted: true,
                        title: '单板滑雪U型场地技巧',
                        time: '2020-12-01',
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
                        // playbackRates: [0.7, 1.0, 1.5, 2.0],
                        sources: [{
                            type: "video/mp4",
                            // mp4
                            src: "http://vjs.zencdn.net/v/oceans.mp4",
                            // webm
                            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                        }],
                        poster: "https://cdn.pixabay.com/photo/2020/12/13/16/22/snow-5828736_960_720.jpg",
                    },
                ],
                picList: [
                    {
                        id: 1,
                        img: 'https://bpic.588ku.com/illus_water_img/20/12/04/9ce9088fbaa76bedd7374c270c35449d.jpg',
                        link: 'https://www.baidu.com',
                        title: '全国运动会',
                        ischain: true
                    },
                    {
                        id: 2,
                        img: 'https://bpic.588ku.com/illus_water_img/20/12/04/e6130830320ffa0eafd21fc5afd4a96d.jpg',
                        link: 'https://www.baidu.com',
                        title: '冰雪之约'
                    },
                    {
                        id: 3,
                        img: 'https://bpic.588ku.com/illus_water_img/20/12/04/773e147ad8415a49a692919ac2d63901.jpg',
                        link: 'https://www.baidu.com',
                        title: '天黑黑'
                    },
                    {
                        id: 4,
                        img: 'https://bpic.588ku.com/illus_water_img/20/12/04/f4fa89df6c2f86651f35fbd451d7b803.jpg',
                        link: 'https://www.baidu.com',
                        title: '雪人'
                    },
                ],
                indexList: [
                    {
                        id: 1,
                        title: '鸟瞰“十四冬”三大赛场',
                        link: 'http://www.baidu.com',
                        img: 'https://www.ghostoact.com/static/arts/img/splash/a4nernr4t51voow9ye8z05jjc6ijinij.jpg',
                        ischain: true
                    },
                    {
                        id: 2,
                        title: '只要有冰凉的饮料和温暖舒适的椅子',
                        link: 'http://www.qq.com',
                        img: 'https://www.ghostoact.com/static/arts/img/splash/au0xf6ebqwlen3ys3hzqt6oc46pk0nqv.jpg'
                    },
                    {
                        id: 3,
                        title: '他们就会把各式各样的秘密',
                        link: 'http://www.163.com',
                        img: 'https://www.ghostoact.com/static/arts/img/splash/a8u4qmn0zb41a59fh2mk5x16ghu1waau.jpg'
                    },
                    {
                        id: 4,
                        title: '告诉貌似善良的人',
                        link: 'http://www.enkj.com',
                        img: 'https://www.ghostoact.com/static/arts/img/splash/a0dfv3hwpnz6n0sqepy7pi354muzfp6w.jpg'
                    },
                    {
                        id: 5,
                        title: '还有谁比年轻的雷纳德看起来更友善呢？',
                        link: 'http://www.pconline.com.cn',
                        img: 'https://www.ghostoact.com/static/arts/img/splash/aka3vmnjzcy051ek2hpa5l9of8fmtr3c.jpg'
                    },
                ],
                liveData: [
                    {
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
                            type: "application/x-mpegURL",
                            // mp4
                            src: "https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8",
                            // webm
                            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                        }],
                        poster: "https://cdn.pixabay.com/photo/2020/11/14/12/28/green-crested-lizard-5741470_960_720.jpg",
                    },
                ]
            }
        },
        computed: {

        },
        methods: {
            videoControl(id) {
                this.$refs.videoElement1.pauseVideo(id)
                this.$refs.videoElement2.pauseVideo(id)
                this.$refs.videoElement3.pauseVideo(id)
            }
        },
        created() {

        },
        mounted() {

        },
    }
</script>

<style lang="less" scoped>

    @import './home.less';

</style>
