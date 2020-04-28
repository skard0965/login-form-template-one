<template>
    <div class="profile-container">
        <div class="profile-header">
            <h3>Hey Culis!</h3>
        </div>

        <div class="profile-header-items">
            <div class="profile-image">
                <label class="image">Profile Photo:</label>
                <input id="image" type="file" class="imput" placeholder="Photo" required="" capture>

            </div>

            <div class="profile-description">
                <p>Tell about yourself</p>

            </div>
        </div>


        <div class="profile-recipes">
            <p>Add a new recipe</p>
        </div>
        

    </div>
</template>


<script>
export default {
    name:'profile'

}
</script>

<style>
* {
    box-sizing: border-box;
    margin:0;
}


.profile-header {
    height:auto;
    /* width:30%; */
    display:flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    background-color:var(--primary-green-color);
    border-bottom:1px solid rgba(0, 0, 0, 0.418);


}

.profile-header h3 {
        margin-top:25px;
        margin-bottom:25px;
        font-size:30px;
}
/*
Profile-header : images and description of the culis's profile is located
*/
.profile-header-items {
    display:flex;
    /* height:300px; */
    flex-direction: row;
    /* justify-content: space-between; */
    background-color:var(--primary-green-color);
}
    /* Profile Image */
.profile-image,.profile-description {
    display:flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color:rgb(243, 240, 226);
    border:1px solid #fff;
    margin:20px 20px;

}

.profile-description {
    width:25%;

}

.profile-image {
    border-radius: 50%;
    height:200px;
    width:200px;
}

.profile-image:hover,.profile-description:hover{
    font-weight:bolder;
    border:2px solid var(--primary-green-color);
    background:var(--secondary-green-color);
    color:#fff;
}

@media screen and (max-width: 576px) {
    .profile-header-items {
        flex-direction: column;
    }

    .profile-description{
        width:90%;
    }

}

/*
Recipes shared by culis
*/

.profile-recipes {
    background-color:rgb(225, 230, 202);
    height:300px;
}
.profile-recipes p{
    font-size:20px;

}

</style>