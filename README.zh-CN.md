<p align="center">
  <!-- 🔥 <a href="https://">文档网站（国内）</a>
  &nbsp;
  &nbsp; -->
  🇨🇳 <a href="./README.md">英文版介绍</a>
</p>


## 安装

```bash
npm i vite-quill-editor --save
```

## 使用

全局使用

```bash
import QuillEditor from 'vite-quill-editor';
import "vite-quill-editor/index.css";
const app = createApp(App);
app.use(QuillEditor).mount('#app')
```

组件使用

```bash
import { QuillEditor } from 'vite-quill-editor';
import "vite-quill-editor/index.css";
```

html

```bash
 <quill-editor />
```