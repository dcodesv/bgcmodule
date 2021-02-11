<template>
    <div>
        <div class="bg-white p-6 flex flex-row justify-center items-center">
            <img :src="brand.logolink" class="w-24 mr-8"/>
            <a href="https://www.immunebiogreencell.com" class="rounded hover:text-black hover:bg-graybgc px-4 py-2 text-white text-graybgcdark flex flex-row justify-center items-center"><i class="ri-arrow-go-back-fill mr-2"></i> Regresar a la tienda</a>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "Header",
        data(){
            return{
                name: '',
            }
        },
        computed:{
            ...mapState(['brand']),
        }
    }
</script>