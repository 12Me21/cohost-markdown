import {defaultSchema} from './schema.js'

const own = {}.hasOwnProperty, has = own.call.bind(own)

const ALLOW = (_,value)=>value

const NODE_SCHEMA_ALL = Object.freeze({data: ALLOW, position: ALLOW})

// lets get rid of this lookup tbl
const NODE_SCHEMA = {
	root: {
		__proto__: NODE_SCHEMA_ALL,
		children: all,
		data: ALLOW,
	},
	element: {
		__proto__: NODE_SCHEMA_ALL,
		tagName: handleTagName,
		properties: handleProperties,
		children: all,
	},
	text: {
		value() { return 'string'==typeof value ? value : "" },
		__proto__: NODE_SCHEMA_ALL,
	},
}

class SanitizerSchema {
	constructor(def) {
		this.strip = def.strip
		this.clobberPrefix = def.clobberPrefix
		this.clobber = def.clobber
		this.ancestors = def.ancestors
		this.protocols = def.protocols
		this.tagNames = def.tagNames
		this.attributes = def.attributes
		this.globalAttributes = def.globalAttributes
		this.require = def.required
	}
	sanitize(node) {
		let ctx = {type: 'root', children: []}
		
		if (node && 'object'==typeof node && node.type) {
			let replace = this.one(node, [])
			
			if (replace) {
				if (!Array.isArray(replace))
					return replace
				if (replace.length==1)
					return replace[0]
				ctx.children = replace
			}
		}
		
		return ctx
	}
	
	one(node, stack) {
		let type = node && node.type
		let replacement = {type: node.type}
		let result
		let replace
		
		let definition = NODE_SCHEMA[type]
		if (definition) {
			
			if ('function'==typeof definition)
				definition = definition(this, node)
			
			if (definition) {
				replace = true
				let allowed = definition
				
				for (let key in allowed) {
					result = allowed[key](this, node[key], node, stack)
					if (result == false) {
						replace = null
						// Set the non-safe value.
						replacement[key] = node[key]
					} else if (result != null) {
						replacement[key] = result
					}
				}
			}
		}
		
		if (replace)
			return replacement
		
		if (replacement.type!=='element' || this.strip.includes(replacement.tagName))
			return null
		
		return replacement.children
	}
	
	all(children, node, stack) {
		let results = []
		
		if (Array.isArray(children)) {
			if (node.type==='element')
				stack.push(node.tagName)
			
			for (let child of children) {
				let value = this.one(child, stack)
				if (value) {
					if ('length' in value)
						[].push.apply(results, value)
					else
						results.push(value)
				}
			}
			
			if (node.type==='element')
				stack.pop()
		}
		
		return results
	}
	
	handleProperties(props, node, stack) {
		let name = this.handleTagName(node.tagName, node, stack)
		let allowed = this.attributes[name]
		let result = {}
		if (props)
			for (let key in props) {
				let al = allowed[key]
				if (!al)
					continue
				let value = props[key]
				value = Array.isArray(value)
					? this.handlePropertyValues(value, key, definition)
					: this.handlePropertyValue(value, key, definition)
				if (value != null)
					result[key] = value
			}
		
		let reqs = name && this.required && this.required[name]
		if (reqs) {
			for (let key in reqs)
				if (!has(result, key))
					result[key] = reqs[key]
		}
		
		return result
	}
	
	handleTagName(tagName, _, stack) {
		if ('string'!=typeof tagName || !tagName || tagName==='*' || !this.tagNames.includes(tagName))
			return false
		
		// Some nodes can break out of their context if they don’t have a certain ancestor.
		if (this.ancestors[tagName]) {
			for (let an of this.ancestors[tagName])
				if (stack.includes(an))
					return tagName
			return false
		}
		return tagName
	}
	
	handlePropertyValues(values, prop, definition) {
		let result = []
		
		for (let value of values) {
			value = this.handlePropertyValue(value, prop, definition)
			if (value != null)
				result.push(value)
		}
		
		return result
	}
	
	handlePropertyValue(value, prop, definition) {
		if (('boolean'==typeof value || 'number'==typeof value || 'string'==typeof value) && this.safeProtocol(schema, value, prop) && (definition===true || definition===value)
		   ) {
			if (this.clobber.includes(prop))
				value = this.clobberPrefix + value
			return value
		}
	}
	
	safeProtocol(value, prop) {
		let protocols = this.protocols[prop]
		if (!protocols)
			return true
		let proto = /^([^?#/:]*?):/.match(value)
		if (!proto || protocols.includes(proto[1]))
			return true
	}
}
