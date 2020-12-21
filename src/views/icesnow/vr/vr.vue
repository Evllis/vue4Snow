<template>
    <div class="icesnow-vr">
        <ys-list-big
            ref="listBig"
            :list="listBig"
            :isHideMore="true"
            @loadMore="loadData">
        </ys-list-big>
    </div>
</template>

<script>
    export default {
        name: 'icesnow-vr',
        data() {
            return {
                loadStatus: false,
                listBig: [
                    {
                        id: 1,
                        title: '观赛“十四冬”、冬游内蒙古，你有这6种选择！',
                        time: '2020-12-5',
                        imgs: [
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/12/06/18/58/seagull-5809731_960_720.jpg',
                                preview: 1
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2019/12/26/11/04/new-years-day-4720210_960_720.jpg',
                                preview: 1
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/01/01/18/51/bottle-of-sparkling-wine-4734176_960_720.jpg',
                                preview: 1
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/11/28/09/02/road-5784006_960_720.jpg',
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
                    }
                ],
            }
        },
        computed: {

        },
        methods: {
            loadData() {
                this.$http.get('https://www.fastmock.site/mock/8cfa08f9f31b41ff8daccd7a369bb930/w3chack/api/loadMoreBigPic')
                    .then(res => {
                        this.listBig = [...this.listBig, ...res.data]
                        setTimeout(() => {
                            this.$refs.listBig.isLoading = false
                            this.$refs.listBig.btnDisabled = false
                        }, 2000)
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

    @import './vr.less';

</style>
