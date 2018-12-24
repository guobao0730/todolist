import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const stores = {
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
    }
	},
	actions: {
	}
}
export default new Vuex.Store(stores);
