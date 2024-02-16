<template>
  <div class="quill-editor">
    <toolBar :container="props.options.modules.toolbar.container" />
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
const quillEditor = ref<Quill | null>(null);
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
    debug: "info",
    modules: {
      toolbar: [
        // 默认的
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "link"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["clean"],
        ["image"],
      ],
    },
    placeholder: "请输入文本",
    // 是否禁止编辑
    readOnly: false,
    theme: "snow",
  };
  const editor = new Quill("#vite-quill-editor", options);
  console.log(quillEditor);
  quillEditor.value = editor;
  // 监听文本变化
  quillEditor.value.on("text-change", (delta, oldDelta, source) => {
    console.log('*************************');
    
  });
  // 监听光标变化
  quillEditor.value.on("selection-change", (range, oldRange, source) => {
    
  })
}

onMounted(() => {
  init();
});

defineExpose({});
</script>

<style scoped>
@import "../style/quillEditor.css";
</style>