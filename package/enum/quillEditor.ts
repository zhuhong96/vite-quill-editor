
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