//定义修改状态操作
import * as types from './mutation-types'

const mutations = {
  [types.SELECT_FOOTER_TAB](state, tabName) {
    if (tabName) {
      state.footerVisible = true
    } else {
      state.footerVisible = false
    }
  },
}

export default mutations
