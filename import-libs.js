export {unified as Unified} from 'unified'

import parse from 'remark-parse'
import gfm from 'remark-gfm'
import rehype from 'remark-rehype'
export const Remark = {parse, gfm, rehype}

import raw from './hast-raw.js'
import sanitize, {defaultSchema} from 'rehype-sanitize'
import externalLinks from 'rehype-external-links'
import stringify from 'rehype-stringify'
export const Rehype = {raw, sanitize, externalLinks, defaultSchema, stringify}

export {default as deepmerge} from 'deepmerge'

export {visit as unistVisit} from 'unist-util-visit'

export {default as styleToObject} from 'style-to-object'
