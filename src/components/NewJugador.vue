<template>
    
    <form class="formulario">
        <fieldset>
            <br>
            Nombre: <input type="text" name="nombre" id="nombre" v-model="var1">
            <br><br>
            Equipo: <select v-model="var2">
                <option v-for="(elemento, index) in clubs" :key="index">{{elemento.name}} </option>
            </select>
            <br><br>
            Goles: <input type="text" name="gol" id="gol" v-model="var3">
            <br><br>
            <input class="boton" type="submit" value="Nuevo jugador" @click="enviar">
        </fieldset>
    </form>

</template>

<script>

import axios from "axios";

export default {
    
    props: [
        "formulario"
    ],    
    data() {
        return{
            clubs:[],
            var1: '',
            var2: '',
            var3: ''
        }
    },
    methods:{
        obtenerClubs(){
            axios
            .get('http://localhost:3000/clubs')
            .then(response => {
                this.clubs = response.data;
            })
        }, 
        enviar(){
            let post = {
                name: this.var1,
                team: this.var2,
                scores: this.var3
            };
            axios.post('http://localhost:3000/players', post)
            .then((result) => {
                console.log(result);
            })
        }
    },
    created(){
        this.obtenerClubs();
    }

}
</script>

<style scoped>
    .formulario{
        position: absolute;
        left: 55%;
        top: 20%;
        width: 40%;        
    }
</style>