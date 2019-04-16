<template>
<div class="container-fluid">
 <div class="table-responsive " >
 <table class="table table-hover table-striped table-dark">
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
   <tr v-for="(usuario, index) in usuarios" v-bind:key="index" >
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

methods:{
  getUser(){
    let promise = this.$http.get('http://bestlocation.com.br/api/users');
    promise .then(function(res) {
        console.log(res.body[3]);
          this.usuarios = res.body
    });
  },

    deletarUser(id){
      console.log(id);
       let promise = this.$http.delete('http://bestlocation.com.br/api/users'+id);

            promise.then(function(res){

         
                // location.reload;
                location.reload();
            });
    },
},

  created() {
    this.getUser();
  }

}
</script>
