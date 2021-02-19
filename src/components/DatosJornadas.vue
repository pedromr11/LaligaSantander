<template>
    
    <h2>Jornada:</h2>

    <ul v-for="(jornadas, jorna) in jornada" :key="jorna">
        <li v-if="this.jor == jornadas.round">{{jornadas.round}}</li>
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
    mounted() {
        axios
            .get('http://localhost:3000/matches')
            .then(response => {
                this.jornada = response.data
            })
    }
}
</script>