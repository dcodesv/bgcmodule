<template>
    <div>
        <div class="bg-white p-6 flex flex-row justify-center items-center">
            <img class="w-24 mr-10 box-border" src="../assets/Logo.png" alt="">
            <a href="https://www.immunebiogreencell.com" class="rounded hover:text-black hover:bg-graybgc px-4 py-2 text-white text-graybgcdark flex flex-row justify-center items-center"><i class="ri-arrow-go-back-fill mr-2"></i> Regresar a la tienda</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return{
                name: '',
            }
        },
    }
</script>