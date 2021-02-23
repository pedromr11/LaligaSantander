<template>
  
  <div class="jugadores">
    <h1>Eliminar Jugador:</h1>
  </div>

  <form class="formulario">
        <fieldset>         
            <br>
            Equipo: <select v-model="name">
                <option>...</option>
                <option :value="elemento.name" v-for="(elemento, index) in clubs" :key="index" >{{elemento.name}} </option>
            </select>
            <br><br><br>

            <Eliminar :nombreTeam="name"/>
          
        </fieldset>
  </form>

</template>

<script>

import axios from "axios";

import Eliminar from '@/components/Eliminar.vue';

export default {
  data() {
        return{
            clubs: [],
            jugadores: [],
            id: '',
            name:'',
            team: '',
            scores: ''

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
    }
  },
  created(){
        this.obtenerClubs();
        this.obtenerJugadores();
  },
  components: {
      Eliminar
    },
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