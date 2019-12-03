<template>
    <Flex tag="section" :mw="`${sectionWidth}px`" class="today-in-cinema-container">
        <Flex col class="today-in-cinema-inner">
            <Flex class="title-row">
                <SectionTitle :mobile="mobile">Сегодня в кино</SectionTitle>
                <Flex class="afisha-link">Все фильмы</Flex>
            </Flex>
            <Carousel :mobile="mobile" :section-width="sectionWidth" :slide-height="slideHeight" :slide-width="slideWidth" :slides-length="films.length" >
                <CinemaCard :mobile="mobile" :width="slideWidth" :height="slideHeight"  slot="slide" v-for="film in films" :key="film.title"  :title="film.title" :src="film.src" :info="film.info" :rating="film.rating"/>
            </Carousel>
        </Flex>
    </Flex>
</template>

<script>

    import Carousel from "./vidgets/Carousel";
    import CinemaCard from "./cards/CinemaCard";
    import SectionTitle from "./SectionTitle";
    import CarouselButton from "./buttons/CarouselButton";

    export default {
        name: "TodayInCinema",
        components: {
            CarouselButton,
            CinemaCard,
            SectionTitle,
            Carousel
        },
        props: {
            sectionWidth: Number,
            windowWidth: Number,
            dark: Boolean
        },
        data() {
            return {
                lastItemHover: false
            }
        },
        computed: {
            slideWidth() {
                if (this.windowWidth <= 480) {
                    return 85
                }
                else if (this.windowWidth <= 720) {
                    return  120
                }
                return 144
            },
            slideHeight() {
                if (this.windowWidth <= 480) {
                    return 129
                }
                else if (this.windowWidth <= 720) {
                    return 172
                }
                return 215
            },
            mobile() {
                return this.windowWidth <= 480;

            },
            films() {
                return this.$store.getters.getFilms
            }
        },

    }
</script>

<style scoped>
    .today-in-cinema-container {
        margin: 42px 0 30px 0;
    }

    .today-in-cinema-inner {
    }

    .title-row {
        color: var(--primary-text-color);
        display: flex;
        flex-direction: row;
        align-items: baseline;

    }

    .afisha-link {
        margin-left: auto;
        font-size: 14px;
        opacity: 0.4;
    }

    .last-card {
        display: flex;
        position: relative;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
    .info {
        width: 100%;
        position: absolute;

        display: block;
        font-size: 13px;
        font-weight: 300;
        line-height: 14px;
        color: var(--primary-text-color);
        opacity: 0.4;
    }

    .info-hover {
        transition: opacity;
        transition-duration: 0.5s;
        opacity: 0.8;
    }

</style>
