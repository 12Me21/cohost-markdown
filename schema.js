const URL = 2
const URL2 = 3
const PREFIX = 10

const GA = {
	__proto__:null,
	// prefixed
	id:PREFIX,name:PREFIX,
	//
	style:1,
	abbr:1,accesskey:1,alt:1,checked:1,colspan:1,coords:1,datetime:1,dir:1,disabled:1,for:1,headers:1,height:1,hreflang:1,ismap:1,lang:1,open:1,readonly:1,rel:1,rowspan:1,scope:1,shape:1,start:1,summary:1,tabindex:1,target:1,title:1,usemap:1,value:1,width:1,itemprop:1,
	// obsolete visual properties (still convenient sometimes)
	align:1,axis:1,border:1,cellpadding:1,cellspacing:1,char:1,charoff:1,clear:1,color:1,compact:1,frame:1,hspace:1,noshade:1,nowrap:1,rules:1,size:1,valign:1,vspace:1,
	// entirely useless (only used by disallowed elements)
	accept:1,action:1,charset:1,cols:1,enctype:1,label:1,maxlength:1,media:1,method:1,multiple:1,nohref:1,prompt:1,rev:1,rows:1,selected:1,span:1,
	// names containing hyphens (for some reason both are allowed)
	'accept-charset':1,'aria-describedby':1,'aria-hidden':1,'aria-label':1,'aria-labelledby':1,
	acceptcharset:1,ariadescribedby:1,ariahidden:1,arialabel:1,arialabelledby:1,
	// warn:
	type:-1,
}

const a = {attributes: GA}
const cites = {attributes: {__proto__: GA, cite:URL}}
const strip = false

export const ELEMENTS = {
	__proto__:null,
	SCRIPT: strip,
	'BAD-SCRIPT': strip,
	A: {attributes: {__proto__:GA, href:URL2}},
	IMG: {attributes: {__proto__:GA, src:URL, longdesc:URL}},
	INPUT: {
		attributes: {__proto__:GA, type:1, disabled:1},
		required: {__proto__:null, type:"checkbox", disabled:""},
	},
	DIV: {attributes: {__proto__:GA, itemscope:1, itemtype:1}},
	BLOCKQUOTE: cites, DEL: cites, INS: cites, Q: cites,
	LI: a, // apparently this is supposed to allow class=task-list-item, but nothing actually sets or uses that currently.
	H1:a,H2:a,H3:a,H4:a,H5:a,H6:a,BR:a,B:a,I:a,STRONG:a,EM:a,PRE:a,CODE:a,SUP:a,SUB:a,P:a,OL:a,UL:a,TABLE:a,THEAD:a,TBODY:a,TFOOT:a,DL:a,DT:a,DD:a,KBD:a,SAMP:a,VAR:a,HR:a,RUBY:a,RT:a,RP:a,TR:a,TD:a,TH:a,S:a,SUMMARY:a,DETAILS:a,CAPTION:a,FIGURE:a,FIGCAPTION:a,ABBR:a,BDO:a,CITE:a,DFN:a,MARK:a,SMALL:a,SPAN:a,TIME:a,WBR:a,
	VIDEO:a,AUDIO:a,ASIDE:a,
	// obsolete
	TT:a,STRIKE:a,
}

export const ALIASES = {
	__proto__:null,
	acceptcharset: 'accept-charset',
	ariadescribedby: 'aria-describedby',
	ariahidden: 'aria-hidden',	
	arialabel: 'aria-label',
	arialabelledby: 'aria-labelledby',
}

export const ATTRIBUTES = GA

// note: “obsolete” (affectionate)
