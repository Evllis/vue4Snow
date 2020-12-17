<template>
    <div class="list-small">
        <ul class="list-container">
            <li class="list-item"
                v-for="item of list"
                :key="item.id">
                <div class="info">
                    <h4 class="title">{{ item.title }}</h4>
                    <div class="details">
                        <em>{{ item.author }}</em>
                    </div>
                </div>
                <div class="cover">
                    <img :src="item.img" class="pic" />
                </div>
                <a
                    :href="item.link"
                    v-if="item.ischain"
                    class="link"></a>
                <router-link
                    class="link"
                    v-if="!item.ischain"
                    :to="`${ toPath + item.id }`">
                </router-link>
            </li>
        </ul>
        <div class="load-more" v-if="isLoadMore">
            <button @click="loadMore">加载更多</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'list-small',
        props: {
            isLoadMore: {
                type: Boolean,
                default: false
            },
            list: {
                type: Array,
                default: () => [],
                required: true
            },
            toPath: {
                type: String,
                default: '/home',
                required: true
            }
        },
        data() {
            return {

            }
        },
        methods: {
            loadMore() {
                this.$emit('loadMore')
            }
        },
        mounted() {

        },
    }
</script>

<style lang="less" scoped>

    @import './list-small.less';

</style>
