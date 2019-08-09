import Lista from './components/lista/Lista.vue';
import Home from './components/home/Home.vue';
import Cadastrar from './components/cadastrar/Cadastrar.vue'
import Find from './components/find/Find.vue'
import Usuario from './components/usuario/Usuario.vue'
import Deletar from './components/deletar/Deletar.vue'
import Descricao from './components/descricao/Descricao.vue'
import Minha_conta from './components/conta/MinhaConta.vue'


export const routes  = [
    {path: '', name:'home' ,component : Home},
    {path : '/lista', name:'lista' ,component: Lista },
    {path : '/cadastrar',name:'cadastrar', component : Cadastrar},
    {path : '/Usuario', name:'usuario', component : Usuario},
    {path : '/Deletar', name:'deletar', component : Deletar},
    {path : '/find', name : 'find', component : Find, },
    {path : '/Descricao/:id', name:'desc',component : Descricao},
    {path : '/account', name:'account',component : Minha_conta},
];

