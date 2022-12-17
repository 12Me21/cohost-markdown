import process from './parse.js'

console.log(process(
	[
		"- hello!\n  - hi",
		"## section 2\n:yeah:",
		"<div style=rotate:5deg>aaaaaa",
	],
))
