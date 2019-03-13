<template>
    <h2>lista</h2>
</template>

<script>
export default {
data(){
        this.$http.get('/someUrl').then(response => {

// get body data
this.someData = response.body;

}, response => {
// error callback
});

}
}
</script>

<style>

</style>
