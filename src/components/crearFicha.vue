  <template>
    <div>
      <h2>Crear Ficha</h2>
      <div>
        <h4>ficha</h4>
        <input type="text" v-model="ficha.codigo" class="blockquote-footer">
        <h4>fecha de inicio</h4>
        <input type="date" v-model="ficha.fecha_inicio" class="blockquote-foote">
        <h4>fecha de finalizacion</h4>
        <input type="date" v-model="ficha.fecha_finalizacion" class="blockquote-foote">
        <h4>Programa</h4>
        <div>
          <select :class="form-select" v-model="ficha.programa" class="blockquote-footer">
            <option v-for="programa in programas" :key="programa.id" :value="programa.url">{{ programa.nombre }}</option>
          </select>
        </div>
        {{ ficha }}
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
      ficha:{
        id:null,
        codigo: null,
        programa: null,
        fecha_inicio: null,
        fecha_finalizacion: null,
        },
        programas:{
          id:null,
          nombre:null,
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
      async getPrograma(){
        await axios.get('http://127.0.0.1:8000/api/programa/').then(response=>{
          this.programas = response.data
        })
      },
      async  cancelar() {
        this.$router.push("/ficha")     
      },

  
    },
    async mounted(){
      await this.getPrograma()

    }
  
  }
</script>