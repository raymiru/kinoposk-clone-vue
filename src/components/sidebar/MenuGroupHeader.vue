<template>
    <h3 class="menu-group-header" :class="{'theme-dark': dark || dropdown, 'theme-light': !dark && !dropdown}">{{header}}</h3>
</template>

<script>
    export default {
        name: "MenuGroupHeader",
        props: {
            header: String,
            dropdown: Boolean
        },
        computed: {
            dark() {
                return this.$store.getters.getDark
            }
        }
    }
</script>

<style scoped>
    .menu-group-header {
        font-size: 12px;

        font-weight: 500;
        letter-spacing: 1.5px;
        margin-bottom: 10px;
        text-transform: uppercase;

    }

    .theme-light {
        color: rgba(31,31,31,0.4);
    }

    .theme-dark {
        color: #A8A8A9
    }
</style>
