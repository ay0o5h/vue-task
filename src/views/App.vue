<template>

  <SideBar/>
</template>

<script>

import SideBar from '../components/SideBar.vue';
export default {
  name: 'App',
   components: {
    SideBar
  }
 
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color:rgba(0, 0, 0, 1);

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;

}
</style>
