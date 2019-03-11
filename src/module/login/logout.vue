<template>
	<div>
		<el-button type="success" @click="logout()">确定</el-button>
	</div>
</template>
<script>
	export default{
		data(){
			return {

			}
		},
		methods:{
			logout(){
				this.$store.dispatch('logout',undefined,undefined)
				this.$router.push({path:'/login'})
			}
		}
	}

</script>
<style>
	button{
		width: 10%;
	}
</style>