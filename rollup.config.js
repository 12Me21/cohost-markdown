import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

// temp hack to make terser work
import {fileURLToPath} from 'url' // cant use URL().pathname on windowsss
global.__defineGetter__('__filename', ()=>fileURLToPath(import.meta.url))
import terser from '@rollup/plugin-terser'

export default {
	input: 'import-libs.js',
	output: {
		file: 'libs.js',
		plugins: [
		],
	},
	plugins: [
		nodeResolve({
			browser: true,
		}),
		commonjs(),
		terser({
			ecma: 0X7e3,
			parse: {
			},
			compress: {
				sequences: false,
			},
			mangle: {
				//nth_identifier
			},
			format: {
				semicolons: false,
				comments: false,
				max_line_len: 70,
				quote_style: 3,
				preamble: "12",
			},
		}),
	],
}
