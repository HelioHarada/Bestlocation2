<template>
  <form>
  <div class="place-input">
    <input placeholder="Digite a cidade..." class="input-principal" v-model="query">

    <router-link tag="button"  class="btn-enviar" @click.native="closeMenu()" :to="{ name: 'lista', params: { query: query} }"><i class="fas fa-search icon-serach"></i></router-link>
  </div>
</form>
</template>

<script>
// import routes from '../../routes'

export default {

    data(){
        return{
            query : ""
        }
    },
    methods:{
    buscar(query){
        console.log(query)
        let promise = this.$http.get('http://bestlocation.com.br/api/searchimovel/?query='+query);
        promise .then(function(res) {
          console.log(res.body.list)

  
        });
    },
        closeMenu() {
                $('.navbar-collapse').collapse('hide');
            }
    }
    
}
</script>

<style>

.title-form{
    font-weight: 900; 
    text-shadow: 0.5px 0.2px #fff;
}

.icon-serach{
    color: white;
    font-size: 18px;
}

.place-input{
    background-color: white;
    height: 60px;
    border-radius: 4px;
    box-shadow:0px 3px 10px -4px #000;
}


.form-search{
    padding-top: 90px;
}


.input-principal{
    height: 100%;
    width: calc(100% - 60px);
    border: none;
    border-radius: 4px;
    padding: 0px 0px 0px 15px;
    font-size: 18px;
}

.input-principal:focus, .btn-enviar:hover, .btn-enviar:active{
    outline: none;
}


.btn-enviar{
    border-radius: 4px;
    height: 54px;
    width: 54px;
    margin: 3px 4px 0px 0px;
    float: right;
    border: none;
    background-color: #ff7f00;
    cursor: pointer;
}

.btn-enviar:hover{
    background-color: #ff8915;
}


</style>
