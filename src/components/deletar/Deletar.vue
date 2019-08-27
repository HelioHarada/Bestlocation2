<template>
<div class="container-fluid ">
      <form ref="form" >
        <h2 align="center">Deletar Ímovel</h2>
          <div class="form-group">
            <input type="titulo" class="form-control input-grey" v-model="id" id="id" aria-describedby="emailHelp" placeholder="ID imovel">
          </div>
          <button class="btn button-delete"  @click.prevent="deletar()">Delete</button>
      </form>
      <hr>
    <div class="table-responsive">
      <table class="table table-hover table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Titulo</th>
          <th scope="col">Descrição</th>
          <th scope="col">Endereço</th>
          <th scope="col">Cidade</th>          
          <th scope="col">Preço</th>
          <th scope="col">Id</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(imovel, index) in imoveis" :key="index">
          <th scope="row">{{index}}</th>
          <td>{{imovel.titulo}}</td>
          <td>{{imovel.descricao}}</td>
          <td>{{imovel.endereco}}</td>
          <td>{{imovel.cidade}}</td>
          <td>{{imovel.preco}}</td>
          <td>{{imovel._id}}</td>
          <td><button  data-toggle="modal"  @click="deletarImovel(imovel._id)" class="icon-delete btn btn-danger"><i class="far fa-trash-alt"></i></button></td>
        </tr>
    
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import { getImoveis, deletarImovel, deleteImovelId } from "../../api/";

export default {
    name: "deletar",
    data(){
         let self = this;
        return{
            imoveis: [],
            id: ''
        }
    },
    methods:{
    getImoveis,
    deletarImovel,
    deleteImovelId,
            async showImoveis(){
            try{
                const res = await this.getImoveis()
                console.log(res.body);
                this.imoveis = res.body.data
      
            }catch(e){

            }
        },  
        async deletarImovel(id){
          try{
            console.log(id)
            const res = this.deleteImovelId(id);
            console.log(res)
          }catch(e){
            console.log(e)
          }
        },
    },
    created(){
        this.showImoveis();
    }
}
</script>

<style>
.button-delete{
    color: white;
    margin-bottom: 15px;
    border-radius: 25px;
    width: 100%;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    background-color: #9e0000;
}

.button-delete:hover{
    background-color: #e40000;
}
</style>
