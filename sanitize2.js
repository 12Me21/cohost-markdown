import walk from './walk-tree.js'

let changeTo = {
	__proto__: null,
	acceptcharset: 'accept-charset',
	ariadescribedby: 'aria-describedby',
	ariahidden: 'aria-hidden',	
	arialabel: 'aria-label',
	arialabelledby: 'aria-labelledby',
}
	
let attributes = {
	__proto__: null,
	abbr: true,
	accept: true,
	'accept-charset': true,
	accesskey: true,
	action: true,
	align: true,
	alt: true,
	'aria-describedby': true,
	'aria-hidden': true,
	'aria-label': true,
	'aria-labelledby': true,
	axis: true,
	border: true,
	cellpadding: true,
	cellspacing: true,
	char: true,
	charoff: true,
	charset: true,
	checked: true,
	clear: true,
	cols: true,
	colspan: true,
	color: true,
	compact: true,
	coords: true,
	datetime: true,
	dir: true,
	disabled: true,
	enctype: true,
	for: true,
	frame: true,
	headers: true,
	height: true,
	hreflang: true,
	hspace: true,
	ismap: true,
	id: true,
	label: true,
	lang: true,
	maxlength: true,
	media: true,
	method: true,
	multiple: true,
	name: true,
	nohref: true,
	noshade: true,
	nowrap: true,
	open: true,
	prompt: true,
	readonly: true,
	rel: true,
	rev: true,
	rows: true,
	rowspan: true,
	rules: true,
	scope: true,
	selected: true,
	shape: true,
	size: true,
	span: true,
	start: true,
	summary: true,
	tabindex: true,
	target: true,
	title: true,
	type: true,
	usemap: true,
	valign: true,
	value: true,
	vspace: true,
	width: true,
	itemprop: true,
	
	style: true,
}

let tags = {
	__proto__: null,
	SCRIPT: false,
	XMP: 0,
	
	H1: true,
	H2: true,
	H3: true,
	H4: true,
	H5: true,
	H6: true,
	BR: true,
	B: true,
	I: true,
	STRONG: true,
	EM: true,
	A: {attributes: {__proto__:null, href: true}},
	PRE: true,
	CODE: true,
	IMG: {attributes: {__proto__:null, src: true, longdesc: true}},
	TT: true,
	DIV: {attributes: {__proto__:null, itemscope: true, itemtype: true}},
	INS: {attributes: {__proto__:null, cite: true}},
	DEL: {attributes: {__proto__:null, cite: true}},
	SUP: true,
	SUB: true,
	P: true,
	OL: true,
	UL: true,
	TABLE: true,
	THEAD: {ancestors: {__proto__:null, table: true}},
	TBODY: {ancestors: {__proto__:null, table: true}},
	TFOOT: {ancestors: {__proto__:null, table: true}},
	BLOCKQUOTE: {attributes: {__proto__:null, cite: true}},
	DL: true,
	DT: true,
	DD: true,
	KBD: true,
	Q: {attributes: {__proto__:null, cite: true}},
	SAMP: true,
	VAR: true,
	HR: true,
	RUBY: true,
	RT: true,
	RP: true,
	LI: {attributes: {__proto__:null, class: 'task-list-item'}},
	TR: {ancestors: {__proto__:null, table: true}},
	TD: {ancestors: {__proto__:null, table: true}},
	TH: {ancestors: {__proto__:null, table: true}},
	S: true,
	STRIKE: true,
	SUMMARY: true,
	DETAILS: true,
	CAPTION: true,
	FIGURE: true,
	FIGCAPTION: true,
	ABBR: true,
	BDO: true,
	CITE: true,
	DFN: true,
	MARK: true,
	SMALL: true,
	SPAN: true,
	TIME: true,
	WBR: true,
	INPUT: {
		attributes: {__proto__:null, type: "checkbox", disabled: ""},
		required: {__proto__:null, type: "checkbox", disabled: ""},
	},
	
	VIDEO: true,
	AUDIO: true,
	ASIDE: true,
}

function process_node(node) {
	switch (node.nodeType) {
	case Node.TEXT_NODE:
		return
		break;
	case Node.COMMENT_NODE:
		return 'prune' //nah
		break;
	case Node.ELEMENT_NODE:
		let name = node.tagName
		let def = tags[name]
		if (def===false)
			return 'prune'
		if (def===0)
			return 'reparse'
		if (!def)
			return 'flatten'
		for (let {name, value} of node.attributes) {
			let newname = changeTo[name] || name
			
			let adef = def.attributes && def.attributes[newname] || attributes[newname]
			if (!adef) {
				node.removeAttribute(name)
				continue
			}
			if (adef===true || adef===value) {
				if (newname != name) {
					node.removeAttribute(name)
					node.setAttribute(newname, value)
				}
				continue
			}
			node.removeAttribute(name)
			if ('string'==typeof adef)
				node.setAttribute(newname, value)
		}
		let req = def.required
		if (req)
			for (let name in req)
				node.setAttribute(name, req[name])
			
		break;
	default:
		return 'prune' //no way
	}
}

export default function sanitize(tree) {
	walk(tree, process_node)
}
