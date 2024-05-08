本地运行

```bash
npm run dev 
or 
yarn dev
```

打包

```bash
npm run build 
or 
yarn build
```

本地调试(将包安装到本地全局)
```typescript
yarn link
```

本地项目调试
```typescript
yarn link vite-quill-editor
```





<p align="center">
  <!-- 🔥 <a href="https://">文档网站（国内）</a>
  &nbsp;
  &nbsp; -->
  🇨🇳 <a href="./README.zh-CN.md">中文版介绍</a>
</p>

<p align="center">
  正在开发中...
</p>


## Install


```bash
npm i vite-quill-editor --save
```

## Usage

Global introduction

```bash
import QuillEditor from 'vite-quill-editor';
import "vite-quill-editor/index.css";
const app = createApp(App);

app.use(QuillEditor).mount('#app')
```

Component introduction

```bash
import { QuillEditor } from 'vite-quill-editor';
import "vite-quill-editor/index.css";
```

html

```bash
 <quill-editor />
```