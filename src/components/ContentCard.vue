<template>
    <div class="text-light content-card">
        <img :src="img" alt="" class="w-100"/>
        <div :class="`clip ${ category ? 'theme-col': 'bg-dark'} w-100 py-3 px-3 d-flex justify-content-between`">
            <div :class="`title ${ category ? 'col' : 'col-8'}`">
                <span>{{ category ? 'Category' : 'Creator' }}</span>
                <h6 class="mb-1">{{ title }}<verified-badge v-if="!category" /></h6>
            </div>
            <div class="value col-4" v-if="value !== 0">
                <span>Value</span>
                <h6 class="mb-1"><font-awesome-icon icon="fa-brands fa-ethereum" />{{ value }}</h6>
            </div>
        </div>
      </div>
</template>



<script lang="ts">
import { defineComponent } from 'vue'
import VerifiedBadge from './VerifiedBadge.vue'

export default defineComponent({
    props: {
        title: {type: String,
                default: 'No Name'
        },
        value: { type: Number,
                default: 0
        },
        category: {type: Boolean,
                default: false 
        },
        img: {type: String,
              default: "../assets/images/Grandpa-Apes-NFT(1)-1.png"
        }
    },
    components: {
        VerifiedBadge
    }
    // setup() {
        
    // },
})
</script>

<style lang="scss" scoped>
.content-card {
    width: 240px;
    position: relative;
    margin: 0;
    height: 240px;
    margin-bottom: 75px;

    img{
      height: 100%;
      object-fit: cover;
    }

    .clip {
    position: absolute;
    bottom: -21.4%;
    clip-path: polygon(93% 0%, 100% 23%, 100% 100%, 0% 100%, 0 0);
    display: flex;
    align-items: center;
    height: 71px;

      &.theme-col{
        background: $color-primary;
        color: #000;

        h6{
          text-decoration: underline;
        }
      }

      h6{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 1em;
      }

      span{
        font-family: $ff-alt;
        font-size: 0.8em;
      }
    }

  }
</style>
