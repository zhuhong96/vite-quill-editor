
/**
 * 判断是否是字符串
 */
export const isString = (str: unknown): str is string => {
  return typeof str === 'string';
}

/**
 * 判断是否是数组
 */
export const isArray = (arr: unknown): arr is unknown[] => {
  return Array.isArray(arr);
}

/**
 * 判断是否是对象
 */
export const isObject = (obj: unknown): obj is Record<string, any> => {
  return Object.prototype.toString.call(obj) === '[object Object]';
}