<template>
  <nav>
        <div class="navbar">
          <div class="navCenter">
            <div class="navHeader">
              <router-link to='/' class="logo">GoCulis</router-link>

            </div>
            <ul class="navLinks">
                  <li v-if="!isSignin"><router-link to="/signin">Sign in</router-link></li>

                  <li v-if="isSignin"><router-link to="/profile">Profile</router-link></li>
                  <li v-if="isSignin" @click="signout"><router-link to="/">Sign out</router-link></li>

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

  // created(){
  //   this.updateSignin(false)
  // }

};
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.navbar {
  /* background-color:rgba(143, 188, 143, 0.527); */
  height:65px;
  padding: 0 2rem;
}

.navCenter {
  max-width: 1170px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


/* @media screen and (min-width: 576px) {
  .navbar {
    padding: 0 2rem;
  }
} */

/* 
@media screen and (min-width: 992px) {
  .navCenter {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
} */


.navHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 1rem 1.25rem; */
  padding: 0 0;

}

.logo {
  font-family: "Lato", sans-serif;
  font-size:40px;
  color:black;
  cursor: pointer;
  overflow:hidden;
  text-decoration:none;
  font-weight: bold;
}

.navLinks {
    list-style-type: none;
    height: auto;
    display: flex;
    text-decoration: none;

}

.navLinks a {
  /* display: block; */
  padding: 1rem 1rem;
  text-decoration: none;
  text-transform: capitalize;
  color: black;
  /* transition: var(--mainTransition); */
  /* font-weight: bold; */
}

.navLinks a:hover{
  font-weight: bold;
}

</style>