/*

    LA PALABRA "CondiciónES PROGRESIVAS DEL SISTEMA INMUNE" SE AÑADIRA MEDIANTE CODIGO PARA
    DISMINUIR EL PESO DE LOS DATOS QUE DEBE CARGAR.

*/


import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
        state: {
            brand:{
                logolink:"https://www.immunebiogreencell.com/v/condiciones/img/LogoIBGC.png"
            },
            conditions:[ //Json que contiene las Condiciónes
                {
                    id:1,
                    name:"Condición Progresiva del sistema Inmune de Ano. Estado 1,2,3 y 4 ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 //Se agrego el relacionador de protocolos
                },         
                {
                    id:2,
                    name:"Condición Progresiva del sistema Inmune de Boca. Estado 1,2,3 y 4 ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:3,
                    name:"Condición Progresiva del sistema Inmune de Cabeza y Cuello. Estado 1,2,3 y 4 ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:4,
                    name:"Condición Progresiva del sistema Inmune de Colon. Estado 1,2,3 y 4  ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:5,
                    name:"Condición Progresiva del sistema Inmune Colorectal. Estado 1,2,3 y 4 ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:6,
                    name:"Condición Progresiva del sistema Inmune de Cuerdas Vocales. Estado 1,2,3 y 4",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:7,
                    name:"Condición Progresiva del sistema Inmune de Esófago. Estado 1,2,3 y 4 ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:8,
                    name:"Condición Progresiva del sistema Inmune de Estomago. Estado 1,2,3 y 4 ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:9,
                    name:"Condición Progresiva del sistema Inmune de Garganta. Estado 1,2,3 y 4",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:10,
                    name:"Condición Progresiva del sistema Inmune de Hígado. Estado 1,2,3 y 4",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:11,
                    name:"Condición Progresiva del Sistema Inmune Hodgkin. Estado 1,2,3 y 4 ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:12,
                    name:"Condición Progresiva del sistema Inmune Non Hodgkin. ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:13,
                    name:"Condición Progresiva del sistema Inmune de Huesos. Estado 1,2,3 y 4",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:14,
                    name:"Condición Progresiva del sistema Inmune de Mama. Estado 1,2,3 y 4",
                    category:"Estado 3 y 4",
                    idProtocolo:3
                },
                {
                    id:15,
                    name:"Condición Progresiva del sistema Inmune de Ovario. Estado 1,2,3 y 4", 
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:16,
                    name:"Condición Progresiva del sistema Inmune de Páncreas. Estado 1,2,3 y 4", 
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:17,
                    name:"Condición Progresiva del sistema Inmune de Tiroides. Estado 1,2,3 y 4 ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:18,
                    name:"Condición Progresiva del sistema Inmune de Piel. Estado 1,2,3 y 4",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:19,
                    name:"Condición Progresiva del sistema Inmune de Próstata. Estado 1,2,3 y 4", 
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:20,
                    name:"Condición Progresiva del sistema Inmune de Pulmones. Estado 1,2,3 y 4  ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:21,
                    name:"Condición Progresiva del sistema Inmune de Riñones. Estado 1,2,3 y 4 ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:22,
                    name:"Condición Progresiva del sistema Inmune de Rostro (Célula Basal). Estado 1 y 2", 
                    category:"Estado 1 y 2",
                    idProtocolo:3 
                },
                {
                    id:23,
                    name:"Condición Progresiva del sistema Inmune de Testículo. Estado 1,2,3 y 4",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                
                {
                    id:24,
                    name:"Condición Progresiva del sistema Inmune de Utero. Estado 1,2,3 y 4",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:25,
                    name:"Condición Progresiva del sistema Inmune de Vejiga. Estado 1,2,3 y 4",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:26,
                    name:"Condición Progresiva del sistema Inmune Metastasis. ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:27,
                    name:"Condición Progresiva del sistema Inmune Metastizado. ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:28,
                    name:"Condición Progresiva del sistema Inmune en Sangre. ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:29,
                    name:"Tumores ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:31,
                    name:"Condición Progresiva del sistema Inmune en el Cerebro. ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:32,
                    name:"Condición Progresiva del sistema Inmune en la Hipófisis. ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:33,
                    name:"Condición Progresiva del sistema Inmune en los Músculos. ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:34,
                    name:"Condición Progresiva del sistema Inmune en los Nervios Periféricos. ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:35,
                    name:"Histiocitosis de Células de Langerhans LCH. ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:36,
                    name:"Condición Progresiva del sistema Inmune en los Nódulos linfáticos. ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:37,
                    name:"Condición Progresiva del sistema Inmune Laringe. ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:38,
                    name:"Condición Progresiva del sistema Inmune Hipofaringe. ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:39,
                    name:"Acné ",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:40,
                    name:"ADHD. 12 a 16 años",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:41,
                    name:"ADHD. 17 años en adelante",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:42,
                    name:"Alopecia",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:43,
                    name:"Amiloidosis ",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:44,
                    name:"Autismo. 12 a 16 años ",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:45,
                    name:"Autismo. 17 años en adelante",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:46,
                    name:"Asperger. 12 a 16 años",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:47,
                    name:"Asperger. 17 años en adelante",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:48,
                    name:"Bartolinitis",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:49,
                    name:"Blefaritis",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:50,
                    name:"Bronquiectasias",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:51,
                    name:"Bronquitis Aguda",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:52,
                    name:"Bronquitis Crónica ",
                    category:"otros",
                    idProtocolo:3
                },
                {  
                    id:53,
                    name:"Celulitis Periorbitaria ",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:54,
                    name:"Cervicitis ",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:55,
                    name:"Cistitis",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:56,
                    name:"Clamidia",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:57,
                    name:"Coriorretinitis",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:58,
                    name:"Coriza. Catarro",
                    category:"otros",   
                    idProtocolo:2 
                },
                {
                    id:59,
                    name:"Coriza. Inflamacion de la Mucosa Nasal",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:60,
                    name:"Crohn (Enfermedad de Crohn)",
                    category:"otros",
                    idProtocolo:3 
                },
                {  
                    id:61,
                    name:"Difteria ",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:62,
                    name:"Eczema",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:63,
                    name:"Enfermedad de Addison ",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:64,
                    name:"Enfermedad Inflamatoria Pélvica ",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:65,
                    name:"Epidermólisis Bullosa ",
                    category:"otros",
                    idProtocolo:3 
                },
                {
                    id:66,
                    name:"Laringitis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:67,
                    name:"Esclerosis Lateral Amiotrófica. ELA ",
                    category:"otros",
                    idProtocolo:3 
                },
                {  
                    id:68,
                    name:"Esclerosis Múltiple ",
                    category:"otros",
                    idProtocolo:3 
                },
                {
                    id:69,
                    name:"Epilepsia. 12 a 16 años",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:70,
                    name:"Epilepsia. 17 años en adelante ",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:71,
                    name:"Esofagitis ",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:72,
                    name:"Faringoamigdalitis ",
                    category:"otros",
                    idProtocolo:2
                },                
                {  
                    id:73,
                    name:"Fascitis Plantar ",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:74,
                    name:"Gingivitis",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:75,
                    name:"Glomerulonefritis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:76,
                    name:"Gonorrea ",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:77,
                    name:"Herpes Genital",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:78,
                    name:"Miastenia Grave ",
                    category:"otros",
                    idProtocolo:3 
                },
                {  
                    id:79,
                    name:"Neumonía ", 
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:80,
                    name:"Neuritis",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:81,
                    name:"Pancreatitis",
                    category:"otros",
                    idProtocolo:3 
                },
                {  
                    id:82,
                    name:"Patologías del Conducto Auditivo",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:83,
                    name:"Pericarditis ",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:84,
                    name:"Peritonitis", 
                    category:"otros",
                    idProtocolo:3
                },
                {  
                    id:85,
                    name:"Pie de atleta ",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:86,
                    name:"Psoriasis ",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:87,
                    name:"Psoriasis en Placas ",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:88,
                    name:"Psoriasis en las uñas",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:89,
                    name:"Psoriasis Guttata o en Gotas ",
                    category:"otros",
                    idProtocolo:3 
                },
                {  
                    id:90,
                    name:"Psoriasis Inversa ",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:91,
                    name:"Psoriasis Pustulosa ",
                    category:"otros",
                    idProtocolo:3 
                },
                {  
                    id:92,
                    name:"Psoriasis Eritrodérmica ",
                    category:"otros",
                    idProtocolo:3 
                },
                {
                    id:93,
                    name:"Reflujo Gástrico",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:94,
                    name:"Rinitis",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:95,
                    name:"Rinosinusitis",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:96,
                    name:"Sífilis",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:97,
                    name:"Síndrome Guillain-Barré",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:98,
                    name:"Tendinosis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:99,
                    name:"Tiroiditis de Hashimoto",
                    category:"otros",
                    idProtocolo:3 
                },
                {
                    id:100,
                    name:"Tiroiditis ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:101,
                    name:"Hipertiroidismo ",
                    category:"otros",
                    idProtocolo:2
                },  
                {
                    id:102,
                    name:"Hipotiroidismo ",
                    category:"otros",
                    idProtocolo:2
                }, 
                {
                    id:103,
                    name:"Nodulos en la Tiroides ",
                    category:"otros",
                    idProtocolo:2
                }, 
                {
                    id:104,
                    name:"Bocio multinodular tóxico ",
                    category:"otros",
                    idProtocolo:3
                },               
                {  
                    id:105,
                    name:"Tos Ferina. Pertusis ",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:105,
                    name:"Trasplante de órganos ",
                    category:"otros",
                    idProtocolo:1
                },
                {  
                    id:106,
                    name:"Tricomoniasis",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:107,
                    name:"Uretritis",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:108,
                    name:"Urticaria ",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:109,
                    name:"Uveitis",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:110,
                    name:"Vaginitis",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:111,
                    name:"Verrugas",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:112,
                    name:"Virus del Papiloma Humano",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:113,
                    name:"Vulvitis",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:114,
                    name:"Vulvo Vaginitis Candidiasica",
                    category:"otros",
                    idProtocolo:2 
                },
                {   
                    id:115,
                    name:"Acidez ",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:116,
                    name:"Acidez Estomacal ",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:117,
                    name:"Agammaglobulinemia ",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:118,
                    name:"Accidente Cerebrovascular. ACV ",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:119,
                    name:"Alergia ",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:120,
                    name:"Alergias Respiratorias ",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:121,
                    name:"Alzheimer",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:122,
                    name:"Anemia ",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:123,
                    name:"Anemia Falciforme",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:124,
                    name:"Anemia Ferropénica",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:125,
                    name:"Anemia Hemolítica ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:126,
                    name:"Ansiedad",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:127,
                    name:"Apnea del Sueño ",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:128,
                    name:"Arenilla en Riñones ",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:129,
                    name:"Artritis ",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:130,
                    name:"Artritis Reumatoide ",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:131,
                    name:"Artritis Severa ",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:132,
                    name:"Artrosis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:133,
                    name:"Asma ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:134,
                    name:"Asma Crónica ",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:135,
                    name:"Atrofia Cerebral",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:136,
                    name:"Apraxia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:137,
                    name:"Cálculos Biliares o en Vesícula",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:138,
                    name:"Cálculos Renales",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:139,
                    name:"Candidiasis Vaginal ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:140,
                    name:"Charcot Marie Tooth. CMT",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:141,
                    name:"Problemas Circulatorios o de Circulación ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:142,
                    name:"Cirrosis Hepática",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:143,
                    name:"Colitis Nerviosa",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:144,
                    name:"Colitis Ulcerosa",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:145,
                    name:"Reforzar o Suplementar el Sistema Inmune",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:146,
                    name:"Colon Inflamado",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:147,
                    name:"Colon Irritable",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:148,
                    name:"Convulsiones. 12 a 16 años",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:149,
                    name:"Convulsiones. 17 años en adelante",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:150,
                    name:"Corea. Sindrome de Huntington",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:151,
                    name:"Sindrome de Crest. Esclerodermia ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:152,
                    name:"Deficiencia Motora. 12 a 16 años",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:153,
                    name:"Deficiencia Motora. 17 años en adelante",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:154,
                    name:"Deficiencia Renal",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:155,
                    name:"Déficit Cognitivo",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:156,
                    name:"Déficit de Atención. 12 a 16 años",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:157,
                    name:"Déficit de Atención. 17 años en adelante",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:158,
                    name:"Depresión ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:159,
                    name:"Dermatosis Cenicienta",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:160,
                    name:"Dermatosis Papulosa Nigra",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:161,
                    name:"Dermatosis Ocupacional",
                    category:"otros",
                    idProtocolo:2
                }, 
                {
                    id:162,
                    name:"Dermatosis Ampollosa",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:163,
                    name:"Dermatosis Palmoplantar",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:164,
                    name:"Dermatitis por Estasis",
                    category:"otros",
                    idProtocolo:2
                },{
                    id:165,
                    name:"Dermatitis por Contacto Alérgica",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:166,
                    name:"Dermatitis Atópica",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:167,
                    name:"Dermatitis de Contacto Irritante",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:168,
                    name:"Neurodermatitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:169,
                    name:"Dermatitis perioral",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:170,
                    name:"Dermatitis Seborreica",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:171,
                    name:"Dermatitis Exfoliativa Generalizada o Eritroderma",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:172,
                    name:"Dermatomiositis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:173,
                    name:"Distonía",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:174,
                    name:"Desintoxicar el Hígado",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:175,
                    name:"Diabetes Mellitus Tipo 1",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:176,
                    name:"Diabetes tipo 2 nivel de glucosa EN AYUNAS entre 90 a 130 mg/dl",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:177,
                    name:'Diabetes tipo 2 nivel de glucosa EN AYUNAS entre 131 a 240 mg/dl',
                    category:'otros',
                    idProtocolo:2
                },
                {
                    id:178,
                    name:'Diabetes tipo 2 nivel de glucosa EN AYUNAS superior a 241 mg/dl',
                    category:'otros',
                    idProtocolo:3
                },
                {
                    id:179,
                    name:"Disfunción Eréctil",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:180,
                    name:"Displacía de Cuello de Útero",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:181,
                    name:"Distrofia Muscular",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:182,
                    name:"Diverticulitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:183,
                    name:"Dolor de Coyunturas",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:184,
                    name:"Dolor de Espalda",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:185,
                    name:"Dolor de Oídos",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:186,
                    name:"Dolor de Rodillas",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:187,
                    name:"Dolor en las Articulaciones",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:188,
                    name:"Dolor en los Huesos",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:189,
                    name:"Dolor Muscular",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:190,
                    name:"Dolor Nervio Ciático",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:191,
                    name:"Dolor Pélvico",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:192,
                    name:"Encefalitis Viral",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:193,
                    name:"Crioglobulinemia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:194,
                    name:"Enfermedad de Chagas",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:195,
                    name:"Enfermedad de Gaucher. Agrandamiento Bazo y/o Hígado",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:196,
                    name:"Enfermedad de Lyme",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:197,
                    name:"Enfermedad Drepanocítica",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:198,
                    name:"Enfermedad Mixta del Tejido Conectivo. EMTC",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:199,
                    name:"Epilepsia Mioclónica. 12 a 16 años",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:200,
                    name:"Epilepsia Mioclónica. 17 años en adelante ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:201,
                    name:"EPOC (Enfermedad Pulmonar Obstructiva Crónica) ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:202,
                    name:"Enfermedad Pulmonar Obstructiva Crónica. EPOC ",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:203,
                    name:"Esclerosis Nodular",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:204,
                    name:"Esclerodermia. Sindrome de Crest",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:205,//sigue cuenta aqui
                    name:"Espondilitis Anquilosante ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:206,
                    name:"Estenosis Traqueal (Granulación de Tejido)",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:207,
                    name:"Estreñimiento",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:208,
                    name:"Estrés",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:209,
                    name:"Eyaculación Dolorosa",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:210,
                    name:"Fatiga",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:211,
                    name:"Fibroma",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:212,
                    name:"Fibromatosis Agresiva (Tumores Desmoides)",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:213,
                    name:"Fibromialgia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:214,
                    name:"Lupus Discoide",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:215,
                    name:"Lupus Eritematoso Sistémico",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:216,
                    name:"Gastritis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:217,
                    name:"Infeccion Estomacal. Helicobacter Pylori",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:218,
                    name:"Infeccion en el Tracto Digestivo. Helicobacter Pylori",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:219,
                    name:"Gastritis Erosiva",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:220,
                    name:"Glomeruloesclerosis Focal y Segmentaria",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:221,
                    name:"Gota",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:222,
                    name:"Gonorrea",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:223,
                    name:"Hemorroides",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:224,
                    name:"Hepatitis A ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:225,
                    name:"Hepatitis B (inactivo)",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:226,
                    name:"Hepatitis B Crónica",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:227,
                    name:"Hepatitis C ",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:228,
                    name:"Hepatitis D",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:229,
                    name:"Hepatitis E",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:230,
                    name:"Hepatitis Autoinmune Tipo 1",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:231,
                    name:"Hepatitis Autoinmune Tipo 2",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:232,
                    name:"Herpes",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:233,
                    name:"Herpes Genital ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:234,
                    name:"Hidradenitis Supurativa",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:235,
                    name:"Higado Graso",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:236,
                    name:"Hipercolesterolemia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:237,
                    name:"Hiperinsulinismo",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:238,
                    name:"Hiperplasia Endometrial Compleja",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:239,
                    name:"Hipertensión HBP",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:240,
                    name:"Hipertensión Arterial",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:241,
                    name:"Hipertensión Pulmonar",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:242,
                    name:"Hipertrigliceridemia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:243,
                    name:"Hiperuricemia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:244,
                    name:"Hipotiroidismo",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:246,
                    name:"Incontinencia Urinaria.",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:247,
                    name:"Infección en la Orina. ITU",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:248,
                    name:"Infecciones en la Vejiga",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:249,
                    name:"Inflamación en la Próstata",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:250,
                    name:"Insomnio",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:251,
                    name:"Insuficiencia o Falla Renal",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:252,
                    name:"Lepra",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:253,
                    name:"Liquen Escleroso",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:254,
                    name:"Liquen Plano",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:255,
                    name:"Litiasis Renal. Calculos Renales",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:256,
                    name:"Malformaciones de Chiari",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:257,
                    name:"Mastocitosis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:258,
                    name:"Melasma",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:259,
                    name:"Meningioma Frontal",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:260,
                    name:"Meningitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:261,
                    name:"Miastenia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:262,
                    name:"Migraña",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:263,
                    name:"Miomatosis Uterina",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:264,
                    name:"Morfea (Esclerodermia en Placas)",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:265,
                    name:"Nefropatía Diabética",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:266,
                    name:"Nefropatía IgA. Enfermedad de Berger",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:267,
                    name:"Neuropatía. Neuropatía Periférica",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:268,
                    name:"Neuropatía Diabética",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:269,
                    name:"Nódulos de Tiroides Benignos",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:270,
                    name:"Onicomicosis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:271,
                    name:"Osteoartritis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:272,
                    name:"Osteoartritis Progresiva",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:273,
                    name:"Osteonecrosis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:274,
                    name:"Osteoporosis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:275,
                    name:"Ovarios Poliquísticos",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:276,
                    name:"Parálisis Cerebral. 17 años en adelante",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:277,
                    name:"Parkinson",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:278,
                    name:"Pénfigo ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:279,
                    name:"Perdida del Deseo Sexual o la Libido",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:280,
                    name:"Policitemia Vera",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:281,
                    name:"Polidermatomiositis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:282,
                    name:"Polineuropatía Desmielinizante",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:283,
                    name:"Prediabetes",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:284,
                    name:"Premenopausia",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:285,
                    name:"Principios de Alzheimer",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:286,
                    name:"Próstata Inflamada",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:287,
                    name:"Prostatitis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:288,
                    name:"Proteinuria",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:289,
                    name:"Artritis Psoriásica",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:290,
                    name:"Purpura Trombocitopenia Inmune. PTI",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:291,
                    name:"Trombocitopenia Inmunitaria",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:292,
                    name:"Queratosis Actínica",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:293,
                    name:"Querantoma",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:294,
                    name:"Quistes en el Ovario",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:295,
                    name:"Refuerzo del Sistema Inmune",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:296,
                    name:"Retinitis Pigmentosa",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:297,
                    name:"Retraso Mental Leve. 12 a 16 años",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:298,
                    name:"Retraso Mental Leve. 17 años en adelante",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:299,
                    name:"Retraso Mental Profundo. 12 a 16 años",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:300,
                    name:"Retraso Mental Profundo. 17 años en adelante",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:301,
                    name:"Rinitis Alérgica",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:302,
                    name:"Síndrome Antifosfolípido",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:303,
                    name:"Síndrome Cerebeloso",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:304,
                    name:"Síndrome de Churg-Strauss",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:305,
                    name:"Síndrome de Dolor Regional Complejo (CRPS)",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:306,
                    name:"Sindrome de Huntington. Corea",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:307,
                    name:"Síndrome de Intestino Irritable",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:308,
                    name:"Síndrome de Lennox Gastaut",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:309,
                    name:"Síndrome de Marfan",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:310,
                    name:"Síndrome de Raynaud",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:311,
                    name:"Síndrome de Rett",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:312,
                    name:"Síndrome de Sjögren",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:313,
                    name:"Síndrome de Túnel Carpiano",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:314,
                    name:"Síndrome del Turner. 12 a 16 años",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:315,
                    name:"Síndrome del Turner. 17 años en adelante",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:316,
                    name:"Síndrome Mielodisplásico",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:317,
                    name:"Síndrome Nefrológico",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:318,
                    name:"Síndrome Nefrótico Corticoresistente",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:319,
                    name:"Sinusitis Crónica",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:320,
                    name:"Trastorno Obsesivo Compulsivo TOC",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:321,
                    name:"Trastorno de déficit de atención hiperactividad. ADHD. 12 a 16 años",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:322,
                    name:"Trastorno de déficit de atención hiperactividad. ADHD. 17 años en adelante",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:323,
                    name:"Trastorno Bipolar",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:324,
                    name:"Úlcera Gástrica",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:325,
                    name:"Uveitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:326,
                    name:"Vasculitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:327,
                    name:"Virus de Inmunodeficiencia Humana",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:328,
                    name:"Vitíligo ",
                    category:"otros",
                    idProtocolo:2
                },

            ],
            protocols:[
                //Aqui inicia el protocolo completo
                {
                    id:1, //ID del protocolo
                    name:'2 Frascos 2ml/cc', //Nombre del protocolo
                    category:'categoria 2', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Fase 1', //Nombre de la fase
                        duration:'120 días', //Duracion de la fase
                        coverage:'60 días',
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL', //Nombre del producto
                            bottles:'2 frascos de 240 ml. c/u.', //Cantidad de botellas
                            dose:'2 ml/cc 4 veces al día', //Dosis del producto
                            minuse: '120 días',
                            price: 124.50,//Precio del producto
                            offer: 94.15,//Precio oferta
                            link:"https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=IBGC-2MLPERSERVING", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC2FRASCOS.jpeg"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Vitamina C 2000 MG - 4 meses de duración aprox.',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'1 scoop diario mezclado con jugo de frutas o agua.',
                            price:29.95,
                            offer: 0,
                            link:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=vitaminac2000mg-120-Servings',
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/vitaminac.png"
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=MODU-2ML'//Finaliza el producto 2
                    },
                },//Aqui finaliza el protocolo
                {
                    id:2, //ID del protocolo
                    name:'2 Frascos 4ml/cc', //Nombre del protocolo
                    category:'categoria 2', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Fase 1', //Nombre de la fase
                        duration:'120 días', //Duracion de la fase
                        coverage:'30 días',
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL', //Nombre del producto
                            bottles:'2 frascos de 240 ml. c/u.', //Cantidad de botellas
                            dose:'4 ml/cc 4 veces al día', //Dosis del producto
                            minuse: '120 días',
                            price: 124.50,//Precio del producto
                            offer: 94.15,//Precio oferta
                            link:"https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=IBGC-4MLPERSERVING", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC2FRASCOS.jpeg"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Vitamina C 2000 MG - 4 meses de duración aprox.',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'1 scoop diario mezclado con jugo de frutas o agua.',
                            price:29.95,
                            offer: 0,
                            link:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=vitaminac2000mg-120-Servings',
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/vitaminac.png"
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=MODU-4ML'//Finaliza el producto 2
                    },
                },//Aqui finaliza el protocolo
                {
                    id:3, //ID del protocolo
                    name:'4 Frascos 8ml/cc', //Nombre del protocolo
                    category:'categoria 4', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Fase 1', //Nombre de la fase
                        duration:'120 días', //Duracion de la fase
                        coverage:'30 días',
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL', //Nombre del producto
                            bottles:'4 frascos de 240 ml. c/u.', //Cantidad de botellas
                            dose:'8 ml/cc 4 veces al día', //Dosis del producto
                            minuse: '120 días',
                            price: 249.00,//Precio del producto
                            offer: 174.30,//Precio oferta
                            link:"https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=IBGC-8MLPERSERVING", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC4FRASCOS.jpeg"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Vitamina C 2000 MG - 4 meses de duración aprox.',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'1 scoop diario mezclado con jugo de frutas o agua.',
                            price:0,
                            offer: 0,
                            link:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=vitaminac2000mg-120-Servings',
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/vitaminac.png"
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=IBGC-8MLPERSERVING'//Finaliza el producto 2
                    },
                },//Aqui finaliza el protocolo
                {
                    id:4, //ID del protocolo
                    name:'2 Frascos 2ml/cc', //Nombre del protocolo
                    category:'categoria 2', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Fase 1', //Nombre de la fase
                        duration:'120 días', //Duracion de la fase
                        coverage:'60 días',
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL', //Nombre del producto
                            bottles:'2 frascos de 240 ml. c/u.', //Cantidad de botellas
                            dose:'2 ml/cc 4 veces al día', //Dosis del producto
                            minuse: '120 días',
                            price: 124.50,//Precio del producto
                            offer: 94.15,//Precio oferta
                            link:"https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=IBGC-2MLPERSERVING", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC2FRASCOS.jpeg"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Vitamina C 2000 MG - 4 meses de duración aprox.',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'1 scoop diario mezclado con jugo de frutas o agua.',
                            price:29.95,
                            offer: 0,
                            link:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=vitaminac2000mg-120-Servings',
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/vitaminac.png"
                        },
                        p3:{
                            name:'Wound Fixer – Spray 4oz. Uso tópico – 1400 rociadas aprox',
                            bottles:'1', //Cantidad de botellas
                            dose:'Enjuague bien la zona afectada y aplique el producto sobre ella dos o tres veces al día. Agitar bien antes de usar.', //Dosis del producto
                            price:44.95, //Precio del producto
                            offer:0,
                            link:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=woundfixer-condicionespiel', //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/wound-fixer.jpeg"
                        },
                        linkPhase1:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=MODU-2MLIBGCWFVC'//Finaliza el producto 2
                    },
                },//Aqui finaliza el protocolo
                {
                    id:5, //ID del protocolo
                    name:'2 Frascos 4ml/cc', //Nombre del protocolo
                    category:'categoria 2', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Fase 1', //Nombre de la fase
                        duration:'120 días', //Duracion de la fase
                        coverage:'30 días',
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL', //Nombre del producto
                            bottles:'2 frascos de 240 ml. c/u.', //Cantidad de botellas
                            dose:'4 ml/cc 4 veces al día', //Dosis del producto
                            minuse: '120 días',
                            price: 124.50,//Precio del producto
                            offer: 94.15,//Precio oferta
                            link:"https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=IBGC-4MLPERSERVING", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC2FRASCOS.jpeg"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Vitamina C 2000 MG - 4 meses de duración aprox.',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'1 scoop diario mezclado con jugo de frutas o agua.',
                            price:29.95,
                            offer: 0,
                            link:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=vitaminac2000mg-120-Servings',
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/vitaminac.png"
                        },
                        p3:{
                            name:'Wound Fixer – Spray 4oz. Uso tópico – 1400 rociadas aprox',
                            bottles:'1', //Cantidad de botellas
                            dose:'Enjuague bien la zona afectada y aplique el producto sobre ella dos o tres veces al día. Agitar bien antes de usar.', //Dosis del producto
                            price:44.95, //Precio del producto
                            offer:0,
                            link:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=woundfixer-condicionespiel', //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/wound-fixer.jpeg"
                        },
                        linkPhase1:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=MODU-4MLIBGCWFVC'//Finaliza el producto 2
                    },
                },//Aqui finaliza el protocolo
                {
                    id:6, //ID del protocolo
                    name:'4 Frascos 8ml/cc', //Nombre del protocolo
                    category:'categoria 4', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Fase 1', //Nombre de la fase
                        duration:'120 días', //Duracion de la fase
                        coverage:'30 días',
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL', //Nombre del producto
                            bottles:'4 frascos de 240 ml. c/u.', //Cantidad de botellas
                            dose:'8 ml/cc 4 veces al día', //Dosis del producto
                            minuse: '120 días',
                            price: 249.00,//Precio del producto
                            offer: 174.30,//Precio oferta
                            link:"https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=IBGC-8MLPERSERVING", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/IBGC4FRASCOS.jpeg"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Vitamina C 2000 MG - 4 meses de duración aprox.',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'1 scoop diario mezclado con jugo de frutas o agua.',
                            price:0,
                            offer: 0,
                            link:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=vitaminac2000mg-120-Servings',
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/vitaminac.png"
                        },
                        p3:{
                            name:'Wound Fixer – Spray 4oz. Uso tópico – 1400 rociadas aprox',
                            bottles:'1', //Cantidad de botellas
                            dose:'Enjuague bien la zona afectada y aplique el producto sobre ella dos o tres veces al día. Agitar bien antes de usar.', //Dosis del producto
                            price:44.95, //Precio del producto
                            offer:0,
                            link:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=woundfixer-condicionespiel', //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/wound-fixer.jpeg"
                        },
                        linkPhase1:'https://www.immunebiogreencell.com/ProductDetails.asp?ProductCode=MODU-8MLIBGCWFVC'//Finaliza el producto 2
                    },
                },//Aqui finaliza el protocolo
                
                
            ],
        },
        mutations:{

        },
        actions:{

        }
    }); 