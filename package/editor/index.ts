import type { App } from 'vue';
// 引入quill样式
import 'quill/dist/quill.snow.css';
// import 'quill/dist/quill.bubble.css';
import quillEditor from './quillEditor.vue';
 
// 使用install方法，在app.use挂载
quillEditor.install = (app: App) => {
  app.component(quillEditor.__name as string, quillEditor)
}
 
export default quillEditor;