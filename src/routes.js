import Home from  './components/home/Home.vue';
import Lista from './components/lista/Lista.vue';


export const routes  = [
    {path : '', component: Home},
    {path : '/lista', component: Lista}
];