<template>
    <div class="time-axis">
        <div class="time-wrap">
            <div class="line"></div>
            <div class="list wrapper" ref="wrapper">
                <ul class="content" ref="slider"
                    @mousedown="down" @touchstart.stop="down"
                    @mousemove="move" @touchmove.stop="move"
                    @mouseup="end" @touchend.stop="end"
                    >
                    <li class="item" v-for="parent of timeList" :key="parent.id">
                        <div class="date">
                            <span>{{ parent.date.year }}年{{ parent.date.month }}月</span>
                        </div>
                        <div class="info">
                            <ul class="info-list">
                                <li class="info-item" v-for="children of parent.list" :key="children.id">
                                    <div class="info-item-date">
                                        <span>{{ children.date }}</span>
                                    </div>
                                    <div class="info-item-details">
                                        <div>
                                            <p v-for="(detail, index) of children.details" :key="index">
                                                {{ detail }}
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <slot name="button" />
    </div>
</template>

<script>

    import BScroll from 'better-scroll'

    export default {
        name: 'time-axis',
        props: {
            loop: {
                type: Boolean,
                default: true,
            },
            autoPlay: {
                type: Boolean,
                default: true,
            }
        },
        data() {

            window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame

            return {
                totalWidth: 0,
                timer: null,
                flags: false,
                position: {
                    x: 0,
                    y: 0,
                    translateX: 0
                },
                diff: 0,
                initLeft: 0,
                fps: 10,
                now: null,
                then: Date.now(),
                delta: null,
                timeList: [
                    {
                        id: 1,
                        date: {
                            year: 2020,
                            month: 12
                        },
                        list: [
                            {
                                id: '1_1',
                                date: '1/1/-1/10/',
                                details: [
                                    '自由滑水',
                                    '香蕉'
                                ]
                            },
                            {
                                id: '1_2',
                                date: '1/1/-1/10/',
                                details: [
                                    '自由滑水222',
                                    '香蕉3'
                                ]
                            },
                            {
                                id: '1_3',
                                date: '1/1/-1/10/',
                                details: [
                                    '自由滑水',
                                    '香蕉444'
                                ]
                            }
                        ]
                    },
                    {
                        id: 2,
                        date: {
                            year: 2020,
                            month: 12
                        },
                        list: [
                            {
                                id: '2_1',
                                date: '1/1/-1/10/',
                                details: [
                                    '自由滑水',
                                    '香蕉'
                                ]
                            },
                            {
                                id: '2_2',
                                date: '1/1/-1/10/',
                                details: [
                                    '自由滑水222',
                                    '香蕉3'
                                ]
                            },
                            {
                                id: '2_3',
                                date: '1/1/-1/10/',
                                details: [
                                    '自由滑水',
                                    '香蕉444'
                                ]
                            }
                        ]
                    },
                    {
                        id: 3,
                        date: {
                            year: 2020,
                            month: 12
                        },
                        list: [
                            {
                                id: '3_1',
                                date: '1/1/-1/10/',
                                details: [
                                    '自由滑水',
                                    '香蕉'
                                ]
                            },
                            {
                                id: '3_2',
                                date: '1/1/-1/10/',
                                details: [
                                    '自由滑水222',
                                    '香蕉3'
                                ]
                            },
                            {
                                id: '3_3',
                                date: '1/1/-1/10/',
                                details: [
                                    '自由滑水',
                                    '香蕉444'
                                ]
                            }
                        ]
                    },
                    {
                        id: 4,
                        date: {
                            year: 2020,
                            month: 12
                        },
                        list: [
                            {
                                id: '4_1',
                                date: '1/1/-1/10/',
                                details: [
                                    '自由滑水',
                                    '香蕉'
                                ]
                            },
                            {
                                id: '4_2',
                                date: '1/1/-1/10/',
                                details: [
                                    '自由滑水222',
                                    '香蕉3'
                                ]
                            },
                            {
                                id: '4_3',
                                date: '1/1/-1/10/',
                                details: [
                                    '自由滑水',
                                    '香蕉444'
                                ]
                            }
                        ]
                    },
                    {
                        id: 5,
                        date: {
                            year: 2020,
                            month: 12
                        },
                        list: [
                            {
                                id: '5_1',
                                date: '1/1/-1/10/',
                                details: [
                                    '自由滑水',
                                    '香蕉'
                                ]
                            },
                            {
                                id: '5_2',
                                date: '1/1/-1/10/',
                                details: [
                                    '自由滑水222',
                                    '香蕉3'
                                ]
                            },
                            {
                                id: '5_3',
                                date: '1/1/-1/10/',
                                details: [
                                    '自由滑水',
                                    '香蕉444'
                                ]
                            }
                        ]
                    },
                    {
                        id: 6,
                        date: {
                            year: 2020,
                            month: 12
                        },
                        list: [
                            {
                                id: '6_1',
                                date: '1/1/-1/10/',
                                details: [
                                    '自由滑水',
                                    '香蕉'
                                ]
                            },
                            {
                                id: '6_2',
                                date: '1/1/-1/10/',
                                details: [
                                    '自由滑水222',
                                    '香蕉3'
                                ]
                            },
                            {
                                id: '6_3',
                                date: '1/1/-1/10/',
                                details: [
                                    '自由滑水',
                                    '香蕉444'
                                ]
                            }
                        ]
                    },
                ],
                // swiperOptions: {
                //     direction: 'horizontal',
                //     freeMode: false,
                //     grabCursor: true,
                //     autoplay: {
                //         delay: 1500,
                //         disableOnInteraction: false
                //     },
                // },
            }
        },
        computed: {
            interval() {
                return 1000 / this.fps
            }
            // swiper() {
            //     return this.$refs.mySwiper.$swiper
            // }
        },
        methods: {
            tick() {
                if (window.requestAnimationFrame) {
                    this.timer = requestAnimationFrame(this.tick)
                    this.now = Date.now()
                    this.delta = this.now - this.then
                    if (this.delta > this.interval) {
                        this.then = this.now - (this.delta % this.interval)
                        this.draw()
                    }
                }
                else  {
                    setTimeout(this.tick, this.interval)
                    this.draw()
                }
            },
            draw() {
                this.initLeft ++
                if (this.initLeft >= this.totalWidth) {
                    this.initLeft = 0
                }
                this.animateTarget.style = 'transform: translateX(-' + this.initLeft + 'px)'
            },
            // 实现移动端拖拽
            down(event) {
                this.flags = true
                let touch
                if(event.touches) {
                    touch = event.touches[0]
                } else {
                    touch = event
                }
                this.position.x = touch.clientX
                this.position.y = touch.clientY
                this.position.translateX = Math.abs(this.getTranslateX(this.animateTarget))
                cancelAnimationFrame(this.timer)
                event.stopPropagation()
            },
            getTranslateX(elem) {
                let style = window.getComputedStyle(elem);
                let matrix = new WebKitCSSMatrix(style.webkitTransform);
                return matrix.m41;
            },
            move(event) {
                if (this.flags) {
                    let touch;
                    if (event.touches) {
                        touch = event.touches[0]
                    }
                    else {
                        touch = event
                    }
                    let endX = touch.clientX
                    let endY = touch.clientY
                    let distanceX = endX - this.position.x
                    let distanceY = endY - this.position.y
                    if (
                        Math.abs(distanceX) < Math.abs(distanceY) && distanceY < 0 ||
                        Math.abs(distanceX) < Math.abs(distanceY) && distanceY > 0) {
                            return;
                    }
                    this.diff = this.position.x - endX
                    let t = this.position.translateX + this.diff
                    if (this.diff > 0) {
                        if (t >= this.totalWidth) t = this.totalWidth
                    } else {
                        if (t <= 0) t = 0
                    }
                    this.animateTarget.style = 'transform: translateX(-' + t + 'px)'
                    this.initLeft = t
                    //阻止页面的滑动默认事件；如果碰到滑动问题，1.2 请注意是否获取到 touchmove
                    document.addEventListener('touchmove', function() {
                        event.preventDefault()
                    }, false)
                }
            },
            end(event) {
                this.flags = false
                this.tick();
            }
        },
        beforeCreate() {
            // console.group('beforeCreate 创建前状态===============》')
            // console.log('%c%s', 'color:red' , 'el      : ' + this.$el) //undefined
            // console.log('%c%s', 'color:red', 'data    : ' + this.$data) //undefined
            // console.log('%c%s', 'color:red', 'message: ' + this.message)
        },
        created() {
            // console.group('created 创建完毕状态===============》')
            // console.log('%c%s', 'color:red', 'el      : ' + this.$el) //undefined
            // console.log('%c%s', 'color:red', 'data    : ' + this.$data) //已被初始化
            // console.log('%c%s', 'color:red', 'message: ' + this.message) //已被初始化
        },
        beforeMount() {
            // console.group('beforeMount 挂载前状态===============》')
            // console.log('%c%s', 'color:red', 'el      : ' + (this.$el)) //已被初始化
            // console.log(this.$el)
            // console.log('%c%s', 'color:red', 'data    : ' + this.$data) //已被初始化
            // console.log('%c%s', 'color:red', 'message: ' + this.message) //已被初始化
        },
        mounted() {
            this.$nextTick(() => {
                this.animateTarget = this.$refs.slider
                this.tick()
                this.totalWidth = this.animateTarget.offsetWidth - window.screen.width
            })
            // console.group('mounted 挂载结束状态===============》')
            // console.log('%c%s', 'color:red', 'el      : ' + this.$el) //已被初始化
            // console.log(this.$el)
            // console.log('====================================')
            // console.log(44444444, BetterScroll)
            // console.log('====================================')
            // console.log('%c%s', 'color:red', 'data    : ' + this.$data) //已被初始化
            // console.log('%c%s', 'color:red', 'message: ' + this.message) //已被初始化
        },
        beforeUpdate() {
            // console.group('beforeUpdate 更新前状态===============》')
            // console.log('%c%s', 'color:red', 'el      : ' + this.$el)
            // console.log(this.$el)
            // console.log('%c%s', 'color:red', 'data    : ' + this.$data)
            // console.log('%c%s', 'color:red', 'message: ' + this.message)
        },
        updated() {
            // console.group('updated 更新完成状态===============》')
            // console.log('%c%s', 'color:red', 'el      : ' + this.$el)
            // console.log(this.$el)
            // console.log('%c%s', 'color:red', 'data    : ' + this.$data)
            // console.log('%c%s', 'color:red', 'message: ' + this.message)
        },
        beforeDestroy() {
            // console.group('beforeDestroy 销毁前状态===============》')
            // console.log('%c%s', 'color:red', 'el      : ' + this.$el)
            // console.log(this.$el)
            // console.log('%c%s', 'color:red', 'data    : ' + this.$data)
            // console.log('%c%s', 'color:red', 'message: ' + this.message)
        },
        destroyed() {
            // console.group('destroyed 销毁完成状态===============》')
            // console.log('%c%s', 'color:red', 'el      : ' + this.$el)
            // console.log(this.$el)
            // console.log('%c%s', 'color:red', 'data    : ' + this.$data)
            // console.log('%c%s', 'color:red', 'message: ' + this.message)
        }
    }
</script>

<style lang="less" scoped>

    @import './time-axis.less';

</style>
