import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        bannerStatus: false,
    },
    mutations: {
        updataBannerStatus(state, value) {
            state.bannerStatus = value;
        }
        // 'navigation/FORWARD': (state, {to, from}) => {
        //   console.log('navigation/FORWARD', to, from)
        // },
        // 'navigation/BACK': (state, {to, from}) => {
        //   console.log('navigation/BACK', to, from)
        // },
        // 'navigation/REPLACE': (state, {to, from}) => {
        //   console.log('navigation/REPLACE', to, from)
        // },
        // 'navigation/REFRESH': (state, {to, from}) => {
        //   console.log('navigation/REFRESH', to, from)
        // },
        // 'navigation/RESET': () => {
        //   console.log('navigation/RESET')
        // }
    },
    actions: {},
    modules: {}
})
