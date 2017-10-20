<template>
    <div>
        <!--Load all the stocks -->
        <app-stock v-for="stock in stocks" :stock="stock">

        </app-stock>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex';
    import Stock from './Stock.vue';

    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            }),
        },
        components: {
            appStock: Stock
        }

    }
</script>