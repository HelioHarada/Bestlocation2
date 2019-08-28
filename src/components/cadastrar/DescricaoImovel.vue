<template>
    <div>
     <h2>Detalhes do seu imóvel</h2>
      <hr>

      <div class="form-group col-sm-6">
        <label for="descricao">Descreva o seu imóvel</label>
        <textarea 
          v-model="descricao"
          class="form-control textarea-grey"
          name="desc"  
          id="descricao" 
          cols="60" 
          rows="10">
        </textarea>
      </div>

      <div class="form-group  col-sm-2">
        <label for="area">Área</label>
        <div>
          <input
            type="number"
            class="form-control input-group input-grey area"
            id="area"
            v-model="area"
            placeholder="Área (apenas números)"
          >   
        </div>
      </div>

      <div class="form-group col-sm-2">
        <label for="numQuartos">Números de quartos</label>
        <input
          type="number"
          class="form-control input-grey quartos"
          v-model="numQuartos"
          id="numQuartos"
          aria-describedby="emailHelp"
          placeholder="Número de quartos"
        >
      </div>

      <div class="form-group col-sm-2">
        <label for="numBanheiros">Números de banheiro</label>
        <input
          type="number"
          class="form-control input-grey banheiros"
          v-model="numBanheiros"
          id="numBanheiros"
          aria-describedby="emailHelp"
          placeholder="Número de banheiros"
        >
      </div>

      <div class="form-group col-sm-2">
        <label for="preco">Preço</label>
        <money
          id="preco"
          v-model="preco"
          v-bind="money"
          class="form-control input-grey preco"
          placeholder="Digite o Preço"
        ></money>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            descricao: "",
            numBanheiros: "",
            preco: "",
            numQuartos: "",
            area: "",
            money: {
                decimal: ",",
                thousands: ".",
                prefix: " ",
                suffix: " ",
                precision: 2,
                masked: true
            }
        }
    }
}
</script>

<style>
    .input-grey {
        margin-bottom: 25px;
        margin-top: 0px;
        display: block;
        height: 45px;
        border-radius: 5px;
        border: 0;
        color: #1a212f;
        background: #ccc;
        transition: 0.3s ease;
        }
</style>