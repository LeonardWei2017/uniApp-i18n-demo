import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		locale: 'cn'
	},
	mutations: {
		// login(state, provider) {  
		//     console.log(state)  
		//     console.log(provider)  
		//     state.login = true;  
		//     state.token = provider.token;  
		//     state.userName = provider.userName;  
		//     state.avatarUrl = provider.avatarUrl;  
		// },  
		// logout(state) {  
		//     state.login = false;  
		//     state.token = '';  
		//     state.userName = '';  
		//     state.avatarUrl = '';  
		// } 
		
		
	}
})
export default store
