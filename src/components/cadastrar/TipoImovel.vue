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
                <select name="tipo" id="tipo" v-model="imovel.tipoImovel" class="form-control input-grey tipo ">
                    <option value="Casa">Casa</option>
                    <option value="Apartamento" selected>Apartamento</option>
                    <option value="Chacara">Chacara</option>
                    <option value="Kitnet">Kitnet</option>
                </select>
            </div>
            <div class="form-group col-sm-2">
                <label for="">Transação</label>
                <select name="transação" id="status" v-model="imovel.status" class="form-control input-grey transacao">
                    <option value="Venda" selected>Venda</option>
                    <option value="Aluguel">Aluguel</option>
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
import {getImovelID} from "../../api/";
export default {
props: ['imovelProp'],
  components: {
    'step-navigation' : stepNavigation
  },
    data(){
        return{
            imovel:{
                // titulo: "",
                // tipo:"Casa",
                // status: "Venda",
            }

        }
    },
    watch: {
        ImovelProp(newVal, oldVal) {
         console.log('Prop changed: ', newVal, ' | was: ', oldVal)
        this.setup()
        }
    },
    methods:{
        getImovelID,
        cloneDeep,
        updateImovel(){
            this.$emit('next', this.imovel)
        },
        async getImovel(){
            try{
                // Verificação de editar
                if(this.$route.params.id && (this.$route.params.type == "editar")){
                    console.log(this.$route.params.type)
                    const res = await this.getImovelID(this.$route.params.id);
                    this.imovel = { ...this.imovel, ...res.body.data[1]}
                    console.log(this.imovel)
                }
            }catch(e){
                console.log(e)
            }
        },
        setup(){
            if(this.imovelProp){
                this.imovel = this.cloneDeep(this.imovelProp)
            }else{         
                this.getImovel()
            }
        }
    },
  mounted() {
    this.setup()
  },
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