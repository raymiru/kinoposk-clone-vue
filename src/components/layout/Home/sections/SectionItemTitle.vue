<template>
    <router-link class="title" :class="{'title-mobile': mobile, 'title-full': !mobile, 'theme-dark': dark}" to="film"><span  :class="{'title-hover': hover}">{{title}}</span></router-link>
</template>

<script>
    export default {
        name: "SectionItemTitle",
        props: {
            mobile: Boolean,
            hover: Boolean,
            title: String
        },

        computed: {
            dark() {
                return this.$store.getters.getThemeDark
            }
        }
    }
</script>

<style scoped>
    .title {
        text-decoration: none;
    }

    .title-mobile {
        margin-bottom: 3px;
        display: block;
        font-size: 13px;
        font-weight: 300;
        line-height: 15px;
        background-image: linear-gradient(90deg, #000 70%,
        transparent 95%);
        overflow-x: hidden;
        white-space: nowrap;
        text-overflow: clip;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .title-mobile.theme-dark {
        background-image: linear-gradient(90deg, white 70%, transparent 95%);
    }

    .title-full {
        display: block;
        font-size: 14px;
        color: var(--film-card-title);
        font-weight: 300;
        line-height: 18px;
    }

    .title-full.theme-dark {
        color: var(--section-item-title-dark);
    }


    .title-hover {
        transition: color;
        transition-duration: 0.3s;
        color: var(--main-hover-color);
    }
</style>
