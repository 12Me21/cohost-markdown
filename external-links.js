// derived from rehype-external-links

const protocols = ['http', 'https']

export default function externalLinks(node, {externalLinksInNewTab}) {
	if (node.tagName=='a' && node.properties && 'string'==typeof node.properties.href) {
		const url = node.properties.href
		
		if (url.startsWith("//"))
			node.properties.href = url = "https:"+url
		
		let absolute = /^([a-zA-Z](?!:\\)[a-zA-Z0-9+\-.]*?):/.match(url)
		if (absolute && protocols.includes(absolute[1])) {
			let target, rel
			if (externalLinksInNewTab) {
				target = '_blank'
				rel = ['nofollow', 'noopener', 'noreferrer']
			} else {
				target = '_self'
				rel = ['nofollow']
			}
			node.properties.target = target
			node.properties.rel = rel
		}
	}
}
