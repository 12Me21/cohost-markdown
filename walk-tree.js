// 'flatten':
// replace this node with its children.
// this happens BEFORE the next callback cycle.
// i.e. the next value you get will be the (former) first child of the removed node.
// and its parent will be set to the removed node's parent

// <Array>
// replace the node with the contents of the array
// these nodes will NOT be processed (on the next callback cycle, you will get the node after the removed node (its next sibling, or parents next sibling, etc.) i.e. the node after the inserted nodes.
//  NOTE: for text nodes, string items in this array WILL be processed by later filters. this is because often you're going to be replacing parts of a text node with elements, and leaving the surrounding text, and you want to process those "new" text nodes with later processors. if you want to disable this, you can, i guess, return a text node instead of a string, or something.

// 'prune':
// remove the node and its children
// next callback: the node after the removed node
// hm this is equivalent to passing an empty array..

function process_text(settings, node, filters) {
	let parts = [node.data]
	for (let filter of filters) {
		for (let i=0; i<parts.length; i++) {
			let n = parts[i]
			if ('string'==typeof n) {
				
				let ret = filter(settings, n)
				if (Array.isArray(ret)) {
					parts.splice(i, 1, ...ret)
					i += ret.length-1
				} else if (ret=='prune') {
					parts.splice(i, 1)
					i--
				}
				
			}
		}
		
	}
	if (parts.length!=1 || parts[0]!==node.data)
		return parts
}

export default function walk(root, settings, callbacks, textcallbacks) {
	let ops = []
	
	const walker = root.ownerDocument.createTreeWalker(
		root, NodeFilter.SHOW_ALL,
		(node)=>{
			let res
			switch (node.nodeType) {
			case Node.TEXT_NODE:
				res = process_text(settings, node, textcallbacks)
				break
			case Node.ELEMENT_NODE:
				for (let cb of callbacks) {
					res = cb && cb(settings, node)
					if (res)
						break
				}
				break
			default:
				res = 'prune'
				break
			}
			if (res) {
				ops.push([res, node])
				return res=='flatten' ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_REJECT
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
