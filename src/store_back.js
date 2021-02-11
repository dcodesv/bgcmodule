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
                    name:"Progressive Condition of the Immune System. Anal. Stage 1 and 2",
                    category:"Stage 1 and 2",
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
                    name:"Progressive Condition of the Immune System. Mouth. Stage 1 and 2",
                    category:"Stage 1 and 2",
                    idProtocolo:6 
                },
                {
                    id:4,
                    name:"Progressive Condition of the Immune System. Mouth. Stage 3 and 4",
                    category:"Stage 3 and 4",
                    idProtocolo:10
                },
                {
                    id:5,
                    name:"Progressive Condition of the Immune System. Head. Stage 1 and 2",
                    category:"Stage 1 and 2",
                    idProtocolo:6 
                },
                {
                    id:6,
                    name:"Progressive Condition of the Immune System. Head. Stage 3 and 4",
                    category:"Stage 3 and 4",
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
                    name:"Progressive Condition of the Immune System. Face. Stage 3 and 4",
                    category:"Stage 3 and 4",
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
                    name:"Progressive Condition of the Immune System. Cervical. Stage 3 and 4",
                    category:"Stage 3 and 4",
                    idProtocolo:9
                },
                {
                    id:11,
                    name:"Progressive Condition of the Immune System. Colon. Stage 1 and 2",
                    category:"Stage 1 and 2",
                    idProtocolo:4 
                },
                {
                    id:12,
                    name:"Progressive Condition of the Immune System. Colon. Stage 3 and 4",
                    category:"Stage 3 and 4",
                    idProtocolo:9
                },
                {
                    id:13,
                    name:"Progressive Condition of the Immune System. Colorectal. Stage 1 and 2",
                    category:"Stage 1 and 2",
                    idProtocolo:4 
                },
                {
                    id:14,
                    name:"Progressive Condition of the Immune System. Colorectal. Stage 3 and 4",
                    category:"Stage 3 and 4",
                    idProtocolo:9
                },
                {
                    id:15,
                    name:"Progressive Condition of the Immune System. Vocal Cord. Stage 1 and 2",
                    category:"Stage 1 and 2",
                    idProtocolo:6 
                },
                {
                    id:16,
                    name:"Progressive Condition of the Immune System. Vocal Cord. Stage 3 and 4",
                    category:"Stage 3 and 4",
                    idProtocolo:9
                },
                {
                    id:17,
                    name:"Progressive Condition of the Immune System. Esophagus. Stage 1 and 2",
                    category:"Stage 1 and 2",
                    idProtocolo:4 
                },
                {
                    id:18,
                    name:"Progressive Condition of the Immune System. Esophagus. Stage 3 and 4",
                    category:"Stage 3 and 4",
                    idProtocolo:9
                },
                {
                    id:19,
                    name:"Progressive Condition of the Immune System. Stomach. Stage 1 and 2",
                    category:"Stage 1 and 2",
                    idProtocolo:4 
                },
                {
                    id:20,
                    name:"Progressive Condition of the Immune System. Stomach. Stage 3 and 4",
                    category:"Stage 3 and 4",
                    idProtocolo:9
                },
                {
                    id:21,
                    name:"Progressive Condition of the Immune System. Throat. Stage 1 and 2",
                    category:"Stage 1 and 2",
                    idProtocolo:6 
                },
                {
                    id:22,
                    name:"Progressive Condition of the Immune System. Throat. Stage 3 and 4",
                    category:"Stage 3 and 4",
                    idProtocolo:10
                },
                {
                    id:23,
                    name:"Progressive Condition of the Immune System. Liver. Stage 1 and 2",
                    category:"Stage 1 and 2",
                    idProtocolo:6 
                },
                {
                    id:24,
                    name:"Progressive Condition of the Immune System. Liver. Stage 3 and 4",
                    category:"Stage 3 and 4",
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
                    name:"Progressive Condition of the Immune System. Hodgkin. Stage 3 and 4",
                    category:"Stage 3 and 4",
                    idProtocolo:9
                },
                {
                    id:27,
                    name:"Progressive Condition of the Immune System. Bones. Stage 1 and 2",
                    category:"Stage 1 and 2",
                    idProtocolo:6 
                },
                {
                    id:28,
                    name:"Progressive Condition of the Immune System. Bones. Stage 3 and 4",
                    category:"Stage 3 and 4",
                    idProtocolo:10
                },
                {
                    id:29,
                    name:"Progressive Condition of the Immune System. Triple Negative Breast and Liver Metastasis. Stage 3 and 4",
                    category:"Stage 3 and 4",
                    idProtocolo:9
                },
                {
                    id:30,
                    name:"Progressive Condition of the Immune System. Breast. Stage 1 and 2",
                    category:"Stage 1 and 2",
                    idProtocolo:6 
                },
                {
                    id:31,
                    name:"Condición Progresiva del sistema Inmune de Mamas. Estadio 3 y 4",
                    category:"Stage 3 and 4",
                    idProtocolo:10
                },
                {
                    id:32,
                    name:"Progressive Condition of the Immune System. Ovary. Stage 3 and 4", //consultar este
                    category:"Stage 3 and 4",
                    idProtocolo:9 
                },
                {
                    id:33,
                    name:"Progressive Condition of the Immune System. Pancreas. Stage 1 and 2", 
                    category:"Stage 1 and 2",
                    idProtocolo:6 
                },
                {
                    id:34,
                    name:"Progressive Condition of the Immune System. Pancreas. Stage 3 and 4",
                    category:"Stage 3 and 4",
                    idProtocolo:10
                },
                {
                    id:35,
                    name:"Progressive Condition of the Immune System. Papillary Thyroid. Stage 1 and 2",
                    category:"Stage 1 and 2",
                    idProtocolo:7 
                },
                {
                    id:36,
                    name:"Progressive Condition of the Immune System. Skin (Mela). Stage 1 and 2",
                    category:"Stage 1 and 2",
                    idProtocolo:6 
                },
                {
                    id:37,
                    name:"Progressive Condition of the Immune System. Skin (Mela). Stage 3 and 4",
                    category:"Stage 3 and 4",
                    idProtocolo:10
                },
                {
                    id:38,
                    name:"Progressive Condition of the Immune System. Prostate with bone metastasic. Stage 3 and 4", //consultar este
                    category:"Stage 3 and 4",
                    idProtocolo:9
                },
                {
                    id:39,
                    name:"Progressive Condition of the Immune System. Prostate. Stage 1 and 2",
                    category:"Stage 1 and 2",
                    idProtocolo:6 
                },
                {
                    id:40,
                    name:"Progressive Condition of the Immune System. Prostate. Stage 3 and 4",
                    category:"Stage 3 and 4",
                    idProtocolo:10
                },
                {
                    id:41,
                    name:"Progressive Condition of the Immune System. Lungs. Stage 1 and 2",
                    category:"Stage 1 y 2",
                    idProtocolo:6 
                },
                {
                    id:42,
                    name:"Progressive Condition of the Immune System. Lungs. Stage 3 and 4",
                    category:"Stage 3 and 4",
                    idProtocolo:10
                },
                {
                    id:43,
                    name:"Progressive Condition of the Immune System. Kidneys. Stage 1 and 2",
                    category:"Stage 1 and 2",
                    idProtocolo:7 
                },
                {
                    id:44,
                    name:"Progressive Condition of the Immune System. Kidneys. Stage 3 and 4",
                    category:"Stage 3 y 4",
                    idProtocolo:8
                },
                {
                    id:45,
                    name:"Progressive Condition of the Immune System. Face (Basal Cell). Stage 1 and 2", 
                    category:"Stage 1 and 2",
                    idProtocolo:5 
                },
                {
                    id:46,
                    name:"Progressive Condition of the Immune System. Testicle. Stage 3 and 4",
                    category:"Stage 3 and 4",
                    idProtocolo:8
                },
                {
                    id:47,
                    name:"Progressive Condition of the Immune System. Thyroid. Stage 1 and 2",
                    category:"Stage 1 and 2",
                    idProtocolo:6 
                },
                {
                    id:48,
                    name:"Progressive Condition of the Immune System. Thyroid. Stage 3 and 4",
                    category:"Stage 3 and 4",
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
                    name:"Progressive Condition of the Immune System. Uterine. Stage 3 and 4",
                    category:"Stage 3 and 4",
                    idProtocolo:9
                },
                {
                    id:51,
                    name:"Progressive Condition of the Immune System. Bladder. Stage 1 and 2",
                    category:"Stage 1 and 2",
                    idProtocolo:6 
                },
                {
                    id:52,
                    name:"Progressive Condition of the Immune System. Bladder. Stage 3 and 4",
                    category:"Stage 3 and 4",
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
                    name:"Acne. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:5 
                },
                {
                    id:56,
                    name:"Acne. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:6
                },
                {  
                    id:57,
                    name:"Alopecia. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:5 
                },
                {
                    id:58,
                    name:"Alopecia. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:6
                },
                {  
                    id:59,
                    name:"Amyloidosis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:5 
                },
                {
                    id:60,
                    name:"Amyloidosis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:6
                },
                {  
                    id:61,
                    name:"Bartholinitis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:62,
                    name:"Bartholinitis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:63,
                    name:"Blepharitis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:64,
                    name:"Blepharitis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:65,
                    name:"Bronchiectasis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:66,
                    name:"Bronchiectasis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:9
                },
                {  
                    id:67,
                    name:"Bronchitis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:68,
                    name:"Acute Bronchitis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:69,
                    name:"Periorbital cellulitis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:70,
                    name:"Periorbital cellulitis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:71,
                    name:"Cerebritis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:72,
                    name:"Cerebritis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:73,
                    name:"Cervicitis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:74,
                    name:"Cervicitis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:75,
                    name:"Insterticial Cystitis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:76,
                    name:"Insterticial Cystitis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:77,
                    name:"Chlamydia. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:78,
                    name:"Chlamydia. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:79,
                    name:"Chorioretinitis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:80,
                    name:"Chorioretinitis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:81,
                    name:"Coryza. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:82,
                    name:"Coryza. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:83,
                    name:"Crohn's Disease. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:84,
                    name:"Crohn's Disease. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:85,
                    name:"Atopic dermatitis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:86,
                    name:"Atopic dermatitis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:87,
                    name:"Ampullary Dermatosis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:88,
                    name:"Ampullary Dermatosis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:89,
                    name:"Type I Diabetes Mellitus. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:90,
                    name:"Type I Diabetes Mellitus. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:91,
                    name:"Diphtheria. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:92,
                    name:"Diphtheria. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:93,
                    name:"Eczema. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:94,
                    name:"Eczema. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:95,
                    name:"Addison's disease. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:96,
                    name:"Addison's disease. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:97,
                    name:"Pelvic Inflammatory Disease. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:98,
                    name:"Pelvic Inflammatory Disease. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:99,
                    name:"Chronic Obstructive Pulmonary Disease. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:100,
                    name:"Chronic Obstructive Pulmonary Disease. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:101,
                    name:"Diseases of the larynx. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:102,
                    name:"Diseases of the larynx. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:103,
                    name:"Epidermolysis Bullosa. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:104,
                    name:"Epidermolysis Bullosa. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:105,
                    name:"Amyotrophic Lateral Sclerosis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:106,
                    name:"Amyotrophic Lateral Sclerosis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:107,
                    name:"Multiple Sclerosis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:108,
                    name:"Multiple Sclerosis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:109,
                    name:"Esophagitis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:110,
                    name:"Esophagitis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:111,
                    name:"Acute pharyngo tonsillitis (angina). Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:112,
                    name:"Acute pharyngo tonsillitis (angina). Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },                
                {  
                    id:113,
                    name:"Plantar Fasciitis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:114,
                    name:"Plantar Fasciitis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:115,
                    name:"Gingivitis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:116,
                    name:"Gingivitis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:117,
                    name:"Glomerulonephritis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:118,
                    name:"Glomerulonephritis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:119,
                    name:"Gonorrhea. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:120,
                    name:"Gonorrhea. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:121,
                    name:"Genital Herpes. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:122,
                    name:"Genital Herpes. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:123,
                    name:"Respiratory Insufficiency. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:124,
                    name:"Respiratory Insufficiency. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:125,
                    name:"Systemic Lupus Erythematos. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:126,
                    name:"Systemic Lupus Erythematos. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:127,
                    name:"Myasthenia. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:128,
                    name:"Myasthenia. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:129,
                    name:"Pneumonia. Initial stage", 
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {  
                    id:130,
                    name:"Pneumonia. Advanced stage", 
                    category:"Etapa Avanzada",
                    idProtocolo:7 
                },
                {  
                    id:131,
                    name:"Neurutis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:132,
                    name:"Neurutis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:133,
                    name:"Acude Pancreatitis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:134,
                    name:"Acude Pancreatitis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:135,
                    name:"Chronic Pancreatitis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:136,
                    name:"Chronic Pancreatitis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:137,
                    name:"Necrotizing pancreatitis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:138,
                    name:"Necrotizing pancreatitis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:139,
                    name:"Ear canal pathologies. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:140,
                    name:"Ear canal pathologies. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:141,
                    name:"Pericarditis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:142,
                    name:"Pericarditis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {
                    id:143,
                    name:"Peritonitis. Initial stage", 
                    category:"Etapa Inicial",
                    idProtocolo:3
                },
                {
                    id:144,
                    name:"Peritonitis. Advanced stage", 
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:145,
                    name:"Athlete's foot. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:5 
                },
                {
                    id:146,
                    name:"Athlete's foot. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:6
                },
                {  
                    id:147,
                    name:"Psoriasis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:5 
                },
                {
                    id:148,
                    name:"Psoriasis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:6
                },
                {  
                    id:149,
                    name:"Gastric Reflux. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:150,
                    name:"Gastric Reflux. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:3
                },
                {  
                    id:151,
                    name:"Rhinitis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:152,
                    name:"Rhinitis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:153,
                    name:"Rhinosinusitis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:154,
                    name:"Rhinosinusitis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:155,
                    name:"Sclerodema. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:156,
                    name:"Sclerodema. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:157,
                    name:"Syphilis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:158,
                    name:"Syphilis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:159,
                    name:"Guillain-Barré syndrome. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:160,
                    name:"Guillain-Barré syndrome. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:161,
                    name:"Tendinosis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:162,
                    name:"Tendinosis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:163,
                    name:"Thyroiditis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:164,
                    name:"Thyroiditis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:165,
                    name:"Hashimoto's thyroiditis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:166,
                    name:"Hashimoto's thyroiditis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },                
                {  
                    id:167,
                    name:"Whooping cough. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:168,
                    name:"Whooping cough. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:169,
                    name:"Trichomoniasis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:170,
                    name:"Trichomoniasis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:171,
                    name:"Urethritis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:172,
                    name:"Urethritis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:173,
                    name:"Urticaria. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:5 
                },
                {
                    id:174,
                    name:"Urticaria. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:6
                },
                {  
                    id:175,
                    name:"Uveitis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:176,
                    name:"Uveitis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:177,
                    name:"Vaginitis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:178,
                    name:"Vaginitis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:179,
                    name:"Warts. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:5 
                },
                {
                    id:180,
                    name:"Warts. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:6
                },
                {  
                    id:181,
                    name:"Human Papillomavirus. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:4 
                },
                {
                    id:182,
                    name:"Human Papillomavirus. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:7
                },
                {  
                    id:183,
                    name:"Vulvitis. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:184,
                    name:"Vulvitis. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {  
                    id:185,
                    name:"Vulvo Vaginitis Candidiasica. Initial stage",
                    category:"Etapa Inicial",
                    idProtocolo:3 
                },
                {
                    id:186,
                    name:"Vulvo Vaginitis Candidiasica. Advanced stage",
                    category:"Etapa Avanzada",
                    idProtocolo:8
                },
                {   // ***************** Aqui inician las demas Condiciónes
                    id:187,
                    name:"Heartburn",
                    category:"otros",
                    idProtocolo:3 
                },
                {
                    id:188,
                    name:"Heartburn ",
                    category:"otros",
                    idProtocolo:3
                },
                {  
                    id:189,
                    name:"Acne and Melasma",
                    category:"otros",
                    idProtocolo:5 
                },
                {
                    id:190,
                    name:"ACV, Renal Failure, Suffered Heart Attack",
                    category:"otros",
                    idProtocolo:7
                },
                {  
                    id:191,
                    name:"Infiltrating Ductal Adenocarcinoma",
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
                    name:"Bruton's agammaglobulinemia",
                    category:"otros",
                    idProtocolo:3 
                },
                {
                    id:194,
                    name:"Nose and Throat Allergies",
                    category:"otros",
                    idProtocolo:7
                },
                {  
                    id:195,
                    name:"Respiratory Allergies",
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
                    name:"Anemia",
                    category:"otros",
                    idProtocolo:3 
                },
                {
                    id:198,
                    name:"Sickle Cell Anemia",
                    category:"otros",
                    idProtocolo:7
                },
                {  
                    id:199,
                    name:"Iron deficiency anemia",
                    category:"otros",
                    idProtocolo:7 
                },
                {
                    id:120,
                    name:"Hemolytic Anemia",
                    category:"otros",
                    idProtocolo:7
                },
                {  
                    id:201,
                    name:"Anemia and Atopic Dermatitis",
                    category:"otros",
                    idProtocolo:7 
                },
                {
                    id:202,
                    name:"Anxiety",
                    category:"otros",
                    idProtocolo:3
                },
                {  
                    id:203,
                    name:"Generalized Anxiety",
                    category:"otros",
                    idProtocolo:3 
                },
                {
                    id:204,
                    name:"Sleep Apnea, Asthma, Diabetes, Thyroid, Osteopenia",
                    category:"otros",
                    idProtocolo:3
                },
                {  
                    id:205,
                    name:"Kidney Sand, Hypoglycemia, Mononucleosis, Rhinitis",
                    category:"otros",
                    idProtocolo:7 
                },
                {
                    id:206,
                    name:"Severe Degenerative Arthritis",
                    category:"otros",
                    idProtocolo:7
                },
                {  
                    id:207,
                    name:"Juvenile Rheumatic Arthritis",
                    category:"otros",
                    idProtocolo:3 
                },
                {
                    id:208,
                    name:"Rheumatoid Arthritis, Osteoarthritis, Fibromyalgia, Asthma, Chondromalacia Patella, Osteoporosis y Chronic gastritis",
                    category:"otros",
                    idProtocolo:7
                },
                {  
                    id:209,
                    name:"Rheumatoid Arthritis",
                    category:"otros",
                    idProtocolo:8 
                },
                {
                    id:210,
                    name:"Rheumatoid Arthritis, Fibromyalgia, Sjögren's Syndrome",
                    category:"otros",
                    idProtocolo:7
                },    
                {
                    id:211,//nueva enumeracion
                    name:"Rheumatoid Arthritis, Hypertension, Sjögren's Syndrome",
                    category:"otros",
                    idProtocolo:7
                },             
                {
                    id:212,
                    name:"Rheumatoid Arthritis, Ventricular Hypertrophic",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:213,
                    name:"Severe Arthritis",
                    category:"otros",
                    idProtocolo:8
                },
                {
                    id:214,
                    name:"Arthritis, Diabetes, Fibromyalgia, Lung Fibrosis, Psoriasis",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:215,
                    name:"Arthritis, Diabetes, Hypertension, Kidney Problems (Advanced)",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:216,
                    name:"Arthritis, Degenerative Disc Disease, Stenosis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:217,
                    name:"Arthritis, Hypercholesterolemia, Arterial Hypertension, Nephritis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:218,
                    name:"Arthritis, Hypothyroidism, High Blood Pressure",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:219,
                    name:"Arthritis, Psoriasis, Hypertension",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:220,
                    name:"Osteoarthritis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:221,
                    name:"Osteoarthritis, Kidney Stones, Rosacea Dermatitis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:222,
                    name:"Ascites, Liver Cirrhosis, Fatty Liver",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:223,
                    name:"Chronic Asthma",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:224,
                    name:"Chronic Asthma, COPD, Sleep Apnea, Acute Sinusitis and Bronchitis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:225,
                    name:"Asthma, Headache, Low Energy, Insomnia",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:226,
                    name:"Asthma, Diabetes, Hypertension, Migraine",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:227,
                    name:"Epileptic seizures, Brain Malformation 14",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:228,
                    name:"Brain Atrophy",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:229,
                    name:"Autism",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:230,
                    name:"Moderate Autism, Hiatal Hernia, Gastroesophageal Reflux and Allergies",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:231,
                    name:"Bacteria in the Urinary System",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:232,
                    name:"Bipolarity",
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
                    name:"Gallstones",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:235,
                    name:"Gallbladder Calculations, Breast Nodules, Cervical Rectification",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:236,
                    name:"Recurrent Vaginal Candidiasis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:237,
                    name:"CAP 4.62 (Persistent Arterial Ductus)",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:238,
                    name:"Squamous Cell Carcinoma",
                    category:"otros",
                    idProtocolo:9
                },
                {
                    id:239,
                    name:"Heart disease, Arterial Hypertension",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:240,
                    name:"Celiac disease",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:241,
                    name:"Celiac Disease (Gluten Intolerance)",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:242,
                    name:"Charcot-Marie-Tooth disease",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:243,
                    name:"Chronic Circulation Grade 2",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:244,
                    name:"Liver Cirrhosis",
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
                    name:"Nervous Colitis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:247,
                    name:"Ulcerative Colitis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:248,
                    name:"Colitis, Gastritis and Boosting the Immune System",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:249,
                    name:"Inflamed Colon",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:250,
                    name:"Irritable Colon",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:251,
                    name:"Seizures",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:252,
                    name:"Korea",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:253,
                    name:"Crest (ANAS autoimmune bacteria)",
                    category:"otros",
                    idProtocolo:8
                },
                {
                    id:254,
                    name:"Motor Deficiency",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:255,
                    name:"Renal Impairment",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:256,
                    name:"Cognitive deficit",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:257,
                    name:"Attention Deficit",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:258,
                    name:"Dementia",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:259,
                    name:"Depression and Anxiety",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:260,
                    name:"Cinderella dermatitis",
                    category:"otros",
                    idProtocolo:5
                },
                {
                    id:261,
                    name:"Chronic Cinderella Dermatitis",
                    category:"otros",
                    idProtocolo:10
                },
                {
                    id:262,
                    name:"Dermatomyositis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:263,
                    name:"Stroke",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:264,
                    name:"Stroke and Diabetes",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:265,
                    name:"Knee Meniscus Wear and Cervical Deviation",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:266,
                    name:"Physical Wear produced by Old Age",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:267,
                    name:"Severe Label Wear",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:268,
                    name:"Detoxify the Liver",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:269,
                    name:"Diabetes and Fatty Liver",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:270,
                    name:"Diabetes Mellitus, Osteochondritis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:271,
                    name:"Type 1 and 2 diabetes",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:272,
                    name:'Type 2 diabetes fasting glucose level between 90 to 130 mg / dl',
                    category:'otros',
                    idProtocolo:11
                },
                {
                    id:273,
                    name:'Type 2 diabetes fasting glucose level between 131 to 240 mg / dl',
                    category:'otros',
                    idProtocolo:12
                },
                {
                    id:274,
                    name:'Type 2 diabetes fasting glucose level greater than 241 mg / dl',
                    category:'otros',
                    idProtocolo:2
                },
                {
                    id:275,
                    name:"Type 2 Diabetes and Chiari Malformation",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:276,
                    name:"Type 2 Diabetes, Epilepsy (controlled), Gastritis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:277,
                    name:"Type 2 Diabetes, Fibromyalgia, Hashimoto's Thyroiditis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:278,
                    name:"Type 2 diabetes, diabetic retinopathy, arteriosclerosis, heart and kidney failure 14",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:279,
                    name:"Diabetes, Hypertension, Pancytopenia, Venous Insufficiency",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:280,
                    name:"Erectile Diffusion",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:281,
                    name:"Cervical Displays (Nic 1)",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:282,
                    name:"Muscular Dystrophy",
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
                    name:"Chronic Pain",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:285,
                    name:"Headache",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:286,
                    name:"Joint Pain",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:287,
                    name:"Back and Hand Pain",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:288,
                    name:"Bone Pain",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:289,
                    name:"Earache",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:290,
                    name:"Acute Knee Pain",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:291,
                    name:"Cervical pain",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:292,
                    name:"Joint Pain",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:293,
                    name:"Pain in the Bones",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:294,
                    name:"Lumbar Pain",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:295,
                    name:"Muscle Pain",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:296,
                    name:"Sciatic Nerve Pain",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:297,
                    name:"Pelvic Pain",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:298,
                    name:"Chest Pains",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:299,
                    name:"Muscle Aches, Hypertension, Tachycardia, Gastritis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:300,
                    name:"Viral encephalitis",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:301,
                    name:"Cryoglobulinemia disease",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:302,
                    name:"Chagas disease",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:303,
                    name:"Gaucher disease",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:304,
                    name:"Lyme disease",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:305,
                    name:"Sickle Cell Disease",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:306,
                    name:"Mixed Connective Tissue Disease",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:307,
                    name:"Myoclonic Epilepsy",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:308,
                    name:"COPD (Chronic Obstructive Pulmonary Disease)",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:309,
                    name:"Nodular Sclerosis Type I",
                    category:"otros",
                    idProtocolo:9
                },
                {
                    id:310,
                    name:"Scoliosis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:311,
                    name:"Ankylosing Spondylitis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:312,
                    name:"Spondylosis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:313,//sigue cuenta aqui
                    name:"Ankylosing Spondylitis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:314,
                    name:"Cervical spondylosis",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:315,
                    name:"Tracheal Stenosis (Tissue Granulation)",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:316,
                    name:"Chronic Constipation",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:317,
                    name:"Stress",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:318,
                    name:"Painful Ejaculation",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:319,
                    name:"Fatigue",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:320,
                    name:"Fatigue, joint inflammation, Cellular Immunodeficiency Syndrome",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:321,
                    name:"Fibroids",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:322,
                    name:"Aggressive Fibromatosis (Desmoid Tumors)",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:323,
                    name:"Fibromyalgia",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:324,
                    name:"Fibromyalgia, Arthritis, Chronic Fatigue",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:325,
                    name:"Fibromyalgia, Hypothyroidism, Insulin Resistance",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:326,
                    name:"Fibromyalgia and Lupus SL",
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
                    name:"Erosive Gastritis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:330,
                    name:"Focal and Segmental Glomerulosclerosis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:331,
                    name:"Drop",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:332,
                    name:"Hemorrhoids",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:333,
                    name:"Hepatitis B (inactive)",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:334,
                    name:"Chronic Hepatitis B",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:335,
                    name:"Chronic Autoimmune Hepatitis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:336,
                    name:"Herniated Disc",
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
                    name:"Genital Herpes Number 2",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:339,
                    name:"Hidradenitis Suppurativa",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:340,
                    name:"Fatty Liver",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:341,
                    name:"Hypercholesterolemia",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:342,
                    name:"Familial hypercholesterolemia",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:343,
                    name:"Hyperinsulinism",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:344,
                    name:"Complex Endometrial Hyperplasia",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:345,
                    name:"Arterial Hypertension",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:346,
                    name:"Arterial Hypertension, Anxiety, Menopause",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:347,
                    name:"Pulmonary Hypertension",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:348,
                    name:"Hypertriglyceridemia",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:349,
                    name:"Hyperuricemia",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:350,
                    name:"Hypothyroidism",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:351,
                    name:"Hysterectomy",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:352,
                    name:"Langerhans cell histiocytosis (LCH)",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:353,
                    name:"Cervical implants",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:354,
                    name:"Urinary Incontinence",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:355,
                    name:"Constant Urine Infection",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:356,
                    name:"Urinary Tract Infection (recurrent UTI)",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:357,
                    name:"Bladder Infections",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:358,
                    name:"Inflammation in the Prostate",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:359,
                    name:"Insomnia",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:360,
                    name:"Heart Failure",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:361,
                    name:"Renal Insufficiency or Renal Failure",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:362,
                    name:"Chronic Venous Insufficiency",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:363,
                    name:"Lactose intolerance",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:364,
                    name:"Leprosy",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:365,
                    name:"Chronic Lymphatic Leukemia",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:366,
                    name:"Acute Lymphocytic Leukemia",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:367,
                    name:"Myeloid Leukemia",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:368,
                    name:"Metastatic Vertebral Lymphoma",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:369,
                    name:"Liomyosarcoma",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:370,
                    name:"Lichen on Plane",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:371,
                    name:"Lichen Sclerosus",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:372,
                    name:"Coral-shaped kidney stones",
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
                    name:"Lupus Erythematosus",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:375,
                    name:"Systemic Lupus Erythematosus and Cerebrovascular Vasculitis",
                    category:"otros",
                    idProtocolo:8
                },
                {
                    id:376,
                    name:"Chiari malformations",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:377,
                    name:"Dizziness",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:378,
                    name:"Mastocytosis",
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
                    name:"Benign Right Frontal Meningioma",
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
                    name:"Incomplete Intestinal Metaplasia",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:383,
                    name:"Myasthenia Gravis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:384,
                    name:"Myasthenia Gravis Refractory",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:385,
                    name:"Multiple Myeloma",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:386,
                    name:"Migraine",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:387,
                    name:"Uterine Myomatosis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:388,
                    name:"Morphea (Plaque Scleroderma)",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:389,
                    name:"Multiple Myeloma",
                    category:"otros",
                    idProtocolo:9
                },
                {
                    id:390,
                    name:"Nausea",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:391,
                    name:"Partial Nephrectomy",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:392,
                    name:"Nephropathy",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:393,
                    name:"IgA Nephropathy",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:394,
                    name:"Altered Nerves",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:395,
                    name:"Neuropathy",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:396,
                    name:"Acute Neuropathy",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:397,
                    name:"Peripheral Neuropathy",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:398,
                    name:"Thyroid Nodules",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:399,
                    name:"Obesity",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:400,
                    name:"Morbid Obesity and Lymphedema",
                    category:"otros",
                    idProtocolo:9
                },
                {
                    id:401,
                    name:"Onychomycosis",
                    category:"otros",
                    idProtocolo:5
                },
                {
                    id:402,
                    name:"Column Operated",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:403,
                    name:"Thyroid Surgery",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:404,
                    name:"Osteoarthritis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:405,
                    name:"Progressive Osteoarthritis",
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
                    name:"Polycystic ovary",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:410,
                    name:"Cerebral Palsy",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:411,
                    name:"Paraplegia level t4 t5",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:412,
                    name:"Parkinson's",
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
                    name:"Foliaceous Pemphigus",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:415,
                    name:"Pemphigus Foliaceus, Hypothyroidism, and Depression",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:416,
                    name:"Vulgar Pemphigus",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:417,
                    name:"Loss of Sexual Desire",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:418,
                    name:"Kidney Stones and Fluid Retentions",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:419,
                    name:"High Platelets jak2",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:420,
                    name:"Polycythemia Vera",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:421,
                    name:"Polydermatomyositis",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:422,
                    name:"Demyelinating polyneuropathy",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:423,
                    name:"Polycystic kidney disease without dialysis",
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
                    name:"Premenopause",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:426,
                    name:"Premenopause, Fatty Liver, Muscle Pain, Anxiety and Depression",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:427,
                    name:"Alzheimer's principles",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:428,
                    name:"Memory Problems",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:429,
                    name:"Sleep problems",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:430,
                    name:"Respiratory Problems",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:431,
                    name:"Swollen Prostate",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:432,
                    name:"Swollen Prostate and Urinary Infection",
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
                    name:"Recurrent Bacterial Prostatitis",
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
                    name:"Arthritic psoriasis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:437,
                    name:"Thrombocytopenic purpura",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:438,
                    name:"Cysts in the Ovary",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:439,
                    name:"Ulcerative Rectocolitis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:440,
                    name:"Strengthening of the Immune System",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:441,
                    name:"Cell regeneration",
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
                    name:"Fluid Retention",
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
                    name:"Retinopathy of Prematurity",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:446,
                    name:"Mild Mental Retardation",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:447,
                    name:"Deep Mental Retardation",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:448,
                    name:"Allergic Rhinitis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:449,
                    name:"Kaposi's sarcoma and Human immunodeficiency Virus",
                    category:"otros",
                    idProtocolo:9
                },
                {
                    id:450,
                    name:"Aftermath of Guillen Barre",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:451,
                    name:"Antiphospholipid syndrome",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:452,
                    name:"Cerebellar Syndrome",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:453,
                    name:"Asperger syndrome",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:454,
                    name:"Churg-Strauss syndrome ",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:455,
                    name:"Irritable Colon Syndrome",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:456,
                    name:"Complex Regional Pain Syndrome (CRPS)",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:457,
                    name:"Lumbar Instability Syndrome",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:458,
                    name:"Irritable Bowel Syndrome",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:459,
                    name:"Lennox Gastaut syndrome",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:460,
                    name:"Marfan syndrome",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:461,
                    name:"Raynaud's syndrome",
                    category:"otros",
                    idProtocolo:8
                },
                {
                    id:462,
                    name:"Rett syndrome",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:463,
                    name:"Sjögren's syndrome",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:464,
                    name:"Carpal Tunnel Syndrome",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:465,
                    name:"Turner syndrome",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:466,
                    name:"Myelodysplastic syndrome",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:467,
                    name:"Nephrological Syndrome",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:468,
                    name:"Corticoresistant Nephrotic Syndrome",
                    category:"otros",
                    idProtocolo:4
                },
                {
                    id:469,
                    name:"Chronic Sinusitis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:470,
                    name:"Obsessive Compulsive Disorder",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:471,
                    name:"Thrombocytopenia",
                    category:"otros",
                    idProtocolo:7
                },
                {
                    id:472,
                    name:"Tumor in the Lung",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:473,
                    name:"Gleason 7 Prostate Tumor",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:474,
                    name:"Schwannoma tumor",
                    category:"otros",
                    idProtocolo:9
                },
                {
                    id:475,
                    name:"Pituitary tumors",
                    category:"otros",
                    idProtocolo:6
                },
                {
                    id:476,
                    name:"Gastric Ulcers",
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
                    name:"Human Immunodeficiency Virus",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:480,
                    name:"Human Immunodeficiency Virus and Psoriasis",
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
                    name:"Deficiencies in the Immune System",
                    category:"otros",
                    idProtocolo:12
                },
                {
                    id:483,
                    name:"Fibromyalgia pain",
                    category:"otros",
                    idProtocolo:12
                },
                {
                    id:484,
                    name:"Osteoporosis pain",
                    category:"otros",
                    idProtocolo:12
                },
                {
                    id:485,
                    name:"Skin allergies",
                    category:"otros",
                    idProtocolo:12
                },
                {
                    id:486,
                    name:"Rheumatoid Arthritis Pain",
                    category:"otros",
                    idProtocolo:12
                },
            ],
            protocols:[
                //Aqui inicia el protocolo completo
                {
                    id:1, //ID del protocolo
                    name:'Integrative protocol for highly complex conditions', //Nombre del protocolo
                    category:'Category 4', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Phase 1', //Nombre de la fase
                        duration:'12 months', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'20 bottles of 240 ml. each. 30 days duration approximately.', //Cantidad de botellas
                            dose:'40 ml. four times a day', //Dosis del producto
                            price: 1245.00,//Precio del producto
                            offer: 1120.00,//Precio oferta
                            link:"https://www.biogreencell.com/product-p/highcomplexity-20bottles.htm" //Link del producto individual, para comprar individuales por producto
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Ascorbic Acid (Powder)',
                            bottles:'1 bottle 5000mg (21.16 OZ / 600 GRS.). 30 days duration approximately.',
                            disclaimer:'*Only 12 years and older. Recommended dosage 2000mg daily. *Do not take this product if you have kidney problems. *Avoid combination and/or use of this with any type of vitamin B17',
                            dose:'One scoop three times a day mixed with fruit juice or water.',
                            price: 54.95,
                            offer: 0,
                            link:'https://www.biogreencell.com/product-p/vitaminac-highpotency-5000-mg.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=C9pac01'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'Phase 2',
                        duration:'60 days',
                        //Producto 1
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.',
                            bottles:'4 bottles of 240 ml. each. 30 days duration approximately.',
                            dose:'10 ml. 2 times a day',
                            price:0,
                            offer:249.00,
                            link:"https://www.biogreencell.com/product-p/moderated-4bottles.htm"
                        },
                        //Producto 2
                        p2:{
                            name:'Ascorbic Acid (Powder)',
                            bottles:'1 bottle 5000mg (21.16 OZ / 600 GRS.). 30 days duration approximately.',
                            disclaimer:'*Only 12 years and older. Recommended dosage 2000mg daily. *Do not take this product if you have kidney problems. *Avoid combination and/or use of this with any type of vitamin B17',
                            dose:'One scoop three times a day mixed with fruit juice or water.',
                            price: 54.95,
                            offer: 0,
                            link:'https://www.biogreencell.com/product-p/vitaminac-highpotency-5000-mg.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:'https://www.biogreencell.com/admin/AdminDetails_Generic.asp?table=Products_Joined&Page=1&ID=C1pac02'//Se agrego debido a que el combo se compra por fase

                    }
                },//Aqui finaliza el protocolo
                {
                    id:2, //ID del protocolo
                    name:'Integrative protocol for highly complex conditions', //Nombre del protocolo
                    category:'Category 1', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Phase 1', //Nombre de la fase
                        duration:'120 days', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'6 bottles of 240 ml. each. 30 days duration approximately.', //Cantidad de botellas
                            dose:'12 ml. 4 times a day', //Dosis del producto
                            price:373.50, //Precio del producto
                            offer:359.95,
                            link:"https://www.biogreencell.com/product-p/highcomplexity-6bottles.htm" //Link del producto individual, para comprar individuales por producto
                        },
                        p2:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.biogreencell.com/product-p/highcomplexity-6bottles.htm'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'Phase 2',
                        duration:'60 days',
                        //Producto 1
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.',
                            bottles:'4 bottles of 240 ml. each. 30 days duration approximately.',
                            dose:'10ml. 2 times a day',
                            price:0,
                            offer:249.00,
                            link:"https://www.biogreencell.com/product-p/moderated-4bottles.htm"
                        },
                        p2:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:'https://www.biogreencell.com/product-p/moderated-4bottles.htm'//Se agrego debido a que el combo se compra por fase

                    }
                   // linkProtocol:'linkdelprotocolocompleto' //Link para comprar el combo completo
                },//Aqui finaliza el protocolo
                {
                    id:3, //ID del protocolo
                    name:'Integrative protocol for highly complex conditions', //Nombre del protocolo
                    category:'Category 2', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Phase 1', //Nombre de la fase
                        duration:'180 days', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'10 bottle of 240 ml. each. 30 days duration approximately.', //Cantidad de botellas
                            dose:'20 ml. 4 times a day', //Dosis del producto
                            price:622.50, //Precio del producto
                            offer:560.95,
                            link:"https://www.biogreencell.com/product-p/highcomplexity-10bottles.htm" //Link del producto individual, para comprar individuales por producto
                        },
                        p2:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.biogreencell.com/product-p/highcomplexity-10bottles.htm'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'Phase 2',
                        duration:'180 days',
                        //Producto 1
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.',
                            bottles:'4 bottles of 240 ml. each. 30 days duration approximately',
                            dose:'10ml. 2 times a day',
                            price:0,
                            offer:249.00,
                            link:"https://www.biogreencell.com/product-p/moderated-4bottles.htm"
                        },
                        p2:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:'https://www.biogreencell.com/product-p/moderated-4bottles.htm'//Se agrego debido a que el combo se compra por fase

                    }
                   // linkProtocol:'linkdelprotocolocompleto' //Link para comprar el combo completo
                },//Aqui finaliza el protocolo
                {
                    id:4, //ID del protocolo
                    name:'Integrative protocol for highly complex conditions', //Nombre del protocolo
                    category:'Category 2', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Phase 1', //Nombre de la fase
                        duration:'120 days', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'10 bottles of 240 ml. each. 30 days duration approximately.', //Cantidad de botellas
                            dose:'20ml. 4 times a day', //Dosis del producto
                            price:560.95, //Precio del producto
                            offer:392.67,
                            link:"https://www.biogreencell.com/product-p/highcomplexity-10bottles.htm" //Link del producto individual, para comprar individuales por producto
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Ascorbic Acid (Powder)',
                            bottles:'1 bottle 5000mg (21.16 OZ / 600 GRS.). 30 days duration approximately.',
                            disclaimer:'*Only 12 years and older. Recommended dosage 2000mg daily. *Do not take this product if you have kidney problems. *Avoid combination and/or use of this with any type of vitamin B17',
                            dose:'One scoop three times a day mixed with fruit juice or water.',
                            price: 54.95,
                            offer: 0,
                            link:'https://www.biogreencell.com/product-p/vitaminac-highpotency-5000-mg.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0,
                            offer:0, //Precio del producto
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=C4pac01'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'Phase 2',
                        duration:'60 days',
                        //Producto 1
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.',
                            bottles:'4 bottles of 240 ml. each. 30 days duration approximately.',
                            dose:'10ml. 2 times a day',
                            price:0,
                            offer:249.00,
                            link:"https://www.biogreencell.com/product-p/moderated-4bottles.htm"
                        },
                        //Producto 2
                        p2:{
                            name:'Ascorbic Acid (Powder)',
                            bottles:'1 bottle 5000mg (21.16 OZ / 600 GRS.). 30 days duration approximately.',
                            disclaimer:'*Only 12 years and older. Recommended dosage 2000mg daily. *Do not take this product if you have kidney problems. *Avoid combination and/or use of this with any type of vitamin B17',
                            dose:'One scoop three times a day mixed with fruit juice or water.',
                            price: 54.95,
                            offer: 0,
                            link:'https://www.biogreencell.com/product-p/vitaminac-highpotency-5000-mg.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=C4pac02'//Se agrego debido a que el combo se compra por fase

                    }
                   // linkProtocol:'linkdelprotocolocompleto' //Link para comprar el combo completo
                },//Aqui finaliza el protocolo
                {
                    id:5, //ID del protocolo
                    name:'Integrative protocol for highly complex conditions', //Nombre del protocolo
                    category:'Category 2', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Phase 1', //Nombre de la fase
                        duration:'120 days', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'10 bottles of 240 ml. each. 30 days duration approximately.', //Cantidad de botellas
                            dose:'20ml. 4 times a day', //Dosis del producto
                            price:622.50, //Precio del producto
                            offer:560.95,
                            link:"https://www.biogreencell.com/product-p/highcomplexity-10bottles.htm" //Link del producto individual, para comprar individuales por producto
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Ascorbic Acid (Powder)',
                            bottles:'1 bottle 5000mg (21.16 OZ / 600 GRS.). 30 days duration approximately.',
                            disclaimer:'*Only 12 years and older. Recommended dosage 2000mg daily. *Do not take this product if you have kidney problems. *Avoid combination and/or use of this with any type of vitamin B17',
                            dose:'One scoop three times a day mixed with fruit juice or water.',
                            price: 54.95,
                            offer: 0,
                            link:'https://www.biogreencell.com/product-p/vitaminac-highpotency-5000-mg.htm'
                        },
                        p3:{
                            name:'WOUND FIXER',
                            bottles:'1 bottle (Spray – 4oz.)',
                            dose:'Apply on the affected area from 2 to 3 times a day',
                            price:44.95,
                            offer:0,
                            link:'https://www.biogreencell.com/product-p/woundfixer-skin-regenator.htm'
                        },
                        linkPhase1:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=C5pac01'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'Phase 2', //Nombre de la fase
                        duration:'90 days', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.',
                            bottles:'4 bottles of 240 ml. each. 30 days duration approximately.',
                            dose:'10ml. 2 times a day',
                            price:0,
                            offer:249.00,
                            link:"https://www.biogreencell.com/product-p/moderated-4bottles.htm" //Link del producto individual, para comprar individuales por producto
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Ascorbic Acid (Powder)',
                            bottles:'1 bottle 5000mg (21.16 OZ / 600 GRS.). 30 days duration approximately.',
                            disclaimer:'*Only 12 years and older. Recommended dosage 2000mg daily. *Do not take this product if you have kidney problems. *Avoid combination and/or use of this with any type of vitamin B17',
                            dose:'One scoop three times a day mixed with fruit juice or water.',
                            price: 54.95,
                            offer: 0,
                            link:'https://www.biogreencell.com/product-p/vitaminac-highpotency-5000-mg.htm'
                        },
                        p3:{
                            name:'WOUND FIXER',
                            bottles:'1 bottle (Spray – 4oz.)',
                            dose:'Apply on the affected area from 2 to 3 times a day',
                            price:44.95,
                            offer:0,
                            link:'https://www.biogreencell.com/product-p/woundfixer-skin-regenator.htm'
                        },
                        linkPhase2:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=C5pac02'//Finaliza el producto 2
                    },
                   // linkProtocol:'linkdelprotocolocompleto' //Link para comprar el combo completo
                },//Aqui finaliza el protocolo
                {
                    id:6, //ID del protocolo
                    name:'Integrative protocol for highly complex conditions', //Nombre del protocolo
                    category:'Category 3', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Phase 1', //Nombre de la fase
                        duration:'180 days', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'16 bottles of 240 ml. each. 30 days duration approximately', //Cantidad de botellas
                            dose:'32ml. 4 times a day', //Dosis del producto
                            price:996.00, //Precio del producto
                            offer:896.95,
                            link:"https://www.biogreencell.com/product-p/highcomplexity-16bottles.htm" //Link del producto individual, para comprar individuales por producto
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Ascorbic Acid (Powder)',
                            bottles:'1 bottle 5000mg (21.16 OZ / 600 GRS.). 30 days duration approximately.',
                            disclaimer:'*Only 12 years and older. Recommended dosage 2000mg daily. *Do not take this product if you have kidney problems. *Avoid combination and/or use of this with any type of vitamin B17',
                            dose:'One scoop three times a day mixed with fruit juice or water.',
                            price: 54.95,
                            offer: 0,
                            link:'https://www.biogreencell.com/product-p/vitaminac-highpotency-5000-mg.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=C6pac01'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'phase 2',
                        duration:'180 days',
                        //Producto 1
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.',
                            bottles:'6 bottles of 240 ml. each. 30 days duration approximately',
                            dose:'20ml. 2 times a day',
                            price:373.50,
                            offer:359.95,
                            link:"https://www.biogreencell.com/product-p/highcomplexity-6bottles.htm"
                        },
                        //Producto 2
                        p2:{
                            name:'Ascorbic Acid (Powder)',
                            bottles:'1 bottle 5000mg (21.16 OZ / 600 GRS.). 30 days duration approximately.',
                            disclaimer:'*Only 12 years and older. Recommended dosage 2000mg daily. *Do not take this product if you have kidney problems. *Avoid combination and/or use of this with any type of vitamin B17',
                            dose:'One scoop three times a day mixed with fruit juice or water.',
                            price: 54.95,
                            offer: 0,
                            link:'https://www.biogreencell.com/product-p/vitaminac-highpotency-5000-mg.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=C6pac02'//Se agrego debido a que el combo se compra por fase

                    }
                   // linkProtocol:'linkdelprotocolocompleto' //Link para comprar el combo completo
                },//Aqui finaliza el protocolo
                {
                    id:7, //ID del protocolo
                    name:'Integrative protocol for highly complex conditions', //Nombre del protocolo
                    category:'Category 3', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Phase 1', //Nombre de la fase
                        duration:'180 days', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'16 bottles of 240 ml. each. 30 days duration approximately', //Cantidad de botellas
                            dose:'32ml. 4 times a day', //Dosis del producto
                            price:996.00, //Precio del producto
                            offer:896.95,
                            link:"https://www.biogreencell.com/product-p/highcomplexity-16bottles.htm" //Link del producto individual, para comprar individuales por producto
                        },
                        p2:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.biogreencell.com/product-p/highcomplexity-16bottles.htm'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'Phase 2',
                        duration:'180 días',
                        //Producto 1
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.',
                            bottles:'4 bottles of 240 ml. each. 30 days duration approximately.',
                            dose:'10ml. 2 times a day',
                            price:0,
                            offer:249.00,
                            link:"https://www.biogreencell.com/product-p/moderated-4bottles.htm"
                        },
                        p2:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:'https://www.biogreencell.com/product-p/moderated-4bottles.htm'//Se agrego debido a que el combo se compra por fase

                    }
                   // linkProtocol:'linkdelprotocolocompleto' //Link para comprar el combo completo
                },//Aqui finaliza el protocolo
                {
                    id:8, //ID del protocolo
                    name:'Integrative protocol for highly complex conditions', //Nombre del protocolo
                    category:'categoria 4', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Phase 1', //Nombre de la fase
                        duration:'180 days', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'20 bottles of 240 ml. each. 30 days duration approximately.', //Cantidad de botellas
                            dose:'40 ml. 4 times a day', //Dosis del producto
                            price: 1245.00,//Precio del producto
                            offer: 1120.00,//Precio oferta
                            link:"https://www.biogreencell.com/product-p/highcomplexity-20bottles.htm" //Link del producto individual, para comprar individuales por producto
                        },
                        p2:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.biogreencell.com/product-p/highcomplexity-20bottles.htm'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'Phase 2',
                        duration:'180 days',
                        //Producto 1
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.',
                            bottles:'6 bottles of 240 ml. each. 30 days duration approximately',
                            dose:'20ml. 2 times a day',
                            price:373.50,
                            offer:359.95,
                            link:"https://www.biogreencell.com/product-p/highcomplexity-6bottles.htm"
                        },
                        p2:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:'https://www.biogreencell.com/product-p/highcomplexity-6bottles.htm'//Se agrego debido a que el combo se compra por fase

                    }
                   // linkProtocol:'linkdelprotocolocompleto' //Link para comprar el combo completo
                },//Aqui finaliza el protocolo
                {
                    id:9, //ID del protocolo
                    name:'Integrative protocol for highly complex conditions', //Nombre del protocolo
                    category:'Category 4', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Phase 1', //Nombre de la fase
                        duration:'180 days', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'20 bottles of 240 ml. each. 30 days duration approximately.', //Cantidad de botellas
                            dose:'40 ml. 4 times a day', //Dosis del producto
                            price: 1245.00,//Precio del producto
                            offer: 1120.00,//Precio oferta
                            link:"https://www.biogreencell.com/product-p/highcomplexity-20bottles.htm" //Link del producto individual, para comprar individuales por producto
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Ascorbic Acid (Powder)',
                            bottles:'1 bottle 5000mg (21.16 OZ / 600 GRS.). 30 days duration approximately.',
                            disclaimer:'*Only 12 years and older. Recommended dosage 2000mg daily. *Do not take this product if you have kidney problems. *Avoid combination and/or use of this with any type of vitamin B17',
                            dose:'One scoop three times a day mixed with fruit juice or water.',
                            price: 54.95,
                            offer: 0,
                            link:'https://www.biogreencell.com/product-p/vitaminac-highpotency-5000-mg.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=C9pac01'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'Phase 2',
                        duration:'180 días',
                        //Producto 1
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.',
                            bottles:'6 bottles of 240 ml. each. 30 days duration approximately',
                            dose:'20ml. 2 times a day',
                            price:373.50,
                            offer:359.95,
                            link:"https://www.biogreencell.com/product-p/highcomplexity-6bottles.htm"
                        },
                        //Producto 2
                        p2:{
                            name:'Ascorbic Acid (Powder)',
                            bottles:'1 bottle 5000mg (21.16 OZ / 600 GRS.). 30 days duration approximately.',
                            disclaimer:'*Only 12 years and older. Recommended dosage 2000mg daily. *Do not take this product if you have kidney problems. *Avoid combination and/or use of this with any type of vitamin B17',
                            dose:'One scoop three times a day mixed with fruit juice or water.',
                            price: 54.95,
                            offer: 0,
                            link:'https://www.biogreencell.com/product-p/vitaminac-highpotency-5000-mg.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=C9pac02'//Se agrego debido a que el combo se compra por fase

                    }
                   // linkProtocol:'linkdelprotocolocompleto' //Link para comprar el combo completo
                },//Aqui finaliza el protocolo
                {
                    id:10, //ID del protocolo
                    name:'Integrative protocol for highly complex conditions', //Nombre del protocolo
                    category:'Category 4', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Phase 1', //Nombre de la fase
                        duration:'180 days', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'20 bottles of 240 ml. each. 30 days duration approximately.', //Cantidad de botellas
                            dose:'40 ml. 4 times a day', //Dosis del producto
                            price: 1245.00,//Precio del producto
                            offer: 1120.00,//Precio oferta
                            link:"https://www.biogreencell.com/product-p/highcomplexity-20bottles.htm" //Link del producto individual, para comprar individuales por producto
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Ascorbic Acid (Powder)',
                            bottles:'1 bottle 5000mg (21.16 OZ / 600 GRS.). 30 days duration approximately.',
                            disclaimer:'*Only 12 years and older. Recommended dosage 2000mg daily. *Do not take this product if you have kidney problems. *Avoid combination and/or use of this with any type of vitamin B17',
                            dose:'One scoop three times a day mixed with fruit juice or water.',
                            price: 54.95,
                            offer: 0,
                            link:'https://www.biogreencell.com/product-p/vitaminac-highpotency-5000-mg.htm'
                        },
                        p3:{
                            name:'WOUND FIXER',
                            bottles:'1 bottle (Spray – 4oz.)',
                            dose:'Apply on the affected area from 2 to 3 times a day',
                            price:44.95,
                            offer:0,
                            link:'https://www.biogreencell.com/product-p/woundfixer-skin-regenator.htm'
                        },
                        linkPhase1:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=C10pac01'//Finaliza el producto 2
                    },
                    //Aqui inicia la fase 2 del protocolo
                    phase2:{
                        name:'Phase 2', //Nombre de la fase
                        duration:'180 days', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.',
                            bottles:'6 bottles of 240 ml. each. 30 days duration approximately',
                            dose:'20ml. 2 times a day',
                            price:373.50,
                            offer:359.95,
                            link:"https://www.biogreencell.com/product-p/highcomplexity-6bottles.htm" //Link del producto individual, para comprar individuales por producto
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'Ascorbic Acid (Powder)',
                            bottles:'1 bottle 5000mg (21.16 OZ / 600 GRS.). 30 days duration approximately.',
                            disclaimer:'*Only 12 years and older. Recommended dosage 2000mg daily. *Do not take this product if you have kidney problems. *Avoid combination and/or use of this with any type of vitamin B17',
                            dose:'One scoop three times a day mixed with fruit juice or water.',
                            price: 54.95,
                            offer: 0,
                            link:'https://www.biogreencell.com/product-p/vitaminac-highpotency-5000-mg.htm'
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase2:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=C10pac02'//Finaliza el producto 2
                    },
                   // linkProtocol:'linkdelprotocolocompleto' //Link para comprar el combo completo
                },//Aqui finaliza el protocolo

                //Aqui inicia el nuevo protocolo
                {
                    id:11, //ID del protocolo
                    name:'Prevention protocol', //Nombre del protocolo
                    category:'', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Phase 1', //Nombre de la fase
                        duration:'180 days', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'2 bottles de 240 ml. each. 30 days duration approximately.', //Cantidad de botellas
                            dose:'4ml. 4 times a day', //Dosis del producto
                            price:0, //Precio del producto
                            offer:124.50,
                            link:'https://www.biogreencell.com/product-p/prevention-2bottles.htm' //Link del producto individual, para comprar individuales por producto
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
                        linkPhase1:'https://www.biogreencell.com/product-p/prevention-2bottles.htm'//Finaliza el producto 2
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
                    name:'Protocol for moderate conditions', //Nombre del protocolo
                    category:'', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Phase 1', //Nombre de la fase
                        duration:'180 days', //Duracion de la fase
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL.', //Nombre del producto
                            bottles:'4 bottles of 240 ml. each. 48 days duration approximately.', //Cantidad de botellas
                            dose:'5ml. 4 times a day', //Dosis del producto
                            price:0, //Precio del producto
                            offer:249.00,
                            link:'https://www.biogreencell.com/product-p/moderated-4bottles.htm' //Link del producto individual, para comprar individuales por producto
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
                        linkPhase1:'https://www.biogreencell.com/product-p/moderated-4bottles.htm'//Finaliza el producto 2
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