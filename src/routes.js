import Lista from './components/lista/Lista.vue';
import Home from './components/home/Home.vue';
import Cadastrar from './components/cadastrar/Cadastrar.vue'
import Find from './components/find/Find.vue'
import Usuario from './components/usuario/Usuario.vue'
import Deletar from './components/deletar/Deletar.vue'
import Descricao from './components/descricao/Descricao.vue'

export const routes  = [
    {path: '', component : Home},
    {path : '/lista', component: Lista },
    {path : '/cadastrar', component : Cadastrar},
    {path : '/Usuario', component : Usuario},
    {path : '/Deletar', component : Deletar},
    {path : '/find', component : Find, name : find},
    {path : '/Descricao/:id', name:'desc',component : Descricao},
];