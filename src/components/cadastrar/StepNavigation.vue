<template>
  <div>
    <hr>
    <div class="row d-flex justify-content-end step-navigation" v-bind:class="{ 'justify-content-between': showBack }">
      <button v-if="showBack" class="btn button-erro" @click="$emit('back')">Voltar</button>
      <button class="btn button-sucesso" @click="$emit('goNext')"><slot>Próximo</slot></button>
    </div>
  </div>
</template>
<script>
export default {
    props: {
      showBack: {
        default: true,
      },
      showNext: {
        default: true,
      },
      working: {
        default: false,
      },
      disable: {
        default: false,
      },
    },
}
</script>

<style>

.step-navigation{
  margin-top : 20px;
}

.button-sucesso{
  background-color: #2ECC71;
  color: white;
}

.button-erro{
  background-color: #E74C3C;
  color: white;
}
</style>