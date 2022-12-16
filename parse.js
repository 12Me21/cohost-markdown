import {Unified, Remark, Rehype, deepmerge} from './build/libs.js'

import cohostImageTitles from './cohost-image-titles.js'
import cohostFootnotes from './cohost-footnotes.js'
import cohostFilterCss from './cohost-filter-css.js'
// todo: these will have render funcs too
import CohostMentions from './cohost-mentions.js'
import CohostEmbeds from './cohost-embeds.js'
import CohostEmotes from './cohost-emotes.js'



const HTML_ALLOW = deepmerge(Rehype.defaultSchema, {
	tagNames: ['video', 'audio', 'aside'],
	attributes: {
		'*': ['style'],
	},
})

function start({
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
	
	return Unified()
	// MDAST
		.use(Remark.parse)
		.use(disableGfm ? null : Remark.gfm, {singleTilde: false})
	// HAST + raw
		.use(Remark.rehype, {allowDangerousHtml: !disableHtml})
		.use(cohostImageTitles)
		.use(cohostFootnotes)
	// HAST
		.use(disableHtml ? null : Rehype.raw)
		.use(Rehype.sanitize, HTML_ALLOW)
		.use(cohostFilterCss, {date})
		.use(Rehype.externalLinks, links)
		.use(CohostMentions)
		.use(disableEmbeds ? null : CohostEmbeds)
		.use(CohostEmotes, {hasCohostPlus})
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
	let p = start(settings)
		.use(Rehype.stringify)
	
	return p.processSync(text).value
}
