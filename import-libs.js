import {micromark} from 'micromark'
import {gfm, gfmHtml} from 'micromark-extension-gfm'

export default function markdown2html(text, {
	disableHtml=false,
	disableGfm=false,
}) {
	let extensions = disableGfm ? null : [gfm({singleTilde:false})]
	let htmlExtensions = disableGfm ? null : [gfmHtml()]
	let allowDangerousHtml = !disableHtml
	
	let html = micromark(text, {
		extensions, htmlExtensions,
		allowDangerousHtml,
	})
	
	return html
}
