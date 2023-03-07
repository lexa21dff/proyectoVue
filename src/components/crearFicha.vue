  <template>
    <div>
      <div>
        <h2>Agregar Ficha</h2>
        <d1  class="row">
            <h3 class="col-sm-5"> codigo <input type="number" v-model="ficha.codigo" class="blockquote-footer" /> </h3>
            <h3 class="col-sm-5"> <input type="date" v-model="ficha.fecha_inicio" class="blockquote-footer" /> </h3>
            <h3 class="col-sm-5"> <input type="date" v-model="ficha.fecha_finalizacion" class="blockquote-footer" /> </h3>
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
        ficha:{
            codigo: null,
            fecha_inicio: null,
            fecha_finalizacion: null
        }  
      }
    },
    methods:{
      async  crear() {
       try {
        await axios.post('http://127.0.0.1:8000/api/ficha/',this.ficha) 
        this.$router.push("/ficha")
       } catch (e) {
        this.errors.push(e)
        
       }
      },
      async  cancelar() {
        this.$router.push("/ficha")     
       }   
  
    },
  
  }
</script>