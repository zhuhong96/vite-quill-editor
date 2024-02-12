import { createApp } from 'vue'
import App from './App.vue';
import QuillEditor from "../package/index";
// import QuillEditor from "vite-quill-editor";
import 'quill/dist/quill.snow.css';
import "vite-quill-editor/index.css";

const app = createApp(App);

// createApp(App).mount('#app')
app.use(QuillEditor).mount('#app')
