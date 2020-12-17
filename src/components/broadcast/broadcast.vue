<template>
    <div class="broadcast">
        <swiper :options="broadcastSwiperOptions" ref="broadcastSwiper">
            <swiper-slide
                v-for="item of swiperList"
                :key="item.id"
                :style="{ backgroundImage: `url(${ item.img })` }">
                <a :href="item.link" target="_blank">
                    <span class="title">{{ item.title }}</span>
                </a>
            </swiper-slide>
            <div class="broadcastSwiper-pagination swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'broadcast',
        props: {
            isAutoPlay: {
                type: Boolean,
                default: false
            },
            swiperList: {
                type: Array,
                default: () => [],
                required: true
            }
        },
        data() {
            return {
                broadcastSwiperOptions: {
                    // spaceBetween: 30,
                    loop: true,
                    autoplay: this.isAutoPlay ? {
                        delay: 3000,
                        disableOnInteraction: false
                    } : false,
                    pagination: {
                        el: '.broadcastSwiper-pagination',
                        clickable: true
                    },
                }
            }
        },
        computed: {
            broadcastSwiper() {
                return this.$refs.broadcastSwiper.$swiper
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

<style lang="less">

    @import './broadcast.less';

</style>
