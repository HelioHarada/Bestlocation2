<template>
    <div>
        <filho></filho>
    </div>
</template>
<script>
import Busca from '../descricao/Descricao.vue'
export default {
        components: {
        'filho' : Busca
    },
    created(){
        console.log("oi")
    }
}
</script>
