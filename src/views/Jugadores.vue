<template>
  <div class="jugadores">
    <h1>Jugadores:</h1>

    <div class="tabla">
    <table>
      <tr>
        <th>Equipo</th>
      </tr>

      <tr v-for="(equipo, index) in equipos" :key="index">
        <td @click="obtenerJugadores(equipo.name)">           
          {{equipo.name}} 
        </td>
      </tr>
    </table>    

  </div>

  <div class="datos" v-if="jugadores != ''">
    
    <DatosJugadores :nombreJugadores="jugadores" />

  </div>
  </div>
</template>

<script>

import axios from "axios";

import DatosJugadores from '@/components/DatosJugadores.vue';

export default {
  data(){
    return {
      equipos: [],
      jugadores: ""
    }
  },
  created() {
     axios
      .get('http://localhost:3000/clubs')
      .then(response => {
      this.equipos = response.data;
    })
  },
  components: {
      DatosJugadores
    },
  methods: {
    obtenerJugadores: function(nombreEquipo){
     this.jugadores = nombreEquipo;
    }
  }    

}
</script>

<style scoped>
.tabla{
  position: absolute;
}

.tabla, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  margin-left: 30%;
  width: 20%;
}

th, td {
  padding: 10px;
}

.datos{
    margin-left: 60%;
    width: 15%;    
}
</style>