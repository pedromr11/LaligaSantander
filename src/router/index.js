import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/clasificacion',
    name: 'Clasificacion',
    component: () => import('../views/Clasificacion.vue')
  },
  {
    path: '/jornada',
    name: 'Jornada',
    
    component: () => import('../views/Jornadas.vue')
  },
  {
    path: '/nuevopartido',
    name: 'Nuevo Partido',
    
    component: () => import('../views/NuevoPartido.vue')
  },
  {
    path: '/equipos',
    name: 'Equipos',
    
    component: () => import('../views/Equipos.vue')
  },
  {
    path: '/jugadores',
    name: 'Jugadores',
    
    component: () => import('../views/Jugadores.vue')
  },
  {
    path: '/nuevojugador',
    name: 'Nuevo Jugador',
    
    component: () => import('../views/NuevoJugador.vue')
  },
  {
    path: '/eliminarjugador',
    name: 'Eliminar Jugador',
    
    component: () => import('../views/EliminarJugador.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router