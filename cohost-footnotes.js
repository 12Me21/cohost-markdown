// this is bad but it replicates what cohost does
export default function CohostFootnotes() {
	return node=>{
		if (node.nodeType==Node.ELEMENT_NODE) {
			if (node.tagName=='A') {
				if (node.id.includes('fnref'))
					return 'flatten'
				if (node.href.includes('fnref'))
					return 'prune'
			} else if (node.tagName=='H2') {
				if (node.id.includes('footnote-label')) {
					let hr = document.createElement('hr')
					hr.style.marginBottom = "-0.5rem"
					hr.setAttribute('aria-label', "Footnotes")
					return [hr]
				}
			}
		}
	}
}
