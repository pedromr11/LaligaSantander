<template>
  <div class="jornadas">
    <h1>Jornadas:</h1>
  </div>
  
  <div>
  <select name="menu" v-model="jorn">
    
    <option> ... </option>
    <option v-for="(jornada, index) in jornadas" :key="index" :value= jornada.round > {{jornada.round}}  </option>

  </select>
  </div>

  <div>
    <DatosJornadas :jor="jorn" />
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
  components: {
    DatosJornadas
  },
  methods: {
    obtenerJornadas: function(numeroJornada){
      this.jorn = numeroJornada;
    },
    array(){
      axios
      .get('http://localhost:3000/matches')
      .then(response => {
        this.jornadas = response.data
      })
    }
  },
  created(){
    this.array();
  }
}
</script>