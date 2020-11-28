<template>
    <div class="home">
        <div class="home-header">
            <img class="background" src="./image/header_bg.jpg" alt="" />
            <div class="logo"></div>
            <div class="character">
                <div class="boy"></div>
                <div class="girl"></div>
            </div>
            <div class="tabs">
                <div class="items" v-for="item of homeHeader.tabs" :key="item.id">
                    <a :href="item.href" class="link">
                        <span class="title">{{ item.title }}</span>
                        <span class="desc">{{ item.desc }}</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Aos from 'aos'

    export default {

        data() {
            return {
                homeHeader: {
                    tabs: [
                        {
                            id: 1,
                            title: '媒体云',
                            href: '#',
                            desc: '云上数据和素材服务',
                        },
                        {
                            id: 2,
                            title: '现场云',
                            href: '#',
                            desc: '“身临其璋”感受现场',
                        },
                        {
                            id: 3,
                            title: '冰雪云',
                            href: '#',
                            desc: '文化旅游云上服务',
                        }
                    ],
                },
            }
        },
        mounted() {
            console.log('====================================')
            console.log(Aos)
            console.log('====================================')
        },
    }

</script>

<style scoped lang="less">

    @import '../../assets/css/global.less';

    .home-header {
        height: 367px;
    }

    .home {
        background-image: url('./image/header_bg.jpg');
        color: @global-text-color;
        .rounded();
    }
</style>
