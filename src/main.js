import Vue from 'vue';
import App from './App';
import router from './router';
import firebase from 'firebase';
import './components/firebaseInit';
import GSignInButton from 'vue-google-signin-button'
import store from "./store"
import UploadImage from 'vue-upload-image';

Vue.config.productionTip = false;
Vue.use(GSignInButton)


 
// register globally
Vue.component('upload-image', UploadImage)
 


let app;
firebase.auth().onAuthStateChanged(function() {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      UploadImage,
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  }
});

// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')
