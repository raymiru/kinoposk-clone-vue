<template>
    <Flex position="relative" class="search-mobile-close">
        <button @mouseover="hover = true" @mouseleave="hover = false" class="search-mobile-button">
            <svg  width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path :class="{hover}" d="M24.6781 20.3814L16.4781 12.1502L24.6968 4.0252C25.0343 3.6877 25.0343 3.1377 24.6968 2.8002L22.3593 0.450195C22.1968 0.287695 21.9781 0.200195 21.7468 0.200195C21.5156 0.200195 21.2968 0.293945 21.1343 0.450195L12.9531 8.5502L4.75933 0.456446C4.59683 0.293946 4.37808 0.206446 4.14683 0.206446C3.91558 0.206446 3.69683 0.300196 3.53433 0.456446L1.20308 2.80645C0.865576 3.14395 0.865576 3.69395 1.20308 4.03145L9.42183 12.1564L1.22808 20.3814C1.06558 20.5439 0.971826 20.7627 0.971826 20.9939C0.971826 21.2252 1.05933 21.4439 1.22808 21.6064L3.56558 23.9564C3.73433 24.1252 3.95308 24.2127 4.17808 24.2127C4.39683 24.2127 4.62183 24.1314 4.79058 23.9564L12.9531 15.7564L21.1218 23.9502C21.2906 24.1189 21.5093 24.2064 21.7343 24.2064C21.9531 24.2064 22.1781 24.1252 22.3468 23.9502L24.6843 21.6002C24.8468 21.4377 24.9406 21.2189 24.9406 20.9877C24.9343 20.7627 24.8406 20.5439 24.6781 20.3814Z" fill="white"/>
            </svg>

        </button>
    </Flex>
</template>

<script>
    export default {
        name: "SearchMobileClose",
        data() {
            return {
                hover: false
            }
        }
    }
</script>

<style scoped>
    .search-mobile-button {
        cursor: pointer;
        outline: none;
        background-color: transparent;
        border: none;
        align-self: center;
        height: 25px;
        width: 25px;
    }

    .hover {
        fill: var(--main-hover-color);
    }

</style>
