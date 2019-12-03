<template>
    <button class="button">
        <svg class="button__icon" :class="{'button__icon-small': small}">
            <path :class="{active, inactive:!active, path: small}"  :d="path"></path>
        </svg>
    </button>
</template>

<script>
    export default {
        name: "SearchControl",
        props: {
            path: String,
            active: Boolean,
            dark_theme: Boolean,
            small: Boolean
        }
    }
</script>

<style scoped>
    .button {
        height: 100%;
        cursor: pointer;
        background: transparent;
        border: none;
        outline: none;
    }

    .button__icon {
        width: 18px;
        height: 18px;
    }

    .active {
        fill: var(--fill-header-input-controls-active);
    }

    .inactive {
        fill: var(--fill-header-input-controls-inactive)
    }

    .button__icon-small {
        width: 30px;
        height: 30px;
    }

    .path {
        transform: scale(1.8);
        fill: white;
    }

    .path:hover {
        fill: #FF6600;
    }

</style>
