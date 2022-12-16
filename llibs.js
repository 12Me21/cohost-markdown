export {unified as Unified} from 'unified'

import parse from 'remark-parse'
import gfm from 'remark-gfm'
import rehype from 'remark-rehype'
export const Remark = {parse, gfm, rehype}

import raw from 'rehype-raw'
import sanitize, {defaultSchema} from 'rehype-sanitize'
import externalLinks from 'rehype-external-links'
export const Rehype = {raw, sanitize, externalLinks, defaultSchema}

export {default as deepmerge} from 'deepmerge'

import {visit as unistVisit} from 'unist-util-visit'

export {default as styleToObject} from 'style-to-object'
