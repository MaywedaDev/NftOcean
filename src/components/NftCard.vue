<template>
  <div class="bg-dark text-light nft-card">
        <img :src="img" alt="" class="w-100"/>
        <div class="clip bg-dark w-100 py-3 px-3 d-flex justify-content-between">
          <div class="name col-8">
            <p class="mb-1">{{ author }}<verified-badge /></p>
            <h6 class="mb-1">{{ name }}</h6>
          </div>
          <div class="price col-4">
            <p class="mb-1 txt-sm">Price</p>
            <h6 class="mb-1"><font-awesome-icon icon="fa-brands fa-ethereum" />{{ price }}</h6>
          </div>
        </div>
        <button @click="liked = !liked" :class="` ${liked && 'liked'} like-btn rounded-circle`"><font-awesome-icon :icon="`${ liked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`" /></button>
      </div>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';

import VerifiedBadge from './VerifiedBadge.vue'
export default defineComponent({
    props:{
        author: { type: String,
                  default: "maywedaDev"},
        name: { type: String,
                default: "...."},
        price: { type: String,
                 default: '0.0000'},
        img: { type: String,
                default: "../assets/images/Grandpa-Apes-NFT(1)-1.png"},
        width: {type: String,
                default: "200px"}
    },
    components:{
        VerifiedBadge
    },
    setup(){
        const liked = ref(false);

        return{
            liked
        }
    }
}) 
</script>

<style lang="scss" scoped>
    .nft-card {
    width: v-bind(width);
    position: relative;
    margin: 0 auto;
    height: v-bind(width);

    img{
      height: 100%;
      object-fit: cover;
    }

    .clip {
    position: absolute;
    bottom: -21.4%;
    clip-path: polygon(93% 0%, 100% 23%, 100% 100%, 0% 100%, 0 0);

      h6, p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 1em;
      }

      p{
        font-family: $ff-alt;
        font-size: 0.8em;
      }
    }

    .like-btn {
      position: absolute;
      height: 2.3em;
      width: 2.3em;
      background: #fff;
      color: grey;
      top: 20px;
      right: 20px;
      border: none;

      &.liked {
        color: palevioletred !important;
      }

      &:hover {
        color: palevioletred !important;
      }
    }
  }
</style>