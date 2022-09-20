<template>
    <div>

    </div>
</template>
<script>
export default {
    name: 'AboutMe',
    components: {},
    data(){
        return {
            pageName: 'AboutMe',
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