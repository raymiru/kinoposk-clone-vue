import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        dark: false,
        layout: 'default',
        breakpoint: undefined,
        mobileSearchActive: false,
        mobileDropdownActive: false,
        films: [
            {
                title: 'Криминальное чтиво',
                src: '/static/img/pulp_fiction.jpg',
                info: '1994, триллер',
                rating: 8.6
            },
            {
                title: 'Бесславные ублюдки',
                src: '/static/img/inglourious_basterds.jpg',
                info: '2009, боевик',
                rating: 7.9
            },
            {
                title: 'Джанго освобожденный',
                src: '/static/img/django_unchained.jpg',
                info: '2012, вестерн',
                rating: 8.2
            },
            {
                title: 'Джанго освобожденный 2',
                src: '/static/img/django_unchained.jpg',
                info: '2012, вестерн',
                rating: 6.2
            },
            {
                title: 'Однажды в... Голливуде',
                src: '/static/img/hollywood.jpg',
                info: '2019, драма',
                rating: 7.7
            },
            {
                title: 'Убить билла',
                src: '/static/img/kill_bill.jpg',
                info: '2003, боевик',
                rating: 7.6
            },
            {
                title: 'Омерзительная восьмерка',
                src: '/static/img/the_hateful_eight.jpg',
                info: '2015, боевик',
                rating: 7.9
            },
            {
                title: 'Бешеные псы',
                src: '/static/img/reservoir_dogs.jpg',
                info: '1991, триллер',
                rating: 8.1
            },
            {
                title: 'От заката до рассвета',
                src: '/static/img/from_dusk_till_dawn.jpg',
                info: '1995, ужасы',
                rating: 7.8
            },
            {
                title: 'TTTTTTTTTTTTTT',
                src: '/static/img/from_dusk_till_dawn.jpg',
                info: '1995, ужасы',
                rating: 7.8
            },
            {
                title: 'EEEEEEEEE',
                src: '/static/img/from_dusk_till_dawn.jpg',
                info: '1995, ужасы',
                rating: 7.8
            },
            {
                title: 'WWWWWWWW',
                src: '/static/img/from_dusk_till_dawn.jpg',
                info: '1995, ужасы',
                rating: 7.8
            }
        ],
        weekReviews: [
            {
                src: '/static/img/week1.png',
                title: '«Аббатство Даунтон», «Аванпост» и «Давай разведемся!»'
            },
            {
                src: '/static/img/week2.png',
                title: '«Оно 2», «Вероника Марс» и «Клаус»'
            },
            {
                src: '/static/img/week3.png',
                title: '«Чудотворцы», «Доктор Кто» и «Зов предков»'
            },
            {
                src: '/static/img/week4.png',
                title: '«Хранители»: Как разобраться в сериале-продолжении культового комикса'
            },
            {
                src: '/static/img/week5.png',
                title: 'Что смотреть в 2019 году: 50 самых ожидаемых фильмов'
            },
            {
                src: '/static/img/week6.png',
                title: '«Темные начала», «Рик и Морти» и сериалы Apple'
            },
        ]
    },
    mutations: {
        themeToggle(state, payload) {
            state.themeDark = payload
        },
        initialBreakPoint(state, payload) {
            state.breakpoint = payload
        },
        changeBreakPoint(state, payload) {
            state.breakpoint = payload
        },
        changeMobileSearchActiveState(state, payload) {
            state.mobileSearchActive = payload
        },
        changeMobileDropdownActiveState(state, payload) {
            state.mobileDropdownActive = payload
        }
    },
    getters: {
        getDark: state => state.dark,
        getFilms: state => state.films,
        getWeekReviews: state => state.weekReviews
    }
});

export default store
