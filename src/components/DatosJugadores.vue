<template>
    
    <h2>Jugadores</h2>        
    <ul v-for="(jugador, goles) in laliga" :key="goles">
        <li v-if="this.nombreJugadores == jugador.team" @click="informacionJugadores(jugador.name, jugador.scores, jugador.team, jugador.id)">{{jugador.name}}</li>
    </ul>

    <div v-if="ocultar != ''">
        <h2>Informacion</h2>
        
        <span v-for="(jugador, goles) in laliga" :key="goles">
        <ul>
            <li v-if="this.ocultar == jugador.name && this.nombreJugadores == jugador.team">Nombre: {{jugador.name}}</li>
            <li v-if="this.ocultar == jugador.name && this.nombreJugadores == jugador.team">Equipo: {{jugador.team}}</li>
            <li v-if="this.ocultar == jugador.name && this.nombreJugadores == jugador.team">Goles: {{jugador.scores}}</li>
        </ul>
        <label  v-if="this.ocultar == jugador.name && this.nombreJugadores == jugador.team">Goles: </label><input type="text" name="goles" id="goles"  v-if="this.ocultar == jugador.name && this.nombreJugadores == jugador.team" v-model="var1">        
        <input type="submit" name="enviar" value="enviar"  v-if="this.ocultar == jugador.name && this.nombreJugadores == jugador.team" @click="enviar">
        <br><br>
        <input type="submit" name="borrar" value="borrar jugador"  v-if="this.ocultar == jugador.name && this.nombreJugadores == jugador.team" @click="borrar">
        </span>
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
            equipo: "",
            id: "",
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
        informacionJugadores: function(nombreJugador, golesMetidos, nombreEquipo, idJugador){
            this.ocultar = nombreJugador;
            this.goles = golesMetidos;
            this.equipo = nombreEquipo;
            this.id = idJugador;
        },
        enviar(){
            let post = {
                id: this.id,
                name: this.ocultar,
                team:  this.equipo,
                scores: parseInt(this.var1) + parseInt(this.goles)
            };
            axios.put('http://localhost:3000/players/'+this.id, post)
        },
        borrar(){
            axios.delete('http://localhost:3000/players/'+this.id)
        }
    }
}
</script>

<style>
li{
    list-style-type: none;
}
</style>
