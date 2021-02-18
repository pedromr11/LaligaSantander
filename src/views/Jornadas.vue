<template>
  <div class="jornadas">
    <h1>Jornadas:</h1>
  </div>
  
  <div>
  <select name="menu" >
    
    <option v-for="(jornadas, jor) in laliga" :key="jor" value=jornadas.round> {{jornadas.round}}  </option>

  </select>
  </div>

</template>