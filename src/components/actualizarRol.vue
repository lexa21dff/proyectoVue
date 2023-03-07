<template>
    <div>
      <div>
        <h2>Actualizar Rol</h2>
        <d1  class="row">
            <h3 class="col-sm-5"> <input type="text" v-model="rol.nombre" class="blockquote-footer" /> </h3>
            <dd class="col-sm-5">
                <dl class="row">
                    <dt class="col-sm-3"> <button class="btn btn-success" @click="actualizar(rol.id)" type="submit"> Guardar </button> </dt>
                    <dd class="col-sm-5"> <button class="btn btn-danger" @click="cancelar()" type="submit"> Cancelar </button> </dd>
                </dl>
            </dd>
        </d1>
        
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
          rol:{
            id:  null,
            nombre:null
          }
          
        }
    },
    methods:{
      async actualizar(id){
          await axios.put("http://127.0.0.1:8000/api/rol/"+id+"/",this.rol).then(response => {
              console.log(response)
              this.$router.push("/rol")
          });
      },
      async  cancelar() {
        this.$router.push("/rol")     
       }
      
  
    },
    async mounted(){  
      let id = this.$route.params.id
      await axios.get("http://127.0.0.1:8000/api/rol/"+id+"/").then(response=>{
        this.rol.id=response.data.id
        this.rol.nombre=response.data.nombre
        console.log(id)
      });
  
      },
  }
  </script>