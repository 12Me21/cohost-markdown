/*import imageTitles from './cohost-image-titles.js'
import footnoteHack from './cohost-footnotes.js'
//import cohostFilterCss from './cohost-filter-css.js'
// todo: these will have render funcs too
import mentions from './cohost-mentions.js'
//import embeds from './cohost-embeds.js'
import emotes from './cohost-emotes.js'

import deepmerge from './deepmerge.js'

import externalLinks from './external-links.js'*/




import {micromark, gfm, gfmHtml} from './libs.js'
import sanitize from './sanitize2.js'

// override gfm-tagfilter
const reFlow = /^<(\/?)(iframe|noembed|noframes|plaintext|title|textarea)(?=[\t\n\f\r />])/i
const reText = reFlow//new RegExp('^' + reFlow.source, 'i')
const debug = function(token, text) {
	let value = this.sliceSerialize(token)
	//console.log(text?'TEXT':'FLOW', token)
	value = value.replace(text ? reText : reFlow, '<$1no-way') //i had this set to `span` before, idk.. i still cant believe this actually works and i don't want to find out anymore.
	
	// a<textarea> <b>owo eeeeeeeeeeeee</div>owo
	// this shouldnt be bold. not sure how that works
	// perhaps we should like, turn <textarea> into <textarea-2> and then during sanitization run textContent=textContent. yeah that seems correct maybe.
	
	// <style><b>owo <hr>eeeeeeeeeeeee</style>owo
	// result: "<b>owo <hr>eeeeeeeeeeeeeowo" - plaintext (all of these are)
	// a<style><b>owo <hr>eeeeeeeeeeeee</style>owo
	// result: "a<b>owo eeeeeeeeeeeeeowo"
	// yeah i dont fucking know.
	
	// <xmp> <b>owo <hr>eeeeeeeeeeeeeowo<div style=color:red></xmp>aaaa
	// result: " owo eeeeeeeeeeeeeowoaaaa"
	// <xmp><b>owo <hr>eeeeeeeeeeeeeowo<div style=color:red></xmp>aaaa
	// result: "<b>owo eeeeeeeeeeeeeowoaaaa"
	// so... maybe it strips following tags?
	
	
	//console.log(value)
	this.raw(value)
}
let gh = gfmHtml()
gh.exit = {
	htmlFlowData(token) {
		debug.call(this, token)
	},
	htmlTextData(token) {
		debug.call(this, token, true)
	},
}

function start(text, {
	date = Infinity,
	hasCohostPlus = false,
	externalLinksInNewTab = true,
	disableHtml = false,
	disableEmbeds = false,
	disableGfm = !false,
}) {
	let html = micromark(text, {
		extensions: disableGfm ? null : [gfm({singleTilde:false})], // what does gfm() return/do? should we save the output and reuse?
		htmlExtensions: disableGfm ? null : [gh],
		
		allowDangerousHtml: !disableHtml,
		
		footnoteLabelTagName: 'hr',
		footnoteLabel: [],
		footnoteLabelProperties: {
			'aria-label': "Footnotes",
			'style': "margin-bottom: -0.5rem;",
		},
	})
	
	let div = document.createElement('div')
	//console.log(html)
	div.innerHTML = html
	
	sanitize(div)
	
	return div
}

//.use(Rehype.sanitize, HTML_ALLOW)
//.use(cohostFilterCss, {date})
//.use(Rehype.externalLinks, links)
//.use(CohostMentions)
//.use(disableEmbeds ? null : CohostEmbeds)
//.use(CohostEmotes, {hasCohostPlus})

const DISABLE_GFM_LINES = 256

const count_lines = function(text) {
	return text.match(/$/gm).length
}

function check(input) {
	// if any paragraph has ≥ 256 lines,
	// cohost disables github-flavored-markdown features
	let disableGfm, text
	if (Array.isArray(input)) {
		disableGfm = input.some(para=>count_lines(para)>=DISABLE_GFM_LINES)
		text = input.join("\n\n")
	} else {
		text = String(input) // nnh..
		disableGfm = count_lines(text)>=DISABLE_GFM_LINES
	}
	return {text, disableGfm}
}

export default function process(input, settings) {
	const {text, disableGfm} = check(input)
	
	settings = {
		__proto__: settings,
		disableGfm,
	}
	
	return start(text, settings)
}
