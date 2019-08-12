<template>
  <div class="container">
    <form ref="form" @submit.prevent="handleSubmit">
    <div class="alert alert-danger" id ="message-errors" role="alert"  v-if="errors.length" >
      <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
      <ul>
        <li v-for="(error , index ) in errors" :key="index">{{ error }}</li>
      </ul>
   </div>
      <br>
      <h2 align="center">Cadastrar Ímovel</h2>
      <hr>
      <div class="form-group">
        <input
          type="titulo"
          class="form-control input-grey"
          v-model="titulo"
          id="titulo"
          aria-describedby="emailHelp"
          placeholder="Título (Casa, Condominio, Apartamento)"
        >
      </div>

      <div class="form-group">
        <select name="tipo" id="status" v-model="status" class="form-control input-grey">
          <option value="venda" selected>Venda</option>
          <option value="aluguel">Aluguel</option>
        </select>
        <!-- <input type="text" class="form-control input-grey" v-model="status" id="status" aria-describedby="emailHelp" placeholder="Tipo da venda (Venda, Aluguel)"> -->
      </div>

      <div class="form-group">
        <input
          type="text"
          class="form-control input-grey"
          id="cep"
          v-model="cep"
          placeholder="CEP"
          @keyup="buscarCEP"
        >
      </div>

      <div class="form-group">
        <input
          type="text"
          class="form-control input-grey"
          id="endereco"
          v-model="rua"
          placeholder="Endereço"
        >
      </div>

      <div class="form-group">
        <input
          type="text"
          class="form-control input-grey"
          id="numEndereco"
          v-model="numEndereco"
          placeholder="Número"
        >
      </div>

      <div class="form-group">
        <input
          type="text"
          class="form-control input-grey"
          id="complementoEndereco"
          v-model="complementoEndereco"
          placeholder="Complemento"
        >
      </div>

      <div class="form-group">
        <input
          type="text"
          class="form-control input-grey"
          id="Bairro"
          v-model="bairro"
          placeholder="Bairro"
        >
      </div>

      <div class="form-group">
        <input
          type="text"
          class="form-control input-grey"
          id="cidade"
          v-model="cidade"
          placeholder="Cidade"
        >
      </div>

      <div class="form-group">
        <input
          type="text"
          class="form-control input-grey"
          id="estado"
          v-model="uf"
          placeholder="Estado"
        >
      </div>

      <div class="form-group">
        <input
          type="textarea"
          class="form-control input-grey"
          id="descricao"
          v-model="descricao"
          placeholder="Detalhes do imóvel"
        >
      </div>

      <div class="form-group">
        <input
          type="text"
          class="form-control input-grey"
          id="area"
          v-model="area"
          placeholder="area"
        >
      </div>

      <div class="form-group">
        <input
          type="number"
          class="form-control input-grey"
          v-model="numQuartos"
          id="numQuartos"
          aria-describedby="emailHelp"
          placeholder="Número de quartos"
        >
      </div>

      <div class="form-group">
        <input
          type="number"
          class="form-control input-grey"
          v-model="numBanheiros"
          id="numBanheiros"
          aria-describedby="emailHelp"
          placeholder="Número de banheiros"
        >
      </div>

      <div class="form-group">
        <money
          v-model="preco"
          v-bind="money"
          class="form-control input-grey"
          placeholder="Digite o Preço"
        ></money>
      </div>

      <button type="submit" class="btn button-grey">Cadastrar</button>
      <br>
      <br>
    </form>
  </div>
</template>

<script>
import routes from "../../routes";
import { Money } from "./v-money.js";
import { closeMenu, cadastrarImovel } from "../../api/";
export default {
  components: { Money },

  data() {
    return {
      query:"",
      imoveis: [],
      errors: [],
      status: "venda",
      titulo: "",
      endereco: {},
      rua: "",
      numEndereco: "",
      complementoEndereco: "",
      cidade: "",
      descricao: "",
      numBanheiros: "",
      preco: "",
      numQuartos: "",
      cep: "",
      area: "",
      uf: "",
      bairro: "",
      // === Money === //
      money: {
        decimal: ",",
        thousands: ".",
        prefix: " ",
        suffix: " ",
        precision: 2,
        masked: true
      }
    };
  },
  mounted: function() {
    $("#cep").mask("00000-000");
  },
  methods: {
    closeMenu,
    cadastrarImovel,
    async load(){
      try{
        const res = await this.setQuery();
        console.log(res)
        if(res == undefined || res == '')
        {
            this.$router.push('account')
        }
      }catch(e){
        console.log(e)
      }
    },

    async cadastrar(){
      console.log("cadastrar")
      try{
        let res = await this.cadastrarImovel();
        console.log(res);
      }catch(e){
        console.log(e)
        $("html, body").animate({ scrollTop: 0 }, "slow");
      }
    },
    buscarCEP() {
      var self = this;

      self.naoLocalizado = false;
      if (/^[0-9]{5}-[0-9]{3}$/.test(this.cep)) {
        $.getJSON("https://viacep.com.br/ws/" + this.cep + "/json/", function(
          endereco
        ) {
          console.log(endereco);
          if (endereco.erro) {
            self.endereco = {};
            $("#inputLogradouro").focus();
            self.naoLocalizado = true;
            return;
          }
          self.endereco = endereco;
          self.cidade = endereco.localidade;
          self.uf = endereco.uf;
          self.bairro = endereco.bairro;
          self.rua = endereco.logradouro;
        });
      }
    },
    setQuery: function() {
      this.query = this.$route.params.id;
  
      return this.query;
    },
    handleSubmit() {
      this.errors = [];

      if (!this.titulo) {
        this.errors.push('O titulo é obrigatório.');
      }

      if (!this.rua) {
        this.errors.push('O endereço é obrigatório.');
      }

      if (!this.descricao) {
        this.errors.push('O descricao é obrigatório.');
      }
      if (!this.cidade) {
        this.errors.push('A cidade é obrigatório.');
      }
     if (!this.preco) {
        this.errors.push('O preço é obrigatório.');
      }
      if (!this.numEndereco) {
        this.errors.push('O numero do endereço é obrigatório.');
      }
      if (!this.area) {
        this.errors.push('O Area do imóvel é obrigatório.');
      }
      if (!this.cep) {
        this.errors.push('O CEP do imóvel é obrigatório.');
      }
      if (!this.errors.length)
      {
          this.cadastrar()
      }
    }
  },
  created(){
    this.load();
    this.setQuery();
    console.log(req)
  }
};
</script>
