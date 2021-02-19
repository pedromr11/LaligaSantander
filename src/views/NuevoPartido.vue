<template>
    <div class="partido">
        
        <h1>Nuevo Partido</h1>
        <br>
        <form class="formulario">
            <fieldset>                
                <br>
                <input type="text" name="jornada" id="jornada" v-model="var1">
                <br><br>
                <input type="date" name="fecha" id="fecha" v-model="var2">
                <br><br>
                <select v-model="var3">
                    <option value="0">...</option>
                    <option v-for="(elemento, index) in clubs" :key="index">{{elemento.name}}</option>
                </select>
                <br><br>
                <select v-model="bar4">
                    <option value="0">...</option>
                    <option v-for="(elemento, index) in clubs" :key="index">{{elemento.name}}</option>
                </select>
                <br><br><br>
                <input class="boton" type="submit" value="Nuevo partido" @click="enviar">
            </fieldset>
        </form>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            clubs: [],
            var1: '',
            var2: '',
            var3: '',
            bar4: ''

        }
    },
    methods: {
        obtenerClubs(){
            axios
            .get('http://localhost:3000/clubs')
            .then(response =>{
                this.clubs = response.data;
            })
        },
        enviar(){
            let post = {
            round: this.var1,
            date: this.var2,
            team1: this.var3,
            team2: this.bar4
        };
        axios.post('http://localhost:3000/matches', post)
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
        margin-left: 500px;
        
    }
</style>