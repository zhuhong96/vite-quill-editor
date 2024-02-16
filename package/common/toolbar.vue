<template>
 <div class="z-toolbar">
  <div class="z-formats">
    <button type="button">加粗</button>
  </div>
 </div>
</template>

<script lang='ts' setup>
import { PropType } from 'vue';


const props = defineProps({
  container:{
    type: Array as PropType<any[]>,
    default:() =>[]
  }
})

</script>

<style scoped>
@import "../style/toolbar.css";
</style>