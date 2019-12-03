<template>
<Flex row  class="dark-mode-toggle">
    <button @click="themeToggle" :class="{'toggle-button': !mobile, 'toggle-button-mobile': mobile}">
        <svg :class="{'theme--dark': dark_theme, 'theme--light': !dark_theme, 'toggle-button-icon': !mobile, 'toggle-button-icon-mobile': mobile}"
             width="24" height="24" viewBox="2 2 16 16"><g><path fill-rule="evenodd" d="M8.614 2.134a8.001 8.001 0 001.388 15.879 8.003 8.003 0 007.884-6.635 6.947 6.947 0 01-2.884.62 7.004 7.004 0 01-6.388-9.864zM6.017 5.529a5.989 5.989 0 00-2.015 4.484c0 3.311 2.69 6 6 6a5.99 5.99 0 004.495-2.028 9.006 9.006 0 01-8.48-8.456z" clip-rule="evenodd"></path></g></svg>
    </button>
</Flex>
</template>

<script>

    export default {
        name: "DarkModeToggle",
        data() {
            return {
                dark_theme: false
            }
        },
        props: {
            windowWidth: Number
        },
        methods: {
            themeToggle() {
                this.dark_theme = !this.dark_theme;
                this.$store.commit('themeToggle', this.dark_theme)
            }
        },
        computed:{
            mobile() {
                return this.windowWidth < 415
            }
        }
    }
</script>

<style scoped>
    .toggle-button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .toggle-button-mobile {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .toggle-button-icon.theme--dark:hover, .toggle-button-icon.theme--light:hover {
        fill: #FF6600;
    }

    .toggle-button-icon.theme--dark {
        fill: #FF6600;
    }

    .toggle-button-icon.theme--light {
        fill: white;
    }

    .toggle-button-icon-mobile.theme--dark {
        fill: #FF6600;
    }

    .toggle-button-icon-mobile.theme--light {
        fill: white;
    }


</style>
