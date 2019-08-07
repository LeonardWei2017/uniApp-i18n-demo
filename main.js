import Vue from 'vue'
import App from './App'
// import store from './store'
import i18n from './commons/i18n.js'  
import en from './commons/language/en.js'
import zh_CN from './commons/language/zh_CN.js'
import EN_franch from './commons/language/EN_franch.js'
import store from './store'  

Vue.prototype.$store = store  

i18n.registerLocale({en,zh_CN,EN_franch})

Vue.config.productionTip = false

Vue.prototype._i18n = i18n 
App.mpType = 'app'

const app = new Vue({
     i18n,  
	 store,
    ...App
})
app.$mount()
