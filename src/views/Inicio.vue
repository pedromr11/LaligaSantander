<template>
  <div class="home">
    <img alt="LaLiga Santander logo" src="..\assets\laliga-santander.png">
    <InicioC msg="Temporada 2020/2021"/>
  </div>
</template>

<script>
// @ is an alias to /src
import InicioC from '@/components/InicioC.vue'
export default {
  name: 'Inicio',
  components: {
    InicioC
  }
}
</script>

<style>
img{
  width: 600px;
  height: 600px;
}
</style>