<template>
    <div>
        <h2> Agregar Centro Formacion</h2>
        <div class="row">
            <h4>Nombre del Centro de Formacion</h4>
            <h4>Regional</h4>
            <input type="text" v-model="centro.nombre" class="blockquote-footer">
            <select :class="form-select" v-model="centro.regional" class="blockquote-footer">
                <option v-for="regional in regional" :key="regional.id" :value="regional.id"></option>
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
            regional:{
                id: null,
                nombre: null
            } 
        }
    },
    methods:{
      async  crear() {
       try {
        await axios.post('http://127.0.0.1:8000/api/centro/',this.CentroFormacion)
        this.$router.push("/CentroFormacion")
       } catch (e) {
        this.errors.push(e)
        
       }
      },
      async  cancelar() {
        this.$router.push("/CentroFormacion")     
       },
        async getRegional(){
            await axios.get('http://127.0.0.1:8000/api/regional/').then(response=>{
                this.regional = response.data
            })
        } 
  
    },
    async mounted(){
        await this.getRegional()

    }
  
  }
</script>

