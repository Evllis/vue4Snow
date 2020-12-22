<template>
    <div class="list-pic">
        <ul class="pic-wrap">
            <li class="pic-item" v-for="item of list" :key="item.id">
                <a
                    :href="item.link"
                    v-if="item.ischain"
                    class="link">
                    <img :src="item.img" :alt="item.title" :title="item.title" />
                </a>
                <router-link
                    class="link"
                    v-if="!item.ischain"
                    :to="`${ toPath + item.id }`">
                    <img :src="item.img" :alt="item.title" :title="item.title" />
                </router-link>
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
            },
            toPath: {
                type: String,
                default: '/home/'
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
