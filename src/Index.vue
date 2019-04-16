<template>
    <div class="index">
        <router-view></router-view>
        
        <input-busca></input-busca>
    </div>

</template>

<script>

import Login from './components/shared/login/Login.vue'

export default {
    components: {
        'input-busca' : Login
    }
  
}
</script>

<style>
.index{
      margin-bottom: 65px;
}
</style>

