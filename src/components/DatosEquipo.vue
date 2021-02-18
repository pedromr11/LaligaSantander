<template> 

        <h2>Jugadores y goles</h2>
        
        <ul v-for="(jugador, goles) in laliga" :key="goles">
            <li v-if="this.nombreJugadores == jugador.team">{{jugador.name}} | {{jugador.scores}}</li>
        </ul> 

</template>

<script>

import axios from "axios";

export default {    

    props: [
        "nombreJugadores"
    ],
    
    data() {
        return {
            laliga: []
        }
    },
    mounted() {
        axios 
            .get('http://localhost:3000/players')
            .then(response => {
              this.laliga = response.data
            })        
    }
}
</script>

