import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Signin from "@/components/Signin"
import Dashboard from "@/components/Dashboard"
import Profile from "@/components/Profile"

Vue.use(Router);

let router = new Router({
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'signin', path: '/signin', component: Signin },

    { name: 'dashboard', path: '/dashboard', component: Dashboard },
    { name: 'profile', path: '/profile', component: Profile },

  
  ]
});


export default router;

