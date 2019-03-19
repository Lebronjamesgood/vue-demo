<template>
	<div id="briefBookInformation">
		<div class="bookImage">
			
		</div>
		<div>{{bookName}}</div>
		<div>{{bookAuthor}}</div>
		<div>
			<el-rate
			  v-model="bookRate"
			  disabled
			  show-score
			  text-color="#ff9900"
			  score-template="{value}">
			</el-rate>
		</div>
	</div>
</template>
<script>
	export default{
		props:['bookName','bookAuthor','bookRate'],
		data(){
			return{

			}
		}
	}
</script>
<style>
	
</style>
