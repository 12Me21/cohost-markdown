import {fromMarkdown, gfm, gfmFromMarkdown, toHast} from './libs.js'
import hastRaw from './hast-raw.js'

import imageTitles from './cohost-image-titles.js'
import footnoteHack from './cohost-footnotes.js'
//import cohostFilterCss from './cohost-filter-css.js'
// todo: these will have render funcs too
import mentions from './cohost-mentions.js'
//import embeds from './cohost-embeds.js'
import emotes from './cohost-emotes.js'

import deepmerge from './deepmerge.js'

import externalLinks from './external-links.js'



/*const HTML_ALLOW = deepmerge(Rehype.defaultSchema, {
	tagNames: ['video', 'audio', 'aside'],
	attributes: {
		'*': ['style'],
	},
})*/

const MD_EXT = {
	extensions: [ gfm({singleTilde: false}) ],
	mdastExtensions: [ gfmFromMarkdown() ],
}

function start(text, {
	date = Infinity,
	hasCohostPlus = false,
	externalLinksInNewTab = true,
	disableHtml = false,
	disableEmbeds = false,
	disableGfm = false,
}) {
	// IDEA: what if we used the markdown->html mode in micromark
	// and then just parse that, since we need to anyway?
	// just worried that results wont be identical
	
	let res1 = fromMarkdown(text, disableGfm ? {} : MD_EXT)
	let res2 = toHast(res1, {
		allowDangerousHtml: !disableHtml,
		/*footnoteLabelTagName: 'hr',
		footnoteLabel: [],
		footnoteLabelProperties: {
			'aria-label': "Footnotes",
			'style': "margin-bottom: -0.5rem;",
		},*/
	})
	let res3 = hastRaw(res2, {
		allowRaw: !disableHtml,
		externalLinksInNewTab
	}, [
		imageTitles, footnoteHack, // element pre-filters
	], [
		mentions, emotes, // text pre-filters - these should be post-filters
	], [
		//sanitize,
		//filterCss,
		//externalLinks, // element post-filters (TODO - these should run before the text filters also, uhh)
	])
	return res3
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
