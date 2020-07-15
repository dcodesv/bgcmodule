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
                    name:"Condición Progresiva del sistema Inmune de Ano. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:4 //Se agrego el relacionador de protocolos
                },//Colocare las Condiciónes en orden correlativo para mantener el orden
            /*    {
                    id:2,
                    name:"Condición Progresiva del sistema Inmune de Ano. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },      */          
                {
                    id:3,
                    name:"Condición Progresiva del sistema Inmune de Boca. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:4,
                    name:"Condición Progresiva del sistema Inmune de Boca. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },
                {
                    id:5,
                    name:"Condición Progresiva del sistema Inmune de Cabeza. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:6,
                    name:"Condición Progresiva del sistema Inmune de Cabeza. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },/*
                {
                    id:7,
                    name:"Condición Progresiva del sistema Inmune de Cara. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },*/
                {
                    id:8,
                    name:"Condición Progresiva del sistema Inmune de Cara. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },/*
                {
                    id:9,
                    name:"Condición Progresiva del sistema Inmune de Cervical. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },*/
                {
                    id:10,
                    name:"Condición Progresiva del sistema Inmune de Cervical. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:11,
                    name:"Condición Progresiva del sistema Inmune de Colon. Estadio 1 y 2  ",
                    category:"Estadio 1 y 2",
                    idProtocolo:4 
                },
                {
                    id:12,
                    name:"Condición Progresiva del sistema Inmune de Colon. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:13,
                    name:"Condición Progresiva del sistema Inmune de Colorectal. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:4 
                },
                {
                    id:14,
                    name:"Condición Progresiva del sistema Inmune de Colorectal. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:15,
                    name:"Condición Progresiva del sistema Inmune de Cuerda Vocal. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:16,
                    name:"Condición Progresiva del sistema Inmune de Cuerda Vocal. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:17,
                    name:"Condición Progresiva del sistema Inmune de Esófago. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:4 
                },
                {
                    id:18,
                    name:"Condición Progresiva del sistema Inmune de Esófago. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:19,
                    name:"Condición Progresiva del sistema Inmune de Estomago. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:4 
                },
                {
                    id:20,
                    name:"Condición Progresiva del sistema Inmune de Estomago. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:21,
                    name:"Condición Progresiva del sistema Inmune de Garganta. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:22,
                    name:"Condición Progresiva del sistema Inmune de Garganta. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },
                {
                    id:23,
                    name:"Condición Progresiva del sistema Inmune de Hígado. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:24,
                    name:"Condición Progresiva del sistema Inmune de Hígado. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },
                /*{
                    id:25,
                    name:"Condición Progresiva del Sistema Inmune Hodgkin ",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },*/
                {
                    id:26,
                    name:"Condición Progresiva del Sistema Inmune Hodgkin. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:27,
                    name:"Condición Progresiva del sistema Inmune de Huesos. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:28,
                    name:"Condición Progresiva del sistema Inmune de Huesos. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },
                {
                    id:29,
                    name:"Condición Progresiva del sistema Inmune de Mama Triple Negativo y Metástasis en el Hígado. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:30,
                    name:"Condición Progresiva del sistema Inmune de Mamas. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:31,
                    name:"Condición Progresiva del sistema Inmune de Mamas. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },
                {
                    id:32,
                    name:"Condición Progresiva del sistema Inmune de Ovario. Estadio 3 y 4", //consultar este
                    category:"Estadio 1 y 2",
                    idProtocolo:9 
                },
                {
                    id:33,
                    name:"Condición Progresiva del sistema Inmune de Páncreas. Estadio 1 y 2", 
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:34,
                    name:"Condición Progresiva del sistema Inmune de Páncreas. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },
                {
                    id:35,
                    name:"Condición Progresiva del sistema Inmune de Papilar de Tiroides. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:7 
                },
                {
                    id:36,
                    name:"Condición Progresiva del sistema Inmune de Piel (Mela) . Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:37,
                    name:"Condición Progresiva del sistema Inmune de Piel (Mela) . Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },
                {
                    id:38,
                    name:"Condición Progresiva del sistema Inmune de Próstata con metástasis al hueso. Estadio 3 y 4", //consultar este
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:39,
                    name:"Condición Progresiva del sistema Inmune de Próstata. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:40,
                    name:"Condición Progresiva del sistema Inmune de Próstata. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },
                {
                    id:41,
                    name:"Condición Progresiva del sistema Inmune de Pulmones. Estadio 1 y 2  ",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:42,
                    name:"Condición Progresiva del sistema Inmune de Pulmones. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },
                {
                    id:43,
                    name:"Condición Progresiva del sistema Inmune de Riñones. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:7 
                },
                {
                    id:44,
                    name:"Condición Progresiva del sistema Inmune de Riñones. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:8
                },
                {
                    id:45,
                    name:"Condición Progresiva del sistema Inmune de Rostro (Célula Basal). Estadio 1 y 2", 
                    category:"Estadio 1 y 2",
                    idProtocolo:5 
                },
                {
                    id:46,
                    name:"Condición Progresiva del sistema Inmune de Testículo. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:8
                },
                {
                    id:47,
                    name:"Condición Progresiva del sistema Inmune de Tiroides. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:48,
                    name:"Condición Progresiva del sistema Inmune de Tiroides. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:10
                },
                /*{
                    id:49,
                    name:"Condición Progresiva del sistema Inmune de Uterino. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },*/
                {
                    id:50,
                    name:"Condición Progresiva del sistema Inmune de Uterino. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:9
                },
                {
                    id:51,
                    name:"Condición Progresiva del sistema Inmune de Vejiga. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:52,
                    name:"Condición Progresiva del sistema Inmune de Vejiga. Estadio 3 y 4",
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
                    name:"Cistitis Intersticial. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:76,
                    name:"Cistitis Intersticial. Etapa avanzada",
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
                    name:"Dermatosis Ampollar. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:88,
                    name:"Dermatosis Ampollar. Etapa avanzada",
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
                    name:"Lupus Eritematoso Sistémico. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:126,
                    name:"Lupus Eritematoso Sistémico. Etapa avanzada ",
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
                    name:"Neuritis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:132,
                    name:"Neuritis. Etapa avanzada",
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
                    id:211,//nueva enumeracion
                    name:"Artritis Reumatoidea, Hipertensión, Síndrome de Sjögren",
                    category:"otros",
                    idProtocolo:7
                },             
                {
                    id:212,
                    name:"Artritis Reumatoidea, Hipertrófica Ventricular",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:213,
                    name:"Artritis Severa",
                    category:"otros",
                    idProtocolo:8
                },
                {
                    id:214,
                    name:"Artritis, Diabetes, Fibromialgia, Lung Fibrosis, Psoriasis",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:215,
                    name:"Artritis, Diabetes, Hipertensión, Problemas en el Riñón (Avanzado) ",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:216,
                    name:"Artritis, Enfermedad Degenerativa de Disco, Estenosis Artritis Severa",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:217,
                    name:"Artritis, Hipercolesterolemia, Hipertensión Arterial, Nefritis ",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:218,
                    name:"Artritis, Hipotiroidismo, Hipertensión Arterial ",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:219,
                    name:"Artritis, Psoriasis, Hipertensión",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:220,
                    name:"Artrosis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:221,
                    name:"Artrosis, Cálculos en los Riñones, Dermatitis Rosácea",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:222,
                    name:"Ascitis, Cirrosis Hepática, Hígado Graso ",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:223,
                    name:"Asma Crónica",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:224,
                    name:"Asma Crónica, COPD, Apnea del Sueño, Sinusitis aguda y Bronquitis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:225,
                    name:"Asma, Cefalea, Baja Energía, Insomnio ",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:226,
                    name:"Asma, Diabetes, Hipertensión, Migraña",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:227,
                    name:"Ataques epilépticos, Malformación Cerebral",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:228,
                    name:"Atrofia Cerebral",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:229,
                    name:"Autismo",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:230,
                    name:"Autismo Moderado, Hernia Hiatal, Reflujo Gastroesofágico y Alergias",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:231,
                    name:"Bacteria en el Sistema Urinario",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:232,
                    name:"Bipolaridad",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:233,
                    name:"BRCA 1",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:234,
                    name:"Cálculos Biliares",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:235,
                    name:"Cálculos en la Vesícula, Nódulos Mamarios, Rectificación en la Cervical",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:236,
                    name:"Candidiasis Vaginal Recurrente ",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:237,
                    name:"CAP 4.62 (Ductus Arterioso Persistente) ",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:238,
                    name:"Carcinoma Escamocelular",
                    category:"otros",
                    idProtocolo:9
                },
                {
                    id:239,
                    name:"Cardiopatía, Hipertensión Arterial Artritis Severa",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:240,
                    name:"Celiaquía",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:241,
                    name:"Celiaquía (Intolerancia al Gluten)",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:242,
                    name:"Charcot Mery Tood",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:243,
                    name:"Circulación Crónica Grado 2",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:244,
                    name:"Cirrosis Hepática",
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
                    name:"Derrame Cerebral",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:264,
                    name:"Derrame Cerebral y Diabetes",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:265,
                    name:"Desgaste de Meniscos de Rodillas y Desviación de Cervical",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:266,
                    name:"Desgaste Físico producido por Edad Avanzada",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:267,
                    name:"Desgaste Rotular Severo",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:268,
                    name:"Desintoxicar el Hígado",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:269,
                    name:"Diabetes e Hígado Graso ",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:270,
                    name:"Diabetes Mellitus, Osteocondritis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:271,
                    name:"Diabetes Tipo 1 y 2",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:272,
                    name:'Diabetes tipo 2 nivel de glucosa EN AYUNAS entre 90 a 130 mg/dl',
                    category:'otros',
                    idProtocolo:11
                },
                {
                    id:273,
                    name:'Diabetes tipo 2 nivel de glucosa EN AYUNAS entre 131 a 240 mg/dl',
                    category:'otros',
                    idProtocolo:12
                },
                {
                    id:274,
                    name:'Diabetes tipo 2 nivel de glucosa EN AYUNAS superior a 241 mg/dl',
                    category:'otros',
                    idProtocolo:2
                },
                {
                    id:275,
                    name:"Diabetes Tipo 2 y Malformación Chiari",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:276,
                    name:"Diabetes Tipo 2, Epilepsia (controlado), Gastritis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:277,
                    name:"Diabetes Tipo 2, Fibromialgia, Tiroiditis de Hashimoto",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:278,
                    name:"Diabetes Tipo 2, retinopatía diabética, arterioesclerosis, Falla cardiaca y renal",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:279,
                    name:"Diabetes, Hipertensión, Pancitopenia, Insuficiencia Venosa",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:280,
                    name:"Difusión Eréctil",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:281,
                    name:"Displacía de Cuello de Útero (Nic 1)",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:282,
                    name:"Distrofia Muscular",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:283,
                    name:"Diverticulitis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:284,
                    name:"Dolor Crónico",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:285,
                    name:"Dolor de Cabeza",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:286,
                    name:"Dolor de Coyunturas",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:287,
                    name:"Dolor de Espalda y Manos",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:288,
                    name:"Dolor de Huesos",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:289,
                    name:"Dolor de Oídos",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:290,
                    name:"Dolor de Rodillas Agudo",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:291,
                    name:"Dolor en la Cervical",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:292,
                    name:"Dolor en las Articulaciones",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:293,
                    name:"Dolor en los Huesos y Debilidad General",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:294,
                    name:"Dolor Lumbar",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:295,
                    name:"Dolor Muscular",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:296,
                    name:"Dolor Nervio Ciático",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:297,
                    name:"Dolor Pélvico",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:298,
                    name:"Dolores en el Pecho",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:299,
                    name:"Dolores Musculares, Hipertensión, Taquicardia, Gastritis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:300,
                    name:"Encefalitis Viral",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:301,
                    name:"Enfermedad Crioglobulinemia",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:302,
                    name:"Enfermedad de Chagas",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:303,
                    name:"Enfermedad de Gaucher",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:304,
                    name:"Enfermedad de Lyme",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:305,
                    name:"Enfermedad Drepanocítica",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:306,
                    name:"Enfermedad Mixta del Tejido Conectivo",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:307,
                    name:"Epilepsia Mioclónica ",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:308,
                    name:"EPOC (Enfermedad Pulmonar Obstructiva Crónica) ",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:309,
                    name:"Esclerosis Nodular Tipo I",
                    category:"otros",
                    idProtocolo:9
                },
                {
                    id:310,
                    name:"Escoliosis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:311,
                    name:"Espondilitis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:312,
                    name:"Espondilosis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:313,//sigue cuenta aqui
                    name:"Espondilitis Anquilosante ",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:314,
                    name:"Espondilosis Cervical",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:315,
                    name:"Estenosis Traqueal (Granulación de Tejido)",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:316,
                    name:"Estreñimiento Crónico",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:317,
                    name:"Estrés",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:318,
                    name:"Eyaculación Dolorosa",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:319,
                    name:"Fatiga",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:320,
                    name:"Fatigas, inflamación en articulaciones, Síndrome de Inmunodeficiencia Celular",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:321,
                    name:"Fibromas",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:322,
                    name:"Fibromatosis Agresiva (Tumores Desmoides)",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:323,
                    name:"Fibromialgia",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:324,
                    name:"Fibromialgia, Artritis, Fatiga Crónica",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:325,
                    name:"Fibromialgia, Hipotiroidismo, Resistencia Insulínica",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:326,
                    name:"Fibromialgia y Lupus SL",
                    category:"otros",
                    idProtocolo:8
                },
                {
                    id:327,
                    name:"Gastritis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:328,
                    name:"Gastritis (Helicobacter Pylori)",
                    category:"otros",
                    idProtocolo:9
                },
                {
                    id:329,
                    name:"Gastritis Erosiva",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:330,
                    name:"Glomeruloesclerosis Focal y Segmentaria",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:331,
                    name:"Gota",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:332,
                    name:"Hemorroides",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:333,
                    name:"Hepatitis B (inactivo)",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:334,
                    name:"Hepatitis B Crónica",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:335,
                    name:"Hepatitis Crónica Autoinmune",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:336,
                    name:"Hernia Discal",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:337,
                    name:"Herpes",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:338,
                    name:"Herpes Genital Numero 2",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:339,
                    name:"Hidradenitis Supurativa",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:340,
                    name:"Higado Graso",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:341,
                    name:"Hipercolesterolemia",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:342,
                    name:"Hipercolesterolemia Familiar",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:343,
                    name:"Hiperinsulinismo",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:344,
                    name:"Hiperplasia Endometrial Compleja",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:345,
                    name:"Hipertensión Arterial",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:346,
                    name:"Hipertensión Arterial, Ansiedad, Menopausia",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:347,
                    name:"Hipertensión Pulmonar",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:348,
                    name:"Hipertrigliceridemia",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:349,
                    name:"Hiperuricemia",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:350,
                    name:"Hipotiroidismo",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:351,
                    name:"Histerectomía",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:352,
                    name:"Histiocitosis de las células de Langerhans (LCH)",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:353,
                    name:"Implantes Cervicales",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:354,
                    name:"Incontinencia Urinaria",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:355,
                    name:"Infección de Orina Constante",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:356,
                    name:"Infección en las Vías Urinarias (ITU recurrente)",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:357,
                    name:"Infecciones en la Vejiga",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:358,
                    name:"Inflamación en la Próstata",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:359,
                    name:"Insomnio",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:360,
                    name:"Insuficiencia Cardiaca",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:361,
                    name:"Insuficiencia Renal o Falla Renal",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:362,
                    name:"Insuficiencia Venosa Crónica",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:363,
                    name:"Intolerancia a la Lactosa",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:364,
                    name:"Lepra",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:365,
                    name:"Leucemia Linfática Crónica ",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:366,
                    name:"Leucemia Linfocítica Aguda",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:367,
                    name:"Leucemia Mieloides",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:368,
                    name:"Linfoma Vertebral Metastásico",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:369,
                    name:"Liomiosarcoma",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:370,
                    name:"Liquen en Plano",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:371,
                    name:"Liquen Escleroso",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:372,
                    name:"Litiasis Renal Coraliforme",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:373,
                    name:"Lupus",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:374,
                    name:"Lupus Eritematoso",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:375,
                    name:"Lupus Eritematosos Sistémico y Vasculitis Cerebrovascular",
                    category:"otros",
                    idProtocolo:8
                },
                {
                    id:376,
                    name:"Malformaciones de Chiari",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:377,
                    name:"Mareos",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:378,
                    name:"Mastocitosis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:379,
                    name:"Melasma",
                    category:"otros",
                    idProtocolo:5
                },
                {
                    id:380,
                    name:"Meningioma Frontal Derecho Benigno",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:381,
                    name:"Meningitis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:382,
                    name:"Metaplasia Intestinal Incompleta",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:383,
                    name:"Miastenia Gravis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:384,
                    name:"Miastenia Gravis Refractaria",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:385,
                    name:"Mieloma Múltiple",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:386,
                    name:"Migraña",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:387,
                    name:"Miomatosis Uterina",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:388,
                    name:"Morfea (Esclerodermia en Placas)",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:389,
                    name:"Múltiple Mieloma",
                    category:"otros",
                    idProtocolo:9
                },
                {
                    id:390,
                    name:"Nauseas",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:391,
                    name:"Nefrectomía Parcial",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:392,
                    name:"Nefropatía",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:393,
                    name:"Nefropatía IgA",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:394,
                    name:"Nervios Alterados",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:395,
                    name:"Neuropatía",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:396,
                    name:"Neuropatía Aguda",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:397,
                    name:"Neuropatía Periférica",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:398,
                    name:"Nódulos de Tiroides",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:399,
                    name:"Obesidad",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:400,
                    name:"Obesidad Mórbida y Linfedema",
                    category:"otros",
                    idProtocolo:9
                },
                {
                    id:401,
                    name:"Onicomicosis",
                    category:"otros",
                    idProtocolo:5
                },
                {
                    id:402,
                    name:"Operado de la Columna",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:403,
                    name:"Operado de Tiroides",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:404,
                    name:"Osteoartritis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:405,
                    name:"Osteoartritis Progresiva",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:406,
                    name:"Osteoartritis y Dermatitis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:407,
                    name:"Osteonecrosis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:408,
                    name:"Osteoporosis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:409,
                    name:"Ovario Poliquístico",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:410,
                    name:"Parálisis Cerebral",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:411,
                    name:"Paraplejia nivel t4 t5",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:412,
                    name:"Parkinson",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:413,
                    name:"Parkinson Plus",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:414,
                    name:"Pénfigo Foliáceo",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:415,
                    name:"Pénfigo Foliáceo, Hipotiroidismo y Depresión",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:416,
                    name:"Pénfigo Vulgar",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:417,
                    name:"Perdida del Deseo Sexual",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:418,
                    name:"Piedras en los Riñones y Retención de Líquidos",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:419,
                    name:"Plaquetas Altas jak2",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:420,
                    name:"Policitemia Vera",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:421,
                    name:"Polidermatomiositis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:422,
                    name:"Polineuropatía Desmielinizante",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:423,
                    name:"Poliquistosis Renal sin Diálisis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:424,
                    name:"Prediabetes",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:425,
                    name:"Premenopausia",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:426,
                    name:"Premenopausia, Hígado graso, Dolor Muscular, Ansiedad y Depresión",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:427,
                    name:"Principios de Alzheimer",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:428,
                    name:"Problemas de Memoria",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:429,
                    name:"Problemas para Dormir",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:430,
                    name:"Problemas Respiratorios",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:431,
                    name:"Próstata Inflamada",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:432,
                    name:"Próstata Inflamada e Infección Urinaria",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:433,
                    name:"Prostatitis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:434,
                    name:"Prostatitis Bacteriana Recurrente",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:435,
                    name:"Proteinuria",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:436,
                    name:"Psoriasis Artrítica",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:437,
                    name:"Purpura Trombocitopénica",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:438,
                    name:"Quistes en el Ovario",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:439,
                    name:"Rectocolitis Ulcerosa",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:440,
                    name:"Refuerzo del Sistema Inmune",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:441,
                    name:"Regeneración Celular",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:442,
                    name:"Renal Stage 4",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:443,
                    name:"Retención de Líquidos",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:444,
                    name:"Retinitis Pigmentosa",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:445,
                    name:"Retinopatía de la Prematuridad",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:446,
                    name:"Retraso Mental Leve",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:447,
                    name:"Retraso Mental Profundo",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:448,
                    name:"Rinitis Alérgica",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:449,
                    name:"Sarcoma de Kaposi y Virus de Inmunodeficiencia Humana",
                    category:"otros",
                    idProtocolo:9
                },
                {
                    id:450,
                    name:"Secuelas de Guillen Barre",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:451,
                    name:"Síndrome Antifosfolípido",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:452,
                    name:"Síndrome Cerebeloso",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:453,
                    name:"Síndrome de Asperger",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:454,
                    name:"Síndrome de Churg-Strauss",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:455,
                    name:"Síndrome de Colon Irritable",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:456,
                    name:"Síndrome de Dolor Regional Complejo (CRPS)",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:457,
                    name:"Síndrome de Inestabilidad Lumbar",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:458,
                    name:"Síndrome de Intestino Irritable",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:459,
                    name:"Síndrome de Lennox Gastaut",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:460,
                    name:"Síndrome de Marfan",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:461,
                    name:"Síndrome de Raynaud",
                    category:"otros",
                    idProtocolo:8
                },
                {
                    id:462,
                    name:"Síndrome de Rett",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:463,
                    name:"Síndrome de Sjögren",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:464,
                    name:"Síndrome de Túnel Carpiano",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:465,
                    name:"Síndrome del Turner",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:466,
                    name:"Síndrome Mielodisplásico",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:467,
                    name:"Síndrome Nefrológico",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:468,
                    name:"Síndrome Nefrótico Corticoresistente",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:469,
                    name:"Sinusitis Crónica",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:470,
                    name:"Trastorno Obsesivo Compulsivo",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:471,
                    name:"Trombocitopenia",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:472,
                    name:"Tumor en el Pulmón",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:473,
                    name:"Tumor en la Próstata Gleason 7",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:474,
                    name:"Tumor Schwannoma",
                    category:"otros",
                    idProtocolo:9
                },
                {
                    id:475,
                    name:"Tumores de Hipófisis",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:476,
                    name:"Úlceras Gástricas",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:477,
                    name:"Uveitis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:478,
                    name:"Vasculitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:479,
                    name:"Virus de Inmunodeficiencia Humana",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:480,
                    name:"Virus de Inmunodeficiencia Humana y Psoriasis",
                    category:"otros",
                    idProtocolo:8
                },
                {
                    id:481,
                    name:"Vitíligo ",
                    category:"otros",
                    idProtocolo:5
                },
                //Condiciones moderadas agregadas marzo 2020
                {
                    id:482,
                    name:"Deficiencias en el Sistema Inmune",
                    category:"otros",
                    idProtocolo:12
                },
                {
                    id:483,
                    name:"Dolor producido por la Fibromialgia",
                    category:"otros",
                    idProtocolo:12
                },
                {
                    id:484,
                    name:"Dolor producido por la Osteoporosis",
                    category:"otros",
                    idProtocolo:12
                },
                {
                    id:485,
                    name:"Alergias en la piel",
                    category:"otros",
                    idProtocolo:12
                },
                {
                    id:486,
                    name:"Dolor producido por la Artritis Reumatoidea",
                    category:"otros",
                    idProtocolo:12
                },
            ],
            protocols:[
                //Aqui inicia el protocolo completo
                {
                    id:1, //ID del protocolo
                    name:'Protocolo integrativo para condiciones de alta complejidad', //Nombre del protocolo
                    category:'categoria 4', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Fase 1', //Nombre de la fase
                        duration:'12 meses', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'20 botellas de 240 ml. c/u. 30 días de duración aprox.', //Cantidad de botellas
                            dose:'40ml. 4 veces al día', //Dosis del producto
                            price: 1120.00,//Precio del producto
                            offer: 784.00,//Precio oferta
                            link:"https://www.immunebiogreencell.com/product-p/altacomplejidad-20botellas.htm", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-20-FRASCOS.jpg"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer: 0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=C1pac01'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'Fase 2',
                        duration:'60 días (mantenimiento)',
                        //Producto 1
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.',
                            bottles:'4 botellas de 240 ml. c/u. 30 días de duración aprox.',
                            dose:'10ml. 2 veces al día',
                            price:249.00,
                            offer:174.30,
                            link:"https://www.immunebiogreencell.com/product-p/moderadas-4botellas.htm",
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-4-FRASCOS.jpg"
                        },
                        //Producto 2
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=C1pac02'//Se agrego debido a que el combo se compra por fase

                    }
                },//Aqui finaliza el protocolo
                {
                    id:2, //ID del protocolo
                    name:'Protocolo integrativo para condiciones de alta complejidad', //Nombre del protocolo
                    category:'categoria 1', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Fase 1', //Nombre de la fase
                        duration:'120 días', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'6 botellas de 240 ml. c/u. 30 días de duración aprox', //Cantidad de botellas
                            dose:'12 ml. 4 veces al día', //Dosis del producto
                            price:359.95, //Precio del producto
                            offer:251.97,
                            link:"https://www.immunebiogreencell.com/product-p/altacomplejidad-6botellas.htm", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-6-FRASCOS.jpg"
                        },
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.immunebiogreencell.com/product-p/altacomplejidad-6botellas.htm'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'Fase 2',
                        duration:'60 días (mantenimiento)',
                        //Producto 1
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.',
                            bottles:'4 botellas de 240 ml. c/u. 30 días de duración aprox',
                            dose:'10ml. 2 veces al día',
                            price:249.00,
                            offer:174.30,
                            link:"https://www.immunebiogreencell.com/product-p/moderadas-4botellas.htm",
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-4-FRASCOS.jpg"
                        },
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:'https://www.immunebiogreencell.com/product-p/moderadas-4botellas.htm'//Se agrego debido a que el combo se compra por fase

                    }
                   // linkProtocol:'linkdelprotocolocompleto' //Link para comprar el combo completo
                },//Aqui finaliza el protocolo
                {
                    id:3, //ID del protocolo
                    name:'Protocolo integrativo para condiciones de alta complejidad', //Nombre del protocolo
                    category:'categoria 2', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Fase 1', //Nombre de la fase
                        duration:'180 días', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'10 botellas de 240 ml. c/u. 30 días de duración aprox', //Cantidad de botellas
                            dose:'20 ml. 4 veces al día', //Dosis del producto
                            price:560.95, //Precio del producto
                            offer:392.67,
                            link:"https://www.immunebiogreencell.com/product-p/altacomplejidad-10botellas.htm", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-10-FRASCOS.jpg"
                        },
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.immunebiogreencell.com/product-p/altacomplejidad-10botellas.htm'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'Fase 2',
                        duration:'180 días',
                        //Producto 1
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.',
                            bottles:'4 botellas de 240 ml. c/u. 30 días de duración aprox',
                            dose:'10ml. 2 veces al día',
                            pprice:249.00,
                            offer:174.30,
                            link:"https://www.immunebiogreencell.com/product-p/moderadas-4botellas.htm",
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-4-FRASCOS.jpg"
                        },
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:'https://www.immunebiogreencell.com/product-p/moderadas-4botellas.htm'//Se agrego debido a que el combo se compra por fase

                    }
                   // linkProtocol:'linkdelprotocolocompleto' //Link para comprar el combo completo
                },//Aqui finaliza el protocolo
                {
                    id:4, //ID del protocolo
                    name:'Protocolo integrativo para condiciones de alta complejidad', //Nombre del protocolo
                    category:'categoria 2', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Fase 1', //Nombre de la fase
                        duration:'120 días', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'10 botellas de 240 ml. c/u. 30 días de duración aprox.', //Cantidad de botellas
                            dose:'20ml. 4 veces al día', //Dosis del producto
                            price:560.95, //Precio del producto
                            offer:392.67,
                            link:"https://www.immunebiogreencell.com/product-p/altacomplejidad-10botellas.htm", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-10-FRASCOS.jpg"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0,
                            offer:0, //Precio del producto
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=C4pac01'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'Fase 2',
                        duration:'60 días (mantenimiento)',
                        //Producto 1
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.',
                            bottles:'4 botellas de 240 ml. c/u. 30 días de duración aprox.',
                            dose:'10ml. 2 veces al día',
                            price:249.00,
                            offer:174.30,
                            link:"https://www.immunebiogreencell.com/product-p/moderadas-4botellas.htm",
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-4-FRASCOS.jpg"
                        },
                        //Producto 2
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=C4pac02'//Se agrego debido a que el combo se compra por fase

                    }
                   // linkProtocol:'linkdelprotocolocompleto' //Link para comprar el combo completo
                },//Aqui finaliza el protocolo
                {
                    id:5, //ID del protocolo
                    name:'Protocolo integrativo para condiciones de alta complejidad', //Nombre del protocolo
                    category:'categoria 2', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Fase 1', //Nombre de la fase
                        duration:'120 días', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'10 botellas de 240 ml. c/u. 30 días de duración aprox.', //Cantidad de botellas
                            dose:'20ml. 4 veces al día', //Dosis del producto
                            price:560.95, //Precio del producto
                            offer:392.67,
                            link:'https://www.immunebiogreencell.com/product-p/altacomplejidad-10botellas.htm', //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-10-FRASCOS.jpg"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'WOUND FIXER',
                            bottles:'1 botella (Spray – 4oz.)',
                            dose:'Aplicar sobre la zona afectada de 2 a 3 veces x día.',
                            price:44.95,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/woundfixer-condicionespiel.htm'
                        },
                        linkPhase1:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=C5pac01'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'Fase 2', //Nombre de la fase
                        duration:'90 días', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'4 botellas de 240 ml. c/u. 30 días de duración aprox.', //Cantidad de botellas
                            dose:'10ml. 2 veces al día', //Dosis del producto
                            price:249.00,
                            offer:174.30,
                            link:'https://www.immunebiogreencell.com/product-p/moderadas-4botellas.htm', //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-4-FRASCOS.jpg"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'WOUND FIXER',
                            bottles:'1 botella (Spray – 4oz.)',
                            dose:'Aplicar sobre la zona afectada de 2 a 3 veces x día.',
                            price:44.95,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/woundfixer-condicionespiel.htm'
                        },
                        linkPhase2:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=C5pac02'//Finaliza el producto 2
                    },
                   // linkProtocol:'linkdelprotocolocompleto' //Link para comprar el combo completo
                },//Aqui finaliza el protocolo
                {
                    id:6, //ID del protocolo
                    name:'Protocolo integrativo para condiciones de alta complejidad', //Nombre del protocolo
                    category:'categoria 3', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Fase 1', //Nombre de la fase
                        duration:'180 días', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'16 botellas de 240 ml. c/u. 30 días de duración aprox.', //Cantidad de botellas
                            dose:'32ml. 4 veces al día', //Dosis del producto
                            price:896.95, //Precio del producto
                            offer:627.90,
                            link:"https://www.immunebiogreencell.com/product-p/altacomplejidad-16botellas.htm", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-16-FRASCOS.jpg"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=C6pac01'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'Fase 2',
                        duration:'180 días',
                        //Producto 1
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.',
                            bottles:'6 botellas de 240 ml. c/u. 30 días de duración aprox.',
                            dose:'20ml. 2 veces al día',
                            price:359.95,
                            offer:251.97,
                            link:"https://www.immunebiogreencell.com/product-p/altacomplejidad-6botellas.htm",
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-6-FRASCOS.jpg"
                        },
                        //Producto 2
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=C6pac02'//Se agrego debido a que el combo se compra por fase

                    }
                   // linkProtocol:'linkdelprotocolocompleto' //Link para comprar el combo completo
                },//Aqui finaliza el protocolo
                {
                    id:7, //ID del protocolo
                    name:'Protocolo integrativo para condiciones de alta complejidad', //Nombre del protocolo
                    category:'categoria 3', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Fase 1', //Nombre de la fase
                        duration:'180 días', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'16 botellas de 240 ml. c/u. 30 días de duración aprox.', //Cantidad de botellas
                            dose:'32 ml. 4 veces al día', //Dosis del producto
                            price:896.95, //Precio del producto
                            offer:627.90,
                            link:"https://www.immunebiogreencell.com/product-p/altacomplejidad-16botellas.htm", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-16-FRASCOS.jpg"
                        },
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.immunebiogreencell.com/product-p/altacomplejidad-16botellas.htm'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'Fase 2',
                        duration:'180 días',
                        //Producto 1
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.',
                            bottles:'4 botellas de 240 ml. c/u. 30 días de duración aprox.',
                            dose:'10ml. 2 veces al día',
                            price:249.00,
                            offer:174.30,
                            link:"https://www.immunebiogreencell.com/product-p/moderadas-4botellas.htm",
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-4-FRASCOS.jpg"
                        },
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:'https://www.immunebiogreencell.com/product-p/moderadas-4botellas.htm'//Se agrego debido a que el combo se compra por fase

                    }
                   // linkProtocol:'linkdelprotocolocompleto' //Link para comprar el combo completo
                },//Aqui finaliza el protocolo
                {
                    id:8, //ID del protocolo
                    name:'Protocolo integrativo para condiciones de alta complejidad', //Nombre del protocolo
                    category:'categoria 4', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Fase 1', //Nombre de la fase
                        duration:'180 días', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'20 botellas de 240 ml. c/u. 30 días de duración aprox.', //Cantidad de botellas
                            dose:'40 ml. 4 veces al día', //Dosis del producto
                            price: 1120.00,//Precio del producto
                            offer: 784.00,//Precio oferta
                            link:"https://www.immunebiogreencell.com/product-p/altacomplejidad-20botellas.htm", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-20-FRASCOS.jpg"
                        },
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.immunebiogreencell.com/product-p/altacomplejidad-20botellas.htm'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'Fase 2',
                        duration:'180 días',
                        //Producto 1
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.',
                            bottles:'6 botellas de 240 ml. c/u. 30 días de duración aprox.',
                            dose:'20ml. 2 veces al día',
                            price:359.95,
                            offer:251.97,
                            link:"https://www.immunebiogreencell.com/product-p/altacomplejidad-6botellas.htm",
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-6-FRASCOS.jpg"
                        },
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:'https://www.immunebiogreencell.com/product-p/altacomplejidad-6botellas.htm'//Se agrego debido a que el combo se compra por fase

                    }
                   // linkProtocol:'linkdelprotocolocompleto' //Link para comprar el combo completo
                },//Aqui finaliza el protocolo
                {
                    id:9, //ID del protocolo
                    name:'Protocolo integrativo para condiciones de alta complejidad', //Nombre del protocolo
                    category:'categoria 4', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Fase 1', //Nombre de la fase
                        duration:'180 días', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'20 botellas de 240 ml. c/u. 30 días de duración aprox.', //Cantidad de botellas
                            dose:'40ml. 4 veces al día', //Dosis del producto
                            price: 1120.00,//Precio del producto
                            offer: 784.00,//Precio oferta
                            link:"https://www.immunebiogreencell.com/product-p/altacomplejidad-20botellas.htm", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-20-FRASCOS.jpg"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=C9pac01'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'Fase 2',
                        duration:'180 días',
                        //Producto 1
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.',
                            bottles:'6 botellas de 240 ml. c/u. 30 días de duración aprox.',
                            dose:'20ml. 2 veces al día',
                            price:359.95,
                            offer:251.97,
                            link:"https://www.immunebiogreencell.com/product-p/altacomplejidad-6botellas.htm",
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-6-FRASCOS.jpg"
                        },
                        //Producto 2
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=C9pac02'//Se agrego debido a que el combo se compra por fase

                    }
                   // linkProtocol:'linkdelprotocolocompleto' //Link para comprar el combo completo
                },//Aqui finaliza el protocolo
                {
                    id:10, //ID del protocolo
                    name:'Protocolo integrativo para condiciones de alta complejidad', //Nombre del protocolo
                    category:'categoria 4', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Fase 1', //Nombre de la fase
                        duration:'180 días', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'20 botellas de 240 ml. c/u. 30 días de duración aprox.', //Cantidad de botellas
                            dose:'40ml. 4 veces al día', //Dosis del producto
                            price: 1120.00,//Precio del producto
                            offer: 784.00,//Precio oferta
                            link:'https://www.immunebiogreencell.com/product-p/altacomplejidad-20botellas.htm', //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-20-FRASCOS.jpg"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'WOUND FIXER',
                            bottles:'1 botella (Spray – 4oz.)',
                            dose:'Aplicar sobre la zona afectada de 2 a 3 veces x día.',
                            price:44.95,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/woundfixer-condicionespiel.htm'
                        },
                        linkPhase1:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=C10pac01'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'Fase 2', //Nombre de la fase
                        duration:'180 días', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'6 botellas de 240 ml. c/u. 30 días de duración aprox.', //Cantidad de botellas
                            dose:'20ml. 2 veces al día', //Dosis del producto
                            price:359.95,
                            offer:251.97,
                            link:'https://www.immunebiogreencell.com/product-p/altacomplejidad-6botellas.htm', //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-6-FRASCOS.jpg"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=C10pac02'//Finaliza el producto 2
                    },
                   // linkProtocol:'linkdelprotocolocompleto' //Link para comprar el combo completo
                },//Aqui finaliza el protocolo

                //Aqui inicia el nuevo protocolo
                {
                    id:11, //ID del protocolo
                    name:'Protocolo de prevención', //Nombre del protocolo
                    category:'', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Fase 1', //Nombre de la fase
                        duration:'180 días', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'2 botellas de 240 ml. c/u. 30 días de duración aprox.', //Cantidad de botellas
                            dose:'4ml. 4 veces al día', //Dosis del producto
                            price:134.50, //Precio del producto
                            offer:94.15,
                            link:'https://www.immunebiogreencell.com/product-p/prevencion-2botellas.htm', //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-2-FRASCOS.jpg"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'',
                            bottles:'',
                            disclaimer:'',
                            dose:'',
                            price:0,
                            offer:0,
                            link:''
                        },
                        p3:{
                            name:'',
                            bottles:'',
                            dose:'',
                            price:0,
                            offer:0,
                            link:''
                        },
                        linkPhase1:'https://www.immunebiogreencell.com/product-p/prevencion-2botellas.htm'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'', //Nombre de la fase
                        duration:'', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'', //Nombre del producto
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'',
                            bottles:'',
                            disclaimer:'',
                            dose:'',
                            price:0,
                            offer:0,
                            link:''
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:''//Finaliza el producto 2
                    },

                },

                //Aqui inicia el nuevo protocolo
                {
                    id:12, //ID del protocolo
                    name:'Protocolo para condiciones moderadas', //Nombre del protocolo
                    category:'', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Fase 1', //Nombre de la fase
                        duration:'180 días', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'4 botellas de 240 ml. c/u. 48 días de duración aprox.', //Cantidad de botellas
                            dose:'5ml. 4 veces al día', //Dosis del producto
                            price:249.00, //Precio del producto
                            offer:174.30,
                            link:'https://www.immunebiogreencell.com/product-p/moderadas-4botellas.htm', //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC-4-FRASCOS.jpg"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Vitamina C (Acido Ascorbico)',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'Un scoop diario mezclado con jugo de frutas sin azucar o agua.',
                            price:0,
                            offer:0,
                            link:'https://www.immunebiogreencell.com/product-p/vitaminac2000mg-newversion.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'',
                            dose:'',
                            price:0,
                            offer:0,
                            link:''
                        },
                        linkPhase1:'https://www.immunebiogreencell.com/product-p/moderadas-4botellas.htm'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'', //Nombre de la fase
                        duration:'', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'', //Nombre del producto
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'',
                            bottles:'',
                            disclaimer:'',
                            dose:'',
                            price:0,
                            offer:0,
                            link:''
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:''//Finaliza el producto 2
                    },

                },
            ],
        },
        mutations:{

        },
        actions:{

        }
    }); 