<template>
    <div class="icesnow-culture">
        <keep-alive v-if="!$route.meta.noKeepAlive">
            <router-view :key="key"></router-view>
        </keep-alive>
        <router-view v-if="$route.meta.noKeepAlive" :key="key"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'icesnow-culture',
        data() {
            return {

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

<style lang="less" scoped>


</style>
