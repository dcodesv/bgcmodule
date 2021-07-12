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
                logolink:"https://cdn.shopify.com/s/files/1/0559/3936/7090/files/Logo-horizontal_360x.png"
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
                    idProtocolo:2 
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
                    idProtocolo:2 
                },
                {  
                    id:92,
                    name:"Psoriasis Eritrodérmica ",
                    category:"otros",
                    idProtocolo:2 
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
                    idProtocolo:999
                },
                {
                    id:149,
                    name:"Convulsiones. 17 años en adelante",
                    category:"otros",
                    idProtocolo:999
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
                {
                    id:329,
                    name:"Alopecia areata",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:330,
                    name:"Anemia Aplásica ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:331,
                    name:"Anemia drepanocitica  ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:332,
                    name:"Traumatismo Cerebral. TBI ",
                    category:"otros",
                    idProtocolo:1
                },//inicia id desordenados
                {
                    id:333,
                    name:"Condición Progresiva del sistema Inmune de Cuello Uterino. Estado 1,2,3 y 4  ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:334,
                    name:"Condición Progresiva del sistema Inmune Peritoneal. Estado 1,2,3 y 4  ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:335,
                    name:"Soplo en el corazón ",
                    category:"otros. Si usted desea consulte a su médico primario y/o especialista", 
                    idProtocolo:0
                },
                {
                    id:336,
                    name:"Cardiopatía ",
                    category:"otros. Si usted desea consulte a su médico primario y/o especialista",
                    idProtocolo:0
                },
                {
                    id:337,
                    name:"Alopecia Androgénica ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:338,
                    name:"Isquemia Cerebral  ",
                    category:"otros. Si usted desea consulte a su médico primario y/o especialista",
                    idProtocolo:0
                },
                {
                    id:339,
                    name:"Colesterol Elevado ",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:340,
                    name:"Colitis Ulcerosa Aguda ",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:341,
                    name:"Síndrome de Phelan-McDermid o Deleccion 22q13.3 ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:342,
                    name:"Demencia ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:343,
                    name:"Demencia Mixta ",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:344,
                    name:"Dengue ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:345,
                    name:"Desorden Hormonal ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:346,
                    name:"Duodenitis",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:347,
                    name:"Encefalitis Viral Aguda ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:348,
                    name:"Esquizofrenia ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:349,
                    name:"Polimialgia Reumatica  ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:350,
                    name:"Fibromialgia - Polimialgia Reumatica  ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:351,
                    name:"Espondilitis aquilosante - Fibromialgia  ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:352,
                    name:"Esquizoencefalia de labios abiertos ",
                    category:"otros. Si usted desea consulte a su médico primario y/o especialista",
                    idProtocolo:0
                },
                {
                    id:353,
                    name:"Fibromialgia - Gastrointeritis  ",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:354,
                    name:"Hemofilia ",
                    category:"otros. Si usted desea consulte a su médico primario y/o especialista",
                    idProtocolo:0
                },
                {
                    id:355,
                    name:"Hepatomegalia. Higado agrandado ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:356,
                    name:"hiperplasia prostática benigna (HPB). Prostata agrandada ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:357,
                    name:"Deficiencia Cardiaca ",
                    category:"otros. Si usted desea consulte a su médico primario y/o especialista",
                    idProtocolo:0
                },
                {
                    id:358,
                    name:"Hipoxia Cerebral  ",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:359,
                    name:"Inflamación de la glandula Mamaria  ",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:360,
                    name:"Insuficiencia Arterial y Venosa ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:361,
                    name:"Leptospirosis  ",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:362,
                    name:"Leucopenia  ",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:363,
                    name:"Lisencefalia ",
                    category:"otros. Si usted desea consulte a su médico primario y/o especialista",
                    idProtocolo:0
                },
                {
                    id:364,
                    name:"Microcefalia ",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:365,
                    name:"Mielomeningocele (espina bifida) ",
                    category:"otros. Si usted desea consulte a su médico primario y/o especialista",
                    idProtocolo:0
                },
                {
                    id:366,
                    name:"Neurofibromatosis NF1 ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:367,
                    name:"Obesidad ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:368,
                    name:"Obstrucción de arterias  ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:369,
                    name:"Obstrucción de trompas de falopio ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:370,
                    name:"Pemphigus Vulgaris ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:371,
                    name:"Polycythemia vera (PV)  ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:372,
                    name:"Retardo Psicomotor  ",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:373,
                    name:"Retinopatia   ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:374,
                    name:"Sarcoidosis ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:375,
                    name:"Condición Progresiva del sistema Inmune S. de Ewing. Estado 1,2,3 y 4  ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:376,
                    name:"Síndrome Antifosfolípido ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:377,
                    name:"Sindrome Cri Du Chat ",
                    category:"otros. Si usted desea consulte a su médico primario y/o especialista",
                    idProtocolo:0
                },
                {
                    id:378,
                    name:"síndrome de Prader-Willi  ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:379,
                    name:"síndrome de Tourette ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:380,
                    name:"Sindrome de Down ",
                    category:"otros. Si usted desea consulte a su médico primario y/o especialista",
                    idProtocolo:0
                },
                {
                    id:381,
                    name:"Sindrome Dravet ",
                    category:"otros. Si usted desea consulte a su médico primario y/o especialista",
                    idProtocolo:2
                },
                {
                    id:382,
                    name:"síndrome de McCune-Albright ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:383,
                    name:"Trastorno del sueño ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:384,
                    name:"Trastorno Disforico Premenstrual  ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:385,
                    name:"síndrome triple X. Trisomía X. 47,XXX ",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:386,
                    name:"Condición Progresiva del sistema Inmune Glioblastoma. Estado 1,2,3 y 4  ",
                    category:"Estado 1,2,3 y 4",
                    idProtocolo:3 
                },
                {
                    id:387,
                    name:"ventriculomegalia ",
                    category:"otros. Si usted desea consulte a su médico primario y/o especialista",
                    idProtocolo:0       
                },
                {  //envio vicky 19/10/2020
                    id:500,
                    name:"Ataxia ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:501,
                    name:"Ataxia Cerebelosa ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:502,
                    name:"Lumbalgia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:503,
                    name:"Cervicalgia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:504,
                    name:"Sincope Vasovagal",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:505,
                    name:"Atrofia Multisistemica",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:506,
                    name:"Atrofia Muscular Espinal",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:507,
                    name:"Obstruccion Arterial",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:508,
                    name:"Hidrocefalia",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:509,
                    name:"Disqueratosis Congenita",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:510,
                    name:"Meningoencefalitis Bacteriana",
                    category: "otros",
                    idProtocolo:3
                },
                {
                    id:511,
                    name:"Distrofia Miotonica tipo 2",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:512,
                    name:"Meningitis Bacteriana",
                    category: "otros",
                    idProtocolo:3
                },
                {
                    id:513,
                    name:"Condición Progresiva del sistema Inmune en Glandula Parotida. ",
                    category: "Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:514,
                    name:"Lesión Cerebral Anoxica ",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:515,
                    name:"Enfermedad de Wilson ",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:516,
                    name:"Adenopatía ",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:517,
                    name:"Vagotonismo",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:518,
                    name:"Sindrome Piriforme",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:519,
                    name:"Bradicardia Sinusal",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:520,
                    name:"Trasplante de medula osea",
                    category: "otros",
                    idProtocolo:1
                },
                //adiciones 12/jul/2021
                {
                    id:521,
                    name:"Mielopatia cervical desmienelizante ( hemiparecia izquierda)",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:522,
                    name:"Neuropatia diabetica de miembro inferior derecho, con necrosis en 3 dedos, arteriosclerosis en arteria femoral, hipertensión, problema renal",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:523,
                    name:"Operada de mastitis idiopatica aguada",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:524,
                    name:"siringomielia - problemas renales",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:525,
                    name:"Hipoplasia medular severa",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:526,
                    name:"Astrocitoma anaplasico grado III",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:527,
                    name:"Sindrome mielodisplasico",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:528,
                    name:"Diabetes tipo I - insulina antes de la comida",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:529,
                    name:"Sarcodosis - hipertensión - pre diabetes",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:530,
                    name:"Disfunción erectil - insuficiencia cardiaca",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:531,
                    name:"Enfermedad renal cronica, dialisis, hipertenso",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:532,
                    name:"Polycythemia vera (quimioterapia)",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:533,
                    name:"Prueba de ANA POSITIVO ( ANTICUERPOS NUCLEARES EN SANGRE)",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:534,
                    name:"Presión alta por glandula adrenal dañada, hipotiroidismo ",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:535,
                    name:"Lupus (sle) pericarditis- Sindrome de raynaud - covid actualmente  ",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:536,
                    name:"Tuberculosis , gastritis cronica",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:537,
                    name:"Leucemia kinfoblastica aguda ",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:538,
                    name:"Red Chiari, insomnio, artritis",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:539,
                    name:"Polimiositis",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:540,
                    name:"Parkinson, problema renal",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:541,
                    name:"Helicobacter pilory, diabetes tipo 2",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:542,
                    name:"Sindrome antifosfolipido, sindrome sjogren, hipertensión",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:543,
                    name:"Sindrome de reiter (artritis reactiva)",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:544,
                    name:"Disfunción temporomandibular",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:545,
                    name:"Adicción a las drogas",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:546,
                    name:"Autismo, diabetes tipo 2",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:547,
                    name:"Strees",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:548,
                    name:"Sarna humana",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:549,
                    name:"Sincope vasovagal",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:550,
                    name:"Autismo, tuvo un infarto a causa de una rabieta",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:551,
                    name:"Sindrome del pie caido, dañado el nervio ciatico y peroneo",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:552,
                    name:"Sindrome takayasu, artritis",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:553,
                    name:"Trastorno psicopatico, cardiopatia",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:554,
                    name:"Diabetes tipo 2, presión alta, daño renal, apnea y tiroides ",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:555,
                    name:"Operada de hernia discal, artritis, problemas de memoria, ulcera, hipertensión ",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:556,
                    name:"Sindrome de la nariz vacia ",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:557,
                    name:"Insuficiencia renal,demencia senil  ",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:558,
                    name:"Operado de hematomas cerebrales, dolores de cabeza, manchas negras en el cerebro",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:559,
                    name:"Tumor maligno, epilepsia, diabetes, depresión, hipertensión, insuficiencia renal",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:560,
                    name:"Glicemia alta, osteoporosis, radicolopatia cervical, microlitiasis renal bilateral",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:561,
                    name:"Condición Progresiva del sistema Inmune en vagina e higado, neuropatia, condición renal",
                    category: "Estado 1,2,3 y 4",
                    idProtocolo:1
                },
                {
                    id:562,
                    name:"Mieloma multiple, trasplante autologo de medula osea",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:563,
                    name:"Tumor cerebral, tiene activo solo la mitad del cuerpo",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:564,
                    name:"Epilepsia mioclonica, deficit de atencion, bipolaridad",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:565,
                    name:"Paraplejia , calculos renales",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:566,
                    name:"Sarcodosis cutanea, nodulos hipoecoico con  hipervascularidad central y periferica, ritmo cardiaco acelerado",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:567,
                    name:"Presión del nervio trigemino, trastorno temporomandibular, fuertes dolores de cabeza",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:568,
                    name:"Vaginitis por trichomonas",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:569,
                    name:"Absceso periadmidalino constantes",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:570,
                    name:"Infección Campylobacter con diarreas constantes",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:571,
                    name:"Paciente renal en dialisis ",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:572,
                    name:"Nefritis",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:573,
                    name:"Herida en el cordon espinal, artritis toraxica moderada, quiste benigno en un riñon",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:574,
                    name:"Menopausia precoz, covid",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:575,
                    name:"Pemphigus vulgaris, diabetes 1, presión alta",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:576,
                    name:"Malformacion de chiari",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:577,
                    name:"Sindrome de plummer",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:578,
                    name:"neutropenia, leucopenia severa, plaquetas bajas",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:579,
                    name:"Condición Progresiva del sistema Inmune en mamas, Arritmia cardiaca, diabetes tipo 1, sincopes vasovagales",
                    category: "Estado 1,2,3 y 4",
                    idProtocolo:1
                },
                {
                    id:580,
                    name:"Diabetes tipo 2, presión alta, higado graso, glaucoma, irregularidad mestrual",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:581,
                    name:"Fibromialgua, cansancio cronico, inflamación de todo el cuerpo ",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:582,
                    name:"retraso mental moderano, hipotiroidismo, resistencia a la insulina,bipolaridad",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:583,
                    name:"Esofagitis, colum irritable",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:584,
                    name:"Leucodistrofia severa de estado degenerativo",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:585,
                    name:"Depresión endogena, ansieda aguda",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:586,
                    name:"Fibromialgua, apnea de sueño, hashimoto, nodulos en tiroides, artritis reumatoide, obesidad morbida, migraña",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:587,
                    name:"Purpura trombocitopenia inmunitaria",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:588,
                    name:"Esquizofrenia",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:589,
                    name:"Diabetes, hipertensión, problemas renales",
                    category: "otros",
                    idProtocolo:1
                },
                {
                    id:590,
                    name:"Condición Progresiva del sistema Inmune en piel - melanoma Clark IV",
                    category: "Estado 1,2,3 y 4",
                    idProtocolo:2
                },
                {
                    id:591,
                    name:"Condición Progresiva del sistema Inmune en cuello uterino",
                    category: "Estado 1,2,3 y 4",
                    idProtocolo:2
                },
                {
                    id:592,
                    name:"Mieloma Multiple",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:593,
                    name:"Tumor de Schwann - Neurilenoma",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:594,
                    name:"Condición Progresiva del sistema Inmune en Ganglios Supra e Infraclavicular derecho",
                    category: "Estado 1,2,3 y 4",
                    idProtocolo:2
                },
                {
                    id:595,
                    name:"Condición Progresiva del sistema Inmune en endometrio",
                    category: "Estado 1,2,3 y 4",
                    idProtocolo:2
                },
                {
                    id:596,
                    name:"Tricomoniasis",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:597,
                    name:"Lchthyosis vulgaris (Ictiosis vulgar)",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:598,
                    name:"Sindrome de good ",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:599,
                    name:"sensación globo garganta",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:600,
                    name:"Nefrocalcinosis",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:601,
                    name:"Melanoma de dedo anular amputado",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:602,
                    name:"Beta talasemia menor (anemia leve)",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:603,
                    name:"Neuromielitis optica",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:604,
                    name:"Fibrosis pulmonar bilaterial",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:605,
                    name:"Liquen plano ",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:606,
                    name:"Sobreviviente de Condición Progresiva del sistema Inmune en mamas",
                    category: "Estado 1,2,3 y 4",
                    idProtocolo:2
                },
                {
                    id:607,
                    name:"Adenoma hipofisiario, hiperprolactinemia, hipotiroidismo clinico, intolerancia biguanidas",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:608,
                    name:"Depresion, falta de concentracion, anemia",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:609,
                    name:"Aplasia medula severa",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:610,
                    name:"Hepatomegalia, poliquitosis en higado y pancreas",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:611,
                    name:"Tumor de seno con metastasi, con radioterapia ",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:612,
                    name:"Mutación positivo, celulas nk elevadas",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:613,
                    name:"Elefantitis en pierna derecha",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:614,
                    name:"Tumor oido derecho, hipotiroidismo",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:615,
                    name:"Tricotilomania, alopecia",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:616,
                    name:"Purpura de schonlein - henoch",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:617,
                    name:"Problemas con la prolactina, cambios de humor, sobre peso, ansiedad, gastritis, dolor en las articulaciones, colum inflamado",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:618,
                    name:"Ulcera peptica en el estamago",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:619,
                    name:"Condición Progresiva del sistema Inmune tipo 4 en riñon y pulmones",
                    category: "Estado 1,2,3 y 4",
                    idProtocolo:2
                },
                {
                    id:620,
                    name:"Padecio de covid, neumonia agravada, hizo cuadro de sepsis",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:621,
                    name:"Sindrome antifosfolipidico, leucopenia, anemia leve, bocio multinodular, resistencia a la insulina, litiasis renal ",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:622,
                    name:"Siringomelia",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:623,
                    name:"Aplasia medula osea, hemoglobinuria paroxistica nocturna con esplenectomia",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:624,
                    name:"Perdida de memoria a causa de una bacteria, esclerosis multiple",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:625,
                    name:"Tumor cerebral anaplastico grado III",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:626,
                    name:"Leucemia mieloide cronica",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:627,
                    name:"Covid 19 siempre esta congestionado",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:628,
                    name:"Lupus erimatoso, diabetes tipo 2",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:629,
                    name:"Fibromialgia, osteoartritis, hipotiroidismo, hipoglicemia",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:630,
                    name:"Culebrilla",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:631,
                    name:"Anorexia nerviosa, trigliceros altos",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:632,
                    name:"fibromialgia, migraña, gastritis cronica, hernias cervicales",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:633,
                    name:"Espondiloartritis anquilosante, dolor de articulaciones",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:634,
                    name:"Anemia, tuberculosis abdominal, dolores en las articulaciones",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:635,
                    name:"Hemoglobina baja, fibromialgia",
                    category: "otros",
                    idProtocolo:2
                },
                {
                    id:636,
                    name:"Schwannoma ( Neurilenoma)",
                    category: "otros",
                    idProtocolo:3
                },
                {
                    id:637,
                    name:"Condición Progresiva del sistema Inmune en estomago - pulmon ",
                    category: "Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:638,
                    name:"Condición Progresiva del sistema Inmune en esofago y vejiga",
                    category: "Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:639,
                    name:"Nodulos Linfaticos ",
                    category: "otros",
                    idProtocolo:3
                },
                {
                    id:640,
                    name:"Gliobastoma",
                    category: "otros",
                    idProtocolo:3
                },
                {
                    id:641,
                    name:"leucemia mieloide crónica (LMC)",
                    category: "otros",
                    idProtocolo:3
                },
                {
                    id:642,
                    name:"Trasplante de medula osea /Linfoma de hodking - quimioterapia",
                    category: "otros",
                    idProtocolo:3
                },
                {
                    id:643,
                    name:"Condición Progresiva del sistema Inmune en Glandula Parotida",
                    category: "Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:644,
                    name:"Tumor de Klastin",
                    category: "otros",
                    idProtocolo:3
                },
                {
                    id:645,
                    name:"Covid - manchas en los pulmones",
                    category: "otros",
                    idProtocolo:3
                },
                {
                    id:646,
                    name:"Condición Progresiva del sistema Inmune en prostata, recibe quimioterapia (Se extendio a los huesos etapa 4, gota (acumulación de acido urico en las articulaciones)",
                    category: "Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:647,
                    name:"Tumor de comportamiento incierto de la glandula tiroides",
                    category: "otros",
                    idProtocolo:3
                },
                {
                    id:646,
                    name:"Condición Progresiva del sistema Inmune en mama, higado  y huesos, sindrome wolf parkinson ",
                    category: "Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:647,
                    name:"Condición Progresiva del sistema Inmune en pancreas con metastasis en pulmones, desnutrición",
                    category: "Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:648,
                    name:"Artritis reumatoide - sindrome sjogrens",
                    category: "otros",
                    idProtocolo:3
                },
                {
                    id:649,
                    name:"Condición Progresiva del sistema Inmune grado 4 metastasis en columna y pulmon",
                    category: "Estado 1,2,3 y 4",
                    idProtocolo:3
                },
                {
                    id:650,
                    name:"VIH undetectable, carcinoma pulmon e higado etapa 4",
                    category: "otros",
                    idProtocolo:3
                },
                {
                    id:651,
                    name:"Chikungunya",
                    category: "otros",
                    idProtocolo:3
                },
                {
                    id:652,
                    name:"Condición Progresiva del sistema Inmune en pancreas, hipertensión ",
                    category: "Estado 1,2,3 y 4",
                    idProtocolo:3
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
                            link:"https://immunebiogreencell.com/products/immune-bio-green-cell-immune-system-support-incluye-2-botellas-2ml-per-serving", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://cdn.shopify.com/s/files/1/0559/3936/7090/products/TiendaPrincipalJunio-2021Espanol_2_1024x1024@2x.jpg?v=1623975655"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Vitamina C 2000 MG - 4 meses de duración aprox.',
                            bottles:'1 botella 2000 mg (8.46 OZ / 240 GRS.). 120 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'1 scoop diario mezclado con jugo de frutas o agua.',
                            price:29.95,
                            offer: 0,
                            link:'https://immunebiogreencell.com/products/vitamina-c-2-000-mg-120-servicios-8-46-oz-240-g',
                            imglink:"https://cdn.shopify.com/s/files/1/0559/3936/7090/products/vitaminac2000mg-120-Servings-2_1024x1024@2x.jpg?v=1623455192"
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
                            link:"https://immunebiogreencell.com/products/immune-bio-green-cell-immune-system-support-incluye-2-botellas-4ml-per-serving", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://cdn.shopify.com/s/files/1/0559/3936/7090/products/TiendaPrincipalJunio-2021Espanol_3_1024x1024@2x.jpg?v=1623975741"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Vitamina C 2000 MG - 4 meses de duración aprox.',
                            bottles:'1 botella 2000mg (8.46 OZ / 240 GRS.). 120 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'1 scoop diario mezclado con jugo de frutas o agua.',
                            price:29.95,
                            offer: 0,
                            link:'https://immunebiogreencell.com/products/vitamina-c-2-000-mg-120-servicios-8-46-oz-240-g',
                            imglink:"https://cdn.shopify.com/s/files/1/0559/3936/7090/products/vitaminac2000mg-120-Servings-2_1024x1024@2x.jpg?v=1623455192"
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
                            link:"https://immunebiogreencell.com/products/immune-bio-green-cell-immune-system-support-incluye-4-botellas-8ml-per-serving", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://cdn.shopify.com/s/files/1/0559/3936/7090/products/TiendaPrincipalJunio-2021Espanol_1_1024x1024@2x.jpg?v=1623975814"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Vitamina C 2000 MG - 4 meses de duración aprox.',
                            bottles:'1 botella 2000mg (8.46 OZ / 240 GRS.). 120 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'1 scoop diario mezclado con jugo de frutas o agua.',
                            price:0,
                            offer: 0,
                            link:'https://immunebiogreencell.com/products/vitamina-c-2-000-mg-120-servicios-8-46-oz-240-g',
                            imglink:"https://cdn.shopify.com/s/files/1/0559/3936/7090/products/vitaminac2000mg-120-Servings-2_1024x1024@2x.jpg?v=1623455192"
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
                            bottles:'1 botella 2000mg (8.46 OZ / 240 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'1 scoop diario mezclado con jugo de frutas o agua.',
                            price:29.95,
                            offer: 0,
                            link:'https://immunebiogreencell.com/products/vitamina-c-2-000-mg-120-servicios-8-46-oz-240-g',
                            imglink:"https://cdn.shopify.com/s/files/1/0559/3936/7090/products/vitaminac2000mg-120-Servings-2_1024x1024@2x.jpg?v=1623455192"
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
                            bottles:'1 botella 2000mg (8.46 OZ / 240 GRS.). 120 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'1 scoop diario mezclado con jugo de frutas o agua.',
                            price:29.95,
                            offer: 0,
                            link:'https://immunebiogreencell.com/products/vitamina-c-2-000-mg-120-servicios-8-46-oz-240-g',
                            imglink:"https://cdn.shopify.com/s/files/1/0559/3936/7090/products/vitaminac2000mg-120-Servings-2_1024x1024@2x.jpg?v=1623455192"
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
                            link:"https://immunebiogreencell.com/products/immune-bio-green-cell-immune-system-support-incluye-4-botellas-8ml-per-serving", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://cdn.shopify.com/s/files/1/0559/3936/7090/products/TiendaPrincipalJunio-2021Espanol_1_1024x1024@2x.jpg?v=1623975814"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Vitamina C 2000 MG - 4 meses de duración aprox.',
                            bottles:'1 botella 2000mg (8.46 OZ / 240 GRS.). 120 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'1 scoop diario mezclado con jugo de frutas o agua.',
                            price:0,
                            offer: 0,
                            link:'https://immunebiogreencell.com/products/vitamina-c-2-000-mg-120-servicios-8-46-oz-240-g',
                            imglink:"https://cdn.shopify.com/s/files/1/0559/3936/7090/products/vitaminac2000mg-120-Servings-2_1024x1024@2x.jpg?v=1623455192"
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