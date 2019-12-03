<template>
    <Flex col id="app"
    >
<!--        <div class="dimensions">Window. W:{{windowWidth}}</div>-->
        <component :is="layout"/>
    </Flex>
</template>

<script>

    export default {
        name: 'App',
        data() {
            return {
                windowWidth: window.innerWidth
            }
        },

        mounted() {
            window.addEventListener("resize", () => {
                this.windowWidth = window.innerWidth;
            });

            this.$store.commit('initialBreakPoint', this.breakpoint)
        },

        computed: {
            layout() {
                return this.$route.meta.layout
            },
            dark() {
                return this.$store.getters.getDark
            },
            breakpoint() {
                if (this.windowWidth > 1280) {
                    return 'desktop'
                }
                else if (this.windowWidth <= 1280 && this.windowWidth > 1024) {
                    return 'large'
                } else if (this.windowWidth <=1024 && this.windowWidth > 720) {
                    return 'medium'
                } else if (this.windowWidth <= 720 && this.windowWidth > 480) {
                    return 'small'
                }
                return 'mobile'
            }
        },



        watch: {
            breakpoint(c) {
                this.$store.commit('changeBreakPoint', c)
            }
        }
    }

</script>

<style>
    :root {

    }

    #app {
        font-size: 15px;
        font-family: "Graphik";
    }

    .dimensions {
        width: 100%;
        height: 50px;
        background-color: white;
        display: block;
    }

</style>



