
<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
export default {
  name: 'app',
  components: {
    Navbar,
    Footer
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