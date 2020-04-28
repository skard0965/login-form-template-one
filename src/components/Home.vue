<template>
  <div class="home-container">

    <div class="home-header">
      <div class="landscape-image">
          <img src="../../src/images/red-tomatoes.jpg" alt="">
      </div>
      <div class="home-title">
              <h2>Start sharing your recipes!</h2>
              <ul>
                <li>Stay connected with your friends</li>
                <li>Start learning from each other's recipes</li>
                <li>Find friends with same appetitie</li>
                <li>Have fun sharing your daily meal photos</li>
              </ul>
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


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home-header {
  display:flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  position:relative;
  height:500px;
}

.landscape-image {
    /* background:#fff; */
    filter: brightness(0.4);
}

.home-header img {
  height: 100%;
  width: 100%;
}
.home-title {
  position:absolute;
  top:20%;
  left:20%;
  transform: translate(-20%,-20%);
  letter-spacing: 3px;
  color:white;
  font-family: "Lato", sans-serif;
}

.home-title h2 {
  margin-bottom:30px;
  font-size:30px;
}
.home-title ul li{
  font-size:15px;
  margin-bottom:20px;

}

@media screen and (max-width: 576px) {
  .home-title {
    top:20%;
    left:20%;
      transform: translate(-20%,-20%);

  }
  .home-title ul li{
    margin:0;
    font-size:10px;
  }

}
</style>