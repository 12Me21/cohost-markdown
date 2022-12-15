import {visit, SKIP} from 'unist-util-visit'

export default function CohostFootnotes() {
	return tree=>{
		visit(tree, 'element', (elem, index, parent)=>{
			if ('a'==elem.tagName && elem.properties?.id?.includes('fnref')) {
				parent.children.splice(index, 1, ...elem.children)
				return [SKIP, index]
			}
			if ('a'==elem.tagName && elem.properties?.href?.includes('fnref')) {
				parent.children.splice(index, 1)
				return [SKIP, index]
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
