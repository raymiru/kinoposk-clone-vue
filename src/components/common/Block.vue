<script>
    export default {
        name: "Block",
        props: {
            tag: {
                type: String,
                default: 'div',
            },
            row: {
                type: Boolean,
                default: false
            },
            col: {
                type: Boolean,
                default: false
            }
        },
        render(h) {
            const classes = ['flex'];
            this.row ? classes.push('row') : false;
            this.col ? classes.push('col') : false;

            return h(
                this.tag, {
                    class: classes
                },
                this.$slots.default
            )
        }

    }
</script>

<style scoped>
    .block {
        display: block;
    }

    .wrapper {
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    .inline {
        display: inline-block;
    }

    .margin {
        margin: 5px;
    }

</style>
