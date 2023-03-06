module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/require-v-for-key': 'off',
    'vue/valid-v-else': 'off',
    'no-undef': 'off',
    'no-redeclare': 'off',
    'vue/no-parsing-error': 'off',
    'vue/valid-template-root': 'off',
    'vue/no-unused-components': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
