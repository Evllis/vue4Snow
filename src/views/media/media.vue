<template>
    <div class="media">
        <!-- banner -->
        <ys-banner></ys-banner>
        <!-- tabs -->
        <ys-tabs :listArr="tabList"></ys-tabs>
        <keep-alive v-if="!$route.meta.noKeepAlive">
            <router-view :key="key"></router-view>
        </keep-alive>
        <router-view v-if="$route.meta.noKeepAlive" :key="key"></router-view>
    </div>
</template>
<script>
    export default {
        name: 'media',
        data() {
            return {
                tabList: [
                    {
                        id: 1,
                        name: '官方发布',
                        link: '/media'
                    },
                    {
                        id: 2,
                        name: '图片库',
                        link: '/media/pic'
                    },
                    {
                        id: 3,
                        name: '视频库',
                        link: '/media/video'
                    },
                    {
                        id: 4,
                        name: '新媒体',
                        link: '/media/new'
                    },
                    {
                        id: 5,
                        name: '同步翻译',
                        link: 'https://www.baidu.com',
                        ischain: true
                    },
                    {
                        id: 6,
                        name: '远程互动',
                        link: 'https://www.163.com',
                        ischain: true
                    },
                    {
                        id: 7,
                        name: '全景赛场',
                        link: '/media/race'
                    },
                    {
                        id: 8,
                        name: '直播云',
                        link: '/media/live'
                    },
                    {
                        id: 9,
                        name: '微云',
                        link: 'https://www.weiyun.com',
                        ischain: true
                    }
                ],
            }
        },
        computed: {
            key() {
                return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
            }
        },
        methods: {

        },
        created() {
            // this.$store.commit('updataBannerStatus', true)
            // console.log('====================================')
            // console.log(11111, this.$store.state.app)
            // console.log('====================================')
        },
        mounted() {

        },
    }
</script>

<style lang="less">

    @import './media.less';

</style>
