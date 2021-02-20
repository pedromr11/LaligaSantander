<template>
    
    <h2>Jugadores</h2>        
    <ul v-for="(jugador, goles) in laliga" :key="goles">
        <li v-if="this.nombreJugadores == jugador.team" @click="informacionJugadores(jugador.name), informacionGoles(jugador.scores)">{{jugador.name}}</li>
    </ul>

    <div v-if="ocultar != ''">
        <h2>Informacion</h2>
        <ul v-for="(jugador, goles) in laliga" :key="goles">
            <li v-if="this.ocultar == jugador.name && this.nombreJugadores == jugador.team">Nombre: {{jugador.name}}</li>
            <li v-if="this.ocultar == jugador.name && this.nombreJugadores == jugador.team">Equipo: {{jugador.team}}</li>
            <li v-if="this.ocultar == jugador.name && this.nombreJugadores == jugador.team">Goles: {{jugador.scores}}</li>
        </ul>
        Goles: <input type="text" name="goles" id="goles" v-model="var1">        
        <input type="submit" name="enviar" value="enviar" @click="enviar">
        <br><br>
        <input type="submit" name="borrar" value="borrar jugador">
    </div> 

</template>

<script>

import axios from "axios";


export default {
    props: [
        "nombreJugadores"
    ],
    data() {
        return {
            laliga: [],
            ocultar: "",
            goles: "",
            var1: ''
        }
    },
    created() {
        axios 
            .get('http://localhost:3000/players')
            .then(response => {
              this.laliga = response.data
            })        
    }, 
    methods: {
        informacionJugadores: function(nombreJugador){
            this.ocultar = nombreJugador;
        },
        informacionGoles: function(golesMetidos){
            this.goles = golesMetidos;
        },
        enviar(){
            let put = {
                scores: this.goles + this.var1
            };
            axios.put('http://localhost:3000/players', put)
        }
    }
}
</script>

<style>
li{
    list-style-type: none;
}
</style>
