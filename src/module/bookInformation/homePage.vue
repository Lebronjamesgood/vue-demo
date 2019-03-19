<template>
<div id="homePage">
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="(item,i) in system" :key="i">
      <h3 @click="changePage(i)">{{ item.name }}</h3>
    </el-carousel-item>
  </el-carousel>
</div> 
</template>
<script>
	export default{
		data(){
			return {
				system:[
					{name:'所有图书'},
					{name:'还书系统'},
					{name:'借阅系统'},
					{name:'个人信息'}
				]

			}
		},
		methods:{
			changePage(index){
        console.log(index)
				this.sleepFun(2000,index)
			},
      async sleepFun(ms,i){
        await this.sleep(ms)
        switch(i){
          case 0: this.$router.push({path:"/bookType"});break;
          case 1: this.$router.push({path:"/bookType"});break;
          case 2: this.$router.push({path:"/bookType"});break;
          case 3: this.$router.push({path:"/readerInformationModify"});break;
        }
      },
      sleep(ms){
        return new Promise(resolve=>{
          setTimeout(resolve,ms)
        })
      }
		}
	}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 30px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
   #homePage{
   	margin-top: 200px;
   }
</style>