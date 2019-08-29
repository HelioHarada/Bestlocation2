<template>
  <div>
    <button v-if="showBack" class="btn" @click="$emit('back')">Back</button>
    <button class="btn" @click="$emit('goNext')"><slot>Próximo</slot></button>
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