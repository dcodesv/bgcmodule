<template>
    <div class="flex flex-col justify-center items-center">
        <div v-if="$route.params.id > 0">
            <div v-for="protocolos in protocols" v-bind:key="protocolos.id" v-show="protocolos.id == $route.params.id">
        <div class="flex flex-col justify-center items-center bg-white w-full m-auto">
            <h1 class="text-center mt-1 text-xl lg:text-2xl font-black">Recomendaciones de Uso:</h1>
            <router-link to="/" class="mt-4 mb-4 text-sm rounded hover:bg-graybgc hover:text-black px-4 py-2 text-graybgcdark flex flex-row justify-center items-center"><i class="ri-arrow-left-line mr-2"></i> Regresar a la lista</router-link>
        </div>
        <div class="flex flex-col lg:flex-row justify-center items-center mt-8 mb-12 mx-6">
            <!--Aqui inicia la fase 1-->
            <div class="flex flex-col justify-around items-start bg-white py-2 px-8 rounded-lg mx-6 mt-5">
                <div class="w-full flex flex-row items-center justify-start py-2 my-3">
                    <!--<h1 class="font-black text-xl lg:text-xl">{{protocolos.phase1.name}}</h1>-->
                </div>

               <div class="flex flex-col justify-center items-center w-full">
                    <div class="flex flex-col lg:flex-row items-center justify-start w-full">
                        <img :src="protocolos.phase1.p1.imglink" class="w-24 mr-8"/>
                        <div class="mr-3">
                            <h1 class="font-black text-lg uppercase mb-1">{{protocolos.phase1.p1.name}} <span class="text-red-600 text-xs">(*Leer abajo)</span></h1>
                            <p class="font-normal text-base text-gray-900"><span class="font-bold text-black">Cantidad: </span>{{protocolos.phase1.p1.bottles}}</p>
                            <p class="font-normal text-base text-gray-900 leading-tight"><span class="font-bold text-black">Recomendación de uso: </span> {{protocolos.phase1.p1.dose}}. 15 minutos antes de cada comida.</p>
                            <p class="font-normal text-base text-gray-900 leading-tight"><span class="font-bold text-black">Tiempo mínimo de uso recomendado: </span> {{protocolos.phase1.p1.minuse}}.</p>
                            <p class="flex flex-wrap items-center font-black text-3xl text-greenbgc-900 py-2">
                                <span class="font-bold mr-2 line-through text-base text-black"><span>{{protocolos.phase1.p1.price > 0 ? "$ "+protocolos.phase1.p1.price.toFixed(2) : ""}}</span></span> 
                                ${{protocolos.phase1.p1.offer.toFixed(2)}}
                                <span class="leading-none pt-1 text-lg text-red-600 font-black ml-2 uppercase">Oferta!</span>
                            </p>
                            <p class="w-full lg:w-full text-sm mb-0 text-black mt-2 leading-tight"><span class="font-black">*</span> Esta compra cubrirá un período de {{protocolos.phase1.coverage}} dentro de los {{protocolos.phase1.duration}} sugeridos.</p>
                    <p class="w-full lg:w-full text-sm mb-3 text-black mt-2 leading-tight"><span class="font-black">*</span> Evaluar resultados positivos durante este tiempo, de obtenerlos continuar por 180 días adicionales y evaluar.</p>
                        </div>
                        <a :href="protocolos.phase1.p1.link" class="flex flex-row lg:flex-col hover:border-black justify-center items-center font-normal text-base bg-greenbgc-900 text-white border hover:bg-black hover:text-white px-4 py-4 lg:px-4 lg:py-3 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-shopping-cart-2-line text-base lg:mr-0 mr-2"></i> Comprar<span class="lg:ml-0 ml-1">Individual</span></a>
                    </div>
                    
                </div>

                <!--Producto 2 es variable, a veces esta y otras no-->
                <!--Por eso se va a evaluar si existe un producto 2 o no, y en caso no exista no se muestra el elemento-->
                <div class="flex flex-col justify-center items-center border-t-2 pt-4 w-full" v-show="protocolos.phase1.p2.name.length > 0">
                    <div class="flex flex-col lg:flex-row items-center justify-start w-full">
                        <img :src="protocolos.phase1.p2.imglink" class="w-24 mr-8"/>
                        <div class="mr-5">
                            <h1 class="font-black text-base uppercase">{{protocolos.phase1.p2.name}}</h1>
                            <p class="font-normal text-base text-gray-700 leading-tight mt-1 mb-3"><span class="font-bold text-black">Recomendación de uso:</span> {{protocolos.phase1.p2.dose}}</p>
                            <ul class="mt-1 mb-2 flex flex-col justify-center items-start list-none text-xs font-medium text-red-600">
                                <li class="leading-normal">*Solo para mayores de 12 años.</li>
                                <li class="leading-normal">*No ingiera mas de 2000mg diarios.</li>
                                <li class="leading-normal">*No use este producto si padece problemas renales.</li>
                                <li class="leading-normal">*Evite la combinacion y/o uso de este producto con Vitamina B17.</li>
                            </ul>
                            <!--<p class="font-black text-2xl text-graybgcdark pb-0 pt-1">NO DISPONIBLE</p>-->
                            <p class="flex items-center leading-none font-black text-3xl text-black pb-0 pt-0 mt-4 mb-4">{{protocolos.phase1.p2.price > 0 ? "$"+protocolos.phase1.p2.price.toFixed(2) : "$29.95" }}</p>
                            <span v-show="protocolos.phase1.p2.price <= 0" class="text-base ml-3 flex leading-snug font-normal"> Obtengala gratis con la compra de 4 o mas frascos de IMMUNE BIO GREEN CELL</span>
                            <span v-show="protocolos.phase1.p2.price <= 0" class="flex mt-1 mb-4 text-lg text-red-600 font-black">** Oferta válida por tiempo limitado.</span>
                        </div>
                        <!--<p class="flex flex-row lg:flex-row justify-center items-center font-normal text-sm bg-graybgcdark text-white border hover:text-white px-0 py-2 lg:px-2 lg:py-1 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-error-warning-line text-base lg:mr-2 mr-2"></i> No Disponible</p>-->
                        <a :href="protocolos.phase1.p2.link" class="flex flex-row lg:flex-col hover:border-black justify-center items-center font-normal text-base bg-greenbgc-900 text-white border hover:bg-black hover:text-white px-4 py-4 lg:px-4 lg:py-3 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-shopping-cart-2-line text-base lg:mr-0 mr-2"></i> Comprar<span class="lg:ml-0 ml-1">Individual</span></a>
                    </div>
                </div>

                <!--Producto 3 es variable, a veces esta y otras no-->
                <!--Por eso se va a evaluar si existe un producto 3 o no, y en caso no exista no se muestra el elemento-->
                    <div class="flex flex-col justify-center items-center border-t-2 pt-4 w-full" v-show="protocolos.phase1.p3.name.length > 0">
                        <div class="flex flex-col lg:flex-row items-center justify-start w-full">
                            <img :src="protocolos.phase1.p3.imglink" class="w-24 mr-8"/>
                            <div class="mr-5">
                                <h1 class="font-black text-base uppercase">{{protocolos.phase1.p3.name}}</h1>
                                <p class="font-normal text-base text-black mt-1 mb-1">Ideal para quemaduras menores, raspaduras, infecciones, úlceras y/o enfermedades en la piel</p>
                                <p class="font-normal text-base text-black leading-tight max-w-2xl"><span class="font-bold text-black">Recomendación de uso:</span> {{protocolos.phase1.p3.dose}}</p>
                                <ul class="mt-1 mb-2 flex flex-col justify-center items-start list-none text-xs font-medium text-red-600">
                                    <li class="leading-normal">*Solo para mayores de 12 años.</li>
                                </ul>
                                <!--<p class="font-black text-2xl text-graybgcdark pb-0 pt-1">NO DISPONIBLE</p>-->
                                <p class="leading-none font-black text-3xl text-black pb-0 pt-0 mt-3 mb-4">${{protocolos.phase1.p3.price.toFixed(2)}}</p>
                                <span class="text-base ml-3 flex leading-snug font-normal"> 2x1! Compre uno y reciba el otro gratis.</span>
                                <span class="flex mt-1 mb-4 text-lg text-red-600 font-black">** Oferta válida por tiempo limitado.</span>
                            </div>
                            <!--<p class="flex flex-row lg:flex-row justify-center items-center font-normal text-sm bg-graybgcdark text-white border hover:text-white px-0 py-2 lg:px-2 lg:py-1 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-error-warning-line text-base lg:mr-2 mr-2"></i> No Disponible</p>-->
                            <a :href="protocolos.phase1.p3.link" class="flex flex-row lg:flex-col hover:border-black justify-center items-center font-normal text-base bg-greenbgc-900 text-white border hover:bg-black hover:text-white px-4 py-4 lg:px-4 lg:py-3 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-shopping-cart-2-line text-base lg:mr-0 mr-2"></i> Comprar<span class="lg:ml-0 ml-1">Individual</span></a>
                        </div>
                    </div>
                    <!--<p class="flex flex-row flex-wrap justify-center items-center text-center bg-red-600 w-full lg:w-4/5 mx-auto text-white py-2 px-2 rounded-lg mb-5 mt-5 hover:shadow-lg transition-all font-normal text-xl focus:outline-none"><i class="ri-error-warning-line mr-3 text-xl lg:text-2xl"></i>Por el momento no esta disponible el protocolo completo, intenta comprar ImmuneBioGreenCell individualmente y recibe un 30% de descuento <br><i class="ri-home-heart-fill mr-3 text-xl lg:text-2xl"></i> #QuedateEnCasa</p>-->
                <a :href="protocolos.phase1.linkPhase1" class="flex flex-col flex-wrap justify-center items-center bg-red-600 w-full lg:w-4/5 mx-auto text-white py-4 rounded-lg mb-8 mt-12 hover:shadow-lg hover:bg-black transition-all font-normal text-lg focus:outline-none"><span><i class="ri-shopping-cart-2-fill mr-3 text-lg lg:text-xl"></i>Comprar Ahora!<span class="ml-2 font-bold text-3xl text-center lg:text-lg lg:text-left w-full lg:w-auto lg:text-3xl">${{price1()}}</span></span><span class="text-lg text-center">Envío incluido en los Estados Unidos. Aplica a Puerto Rico</span></a>
            </div>
            <!--Aqui finaliza la fase 1-->

        </div>

        <div class="w-full lg:w-10/12 mb-12 mx-auto">
            <h1 class="text-red-600 font-black text-2xl">* IMPORTANTE</h1>
            <ul class="ml-5 mt-2">
                <li class="text-lg mb-1">1. Solo para mayores de 12 años.</li>
                <li class="text-lg mb-1">2. El color del envase y/o tapa podría variar.</li>
                <li class="text-lg mb-1">3. Agitar antes de usar. Puede notar residuos vegetales en los bordes del frasco, esto se debe a que es un producto natural.</li>
                <li class="text-lg mb-1">4. No contiene sabores ni colores artificiales, por ser un producto herbal conserva su sabor natural.</li>
                <li class="text-lg mb-1">5. Debido a los principios activos de las plantas algunas personas podrían experimentar un aumento en micción frecuente. (Frecuencia en orinar).</li>
                <li class="text-lg mb-1">6. Toda persona con la condición de diabetes, al comenzar con Immune Bio Green Cell debe monitorear sus niveles de azúcar por lo menos dos veces al día.</li>                
                <li class="text-lg mb-1">7. Los resultados pueden variar de persona a persona.</li>
                <li class="text-lg mb-1">8. En las personas con condiciones autoinmunes puede suceder que en algunos casos y de persona a persona, se agudice la misma en lo que el sistema inmunológico comienza a retomar su reconocimiento genético celular. No debería durar más de 30 días para que la persona pudiera comenzar a notar una mejoría.</li>
                <li class="text-lg mb-1">9. Si usted es hipertenso recomendamos consultar con su médico primario y/o especialista antes de adquirir el suplemento.</li>
                <li class="text-lg mb-1">10. Si usted toma anticoagulante recomendamos consultar con su médico primario y/o especialista antes de adquirir el suplemento.</li>
                <li class="text-lg mb-1">11. Si usted ha experimentado el trasplante de algún órgano (s), recomendamos consultar con su médico primario y/o especialista antes de adquirir el suplemento.</li>
                <li class="text-lg mb-1">12. No se recomienda la utilización de este suplemento para mujeres embarazadas o lactantes.</li>
                <li class="text-lg mb-1">13. Consulte con su médico primario y/o especialista antes de tomar cualquier suplemento dietético, si padece alguna condición médica o si se produce alguna reacción adversa.</li>
                <li class="text-lg mb-1">14. Las declaraciones sobre los suplementos dietéticos no han sido evaluadas por la FDA y no están destinadas a diagnosticar, tratar, curar o prevenir ninguna enfermedad o problema de salud.</li>
                <li class="text-lg mb-1">15. Sugerimos consumir la cantidad indicada del suplemento de acuerdo a la dosis recomendada, dentro del tiempo sugerido.</li>
                
            </ul>
            <p class="text-lg mb-1 font-black mt-5">** Oferta válida por tiempo limitado</p>
        </div>
        </div>
        </div>
        <div v-else class="mt-12 justify-center flex items-center flex-col">
            <h1 class="text-2xl font-black">Si usted desea consulte a su médico primario y/o especialista</h1>
            <router-link :to="{name:'condiciones'}" class="mt-12 bg-greenbgc-900 px-6 py-3 text-white rounded-lg">Ir al home</router-link>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default{
        name: "ProtocolosComponent",
        data(){
            return{
                idindex: '',
            }
        },
        methods:{
            price1: function(){
                let id = parseInt(this.$route.params.id);
                id -= 1; //porque el indice del arreglo inicia en 0 y el elemento inicia con 1 Ejemplo: 0 == 1, 1 == 2, 2 == 3
                let total = (this.protocols[id].phase1.p1.offer + this.protocols[id].phase1.p2.price + this.protocols[id].phase1.p3.price);
                return total.toFixed(2);
            },
            price2: function(){
                let id = parseInt(this.$route.params.id);
                id -= 1; //porque el indice del arreglo inicia en 0 y el elemento inicia con 1 Ejemplo: 0 == 1, 1 == 2, 2 == 3
                let total = (this.protocols[id].phase2.p1.offer + this.protocols[id].phase2.p2.price + this.protocols[id].phase2.p3.price);
                return total.toFixed(2);
            }
        },
        computed:{
            ...mapState(['protocols'])
        }
    }
</script>

<style scoped>

</style>