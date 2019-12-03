<template>
    <Flex class="feature-navigation">
        <FeatureNavigationItem :icon="icon_ticket" type="ticket">Билеты в кино</FeatureNavigationItem>
        <FeatureNavigationItem :icon="icon_play" type="play" animation>Онлайн кинотеатр</FeatureNavigationItem>
    </Flex>
</template>

<script>
    import FeatureNavigationItem from "./FeatureNavigationItem";

    export default {
        name: "HeaderFeatureNavigation",
        data() {
            return {
                icon_ticket: 'M17.533 5.533L20 8L8 20L5.533 17.533C5.48 17.4799 5.45022 17.408 5.45022 17.333C5.45022 17.258 5.48 17.1861 5.533 17.133C5.7168 16.9599 5.86398 16.7517 5.96582 16.5208C6.06767 16.2898 6.1221 16.0407 6.1259 15.7883C6.1297 15.5358 6.08278 15.2852 5.98793 15.0513C5.89308 14.8173 5.75222 14.6048 5.57372 14.4263C5.39521 14.2478 5.18268 14.1069 4.94873 14.0121C4.71478 13.9172 4.46416 13.8703 4.21175 13.8741C3.95933 13.8779 3.71024 13.9323 3.47925 14.0342C3.24825 14.136 3.04006 14.2832 2.867 14.467C2.757 14.577 2.577 14.577 2.467 14.467L0 12L12 0L14.467 2.467C14.577 2.577 14.577 2.757 14.467 2.867C14.2832 3.04006 14.136 3.24825 14.0342 3.47925C13.9323 3.71024 13.8779 3.95933 13.8741 4.21175C13.8703 4.46416 13.9172 4.71478 14.0121 4.94873C14.1069 5.18268 14.2478 5.39521 14.4263 5.57372C14.6048 5.75222 14.8173 5.89308 15.0513 5.98793C15.2852 6.08278 15.5358 6.1297 15.7883 6.1259C16.0407 6.1221 16.2898 6.06767 16.5208 5.96582C16.7517 5.86398 16.9599 5.7168 17.133 5.533C17.243 5.423 17.423 5.423 17.533 5.533V5.533ZM9.667 5L9 5.667L14.333 11L15 10.333L9.667 5Z',
                icon_play: 'M0 0V15L13.333 7.5L0 0Z',
            }
        },
        components: {FeatureNavigationItem}
    }
</script>

<style scoped>
    .feature-navigation {
        height: 100%;
        width: max-content;
    }

    .feature-navigation > div:not(:last-child) {
        margin-right: 18px;
    }
</style>

