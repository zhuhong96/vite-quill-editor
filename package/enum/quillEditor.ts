import { IFontSizeName } from "../model/quill-editor";

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
 * 工具栏属性
 */
export interface IToolbarAttributes {
  bold?: boolean,
  italic?: boolean,
  strike?:boolean,
  underline?:boolean,
  blockquote?:boolean,
  indent?:number,
  list?: 'bullet' | 'ordered',
  bullet?:string,
  ordered?:string,
  link?: string,
  color?:string,
  background?:string,
  'code-block'?:string,
  size?: IFontSizeName,
  header?: number,
  align?: string
}