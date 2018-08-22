/*
	types.js 内定义常量，使用常量替代 mutations 事件类型
	user.js 内写该 user组件内用到的 state，getter，action和mutations，最后统一导出
	getters.js 内写原来的 getter ，用来获取属性
	actions.js 内写原来的 actions，就是要执行的动作，如流程的判断，异步请求
	index.js 是用来组件 actions.js getters.js user.js的，然后进行统一导出

*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import actions from './actions'
import users from './modules/user'
// 导出 store 对象
export default new Vuex.Store({
    getters,
    actions,
    modules:{
        users
    }
})
