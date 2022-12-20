export {micromark} from 'micromark'

import {combineExtensions, combineHtmlExtensions} from 'micromark-util-combine-extensions'

import {gfmAutolinkLiteral, gfmAutolinkLiteralHtml} from 'micromark-extension-gfm-autolink-literal'
import {gfmFootnote, gfmFootnoteHtml} from 'micromark-extension-gfm-footnote'
import {gfmStrikethrough, gfmStrikethroughHtml} from 'micromark-extension-gfm-strikethrough'
import {gfmTable, gfmTableHtml} from 'micromark-extension-gfm-table'
import {gfmTaskListItem, gfmTaskListItemHtml} from 'micromark-extension-gfm-task-list-item'

//import {gfmTagfilterHtml} from 'micromark-extension-gfm-tagfilter'

const gfmTagfilterHtml = {
	exit: {
		htmlFlowData(token) {
			window.debug.call(this, token)
		},
		htmlTextData(token) {
			window.debug.call(this, token, true)
		},
	},
}

export function gfm(options) {
	return combineExtensions([
		gfmAutolinkLiteral,
		gfmFootnote(),
		gfmStrikethrough(options),
		gfmTable,
		gfmTaskListItem,
	])
}

export function gfmHtml(options) {
	return combineHtmlExtensions([
		gfmAutolinkLiteralHtml,
		gfmFootnoteHtml(options),
		gfmStrikethroughHtml,
		gfmTableHtml,
		gfmTagfilterHtml,
		gfmTaskListItemHtml,
	])
}
