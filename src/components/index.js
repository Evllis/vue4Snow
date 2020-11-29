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

Vue.component('ys-header', header)
Vue.component('ys-footer', footer)
Vue.component('time-axis', timeAxis)
Vue.component('ys-banner', banner)
Vue.component('ys-tabs', tabs)
