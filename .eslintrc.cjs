/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //关闭组件命名规则
    "vue/multi-word-component-names": "off",
    // 声明变量没有使用,给警告
    "no-unused-vars": "off",
    // "@typescript-eslint/no-unused-vars": "off",
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}