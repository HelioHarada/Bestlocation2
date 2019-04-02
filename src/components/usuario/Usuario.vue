<template>
<div class="container-fluid">
 <div class="row " >
 <table class="table">
 <thead>
   <tr>
     <th scope="col">#</th>
     <th scope="col">Name</th>
     <th scope="col">E-mail</th>
     <th scope="col">id</th>
     <th scope="col">Admin</th>
     <th scope="col">Deletar</th>
   </tr>
 </thead>
 <tbody>
   <tr v-for="(usuario, index) in usuarios" v-bind:key="usuario" >
     <th scope="row">{{index}}</th>
     <td>{{usuario.username}}</td>
     <td>{{usuario.email}}</td>
     <td>{{usuario._id}}</td>
     <td>{{usuario.isAdmin}}</td>
     <td><button  data-toggle="modal"  @click="deletarUser(usuario._id)" class="icon-delete btn btn-danger"><i class="far fa-trash-alt"></i></button></td>
   </tr>

 </tbody>
</table>
 </div>
</div>
</template>

<script>
export default {

  data(){
        return{
            usuarios: [],
        }
  },

  created() {

    let promise = this.$http.get('http://localhost:8080/api/users');
    promise .then(function(res) {
        console.log(res.body[3]);
         this.usuarios = res.body
    });
  },

  deletar(id){
    console.log(id);
    let promise = this
  }

}
</script>
