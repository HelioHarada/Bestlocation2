import Lista from './components/lista/Lista.vue';
import Home from './components/home/Home.vue';
import Cadastrar from './components/cadastrar/Cadastrar.vue'
import Find from './components/find/Find.vue'
import Usuario from './components/usuario/Usuario.vue'
import Deletar from './components/deletar/Deletar.vue'
import Descricao from './components/descricao/Descricao.vue'
import Meu_imovel from './components/meu_imovel/Meu_imovel.vue'

export const routes  = [
    {path: '', name:'home' ,component : Home},
    {path : '/lista', name:'lista' ,component: Lista },
    {path : '/cadastrar', component : Cadastrar},
    {path : '/Usuario', component : Usuario},
    {path : '/Deletar', component : Deletar},
    {path : '/find', component : Find, name : find},
    {path : '/Descricao/:id', name:'desc',component : Descricao},
    {path : '/Meu_imovel', name:'meu_imovel',component : Meu_imovel},
];