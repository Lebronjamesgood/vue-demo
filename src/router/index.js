import HelloWorld from '../components/HelloWorld.vue'
import login from '../module/login/login.vue'
import logout from '../module/login/logout.vue'
import readerInformationModify from '../module/readerInformation/readerInformationModify.vue'
import readerInformationCreate from '../module/readerInformation/readerInformationCreate.vue'

export default[
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta:{
      	requireAuth:true
      }
    },
    {
    	path:"*",
    	component : login
    },
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
    },
    {
      path:'/readerInformationCreate',
      name:'readerInformationCreate',
      component:readerInformationCreate
    },{
      path:"/homePage",
      component:resolve =>require(['../module/bookInformation/homePage.vue'],resolve)
    },{
      path:"/book",
      component:resolve =>require(['../module/commom/book.vue'],resolve)
    },{
      path:"/bookType",
      component:resolve =>require(['../module/bookInformation/bookType.vue'],resolve)
    }


  ]
