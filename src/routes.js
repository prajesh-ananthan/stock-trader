import Home from './components/Home.vue'
import Portfolio from './components/portfolio/PortFolio.vue'
import Stocks from './components/stock/Stocks.vue'

export const routes = [
    {path: '/', component: Home},
    {path: '/portfolio', component: Portfolio},
    {path: '/stock', component: Stocks}
];