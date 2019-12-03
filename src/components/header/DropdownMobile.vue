<template>
    <Flex col class="dropdown-mobile">
        <Flex col class="menu-items">
            <router-link to="menu" class="main-item">Афиша</router-link>
            <router-link to="menu"  class="main-item">Фильмы</router-link>
            <router-link to="menu"  class="main-item">Медиа</router-link>
            <router-link to="menu"  class="main-item">КиноПоиск HD</router-link>
            <router-link to="menu" class="sub-item">Версия для компьютеров</router-link>
            <router-link to="menu" class="sub-item">Помощь</router-link>
        </Flex>
        <Flex @click.native="dropdownOff" style="height: 100%; background-color: rgba(0,0,0, 0.7)"></Flex>
    </Flex>
</template>

<script>
    export default {
        name: "DropdownMobile",
        methods: {
            dropdownOff() {
                this.$store.commit('changeMobileDropdownActiveState', false)
            }
        }
    }
</script>

<style scoped>
    .dropdown-mobile {
        top: 54px;
        background-color: transparent;
        position: absolute;
        width: 100%;
        height: 100vh;
    }

    .menu-items {
        padding-left: 44px;
        background-color: #242429;
    }

    .menu-items > a {
        margin-top: 8px;
        margin-bottom: 8px;
    }

    .menu-items > :nth-child(4) {
        margin-bottom: 20px;
    }

    .menu-items > :first-child {
        margin-top: 16px;
    }

    .menu-items {
        padding-bottom: 16px;
    }

    .main-item {
        color: white;
        font-size: 15px;
    }

    .sub-item {
        color: rgba(255,255,255,0.5);;
        font-size: 13px;
        font-weight: 300;
    }

</style>
