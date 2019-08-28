<template>
    <div>
        <h2>Onde fica seu imóvel?</h2>
        <hr>
        <div class="row">
            <div class="form-group col-sm-3">
                <label for="cep">CEP</label>
                <a target="_blank" href="http://www.buscacep.correios.com.br/sistemas/buscacep/">Não sei meu CEP</a>
                <input
                
                type="text"
                class="form-control input-grey cep"
                id="cep"
                v-model="cep"
                placeholder="CEP"

                @keyup="buscarCEP"
                >
            </div>

            <div class="form-group col-sm-6">
                <label for="endereco">Endereço</label>
                <input
                :disabled="disableInput"
                type="text"
                class="form-control input-grey endereco"
                id="endereco"
                v-model="rua"
                placeholder="Endereço"
                >
            </div>

            <div class="form-group col-sm-2">
                <label for="numEndereco">Número</label>
                <input
                type="text"
                class="form-control input-grey num-endereco"
                id="numEndereco"
                v-model="numEndereco"
                placeholder="Número"
                >
            </div>

            <div class="form-group col-sm-4">
                <label for="complementoEndereco">Complemento</label>
                <input
                type="text"
                class="form-control input-grey complemento"
                id="complementoEndereco"
                v-model="complementoEndereco"
                placeholder="Complemento"
                >
            </div>

            <div class="form-group col-sm-4">
                <label for="bairro">Bairro</label>
                <input
                type="text"
                class="form-control input-grey bairro"
                id="bairro"
                v-model="bairro"
                placeholder="Bairro"
                >
            </div>

            <div class="form-group col-sm-4">
                <label for="cidade">Cidade</label>
                <input
                :disabled="disableInput"
                type="text"
                class="form-control input-grey cidade"
                id="cidade"
                v-model="cidade"
                placeholder="Cidade"
                >
            </div>
        
            <div class="form-group col-sm-2">
                <label for="estado">Estado</label>
            
                <select v-model="uf" class="form-control input-grey" :disabled="disableInput">
                <option v-for="uf in estados.UF">
                    {{ uf.sigla }}
                </option> 
                </select>
                <!-- <input
                type="text"
                class="form-control input-grey estado"
                id="estado"
                v-model="uf"
                placeholder="Estado"
                > -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            endereco: {},
            rua: "",
            numEndereco: "",
            complementoEndereco: "",
            cidade: "",
            uf: "",
            estados: {
                "UF": [
                    {"nome": "Acre", "sigla": "AC"},
                    {"nome": "Alagoas", "sigla": "AL"},
                    {"nome": "Amapá", "sigla": "AP"},
                    {"nome": "Amazonas", "sigla": "AM"},
                    {"nome": "Bahia", "sigla": "BA"},
                    {"nome": "Ceará", "sigla": "CE"},
                    {"nome": "Distrito Federal", "sigla": "DF"},
                    {"nome": "Espírito Santo", "sigla": "ES"},
                    {"nome": "Goiás", "sigla": "GO"},
                    {"nome": "Maranhão", "sigla": "MA"},
                    {"nome": "Mato Grosso", "sigla": "MT"},
                    {"nome": "Mato Grosso do Sul", "sigla": "MS"},
                    {"nome": "Minas Gerais", "sigla": "MG"},
                    {"nome": "Pará", "sigla": "PA"},
                    {"nome": "Paraíba", "sigla": "PB"},
                    {"nome": "Paraná", "sigla": "PR"},
                    {"nome": "Pernambuco", "sigla": "PE"},
                    {"nome": "Piauí", "sigla": "PI"},
                    {"nome": "Rio de Janeiro", "sigla": "RJ"},
                    {"nome": "Rio Grande do Norte", "sigla": "RN"},
                    {"nome": "Rio Grande do Sul", "sigla": "RS"},
                    {"nome": "Rondônia", "sigla": "RO"},
                    {"nome": "Roraima", "sigla": "RR"},
                    {"nome": "Santa Catarina", "sigla": "SC"},
                    {"nome": "São Paulo", "sigla": "SP"},
                    {"nome": "Sergipe", "sigla": "SE"},
                    {"nome": "Tocantins", "sigla": "TO"}

                ]
            },
            bairro: "",
            cep: "",
            disableInput:false,
        }
    },
    methods:{
        buscarCEP() {
        var self = this;
         self.disableInput = false;
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
                self.disableInput = false;
                return;
            }
            self.disableInput = true;
            self.endereco = endereco;
            self.cidade = endereco.localidade;
            self.uf = endereco.uf;
            self.bairro = endereco.bairro;
            self.rua = endereco.logradouro;
            });
        }
        },
    }
}
</script>