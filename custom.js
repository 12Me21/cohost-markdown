import {ELEMENTS, ALIASES} from './schema.js'
import Filter from './walk-tree.js'

// this regex is an optimied version of the one that cohost uses
// (which they got from twitter's ‘twitter-text’ library)

const MENTION_REGEX = /(^|[^\w@/\\])([@＠][a-zA-Z0-9-]{3,})(?!:[/][/]|[@＠\xC0-\xD6\xD8-\xF6\xF8-\xFF\u0100-\u024F\u0253\u0254\u0256\u0257\u0259\u025B\u0263\u0268\u026F\u0272\u0289\u028B\u02BB\u0300-\u036F\u1E00-\u1EFF])/

// due to several mistakes in their modified "preceeding chars" regex:
// /(:^|[^a-zA-Z0-9_!#$%&*@＠\\/]|(?:^|[^a-zA-Z0-9_+~.-\\/]))/,
// it ends up being equivalent to /(^|[^\w@\\/])/

// the list of escaped chars at the end was called ‘latinAccentChars’
// i have no idea how this list was derived

const EMOTE_REGEX = /:([-\w]+):/

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



function warn(settings, message) {
	if (settings.warn) {
		settings.warn(message)
	}
}

function filter_element(settings, element) {
	// check if element is allowed
	const name = element.tagName
	const schema = ELEMENTS[name]
	if (schema===false) {
		warn(settings, `removed element: <${name}>`)
		return 'prune'
	}
	if (!schema) {
		warn(settings, `removed element: <${name}>`)
		return 'flatten'
	}
	
	let {attributes, required} = schema
	
	// filter attributes
	for (const name of element.getAttributeNames())
		process_attr(settings, element, name, attributes[name])
	
	// add required attributes
	if (required)
		for (const name in required)
			element.setAttribute(name, required[name])
}


function process_attr(settings, elem, name, schema) {
	if (schema==null) {
		warn(settings, `removed attribute: <${elem.tagName} ${name}="${elem.getAttribute(name)}">`)
		elem.removeAttribute(name)
		return
	}
	if (schema===-1) {
		warn(settings, `allowed attribute: <${elem.tagName} ${name}="${elem.getAttribute(name)}">`)
		//console.warn('[ALLOWED] bad attribute:', name, 'in', elem)
	}
	// url, sanitize
	if (schema===2 || schema===3) {
		let url = elem.getAttribute(name) || ""
		// this replicates the behavior of micromark-util-sanitize-uri or hast-util-sanitize
		if (/^(?!https:|http:)[^?#/:]*:/.test(url)) {
			warn(settings, `removed bad url: <${elem.tagName} ${name}="${elem.getAttribute(name)}">`)
			elem.removeAttribute(name)
			return
		}
		// replace // with https:// so we don't rely on the page's scheme
		if (url.startsWith("//")) {
			url = "https:"+url
			elem.setAttribute(name, url)
		}
	} else if (schema===10) {
		const value = elem.getAttribute(name)
		elem.setAttribute(name, `user-content-${value}`)
	}
	const newname = ALIASES[name]
	if (newname) {
		const value = elem.getAttribute(name)
		elem.removeAttribute(name)
		elem.setAttribute(newname, value)
		warn(settings, `renamed attribute: <${elem.tagName} ${name}="${value}"> to ${newname}`)
	}
}



// this is bad but it replicates what cohost does
function footnotes(settings, element) {
	if (element.tagName=='A' && element.hasAttribute('data--markdownlink')) {
		if (element.id.includes('fnref'))
			return 'flatten'
		if (element.href.includes('fnref'))
			return 'prune'
	} else if (element.tagName=='H2') {
		if (element.id.includes('footnote-label') && element.className=="sr-only") {
			let hr = document.createElement('hr')
			hr.style.marginBottom = "-0.5rem"
			hr.setAttribute('aria-label', "Footnotes")
			return [hr]
		}
	}
}

// this is bad but it replicates what cohost does
function imageTitles(settings, element) {
	if (element.tagName=='IMG' && element.hasAttribute('data--markdownlink')) {
		if (element.alt)
			element.title = element.alt
	}
}

// based on `rehype-external-links`

const protocols = ['http', 'https']

function externalLinks({externalLinksInNewTab}, element) {
	if (element.tagName=='A') {
		let url = element.getAttribute('href') // need to use this, .href is different.
		if (url==null)
			return
		
		let absolute = /^([a-zA-Z](?!:\\)[a-zA-Z0-9+\-.]*?):/.exec(url)
		
		if (absolute && protocols.includes(absolute[1])) {
			if (externalLinksInNewTab) {
				element.target = '_blank'
				element.rel = 'nofollow noopener noreferrer'
			} else {
				element.target = '_self'
				element.rel = 'nofollow'
			}
		}
	}
}

const FIXED_CUTOFF = +new Date("2022-06-29T18:00Z")
const VAR_CUTOFF = +new Date("2022-11-14T06:00Z")

function filterCss(settings, element) {
	if (element.hasAttribute('style')) {
		let date = +settings.date
		let st = element.style
		if (date >= VAR_CUTOFF)
			for (let prop of st)
				if (prop.startsWith('--')) {
					st.removeProperty(prop)
					warn(settings, `removed css variable: ${prop}`)
				}
		if (date >= FIXED_CUTOFF)
			if (/fixed/i.test(st.position)) {
				warn(settings, `removed position:fixed`)
				st.position = 'static'
			}
	}
}

// todo: replicate this bug:
/*
@12-

@12-@12- ← is not parsed because they use a dumb check instead of lookahead

@12-@12-@12-

*/

function mentions(settings, text) {
	let parts = text.split(MENTION_REGEX)
		if (parts.length<=1)
			return
	let list = []
	for (let i=0; i<=parts.length-3; i+=3) {
		let text = parts[i]+parts[i+1]
		let mention = parts[i+2]
		let e = document.createElement('a')
		let handle = mention.slice(1)
		e.className = 'mention'
		e.href = `https://cohost.org/${handle}`
		e.textContent = "@"+handle
		list.push(text, e)
	}
	list.push(parts[parts.length-1])
	return list
}

function emotes({hasCohostPlus}, text){
	let parts = text.split(EMOTE_REGEX)
	if (parts.length<=1)
		return
	let list = []
	// TODO: currently, invalid emotes will create extra text nodes. this is probably fine, but the original code doesn't.
	// however, we stil need to MATCH invalid emotes, since
	// cohost fails on e.g. ":invalid:eggbug:"
	
	for (let i=0; i<=parts.length-2; i+=2) {
		let text = parts[i]
		let name = parts[i+1]
		let emote = EMOTES[name]
		if (emote && (hasCohostPlus || !emote.cohost_plus)) {
			let img = document.createElement('img')
			img.className = 'emote'
			img.src = `emotes/${emote.url}.webp` // yeah yeah we're using webp, oh well. The files were smaller, ok ?
			img.alt = `:${name}:`
			list.push(text, img)
		} else {
			list.push(text+":"+name+":")
		}
	}
	list.push(parts[parts.length-1])
	return list
}	

export default function filter(root, settings) {
	Filter(root, settings, [
		imageTitles,
		footnotes,
		filter_element,
		filterCss,
		// embeds
	], [
		mentions,
		emotes,
	])
}
