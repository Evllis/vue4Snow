<template>
    <div class="scene-details">
        <div class="details-wrap">
            <div class="header">
                <div class="info">
                    <span class="source">来源：人民日报</span>
                    <span class="date">2020年12月3日</span>
                </div>
                <h2 class="title">“十四冬”火炬传递新年第一棒 传递的</h2>
            </div>
            <div class="img-wrap">
                <img src="https://images6.alphacoders.com/112/thumb-1920-1120170.jpg" alt="" title="" />
            </div>
            <div class="details">
                <p>国家体育总局冬季运动管理中心综合训练馆项目“冰坛”于5月27日竣工，这是今年第一个竣工的北京冬奥会新建场馆。记者27日从北京市重大项目办获悉上述消息。</p>
                <p>据国家体育总局冬季运动管理中心相关负责人介绍，“冰坛”交付后将成为国家体育总局在北京唯一的冬季冰上训练比赛基地，承担国家短道速滑和花样滑冰训练、科研任务。</p>
                <p>冬运中心综合训练馆项目位于首都体育馆北侧，总建筑面积33220平方米。该场馆地上六层，地下一层，局部二层，主体建筑高度为30米，其中一层冰场是我国第一块标准冰壶训练场地，将供国家队训练使用。</p>
                <p>餐厅、运动员体能训练和医疗康复等设施，为运动员提供一个全方位的训练环境。</p>
            </div>
            <ys-toolbar :pageId="$route.params.id"></ys-toolbar>
        </div>
        <div class="recommend">
            <ys-list-small
            :isLoadMore="listSmaill.isLoadMore"
            :list="listSmaill.data"
            :toPath="'/scene/team/details/'"></ys-list-small>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'scene-details',
        data() {
            return {
                listSmaill: {
                    isLoadMore: false,
                    data: [
                        {
                            id: 1,
                            img: 'http://img.daimg.com/uploads/allimg/201205/1-201205001312.jpg',
                            title: '观赛“十四冬”、冬游内蒙古，你有这6种选择！',
                            author: '腾格里新闻'
                        },
                        {
                            id: 2,
                            img: 'http://img.daimg.com/uploads/allimg/201204/1-201204001449.jpg',
                            title: '冬泳挑战冷极限 再掀冬季英雄 会新高潮',
                            author: '海拉尔文旅体育微频'
                        },
                        {
                            id: 3,
                            img: 'http://img.daimg.com/uploads/allimg/201203/1-2012031K916.jpg',
                            title: '观赛“十四冬”、冬游内蒙古，你有这6种选择！',
                            author: '腾格里新闻',
                            link: 'https://www.qq.com',
                            ischain: true
                        },
                        {
                            id: 4,
                            img: 'https://images.alphacoders.com/112/thumb-350-1120186.jpg',
                            title: 'sdfsdfsdfsdfsdf',
                            author: '腾格里新闻'
                        },
                        {
                            id: 5,
                            img: 'https://images6.alphacoders.com/112/thumb-350-1120185.jpg',
                            title: 'ffffffffffffffff',
                            author: '腾格里新闻'
                        },
                        {
                            id: 6,
                            img: 'https://images2.alphacoders.com/112/thumb-350-1120184.jpg',
                            title: 'ytytryrtb333333333333',
                            author: '腾格里新闻'
                        },
                    ]
                },
            }
        },
        computed: {
            element() {
                return document.getElementsByClassName('page-content')[0]
            }
        },
        methods: {

        },
        created() {

        },
        mounted() {
            this.element.scrollTop = 0
        },
    }
</script>

<style lang="less" scoped>

    @import './details.less';

</style>
