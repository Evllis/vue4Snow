import Vue from 'vue'

const header = r => require.ensure([], () => r(require('./header')), 'header')
const footer = r => require.ensure([], () => r(require('./footer')), 'footer')

Vue.component('ys-header', header)
Vue.component('ys-footer', footer)
