<template>
    <div class="scene-team">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" :key="key"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" :key="key"></router-view>
    </div>
</template>

<script>
    export default {
        name: 'scene-team',
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
