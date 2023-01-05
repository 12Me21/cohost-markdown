// based on `rehype-external-links`

const protocols = ['http', 'https']

export default function externalLinks({externalLinksInNewTab}) {
	return node=>{
		if (node.nodeType==Node.ELEMENT_NODE && node.nodeName=='A') {
			let url = node.getAttribute('href') // need to use this, .href is different.
			if (url==null)
				return
			
			let absolute = /^([a-zA-Z](?!:\\)[a-zA-Z0-9+\-.]*?):/.exec(url)
			
			if (absolute && protocols.includes(absolute[1])) {
				if (externalLinksInNewTab) {
					node.target = '_blank'
					node.rel = 'nofollow noopener noreferrer'
				} else {
					node.target = '_self'
					node.rel = 'nofollow'
				}
			}
		}
	}
}
