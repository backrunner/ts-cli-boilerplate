import * as fs from 'node:fs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

interface PackageJson {
  dependencies?: Record<string, string>
}

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8')) as PackageJson
const external = Object.keys(pkg.dependencies ?? {}).concat(['fs/promises'])

const extensions = ['.js', '.ts']

/** @type {import('rollup').RollupOptions} */
const config = {
  input: 'src/main.ts',
  output: [
    {
      file: './bin/cli.cjs',
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
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
      declarationMap: false,
    }),
  ],
}

export default config
