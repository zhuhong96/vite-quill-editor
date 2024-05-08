
/** 字体大小 */
export const QUILL_SIZE = ["14px", "15px", "16px", "18px", "20px", "24px", "28px",'36px','48px', false];

/** 工具栏名称 */
// export const toolbarName = ['bold', 'italic', 'underline', 'strike','blockquote','link','image','header','list','script','direction','size','color','background','font','align','clean']
export const toolbarName = [
    ['header','size'],
    ['bold', 'italic', 'strike', 'underline'],
    ['color','background'],
    ['ordered','bullet'],
    [
    // 'link',
    'blockquote',
    'line', // 分割线
    'image',
    'annex', // 附件
    'align','indentLeft','indentRight',
    // '未知',
    'clean']
]

export const lkToolbarSize:any = ["12px", "14px", "16px", "18px", "20px", "22px", "24px", false];

export const toolbarBubble:any = ['size','bold','italic','strike','underline','code','color','background','link'];

export const showArrow:string[] = ["size", "header", "font"];
export const showSelectArrow:string[] = ["size", "header", "font","color",'background',"align"];

// 声明颜色值
export const colorName:string[] = [
    '#1A2139','#68070A','#532300','#916C0D','#193922','#0A6C65','#13628F','#222975','#732986','#8C2959',
    // '#141A42','#821C2E','#713300','#B58710','#214C2D','#0C867E','#177AB2','#3643CB','#8F33A7','#B53572',
    '#516082','#AE263E','#954500','#D9A213','#317344','#0EA197','#1C92D5','#4453FF','#AC3DC8','#E5398C',
    '#A8AFC0','#D54941','#BE5A00','#FFBE16','#499D60','#11BDB2','#21ACFA','#6573FF','#CA48EB','#FF4AA1',
    '#ACB3C0','#E15971','#FC7C14','#FFCA40','#62BF7C','#3CC9C0','#49BBFB','#808BFF','#D469EF','#FF6EB4',
    '#D5DBE4','#EC97A6','#FD9D4F','#FFD66C','#81CC96','#69D5CE','#73CBFC','#9CA5FF','#DE8CF2','#FF86C0',
    '#F1F3F8','#F1B6C1','#FEBE89','#FFE39B','#A1D9B0','#99E3DE','#A0DBFD','#C2C8FF','#E7B0F6','#FFACD4',
    '#FFFFFF','#F7D5DB','#EFE5D1','#FFEFC7','#C0E5CB','#C6EFED','#CAEBFE','#D6DAFF','#D6DAFF','#D6DAFF',
]

export const fontSizeName = ['14px','15px','16px','18px','20px','24px','28px','36px','48px'] as const;
export type IFontSizeName = typeof fontSizeName[number];

// 正文
// export const headerTitle = ['H1一级标题','H2二级标题','H3三级标题','H4四级标题','正文'] as const;
export const headerTitle = [
    {value: 1, label: 'H1一级标题',title:'H1'},
    {value: 2, label: 'H2二级标题',title:'H2'},
    {value: 3, label: 'H3三级标题',title:'H3'},
    {value: 4, label: 'H4四级标题',title:'H4'},
    {value: 5, label: '正文',title:'正文'},
] as const;

export type IHeaderTitle = typeof headerTitle[number];

// 对齐方式
export const alignType = ['left','right','center','justify']
