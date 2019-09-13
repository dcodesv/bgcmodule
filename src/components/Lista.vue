<template>
  <div>
    <h1>Condiciones</h1>
    <ul>
      <li v-for="condition of conditions" :key="condition.id">{{condition.name}}</li>
    </ul>
  </div>
</template>

<script>

import {mapState} from 'vuex';

export default {
    name: 'Lista',
    computed:{
        ...mapState(['conditions'])
    }
}

</script>