<template>
  <div class="quill-editor">
    <ToolBar :toolbar="props.options.modules.toolbar" :getQuill="getQuill" />
    <div id="vite-quill-editor"></div>
  </div>
</template>

<script lang="ts" setup>
// 引入
import Quill from "quill";
import { onMounted, ref } from "vue";
import type { PropType } from "vue";
import { IOptions } from "../enum/quillEditor";
import ToolBar from "../common/toolbar.vue";

// quill实例
const quillEditor = ref<any>(null);
// props传值
const props = defineProps({
  // 配置信息
  options:{
    type: Object as PropType<IOptions>,
    default:()=>{}
  }
})


// 初始化
const init = () => {
  const options = {
    // debug: "info", // 是否显示debug信息
    modules: {
      toolbar: props.options.modules.toolbar,
    },
    placeholder: props.options?.placeholder || '请输入文本',
    // 是否禁止编辑
    readOnly: false,
    theme: "snow",
  };
  const editor = new Quill("#vite-quill-editor", options);
  quillEditor.value = editor;
  // console.log(quillEditor.value);
  // 监听文本变化
  quillEditor.value.on("text-change", (delta:any, oldDelta:any, source:any) => {
    console.log('*************************',delta,oldDelta,source);
  });
  // 监听光标变化
  quillEditor.value.on("selection-change", (range:any, oldRange:any, source:any) => {
    console.log(range,oldRange,source);
  })
}

// 获取quill实例
const getQuill = () => {
  return quillEditor.value;
};

onMounted(() => {
  init();
});

defineExpose({
  getQuill,
});


</script>

<style scoped>
@import "../style/quillEditor.css";
@import "../style/quill-default.css";
</style>