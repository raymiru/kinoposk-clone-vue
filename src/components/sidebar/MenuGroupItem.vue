<template>
    <div class="menu-group-item">
        <router-link class="menu-group-item-link" :class="{'theme-dark': dark || dropdown, 'theme-light': !dark && !dropdown}" :to="to">{{label}}</router-link>
    </div>
</template>

<script>
    export default {
        name: "MenuGroupItem",
        props: {
            label: String,
            to: String,
            dropdown: Boolean
        },
        computed: {
            dark() {
                return this.$store.getters.getThemeDark
            }
        }
    }
</script>

<style scoped>
    .menu-group-item {
        width: 100%;
        margin-bottom: 10px;
    }

    .menu-group-item-link {
        display: inline-flex;
        text-decoration: none;
        font-weight: 500;

    }

    .menu-group-item-link:hover {
        color: #FF6600;
    }

    .theme-dark {
        color: white;
    }

    .theme-light {
        color: rgba(31,31,31,0.9);
    }
</style>
