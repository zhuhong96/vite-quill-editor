
export interface IModules {
  toolbar: any[],
  clipboard: Object,
}

/**
 * 富文本配置参数类型
 */
export interface IOptions {
  theme: string, // 主题
  modules: IModules,
  placeholder: string, // 提示文本
}


/**
 * 工具栏逻辑
 * 根据传递的值, 判断是否存在-->
 * 如果存在就添加到对象中-->
 * 并且不管他有多少个,只要添加就展示多少个。
 * 反之-->不添加其中
 */

export const containerName = [
  'size', 'header', 'blockquote', 
  'bold', 'italic', 'underline', 
  'strike', 'script', 'font', 'color', 
  'background', 'highlight', 'align', 
  'list', 'bullet', 'indent', 'link', 
  'image', 'code-block', 'formula', 'clean'
]