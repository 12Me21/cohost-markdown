/*import imageTitles from './cohost-image-titles.js'
import footnoteHack from './cohost-footnotes.js'
//import cohostFilterCss from './cohost-filter-css.js'
// todo: these will have render funcs too
import mentions from './cohost-mentions.js'
//import embeds from './cohost-embeds.js'
import emotes from './cohost-emotes.js'

import deepmerge from './deepmerge.js'

import externalLinks from './external-links.js'*/



/*const HTML_ALLOW = deepmerge(Rehype.defaultSchema, {
	tagNames: ['video', 'audio', 'aside'],
	attributes: {
		'*': ['style'],
	},
})*/

window.debug = function(token, text) {
	let value = this.sliceSerialize(token)
	//console.log(text?'TEXT':'FLOW', token)
	//console.log(value)
	this.raw(value)//this.encode(value))
}

import {micromark, gfm, gfmHtml} from './libs.js'
import sanitize from './sanitize2.js'

// disable gfm-tagfilter
let gh = gfmHtml()
//delete gh.exit.htmlFlowData
//delete gh.exit.htmlTextData

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
	console.log(html)
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
