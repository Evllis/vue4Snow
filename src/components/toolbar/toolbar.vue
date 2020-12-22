<template>
    <div class="toolbar">
        <div class="like">
            <i class="icon" :class="{ 'active': isClick }" @click="like"></i>
            <span class="num">{{ num }}</span>
        </div>
        <div class="share">
            <i class="icon" @click="share"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'toolbar',
        props: {
            pageId: {
                type: String,
                default: '1',
                required: true
            }
        },
        data() {
            return {
                isClick: false,
                num: 0
            }
        },
        computed: {

        },
        methods: {
            like() {
                if (this.isClick) {
                    this.isClick = false
                    this.num--
                }
                else {
                    this.isClick = true
                    this.num++
                }
            },
            share() {
                this.$toast({
                    showLittleTip: true,
                    msg: '分享成功',
                    type: 'warning',
                })
            }
        },
        created() {

        },
        mounted() {

        },
    }
</script>

<style lang="less" scoped>

    @import './toolbar.less';

</style>
