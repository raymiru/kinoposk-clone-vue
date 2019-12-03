<template>
    <Flex tag="header" class="header">
        <Flex wrapper mw="1280px" mh="54px">

            <Flex style="position: relative" container row ai="center" v-if="!mobileSearchActive"
                  :breakpoint="breakpoint">
                <Logo :class="breakpoint"/>
                <HeaderFeatureNavigation
                        v-if="breakpoint !== 'small' && breakpoint !== 'mobile' && breakpoint !== 'medium'"
                        :class="breakpoint"/>
                <Search :class="breakpoint" :breakpoint="breakpoint"/>
                <DarkModeToggle :class="breakpoint">HHH3</DarkModeToggle>

            </Flex>
            <Flex v-else-if="mobileSearchActive" container ai="center" col>
                <Search :class="breakpoint" :breakpoint="breakpoint" mobile-search-active/>
                <Flex @click.native="changeMobileActiveState"
                      style="height: 100vh; position: absolute; width: 100%; background-color: rgba(0,0,0, 0.7); z-index: 1"></Flex>
            </Flex>
        </Flex>
        <DropdownMobile v-if="mobileDropdownActive"/>
    </Flex>
</template>

<script>
    import Logo from '../header/Logo'
    import HeaderFeatureNavigation from "../header/feature-navigation/Index";
    import Search from "../header/search/Index";
    import DarkModeToggle from "../header/DarkModeToggle";
    import SearchMobile from "../header/search/buttons/SearchMobile";
    import DropdownMobile from "../header/DropdownMobile";

    export default {
        name: "Header",
        components: {
            DropdownMobile,
            SearchMobile,
            DarkModeToggle,
            Search,
            HeaderFeatureNavigation,
            Logo
        },
        props: {
            maxWidth: String
        },
        methods: {
            changeMobileActiveState() {
                this.$store.commit('changeMobileSearchActiveState', false)
            }
        },
        computed: {
            breakpoint() {
                return this.$store.state.breakpoint
            },
            mobileSearchActive() {
                return this.$store.state.mobileSearchActive
            },
            mobileDropdownActive() {
                return this.$store.state.mobileDropdownActive
            }
        },
        watch: {
            breakpoint(c, l) {
                if (l === 'mobile') {
                    this.$store.commit('changeMobileSearchActiveState', false);
                    this.$store.commit('changeMobileDropdownActiveState', false)

                }
            }
        }
    }
</script>

<style scoped>

    .header {
        z-index: 2;
        height: 54px;
        position: sticky;
        top: 0;
        color: white;
        background-color: var(--background-header-dark);
    }

    .container.desktop, .container.large, .container.medium, .container.small > div:not(:last-child) {
        margin-right: 10px;
    }

    .logo {
        flex: 2 1 220px;

    }

    .feature-navigation {
        flex: 3 1 360px;
        min-width: 320px;
    }

    .search {
        flex: 4 1 460px;
    }


    .dark-mode-toggle {
        flex: 1 2 120px;
        justify-content: flex-end;
    }

    .dark-mode-toggle.mobile {
        flex: 0;
    }

    /*.search-mobile {*/
    /*    flex: 0;*/
    /*    margin-right: 0!important;*/
    /*}*/

    /*.dark-mode-toggle.mobile {*/
    /*    flex: 0;*/
    /*}*/
</style>
