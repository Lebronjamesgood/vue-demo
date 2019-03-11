// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router/index'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './vuex/store'
Vue.use(Element)
Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
	routes,
	mode:'history'
})
/*router.beforeEach((to,from,next)=>{
	if(router.meta.requireAuth){
		if(){

		}
	}
})*/
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
