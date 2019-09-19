<template>
    <div>
        <h2 class="ml">Informações básicas</h2>
        <hr>
        <div class="row">
            <div class="form-group col-sm-3">       
                <label for="">Titulo do imóvel</label>
                <input
                type="titulo"
                class="form-control input-grey "
                v-model="imovel.titulo"
                id="titulo"
                aria-describedby="emailHelp"
                placeholder="Casa no zona Sul"
                >
            </div>

            <div class=" col-sm-2">
                <label for="">Tipo do imóvel</label>
                <select  autocomplete="off" name="tipo" id="tipo" v-model="imovel.tipo" class="form-control input-grey tipo ">
                    <option value="Casa">Casa</option>
                    <option value="Apartamento" selected>Apartamento</option>
                    <option value="Chacara">Chacara</option>
                    <option value="Kitnet">Kitnet</option>
                </select>
            </div>
            <div class="form-group col-sm-2">
                <label for="">Transação</label>
                <select name="transação" id="status" v-model="imovel.status" class="form-control input-grey transacao">
                    <option value="venda" selected>Venda</option>
                    <option value="aluguel">Aluguel</option>
                </select>   
            </div>
        </div>
        <step-navigation
            :showBack="false"
            @goNext="updateImovel"
        >
        </step-navigation>
    </div>
</template>

<script>
import stepNavigation from "./StepNavigation";
import cloneDeep from 'lodash.clonedeep'
export default {
props: ['imovelProp'],
  components: {
    'step-navigation' : stepNavigation
  },
    data(){
        return{
            imovel:{
                titulo: "",
                tipo:"Casa",
                status: "venda",
            }

        }
    },
    watch: {
        ImovelProp(newVal, oldVal) {
        this.setup()
        }
    },
    methods:{
        cloneDeep,
        updateImovel(){
            console.log(this.imovel)
            this.$emit('next', this.imovel)
        },
        setup(){
            if(this.imovelProp){
                console.log("clone")
                this.imovel = this.cloneDeep(this.imovelProp)
            }
           
        }
    },
  mounted() {
    this.setup()
  }

}
</script>

<style scoped>
.input-grey {
  margin-bottom: 25px;
  margin-top: 0px;
  display: block;
  height: 45px;
  border-radius: 5px;
  border: 0;
  color: #1a212f;
  background:#bdc3c7;
  transition: 0.3s ease;
}
</style>