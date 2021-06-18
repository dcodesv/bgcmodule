<template>
    <div>
        <div class="bg-white p-6 flex flex-row justify-center items-center">
            <img :src="brand.logolink" class="w-48 mr-10"/>
            <a href="https://www.biogreencell.com" class="rounded hover:text-black hover:bg-graybgc px-4 py-2 text-white text-graybgcdark flex flex-row justify-center items-center"><i class="ri-arrow-go-back-fill mr-2"></i> Go back to Store</a>
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

<style scoped>
</style>