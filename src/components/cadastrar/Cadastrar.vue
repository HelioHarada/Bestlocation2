<template>

<div class="container">
     <form ref="form"  @submit.prevent="handleSubmit">


    <!-- <div class="alert alert-danger" id ="message-errors" role="alert"  v-if="errors.length" >
      <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
   </div> -->

    <h2 align="center">Cadastrar Ímovel</h2>

    <div class="form-group">
    <input type="titulo" class="form-control input-grey" v-model="titulo" id="titulo" aria-describedby="emailHelp" placeholder="Título (Casa, Condominio, Apartamento)">
  </div>

    <div class="form-group">
      <input type="text" class="form-control input-grey" v-model="status" id="status" aria-describedby="emailHelp" placeholder="Tipo da venda (Venda, Aluguel)">
    </div>

    <div class="form-group">
      <input type="text" class="form-control input-grey" id="endereco" v-model="endereco" placeholder="Endereço">
    </div>

    <div class="form-group">
      <input type="text" class="form-control input-grey" id="cidade" v-model="cidade" placeholder="Cidade">
    </div>

    <div class="form-group">
        <input type="textarea" class="form-control input-grey" id="descricao" v-model="descricao" placeholder="Detalhes do imóvel (Sala, Cozinha, Garagem, área de trabalho etc..">
      </div>

      <div class="form-group">
      <input type="number" class="form-control input-grey" v-model="numQuartos" id="numQuartos" aria-describedby="emailHelp" placeholder="Número de quartos">
    </div>

    <div class="form-group">
    <input type="number" class="form-control input-grey" v-model="numBanheiros" id="numBanheiros" aria-describedby="emailHelp" placeholder="Número de banheiros">
  </div>

     <div class="form-group">
     <money v-model="preco" v-bind="money" class="form-control input-grey" placeholder="Digite o Preço"></money>
     </div>

<!--      <div class="form-group">
        <input type="file" class="form-control input-grey"  placeholder="descrição do Imovel">
      </div>
-->
    <button type="submit" class="btn button-grey"  >Cadastrar</button>
   <br>
   <br>

  </form>
</div>
</template>

<script>
  import {Money} from './v-money.js' 

export default {

    components: {Money},

data(){
    return{
      imoveis: [],
      errors: [],
      status: '',
      titulo: '',
      endereco: '',
      cidade: '',
      descricao: '',
      numBanheiros: '',
      preco: '',
      numQuartos: '',
      // === Money === //
      money: {
        decimal: ',',
        thousands: '.',
        prefix: ' ',
        suffix: ' ',
        precision: 2,
        masked: true
      }
    }    
},
methods:{
   handleSubmit(){
    let promise = this.$http.post('http://localhost:8080/api/imoveis',
      {
      titulo : this.titulo,
      status : this.status,
      endereco : this.endereco,
      cidade : this.cidade,
      descricao :  this.descricao,
      numBanheiros : this.numBanheiros,
      numQuartos : this.numQuartos,
      preco : this.preco
      }
    );
    promise.then(function(res) {
        console.log(res.body);
        alert("criado com sucesso");
            this.titulo = ""
            this.status = ""
            this.endereco = ""
            this.cidade = ""
            this.descricao = ""
            this.numBanheiros = ""
            this.numQuartos = ""
            this.preco = ""
    });

  }
}

}
</script>
