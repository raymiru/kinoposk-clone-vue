<template>
    <div @mouseover="hover = true" @mouseleave="hover = false" class="film-card-container" :style="{width: width+'px'}">
        <router-link class="card-poster" to="/film/4423" :style="{backgroundImage: `url(${src})`, width: width+'px', height:height+'px', backgroundSize: `${width}px ${height}px`}">
            <div class="rating">{{rating}}</div>
        </router-link>
        <div class="card-info">
            <SectionItemTitle :mobile="mobile" :hover="hover" :title="title"/>
            <span :class="{'info-theme-dark': dark}" class="info">{{info}}</span>
        </div>
    </div>
</template>

<script>
    import SectionItemTitle from "../SectionItemTitle";
    export default {
        name: "CinemaCard",
        components: {SectionItemTitle},
        props: {
            title: String,
            src: String,
            info: String,
            rating: Number,
            width: Number,
            height: Number,
            mobile: Boolean

        },
        data() {
            return {
                hover: false
            }
        },
        computed: {
            dark() {
                return this.$store.getters.getThemeDark
            }
        }
    }
</script>

<style scoped>
    .film-card-container {
        cursor: pointer;
        margin-right: 20px;

    }

    .card-poster {
        display: block;
        border-radius: 5px;
        position: relative;
    }
    .card-poster:before {
        transition: background-color;
        transition-duration: 0.2s;
        transition-timing-function: ease-out;
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .card-poster:hover:before {

        transition: background-color;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
        border-radius: 5px;
        content: '';
        position: absolute;
        background-color: var(--film-card-cover);
        width: 100%;
        height: 100%;
    }

    .card-info {
        margin-top: 6px;
        display: flex;
        flex-direction: column;
    }




    .info {
        background-image: linear-gradient(90deg, #000 70%, transparent 95%);
        overflow-x: hidden;
        white-space: nowrap;
        text-overflow: clip;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: inline;
        font-size: 13px;
        font-weight: 300;
        line-height: 14px;
        color: var(--primary-text-color);
        opacity: 0.5;
    }

    .info-theme-dark {
        background-image: linear-gradient(90deg, #fff 70%, transparent 95%);
        opacity: 0.7;
    }


    .rating {

        position: absolute;
        font-size: 11px;
        font-weight: 700;
        text-align: center;
        padding: 3px 0 2px;
        top: 5px;
        left: -5px;
        width: 32px;
        color: white;
        background-color: var(--rating-icon-color);
    }
</style>
