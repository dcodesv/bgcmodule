<template>
    <div class="flex flex-col justify-center items-center" >
        <div v-for="protocolos in protocols" v-bind:key="protocolos.id" v-show="protocolos.id == $route.params.id">
        <div class="flex flex-col justify-center items-center">
            <h1 class="text-center mt-12 text-lg lg:text-2xl font-black">{{protocolos.name}}</h1>
            <p class="text-base lg:text-lg text-greenbgc-900 font-black">{{protocolos.category}}</p>
        </div>

        <div class="flex flex-col lg:flex-row justify-center items-center mt-5">
            <!--Aqui inicia la fase 1-->
            <div class="flex flex-col justify-around items-start bg-white py-2 px-5 rounded-lg mx-3 mt-5">
                <div class="w-full flex flex-row items-center justify-start py-2">
                    <h1 class="font-black text-base lg:text-lg">{{protocolos.phase1.name}}</h1>
                    <p class="font-normal text-sm text-gray-700 ml-3">{{protocolos.phase1.duration}}</p>
                </div>
                <div class="flex flex-row items-center justify-start w-full pb-4">
                    <img src="https://biogreencell.com/wp-content/uploads/2019/02/Sin-título-1.png" class="w-20"/>
                    <div class="mr-3">
                        <h1 class="font-medium text-base">{{protocolos.phase1.p1.name}}</h1>
                        <p class="font-normal text-sm text-gray-700">Cantidad: {{protocolos.phase1.p1.bottles}} botellas</p>
                        <p class="font-normal text-sm text-gray-700">Dosis: {{protocolos.phase1.p1.dose}}.</p>
                        <p class="font-black text-lg text-black py-1">${{protocolos.phase1.p1.price}}</p>
                    </div>
                    <a :href="protocolos.phase1.p1.link" class="font-normal text-xs bg-graybgc hover:bg-black hover:text-white px-4 py-2 ml-auto transition-all rounded-lg">Comprar</a>
                </div>

                <!--Producto 2 es variable, a veces esta y otras no-->
                <!--Por eso se va a evaluar si existe un producto 2 o no, y en caso no exista no se muestra el elemento-->
                <div class="flex flex-row items-center justify-start w-full border-t-2 pt-4" v-show="protocolos.phase1.p2.name.length > 0">
                    <img src="https://biogreencell.com/wp-content/uploads/2018/09/AscorbicAcid_Polvo-1.jpg" class="w-20"/>
                    <div class="mr-5">
                        <h1 class="font-medium text-base">{{protocolos.phase1.p2.name}}</h1>
                        <p class="font-normal text-sm text-gray-700 max-w-xs">Dosis: {{protocolos.phase1.p2.dose}}</p>
                        <p class="font-black text-lg text-black py-1">${{protocolos.phase1.p2.price}}</p>
                    </div>
                    <a :href="protocolos.phase1.p2.link" class="font-normal text-xs bg-graybgc hover:bg-black hover:text-white px-4 py-2 ml-auto transition-all rounded-lg">Comprar</a>
                </div>

                <!--Producto 3 es variable, a veces esta y otras no-->
                <!--Por eso se va a evaluar si existe un producto 3 o no, y en caso no exista no se muestra el elemento-->
                <div class="flex flex-row items-center justify-start w-full border-t-2 pt-4" v-show="protocolos.phase1.p3.name.length > 0">
                    <img src="https://biogreencell.com/wp-content/uploads/2019/07/spray.png" class="w-20"/>
                    <div class="mr-5">
                        <h1 class="font-medium text-base">{{protocolos.phase1.p3.name}}</h1>
                        <p class="font-normal text-sm text-gray-700 max-w-xs">Dosis: {{protocolos.phase1.p3.dose}}</p>
                        <p class="font-black text-lg text-black py-1">${{protocolos.phase1.p3.price}}</p>
                    </div>
                    <a :href="protocolos.phase1.p3.link" class="font-normal text-xs bg-graybgc hover:bg-black hover:text-white px-4 py-2 ml-auto transition-all rounded-lg">Comprar</a>
                </div>
                <a :href="protocolos.phase1.linkPhase1" class="flex flex-row justify-center items-center bg-greenbgc-900 w-full text-white py-2 rounded-lg mb-2 mt-5 hover:shadow-lg hover:bg-black transition-all font-normal text-sm focus:outline-none">Comprar protocolo completo - <span class="ml-1 font-bold text-base lg:text-lg">${{protocolos.phase1.p1.price + protocolos.phase1.p2.price + protocolos.phase1.p3.price}}</span></a>
            </div>
            <!--Aqui finaliza la fase 1-->
            <!--Aqui inicia la fase 2-->
            <div class="flex flex-col justify-around items-start bg-white py-2 px-5 rounded-lg mx-3 mt-5">
                <div class="w-full flex flex-row items-center justify-start py-2">
                    <h1 class="font-black text-base lg:text-lg">{{protocolos.phase2.name}}</h1>
                    <p class="font-normal text-sm text-gray-700 ml-3">{{protocolos.phase2.duration}}</p>
                </div>
                <div class="flex flex-row items-center justify-start w-full pb-4">
                    <img src="https://biogreencell.com/wp-content/uploads/2019/02/Sin-título-1.png" class="w-20"/>
                    <div class="mr-3">
                        <h1 class="font-medium text-base">{{protocolos.phase2.p1.name}}</h1>
                        <p class="font-normal text-sm text-gray-700">Cantidad: {{protocolos.phase2.p1.bottles}} botellas</p>
                        <p class="font-normal text-sm text-gray-700">Dosis: {{protocolos.phase2.p1.dose}}.</p>
                        <p class="font-black text-lg text-black py-1">${{protocolos.phase2.p1.price}}</p>
                    </div>
                    <a :href="protocolos.phase2.p1.link" class="font-normal text-xs bg-graybgc hover:bg-black hover:text-white px-4 py-2 ml-auto transition-all rounded-lg">Comprar</a>
                </div>

                <!--Producto 2 es variable, a veces esta y otras no-->
                <!--Por eso se va a evaluar si existe un producto 2 o no, y en caso no exista no se muestra el elemento-->
                <div class="flex flex-row items-center justify-start w-full border-t-2 pt-4" v-show="protocolos.phase2.p2.name.length > 0">
                    <img src="https://biogreencell.com/wp-content/uploads/2018/09/AscorbicAcid_Polvo-1.jpg" class="w-20"/>
                    <div class="mr-5">
                        <h1 class="font-medium text-base">{{protocolos.phase2.p2.name}}</h1>
                        <p class="font-normal text-sm text-gray-700 max-w-xs">Dosis: {{protocolos.phase2.p2.dose}}</p>
                        <p class="font-black text-lg text-black py-1">${{protocolos.phase2.p2.price}}</p>
                    </div>
                    <a :href="protocolos.phase2.p2.link" class="font-normal text-xs bg-graybgc hover:bg-black hover:text-white px-4 py-2 ml-auto transition-all rounded-lg">Comprar</a>
                </div>

                <!--Producto 3 es variable, a veces esta y otras no-->
                <!--Por eso se va a evaluar si existe un producto 3 o no, y en caso no exista no se muestra el elemento-->
                <div class="flex flex-row items-center justify-start w-full border-t-2 pt-4" v-show="protocolos.phase2.p3.name.length > 0">
                    <img src="https://biogreencell.com/wp-content/uploads/2019/07/spray.png" class="w-20"/>
                    <div class="mr-5">
                        <h1 class="font-medium text-base">{{protocolos.phase2.p3.name}}</h1>
                        <p class="font-normal text-sm text-gray-700 max-w-xs">Dosis: {{protocolos.phase2.p3.dose}}</p>
                        <p class="font-black text-lg text-black py-1">${{protocolos.phase2.p3.price}}</p>
                    </div>
                    <a :href="protocolos.phase2.p3.link" class="font-normal text-xs bg-graybgc hover:bg-black hover:text-white px-4 py-2 ml-auto transition-all rounded-lg">Comprar</a>
                </div>
                <a :href="protocolos.phase2.linkPhase2" class="font-roboto flex flex-row justify-center items-center bg-greenbgc-900 w-full text-white py-2 rounded-lg mb-2 mt-5 hover:shadow-lg hover:bg-black transition-all font-normal text-sm focus:outline-none">Comprar protocolo completo - <span class="ml-1 font-bold text-base lg:text-lg">${{protocolos.phase2.p1.price+ protocolos.phase2.p2.price+ protocolos.phase1.p3.price}}</span></a>
            </div>
            <!--Aqui finaliza la fase 2-->
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
                idindex: ''
            }
        },
        methods:{
            price: function(price1,price2,price3){
                let price = price1+price2+price3;
                return price.toFixed(2);
            }
        },
        computed:{
            ...mapState(['protocols']),
        }
    }
</script>

<style scoped>

</style>