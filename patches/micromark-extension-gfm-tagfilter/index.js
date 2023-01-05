const pattern = /^(<[/]?)(style|xmp|iframe|noembed|noframes|noscript|title|textarea|script|plaintext)(?![^\t\n\f\r />])/i

export const gfmTagfilterHtml = {
	exit: {
		htmlTextData(token) {
			let value = this.sliceSerialize(token)
			value = value.replace(pattern, "$1bad-$2")
			this.tag(value) //maybe should be raw / raw+encode idk..
		},
	},
}
