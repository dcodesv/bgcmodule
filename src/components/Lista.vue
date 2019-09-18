<template>
  <div class="flex justify-center align-center flex-col bg-gray-300">
    
    <div class="fixed top-0 w-full flex flex-col pb-5 bg-gray-300">
      <h1 class="py-1 text-center text-3xl text-gray-900 font-bold">Buscar Condición</h1>
      <p class="pb-4 text-center font-medium text-base text-gray-600">Escribe el nombre de tu condición para ver el protocolo sugerido</p>
      <input autocomplete="off" id="text_box" class="font-semibold self-center text-xl bg-white py-4 px-5 w-2/4 block focus:outline-none focus:shadow-xl border rounded-lg appearance-none leading-normal transition-all " type="text" v-model="name"/>
    </div>

    <div class="mt-48 self-center w-2/4">
      <!--<p>Ignore this text: {{this.name}}</p>-->
      <ul>
      <div class="flex flex-col align-stretch justify-center" v-if="!filterConditions">
        <li class="text-center pt-8 text-gray-600 font-bold"> No se encontraron resultados </li>
        <i class="ri-emotion-unhappy-line text-6xl text-gray-500 self-center"></i>
      </div>
      <div v-else class="">
        <li class="flex flex-wrap flex-row py-6 px-5 m-4 bg-white items-center border rounded-lg" v-for="condition in filterConditions" :key="condition.index">
          <p class="w-10/12 text-normal text-gray-900">{{condition.name}}</p>
          <button class="bg-green-600 hover:bg-green-800 text-white font-normal py-2 px-3 rounded text-sm seld-end">ver protocolo</button>
          <p class="w-full text-gray-500 text-sm font-medium">{{condition.category}}</p>
        </li>
      </div>
    </ul>
    </div>
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