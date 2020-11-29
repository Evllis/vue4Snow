<template>
    <div class="tabs">
        <swiper :options="swiperOption" ref="tabSwiper">
            <swiper-slide v-for="item of listArr" :key="item.id">
                <router-link
                    :to="item.link">
                {{ item.name }}
                </router-link>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'tabs',
        props: {
            listArr: {
                type: Array,
                default: function() {
                    return []
                },
                required: true,
            }
        },
        data() {
            return {
                swiperOption: {
                    slidesOffsetAfter: -140,
                    direction: 'horizontal',
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    loop: false,
                }
            }
        },
        computed: {
            swiper() {
                return this.$nextTick(() => this.$refs.tabSwiper.swiper)
            }
        },
        methods: {

        },
        moutned() {

        },
    }
</script>

<style lang="less" scoped>

    @import './tabs.less';

</style>
