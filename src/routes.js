import Lista from './components/lista/Lista.vue';
import Home from './components/home/Home.vue';

export const routes  = [
    {path: '', component : Home},
    {path : '/lista', component: Lista }
];