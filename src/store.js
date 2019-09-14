/*

    LA PALABRA "CONDICIONES PROGRESIVAS DEL SISTEMA INMUNE" SE AÑADIRA MEDIANTE CODIGO PARA
    DISMINUIR EL PESO DE LOS DATOS QUE DEBE CARGAR.

*/


import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
        state: {
            conditions:[ //Json que contiene las condiciones
                {
                    id:1,
                    name:"Condicion Progresiva del Sistema Inmune. De Ano. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 //Se agrego el relacionador de protocolos
                },//Colocare las condiciones en orden correlativo para mantener el orden
                {
                    id:2,
                    name:"Condicion Progresiva del Sistema Inmune. De Ano. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },                
                {
                    id:3,
                    name:"Condicion Progresiva del Sistema Inmune. De Boca. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:4,
                    name:"Condicion Progresiva del Sistema Inmune. De Boca. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:5,
                    name:"Condicion Progresiva del Sistema Inmune. De Cabeza. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:6,
                    name:"Condicion Progresiva del Sistema Inmune. De Cabeza. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:7,
                    name:"Condicion Progresiva del Sistema Inmune. De Cara. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:8,
                    name:"Condicion Progresiva del Sistema Inmune. De Cara. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:9,
                    name:"Condicion Progresiva del Sistema Inmune. De Cervical. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:10,
                    name:"Condicion Progresiva del Sistema Inmune. De Cervical. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:11,
                    name:"Condicion Progresiva del Sistema Inmune. De Colon. Estadio 1 y 2  ",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:12,
                    name:"Condicion Progresiva del Sistema Inmune. De Colon. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:13,
                    name:"Condicion Progresiva del Sistema Inmune. De Colorectal. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:14,
                    name:"Condicion Progresiva del Sistema Inmune. De Colorectal. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:15,
                    name:"Condicion Progresiva del Sistema Inmune. De Cuerda Vocal. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:16,
                    name:"Condicion Progresiva del Sistema Inmune. De Cuerda Vocal. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:17,
                    name:"Condicion Progresiva del Sistema Inmune. De Esófago. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:18,
                    name:"Condicion Progresiva del Sistema Inmune. De Esófago. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:19,
                    name:"Condicion Progresiva del Sistema Inmune. De Estomago. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:20,
                    name:"Condicion Progresiva del Sistema Inmune. De Estomago. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:21,
                    name:"Condicion Progresiva del Sistema Inmune. De Garganta. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:22,
                    name:"Condicion Progresiva del Sistema Inmune. De Garganta. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:23,
                    name:"Condicion Progresiva del Sistema Inmune. De Hígado. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:24,
                    name:"Condicion Progresiva del Sistema Inmune. De Hígado. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:25,
                    name:"Condicion Progresiva del Sistema Inmune. De Huesos. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:26,
                    name:"Condicion Progresiva del Sistema Inmune. De Huesos. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:27,
                    name:"Condicion Progresiva del Sistema Inmune. De Mama Triple Negativo y Metástasis en el Hígado. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:28,
                    name:"Condicion Progresiva del Sistema Inmune. De Mamas. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:29,
                    name:"Condicion Progresiva del Sistema Inmune. De Mamas. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:30,
                    name:"Condicion Progresiva del Sistema Inmune. De Ovario. Estadio 3 y 4", //consultar este
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:31,
                    name:"Condicion Progresiva del Sistema Inmune. De Páncreas. Estadio 1 y 2", 
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:32,
                    name:"Condicion Progresiva del Sistema Inmune. De Páncreas. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:33,
                    name:"Condicion Progresiva del Sistema Inmune. De Papilar de Tiroides. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:34,
                    name:"Condicion Progresiva del Sistema Inmune. De Piel (Mela) . Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:35,
                    name:"Condicion Progresiva del Sistema Inmune. De Piel (Mela) . Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:36,
                    name:"Condicion Progresiva del Sistema Inmune. De Próstata con metástasis al hueso. Estadio 3 y 4", //consultar este
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:37,
                    name:"Condicion Progresiva del Sistema Inmune. De Próstata. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:38,
                    name:"Condicion Progresiva del Sistema Inmune. De Próstata. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:39,
                    name:"Condicion Progresiva del Sistema Inmune. De Pulmones. Estadio 1 y 2  ",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:40,
                    name:"Condicion Progresiva del Sistema Inmune. De Pulmones. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:41,
                    name:"Condicion Progresiva del Sistema Inmune. De Riñones. Estadio 1 y 2 ",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:42,
                    name:"Condicion Progresiva del Sistema Inmune. De Riñones. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:43,
                    name:"Condicion Progresiva del Sistema Inmune. De Rostro (Célula Basal) . Estadio 1 y 2", //consultar este
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:44,
                    name:"Condicion Progresiva del Sistema Inmune. De Testículo. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:45,
                    name:"Condicion Progresiva del Sistema Inmune. De Tiroides. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:46,
                    name:"Condicion Progresiva del Sistema Inmune. De Tiroides. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:47,
                    name:"Condicion Progresiva del Sistema Inmune. De Uterino. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:48,
                    name:"Condicion Progresiva del Sistema Inmune. De Uterino. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:49,
                    name:"Condicion Progresiva del Sistema Inmune. De Vejiga. Estadio 1 y 2",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:50,
                    name:"Condicion Progresiva del Sistema Inmune. De Vejiga. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:51,
                    name:"Condicion Progresiva del Sistema Inmune. Hodgkin ",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:52,
                    name:"Condicion Progresiva del Sistema Inmune. Hodgkin. Estadio 3 y 4 ",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {
                    id:53,
                    name:"Condicion Progresiva del Sistema Inmune. Non Hodgkin ",
                    category:"Estadio 1 y 2",
                    idProtocolo:1 
                },
                {
                    id:54,
                    name:"Condicion Progresiva del Sistema Inmune. Non Hodgkin. Estadio 3 y 4",
                    category:"Estadio 3 y 4",
                    idProtocolo:1
                },
                {  // aqui comienzan las condiciones por etapas
                    id:55,
                    name:"Acné. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:56,
                    name:"Acné. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:57,
                    name:"Alopecia. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:58,
                    name:"Alopecia. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:59,
                    name:"Amiloidosis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:60,
                    name:"Amiloidosis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:61,
                    name:"Bartolinitis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:62,
                    name:"Bartolinitis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:63,
                    name:"Blefaritis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:64,
                    name:"Blefaritis. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:65,
                    name:"Bronquiectasias. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:66,
                    name:"Bronquiectasias. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:67,
                    name:"Bronquitis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:68,
                    name:"Bronquitis Aguda. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:69,
                    name:"Celulitis Periorbitaria. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:70,
                    name:"Celulitis Periorbitaria. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:71,
                    name:"Cerebritis. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:72,
                    name:"Cerebritis. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:73,
                    name:"Cervicitis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:74,
                    name:"Cervicitis. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:75,
                    name:"Cistitis Insterticial. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:76,
                    name:"Cistitis Insterticial. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:77,
                    name:"Clamidia. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:78,
                    name:"Clamidia. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:79,
                    name:"Coriorretinitis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:80,
                    name:"Coriorretinitis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:81,
                    name:"Coriza. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:82,
                    name:"Coriza. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:83,
                    name:"Crohn (Enfermedad de Crohn) . Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:84,
                    name:"Crohn (Enfermedad de Crohn) . Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:85,
                    name:"Dermatitis Atópica. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:86,
                    name:"Dermatitis Atópica. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:87,
                    name:"Dermatósis Ampollar. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:88,
                    name:"Dermatósis Ampollar. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:89,
                    name:"Diabetes Mellitus Tipo I. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:90,
                    name:"Diabetes Mellitus Tipo I. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:91,
                    name:"Difteria. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:92,
                    name:"Difteria. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:93,
                    name:"Eczema. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:94,
                    name:"Eczema. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:95,
                    name:"Enfermedad de Addison. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:96,
                    name:"Enfermedad de Addison. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:97,
                    name:"Enfermedad Pélvica Inflamatoria. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:98,
                    name:"Enfermedad Pélvica Inflamatoria. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:99,
                    name:"Enfermedad Pulmonar Obstructiva Crónica. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:100,
                    name:"Enfermedad Pulmonar Obstructiva Crónica. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:101,
                    name:"Enfermedades de la Laringe. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:102,
                    name:"Enfermedades de la Laringe. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:103,
                    name:"Epidermólisis Bullosa. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:104,
                    name:"Epidermólisis Bullosa. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:105,
                    name:"Esclerosis Lateral Amiotrófica. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:106,
                    name:"Esclerosis Lateral Amiotrófica. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:107,
                    name:"Esclerosis Múltiple. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:108,
                    name:"Esclerosis Múltiple. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:109,
                    name:"Esofagitis. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:110,
                    name:"Esofagitis. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:111,
                    name:"Faringoamigdalitis Aguda (angina) . Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:112,
                    name:"Faringoamigdalitis Aguda (angina) . Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:113,
                    name:"Fascitis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:114,
                    name:"Fascitis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:115,
                    name:"Fascitis Plantar. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:116,
                    name:"Fascitis Plantar. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:117,
                    name:"Gingivitis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:118,
                    name:"Gingivitis. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:119,
                    name:"Glomerulonefritis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:120,
                    name:"Glomerulonefritis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:121,
                    name:"Gonorrea. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:122,
                    name:"Gonorrea. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:123,
                    name:"Herpes Genital. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:124,
                    name:"Herpes Genital. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:125,
                    name:"Insuficiencia Respiratoria. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:126,
                    name:"Insuficiencia Respiratoria. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:127,
                    name:"Lupus Eritematos Sistémico. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:128,
                    name:"Lupus Eritematos Sistémico. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:129,
                    name:"Miastenia. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:130,
                    name:"Miastenia. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:131,
                    name:"Neumonía. Etapa avanzada ", //Preguntar por este
                    category:"Etapa Avanzada",
                    idProtocolo:1 
                },
                {  
                    id:132,
                    name:"Neurutis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:133,
                    name:"Neurutis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:134,
                    name:"Pancreatitis Aguda. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:135,
                    name:"Pancreatitis Aguda. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:136,
                    name:"Pancreatitis Crónica. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:137,
                    name:"Pancreatitis Crónica. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:138,
                    name:"Pancreatitis Necrosante. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:139,
                    name:"Pancreatitis Necrosante. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:140,
                    name:"Patologías del Conducto Auditivo. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:141,
                    name:"Patologías del Conducto Auditivo. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:142,
                    name:"Pericarditis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:143,
                    name:"Pericarditis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {
                    id:144,
                    name:"Peritonitis. Etapa avanzada", // Preguntar por este
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:145,
                    name:"Pie de atleta. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:146,
                    name:"Pie de atleta. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:147,
                    name:"Psoriasis. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:148,
                    name:"Psoriasis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:149,
                    name:"Reflujo Gástrico. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:150,
                    name:"Reflujo Gástrico. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:151,
                    name:"Rinitis. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:152,
                    name:"Rinitis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:153,
                    name:"Rinosinusitis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:154,
                    name:"Rinosinusitis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:155,
                    name:"Sclerodema. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:156,
                    name:"Sclerodema. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:157,
                    name:"Sífilis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:158,
                    name:"Sífilis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:159,
                    name:"Síndrome Guillain-Barré. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:160,
                    name:"Síndrome Guillain-Barré. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:161,
                    name:"Tendinosis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:162,
                    name:"Tendinosis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:163,
                    name:"Tiroiditis de Hashimoto. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:164,
                    name:"Tiroiditis de Hashimoto. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:165,
                    name:"Tiroiditis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:166,
                    name:"Tiroiditis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:167,
                    name:"Tosferina (Tos convulsiva) . Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:168,
                    name:"Tosferina (Tos convulsiva) . Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:169,
                    name:"Tricomoniasis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:170,
                    name:"Tricomoniasis. Etapa avanzada ",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:171,
                    name:"Uretritis. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:172,
                    name:"Uretritis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:173,
                    name:"Urticaria. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:174,
                    name:"Urticaria. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:175,
                    name:"Uveitis. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:176,
                    name:"Uveitis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:177,
                    name:"Vaginitis. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:178,
                    name:"Vaginitis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:179,
                    name:"Verrugas. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:180,
                    name:"Verrugas. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:181,
                    name:"Virus del Papiloma Humano. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:182,
                    name:"Virus del Papiloma Humano. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:183,
                    name:"Vulvitis. Etapa inicial ",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:184,
                    name:"Vulvitis. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {  
                    id:185,
                    name:"Vulvo Vaginitis Candidiasica. Etapa inicial",
                    category:"Etapa Inicial",
                    idProtocolo:1 
                },
                {
                    id:186,
                    name:"Vulvo Vaginitis Candidiasica. Etapa avanzada",
                    category:"Etapa Avanzada",
                    idProtocolo:1
                },
                {   // ***************** Aqui inician las demas condiciones
                    id:187,
                    name:"Acidez",
                    category:"otros",
                    idProtocolo:1 
                },
                {
                    id:188,
                    name:"Acidez Estomacal ",
                    category:"otros",
                    idProtocolo:1
                },
                {  
                    id:189,
                    name:"Acné y Melasma",
                    category:"otros",
                    idProtocolo:1 
                },
                {
                    id:190,
                    name:"ACV, Falla Renal, Sufrió Infarto",
                    category:"otros",
                    idProtocolo:1
                },
                {  
                    id:191,
                    name:"Adenocarcinoma Ductal Infiltrante",
                    category:"otros",
                    idProtocolo:1 
                },
                {
                    id:192,
                    name:"ADHD",
                    category:"otros",
                    idProtocolo:1
                },
                {  
                    id:183,
                    name:"Agammaglobulinemia de Bruton ",
                    category:"otros",
                    idProtocolo:1 
                },
                {
                    id:194,
                    name:"Alergias en la Nariz y Garganta",
                    category:"otros",
                    idProtocolo:1
                },
                {  
                    id:195,
                    name:"Alergias Respiratorias ",
                    category:"otros",
                    idProtocolo:1 
                },
                {
                    id:196,
                    name:"Alzheimer",
                    category:"otros",
                    idProtocolo:1
                },
                {  
                    id:197,
                    name:"Anemia ",
                    category:"otros",
                    idProtocolo:1 
                },
                {
                    id:198,
                    name:"Anemia Falciforme",
                    category:"otros",
                    idProtocolo:1
                },
                {  
                    id:199,
                    name:"Anemia Ferropénica",
                    category:"otros",
                    idProtocolo:1 
                },
                {
                    id:120,
                    name:"Anemia Hemolítica ",
                    category:"otros",
                    idProtocolo:1
                },
                {  
                    id:201,
                    name:"Anemia y Dermatitis Atópica",
                    category:"otros",
                    idProtocolo:1 
                },
                {
                    id:202,
                    name:"Ansiedad",
                    category:"otros",
                    idProtocolo:1
                },
                {  
                    id:203,
                    name:"Ansiedad Generalizada",
                    category:"otros",
                    idProtocolo:1 
                },
                {
                    id:204,
                    name:"Apnea del Sueño, Asma, Diabetes, Tiroides, Osteopenia",
                    category:"otros",
                    idProtocolo:1
                },
                {  
                    id:205,
                    name:"Arenilla en Riñones, Hipoglucemia, Mononucleosis, Rinitis",
                    category:"otros",
                    idProtocolo:1 
                },
                {
                    id:206,
                    name:"Artritis Degenerativa Severa ",
                    category:"otros",
                    idProtocolo:1
                },
                {  
                    id:207,
                    name:"Artritis Reumática Juvenil ",
                    category:"otros",
                    idProtocolo:1 
                },
                {
                    id:208,
                    name:"Artritis Reumatoidea",
                    category:"otros",
                    idProtocolo:1
                },
                {  
                    id:209,
                    name:"Artritis Reumatoidea ",
                    category:"otros",
                    idProtocolo:1 
                },
                {
                    id:210,
                    name:"Artritis Reumatoidea, Fibromialgia, Síndrome de Sjögren",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:211,
                    name:"Artritis Reumatoidea, Hipertensión, Síndrome de Sjögren",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:212,
                    name:"Artritis Reumatoidea, Fibromialgia, Síndrome de Sjögren",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:213,
                    name:"Artritis Reumatoidea, Hipertrófica Ventricular",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:214,
                    name:"Artritis Severa",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:215,
                    name:"Artritis, Diabetes, Fibromialgia, Lung Fibrosis, Psoriasis",
                    category:"otros",
                    idProtocolo:1
                }                
                
            ]
        },
        mutations:{

        },
        actions:{

        }
    }) 