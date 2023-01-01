<template>
    <nav :class="`navbar navbar-expand-md sticky-top ${ showbar ? 'show' : 'hide'} py-0`" aria-label="Offcanvas navbar large" ref="navbar">
    <div class="container-fluid px-md-5 fw-semibold">
      <a class="navbar-brand" href="#">
        <div class="imgbox">
          <img :src="images.logo" alt="">
        </div></a>
      <button class="navbar-toggler" type="button" @click="play" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-light" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel" data-bs-scroll="true" ref="sidebar">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasScrollingLabel">NftOcean</h5>
          <button type="button" class="btn-close btn-close-white" @click="back" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-md-5 links">
        <li class="nav-item mx-2 mb-auto">
          <a class="nav-link" href="#"><font-awesome-icon icon="fa-regular fa-compass" /> Discover</a>
        </li>
        <li class="nav-item mx-2 mb-auto">
          <a class="nav-link" href="#"><font-awesome-icon icon="fa-solid fa-circle-question" /> About</a>
        </li>
        <li class="nav-item mx-2 mb-auto">
          <a class="nav-link" href="#">
            <font-awesome-icon icon="fa-regular fa-calendar"/> Drops
          </a>
        </li>
        <li class="nav-item mx-2 mb-auto">
          <a class="nav-link" href="#"><font-awesome-icon icon="fa-solid fa-user" /> Contact</a>
        </li>
      </ul>
      <ul class="navbar-nav setting">
        <li class="nav-item px-2">
          <a href="#" class="nav-link"><font-awesome-icon icon="fa-solid fa-globe" /> English</a>
        </li>
        <li class="nav-item my-md-0 mt-auto">
          <button class="btn btn-outline-light w-100 text-md-dark fw-semibold border-2 border py-2 py-md-1">Connect</button>
        </li>
      </ul>
      <ul class="d-md-none d-flex py-3 mt-2 socials justify-content-around px-0">
        <li class="fs-5 rounded-circle"><font-awesome-icon icon="fa-brands fa-twitter" /></li>
        <li class="fs-5 rounded-circle"><font-awesome-icon icon="fa-regular fa-envelope" /></li>
        <li class="fs-5 rounded-circle"><font-awesome-icon icon="fa-brands fa-discord" /></li>
        <li class="fs-5 rounded-circle"><font-awesome-icon icon="fa-brands fa-youtube" /></li>
        <li class="fs-5 rounded-circle"><font-awesome-icon icon="fa-brands fa-instagram" /></li>
      </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, Ref, ref } from 'vue'
import gsap from 'gsap'
import * as images from '../assets/images/images'

export default defineComponent({
  setup() {
    const navbar = ref(null)
    const showbar = ref(true)
    const sidebar = ref(null)

    let tl = gsap.timeline({paused: true, reversed: true})
    
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

    const play = () => {
      //console.log(sidebar.value)
      tl.timeScale(1).play()
    }

    const back = () => {
      tl.timeScale(5).reverse()
    }

    const setTimeLine = () => {
      let pageWidth = window.innerWidth

      //console.log(pageWidth)

      tl.progress(0).kill()
      tl.progress(1).kill()
      if (pageWidth < 768) {
        tl = gsap.timeline({paused: true, reversed: true})
        .from('.offcanvas-body a.nav-link',{
          y: 40,
          opacity: 0,
          stagger: {
            amount: 2.5
          }
        })
        .from('.offcanvas-body li.rounded-circle', {
          y: 20,
          opacity: 0,
          stagger: {
            amount: 1.2
          }
        })
        .from(".offcanvas-body button", {
          opacity: 0
        })
      } else {
        tl = gsap.timeline({paused: true, reversed: true})
            .to('.offcanvas-body a.nav-link', {
              y: 0,
              opacity: 1
            })
      }
    }

    onMounted(() => {
        window.addEventListener('scroll', toggleBar)
        setTimeLine();

        window.addEventListener('resize', setTimeLine)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', toggleBar)
      window.removeEventListener('resize', setTimeLine)
    })

    return{
      navbar,
      showbar,
      sidebar,
      play,
      back,
      images
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

      ul{
        margin-bottom: 0 !important;

        .nav-link, .nav-item{
          @media screen and (max-width: 768px){
            &:hover{
              color: rgba(208, 208, 208, 1);
              svg{
                color: rgba(208, 208, 208, 1);
              }
            }
          }
        }

        .nav-link, button{
          font-size: 0.8em !important;

          @media screen and (max-width: 768px){
            font-size: 1em !important;
          }
        }
      }

      .offcanvas{
        background: $bg-col;
        @media screen and (max-width: 768px){
          *{
            color: $color-primary;
          }
        }
        .offcanvas-body{
          .links{
            max-height: 335px;
          }
          .socials{
            border-top: 1px solid rgba(208, 208, 208, 0.5);
            li{
              background: lighten($color: $bg-col, $amount: 2);
              width: 2em;
              height: 2em;
              display: grid;
              place-items: center;
              &:hover{
                background: $color-primary;
                svg{
                  color: #000;
                }
              }
            }
          }
          @media screen and (max-width: 768px){
            flex-direction: column;

            .setting{
              flex: 1 1 auto;
            }
            
            button{
              background: #fff;
              color: #000;
              &:hover{
                background: $color-primary;
                color: #fff;
                border: 2px solid $color-primary !important;
              }
            }

            a{
              font-size: 1.2em !important;
            }
          }
          ul:first-child{
          flex-grow: 1;
        }
        }
      }

      @media screen and (min-width: 768px){
        svg.svg-inline--fa{
          display: none;
        }
      }
    }

  .imgbox{
    height: 36px;
    width: 36px;
    border-radius: 5px;
    overflow: hidden;

    img{
      width: 150%;
      object-fit: cover;
      object-position: 25% 25%;
      transform: translate(-10px, -6px);
    }
  }

  .navbar-toggler{
    &:focus{
        outline: none;
        box-shadow: none;
    }
}

</style>