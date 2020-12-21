<template>
    <div class="taste-home">
        <!-- list-smaill -->
        <h4 class="new-title">官方发布</h4>
        <ys-list-small
            :isLoadMore="listSmaill.isLoadMore"
            :list="listSmaill.data"
            :toPath="`${ $route.path }/details/`"
            @loadMore="loadData"></ys-list-small>
    </div>
</template>

<script>
    export default {
        name: 'taste-home',
        data() {
            return {
                listSmaill: {
                    isLoadMore: true,
                    data: [
                        {
                            id: 1,
                            img: 'https://cdn.pixabay.com/photo/2017/06/19/21/12/concrete-2420845_960_720.jpg',
                            title: '观赛“十四冬”、冬游内蒙古，你有这6种选择！',
                            author: '腾格里新闻'
                        },
                        {
                            id: 2,
                            img: 'https://cdn.pixabay.com/photo/2020/09/10/04/43/expedition-5559244_960_720.jpg',
                            title: '冬泳挑战冷极限 再掀冬季英雄 会新高潮',
                            author: '海拉尔文旅体育微频'
                        },
                        {
                            id: 3,
                            img: 'https://cdn.pixabay.com/photo/2020/11/12/23/18/sunset-5737120_960_720.jpg',
                            title: '观赛“十四冬”、冬游内蒙古，你有这6种选择！',
                            author: '腾格里新闻'
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

        },
        methods: {
            loadData() {
                console.log('====================================')
                console.log(444444)
                console.log('====================================')
            }
        },
        created() {

        },
        mounted() {

        },
    }
</script>

<style lang="less" scoped>

    @import './home.less';

</style>
