import Vuex from 'vuex'
import Vue from 'vue'
import signin from './modules/signin'

//Load Vuex
Vue.use(Vuex)

//Create store
export default new Vuex.Store({
    modules:{
        signin
    }
})
