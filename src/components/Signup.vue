<template>

<div class="container">
    
    <Home class="home"/>


    <div class="form-container">
                <div class="form-inside-container">

        <div class="close-btn">
            <button class="closeWindow" v-on:click="closeWindow"><i class="fas fa-times"></i></button>
        </div>


         <div class="signin-header">
            <h2 class="signin-title">Join Goculis</h2>
            <p class="signin-description">Create an account to have access to all contributer's food recipes and start your own journey as a contributer!</p>
        </div>



        <div class="signin-content">
            <div class="signin-google">
                 <div class="google-icon-wrapper">
                    <img class="icon" src="@/images/icons8-google-48.png">
                </div>

                <button v-on:click="signupGoogle" class="google-signin-button">
                    Sign up with Google
                </button> 
            </div>

            <div class="signin-microsoft">
                <div class="microsoft-icon-wrapper">
                    <img class="icon" src="@/images/icons8-microsoft-48.png">
                </div>

                <button class="microsoft-signin-button">
                    Sign up with Microsoft
                </button> 
            </div>

            <div class="closing-para">
                <p>Already have an account?<button class="closing-link" href="" @click="directSignIn">Sign in</button></p>
            </div>
        </div>
        </div>

    </div>
</div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Home from "@/components/Home"

export default {
  name: 'signup',
  components:{
      Home
  },
  methods: {
    ...mapActions(['updatesignup']),
        signupGoogle:function() {
            this.updatesignup(true);
            this.$router.push('/dashboard');
        },

        closeWindow:function(){
            this.$router.push('/');
        },

        directSignIn:function(){
            this.$router.push('/signin');

        }
    },

  computed:mapGetters(['issignup']),

};


</script>

<style>

</style>