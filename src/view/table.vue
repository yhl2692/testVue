<template>
  <div>大傻子1</div>
</template>

<script>
  export default{
    data(){
      return{}
    },
    mounted(){
      this.$store.dispatch("table/getTableData",{data:{},page:1,pageSize:10,tableType:"sales_details_index"}).then(response => {

			}).catch((error) => {
				console.log(error);
			});
    }
  }
</script>

<style>
</style>
