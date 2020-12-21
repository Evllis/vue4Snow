<template>
    <div class="tabs">
        <swiper :options="tabSwiperOption" ref="tabSwiper">
            <swiper-slide v-for="item of listArr" :key="item.id">
                <a
                    v-if="item.ischain"
                    :href="item.link">
                    {{ item.name }}
                </a>
                <router-link
                    v-if="!item.ischain"
                    :to="item.link"
                    :class="{ 'tabs-active': $route.path.split('?')[0].indexOf(item.link) > -1 }">
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
            },
            offsetPx: {
                type: Number,
                default: -140
            }
        },
        data() {
            return {
                tabs: null,
                tabSwiperOption: {
                    slidesOffsetAfter: this.offsetPx,
                    direction: 'horizontal',
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    loop: false,
                }
            }
        },
        computed: {
            tabSwiper() {
                return this.$refs.tabSwiper.$swiper
            }
        },
        watch: {
            $route(to, form) {
                if (form.fullPath.includes('details')) {
                    this.getCurrentSlideIndex()
                }
            }
        },
        methods: {
            /**
             * 设置当前高亮tabs的索引位置
             */
            getCurrentSlideIndex() {
                let leftPos = 0
                let str = this.$route.path
                for (let [index, val] of this.listArr.entries()) {
                    leftPos += this.tabs[index].offsetWidth + 20
                    if (!val.ischain) {
                        if (str.includes('details')) str = str.split('/details')[0]
                        if (str === val.link) {
                            this.tabSwiper.slideTo(index, 0, false)
                            if (index > 0 && index < this.listArr.length - 2) this.tabSwiper.translateTo((-leftPos + 160), 0, true, false)
                            break;
                        }
                    }
                }
            }
        },
        mounted() {
            this.tabs = document.querySelectorAll('.tabs .swiper-slide')
            this.getCurrentSlideIndex()
        }
    }
</script>

<style lang="less" scoped>

    @import './tabs.less';

</style>
