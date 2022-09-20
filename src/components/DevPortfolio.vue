<template>
    <div>

    </div>
</template>
<script>
export default {
    name: 'DevPortfolio',
    components: {},
    data(){
        return {
            pageName: 'DevPortfolio',
            form: {},

        }
    },
    mounted(){
    if (localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"));
      this.getData();
    }
  }
}
</script>