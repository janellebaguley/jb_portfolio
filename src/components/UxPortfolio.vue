<template>
    <div>

    </div>
</template>
<script>
export default {
    name: 'UxPortfolio',
    components: {},
    data(){
        return {
            pageName: 'UxPortfolio',
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