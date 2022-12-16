import {unistVisit} from './libs.js'

export default function CohostImageTitles() {
	return tree=>{
		unistVisit(tree, {type: 'element', tagName: 'img'}, (elem)=>{
			if (elem.properties?.alt)
				elem.properties.title = elem.properties.alt
		})
	}
}
