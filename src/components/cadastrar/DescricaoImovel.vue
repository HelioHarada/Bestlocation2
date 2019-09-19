<template>
  <div>
    <h2 class="ml">Detalhes do seu imóvel</h2>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <div class="form-group col-sm-2">
          <label for="area">Área</label>
          <div>
            <input
              type="number"
              class="form-control input-group input-grey area"
              id="area"
              v-model="imovel.area"
              placeholder="200"
            />
          </div>
        </div>
        <label for="numQuartos" class="ml">Números de quartos</label>
        <div class="row ml">

          <button class="button-control" @click="less('quartos')">-</button>     
            <input
              type="number"
              class="form-control input-sm input-number"
              v-model="imovel.numQuartos"
              id="numQuartos"
              aria-describedby="emailHelp"
              placeholder="Número de quartos"
              min="0"
              max="5"
            />
          <button class="button-control" @click="imovel.numQuartos++">+</button>    

        </div>

        <label for="numBanheiros" class="ml">Números de banheiro</label>
        <div class="row ml">
        
          <button class="button-control" @click="less('banheiros')">-</button>

          <input
            type="number"
            class="form-control input-sm input-number"
            v-model="imovel.numBanheiros"
            id="numBanheiros"
            aria-describedby="emailHelp"
            min="0"
            max="5"
            step="1" 
   
          />
          <button class="button-control" @click="imovel.numBanheiros++">+</button>
      
        </div>


        <div class="form-group col-sm-2">
          <label for="preco">Preço</label>
          <money
            id="preco"
            v-model="imovel.valorImovel"
            v-bind="money"
            class="form-control input-grey preco"
            placeholder="Digite o Preço"
          ></money>
        </div>
      </div>
      <div class="form-group col-sm-6">
        <label for="descricao">Descreva o seu imóvel</label>
        <textarea
          v-model="imovel.descricao"
          class="form-control textarea-grey"
          name="desc"
          id="descricao"
          cols="60"
          rows="10"
        ></textarea>
      </div>

        <div>
            <div class="file-upload-form">
                <button class="btn button-sucesso" @click="pickImage">Enviar Imagens</button>
                <input style="display:none" type="file" ref="fileInput" accept="image/*" @change="previewImage" multiple>
            </div>
            <div class="image-preview row" v-if="imovel.imageData.length > 0">
                <div v-for="(urlImg, index) in imovel.imageData" :key="index">               
                    <img class="img-fluid img-thumbnail preview" :src="urlImg">
                </div>
                
            </div>
        </div>
    </div>

    <step-navigation @goNext="save" @back="goBack">Cadastrar</step-navigation>
  </div>
</template>

<script>
import stepNavigation from "./StepNavigation";
import cloneDeep from "lodash.clonedeep";
export default {
  props: ["imovelProp"],
  components: {
    "step-navigation": stepNavigation
  },
  data() {
    return {
      
      base:"",
      imovel: {
        descricao: "",
        numBanheiros: 1,
        valorImovel: "",
        numQuartos: 1,
        area: "",
        imageData: [],
      },
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
  watch: {
    ImovelProp(newVal, oldVal) {
      this.setup();
    }
  },
  methods: {
    cloneDeep,
    less(type){
        if(type == 'quartos'){
          this.imovel.numQuartos --
          if(this.imovel.numQuartos < 0){
            this.imovel.numQuartos = 0
          }
        }else if(type == 'banheiros'){
          this.imovel.numBanheiros --
          if(this.imovel.numBanheiros < 0){
            this.imovel.numBanheiros = 0
          }
        }
        
    },
            pickImage(){
              this.$refs.fileInput.click();
            },
            previewImage: function(event) {
            // Reference to the DOM input element
            var input = event.target;
            var files = event.target.files;
            var base = [];
            // console.log(input.files.length)
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
           
                
                for(var i = 0; i < input.files.length; i++){
                   var file = files[i];
                (function(file) {
                        var name = file.name;
                        let self = this;
                        
                        var reader = new FileReader();  
                       
                        reader.onload = function(e) {  

                            // get file content  
                            
                            base.push(e.target.result);
                         
                        }
                           
                        reader.readAsDataURL(file);
                      
                    })(files[i]);
                  
            
                }
                this.imovel.imageData = base;
                console.log(this.imovel.imageData)
                // Start the reader job - read file as a data url (base64 format)
                
            }
        },

    updateImovel() {
      this.$emit("next", this.imovel);
    },
    goBack() {
      this.$emit("next", this.imovel);
      this.$emit("back");
    },
    async save() {
      try {
        console.log(typeof(this.imovel.valorImovel))
        await this.$emit("next", this.imovel);
        let imovel = await this.cloneDeep(this.imovelProp);
        console.log(imovel);
        this.$emit("persist", imovel);
      } catch (e) {
        console.log(e);
      }
    },
    setup() {
      if (this.imovelProp) {
        this.imovel = { ...this.imovel, ...this.cloneDeep(this.imovelProp) };
      }
    }
  },
  mounted() {
    this.setup();
  }
};
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
  background: #bdc3c7;
  transition: 0.3s ease;
}

.input-sm{
  width:3.5rem;
  min-width: 3rem;
  padding: 0.375rem 0.9rem;
  margin: 5px;
  border-radius: 5px;
  border: 0;
  background: #bdc3c7;
}

.button-control{
  border-radius: 25px;
  height: 30px;
  width: 30px;
  border: 0;
  background-color: #bdc3c7;
  margin-top: 10px;
}
.area{
  width: 5rem
}

.preco{
  width: 10rem;
}

.preview{
  max-width: 300px;
  max-height: 200px;
  width: 100%;
  height: 200px;
}

.ml{
  margin-left: 10px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>