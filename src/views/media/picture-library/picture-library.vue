<template>
    <div class="picture-library">
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
        name: 'picture-library',
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
                                src: 'https://cdn.pixabay.com/photo/2019/12/30/20/34/snow-4730553_960_720.jpg',
                                preview: 1
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/10/27/21/24/lake-5691976_960_720.jpg',
                                preview: 1
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/11/01/21/45/christmas-5705046_960_720.jpg',
                                preview: 1
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/02/06/20/01/university-library-4825366_960_720.jpg',
                                preview: 1
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/12/10/09/21/girl-5819711_960_720.jpg',
                                preview: 1
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/12/06/21/15/blackbird-5810073_960_720.jpg',
                                preview: 1
                            },
                        ]
                    }
                ],
            }
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
        mounted() {

        },
    }
</script>

<style lang="less" scoped>

    @import './picture-library.less';

</style>
