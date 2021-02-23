<template>
    
    <div>
        <select v-model="name" >
            <option :value="elemento.name" v-for="(elemento, index) in jugadores" :key="index">{{elemento.name}}</option>
        </select>
        <br><br>
        <button :disabled="name === ''" @click="borrar(name)"> Eliminar Jugador </button>
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
        },
        borrar(variable){
            
            this.jugadores.forEach(element => {
                if (element == variable) {
                    axios.delete('http://localhost:3000/players?name='+ element)
                }
            });            
        }
    },
    watch: {
        nombreTeam(equipo){
            this.jugadores = this.obtenerPlayers(equipo);
        }
    }
}
</script>