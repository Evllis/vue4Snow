<template>
    <div class="scene-home">
        <div class="time-wrap" :class="{ 'in': isIn }">
            <time-axis>
                <template v-slot:button>
                    <div class="time-btn">
                        <a href="javascript:void(0);"
                            alt="查看详细日程" title="查看详细日程"
                            @click="watchMore"></a>
                    </div>
                </template>
            </time-axis>
            <div class="time-details">
                <ul class="time-list">
                    <li
                        class="time-item"
                        v-for="item of detailsList" :key="item.id">
                        <div class="date">
                            <h4 class="num">{{ item.date }}</h4>
                            <div class="border">
                                <span class="hour">{{ item.time }}</span>
                            </div>
                        </div>
                        <ul class="project-list">
                            <li class="project-item"
                                v-for="children of item.list" :key="children.id">
                                <div class="project-title">{{ children.name }}</div>
                                <div class="project-watch">
                                    <a :href="children.link" class="link">
                                        <i class="icon"></i>
                                        <span class="text">观看</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div class="details-btn">
                    <button @click="isIn = false">返回</button>
                </div>
            </div>
        </div>
        <!-- video -->
        <div class="form-wrap video-library">
            <div class="title-icon"></div>
            <ys-video
                ref="videoElement1"
                :type="'single'"
                :data="videoSingle"
                @videoControl="videoControl">
            </ys-video>
        </div>
        <!-- video list -->
        <div class="form-wrap video-list">
            <div class="title-icon"></div>
            <ys-video
                ref="videoElement2"
                :type="'list'"
                :data="videoList"
                @videoControl="videoControl">
            </ys-video>
        </div>
        <!-- vr -->
        <div class="form-wrap vr">
            <div class="title-icon"></div>
            <div class="vr-wrap">
                <img src="https://images7.alphacoders.com/112/thumb-1920-1120208.jpg" alt="" title="" />
                <a href="#" class="link">进入虚拟赛场</a>
            </div>
        </div>
        <!-- team -->
        <div class="form-wrap team">
            <div class="title-icon"></div>
            <ys-list-small
            :isLoadMore="listSmaill.isLoadMore"
            :list="listSmaill.data"
            :toPath="'/scene/team/details/'"></ys-list-small>
        </div>
        <!-- demand -->
        <div class="form-wrap demand">
            <div class="title-icon"></div>
            <ys-video
                ref="videoElement3"
                :type="'single'"
                :data="videoSingle"
                @videoControl="videoControl">
            </ys-video>
            <ys-video
                ref="videoElement4"
                :type="'list'"
                :data="videoList"
                @videoControl="videoControl">
            </ys-video>
        </div>
        <!-- back -->
        <div class="form-wrap back">
            <div class="title-icon"></div>
            <ys-list-big :list="listBig"></ys-list-big>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'scene-home',
        data() {
            return {
                isIn: false,
                detailsList: [
                    {
                        id: 1,
                        date: '2020年12月1日',
                        time: '10:00',
                        list: [
                            {
                                id: '1-1',
                                name: '花样滑冰九项',
                                link: 'https://www.baidu.com'
                            },
                        ]
                    },
                    {
                        id: 2,
                        date: '2020年12月2日',
                        time: '10:00',
                        list: [
                            {
                                id: '2-1',
                                name: '自由式滑雪2项',
                                link: 'https://www.baidu.com'
                            },
                            {
                                id: '2-2',
                                name: '单板滑雪3项',
                                link: 'https://www.baidu.com'
                            },
                        ]
                    },
                    {
                        id: 3,
                        date: '2020年12月3日',
                        time: '10:00',
                        list: [
                            {
                                id: '3-1',
                                name: '轮滑冰球女子',
                                link: 'https://www.baidu.com'
                            },
                            {
                                id: '3-2',
                                name: '自由式滑雪U型场地',
                                link: 'https://www.baidu.com'
                            },
                        ]
                    }
                ],
                videoSingle: [
                    {
                        title: '花滑国手故意抛摔女伴？圈内人：大概率是失平昌曾见证融洽',
                        titleIsEmbedded: true,
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
                        poster: "http://img.daimg.com/uploads/allimg/201202/1-201202160211.jpg",
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
                        poster: "http://img.daimg.com/uploads/allimg/201202/1-201202160211.jpg",
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
                        poster: "http://img.daimg.com/uploads/allimg/201202/1-201202160211.jpg",
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
                        poster: "http://img.daimg.com/uploads/allimg/201202/1-201202160211.jpg",
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
                        poster: "http://img.daimg.com/uploads/allimg/201202/1-201202160211.jpg",
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
                        poster: "http://img.daimg.com/uploads/allimg/201202/1-201202160211.jpg",
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
                        poster: "http://img.daimg.com/uploads/allimg/201202/1-201202160211.jpg",
                    },
                ],
                listSmaill: {
                    isLoadMore: false,
                    data: [
                        {
                            id: 1,
                            img: 'http://img.daimg.com/uploads/allimg/201205/1-201205001312.jpg',
                            link: 'https://www.baidu.com',
                            title: '观赛“十四冬”、冬游内蒙古，你有这6种选择！',
                            author: '腾格里新闻'
                        },
                        {
                            id: 2,
                            img: 'http://img.daimg.com/uploads/allimg/201204/1-201204001449.jpg',
                            link: 'https://www.baidu.com',
                            title: '冬泳挑战冷极限 再掀冬季英雄 会新高潮',
                            author: '海拉尔文旅体育微频',
                            ischain: true
                        },
                        {
                            id: 3,
                            img: 'http://img.daimg.com/uploads/allimg/201203/1-2012031K916.jpg',
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
                                src: 'http://img.daimg.com/uploads/allimg/201205/1-201205001312.jpg',
                                preview: 1
                            },
                            {
                                src: 'http://img.daimg.com/uploads/allimg/201204/1-201204001449.jpg',
                                preview: 1
                            },
                            {
                                src: 'http://img.daimg.com/uploads/allimg/201203/1-2012031K916.jpg',
                                preview: 1
                            },
                            {
                                src: 'http://img.daimg.com/uploads/allimg/201203/1-2012031K222.jpg',
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
                    }
                ],
            }
        },
        computed: {

        },
        methods: {
            watchMore() {
                this.isIn = true
            },
            videoControl(id) {
                this.$refs.videoElement1.pauseVideo(id)
                this.$refs.videoElement2.pauseVideo(id)
                this.$refs.videoElement3.pauseVideo(id)
                this.$refs.videoElement4.pauseVideo(id)
            }
        },
        created() {

        },
        mounted() {

        },
    }
</script>

<style lang="less">

    @import './home.less';

</style>
