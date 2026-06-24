import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import markdown from '@eslint/markdown'
import html from '@html-eslint/eslint-plugin'

export default [
  {
    ignores: ['node_modules', 'dist'],
  },
  // JavaScript files
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.browser,
    },
    ...pluginJs.configs.recommended,
  },
  // Vue files - explicitly scoped to .vue files
  ...pluginVue.configs['flat/essential'].map((config) => ({
    ...config,
    files: config.files ?? ['**/*.vue'],
  })),
  // Markdown files (checks JavaScript code blocks)
  ...markdown.configs.recommended,
  // HTML files - explicitly scoped to .html files
  // Formatting rules are disabled since Prettier handles HTML formatting
  {
    ...html.configs['flat/recommended'],
    files: ['**/*.html'],
    rules: {
      ...html.configs['flat/recommended'].rules,
      '@html-eslint/indent': 'off',
      '@html-eslint/attrs-newline': 'off',
      '@html-eslint/no-extra-spacing-tags': 'off',
      '@html-eslint/require-closing-tags': 'off',
    },
  },
]
