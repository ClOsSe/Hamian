
<template>
  <Layout>
    
  </Layout>
</template>

<script lang="ts">
import Layout from "../layouts/main";
import { Component, Prop, Vue ,Watch} from 'vue-property-decorator'; 

@Component({ 
  components:{
    Layout,

  }
})
export default class Home extends Vue{
  
}

</script>
