<template>
  <div class="quill-editor">
    <div id="vite-quill-editor"></div>
  </div>
</template>

<script lang="ts" setup>
// 引入
import Quill from "quill";
import { onMounted, ref } from "vue";

// quill实例
const quillEditor = ref<Quill | null>(null);

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
  const quillEditor = new Quill("#vite-quill-editor", options);
  console.log(quillEditor);
  quillEditor.value = quillEditor;
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