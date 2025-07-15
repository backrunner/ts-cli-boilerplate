import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import * as fs from 'node:fs'
import type { RollupOptions } from 'rollup'

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'))
const external = Object.keys(pkg.dependencies || {}).concat(['fs/promises'])

const extensions = ['.js', '.ts']

const config: RollupOptions = {
  input: 'src/main.ts',
  output: [
    {
      file: './bin/cli.js',
      format: 'cjs',
      banner: '#!/usr/bin/env node',
    },
    {
      file: './bin/cli.mjs',
      format: 'esm',
      banner: '#!/usr/bin/env node',
    },
  ],
  external,
  plugins: [
    nodeResolve({
      extensions,
      modulesOnly: true,
    }),
    json(),
    typescript(),
  ],
}

export default config
