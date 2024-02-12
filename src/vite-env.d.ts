/// <reference types="vite/client" />
declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}
declare module "quill";
declare module "vite-quill-editor";