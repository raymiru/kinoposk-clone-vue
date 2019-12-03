<template>
    <h3 :class="{'title-mobile': mobile, 'title': !mobile, 'theme-dark': dark, 'theme-light': !dark}"><slot/></h3>
</template>

<script>
    export default {
        name: "SectionTitle",
        props: {
            mobile: Boolean,
            dark: Boolean
        }
    }
</script>

<style scoped>
    .title {

        font-size: 24px;
        line-height: 1.15;
        font-weight: 700;
    }

    .title-mobile {
        font-size: 18px;
        font-weight: 500;
    }

    .theme-dark {
        color: var(--section-title-dark);
    }

    .theme-light {
        color: var(--section-title-light)
    }
</style>
