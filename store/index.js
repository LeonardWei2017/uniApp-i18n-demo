import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

 const store = new Vuex.Store({
  state: {
	  locale:'zh_CN',
	  ind:0
  },
  mutations: {
	  changestate(state){
		  if(state.ind == '0'){
		  	state.locale = 'zh_CN';
		  }else if (state.ind == '1') {
		  	state.locale = 'en';
		  }  else{
			  state.locale = 'EN_franch';
		  }
		   console.log(state.locale);
	  },
	  changeind(state,payload){
		  state.ind = payload.ind
		  console.log(state.ind);
	  }
  },
  actions: {

  }
})
export default store