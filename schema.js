export const attributes = {
	__proto__:null,
	abbr:1,accept:1,'accept-charset':1,accesskey:1,action:1,align:1,
	alt:1,'aria-describedby':1,'aria-hidden':1,'aria-label':1,
	'aria-labelledby':1,axis:1,border:1,cellpadding:1,cellspacing:1,
	char:1,charoff:1,charset:1,checked:1,clear:1,cols:1,colspan:1,
	color:1,compact:1,coords:1,datetime:1,dir:1,disabled:1,enctype:1,
	for:1,frame:1,headers:1,height:1,hreflang:1,hspace:1,ismap:1,id:1,
	label:1,lang:1,maxlength:1,media:1,method:1,multiple:1,name:1,
	nohref:1,noshade:1,nowrap:1,open:1,prompt:1,readonly:1,rel:1,rev:1,
	rows:1,rowspan:1,rules:1,scope:1,selected:1,shape:1,size:1,span:1,
	start:1,summary:1,tabindex:1,target:1,title:1,type:1,usemap:1,
	valign:1,value:1,vspace:1,width:1,itemprop:1,style:1,
}

export const aliases = {
	__proto__: null,
	acceptcharset: 'accept-charset',
	ariadescribedby: 'aria-describedby',
	ariahidden: 'aria-hidden',	
	arialabel: 'aria-label',
	arialabelledby: 'aria-labelledby',
}

const IS_URL = 2
// this allows relative urls and http:// or https:// absolute urls
// technically <a> is supposed to allow xmpp:, mailto:, and irc:/ircs: but whatever.

const HAS_CITE = {attributes: {__proto__:null, cite:IS_URL}}

export const elements = {
	__proto__: null,
	SCRIPT: false,
	
	H1:1, H2:1, H3:1, H4:1, H5:1, H6:1,
	BR:1, B:1, I:1, STRONG:1, EM:1,
	A: {attributes: {__proto__:null, href:IS_URL}},
	PRE:1, CODE:1,
	IMG: {attributes: {__proto__:null, src:IS_URL, longdesc:IS_URL}},
	TT:1,
	DIV: {attributes: {__proto__:null, itemscope:1, itemtype:1}},
	INS: HAS_CITE,
	DEL: HAS_CITE,
	SUP:1, SUB:1,
	P:1,
	OL:1, UL:1,
	TABLE:1, THEAD:1, TBODY:1, TFOOT:1, 
	BLOCKQUOTE: HAS_CITE,
	DL:1, DT:1, DD:1,
	KBD:1,
	Q: HAS_CITE,
	SAMP:1, VAR:1,
	HR:1,
	RUBY:1, RT:1, RP:1,
	LI:1,
	TR:1, TD:1, TH:1,
	S:1, STRIKE:1,
	SUMMARY:1, DETAILS:1, CAPTION:1, FIGURE:1, FIGCAPTION:1,
	ABBR:1, BDO:1, CITE:1, DFN:1, MARK:1, SMALL:1, SPAN:1, TIME:1, WBR:1,
	INPUT: {
		attributes: {__proto__:null, type: "checkbox", disabled: ""},
		required: {__proto__:null, type: "checkbox", disabled: ""},
	},
	VIDEO:1, AUDIO:1,
	ASIDE:1,
}
