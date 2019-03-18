<template>
	<div id="book">
		
	</div>
</template>
<script>
	export default{
		data(){
			return{

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
				[].concat.apply([],arr3)				//[1,2,1,2,3,2,3]
				Array.prototype.concat.apply([],arr3)   //[1,2,1,2,3,2,3]
				//es6数组打平
				[].concat(...arr3)    //[1,2,1,2,3,2,3]
				//es5求最大值
				Math.max.apply(arr1)  //3
				//es6求最大值
				Math.max(...arr1)      //3
			}
		}
	}
</script>
<style>
	
</style>
