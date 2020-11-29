<template>
    <div class="media">
        <!-- banner -->
        <ys-banner></ys-banner>
        <!-- tabs -->
        <ys-tabs :listArr="tabList"></ys-tabs>
        <router-view></router-view>
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
                        link: '/media/trans'
                    },
                    {
                        id: 6,
                        name: '远程互动',
                        link: '/media/remote'
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
                        link: '/media/weiyun'
                    }
                ]
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
        moutned() {

        },
    }
</script>

<style lang="less" scoped>

    @import './media.less';

</style>
