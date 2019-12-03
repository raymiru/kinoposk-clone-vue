<template>
    <div :style="{top: `${buttonTop}`}" class="carousel-button" :class="side">
        <span v-if="side==='left'" class="button-inner left"></span>
        <span v-if="side==='right'" class="button-inner right"></span>
        <span v-if="side==='slide'" class="button-inner slide"></span>
    </div>
</template>

<script>
    export default {
        name: "CarouselButton",
        props: {
            text: String,
            side: String,
            buttonTop: String
        },
        methods: {

        }
    }
</script>

<style scoped>
    .button-inner {

        z-index: 4;
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        padding: 0;;

    }

    .button-inner:before {
        position: relative;
        z-index: 4;
        display: block;
        content: '';
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-shadow: 0 4px 6px 0 rgba(0,0,0,0.05),0 1px 0 1px rgba(0,0,0,0.05),0 0 0 1px rgba(0,0,0,0.05);

    }

    .button-inner.left:before {
        transition: ease-in-out;
        transition-duration: 0.35s;
        transform: scaleX(-1);
        background: white url("data:image/svg+xml,%3Csvg width='8px' height='14px' viewBox='0 0 8 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3Cdefs%3E%3C/defs%3E %3Cg id='current' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='ui' transform='translate(-633.000000, -2143.000000)' fill='%23FFFFFF'%3E %3Cg id='arrow' transform='translate(612.000000, 2126.000000)'%3E %3Cg transform='translate(15.000000, 15.000000)'%3E %3Cpolygon transform='translate(10.000000, 9.000000) scale(-1, 1) translate(-10.000000, -9.000000) ' points='12.72 2 6 8.99936126 12.7193846 16 14 14.6707729 8.53661538 8.99936126 14 3.32858837' fill='%23666'%3E%3C/polygon%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E") no-repeat center;
    }

    .button-inner.right:before {
        transition: ease-in-out;
        transition-duration: 0.35s;
        background: white url("data:image/svg+xml,%3Csvg width='8px' height='14px' viewBox='0 0 8 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3Cdefs%3E%3C/defs%3E %3Cg id='current' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='ui' transform='translate(-633.000000, -2143.000000)' fill='%23FFFFFF'%3E %3Cg id='arrow' transform='translate(612.000000, 2126.000000)'%3E %3Cg transform='translate(15.000000, 15.000000)'%3E %3Cpolygon transform='translate(10.000000, 9.000000) scale(-1, 1) translate(-10.000000, -9.000000) ' points='12.72 2 6 8.99936126 12.7193846 16 14 14.6707729 8.53661538 8.99936126 14 3.32858837' fill='%23666'%3E%3C/polygon%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E") no-repeat center;
    }

    .button-inner.slide:before {
        background: white url("data:image/svg+xml,%3Csvg width='8px' height='14px' viewBox='0 0 8 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3Cdefs%3E%3C/defs%3E %3Cg id='current' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='ui' transform='translate(-633.000000, -2143.000000)' fill='%23FFFFFF'%3E %3Cg id='arrow' transform='translate(612.000000, 2126.000000)'%3E %3Cg transform='translate(15.000000, 15.000000)'%3E %3Cpolygon transform='translate(10.000000, 9.000000) scale(-1, 1) translate(-10.000000, -9.000000) ' points='12.72 2 6 8.99936126 12.7193846 16 14 14.6707729 8.53661538 8.99936126 14 3.32858837' fill='%23666'%3E%3C/polygon%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E") no-repeat center;
    }

    .button-inner:hover:before {
        background-image: url("data:image/svg+xml,%3Csvg width='8px' height='14px' viewBox='0 0 8 14' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3Cdefs%3E%3C/defs%3E %3Cg id='current' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='ui' transform='translate(-633.000000, -2143.000000)' fill='%23FFFFFF'%3E %3Cg id='arrow' transform='translate(612.000000, 2126.000000)'%3E %3Cg transform='translate(15.000000, 15.000000)'%3E %3Cpolygon transform='translate(10.000000, 9.000000) scale(-1, 1) translate(-10.000000, -9.000000) ' points='12.72 2 6 8.99936126 12.7193846 16 14 14.6707729 8.53661538 8.99936126 14 3.32858837' fill='%23000'%3E%3C/polygon%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/g%3E %3C/svg%3E");
    }



    .carousel-button {
        transform: translateX(0);
        transition: ease;
        transition-duration: 0.3s;
        cursor: pointer;
        z-index: 1;
        position: absolute;
        width: 44px;
        height: 44px;
        border-radius: 30px;
        outline: none;
    }

    .carousel-button.slide {
        width: 50px;
        height: 50px;
    }

    .carousel-button.left:hover {
        transform: translateX(-5px);
        transition: ease;
        transition-duration: 0.3s;
    }

    .carousel-button.right:hover {
        transform: translateX(5px);
        transition: ease;
        transition-duration: 0.3s;
    }


</style>
