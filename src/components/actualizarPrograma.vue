<template>
    <div>
        <h2>Actualizar Programa</h2>
        <dl>
            <h4>Nombre del Programa</h4>
            <input type="text" v-model="programa.nombre" class="blockquote-footer">
            <h4>CentroFormacion</h4>
            <div>
            <select :class="form-select" v-model="programa.centros_de_formacion" class="blockquote-footer">
              <option v-for="CentroFormacion in centro" :key="CentroFormacion.id" :value="CentroFormacion.url ">{{ CentroFormacion.nombre }}</option>
            </select>
            </div>
            {{ programa }}
            <dd class="col-sm-5">
              <dl class="row">
                  <dt class="col-sm-3"> <button class="btn btn-success" @click="actualizar(programa.id)" type="submit"> Guardar </button> </dt>
                  <dd class="col-sm-5"> <button class="btn btn-danger" @click="cancelar()" type="submit"> Cancelar </button> </dd>
              </dl>
          </dd>
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
          programa:{
            id:  null,
            nombre:null,
            centros_de_formacion: null
          },
          centro : {
            url:null,
            id: null,
            nombre: null
          }
          
        }
    },
    methods:{
      async actualizar(id){
          await axios.put("http://127.0.0.1:8000/api/programa/"+id+"/",this.programa, ).then(response => {
              console.log(response)
              this.$router.push("/programa")
          });
      },
      async  cancelar() {
        this.$router.push("/programa")     
       },
       async getprograma (){
        let id = this.$route.params.id
        await axios.get("http://127.0.0.1:8000/api/programa/"+id+"/").then(response=>{
            this.programa.id=response.data.id
            this.programa.nombre=response.data.nombre
            this.programa.centros_de_formacion=response.data.centros_de_formacion
            this.getCentroFormacion()

        });

       },
      
      async getCentroFormacion(){
            await axios.get('http://127.0.0.1:8000/api/centro/').then(response=>{
                this.centro = response.data
            })
        } 
       
      
  
    },
    async mounted(){  
        await this.getprograma()
      },
  }
  </script>