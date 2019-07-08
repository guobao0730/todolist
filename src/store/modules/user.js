/**
 *@project： todolist
 *@package：
 *@date：2019/7/2 0002 14:17
 *@author 郭宝
 *@brief:  用户相关状态管理
 */


/*
* state 是一个对象，用它来存储组件的状态
* 在这里做一个集中的管理
* */
const state = {
  token:'',
  number:0,
};


/*
 getters 是一个对象，它类似于计算属性computed,用来实时监听state值的变化，并把它扔进Vuex.Store里面。
  */
const getters = {
  /*
    该函数的方法名是自定义的，它的主要作用是实时监听token状态值的改变
    如果外部组件想访问的话，需要：this.$store.getters.getToken
     */
  getToken(state){
    return state.token;
  },
  getNumber(state){
    return state.number;
  }
};

/*
* mutations 是一个对象，它是用来改变state状态的方法集，其中的方法都是自己定义的
* */
const mutations = {
  /*
  * 自定义改变token值的函数，
  * */
  setToken(state,token){
    state.token = token;
  },
  /*
  * 通过该函数控制number状态的值
  * */
  setNumber(){
    this.state.number++;
  }
};


/*
* actions 是一个对象，它最大的作用就是在里面定义的函数可以异步触发mutations里面的方法
* actions 里面自定义一个函数接收一个context参数和要变化的形参，context和store实例具有相同的方法和属性，所以它也可以执行context.commit('')
* */
const actions = {
  /*
    * 自定义一个触发mutations对象中的setToken函数
    * context和store实例具有相同的方法和属性，所以它也可以执行context.commit('')
    * 如果想在外部组件中执行该函数，需要：this.$store.dispatch('setToken','123')
    * */
  setToken(context,token){
    context.commit('setToken',token);
  },

  setNumber(context){
    context.commit('setNumber');
  }
};

export default {
  namespaced:true,// 表示当你需要在别的文件中使用mapGetters、mapActions、mapStates时，里面的函数需要注明来自哪个模块
  state,
  getters,
  mutations,
  actions
}

