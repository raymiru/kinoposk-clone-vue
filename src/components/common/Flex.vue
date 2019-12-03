<script>
    export default {
        name: "Flex",
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
            },
            wrapper: {
                type: Boolean,
                default: false
            },
            container: {
                type: Boolean,
                default: false
            },
            breakpoint: String,
            mw: String,
            mh: String,
            width: String,
            ai: String,
            jc: String
        },
        render(h) {
            const styles = [];
            const classes = ['flex'];

            /*
            declare styles
             */
            this.mw ? styles.push(`max-width: ${this.mw}`): false;
            this.mh ? styles.push(`max-height: ${this.mh}`): false;
            this.ai ? styles.push(`align-items: ${this.ai}`) : false;
            this.jc ? styles.push(`justify-content: ${this.jc}`) : false;
            this.width ? styles.push(`width: ${this.width}`) : false;

            /*
            declare classes
             */
            this.row ? classes.push('row') : false;
            this.col ? classes.push('col') : false;
            this.wrapper ? classes.push('wrapper'): false;
            this.container ? classes.push('container'): false;
            this.breakpoint ? classes.push(this.breakpoint): false;

            return h(
                this.tag, {
                    class: classes,
                    attrs: {
                        style: styles.join(';')
                    }
                },
                this.$slots.default
            )
        }

    }
</script>

<style scoped>


    .flex {
        display: flex;
    }

    .row {
        width: 100%;
        flex-direction: row;
    }

    .col {
        width: 100%;
        flex-direction: column;
    }

    .wrapper {
        width: 100%;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    .container {
        height: 100%;
        width: 100%;
    }


    .wrap {
        flex-wrap: wrap;
    }

    .row {
        flex-direction: row;
    }


    .inline {
        display: inline-flex;
    }

    .fluid {
        width: 100%;
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
