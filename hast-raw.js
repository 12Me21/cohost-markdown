import {htmlVoidElements} from './libs.js'
import {serializeAttributes} from './attributes.js'

const escape_text = text=>{
	// any others needed?
	return text.replace(/&/g, "&amp;").replace(/</g, "&lt;")
}

export default function({allowRaw}) {
	this.Compiler = function raw(tree) {
		let output = ""
		
		const all = (list)=>{
			if (list) for (const n of list) switch (n.type) {
				case 'element':
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
	
}
