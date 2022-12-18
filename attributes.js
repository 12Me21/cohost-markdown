import {htmlAttributes, attributeInfo, space, comma} from './libs.js'

function stringifyEntities(value, escape) {
	return value.replace(escape, chr=>`&#${chr.charCodeAt()};`)
}

function join(value, info) {
	return info.commaSeparated ? comma(value) : space(value)
}

export function serializeAttributes(props) {
	const values = []
	
	for (const key in props) {
		if (props[key] != null) {
			const value = serializeAttribute(key, props[key])
			if (value)
				values.push(value)
		}
	}
	
	return values.join(" ")
}

function serializeAttribute(key, value) {
	const info = attributeInfo(htmlAttributes, key)
	
	if (value == null || ('number'==typeof value && Number.isNaN(value)))
		return ""
	
	if (Array.isArray(value))
		value = join(value, info)
	
	let name = info.attribute
	
	if (info.overloadedBoolean) {
		if (value === name || value === "")
			value = true
		else if ('string'!=typeof value)
			value = Boolean(value)
	} else if (info.boolean) {
		value = Boolean(value)
	}
	
	if (value===false)
		return ""
	
	// definitely returning something at this point
	
	name = stringifyEntities(name, /[\0\t\n\f\r "&'/<=>]/g)
	
	if (value===true)
		return name
	
	if ('object'==typeof value && 'length' in value) // why are we doing this AGAIN?
		value = join(value, info)
	else
		value = String(value)
	
	if (!value)
		return name
	
	value = stringifyEntities(value, /[\0"&]/g)
	
	return `${name}="${value}"`
}
