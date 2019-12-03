<template>
    <Flex  class="carousel-container">
        <Flex v-if="!mobile" :mh="`${slideHeight}px`" ai="center" class="carousel-buttons" >
            <CarouselButton style="left: -20px"  v-if="!blockLeft && !mobile" :button-top="buttonTop" side="left"  @click.native="left" class="left-button" :text="'left'"/>
            <CarouselButton style="right: -20px" v-if="!blockRight && !mobile" :button-top="buttonTop" side="right"  @click.native="right" class="right-button" :text="'right'"/>
        </Flex>
        <Flex class="slides-container" :width="`${sectionWidth + 20}px`">
            <div ref="slider" class="slides-inner">
                <slot  name="slide"/>
                <slot  name="lastItem"></slot>
            </div>
        </Flex>
    </Flex>
</template>

<script>


    import CarouselButton from "../buttons/CarouselButton";
    import FilmCard from "../cards/CinemaCard";

    export default {
        name: "Carousel",
        components: {FilmCard, CarouselButton},
        data() {
            return {
                currentOffset: 0,
            }
        },

        props: {
            sectionWidth: Number,
            buttonTop: String,
            slideWidth: Number,
            slideHeight: Number,
            slidesLength: Number,
            last: Number,
            mobile: Boolean
        },

        computed: {

            fullSlideWidth() {
              return this.slideWidth + 20
            },

            slideOffset() {
                let width = this.sectionWidth - 20;
                let visible = ~~(width / this.fullSlideWidth);
                return visible * this.fullSlideWidth

            },

            maxOffset() {
                return (this.slidesLength + this.last) * this.fullSlideWidth
            },

            blockRight() {
                return this.slideOffset + this.currentOffset >= this.maxOffset;
            },

            blockLeft() {
                return this.currentOffset === 0
            }
        },
        methods: {
            right() {
                this.currentOffset = this.currentOffset + this.slideOffset;
                // this.$refs.slider.classList.remove('carousel-animation--left');
                // this.$refs.slider.classList.add('carousel-animation--right');
                this.$refs.slider.style = `left: -${this.currentOffset}px`;
                this.lb = true
                this.rb = false

            },
            left() {
                this.currentOffset = this.currentOffset - this.slideOffset;
                // this.$refs.slider.classList.remove('carousel-animation--right');
                // this.$refs.slider.classList.add('carousel-animation--left');
                this.$refs.slider.style = `left: -${this.currentOffset}px`
                this.lb = false
                this.rb = true
            }
        }
    }
</script>

<style scoped>

    .carousel-container {
        position: relative;
        margin-top: 20px;
        display: block;
        width: 100%;
        height: 100%;
    }



    .left-button {
        left: -10px;
    }

    .right-button {
        right: -10px;
    }

    .slides-container {
        margin-left: -10px;
        padding-left: 10px;


        position: relative;
        width: 100%;
        box-sizing: border-box;
        overflow-x: scroll;
        scroll-behavior: smooth;
        overflow-x: -moz-hidden-unscrollable;
    }


    .slides-container::-webkit-scrollbar {
        width: 0!important;
        height: 0!important;
        display: none!important;
        background: transparent!important;
    }

    .slides-inner {
        left: 0;
        transition: left;
        transition-duration: 0.5s;
        position: relative;
        display: flex;
        flex-direction: row;

    }

    .slides-inner:last-child {

    }

</style>
