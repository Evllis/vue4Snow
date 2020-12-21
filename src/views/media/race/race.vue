<template>
    <div class="media-race">
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
        name: 'media-race',
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
                                src: 'https://cdn.pixabay.com/photo/2020/02/01/14/48/sheep-4810513_960_720.jpg',
                                preview: 1
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/12/10/06/24/christmas-tree-5819465_960_720.jpg',
                                preview: 1
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2020/11/16/18/20/fallow-deer-5749914_960_720.jpg',
                                preview: 1
                            },
                            {
                                src: 'https://cdn.pixabay.com/photo/2019/12/11/18/06/dog-4688913_960_720.jpg',
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
                        title: '这是第二个全景图片',
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

    @import './race.less';

</style>
