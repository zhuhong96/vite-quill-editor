
export interface IToolbar {
  // 工具栏
  container: any[],
  handlers: Object
}
export interface IModules {
  toolbar: IToolbar,
  clipboard: Object,
}

/**
 * 富文本配置参数类型
 */
export interface IOptions {
  theme: string, // 主题
  modules: IModules
}


export const containerValue = [
  'size', 'header', 'blockquote', 
  'bold', 'italic', 'underline', 
  'strike', 'script', 'font', 'color', 
  'background', 'highlight', 'align', 
  'list', 'bullet', 'indent', 'link', 
  'image', 'code-block', 'formula', 'clean'
]