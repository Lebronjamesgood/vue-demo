import axios from 'axios'
import {message} from 'element-ui'

axios.defaults.timeout = 5000
axios.defaults.baseURL = ''

//request 拦截
axios.interceptors.request.use(
	config=>{
		//const token = getCookie('名称');
		config.data = JSON.stringify(config.data)
		config.header = {
			'Content-Type':'application/x-www-form-urlencoded'
		}
		// if(token){
    	//   config.params = {'token':token}
    	// }
    	return config
	},
	error=>{
		return Promise.reject(error)
	}
)
//response 拦截
axios.interceptors.response.use(
	response=>{
		if(response.data.errCode ==2){
			router.push({
	        path:"/login",
	        querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
	      })
		}
		return response
	},
	error=>{
		return Promise.reject(error)
	}

)
//封装get请求
export function get(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}
//封装post请求 
export function post(url,data = {}){
   return new Promise((resolve,reject) => {
     axios.post(url,data)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
   })
 }
 //封装put请求
export function put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}
//封装patch请求
export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}