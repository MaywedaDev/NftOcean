
<template>
    <nft-slider />
    <div class="setup px-xl-5">
        <div class="px-5 my-5 text-center text-light">
            <div class="title">
                <h4><span>Create</span> and <span>Sell</span> Your own <span>Nfts</span></h4>
                </div>
            <div class="cards d-flex flex-wrap justify-content-between">
                <div class="imgbox my-4 mx-auto"><img :src='images.art' alt=""></div>
                <div class="imgbox my-4 mx-auto"><img :src='images.setup' alt=""></div>
                <div class="imgbox my-4 mx-auto"><img :src='images.mint' alt=""></div>
            </div>
        </div>
    </div>
    <div class="creators">
        <cards-wrapper title="Top Creators" :more="false">
            <div class="d-flex flex-wrap justify-content-center justify-content-md-between gap-20 px-md-5 mx-4">
                <content-card class="mx-auto mx-lg-0" v-for="(el, index) in creators" :img="el.img" :title="el.name" :value="el.value" :key="index"></content-card>
            </div>
        </cards-wrapper>
    </div>
    <div class="categories">
        <cards-wrapper title="Categories">
            <div class="d-flex flex-wrap gap-20 justify-content-center justify-content-md-between px-md-5 mx-4">
                <content-card category title="3D Artworks" :img="images.rect119"></content-card>
                <content-card category title="Illustation Character" :img="images.rect125"></content-card>
                <content-card category title="Paint Art" :img="images.rect124"></content-card>
                <content-card category title="Photography" :img="images.rect121"></content-card>
                <content-card category title="Abstract Art" :img="images.rect122"></content-card>
                <content-card category title="Illustation Art" :img="images.rect123"></content-card>
            </div>
        </cards-wrapper>
    </div>
    <div class="community px-5 mx-xl-5">
        <div class="join px-3 px-md-5 py-5 d-flex flex-column align-items-center rounded text-light">
            <h5 class="text-center">Join our <span>community</span></h5>
            <p class="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ex accusantium nemo repudiandae esse aut</p>
            <button class="btn btn-outline-light">Join the Server <font-awesome-icon icon="fa-brands fa-discord" /></button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import CardsWrapper from './CardsWrapper.vue';
//import NftCard from './NftCard.vue';
import * as images from '@/assets/images/images';
import NftSlider from './NftSlider.vue'
import ContentCard from './ContentCard.vue';
import creators from '@/data/creators'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"


export default defineComponent({
    components: {
       CardsWrapper,
//        NftCard,
        NftSlider,
        ContentCard
    },
    setup() {
        gsap.registerPlugin(ScrollTrigger)
        onMounted(() => {
            gsap.set('.content-card, .cards .imgbox', {opacity: 0, y: 40})
            ScrollTrigger.batch(".content-card, .cards .imgbox", {
                onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.5}})
            })
        })
        
        return{
            images,
            creators
        }
    },
})
</script>

<style lang="scss" scoped>

.cards {
    .nft-card {
        margin-bottom: 75px;
        font-size: 0.8em;
        @media screen and (max-width: 576px){
            margin: 60px auto;
        }
    }

    .imgbox{
        width: 240px;


        img{
            width: 100%;
            height: auto;
        }
    }    
    
}

.gap-20{
    gap: 40px;

    @media screen and (max-width: 900px) {
        justify-content: center;
    }
}

.setup{

    h4{
        font-family: $ff-alt;
        span{
        color: $color-primary;
        }
    }
    
}

.join{
    background: linear-gradient( 135deg , #464646 20%, #1d1d1d 130%);
    margin-bottom: 50px;
    
    span{
        color: $color-primary;
    }

    p, button{
        font-size: 0.9em;
    }

    svg{
        color: #4f64b2;
    }
}


</style>
