<template>
  <div class="flex justify-center align-center flex-col bg-graybgc">
    <div class="fixed top-0 w-full flex flex-col pb-5 bg-graybgc z-10">
      <h1 class="font-roboto py-1 text-center text-2xl text-gray-900 font-black">Buscar condición</h1>
      <p class="pb-4 text-center font-medium text-base text-gray-800 font-roboto">Escribe el nombre de tu condición y luego haz click para ver el protocolo sugerido</p>
      <input autocomplete="off" id="text_box" class="font-bold font-roboto self-center text-xl bg-white py-4 px-5 w-2/4 block focus:outline-none focus:shadow-xl border rounded-lg appearance-none leading-normal transition-all" type="text" v-model="name"/>
    </div>

    <div class="mt-40 self-center w-2/4">
      <!--<p>Ignore this text: {{this.name}}</p>-->
      <ul class='flex flex-col' v-show="name.length > 0">
        <div class="transition-all flex flex-col align-stretch justify-center" v-if="!filterConditions">
          <li class="font-roboto text-center text-xl pt-8 text-gray-800 font-medium"> No se encontraron resultados </li>
          <i class="ri-emotion-unhappy-line text-6xl text-greenbgc-900 self-center"></i>
          <div class="flex flex-row flex-wrap justify-center mt-4">
            <p class="font-roboto text-center font-medium text-gray-800 text-base w-full">No encuentras tu condición</p>
            <button class="hover:bg-black font-roboto focus:outline-none self-center py-3 px-5 mt-3 bg-greenbgc-900 w-auto rounded-full text-sm text-white hover:shadow-lg transition-all">Intenta buscar en la lista completa</button>
          </div>
        </div>
        <div v-else class="w-11/12 self-center transition-all">
          <li class="transition-all hover:shadow-xl flex flex-wrap flex-row py-4 px-6 my-5 mx-2 bg-white items-center border rounded-lg" v-for="condition in filterConditions" :key="condition.index">
            <div class="flex flex-row w-3/4 flex-wrap content-flex-start">
              <p class="font-roboto w-full text-normal font-medium text-black">{{condition.name}}</p>
              <p class="font-roboto inline-block w-auto bg-black rounded-full px-3 py-1 text-xs font-medium text-white mt-2">{{condition.category}}</p>
            </div>
            <div class="flex justify-end w-1/4 h-full">
              <router-link to="/protocolos" class="font-roboto focus:outline-none relative bg-greenbgc-900 hover:bg-black text-white box-sizing font-normal py-2 px-4 rounded text-sm self-end transition-all flex flex-row justify-center items-center">ver protocolo <i class="ri-arrow-right-line ml-2 text-base"></i></router-link>
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