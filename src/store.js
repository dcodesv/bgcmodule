import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
        state: {
            brand:{
                logolink:"https://cdn.shopify.com/s/files/1/0574/3312/9146/files/Logos_web_ancho_original-26_180x.png?v=1623345727"
            },
            conditions:[ //Json que contiene las Condiciónes
                {
                    id:1,
                    name:"Progressive Condition of the Immune System. Anal. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3
                }, 
                {
                    id:2,
                    name:"Progressive Condition of the Immune System. Mouth. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3
                },
                {
                    id:3,
                    name:"Progressive Condition of the Immune System. Head and Neck. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3
                },
                {
                    id:4,
                    name:"Progressive Condition of the Immune System. Colon. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3 
                },
                {
                    id:5,
                    name:"Progressive Condition of the Immune System. Colorectal. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3 
                },
                {
                    id:6,
                    name:"Progressive Condition of the Immune System. Vocal Cord. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3
                },
                {
                    id:7,
                    name:"Progressive Condition of the Immune System. Laryngeal. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3
                },
                {
                    id:8,
                    name:"Progressive Condition of the Immune System. Throat. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3 
                },
                {
                    id:9,
                    name:"Progressive Condition of the Immune System. Esophagus. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3
                },
                {
                    id:10,
                    name:"Progressive Condition of the Immune System. Stomach. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3 
                },
                {
                    id:11,
                    name:"Progressive Condition of the Immune System. Liver. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3 //anterior6
                },
                {
                    id:12,
                    name:"Progressive Condition of the Immune System. Hodgkin. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3
                },
                {
                    id:13,
                    name:"Progressive Condition of the Immune System. Non Hodgkin. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3 //anterior6
                },
                {
                    id:14,
                    name:"Progressive Condition of the Immune System. Bones. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3
                },
                {
                    id:15,
                    name:"Progressive Condition of the Immune System. Metastasis. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3
                },
                {
                    id:16,
                    name:"Progressive Condition of the Immune System. Breast. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3 //anterior6
                },
                {
                    id:17,
                    name:"Progressive Condition of the Immune System. Ovarian. Phase 1,2,3 and 4", 
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3 
                },
                {
                    id:18,
                    name:"Progressive Condition of the Immune System. Pancreas. Phase 1,2,3 and 4", 
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3 //anterior6
                },
                {
                    id:19,
                    name:"Progressive Condition of the Immune System. Papillary Thyroid. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3 //anterior7
                },
                {
                    id:20,
                    name:"Progressive Condition of the Immune System. Skin. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3 //anterior6
                },
                {
                    id:21,
                    name:"Progressive Condition of the Immune System. Prostate. Phase 1,2,3 and 4", 
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3
                },
                {
                    id:22,
                    name:"Progressive Condition of the Immune System. Thyroid. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3 //anterior6
                },
                {
                    id:23,
                    name:"Progressive Condition of the Immune System. Lung. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3 //anterior6
                },
                {
                    id:24,
                    name:"Progressive Condition of the Immune System. Renal. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3 //anterior7
                },
                {
                    id:25,
                    name:"Progressive Condition of the Immune System. Testicular. Phase 1,2,3 and 4",
                    category:"Phase 3 and 4",
                    idProtocolo:3
                },
                {
                    id:26,
                    name:"Progressive Condition of the Immune System. Endometrial. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3
                },
                {
                    id:27,
                    name:"Progressive Condition of the Immune System. Bladder. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3 
                },
                {
                    id:28,
                    name:"Acne",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:29,
                    name:"ADHD. Attention-deficit. 12 to 16 years old",
                    category:"otros",
                    idProtocolo:1
                },
                {  
                    id:30,
                    name:"Alopecia",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:31,
                    name:"ADHD. Attention-deficit. 17 year and over",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:32,
                    name:"Amyloidosis",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:33,
                    name:"Autism. 12 to 16 years old",
                    category:"otros",
                    idProtocolo:1
                },
                {  
                    id:34,
                    name:"Bartholinitis",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:35,
                    name:"Autism. 17 years and over",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:36,
                    name:"Blepharitis",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:37,
                    name:"Asperger. 12 to 16 years old",
                    category:"otros",
                    idProtocolo:1
                },
                {  
                    id:38,
                    name:"Bronchiectasis",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:39,
                    name:"Asperger. 17 years and over",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:40,
                    name:"Bronchitis",
                    category:"otros",
                    idProtocolo:1 
                },
                {
                    id:41,
                    name:"Epilepsy. 17 years and over",
                    category:"otros",
                    idProtocolo:999
                },
                {  
                    id:42,
                    name:"Epilepsy. 12 to 16 years old",
                    category:"otros",
                    idProtocolo:999
                },
                {
                    id:43,
                    name:"Periorbital cellulitis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:44,
                    name:"Cervicitis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:45,
                    name:"Interstitial Cystitis",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:46,
                    name:"Chlamydia",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:47,
                    name:"Chorioretinitis. Uveitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:48,
                    name:"Coryza. Rhinitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:49,
                    name:"Crohn's Disease",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:50,
                    name:"Atopic dermatitis (eczema)",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:51,
                    name:"Dermatomyositis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:52,
                    name:"Progressive Condition of the Immune System. Ampullary. Phase 1,2,3 and 4",
                    category:"otros",
                    idProtocolo:3
                },
                {  
                    id:53,
                    name:"Type I Diabetes Mellitus",
                    category:"otros",
                    idProtocolo:1 
                },
                {  
                    id:54,
                    name:"Diphtheria",
                    category:"otros",
                    idProtocolo:1 
                },
                {
                    id:55,
                    name:"Contact dermatitis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:56,
                    name:"Seborrheic dermatitis",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:57,
                    name:"Follicular Eczema",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:58,
                    name:"Addison's disease",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:59,
                    name:"Pelvic Inflammatory Disease",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:60,
                    name:"Chronic Obstructive Pulmonary Disease. COPD",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:61,
                    name:"Laryngitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:62,
                    name:"Laryngopharyngeal Reflux",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:63,
                    name:"Epidermolysis Bullosa",
                    category:"otros",
                    idProtocolo:3 
                },
                {  
                    id:64,
                    name:"Amyotrophic Lateral Sclerosis ALS. Lou Gehrig's disease",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:65,
                    name:"Multiple Sclerosis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:66,
                    name:"Esophagitis",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:67,
                    name:"Pharyngitis and Tonsillitis",
                    category:"otros",
                    idProtocolo:2
                },              
                {  
                    id:68,
                    name:"Plantar Fasciitis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:69,
                    name:"Gingivitis",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:70,
                    name:"Glomerulonephritis",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:71,
                    name:"Gonorrhea",
                    category:"Etapa Avanzada",
                    idProtocolo:2
                },
                {  
                    id:72,
                    name:"Genital Herpes",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:73,
                    name:"Systemic Lupus Erythematos. Initial stage",
                    category:"otros",
                    idProtocolo:3 
                },
                {
                    id:74,
                    name:"Systemic Lupus Erythematosus",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:75,
                    name:"Myasthenia",
                    category:"otros",
                    idProtocolo:3 
                },
                {  
                    id:76,
                    name:"Pneumonia", 
                    category:"otros",
                    idProtocolo:3 
                },
                {  
                    id:77,
                    name:"Neurutis",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:78,
                    name:"Pancreatitis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:79,
                    name:"Peritonitis", 
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:80,
                    name:"Athlete's foot",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:81,
                    name:"Psoriasis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:82,
                    name:"Plaque psoriasis.",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:83,
                    name:"Gastric Reflux",
                    category:"otros",
                    idProtocolo:1
                },
                {  
                    id:84,
                    name:"Rhinitis",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:85,
                    name:"Nail psoriasis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:86,
                    name:"Rhinosinusitis",
                    category:"otros",
                    idProtocolo:1 
                },
                {
                    id:87,
                    name:"Guttate psoriasis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:88,
                    name:"Sclerodema",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:89,
                    name:"Inverse psoriasis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:90,
                    name:"Syphilis",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:91,
                    name:"Pustular psoriasis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:92,
                    name:"Guillain-Barré syndrome",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:93,
                    name:"Erythrodermic psoriasis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:94,
                    name:"Tendinosis",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:95,
                    name:"Psoriatic arthritis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:96,
                    name:"Thyroiditis",
                    category:"otros",
                    idProtocolo:3 
                },                
                {  
                    id:97,
                    name:"Whooping cough. Pertussis",
                    category:"otros",
                    idProtocolo:1 
                },
                {
                    id:98,
                    name:"Trichomoniasis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:99,
                    name:"Urethritis",
                    category:"otros",
                    idProtocolo:2 
                },
                {  
                    id:100,
                    name:"Urticaria",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:101,
                    name:"Vaginitis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:102,
                    name:"Warts",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:103,
                    name:"Human Papillomavirus",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:104,
                    name:"Vulvitis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:105,
                    name:"Vulvovaginal Candidiasis VVC",
                    category:"otros",
                    idProtocolo:2 
                },
                {   // ***************** Aqui inician las demas Condiciónes
                    id:106,
                    name:"Heartburn",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:107,
                    name:"Melasma",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:108,
                    name:"Bruton's. X-Linked Agammaglobulinemia (XLA)",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:109,
                    name:"Allergies",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:110,
                    name:"Respiratory Allergies",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:111,
                    name:"Alzheimer",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:112,
                    name:"Anemia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:113,
                    name:"Sickle Cell Anemia",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:114,
                    name:"Iron deficiency anemia",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:115,
                    name:"Hemolytic Anemia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:116,
                    name:"Anxiety",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:117,
                    name:"Sleep Apnea",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:118,
                    name:"Mononucleosis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:119,
                    name:"Osteoporosis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:120,
                    name:"Fibromyalgia",
                    category:"otros",
                    idProtocolo:3 
                },
                {
                    id:121,
                    name:"Osteoarthritis",
                    category:"otros",
                    idProtocolo:2
                },
                {  
                    id:122,
                    name:"Rheumatoid Arthritis",
                    category:"otros",
                    idProtocolo:2 
                },
                {
                    id:123,
                    name:"Sjögren's Syndrome",
                    category:"otros",
                    idProtocolo:3
                },    
                {
                    id:124,//nueva enumeracion
                    name:"Asthma",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:125,
                    name:"Hypercholesterolemia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:126,
                    name:"Hypothyroidism",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:127,
                    name:"Nephritis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:128,
                    name:"Osteoarthritis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:129,
                    name:"Rosacea Dermatitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:130,
                    name:"Liver Cirrhosis. Hepatic Cirrhosis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:131,
                    name:"High Blood Pressure",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:132,
                    name:"Sinusitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:133,
                    name:"Energy",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:134,
                    name:"Migraine",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:135,
                    name:"Urinary Tract Infection (UTI)",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:136,
                    name:"Bipolar disorder",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:137,
                    name:"Gallstones. Gallbladder",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:138,
                    name:"Kidney Stones",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:139,
                    name:"Charcot-Marie-Tooth disease",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:140,
                    name:"Chronic venous disease (CVD)",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:141,
                    name:"Fatty Cirrhosis. Steatosis,",
                    category:"otros",
                    idProtocolo:2
                }, 
                {
                    id:142,
                    name:"Nervous Colitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:143,
                    name:"Ulcerative Colitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:144,
                    name:"Boosting the Immune System",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:145,
                    name:"Irritable Colon",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:146,
                    name:"Chorea",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:147,
                    name:"CREST Syndrome and Scleroderma",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:148,
                    name:"Cognitive deficit",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:149,
                    name:"Motor deficit. 12 to 16 years old",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:150,
                    name:"Motor deficit. 17 years and over",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:151,
                    name:"Depression",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:152,
                    name:"Cinderella dermatosis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:153,
                    name:"Dermatomyositis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:154,
                    name:"Stroke",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:155,
                    name:"Liver Detox",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:156,
                    name:"Osteochondritis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:157,
                    name:'Type 2 diabetes fasting glucose level between 90 to 130 mg / dl',
                    category:'otros',
                    idProtocolo:1
                },
                {
                    id:158,
                    name:'Type 2 diabetes fasting glucose level between 131 to 240 mg / dl',
                    category:'otros',
                    idProtocolo:2
                },
                {
                    id:159,
                    name:'Type 2 diabetes fasting glucose level greater than 241 mg / dl',
                    category:'otros',
                    idProtocolo:3
                },
                {
                    id:160,
                    name:"Chiari Malformation",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:161,
                    name:"Gastritis",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:162,
                    name:"Hashimoto's Thyroiditis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:163,
                    name:"Prediabetes",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:164,
                    name:"Hypertension",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:165,
                    name:"Erectile Dysfunction",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:166,
                    name:"Muscular Dystrophy",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:167,
                    name:"Diverticulitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:168,
                    name:"Joint Pain",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:169,
                    name:"Back and Hand Pain",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:170,
                    name:"Earache",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:171,
                    name:"Joint Pain",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:172,
                    name:"Muscle Pain",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:173,
                    name:"Sciatic Nerve Pain",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:174,
                    name:"Pelvic Pain",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:175,
                    name:"Viral encephalitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:176,
                    name:"Cryoglobulinemia disease",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:177,
                    name:"Chagas disease",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:178,
                    name:"Gaucher disease",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:179,
                    name:"Lyme disease",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:180,
                    name:"Sickle Cell Disease",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:181,
                    name:"Mixed Connective Tissue Disease",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:182,
                    name:"Myoclonic Epilepsy. 12 to 16 years old",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:183,
                    name:"Myoclonic Epilepsy. 17 years and over",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:184,
                    name:"COPD (Chronic Obstructive Pulmonary Disease)",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:185,
                    name:"Ankylosing Spondylitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:186,
                    name:"Spondylosis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:187,
                    name:"Tracheal Stenosis (Tissue Granulation)",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:188,
                    name:"Constipation",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:189,
                    name:"Stress",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:190,
                    name:"Painful Ejaculation",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:191,
                    name:"Fatigue",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:192,
                    name:"Primary immunodeficiency disorders",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:193,
                    name:"Uterine fibroids",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:194,
                    name:"Aggressive Fibromatosis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:195,
                    name:"Fibromyalgia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:196,
                    name:"Insulin Resistance",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:197,
                    name:"Helicobacter Pylori Bacteria Infection",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:198,
                    name:"Erosive Gastritis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:199,
                    name:"Focal segmental glomerulosclerosis (FSGS)",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:200,
                    name:"Hemorrhoids",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:201,
                    name:"Hepatitis B (inactive)",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:202,
                    name:"Chronic Hepatitis B",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:203,
                    name:"Type I Autoimmune Hepatitis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:204,
                    name:"Hepatitis A",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:205,
                    name:"Hepatitis C",
                    category:"otros",
                    idProtocolo:3
                }, 
                {
                    id:206,
                    name:"Genital Herpes Number 2",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:207,
                    name:"Hidradenitis Suppurativa",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:208,
                    name:"Fatty Liver",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:209,
                    name:"Hypercholesterolemia",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:210,
                    name:"Type II Autoimmune Hepatitis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:211,
                    name:"Hyperinsulinism",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:212,
                    name:"Complex Endometrial Hyperplasia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:213,
                    name:"Arterial Hypertension",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:214,
                    name:"Pulmonary Hypertension",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:215,
                    name:"Hypertriglyceridemia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:216,
                    name:"Hyperuricemia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:217,
                    name:"Hypothyroidism",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:218,
                    name:"Langerhans cell histiocytosis (LCH)",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3
                },
                {
                    id:219,
                    name:"Urinary Incontinence",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:220,
                    name:"Urinary, Bladder Infection ( UTI)",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:221,
                    name:"Inflammation in the Prostate",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:222,
                    name:"Insomnia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:223,
                    name:"Chronic Venous Insufficiency",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:224,
                    name:"Leprosy",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:225,
                    name:"Lichen Planus",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:226,
                    name:"Lichen Sclerosus",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:227,
                    name:"Lupus",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:228,
                    name:"Systemic Lupus Erythematosus",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:229,
                    name:"Chiari malformations",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:230,
                    name:"systemic mastocytosi",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:231,
                    name:"Meningiomas",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3
                },
                {
                    id:232,
                    name:"Meningitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:233,
                    name:"Refractory myasthenia gravis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:234,
                    name:"Uterine Myomatosis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:235,
                    name:"Morphea (Plaque Scleroderma)",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:236,
                    name:"IgA Nephropathy. Berger's disease",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:237,
                    name:"Altered Nerves",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:238,
                    name:"Neuropathy",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:239,
                    name:"Peripheral Neuropathy",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:240,
                    name:"Paget Disease",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:241,
                    name:"Onychomycosis. Nail fungus",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:242,
                    name:"Osteonecrosis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:243,
                    name:"Osteoporosis",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:244,
                    name:"Polycystic ovary syndrome. PCOS",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:245,
                    name:"Cerebral Palsy",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:246,
                    name:"Paraplegia level t4 t5",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:247,
                    name:"Parkinson",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:248,
                    name:"Parkinson Plus",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:249,
                    name:"Pemphigus vulgaris",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:250,
                    name:"Loss of Sexual Desire",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:251,
                    name:"Polycythemia Vera",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3
                },
                {
                    id:252,
                    name:"Polydermatomyositis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:253,
                    name:"Chronic inflammatory demyelinating polyneuropathy (CIDP)",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:254,
                    name:"Prediabetes",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:255,
                    name:"Premenopause",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:256,
                    name:"Sleep problems",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:257,
                    name:"Prostatitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:258,
                    name:"Thrombocytopenic purpura",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:259,
                    name:"Cysts in the Ovary",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:260,
                    name:"Ulcerative Rectocolitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:261,
                    name:"Strengthening of the Immune System",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:262,
                    name:"Retinitis Pigmentosa",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:263,
                    name:"Retinopathy",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:264,
                    name:"Mild Mental Retardation",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:265,
                    name:"Deep Mental Retardation",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:266,
                    name:"Aftermath of Guillen Barre",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:267,
                    name:"Antiphospholipid syndrome",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:268,
                    name:"Cerebellar Syndrome",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:269,
                    name:"Churg-Strauss syndrome ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:270,
                    name:"Irritable Colon Syndrome",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:271,
                    name:"Complex Regional Pain Syndrome (CRPS)",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:272,
                    name:"Lumbar Instability Syndrome",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:273,
                    name:"Irritable Bowel Syndrome",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:274,
                    name:"Lennox Gastaut syndrome",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:275,
                    name:"Marfan syndrome",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:276,
                    name:"Raynaud's syndrome",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:277,
                    name:"Rett syndrome",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:278,
                    name:"Sjögren's syndrome",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:279,
                    name:"Carpal Tunnel Syndrome",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:280,
                    name:"Turner syndrome",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:281,
                    name:"Myelodysplastic syndrome",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:282,
                    name:"Nephrological Syndrome",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:283,
                    name:"Corticoresistant Nephrotic Syndrome",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:284,
                    name:"Sinusitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:285,
                    name:"Obsessive Compulsive Disorder",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:286,
                    name:"Thrombocytopenia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:287,
                    name:"Vasculitis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:288,
                    name:"Human Immunodeficiency Virus",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:289,
                    name:"Vitíligo ",
                    category:"otros",
                    idProtocolo:2
                },
                //Envio vicky 22/10/2020
                {
                    id:300,
                    name:"Immune system deficiencies",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:500,
                    name:"Ataxia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:481,
                    name:"Cerebellar Ataxia ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:481,
                    name:"Lumbalgia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:481,
                    name:"Cervicalgia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:481,
                    name:"Vasovagal Syncope",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:481,
                    name:"Multiple System Atrophy",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:481,
                    name:"Spinal Muscular Atrophy",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:481,
                    name:"Arterial Occlusion",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:481,
                    name:" Hydrocephalus",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:481,
                    name:"Congenital dyskeratosis",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:482,
                    name:"Meningitis B",
                    category:"otros",
                    idProtocolo:3
                },
                {
                    id:483,
                    name:"Myotonic dystrophy",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:484,
                    name:"Anoxic brain injuries",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:485,
                    name:"Wilson’s disease ",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:486,
                    name:"Swollen lymph nodes",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:487,
                    name:"Mediastinal lymphadenopathy",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:488,
                    name:"Vagotonia",
                    category:"otros",
                    idProtocolo:2
                },
                {
                    id:489,
                    name:"Piriformis syndrome ",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:490,
                    name:"Sinus Bradycardia ",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:491,
                    name:"Bone marrow transplant",
                    category:"otros",
                    idProtocolo:1
                },
                {
                    id:492,
                    name:"Progressive Condition of the Immune System. Parotid Gland. Phase 1,2,3 and 4",
                    category:"Phase 1,2,3 and 4",
                    idProtocolo:3
                }
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
                        duration:'120 days', //Duracion de la fase
                        coverage:'60 days',
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL', //Nombre del producto
                            bottles:'2 bottles of 240 ml. each.', //Cantidad de botellas
                            dose:'2 mls/cc 4 times a day', //Dosis del producto
                            minuse: '120 days',
                            price: 124.50,//Precio del producto
                            offer: 94.15,//Precio oferta
                            link:"https://www.biogreencell.com/products/immune-bio-green-cell-immune-system-support-2-bottles-2-ml-per-serving",
                            imglink:"https://cdn.shopify.com/s/files/1/0574/3312/9146/products/TiendaPrincipalJunio-2021Ingles_2_1024x1024@2x.jpg?v=1623974945"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'VITAMIN C 2000 MG – APPROX. 4-MONTH SUPPLY',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'1 scoop daily mixed with fruit juices or water',
                            price:29.95,
                            offer: 0,
                            link:'https://www.biogreencell.com/products/vitamin-c-2000-mg-120-servings-8-46-oz-240-g',
                            imglink:"https://cdn.shopify.com/s/files/1/0574/3312/9146/products/vitaminac2000mg-newversion-2_1024x1024@2x.jpg?v=1623189869"
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=MODUENG-2ML'//Finaliza el producto 2
                    },
                },//Aqui finaliza el protocolo
                {
                    id:2, //ID del protocolo
                    name:'2 Frascos 4ml/cc', //Nombre del protocolo
                    category:'categoria 2', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Phase 1', //Nombre de la fase
                        duration:'120 days', //Duracion de la fase
                        coverage:'30 days',
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL', //Nombre del producto
                            bottles:'2 bottles of 240 ml. each.', //Cantidad de botellas
                            dose:'4 mls/cc 4 times a day', //Dosis del producto
                            minuse: '120 days',
                            price: 124.50,//Precio del producto
                            offer: 94.15,//Precio oferta
                            link:"https://www.biogreencell.com/products/immune-bio-green-cell-immune-system-support-2-bottles-4-ml-per-serving",
                            imglink:"https://cdn.shopify.com/s/files/1/0574/3312/9146/products/TiendaPrincipalJunio-2021Ingles_3_1024x1024@2x.jpg?v=1623975108"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'VITAMIN C 2000 MG – APPROX. 4-MONTH SUPPLY',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'1 scoop daily mixed with fruit juices or water',
                            price:29.95,
                            offer: 0,
                            link:'https://www.biogreencell.com/products/vitamin-c-2000-mg-120-servings-8-46-oz-240-g',
                            imglink:"https://cdn.shopify.com/s/files/1/0574/3312/9146/products/vitaminac2000mg-newversion-2_1024x1024@2x.jpg?v=1623189869"
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=MODUENG-4ML'//Finaliza el producto 2
                    },
                },//Aqui finaliza el protocolo
                {
                    id:3, //ID del protocolo
                    name:'4 Frascos 8ml/cc', //Nombre del protocolo
                    category:'categoria 4', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Phase 1', //Nombre de la fase
                        duration:'120 days', //Duracion de la fase
                        coverage:'30 days',
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL', //Nombre del producto
                            bottles:'4 bottles of 240 ml. each.', //Cantidad de botellas
                            dose:'8 mls/cc 4 times a day', //Dosis del producto
                            minuse: '120 days',
                            price: 249.00,//Precio del producto
                            offer: 174.30,//Precio oferta
                            link:"https://www.biogreencell.com/products/immune-bio-green-cell-immune-system-support-4-bottles-included-8-ml-per-serving",
                            imglink:"https://cdn.shopify.com/s/files/1/0574/3312/9146/products/TiendaPrincipalJunio-2021Ingles_1_1024x1024@2x.jpg?v=1623975133"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'VITAMIN C 2000 MG – APPROX. 4-MONTH SUPPLY',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'1 scoop daily mixed with fruit juices or water',
                            price:0,
                            offer: 0,
                            link:'https://www.biogreencell.com/products/vitamin-c-2000-mg-120-servings-8-46-oz-240-g',
                            imglink:"https://cdn.shopify.com/s/files/1/0574/3312/9146/products/vitaminac2000mg-newversion-2_1024x1024@2x.jpg?v=1623189869"
                        },
                        p3:{
                            name:'',
                            bottles:'', //Cantidad de botellas
                            dose:'', //Dosis del producto
                            price:0, //Precio del producto
                            offer:0,
                            link:'' //Link del producto individual, para comprar individuales por producto
                        },
                        linkPhase1:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=IBGC-8MLPERSERVING'//Finaliza el producto 2
                    },
                },//Aqui finaliza el protocolo
                {
                    id:4, //ID del protocolo
                    name:'2 Frascos 2ml/cc', //Nombre del protocolo
                    category:'categoria 2', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Fase 1', //Nombre de la fase
                        duration:'120 days', //Duracion de la fase
                        coverage:'60 days',
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL', //Nombre del producto
                            bottles:'2 bottles of 240 ml. each.', //Cantidad de botellas
                            dose:'2 mls/cc 4 times a day', //Dosis del producto
                            minuse: '120 days',
                            price: 124.50,//Precio del producto
                            offer: 94.15,//Precio oferta
                            link:"https://www.biogreencell.com/products/immune-bio-green-cell-immune-system-support-2-bottles-2-ml-per-serving", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://cdn.shopify.com/s/files/1/0574/3312/9146/products/TiendaPrincipalJunio-2021Ingles_2_1024x1024@2x.jpg?v=1623974945"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'VITAMIN C 2000 MG – APPROX. 4-MONTH SUPPLY',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'1 scoop daily mixed with fruit juices or water',
                            price:29.95,
                            offer: 0,
                            link:'https://www.biogreencell.com/products/vitamin-c-2000-mg-120-servings-8-46-oz-240-g',
                            imglink:"https://cdn.shopify.com/s/files/1/0574/3312/9146/products/vitaminac2000mg-newversion-2_1024x1024@2x.jpg?v=1623189869"
                        },
                        p3:{
                            name:'WOUND FIXER -SPRAY 4 OZ- OVER 1400 SPRAYS',
                            bottles:'1', //Cantidad de botellas
                            dose:'Clean the area well with soap and water. Allow to dry thoroughly and apply it on the affected area twice a day. Shake well before use.', //Dosis del producto
                            price:44.95, //Precio del producto
                            offer:0,
                            link:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=woundfixer-skin-regenator', //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/wound-fixer.jpeg"
                        },
                        linkPhase1:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=MODUENG-2MLVCWF'//Finaliza el producto 2
                    },
                },//Aqui finaliza el protocolo
                {
                    id:5, //ID del protocolo
                    name:'2 Frascos 4ml/cc', //Nombre del protocolo
                    category:'categoria 2', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Phase 1', //Nombre de la fase
                        duration:'120 days', //Duracion de la fase
                        coverage:'30 days',
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL', //Nombre del producto
                            bottles:'2 bottles of 240 ml. each.', //Cantidad de botellas
                            dose:'4 mls/cc 4 times a day', //Dosis del producto
                            minuse: '120 days',
                            price: 124.50,//Precio del producto
                            offer: 94.15,//Precio oferta
                            link:"https://www.biogreencell.com/products/immune-bio-green-cell-immune-system-support-2-bottles-4-ml-per-serving", //Link del producto individual, para comprar individuales por producto
                            imglink:"https://cdn.shopify.com/s/files/1/0574/3312/9146/products/TiendaPrincipalJunio-2021Ingles_3_1024x1024@2x.jpg?v=1623975108"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'VITAMIN C 2000 MG – APPROX. 4-MONTH SUPPLY',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'1 scoop daily mixed with fruit juices or water',
                            price:29.95,
                            offer: 0,
                            link:'https://www.biogreencell.com/products/vitamin-c-2000-mg-120-servings-8-46-oz-240-g',
                            imglink:"https://cdn.shopify.com/s/files/1/0574/3312/9146/products/vitaminac2000mg-newversion-2_1024x1024@2x.jpg?v=1623189869"
                        },
                        p3:{
                            name:'WOUND FIXER -SPRAY 4 OZ- OVER 1400 SPRAYS',
                            bottles:'1', //Cantidad de botellas
                            dose:'Clean the area well with soap and water. Allow to dry thoroughly and apply it on the affected area twice a day. Shake well before use.', //Dosis del producto
                            price:44.95, //Precio del producto
                            offer:0,
                            link:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=woundfixer-skin-regenator', //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/wound-fixer.jpeg"
                        },
                        linkPhase1:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=MODUENG-4MLVCWF'//Finaliza el producto 2
                    },
                },//Aqui finaliza el protocolo
                {
                    id:6, //ID del protocolo
                    name:'4 Frascos 8ml/cc', //Nombre del protocolo
                    category:'categoria 4', //Categoria del protocolo
                    
                    //Aqui inician las fases del protocolo
                    phase1:{
                        name:'Phase 1', //Nombre de la fase
                        duration:'120 days', //Duracion de la fase
                        coverage:'30 days',
                        //Aqui inician los productos de cada fase
                        p1:{
                            name:'IMMUNE BIO GREEN CELL', //Nombre del producto
                            bottles:'4 bottles of 240 ml. each.', //Cantidad de botellas
                            dose:'8 mls/cc 4 times a day', //Dosis del producto
                            minuse: '120 days',
                            price: 249.00,//Precio del producto
                            offer: 174.30,//Precio oferta
                            link:"https://www.biogreencell.com/products/immune-bio-green-cell-immune-system-support-4-bottles-included-8-ml-per-serving",
                            imglink:"https://cdn.shopify.com/s/files/1/0574/3312/9146/products/TiendaPrincipalJunio-2021Ingles_1_1024x1024@2x.jpg?v=1623975133"
                        },
                        //Aqui inicia el segundo producto
                        p2:{
                            name:'VITAMIN C 2000 MG – APPROX. 4-MONTH SUPPLY',
                            bottles:'1 botella 5000mg (21.16 OZ / 600 GRS.). 30 días de duración aprox.',
                            disclaimer:'*No use este producto si tiene problemas con los riñones. No puede ingerir Vitamina B17 con el uso de este suplemento',
                            dose:'1 scoop daily mixed with fruit juices or water',
                            price:0,
                            offer: 0,
                            link:'https://www.biogreencell.com/products/vitamin-c-2000-mg-120-servings-8-46-oz-240-g',
                            imglink:"https://cdn.shopify.com/s/files/1/0574/3312/9146/products/vitaminac2000mg-newversion-2_1024x1024@2x.jpg?v=1623189869"
                        },
                        p3:{
                            name:'WOUND FIXER -SPRAY 4 OZ- OVER 1400 SPRAYS',
                            bottles:'1', //Cantidad de botellas
                            dose:'Clean the area well with soap and water. Allow to dry thoroughly and apply it on the affected area twice a day. Shake well before use.', //Dosis del producto
                            price:44.95, //Precio del producto
                            offer:0,
                            link:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=woundfixer-skin-regenator', //Link del producto individual, para comprar individuales por producto
                            imglink:"https://www.immunebiogreencell.com/v/condiciones/img/wound-fixer.jpeg"
                        },
                        linkPhase1:'https://www.biogreencell.com/ProductDetails.asp?ProductCode=MODUENG-8MLVCWF'//Finaliza el producto 2
                    },
                },//Aqui finaliza el protocolo
                
            ],
        },
        mutations:{

        },
        actions:{

        }
    }); 