import {ELEMENTS, ALIASES} from './schema.js'

export default function sanitize() {
	return node=>{
		if (node.nodeType==Node.TEXT_NODE)
			return
		if (node.nodeType!=Node.ELEMENT_NODE)
			return 'prune'
		
		// check if element is allowed
		const name = node.tagName
		const def = ELEMENTS[name]
		if (def===false) {
			//console.warn('[REMOVED] bad node:', node)
			return 'prune'
		}
		if (!def) {
			//console.warn('[REMOVED] bad node:', node)
			return 'flatten'
		}
		
		// filter attributes
		const ATTRS = def.attributes
		for (const name of node.getAttributeNames())
			process_attr(node, name, ATTRS)
		
		// add required attributes
		const req = def.required
		if (req)
			for (const name in req)
				node.setAttribute(name, req[name])
	}
}

function process_attr(elem, name, ATTRS) {
	const adef = ATTRS[name]
	if (adef==null) {
		elem.removeAttribute(name)
		//console.warn('[REMOVED] bad attribute:', name, 'in', elem)
		return
	}
	if (adef==-1) {
		//console.warn('[ALLOWED] bad attribute:', name, 'in', elem)
	}
	// url, sanitize
	if (adef===2 || adef===3) {
		let url = elem.getAttribute(name) || ""
		// this replicates the behavior of micromark-util-sanitize-uri or hast-util-sanitize
		if (/^(?!https:|http:)[^?#/:]*:/.test(url)) {
			console.warn('[REMOVED] bad url:', name, 'in', elem)
			elem.removeAttribute(name)
			return
		}
		// replace // with https:// so we don't rely on the page's scheme
		if (url.startsWith("//")) {
			url = "https:"+url
			elem.setAttribute(name, url)
		}
	} else if (adef===10) {
		const value = elem.getAttribute(name)
		elem.setAttribute(name, `user-content-${value}`)
	}
	const newname = ALIASES[name]
	if (newname) {
		const value = elem.getAttribute(name)
		elem.removeAttribute(name)
		elem.setAttribute(newname, value)
	}
}
