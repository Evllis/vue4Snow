<template>
    <div class="route-line">
        <ul class="route-list">
            <li class="route-item"
                :class="{ 'active': item.active }"
                v-for="item of lineList"
                :key="item.id"
                @click="toggleItem(item)">
                {{ item.name }}
            </li>
        </ul>
        <div class="route-info">
            <div class="info-left">
                <dl>
                    <dt>地点：</dt>
                    <dd>{{ info.address }}</dd>
                </dl>
                <dl>
                    <dt>项目：</dt>
                    <dd>
                        <span
                            class="project"
                            v-for="(item, index) of info.projects"
                            :key="index">{{ item }}</span>
                    </dd>
                </dl>
            </div>
            <div class="info-right">
                <a href="javascript:void(0);" class="goto"
                    @click="goto">
                    <i class="icon"></i>
                    去这里
                </a>
                <a href="javascript:void(0);" class="look"
                    @click="lookat">查看周边</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'route-line',
        data() {
            return {
                info: {},
                lineList: [
                    {
                        id: 1,
                        name: '呼和浩特市',
                        address: '内蒙古体育馆',
                        coordinate: '111.664067,40.856705',
                        projects: [
                            '陆地冰壶'
                        ],
                        active: true
                    },
                    {
                        id: 2,
                        name: '凉城县',
                        address: '凉城县岱海国际滑雪场',
                        coordinate: '112.556026,40.665185',
                        projects: [
                            '自由式滑雪', '单板滑雪'
                        ],
                        active: false
                    },
                    {
                        id: 3,
                        name: '乌兰察布市',
                        address: '乌兰察布市轮滑场',
                        coordinate: '113.170061,40.434848',
                        projects: [
                            '轮滑'
                        ],
                        active: false
                    },
                    {
                        id: 4,
                        name: '多伦县',
                        address: '多伦县龙泽湖公园',
                        coordinate: '116.495344,42.203768',
                        projects: [
                            '冰上龙舟'
                        ],
                        active: false
                    },
                    {
                        id: 5,
                        name: '哈喇沁旗',
                        address: '哈喇沁旗美林谷滑雪场',
                        coordinate: '118.245431,41.680152',
                        projects: [
                            '高山滑雪', '单板滑雪'
                        ],
                        active: false
                    },
                    {
                        id: 6,
                        name: '海拉尔区',
                        address: '内蒙古冰上运动训练中心',
                        projects: [
                            '速度滑冰', '短道速滑',
                            '花样滑冰', '冰壶',
                            '冰球'
                        ],
                        active: false
                    },
                    {
                        id: 7,
                        name: '牙克石市',
                        address: '牙克石市凤凰山滑雪场',
                        coordinate: '119.831973,49.226223',
                        projects: [
                            '越野滑雪', '冬季两项',
                            '滑轮+射击', '滑轮'
                        ],
                        active: false
                    },
                    {
                        id: 8,
                        name: '扎兰屯市',
                        address: '扎兰屯市金龙山滑雪场',
                        coordinate: '122.645792,48.050512',
                        projects: [
                            '自由式滑雪', '单板滑雪'
                        ],
                        active: false
                    },
                    {
                        id: 9,
                        name: '突泉县',
                        address: '突泉县体育馆',
                        coordinate: '121.585523,45.392611',
                        projects: [
                            '轮滑冰球'
                        ],
                        active: false
                    }
                ]
            }
        },
        computed: {

        },
        methods: {
            toggleItem(item) {
                this.lineList = this.lineList.map((v) => {
                    if (v.id !== item.id) {
                        v.active = false
                    }
                    else {
                        v.active = true
                    }
                    return v
                })
                this.info = item
            },
            goto() {
                // this.$router.push({
                //     name: 'icesnow-route',
                //     params: {
                //         end: this.info.coordinate,
                //         name: this.info.address
                //     }
                // })
                this.$emit('routeParams', this.info)
            },
            lookat() {
                this.$emit('routeCurrent', this.info)
            }
        },
        created() {

        },
        mounted() {
            this.info = this.lineList[0]
        },
    }
</script>

<style lang="less" scoped>

    @import './route-line.less';

</style>
