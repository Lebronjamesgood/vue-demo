<template>
<div id="homePage">
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="item in system" :key="item">
      <h3>{{ item.name }}</h3>
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
				switch(index){
		          case 3: this.$router.push({path:"/readerInformationModify"})
		        }
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