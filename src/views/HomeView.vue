<template>
  <div>
    <swiper-container class="swiper-container" :pagination="{clickable: true}" slides-per-view="1" speed="500" loop="true" css-mode="true">
        <swiper-slide>
            <div class="slide-wrap">
                <div class="slide-info">
                    <div class="heading-headline-1">Lessons and insights</div>
                    <div class="text-primary heading-headline-1">from 8 years</div>
                    <div class="text-neutral-gray body-regular-2 mt-16">Where to grow your business as a photographer: site or social media?</div>
                    <div class="mt-32 register-btn">Register</div>
                </div>
                <div class="slide-img">
                    <img src="@/assets/images/banner.svg" alt="Banner Image" width="391"/>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
    </swiper-container>
    <div class="clients-contanier">
        <div class="heading-headline-2">Our Clients</div>
        <div class="body-regular-2 text-neutral-gray mt-8">We have been working with some Fortune 500+ clients</div>
        <div class="clients-list mt-16">
            <div v-for="num in 6" :key="num">
                <img :src="getImg('client'+(num+1))">
            </div>
        </div>
    </div>
    <div class="audience-contanier">
        <div class="heading-headline-2">Manage your entire community</div>
        <div class="heading-headline-2">in a single system</div>
        <div class="body-regular-2 text-neutral-gray mt-8">Who is Nextcent suitable for?</div>
        <div class="audience-list mt-16">
            <div class="audience-item" v-for="audience in audienceList" :key="audience.id">
                <img :src="getImg('audience'+audience.id)" alt="">
                <div class="heading-headline-3 audience-title">{{ audience.title }}</div>
                <div class="body-regular-3 text-neutral-gray audience-desc">{{ audience.desc }}</div>
            </div>
        </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { register } from 'swiper/element/bundle';
register();

const getImg = (item) => {
  return new URL(`/src/assets/images/icon-${item}.svg`, import.meta.url).href
}

const audienceList = [
    {
        id: 1,
        title: "Membership Organisations",
        desc: "Our membership management software provides full automation of membership renewals and payments"
    },
    {
        id: 2,
        title: "National Associations",
        desc: "Our membership management software provides full automation of membership renewals and payments"
    },
    {
        id: 3,
        title: "Clubs And Groups",
        desc: "Our membership management software provides full automation of membership renewals and payments"
    },
]
</script>

<style scoped>
.swiper-container {
    width: 100%;
    height: 599px;
    --swiper-pagination-color: var(--color-primary);
    --swiper-pagination-bullet-inactive-color: rgba(76, 175, 79, .3);
}

.slide-wrap {
    padding: 96px 144px;
    display: flex;
    justify-content: space-between;
    gap: 104px;
    align-items: center;
}
 
 .register-btn {
    background-color: var(--color-primary);
    width: 128px;
    height: 52px;
    border-radius: 4px;
    text-align: center;
    line-height: 52px;
    color: white;
    cursor: pointer;
 }

 .clients-contanier {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 144px;
    background-color: white;
 }

 .clients-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 98px;
    width: 100%;
 }

 .audience-contanier { 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 144px;
    background-color: white;
 }

 .audience-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* height: 280px; */
    gap: 127.5px;
    padding: 10px 144px;
 }

 .audience-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px 32px;
    width: 299px;
    height: 260px;
    box-shadow: 0px 2px 4px rgba(171, 190, 209, .2);
 }

 .audience-item img {
    width: 65px;
    height: 56px;
 }

 .audience-title {
    text-align: center;
 }

 .audience-desc {
    text-align: center;
 }
</style>
  