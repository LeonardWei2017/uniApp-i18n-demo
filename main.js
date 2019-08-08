import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store'
import VueI18n from 'vue-i18n'
Vue.config.productionTip = false

Vue.use(Vuex)
Vue.prototype.$store = store
Vue.use(VueI18n)
App.mpType = 'app'
const i18n = new VueI18n({
	locale: uni.getStorageSync('locale')||"cn", //默认为中文简体
	messages: {
		
	}
})
Vue.prototype._i18n = i18n

const app = new Vue({
	i18n,
	store,
	...App
})
app.$mount()
