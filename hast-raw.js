import {toParse5} from './libs.js'

export const voidElements = {
	__proto__:null,
	area:1,base:1,basefont:1,bgsound:1,br:1,col:1,command:1,embed:1,
	frame:1,hr:1,image:1,img:1,input:1,isindex:1,keygen:1,link:1,
	menuitem:1,meta:1,nextid:1,param:1,source:1,track:1,wbr:1,
}

const escape_text = text=>{
	return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;")
}

const escape_qattr = text=>{
	return text.replaceAll("&", "&amp;").replaceAll("\"", "&quot;")
}

function raw(tree) {
	let output = ""
	
	const all = (list)=>{
		if (list) for (const n of list) switch (n.type) {
			case 'element':
			const {tagName, properties} = n
			let atts = toParse5({
				tagName, type:'element',
				properties, children:[],
			}).attrs
			
			output += "<"+tagName+" "+Object.entries(atts).map(([k,v])=>{
				return `${k}="${escape_qattr(v)}"` // TODO; escape the name
			}).join(" ")+">"
			
			all(n.children)
			
			if (!(tagName in voidElements))
				output += `</${tagName}>`
			break
			case 'text':
			output += escape_text(n.value)
			break
			case 'comment':
			output += "<!-- -->"
			break
			case 'raw':
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

export default function() {
	this.Compiler = raw
}
