<template>
    <div class="footer-wrap">
        <div class="footer">
            <div class="footer-item home" :class="{active:'/home' === $route.path}">
                <router-link to="/">
                    <span class="icon"></span>
                    首页
                </router-link>
            </div>
            <div class="footer-item media" :class="{active: $route.path.indexOf('/media') !== -1}">
                <router-link to="/media">
                    <span class="icon"></span>
                    媒体云
                </router-link>
            </div>
            <div class="footer-item scene" :class="{active: $route.path.indexOf('/scene') !== -1}">
                <router-link to="/scene">
                    <span class="icon"></span>
                    现场云
                </router-link>
            </div>
            <div class="footer-item icesnow" :class="{active: $route.path.indexOf('/icesnow') !== -1}">
                <router-link to="/icesnow">
                    <span class="icon"></span>
                    冰雪云
                </router-link>
            </div>
            <div class="footer-item live" :class="{active: $route.path.indexOf('/live') !== -1}">
                <router-link to="/live">
                    <span class="icon"></span>
                    直播
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ys-footer',
        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {

        },
        destroyed() {

        }
    }
</script>

<style lang="less" scoped>

    @import './footer.less';

</style>
