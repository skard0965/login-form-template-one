<template>

<div class="signin-container">
    <Home/>

    <div class="signin">
        <div class="close-btn">
            <button class="closeWindow" v-on:click="closeWindow"><i class="fas fa-times"></i></button>
        </div>


        <div class="signin-header">
            <h2 class="signin-title">Login to Goculis</h2>
        </div> 

        <div class="signin-content">
            <div class="signin-google">
                 <div class="google-icon-wrapper">
                    <!-- <i class="icon fab fa-google"></i> -->
                    <img class="icon" src="@/images/icons8-google-48.png">
                </div>

                <!-- <g-signin-button :params="googleSignInParams" @success="onSignInSuccess" @error="onSignInError">
                    Sign in with Google
                </g-signin-button> -->

                <button v-on:click="signinGoogle" class="google-signin-button">
                    Sign in with Google
                </button> 
            </div>

            <div class="signin-microsoft">
                <div class="microsoft-icon-wrapper">
                    <!-- <i class="icon fab fa-windows"></i> -->
                    <img class="icon" src="@/images/icons8-microsoft-48.png">
                </div>

                <button class="microsoft-signin-button">
                    Sign in with Microsoft
                </button> 
            </div>
        </div>

    </div>
</div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Home from "@/components/Home"

export default {
  name: 'signin',
  components:{
      Home
  },
  methods: {
    ...mapActions(['updateSignin']),
    signinGoogle:function() {
        this.updateSignin(true);
                this.$router.push('/dashboard');

    },

    closeWindow:function(){
        this.$router.push('/');
    },
    },

  computed:mapGetters(['isSignin']),

//   created(){
//     this.$router.push('/');

//   }


};


</script>

<style>
* {
    box-sizing: border-box;
}

body {
    font-family: 'Lato', sans-serif;
    margin:0;
    transition: transform 0.3s ease;
}

.signin-container {
    /* margin:20px 20px; */
    /* position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: rgba(0, 0, 0, 0.267); */
}

.signin {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.521);

    position: absolute;
    background-color:#fff;
    overflow: hidden;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    max-width: 100%;
    width:300px;
    height:auto;
}

.close-btn .closeWindow{
    position: absolute;
    top:2%;
    right:3%;
    /* padding:2px 3px; */
    color:rgb(177, 173, 173);
    cursor:pointer;
}

.signin-header {
  display:flex;
  flex-direction: column;
  align-items: center;
margin:20px 30px;

}
.signin-title {
  font-family:'Lato', sans-serif;
  font-size:23px;
  letter-spacing: 1.5px;
  line-height: 50px;;
  color:rgba(19, 15, 15, 0.87);
  font-weight:bolder;
}

.signin-logo{
    font-size:30px;
    letter-spacing: 2px;
    font-weight: bold;
}

.signin-google, .signin-microsoft{
    display:flex;
    flex-direction: row;
    justify-content: center;
    margin:20px 30px;
    border-radius: 5px;
    height:50px;

}

.google-icon-wrapper, .microsoft-icon-wrapper{
    width:20%;
    border:1px solid  #4285F4;
    border-right:none;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color:#fff;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}

.microsoft-icon-wrapper .icon, .google-icon-wrapper .icon {
    color:#fff;
}

.google-icon-wrapper img {
        height:95%;
        width:95%;
        padding:6px 6px;
}

.google-signin-button,.microsoft-signin-button {
  display: flex;
  justify-content: center;
  align-content: center;
  vertical-align: center;
  text-align: center;
  border-top-right-radius: 3px;
border-bottom-right-radius: 3px;
  background-color:  #4285F4;
  color: #fff;
  box-shadow:none;
  line-height:48px;
    width:80%;
    font-size:15px;
    border:1px solid #0f66f1;
    cursor:pointer;
}

.microsoft-signin-button {
    background-color:#0093d6;
    border:1px solid #0081bc;
}


</style>