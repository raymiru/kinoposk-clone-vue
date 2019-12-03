<template>
    <Block class="wrapper"
           :class="[breakpoint]"
           :style="{backgroundColor: `var(--${bgColor})`, maxWidth, paddingLeft: padding, paddingRight: padding}"
    >
        <slot></slot>
    </Block>
</template>

<script>
    export default {
        name: "Wrapper",
        props: {
            maxWidth: String,
            padding: String,
            bgColor: String
        },
        computed: {
            breakpoint() {
                return this.$store.state.breakpoint
            }
        }
    }
</script>

<style>
    .wrapper {
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
    }
</style>
