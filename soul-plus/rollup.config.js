import path from 'path';
import fs from 'fs';
import esbuild from 'rollup-plugin-esbuild';
import css from 'rollup-plugin-css-only';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import scss from 'rollup-plugin-scss';
import commonjs from 'rollup-plugin-commonjs';

// not comps files
const NOT_COMPS = ['index.js', 'utils', 'hooks', 'theme-chalk'];

// sync comps files
let comps = fs.readdirSync('./packages');
comps = comps.filter(v => !NOT_COMPS.includes(v));

// format by { input: 'packages/Button/index.js', name: 'so-button' }
const inputComps = comps.map(fileName => ({
  input: `packages/${fileName}/index.js`,
  name: 'so' + fileName.replace(/([A-Z])/g, '-$1').toLowerCase()
}));

// default comps
const defaultComps = [{ input: 'packages/index.js', name: 'soul-plus' }];

const inputs = defaultComps.concat(inputComps);
console.debug(inputs);

// rollup config
export default inputs.map(item => ({
  input: path.resolve(__dirname, item.input),
  output: [
    // {
    //   globals: { vue: 'Vue' },
    //   name: 'soul-plus',
    //   file: 'lib/soul-plus.umd.js',
    //   format: 'umd'
    // },
    {
      name: item.name,
      file: `es/${item.name}.js`,
      format: 'esm'
    },
    {
      name: item.name,
      file: `lib/${item.name}.js`,
      format: 'cjs',
      exports: 'named'
    }
  ],
  plugins: [
    scss(),
    css(),
    vue({
      target: 'browser',
      css: false
    }),
    commonjs(),
    nodeResolve(),
    esbuild()
  ],
  external: ['vue']
}));
