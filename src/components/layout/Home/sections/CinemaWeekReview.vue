<template>
    <section :style="{maxWidth: `${sectionWidth}px`}" class="cinema-week-review-container">
        <div class="title-row">
            <SectionTitle :dark="dark" :mobile="mobile">Главное за неделю</SectionTitle>
        </div>
        <Carousel :mobile="mobile" :last="0" :section-width="sectionWidth" :slide-height="slideHeight" :slide-width="slideWidth" :slides-length="films.length">
            <CinemaCollection :mobile="mobile" :width="slideWidth" :height="slideHeight" slot="slide" v-for="weekReview in weekReviews" :src="weekReview.src" :title="weekReview.title" :key="weekReview.title"/>
        </Carousel>
    </section>
</template>

<script>
    import SectionTitle from "./SectionTitle";
    import CinemaCard from "./cards/CinemaCard";
    import Carousel from "./vidgets/Carousel";
    import CinemaCollection from "./cards/CinemaCollection";

    export default {
        name: "CinemaWeekReview",
        components: {CinemaCollection, SectionTitle, CinemaCard, Carousel},
        props: {
            sectionWidth: Number,
            windowWidth: Number,
            dark: Boolean
        },
        computed: {
            slideWidth() {
                if (this.windowWidth <= 480) {
                    return 135
                }
                else if (this.windowWidth <=720) {
                    return 175
                }
                return 225
            },
            slideHeight() {
                if (this.windowWidth <= 480) {
                    return 77
                }
                else if (this.windowWidth <= 720) {
                    return 100
                }
                return 123
            },
            mobile() {
                return this.windowWidth <= 480;

            },
            films() {
                return this.$store.getters.getFilms
            },
            weekReviews() {
                return this.$store.getters.getWeekReviews
            }
        }
    }
</script>

<style scoped>
    .cinema-week-review-container {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
    }

</style>
