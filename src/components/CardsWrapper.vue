<template>
    <div class="cards-wrapper">
        <div class="wrapper my-5 w-100">
            <div class="header d-flex justify-content-between my-3 px-md-5 px-3">
                <h5>{{title}}</h5>
                <button v-if="more" class="btn all fs-6">See all <font-awesome-icon icon="fa-solid fa-arrow-right-long" /></button>
            </div>
            <div class="content">
                <slot />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        title:{ type: String,
                default: 'No Title'
        },
        more:{ type: Boolean,
               default: false
        }
    },
    /*setup() {
        
    },*/
})
</script>

<style lang="scss" scoped>
    .cards-wrapper{
        .header{
         h5{
            color: #fff;
        }

        button{
            color: $color-primary;
        }
    }
    }
    

    
</style>
