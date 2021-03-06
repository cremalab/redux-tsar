import typescript from 'rollup-plugin-typescript2';

export default {
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