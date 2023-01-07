<template>
    <div class="menu">
        <img src="/assets/icons/agro-logo-white.png" alt="">
        <div class="menu-wrapper">
            <router-link v-for="item in menuItems" :key="item.key" :to="item.link">
              <div class="link-image">
                <img class="base" :src="item.icon_base" alt="">
                <img class="hover" :src="item.icon_hover" alt="">
              </div>
              <p class='link-text'>{{ item.title }}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        menuItems: [
          {
            key:'dashboard',
            title: 'Dashbord',
            link: '/dashboard',
            icon_base: '/assets/icons/Iconly/light/dashboard.png',
            icon_hover: '/assets/icons/Iconly/bold/dashboard.png'
          },
          {
            key:'stats',
            title: 'Statistika',
            link: '/stats',
            icon_base: '/assets/icons/Iconly/light/stats.png',
            icon_hover: '/assets/icons/Iconly/bold/stats.png'
          },
          {
            key:'reports',
            title: 'Xisobotlar',
            link: '/reports',
            icon_base: '/assets/icons/Iconly/light/report.png',
            icon_hover: '/assets/icons/Iconly/bold/report.png'
          },
          {
            key:'plans',
            title: 'Reja qo\'shish',
            link: '/plans',
            icon_base: '/assets/icons/Iconly/light/plan.png',
            icon_hover: '/assets/icons/Iconly/bold/plan.png'
          },
          {
            key:'users',
            title: 'Foydalanuvchilar',
            link: '/users',
            icon_base: '/assets/icons/Iconly/light/user.png',
            icon_hover: '/assets/icons/Iconly/bold/user.png'
          }
        ],
      };
    },
}
</script>

<style scoped>
    .menu {
      width: 100%;
      height: 100%;
      display: grid;
      position: relative;
      grid-template-rows: 10% 30%;
      background-color: #08705F;
    }
    .menu img {
      align-self: center;
      justify-self: center;
    }
    .menu-wrapper {
      margin-top: 10%;
      display: grid;
      height: 30%;
      width: 100%;
      position: relative;
    }
    .menu-wrapper a {
      width: 100%;
      height: 100%;
      position: relative;
      display: inline-flex;
      color: #fff;
      align-items: center;
      text-decoration: none;
      transition: all 0.2s ease;
      padding: 8px 0 8px 2rem;
      margin: 2% 0;
    }
    .menu a:hover,
    .menu a.active {
      color: #08705F;
      background-color: rgb(255, 255, 255);
      transition: all 0.2s ease;
    }
    .link-image {
      align-self: center;
      width: 28px;
      height: 28px;
      position: relative;
    }
    .link-image .base {
      position: absolute;
      opacity: 1;
    }
    .link-image .hover {
      position: absolute;
      opacity: 0;
    }
    .menu a:hover .base,
    .menu a.active .base {
      opacity: 0;
    }
    .menu a:hover .hover,
    .menu a.active .hover {
      opacity: 1;
    }
    .link-text {
      padding-left: 1rem;
    }
</style>