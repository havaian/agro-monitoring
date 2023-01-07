<template>
  <div id="wrapper">
    <div class="left-container">
      <img class="logo" src="/assets/icons/agro-logo.png" alt="">
      <div class="login-form">
        <p class="top-text">Кириш</p>
        <div class="input-container">
          <label for="hp-ic-l">Логин / Имейл</label>
          <input type="text" name="hp-ic-l" id="hp-ic-l" placeholder="Логинни киритинг">
          <input type="text" name="username" id="username" placeholder="Логинни киритинг">
        </div>
        <div class="input-container">
          <label for="hp-ic-pw">Пароль</label>
          <input type="password" name="hp-ic-pw" id="hp-ic-pw" placeholder="Паролни киритинг">
          <input type="password" name="password" id="password" placeholder="Паролни киритинг">
        </div>
        <button id="submit-btn">Кириш</button>
      </div>
      <p class="bottom-text">
        Ушбу хизматдан фойдаланиш орқали сиз
        <br>махфийлик шартларига розилик билдирасиз
      </p>
    </div>
    <div class="right-container">
      <div class="text-container">
        <p class="welcome-text-top">Хуш келибсиз!</p>
        <p class="welcome-text-bot">"Онлайн мониторинг" ахборот тизими</p>
      </div>
      <img class="bg-img" src="/assets/photos/login-illustration.png" alt="">
    </div>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    name: "Profile",
    mounted() {
      
    },
  }
</script>

<style scoped>
  #wrapper {
    padding: 0;
    width: 100%;
    height: 100%;
    display: inline-grid;
    grid-template-columns: 50% 50%;
  }
  .left-container {
    display: grid;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: #313131;
    background-color: white;
  }
  .left-container .logo {
    justify-self: center;
  }
  .top-text {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    font-style: normal;
    font-family: 'Inter';
  }
  .login-form {
    width: 487px;
    height: 436px;
    display: grid;
    padding: 0% 10% 10% 10%;
    box-shadow: 2px 0px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    grid-template-rows: 20% 30% 30% 20%;
  }
  .input-container {
    display: grid;
    padding: 0% 0% 2% 0%;
    grid-template-rows: 30% 50%;
  }
  .input-container label {
    height: 20px;
  }
  #hp-ic-l,
  #hp-ic-pw {
    padding: 0 20px;
    color: #A8A8A8;
    border-radius: 5px;
    border: thin solid #A8A8A8;
    box-shadow: 2px 0px 12px rgba(0, 0, 0, 0.1);
    transition: all 0.2 ease;
  }
  #hp-ic-l:focus,
  #hp-ic-pw:focus,
  #hp-ic-l:focus-within,
  #hp-ic-pw:focus-within,
  #hp-ic-l:focus-visible,
  #hp-ic-pw:focus-visible {
    outline: #08705F;
    border: thin solid #08705F;
    transition: all 0.2 ease;
  }
  #username {
    opacity: 0;
    position: absolute;
  }
  #password {
    opacity: 0;
    position: absolute;
  }
  #submit-btn {
    margin-top: 5%;
    padding: 5%;
    cursor: pointer;
    color: white;
    border-radius: 4px;
    border: thin solid #08705F;
    background-color: #08705F;
    transition: all 0.2s ease;
  }
  #submit-btn:hover{
    color: #08705F;
    border: thin solid #08705F;
    background-color: white;
    transition: all 0.2s ease;
  }
  .bottom-text {
    color: #A8A8A8;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    font-style: normal;
    text-align: center;
    font-family: 'Inter';
  }
  .right-container {
    width: 100%;
    height: 100%;
    background: rgba(8, 112, 95, 0.8);
    backdrop-filter: blur(50px);
  }
  .right-container img {
    left: 10%;
    bottom: 0;
    height: 80%;
    position: fixed;
  }
  .right-container .text-container {
    color: white;
    margin-top: 10%;
    margin-left: 7%;
  }
  .right-container .text-container .welcome-text-top {
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
    font-style: normal;
    font-family: 'Inter';
  }

  .right-container .text-container .welcome-text-bot {
    font-size: 28px;
    font-weight: 500;
    line-height: 34px;
    font-style: normal;
    font-family: 'Inter';
  }
</style>