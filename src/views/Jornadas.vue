<template>
  <div class="jornadas">
    <h1>Jornadas:</h1>
  </div>
  
  <div>
  <select name="menu" >
    
    <option> ... </option>
    <option v-for="(jornada) in jornadas" :key="jornada" value= "jornada.round" @click="obtenerJornadas(jornada.round)"> {{jornada.round}}  </option>

  </select>
  </div>

</template>

<script>

import axios from "axios";

import DatosJornadas from '@/components/DatosJornadas.vue';

export default {
  data() {
    return {
      jornadas: [],
      jorn: ""
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/matches')
      .then(response => {
        this.jornadas = response.data
      })
  },
  components: {
    DatosJornadas
  },
  methods: {
    obtenerJornadas: function(numeroJornada){
      this.jorn = numeroJornada;
    }
  }
}
</script>