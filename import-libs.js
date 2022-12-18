export {unified as Unified} from 'unified'

import parse from 'remark-parse'
import gfm from 'remark-gfm'
import rehype from 'remark-rehype'
export const Remark = {parse, gfm, rehype}

//import {defaultSchema} from 'rehype-sanitize'
//import externalLinks from 'rehype-external-links'
//import stringify from 'rehype-stringify'
//export const Rehype = {defaultSchema}

export {visit as unistVisit} from 'unist-util-visit'

export {html as htmlAttributes, find as attributeInfo} from 'property-information'
// these dependencies are silly, but they're not really worse than my own implementation would be, so, might as well use them
export {htmlVoidElements} from 'html-void-elements'
export {stringify as space} from 'space-separated-tokens'
export {stringify as comma} from 'comma-separated-tokens'
