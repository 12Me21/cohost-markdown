// 'flatten':
// replace this node with its children.
// this happens BEFORE the next callback cycle.
// i.e. the next value you get will be the (former) first child of the removed node.
// and its parent will be set to the removed node's parent

// <Array>
// replace the node with the contents of the array
// these nodes will NOT be processed (on the next callback cycle, you will get the node after the removed node (its next sibling, or parents next sibling, etc.) i.e. the node after the inserted nodes.

// 'prune':
// remove the node and its children
// next callback: the node after the removed node
// hm this is equivalent to passing an empty array..

export default function walk(root, callbacks) {
	let ops = []
	
	const walker = root.ownerDocument.createTreeWalker(
		root, NodeFilter.SHOW_ALL,
		(node)=>{
			for (let cb of callbacks) {
				let res = cb(node)
				if (res==undefined) {
					continue
				} else if (res==='prune') {
					// this will NOT iterate over the removed children
					ops.push([res, node])
					return NodeFilter.FILTER_REJECT
				} else if (res==='flatten') {
					// this WILL iterate over the children
					ops.push([res, node])
					return NodeFilter.SKIP
				} else if (Array.isArray(res)) {
					// this will NOT iterate over the newly added children
					ops.push([res, node])
					return NodeFilter.FILTER_REJECT
				} else {
					throw new TypeError('tree processor returned invalid value: '+res)
				}
			}
			return NodeFilter.FILTER_ACCEPT
		}
	)
	while (1) {
		let node = walker.nextNode()
		for (let [op, node] of ops) {
			if (op==='prune')
				node.remove()
			else if (op==='flatten')
				node.replaceWith(...node.childNodes)
			else if (Array.isArray(op))
				node.replaceWith(...op)
		}
		ops = []
		if (!node)
			break
	}
}

/*function test(node) {
	console.log(node.tagName)
	if (node.tagName=='INPUT') {
		console.log('input parent:', node.parentNode)
		return
	}
	if (node.tagName=='LABEL')
		return 'flatten' // replace the node with its children
	if (node.previousElementSibling instanceof HTMLDivElement)
		return 'prune' // remove the node and its children
}

walk(document.body, test)
*/
