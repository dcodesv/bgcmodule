<template>
    <div class="flex flex-col justify-center items-center" >
        <!--<div v-for="protocolos in protocols" v-bind:key="protocolos.id">-->
        <div class="flex flex-col justify-center items-center">
            <h1 class="font-roboto font-black text-2xl">Protocolo integrativo para condiciones de alta complejidad</h1>
            <p class="text-lg text-greenbgc-900 font-black font-roboto">categoria 4</p>
        </div>

        <div class="flex flex-row justify-center items-center mt-5">
            <!--Aqui inicia la fase 1-->
            <div class="flex flex-col justify-around items-start bg-white py-2 px-5 rounded-lg mx-3 mt-5">
                <div class="w-full flex flex-row items-center justify-start py-2">
                    <h1 class="font-roboto font-black text-lg">Fase #1</h1>
                    <p class="font-roboto font-normal text-sm text-gray-700 ml-3">Duración 180 días</p>
                </div>
                <div class="flex flex-row items-center justify-start w-full pb-4">
                    <img src="https://biogreencell.com/wp-content/uploads/2019/02/Sin-título-1.png" class="w-20"/>
                    <div class="mr-3">
                        <h1 class="font-roboto font-medium text-base">Inmune BioGreenCell</h1>
                        <p class="font-roboto font-normal text-sm text-gray-700">Cantidad: 16 botellas</p>
                        <p class="font-roboto font-normal text-sm text-gray-700">Dosis: 32ml. 4 veces al día.</p>
                        <p class="font-roboto font-black text-xl text-black py-1">$500.95</p>
                    </div>
                    <a href="google.com" class="font-roboto font-normal text-xs bg-graybgc hover:bg-black hover:text-white px-4 py-2 ml-auto transition-all rounded-lg">Comprar</a>
                </div>

                <div class="flex flex-row items-center justify-start w-full border-t-2 pt-4">
                    <img src="https://biogreencell.com/wp-content/uploads/2018/09/AscorbicAcid_Polvo-1.jpg" class="w-20"/>
                    <div class="mr-5">
                        <h1 class="font-roboto font-medium text-base">Acido Ascorbico</h1>
                        <p class="font-roboto font-normal text-sm text-gray-700 max-w-xs">Dosis: 1 scoop 2 veces al día mezclado con jugo de frutas sin azúcar o agua.</p>
                        <p class="font-roboto font-black text-xl text-black py-1">$60.00</p>
                    </div>
                    <a href="google.com" class="font-roboto font-normal text-xs bg-graybgc hover:bg-black hover:text-white px-4 py-2 ml-auto transition-all rounded-lg">Comprar</a>
                </div>
                <button class="font-roboto flex flex-row justify-center items-center bg-greenbgc-900 w-full text-white py-2 rounded-lg mb-2 mt-5 hover:shadow-lg hover:bg-black transition-all font-normal text-sm focus:outline-none">Comprar protocolo completo - <span class="ml-1 font-bold text-lg">$560.95</span></button>
            </div>
            <!--Aqui finaliza la fase 1-->
            <!--Aqui inicia la fase 2-->
            <div class="flex flex-col justify-around items-start bg-white py-2 px-5 rounded-lg mx-3 mt-5">
                <div class="w-full flex flex-row items-center justify-start py-2">
                    <h1 class="font-roboto font-black text-lg">Fase #1</h1>
                    <p class="font-roboto font-normal text-sm text-gray-700 ml-3">Duración 180 días</p>
                </div>
                <div class="flex flex-row items-center justify-start w-full pb-4">
                    <img src="https://biogreencell.com/wp-content/uploads/2019/02/Sin-título-1.png" class="w-20"/>
                    <div class="mr-3">
                        <h1 class="font-roboto font-medium text-base">Inmune BioGreenCell</h1>
                        <p class="font-roboto font-normal text-sm text-gray-700">Cantidad: 16 botellas</p>
                        <p class="font-roboto font-normal text-sm text-gray-700">Dosis: 32ml. 4 veces al día.</p>
                        <p class="font-roboto font-black text-xl text-black py-1">$500.95</p>
                    </div>
                    <a href="google.com" class="font-roboto font-normal text-xs bg-graybgc hover:bg-black hover:text-white px-4 py-2 ml-auto transition-all rounded-lg focus:outline-none">Comprar</a>
                </div>

                <div class="flex flex-row items-center justify-start w-full border-t-2 pt-4">
                    <img src="https://biogreencell.com/wp-content/uploads/2018/09/AscorbicAcid_Polvo-1.jpg" class="w-20"/>
                    <div class="mr-5">
                        <h1 class="font-roboto font-medium text-base">Acido Ascorbico</h1>
                        <p class="font-roboto font-normal text-sm text-gray-700 max-w-xs">Dosis: 1 scoop 2 veces al día mezclado con jugo de frutas sin azúcar o agua.</p>
                        <p class="font-roboto font-black text-xl text-black py-1">$60.00</p>
                    </div>
                    <a href="google.com" class="font-roboto font-normal text-xs bg-graybgc hover:bg-black hover:text-white px-4 py-2 ml-auto transition-all rounded-lg focus:outline-none">Comprar</a>
                </div>
                <button class="font-roboto flex flex-row justify-center items-center bg-greenbgc-900 w-full text-white py-2 rounded-lg mb-2 mt-5 hover:shadow-lg hover:bg-black transition-all font-normal text-sm focus:outline-none">Comprar protocolo completo - <span class="ml-1 font-bold text-lg">$560.95</span></button>
            </div>
            <!--Aqui finaliza la fase 2-->
        </div>
        <!--</div>-->
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default{
        name: "ProtocolosComponent",
        data(){
            return{

            }
        },
        computed:{
            ...mapState(['protocols'])
        }
    }
</script>

<style scoped>

</style>