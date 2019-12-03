<template>
    <div class="sections-container">
        <TodayInCinema :dark="dark" :window-width="windowWidth" :section-width="sectionWidth" />
        <CinemaWeekReview :dark="dark" :window-width="windowWidth" :section-width="sectionWidth"/>
    </div>
</template>

<script>
    import TodayInCinema from "./TodayInCinema";
    import CinemaWeekReview from "./CinemaWeekReview";
    export default {
        name: "Sections",
        components: {CinemaWeekReview, TodayInCinema},
        data() {
            return {
                windowWidth: window.innerWidth,
                htmlWidth: document.querySelector('html').clientWidth,
            }
        },
        computed: {
            sectionWidth() {
                if (this.windowWidth >= 1280 ) {
                    return 940
                }
                else if (this.windowWidth > 1024 && this.windowWidth < 1280) {
                    return this.windowWidth - 101 -(this.windowWidth - this.htmlWidth)
                }
                else if (this.windowWidth > 720 && this.windowWidth <= 1024) {
                    return this.windowWidth -81 -(this.windowWidth - this.htmlWidth)
                }
                else if (this.windowWidth > 414 && this.windowWidth <= 720) {
                    return this.windowWidth -61 -(this.windowWidth - this.htmlWidth)
                }
                return this.windowWidth - 41 - (this.windowWidth - this.htmlWidth)
            },
            dark() {
                return this.$store.getters.getThemeDark
            }
        },

        mounted() {
            window.addEventListener("resize", () => {
                this.windowWidth = window.innerWidth;
                this.htmlWidth = document.querySelector('html').clientWidth;
            })
        }
    }
</script>

<style scoped>

    .sections-container {
        display: flex;
        flex-direction: column;
    }

</style>
