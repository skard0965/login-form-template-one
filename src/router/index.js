import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Signin from "@/components/Signin"
import Signup from "@/components/Signup"
import AddRecipe from "@/components/AddRecipe"
import Dashboard from "@/components/Dashboard"
import Profile from "@/components/Profile"

import Intro from "@/components/Intro"

Vue.use(Router);

let router = new Router({
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'signin', path: '/signin', component: Signin },
    { name: 'signup', path: '/signup', component: Signup },
    { name: 'intro', path: '/intro', component: Intro },
    { name: 'addRecipe', path: '/addrecipe', component: AddRecipe },

    { name: 'dashboard', path: '/dashboard', component: Dashboard },
    { name: 'profile', path: '/profile', component: Profile },

  
  ]
});


export default router;

