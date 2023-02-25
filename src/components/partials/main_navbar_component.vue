<template>
    <div class="menu">
        <img src="/assets/icons/agro-logo-white.png" alt="">
        <div class="menu-wrapper">
            <template v-for="item in menuItems" key="parent-element">
              <router-link v-if="item.link_type != 'dropdown'" :key="item.key" class="router-link" :to="item.to" :show-icon="item.id">
                <div class="link-image">
                  <img class="base" :src="item.base_scr" alt="">
                  <img class="hover" :src="item.base_hover" alt="">
                </div>
                <p class='link-text'>{{ item.title }}</p>
              </router-link>
              <div v-else class="router-link" :parent='item.parent' :key="item.key" :show-icon="item.id">
                <div class="link">
                  <div class="link-image">
                    <img class="base" :src="item.base_scr" alt="">
                    <img class="hover" :src="item.base_hover" alt="">
                  </div>
                  <p class='link-text'>{{ item.title }}</p>
                  <i class="fas fa-angle-right"></i>
                </div>
              </div>
              <router-link v-for="elem in item.children" :parent='elem.parent' :data-type="elem.type" class="dropdown-router-link" :key="elem.key" :to="elem.to" :show-icon="elem.show_icon">
                <div class="link-image">
                  <img class="base" :src="elem.base_scr" alt="">
                  <img class="hover" :src="elem.base_hover" alt="">
                </div>
                <p class='link-text'>{{ elem.title }}</p>
              </router-link>
            </template>
        </div>
        <div class="contact-wrapper">
          <a class="contact" href="tel:+998996314221">
            <div class="contact-icon">
              <img src="/assets/icons/phone-logo.png" alt="">
            </div>
            <div class="contact-text">
              <p class="contact-top-text">
                Aloqa markazi
              </p>
              <p class="contact-bot-text">
                +998996314221
              </p>
            </div>
          </a>
        </div>
    </div>
</template>

<script>
import menu_items from "../../data/menu_items/menu_items.js";
export default {
  name: "main_navbar_component",
  props: [],
  mounted() {
    $('.router-link').click(e => {
      if (e.target != $('.router-link.active')[0]) {
        $('.router-link').removeClass('active');
        $(e.target).toggleClass('active');  
      } else {
        $(e.target).toggleClass('active');  
      }
      const children = $(`.dropdown-router-link`);
      for (let x = 0; x < children.length; x++) {
        $(children[x]).hide();
      }
      if ($('.router-link').hasClass('active')) {
        const parent = $('.router-link.active').attr('parent');
        const children = $(`.dropdown-router-link[parent="${parent}"]`);
        for (let x = 0; x < children.length; x++) {
          $(children[x]).show();
          if (x === children.length - 1) {
            $(children[x]).css('border-bottom', 'thin solid white');
          }
        }
      }
    });
  },
  data() {
    return {
      menuItems: menu_items
    }
  },
  methods: {

  },
  components: {
    
  }	
}
</script>

<style>
.menu {
  width: 15%;
  height: 100%;
  display: grid;
  position: relative;
  grid-template-rows: 10% 76.5% 13.5%;
  background-color: #08705F;
}
.menu > img {
  height: 3.5vh;
  align-self: center;
  justify-self: center;
}
.menu-wrapper {
  margin-top: 5%;
  display: grid;
  height: 100%;
  width: 100%;
  position: relative;
  overflow-y: scroll;
  /* direction: rtl; */
}
.menu-wrapper.menu-wrapper::-webkit-scrollbar {
  left: 5%;
  width: 0.2em;
}

.menu-wrapper::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.menu-wrapper::-webkit-scrollbar-thumb {
  background-color: rgb(255, 255, 255);
  outline: 1px solid slategrey;
}
.router-link,
.dropdown-router-link {
  z-index: 1;
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: relative;
  color: #fff;
  align-items: center;
  justify-content: start;
  text-decoration: none;
  transition: all 0.2s ease;
  padding: 2.5vh 2vw 2.5vh 1vw;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 0.9vw;
  user-select: none;
  /* direction: ltr; */
}
a.router-link {
  display: inline-flex;
}
div.router-link {
  z-index: 1;
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: relative;
  color: #fff;
  align-items: center;
  justify-content: start;
  text-decoration: none;
  transition: all 0.2s ease;
  padding: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 0.9vw;
}
.link {
  padding: 2.5vh 1vw 2.5vh 1vw;
  z-index: 0;
  pointer-events: none;
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
}
.dropdown-router-link {
  display: none;
}
div.router-link:hover .link,
div.router-link.active .link {
  color: #08705F;
  background-color: rgb(255, 255, 255);
  transition: all 0.2s ease;
}
.dropdown-router-link {
  transition: all 0.2s ease;
}
.dropdown-router-link p {
  border-left: thin solid transparent;
  transition: all 0.2s ease;
}
.dropdown-router-link:hover p,
.dropdown-router-link.active p {
  border-left: thin solid white;
  transition: all 0.2s ease;
}
div.router-link.active .dropdown-router-link {
  display: inline-flex;
}
.router-link[show-icon='hide'] .link-image,
.dropdown-router-link[show-icon='hide'] .link-image {
  display: none;
}
.router-link i {
  z-index: 0;
  pointer-events: none;
  margin-right: 5%;
  color: white;
  width: fit-content;
  cursor: pointer;
  transition: all 0.2s ease;
}
.router-link.active i {    
  color: #08705F;
  transform: rotateZ(90deg);
  transition: all 0.2s ease;
}
.router-link:hover i {      
  color: #08705F;
  transition: all 0.2s ease;
}
a.router-link:hover,
a.router-link.active {
  color: #08705F;
  background-color: rgb(255, 255, 255);
  transition: all 0.2s ease;
}
.router-link[show-icon='hide'] .link-image {
  display: none;
}
.link-image {
  width: 2vw;
  height: 3vh;
  pointer-events: none;
  padding-left: 0.5vw;
  align-self: center;
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
.router-link:hover .base,
.router-link.active .base {
  opacity: 0;
}
.router-link:hover .hover,
.router-link.active .hover {
  opacity: 1;
}
.link-text {
  z-index: 0;
  pointer-events: none;
  padding-left: 0.75vw;
}
#present .link-text {
  padding-left: 1.5vw;
}
.contact-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  padding-bottom: 10%;
  position: relative;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
}
.contact {
  gap: 5%;
  position: relative;
  cursor: pointer;
  display: flex;
  width: 85%;
  height: 7vh;
  padding: 0 1vw;
  border-radius: 16px;
  align-items: center;
  justify-content: space-evenly;
  backdrop-filter: blur(10px);
  background: #147A69;
  backdrop-filter: blur( 1px );
  -webkit-backdrop-filter: blur( 1px );
  border: thin solid transparent;
  transition: all 0.2s ease;
  text-decoration: none;
}
.contact:hover {
  border: thin solid rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease;
}
.contact-icon {
  padding: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  background: #076D5C;
  border: thin solid transparent;
  border-radius: 100px;
  transition: all 0.2s ease;
}
.contact:hover .contact-icon {
  border: thin solid rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease;
}
.contact-top-text {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 0.8vw;
  color: rgba(255, 255, 255, 0.5);
}
.contact-bot-text {
  color: white;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 0.8vw;
}
</style>