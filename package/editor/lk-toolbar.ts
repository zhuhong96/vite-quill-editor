import { IToolbarAttributes } from "../enum/quillEditor"

// 工具栏点击事件
export const toolbarClick = (editor: any, type: string, data?: IToolbarAttributes) => {
  switch (type) {
    case 'bold':
      boldClick(editor,data);
      break;

    default:
      break;
  }
}

// 加粗
export const boldClick = (editor:any,data?: IToolbarAttributes) => {
  console.log(data);
  
  editor.format('bold',true);
}

// 颜色选择时间
const colorClick = () => {

}