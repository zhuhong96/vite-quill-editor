import { createApp } from 'vue'
import './style.css';
import App from './App.vue';
// import QuillEditor from "../package/index";
import QuillEditor from "vite-quill-editor";
import "vite-quill-editor/index.css";

const app = createApp(App);

// createApp(App).mount('#app')
app.use(QuillEditor).mount('#app')
