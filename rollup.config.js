import babel from 'rollup-plugin-babel';

export default {
    input: 'src/index.js',
    output: {
        name: 'Media',
        file: 'dist/media.js',
        format: 'umd',
    },
    plugins: [
        babel(),
    ]
}