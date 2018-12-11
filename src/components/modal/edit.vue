<template>
    <div class="modal-backdrop">
        <div class="modal">
            <header class="modal-header">
                <slot name="header">
                    This is the default tile!

                    <button
                            type="button"
                            class="btn-close"
                            @click="close"
                    >
                        x
                    </button>
                </slot>
            </header>
            <section class="modal-body">
                <slot name="body">
                    I'm the default body!
                </slot>
            </section>
            <footer class="modal-footer">
                <slot name="footer">
                    I'm the default footer!

                    <button
                            type="button"
                            class="btn-green"
                            @click="close"
                    >
                        Close me!
                    </button>
                </slot>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        name: "edit",

        methods: {
            close() {
                this.$emit('close');
            },
        },
    }
</script>

<style scoped>
    .modal-backdrop {
        position: static;
        margin-top: -300px;
        margin-left: 100px;
        width: 1000px;
        background-color: white;
        justify-content: center;
        align-items: center;
    }

    .modal {
        background-color: #FFFFFF;
        height: 400px;
        width: 800px;
        box-shadow: 2px 2px 20px 1px;
        display: contents;
    }

    .modal-header,
    .modal-footer {
        padding: 15px;
        display: flex;
    }

    .modal-header {
        border-bottom: 1px solid #eeeeee;
        color: #4AAE9B;
        justify-content: space-between;
    }

    .modal-footer {
        border-top: 1px solid #eeeeee;
    }

    .modal-body {
    }

    .btn-close {
        border: none;
        font-size: 20px;
        padding: 20px;
        cursor: pointer;
        font-weight: bold;
        color: #4AAE9B;
        background: transparent;
    }

    .btn-green {
        color: white;
        background: #4AAE9B;
        border: 1px solid #4AAE9B;
        border-radius: 2px;
    }
</style>
