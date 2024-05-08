<script setup lang="ts">
const options = {
  theme: 'snow', // 使用纯白色板主题
  placeholder: '请输入内容--',
  readOnly:false, // 是否禁止编辑
  modules:{
    toolbar: [
        // ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        // ['blockquote', 'code-block'],
        // ['link', 'image', 'video', 'formula'],

        [{ 'header': 1 }, { 'header': 2 }],          // custom button values
        // [{ 'header': 1 }, { 'header': 2 }],          // custom button values
        // [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        // [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        // [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        // [{ 'font': [] }],
        // [{ 'align': [] }],
        ['clean'],                                     // remove formatting button
      ]
  }
}
</script>

<template>
  <div>
    <quill-editor :options="options" />
  </div>
</template>

<style scoped>

</style>
