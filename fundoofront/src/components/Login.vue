<template>
  <div class="centered-container">
    <md-content class="md-elevation-3">
      <div class="title">
        <div class="md-title">
          <p style=" font-size: 200%;
font: bolder;">
            <span style='color: blue'>F</span>
            <span style='color: red'>U</span>
            <span style='color: yellow'>N</span>
            <span style='color: blue'><Datag></Datag></span>
            <span style='color: green'>O</span>
            <span style='color: red'>O</span>
          </p>
        </div>
      </div>
      <div class="form">
        <md-field>
          <label>E-mail</label>
          <md-input v-model="login.email"></md-input>
        </md-field>

        <md-field >
          <label>Password</label>
          <md-input v-model="login.password" type="password"></md-input>
        </md-field>
      </div>

      <div class="actions md-layout md-alignment-center-space-between">
        <a href="/forgetpassword">Forget password</a>
        <md-button class="md-raised md-primary"  @click="login">Log in</md-button>
      </div>

      <div class="loading-overlay" v-if="loading">
        <md-progress-spinner md-mode="indeterminate" ></md-progress-spinner>
      </div>
    </md-content>
  </div> 
</template>

<script scoped>
import axios from 'axios';
export default {
  name: "App",
  data() {
    return {
      input: {
        email: "",
        password: ""
        }
     }
   },
   
   methods: {
      login() {
        alert(this.login.email)
        alert("successfully")
        
      }
    }
};
</script>

<style lang="scss">
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  .title {
    text-align: center;
    margin-bottom: 30px;
    font-size: larger;
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
  .form {
    margin-bottom: 60px;
  }
  // .title{
  //   color: rgba(0,0,0,.87);
  // }
    .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
 .md-title{ font-size: 103%;
font: bolder;}
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>