<template>
  <div id="app">
    <NavigateMenu/>
  </div>
</template>

<script>
import NavigateMenu from './components/NavigateMenu.vue'

export default {
  name: 'App',
  components: {
    NavigateMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
