<template>
    <div class="footer px-3 px-md-5 py-3">
        <div class="content d-md-flex gap-10">
            <div class="signup px-xl-3">
                <div class="imgbox">
                    <img :src="images.logo" alt="">
                </div>
                <p>Be the first to know about the latest updates in the market</p>
                <div class="d-flex">
                    <input type="text" class="form-control" placeholder="Your e-mail here">
                    <button class="btn">Sign Up</button>
                </div>
            </div>
            <div class="links row px-3 px-xl-3 gap-20">
            <ul class="mx-0 px-0 col-auto">
                <h6>Solutions</h6>
                <li>How it Works</li>
                <li>NFT Market</li>
                <li>Token</li>
                <li>Discover</li>
            </ul>
            <ul class="mx-0 px-0 col-auto">
                <h6>Company</h6>
                <li>About</li>
                <li>Careers</li>
                <li>Ventures</li>
                <li>Grant</li>
            </ul>
            <ul class="mx-0 px-0 col-auto">
                <h6>Resources</h6>
                <li>Partner</li>
                <li>Taxes</li>
                <li>Platform Status</li>
                <li>Docs</li>
            </ul>
            <ul class="mx-0 px-0 col-auto">
                <h6>Quick Links</h6>
                <li>FAQ</li>
                <li>Security</li>
                <li>Privacy Policy</li>
                <li>Help</li>
            </ul>
            </div>
        </div>
        <div class="dev pt-3 d-flex justify-content-between flex-wrap">
            <p class="text-center">©2022 MaywedaDev & _gemini. All Rights Reserved</p>
            <ul class="socials d-flex gap-10 ml-auto">
                <li class="rounded-circle d-flex justify-content-center align-items-center"><a href="#"><font-awesome-icon icon="fa-brands fa-discord" /></a></li>
                <li class="rounded-circle d-flex justify-content-center align-items-center"><a href="#"><font-awesome-icon icon="fa-brands fa-instagram" /></a></li>
                <li class="rounded-circle d-flex justify-content-center align-items-center"><a href="#"><font-awesome-icon icon="fa-brands fa-twitter" /></a></li>
                <li class="rounded-circle d-flex justify-content-center align-items-center"><a href="#"><font-awesome-icon icon="fa-brands fa-youtube" /></a></li>
                <li class="rounded-circle d-flex justify-content-center align-items-center"><a href="#"><font-awesome-icon icon="fa-regular fa-envelope" /></a></li>
            </ul>
        </div>    
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import * as images from '../assets/images/images'

export default defineComponent({
    setup() {
        return{
            images
        }
    },
})
</script>


<style lang="scss" scoped>

.footer{
    background: $color-primary;

    .signup{

        *{
            margin-bottom: 20px;
        }

        .imgbox{
            height: 36px;
            width: 36px;
            border-radius: 5px;
            position: relative;

            img{
            width: 150%;
            object-fit: cover;
            object-position: 25% 25%;
            transform: translate(-10px, -6px);
            }

            &:before{
                content: "NftOcean";
                position: absolute;
                font-size: 0.6em;
                bottom: -12px;
                font-weight: bold;
            }
        }
    }

    .dev{
        position: relative;

        &::before{
            position: absolute;
            content: '';
            top: 0;
            width: 100%;
            height: 1px;
            background: #000;
        }

        li{
            width: 2em;
            height: 2em;
            background: lighten($color: $color-primary, $amount: 7);
            color: #000;
            font-size: 1.2em;

            &:hover{
                background: darken($color: $color-primary, $amount: 7);
            }

            a{
                color: currentColor;
            }
        }
    }

    h6{
        font-weight: bold;
    }
    li, p{
        font-size: 0.9em;
    }

    input{
        max-width: 250px;
        margin-right: 10px;
    }

    button{
        background: lighten($color: $color-primary, $amount: 7);
        white-space: nowrap;
        &:hover{
            background: darken($color: $color-primary, $amount: 7);
        }
    }

    .gap-10{
        gap: 10px;
    }

    .gap-20{
        gap: 20px
    }

    @media screen and (max-width: 768px){
        .links{
            flex-wrap: wrap;

            ul{
                min-width: calc(50% - 20px);
            }
        }

        .socials{
            margin-left: auto;
            margin-right: auto;
            padding-left: 0;
        }
    }
}

</style>