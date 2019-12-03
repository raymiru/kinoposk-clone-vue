<template>
    <RouterLink to="/film" class="search-link" >
        <Flex class="search-item" >
            <img class="item-img" :src="src" alt="film">
            <Flex jc="center" class="item-info-block" col>
                <span class="item-title" :class="breakpoint">{{title}}</span>
                <span class="item-info" :class="breakpoint">{{info}}</span>
            </Flex>
            <Flex ai="center" class="item-rating-block" :class="ratingColor">
                <span :class="breakpoint">{{rating}}</span>
            </Flex>
        </Flex>
    </RouterLink>
</template>

<script>
    export default {
        name: "SearchItem",
        props: {
            title: String,
            src: String,
            info: String,
            rating: Number
        },
        computed: {
            ratingColor() {
                if (this.rating >= 7) return 'positive';
                else if (this.rating < 7) return 'neutral'
            },
            breakpoint() {
                return this.$store.state.breakpoint
            }
        }
    }
</script>

<style scoped>
    .search-link {
        transition: ease-in;
        transition-duration: 0.15s;
        color: #333;
    }

    .search-link:hover {
        background-color: #d6d6d6;
    }

    .item-img {
        width: 23px;
        height: 36px;
    }

    .item-info-block {
        justify-content: center;
        margin-left: 10px;
    }



    .item-title {
        color: black;
        font-size: 15px;
        font-weight: 500;
        margin-bottom: 4px;
    }

    .item-title.mobile {
        font-size: 15px;
        font-weight: 500;
    }


    .item-info {
        font-size: 12px;
        color: rgba(51,51,51,0.4);
    }

    .item-info.mobile {
        font-size: 12px;
    }


    .item-rating-block {
        color: black;
        margin-left: 10px;
        font-size: 11px;
        font-weight: 700;
    }

    .item-rating-block.neutral {
        color: var(--rating-neutral)
    }

    .item-rating-block.positive {
        color: var(--rating-positive)
    }
</style>
