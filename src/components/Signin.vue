<template>

<div class="container">
    <Home class="home"/>

    <div class="form-container">

        <div class="form-inside-container">

        <div class="close-btn">
            <button class="closeWindow" v-on:click="closeWindow"><i class="fas fa-times"></i></button>
        </div>


         <div class="signin-header">
            <h2 class="signin-title">Welcome back.</h2>
            <p class="signin-description">Sign in to have access to all the food recipes that you love!</p>
        </div>



        <div class="signin-content">
            <div class="signin-google">
                 <div class="google-icon-wrapper">
                    <img class="icon" src="@/images/icons8-google-48.png">
                </div>

                <button v-on:click="signinGoogle" class="google-signin-button">
                    Sign in with Google
                </button> 
            </div>

            <div class="signin-microsoft">
                <div class="microsoft-icon-wrapper">
                    <img class="icon" src="@/images/icons8-microsoft-48.png">
                </div>

                <button class="microsoft-signin-button">
                    Sign in with Microsoft
                </button> 
            </div>

            <div class="closing-para">
                <p>No account?<button class="closing-link" href="" @click="directSignUp">Create one</button></p>
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

        directSignUp:function(){
            this.$router.push('/signup');

        }
    },

  computed:mapGetters(['isSignin']),

};


</script>

<style>


/* .signin {
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    width:500px; 
    height:500px;
    background-color:#fff;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.212);
    border-radius: 5px;
    margin-top:40px;
    z-index:900;
} */


.signin-header {
  color:var(--text-color);
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  letter-spacing: -1px;
    visibility: visible;
    margin-top:30px;


}

.signin-title {
  font-family:var(--font-style-one);
  font-size:28px;
  font-weight: 550;
  line-height: 30px;
}

.signin-description,.closing-para{
    font-family:var(--font-style-three);
    font-weight: 100;
    font-size:17px;
    text-align: center;
    line-height: 28px;
}

.closing-para {
        font-size:15px;
}

.closing-link {
    text-decoration: none;
    color:var(--btn-color);
    border:none;
    background-color: #fff;
    font-size:15px;
    cursor: pointer;

}

.signin-logo{
    font-size:30px;
    letter-spacing: 2px;
    font-weight: bold;
}

.signin-content{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top:60px;
}

.signin-google, .signin-microsoft{
    display:flex;
    flex-direction: row;
    justify-content: center;
    margin:5px 0px;
    border-radius: 5px;
    height:40px;
    width:220px;

}


.google-icon-wrapper, .microsoft-icon-wrapper{
    width:20%;
    /* border:1px solid  #4285F4; */
    border:1px solid  black;
    border-right:none;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color:#fff;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}


.google-icon-wrapper img,.microsoft-icon-wrapper img {
        height:85%;
        width:auto;
        line-height:20px;
}

.google-signin-button,.microsoft-signin-button {
    display: flex;
    justify-content: center;
    align-content: center;
    vertical-align: center;
    text-align: center;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    background-color:#fff;
    color: var(--text-color);
    box-shadow:none;
    line-height:38px;
    font-weight: 450;
    width:80%;
    font-size:14px;
    border:1px solid var(--border-color);
    border-left:none;
    cursor:pointer;
}


</style>