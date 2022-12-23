const EMOTES = {
	__proto__:null,
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

const EMOTE_REGEX = /:(chunks|eggbug|sixty|unyeah|yeah):/g

const PLUS_REGEX = /:(chunks|eggbug|sixty|unyeah|yeah|host-(?:aww|cry|evil|frown|joy|love|nervous|plead|shock|stare)):/g

export default function emote({hasCohostPlus}){
	return node=>{
		if (node.nodeType!=Node.TEXT_NODE)
			return
		
		let parts = node.data.split(hasCohostPlus ? PLUS_REGEX : EMOTE_REGEX)
		if (parts.length<=1)
			return
		let list = []
		for (let i=0; i<=parts.length-2; i+=2) {
			let text = parts[i]
			let name = parts[i+1]
			let emote = EMOTES[name]
			let img = document.createElement('img')
			img.className = 'emote'
			img.src = `emotes/${emote.url}.webp`
			img.alt = `:${name}:`
			list.push(text, img)
		}
		list.push(parts[parts.length-1])
		return list
		
	}
}	
