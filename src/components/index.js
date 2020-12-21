import Vue from 'vue'

// 公共头部
const header = r => require.ensure([], () => r(require('./header/header')), 'header')
// 公共底部
const footer = r => require.ensure([], () => r(require('./footer/footer')), 'footer')
// 首页时间轴
const timeAxis = r => require.ensure([], () => r(require('./time-axis/time-axis')), 'time-axis')
// 二级页面顶部banner
const banner = r => require.ensure([], () => r(require('./banner/banner')), 'banner')
// 二级页面tabs选项卡
const tabs = r => require.ensure([], () => r(require('./tabs/tabs')), 'tabs')
// 自动轮播图
const broadcast = r => require.ensure([], () => r(require('./broadcast/broadcast')), 'broadcast')
// 列表小图
const listSmall = r => require.ensure([], () => r(require('./list-small/list-small')), 'list-small')
// 列表大图
const listBig = r => require.ensure([], () => r(require('./list-big/list-big')), 'list-big')
// 视频
const videos = r => require.ensure([], () => r(require('./videos/videos')), 'videos')
// 四图
const listPic = r => require.ensure([], () => r(require('./list-pic/list-pic')), 'list-pic')
// 索引图
const indexPic = r => require.ensure([], () => r(require('./index-pic/index-pic')), 'index-pic')
// 带描述的多图列表
const listDesc = r => require.ensure([], () => r(require('./list-desc/list-desc')), 'list-desc')
// 三图矩阵列表
const listThreePic = r => require.ensure([], () => r(require('./list-three-pic/list-three-pic')), 'list-three-pic')
// 线路图
const routeLine = r => require.ensure([], () => r(require('./route-line/route-line')), 'route-line')

Vue.component('ys-header', header)
Vue.component('ys-footer', footer)
Vue.component('time-axis', timeAxis)
Vue.component('ys-banner', banner)
Vue.component('ys-tabs', tabs)
Vue.component('ys-broadcast', broadcast)
Vue.component('ys-list-small', listSmall)
Vue.component('ys-list-big', listBig)
Vue.component('ys-video', videos)
Vue.component('ys-list-pic', listPic)
Vue.component('ys-index-pic', indexPic)
Vue.component('ys-list-desc', listDesc)
Vue.component('ys-list-three-pic', listThreePic)
Vue.component('ys-route-line', routeLine)
