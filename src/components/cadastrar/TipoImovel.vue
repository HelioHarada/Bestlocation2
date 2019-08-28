<template>
    <div>
        <h2 align="center">Informações básicas</h2>
        <div class="form-group col-sm-2">       
            <label for="">Titulo do imóvel</label>
            <input
            type="titulo"
            class="form-control input-grey "
            v-model="titulo"
            id="titulo"
            aria-describedby="emailHelp"
            placeholder="Casa no zona Sul de Marília"
            >
        </div>

        <div class=" col-sm-2">
            <label for="">Tipo do imóvel</label>
            <select  autocomplete="off" name="tipo" id="tipo" v-model="tipo" class="form-control input-grey tipo ">
                <option value="Casa">Casa</option>
                <option value="Apartamento" selected>Apartamento</option>
                <option value="Chacara">Chacara</option>
                <option value="Kitnet">Kitnet</option>
            </select>
        </div>
        <div class="form-group col-sm-2">
            <label for="">Transação</label>
            <select name="transação" id="status" v-model="status" class="form-control input-grey transacao">
                <option value="venda" selected>Venda</option>
                <option value="aluguel">Aluguel</option>
            </select>   
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            titulo: "",
            tipo:"Casa",
            status: "venda",
        }
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
  background: #ccc;
  transition: 0.3s ease;
}
</style>