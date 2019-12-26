import Vue from 'vue'
import App from './App'
import tabBar from './components/tabbar.vue'
Vue.component('tab-bar', tabBar)
Vue.config.productionTip = false
import store from './store'

Vue.prototype.isLoginFun= function(hasLogin,forcedLogin){
	isLogin(hasLogin,forcedLogin)
}

Vue.prototype.$store = store


App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
