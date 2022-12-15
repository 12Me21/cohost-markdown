import {visit, SKIP} from 'unist-util-visit'
import StyleToObject from 'style-to-object'

const FIXED_CUTOFF = +new Date("2022-06-29T18:00Z")
const VAR_CUTOFF = +new Date("2022-11-14T06:00Z")

export default function filterCss({date}) {
	date = +date
	return tree=>{
		visit(tree, "element", (elem, index, parent) => {
			if ('string'!=typeof elem.properties?.style)
				return
			try {
				let found = false
				const style = StyleToObject(elem.properties.style)
				if (!style)
					return
				for (const prop in style) {
					if (date >= VAR_CUTOFF && prop.startsWith("--")) {
						delete style[prop]
						found = true
					}
				}
				if (date >= FIXED_CUTOFF && /fixed/i.test(style.position)) {
					style.position = 'static'
					found = true
				}
				if (!found)
					return
				// todo: this sucks
				elem.properties.style = Object.entries(style).map(pair=>pair.join(':')).join(";")
			} catch (e) {
				console.warn('error while filtering styles', e)
			}
		})
	}
}
