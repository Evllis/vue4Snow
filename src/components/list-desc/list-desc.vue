<template>
    <div class="list-desc">
        <div class="preview">
            <figure>
                <figcaption>{{ list[0].title }}</figcaption>
                <img :src="list[0].img"
                    :title="list[0].title" :alt="list[0].title" />
                <a
                    :href="list[0].link"
                    v-if="list[0].ischain"
                    class="link"></a>
                <router-link
                    class="link"
                    v-if="!list[0].ischain"
                    :to="`${ toPath + list[0].id }`">
                </router-link>
            </figure>
            <p>{{ list[0].desc }}</p>
        </div>
        <ul class="list-wrap">
            <template v-for="(item, index) of list">
                <li
                    class="items" :key="item.id"
                    v-if="index > 0"
                    :style="{ 'background-image': `url(${ item.img })` }"
                    @click="toggleItem(index)">
                    <span class="text">{{ item.title }}</span>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'list-desc',
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
            toggleItem(index) {
                this.list = this.swapArr(this.list, 0, index)
            },
            swapArr(arr, index1, index2) {
                arr[index1] = arr.splice(index2, 1, arr[index1])[0];
                return arr
            }
        },
        created() {

        },
        mounted() {

        },
    }
</script>

<style lang="less" scoped>

    @import './list-desc.less';

</style>
