import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from "@/components/Login"
import Register from "@/components/Register"
import firebase from 'firebase';

Vue.use(Router);

let router = new Router({
  routes: [
    { name: 'home', path: '/', component: Home,meta:{requiresAuth:true} },

    { name: 'login', path: '/login', component: Login,meta:{requiresGuest:true} },
    { name: 'register', path: '/register', component: Register },
  
  ]
});

// Nav Guard
router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // Check if NO logged user
    if (firebase.auth().currentUser) {
      // Go to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      // Proceed to route
      next();
    }
  } else {
    // Proceed to route
    next();
  }
});

export default router;

