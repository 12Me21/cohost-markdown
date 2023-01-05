// this is bad but it replicates what cohost does
export default function CohostImageTitles() {
	return node=>{
		if (node.nodeType==Node.ELEMENT_NODE) {
			if (node.tagName=='IMG' && node.hasAttribute('data--markdownlink')) {
				if (node.alt)
					node.title = node.alt
			}
		}
	}
}
