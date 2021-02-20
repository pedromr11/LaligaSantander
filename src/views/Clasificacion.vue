<template>
  
   <div class="clasificacion">
    <h1>Clasificacion:</h1>
  </div>
  
  <div class="tabla">
    <table>
      <tr>
        <td>Equipo</td>
        <td>Puntos</td> 
      </tr>
      <tr v-for="(equipo, puntos) in laliga" :key="puntos">
        <td @click="obtenerJugadores(equipo.name)">{{equipo.name}}</td>
        <td>{{equipo.points}}</td>
      </tr>
    </table>
  </div>

  <div class="datos" v-if="gol != ''">
    
    <DatosEquipo :nombreJugadores="gol" />

  </div>

</template>

<script>

import axios from "axios";

import DatosEquipo from '@/components/DatosEquipo.vue';

export default {
    data() {
        return {
            laliga: [] ,
            gol: ""
        }
    },
    mounted() {
        axios 
            .get('http://localhost:3000/clubs')
            .then(response => {
              this.laliga = response.data
            })
        
    },
    components: {
      DatosEquipo
    },
    methods: {
      obtenerJugadores: function(nombreEquipo){
       this.gol = nombreEquipo;

      }
    }    
}
</script>

<style>

.tabla, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  margin-left: 25%;
  width: 20%;
}

.tabla{
  position: absolute;
}

th, td {
  padding: 15px;
}

.datos{
    margin-left: 60%;
    width: 15%;    
}

</style>