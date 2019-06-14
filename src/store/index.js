import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const stores = {
  /*
  * state 是组件的状态
  * 在这里做一个集中的管理
  * */
	state: {
		menu: {
			activeIndex: 0,
			userMenuArr: [],
		},
		deleteUser: {
			VerifyPasswordDialogVisible: false,
			VerifyPassword: '',
			password: '',
			password2: '',
		},
		isLogin: false,
    token:'',
    number:0,
	},
	getters: {
		menuActiveIndex(state) {
			return state.menu.activeIndex;
		},
		getUserMenuArr(state) {
			return state.menu.userMenuArr;
		},
    getToken(state){
		  return state.token;
    }
	},

  /*
  * mutations 是改变state状态的方法集，其中的方法都是自己定义的
  * */
	mutations: {
		setMenuActiveIndex(state, index) {
			state.menu.activeIndex = index;
		},
		setIsLogin(state, value) {
			state.isLogin = value;
		},
		setUserMenuArr(state, userMenuArr) {
			state.menu.userMenuArr = userMenuArr;
		},
    setToken(state,token){
      state.token = token;
    },
    /*
    * 通过该函数控制state(状态集中的状态)
    * */
    setNumber(){
		  this.state.number++;
    }
	},
	actions: {
	}
}
export default new Vuex.Store(stores);
