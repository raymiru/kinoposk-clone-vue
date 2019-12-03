<template>
    <Flex class="container" :bg-color="bgColor" :col="col" :row="row" :class="breakpoint">
        <slot/>
    </Flex>
</template>

<script>
    export default {
        name: "Container",
        props: {
            bgColor: String,
            col: Boolean,
            row: Boolean,
        },
        computed: {
            breakpoint() {
                return this.$store.state.breakpoint
            }
        }
    }
</script>

<style scoped>
    .container {
        height: 100%;
    }

    .container.desktop {
        margin-left: 50px;
        margin-right: 50px;
    }

    .container.large {
        margin-left: 40px;
        margin-right: 40px;
    }

    .container.medium {
        margin-left: 30px;
        margin-right: 30px;
    }

    .container.small {
        margin-left: 20px;
        margin-right: 20px;
    }

    .container.mobile  {
        margin-left: 10px;
        margin-right: 10px;
    }
</style>
