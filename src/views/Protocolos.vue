<template>
    <div class="w-full">
        <Header></Header>
        <protocolos-component></protocolos-component>
    </div>
</template>

<script>
    import ProtocolosComponent from "../components/Protocolos";
    import Header from "@/components/Header.vue";
    export default {
        name: "Protocolos",
        components: {ProtocolosComponent, Header},
    }
</script>

<style scoped>

</style>