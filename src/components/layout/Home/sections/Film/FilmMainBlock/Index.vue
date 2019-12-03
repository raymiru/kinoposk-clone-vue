<template>
    <div class="FilmMainBlock-container">
        <MainBlockPoster/>
        <MainBlockFilmInfo/>
        <MainBlockCast/>
    </div>
</template>

<script>
    import MainBlockPoster from "./MainBlockPoster";
    import MainBlockFilmInfo from "./MainBlockFilmInfo";
    import MainBlockCast from "./MainBlockCast";
    export default {
        name: "FilmMainBlock",
        components: {MainBlockCast, MainBlockFilmInfo, MainBlockPoster}
    }
</script>

<style scoped>
    .FilmMainBlock-container {
        display: flex;
    }

    .FilmMainBlock-container > div {
        margin: auto;
    }
</style>
