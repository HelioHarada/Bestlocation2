<template>
    <h2>lista</h2>
</template>

<script>
export default {
// data(){
//         this.$http.get('/someUrl').then(response => {

// // get body data
// this.someData = response.body;

// }, response => {
// // error callback
// });

  created() {

    let promise = this.$http.get('http://localhost:8080/api/users');
    promise .then(function(res) {
        console.log(res);
    });
  }

}
</script>

<style>

</style>
