<template>
    <div>
      <div>
        <h2>Actualizar CentroFormacion</h2>
        <d1  class="row">
            <h3 class="col-sm-5"> <input type="text" v-model="CentroFormacion.nombre" class="blockquote-footer" /> </h3>
            <h3 class="col-sm-5"> <input type="text" v-model="regional.nombre" class="blockquote-footer" /> </h3>
            <dd class="col-sm-5">
                <dl class="row">
                    <dt class="col-sm-3"> <button class="btn btn-success" @click="actualizar(CentroFormacion.id)" type="submit"> Guardar </button> </dt>
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
          CentroFormacion:{
            id:  null,
            nombre:null,
            url: null
          },
          regional : {
            id: null,
            nombre: ""
          }
          
        }
    },
    methods:{
      async actualizar(id){
          await axios.put("http://127.0.0.1:8000/api/centro/"+id+"/",this.CentroFormacion, this.CentroFormacion.url=this.regional.id,).then(response => {
              console.log(response)
              this.$router.push("/CentroFormacion")
          });
      },
      async  cancelar() {
        this.$router.push("/CentroFormacion")     
       },
       async getCentroFormacion (){
        let id = this.$route.params.id
        await axios.get("http://127.0.0.1:8000/api/centro/"+id+"/").then(response=>{
            this.CentroFormacion.id=response.data.id
            this.CentroFormacion.nombre=response.data.nombre
            this.CentroFormacion.url=response.data.regional
            this.getRegional(this.CentroFormacion.url)
            console.log(id)
        });

       },
       async getRegional(url){
        await axios.get(url).then(response=>{
            this.regional.id=response.data.id
            this.regional.nombre=response.data.nombre

        })
    }
       
      
  
    },
    async mounted(){  
        await this.getCentroFormacion()
      },
  }
  </script>