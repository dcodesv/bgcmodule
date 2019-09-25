<template>
  <div class="flex justify-center align-center flex-col bg-graybgc relative">
    <div class="absolute top-0 w-full flex flex-col pb-5 px-4 lg:px-0 bg-graybgc z-10">
      <h1 class="py-1 text-center text-2xl text-gray-900 font-black">Buscar condición</h1>
      <p class="pb-4 text-center font-medium text-base text-gray-800 font-roboto">Escribe el nombre de tu condición y luego haz click para ver el protocolo sugerido</p>
      <input autocomplete="off" id="text_box" class="w-full lg:w-2/4 font-bold self-center text-xl bg-white py-4 px-5 block focus:outline-none focus:shadow-xl border rounded-lg appearance-none leading-normal transition-all" type="text" v-model="name"/>
    </div>

    <div class="mt-56 lg:mt-40 self-center lg:w-2/4 w-full">
      <!--<p>Ignore this text: {{this.name}}</p>-->
      <ul class='flex flex-col lg:w-11/12 md:w-full '>
        <div class="transition-all flex flex-col align-stretch justify-center" v-if="filterConditions == false">
          <li class="font-roboto text-center text-xl pt-8 text-gray-800 font-medium"> No se encontraron resultados </li>
          <i class="ri-emotion-unhappy-line text-6xl text-greenbgc-900 self-center"></i>
          <div class="flex flex-row flex-wrap justify-center mt-4">
            <p class="font-roboto text-center font-medium text-gray-800 text-base w-full">No encuentras tu condición</p>
            <button v-bind:id="btnClear" class="hover:bg-black font-roboto focus:outline-none self-center py-3 px-5 mt-3 bg-greenbgc-900 w-auto rounded-full text-sm text-white hover:shadow-lg transition-all">Intenta buscar en la lista completa</button>
          </div>
        </div>
        <div v-else class="w-11/12 sm:w-full self-center transition-all">
          <h1 class="text-center font-bold text-black text-xl">Condiciones progresivas del sistema inmune</h1>
          <li class="transition-all hover:shadow-xl flex flex-no-wrap lg:flex-wrap flex-col lg:flex-row py-4 px-4 lg:px-6 my-5 mx-2 bg-white items-center md:justify-center border rounded-lg" v-for="condition in filterConditions" :key="condition.index" v-show="condition.category.includes('Estadio 1 y 2') || condition.category.includes('Estadio 3 y 4')">
            <div class="flex flex-col lg:flex-row w-full lg:w-3/4 flex-wrap justify-center lg:justify-start items-center">
              <p class="font-roboto w-full text-center lg:text-left text-normal font-medium text-black">{{condition.name}}</p>
              <p class="font-roboto inline-block w-auto bg-graybgc lg:bg-black text-black lg:text-white rounded-full px-3 py-1 m-3 lg:m-0 lg:mt-2 text-xs font-medium">{{condition.category}}</p>
            </div>
            <div class="flex md:justify-center lg:justify-end md:w-full lg:w-1/4 h-full">
              <router-link :to="{name:'protocolos', params:{id: condition.idProtocolo}}" class="font-roboto focus:outline-none relative bg-greenbgc-900 hover:bg-black text-white box-sizing font-normal py-2 px-4 rounded text-sm self-end transition-all flex flex-row justify-center items-center">ver protocolo <i class="ri-arrow-right-line ml-2 text-base"></i></router-link>
            </div>
          </li>

          <h1 class="text-center font-bold text-black text-xl" >Condiciones en etapa inicial y etapa avanzada</h1>
          <li class="transition-all hover:shadow-xl flex flex-wrap flex-row py-4 px-6 my-5 mx-2 bg-white items-center border rounded-lg" v-for="condition in filterConditions" :key="condition.index" v-show="condition.category.includes('Etapa Inicial') || condition.category.includes('Etapa Avanzada')">
            <div class="flex flex-row w-3/4 flex-wrap content-flex-start">
              <p class="font-roboto w-full text-normal font-medium text-black">{{condition.name}}</p>
              <p class="font-roboto inline-block w-auto bg-black rounded-full px-3 py-1 text-xs font-medium text-white mt-2">{{condition.category}}</p>
            </div>
            <div class="flex justify-end w-1/4 h-full">
              <router-link :to="{name:'protocolos', params:{id: condition.idProtocolo}}" class="font-roboto focus:outline-none relative bg-greenbgc-900 hover:bg-black text-white box-sizing font-normal py-2 px-4 rounded text-sm self-end transition-all flex flex-row justify-center items-center">ver protocolo <i class="ri-arrow-right-line ml-2 text-base"></i></router-link>
            </div>
          </li>

          <h1 class="text-center font-bold text-black text-xl">Otras condiciones</h1>
          <li class="transition-all hover:shadow-xl flex flex-wrap flex-row py-4 px-6 my-5 mx-2 bg-white items-center border rounded-lg" v-for="condition in filterConditions" :key="condition.index" v-show="condition.category.includes('otros')">
            <div class="flex flex-row w-3/4 flex-wrap content-flex-start">
              <p class="font-roboto w-full text-normal font-medium text-black">{{condition.name}}</p>
              <p class="font-roboto inline-block w-auto bg-black rounded-full px-3 py-1 text-xs font-medium text-white mt-2">{{condition.category}}</p>
            </div>
            <div class="flex justify-end w-1/4 h-full">
              <router-link :to="{name:'protocolos', params:{id: condition.idProtocolo}}" class="font-roboto focus:outline-none relative bg-greenbgc-900 hover:bg-black text-white box-sizing font-normal py-2 px-4 rounded text-sm self-end transition-all flex flex-row justify-center items-center">ver protocolo <i class="ri-arrow-right-line ml-2 text-base"></i></router-link>
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

            if(entrada.includes('cancer') || entrada.includes('canser')){

            // eslint-disable-next-line
            this.name = 'Condición Progresiva del Sistema Inmune de '; //Reemplazamos cancer por el texto en la variable name del v-model
            
            entrada = entrada.replace('cancer', 'Condición Progresiva del Sistema Inmune de '); //Reemplazamos cancer por el texto en la variable que le pasamos al buscador
          }
          
          result = this.conditions.filter((condition) => this.normalize(condition.name.toLowerCase()).includes(entrada));
          if(result) {
            return result;
          }else{
            return false;
          }
        },
    }
}

</script>