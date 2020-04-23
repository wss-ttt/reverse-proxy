<template>
  <div class="test">
	  <button @click="getData">跨域请求(后端配置)</button>
	  <button @click="getData2">跨域请求(前端配置)</button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
	  getData(){
		  this.$http({
			  url:'http://localhost:3000/users/list',
			  method:'get'
		  }).then(data=>{
			  console.log(data)
		  })
	  },
	  getData2(){
		  this.$http({
			  url:'/api/users/list',
			  method:'get'
		  }).then(data=>{
			  console.log(data)
		  })
	  }
  }
}
</script>
<style>
</style>