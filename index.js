//定义store状态管理模块
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// import createPersistedState from 'vuex-persistedstate'

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    // plugins: [ // 引入vuex-persistedstate，将vuex的数据持久化到本地
    //     createPersistedState({
    //         storage: {
    //             getItem: key => wx.getStorageSync(key),
    //             setItem: (key, value) => wx.setStorageSync(key, value),
    //             removeItem: key => {}
    //         }
    //     })
    // ]
})