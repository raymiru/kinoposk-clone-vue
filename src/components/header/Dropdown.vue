<template>
    <transition name="fade" mode="out-in">
      <Flex v-if="hover && breakpoint !== 'desktop' && breakpoint !== 'mobile'" class="dropdown" :class="breakpoint">
          <Flex col class="sidebar-wrap">

              <Sidebar :dropdown="dropdown"/>

          </Flex>
      </Flex>
    </transition>
</template>

<script>
    import Sidebar from "../sidebar/Index";

    export default {
        name: "Dropdown",
        components: {Sidebar},
        data() {
            return {
                visible: false,
                dropdown: true
            }
        },
        props: {
            hover: Boolean
        },
        computed: {
            breakpoint() {
                return this.$store.state.breakpoint
            }
        }
    }
</script>

<style scoped>

    .fade-leave-active {
        transition: opacity .3s ease;
    }

    .dropdown {
        background-color: #2a2a2a;
        z-index: 2;
        position: absolute;
        top: 0;
        height: 54px;
    }

    .dropdown.large {
        left: -30px;
        width: 210px;
    }

    .dropdown.medium, .dropdown.small {
        left: -20px;
        width: 190px;
    }



    .sidebar-wrap {
        border-top: 1px solid var(--sidebar-border-color-dark);
        z-index: 2;
        position: absolute;
        background-color: #2a2a2a;
        top: 100%;
        width: 100%;
    }
</style>

