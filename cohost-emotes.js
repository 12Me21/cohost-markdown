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

const EMOTE_REGEX = /:([\w-]+):/g

export default function emote(text, {hasCohostPlus}){
	const list = []
	
	void text.replace(EMOTE_REGEX, (match, name, offset)=>{
		const start = offset
		const end = offset + match.length
		let emote = EMOTES[name]
		if (emote && !(emote.cohost_plus && !hasCohostPlus)) {
			
			list.push({emote, start, end})
		}
		return match
	})
	
	if (list.length) {
		const nodes = []
		let last = 0
		list.forEach(({start, end, emote}, i, list)=>{
			nodes.push({type:'text', value:text.slice(last, start)})
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
			last = end
			if (i == list.length-1)
				nodes.push({type:'text', value: text.slice(last)})
		})
		return nodes
	}
}	
