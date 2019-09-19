<template>
  <div class="flex justify-center align-center flex-col bg-gray-300">
    <div class="fixed top-0 w-full flex flex-col pb-5 bg-gray-300 z-10">
      <h1 class="py-1 text-center text-2xl text-gray-900 font-bold">Buscar Condición</h1>
      <p class="pb-4 text-center font-medium text-lg text-gray-600">Escribe el nombre de tu condición para ver el protocolo sugerido</p>
      <input autocomplete="off" id="text_box" class="font-semibold self-center text-xl bg-white py-4 px-5 w-2/4 block focus:outline-none focus:shadow-xl border rounded-lg appearance-none leading-normal transition-all" type="text" v-model="name"/>
    </div>

    <div class="mt-40 self-center w-2/4">
      <!--<p>Ignore this text: {{this.name}}</p>-->
      <ul class='flex flex-col' v-show="name.length > 0">
      <div class="transition-all flex flex-col align-stretch justify-center" v-if="!filterConditions">
        <li class="text-center text-xl pt-8 text-gray-500 font-bold"> No se encontraron resultados </li>
        <i class="ri-emotion-unhappy-line text-6xl text-gray-500 self-center"></i>
        <div class="flex flex-row flex-wrap justify-center mt-4">
          <p class="text-center font-bold text-gray-700 text-base w-full">No encuentras tu condición</p>
          <button class="focus:outline-none self-center py-2 px-5 mt-2 bg-green-500 w-auto rounded-full text-sm text-white hover:shadow-lg transition-all">Intenta buscar en la lista completa</button>
        </div>
      </div>
      <div v-else class="w-11/12 self-center transition-all">
        <li class="transition-all hover:shadow-xl flex flex-wrap flex-row py-4 px-6 my-5 mx-2 bg-white items-center border rounded-lg" v-for="condition in filterConditions" :key="condition.index">
          <div class="flex flex-row w-3/4 flex-wrap content-flex-start">
            <p class="w-full text-normal font-medium text-gray-900">{{condition.name}}</p>
            <p class="inline-block w-auto bg-gray-300 rounded-full px-3 py-1 text-xs font-medium text-gray-700 mt-2">{{condition.category}}</p>
          </div>
          <div class="flex justify-end w-1/4 h-full">
            <button class="focus:outline-none relative bg-green-500 hover:bg-green-600 text-white box-sizing font-normal py-2 px-4 rounded text-sm seld-end transition-all">ver protocolo</button>
          </div>
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
        filterConditions: function(){
          let result;
          let entrada = this.name.toLowerCase(); //Pasamos a minusculas toda la cadena para evitar problemas con minusculas y mayusculas
          entrada = this.normalize(entrada); //eliminamos acentos y ñ
          if(entrada.length > 0){
            if(entrada.includes('cancer')){

            // eslint-disable-next-line
            this.name = 'Condición Progresiva del Sistema Inmune de '; //Reemplazamos cancer por el texto en la variable name del v-model
            
            entrada = entrada.replace('cancer', 'Condición Progresiva del Sistema Inmune de '); //Reemplazamos cancer por el texto en la variable que le pasamos al buscador
          }
          
          result = this.conditions.filter((condition) => this.normalize(condition.name.toLowerCase()).includes(entrada));
          if(result.length > 0){
            return result;
          }else{
            return false;
          }
          }
        },
    }
}

</script>