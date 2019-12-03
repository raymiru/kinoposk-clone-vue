<template>
    <Flex wrapper mw="1280px">
        <Flex container :breakpoint="breakpoint" >
            <Flex v-if="breakpoint === 'desktop'" class="sidebar-wrap">
                <Sidebar/>
            </Flex>
            <Flex class="sections"  col>
                <TodayInCinema :section-width="sectionWidth" :window-width="windowWidth"/>
                <CinemaWeekReview :section-width="sectionWidth" :window-width="windowWidth"/>
            </Flex>
        </Flex>
    </Flex>
</template>

<script>
    import Sidebar from "../components/sidebar/Index";
    import TodayInCinema from "../components/layout/Home/sections/TodayInCinema";
    import CinemaWeekReview from "../components/layout/Home/sections/CinemaWeekReview";
    export default {
        name: 'Home',
        components: {CinemaWeekReview, TodayInCinema, Sidebar},
        data() {
            return {
                windowWidth: window.innerWidth,
                htmlWidth: document.querySelector('html').clientWidth,
            }
        },
        computed: {
            breakpoint() {
                return this.$store.state.breakpoint
            },
            sectionWidth() {
                if (this.windowWidth >= 1280 ) {
                    return 960
                }
                else if (this.windowWidth <= 1280 && this.windowWidth > 1024) {
                    return this.windowWidth - 81 -(this.windowWidth - this.htmlWidth)
                }
                else if (this.windowWidth <=1024 && this.windowWidth > 720) {
                    return this.windowWidth -61 -(this.windowWidth - this.htmlWidth)
                }
                else if (this.windowWidth <= 720 && this.windowWidth > 480) {
                    return this.windowWidth -41 -(this.windowWidth - this.htmlWidth)
                }
                return this.windowWidth - 21 - (this.windowWidth - this.htmlWidth)
            },
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
    .container.desktop > div:first-child {
        margin-right: 40px;
    }

    .sidebar-wrap {
        height: 4000px;
        min-width: 180px;
    }

    .sidebar-sticky-container {
        padding-top: 36px;
    }
</style>
