import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  formatters: {
    markdown: 'prettier',
  },
  ignores: [
    'node_modules/',
    'bin/',
    '.history/',
    '**/*.min.js',
    '**/*-min.js',
    '**/*.bundle.js',
  ],
  isInEditor: true,
})
