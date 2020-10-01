<template>
  <div class="flex justify-center align-center flex-col bg-graybgc relative w-full">
    <div class="top-0 w-full flex flex-col pb-10 px-4 lg:px-0 z-10 bg-white">
      <!-- <h1 class="py-1 text-center text-2xl text-black font-bold">Encuentre aquí su protocolo ImmuneBioGreenCell</h1>
      <p class="pb-8 text-center font-normal text-lg text-black">Escriba el nombre de su condición y luego haga click para ver el protocolo sugerido</p> -->
      <h1 class="py-1 text-center text-2xl text-black font-bold">Recomendaciones de Uso:</h1>
      <div class="flex flex-row justify-start items-center w-full lg:w-2/4 self-center text-center bg-white py-1 px-8 block focus:shadow-xl border border-graybgcdark transition-all rounded-full">
        <i class="ri-search-line text-graybgcdark text-2xl mr-4"></i>
        <input autocomplete="off" id="text_box" class="focus:outline-none appearance-none leading-normal placeholder-graybgcmedium text-lg w-full py-3" type="text" v-model="name" placeholder="Escriba aqui el nombre de la condición "/>
      </div>
    </div>

    <div class="mt-4 lg:mt-12 self-center items-center lg:w-2/4 w-full">
      <!--<p>Ignore this text: {{this.name}}</p>-->
      <ul class='flex flex-col content-center mx-auto lg:w-full md:w-full'>
        <div class="transition-all flex flex-col align-stretch justify-center" v-if="filterConditions == false">
          <li class="text-center text-xl pt-8 text-graybgcdark font-medium"> No se encontraron resultados </li>
          <i class="ri-emotion-unhappy-line text-6xl text-graybgcdark self-center"></i>
          <div class="flex flex-row flex-wrap justify-center mt-4">
            <button id="btnClear" @click="clearsearch()" class="flex flex-row justify-center items-center hover:text-black focus:outline-none self-center py-3 px-5 mt-3 w-auto text-lg text-graybgcdark transition-all">Intenta buscar en la lista completa <i class="ri-search-line ml-2"></i></button>
          </div>
        </div>

        <div v-else class="w-11/12 sm:w-full self-center transition-all">
          <h1 v-show="cpsi" class="text-left font-normal text-black text-xl">Condiciones progresivas del sistema inmune</h1>
          <li v-for="condition in cpsi" :key="condition.index">
              <router-link :to="{name:'protocolos', params:{id: condition.idProtocolo}}" class="transition-all hover:shadow-lg flex flex-no-wrap lg:flex-wrap flex-col lg:flex-row py-4 pl-4 pr-3 lg:pl-4 pr-3 my-6 mx-auto bg-white items-center md:justify-center border rounded-lg w-full">
                <div class="flex flex-col lg:flex-row w-full lg:w-3/4 flex-wrap justify-center lg:justify-start items-center">
                  <p class="w-full text-center lg:text-left text-base font-normal text-black">{{condition.name}}</p>
                </div>
                <div class="flex md:justify-center lg:justify-end md:w-full lg:w-1/4 h-full">
                  <router-link v-if="condition.idProtocolo > 0" :to="{name:'protocolos', params:{id: condition.idProtocolo}}" class="focus:outline-none relative hover:text-white hover:bg-greenbgc-900 text-black box-sizing font-normal py-2 px-4 rounded-full text-sm self-end transition-all flex flex-row justify-center items-center">Ver recomendación<i class="ri-arrow-right-s-line ml-2 text-base"></i></router-link>
                </div>
              </router-link>
          </li>
          <li v-if="cpsi == false" class="text-graybgcdark transition-all flex flex-no-wrap lg:flex-wrap flex-col lg:flex-row py-4 pl-4 pr-3 lg:pl-4 pr-3 my-3 mx-auto items-center md:justify-center rounded-lg w-full">No se encuentran resultados para esta categoría</li>

          <!--<h1 class="text-left font-normal text-black text-xl" >Condiciones en etapa inicial y etapa avanzada</h1>
          <li v-for="condition in etapas" :key="condition.index">
              <router-link :to="{name:'protocolos', params:{id: condition.idProtocolo}}" class="transition-all hover:shadow-lg flex flex-no-wrap lg:flex-wrap flex-col lg:flex-row py-4 pl-4 pr-3 lg:pl-4 pr-3 my-6 mx-auto bg-white items-center md:justify-center border rounded-lg w-full">
                <div class="flex flex-col lg:flex-row w-full lg:w-3/4 flex-wrap justify-center lg:justify-start items-center">
                  <p class="w-full text-center lg:text-left text-base font-normal text-black">{{condition.name}}</p>
                </div>
                <div class="flex md:justify-center lg:justify-end md:w-full lg:w-1/4 h-full">
                  <router-link :to="{name:'protocolos', params:{id: condition.idProtocolo}}" class="focus:outline-none relative hover:text-white hover:bg-greenbgc-900 text-black box-sizing font-normal py-2 px-4 rounded-full text-sm self-end transition-all flex flex-row justify-center items-center">Ver recomendación<i class="ri-arrow-right-s-line ml-2 text-base"></i></router-link>
                </div>
              </router-link>
          </li>
          <li v-if="etapas == false" class="text-graybgcdark transition-all flex flex-no-wrap lg:flex-wrap flex-col lg:flex-row py-4 pl-4 pr-3 lg:pl-4 pr-3 my-3 mx-auto items-center md:justify-center rounded-lg w-full">No se encuentran resultados para esta categoría</li>-->

          <h1 class="text-left font-normal text-black text-xl">Otras condiciones</h1>
          <li v-for="condition in others" :key="condition.index">
              <router-link :to="{name:'protocolos', params:{id: condition.idProtocolo}}" class="transition-all hover:shadow-lg flex flex-no-wrap lg:flex-wrap flex-col lg:flex-row py-4 pl-4 pr-3 lg:pl-4 pr-3 my-6 mx-auto bg-white items-center md:justify-center border rounded-lg w-full">
                <div class="flex flex-col lg:flex-row w-full lg:w-3/4 flex-wrap justify-center lg:justify-start items-center">
                  <p class="w-full text-center lg:text-left text-base font-normal text-black">{{condition.name}}</p>
                </div>
                <div class="flex md:justify-center lg:justify-end md:w-full lg:w-1/4 h-full">
                  <router-link v-if="condition.idProtocolo > 0" :to="{name:'protocolos', params:{id: condition.idProtocolo}}" class="focus:outline-none relative hover:text-white hover:bg-greenbgc-900 text-black box-sizing font-normal py-2 px-4 rounded-full text-sm self-end transition-all flex flex-row justify-center items-center">Ver recomendación<i class="ri-arrow-right-s-line ml-2 text-base"></i></router-link>
                  <p v-if="condition.idProtocolo == 0" class="focus:outline-none relative text-black box-sizing font-normal py-2 px-1 text-sm self-end transition-all flex flex-row justify-center items-center">Si usted desea consulte a su médico primario y/o especialista.</p>
                </div>
              </router-link>
          </li>
          <li v-if="others == false" class="text-graybgcdark transition-all flex flex-no-wrap lg:flex-wrap flex-col lg:flex-row py-4 pl-4 pr-3 lg:pl-4 pr-3 my-3 mx-auto items-center md:justify-center rounded-lg w-full">No se encuentran resultados para esta categoría</li>


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
        },
        clearsearch(){
          this.name = ""
        }
    },  
    computed:{
        ...mapState(['conditions']),
        /*newFilter: function(){
          let result;
          let entrada;

          if(this.name.includes('cancer')){
            entrada = 'Condición Progresiva del Sistema Inmune';
            this.name = 'Condición Progresiva del Sistema Inmune';
            this.name = this.name.concat(' ');
            return this.conditions.filter((condition)=>{
              return this.normalize(condition.name.toLowerCase()).match(entrada);
            });
          }else{
            entrada = this.name.toLowerCase();
            entrada = this.normalize(entrada);
            return this.conditions.filter((condition)=>{
              return this.normalize(condition.name.toLowerCase()).match(entrada);
            });
          }
            return this.conditions;
          },*/

        filterConditions: function(){
          let entrada = this.name; //eliminamos acentos y ñ
          entrada.toLowerCase();

          if(entrada.includes('cancer') ||
              entrada.includes('Cancer') ||
              entrada.includes('CANCER') ||
              entrada.includes('canser') || 
              entrada.includes('Canser') || 
              entrada.includes('CANSER')){
            // eslint-disable-next-line
            this.name = 'Condición Progresiva del Sistema Inmune'; //Reemplazamos cancer por el texto en la variable name del v-model
            //entrada = 'Condición Progresiva del Sistema Inmune de'; //Reemplazamos cancer por el texto en la variable que le pasamos al buscador
            entrada = this.name;
          }
          if(entrada.includes('vih') || 
              entrada.includes('Vih') || 
              entrada.includes('VIH') || 
              entrada.includes('hiv') ||
              entrada.includes('Hiv') || 
              entrada.includes('HIV') ||
              entrada.includes('sida') ||  
              entrada.includes('Sida') || 
              entrada.includes('SIDA')){
            // eslint-disable-next-line
            this.name = 'Virus de Inmunodeficiencia Humana'; //Reemplazamos cancer por el texto en la variable name del v-model
            //entrada = entrada.replace('Virus de Inmunodeficiencia Humana'); //Reemplazamos cancer por el texto en la variable que le pasamos al buscador
            entrada = this.name;
          }
          return this.conditions.filter((conditionpromise) => this.normalize(conditionpromise.name.toLowerCase()).match(this.normalize(entrada).toLowerCase()));
        },

        cpsi(){
          return this.filterConditions.filter((conditions) => conditions.category.includes('Estado'));
        },
        etapas(){
          return this.filterConditions.filter((conditions) => conditions.category.includes('Etapa'));
        },
        others(){
          return this.filterConditions.filter((conditions) => conditions.category.includes('otros'));
        },
    }
}

</script>