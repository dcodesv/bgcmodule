/*

    LA PALABRA "CONDICIONES PROGRESIVAS DEL SISTEMA INMUNE" SE AÑADIRA MEDIANTE CODIGO PARA
    DISMINUIR EL PESO DE LOS DATOS QUE DEBE CARGAR.

*/


import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
        state: {
            conditions:[
                {
                    id:1,
                    name:"Ano",
                    category:"Estadio 1 y 2"
                },
                {
                    id:2,
                    name:"Boca",
                    category:"Estadio 1 y 2"
                },
                //esto es un ID de Ejemplo, aqui debe seguir el correlativo de las condiciones Estadio 1 y 2 
                //hasta llegar a las Estadio 3 y 4
                {
                    id:3,
                    name:"Mama triple negativo y metástasis en el hígado",
                    category:"Estadio 3 y 4"
                },
                {
                    id:4,
                    name:"Acné",
                    category:"Etapa Inicial"
                },
                {
                    id:5,
                    name:"Acné",
                    category:"Etapa Avanzada"
                },
                {
                    id:6,
                    name:"Lupus",
                    category:"Otras Condiciones"
                },

            ]
        },
        mutations:{

        },
        actions:{

        }
    }) 