import Lista from './components/lista/Lista.vue';
import Home from './components/home/Home.vue';
import Cadastrar from './components/cadastrar/Cadastrar.vue'
import Find from './components/find/Find.vue'

export const routes  = [
    {path: '', component : Home},
    {path : '/lista', component: Lista },
    {path : '/cadastrar', component : Cadastrar},
    {path : '/find', component : Find, name : find}
];