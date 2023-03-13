<template>

  <div>
    <dl>
      <h2>actualizar ficha</h2>
      <h4>Ficha</h4>
      <input type="text" v-model="ficha.codigo"/>
      <h4>Fecha inicio</h4>
      <input type="date" v-model="ficha.fecha_inicio"/>
      <h4>Fecha finalizacion</h4>
      <input type="date" v-model="ficha.fecha_finalizacion"/>
      <h4>programa</h4>
      <div>
        <select :class="form-select" v-model="ficha.programa" class="blockquote-footer">
          <option v-for="programa in programa" :key="programa.id" :value="programa.url ">{{ programa.nombre }}</option>
        </select>
      </div>
      <button @click="actualizar(ficha.id)" type="submit">Guardar</button>
      <button @click="cancelar()" type="submit">Cancelar</button>
    </dl>
  </div>
</template>

<script>

import axios from 'axios' 
export default{
  name: 'actualizar',
  data(){
    return{
      errors: [],
      ficha:{
        id:null,
        codigo: null,
        fecha_inicio: null,
        fecha_finalizacion: null,
        programa:null
      } ,
      programa:{
        url:null,
        id:null,
        nombre:null
      }
    }
  },
  methods:{
    async getFicha(){
      let id = this.$route.params.id
      await axios.get("http://127.0.0.1:8000/api/ficha/"+id+"/").then(response=>{
        this.ficha.id=response.data.id
        this.ficha.codigo=response.data.codigo
        this.ficha.fecha_inicio=response.data.fecha_inicio
        this.ficha.fecha_finalizacion=response.data.fecha_finalizacion
        this.ficha.programa=response.data.programa
        this.getPrograma()
    });
    },
    async getPrograma (){
        await axios.get("http://127.0.0.1:8000/api/programa/").then(response=>{
          this.programa=response.data    
        });
    },

    async actualizar(id){
      await axios.put("http://127.0.0.1:8000/api/ficha/"+id+"/",this.ficha).then(response => {
        console.log(response)
        this.$router.push("/ficha")
      });
    },
    async  cancelar() {
      this.$router.push("/ficha")     
     }
    

  }, 
  async mounted(){ 
    await this.getFicha()  
    

    },
}
</script>