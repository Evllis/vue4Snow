<template>
    <div class="list-pic">
        <ul class="pic-wrap">
            <li class="pic-item" v-for="item of list" :key="item.id">
                <a :href="item.link" target="_black">
                    <img :src="item.img" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'list-pic',
        props: {
            list: {
                type: Array,
                default: () => [],
                required: true
            }
        },
        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {

        },
    }
</script>

<style lang="less" scoped>

    @import './list-pic.less';

</style>
