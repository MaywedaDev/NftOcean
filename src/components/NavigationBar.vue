<template>
    <nav :class="`navbar navbar-expand-md sticky-top ${ showbar ? 'show' : 'hide'}`" aria-label="Offcanvas navbar large" ref="navbar">
    <div class="container-fluid px-md-5 fw-semibold">
      <a class="navbar-brand" href="#"><div class="imgbox"></div></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbar2Label">NftOcean</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-md-5">
        <li class="nav-item mx-2">
          <a class="nav-link" href="#">Discover</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="#">
            Blog
          </a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item px-2">
          <a href="#" class="nav-link">English</a>
        </li>
        <li class="nav-item">
          <button class="btn btn-outline-light text-dark fw-semibold border-2 border">Connect</button>
        </li>
      </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, Ref, ref } from 'vue'

export default defineComponent({
  setup() {
    const navbar = ref(null)
    const showbar = ref(true)
    
    const lastScrollTop: Ref<number> = ref(0);

    const toggleBar = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop.value){
        showbar.value = false
      } else {
        showbar.value = true
      }
      //console.log(lastScrollTop.value)
      lastScrollTop.value = scrollTop 
    }

    onMounted(() => {
        window.addEventListener('scroll', toggleBar)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', toggleBar)
    })

    return{
      navbar,
      showbar
    }
  },
})
</script>



<style lang="scss" scoped>

    nav{
      background: $color-primary;
      transition: all 0.5s ease-in-out;

      &.hide{
        top: -66px;
      }
      &.show{
        top: 0;
      }
    }

  .imgbox{
    background: white;
    height: 40px;
    width: 40px;
    border-radius: 5px;
  }

</style>