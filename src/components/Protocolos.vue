<template class="w-full">
    <div class="flex flex-col justify-center items-center w-full">
        <div v-for="protocolos in protocols" v-bind:key="protocolos.id" v-show="protocolos.id == $route.params.id">
        <div class="flex flex-col justify-center items-center bg-white">
            <h1 class="text-center mt-1 text-xl lg:text-2xl font-black">Recommended Usage:</h1>
            <router-link to="/" class="mt-4 mb-4 text-sm rounded hover:bg-graybgc hover:text-black px-4 py-2 text-graybgcdark flex flex-row justify-center items-center"><i class="ri-arrow-left-line mr-2"></i> Go back</router-link>
        </div>
        <div class="flex flex-col lg:flex-row justify-center items-center mt-8 mb-12 mx-6">
            <!--Aqui inicia la fase 1-->
            <div class="flex flex-col justify-around items-start bg-white py-2 px-8 rounded-lg mx-6 mt-5">
                <div class="w-full flex flex-row items-center justify-start py-2 my-3">
                    
                </div>

                <div class="flex flex-col justify-center items-center w-full">
                    <div class="flex flex-col lg:flex-row items-center justify-start w-full">
                        <img :src="protocolos.phase1.p1.imglink" class="w-24 mr-8"/>
                        <div class="mr-3">
                            <h1 class="font-black text-lg uppercase mb-1">{{protocolos.phase1.p1.name}} <span class="text-red-600 text-xs">(*Read description)</span></h1>
                            <p class="font-normal text-base text-gray-900"><span class="font-bold text-black">Quantity:</span> {{protocolos.phase1.p1.bottles}}</p>
                            <p class="font-normal text-base text-gray-900 leading-tight"><span class="font-bold text-black">Recommended usage:</span> {{protocolos.phase1.p1.dose}}. 15 minutes before each meal.</p>
                            <p class="font-normal text-base text-gray-900 leading-tight"><span class="font-bold text-black">Minimum recommended period of use:</span> {{protocolos.phase1.p1.minuse}}.</p>
                            
                            <p class="flex flex-wrap items-center font-black text-3xl text-greenbgc-900 py-2">
                                <span class="font-bold mr-2 line-through text-base text-black"><span>{{protocolos.phase1.p1.price > 0 ? "$ "+protocolos.phase1.p1.price.toFixed(2) : ""}}</span></span> 
                                ${{protocolos.phase1.p1.offer.toFixed(2)}}
                                <span class="leading-none pt-1 text-lg text-red-600 font-black ml-2 uppercase">offer!</span>
                            </p>
                            <p class="w-full lg:w-4/5 text-sm mb-2 text-black mt-2 leading-tight"><span class="font-black">*</span> This purchase will cover a period of {{protocolos.phase1.coverage}} days within the {{protocolos.phase1.duration}} suggested.</p>
                            <p class="w-full lg:w-4/5 text-sm mb-6 text-black leading-tight"><span class="font-black">*</span> Evaluate positive results during this time. If positive results are obtained, continue for an additional 180 days and evaluate again.</p>
                        </div>
                        <a :href="protocolos.phase1.p1.link" class="flex flex-row lg:flex-col hover:border-black justify-center items-center font-normal text-base bg-greenbgc-900 text-white border hover:bg-black hover:text-white px-4 py-4 lg:px-4 lg:py-3 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-shopping-cart-2-line text-base lg:mr-0 mr-2"></i> Buy<span class="lg:ml-0 ml-1">Individual</span></a>
                    </div>
                </div>

                <!--Producto 2 es variable, a veces esta y otras no-->
                <!--Por eso se va a evaluar si existe un producto 2 o no, y en caso no exista no se muestra el elemento-->
                <div class="flex flex-col justify-center items-center border-t-2 pt-4 w-full" v-show="protocolos.phase1.p2.name.length > 0">
                    <div class="flex flex-col lg:flex-row items-center justify-start w-full">
                        <img :src="protocolos.phase1.p2.imglink" class="w-24 mr-8"/>
                        <div class="mr-5">
                            <h1 class="font-black text-base uppercase mb-2">{{protocolos.phase1.p2.name}}</h1>
                            <p class="font-normal text-base text-black leading-tight mt-1 mb-3"><span class="font-bold text-black">Recommended usage:</span> {{protocolos.phase1.p2.dose}}</p>
                            <ul class="mt-3 mb-2 flex flex-col justify-center items-start list-none text-xs font-medium text-red-600">
                                <li class="leading-normal">*Only 12 years and older.</li>
                                <li class="leading-normal">*Recommended dosage 2000mg daily.</li>
                                <li class="leading-normal">*Do not take this product if you have kidney problems.</li>
                                <li class="leading-normal">*Avoid using this product with vitamin B17.</li>
                            </ul>
                            <!--<p class="font-black text-2xl text-graybgcdark pb-0 pt-1">NO DISPONIBLE</p>-->                        
                            <p class="flex items-center leading-none font-black text-3xl text-black pb-0 pt-0 mt-4 mb-4">{{protocolos.phase1.p2.price > 0 ? "$"+protocolos.phase1.p2.price.toFixed(2) : "$29.95" }}</p>
                            <span v-show="protocolos.phase1.p2.price <= 0" class="text-base ml-3 flex leading-snug font-normal">Get it free with the purshase of 4 or more bottles of IMMUNE BIO GREEN CELL</span>
                            <span v-show="protocolos.phase1.p2.price <= 0" class="flex mt-1 mb-4 text-lg text-red-600 font-black">** Offer good for a limited time.</span>
                        </div>
                        <!--<p class="flex flex-row lg:flex-row justify-center items-center font-normal text-sm bg-graybgcdark text-white border hover:text-white px-0 py-2 lg:px-2 lg:py-1 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-error-warning-line text-base lg:mr-2 mr-2"></i> Not Available</p>-->
                        <a :href="protocolos.phase1.p2.link" class="flex flex-row lg:flex-col hover:border-black justify-center items-center font-normal text-base bg-greenbgc-900 text-white border hover:bg-black hover:text-white px-4 py-4 lg:px-4 lg:py-3 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-shopping-cart-2-line text-base lg:mr-0 mr-2"></i> Buy<span class="lg:ml-0 ml-1">Individual</span></a>
                    </div>
                </div>

                <!--Producto 3 es variable, a veces esta y otras no-->
                <!--Por eso se va a evaluar si existe un producto 3 o no, y en caso no exista no se muestra el elemento-->
                    <div class="flex flex-col justify-center items-center border-t-2 pt-4 w-full" v-show="protocolos.phase1.p3.name.length > 0">
                        <div class="flex flex-col lg:flex-row items-center justify-start w-full">
                            <img :src="protocolos.phase1.p3.imglink" class="w-24 mr-8"/>
                            <div class="mr-5">
                                <h1 class="font-black text-base uppercase">{{protocolos.phase1.p3.name}}</h1>
                                <p class="font-normal text-base text-black mt-1 mb-1">Suggested for minor burns, scrapes, infections, ulcers and/or diseases on the skin.</p>
                                <p class="font-normal text-base text-black leading-tight max-w-2xl"><span class="font-bold text-black">Recommended usage:</span> {{protocolos.phase1.p3.dose}}</p>
                                <ul class="mt-1 mb-2 flex flex-col justify-center items-start list-none text-xs font-medium text-red-600">
                                    <li class="leading-normal">*Only for 12 years and older.</li>
                                </ul>
                                <!--<p class="font-black text-2xl text-graybgcdark pb-0 pt-1">NO DISPONIBLE</p>-->
                                <p class="leading-none font-black text-3xl text-black pb-0 pt-0 mt-3 mb-4">${{protocolos.phase1.p3.price.toFixed(2)}}</p>
                                <span class="text-base ml-3 flex leading-snug font-normal"> Amazing Offer! 2X1 Buy one get one free.</span>
                                <span class="flex mt-1 mb-4 text-lg text-red-600 font-black">** Offer good for a limited time.</span>
                            </div>
                            <!--<p class="flex flex-row lg:flex-row justify-center items-center font-normal text-sm bg-graybgcdark text-white border hover:text-white px-0 py-2 lg:px-2 lg:py-1 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-error-warning-line text-base lg:mr-2 mr-2"></i> No Disponible</p>-->
                            <a :href="protocolos.phase1.p3.link" class="flex flex-row lg:flex-col hover:border-black justify-center items-center font-normal text-base bg-greenbgc-900 text-white border hover:bg-black hover:text-white px-4 py-4 lg:px-4 lg:py-3 ml-0 lg:ml-auto transition-all rounded-lg lg:w-auto w-full"><i class="ri-shopping-cart-2-line text-base lg:mr-0 mr-2"></i> Buy<span class="lg:ml-0 ml-1">Individual</span></a>
                        </div>
                    </div>
                    <!--<p class="flex flex-row flex-wrap justify-center items-center text-center bg-red-600 w-full lg:w-4/5 mx-auto text-white py-2 px-2 rounded-lg mb-5 mt-5 hover:shadow-lg transition-all font-normal text-xl focus:outline-none"><i class="ri-error-warning-line mr-3 text-xl lg:text-2xl"></i>At the moment the complete protocol is not available, try to buy ImmuneBioGreenCell individually and receive a 30% discount <br><i class="ri-home-heart-fill mr-3 text-xl lg:text-2xl"></i> #StayAtHome</p>-->
                <a :href="protocolos.phase1.linkPhase1" class="flex flex-col flex-wrap justify-center items-center bg-red-600 w-full lg:w-4/5 mx-auto text-white py-4 rounded-lg mb-8 mt-12 hover:shadow-lg hover:bg-black transition-all font-normal text-lg focus:outline-none"><span><i class="ri-shopping-cart-2-fill mr-3 text-lg lg:text-xl"></i>Buy Now!<span class="ml-2 font-bold text-3xl text-center lg:text-lg lg:text-left w-full lg:w-auto lg:text-3xl">${{price1()}}</span></span><span class="text-lg text-center">Shipping included in the United States. Applies to Puerto Rico</span></a>
            </div>
            <!--Aqui finaliza la fase 1-->
            <!--Aqui finaliza la fase 2-->
        </div>

        <div class="w-full lg:w-10/12 mb-12 mx-auto">
            <h1 class="text-red-600 font-black text-2xl">* DESCRIPTION</h1>
            <ul class="ml-5 mt-2">
                <li class="text-base mb-1">1. Only for persons aged 12 and older.</li>
                <li class="text-base mb-1">2. The color of the bottle and/or the lid may vary.</li>
                <li class="text-base mb-1">3. Shake well before using. You may notice plant residues on the edges of the bottle; this is because this is a plant product.</li>
                <li class="text-base mb-1">4. People with diabetes need to monitor their blood sugar levels at least twice a day after starting the Immune Bio Green Cell product.</li>
                <li class="text-base mb-1">5. We suggest consuming the indicated amount of the supplement according to the recommended dosage, within the suggested timeframe.</li>
                <li class="text-base mb-1">6. Results may vary from person to person.</li>
                <li class="text-base mb-1">7. In some cases, autoimmune conditions become more acute as the immune system begins the process of its cellular genetic recognition. You could start noticing an improvement within 30 days.</li>
                <li class="text-base mb-1">8. If you have high blood pressure (hypertension), we recommend that you check with your primary doctor and/or specialist before purchasing the product.</li>
                <li class="text-base mb-1">9. If you are taking any blood thinner, we recommend that you check with your primary doctor and/or specialist before purchasing this product.</li>
                <li class="text-base mb-1">10. If you have had an organ transplant, we recommend that you check with your primary doctor and/or specialist before purchasing this product.</li>
                <li class="text-base mb-1">11. This product is not recommended for pregnant or lactating women.</li>
                <li class="text-base mb-1">12. Check with your primary doctor and/or specialist before taking any dietary supplement, if you have any medical condition or if there is any adverse reaction.</li>
                <li class="text-base mb-1">13. These statements regarding dietary supplements have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease or health condition.</li>
            </ul>
            <p class="text-lg mb-1 font-black mt-5">** Offer good for a limited time.</p>
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