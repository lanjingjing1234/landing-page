<template>
  <div>
    <header>
      <HeaderApp />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <FooterApp/>
    </footer>
  </div>
</template>

<script setup lang="ts">
import HeaderApp from '@/components/HeaderApp.vue'
import FooterApp from '@/components/FooterApp.vue'

</script>

<style scoped>

</style>
