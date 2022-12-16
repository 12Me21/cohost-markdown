import {unistVisit} from './libs.js'

export default function CohostFootnotes() {
	return tree=>{
		unistVisit.visit(tree, 'element', (elem, index, parent)=>{
			if ('a'==elem.tagName && elem.properties?.id?.includes('fnref')) {
				parent.children.splice(index, 1, ...elem.children)
				return ['skip', index]
			}
			if ('a'==elem.tagName && elem.properties?.href?.includes('fnref')) {
				parent.children.splice(index, 1)
				return ['skip', index]
			}
			if ('h2'==elem.tagName && elem.properties?.id?.includes('footnote-label')) {
				const elem = {
					type: 'element',
					tagName: 'hr',
					properties: {
						'aria-label': 'Footnotes',
						'style': "margin-bottom: -0.5rem;",
					},
					children: [],
				}
				parent.children.splice(index, 1, elem)
			}
		})
	}
}
