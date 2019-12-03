<template>
<Flex class="animation-container">
    <span class="animation-wrapper">
        <span class="animation-item"></span>
    </span>
</Flex>
</template>

<script>
    export default {
        name: "FeatureNavigationItemAnimation"
    }
</script>

<style scoped>
    @keyframes animation-pseudo-item-first {
        0% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
            opacity: 0.7;
            width: 45px;
        }

        50% {
            transform: translate3d(0, -8px, 0) scale(1.1) rotate(15deg);
            opacity: 0.5;
            width: 50px;
            background-color: #bc71c7;
        }


        100% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
            opacity: 0.7;
            width: 45px;
        }
    }

    @keyframes animation-pseudo-item-second {
        0% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
            opacity: 0.5;
            width: 35px;
        }

        50% {
            transform: translate3d(0, -8px, 24px) scale(1.1) rotate(15deg);
            opacity: 0.2;
            width: 55px;
            background-color: #bfffaf;
        }


        100% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
            opacity: 0.5;
            width: 45px;
        }
    }

    @keyframes animation-item {
        0% {
            transform: rotate(3deg) scale(1) rotate(20deg);
            left: 10px;
        }
        100% {
            transform: rotate(-15deg) scale(1.2) rotate(-20deg);
            left: 20px;
        }
    }

    .animation-container {

        overflow: hidden;
        display: flex;
        position: absolute;
        width: 152px;
        height: 100%;
    }

    .animation-wrapper {
        transform: translateZ(0);
        display: block;
        height: 100%;
        width: 100%;
        filter: blur(12px);
    }

    .animation-item {
        animation: animation-item 9s ease-in-out alternate;
        animation-iteration-count: infinite;
        position: absolute;
        height: 100%;
        width: 100%;
    }

    .animation-item::before {
        animation: animation-pseudo-item-first 12s ease-in-out;
        animation-iteration-count: infinite;
        position: absolute;
        content: '';
        background-color: #69f2ff;
        width: 50px;
        height: 24px;
        left: 25px;
        bottom: 0;
    }

    .animation-item::after {
        animation: animation-pseudo-item-second 12s ease-in-out;
        animation-iteration-count: infinite;
        position: absolute;
        content: '';
        background-color: #cda2a1;
        width: 50px;
        height: 24px;
        bottom: 20px;
        right: 45px;
    }

    .animation-item::after, .animation-item::before {

    }
</style>
