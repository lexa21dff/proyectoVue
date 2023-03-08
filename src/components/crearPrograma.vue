
<template>
<div>
    
    <div class="row">
        <h4>Nombre del programa</h4>
        <input type="text" v-model="programas.nombre" class="blockquote-footer">
        <h4>Centro Formacion</h4>
        <div>
            <select :class="form-select" v-model="programas.centros_de_formacion" class="blockquote-footer">
                <option v-for="centro in centroFormacion" :key="centro.id" :value="centro.url ">{{ centro.nombre }}</option>
            </select>
        </div>
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
        programas:{
            nombre:null,
            centros_de_formacion:null
        },
        centroFormacion:null
    }
},
methods:{
    async  crear() {
    try {
    await axios.post('http://127.0.0.1:8000/api/programa/',this.programas)
    this.$router.push("/programa")
    } catch (e) {
    this.errors.push(e)
    
     }
    },
    async getCentroFormacion(){
            await axios.get('http://127.0.0.1:8000/api/centro/').then(response=>{
                this.centroFormacion = response.data
            })
    },
    async  cancelar() {
    this.$router.push("/programa")     
    }   

},
async mounted (){
    await this.getCentroFormacion()

}

}
</script>