<template>
<div class="container">
    <Home class="home"/>

    <div class="form-container">
        <div class="form-inside-container">
            <button class="closeWindow" v-on:click="closeWindow"><i class="fas fa-times"></i></button>

            <div class="form-content">
                <h5>Display name</h5>
                <p>Your display name will be shown on your posts and comments.</p>
                <input class="input-name" type="text" value="name" v-model="displayName">
            </div>

            
            <div class="form-content">
                <h5>Profile picture</h5>
                <p>Adding a photo can make it easier for others to recognize you.</p>

                <div class="photo-box">
                    <div class="photo-dummy-box">S</div>
                    <button class="photo-browser-btn">Pick a photo</button>
                </div>
            </div>

            <button class="submit-form-btn">Create my account</button>

        </div>


    </div>
</div>

    
</template>

<script>
import Home from "@/components/Home"

export default {
    name:'intro',
    components:{
      Home
    },
    methods:{
        closeWindow:function(){
            this.$router.push('/');
        },
    }
}
</script>


<style>

.form-content {
  color:var(--text-color);
  display:flex;
  flex-direction: column;
    visibility: visible;
    font-family:var(--font-style-two);
    margin-top:30px;
}

.form-content h5{
    font-weight: 700;
    font-size:15px;

}

.form-content p{
    font-weight: 400;
    font-size:15px;
    margin-top:3px;
}

.input-name{
    border-radius: 5px;
    font-size:15px;
    margin-top:10px;
    padding:10px;
}

.photo-box{
    display:flex;
    flex-direction: column;
    margin-top:15px;
}


.photo-dummy-box{
    height:100px;
    width:100px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:40px;
    border-radius:3px;
    color:white;
    background-color:var(--secondary-green-color);
}



.photo-browser-btn{
    height:30px;
    width:100px;
    background-color:rgba(89, 155, 194, 0.418);
    font-size:13px;
    color:rgb(73, 128, 160);
    border:1px solid rgb(73, 128, 160);
    border-radius: 3px;
    margin-top:5px;
}

.submit-form-btn {
    height:40px;
    width:100%;
    font-weight: 500;
    font-size:13px;
    border-radius:3px;
    border:1px solid var(--dark-green);
    color:#fff;
    background-color:var(--btn-color);
    margin-top:30px;
}



@media screen and (max-width: 450px){

.form-container{
    width:90%; 
    height:90%;
    max-height:500px;
}

}


</style>