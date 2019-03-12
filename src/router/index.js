import HelloWorld from '../components/HelloWorld.vue'
import login from '../module/login/login.vue'
import logout from '../module/login/logout.vue'
import readerInformationModify from '../module/readerInformation/readerInformationModify.vue'

export default[
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
      	requireAuth:true
      }
    },
    /*{
    	path:"*",
    	component : p404
    },*/
    {
    	path:'/login',
    	name:"login",
    	component:login
    },{
    	path:'/logout',
    	name:"logout",
    	component:logout
    },{
    	path:'/readerInformationModify',
    	name:'readerInformationModify',
    	component:readerInformationModify
    }

  ]
