import Parser from 'parse5/lib/parser/index.js'
import {fromParse5} from 'hast-util-from-parse5'
import {toParse5} from 'hast-util-to-parse5'

const namespaceURI = 'http://www.w3.org/1999/xhtml'

export const voidElements = {
	__proto__:null,
	area:1,base:1,basefont:1,bgsound:1,br:1,col:1,command:1,embed:1,
	frame:1,hr:1,image:1,img:1,input:1,isindex:1,keygen:1,link:1,
	menuitem:1,meta:1,nextid:1,param:1,source:1,track:1,wbr:1,
}

export function raw(tree) {
	const parser = new Parser({scriptingEnabled: false})
	
	const context = {
		nodeName:'template', tagName:'template',
		attrs:[], namespaceURI, childNodes:[],
	}
	const document = {
		nodeName:'documentmock', tagName:'documentmock',
		attrs:[], namespaceURI, childNodes:[],
	}
	
	const fragment = {
		nodeName:'#document-fragment', childNodes:[],
	}
	parser._bootstrap(document, context)
	parser._pushTmplInsertionMode('IN_TEMPLATE_MODE')
	parser._initTokenizerForFragmentParsing()
	parser._insertFakeRootElement()
	parser._resetInsertionMode()
	parser._findFormInFragmentContext()
	
	let {tokenizer} = parser
	let {preprocessor} = tokenizer
	
	// tokenizer
	const resetTokenizer = (input)=>{
		const token = tokenizer.currentCharacterToken
		if (token)
			parser._processInputToken(token)
		
		tokenizer.tokenQueue = []
		tokenizer.state = 'DATA_STATE'
		tokenizer.returnState = ''
		tokenizer.charRefCode = -1
		tokenizer.tempBuff = []
		tokenizer.lastStartTagName = ''
		tokenizer.consumedAfterSnapshot = -1
		tokenizer.active = false
		tokenizer.currentCharacterToken = undefined
		tokenizer.currentToken = undefined
		tokenizer.currentAttr = undefined
		
		if (input)
			parser._processInputToken(input)
	}
	
	const resetPreprocessor = ()=>{
		// Reset preprocessor:
		// See: <https://github.com/inikulin/parse5/blob/9c683e1/packages/parse5/lib/tokenizer/preprocessor.js#L17>.
		preprocessor.html = undefined
		preprocessor.pos = -1
		preprocessor.lastGapPos = -1
		preprocessor.lastCharPos = -1
		preprocessor.gapStack = []
		preprocessor.skipNextNewLine = false
		preprocessor.lastChunkWritten = false
		preprocessor.endOfChunkHit = false
	}
	
	const all = (list)=>{
		if (list) for (const n of list) switch (n.type) {
			case 'element':
			const {tagName, properties} = n
			resetTokenizer({
				type:'START_TAG_TOKEN', tagName, selfClosing:false,
				attrs:toParse5({
					tagName, type:'element',
					properties, children:[]
				}).attrs
			})
			
			all(n.children)
			
			if (!(tagName in voidElements))
				resetTokenizer({type:'END_TAG_TOKEN', tagName, attrs:[]})
			break
			case 'text':
			resetTokenizer({type:'CHARACTER_TOKEN', chars:n.value})
			break
			case 'comment':
			resetTokenizer({type:'COMMENT_TOKEN', data:n.value})
			break
			case 'raw':
			resetPreprocessor()
			tokenizer.write(n.value)
			parser._runParsingLoop(null)
			if (tokenizer.state=='NAMED_CHARACTER_REFERENCE_STATE' || tokenizer.state=='NUMERIC_CHARACTER_REFERENCE_END_STATE') {
				preprocessor.lastChunkWritten = true
				tokenizer[tokenizer.state](tokenizer._consume())
			}
			break;
			default:
			throw new Error(`Cannot compile ‘${n.type}’ node`)
		}
	}
	
	all(tree.children)
	
	resetTokenizer()
	
	parser._adoptNodes(document.childNodes[0], fragment)
	
	return fromParse5(fragment)
}
