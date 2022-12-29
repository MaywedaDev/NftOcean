<template>
    <div class="cards-wrapper" ref="wrapper">
        <div class="wrapper my-2 w-100">
            <div class="header d-flex justify-content-between my-3 px-md-5 px-3">
                <h5 class="px-4">{{title}}</h5>
                <button v-if="more" class="btn all fs-6">See all <font-awesome-icon icon="fa-solid fa-arrow-right-long" /></button>
            </div>
            <div class="content" ref="body">
                <slot />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineComponent({
    props:{
        title:{ type: String,
                default: 'No Title'
        },
        more:{ type: Boolean,
               default: false
        }
    },
    setup() {
        gsap.registerPlugin(ScrollTrigger)
        const wrapper = ref(null)
        const body = ref(null)
        onMounted(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapper.value,
                    start: "top 80%",
                    end: "top 30%"
                }
            })

            tl.from(wrapper.value, {
                y: 60,
                opacity: 0,
                ease: 'Power1.easeInOut',
                duration: 0.7
            })
            .from(body.value, {
                y: 60,
                opacity: 0,
                ease: 'Power1.easeInOut',
                duration: 0.7
            })
        })
        return {
            wrapper,
            body
        }
    },
})
</script>

<style lang="scss" scoped>
    .cards-wrapper{
        overflow-y: hidden;
        opacity: 1;
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
