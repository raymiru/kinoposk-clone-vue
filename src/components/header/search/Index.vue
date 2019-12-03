<template>
    <Flex v-if="breakpoint !== 'mobile' || mobileSearchActive"
          class="search" :class="{active}">

        <Flex class="search-input" row :breakpoint="breakpoint">
            <SearchMobile v-if="mobileSearchActive"/>
            <input ref="input" @focus="focusIn"
                   @focusout="focusOut"
                   class="input"
                   :class="[{active}, breakpoint]"
                   type="text"
                   v-model="search"
                   autocomplete="off"
                   placeholder="Фильмы, персоны, кинотеатры"
            />
            <Flex v-if="!mobileSearchActive" class="search-controls">
                <SearchControl :active="active" :path="control_svg_settings"/>
                <SearchControl :active="active" :path="control_svg_search"/>
            </Flex>
            <SearchMobileClose v-if="mobileSearchActive"/>
        </Flex>


        <Flex @mouseover.native="contentFocus = true" @mouseleave.native="contentFocus = false" v-if="content" col
              class="search-content" :class="breakpoint">
            <SearchItem v-for="film in filmsByTitle" :title="film.title" :src="film.src" :info="film.info"
                        :rating="film.rating"/>
        </Flex>

    </Flex>
    <Flex class="search-mobile" v-else-if="breakpoint === 'mobile' && !mobileSearchActive" ai="center">
        <SearchMobile/>
    </Flex>

</template>

<script>
    import SearchControl from "./buttons/SearchControl";
    import SearchMobile from "./buttons/SearchMobile";
    import SearchMobileClose from "./buttons/SearchMobileClose";
    import SearchItem from "./SearchItem";

    export default {
        name: "Search",
        components: {SearchItem, SearchMobileClose, SearchMobile, SearchControl},
        data() {
            return {
                content: false,
                contentFocus: false,
                search: '',
                active: false,
                control_svg_settings: 'M5.995 10.3A2.7 2.7 0 0 1 8.504 12H17v2H8.504a2.7 2.7 0 0 1-5.018 0H1v-2h2.486a2.7 2.7 0 0 1 2.509-1.7zm0 1.7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm5.997-8.7A2.7 2.7 0 0 1 14.5 5H17v2h-2.5a2.7 2.7 0 0 1-5.017 0H1V5h8.483a2.7 2.7 0 0 1 2.509-1.7zm0 1.7a1 1 0 1 0 0 2 1 1 0 0 0 0-2z',
                control_svg_search: 'M12.026 10.626L16 14.6 14.6 16l-3.974-3.974a5.5 5.5 0 1 1 1.4-1.4zM7.5 11.1a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2z'
            }
        },
        props: {
            breakpoint: String,
            mobileSearchActive: Boolean
        },
        watch: {
            mobileSearchActive(v) {
                v ? setTimeout(() => this.$refs.input.focus(), 0) : false
            }
        },
        methods: {
            focusIn() {
                this.active = true;
                this.content = true;
            },

            focusOut() {
                this.active = false;
                if (!this.contentFocus) {
                    this.content = false;
                    this.$store.commit('changeMobileSearchActiveState', false)
                }
            }
        },
        computed: {
            filmsByTitle() {
                if (this.search && this.search.trim().length > 1) {
                    return this.$store.state.films.filter(film => film.title.trim().toLowerCase().includes(this.search.trim().toLowerCase())
                    )
                }
            }
        },

        mounted() {
            this.$router.afterEach(() => {
                if (this.$store.state.mobileSearchActive) this.$store.commit('changeMobileSearchActiveState', false)
            })
        }
    }
</script>

<style scoped>
    .search {
        position: relative;
        height: 34px;
        border-radius: 4px;
        background-color: var(--background-header-input);
        color: white;
        width: 100%;
        z-index: 2;
    }

    .search-input {
        margin-left: 15px;
        margin-right: 10px;
    }

    .search-input.mobile {
        margin-left: 10px;
        margin-right: 10px;
    }

    .search-content {
        z-index: 20;
        box-shadow: 0 10px 20px -2px rgba(0, 0, 0, 0.4);
        border-radius: 5px;
        position: absolute;
        margin-top: 10px;
        top: 100%;
        background-color: white;
        color: black;
    }

    .search-content.mobile {
        margin-top: 0;
        box-shadow: none;
        border-radius: 0;
    }

    .search-content > a {
        padding: 7px 10px;
    }

    .search-content.mobile > a {
        padding: 10px 10px;
    }


    .search.mobile {
        background-color: transparent;
    }


    .search.active {
        background-color: var(--background-header-input-active);
        color: black;
    }

    .search.mobile.active {
        background-color: transparent;
        color: white;
    }


    .input {
        font-family: inherit;
        padding: 8px 16px 8px 0;
        font-size: 15px;
        font-weight: 300;
        display: block;
        background-color: transparent;
        width: 100%;
        outline: none;
        border: none;
        text-overflow: ellipsis;
    }

    .input.mobile {
        padding: 8px 16px 8px 16px;
    }

    .input.active::placeholder {
        opacity: 0.4;
    }

    .input.active.mobile::placeholder {
        opacity: 0;
    }


    .search-controls {
        display: flex;
        background-color: transparent;
    }

    .search-controls > button:not(:last-child) {
        margin-right: 5px;
    }

</style>
