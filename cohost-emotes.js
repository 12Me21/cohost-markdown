import {unistVisit} from './libs.js'

const EMOTES = {
	'chunks':      {url:'chunks',cohost_plus:false},
	'eggbug':      {url:'eggbug',cohost_plus:false},
	'sixty':       {url:'sixty',cohost_plus:false},
	'unyeah':      {url:'unyeah',cohost_plus:false},
	'yeah':        {url:'yeah',cohost_plus:false},
	
	'host-aww':    {url:'host-aww',cohost_plus:true},
	'host-cry':    {url:'host-cry',cohost_plus:true},
	'host-evil':   {url:'host-evil',cohost_plus:true},
	'host-frown':  {url:'host-frown',cohost_plus:true},
	'host-joy':    {url:'host-joy',cohost_plus:true},
	'host-love':   {url:'host-love',cohost_plus:true},
	'host-nervous':{url:'host-nervous',cohost_plus:true},
	'host-plead':  {url:'host-plead',cohost_plus:true},
	'host-shock':  {url:'host-shock',cohost_plus:true},
	'host-stare':  {url:'host-stare',cohost_plus:true},
}

// oh i bet this is a library ?
const custom = function(pattern, func) {
	return tree=>{
		unistVisit(tree, 'text', (node, index, parent)=>{
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
					//tagName: 'CustomEmoji',
					tagName: 'img',
					properties: {
						name,
						class: 'emote',
						//url: `emotes/${emote.url}.webp`,
						src: `emotes/${emote.url}.webp`,
					},
				})
			else {
				// note: this results in text nodes being fragmented even if the emote is invalid
				nodes.push({type: 'text', value: match[index]})
			}
		})
		parent.children.splice(index, 1, ...nodes)
		return ['skip', index+nodes.length]
	})
}
