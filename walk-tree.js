// 'flatten':
// replace this node with its children.
// this happens BEFORE the next callback cycle.
// i.e. the next value you get will be the (former) first child of the removed node.
// and its parent will be set to the removed node's parent

// <Array>
// replace the node with the contents of the array
// these nodes will NOT be processed (on the next callback cycle, you will get the node after the removed node (its next sibling, or parents next sibling, etc.) i.e. the node after the inserted nodes.

//  NOTE: for text nodes, string items in this array WILL be processed by later filters. this is because often you're going to be replacing parts of a text node with elements, and leaving the surrounding text, and you want to process those "new" text nodes with later processors. if you want to disable this, you can, i guess, return a text node instead of a string, or something.

export default function walk(root, settings, callbacks, textcallbacks) {
	let prev, replace
	
	root.ownerDocument.createTreeWalker(
		root, NodeFilter.SHOW_ALL,
		(node)=>{
			if (replace)
				prev.replaceWith(...replace)
			
			prev = node
			replace = undefined
			
			switch (node.nodeType) {
			case Node.TEXT_NODE:
				let parts = [node.data]
				for (let filter of textcallbacks) {
					for (let i=0; i<parts.length; i++) {
						let n = parts[i]
						if ('string'==typeof n) {
							let ret = filter(settings, n)
							if (ret) {
								parts.splice(i, 1, ...ret)
								i += ret.length-1
								replace = parts // flag
							}
						}
					}
				}
				return
				
			case Node.ELEMENT_NODE:
				for (let cb of callbacks) {
					replace = cb && cb(settings, node)
					if (replace==='flatten') {
						replace = node.childNodes
						return
					} else if (replace)
						return NodeFilter.FILTER_REJECT
				}
				return
				
			default:
				replace = []
				return NodeFilter.FILTER_REJECT
			}
			
		}
	).nextNode() // cheating
	
	if (replace)
		prev.replaceWith(...replace)
}
