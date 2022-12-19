function kill_label(node) {
	if (node.tagName=='LABEL')
		return 'flatten'
	if (node.previousElementSibling instanceof HTMLDivElement)
		return 'prune'
}

function walk(root, callback=kill_label) {
	let ops = []
	
	const walker = root.ownerDocument.createTreeWalker(
		root, NodeFilter.SHOW_ALL,
		(node)=>{
			let res = callback(node)
			if (res==='prune') {
				ops.push([res, node])
				return NodeFilter.FILTER_REJECT
			} else if (res==='flatten') {
				ops.push([res, node])
				return NodeFilter.SKIP
			}
			return NodeFilter.FILTER_ACCEPT
		}
	)
	while (1) {
		let node = walker.nextNode()
		for (let [op,node] of ops) {
			if (op==='prune')
				node.remove()
			else if (op==='flatten')
				node.replaceWith(...node.childNodes)
		}
		ops = []
		if (!node)
			break
	}
}

walk(document.body)
