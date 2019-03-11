<template>
<div class="Land">
    <div class="topzi">图书管理后台登陆</div>
          <div class="">
              <span>name：</span>
              <el-input v-model="username"></el-input>
         </div>   
         <div>   
              <span>passord：</span>
              <el-input type="password" v-model="password" auto-complete="off" show-password></el-input>
         </div>
         <div>
           <el-button type="success" @click="goNext()">确定</el-button>
         </div>    
</div>
</template>
<script>
  export default {
    data() {
        return{
            username:"",
            password:""  
        }
    },
    methods: {
        goNext(){
          let validateUsername = this.validate(this.username),
              validatePassword = this.validate(this.password)
          if(validateUsername && validatePassword){
              if(this.username == "admin" && this.password == "123"){
                  this.$store.dispatch("login",this.username.trim(),"12345")
                  this.$router.push({path:"/logout"})
              }else{
                alert("请输入正确的用户名或密码！")
              } 
          }else{
            alert("请输入用户名或密码！")
          }     
        },
        validate(arg){
            if(arg.trim().length<1){
                return false  
            }
            return true  
        }
    }
  }
</script>

<style lang="scss">
html,body{
  width:100%;
  height:100%;
  /*background: url(../../build/beijin.jpg) no-repeat;*/
  background-size: 100% 100%;
  }
  #app .topzi{
    font-size: 40px;
    margin-bottom: 100px;
    margin-top: 100px;
  }

#app .Land{
  text-align: -webkit-center;
  position:fixed;
  left: 0;
  right: 0;
  margin:0 auto;
  background: url("../../assets/timg.jpg")no-repeat;
  background-size: cover;
  height: 100%
}
.Land>div:nth-child(2),.Land>div:nth-child(3),.Land>div:nth-child(4){
    width:15%;
    display: flex;
    margin-top: 30px;
    span{
        display: inline-block;
        width: 100px;
    }
}
.Land>div:nth-child(4)>button{
    width: 100%;
}
.el-input__inner{
    height: 32px;
    line-height: 32px;

}
</style>

