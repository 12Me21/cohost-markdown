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
			
			ok: {
				if (adef===1 || adef===value)
					break ok
				else if (adef===2) {
					// this is bad, but it's equivalent to the original
					let scheme = /^[^?#/]*?:/.exec(value)
					if (!scheme || scheme[0]=="http:" || scheme[0]=="https:")
						break ok
				}
				node.removeAttribute(name)
				continue
			}
			if (newname != name) {
				node.removeAttribute(name)
				node.setAttribute(newname, value)
			}
		}
		let req = def.required
		if (req)
			for (let name in req)
				node.setAttribute(name, req[name])
	}
}
