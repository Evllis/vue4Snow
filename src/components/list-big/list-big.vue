<template>
    <div class="list-big">
        <h2 class="preview-title" v-if="controlButtonStatus"
            :class="{ 'in': inActiveClass }">图片库</h2>
        <ul class="big-wrap">
            <li class="big-item"
                v-for="(item, index) of list"
                :key="index"
                @click="clickItem(item)">
                <div class="big-children">
                    <span class="cover">
                        <img v-for="(pic, pic_index) of item.imgs" :src="pic.src" :key="pic_index"
                            :preview="pic.preview" :preview-text="item.title" />
                    </span>
                    <span class="info">
                        <span class="title">{{ item.title }}</span>
                        <span class="time">{{ item.time }}</span>
                    </span>
                </div>
            </li>
        </ul>
        <div class="preview-toolbar" v-if="controlButtonStatus"
            :class="{ 'in': inActiveClass }">
            <ys-toolbar :pageId="currentId"></ys-toolbar>
        </div>
        <div class="more-btn" v-if="isHideMore">
            <button @click="loadMore" :disabled="btnDisabled">
                <i class="icon" v-if="isLoading"></i>
                查看更多
            </button>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'list-big',
        props: {
            list: {
                type: Array,
                default: () => [],
                required: true
            },
            isHideMore: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                isLoading: false,
                btnDisabled: false,
                controlButtonStatus: false,
                inActiveClass: false,
                timer: null,
                currentId: '1'
            }
        },
        methods: {
            loadMore() {
                this.isLoading = true
                this.btnDisabled = true
                this.$emit('loadMore')
            },
            clickItem(item) {
                this.currentId = item.id
                clearInterval(this.timer)
                this.$loading.show()
                this.timer = setInterval(() => {
                    if (document.querySelector('.pswp--open')) {
                        clearInterval(this.timer)
                        this.$loading.hide()
                        this.controlButtonStatus = true
                        setTimeout(() => {
                            this.inActiveClass = true
                        }, 200)
                    }
                }, 500)
            }
        },
        created() {
            this.$preview.on('close', () => {
                this.inActiveClass = false
                setTimeout(() => {
                    this.controlButtonStatus = false
                }, 200)
            })
        },
        mounted() {

        },
    }
</script>

<style lang="less">

    @import './list-big.less';

</style>
