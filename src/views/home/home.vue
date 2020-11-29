<template>
    <div class="home">
        <div class="home-header">
            <div class="curtain"
                data-aos="fade-down"
                data-aos-easing="ease-out-sine"
                data-aos-duration="1200"
                data-aos-once="true"
                data-aos-delay="400">
            </div>
            <div class="logo"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-duration="800"
                data-aos-once="true"
                data-aos-delay="2400">
            </div>
            <div class="character">
                <div class="boy"
                    data-aos="fade-right"
                    data-aos-duration="400"
                    data-aos-once="true"
                    data-aos-delay="2000">
                </div>
                <div class="girl"
                    data-aos="fade-left"
                    data-aos-duration="400"
                    data-aos-once="true"
                    data-aos-delay="2000">
                </div>
            </div>
            <div class="tabs">
                <div class="items"
                    v-for="item of homeHeader.tabs" :key="item.id"
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-once="true"
                    data-aos-delay="3700">
                    <a :href="item.href" class="link"></a>
                </div>
            </div>
        </div>
        <time-axis>
            <template v-slot:button>
                <div class="time-btn">
                    <a href="#" alt="观看赛事直播" title="观看赛事直播"></a>
                </div>
            </template>
        </time-axis>
    </div>
</template>

<script>

    import AOS from 'aos'

    export default {

        inject: ['reload'],
        name: 'home',
        data() {
            return {
                homeHeader: {
                    tabs: [
                        {
                            id: 1,
                            href: '#',
                        },
                        {
                            id: 2,
                            href: '#',
                        },
                        {
                            id: 3,
                            href: '#',
                        }
                    ],
                },
            }
        },
        methods: {
            initHomeHeaderAnimate() {
                AOS.init()
                // AOS.refreshHard()
            },
        },
        // beforeCreate() {
        //     console.group('beforeCreate 创建前状态===============》')
        //     console.log('%c%s', 'color:red' , 'el      : ' + this.$el) //undefined
        //     console.log('%c%s', 'color:red', 'data    : ' + this.$data) //undefined
        //     console.log('%c%s', 'color:red', 'message: ' + this.message)
        // },
        // created() {
        //     console.group('created 创建完毕状态===============》')
        //     console.log('%c%s', 'color:red', 'el      : ' + this.$el) //undefined
        //     console.log('%c%s', 'color:red', 'data    : ' + this.$data) //已被初始化
        //     console.log('%c%s', 'color:red', 'message: ' + this.message) //已被初始化
        // },
        // beforeMount() {
        //     console.group('beforeMount 挂载前状态===============》')
        //     console.log('%c%s', 'color:red', 'el      : ' + (this.$el)) //已被初始化
        //     console.log(this.$el)
        //     console.log('%c%s', 'color:red', 'data    : ' + this.$data) //已被初始化
        //     console.log('%c%s', 'color:red', 'message: ' + this.message) //已被初始化
        // },
        mounted() {
            this.$store.commit('updataBannerStatus', false)
            this.initHomeHeaderAnimate()
            // console.group('mounted 挂载结束状态===============》')
            // console.log('%c%s', 'color:red', 'el      : ' + this.$el) //已被初始化
            // console.log(this.$el)
            // console.log('%c%s', 'color:red', 'data    : ' + this.$data) //已被初始化
            // console.log('%c%s', 'color:red', 'message: ' + this.message) //已被初始化
        },
        // beforeUpdate() {
        //     console.group('beforeUpdate 更新前状态===============》')
        //     console.log('%c%s', 'color:red', 'el      : ' + this.$el)
        //     console.log(this.$el)
        //     console.log('%c%s', 'color:red', 'data    : ' + this.$data)
        //     console.log('%c%s', 'color:red', 'message: ' + this.message)
        // },
        // updated() {
        //     console.group('updated 更新完成状态===============》')
        //     console.log('%c%s', 'color:red', 'el      : ' + this.$el)
        //     console.log(this.$el)
        //     console.log('%c%s', 'color:red', 'data    : ' + this.$data)
        //     console.log('%c%s', 'color:red', 'message: ' + this.message)
        // },
        // beforeDestroy() {
        //     console.group('beforeDestroy 销毁前状态===============》')
        //     console.log('%c%s', 'color:red', 'el      : ' + this.$el)
        //     console.log(this.$el)
        //     console.log('%c%s', 'color:red', 'data    : ' + this.$data)
        //     console.log('%c%s', 'color:red', 'message: ' + this.message)
        // },
        // destroyed() {
        //     console.group('destroyed 销毁完成状态===============》')
        //     console.log('%c%s', 'color:red', 'el      : ' + this.$el)
        //     console.log(this.$el)
        //     console.log('%c%s', 'color:red', 'data    : ' + this.$data)
        //     console.log('%c%s', 'color:red', 'message: ' + this.message)
        // }
    }

</script>

<style scoped lang="less">

    @import './home.less';

</style>
