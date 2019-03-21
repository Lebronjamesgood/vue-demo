<template>
	<div id="briefBookInformation" @click = "toBookInformation()">
		<div class="bookImage_intro">
			
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
		props:['bookName','bookAuthor','bookRate','bookId'],
		data(){
			return{

			}
		},
		methods:{
			toBookInformation(bookId){
				this.$router.push({path:"/book",query:{
					id:this.bookId
				}})
			},
		}
	}
</script>
<style>
	.bookImage_intro{
		background: url("../../assets/logo.png")no-repeat center;
		height: 300px;
		cursor: pointer;
	}
</style>
