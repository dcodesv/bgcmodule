<template class="bg-gray-300 w-full h-full">
  <div id="app">
    <router-view>
      <condiciones></condiciones>
    </router-view>
  </div>
</template>

<script>
import Condiciones from "./views/Condiciones.vue";
//Axios
//const baseURL = "http://localhost:3000/conditions";

export default {
  name: 'app',
  components:{
    Condiciones
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
