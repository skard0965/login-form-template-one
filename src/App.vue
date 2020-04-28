
<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  name: 'app',
  components: {
    Navbar
  },
  created(){
        this.$router.push('/');

  }
};
</script>

<style>
@import './assets/styles/global.css';
nav {
  margin-bottom: 10px;
}
</style>