<template>
    <div class="flex flex-col justify-center items-center" >
        <div v-for="protocolos in protocols" v-bind:key="protocolos.id" v-show="protocolos.id == $route.params.id">
        <div class="flex flex-col justify-center items-center bg-white">
            <h1 class="text-center mt-1 text-xl lg:text-2xl font-black">{{protocolos.name}}</h1>
            <p class="text-base lg:text-2xl uppercase text-greenbgc-900 font-black">{{protocolos.category}}</p>
            <router-link to="/" class="mt-4 mb-4 text-sm rounded hover:bg-graybgc hover:text-black px-4 py-2 text-graybgcdark flex flex-row justify-center items-center"><i class="ri-arrow-left-line mr-2"></i> Regresar a la lista</router-link>
        </div>
        <div class="flex flex-col lg:flex-row justify-center items-center mt-8 mb-12 mx-6">
            <!--Aqui inicia la fase 1-->
            <div class="flex flex-col justify-around items-start bg-white py-2 px-8 rounded-lg mx-6 mt-5">
                <div class="w-full flex flex-row items-center justify-start py-2 my-3">
                    <h1 class="font-black text-xl lg:text-xl">{{protocolos.phase1.name}}</h1>
                </div>

               <div class="flex flex-col justify-center items-center w-full">
                    <div class="flex flex-col lg:flex-row items-center justify-start w-full">
                        <img :src="protocolos.phase1.p1.imglink" class="w-24 mr-2"/>
                        <div class="mr-3">
                            <h1 class="font-black text-lg uppercase mb-1">{{protocolos.phase1.p1.name}} <span class="text-red-600 text-xs">(*Leer abajo)</span></h1>
                            <p class="font-normal text-base text-gray-900">Cantidad: <span class="font-bold text-black">{{protocolos.phase1.p1.bottles}}</span></p>
                            <p class="font-normal text-base text-gray-900 leading-tight">Dosis: <span class="font-bold text-black">{{protocolos.phase1.p1.dose}}.</span> 15 minutos antes de cada comida, mantener debajo de la lengua por 30 segundos y luego ingerir.</p>
                            <p class="flex flex-wrap items-center font-black text-3xl text-greenbgc-900 py-2">
                                <span class="font-bold mr-2 line-through text-base text-black"><span>{{protocolos.phase1.p1.price > 0 ? "$ "+protocolos.phase1.p1.price : ""}}</span></span> 
                                ${{protocolos.phase1.p1.offer}}
                                <span class="leading-none pt-1 text-lg text-red-600 font-black ml-2 uppercase">Oferta!</span>
                            </p>
                        </div>
                        <a :href="protocolos.phase1.p1.link" class="flex flex-row lg:flex-col hover:border-black justify-center items-center font-normal text-base bg-greenbgc-900 text-white border hover:bg-black hover:text-white px-4 py-4 lg:px-4 lg:py-3 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-shopping-cart-2-line text-base lg:mr-0 mr-2"></i> Comprar<span class="lg:ml-0 ml-1">Individual</span></a>
                    </div>
                    <p class="w-full lg:w-4/5 text-sm mb-3 text-black mt-2 leading-tight"><span class="font-black">Importante:</span> Esta compra cubrirá un período de 30 días dentro de los {{protocolos.phase1.duration}} sugeridos para este protocolo.</p>
                </div>

                <!--Producto 2 es variable, a veces esta y otras no-->
                <!--Por eso se va a evaluar si existe un producto 2 o no, y en caso no exista no se muestra el elemento-->
                <div class="flex flex-col justify-center items-center border-t-2 pt-4 w-full" v-show="protocolos.phase1.p2.name.length > 0">
                    <div class="flex flex-col lg:flex-row items-center justify-start w-full">
                        <img src="../assets/acido-ascorbico.png" class="w-24 mr-2"/>
                        <div class="mr-5">
                            <h1 class="font-black text-base uppercase">{{protocolos.phase1.p2.name}}</h1>
                            <ul class="mt-1 mb-2 flex flex-col justify-center items-start list-none text-xs font-medium text-red-600">
                                <li class="leading-normal">*Se recomienda que no utilice más de 2mg diarios.</li>
                                <li class="leading-normal">*No usar en niños menores de 12 años.</li>
                                <li class="leading-normal">*No use este producto si tiene problemas con los riñones.</li>
                                <li class="leading-normal">*No puede ingerir Vitamina B17 con el uso de este suplemento.</li>
                                <li class="leading-normal">*Las declaraciones sobre los suplementos dietéticos no han sido evaluadas por la FDA y no están destinadas a diagnosticar, tratar, curar o prevenir ninguna enfermedad o problema de salud.</li>
                            </ul>
                            <p class="font-normal text-base text-gray-700 leading-tight">Dosis: <span class="font-bold text-black">{{protocolos.phase1.p2.dose}}</span></p>
                            <!--<p class="font-black text-2xl text-graybgcdark pb-0 pt-1">NO DISPONIBLE</p>-->
                            <p class="font-black text-3xl text-black pb-0 pt-1">{{protocolos.phase1.p2.price > 0 ? "$"+protocolos.phase1.p2.price : "Gratis" }} <span class="leading-none pt-1 text-lg text-red-600 font-black ml-2 uppercase">Oferta!</span></p>
                        </div>
                        <!--<p class="flex flex-row lg:flex-row justify-center items-center font-normal text-sm bg-graybgcdark text-white border hover:text-white px-0 py-2 lg:px-2 lg:py-1 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-error-warning-line text-base lg:mr-2 mr-2"></i> No Disponible</p>-->
                        <a :href="protocolos.phase1.p2.link" class="flex flex-row lg:flex-col hover:border-black justify-center items-center font-normal text-base bg-greenbgc-900 text-white border hover:bg-black hover:text-white px-4 py-4 lg:px-4 lg:py-3 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-shopping-cart-2-line text-base lg:mr-0 mr-2"></i> Comprar<span class="lg:ml-0 ml-1">Individual</span></a>
                    </div>
                    <p class="w-full lg:w-4/5 text-sm mb-3 text-black mt-2 leading-tight"><span class="font-black">Importante:</span> Esta compra cubrirá un período de 120 días dentro de los 180 días sugeridos para este protocolo.</p>
                </div>

                <!--Producto 3 es variable, a veces esta y otras no-->
                <!--Por eso se va a evaluar si existe un producto 3 o no, y en caso no exista no se muestra el elemento-->
                    <div class="flex flex-col justify-center items-center border-t-2 pt-4 w-full" v-show="protocolos.phase1.p3.name.length > 0">
                        <div class="flex flex-col lg:flex-row items-center justify-start w-full">
                            <img src="../assets/wound-fixer.jpeg" class="w-24 mr-2"/>
                            <div class="mr-5">
                                <h1 class="font-black text-base uppercase">{{protocolos.phase1.p3.name}}</h1>
                                <p class="font-normal text-base text-gray-700 leading-tight">Dosis: <span class="font-bold text-black">{{protocolos.phase1.p3.dose}}</span></p>
                                <!--<p class="font-black text-2xl text-graybgcdark pb-0 pt-1">NO DISPONIBLE</p>-->
                                <p class="font-black text-3xl text-black pb-0 pt-1">${{protocolos.phase1.p3.price}}</p>
                            </div>
                            <!--<p class="flex flex-row lg:flex-row justify-center items-center font-normal text-sm bg-graybgcdark text-white border hover:text-white px-0 py-2 lg:px-2 lg:py-1 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-error-warning-line text-base lg:mr-2 mr-2"></i> No Disponible</p>-->
                            <a :href="protocolos.phase1.p3.link" class="flex flex-row lg:flex-col hover:border-black justify-center items-center font-normal text-base bg-greenbgc-900 text-white border hover:bg-black hover:text-white px-4 py-4 lg:px-4 lg:py-3 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-shopping-cart-2-line text-base lg:mr-0 mr-2"></i> Comprar<span class="lg:ml-0 ml-1">Individual</span></a>
                        </div>
                        <p class="w-full lg:w-4/5 text-sm mb-3 text-black mt-2 leading-tight"><span class="font-black">Importante:</span> Esta compra cubrirá un período de 30 días dentro de los {{protocolos.phase1.duration}} sugeridos para este protocolo.</p>
                    </div>
                    <!--<p class="flex flex-row flex-wrap justify-center items-center text-center bg-red-600 w-full lg:w-4/5 mx-auto text-white py-2 px-2 rounded-lg mb-5 mt-5 hover:shadow-lg transition-all font-normal text-xl focus:outline-none"><i class="ri-error-warning-line mr-3 text-xl lg:text-2xl"></i>Por el momento no esta disponible el protocolo completo, intenta comprar ImmuneBioGreenCell individualmente y recibe un 30% de descuento <br><i class="ri-home-heart-fill mr-3 text-xl lg:text-2xl"></i> #QuedateEnCasa</p>-->
                <a :href="protocolos.phase1.linkPhase1" class="flex flex-row flex-wrap justify-center items-center bg-red-600 w-full lg:w-4/5 mx-auto text-white py-4 rounded-lg mb-5 mt-5 hover:shadow-lg hover:bg-black transition-all font-normal text-xl focus:outline-none"><i class="ri-shopping-cart-2-fill mr-3 text-xl lg:text-2xl"></i>Comprar protocolo completo<span class="ml-2 font-bold text-3xl text-center lg:text-lg lg:text-left w-full lg:w-auto lg:text-3xl">${{price1()}}</span></a>
            </div>
            <!--Aqui finaliza la fase 1-->
            <!--Aqui inicia la fase 2-->
            <div v-if="protocolos.phase2.name != ''" class="flex flex-col justify-around items-start bg-white py-2 px-5 rounded-lg mx-3 mt-5">
                <div class="w-full flex flex-row items-center justify-start py-2 my-3">
                    <h1 class="font-black text-xl lg:text-xl">{{protocolos.phase2.name}}</h1>
                </div>

                <div class="flex flex-col justify-center items-center w-full">
                    <div class="flex flex-col lg:flex-row items-center justify-start w-full">
                        <img :src="protocolos.phase2.p1.imglink" class="w-24 mr-2"/>
                        <div class="mr-3">
                            <h1 class="font-black text-lg uppercase mb-1">{{protocolos.phase2.p1.name}} <span class="text-red-600 text-xs">(*Leer abajo)</span></h1>
                            <p class="font-normal text-base text-gray-900">Cantidad: <span class="font-bold text-black">{{protocolos.phase2.p1.bottles}}</span></p>
                            <p class="font-normal text-base text-gray-900 leading-tight">Dosis: <span class="font-bold text-black">{{protocolos.phase2.p1.dose}}.</span> 15 minutos antes de cada comida, mantener debajo de la lengua por 30 segundos y luego ingerir.</p>
                            <p class="flex flex-wrap items-center font-black text-3xl text-greenbgc-900 py-2">
                                <span class="font-bold mr-2 line-through text-base text-black"><span>{{protocolos.phase2.p1.price > 0 ? "$ "+protocolos.phase2.p1.price : ""}}</span></span> 
                                ${{protocolos.phase2.p1.offer}}
                                <span class="leading-none pt-1 text-lg text-red-600 font-black uppercase ml-2">Oferta!</span>
                            </p>
                        </div>
                        <a :href="protocolos.phase2.p1.link" class="flex flex-row lg:flex-col hover:border-black justify-center items-center font-normal text-base bg-greenbgc-900 text-white border hover:bg-black hover:text-white px-3 py-2 lg:px-4 lg:py-3 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-shopping-cart-2-line text-base lg:mr-0 mr-2"></i> Comprar<span class="lg:ml-0 ml-1">Individual</span></a>
                    </div>
                    <p class="w-full lg:w-4/5 text-sm mb-3 text-black mt-2 leading-tight"><span class="font-black">Importante:</span> Esta compra cubrirá un período de 30 días dentro de los {{protocolos.phase2.duration}} sugeridos para este protocolo.</p>
                </div>

                <!--Producto 2 es variable, a veces esta y otras no-->
                <!--Por eso se va a evaluar si existe un producto 2 o no, y en caso no exista no se muestra el elemento-->
                <div class="flex flex-col justify-center items-center border-t-2 pt-4 w-full" v-show="protocolos.phase2.p2.name.length > 0">
                    <div class="flex flex-col lg:flex-row items-center justify-start w-full">
                        <img src="../assets/acido-ascorbico.png" class="w-24 mr-2"/>
                        <div class="mr-5">
                            <h1 class="font-black text-base uppercase">{{protocolos.phase2.p2.name}}</h1>
                            <ul class="mt-1 mb-2 flex flex-col justify-center items-start list-none text-xs font-medium text-red-600">
                                <li class="leading-normal">*Se recomienda que no utilice más de 2mg diarios.</li>
                                <li class="leading-normal">*No usar en niños menores de 12 años.</li>
                                <li class="leading-normal">*No use este producto si tiene problemas con los riñones.</li>
                                <li class="leading-normal">*No puede ingerir Vitamina B17 con el uso de este suplemento.</li>
                                <li class="leading-normal">*Las declaraciones sobre los suplementos dietéticos no han sido evaluadas por la FDA y no están destinadas a diagnosticar, tratar, curar o prevenir ninguna enfermedad o problema de salud.</li>
                            </ul>
                            <p class="font-normal text-base text-gray-700 leading-tight">Dosis: <span class="font-bold text-black">{{protocolos.phase2.p2.dose}}</span></p>
                            <!--<p class="font-black text-2xl text-graybgcdark pb-0 pt-1">NO DISPONIBLE</p>-->
                            <p class="font-black text-3xl text-black pb-0 pt-1">{{protocolos.phase1.p2.price > 0 ? "$"+protocolos.phase1.p2.price : "Gratis" }} <span class="leading-none pt-1 text-lg text-red-600 font-black ml-2 uppercase">Oferta!</span></p>
                        </div>
                        <!--<p class="flex flex-row lg:flex-row justify-center items-center font-normal text-sm bg-graybgcdark text-white border hover:text-white px-0 py-2 lg:px-2 lg:py-1 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-error-warning-line text-base lg:mr-2 mr-2"></i> No Disponible</p>-->
                        <a :href="protocolos.phase2.p2.link" class="flex flex-row lg:flex-col hover:border-black justify-center items-center font-normal text-base bg-greenbgc-900 text-white border hover:bg-black hover:text-white px-3 py-2 lg:px-4 lg:py-3 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-shopping-cart-2-line text-base lg:mr-0 mr-2"></i> Comprar<span class="lg:ml-0 ml-1">Individual</span></a>
                    </div>
                    <p class="w-full lg:w-4/5 text-sm mb-3 text-black mt-2 leading-tight"><span class="font-black">Importante:</span> Esta compra cubrirá un período de 120 días dentro de los 180 días sugeridos para este protocolo.</p>
                </div>

                <!--Producto 3 es variable, a veces esta y otras no-->
                <!--Por eso se va a evaluar si existe un producto 3 o no, y en caso no exista no se muestra el elemento-->
                    <div class="flex flex-col justify-center items-center border-t-2 pt-4 w-full" v-show="protocolos.phase2.p3.name.length > 0">
                        <div class="flex flex-col lg:flex-row items-center justify-start w-full">
                            <img src="../assets/wound-fixer.jpeg" class="w-24 mr-2"/>
                            <div class="mr-5">
                                <h1 class="font-black text-base uppercase">{{protocolos.phase2.p3.name}}</h1>
                                <p class="font-normal text-base text-gray-700 leading-tight">Dosis: <span class="font-bold text-black">{{protocolos.phase2.p3.dose}}</span></p>
                                <!--<p class="font-black text-2xl text-graybgcdark pb-0 pt-1">NO DISPONIBLE</p>-->
                                <p class="font-black text-3xl text-black pb-0 pt-1">${{protocolos.phase2.p3.price}}</p>
                            </div>
                            <!--<p class="flex flex-row lg:flex-row justify-center items-center font-normal text-sm bg-graybgcdark text-white border hover:text-white px-0 py-2 lg:px-2 lg:py-1 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-error-warning-line text-base lg:mr-2 mr-2"></i> No Disponible</p>-->
                            <a :href="protocolos.phase2.p3.link" class="flex flex-row lg:flex-col hover:border-black justify-center items-center font-normal text-base bg-greenbgc-900 text-white border hover:bg-black hover:text-white px-3 py-2 lg:px-4 lg:py-3 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-shopping-cart-2-line text-base lg:mr-0 mr-2"></i> Comprar<span class="lg:ml-0 ml-1">Individual</span></a>
                        </div>
                        <p class="w-full lg:w-4/5 text-sm mb-3 text-black mt-2 leading-tight"><span class="font-black">Importante:</span> Esta compra cubrirá un período de 30 días dentro de los {{protocolos.phase2.duration}} sugeridos para este protocolo.</p>
                    </div>
                    <!--<p class="flex flex-row flex-wrap justify-center items-center text-center bg-red-600 w-full lg:w-4/5 mx-auto text-white py-2 px-2 rounded-lg mb-5 mt-5 hover:shadow-lg transition-all font-normal text-xl focus:outline-none"><i class="ri-error-warning-line mr-3 text-xl lg:text-2xl"></i>Por el momento no esta disponible el protocolo completo, intenta comprar ImmuneBioGreenCell individualmente y recibe un 30% de descuento <br><i class="ri-home-heart-fill mr-3 text-xl lg:text-2xl"></i> #QuedateEnCasa</p>-->
                <a :href="protocolos.phase2.linkPhase2" class="flex flex-row flex-wrap justify-center items-center bg-red-600 w-full lg:w-4/5 mx-auto text-white py-4 rounded-lg mb-5 mt-5 hover:shadow-lg hover:bg-black transition-all font-normal text-xl focus:outline-none"><i class="ri-shopping-cart-2-fill mr-3 text-xl lg:text-2xl"></i>Comprar protocolo completo<span class="ml-2 font-bold text-2xl text-center lg:text-lg lg:text-left w-full lg:w-auto lg:text-3xl">${{price2()}}</span></a>
            </div>
            <!--Aqui finaliza la fase 2-->
        </div>

        <div class="ml-10 mt-5 mb-10">
            <h1 class="text-red-600 font-black text-base">* IMPORTANTE</h1>
            <ul class="ml-5 mt-2">
                <li class="text-base mb-1">• Consumir la cantidad indicada del producto de acuerdo a la dosis sugerida en el protocolo recomendado para su condición.</li>
                <li class="text-base mb-1">• Solo para mayores de 12 años.</li>
                <li class="text-base mb-1">• Los resultados pueden variar de persona a persona.</li>
                <li class="text-base mb-1">• Si usted toma anticoagulante por favor consúltenos antes de adquirir el producto.</li>
                <li class="text-base mb-1">• Si usted ha sido transplantado de algún órgano, por favor consúltenos antes de adquirir el producto.</li>
                <li class="text-base mb-1">• Este producto no está indicado para mujeres embarazadas o lactantes.</li>
                <li class="text-base mb-1">• Consulte con su médico antes de tomar cualquier suplemento dietético, si padece alguna condición médica o si se produce alguna reacción adversa.</li>
                <li class="text-base mb-1">• Las declaraciones sobre los suplementos dietéticos no han sido evaluadas por la FDA y no están destinadas a diagnosticar, tratar, curar o prevenir ninguna enfermedad o problema de salud.</li>
                
            </ul>
        </div>
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
            },
        },
        computed:{
            ...mapState(['protocols']),
        }
    }
</script>

<style scoped>

</style>