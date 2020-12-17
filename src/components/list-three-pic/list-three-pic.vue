<template>
    <div class="list-three-pic">
        <div class="left">
            <a
                :href="list[0].link"
                v-if="list[0].ischain"
                class="link">
                <img :src="list[0].img" :alt="list[0].title" :title="list[0].title" />
                <span class="text">{{ list[0].title }}</span>
            </a>
            <router-link
                class="link"
                v-if="!list[0].ischain"
                :to="`${ toPath + list[0].id }`">
                <img :src="list[0].img" :alt="list[0].title" :title="list[0].title" />
                <span class="text">{{ list[0].title }}</span>
            </router-link>
        </div>
        <div class="right">
            <ul class="list">
                <template v-for="(item, index) of list">
                    <li class="item" v-if="index > 0" :key="item.id">
                        <a
                            :href="item.link"
                            v-if="item.ischain"
                            class="link">
                            <img :src="item.img" :alt="item.title" :title="item.title" />
                            <span class="text">{{ item.title }}</span>
                        </a>
                        <router-link
                            class="link"
                            v-if="!item.ischain"
                            :to="`${ toPath + item.id }`">
                            <img :src="item.img" :alt="item.title" :title="item.title" />
                            <span class="text">{{ item.title }}</span>
                        </router-link>
                    </li>
                </template>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'list-three-pic',
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
        computed: {

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

    @import './list-three-pic.less';

</style>
