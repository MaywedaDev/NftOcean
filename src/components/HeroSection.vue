<template>
<div class="hero-section px-xl-5">
  <div class="hero px-5 my-5 w-100 d-flex flex-wrap">
    <div class="col-md-8 col-12 px-md-4 py-4 row">
        <div class="col-md-10 header"><span>Discover</span>, <span>Collect</span> and <span>Sell</span> Extraordinary <span>Artworks</span> & <span>NFT</span> Collections.</div>
      <p class="text-light col-12">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, aperiam quidem a doloremque minima culpa eligendi corrupti, tempora modi sapiente eius atque omnis odio ullam.</p>
      <button class="text-light fw-semibold"><span>Get Started</span> <font-awesome-icon icon="fa-solid fa-arrow-right-long" /></button>
      <ul class="sponsors d-flex mt-5">
        <span class="fs-5 fw-semibold" ref="sponsors">Supported by</span>
        <li class="mx-1"><img :src="images.binance" alt=""></li>
        <li class="mx-1"><img :src="images.huobi" alt=""></li>
        <li class="mx-1"><img :src="images.opensea" alt=""></li>
        <li class="mx-1"><img :src="images.cmc" alt=""></li>
      </ul>
    </div>
    <div class="col-md-4 mx-md-0 mx-auto">
      <div class="card-shadow" ref="card">
          <nft-card author="maywedaDev"
            name="Granpa Ape Nft"
            price="0.0210"
            width="280px"
            :img="images.gpa1"/> 
      </div>
    </div>
  </div>
</div>


</template>

<script lang="ts">
import { defineComponent, onMounted, ref} from 'vue';
import NftCard from './NftCard.vue';
import * as images from '@/assets/images/images';
import gsap from 'gsap'
import SplitType from 'split-type'
export default defineComponent({
  components: {
    NftCard
  },
  setup(){
    
    const card = ref(null)
    const sponsors = ref(null)


    onMounted(() => {
      //console.log(header.value)
      let headerText = new SplitType('.header', {types:"words"});
      //console.log(headerText.lines)

      const tl = gsap.timeline()
      tl.to(".header, .hero p", {
        "--cover-width": "0%",
        duration: 2.5,
        ease: "Back.easeInOut.config(2)"
        })
      .from(card.value, {
        y: 400,
        opacity: 0,
        duration: 1,
        ease: "bounce.out"
      }, '-=1')
      .to(card.value, {
        "--shadow-intensity": "2px",
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut"
      })
      .to(".sponsors span", {
        "--cover-width": "0",
        duration: 0.7
      }, '-=1.5')
      .from(".sponsors li", {
        y: 40,
        duration: 0.6,
        ease: "Back.easeInOut.config(2)",
        stagger: 0.3,
        opacity: 0
      })
      .from(".hero button",{
        opacity: 0,
        duration: 0.4
      })
      })



     



    return{
      images,
      card
    }
  }
  

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hero-section{
    overflow-y: hidden;
    .hero{
      .header{
        --cover-width: 100%;
        color: #fff;
        position: relative;
        font-size: calc(1.375em + 1.5vh);
          span{
            color: $color-primary;
            font-weight: 600;
          }
          .word{
            position: relative;

            &::after{
              content: "";
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              transform: scaleY(var(--cover-width));
              z-index: 1;
              transform-origin: 100% 0;
              z-index: 1;
              background: $bg-col;
            }   
          }
        //font-size: 2.5em;
      }

    p{
      --cover-width: 100%
      font-size: 0.9em;
      font-family: $ff-alt;

      &::after{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        transform: scaleY(var(--cover-width));
        z-index: 1;
        transform-origin: 100% 0;
        z-index: 1;
        background: $bg-col;
      }   
    }

  button{
    //border-color: $color-primary !important;
    background: transparent;
    border: none;
    width: auto;
    &:hover{
      //background: $color-primary;
      color: $color-primary !important;
    }
    span{
      position: relative;
      &::before{
        content: '';
        position: absolute;
        height: 2px;
        width: 90%;
        background-color: currentColor;
        left: 5%;
        bottom: -5px;
      }
    }
  }

  .card-shadow{
    width: max-content;
    --shadow-intensity: 5px;
    box-shadow: 0 0 var(--shadow-intensity) rgba($color-primary, 0.1),
    0 0 calc(5 * var(--shadow-intensity)) rgba($color-primary, 0.1),
    0 0 calc(10 * var(--shadow-intensity)) rgba($color-primary, 0.1),
    0 0 calc(20 * var(--shadow-intensity)) rgba($color-primary, 0.1),
    0 0 calc(40 * var(--shadow-intensity)) rgba($color-primary, 0.1);
    margin-left: auto;
    @media screen and (max-width: 768px){
      margin-left: 0;
    }
  }
  
  .sponsors{
       color: #808080 !important;
       span{
        --cover-width: 1;
        margin-right: 40px;
        position: relative;
        &:before{
          content: '';
          transform-origin: right;
          transform: scaleX(var(--cover-width));
          background: $bg-col;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        }
       }
    }
  }

  @media screen and (max-width: 768px){
   margin-bottom: 100px !important;
   padding-bottom: 100px;
  }
}

</style>
