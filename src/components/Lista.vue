<template>
  <div>
    <h1>Condiciones</h1>
    <input id="text_box" type="text" v-model="name"/>
    <p>Ignore this text: {{this.name}}</p>
    <ul>
      <li v-if="!filterConditions"> No se encontraron resultados </li>
      <li v-else v-for="condition in filterConditions" :key="condition.index">{{condition.name}}</li>
    </ul>
  </div>
</template>

<script>

import {mapState} from 'vuex';

export default {
    name: 'Lista',
    data(){
      return{
        name: '',
      }
    },

    methods: {
      //Funcion para eliminar acentos y ñ
      normalize(str){
          let from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç"; 
          let to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc";
          let mapping = {};
          for(let i = 0; i <= from.length; i++){
            mapping[from.charAt(i)] = to.charAt(i);
          }

          let ret = [];
          for(let i = 0; i< str.length; i++){
            let c = str.charAt(i);
            if(mapping.hasOwnProperty(str.charAt(i))){
              ret.push(mapping[c]);
            }else{
              ret.push(c);
            }
          }

          return ret.join('');
        }
    },
    computed:{
        ...mapState(['conditions']),
        filterConditions(){
          let result;
          let entrada = this.name.toLowerCase(); //Pasamos a minusculas toda la cadena para evitar problemas con minusculas y mayusculas
          entrada = this.normalize(entrada); //eliminamos acentos y ñ
          if(entrada.includes('cancer de ') || entrada.includes('cancer de') || entrada.includes('cancer ') || entrada.includes('cancer')){

            // eslint-disable-next-line
            this.name = 'condicion progresiva del sistema inmune. de '; //Reemplazamos cancer por el texto en la variable name del v-model
            
            entrada = entrada.replace('cancer', 'condicion progresiva del sistema inmune. de '); //Reemplazamos cancer por el texto en la variable que le pasamos al buscador
          }
          
          result = this.conditions.filter((condition) => this.normalize(condition.name.toLowerCase()).includes(entrada));

          if(result.length > 0){
            return result;
          }else{
            return false;
          }
        },
    }
}

</script>