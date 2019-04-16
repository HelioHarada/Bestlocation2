<template>
  <div class="container-fluid">
    <form ref="form" @submit.prevent="handleSubmit">
      <!-- <div class="alert alert-danger" id ="message-errors" role="alert"  v-if="errors.length" >
      <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      </div>-->

      <h2 align="center">Cadastrar Ímovel</h2>

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

      <!--      <div class="form-group">
        <input type="file" class="form-control input-grey"  placeholder="descrição do Imovel">
      </div>
      -->
      <button type="submit" class="btn button-grey">Cadastrar</button>
      <br>
      <br>
    </form>
  </div>
</template>

<script>
import { Money } from "./v-money.js";

export default {
  components: { Money },

  data() {
    return {
      imoveis: [],
      errors: [],
      status: "venda",
      titulo: "",
      endereco: {},
      rua: "",
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
    buscarCEP() {
      console.log("key");
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
    handleSubmit() {
      console.log(this.cidade);
      console.log(cidade);
      console.log(endereco.localidade);
      let promise = this.$http.post("http://bestlocation.com.br/api/imoveis", {
        titulo: this.titulo,
        status: this.status,
        endereco: this.rua,
        cidade: this.cidade,
        bairro: this.bairro,
        uf: this.uf,
        descricao: this.descricao,
        numBanheiros: this.numBanheiros,
        numQuartos: this.numQuartos,
        preco: this.preco,
        area: this.area,
        cep: this.cep
      });
      promise.then(function(res) {
        console.log(res);
        alert("criado com sucesso");
        this.titulo = "";
        this.status = "";
        this.endereco = "";
        this.cidade = "";
        this.uf = "";
        this.bairro = "";
        this.descricao = "";
        this.numBanheiros = "";
        this.numQuartos = "";
        this.preco = "";
        this.cep = "";
        this.area = "";
      });
    }
  }
};
</script>
