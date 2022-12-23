export default function sanitize({schema:{attributes, aliases, elements}}) {
	return node=>{
		if (node.nodeType==Node.TEXT_NODE)
			return
		if (node.nodeType!=Node.ELEMENT_NODE)
			return 'prune'
		
		let name = node.tagName
		let def = elements[name]
		if (def===false)
			return 'prune'
		if (!def)
			return 'flatten'
		
		for (let {name, value} of node.attributes) {
			let newname = aliases[name] || name
			
			let adef = def.attributes && def.attributes[newname] || attributes[newname]
			if (!adef) {
				node.removeAttribute(name)
				continue
			}
			if (adef===1 || adef===value) {
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
	}
}
