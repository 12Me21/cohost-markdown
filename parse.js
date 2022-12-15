import {unified} from 'unified'

import RemarkParse from 'remark-parse'
import RemarkGfm from 'remark-gfm'
import RemarkRehype from 'remark-rehype'

import RehypeRaw from 'rehype-raw'
import RehypeSanitize, {defaultSchema} from 'rehype-sanitize'
import RehypeExternalLinks from 'rehype-external-links'

import RehypeStringify from 'rehype-stringify'

import CohostImageTitles from './cohost-image-titles.js'
import CohostFootnotes from './cohost-footnotes.js'
import CohostFilterCss from './cohost-filter-css.js'
import CohostMentions from './cohost-mentions.js'
import CohostEmbeds from './cohost-embeds.js'
import CohostEmotes from './cohost-emotes.js'

import deepmerge from 'deepmerge'



const HTML_ALLOW = deepmerge(defaultSchema, {
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
	
	return unified()
	// MDAST
		.use(RemarkParse)
		.use(disableGfm ? null : RemarkGfm, {singleTilde: false})
	// HAST + raw
		.use(RemarkRehype, {allowDangerousHtml: !disableHtml})
		.use(CohostImageTitles)
		.use(CohostFootnotes)
	// HAST
		.use(disableHtml ? null : RehypeRaw)
		.use(RehypeSanitize, HTML_ALLOW)
		.use(CohostFilterCss, {date})
		.use(RehypeExternalLinks, links)
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
		.use(RehypeStringify)
	
	return p.processSync(text).value
}
