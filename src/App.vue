<template>
  <div id="app">
    <Lista></Lista>
  </div>
</template>

<script>
import Lista from './components/Lista.vue'
//Axios
//const baseURL = "http://localhost:3000/conditions";

export default {
  name: 'app',
  components:{
    Lista
  },
  
  //Axios
  /*async created(){
    try{
      const res = await axios.get(baseURL);
      this.conditions = res.data;
    }catch(e){
      console.error(e);
    }
  }*/

}
</script>
