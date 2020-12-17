<template>
    <div class="icesnow-home">
        <!-- index pic -->
        <div class="index-pic">
            <ys-index-pic
                :list="indexList"
                :toPath="'/icesnow/culture/details/'"></ys-index-pic>
        </div>
        <!-- picture -->
        <div class="picture-library">
            <div class="title-icon"></div>
            <ys-list-big :list="listBig"></ys-list-big>
        </div>
        <!-- route -->
        <div class="route">
            <div class="title-icon"></div>
        </div>
        <!-- culture -->
        <div class="culture">
            <div class="title-icon"></div>
            <ys-list-small
            :isLoadMore="listSmaill.isLoadMore"
            :list="listSmaill.data"
            :toPath="'/icesnow/culture/details/'"></ys-list-small>
        </div>
        <!-- strategy -->
        <div class="strategy">
            <div class="title-icon"></div>
            <ys-list-desc
            :list="descList"
            :toPath="'/icesnow/culture/details/'"></ys-list-desc>
        </div>
        <!-- three-pic -->
        <div class="taste">
            <div class="title-icon"></div>
            <ys-list-three-pic
            :list="threePicList"
            :toPath="'/icesnow/culture/details/'"></ys-list-three-pic>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'icesnow-home',
        data() {
            return {
                indexList: [
                    {
                        id: 1,
                        title: '鸟瞰“十四冬”三大赛场',
                        link: 'http://www.baidu.com',
                        img: 'https://www.ghostoact.com/static/arts/img/splash/a4nernr4t51voow9ye8z05jjc6ijinij.jpg',
                        ischain: true
                    },
                    {
                        id: 2,
                        title: '只要有冰凉的饮料和温暖舒适的椅子',
                        link: 'http://www.qq.com',
                        img: 'https://www.ghostoact.com/static/arts/img/splash/au0xf6ebqwlen3ys3hzqt6oc46pk0nqv.jpg'
                    },
                    {
                        id: 3,
                        title: '他们就会把各式各样的秘密',
                        link: 'http://www.163.com',
                        img: 'https://www.ghostoact.com/static/arts/img/splash/a8u4qmn0zb41a59fh2mk5x16ghu1waau.jpg'
                    },
                    {
                        id: 4,
                        title: '告诉貌似善良的人',
                        link: 'http://www.enkj.com',
                        img: 'https://www.ghostoact.com/static/arts/img/splash/a0dfv3hwpnz6n0sqepy7pi354muzfp6w.jpg'
                    },
                    {
                        id: 5,
                        title: '还有谁比年轻的雷纳德看起来更友善呢？',
                        link: 'http://www.pconline.com.cn',
                        img: 'https://www.ghostoact.com/static/arts/img/splash/aka3vmnjzcy051ek2hpa5l9of8fmtr3c.jpg'
                    },
                ],
                listBig: [
                    {
                        id: 1,
                        title: '全景内蒙古',
                        time: '2020-12-5',
                        imgs: [
                            {
                                src: 'http://img.daimg.com/uploads/allimg/201205/1-201205001312.jpg',
                                preview: 1
                            },
                            {
                                src: 'http://img.daimg.com/uploads/allimg/201204/1-201204001449.jpg',
                                preview: 1
                            },
                            {
                                src: 'http://img.daimg.com/uploads/allimg/201203/1-2012031K916.jpg',
                                preview: 1
                            },
                            {
                                src: 'http://img.daimg.com/uploads/allimg/201203/1-2012031K222.jpg',
                                preview: 1
                            },
                            {
                                src: 'https://images.alphacoders.com/111/thumb-350-1119569.jpg',
                                preview: 1
                            },
                            {
                                src: 'https://images8.alphacoders.com/111/thumb-350-1119568.jpg',
                                preview: 1
                            },
                        ]
                    },
                    {
                        id: 2,
                        title: '内蒙古真好玩啊',
                        time: '2020-12-16',
                        imgs: [
                            {
                                src: 'https://images6.alphacoders.com/112/thumb-1920-1120523.jpg',
                                preview: 2
                            },
                            {
                                src: 'https://images.alphacoders.com/112/thumb-1920-1120522.jpg',
                                preview: 2
                            },
                            {
                                src: 'https://images2.alphacoders.com/112/thumb-1920-1120521.jpg',
                                preview: 2
                            },
                            {
                                src: 'https://images.alphacoders.com/112/thumb-1920-1120520.jpg',
                                preview: 2
                            },
                            {
                                src: 'https://images2.alphacoders.com/112/thumb-1920-1120519.jpg',
                                preview: 2
                            },
                            {
                                src: 'https://images8.alphacoders.com/112/thumb-1920-1120518.jpg',
                                preview: 2
                            },
                        ]
                    },
                    {
                        id: 3,
                        title: '可惜今天天气太冷了',
                        time: '2020-12-22',
                        imgs: [
                            {
                                src: 'https://images5.alphacoders.com/112/thumb-1920-1120517.jpg',
                                preview: 3
                            },
                            {
                                src: 'https://images3.alphacoders.com/112/thumb-1920-1120516.jpg',
                                preview: 3
                            }
                        ]
                    },
                    {
                        id: 4,
                        title: '转眼又快过元旦了...',
                        time: '2020-12-22',
                        imgs: [
                            {
                                src: 'https://images5.alphacoders.com/112/thumb-1920-1120515.jpg',
                                preview: 4
                            },
                            {
                                src: 'https://images.alphacoders.com/112/thumb-1920-1120514.jpg',
                                preview: 4
                            },
                            {
                                src: 'https://images4.alphacoders.com/112/thumb-1920-1120513.jpg',
                                preview: 4
                            }
                        ]
                    }
                ],
                listSmaill: {
                    isLoadMore: false,
                    data: [
                        {
                            id: 1,
                            img: 'http://img.daimg.com/uploads/allimg/201205/1-201205001312.jpg',
                            link: 'https://www.baidu.com',
                            title: '观赛“十四冬”、冬游内蒙古，你有这6种选择！',
                            author: '腾格里新闻',
                            ischain: true
                        },
                        {
                            id: 2,
                            img: 'http://img.daimg.com/uploads/allimg/201204/1-201204001449.jpg',
                            link: 'https://www.baidu.com',
                            title: '冬泳挑战冷极限 再掀冬季英雄 会新高潮',
                            author: '海拉尔文旅体育微频'
                        },
                        {
                            id: 3,
                            img: 'http://img.daimg.com/uploads/allimg/201203/1-2012031K916.jpg',
                            link: 'https://www.baidu.com',
                            title: '观赛“十四冬”、冬游内蒙古，你有这6种选择！',
                            author: '腾格里新闻'
                        }
                    ]
                },
                descList: [
                    {
                        id: 1,
                        title: '呼和浩特',
                        link: 'https://www.baidu.com',
                        img: 'https://cdn.pixabay.com/photo/2020/10/27/21/24/lake-5691976_960_720.jpg',
                        desc: '最佳的显示方式是：如果在720P的屏幕下显示你720P分辨率的原图，那像素比就是1比1。',
                        ischain: true
                    },
                    {
                        id: 2,
                        title: '女孩',
                        link: 'https://www.baidu.com',
                        img: 'https://cdn.pixabay.com/photo/2020/12/10/09/21/girl-5819711_960_720.jpg',
                        desc: '但是如果你换了一个1080P的分辨率显示器，去显示一张720P分辨率的原图，那图片的1个像素点',
                    },
                    {
                        id: 3,
                        title: '飞鸟',
                        link: 'https://www.baidu.com',
                        img: 'https://cdn.pixabay.com/photo/2020/12/06/21/15/blackbird-5810073_960_720.jpg',
                        desc: '关于英语二至少n个版本，但是由于有一个版本质量过高淘汰了其他版本，所以里面的视频教程只保留一个版本即可。',
                    },
                    {
                        id: 4,
                        title: '羊群',
                        link: 'https://www.baidu.com',
                        img: 'https://cdn.pixabay.com/photo/2020/02/01/14/48/sheep-4810513_960_720.jpg',
                        desc: '关于高等数学学习，考虑到有些同学基础问题，学习顺序为下面课程的高等数学一第一章内容',
                    },
                ],
                threePicList: [
                    {
                        id: 1,
                        title: '烤全羊',
                        link: 'https://www.baidu.com',
                        img: 'https://cdn.pixabay.com/photo/2019/12/30/20/34/snow-4730553_960_720.jpg',
                        ischain: true
                    },
                    {
                        id: 2,
                        title: '女孩',
                        link: 'https://www.baidu.com',
                        img: 'https://cdn.pixabay.com/photo/2020/10/27/21/24/lake-5691976_960_720.jpg',
                    },
                    {
                        id: 3,
                        title: '飞鸟',
                        link: 'https://www.baidu.com',
                        img: 'https://cdn.pixabay.com/photo/2020/12/10/16/19/waterfall-5820721_960_720.jpg',
                    },
                ]
            }
        },
        computed: {

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

    @import './home.less';

</style>
