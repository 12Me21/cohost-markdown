import {visit, SKIP} from 'unist-util-visit'

const FIXED_CUTOFF = +new Date("2022-06-29T18:00Z")
const VAR_CUTOFF = +new Date("2022-11-14T06:00Z")

import StyleToObject from 'style-to-object'

export default function ElementFilter({date=Infinity, disableEmbeds}) {
	return tree=>{
		visit(tree, 'element', (elem, index, parent)=>{
			let props = elem.properties || {}
			// [style] -> filter
			if ('string'==typeof props.style) {
				try {
					let found = false
					const style = StyleToObject(props.style)
					if (style) {
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
						if (found) {
							elem.properties.style = Object.entries(style).map(pair=>pair.join(':')).join(";")
						}
					}
				} catch (e) {
					console.warn('error while filtering styles', e)
				}
			}
			// img -> copy alt to title
			let tag = elem.tagName
			if ('img'==tag && props.alt) {
				elem.properties.title = props.alt
				return
			}
			// a[id*=fnref] -> replace with children
			if ('a'==tag && props.id?.includes('fnref')) {
				parent.children.splice(index, 1, ...elem.children)
				return [SKIP, index]
			}
			// a[href*=fnref] -> remove
			if ('a'==tag && props.href?.includes('fnref')) {
				parent.children.splice(index, 1)
				return [SKIP, index]
			}
			// h2[id*=footnote-label] -> replace with <hr>
			if ('h2'==tag && props.id?.includes('footnote-label')) {
				const elem = {
					tagName: 'hr',
					type: 'element',
					children: [],
					properties: {
						'aria-label': 'Footnotes',
						'style': 'margin-bottom: -0.5rem;',
					},
				}
				parent.children.splice(index, 1, elem)
				return
			}
		})
	}
}
