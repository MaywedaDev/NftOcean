<template>
  <div class="home">
    <hero-section />
    <body-section />
    <footer-section />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeroSection from '@/components/HeroSection.vue'; // @ is an alias to /src
import BodySection from '@/components/BodySection.vue';
import FooterSection from '@/components/FooterSection.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    HeroSection,
    BodySection,
    FooterSection
  },
});
</script>
