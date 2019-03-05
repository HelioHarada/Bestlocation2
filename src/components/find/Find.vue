<template>
        <div class="botui-app-container" id="my-botui-app">
            <bot-ui></bot-ui>
        </div>
</template>
<script>
  import initBotApp from '../../../src/botui'

  export default {
    name: 'find',
    mounted () {
      initBotApp()
    }
  }
</script>

