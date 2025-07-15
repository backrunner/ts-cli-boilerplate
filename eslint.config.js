import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  typescript: true,
  ignores: [
    'node_modules/',
    'bin/',
    '.history/',
    '**/*.min.js',
    '**/*-min.js',
    '**/*.bundle.js',
  ],
})