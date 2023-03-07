<template>
    <div>
        {{ regionales }}
        <div class="row">
            <h4>Nombre del Centro de Formacion</h4>
            <input type="text" v-model="CentroFormacion.nombre" class="blockquote-footer">
            <h4>Regional</h4>
            <select :class="form-select" v-model="CentroFormacion.regional" class="blockquote-footer">
                <option v-for="regional in regionales" :key="regional.id" :value="regional.id">{{ regional.nombre }}</option>
            </select>


            <dd class="col-sm-5">
                <dl class="row">
                    <dt class="col-sm-3"> <button class="btn btn-success" @click="crear()" type="submit"> Agregar </button> </dt>
                    <dd class="col-sm-5"> <button class="btn btn-danger" @click="cancelar()" type="submit"> Cancelar </button> </dd>
                </dl>
            </dd>
        </div>
    </div>
    
</template>

<script>
  
  import axios from 'axios' 
  export default{
    name: 'crear',
    data(){
        return{
            errors: [],
            CentroFormacion:{
                nombre:null,
                regional:null,
            },
            regionales:{
                id: null,
                nombre: null
            } 
        }
    },
    methods:{
      async  crear() {
       try {
        await axios.post('http://127.0.0.1:8000/api/centro/',this.CentroFormacion)
        console.log(this.CentroFormacion.regional)
        this.$router.push("/CentroFormacion")
       } catch (e) {
        this.errors.push(e)
        console.log(this.errors)
        
       }
      },
      async  cancelar() {
        this.$router.push("/CentroFormacion")     
       },
        async getRegional(){
            await axios.get('http://127.0.0.1:8000/api/regional/').then(response=>{
                this.regionales = response.data
            })
        } 
  
    },
    async mounted(){
        await this.getRegional()

    }
  
  }
</script> 


