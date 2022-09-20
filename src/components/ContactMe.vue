<template>
    <div>

    </div>
</template>
<script>
export default {
    name: 'ContactMe',
    components: {},
    data(){
        return {
            pageName: 'ContactMe',
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