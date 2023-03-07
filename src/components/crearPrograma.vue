
<template>
<div>
    <div>
    <h2>Crear Programa</h2>
    
    <d1  class="row">
        <h3 class="col-sm-5"> Nombre Programa <input type="text" v-model="programas.nombre" class="blockquote-footer" /> </h3>
        <h3 class="col-sm-7"> Centro de Formacion <input type="text" v-model="programas.centros_de_formacion" class="blockquote-footer" /> </h3>
        <dd class="col-sm-5">
            <dl class="row">
                <dt class="col-sm-3"> <button class="btn btn-success" @click="crear()" type="submit"> Agregar </button> </dt>
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
name: 'crear',
data(){
    return{
        errors: [],
        programas:{
            nombre:null,
            centros_de_formacion:null
        }  
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
    async  cancelar() {
    this.$router.push("/programa")     
    }   

},

}
</script>