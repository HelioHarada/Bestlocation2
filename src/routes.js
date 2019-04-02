import Lista from './components/lista/Lista.vue';
import Home from './components/home/Home.vue';
import Cadastrar from './components/cadastrar/Cadastrar.vue'
import Find from './components/find/Find.vue'
import Usuario from './components/usuario/Usuario.vue'

export const routes  = [
    {path: '', component : Home},
    {path : '/lista', component: Lista },
    {path : '/cadastrar', component : Cadastrar},
    {path : '/Usuario', component : Usuario},
    {path : '/find', component : Find, name : find}
];