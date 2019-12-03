<template>
<Flex mw="1280px" wrapper class="banner">
    <Flex row class="banner"
           :class="breakpoint"
    ></Flex>
</Flex>
</template>

<script>

    export default {
        name: "TopBanner",
        props: {
            borders: Boolean,
            maxWidth: String
        },
        computed: {
            breakpoint() {
                return this.$store.state.breakpoint
            }
        }
    }
</script>

<style scoped>

    .banner {
        cursor: pointer;
        background: #fff url('/static/img/top_banner.jpg');
        background-size: cover;
    }

    .desktop, .large {
        height: 250px;
        background-position: 50%;
    }

    .medium {
        height: 230px;
        background-position: 45%;
    }

    .small {
        height: 200px;
        background-position: 42%;

    }

    .mobile {
        height: 160px;
        background-position: 38%;

    }


</style>
