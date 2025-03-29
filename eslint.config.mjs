import globals from 'globals'
import js from '@eslint/js'
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: { ...globals.node },
      ecmaVersion: 'latest',
    },
    plugins: { 
      '@stylistic/js': stylisticJs,
    },
    rules: { 
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],
      eqeqeq: 'error', // use === not ==
      'no-trailing-spaces': 'error', // no spaces at end of lines
      'object-curly-spacing': ['error', 'always'], // spaces around { }
      'arrow-spacing': ['error', { before: true, after: true }],
      'no-console': 'off', // allow console.log
    },
  },
  {
    ignores: ['dist/**'],
  },
]