<template>
  <nav>
        <div class="navbar">
          <div class="navCenter">
            <div class="navHeader">
              <router-link to='/' class="logo">Goculis</router-link>

            </div>
            <ul class="navLinks">
                  <li v-if="isLoggedIn"><router-link to="/">Dashboard</router-link></li>
                  <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
                  <li v-if="!isLoggedIn"><router-link to="/register">Register</router-link></li>
                  <li v-if="isLoggedIn"><button v-on:click="logout" class="btn black">Logout</button></li>
            </ul>
          </div>
        </div>
  </nav>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'navbar',
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    }
  }
};
</script>

<style>

.navbar {
  background-color:rgba(143, 188, 143, 0.527);

}

.navCenter {
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}


@media screen and (min-width: 576px) {
  .navbar {
    padding: 0 2rem;
  }
}

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
  font-size:30px;
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