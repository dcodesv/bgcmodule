<template>
    <div>
        <Header></Header>
        <Lista></Lista>
    </div>
</template>

<script>
    import Lista from '@/components/Lista.vue';
    import Header from '@/components/Header.vue'
    export default {
        name: "Condiciones",
        components: {Lista, Header}
    }
</script>

<style scoped>

</style>