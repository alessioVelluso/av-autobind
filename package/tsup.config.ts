import { defineConfig } from 'tsup';


export default defineConfig({
  format: ['cjs', 'esm'],
  entry: ['./autobind.ts'],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  outDir: 'dist',
  target: 'es2021',
  splitting: true,
  sourcemap: false,
  minify: false,
  // esbuildOptions: (options) => {
  //   options.footer = { js: 'module.exports = module.exports.default;' }
  // }
});
