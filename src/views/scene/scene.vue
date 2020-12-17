<template>
    <div class="scene">
        <!-- banner -->
        <ys-banner></ys-banner>
        <!-- tabs -->
        <ys-tabs :listArr="tabList" :offsetPx="-100"></ys-tabs>
        <keep-alive v-if="!$route.meta.noKeepAlive">
            <router-view :key="key"></router-view>
        </keep-alive>
        <router-view v-if="$route.meta.noKeepAlive" :key="key"></router-view>
        <!-- <router-view :key="$route.fullPath"></router-view> -->
    </div>
</template>

<script>
    export default {
        name: 'scene',
        data() {
            return {
                tabList: [
                    {
                        id: 1,
                        name: '赛事赛程',
                        link: '/scene'
                    },
                    {
                        id: 2,
                        name: '赛事直播',
                        link: '/scene/live'
                    },
                    {
                        id: 3,
                        name: '5G连线',
                        link: '/scene/5g'
                    },
                    {
                        id: 4,
                        name: '虚拟赛场',
                        link: 'https://www.baidu.com',
                        ischain: true
                    },
                    {
                        id: 5,
                        name: '省队资料',
                        link: '/scene/team'
                    },
                    {
                        id: 6,
                        name: '云点播',
                        link: '/scene/demand'
                    },
                    {
                        id: 7,
                        name: '赛事回看',
                        link: '/scene/back'
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

        },
        mounted() {

        },
    }
</script>

<style lang="less">

    @import './scene.less';

</style>
