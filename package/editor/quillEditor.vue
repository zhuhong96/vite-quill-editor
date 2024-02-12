<template>
  <div>
    <div id="vite-quill-editor"></div>
  </div>
</template>

<script lang="ts" setup>
// 引入
import Quill from "quill";
import { onMounted } from "vue";
// import 'quill/dist/quill.snow.css';

onMounted(() => {
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
  console.log(editor);
  
});

defineExpose({});
</script>

<style scoped>
/* @import 'quill/dist/quill.snow.css'; */
/* @import 'quill/dist/quill.bubble.css'; */

#vite-quill-editor {
  width: 100%;
  min-height: 200px;
  /* background-color: red; */
}
</style>