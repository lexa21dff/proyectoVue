<template>
    <div>
      <h2>Actualizar CentroFormacion</h2>
      <d1  class="row">
        <h4>Nombre del Centro de Formacion</h4>
          <input type="text" v-model="CentroFormacion.nombre" class="blockquote-footer">
          <h4>Regional</h4>
          <div>
          <select :class="form-select" v-model="CentroFormacion.regional" class="blockquote-footer">
            <option v-for="regional in regionales" :key="regional.id" :value="regional.url ">{{ regional.nombre }}</option>
          </select>
          </div>
          <dd class="col-sm-5">
              <dl class="row">
                  <dt class="col-sm-3"> <button class="btn btn-success" @click="actualizar(CentroFormacion.id)" type="submit"> Guardar </button> </dt>
                  <dd class="col-sm-5"> <button class="btn btn-danger" @click="cancelar()" type="submit"> Cancelar </button> </dd>
              </dl>
          </dd>
      </d1>
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
            regional: null
          },
          regionales : {
            id: null,
            nombre: null
          }
          
        }
    },
    methods:{
      async actualizar(id){
          await axios.put("http://127.0.0.1:8000/api/centro/"+id+"/",this.CentroFormacion, ).then(response => {
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
            this.CentroFormacion.regional=response.data.regional
            this.getRegional()
            // this.getRegional(this.CentroFormacion.regional)
            console.log(id)
        });

       },
      
      async getRegional(){
            await axios.get('http://127.0.0.1:8000/api/regional/').then(response=>{
                this.regionales = response.data
            })
        } 
       
      
  
    },
    async mounted(){  
        await this.getCentroFormacion()
      },
  }
  </script>