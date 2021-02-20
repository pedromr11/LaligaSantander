<template>

  <div class="equipos">
    <h1>Equipos:</h1>
  </div>

  <br>

  <div class="tabla">
    <table>
      <tr>
        <th>Equipo</th>
      </tr>

      <tr v-for="(equipo, index) in equipos" :key="index">
        <td>           
          {{equipo.name}} 

          <span> 
            <ul v-for="(jugador, index) in jugadores" :key="index">
              <li v-if="equipo.name == jugador.team"> {{jugador.name}} </li>
            </ul>
          </span>

        </td>
      </tr>
    </table>
    
  </div>

  <input class="boton" type="submit" value="Nuevo jugador">

  <div>
    <NewJugador />
  </div>

  

</template>


<script>

import axios from "axios";

import NewJugador from '@/components/NewJugador.vue';

export default {
  data(){
    return {
      equipos: [],
      jugadores: []
    }
  },
    created() {
      axios
        .get('http://localhost:3000/clubs')
        .then(response => {
        this.equipos = response.data;
      }),

      axios
        .get('http://localhost:3000/players')
        .then(response => {
          this.jugadores = response.data
        })

    },
    components: {
      NewJugador
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

li{
    list-style-type: none;
}

.boton{
  position: absolute;
  left: 70%;
  width: 200px;
  height: 50px;
}



</style>