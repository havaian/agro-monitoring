<template>
  <div id="wrapper">
    <div class="header">
      <div class="header-text">
        <p>Foydalanuvchilar roвЂ™yxati</p>
      </div>
      <div class="header-profile">
        <div class="notifications">
          <img src="/assets/icons/notification-idle.png" alt="">
        </div>
        <div class="profile">
          <div class="profile-photo">
            <img src="/assets/photos/profile-photo-sample.png" alt="">
          </div>
          <div class="profile-text">
            <div class="profile-text-top">
              <p>Abdurakhimov A.</p>
              <img src="/assets/icons/arrow.png" alt="">
            </div>
            <div class="profile-text-bot">
              <p>Tosh.v. Zangiota.t.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main-content">
      <div class="internal-navigation">
        <ul>
          <li>Yer ma'lumoti</li>
          <li>Yer tayyorlash</li>
          <li>Ekin ekish</li>
          <li>Agrotexnik tadbirlar</li>
          <li>Texnika</li>
          <li>Klaster</li>
          <li>Investitsiya</li>
        </ul>
      </div>
      <div class="filter">

      </div>
      <div class="general-buttons">

      </div>
      <div class="table">

      </div>
      <div class="table-navigation">

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    name: "stats_page_component",
    props: [],
    mounted() {
      $('.internal-navigation ul li').click((e) => {
        $('.internal-navigation ul li').removeClass('active');
        $(e.target).toggleClass('active');
      })
    },
  }
</script>

<style scoped>
  #wrapper {
    padding: 1.5% 1.5% 2.5% 1.5%;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 10% 90%;
  }
  .header {
    width: 100%;
    height: 100%;
    position: relative;
    display: inline-grid;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: 82% 18%;
    padding: 0% 3% 0% 2%;
    border-radius: 12px;
    background: #FFFFFF;
    box-shadow: 6px 0px 14px rgba(0, 0, 0, 0.08);
  }
  .header-text p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 1.5vw;
    line-height: 1vw;
  }
  .header-profile {
    gap: 5%;
    display: flex;
    align-items: center;
  }
  .notifications img {
    width: 1.5vw;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .notifications:hover img {
    transform: scale(110%);
    transition: all 0.2s ease;
  }
  .profile {
    padding: 2% 7% 2% 2%;
    display: flex;
    cursor: pointer;
    align-items: center;
    border-radius: 12px;
    border: thin solid transparent;
    transition: all 0.2s ease;
  }
  .profile-photo {
    transition: all 0.2s ease;
  }
  .profile:hover {
    border: thin solid rgb(150, 150, 150);
    transition: all 0.2s ease;
  }
  .profile:hover .profile-text-top img {
    transform: rotate(-90deg);
    transition: all 0.2s ease;
  }
  .profile-text {
    width: 100%;
    margin-left: 4%;
  }
  .profile-text-top {
    width: 100%;
    align-items: center;
    display: inline-flex;
  }
  .profile-text-top p {
    font-size: 0.9vw;
    font-weight: 500;
    line-height: 1vw;
    font-style: normal;
    font-family: 'Inter';
    padding-right: 3%;
    white-space: nowrap;
  }
  .profile-text-top img {
    height: 100%;
    transition: all 0.2s ease;
  }
  .profile-text-bot p {
    font-size: 0.9vw;
    font-weight: 500;
    line-height: 1vw;
    font-style: normal;
    font-family: 'Inter';
    color: #9B9B9B;
    white-space: nowrap;
  }
  .main-content {
    width: 100%;
    height: 100%;
    margin-top: 1%;
  }
  .internal-navigation {
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    box-shadow: 6px 0px 14px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
    padding: 2% 1.5% 0% 1.5%;
    display: grid;
    grid-template-rows: 5% 10% 5% 70% 10%;
  }
  .internal-navigation ul {
    gap: 1%;
    width: 100%;
    height: 100%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1.1rem;
    display: inline-flex;
    justify-content: flex-start;
    text-decoration: none;
    list-style: none;
    border-bottom: thin solid #DFDFE0;
  }
  .internal-navigation ul li {
    cursor: pointer;
    padding: 0 1%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 1vw;
    border-bottom: 2px solid transparent;
    transition: all 0.2s ease;
  }

  .internal-navigation ul li:hover {
    color: #08705F;
    border-bottom: 2px solid #08705F;
    transition: all 0.2s ease;
  }

  .internal-navigation ul li.active {
    color: #08705F;
    border-bottom: 2px solid #08705F;
    transition: all 0.2s ease;
  }
</style>