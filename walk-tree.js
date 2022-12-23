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
				let res = cb && cb(node)
				if (res) {
					ops.push([res, node])
					return res=='flatten' ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_REJECT
				}
			}
			return NodeFilter.FILTER_ACCEPT
		}
	)
	let node
	do {
		node = walker.nextNode()
		for (let [op, node] of ops) {
			if (op==='prune') // this will NOT iterate over the removed children
				node.remove()
			else if (op==='flatten') // this WILL iterate over the children
				node.replaceWith(...node.childNodes)
			else if (Array.isArray(op)) // this will NOT iterate over the newly added children
				node.replaceWith(...op)
			else
				throw new TypeError('tree processor returned invalid value: '+res)
		}
		ops = []
	} while (node)
}
