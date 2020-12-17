<template>
    <div class="icesnow">
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
        name: 'icesnow',
        data() {
            return {
                tabList: [
                    {
                        id: 1,
                        name: '云游内蒙古',
                        link: '/icesnow'
                    },
                    {
                        id: 2,
                        name: '全景内蒙古',
                        link: '/icesnow/vr'
                    },
                    {
                        id: 3,
                        name: '观赛旅游',
                        link: '/icesnow/travel'
                    },
                    {
                        id: 4,
                        name: '冰雪路线',
                        link: '/icesnow/route'
                    },
                    {
                        id: 5,
                        name: '草原文化',
                        link: '/icesnow/culture'
                    },
                    {
                        id: 6,
                        name: '游玩攻略',
                        link: '/icesnow/strategy'
                    },
                    {
                        id: 7,
                        name: '内蒙古味道',
                        link: '/icesnow/taste'
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
        mounted() {

        },
    }
</script>

<style lang="less">

    @import './icesnow.less';

</style>
