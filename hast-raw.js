import {htmlVoidElements} from './libs.js'
import {serializeAttributes} from './attributes.js'

const escape_text = text=>{
	// any others needed?
	return text.replace(/&/g, "&amp;").replace(/</g, "&lt;")
}

export default function(tree, {allowRaw}, before) {
	let output = ""
	
	const all = (list)=>{
		if (list) nodes:for (let n of list) switch (n.type) {
			case 'element':
			if (before)
				for (let b of before) {
					let res = b(n)
					if (res=='skip')
						continue nodes;
					if (res=='children') {
						all(n.children)
						continue nodes;
					}
					if (res)
						n = res
				}
			const {tagName, properties} = n
			// use outerHTML here?
			output += "<"+tagName+" "+serializeAttributes(properties)+">"
			all(n.children)
			
			if (!htmlVoidElements.includes(tagName))
				output += `</${tagName}>`
			break
			case 'text':
			output += escape_text(n.value)
			break
			case 'comment':
			// do we check for allowraw here? TODO
			output += "<!-- -->"
			break
			case 'raw':
			if (allowRaw)
				output += n.value
			break;
			default:
			throw new Error(`Cannot compile ‘${n.type}’ node`)
		}
	}
	
	all(tree.children)
	
	let parser = document.createElement('div')
	parser.innerHTML = output
	return parser
}
