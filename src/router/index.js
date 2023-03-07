import Vue from 'vue'
import VueRouter from 'vue-router'

import RolViews from '../views/rolViews.vue'
import CrearRol from '@/components/crearRol.vue'
import ActualizarRol from '@/components/actualizarRol.vue'

import RegionalViews from '../views/regionalViews.vue'
import CrearRegional from '@/components/crearRegional.vue'
import ActualizarRegional from '@/components/actualizarRegional.vue'

import CentroFormacionViews from '../views/centroFormacionViews'
import CrearCentroFormacion from '@/components/l.vue'
import ActualizarCentroFormacion from '@/components/actualizarCentroFormacion.vue'

import CategoriaViews from '@/views/categoriaViews'
import CrearCategoria from '@/components/crearCategoria.vue'
import ActualizarCategoria from '@/components/actualizarCategoria.vue'

import FichaViews from '@/views/fichaViews.vue'
import CrearFicha from '@/components/crearFicha.vue'
import ActualizarFicha from '@/components/actualizarFicha.vue'

import TipoRevisionViews from '../views/tipoRevisionViews.vue'
import CrearTipoRevision from '@/components/crearTipoRevision.vue'
import ActualizarTipoRevision from '@/components/actualizarTipoRevision.vue'


import ProgramaViews from '../views/programaViews.vue'
import CrearPrograma from '@/components/crearPrograma.vue'

Vue.use(VueRouter)

const routes = [
  
  // ROL ---------------------------------------------------------------------------
  {
    path: '/rol',
    name: 'rol',
    component: RolViews
  },
  {
    path: '/crearRol',
    name: 'crearRol',
    component: CrearRol
  },
  {
    path: '/actualizarRol/:id',
    name: 'actualizarRol',
    component: ActualizarRol
  },


  //REGIONAL ------------------------------------------------------------------------
  {
    path: '/regional',
    name: 'regional',
    component: RegionalViews
  },
  {
    path: '/crearRegional',
    name: 'crearRegional',
    component: CrearRegional
  },
  {
    path: '/actualizarRegional/:id',
    name: 'actualizarRegional',
    component: ActualizarRegional
  },
  
  
  //CENTRO DE FORMACION -------------------------------------------------------------
  {
    path: '/centroFormacion',
    name: 'centroFormacion',
    component: CentroFormacionViews
  },

  {
    path: '/crearCentroFormacion1',
    name: 'crearCentroFormacion1',
    component: CrearCentroFormacion
  },

  //CATEGORIA -----------------------------------------------------------------------
  {
    path: '/categoria',
    name: 'categoria',
    component: CategoriaViews
  },
  {
    path: '/crearCategoria',
    name: 'crearcategoria',
    component: CrearCategoria
  },
  {
    path: '/actualizarCategoria/:id',
    name: 'actualizarCategoria',
    component: ActualizarCategoria
  },


  //FICHA ---------------------------------------------------------------------------
  {
    path: '/ficha',
    name: 'ficha',
    component: FichaViews
  },
  {
    path: '/crearFicha',
    name: 'crearFicha',
    component: CrearFicha
  },
  {
    path: '/actualizarFicha/:id',
    name: 'actualizarFicha',
    component: ActualizarFicha
  },


  //REVISION -----------------------------------------------------------------------
  {
    path: '/tipoRevision',
    name: 'tipoRevision',
    component: TipoRevisionViews
  },
  {
    path: '/crearTipoRevision',
    name: 'crearTipoRevision',
    component: CrearTipoRevision
  },
  {
    path: '/actualizarTipoRevision/:id',
    name: 'actualizarTipoRevision',
    component: ActualizarTipoRevision
  },

  //PROGRAMA -----------------------------------------------------------------------
  {
    path: '/programa',
    name: 'programa',
    component: ProgramaViews
  },
  {
    path: '/crearPrograma',
    name: 'crearPrograma',
    component: CrearPrograma
  },
  // {
  //   path: '/actualizarPrograma/:id',
  //   name: 'actualizarPrograma',
  //   component: ActualizarPrograma
  // } 
  {
    path: '/actualizarCentroFormacion/:id',
    name: 'actualizarCentroFormacion',
    component: ActualizarCentroFormacion
  },   
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
