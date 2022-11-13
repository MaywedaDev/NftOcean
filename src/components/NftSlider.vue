<template>
    <cards-wrapper title="Top Nfts" :more="true">
        <div class="swiper-wrapper">
            <swiper
            :modules="modules"
            :slides-per-view="1.5"
            :space-between="20"
            :loop="true"
            :centeredSlides="true"
            navigation
            :breakpoints="{
                '480': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                '640': {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                },
                '768': {
                    slidesPerView: 2.8,
                    spaceBetween: 50,
                },
                '900': {
                    slidesPerView: 3.2,
                    spaceBetween: 60,
                },
                '1024': {
                    slidesPerView: 3.5,
                    spaceBetween: 70,
                },
                '1200': {
                    slidesPerView: 3.9,
                    spaceBetween: 80,
                }
            }"
            :autoplay="{delay:3500, disableOnInteraction: false}"
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            >
                <swiper-slide v-for="(nft, index) in nfts" :key="index">
                    <nft-card :author="nft.author"
                    :name="nft.name"
                    :img="nft.src"
                    :price="nft.price"
                    width="240px"
                    />
                </swiper-slide> 
            </swiper> 
        </div>
    </cards-wrapper>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import CardsWrapper from '@/components/CardsWrapper.vue';
import NftCard from '@/components/NftCard.vue';
import nfts from '@/data/nfts'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, A11y, Autoplay } from 'swiper'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export default defineComponent({
   components: {
        CardsWrapper,
        NftCard,
        Swiper,
        SwiperSlide
    },
    setup() {
        onMounted(() => console.log("Mounted"))

        

        const onSwiper = (swiper: any) => {
            console.log(swiper.width);
        };
        
        return{
            onSwiper, 
            modules: [Navigation, Pagination, A11y, Autoplay],
            nfts
        }
    },
})
</script>

<style lang="scss" scoped>

.swiper-wrapper{
    min-height: 315px;
    padding: 15px 0;
    font-size: 0.8em;
}
</style>
