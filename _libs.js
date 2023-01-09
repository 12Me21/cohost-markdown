"use strict"
	;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
	;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
	;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
	;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
	;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
12||+typeof await/1/*2
export default /*/
window[document.currentScript.dataset.as || 'Markdown'] = /**/
{this:{}}.
this.w=function(){'use strict'
function e(e){const t='&'+e+';'
$.innerHTML=t
const n=$.textContent
return(59!==n.charCodeAt(n.length-1)||'semi'===e)&&n!==t&&n}
function t(e,t,n,r){const i=e.length
let o,u=0
if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),
[].splice.apply(e,o)
else for(n&&[].splice.call(e,t,n);u<r.length;)o=r.slice(u,u+1e4),o.unshift(t,0),
[].splice.apply(e,o),u+=1e4,t+=1e4}function n(e,n){
return e.length>0?(t(e,e.length,0,n),e):n}function r(e){const t={}
let n=-1
for(;++n<e.length;)i(t,e[n])
return t}function i(e,t){let n
for(n in t){const r=(Z.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n]
let u
for(u in i){Z.call(r,u)||(r[u]=[])
const e=i[u]
o(r[u],Array.isArray(e)?e:e?[e]:[])}}}function o(e,n){let r=-1
const i=[]
for(;++r<n.length;)('after'===n[r].add?e:i).push(n[r])
t(e,0,0,i)}function u(e){const t={}
let n=-1
for(;++n<e.length;)l(t,e[n])
return t}function l(e,t){let n
for(n in t){const r=(Z.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n]
let o
if(i)for(o in i)r[o]=i[o]}}function c(e){
return e.replace(/[\t\n\r ]+/g,' ').replace(/^ | $/g,'').toLowerCase().toUpperCase()
}function a(e,t){
	console.log('inject', e)
return(e=e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;"))+'" data--markdownlink="'
}function s(e){return null!==e&&(e<32||127===e)}function f(e){
return null!==e&&(e<0||32===e)}function d(e){return null!==e&&e<-2}
function h(e){return-2===e||-1===e||32===e}function k(e){
return t=>null!==t&&e.test(String.fromCharCode(t))}
function g(e,t,n,r){function i(r){
return h(r)&&u++<o?(e.e(r),i):(e.exit(n),t(r))}const o=r?r-1:1/0
let u=0
return r=>h(r)?(e.enter(n),i(r)):t(r)}function b(e){
return null===e||f(e)||re(e)?1:ie(e)?2:void 0}function m(e,t,n){
const r=[]
let i=-1
for(;++i<e.length;){const o=e[i].resolveAll
o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}function F(e,t){
e.column+=t,e.t+=t,e.n+=t}function p(e){const n={}
let r,i,o,u,l,c,a,s=-1
for(;++s<e.length;){for(;s in n;)s=n[s]
if(r=e[s],s&&'chunkFlow'===r[1].type&&'listItemPrefix'===e[s-1][1].type&&(c=r[1]._tokenizer.r,
o=0,
o<c.length&&'lineEndingBlank'===c[o][1].type&&(o+=2),o<c.length&&'content'===c[o][1].type))for(;++o<c.length&&'content'!==c[o][1].type;)'chunkText'===c[o][1].type&&(c[o][1]._isInFirstContentOfListItem=!0,
o++)
if('enter'===r[0])r[1].i&&(Object.assign(n,x(e,s)),s=n[s],a=!0)
else if(r[1]._container){
for(o=s,i=void 0;o--&&(u=e[o],'lineEnding'===u[1].type||'lineEndingBlank'===u[1].type);)'enter'===u[0]&&(i&&(e[i][1].type='lineEndingBlank'),
u[1].type='lineEnding',i=o)
i&&(r[1].end=Object.assign({},e[i][1].start),l=e.slice(i,s),l.unshift(r),t(e,i,s-i+1,l))
}}return!a}function x(e,n){const r=e[n][1],i=e[n][2]
let o=n-1
const u=[],l=r._tokenizer||i.o[r.i](r.start),c=l.r,a=[],s={}
let f,d,h=-1,k=r,g=0,b=0
const m=[b]
for(;k;){for(;e[++o][1]!==k;);
u.push(o),k._tokenizer||(f=i.sliceStream(k),k.next||f.push(null),
d&&l.defineSkip(k.start),
k._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),
l.write(f),
k._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),
d=k,k=k.next}
for(k=r;++h<c.length;)'exit'===c[h][0]&&'enter'===c[h-1][0]&&c[h][1].type===c[h-1][1].type&&c[h][1].start.u!==c[h][1].end.u&&(b=h+1,
m.push(b),k._tokenizer=void 0,k.l=void 0,k=k.next)
for(l.r=[],k?(k._tokenizer=void 0,k.l=void 0):m.pop(),h=m.length;h--;){
const n=c.slice(m[h],m[h+1]),r=u.pop()
a.unshift([r,r+n.length-1]),t(e,r,2,n)}
for(h=-1;++h<a.length;)s[g+a[h][0]]=g+a[h][1],g+=a[h][1]-a[h][0]-1
return s}function E(e,t,n,r,i,o,u,l,c){function a(n){
return 62===n?(e.enter(o),e.e(n),
e.exit(o),e.exit(i),e.exit(r),t):(e.enter(l),e.enter('chunkString',{
i:'string'}),h(n))}function h(t){
return 62===t?(e.exit('chunkString'),e.exit(l),
a(t)):null===t||60===t||d(t)?n(t):(e.e(t),92===t?k:h)}function k(t){
return 60===t||62===t||92===t?(e.e(t),h):h(t)}function g(i){
return 40===i?++F>m?n(i):(e.e(i),
g):41===i?F--?(e.e(i),g):(e.exit('chunkString'),
e.exit(l),e.exit(u),e.exit(r),t(i)):null===i||f(i)?F?n(i):(e.exit('chunkString'),
e.exit(l),e.exit(u),e.exit(r),t(i)):s(i)?n(i):(e.e(i),92===i?b:g)}
function b(t){return 40===t||41===t||92===t?(e.e(t),g):g(t)}
const m=c||1/0
let F=0
return t=>60===t?(e.enter(r),e.enter(i),e.enter(o),e.e(t),e.exit(o),a):null===t||41===t||s(t)?n(t):(e.enter(r),
e.enter(u),e.enter(l),e.enter('chunkString',{i:'string'}),g(t))}
function C(e,t,n,r,i,o){function u(c){
return null===c||91===c||93===c&&!s||94===c&&!f&&'_hiddenFootnoteSupport'in a.o.c||f>999?n(c):93===c?(e.exit(o),
e.enter(i),
e.e(c),e.exit(i),e.exit(r),t):d(c)?(e.enter('lineEnding'),e.e(c),e.exit('lineEnding'),
u):(e.enter('chunkString',{i:'string'}),l(c))}function l(t){
return null===t||91===t||93===t||d(t)||f++>999?(e.exit('chunkString'),
u(t)):(e.e(t),s=s||!h(t),92===t?c:l)}function c(t){
return 91===t||92===t||93===t?(e.e(t),f++,l):l(t)}const a=this
let s,f=0
return t=>(e.enter(r),e.enter(i),e.e(t),e.exit(i),e.enter(o),u)}
function A(e,t,n,r,i,o){function u(n){
return n===s?(e.enter(i),e.e(n),e.exit(i),
e.exit(r),t):(e.enter(o),l(n))}function l(t){
return t===s?(e.exit(o),u(s)):null===t?n(t):d(t)?(e.enter('lineEnding'),
e.e(t),e.exit('lineEnding'),
g(e,l,'linePrefix')):(e.enter('chunkString',{i:'string'}),c(t))}
function c(t){
return t===s||null===t||d(t)?(e.exit('chunkString'),l(t)):(e.e(t),
92===t?a:c)}function a(t){return t===s||92===t?(e.e(t),c):c(t)}let s
return t=>(e.enter(r),e.enter(i),e.e(t),e.exit(i),s=40===t?41:t,u)}
function D(e,t){let n
return function r(i){
return d(i)?(e.enter('lineEnding'),e.e(i),e.exit('lineEnding'),
n=!0,r):h(i)?g(e,r,n?'linePrefix':'lineSuffix')(i):t(i)}}
function S(e){return{tokenize(t){function n(e){return o(e)?c(e):r(e)}
function r(e){if(null!==e)return t.enter('data'),t.e(e),i
t.e(e)}function i(e){return o(e)?(t.exit('data'),c(e)):(t.e(e),i)}
function o(e){if(null===e)return!0
const t=l[e]
let n=-1
if(t)for(;++n<t.length;){const e=t[n]
if(!e.l||e.l.call(u,u.l))return!0}return!1}
const u=this,l=this.o.c[e],c=t.a(l,n,r)
return n},resolveAll:T('text'===e?v:void 0)}}function T(e){
return(t,n)=>{let r,i=-1
for(;++i<=t.length;)void 0===r?t[i]&&'data'===t[i][1].type&&(r=i,i++):t[i]&&'data'===t[i][1].type||(i!==r+2&&(t[r][1].end=t[i-1][1].end,
t.splice(r+2,i-r-2),i=r+2),r=void 0)
return e?e(t,n):t}}function v(e,t){let n=0
for(;++n<=e.length;)if((n===e.length||'lineEnding'===e[n][1].type)&&'data'===e[n-1][1].type){
const r=e[n-1][1],i=t.sliceStream(r)
let o,u=i.length,l=-1,c=0
for(;u--;){const e=i[u]
if('string'==typeof e){for(l=e.length;32===e.charCodeAt(l-1);)c++,l--
if(l)break
l=-1}else if(-2===e)o=!0,c++
else if(-1!==e){u++
break}}if(c){const i={
type:n===e.length||o||c<2?'lineSuffix':'hardBreakTrailing',start:{
u:r.end.u,column:r.end.column-c,t:r.end.t-c,s:r.start.s+u,
n:u?l:r.start.n+l},end:Object.assign({},r.end)}
r.end=Object.assign({},i.start),r.start.t===r.end.t?Object.assign(r,i):(e.splice(n,0,['enter',i,t],['exit',i,t]),
n+=2)}n++}return e}function w(e){
return 33===e||34===e||39===e||41===e||42===e||44===e||46===e||58===e||59===e||60===e||63===e||95===e||126===e
}function M(e){return null===e||60===e||f(e)}function y(e){
return 43===e||45===e||46===e||95===e||ee(e)}function L(e){
return null===e||40===e||42===e||95===e||126===e||f(e)}function z(e){
return null===e||!K(e)}function I(e){return 47!==e&&z(e)}
function O(e){let t=e.length,n=!1
for(;t--;){const r=e[t][1]
if(('labelLink'===r.type||'labelImage'===r.type)&&!r._balanced){n=!0
break}if(r._gfmAutolinkLiteralWalkedInto){n=!1
break}}
return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),
n}function B(e,t){const n=this.f(e)
this.tag('<a href="'+a((t||'')+n)+'">'),this.raw(this.encode(n)),this.tag('</a>')
}function P(e,t,n){const r=this
let i=r.r.length
const o=r.o.gfmFootnotes||(r.o.gfmFootnotes=[])
let u
for(;i--;){const e=r.r[i][1]
if('labelImage'===e.type){u=e
break}
if('gfmFootnoteCall'===e.type||'labelLink'===e.type||'label'===e.type||'image'===e.type||'link'===e.type)break
}return i=>{if(!u||!u._balanced)return n(i)
const l=c(r.f({start:u.end,end:r.now()}))
return 94===l.charCodeAt(0)&&o.includes(l.slice(1))?(e.enter('gfmFootnoteCallLabelMarker'),
e.e(i),e.exit('gfmFootnoteCallLabelMarker'),t(i)):n(i)}}
function R(e,t){let n=e.length
for(;n--;)if('labelImage'===e[n][1].type&&'enter'===e[n][0]){e[n][1]
break}
e[n+1][1].type='data',e[n+3][1].type='gfmFootnoteCallLabelMarker'
const r={type:'gfmFootnoteCall',
start:Object.assign({},e[n+3][1].start),
end:Object.assign({},e[e.length-1][1].end)},i={
type:'gfmFootnoteCallMarker',start:Object.assign({},e[n+3][1].end),
end:Object.assign({},e[n+3][1].end)}
i.end.column++,i.end.t++,i.end.n++
const o={type:'gfmFootnoteCallString',start:Object.assign({},i.end),
end:Object.assign({},e[e.length-1][1].start)},u={type:'chunkString',
i:'string',start:Object.assign({},o.start),end:Object.assign({},o.end)
},l=[e[n+1],e[n+2],['enter',r,t],e[n+3],e[n+4],['enter',i,t],['exit',i,t],['enter',o,t],['enter',u,t],['exit',u,t],['exit',o,t],e[e.length-2],e[e.length-1],['exit',r,t]]
return e.splice(n,e.length-n+1,...l),e}function j(e,t,n){
function r(t){
return 94!==t?n(t):(e.enter('gfmFootnoteCallMarker'),e.e(t),e.exit('gfmFootnoteCallMarker'),
e.enter('gfmFootnoteCallString'),e.enter('chunkString').i='string',i)}
function i(r){let d
return null===r||91===r||s++>999?n(r):93===r?a?(e.exit('chunkString'),d=e.exit('gfmFootnoteCallString'),
l.includes(c(u.f(d)))?(n=>(e.enter('gfmFootnoteCallLabelMarker'),
e.e(n),e.exit('gfmFootnoteCallLabelMarker'),
e.exit('gfmFootnoteCall'),t))(r):n(r)):n(r):(e.e(r),
f(r)||(a=!0),92===r?o:i)}function o(t){
return 91===t||92===t||93===t?(e.e(t),s++,i):i(t)}
const u=this,l=u.o.gfmFootnotes||(u.o.gfmFootnotes=[])
let a,s=0
return t=>(e.enter('gfmFootnoteCall'),e.enter('gfmFootnoteCallLabelMarker'),e.e(t),
e.exit('gfmFootnoteCallLabelMarker'),r)}function q(e,t,n){
function r(t){
return 94===t?(e.enter('gfmFootnoteDefinitionMarker'),e.e(t),e.exit('gfmFootnoteDefinitionMarker'),
e.enter('gfmFootnoteDefinitionLabelString'),i):n(t)}function i(t){
let r
return null===t||91===t||m>999?n(t):93===t?b?(r=e.exit('gfmFootnoteDefinitionLabelString'),
k=c(s.f(r)),
e.enter('gfmFootnoteDefinitionLabelMarker'),e.e(t),e.exit('gfmFootnoteDefinitionLabelMarker'),
e.exit('gfmFootnoteDefinitionLabel'),
l):n(t):d(t)?(e.enter('lineEnding'),e.e(t),
e.exit('lineEnding'),m++,i):(e.enter('chunkString').i='string',o(t))}
function o(t){
return null===t||d(t)||91===t||93===t||m>999?(e.exit('chunkString'),
i(t)):(f(t)||(b=!0),m++,e.e(t),92===t?u:o)}function u(t){
return 91===t||92===t||93===t?(e.e(t),m++,o):o(t)}function l(t){
return 58===t?(e.enter('definitionMarker'),
e.e(t),e.exit('definitionMarker'),g(e,a,'gfmFootnoteDefinitionWhitespace')):n(t)
}function a(e){return h.includes(k)||h.push(k),t(e)}
const s=this,h=s.o.gfmFootnotes||(s.o.gfmFootnotes=[])
let k,b,m=0
return t=>(e.enter('gfmFootnoteDefinition')._container=!0,e.enter('gfmFootnoteDefinitionLabel'),
e.enter('gfmFootnoteDefinitionLabelMarker'),
e.e(t),e.exit('gfmFootnoteDefinitionLabelMarker'),r)}
function H(e,t,n){return e.check(se,t,e.a(ot,t,n))}function V(e){
e.exit('gfmFootnoteDefinition')}function W(e={}){
const t=e.label||'Footnotes',n=e.backLabel||'Back to content',r=void 0===e.clobberPrefix||null===e.clobberPrefix?'user-content-':e.clobberPrefix
return{enter:{gfmFootnoteDefinition(){this.d('tightStack').push(!1)},
gfmFootnoteDefinitionLabelString(){this.buffer()},
gfmFootnoteCallString(){this.buffer()}},exit:{gfmFootnoteDefinition(){
let e=this.d('gfmFootnoteDefinitions')
const t=this.d('gfmFootnoteDefinitionStack'),n=this.d('tightStack'),r=t.pop(),i=this.resume()
e||this.h('gfmFootnoteDefinitions',e={}),ut.call(e,r)||(e[r]=i),n.pop(),this.h('slurpOneLineEnding',!0),
this.h('lastWasTag')},gfmFootnoteDefinitionLabelString(e){
let t=this.d('gfmFootnoteDefinitionStack')
t||this.h('gfmFootnoteDefinitionStack',t=[]),t.push(c(this.f(e))),this.resume(),
this.buffer()},gfmFootnoteCallString(e){
let t=this.d('gfmFootnoteCallOrder'),n=this.d('gfmFootnoteCallCounts')
const i=c(this.f(e))
let o
this.resume(),t||this.h('gfmFootnoteCallOrder',t=[]),n||this.h('gfmFootnoteCallCounts',n={})
const u=t.indexOf(i),l=a(i.toLowerCase())
;-1===u?(t.push(i),n[i]=1,o=t.length):(n[i]++,o=u+1)
const s=n[i]
this.tag('<sup><a href="#'+r+'fn-'+l+'" id="'+r+'fnref-'+l+(s>1?'-'+s:'')+'" data-footnote-ref="" aria-describedby="footnote-label">'+o+'</a></sup>')
},k(){
const e=this.d('gfmFootnoteCallOrder')||[],i=this.d('gfmFootnoteCallCounts')||{},o=this.d('gfmFootnoteDefinitions')||{}
let u=-1
for(e.length>0&&(this.g(),this.tag('<section data-footnotes="" class="footnotes"><h2 id="footnote-label" class="sr-only">'),
this.raw(this.encode(t)),
this.tag('</h2>'),this.g(),this.tag('<ol>'));++u<e.length;){
const t=e[u],l=a(t.toLowerCase())
let c=0
const s=[]
for(;++c<=i[t];)s.push('<a href="#'+r+'fnref-'+l+(c>1?'-'+c:'')+'" data-footnote-backref="" class="data-footnote-backref" aria-label="'+this.encode(n)+'">↩'+(c>1?'<sup>'+c+'</sup>':'')+'</a>')
const f=s.join(' ')
let d=!1
this.g(),this.tag('<li id="'+r+'fn-'+l+'">'),this.g(),this.tag(o[t].replace(/<\/p>(?:\r?\n|\r)?$/,e=>(d=!0,
' '+f+e))),d||(this.g(),this.tag(f)),this.g(),this.tag('</li>')}
e.length>0&&(this.g(),
this.tag('</ol>'),this.g(),this.tag('</section>'))}}}}
function _(e={}){let n=e.singleTilde
const r={tokenize(e,t,r){function i(u){const c=b(o)
if(126===u)return l>1?r(u):(e.e(u),l++,i)
if(l<2&&!n)return r(u)
const a=e.exit('strikethroughSequenceTemporary'),s=b(u)
return a._open=!s||2===s&&!!c,a._close=!c||2===c&&!!s,t(u)}
const o=this.l,u=this.r
let l=0
return t=>126===o&&'characterEscape'!==u[u.length-1][1].type?r(t):(e.enter('strikethroughSequenceTemporary'),
i(t))},resolveAll(e,n){let r=-1
for(;++r<e.length;)if('enter'===e[r][0]&&'strikethroughSequenceTemporary'===e[r][1].type&&e[r][1]._close){
let i=r
for(;i--;)if('exit'===e[i][0]&&'strikethroughSequenceTemporary'===e[i][1].type&&e[i][1]._open&&e[r][1].end.t-e[r][1].start.t==e[i][1].end.t-e[i][1].start.t){
e[r][1].type='strikethroughSequence',
e[i][1].type='strikethroughSequence'
const o={type:'strikethrough',start:Object.assign({},e[i][1].start),
end:Object.assign({},e[r][1].end)},u={type:'strikethroughText',
start:Object.assign({},e[i][1].end),
end:Object.assign({},e[r][1].start)
},l=[['enter',o,n],['enter',e[i][1],n],['exit',e[i][1],n],['enter',u,n]]
t(l,l.length,0,m(n.o.c.insideSpan.k,e.slice(i+1,r),n)),t(l,l.length,0,[['exit',u,n],['enter',e[r][1],n],['exit',e[r][1],n],['exit',o,n]]),
t(e,i-1,r-i+3,l),r=i+l.length-2
break}}
for(r=-1;++r<e.length;)'strikethroughSequenceTemporary'===e[r][1].type&&(e[r][1].type='data')
return e}}
return null==n&&(n=!0),{text:{126:r},insideSpan:{k:[r]},
attentionMarkers:{k:[126]}}}function Q(e,t){return'|'===t?t:e}
function U(e,t,n){const r=this
return g(e,e=>{const i=r.r[r.r.length-1]
return(i&&'whitespace'===i[1].type||d(e))&&null!==e?t(e):n(e)
},'whitespace')}function N(e){return u([it,W(e),lt,at,ht,kt])}
const $=document.createElement('i'),Z={}.hasOwnProperty,G={'"':'quot',
'&':'amp','<':'lt','>':'gt'
},J={}.hasOwnProperty,K=k(/[A-Za-z]/),X=k(/\d/),Y=k(/[\dA-Fa-f]/),ee=k(/[\dA-Za-z]/),te=k(/[!-/:-@[-`{-~]/),ne=k(/[#-'*+\--9=?A-Z^-~]/),re=k(/\s/),ie=k(/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/),oe={
tokenize(e){function t(t){const r=e.enter('chunkText',{i:'text',l:i})
return i&&(i.next=r),i=r,n(t)}function n(r){
return null===r?(e.exit('chunkText'),
e.exit('paragraph'),void e.e(r)):d(r)?(e.e(r),
e.exit('chunkText'),t):(e.e(r),n)}
const r=e.a(this.o.c.contentInitial,t=>{
if(null!==t)return e.enter('lineEnding'),
e.e(t),e.exit('lineEnding'),g(e,r,'linePrefix')
e.e(t)},n=>(e.enter('paragraph'),t(n)))
let i
return r}},ue={tokenize(e){function n(t){if(x<b.length){const n=b[x]
return g.b=n[1],e.a(n[0].continuation,r,i)(t)}return i(t)}
function r(e){if(x++,g.b._closeFlow){g.b._closeFlow=void 0,m&&k()
const n=g.r.length
let r,o=n
for(;o--;)if('exit'===g.r[o][0]&&'chunkFlow'===g.r[o][1].type){
r=g.r[o][1].end
break}h(x)
let u=n
for(;u<g.r.length;)g.r[u][1].end=Object.assign({},r),u++
return t(g.r,o+1,0,g.r.slice(n)),g.r.length=u,i(e)}return n(e)}
function i(t){if(x===b.length){if(!m)return l(t)
if(m.currentConstruct&&m.currentConstruct.concrete)return a(t)
g.m=!(!m.currentConstruct||m._gfmTableDynamicInterruptHack)}
return g.b={},e.check(le,o,u)(t)}function o(e){return m&&k(),h(x),l(e)
}function u(e){
return g.o.lazy[g.now().u]=x!==b.length,p=g.now().t,a(e)}
function l(t){return g.b={},e.a(le,c,a)(t)}function c(e){
return x++,b.push([g.currentConstruct,g.b]),l(e)}function a(t){
return null===t?(m&&k(),
h(0),void e.e(t)):(m=m||g.o.flow(g.now()),e.enter('chunkFlow',{
i:'flow',l:F,_tokenizer:m}),s(t))}function s(t){
return null===t?(f(e.exit('chunkFlow'),!0),
h(0),void e.e(t)):d(t)?(e.e(t),f(e.exit('chunkFlow')),
x=0,g.m=void 0,n):(e.e(t),s)}function f(e,n){const r=g.sliceStream(e)
if(n&&r.push(null),e.l=F,F&&(F.next=e),F=e,m.defineSkip(e.start),m.write(r),g.o.lazy[e.start.u]){
let e=m.r.length
for(;e--;)if(m.r[e][1].start.t<p&&(!m.r[e][1].end||m.r[e][1].end.t>p))return
const n=g.r.length
let r,i,o=n
for(;o--;)if('exit'===g.r[o][0]&&'chunkFlow'===g.r[o][1].type){if(r){
i=g.r[o][1].end
break}r=!0}
for(h(x),e=n;e<g.r.length;)g.r[e][1].end=Object.assign({},i),e++
t(g.r,o+1,0,g.r.slice(n)),g.r.length=e}}function h(t){let n=b.length
for(;n-- >t;){const t=b[n]
g.b=t[1],t[0].exit.call(g,e)}b.length=t}function k(){
m.write([null]),F=void 0,m=void 0,g.b._closeFlow=void 0}
const g=this,b=[]
let m,F,p,x=0
return n}},le={tokenize(e,t,n){
return g(e,e.a(this.o.c.document,t,n),'linePrefix',this.o.c.disable.k.includes('codeIndented')?void 0:4)
}},ce={name:'attention',tokenize(e,t){function n(l){
if(l===u)return e.e(l),n
const c=e.exit('attentionSequence'),a=b(l),s=!a||2===a&&o||r.includes(l),f=!o||2===o&&a||r.includes(i)
return c._open=!!(42===u?s:s&&(o||!f)),c._close=!!(42===u?f:f&&(a||!s)),t(l)
}const r=this.o.c.attentionMarkers.k,i=this.l,o=b(i)
let u
return t=>(e.enter('attentionSequence'),u=t,n(t))},resolveAll(e,r){
let i,o,u,l,c,a,s,f,d=-1
for(;++d<e.length;)if('enter'===e[d][0]&&'attentionSequence'===e[d][1].type&&e[d][1]._close)for(i=d;i--;)if('exit'===e[i][0]&&'attentionSequence'===e[i][1].type&&e[i][1]._open&&r.f(e[i][1]).charCodeAt(0)===r.f(e[d][1]).charCodeAt(0)){
if((e[i][1]._close||e[d][1]._open)&&(e[d][1].end.t-e[d][1].start.t)%3&&!((e[i][1].end.t-e[i][1].start.t+e[d][1].end.t-e[d][1].start.t)%3))continue
a=e[i][1].end.t-e[i][1].start.t>1&&e[d][1].end.t-e[d][1].start.t>1?2:1
const h=Object.assign({},e[i][1].end),k=Object.assign({},e[d][1].start)
F(h,-a),F(k,a),l={type:a>1?'strongSequence':'emphasisSequence',
start:h,end:Object.assign({},e[i][1].end)},c={
type:a>1?'strongSequence':'emphasisSequence',
start:Object.assign({},e[d][1].start),end:k},u={
type:a>1?'strongText':'emphasisText',
start:Object.assign({},e[i][1].end),
end:Object.assign({},e[d][1].start)},o={type:a>1?'strong':'emphasis',
start:Object.assign({},l.start),end:Object.assign({},c.end)
},e[i][1].end=Object.assign({},l.start),
e[d][1].start=Object.assign({},c.end),s=[],
e[i][1].end.t-e[i][1].start.t&&(s=n(s,[['enter',e[i][1],r],['exit',e[i][1],r]])),
s=n(s,[['enter',o,r],['enter',l,r],['exit',l,r],['enter',u,r]]),
s=n(s,m(r.o.c.insideSpan.k,e.slice(i+1,d),r)),
s=n(s,[['exit',u,r],['enter',c,r],['exit',c,r],['exit',o,r]]),
e[d][1].end.t-e[d][1].start.t?(f=2,
s=n(s,[['enter',e[d][1],r],['exit',e[d][1],r]])):f=0,
t(e,i-1,d-i+3,s),d=i+s.length-f-2
break}
for(d=-1;++d<e.length;)'attentionSequence'===e[d][1].type&&(e[d][1].type='data')
return e}},ae={name:'autolink',tokenize(e,t,n){function r(t){
return K(t)?(e.e(t),i):ne(t)?l(t):n(t)}function i(e){
return 43===e||45===e||46===e||ee(e)?o(e):l(e)}function o(t){
return 58===t?(e.e(t),
u):(43===t||45===t||46===t||ee(t))&&h++<32?(e.e(t),o):l(t)}
function u(t){
return 62===t?(e.exit('autolinkProtocol'),d(t)):null===t||32===t||60===t||s(t)?n(t):(e.e(t),
u)}function l(t){return 64===t?(e.e(t),h=0,c):ne(t)?(e.e(t),l):n(t)}
function c(e){return ee(e)?a(e):n(e)}function a(t){
return 46===t?(e.e(t),h=0,c):62===t?(e.exit('autolinkProtocol').type='autolinkEmail',
d(t)):f(t)}function f(t){
return(45===t||ee(t))&&h++<63?(e.e(t),45===t?f:a):n(t)}function d(n){
return e.enter('autolinkMarker'),
e.e(n),e.exit('autolinkMarker'),e.exit('autolink'),t}let h=1
return t=>(e.enter('autolink'),e.enter('autolinkMarker'),e.e(t),e.exit('autolinkMarker'),
e.enter('autolinkProtocol'),r)}},se={
tokenize:(e,t,n)=>g(e,e=>null===e||d(e)?t(e):n(e),'linePrefix'),F:!0
},fe={name:'blockQuote',tokenize(e,t,n){function r(n){
return h(n)?(e.enter('blockQuotePrefixWhitespace'),
e.e(n),e.exit('blockQuotePrefixWhitespace'),
e.exit('blockQuotePrefix'),t):(e.exit('blockQuotePrefix'),t(n))}
const i=this
return t=>{if(62===t){const n=i.b
return n.open||(e.enter('blockQuote',{_container:!0
}),n.open=!0),e.enter('blockQuotePrefix'),
e.enter('blockQuoteMarker'),e.e(t),e.exit('blockQuoteMarker'),r}
return n(t)}},continuation:{tokenize(e,t,n){
return g(e,e.a(fe,t,n),'linePrefix',this.o.c.disable.k.includes('codeIndented')?void 0:4)
}},exit(e){e.exit('blockQuote')}},de={name:'characterEscape',
tokenize(e,t,n){function r(r){
return te(r)?(e.enter('characterEscapeValue'),e.e(r),
e.exit('characterEscapeValue'),e.exit('characterEscape'),t):n(r)}
return t=>(e.enter('characterEscape'),
e.enter('escapeMarker'),e.e(t),e.exit('escapeMarker'),r)}},he={
name:'characterReference',tokenize(t,n,r){function i(e){
return 35===e?(t.enter('characterReferenceMarkerNumeric'),
t.e(e),t.exit('characterReferenceMarkerNumeric'),
o):(t.enter('characterReferenceValue'),c=31,a=ee,u(e))}function o(e){
return 88===e||120===e?(t.enter('characterReferenceMarkerHexadecimal'),
t.e(e),t.exit('characterReferenceMarkerHexadecimal'),
t.enter('characterReferenceValue'),
c=6,a=Y,u):(t.enter('characterReferenceValue'),c=7,a=X,u(e))}
function u(i){let o
return 59===i&&s?(o=t.exit('characterReferenceValue'),a!==ee||e(l.f(o))?(t.enter('characterReferenceMarker'),
t.e(i),
t.exit('characterReferenceMarker'),t.exit('characterReference'),n):r(i)):a(i)&&s++<c?(t.e(i),
u):r(i)}const l=this
let c,a,s=0
return e=>(t.enter('characterReference'),t.enter('characterReferenceMarker'),t.e(e),
t.exit('characterReferenceMarker'),i)}},ke={name:'codeFenced',
tokenize(e,t,n){function r(t){
return t===x?(e.e(t),E++,r):(e.exit('codeFencedFenceSequence'),
E<3?n(t):g(e,i,'whitespace')(t))}function i(t){
return null===t||d(t)?c(t):(e.enter('codeFencedFenceInfo'),
e.enter('chunkString',{i:'string'}),o(t))}function o(t){
return null===t||f(t)?(e.exit('chunkString'),
e.exit('codeFencedFenceInfo'),g(e,u,'whitespace')(t)):96===t&&t===x?n(t):(e.e(t),
o)}function u(t){
return null===t||d(t)?c(t):(e.enter('codeFencedFenceMeta'),e.enter('chunkString',{
i:'string'}),l(t))}function l(t){
return null===t||d(t)?(e.exit('chunkString'),e.exit('codeFencedFenceMeta'),
c(t)):96===t&&t===x?n(t):(e.e(t),l)}function c(n){
return e.exit('codeFencedFence'),k.m?t(n):a(n)}function a(t){
return null===t?h(t):d(t)?e.a(m,e.a(b,h,p?g(e,a,'linePrefix',p+1):a),h)(t):(e.enter('codeFlowValue'),
s(t))}function s(t){
return null===t||d(t)?(e.exit('codeFlowValue'),a(t)):(e.e(t),s)}
function h(n){return e.exit('codeFenced'),t(n)}const k=this,b={
tokenize(e,t,n){function r(t){
return t===x?(e.e(t),o++,r):o<E?n(t):(e.exit('codeFencedFenceSequence'),
g(e,i,'whitespace')(t))}function i(r){
return null===r||d(r)?(e.exit('codeFencedFence'),t(r)):n(r)}let o=0
return g(e,t=>(e.enter('codeFencedFence'),e.enter('codeFencedFenceSequence'),r(t)),'linePrefix',this.o.c.disable.k.includes('codeIndented')?void 0:4)
},F:!0},m={tokenize(e,t,n){function r(e){
return i.o.lazy[i.now().u]?n(e):t(e)}const i=this
return t=>(e.enter('lineEnding'),e.e(t),e.exit('lineEnding'),r)},F:!0
},F=this.r[this.r.length-1],p=F&&'linePrefix'===F[1].type?F[2].f(F[1],!0).length:0
let x,E=0
return t=>(e.enter('codeFenced'),e.enter('codeFencedFence'),e.enter('codeFencedFenceSequence'),
x=t,r(t))},concrete:!0},ge={name:'codeIndented',tokenize(e,t,n){
function r(e){const t=l.r[l.r.length-1]
return t&&'linePrefix'===t[1].type&&t[2].f(t[1],!0).length>=4?i(e):n(e)
}function i(t){
return null===t?u(t):d(t)?e.a(be,i,u)(t):(e.enter('codeFlowValue'),
o(t))}function o(t){
return null===t||d(t)?(e.exit('codeFlowValue'),i(t)):(e.e(t),o)}
function u(n){return e.exit('codeIndented'),t(n)}const l=this
return t=>(e.enter('codeIndented'),g(e,r,'linePrefix',5)(t))}},be={
tokenize(e,t,n){function r(t){
return o.o.lazy[o.now().u]?n(t):d(t)?(e.enter('lineEnding'),
e.e(t),e.exit('lineEnding'),r):g(e,i,'linePrefix',5)(t)}function i(e){
const i=o.r[o.r.length-1]
return i&&'linePrefix'===i[1].type&&i[2].f(i[1],!0).length>=4?t(e):d(e)?r(e):n(e)
}const o=this
return r},F:!0},me={name:'codeText',tokenize(e,t,n){function r(t){
return 96===t?(e.e(t),a++,r):(e.exit('codeTextSequence'),i(t))}
function i(t){
return null===t?n(t):96===t?(c=e.enter('codeTextSequence'),l=0,u(t)):32===t?(e.enter('space'),
e.e(t),
e.exit('space'),i):d(t)?(e.enter('lineEnding'),e.e(t),e.exit('lineEnding'),
i):(e.enter('codeTextData'),o(t))}function o(t){
return null===t||32===t||96===t||d(t)?(e.exit('codeTextData'),
i(t)):(e.e(t),o)}function u(n){
return 96===n?(e.e(n),l++,u):l===a?(e.exit('codeTextSequence'),
e.exit('codeText'),t(n)):(c.type='codeTextData',o(n))}let l,c,a=0
return t=>(e.enter('codeText'),e.enter('codeTextSequence'),r(t))},
resolve(e){let t,n,r=e.length-4,i=3
if(!('lineEnding'!==e[i][1].type&&'space'!==e[i][1].type||'lineEnding'!==e[r][1].type&&'space'!==e[r][1].type))for(t=i;++t<r;)if('codeTextData'===e[t][1].type){
e[i][1].type='codeTextPadding',
e[r][1].type='codeTextPadding',i+=2,r-=2
break}
for(t=i-1,r++;++t<=r;)void 0===n?t!==r&&'lineEnding'!==e[t][1].type&&(n=t):t!==r&&'lineEnding'!==e[t][1].type||(e[n][1].type='codeTextData',
t!==n+2&&(e[n][1].end=e[t-1][1].end,
e.splice(n+2,t-n-2),r-=t-n-2,t=n+2),n=void 0)
return e},l(e){
return 96!==e||'characterEscape'===this.r[this.r.length-1][1].type}
},Fe={tokenize(e,t){function n(t){
return null===t?r(t):d(t)?e.check(pe,i,r)(t):(e.e(t),n)}function r(n){
return e.exit('chunkContent'),e.exit('content'),t(n)}function i(t){
return e.e(t),e.exit('chunkContent'),o.next=e.enter('chunkContent',{
i:'content',l:o}),o=o.next,n}let o
return t=>(e.enter('content'),o=e.enter('chunkContent',{i:'content'
}),n(t))},resolve:e=>(p(e),e)},pe={tokenize(e,t,n){function r(r){
if(null===r||d(r))return n(r)
const o=i.r[i.r.length-1]
return!i.o.c.disable.k.includes('codeIndented')&&o&&'linePrefix'===o[1].type&&o[2].f(o[1],!0).length>=4?t(r):e.m(i.o.c.flow,n,t)(r)
}const i=this
return t=>(e.exit('chunkContent'),e.enter('lineEnding'),e.e(t),e.exit('lineEnding'),
g(e,r,'linePrefix'))},F:!0},xe={name:'definition',tokenize(e,t,n){
function r(t){
return u=c(o.f(o.r[o.r.length-1][1]).slice(1,-1)),58===t?(e.enter('definitionMarker'),
e.e(t),
e.exit('definitionMarker'),D(e,E(e,e.a(Ee,g(e,i,'whitespace'),g(e,i,'whitespace')),n,'definitionDestination','definitionDestinationLiteral','definitionDestinationLiteralMarker','definitionDestinationRaw','definitionDestinationString'))):n(t)
}function i(r){
return null===r||d(r)?(e.exit('definition'),o.o.defined.includes(u)||o.o.defined.push(u),
t(r)):n(r)}const o=this
let u
return t=>(e.enter('definition'),C.call(o,e,r,n,'definitionLabel','definitionLabelMarker','definitionLabelString')(t))
}},Ee={tokenize(e,t,n){function r(t){
return 34===t||39===t||40===t?A(e,g(e,i,'whitespace'),n,'definitionTitle','definitionTitleMarker','definitionTitleString')(t):n(t)
}function i(e){return null===e||d(e)?t(e):n(e)}
return t=>f(t)?D(e,r)(t):n(t)},F:!0},Ce={name:'hardBreakEscape',
tokenize(e,t,n){function r(r){
return d(r)?(e.exit('escapeMarker'),e.exit('hardBreakEscape'),
t(r)):n(r)}
return t=>(e.enter('hardBreakEscape'),e.enter('escapeMarker'),e.e(t),
r)}},Ae={name:'headingAtx',tokenize(e,t,n){function r(o){
return 35===o&&c++<6?(e.e(o),
r):null===o||f(o)?(e.exit('atxHeadingSequence'),l.m?t(o):i(o)):n(o)}
function i(n){
return 35===n?(e.enter('atxHeadingSequence'),o(n)):null===n||d(n)?(e.exit('atxHeading'),
t(n)):h(n)?g(e,i,'whitespace')(n):(e.enter('atxHeadingText'),u(n))}
function o(t){
return 35===t?(e.e(t),o):(e.exit('atxHeadingSequence'),i(t))}
function u(t){
return null===t||35===t||f(t)?(e.exit('atxHeadingText'),i(t)):(e.e(t),
u)}const l=this
let c=0
return t=>(e.enter('atxHeading'),e.enter('atxHeadingSequence'),r(t))},
resolve(e,n){let r,i,o=e.length-2,u=3
return'whitespace'===e[u][1].type&&(u+=2),o-2>u&&'whitespace'===e[o][1].type&&(o-=2),
'atxHeadingSequence'===e[o][1].type&&(u===o-1||o-4>u&&'whitespace'===e[o-2][1].type)&&(o-=u+1===o?2:4),
o>u&&(r={type:'atxHeadingText',start:e[u][1].start,end:e[o][1].end
},i={type:'chunkText',start:e[u][1].start,end:e[o][1].end,i:'text'
},t(e,u,o-u+1,[['enter',r,n],['enter',i,n],['exit',i,n],['exit',r,n]])),
e}
},De=['address','article','aside','base','basefont','blockquote','body','caption','center','col','colgroup','dd','details','dialog','dir','div','dl','dt','fieldset','figcaption','figure','footer','form','frame','frameset','h1','h2','h3','h4','h5','h6','head','header','hr','html','iframe','legend','li','link','main','menu','menuitem','nav','noframes','ol','optgroup','option','p','param','section','summary','table','tbody','td','tfoot','th','thead','title','tr','track','ul'],Se=['pre','script','style','textarea'],Te={
name:'htmlFlow',tokenize(e,t,n){function r(r){
return 33===r?(e.e(r),i):47===r?(e.e(r),
l):63===r?(e.e(r),B=3,O.m?t:L):K(r)?(e.e(r),
R=String.fromCharCode(r),P=!0,c):n(r)}function i(r){
return 45===r?(e.e(r),B=2,o):91===r?(e.e(r),
B=5,R='CDATA[',j=0,u):K(r)?(e.e(r),B=4,O.m?t:L):n(r)}function o(r){
return 45===r?(e.e(r),O.m?t:L):n(r)}function u(r){
return r===R.charCodeAt(j++)?(e.e(r),j===R.length?O.m?t:A:u):n(r)}
function l(t){return K(t)?(e.e(t),R=String.fromCharCode(t),c):n(t)}
function c(r){
return null===r||47===r||62===r||f(r)?47!==r&&P&&Se.includes(R.toLowerCase())?(B=1,
O.m?t(r):A(r)):De.includes(R.toLowerCase())?(B=6,
47===r?(e.e(r),a):O.m?t(r):A(r)):(B=7,
O.m&&!O.o.lazy[O.now().u]?n(r):P?k(r):s(r)):45===r||ee(r)?(e.e(r),
R+=String.fromCharCode(r),c):n(r)}function a(r){
return 62===r?(e.e(r),O.m?t:A):n(r)}function s(t){
return h(t)?(e.e(t),s):E(t)}function k(t){
return 47===t?(e.e(t),E):58===t||95===t||K(t)?(e.e(t),
g):h(t)?(e.e(t),k):E(t)}function g(t){
return 45===t||46===t||58===t||95===t||ee(t)?(e.e(t),g):b(t)}
function b(t){return 61===t?(e.e(t),m):h(t)?(e.e(t),b):k(t)}
function m(t){
return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.e(t),
q=t,F):h(t)?(e.e(t),m):(q=null,p(t))}function F(t){
return null===t||d(t)?n(t):t===q?(e.e(t),x):(e.e(t),F)}function p(t){
return null===t||34===t||39===t||60===t||61===t||62===t||96===t||f(t)?b(t):(e.e(t),
p)}function x(e){return 47===e||62===e||h(e)?k(e):n(e)}function E(t){
return 62===t?(e.e(t),C):n(t)}function C(t){
return h(t)?(e.e(t),C):null===t||d(t)?A(t):n(t)}function A(t){
return 45===t&&2===B?(e.e(t),
v):60===t&&1===B?(e.e(t),w):62===t&&4===B?(e.e(t),z):63===t&&3===B?(e.e(t),
L):93===t&&5===B?(e.e(t),
y):!d(t)||6!==B&&7!==B?null===t||d(t)?D(t):(e.e(t),A):e.check(ve,z,D)(t)
}function D(t){return e.exit('htmlFlowData'),S(t)}function S(t){
return null===t?I(t):d(t)?e.a({tokenize:T,F:!0
},S,I)(t):(e.enter('htmlFlowData'),A(t))}function T(e,t,n){
function r(e){return O.o.lazy[O.now().u]?n(e):t(e)}
return t=>(e.enter('lineEnding'),e.e(t),e.exit('lineEnding'),r)}
function v(t){return 45===t?(e.e(t),L):A(t)}function w(t){
return 47===t?(e.e(t),R='',M):A(t)}function M(t){
return 62===t&&Se.includes(R.toLowerCase())?(e.e(t),
z):K(t)&&R.length<8?(e.e(t),R+=String.fromCharCode(t),M):A(t)}
function y(t){return 93===t?(e.e(t),L):A(t)}function L(t){
return 62===t?(e.e(t),z):45===t&&2===B?(e.e(t),L):A(t)}function z(t){
return null===t||d(t)?(e.exit('htmlFlowData'),I(t)):(e.e(t),z)}
function I(n){return e.exit('htmlFlow'),t(n)}const O=this
let B,P,R,j,q
return t=>(e.enter('htmlFlow'),e.enter('htmlFlowData'),e.e(t),r)},
resolveTo(e){let t=e.length
for(;t--&&('enter'!==e[t][0]||'htmlFlow'!==e[t][1].type););
return t>1&&'linePrefix'===e[t-2][1].type&&(e[t][1].start=e[t-2][1].start,
e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e},concrete:!0},ve={
tokenize:(e,t,n)=>r=>(e.exit('htmlFlowData'),
e.enter('lineEndingBlank'),e.e(r),e.exit('lineEndingBlank'),
e.a(se,t,n)),F:!0},we={name:'htmlText',tokenize(e,t,n){function r(t){
return 33===t?(e.e(t),
i):47===t?(e.e(t),E):63===t?(e.e(t),p):K(t)?(e.e(t),D):n(t)}
function i(t){
return 45===t?(e.e(t),o):91===t?(e.e(t),R='CDATA[',j=0,s):K(t)?(e.e(t),
F):n(t)}function o(t){return 45===t?(e.e(t),u):n(t)}function u(t){
return null===t||62===t?n(t):45===t?(e.e(t),l):c(t)}function l(e){
return null===e||62===e?n(e):c(e)}function c(t){
return null===t?n(t):45===t?(e.e(t),a):d(t)?(q=c,z(t)):(e.e(t),c)}
function a(t){return 45===t?(e.e(t),O):c(t)}function s(t){
return t===R.charCodeAt(j++)?(e.e(t),j===R.length?k:s):n(t)}
function k(t){
return null===t?n(t):93===t?(e.e(t),b):d(t)?(q=k,z(t)):(e.e(t),k)}
function b(t){return 93===t?(e.e(t),m):k(t)}function m(t){
return 62===t?O(t):93===t?(e.e(t),m):k(t)}function F(t){
return null===t||62===t?O(t):d(t)?(q=F,z(t)):(e.e(t),F)}function p(t){
return null===t?n(t):63===t?(e.e(t),x):d(t)?(q=p,z(t)):(e.e(t),p)}
function x(e){return 62===e?O(e):p(e)}function E(t){
return K(t)?(e.e(t),C):n(t)}function C(t){
return 45===t||ee(t)?(e.e(t),C):A(t)}function A(t){
return d(t)?(q=A,z(t)):h(t)?(e.e(t),A):O(t)}function D(t){
return 45===t||ee(t)?(e.e(t),D):47===t||62===t||f(t)?S(t):n(t)}
function S(t){
return 47===t?(e.e(t),O):58===t||95===t||K(t)?(e.e(t),T):d(t)?(q=S,
z(t)):h(t)?(e.e(t),S):O(t)}function T(t){
return 45===t||46===t||58===t||95===t||ee(t)?(e.e(t),T):v(t)}
function v(t){
return 61===t?(e.e(t),w):d(t)?(q=v,z(t)):h(t)?(e.e(t),v):S(t)}
function w(t){
return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.e(t),
P=t,M):d(t)?(q=w,z(t)):h(t)?(e.e(t),w):(e.e(t),P=void 0,L)}
function M(t){
return t===P?(e.e(t),y):null===t?n(t):d(t)?(q=M,z(t)):(e.e(t),M)}
function y(e){return 62===e||47===e||f(e)?S(e):n(e)}function L(t){
return null===t||34===t||39===t||60===t||61===t||96===t?n(t):62===t||f(t)?S(t):(e.e(t),
L)}function z(t){
return e.exit('htmlTextData'),e.enter('lineEnding'),e.e(t),e.exit('lineEnding'),
g(e,I,'linePrefix',B.o.c.disable.k.includes('codeIndented')?void 0:4)}
function I(t){return e.enter('htmlTextData'),q(t)}function O(r){
return 62===r?(e.e(r),
e.exit('htmlTextData'),e.exit('htmlText'),t):n(r)}const B=this
let P,R,j,q
return t=>(e.enter('htmlText'),e.enter('htmlTextData'),e.e(t),r)}
},Me={name:'labelEnd',tokenize(e,t,n){function r(n){
return 40===n?e.a(ye,t,l?t:i)(n):91===n?e.a(Le,t,l?e.a(ze,t,i):i)(n):l?t(n):i(n)
}function i(e){return u._balanced=!0,n(e)}const o=this
let u,l,a=o.r.length
for(;a--;)if(('labelImage'===o.r[a][1].type||'labelLink'===o.r[a][1].type)&&!o.r[a][1]._balanced){
u=o.r[a][1]
break}return t=>u?u._inactive?i(t):(l=o.o.defined.includes(c(o.f({
start:u.end,end:o.now()
}))),e.enter('labelEnd'),e.enter('labelMarker'),e.e(t),e.exit('labelMarker'),
e.exit('labelEnd'),r):n(t)},resolveTo(e,r){let i,o,u,l,c=e.length,a=0
for(;c--;)if(i=e[c][1],o){
if('link'===i.type||'labelLink'===i.type&&i._inactive)break
'enter'===e[c][0]&&'labelLink'===i.type&&(i._inactive=!0)}else if(u){
if('enter'===e[c][0]&&('labelImage'===i.type||'labelLink'===i.type)&&!i._balanced&&(o=c,
'labelLink'!==i.type)){a=2
break}}else'labelEnd'===i.type&&(u=c)
const s={type:'labelLink'===e[o][1].type?'link':'image',
start:Object.assign({},e[o][1].start),
end:Object.assign({},e[e.length-1][1].end)},f={type:'label',
start:Object.assign({},e[o][1].start),
end:Object.assign({},e[u][1].end)},d={type:'labelText',
start:Object.assign({},e[o+a+2][1].end),
end:Object.assign({},e[u-2][1].start)}
return l=[['enter',s,r],['enter',f,r]],l=n(l,e.slice(o+1,o+a+3)),l=n(l,[['enter',d,r]]),
l=n(l,m(r.o.c.insideSpan.k,e.slice(o+a+4,u-3),r)),
l=n(l,[['exit',d,r],e[u-2],e[u-1],['exit',f,r]]),
l=n(l,e.slice(u+1)),l=n(l,[['exit',s,r]]),t(e,o,e.length,l),e},
resolveAll(e){let t,n=-1
for(;++n<e.length;)t=e[n][1],'labelImage'!==t.type&&'labelLink'!==t.type&&'labelEnd'!==t.type||(e.splice(n+1,'labelImage'===t.type?4:2),
t.type='data',n++)
return e}},ye={tokenize(e,t,n){function r(t){
return 41===t?u(t):E(e,i,n,'resourceDestination','resourceDestinationLiteral','resourceDestinationLiteralMarker','resourceDestinationRaw','resourceDestinationString',32)(t)
}function i(t){return f(t)?D(e,o)(t):u(t)}function o(t){
return 34===t||39===t||40===t?A(e,D(e,u),n,'resourceTitle','resourceTitleMarker','resourceTitleString')(t):u(t)
}function u(r){
return 41===r?(e.enter('resourceMarker'),e.e(r),e.exit('resourceMarker'),
e.exit('resource'),t):n(r)}
return t=>(e.enter('resource'),e.enter('resourceMarker'),
e.e(t),e.exit('resourceMarker'),D(e,r))}},Le={tokenize(e,t,n){
function r(e){
return i.o.defined.includes(c(i.f(i.r[i.r.length-1][1]).slice(1,-1)))?t(e):n(e)
}const i=this
return t=>C.call(i,e,r,n,'reference','referenceMarker','referenceString')(t)
}},ze={tokenize(e,t,n){function r(r){
return 93===r?(e.enter('referenceMarker'),e.e(r),
e.exit('referenceMarker'),e.exit('reference'),t):n(r)}
return t=>(e.enter('reference'),
e.enter('referenceMarker'),e.e(t),e.exit('referenceMarker'),r)}},Ie={
name:'labelStartImage',tokenize(e,t,n){function r(t){
return 91===t?(e.enter('labelMarker'),
e.e(t),e.exit('labelMarker'),e.exit('labelImage'),i):n(t)}
function i(e){
return 94===e&&'_hiddenFootnoteSupport'in o.o.c?n(e):t(e)}const o=this
return t=>(e.enter('labelImage'),e.enter('labelImageMarker'),e.e(t),e.exit('labelImageMarker'),
r)},resolveAll:Me.resolveAll},Oe={name:'labelStartLink',
tokenize(e,t,n){function r(e){
return 94===e&&'_hiddenFootnoteSupport'in i.o.c?n(e):t(e)}const i=this
return t=>(e.enter('labelLink'),e.enter('labelMarker'),e.e(t),e.exit('labelMarker'),
e.exit('labelLink'),r)},resolveAll:Me.resolveAll},Be={
name:'lineEnding',
tokenize:(e,t)=>n=>(e.enter('lineEnding'),e.e(n),e.exit('lineEnding'),
g(e,t,'linePrefix'))},Pe={name:'thematicBreak',tokenize(e,t,n){
function r(l){
return l===o?(e.enter('thematicBreakSequence'),i(l)):h(l)?g(e,r,'whitespace')(l):u<3||null!==l&&!d(l)?n(l):(e.exit('thematicBreak'),
t(l))}function i(t){
return t===o?(e.e(t),u++,i):(e.exit('thematicBreakSequence'),r(t))}
let o,u=0
return t=>(e.enter('thematicBreak'),o=t,r(t))}},Re={name:'list',
tokenize(e,t,n){function r(t){
return X(t)&&++f<10?(e.e(t),r):(!c.m||f<2)&&(c.b.marker?t===c.b.marker:41===t||46===t)?(e.exit('listItemValue'),
i(t)):n(t)}function i(t){
return e.enter('listItemMarker'),e.e(t),e.exit('listItemMarker'),
c.b.marker=c.b.marker||t,e.check(se,c.m?n:o,e.a(je,l,u))}
function o(e){return c.b.initialBlankLine=!0,s++,l(e)}function u(t){
return h(t)?(e.enter('listItemPrefixWhitespace'),
e.e(t),e.exit('listItemPrefixWhitespace'),l):n(t)}function l(n){
return c.b.size=s+c.f(e.exit('listItemPrefix'),!0).length,t(n)}
const c=this,a=c.r[c.r.length-1]
let s=a&&'linePrefix'===a[1].type?a[2].f(a[1],!0).length:0,f=0
return t=>{
const o=c.b.type||(42===t||43===t||45===t?'listUnordered':'listOrdered')
if('listUnordered'===o?!c.b.marker||t===c.b.marker:X(t)){
if(c.b.type||(c.b.type=o,e.enter(o,{_container:!0
})),'listUnordered'===o)return e.enter('listItemPrefix'),
42===t||45===t?e.check(Pe,n,i)(t):i(t)
if(!c.m||49===t)return e.enter('listItemPrefix'),e.enter('listItemValue'),r(t)
}return n(t)}},continuation:{tokenize(e,t,n){function r(r){
return i.b._closeFlow=!0,
i.m=void 0,g(e,e.a(Re,t,n),'linePrefix',i.o.c.disable.k.includes('codeIndented')?void 0:4)(r)
}const i=this
return i.b._closeFlow=void 0,e.check(se,n=>(i.b.furtherBlankLines=i.b.furtherBlankLines||i.b.initialBlankLine,
g(e,t,'listItemIndent',i.b.size+1)(n)),n=>i.b.furtherBlankLines||!h(n)?(i.b.furtherBlankLines=void 0,
i.b.initialBlankLine=void 0,
r(n)):(i.b.furtherBlankLines=void 0,i.b.initialBlankLine=void 0,
e.a(qe,t,r)(n)))}},exit(e){e.exit(this.b.type)}},je={tokenize(e,t,n){
const r=this
return g(e,e=>{const i=r.r[r.r.length-1]
return!h(e)&&i&&'listItemPrefixWhitespace'===i[1].type?t(e):n(e)
},'listItemPrefixWhitespace',r.o.c.disable.k.includes('codeIndented')?void 0:5)
},F:!0},qe={tokenize(e,t,n){const r=this
return g(e,e=>{const i=r.r[r.r.length-1]
return i&&'listItemIndent'===i[1].type&&i[2].f(i[1],!0).length===r.b.size?t(e):n(e)
},'listItemIndent',r.b.size+1)},F:!0},He={name:'setextUnderline',
tokenize(e,t,n){function r(t){
return t===u?(e.e(t),r):(e.exit('setextHeadingLineSequence'),
g(e,i,'lineSuffix')(t))}function i(r){
return null===r||d(r)?(e.exit('setextHeadingLine'),t(r)):n(r)}
const o=this
let u,l,c=o.r.length
for(;c--;)if('lineEnding'!==o.r[c][1].type&&'linePrefix'!==o.r[c][1].type&&'content'!==o.r[c][1].type){
l='paragraph'===o.r[c][1].type
break}
return t=>o.o.lazy[o.now().u]||!o.m&&!l?n(t):(e.enter('setextHeadingLine'),
e.enter('setextHeadingLineSequence'),u=t,r(t))},resolveTo(e,t){
let n,r,i,o=e.length
for(;o--;)if('enter'===e[o][0]){if('content'===e[o][1].type){n=o
break}'paragraph'===e[o][1].type&&(r=o)
}else'content'===e[o][1].type&&e.splice(o,1),
i||'definition'!==e[o][1].type||(i=o)
const u={type:'setextHeading',start:Object.assign({},e[r][1].start),
end:Object.assign({},e[e.length-1][1].end)}
return e[r][1].type='setextHeadingText',i?(e.splice(r,0,['enter',u,t]),e.splice(i+1,0,['exit',e[n][1],t]),
e[n][1].end=Object.assign({},e[i][1].end)):e[n][1]=u,
e.push(['exit',u,t]),e}},Ve={tokenize(e){function t(t){
if(null!==t)return e.enter('lineEnding'),
e.e(t),e.exit('lineEnding'),n.currentConstruct=void 0,r
e.e(t)}const n=this,r=e.a(se,t=>{
if(null!==t)return e.enter('lineEndingBlank'),e.e(t),
e.exit('lineEndingBlank'),n.currentConstruct=void 0,r
e.e(t)
},e.a(this.o.c.flowInitial,t,g(e,e.a(this.o.c.flow,t,e.a(Fe,t)),'linePrefix')))
return r}},We={resolveAll:T()},_e=S('string'),Qe=S('text')
var Ue=Object.freeze({__proto__:null,document:{42:Re,43:Re,45:Re,
48:Re,49:Re,50:Re,51:Re,52:Re,53:Re,54:Re,55:Re,56:Re,57:Re,62:fe},
contentInitial:{91:xe},flowInitial:{[-2]:ge,[-1]:ge,32:ge},flow:{
35:Ae,42:Pe,45:[He,Pe],60:Te,61:He,95:Pe,96:ke,126:ke},string:{38:he,
92:de},text:{[-5]:Be,[-4]:Be,[-3]:Be,33:Ie,38:he,42:ce,60:[ae,we],
91:Oe,92:[Ce,de],93:Me,95:ce,96:me},insideSpan:{k:[ce,We]},
attentionMarkers:{k:[42,95]},disable:{k:[]}})
const Ne=/[\0\t\n\r]/g,$e={tokenize(e,t,n){function r(t){
return 87===t||119===t?(e.e(t),i):n(t)}function i(t){
return 87===t||119===t?(e.e(t),o):n(t)}function o(t){
return 46===t?(e.e(t),u):n(t)}function u(e){
return null===e||d(e)?n(e):t(e)}return t=>(e.e(t),r)},F:!0},Ze={
tokenize(e,t,n){function r(t){
return 38===t?e.check(Ke,o,i)(t):46===t||95===t?e.check(Je,o,i)(t):null===t||s(t)||re(t)||45!==t&&ie(t)?o(t):(e.e(t),
r)}function i(t){
return 46===t?(l=u,u=void 0,e.e(t),r):(95===t&&(u=!0),e.e(t),r)}
function o(e){return l||u?n(e):t(e)}let u,l
return r},F:!0},Ge={tokenize(e,t){function n(u){
return 38===u?e.check(Ke,t,r)(u):(40===u&&o++,
41===u?e.check(Je,i,r)(u):M(u)?t(u):w(u)?e.check(Je,t,r)(u):(e.e(u),
n))}function r(t){return e.e(t),n}function i(e){
return o--,o<0?t(e):r(e)}let o=0
return n},F:!0},Je={tokenize(e,t,n){function r(i){
return w(i)?(e.e(i),r):M(i)?t(i):n(i)}return t=>(e.e(t),r)},F:!0},Ke={
tokenize(e,t,n){function r(t){
return K(t)?(e.e(t),r):59===t?(e.e(t),i):n(t)}function i(e){
return M(e)?t(e):n(e)}return t=>(e.e(t),r)},F:!0},Xe={tokenize(e,t,n){
function r(n){
return e.exit('literalAutolinkWww'),e.exit('literalAutolink'),t(n)}
const i=this
return t=>87!==t&&119!==t||!L(i.l)||O(i.r)?n(t):(e.enter('literalAutolink'),e.enter('literalAutolinkWww'),
e.check($e,e.a(Ze,e.a(Ge,r),n),n)(t))},l:L},Ye={tokenize(e,t,n){
function r(t){return 84===t||116===t?(e.e(t),i):n(t)}function i(t){
return 84===t||116===t?(e.e(t),o):n(t)}function o(t){
return 80===t||112===t?(e.e(t),u):n(t)}function u(t){
return 83===t||115===t?(e.e(t),l):l(t)}function l(t){
return 58===t?(e.e(t),c):n(t)}function c(t){
return 47===t?(e.e(t),a):n(t)}function a(t){
return 47===t?(e.e(t),f):n(t)}function f(t){
return null===t||s(t)||re(t)||ie(t)?n(t):e.a(Ze,e.a(Ge,d),n)(t)}
function d(n){
return e.exit('literalAutolinkHttp'),e.exit('literalAutolink'),t(n)}
const h=this
return t=>72!==t&&104!==t||!z(h.l)||O(h.r)?n(t):(e.enter('literalAutolink'),e.enter('literalAutolinkHttp'),
e.e(t),r)},l:z},et={tokenize(e,t,n){function r(t){
return y(t)?(e.e(t),r):64===t?(e.e(t),i):n(t)}function i(t){
return 46===t?e.check(Je,c,o)(t):45===t||95===t?e.check(Je,n,u)(t):ee(t)?(!f&&X(t)&&(f=!0),
e.e(t),i):c(t)}function o(t){return e.e(t),s=!0,f=void 0,i}
function u(t){return e.e(t),l}function l(t){
return 46===t?e.check(Je,n,o)(t):i(t)}function c(r){
return s&&!f?(e.exit('literalAutolinkEmail'),
e.exit('literalAutolink'),t(r)):n(r)}const a=this
let s,f
return t=>y(t)&&I(a.l)&&!O(a.r)?(e.enter('literalAutolink'),e.enter('literalAutolinkEmail'),
r(t)):n(t)},l:I},tt={},nt={text:tt}
let rt=48
for(;rt<123;)tt[rt]=et,rt++,58===rt?rt=65:91===rt&&(rt=97)
tt[43]=et,tt[45]=et,tt[46]=et,tt[95]=et,tt[72]=[et,Ye],tt[104]=[et,Ye],tt[87]=[et,Xe],
tt[119]=[et,Xe]
const it={exit:{literalAutolinkEmail(e){B.call(this,e,'mailto:')},
literalAutolinkHttp(e){B.call(this,e)},literalAutolinkWww(e){
B.call(this,e,'http://')}}},ot={tokenize(e,t,n){const r=this
return g(e,e=>{const i=r.r[r.r.length-1]
return i&&'gfmFootnoteDefinitionIndent'===i[1].type&&4===i[2].f(i[1],!0).length?t(e):n(e)
},'gfmFootnoteDefinitionIndent',5)},F:!0},ut={}.hasOwnProperty,lt={
enter:{strikethrough(){this.tag('<del>')}},exit:{strikethrough(){
this.tag('</del>')}}},ct={none:'',left:' align="left"',
right:' align="right"',center:' align="center"'},at={enter:{table(e){
const t=e._align
this.g(),this.tag('<table>'),this.h('tableAlign',t)},tableBody(){
this.h('slurpOneLineEnding'),this.tag('<tbody>')},tableData(){
const e=this.d('tableAlign'),t=this.d('tableColumn'),n=ct[e[t]]
void 0===n?this.buffer():(this.g(),this.tag('<td'+n+'>'))},
tableHead(){this.g(),this.tag('<thead>')},tableHeader(){
const e=this.d('tableAlign'),t=this.d('tableColumn'),n=ct[e[t]]
this.g(),this.tag('<th'+n+'>')},tableRow(){
this.h('tableColumn',0),this.g(),this.tag('<tr>')}},exit:{
codeTextData(e){let t=this.f(e)
this.d('tableAlign')&&(t=t.replace(/\\([\\|])/g,Q)),this.raw(this.encode(t))
},table(){
this.h('tableAlign'),this.h('slurpAllLineEndings'),this.g(),this.tag('</table>')
},tableBody(){this.g(),this.tag('</tbody>')},tableData(){
const e=this.d('tableAlign'),t=this.d('tableColumn')
t in e?(this.tag('</td>'),this.h('tableColumn',t+1)):this.resume()},
tableHead(){
this.g(),this.tag('</thead>'),this.h('slurpOneLineEnding',!0)},
tableHeader(){const e=this.d('tableColumn')
this.tag('</th>'),this.h('tableColumn',e+1)},tableRow(){
const e=this.d('tableAlign')
let t=this.d('tableColumn')
for(;t<e.length;)this.g(),this.tag('<td'+ct[e[t]]+'></td>'),t++
this.h('tableColumn',t),this.g(),this.tag('</tr>')}}},st={flow:{k:{
tokenize(e,t,n){function r(t){
return e.enter('tableCellDivider'),e.e(t),e.exit('tableCellDivider'),
y=!0,i}function i(t){return null===t||d(t)?(t=>{
if(null===t)return n(t)
e.exit('tableRow'),e.exit('tableHead')
const r=w.m
return w.m=!0,e.a({tokenize:v,F:!0
},t=>(w.m=r,e.enter('tableDelimiterRow'),c(t)),e=>(w.m=r,n(e)))(t)
})(t):h(t)?(e.enter('whitespace'),
e.e(t),o):(y&&(y=void 0,z++),124===t?r(t):(e.enter('temporaryTableCellContent'),
u(t)))}function o(t){
return h(t)?(e.e(t),o):(e.exit('whitespace'),i(t))}function u(t){
return null===t||124===t||f(t)?(e.exit('temporaryTableCellContent'),
i(t)):(e.e(t),92===t?l:u)}function l(t){
return 92===t||124===t?(e.e(t),u):u(t)}function c(t){
return null===t||d(t)?m(t):h(t)?(e.enter('whitespace'),
e.e(t),a):45===t?(e.enter('tableDelimiterFiller'),
e.e(t),L=!0,M.push('none'),s):58===t?(e.enter('tableDelimiterAlignment'),
e.e(t),
e.exit('tableDelimiterAlignment'),M.push('left'),k):124===t?(e.enter('tableCellDivider'),
e.e(t),e.exit('tableCellDivider'),c):n(t)}function a(t){
return h(t)?(e.e(t),a):(e.exit('whitespace'),c(t))}function s(t){
return 45===t?(e.e(t),
s):(e.exit('tableDelimiterFiller'),58===t?(e.enter('tableDelimiterAlignment'),
e.e(t),
e.exit('tableDelimiterAlignment'),M[M.length-1]='left'===M[M.length-1]?'center':'right',
b):c(t))}function k(t){
return 45===t?(e.enter('tableDelimiterFiller'),e.e(t),L=!0,s):n(t)}
function b(t){
return null===t||d(t)?m(t):h(t)?(e.enter('whitespace'),e.e(t),a):124===t?(e.enter('tableCellDivider'),
e.e(t),e.exit('tableCellDivider'),c):n(t)}function m(t){
return e.exit('tableDelimiterRow'),
L&&z===M.length?null===t?F(t):e.check(ft,F,e.a({tokenize:v,F:!0
},g(e,p,'linePrefix',4),F))(t):n(t)}function F(n){
return e.exit('table'),t(n)}function p(t){
return e.enter('tableBody'),x(t)}function x(t){
return e.enter('tableRow'),124===t?E(t):(e.enter('temporaryTableCellContent'),
D(t))}function E(t){
return e.enter('tableCellDivider'),e.e(t),e.exit('tableCellDivider'),C
}function C(t){
return null===t||d(t)?(t=>(e.exit('tableRow'),null===t?T(t):e.check(ft,T,e.a({
tokenize:v,F:!0
},g(e,x,'linePrefix',4),T))(t)))(t):h(t)?(e.enter('whitespace'),e.e(t),
A):124===t?E(t):(e.enter('temporaryTableCellContent'),D(t))}
function A(t){return h(t)?(e.e(t),A):(e.exit('whitespace'),C(t))}
function D(t){
return null===t||124===t||f(t)?(e.exit('temporaryTableCellContent'),
C(t)):(e.e(t),92===t?S:D)}function S(t){
return 92===t||124===t?(e.e(t),D):D(t)}function T(t){
return e.exit('tableBody'),F(t)}function v(e,t,n){function r(r){
if(w.o.lazy[w.now().u]||null===r||d(r))return n(r)
const i=w.r[w.r.length-1]
return!w.o.c.disable.k.includes('codeIndented')&&i&&'linePrefix'===i[1].type&&i[2].f(i[1],!0).length>=4?n(r):(w._gfmTableDynamicInterruptHack=!0,
e.check(w.o.c.flow,e=>(w._gfmTableDynamicInterruptHack=!1,
n(e)),e=>(w._gfmTableDynamicInterruptHack=!1,t(e)))(r))}
return t=>(e.enter('lineEnding'),
e.e(t),e.exit('lineEnding'),g(e,r,'linePrefix'))}const w=this,M=[]
let y,L,z=0
return t=>(e.enter('table')._align=M,e.enter('tableHead'),e.enter('tableRow'),124===t?r(t):(z++,
e.enter('temporaryTableCellContent'),u(t)))},resolve(e,t){
let n,r,i,o,u,l,c,a=-1
for(;++a<e.length;){const s=e[a][1]
if(i&&('temporaryTableCellContent'===s.type&&(o=o||a,u=a),('tableCellDivider'===s.type||'tableRow'===s.type)&&u)){
const n={type:'tableContent',start:e[o][1].start,end:e[u][1].end},r={
type:'chunkText',start:n.start,end:n.end,i:'text'}
e.splice(o,u-o+1,['enter',n,t],['enter',r,t],['exit',r,t],['exit',n,t]),a-=u-o-3,
o=void 0,u=void 0}
if('exit'===e[a][0]&&void 0!==l&&l+(c?0:1)<a&&('tableCellDivider'===s.type||'tableRow'===s.type&&(l+3<a||'whitespace'!==e[l][1].type))){
const i={type:r?'tableDelimiter':n?'tableHeader':'tableData',
start:e[l][1].start,end:e[a][1].end}
e.splice(a+('tableCellDivider'===s.type?1:0),0,['exit',i,t]),e.splice(l,0,['enter',i,t]),
a+=2,l=a+1,c=!0}
'tableRow'===s.type&&(i='enter'===e[a][0],i&&(l=a+1,c=!1)),'tableDelimiterRow'===s.type&&(r='enter'===e[a][0],
r&&(l=a+1,c=!1)),'tableHead'===s.type&&(n='enter'===e[a][0])}return e}
}}},ft={tokenize(e,t,n){function r(o){
return-1===o||32===o?(e.e(o),i++,4===i?t:r):null===o||f(o)?t(o):n(o)}
let i=0
return t=>(e.enter('check'),e.e(t),r)},F:!0
},dt=/^(<[/]?)(style|xmp|iframe|noembed|noframes|noscript|title|textarea|script|plaintext)(?![^\t\n\f\r />])/i,ht={
exit:{htmlTextData(e){let t=this.f(e)
t=t.replace(dt,"$1bad-$2"),this.tag(t)}}},kt={enter:{taskListCheck(){
this.tag('<input type="checkbox" disabled="" ')}},exit:{
taskListCheck(){this.tag('/>')},taskListCheckValueChecked(){
this.tag('checked="" ')}}},gt={tokenize(e,t,n){function r(t){
return f(t)?(e.enter('taskListCheckValueUnchecked'),
e.e(t),e.exit('taskListCheckValueUnchecked'),
i):88===t||120===t?(e.enter('taskListCheckValueChecked'),
e.e(t),e.exit('taskListCheckValueChecked'),i):n(t)}function i(r){
return 93===r?(e.enter('taskListCheckMarker'),
e.e(r),e.exit('taskListCheckMarker'),e.exit('taskListCheck'),e.check({
tokenize:U},t,n)):n(r)}const o=this
return t=>null===o.l&&o._gfmTasklistFirstContentOfListItem?(e.enter('taskListCheck'),
e.enter('taskListCheckMarker'),
e.e(t),e.exit('taskListCheckMarker'),r):n(t)}},bt={text:{91:gt}}
return function(i,{disableHtml:o=!1,disableGfm:l=!1}){var s
let f=((i,o,l)=>('string'!=typeof o&&(l=o,o=void 0),function(t={}){
function r(e){const t=e.length
let n,r=0,i=0,o=!1
for(;++r<t;){const t=e[r]
if(t[1]._container)n=void 0,'enter'===t[0]?i++:i--
else switch(t[1].type){case'listItemPrefix':'exit'===t[0]&&(n=!0)
break
case'linePrefix':break
case'lineEndingBlank':'enter'!==t[0]||i||(n?n=void 0:o=!0)
break
default:n=void 0}}e[0][1]._loose=o}function i(e,t){L[e]=t}
function o(e){return L[e]}function l(){T.push([])}function s(){
return T.pop().join('')}function f(e){
D&&(i('lastWasTag',!0),T[T.length-1].push(e))}function d(e){
i('lastWasTag'),T[T.length-1].push(e)}function h(){d(I||'\n')}
function k(){
const e=T[T.length-1],t=e[e.length-1],n=t?t.charCodeAt(t.length-1):null
10!==n&&13!==n&&null!==n&&h()}function g(e){
return o('ignoreEncode')?e:(e=>e.replace(/["&<>]/g,e=>'&'+G[e]+';'))(e)
}function b(){
o('lastWasTag')&&!o('slurpAllLineEndings')&&k(),f('</li>'),i('slurpAllLineEndings')
}function m(){const e=o('fencesCount')
void 0!==e&&e<2&&L.tightStack.length>0&&!o('lastWasTag')&&h(),o('flowCodeSeenData')&&k(),
f('</code></pre>'),
void 0!==e&&e<2&&k(),i('flowCodeSeenData'),i('fencesCount'),i('slurpOneLineEnding')
}function F(){let e=v.length-1
const n=v[e],r=n.referenceId||n.labelId,i=void 0===n.destination?S[c(r)]:n
for(D=!0;e--;)if(v[e].image){D=void 0
break}
n.image?(f('<img src="'+a(i.destination,t.allowDangerousProtocol)+'" alt="'),
d(n.label),
f('"')):f('<a href="'+a(i.destination,t.allowDangerousProtocol)+'"'),
f(i.title?' title="'+i.title+'"':''),
n.image?f(' />'):(f('>'),d(n.label),f('</a>')),v.pop()}function p(e){
d(g(this.f(e)))}function x(){f('<br />')}function E(){
i('ignoreEncode')}function C(){
t.allowDangerousHtml&&i('ignoreEncode',!0)}function A(e){
i('characterReferenceType',e.type)}let D=!0
const S={},T=[[]],v=[],w=[],M={enter:{blockQuote(){
w.push(!1),k(),f('<blockquote>')},codeFenced(){
k(),f('<pre><code'),i('fencesCount',0)},codeFencedFenceInfo:l,
codeFencedFenceMeta:l,codeIndented(){k(),f('<pre><code>')},codeText(){
i('inCodeText',!0),f('<code>')},content(){i('slurpAllLineEndings',!0)
},definition(){l(),v.push({})},definitionDestinationString(){
l(),i('ignoreEncode',!0)},definitionLabelString:l,
definitionTitleString:l,emphasis(){f('<em>')},htmlFlow(){k(),C()},
htmlText:C,image(){v.push({image:!0}),D=void 0},label:l,link(){
v.push({})},listItemMarker(){
o('expectFirstItem')?f('>'):b(),k(),f('<li>'),i('expectFirstItem'),
i('lastWasTag')},listItemValue(e){if(o('expectFirstItem')){
const t=Number.parseInt(this.f(e),10)
1!==t&&f(' start="'+g(t+"")+'"')}},listOrdered(e){
w.push(!e._loose),k(),f('<ol'),i('expectFirstItem',!0)},
listUnordered(e){
w.push(!e._loose),k(),f('<ul'),i('expectFirstItem',!0)},paragraph(){
w[w.length-1]||(k(),f('<p>')),i('slurpAllLineEndings')},reference:l,
resource(){l(),v[v.length-1].destination=''},
resourceDestinationString(){l(),i('ignoreEncode',!0)},
resourceTitleString:l,setextHeading(){l(),i('slurpAllLineEndings')},
strong(){f('<strong>')}},exit:{atxHeading(){
f('</h'+o('headingRank')+'>'),i('headingRank')},atxHeadingSequence(e){
o('headingRank')||(i('headingRank',this.f(e).length),
k(),f('<h'+o('headingRank')+'>'))},autolinkEmail(e){const t=this.f(e)
f('<a href="'+a('mailto:'+t)+'">'),d(g(t)),f('</a>')},
autolinkProtocol(e){const n=this.f(e)
f('<a href="'+a(n,t.allowDangerousProtocol)+'">'),d(g(n)),f('</a>')},
blockQuote(){w.pop(),k(),f('</blockquote>'),i('slurpAllLineEndings')},
characterEscapeValue:p,characterReferenceMarkerHexadecimal:A,
characterReferenceMarkerNumeric:A,characterReferenceValue(t){
let n=this.f(t)
n=o('characterReferenceType')?((e,t)=>{const n=Number.parseInt(e,t)
return n<9||11===n||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||65535==(65535&n)||65534==(65535&n)||n>1114111?'�':String.fromCharCode(n)
})(n,'characterReferenceMarkerNumeric'===o('characterReferenceType')?10:16):e(n),
d(g(n)),i('characterReferenceType')},codeFenced:m,codeFencedFence(){
const e=o('fencesCount')||0
e||(f('>'),i('slurpOneLineEnding',!0)),i('fencesCount',e+1)},
codeFencedFenceInfo(){f(' class="language-'+s()+'"')},
codeFencedFenceMeta:s,codeFlowValue(e){
d(g(this.f(e))),i('flowCodeSeenData',!0)},codeIndented:m,codeText(){
i('inCodeText'),f('</code>')},codeTextData:p,data:p,definition(){
const e=c(v[v.length-1].labelId)
s(),J.call(S,e)||(S[e]=v[v.length-1]),v.pop()},
definitionDestinationString(){
v[v.length-1].destination=s(),i('ignoreEncode')},
definitionLabelString(e){s(),v[v.length-1].labelId=this.f(e)},
definitionTitleString(){v[v.length-1].title=s()},emphasis(){f('</em>')
},hardBreakEscape:x,hardBreakTrailing:x,htmlFlow:E,htmlFlowData:p,
htmlText:E,htmlTextData:p,image:F,label(){v[v.length-1].label=s()},
labelText(e){v[v.length-1].labelId=this.f(e)},lineEnding(e){
o('slurpAllLineEndings')||(o('slurpOneLineEnding')?i('slurpOneLineEnding'):o('inCodeText')?d(' '):d(g(this.f(e))))
},link:F,listOrdered(){b(),w.pop(),h(),f('</ol>')},listUnordered(){
b(),w.pop(),h(),f('</ul>')},paragraph(){
w[w.length-1]?i('slurpAllLineEndings',!0):f('</p>')},reference:s,
referenceString(e){v[v.length-1].referenceId=this.f(e)},resource:s,
resourceDestinationString(){
v[v.length-1].destination=s(),i('ignoreEncode')},
resourceTitleString(){v[v.length-1].title=s()},setextHeading(){
const e=s()
k(),f('<h'+o('headingRank')+'>'),d(e),f('</h'+o('headingRank')+'>'),i('slurpAllLineEndings'),
i('headingRank')},setextHeadingLineSequence(e){
i('headingRank',61===this.f(e).charCodeAt(0)?1:2)},
setextHeadingText(){i('slurpAllLineEndings',!0)},strong(){
f('</strong>')},thematicBreak(){k(),f('<hr />')}}
},y=u([M].concat(t.htmlExtensions||[])),L={tightStack:w,definitions:S
},z={g:k,options:t,encode:g,raw:d,tag:f,buffer:l,resume:s,h:i,d:o}
let I=t.defaultLineEnding
return e=>{let t=-1,i=0
const o=[]
let u=[],l=[]
for(;++t<e.length;)I||'lineEnding'!==e[t][1].type&&'lineEndingBlank'!==e[t][1].type||(I=e[t][2].f(e[t][1])),
'listOrdered'!==e[t][1].type&&'listUnordered'!==e[t][1].type||('enter'===e[t][0]?o.push(t):r(e.slice(o.pop(),t))),
'definition'===e[t][1].type&&('enter'===e[t][0]?(l=n(l,e.slice(i,t)),
i=t):(u=n(u,e.slice(i,t+1)),i=t+1))
u=n(u,l),u=n(u,e.slice(i)),t=-1
const c=u
for(y.enter.k&&y.enter.k.call(z);++t<e.length;){const e=y[c[t][0]]
J.call(e,c[t][1].type)&&e[c[t][1].type].call(Object.assign({
f:c[t][2].f},z),c[t][1])}
return y.exit.k&&y.exit.k.call(z),T[0].join('')}}(l)((e=>{
for(;!p(e););return e})(((e={})=>{function i(e){
return r=>function(e,r,i){function o(e){return((e,t)=>{
const n=t.start.s,r=t.start.n,i=t.end.s,o=t.end.n
let u
return n===i?u=[e[n].slice(r,o)]:(u=e.slice(n,i),r>-1&&(u[0]=u[0].slice(r)),o>0&&u.push(e[i].slice(0,o))),
u})(b,e)}function u(){return Object.assign({},h)}function l(e){E=E(e)}
function c(e,t){t.restore()}function a(e,t){return(n,r,i)=>{
function o(e){return s=e,d=0,0===e.length?i:l(e[d])}function l(e){
return n=>(g=(()=>{
const e=u(),t=x.l,n=x.currentConstruct,r=x.r.length,i=Array.from(F)
return{restore(){h=e,x.l=t,x.currentConstruct=n,x.r.length=r,F=i,f()},
from:r}
})(),k=e,e.F||(x.currentConstruct=e),e.name&&x.o.c.disable.k.includes(e.name)?a():e.tokenize.call(t?Object.assign(Object.create(x),t):x,p,c,a)(n))
}function c(t){return e(k,g),r}function a(e){
return g.restore(),++d<s.length?l(s[d]):i}let s,d,k,g
return Array.isArray(n)?o(n):'tokenize'in n?o([n]):(b=n,e=>{
const t=null!==e&&b[e],n=null!==e&&b.k
return o([...Array.isArray(t)?t:t?[t]:[],...Array.isArray(n)?n:n?[n]:[]])(e)
})
var b}}function s(e,n){
e.resolveAll&&!g.includes(e)&&g.push(e),e.resolve&&t(x.r,n,x.r.length-n,e.resolve(x.r.slice(n),x)),
e.resolveTo&&(x.r=e.resolveTo(x.r,x))}function f(){
h.u in k&&h.column<2&&(h.column=k[h.u],h.t+=k[h.u]-1)}
let h=Object.assign(i?Object.assign({},i):{u:1,column:1,t:0},{s:0,n:-1
})
const k={},g=[]
let b=[],F=[]
const p={e(e){
d(e)?(h.u++,h.column=1,h.t+=-3===e?2:1,f()):-1!==e&&(h.column++,h.t++),
h.n<0?h.s++:(h.n++,h.n===b[h.s].length&&(h.n=-1,h.s++)),x.l=e},
enter(e,t){const n=t||{}
return n.type=e,n.start=u(),x.r.push(['enter',n,x]),F.push(n),n},
exit(e){const t=F.pop()
return t.end=u(),x.r.push(['exit',t,x]),t},a:a((e,t)=>{s(e,t.from)}),
check:a(c),m:a(c,{m:!0})},x={l:null,code:null,b:{},r:[],o:e,
sliceStream:o,f(e,t){return((e,t)=>{let n=-1
const r=[]
let i
for(;++n<e.length;){const o=e[n]
let u
if('string'==typeof o)u=o
else switch(o){case-5:u='\r'
break
case-4:u='\n'
break
case-3:u="\r\n"
break
case-2:u=t?' ':'\t'
break
case-1:if(!t&&i)continue
u=' '
break
default:u=String.fromCharCode(o)}i=-2===o,r.push(u)}return r.join('')
})(o(e),t)},now:u,defineSkip(e){k[e.u]=e.column,f()},write(e){
return b=n(b,e),(()=>{let e
for(;h.s<b.length;){const t=b[h.s]
if('string'==typeof t)for(e=h.s,h.n<0&&(h.n=0);h.s===e&&h.n<t.length;)l(t.charCodeAt(h.n))
else l(t)}})(),null!==b[b.length-1]?[]:(s(r,0),x.r=m(g,x.r,x),x.r)}}
let E=r.tokenize.call(x,p)
return r.resolveAll&&g.push(r),x}(o,e,r)}const o={defined:[],lazy:{},
c:r([Ue].concat(e.extensions||[])),content:i(oe),document:i(ue),
flow:i(Ve),string:i(_e),text:i(Qe)}
return o})(l).document().write((()=>{let e,t=1,n='',r=!0
return(i,o,u)=>{const l=[]
let c,a,s,f,d
for(i=n+i.toString(o),s=0,n='',r&&(65279===i.charCodeAt(0)&&s++,r=void 0);s<i.length;){
if(Ne.lastIndex=s,
c=Ne.exec(i),f=c&&void 0!==c.index?c.index:i.length,d=i.charCodeAt(f),
!c){n=i.slice(s)
break}if(10===d&&s===f&&e)l.push(-3),e=void 0
else switch(e&&(l.push(-5),e=void 0),s<f&&(l.push(i.slice(s,f)),t+=f-s),d){
case 0:l.push(65533),t++
break
case 9:for(a=4*Math.ceil(t/4),l.push(-2);t++<a;)l.push(-1)
break
case 10:l.push(-4),t=1
break
default:e=!0,t=1}s=f+1}
return u&&(e&&l.push(-5),n&&l.push(n),l.push(null)),l}
})()(i,o,!0))))))(i,{extensions:l?null:[(s={singleTilde:!1},r([nt,{
document:{91:{tokenize:q,continuation:{tokenize:H},exit:V}},text:{91:{
tokenize:j},93:{add:'after',tokenize:P,resolveTo:R}}},_(s),st,bt]))],
htmlExtensions:l?null:[N()],allowDangerousHtml:!o})
return f}}()
