import {visit, SKIP} from 'unist-util-visit'

export default function CohostImageTitles() {
	return tree=>{
		visit(tree, {type: 'element', tagName: 'img'}, (elem)=>{
			if (elem.properties?.alt)
				elem.properties.title = elem.properties.alt
		})
	}
}
