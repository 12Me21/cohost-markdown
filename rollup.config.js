import {nodeResolve} from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

global.__defineGetter__('__filename', ()=>new URL(import.meta.url))
import terser from '@rollup/plugin-terser'

let f = new URL('.', import.meta.url)

export default {
	input: 'parse.js',
	output: {
		dir: 'rollup',
		plugins: [
		],
	},
	plugins: [
		nodeResolve(),
		commonjs(),
		terser({
			ecma: 0X7e3,
			parse: {},
			compress: {},
			mangle: {},
			format: {
				semicolons: false,
				comments: false,
				max_line_len: 70,
				quote_style: 3,
				preamble: `${f}\nwhile(1)break ${f.protocol.slice(0,-1)}`,
			},
		}),
	],
}
