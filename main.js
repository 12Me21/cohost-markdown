import {default as heck} from './_libs.js'
const {Micromark, Gfm, GfmHtml} = heck

const gfm = Gfm({singleTilde:false})

const gh = GfmHtml({})
delete gh.exit.htmlFlowData
delete gh.exit.htmlTextData

import walk from './walk-tree.js'

import sanitize from './sanitize.js'
import * as ALLOW from './schema.js'

import footnotes from './cohost-footnotes.js'

import externalLinks from './external-links.js'

import filterCss from './cohost-filter-css.js'

import mentions from './cohost-mentions.js'

import emotes from './cohost-emotes.js'

function html2fragment(html) {
	const host = document.createElement('template')
	host.innerHTML = html
	return host.content
}

function start(text, {
	date = Infinity,
	hasCohostPlus = false,
	externalLinksInNewTab = true,
	disableHtml = false,
	disableEmbeds = false,
	disableGfm = !false,
}) {
	let html = Micromark(text, {
		extensions: disableGfm ? null : [gfm],
		htmlExtensions: disableGfm ? null : [gh],
		
		allowDangerousHtml: !disableHtml,
	})
	
	const fragment = html2fragment(html)
	
	walk(fragment, [
		footnotes(),
		sanitize({schema:ALLOW}),
		externalLinks({externalLinksInNewTab}),
		filterCss({date}),
		mentions(),
		//disableEmbeds ? null : embeds(),
		emotes({hasCohostPlus}),
	])
	
	return fragment
}

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
