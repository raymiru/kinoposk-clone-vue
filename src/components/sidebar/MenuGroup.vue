<template>
    <div class="menu-group-block">
        <MenuGroupHeader :dropdown="dropdown" :header="header"/>
        <Flex class="menu-group-items">
            <Flex v-for="(item, index) in items">
                <MenuGroupItem :dropdown="dropdown" v-if="show"  :key="item.label" :label="item.label" :to="item.to"/>
                <MenuGroupItem :dropdown="dropdown" v-else-if="index < 4" :key="item.label" :label="item.label" :to="item.to"></MenuGroupItem>
            </Flex>
        </Flex>
        <button :class="{'theme-dark': dark || dropdown, 'theme-light': !dark && !dropdown}"
                class="show-button" v-if="!show && !less" @click="show = true"
                >Показать еще {{count}}</button>
        <button :class="{'theme-dark': dark || dropdown, 'theme-light': !dark && !dropdown}"
                class="show-button" v-if="show && !less" @click="show = false">Свернуть</button>
    </div>
</template>

<script>
    import MenuGroupHeader from "./MenuGroupHeader";
    import MenuGroupItem from "./MenuGroupItem";
    export default {
        name: "MenuGroup",
        components: {MenuGroupItem, MenuGroupHeader},
        props: {
            header: String,
            items: Array,
            dropdown: Boolean
        },
        data() {
            return {
                show: false,
            }
        },
        computed: {
            dark() {
                return this.$store.getters.getDark
            },

            less() {
                return this.items.length <= 4;
            },
            count() {
                return this.items.length - 4
            }
        }
    }
</script>

<style scoped>
    .menu-group-block {
        display: block;
        flex-direction: column;
        margin-bottom: 18px;
    }

    .menu-group-items {
        display: inherit;
        flex-direction: column;
    }


    .show-button {
        cursor: pointer;
        font-family: inherit;
        font-weight: 300;

        border: none;
        background-color: transparent;
        font-size: 14px;
        outline: none;
    }

    .theme-light {
        color: rgba(31,31,31,0.4);
    }

    .theme-dark {
        color: #A8A8A9
    }
</style>
