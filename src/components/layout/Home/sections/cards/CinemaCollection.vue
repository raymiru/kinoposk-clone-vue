<template>
    <div @mouseover="hover = true" @mouseleave="hover = false" class="cinema-collection-container" :style="{width: width+'px'}">
        <router-link class="card-poster" to="/3143" :style="{backgroundImage: `url(${src})`, width: width+'px', height:height+'px', backgroundSize: `${width}px ${height}px`}" >
        </router-link>
            <div class="card-info">
                <SectionItemTitle :mobile="mobile" :hover="hover" :title="title"/>
            </div>
    </div>
</template>

<script>
    import SectionItemTitle from "../SectionItemTitle";
    export default {
        name: "CinemaCollection",
        components: {SectionItemTitle},
        data() {
            return {
                hover: false
            }
        },
        props: {
            src: String,
            title: String,
            width: Number,
            height: Number,
            mobile: Boolean
        }
    }
</script>

<style scoped>
    .cinema-collection-container {
        cursor: pointer;
        margin-right: 20px;
    }

    .card-poster {
        display: block;
        border-radius: 5px;
        position: relative;
    }

    .card-info {
        margin-top: 6px;
    }


</style>
