import {visit, SKIP} from 'unist-util-visit'

const EMOTES = {
	'chunks':      {url:'f59b84127fa7b6c48b6c.png',cohost_plus:false},
	'eggbug':      {url:'41454e429d62b5cb7963.png',cohost_plus:false},
	'sixty':       {url:'9a6014af31fb1ca65a1f.png',cohost_plus:false},
	'unyeah':      {url:'5cf84d596a2c422967de.png',cohost_plus:false},
	'yeah':        {url:'014b0a8cc35206ef151d.png',cohost_plus:false},
	'host-aww':    {url:'9bb403f3822c6457baf6.png',cohost_plus:true},
	'host-cry':    {url:'530f8cf75eac87716702.png',cohost_plus:true},
	'host-evil':   {url:'cb9a5640d7ef7b361a1a.png',cohost_plus:true},
	'host-frown':  {url:'99c7fbf98de865cc9726.png',cohost_plus:true},
	'host-joy':    {url:'53635f5fe850274b1a7d.png',cohost_plus:true},
	'host-love':   {url:'c45b6d8f9de20f725b98.png',cohost_plus:true},
	'host-nervous':{url:'e5d55348f39c65a20148.png',cohost_plus:true},
	'host-plead':  {url:'fa883e2377fea8945237.png',cohost_plus:true},
	'host-shock':  {url:'bfa6d6316fd95ae76803.png',cohost_plus:true},
	'host-stare':  {url:'a09d966cd188c9ebaa4c.png',cohost_plus:true},
}

// oh i bet this is a library ?
const custom = function(pattern, func) {
	return tree=>{
		visit(tree, 'text', (node, index, parent)=>{
			const match = node.value.match(pattern)
			if (match) {
				const split = node.value.split(pattern)
				if (split.length != match.length+1)
					return
				return func(match, split, node, index, parent)
			}
		})
	}
}

const EMOTE_REGEX = /:[\w-]+:/g

export default function emote({hasCohostPlus}){
	return custom(EMOTE_REGEX, (match, split, node, index, parent)=>{
		const nodes = []
		split.forEach((textbefore, index)=>{
			nodes.push({type:'text', value:textbefore})
			if (index >= match.length)
				return
			
			const name = match[index].slice(1, -1)
			let emote = EMOTES[name]
			
			if (emote && !(emote.cohost_plus && !hasCohostPlus))
				nodes.push({
					type: 'element',
					tagName: 'CustomEmoji',
					properties: {
						name,
						url: `https://cohost.org/static/${emote.url}`,
					},
				})
			else {
				// note: this results in text nodes being fragmented even if the emote is invalid
				nodes.push({type: 'text', value: match[index]})
			}
		})
		parent.children.splice(index, 1, ...nodes)
		return [SKIP, index+nodes.length]
	})
}
