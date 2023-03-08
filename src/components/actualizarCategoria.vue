<template>
  <div>
    <div>
      <h2>Actualizar Categoria</h2>
      <label>Categoria</label>
      <input type="text" v-model="categoria.nombre"/>
      <button @click="actualizar(categoria.id)" type="submit">Guardar</button>
      <button @click="cancelar()" type="submit">Cancelar</button>
    </div>
  </div>
</template>
<script>

import axios from 'axios' 
export default{
  name: 'actualizar',
  data(){
      return{
        errors: [],
        categoria:{
          id:  null,
          nombre:null
        }
        
      }
  },
  methods:{
    async getActualizar(){
      let id = this.$route.params.id
      await axios.get("http://127.0.0.1:8000/api/regional/"+id+"/").then(response=>{
        this.regional.id=response.data.id
        this.regional.nombre=response.data.nombre

    });
  },
    async actualizar(id){
        await axios.put("http://127.0.0.1:8000/api/categoria/"+id+"/",this.categoria).then(response => {
            console.log(response)
            this.$router.push("/categoria")
        });
    },
    async  cancelar() {
      this.$router.push("/categoria")     
     }
    

  },
  async mounted(){  
    await this.getActualizar()
  }
    
}
</script>