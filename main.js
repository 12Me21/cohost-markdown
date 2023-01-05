//💟

import markdown2html from './_libs.js'

import walk from './walk-tree.js'

import sanitize from './sanitize.js'

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
	const html = markdown2html(text, {disableHtml, disableGfm})
	//⁌ ⁍
	const fragment = html2fragment(html)
	
	walk(fragment, [
		sanitize(),
		footnotes(),
		filterCss({date}),
		mentions(),
		//disableEmbeds ? null : embeds(),
	])
	walk(fragment, [
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
