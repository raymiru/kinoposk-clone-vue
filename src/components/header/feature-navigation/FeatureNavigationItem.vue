<template>
    <Flex position="relative" class="item-container">
        <FeatureNavigationItemAnimation v-if="animation"></FeatureNavigationItemAnimation>
        <router-link to="feature"
                     @mouseover.native="addHover"
                     @mouseleave.native="removeHover"
                     class="item-link"
                     href="#">
            <div :class="type" class="icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path ref="path" class="icon-svg-path" fill-rule="evenodd" clip-rule="evenodd" :d="icon"/>
                </svg>
            </div>
            <slot/>
        </router-link>
    </Flex>
</template>

<script>
    import FeatureNavigationItemAnimation from "./FeatureNavigationItemAnimation";

    export default {
        name: "FeatureNavigationItem",
        components: {FeatureNavigationItemAnimation},
        data() {
            return {
                hover: false
            }
        },
        props: {
            icon: String,
            animation: Boolean,
            type: String
        },
        methods: {
            addHover() {
                this.$refs.path.classList.add('hover')
            },
            removeHover() {
                this.$refs.path.classList.remove('hover')
            }
        }
    }
</script>

<style scoped>

    .item-link {
        position: relative;
        align-items: center;
        display: flex;
        height: 100%;
        color: white;
        transition: ease-out;
        transition-duration: 0.2s;
    }


    .item-link:hover {
        color: #FF6600;
        transition: ease-in;
        transition-duration: 0.3s;
    }


    .icon {
        width: 20px;
        height: 20px;
        margin-right: 7px;
    }

    .icon-svg-path {
        fill: white;
        transition: ease-out;
        transition-duration: 0.2s;
    }

    .hover {
        fill: #FF6600;
        transition: ease-in;
        transition-duration: 0.3s;
    }

    .ticket {
        width: 20px;
        height: 20px;
    }

    .play {
        width: 14px;
        height: 15px;
    }
</style>
