<template class="bg-graybgc w-full h-full">
  <div id="app" class="w-full">
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
    Condiciones,
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
<style>
  /*@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');*/
  @font-face {
    font-family: ProximaNova-Regular;
    src: url(assets/ProximaNova-Regular.otf);
  }
  *{
    font-family: 'ProximaNova-Regular', sans-serif;
    letter-spacing: 0.5px;
  }
 
</style>