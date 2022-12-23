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
				//sequences: false,
				hoist_funs: true,
				hoist_vars: true,
				unsafe_arrows: true,
				unsafe_methods: true,
				passes: 2,
				unsafe: true,
			},
			mangle: {
				//nth_identifier
				properties: {
					builtins: true,
					regex: /^(consume|events|parser|sliceSerialize|containerState|offset|attempt|interrupt|constructs|previous|partial|getData|lineEndingIfNeeded|line|contentType|setData|_bufferIndex|null|_index)$/,
				},
			},
			format: {
				wrap_func_args: false,
				semicolons: false,
				comments: false,
				max_line_len: 70,
				quote_style: 3,
				preamble: "12",
			},
		}),
	],
}
