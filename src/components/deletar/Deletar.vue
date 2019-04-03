<template>
<div>
      <form ref="form" >
        <h2 align="center">Deletar Ímovel</h2>
          <div class="form-group">
            <input type="titulo" class="form-control input-grey" v-model="id" id="id" aria-describedby="emailHelp" placeholder="ID imovel">
          </div>
          <button class="btn button-delete"  @click.prevent="deletar()">Delete</button>
      </form>
      <hr>
      <table class="table">
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
</template>

<script>
export default {
    data(){
         let self = this;
        return{
            imoveis: [],
            id: ''
        }
    },
    methods:{
    
        getImoveis(){
            let promise = this.$http.get('http://localhost:8080/api/imoveis');
            promise .then(function(res) {
                console.log(res.body);
                this.imoveis = res.body
            });
        },

        deletarImovel(id){

            // console.log(id)
            let promise = this.$http.delete('http://localhost:8080/api/imoveis/'+id);

            promise.then(function(res){
               location.reload(); 
            });
     
                console.log(Deletar)
        }
    },
    created(){
        this.getImoveis();
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
