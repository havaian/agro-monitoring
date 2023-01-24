<template>
    <div class="header">
        <div class="header-text">
            <p>{{ header }}</p>
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
                        <p>{{ username }}</p>
                        <img src="/assets/icons/arrow.png" alt="">
                    </div>
                    <div class="profile-text-bot">
                        <p>{{ district }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: "profile_component",
    props: [ 'header', 'username', 'district' ],
    mounted() {
        $('.internal-navigation ul li').click((e) => {
            $('.internal-navigation ul li').removeClass('active');
            $(e.target).toggleClass('active');
        })
    },
}
</script>
  
<style scoped>

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
</style>