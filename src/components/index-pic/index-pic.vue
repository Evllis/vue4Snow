<template>
    <div class="index-pic">
        <div class="index-banner" :style="{ backgroundImage: `url(${ indexTop.bg })` }">
            <h4>{{ indexTop.title }}</h4>
            <a
                :href="indexTop.link"
                v-if="indexTop.ischain"
                class="link"></a>
            <router-link
                class="link"
                v-if="!indexTop.ischain"
                :to="`${ toPath + indexTop.id }`">
            </router-link>
        </div>
        <div class="index-list">
            <ul>
                <li
                    class="index-item"
                    v-for="item of list"
                    :style="{ backgroundImage: `url(${ item.img })` }"
                    :key="item.id"
                    @click="toggleIndexPic(item)">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'index-pic',
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
                indexTop: {}
            }
        },
        computed: {

        },
        methods: {
            toggleIndexPic(item) {
                this.indexTop = item
            }
        },
        created() {
            this.indexTop = this.list[0]
        },
        mounted() {

        },
    }
</script>

<style lang="less" scoped>

    @import './index-pic.less';

</style>
