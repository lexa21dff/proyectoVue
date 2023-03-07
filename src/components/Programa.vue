<template>
    
  <div class="container">
      <h3 class="p-3 text-center">Lista</h3>
      <table class="table table-striped table-bordered">
          <thead>
              <tr>
                  <th>Programas</th>
                  <!-- <th>Actualizar</th> -->
                  <th>Eliminar</th>
                
              </tr>
          </thead>
          <tbody>
              <tr v-for="programas in programas" :key="programas.id">
                  <td>{{programas.nombre}}</td>
                  <!-- <td> <button @click="actualizar(rol.id)" class="btn btn-success" >*</button></td> -->
                  <td> <button @click="eliminar(programas.id)" class="btn btn-outline-danger" >...</button></td>
                  
              </tr>
          </tbody>
      </table>
      <br>
      <h3> <button @click="crearPrograma()" class="btn btn-dark" >Agregar Programa</button> </h3>
  </div> 
</template>
<script>

import axios from 'axios'
export default{ 
name:'Programa',
data(){
    return{
        errors:[],
        programas:null,
    }
},
methods:{
    async getPrograma(){
    await axios.get("http://127.0.0.1:8000/api/programa/").then(response=>{
    this.programas = response.data
    })
    },
    crearPrograma(){
    this.$router.push("/crearPrograma")
    },
    actualizar(id){
    this.$router.push('/actualizarPrograma/'+id)
    },
    async eliminar (id){
    await axios.delete("http://127.0.0.1:8000/api/programa/"+id+"/")
    await this.getPrograma()
    }  
},   
async mounted() {  
    await this.getPrograma()
    }, 
}
</script>  

