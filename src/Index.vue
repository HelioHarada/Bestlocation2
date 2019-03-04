<template>
    <div>
        <router-view></router-view>
        <input-busca></input-busca>
    </div>

</template>

<script>

import Login from '/home/helio/bestlocation/src/components/shared/login/Login.vue'

export default {
    components: {
        'input-busca' : Login
    }
  
}
</script>

<style>

</style>

