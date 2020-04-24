<template>
  <div class="modal-container">

    <div class="modal">
          <div class="modal-header">
            <h2 class="modal-logo">Goculis</h2>

            <h3 class="modal-title">Please login to your account</h3>
          </div>


      <div class="modal-content">
        <div class="modal-form">


          <div class="input-field">
            <label class="form-label" for="">Email</label>
            <input class="form-input" type="email" placeholder="Enter email">
          </div>

          <div class="input-field">
            <label class="form-label" for="">Password</label>
            <input class="form-input" type="password" placeholder="Enter password">
          </div>

          <div class="modal-info">
              <div class="remember-me">
              <input class="remember-me-box" type="checkbox"> 
              <label class="remember-me-label">Remember me</label>
              </div>

              <button class="btn-forget">Forgot password?</button> 

          </div>




          <button class="btn-login">Sign in</button>
          <button class="btn-register">Register now</button> 
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            alert(`You are logged in as ${this.email}`);
            this.$router.go({ path: this.$router.path });
            // this.$router.push('/');
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};
</script>

<style>
* {
    box-sizing: border-box;
}

body {
    font-family: 'Lato', sans-serif;
    margin:0;
    transition: transform 0.3s ease;
}

.modal-container {
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color: rgba(0, 0, 0, 0.267);
    /* display:none; */
}

.modal {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    position: absolute;
    /* overflow: hidden; */
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    max-width: 100%;
    width:400px;
    /* animation-name: modalopen; */
    /* animation-duration: var(--modal-duration); */
}

.modal-content {
    padding:20px;
}

.modal-header {
  display:flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
    background-color: rgba(105, 133, 105, 0.904);
}
.modal-title {
  font-family: 'Lato', sans-serif;
  font-size:20px;
  padding: 5px 5px;
  letter-spacing: 2px;
  color:#fff;


}

.modal-logo {
  letter-spacing: 2px;
  color:#fff;
  font-weight: bold;

}
.modal-form div {
    margin:15px 0;

}


.modal-form label{
    display:block;
    margin-bottom: 5px;
    letter-spacing: 1px;
    color:rgb(124, 121, 121);
    font-weight:700;

}

.form-input{
    padding:8px;
    width:100%;
    border:none;
    border-bottom: 1px solid rgb(211, 207, 207);
    /* letter-spacing: 1.5px; */
    font-size: 15px;
    color: rgb(141, 138, 138);

}

.form-input:focus {
  color:black;
}



.remember-me {
  display:flex;
  flex-direction: row;
  color:rgb(141, 138, 138);
  font-size:10px;
}

.remember-me-box {
  height:10px;
  width:10px;
  margin-top:6px;

}

.remember-me-label {
    margin-top:4px;

  font-family: 'Lato', sans-serif;
  font-size:13px;
    color: rgb(124, 121, 121);


}

.btn-login {
    background-color: rgba(105, 133, 105, 0.904);
    border:0;
    border-radius:10px;
    color:#fff;
    padding:8px 10px;
    cursor:pointer;
    margin-top:2px;
    font-size:15px;
    width:100%;
}

.btn-register,.btn-forget{
  border:none;
  font-family: 'Lato', sans-serif;
  font-size:15px;
  background-color:#fff;
  margin:0px 0px;
  color: rgb(124, 121, 121);
  font-size:14px;
}

.btn-forget {
    margin:5px 0px;
}

.btn-register:hover, .btn-forget:hover{
  font-weight: bold;
}

.modal-info{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  
}


</style>