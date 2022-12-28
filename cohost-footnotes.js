export default function CohostFootnotes() {
	return node=>{
		if (node.nodeType==Node.ELEMENT_NODE) {
			if (node.tagName=='A') {
				if (node.hasAttribute('data-footnote-ref'))
					return 'flatten'
				if (node.hasAttribute('data-footnote-backref'))
					return 'prune'
			} else if (node.tagName=='H2') {
				if (node.id=='footnote-label') {
					let hr = document.createElement('hr')
					hr.style.marginBottom = "-0.5rem"
					hr.setAttribute('aria-label', "Footnotes")
					return [hr]
				}
			}
		}
	}
}
