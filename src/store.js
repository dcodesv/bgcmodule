/*

    LA PALABRA "CondiciónES PROGRESIVAS DEL SISTEMA INMUNE" SE AÑADIRA MEDIANTE CODIGO PARA
    DISMINUIR EL PESO DE LOS DATOS QUE DEBE CARGAR.

*/


import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
        state: {
            conditions:[ //Json que contiene las Condiciónes
                {
                    id:1,
                    name:"Condición Progresiva del Sistema Inmune De Ano. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:4 //Se agrego el relacionador de protocolos
                },//Colocare las Condiciónes en orden correlativo para mantener el orden
            /*    {
                    id:2,
                    name:"Condición Progresiva del Sistema Inmune De Ano. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },      */          
                {
                    id:3,
                    name:"Condición Progresiva del Sistema Inmune De Boca. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:4,
                    name:"Condición Progresiva del Sistema Inmune De Boca. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },
                {
                    id:5,
                    name:"Condición Progresiva del Sistema Inmune De Cabeza. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:6,
                    name:"Condición Progresiva del Sistema Inmune De Cabeza. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },/*
                {
                    id:7,
                    name:"Condición Progresiva del Sistema Inmune De Cara. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },*/
                {
                    id:8,
                    name:"Condición Progresiva del Sistema Inmune De Cara. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },/*
                {
                    id:9,
                    name:"Condición Progresiva del Sistema Inmune De Cervical. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },*/
                {
                    id:10,
                    name:"Condición Progresiva del Sistema Inmune De Cervical. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:11,
                    name:"Condición Progresiva del Sistema Inmune De Colon. Estadio 1 y 2  ",
                    category:"Estadio 1 y 2",
                    idProtocolo:4 
                },
                {
                    id:12,
                    name:"Condición Progresiva del Sistema Inmune De Colon. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:13,
                    name:"Condición Progresiva del Sistema Inmune De Colorectal. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:4 
                },
                {
                    id:14,
                    name:"Condición Progresiva del Sistema Inmune De Colorectal. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:15,
                    name:"Condición Progresiva del Sistema Inmune De Cuerda Vocal. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:16,
                    name:"Condición Progresiva del Sistema Inmune De Cuerda Vocal. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:17,
                    name:"Condición Progresiva del Sistema Inmune De Esófago. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:4 
                },
                {
                    id:18,
                    name:"Condición Progresiva del Sistema Inmune De Esófago. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:19,
                    name:"Condición Progresiva del Sistema Inmune De Estomago. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:4 
                },
                {
                    id:20,
                    name:"Condición Progresiva del Sistema Inmune De Estomago. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:21,
                    name:"Condición Progresiva del Sistema Inmune De Garganta. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:22,
                    name:"Condición Progresiva del Sistema Inmune De Garganta. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },
                {
                    id:23,
                    name:"Condición Progresiva del Sistema Inmune De Hígado. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:24,
                    name:"Condición Progresiva del Sistema Inmune De Hígado. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },
                {
                    id:25,
                    name:"Condición Progresiva del Sistema Inmune Hodgkin ",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:26,
                    name:"Condición Progresiva del Sistema Inmune Hodgkin. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:27,
                    name:"Condición Progresiva del Sistema Inmune De Huesos. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:28,
                    name:"Condición Progresiva del Sistema Inmune De Huesos. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },
                {
                    id:29,
                    name:"Condición Progresiva del Sistema Inmune De Mama Triple Negativo y Metástasis en el Hígado. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:30,
                    name:"Condición Progresiva del Sistema Inmune De Mamas. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:31,
                    name:"Condición Progresiva del Sistema Inmune De Mamas. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },
                {
                    id:32,
                    name:"Condición Progresiva del Sistema Inmune De Ovario. Estadio 3 y 4", //consultar este
                    category:"Estadio 1 y 2",
                    idProtocolo:9 
                },
                {
                    id:33,
                    name:"Condición Progresiva del Sistema Inmune De Páncreas. Estadio 1 y 2", 
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:34,
                    name:"Condición Progresiva del Sistema Inmune De Páncreas. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },
                {
                    id:35,
                    name:"Condición Progresiva del Sistema Inmune De Papilar de Tiroides. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:36,
                    name:"Condición Progresiva del Sistema Inmune De Piel (Mela) . Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:37,
                    name:"Condición Progresiva del Sistema Inmune De Piel (Mela) . Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },
                {
                    id:38,
                    name:"Condición Progresiva del Sistema Inmune De Próstata con metástasis al hueso. Estadio 3 y 4", //consultar este
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:39,
                    name:"Condición Progresiva del Sistema Inmune De Próstata. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:40,
                    name:"Condición Progresiva del Sistema Inmune De Próstata. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },
                {
                    id:41,
                    name:"Condición Progresiva del Sistema Inmune De Pulmones. Estadio 1 y 2  ",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:42,
                    name:"Condición Progresiva del Sistema Inmune De Pulmones. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:6
                },
                {
                    id:43,
                    name:"Condición Progresiva del Sistema Inmune De Riñones. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:44,
                    name:"Condición Progresiva del Sistema Inmune De Riñones. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:6
                },
                {
                    id:45,
                    name:"Condición Progresiva del Sistema Inmune De Rostro (Célula Basal). Estadio 1 y 2", //consultar este
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:46,
                    name:"Condición Progresiva del Sistema Inmune De Testículo. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:8
                },
                {
                    id:47,
                    name:"Condición Progresiva del Sistema Inmune De Tiroides. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:48,
                    name:"Condición Progresiva del Sistema Inmune De Tiroides. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },
                {/*
                    id:49,
                    name:"Condición Progresiva del Sistema Inmune De Uterino. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },*/
                {
                    id:50,
                    name:"Condición Progresiva del Sistema Inmune De Uterino. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:51,
                    name:"Condición Progresiva del Sistema Inmune De Vejiga. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:52,
                    name:"Condición Progresiva del Sistema Inmune De Vejiga. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },/*                
                {
                    id:53,
                    name:"Condición Progresiva del Sistema Inmune Non Hodgkin ",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:54,
                    name:"Condición Progresiva del Sistema Inmune Non Hodgkin. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },*/
                {  // aqui comienzan las Condiciónes por etapas
                    id:55,
                    name:"Acné. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:5 
                },
                {
                    id:56,
                    name:"Acné. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:6
                },
                {  
                    id:57,
                    name:"Alopecia. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:5 
                },
                {
                    id:58,
                    name:"Alopecia. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:6
                },
                {  
                    id:59,
                    name:"Amiloidosis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:5 
                },
                {
                    id:60,
                    name:"Amiloidosis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:6
                },
                {  
                    id:61,
                    name:"Bartolinitis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:62,
                    name:"Bartolinitis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:63,
                    name:"Blefaritis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:64,
                    name:"Blefaritis. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:65,
                    name:"Bronquiectasias. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:66,
                    name:"Bronquiectasias. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:9
                },
                {  
                    id:67,
                    name:"Bronquitis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:68,
                    name:"Bronquitis Aguda. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:69,
                    name:"Celulitis Periorbitaria. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:70,
                    name:"Celulitis Periorbitaria. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:71,
                    name:"Cerebritis. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:72,
                    name:"Cerebritis. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:73,
                    name:"Cervicitis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:74,
                    name:"Cervicitis. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:75,
                    name:"Cistitis Insterticial. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:76,
                    name:"Cistitis Insterticial. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:77,
                    name:"Clamidia. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:78,
                    name:"Clamidia. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:79,
                    name:"Coriorretinitis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:80,
                    name:"Coriorretinitis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:81,
                    name:"Coriza. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:82,
                    name:"Coriza. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:83,
                    name:"Crohn (Enfermedad de Crohn) . Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:84,
                    name:"Crohn (Enfermedad de Crohn) . Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:85,
                    name:"Dermatitis Atópica. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:86,
                    name:"Dermatitis Atópica. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:87,
                    name:"Dermatósis Ampollar. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:88,
                    name:"Dermatósis Ampollar. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:89,
                    name:"Diabetes Mellitus Tipo I. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:90,
                    name:"Diabetes Mellitus Tipo I. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:91,
                    name:"Difteria. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:92,
                    name:"Difteria. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:93,
                    name:"Eczema. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:94,
                    name:"Eczema. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:95,
                    name:"Enfermedad de Addison. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:96,
                    name:"Enfermedad de Addison. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:97,
                    name:"Enfermedad Pélvica Inflamatoria. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:98,
                    name:"Enfermedad Pélvica Inflamatoria. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:99,
                    name:"Enfermedad Pulmonar Obstructiva Crónica. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:100,
                    name:"Enfermedad Pulmonar Obstructiva Crónica. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:101,
                    name:"Enfermedades de la Laringe. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:102,
                    name:"Enfermedades de la Laringe. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:103,
                    name:"Epidermólisis Bullosa. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:104,
                    name:"Epidermólisis Bullosa. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:105,
                    name:"Esclerosis Lateral Amiotrófica. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:106,
                    name:"Esclerosis Lateral Amiotrófica. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:107,
                    name:"Esclerosis Múltiple. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:108,
                    name:"Esclerosis Múltiple. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:109,
                    name:"Esofagitis. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:110,
                    name:"Esofagitis. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:111,
                    name:"Faringoamigdalitis Aguda (angina) . Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:112,
                    name:"Faringoamigdalitis Aguda (angina) . Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },                
                {  
                    id:113,
                    name:"Fascitis Plantar. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:114,
                    name:"Fascitis Plantar. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:115,
                    name:"Gingivitis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:116,
                    name:"Gingivitis. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:117,
                    name:"Glomerulonefritis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:118,
                    name:"Glomerulonefritis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:119,
                    name:"Gonorrea. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:120,
                    name:"Gonorrea. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:121,
                    name:"Herpes Genital. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:122,
                    name:"Herpes Genital. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:123,
                    name:"Insuficiencia Respiratoria. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:124,
                    name:"Insuficiencia Respiratoria. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:125,
                    name:"Lupus Eritematos Sistémico. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:126,
                    name:"Lupus Eritematos Sistémico. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:127,
                    name:"Miastenia. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:128,
                    name:"Miastenia. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:129,
                    name:"Neumonía. Etapa inicial ", 
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {  
                    id:130,
                    name:"Neumonía. Etapa avanzada ", 
                    category:"Etapa Avanzada",
                    idProtocolo:7 
                },
                {  
                    id:131,
                    name:"Neurutis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:132,
                    name:"Neurutis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:133,
                    name:"Pancreatitis Aguda. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:134,
                    name:"Pancreatitis Aguda. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:135,
                    name:"Pancreatitis Crónica. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:136,
                    name:"Pancreatitis Crónica. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:137,
                    name:"Pancreatitis Necrosante. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:138,
                    name:"Pancreatitis Necrosante. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:139,
                    name:"Patologías del Conducto Auditivo. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:140,
                    name:"Patologías del Conducto Auditivo. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:141,
                    name:"Pericarditis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:142,
                    name:"Pericarditis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {
                    id:143,
                    name:"Peritonitis. Etapa inicial", 
                    category:"Etapa Inicial",
                    idProtocolo:3
                },
                {
                    id:144,
                    name:"Peritonitis. Etapa avanzada", 
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:145,
                    name:"Pie de atleta. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:5 
                },
                {
                    id:146,
                    name:"Pie de atleta. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:6
                },
                {  
                    id:147,
                    name:"Psoriasis. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:5 
                },
                {
                    id:148,
                    name:"Psoriasis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:6
                },
                {  
                    id:149,
                    name:"Reflujo Gástrico. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:150,
                    name:"Reflujo Gástrico. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:3
                },
                {  
                    id:151,
                    name:"Rinitis. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:152,
                    name:"Rinitis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:153,
                    name:"Rinosinusitis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:154,
                    name:"Rinosinusitis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:155,
                    name:"Sclerodema. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:156,
                    name:"Sclerodema. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:157,
                    name:"Sífilis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:158,
                    name:"Sífilis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:159,
                    name:"Síndrome Guillain-Barré. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:160,
                    name:"Síndrome Guillain-Barré. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:161,
                    name:"Tendinosis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:162,
                    name:"Tendinosis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:163,
                    name:"Tiroiditis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:164,
                    name:"Tiroiditis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:165,
                    name:"Tiroiditis de Hashimoto. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:166,
                    name:"Tiroiditis de Hashimoto. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },                
                {  
                    id:167,
                    name:"Tosferina (Tos convulsiva) . Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:168,
                    name:"Tosferina (Tos convulsiva) . Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:169,
                    name:"Tricomoniasis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:170,
                    name:"Tricomoniasis. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:171,
                    name:"Uretritis. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:172,
                    name:"Uretritis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:173,
                    name:"Urticaria. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:5 
                },
                {
                    id:174,
                    name:"Urticaria. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:6
                },
                {  
                    id:175,
                    name:"Uveitis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:176,
                    name:"Uveitis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:177,
                    name:"Vaginitis. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:178,
                    name:"Vaginitis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:179,
                    name:"Verrugas. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:5 
                },
                {
                    id:180,
                    name:"Verrugas. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:6
                },
                {  
                    id:181,
                    name:"Virus del Papiloma Humano. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:182,
                    name:"Virus del Papiloma Humano. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:183,
                    name:"Vulvitis. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:184,
                    name:"Vulvitis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:185,
                    name:"Vulvo Vaginitis Candidiasica. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:186,
                    name:"Vulvo Vaginitis Candidiasica. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {   // ***************** Aqui inician las demas Condiciónes
                    id:187,
                    name:"Acidez",
                    category:"otros",
                    idProtocolo:3 
                },
                {
                    id:188,
                    name:"Acidez Estomacal ",
                    category:"otros",
                    idProtocolo:3
                },
                {  
                    id:189,
                    name:"Acné y Melasma",
                    category:"otros",
                    idProtocolo:5 
                },
                {
                    id:190,
                    name:"ACV, Falla Renal, Sufrió Infarto",
                    category:"otros",
                    idProtocolo:7
                },
                {  
                    id:191,
                    name:"Adenocarcinoma Ductal Infiltrante",
                    category:"otros",
                    idProtocolo:9 
                },
                {
                    id:192,
                    name:"ADHD",
                    category:"otros",
                    idProtocolo:3
                },
                {  
                    id:183,
                    name:"Agammaglobulinemia de Bruton ",
                    category:"otros",
                    idProtocolo:3 
                },
                {
                    id:194,
                    name:"Alergias en la Nariz y Garganta",
                    category:"otros",
                    idProtocolo:7
                },
                {  
                    id:195,
                    name:"Alergias Respiratorias ",
                    category:"otros",
                    idProtocolo:3 
                },
                {
                    id:196,
                    name:"Alzheimer",
                    category:"otros",
                    idProtocolo:3
                },
                {  
                    id:197,
                    name:"Anemia ",
                    category:"otros",
                    idProtocolo:3 
                },
                {
                    id:198,
                    name:"Anemia Falciforme",
                    category:"otros",
                    idProtocolo:7
                },
                {  
                    id:199,
                    name:"Anemia Ferropénica",
                    category:"otros",
                    idProtocolo:7 
                },
                {
                    id:120,
                    name:"Anemia Hemolítica ",
                    category:"otros",
                    idProtocolo:7
                },
                {  
                    id:201,
                    name:"Anemia y Dermatitis Atópica",
                    category:"otros",
                    idProtocolo:7 
                },
                {
                    id:202,
                    name:"Ansiedad",
                    category:"otros",
                    idProtocolo:3
                },
                {  
                    id:203,
                    name:"Ansiedad Generalizada",
                    category:"otros",
                    idProtocolo:3 
                },
                {
                    id:204,
                    name:"Apnea del Sueño, Asma, Diabetes, Tiroides, Osteopenia",
                    category:"otros",
                    idProtocolo:3
                },
                {  
                    id:205,
                    name:"Arenilla en Riñones, Hipoglucemia, Mononucleosis, Rinitis",
                    category:"otros",
                    idProtocolo:7 
                },
                {
                    id:206,
                    name:"Artritis Degenerativa Severa ",
                    category:"otros",
                    idProtocolo:7
                },
                {  
                    id:207,
                    name:"Artritis Reumática Juvenil ",
                    category:"otros",
                    idProtocolo:3 
                },
                {
                    id:208,
                    name:"Artritis Reumatoidea, Artrosis, Fibromialgia, Asma, Condromalacia Rotuliana, Osteoporosis y Gastritis cronica",
                    category:"otros",
                    idProtocolo:7
                },
                {  
                    id:209,
                    name:"Artritis Reumatoidea ",
                    category:"otros",
                    idProtocolo:8 
                },
                {
                    id:210,
                    name:"Artritis Reumatoidea, Fibromialgia, Síndrome de Sjögren",
                    category:"otros",
                    idProtocolo:7
                },                
                {
                    id:211,
                    name:"Artritis Reumatoidea, Hipertrófica Ventricular",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:212,
                    name:"Artritis Severa",
                    category:"otros",
                    idProtocolo:8
                },
                {
                    id:213,
                    name:"Artritis, Diabetes, Fibromialgia, Lung Fibrosis, Psoriasis",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:214,
                    name:"Artritis, Diabetes, Hipertensión, Problemas en el Riñón (Avanzado) ",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:215,
                    name:"Artritis, Enfermedad Degenerativa de Disco, Estenosis Artritis Severa",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:216,
                    name:"Artritis, Hipercolesterolemia, Hipertensión Arterial, Nefritis ",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:217,
                    name:"Artritis, Hipotiroidismo, Hipertensión Arterial ",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:218,
                    name:"Artritis, Psoriasis, Hipertensión",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:219,
                    name:"Artrosis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:220,
                    name:"Artrosis, Cálculos en los Riñones, Dermatitis Rosácea",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:221,
                    name:"Ascitis, Cirrosis Hepática, Hígado Graso ",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:222,
                    name:"Asma Crónica",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:223,
                    name:"Asma Crónica, COPD, Apnea del Sueño, Sinusitis aguda y Bronquitis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:224,
                    name:"Asma, Cefalea, Baja Energía, Insomnio ",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:225,
                    name:"Asma, Diabetes, Hipertensión, Migraña",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:226,
                    name:"Ataques epilépticos, Malformación Cerebral",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:227,
                    name:"Atrofia Cerebral",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:228,
                    name:"Autismo",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:229,
                    name:"Autismo Moderado, Hernia Hiatal, Reflujo Gastroesofágico y Alergias",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:230,
                    name:"Bacteria en el Sistema Urinario",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:231,
                    name:"Bipolaridad",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:232,
                    name:"BRCA 1",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:233,
                    name:"Cálculos Biliares",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:234,
                    name:"Cálculos en la Vesícula, Nódulos Mamarios, Rectificación en la Cervical",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:235,
                    name:"Candidiasis Vaginal Recurrente ",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:236,
                    name:"CAP 4.62 (Ductus Arterioso Persistente) ",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:237,
                    name:"Carcinoma Escamocelular",
                    category:"otros",
                    idProtocolo:9
                },
                {
                    id:238,
                    name:"Cardiopatía, Hipertensión Arterial Artritis Severa",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:239,
                    name:"Celiaquía",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:240,
                    name:"Celiaquía (Intolerancia al Gluten)",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:241,
                    name:"Charcot Mery Tood",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:242,
                    name:"Circulación Crónica Grado 2",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:243,
                    name:"Cirrosis Hepática",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:244,
                    name:"Cistitis Intersticial ",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:245,
                    name:"Colitis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:246,
                    name:"Colitis Nerviosa",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:247,
                    name:"Colitis Ulcerosa",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:248,
                    name:"Colitis, Gastritis y Levantar el Sistema Inmune",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:249,
                    name:"Colon Inflamado",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:250,
                    name:"Colon Irritable",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:251,
                    name:"Convulsiones",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:252,
                    name:"Corea",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:253,
                    name:"Crest (Bacteria autoinmune ANAS)",
                    category:"otros",
                    idProtocolo:8
                },
                {
                    id:254,
                    name:"Deficiencia Motora",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:255,
                    name:"Deficiencia Renal",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:256,
                    name:"Déficit Cognitivo",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:257,
                    name:"Déficit de Atención",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:258,
                    name:"Demencia",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:259,
                    name:"Depresión y Ansiedad",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:260,
                    name:"Dermatitis Cenicienta",
                    category:"otros",
                    idProtocolo:5
                },
                {
                    id:261,
                    name:"Dermatitis Cenicienta Crónica",
                    category:"otros",
                    idProtocolo:10
                },
                {
                    id:262,
                    name:"Dermatomiositis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:263,
                    name:"Derrame Cerebral y Diabetes",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:264,
                    name:"Desgaste de Meniscos de Rodillas y Desviación de Cervical",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:265,
                    name:"Desgaste Físico producido por Edad Avanzada",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:265,
                    name:"Desgaste Rotular Severo",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:266,
                    name:"Desintoxicar el Hígado",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:267,
                    name:"Diabetes e Hígado Graso ",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:268,
                    name:"Diabetes Mellitus, Osteocondritis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:269,
                    name:"Diabetes Tipo 1 y 2",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:270,
                    name:"Diabetes Tipo 2 y Malformación Chiari",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:271,
                    name:"Diabetes Tipo 2, Epilepsia (controlado), Gastritis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:272,
                    name:"Diabetes Tipo 2, Fibromialgia, Tiroiditis de Hashimoto",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:273,
                    name:"Diabetes Tipo 2, retinopatía diabética, arterioesclerosis, Falla cardiaca y renal",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:274,
                    name:"Diabetes, Hipertensión, Pancitopenia, Insuficiencia Venosa",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:275,
                    name:"Difusión Eréctil",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:276,
                    name:"Displacía de Cuello de Útero (Nic 1)",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:277,
                    name:"Distrofia Muscular",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:278,
                    name:"Diverticulitis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:279,
                    name:"Dolor Crónico",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:280,
                    name:"Dolor de Cabeza",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:281,
                    name:"Dolor de Coyunturas",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:282,
                    name:"Dolor de Espalda y Manos",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:283,
                    name:"Dolor de Huesos",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:284,
                    name:"Dolor de Oídos",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:285,
                    name:"Dolor de Rodillas Agudo",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:286,
                    name:"Dolor en la Cervical",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:287,
                    name:"Dolor en las Articulaciones",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:288,
                    name:"Dolor en los Huesos",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:289,
                    name:"Dolor Lumbar",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:290,
                    name:"Dolor Muscular",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:291,
                    name:"Dolor Nervio Ciático",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:292,
                    name:"Dolor Pélvico",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:293,
                    name:"Dolores en el Pecho",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:294,
                    name:"Encefalitis Viral",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:295,
                    name:"Enfermedad Crioglobulinemia",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:296,
                    name:"Enfermedad de Chagas",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:297,
                    name:"Enfermedad de Gaucher",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:298,
                    name:"Enfermedad de Lyme",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:299,
                    name:"Enfermedad Drepanocítica",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:300,
                    name:"Enfermedad Mixta del Tejido Conectivo",
                    category:"otros",
                    idProtocolo:3
                }

            ],
            protocols:[
                {
                    
                }
            ],
        },
        mutations:{

        },
        actions:{

        }
    }) 