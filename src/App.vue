<template>
    <div id="app" class="app">
        <ys-header></ys-header>
        <div class="page-content">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </div>
        <ys-footer></ys-footer>
    </div>
</template>

<script>

    export default {
        name: 'App',
    }
</script>

<style lang="less">
    @import './assets/css/reset.css';
    @import './assets/css/common.less';
</style>
