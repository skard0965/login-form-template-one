const state = {
    signin:false

}

const getters ={
    isSignin:(state)=>state.signin
}

const actions={
    updateSignin({commit},res){
        commit('update',res);
    }
}

const mutations={
    update:(state,res)=>(state.signin=res)


}

export default {
    state,
    getters,
    actions,
    mutations
}