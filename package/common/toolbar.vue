<template>
 <div class="z-toolbar">
  <div class="z-formats"
    v-for="(items, index) in props.toolbar" :key="index">
      <button type="button" v-for="(item, idx) in items" :key="idx">{{ item }}</button>
  </div>
 </div>
</template>

<script lang='ts' setup>
import { PropType, ref, onMounted } from 'vue';
import { isString, isObject } from "../enum/utils";
import { containerName } from "../enum/quillEditor";

interface IToolbar {
  // 单个
  bold?:string,
  italic?:string,
  underline?:string,
  strike?:string,
  blockquote?:string,
  'code-block'?:string,
  link?:string,
  image?:string,
  video?:string,
  formula?:string,
  clean?:string,
  // 多个
  header?: any[] | number | string,
  list?: "ordered" | "bullet" | "check",
  script?: "sub" | "super",
  indent?: "+1" | "-1"
  direction?: "rtl" | "ltr",
  size?: any[],
  color?: any[],
  background?: any[],
  font?: any[],
  // align?: "center" | "right" | "justify"
  align?: string[]
  // lineHeight?: any[]
}

const toolbarList = ref<any[]>([]);

const props = defineProps({
  toolbar:{
    type: Array as PropType<any[]>,
    default:() =>[]
  }
});

const init = () => {
  if(props.toolbar.length === 0) return;
  const toolbar = props.toolbar;
  toolbarList.value = [];
  for(const item of toolbar){
    let list = [];
    for(const key in item) {
      if (isString(item[key])) {
        const itemName = containerName.includes(item[key]);
        itemName && list.push(item[key]);
      }else if (isObject(item[key])) {
        const itemName = containerName.includes(Object.keys(item[key])[0]);
        itemName && list.push(item[key]);
      }
    }
    if(!list.length) continue;
    toolbarList.value.push(list);
  }
}

onMounted(() => {
  init();
})



</script>

<style scoped>
@import "../style/toolbar.css";
</style>