<template>
  <nav>
        <div class="navbar-container">

            <div class="nav-header">
              <h2 class="logo">GoCulis</h2>
            </div>

            <div class="nav-content">
              <ul class="nav-links">
                    <li v-if="!isSignin" ><router-link to="/signin">Sign in</router-link></li>
                    <li v-if="!isSignin" ><router-link to="/signup">Sign up</router-link></li>

                    <li v-if="isSignin"><router-link to="/profile">Profile</router-link></li>
                    <li v-if="isSignin"><router-link to="/">Sign out</router-link></li>
              </ul>
            </div>

          </div>
  </nav>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
  name: 'navbar',
  
  methods:{...mapActions(['updateSignin']),
    signout(){
      this.updateSignin(false)
    }
  },


  computed:mapGetters(['isSignin']),

};
</script>

<style>




.navbar-container {
  display: flex;
  justify-content:space-between;
  /* margin:20px 20px; */
  
  width:100%;
  height:100px;
  position:fixed;
  top:0;
  left:0;
  background-color: rgba(255, 255, 255, 0.95);
  padding:20px 30px;

      /* position: absolute;
    top: 0px;
    flex: 0 0 auto; */
  /* z-index:500; */
  /* height:100px; */

}


.nav-header{
    /* padding-left:60px; */
    padding-left:60px;
    align-items: center;
    display:flex;
    justify-content: center;
}

.nav-header .logo {
  text-decoration:none;
  font-size:30px;
  font-family: var(--font-style-two);
  color:var(--text-color);
}

.nav-content{
    padding-right:60px;
    /* align-items: center;
    display:flex;
    justify-content: center; */
}



.nav-links {
  /* padding:20px 20px; */
  list-style-type: none;
  text-decoration:none;
  display:flex;
  flex-direction: row;
  align-content: center;
  text-align: center;
    padding-top:15px;

}

.nav-links a {
  text-decoration:none;
  color:var(--text-color);
  font-family: var(--font-style-two);
  font-size:15px;
  padding-left:20px;


}

@media screen and (max-width: 500px) {
.nav-header{
  padding-left:0px;
}
.nav-content {
padding-right:0px;
}
}
</style>