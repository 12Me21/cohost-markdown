import {unistVisit} from './libs.js'

export default function plugin() {
	return tree=>{
		unistVisit(tree, {type: 'element', tagName: 'a'}, (elem, index, parent) =>{
			const ch = elem.children
			// if element has no siblings, and 1 child which is a text-node
			if (parent.children.length==1 && ch.length==1 && ch[0].type=='text')
				// if element has same start offset as child
				if (elem.position && ch[0].position && ch[0].position.start.offset==elem.position.start.offset) {
					// turn parent into div ?
					if ('element'==parent.type)
						parent.tagName = 'div'
					// replace node with embed
					let href = elem.properties?.href
					parent.children.splice(index, 1, {
						type: 'element',
						//tagName: 'IframelyEmbed',
						tagName: 'div',
						properties: {
							url: href,
							class: 'embed',
						},
						children: [{type:'text', value:href}],
					})
				}
		})
	}
}
