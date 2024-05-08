
// 工具栏名称
export const toolbarTitle:any = [
  ['bold', 'italic', 'strike', 'underline'],
  ['color','background'],
  // ['blockquote', 'code-block'],
  // [{ 'header': 1 }, { 'header': 2 }],
  // [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  // [{ 'script': 'sub' }, { 'script': 'super' }],
  // [{ 'indent': '-1' }, { 'indent': '+1' }],
  // [{ 'direction': 'rtl' }],
  // [{ 'size': ['small', false, 'large', 'huge'] }],
  // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  // [{ 'color': [] }, { 'background': [] }],
  // [{ 'font': [] }],
  // [{ 'align': [] }],
  // ['clean'],
  // ['link', 'image', 'formula']
]

// 文字大小
export const fontSizeName = ['14px','15px','16px','18px','20px','24px','28px','36px','48px'] as const;
export type IFontSizeName = typeof fontSizeName[number];