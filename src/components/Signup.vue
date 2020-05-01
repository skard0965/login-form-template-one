<template>

<div class="signup">
    
    <Home class="home"/>



        <div class="close-btn">
            <button class="closeWindow" v-on:click="closeWindow"><i class="fas fa-times"></i></button>
        </div>


         <div class="signup-header">
            <h2 class="signup-title">Join Goculis</h2>
            <p class="signup-description">Create an account to have access to all contributer's food recipes and start your own journey as a contributer!</p>
        </div>



        <div class="signup-content">
            <div class="signup-google">
                 <div class="google-icon-wrapper">
                    <img class="icon" src="@/images/icons8-google-48.png">
                </div>

                <button v-on:click="signupGoogle" class="google-signin-button">
                    Sign up with Google
                </button> 
            </div>

            <div class="signup-microsoft">
                <div class="microsoft-icon-wrapper">
                    <img class="icon" src="@/images/icons8-microsoft-48.png">
                </div>

                <button class="microsoft-signup-button">
                    Sign up with Microsoft
                </button> 
            </div>

            <div class="closing-para">
                <p>Already have an account?<button class="closing-link" href="" @click="directSignIn">Sign in</button></p>
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


.signup {
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
}

.closeWindow{
    position: fixed;
    top:2%;
    right:2%;
    border:none;
    background-color:#fff;
    font-size:15px;
    /* padding:2px 3px; */
    color:var(--text-color-two);
    cursor:pointer;
}

.signup-header {
  color:var(--text-color);
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  letter-spacing: -1px;
visibility: visible;


}

.signup-title {
  font-family:var(--font-style-one);
  font-size:28px;
  font-weight: 550;
  line-height: 30px;
}

.signup-description,.closing-para{
    font-family:var(--font-style-three);
    font-weight: 100;
    font-size:17px;
    padding:10px 90px;
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


.signup-logo{
    font-size:30px;
    letter-spacing: 2px;
    font-weight: bold;
}

.signup-content{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top:60px;
}

.signup-google, .signup-microsoft{
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
        padding:6px 6px;
        line-height:20px;
}

.google-signup-button,.microsoft-signup-button {
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