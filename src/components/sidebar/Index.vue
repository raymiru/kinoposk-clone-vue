<template>
    <Flex col class="sidebar-sticky-container"
         :class="{'theme-dark': dark || dropdown, 'theme-light': !dark && !dropdown, 'border-off': dropdown}">
        <MenuGroup :class="breakpoint" :dropdown="dropdown" v-for="menu in menus" :key="menu.header" :header="menu.header" :items="menu.items"/>
    </Flex>
</template>

<script>
    import MenuGroup from "./MenuGroup";

    export default {
        name: "Sidebar",
        components: {MenuGroup},
        data() {
            return {
                menus: [
                    {
                        header: 'Медиа',
                        items: [
                            {label: 'Главная', to: '/media'},
                            {label: 'Новости', to: '/media/news'},
                            {label: 'Статьи', to: '/media/article'},
                            {label: 'Видео', to: '/media/video'},
                            {label: 'Тесты', to: '/media/game'},
                            {label: 'Подкасты', to: '/media/podcast'}
                        ]
                    },
                    {
                        header: 'Афиша',
                        items: [
                            {label: 'Афиша кинотеатров', to: '/afisha/new/city/1/'},
                            {label: 'График премьер', to: '/premiere/'},
                            {label: 'КиноПоиск GO', to: '/special/kinopoisk-go/'},
                            {label: 'Фильмы в IMAX', to: '/special/imax/#/'},
                            {label: 'Кинотеатры', to: '/cinemas/tc/1/'},
                            {label: 'Акции и скидки', to: '/action/promo/'}
                        ]
                    },
                    {
                        header: 'КИНОПОИСК HD',
                        items: [
                            {label: 'Моё кино', to: 'https://hd.kinopoisk.ru'},
                            {label: 'Магазин', to: 'https://hd.kinopoisk.ru/buy'},
                            {label: 'Мои покупки', to: 'https://hd.kinopoisk.ru/purchases'}
                        ]
                    },
                    {
                        header: 'ФИЛЬМЫ',
                        items: [
                            {label: 'Списки фильмов', to: '/top/lists/'},
                            {label: 'Топ 250', to: '/top/'},
                            {label: 'Навигатор', to: '/top/navigator/'},
                            {label: 'Трейлеры', to: '/video/'},
                            {label: 'Популярные фильмы', to: '/popular/'}
                        ]
                    }
                ]
            }
        },
        computed: {
            dark() {
                return this.$store.getters.getDark
            },
            breakpoint() {
                return this.$store.state.breakpoint
            }
        },
        props: {
            dropdown: Boolean
        }
    }

</script>

<style scoped>
    .sidebar-sticky-container {
        line-height: 1.24em;
        position: sticky;
        top: 54px;
        width: 100%;
        height: max-content;
    }

    .menu-group-block {
        margin-top: 15px;
    }

    .menu-group-block.large {
        margin-left: 30px;
        margin-right: 30px;
    }

    .menu-group-block.medium, .menu-group-block.small {
        margin-left: 20px;
        margin-right: 20px;
    }

    .theme-light {
        border-right: 1px solid var(--sidebar-border-color-light)
    }

    .theme-dark {
        border-right: 1px solid var(--sidebar-border-color-dark);

    }

    .border-off {
        border-right: none;
    }

</style>
