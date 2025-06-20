<template>
    <div class="footer-app">
      <div class="footer-left">
          <a class="logo" href="/">
            <img src="@/assets/images/logo.svg" alt="Nextcent" />
            <img src="@/assets/images/nexcent-white.svg" alt="Nextcent" />
          </a>
        <div class="copyright" :class="body-regular-3">
          <span>Copyright © 2020 Nexcent ltd.</span>
          <span>All rights reserved</span>
        </div>
        <div class="media-list">
          <div class="media-btn" v-for="media in mediaList" :key="media.id">
            <a :href="media.link">
              <img :src="getImg(media.icon)" :alt="media.icon">
            </a>
          </div>
        </div>
      </div>
      <div class="footer-right">
        <div class="footer-menu">
          <div class="menu-title heading-headline-4">Company</div>
          <div class="menu-list">
            <div class="menu-item body-regular-3" v-for="item in companyMenu" :key="item.id">
              <a :href="item.link">{{ item.title }}</a>
            </div>
          </div>
        </div>
        <div class="footer-menu">
          <div class="menu-title heading-headline-4">Support</div>
          <div class="menu-list">
            <div class="menu-item body-regular-3" v-for="item in supportMenu" :key="item.id">
              <a :href="item.link">{{ item.title }}</a>
            </div>
          </div>
        </div>
        <div class="contact">
          <div class="menu-title heading-headline-4">Stay up to date</div>
          <div class="contact-wrap">
            <input class="contact-input" type="text" placeholder="Your email address">
            <div class="contact-btn">
              <img src="@/assets/images/icon-send.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()

const isActiveRoute = (href: string) => {
  return route.path === href
}

const mediaList = [
  {
    id: 1,
    icon: "instagram",
    link: "https://baidu.com"
  },
  {
    id: 2,
    icon: "website",
    link: "https://baidu.com"
  },
  {
    id: 3,
    icon: "facebook",
    link: "https://baidu.com"
  },
  {
    id: 4,
    icon: "youtube",
    link: "https://baidu.com"
  },
]

const companyMenu = [
  {
    id: 1,
    title: "About us",
    link: "https://baidu.com"
  },
  {
    id: 2,
    title: "Blog",
    link: "https://baidu.com"
  },
  {
    id: 3,
    title: "Contact us",
    link: "https://baidu.com"
  },
  {
    id: 4,
    title: "Pricing",
    link: "https://baidu.com"
  },
  {
    id: 5,
    title: "Testimonials",
    link: "https://baidu.com"
  }
]

const supportMenu = [
  {
    id: 1,
    title: "Help center",
    link: "https://baidu.com"
  },
  {
    id: 2,
    title: "Terms of service",
    link: "https://baidu.com"
  },
  {
    id: 3,
    title: "Legal",
    link: "https://baidu.com"
  },
  {
    id: 4,
    title: "Privacy policy",
    link: "https://baidu.com"
  },
  {
    id: 5,
    title: "Status",
    link: "https://baidu.com"
  }
]

const getImg = (icon) => {
  return new URL(`/src/assets/images/icon-${icon}.svg`, import.meta.url).href
}
</script>
  
<style scoped>
  .footer-app {
    padding: 64px 165px 74.33px 165px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-black);
  }
  .footer-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
  }
  .logo {
    display: flex;
    gap: 8px;
  }
  .copyright {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: var(--color-silver);
  }

  .media-list {
    display: flex;
    gap: 16px;
  }

  .media-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  .media-btn a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .footer-right {
    display: flex;
    gap: 30px;
  }
  
  .footer-menu {
    width: 160px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .menu-title {
    color: white;
  }
  .footer-menu .menu-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .footer-menu .menu-item a {
    color: white;
    text-decoration: none;
  }

  .contact {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .contact-wrap {
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    width: 255px;
    height: 40px;
    padding: 9px 12px;
    background: rgba(255, 255, 255, 0.2);
  }

  .contact-input {
    background-color: transparent;
    border: none;
    outline: none;
    caret-color: white;
    color: white;
  }

  .contact-input::placeholder {
    color: var(--color-gray-300);
  }
</style>
  