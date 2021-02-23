<template>
    
    <div>
        <select v-model="name">
            <option :value="elemento.name" v-for="(elemento, index) in jugadores" :key="index" >{{elemento.name}}</option>
        </select>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data(){
        return{
            jugadores: [],
            name: ''
        }
    },
    props: [
        "nombreTeam"
    ],
    methods: {
        obtenerPlayers(nombre){
            axios.get("http://localhost:3000/players?team=" + nombre)
            .then(response => {
                this.jugadores = response.data;
            })
        }
    },
    watch: {
        nombreTeam(equipo){
            this.jugadores = this.obtenerPlayers(equipo);
        }
    }
}
</script>