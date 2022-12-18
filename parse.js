import {fromMarkdown, gfm, gfmFromMarkdown, toHast} from './libs.js'
import hastRaw from './hast-raw.js'

import cohostImageTitles from './cohost-image-titles.js'
import cohostFootnotes from './cohost-footnotes.js'
//import cohostFilterCss from './cohost-filter-css.js'
// todo: these will have render funcs too
import cohostMentions from './cohost-mentions.js'
//import CohostEmbeds from './cohost-embeds.js'
import cohostEmotes from './cohost-emotes.js'

import deepmerge from './deepmerge.js'



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
	const links = externalLinksInNewTab ? 
		{target:'_blank', rel:['nofollow', 'noopener', 'noreferrer']} :
	{target:'_self', rel:['nofollow']}
	
	let res1 = fromMarkdown(text, disableGfm ? {} : MD_EXT)
	let res2 = toHast(res1, {allowDangerousHtml: !disableHtml})
	let res3 = hastRaw(res2, {allowRaw: !disableHtml}, [
		cohostImageTitles,
		cohostFootnotes,
	], [
		cohostMentions,
		cohostEmotes,
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
