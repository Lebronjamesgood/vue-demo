<template>
	<div id="book">
		<div class="bookImage">
			
		</div>
		<div>
			<div>
				<span>{{bookInformation.bookName}}</span>
				<span>{{bookInformation.bookAuthor}}</span>
				<span>{{bookInformation.publishTime}}</span>
			</div>
			<div>
				<el-rate
				  v-model="bookInformation.valueRate"
				  disabled
				  show-score
				  text-color="#ff9900"
				  score-template="{value}">
				</el-rate>
			</div>
		</div>
		<div>
			<el-tabs :tab-position="tabPosition" style="height: 200px;">
			    <el-tab-pane label="简介">{{bookInformation.introduction}}</el-tab-pane>
			    <el-tab-pane label="目录">{{bookInformation.list}}</el-tab-pane>
			    <el-tab-pane label="作者">{{bookInformation.authorIntroduction}}</el-tab-pane>
			  </el-tabs>
		</div>
		<div>
			
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				bookInformation:{
					bookName:"",
					bookAuthor:"",
					publishTime:"",
					valueRate:3.7,
					introduction:"",
					list:"",
					authorIntroduction:"",
				}
			}
		},
		methods:{
			calculateSign(){
				let arr1 = [1,2,3],arr2=[4,5,6],arr3=[1,2,[1,2,3],[2,3]],arr4=[1,1,2,2,3,3,4]
				//es5数组去重
				let arr_repeat = []
				for(let i=0;i<arr4.length;i++){
					if(arr_repeat.indexOf(arr4[i]) == -1){
						arr_repeat.push(arr4[i])
					}
				}
				//es6数组去重
				let set = new Set(arr4)
				Array.from(set)        //[1,2,3,4]
				//es5数组打平
				//[].concat.apply([],arr3)				//[1,2,1,2,3,2,3]
				Array.prototype.concat.apply([],arr3)   //[1,2,1,2,3,2,3]
				//es6数组打平
				//[].concat(...arr3)    //[1,2,1,2,3,2,3]
				//es5求最大值
				Math.max.apply(arr1)  //3
				//es6求最大值
				Math.max(...arr1)      //3
			}
		}
	}
</script>
<style>
	.bookImage{
		background: url("../../assets/timg.jpg")no-repeat;
	}
</style>
