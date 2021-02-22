<template>
  
  <div class="jugadores">
    <h1>Eliminar Jugador:</h1>
  </div>

  <form class="formulario">
        <fieldset>         
            <br>
            Equipo: <select>
                <option>...</option>
                <option v-for="(elemento, index) in clubs" :key="index" @click="informacion(elemento.name)">{{elemento.name}} </option>
            </select>
            <br><br><br>
          
            Jugadores: 
            <select>
              <option>...</option>
              <span v-for="(elemento, index) in jugadores" :key="index">                
                <option v-if="this.jugadoresEquipo == elemento.team">{{elemento.name}} </option>
              </span>
            </select> 
        </fieldset>
  </form>

</template>

<script>

import axios from "axios";

export default {
  data() {
        return{
            clubs: [],
            jugadores: [],
            jugadoresEquipo: []
        }
  },
  methods: {
    obtenerClubs(){
          axios
          .get('http://localhost:3000/clubs')
          .then(response => {
              this.clubs = response.data;
          })
    },
    obtenerJugadores(){
          axios
          .get('http://localhost:3000/players')
          .then(response => {
          this.jugadores = response.data
          })
    },
    informacion: function(players){
      this.jugadoresEquipo = players
    }
  },
  created(){
        this.obtenerClubs();
        this.obtenerJugadores();
  }
}
</script>

<style scoped>
    .formulario{
        position: absolute;
        left: 33%;
        top: 15%;
        width: 40%;        
    }
</style>