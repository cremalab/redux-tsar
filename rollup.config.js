import typescript from 'rollup-plugin-typescript';

export default {
  // entry: './src/index.ts',
  input: './src/index.ts',
  output: {
    format: 'umd',
    name: 'redux-tsar',
    file: './dist/index.js',
  },
  plugins: [
    typescript({
      typescript: require('typescript')
    })
  ]
}