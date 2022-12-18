import {htmlVoidElements} from './libs.js'
import {serializeAttributes} from './attributes.js'

const escape_text = text=>{
	// any others needed?
	return text.replace(/&/g, "&amp;").replace(/</g, "&lt;")
}

export default function(tree, settings, elementPre, textPre, elementPost) {
	let {allowRaw} = settings
	let output = ""
	let disabled = new Set() // disabled processors to prevent infinite loops
	
	const all = (list)=>{
		if (list) nodes:for (let n of list) switch (n.type) {
			
			case 'element':
			if (elementPre)
				for (let b of elementPre) {
					if (disabled.has(b))
						continue
					let res = b(n, settings)
					if (res=='skip')
						continue nodes
					if (res=='children') {
						disabled.add(b)
						all(n.children)
						disabled.delete(b)
						continue nodes
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
			let text = n.value
			if (textPre)
				for (let b of textPre) {
					if (disabled.has(b))
						continue
					let res = b(text, settings)
					if (Array.isArray(res)) {
						disabled.add(b)
						all(res)
						disabled.delete(b)
						continue nodes
					}
				}
			output += escape_text(text)
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
