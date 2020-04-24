import Vue from 'vue';
import App from './App';
import router from './router';
import firebase from 'firebase';
import './components/firebaseInit';

Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged(function() {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
});

// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')
