<template>
  <nav-bar />
  <home-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/NavigationBar.vue'
import HomeView from '@/views/HomeView.vue'

export default defineComponent({
  components: {
    NavBar,
    HomeView
  }
})
</script>


<style lang="scss" module>
  body{
    //background: linear-gradient(180deg, rgba(9, 9, 9, 0.96) 58.85%, #2C2C2C 100%);
    background-color: $bg-col !important;
    background-repeat: no-repeat;
    min-height: 100vh;
  }

</style>
