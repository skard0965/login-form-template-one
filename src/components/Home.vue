<template>
  <div class="home-container">

      <div class="home-title">
          <h2>Start sharing your recipes!</h2>
      </div>

      <div class="home-content">
              <div class="par-boxes">
                <div class="box">
                  <h4>Stay connected with your friends</h4>
                </div>
                <div class="box">
                  <h4>Start learning from each other's recipes</h4>
                </div>
              </div>

              <div class="par-boxes-second">
                <div class="box">
                  <h4>Find friends with same appetitie</h4>
                </div>
                <div class="box">
                  <h4>Have fun sharing your daily meal photos</h4>
                </div>
              </div>
      </div>

      <div class="home-second-content">
        <button class="btn-primary">Get started</button>
      
        <p class="p-one">We are here to make sure you have everything you need!</p>
        <p class="p-two">Contact us in case of any issues!</p>
        <button class="btn-primary">Contact us</button>
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

.home-content {
  display:flex;
  flex-direction: column;
}

.par-boxes {
  display:flex;
  flex-direction: row;
  margin-top:40px;
}

.box{
  height:200px;
  width:400px;
  background-color:var(--primary-green-color);
  margin:10px 10px;
  position:relative;
  opacity:0.9;
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;
  border-bottom-right-radius: 25%;
  border-bottom-left-radius: 25%;
}

.box h4 {
  font-size:20px;
  color:var(--text-color);
  position: absolute;
  top:35%;
  left:5%;
  letter-spacing: 1.5px;
  opacity:1;
}

.par-boxes-second {
  margin-top:0;
  display:flex;
  flex-direction: row;

}

.par-boxes-second .box {
  background-color:var(--primary-orange-color);
}

.home-second-content {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin:50px 10px;
}

.home-second-content .btn-primary {
  height:50px;
  width:200px;
  background-color:rgba(7, 120, 122, 0.808);
  font-size:20px;
  color:#fff;
  border:none;
  cursor: pointer;
  font-weight: 400;
  font-family: var(--font-style-three);
  line-height: 40px;
  border-radius: 4px;
}

.home-second-content .p-one {
  margin-top:40px;
  font-size:20px;
  letter-spacing: 1.5px;
}

.home-second-content .p-two {
  margin:20px;
  font-size:20px;
  letter-spacing: 1.5px;
}

.btn-primary:hover{
  background-color:rgba(5, 79, 80, 0.808);
}

@media screen and (max-width: 869px) {
  .home-title h2{
    font-size: 30px;
  }

  .box {
    width:200px;
  }

  .home-second-content .p-one, .home-second-content .p-two{
    font-size:15px;
  }
}

</style>