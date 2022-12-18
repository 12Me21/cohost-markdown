function mergeable(value) {
	return value && 'object'==typeof value
}

function clone(value) {
	return mergeable(value) ? deepmerge(new value.constructor(), value) : value
}

const en = {}.propertyIsEnumerable, has = en.call.bind(en)

function merge(target, source) {
	let destination = {}
	if (mergeable(target))
		for (let key in target) {
			let val
			if (has(source, key)) {
				//delete source[key]
				val = source[key]
				if (mergeable(val)) {
					let old = has(target, key) ? target[key] : new val.constructor()
					val = deepmerge(old, val)
				}
			} else {
				val = clone(target[key])
			}
			destination[key] = val
		}
	for (let key in source)
		if (!has(destination, key))
			destination[key] = source[key]
	return destination
}

export default function deepmerge(target, source) {
	let sourceIsArray = Array.isArray(source)
	let targetIsArray = Array.isArray(target)
	if (sourceIsArray==targetIsArray) {
		if (sourceIsArray)
			return target.concat(source)
		else
			return merge(target, source)
	} else
		return clone(source)
}

/*import sanitize, {defaultSchema} from 'rehype-sanitize'

import dm2 from 'deepmerge'

//console.log(JSON.stringify(defaultSchema, null, 1))

let b = dm2(defaultSchema, {
	tagNames: ['video', 'audio', 'aside'],
	attributes: {
		'*': ['style'],
	},
})

let a = deepmerge(defaultSchema, {
	tagNames: ['video', 'audio', 'aside'],
	attributes: {
		'*': ['style'],
	},
})

//console.log(JSON.stringify(b, null, 1))

//console.log(JSON.stringify(a, null, 1))
console.log(JSON.stringify(defaultSchema, null, 1))
*/
