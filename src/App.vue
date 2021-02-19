<template>
  <div id="menu">
    <router-link to="/">Inicio</router-link> 
    <br><br>
    <router-link to="/clasificacion">Clasificación</router-link>
    <br><br>
    <router-link to="/jornada">Jornada</router-link>
    <br><br>
    <router-link to="/nuevopartido">Nuevo Partido</router-link>
    <br><br>
    <router-link to="/equipos">Equipos</router-link>
    <br><br>
    <router-link to="/jugadores">Jugadores</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#menu {
  padding: 30px;
  width: 300px;
  height: 250px;
  position: absolute;
  top: 100px;
}
#menu a {
  font-weight: bold;
  color: black;
}
#menu a.router-link-exact-active {
  color: red;
}
</style>