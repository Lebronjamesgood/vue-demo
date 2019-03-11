import Vue from "vue"
import Vuex from 'vuex'
Vue.use(Vuex)

const store =new Vuex.Store({
	state:{
		username:undefined,
		token:undefined
	},
	//同步mutations
	mutations:{
		login : (state,username,token)=>{
			state.username = username
			state.token = token
		},
		logout : (state)=>{
			state.username = undefined
			state.token = undefined
		},
	},
	getter:{
		getUser:(arg)=>{
			state.username = arg
		},
		getToken:(arg)=>{
			state.token = arg
		}
	},	
	actions:{
		login:(context,username,token)=>{
			context.commit("login",username,token)
		},
		logout:(context)=>{
			context.commit("logout")
		}
	}
})
export default store