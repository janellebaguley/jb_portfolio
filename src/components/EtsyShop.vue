<template>
    <div>

    </div>
</template>
<script>
export default {
    name: 'EtsyShop',
    components: {},
    data(){
        return {
            pageName: 'EtsyShop',
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