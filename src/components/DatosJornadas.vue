<template>
    
    <ul v-for="(jornadas, jorna) in jornada" :key="jorna">
        <li v-if="this.jor == jornadas.round">{{jornadas.team1}} {{jornadas.score}} {{jornadas.team2}}</li>
    </ul>

</template>

<script>

import axios from "axios";

export default {
    
    props: [
        "jor"
    ],
    data(){
        return {
            jornada: []
        }
    },
    methods: {
        conseguirJornadas(valor){
            axios
            .get('http://localhost:3000/matches?round='+ valor)
            .then(response => {
                this.jornada = response.data
            })
        }
    },
    watch: {
        jor(valorNuevo){
            this.jornada = this.conseguirJornadas(valorNuevo);
        }
    }
}
</script>

<style>
li{
    list-style-type: none;
}
</style>