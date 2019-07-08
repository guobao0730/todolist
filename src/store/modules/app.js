/**
 *@project： todolist
 *@package：
 *@date：2019/7/2 0002 14:27
 *@author 郭宝
 *@brief: 整个应用先关的状态控制
 */

const state = {
  theme:'',
  size:'',
};

const getters = {
  getTheme(state){
    return state.theme
  },
  getSize(state){
    return state.size
  }
};


const mutations = {
  setTheme(state,theme){
    state.theme = theme
  },
  setSize(state,size){
    state.size = size
  }
};

const actions = {
  setTheme(context,theme){
    context.commit('setTheme',theme)
  },
  setSize(context,size){
    context.commit('setSize',size)
  }
};

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}


