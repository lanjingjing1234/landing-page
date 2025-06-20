<template>
    <div class="header-app">
      <a class="logo" href="/">
        <img src="@/assets/images/logo.svg" alt="Nextcent" />
        <img src="@/assets/images/nexcent-black.svg" alt="Nextcent" />
      </a>
      <div class="menu">
        <div class="menu-items">
          <RouterLink :class="isActiveRoute(item.href) ? 'body-medium-2' : 'body-regular-2'" v-for="item in menuItems" :key="item.id" :to="item.href">
            {{ item.label }}
          </RouterLink>
        </div>
      </div>
      <div class="actions">
        <div class="action-btn login-btn">Login</div>
        <div class="action-btn signUp-btn">Sign up</div>
      </div>
    </div>
</template>
  
<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'

const menuItems = [
  {
    id: 1,
    label: 'Home',
    href: '/home',
  },
  {
    id: 2,
    label: 'Features',
    href: '/features',
  },
  {
    id: 3,
    label: 'Pricing',
    href: '/pricing',
  },
  {
    id: 4,
    label: 'Testimonials',
    href: '/testimonials',
  },
  {
    id: 5,
    label: 'Help',
    href: '/help',
  },
]


const route = useRoute()

const isActiveRoute = (href: string) => {
  return route.path === href
}


</script>
  
<style scoped>
  .header-app {
    padding: 30px 120px 30px 105px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    display: flex;
    gap: 8px;
  }
  .menu .menu-items {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  .menu .menu-items a {
    text-decoration: none;
    color: var(--color-secondary);
  }

  .actions {
    display: flex;
    gap: 14px;
    
  }

  .action-btn {
    width: 91px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .login-btn {
    color: var(--color-primary);
  }

  .signUp-btn {
    background-color: var(--color-primary);
    color: white;
    border-radius: 6px;
  }
</style>
  