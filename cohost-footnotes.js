// for compat, we cant change this
export default function CohostFootnotes(elem) {
	if ('a'==elem.tagName && elem.properties?.id?.includes('fnref'))
		return 'children'
	// bug: this can be triggered by [test](https://example.com/fnref)
	// should use dedicated data properties to check this
	if ('a'==elem.tagName && elem.properties?.href?.includes('fnref'))
		return 'skip'
	if ('h2'==elem.tagName && elem.properties?.id?.includes('footnote-label'))
		return {
			type: 'element',
			tagName: 'hr',
			properties: {
				'aria-label': 'Footnotes',
				'style': "margin-bottom: -0.5rem;",
			},
			children: [],
		}
}
