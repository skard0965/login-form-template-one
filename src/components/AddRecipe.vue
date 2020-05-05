<template>
    <div class="container">

        <div class="form-container">
            <div class="form-inside-container">

                <button class="closeWindow" v-on:click="closeWindow"><i class="fas fa-times"></i></button>

                <div class="form-content">
                    <h3 class="form-title">Add a recipe card</h3>

                    <div class="form-content-row">
                        <label for="" class="recipe-label">Title</label>
                        <input type="text" class="input-recipe-title">
                    </div>


                    <div class="form-content-row">
                        <label for="" class="recipe-label">Category</label>

                        <select name="" id="" class="category-recipe">
                            <option value="" disabled selected>Select category</option>
                            <option value="">Breakfast</option>
                            <option value="">Lunch</option>
                            <option value="">Dinner</option>
                            <option value="">Dessert</option>
                            <option value="">Soup</option>
                        </select>
                    </div>
                        <div class="form-content-row">
                        <label for="" class="recipe-label-food">Photo</label>

                            <input type="file" @change="onFileChange" ref="imageInput" style="display:none">
                            <button class="pick-foodphoto-btn" @click="$refs.imageInput.click()">Select image</button>
                            
                        </div>

                            <div v-if="!image">
                            </div>
                            <div v-else>
                                <div class="form-content-row-photo">
                                
                                <img :src="image" class="food-photo-box"  @click="$refs.imageInput.click()"/>
                                <button class="remove-food-photo" @click="removeImage"><i class="fas fa-trash-alt"></i></button>

                                

                            </div>
                            </div>

                    <div class="form-content-photo">
                        
                        <label for="" class="recipe-label">Description</label>
                        <textarea 
                        id="text"
                        name="paragraph_text" 
                        class="input-recipe-description" ></textarea>
                    </div>


                    <div class="form-content-photo">
                        <label for="" class="recipe-label">Instruction</label>
                        <textarea 
                        name="paragraph_text" 
                        class="input-recipe-instruction"></textarea>
                    </div>
                </div>

            </div>    
        </div>
    </div>
</template>

<script>
export default {
    name:'addRecipe',
    data(){
        return{
        selectedFile:null,
        image: '',
        }
    },
    methods:{

        closeWindow:function(){
            this.$router.push('/');
        },
        onFileChange(e) {
            this.image = '';
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.createImage(files[0]);
        },
        createImage(file) {
            var reader = new FileReader();
            var vm = this;

            reader.onload = (e) => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage: function () {
            this.image = '';
        }
    }
    
}
</script>

<style>


.form-content-photo {
    color:var(--text-color);
    display:flex;
    flex-direction: column;
      visibility: visible;
      font-family:var(--font-style-two);
      /* margin-top:20px; */
    /* overflow: scroll; */
  }


.form-title{
    color:var(--text-color);
    font-size:20px;
    font-family:var(--font-style-one);
    border-bottom:1px solid rgba(0, 0, 0, 0.226);
    padding-bottom:5px;
}

.form-content-row {
    display:flex;
    align-items: center;
    align-content: center;
    margin-top:10px;
}

.recipe-label{
    padding-right:10px;
    color:var(--secondary-text-color);
    font-size:13px;
    flex:1;
}

.input-recipe-title{
    color:var(--text-color);
    border-radius: 5px;
    font-size:15px;
    flex:2;
    padding:5px;
    border:1px solid var(--secondary-green-color);
}

.input-recipe-title:focus, .input-recipe-description:focus,.input-recipe-instruction:focus,.input-recipe-ingredients:focus{
    border:1px solid var(--dark-green);
}

.input-recipe-description,.input-recipe-instruction,.input-recipe-ingredients{
    color:var(--text-color);
    border-radius: 5px;
    font-size:15px;
    flex:2;
    padding:5px;
    border:1px solid var(--secondary-green-color);
    overflow: scroll;
    overflow-x: scroll;
overflow-y: scroll;
overflow:visible;
resize:none;

      /* overflow: scroll; */


}


.category-recipe{
    padding:6px;
    flex:1;
    font-size:13px;
    text-align: center;
    border:1px solid var(--secondary-green-color);
    border-radius:5px;
    flex:2;


}
.category-recipe:focus{
        border:1px solid var(--dark-green);
}


.form-content-photo {
    color:var(--text-color);
    display:flex;
    flex-direction: column;
    visibility: visible;
    font-family:var(--font-style-two);
    margin-top:30px;
}

.food-photo-box{
    height:auto;
    opacity:1;
    width:300px;
    border-radius:3px;
    color:white;
    background-color:var(--secondary-green-color);
    /* margin-left:10px; */
    align-items: center;
    align-content: center;
        border:1px solid rgb(73, 128, 160);
    /* flex:2; */
}

.food-photo-box-dummy{
    height:300px;
    opacity:0.5;
    width:300px;
    border-radius:3px;
    color:white;
    background-color:var(--secondary-green-color);
    /* margin-left:10px; */
    align-items: center;
    align-content: center;
        border:1px solid rgb(73, 128, 160);
}

.food-photo-box:hover{
    opacity:0.5;
}

.pick-foodphoto-btn{
    height:30px;
    width:150px;
    color:#fff;
    padding:4px;
    border-radius:3px;
    background-color:rgba(89, 155, 194, 0.418);
    font-size:13px;
    color:rgb(73, 128, 160);
        border:1px solid rgb(73, 128, 160);
        margin-bottom:5px;
        flex:2;

}

.pick-foodphoto-btn:hover{
    background-color:rgba(61, 108, 134, 0.418);
    font-weight: 500;
}



.form-content-row-photo{
    display:flex;
    /* flex-direction: row; */
    margin-top:10px;
    position:relative;
        width:300px;
        justify-content: center;
        align-content: center;
        align-items: center;
    
}


.remove-food-photo{
    position:absolute;
    top:0;
    right:0;
    height:30px;
    width:30px;
    background-color:#fff;
    /* height:auto;
    max-height: 40px;
    width:90px;
    margin-right:10px;
    color:var(--text-color);
    padding:3px;
    border-radius:3px;
    font-size:10px;
        display: block;
        margin-left:10px;
        background-color:#fff;
        border:1px solid var(--text-color); */
}

.fa-trash-alt {
    font-size:20px;
    position: absolute;
    top:0;
    right:0;
    padding:3px;



    color: var(--text-color);
}

.remove-food-photo:hover{
    background-color:var(--text-color);

}
.fa-trash-alt:hover{
    color:#fff;
}
.recipe-label-food{
    padding-right:10px;
    margin-bottom:10px;
    color:var(--secondary-text-color);
    font-size:13px;
    flex:1;
}

@media screen and (max-width: 450px){

    .form-content-row-photo{
        width:130px;
    }
}


</style>