<template>
  <div class="home-container">

      <div class="home-title">
          <h2>Start sharing your recipes!</h2>
      </div>

      <div class="home-image">
              <img src="../../src/images/home-image.jpeg" alt="">

      </div>

      <div class="home-content">
        <div class="btn-container">
          <button class="btn-primary">Get started</button>
        </div>
        
        <div class="contact-container">
          <p class="p-one">We are here to make sure you have everything you need!</p>
          <p class="p-two">Contact us in case of any issues!</p>
          <button class="btn-primary">Contact us</button>
        </div>

      </div>




  </div>
</template>

<script>
  export default {
    name: 'home', 
  }
</script>

<style>
.home-container {
  display:flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}


.home-title {
  margin-top:100px;
  display:flex;
  justify-content: center;
}

.home-title h2{
  font-size: 70px;
  font-weight: 500;
  line-height: 85px;
  font-family: var(--font-style-one);
  color:var(--text-color);
}

.home-image {
  border:none;
  display:flex;
  justify-content: center;
  align-items: center;
}

.home-image img {
  height:90%;
  width:80%;
  box-shadow: none;
  

}
.home-content {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  /* margin:50px 10px; */
  font-family: var(--font-style-three);

}

.btn-container{
  margin-top:10px;
}

.home-content .btn-primary {
  height:50px;
  width:300px;
  background-color:var(--btn-color);
  font-size:20px;
  color:#fff;
  border:none;
  cursor: pointer;
  font-weight: 400;
  font-family: var(--font-style-three);
  line-height: 40px;
  border-radius: 4px;
}

.contact-container {
  margin:80px 30px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-top:0.8px solid var(--text-color);
}
.home-content .p-one {
  margin-top:80px;
  font-size:20px;
  color:var(--text-color-two);
  font-weight: 500;

  /* letter-spacing: 1.5px; */
  
}

.home-content .p-two {
  margin:30px 0;
  font-size:22px;
  color:var(--text-color);
/* line-height: 28px; */
  font-weight: 500;
  visibility: visible;
    font-family: var(--font-style-three);

  /* letter-spacing: 1.5px; */
}

.btn-primary:hover{
  background-color:var(--dark-green);
}

@media screen and (max-width: 869px) {
  .home-title h2{
    font-size: 30px;
  }

  .box {
    width:200px;
  }

  .home-content .p-one, .home-content .p-two{
    font-size:15px;
  }

  .home-image img{
    width:90%;
  }
}

@media screen and (max-width: 360px) {
  .home-title h2{
    font-size:20px;
  }

  .home-content .btn-primary{
  height:40px;
  width:200px;
  font-size:20px;
  font-weight:100;
  }
}

</style>