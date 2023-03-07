
  <template>
    <div>
      <div>
        <h2>Agregar Rol</h2>
        <h6> Roles Permitidos(admin, instructor, aprendiz)</h6>
        <d1  class="row">
            <h3 class="col-sm-5"> <input type="text" v-model="rol.nombre" class="blockquote-footer" /> </h3>
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
            rol:{
                nombre:null
            }  
        }
    },
    methods:{
      async  crear() {
       try {
        await axios.post('http://127.0.0.1:8000/api/rol/',this.rol)
        this.$router.push("/rol")
       } catch (e) {
        this.errors.push(e)
        
       }
      },
      async  cancelar() {
        this.$router.push("/rol")     
       }   
  
    },
  
  }
</script>