12
function e(e,t){
return e&&'object'==typeof e&&(e.value||(t?e.alt:'')||'children'in e&&n(e.children,t)||Array.isArray(e)&&n(e,t))||''
}function n(n,t){for(var r=[],i=-1;++i<n.length;)r[i]=e(n[i],t)
return r.join('')}function t(e,n,t,r){const i=e.length
let o,l=0
if(n=n<0?-n>i?0:i+n:n>i?i:n,t=t>0?t:0,r.length<1e4)o=Array.from(r),o.unshift(n,t),
[].splice.apply(e,o)
else for(t&&[].splice.apply(e,[n,t]);l<r.length;)o=r.slice(l,l+1e4),o.unshift(n,0),
[].splice.apply(e,o),l+=1e4,n+=1e4}function r(e,n){
return e.length>0?(t(e,e.length,0,n),e):n}const i={}.hasOwnProperty
function o(e){const n={}
let t=-1
for(;++t<e.length;)l(n,e[t])
return n}function l(e,n){let t
for(t in n){const r=(i.call(e,t)?e[t]:void 0)||(e[t]={}),o=n[t]
let l
for(l in o){i.call(r,l)||(r[l]=[])
const e=o[l]
u(r[l],Array.isArray(e)?e:e?[e]:[])}}}function u(e,n){let r=-1
const i=[]
for(;++r<n.length;)('after'===n[r].add?e:i).push(n[r])
t(e,0,0,i)}
const c=b(/[A-Za-z]/),a=b(/\d/),s=b(/[\dA-Fa-f]/),f=b(/[\dA-Za-z]/),d=b(/[!-/:-@[-`{-~]/),p=b(/[#-'*+\--9=?A-Z^-~]/)
function h(e){return null!==e&&(e<32||127===e)}function g(e){
return null!==e&&(e<0||32===e)}function m(e){return null!==e&&e<-2}
function k(e){return-2===e||-1===e||32===e}
const x=b(/\s/),y=b(/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/)
function b(e){return function(n){
return null!==n&&e.test(String.fromCharCode(n))}}function v(e,n,t,r){
const i=r?r-1:Number.POSITIVE_INFINITY
let o=0
return function(r){if(k(r))return e.enter(t),l(r)
return n(r)}
function l(r){return k(r)&&o++<i?(e.consume(r),l):(e.exit(t),n(r))}}
const S={tokenize:function(e){
const n=e.attempt(this.parser.constructs.contentInitial,(function(t){
if(null===t)return void e.consume(t)
return e.enter('lineEnding'),e.consume(t),e.exit('lineEnding'),v(e,n,'linePrefix')
}),(function(n){return e.enter('paragraph'),r(n)}))
let t
return n
function r(n){const r=e.enter('chunkText',{contentType:'text',
previous:t})
return t&&(t.next=r),t=r,i(n)}function i(n){
return null===n?(e.exit('chunkText'),
e.exit('paragraph'),void e.consume(n)):m(n)?(e.consume(n),
e.exit('chunkText'),r):(e.consume(n),i)}}}
const C={tokenize:function(e){const n=this,r=[]
let i,o,l,u=0
return c
function c(t){if(u<r.length){const i=r[u]
return n.containerState=i[1],e.attempt(i[0].continuation,a,s)(t)}
return s(t)}function a(e){if(u++,n.containerState._closeFlow){
n.containerState._closeFlow=void 0,i&&b()
const r=n.events.length
let o,l=r
for(;l--;)if('exit'===n.events[l][0]&&'chunkFlow'===n.events[l][1].type){
o=n.events[l][1].end
break}y(u)
let c=r
for(;c<n.events.length;)n.events[c][1].end=Object.assign({},o),c++
return t(n.events,l+1,0,n.events.slice(r)),n.events.length=c,s(e)}
return c(e)}function s(t){if(u===r.length){if(!i)return p(t)
if(i.currentConstruct&&i.currentConstruct.concrete)return g(t)
n.interrupt=Boolean(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)
}return n.containerState={},e.check(F,f,d)(t)}function f(e){
return i&&b(),y(u),p(e)}function d(e){
return n.parser.lazy[n.now().line]=u!==r.length,l=n.now().offset,g(e)}
function p(t){return n.containerState={},e.attempt(F,h,g)(t)}
function h(e){
return u++,r.push([n.currentConstruct,n.containerState]),p(e)}
function g(t){
return null===t?(i&&b(),y(0),void e.consume(t)):(i=i||n.parser.flow(n.now()),
e.enter('chunkFlow',{contentType:'flow',previous:o,_tokenizer:i
}),k(t))}function k(t){
return null===t?(x(e.exit('chunkFlow'),!0),y(0),void e.consume(t)):m(t)?(e.consume(t),
x(e.exit('chunkFlow')),u=0,n.interrupt=void 0,c):(e.consume(t),k)}
function x(e,r){const c=n.sliceStream(e)
if(r&&c.push(null),e.previous=o,o&&(o.next=e),o=e,i.defineSkip(e.start),i.write(c),
n.parser.lazy[e.start.line]){let e=i.events.length
for(;e--;)if(i.events[e][1].start.offset<l&&(!i.events[e][1].end||i.events[e][1].end.offset>l))return
const r=n.events.length
let o,c,a=r
for(;a--;)if('exit'===n.events[a][0]&&'chunkFlow'===n.events[a][1].type){
if(o){c=n.events[a][1].end
break}o=!0}
for(y(u),e=r;e<n.events.length;)n.events[e][1].end=Object.assign({},c),
e++
t(n.events,a+1,0,n.events.slice(r)),n.events.length=e}}function y(t){
let i=r.length
for(;i-- >t;){const t=r[i]
n.containerState=t[1],t[0].exit.call(n,e)}r.length=t}function b(){
i.write([null]),o=void 0,i=void 0,n.containerState._closeFlow=void 0}}
},F={tokenize:function(e,n,t){
return v(e,e.attempt(this.parser.constructs.document,n,t),'linePrefix',this.parser.constructs.disable.null.includes('codeIndented')?void 0:4)
}}
function w(e){return null===e||g(e)||x(e)?1:y(e)?2:void 0}
function A(e,n,t){const r=[]
let i=-1
for(;++i<e.length;){const o=e[i].resolveAll
o&&!r.includes(o)&&(n=o(n,t),r.push(o))}return n}const D={
name:'attention',tokenize:function(e,n){
const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=w(r)
let o
return function(n){return e.enter('attentionSequence'),o=n,l(n)}
function l(u){if(u===o)return e.consume(u),l
const c=e.exit('attentionSequence'),a=w(u),s=!a||2===a&&i||t.includes(u),f=!i||2===i&&a||t.includes(r)
return c._open=Boolean(42===o?s:s&&(i||!f)),c._close=Boolean(42===o?f:f&&(a||!s)),
n(u)}},resolveAll:function(e,n){let i,o,l,u,c,a,s,f,d=-1
for(;++d<e.length;)if('enter'===e[d][0]&&'attentionSequence'===e[d][1].type&&e[d][1]._close)for(i=d;i--;)if('exit'===e[i][0]&&'attentionSequence'===e[i][1].type&&e[i][1]._open&&n.sliceSerialize(e[i][1]).charCodeAt(0)===n.sliceSerialize(e[d][1]).charCodeAt(0)){
if((e[i][1]._close||e[d][1]._open)&&(e[d][1].end.offset-e[d][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[d][1].end.offset-e[d][1].start.offset)%3))continue
a=e[i][1].end.offset-e[i][1].start.offset>1&&e[d][1].end.offset-e[d][1].start.offset>1?2:1
const p=Object.assign({},e[i][1].end),h=Object.assign({},e[d][1].start)
E(p,-a),E(h,a),u={type:a>1?'strongSequence':'emphasisSequence',
start:p,end:Object.assign({},e[i][1].end)},c={
type:a>1?'strongSequence':'emphasisSequence',
start:Object.assign({},e[d][1].start),end:h},l={
type:a>1?'strongText':'emphasisText',
start:Object.assign({},e[i][1].end),
end:Object.assign({},e[d][1].start)},o={type:a>1?'strong':'emphasis',
start:Object.assign({},u.start),end:Object.assign({},c.end)
},e[i][1].end=Object.assign({},u.start),
e[d][1].start=Object.assign({},c.end),s=[],
e[i][1].end.offset-e[i][1].start.offset&&(s=r(s,[['enter',e[i][1],n],['exit',e[i][1],n]])),
s=r(s,[['enter',o,n],['enter',u,n],['exit',u,n],['enter',l,n]]),
s=r(s,A(n.parser.constructs.insideSpan.null,e.slice(i+1,d),n)),
s=r(s,[['exit',l,n],['enter',c,n],['exit',c,n],['exit',o,n]]),
e[d][1].end.offset-e[d][1].start.offset?(f=2,
s=r(s,[['enter',e[d][1],n],['exit',e[d][1],n]])):f=0,
t(e,i-1,d-i+3,s),d=i+s.length-f-2
break}d=-1
for(;++d<e.length;)'attentionSequence'===e[d][1].type&&(e[d][1].type='data')
return e}}
function E(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const T={
name:'autolink',tokenize:function(e,n,t){let r=1
return function(n){
return e.enter('autolink'),e.enter('autolinkMarker'),e.consume(n),
e.exit('autolinkMarker'),e.enter('autolinkProtocol'),i}
function i(n){return c(n)?(e.consume(n),o):p(n)?a(n):t(n)}
function o(e){return 43===e||45===e||46===e||f(e)?l(e):a(e)}
function l(n){
return 58===n?(e.consume(n),u):(43===n||45===n||46===n||f(n))&&r++<32?(e.consume(n),
l):a(n)}function u(n){
return 62===n?(e.exit('autolinkProtocol'),m(n)):null===n||32===n||60===n||h(n)?t(n):(e.consume(n),
u)}function a(n){
return 64===n?(e.consume(n),r=0,s):p(n)?(e.consume(n),a):t(n)}
function s(e){return f(e)?d(e):t(e)}function d(n){
return 46===n?(e.consume(n),r=0,
s):62===n?(e.exit('autolinkProtocol').type='autolinkEmail',m(n)):g(n)}
function g(n){
return(45===n||f(n))&&r++<63?(e.consume(n),45===n?g:d):t(n)}
function m(t){
return e.enter('autolinkMarker'),e.consume(t),e.exit('autolinkMarker'),
e.exit('autolink'),n}}}
const L={tokenize:function(e,n,t){return v(e,(function(e){
return null===e||m(e)?n(e):t(e)}),'linePrefix')},partial:!0}
const P={name:'blockQuote',tokenize:function(e,n,t){const r=this
return function(n){if(62===n){const t=r.containerState
return t.open||(e.enter('blockQuote',{_container:!0
}),t.open=!0),e.enter('blockQuotePrefix'),
e.enter('blockQuoteMarker'),e.consume(n),e.exit('blockQuoteMarker'),i}
return t(n)}
function i(t){
return k(t)?(e.enter('blockQuotePrefixWhitespace'),e.consume(t),e.exit('blockQuotePrefixWhitespace'),
e.exit('blockQuotePrefix'),n):(e.exit('blockQuotePrefix'),n(t))}},
continuation:{tokenize:function(e,n,t){
return v(e,e.attempt(P,n,t),'linePrefix',this.parser.constructs.disable.null.includes('codeIndented')?void 0:4)
}},exit:function(e){e.exit('blockQuote')}}
const z={name:'characterEscape',tokenize:function(e,n,t){
return function(n){
return e.enter('characterEscape'),e.enter('escapeMarker'),e.consume(n),
e.exit('escapeMarker'),r}
function r(r){
return d(r)?(e.enter('characterEscapeValue'),e.consume(r),e.exit('characterEscapeValue'),
e.exit('characterEscape'),n):t(r)}}}
const I=document.createElement('i')
function O(e){const n='&'+e+';'
I.innerHTML=n
const t=I.textContent
return(59!==t.charCodeAt(t.length-1)||'semi'===e)&&(t!==n&&t)}
const M={name:'characterReference',tokenize:function(e,n,t){
const r=this
let i,o,l=0
return function(n){
return e.enter('characterReference'),e.enter('characterReferenceMarker'),
e.consume(n),e.exit('characterReferenceMarker'),u}
function u(n){
return 35===n?(e.enter('characterReferenceMarkerNumeric'),e.consume(n),
e.exit('characterReferenceMarkerNumeric'),
c):(e.enter('characterReferenceValue'),i=31,o=f,d(n))}function c(n){
return 88===n||120===n?(e.enter('characterReferenceMarkerHexadecimal'),
e.consume(n),
e.exit('characterReferenceMarkerHexadecimal'),e.enter('characterReferenceValue'),
i=6,o=s,d):(e.enter('characterReferenceValue'),i=7,o=a,d(n))}
function d(u){let c
return 59===u&&l?(c=e.exit('characterReferenceValue'),o!==f||O(r.sliceSerialize(c))?(e.enter('characterReferenceMarker'),
e.consume(u),
e.exit('characterReferenceMarker'),e.exit('characterReference'),n):t(u)):o(u)&&l++<i?(e.consume(u),
d):t(u)}}}
const B={name:'codeFenced',tokenize:function(e,n,t){const r=this,i={
tokenize:function(e,n,t){let r=0
return v(e,i,'linePrefix',this.parser.constructs.disable.null.includes('codeIndented')?void 0:4)
function i(n){
return e.enter('codeFencedFence'),e.enter('codeFencedFenceSequence'),
o(n)}function o(n){
return n===c?(e.consume(n),r++,o):r<a?t(n):(e.exit('codeFencedFenceSequence'),
v(e,l,'whitespace')(n))}function l(r){
return null===r||m(r)?(e.exit('codeFencedFence'),n(r)):t(r)}},
partial:!0},o={tokenize:function(e,n,t){const r=this
return i
function i(n){
return e.enter('lineEnding'),e.consume(n),e.exit('lineEnding'),o}
function o(e){return r.parser.lazy[r.now().line]?t(e):n(e)}},
partial:!0
},l=this.events[this.events.length-1],u=l&&'linePrefix'===l[1].type?l[2].sliceSerialize(l[1],!0).length:0
let c,a=0
return function(n){
return e.enter('codeFenced'),e.enter('codeFencedFence'),e.enter('codeFencedFenceSequence'),
c=n,s(n)}
function s(n){
return n===c?(e.consume(n),a++,s):(e.exit('codeFencedFenceSequence'),
a<3?t(n):v(e,f,'whitespace')(n))}function f(n){
return null===n||m(n)?k(n):(e.enter('codeFencedFenceInfo'),
e.enter('chunkString',{contentType:'string'}),d(n))}function d(n){
return null===n||g(n)?(e.exit('chunkString'),
e.exit('codeFencedFenceInfo'),v(e,p,'whitespace')(n)):96===n&&n===c?t(n):(e.consume(n),
d)}function p(n){
return null===n||m(n)?k(n):(e.enter('codeFencedFenceMeta'),e.enter('chunkString',{
contentType:'string'}),h(n))}function h(n){
return null===n||m(n)?(e.exit('chunkString'),
e.exit('codeFencedFenceMeta'),k(n)):96===n&&n===c?t(n):(e.consume(n),
h)}function k(t){
return e.exit('codeFencedFence'),r.interrupt?n(t):x(t)}function x(n){
return null===n?b(n):m(n)?e.attempt(o,e.attempt(i,b,u?v(e,x,'linePrefix',u+1):x),b)(n):(e.enter('codeFlowValue'),
y(n))}function y(n){
return null===n||m(n)?(e.exit('codeFlowValue'),x(n)):(e.consume(n),y)}
function b(t){return e.exit('codeFenced'),n(t)}},concrete:!0}
const R={name:'codeIndented',tokenize:function(e,n,t){const r=this
return function(n){
return e.enter('codeIndented'),v(e,i,'linePrefix',5)(n)}
function i(e){const n=r.events[r.events.length-1]
return n&&'linePrefix'===n[1].type&&n[2].sliceSerialize(n[1],!0).length>=4?o(e):t(e)
}function o(n){
return null===n?u(n):m(n)?e.attempt(_,o,u)(n):(e.enter('codeFlowValue'),
l(n))}function l(n){
return null===n||m(n)?(e.exit('codeFlowValue'),o(n)):(e.consume(n),l)}
function u(t){return e.exit('codeIndented'),n(t)}}},_={
tokenize:function(e,n,t){const r=this
return i
function i(n){
return r.parser.lazy[r.now().line]?t(n):m(n)?(e.enter('lineEnding'),
e.consume(n),e.exit('lineEnding'),i):v(e,o,'linePrefix',5)(n)}
function o(e){const o=r.events[r.events.length-1]
return o&&'linePrefix'===o[1].type&&o[2].sliceSerialize(o[1],!0).length>=4?n(e):m(e)?i(e):t(e)
}},partial:!0}
const j={name:'codeText',tokenize:function(e,n,t){let r,i,o=0
return function(n){
return e.enter('codeText'),e.enter('codeTextSequence'),l(n)}
function l(n){
return 96===n?(e.consume(n),o++,l):(e.exit('codeTextSequence'),u(n))}
function u(n){
return null===n?t(n):96===n?(i=e.enter('codeTextSequence'),r=0,a(n)):32===n?(e.enter('space'),
e.consume(n),
e.exit('space'),u):m(n)?(e.enter('lineEnding'),e.consume(n),e.exit('lineEnding'),
u):(e.enter('codeTextData'),c(n))}function c(n){
return null===n||32===n||96===n||m(n)?(e.exit('codeTextData'),
u(n)):(e.consume(n),c)}function a(t){
return 96===t?(e.consume(t),r++,a):r===o?(e.exit('codeTextSequence'),
e.exit('codeText'),n(t)):(i.type='codeTextData',c(t))}},
resolve:function(e){let n,t,r=e.length-4,i=3
if(!('lineEnding'!==e[i][1].type&&'space'!==e[i][1].type||'lineEnding'!==e[r][1].type&&'space'!==e[r][1].type))for(n=i;++n<r;)if('codeTextData'===e[n][1].type){
e[i][1].type='codeTextPadding',
e[r][1].type='codeTextPadding',i+=2,r-=2
break}n=i-1,r++
for(;++n<=r;)void 0===t?n!==r&&'lineEnding'!==e[n][1].type&&(t=n):n!==r&&'lineEnding'!==e[n][1].type||(e[t][1].type='codeTextData',
n!==t+2&&(e[t][1].end=e[n-1][1].end,
e.splice(t+2,n-t-2),r-=n-t-2,n=t+2),t=void 0)
return e},previous:function(e){
return 96!==e||'characterEscape'===this.events[this.events.length-1][1].type
}}
function H(e){const n={}
let r,i,o,l,u,c,a,s=-1
for(;++s<e.length;){for(;s in n;)s=n[s]
if(r=e[s],s&&'chunkFlow'===r[1].type&&'listItemPrefix'===e[s-1][1].type&&(c=r[1]._tokenizer.events,
o=0,
o<c.length&&'lineEndingBlank'===c[o][1].type&&(o+=2),o<c.length&&'content'===c[o][1].type))for(;++o<c.length&&'content'!==c[o][1].type;)'chunkText'===c[o][1].type&&(c[o][1]._isInFirstContentOfListItem=!0,
o++)
if('enter'===r[0])r[1].contentType&&(Object.assign(n,N(e,s)),s=n[s],a=!0)
else if(r[1]._container){
for(o=s,i=void 0;o--&&(l=e[o],'lineEnding'===l[1].type||'lineEndingBlank'===l[1].type);)'enter'===l[0]&&(i&&(e[i][1].type='lineEndingBlank'),
l[1].type='lineEnding',i=o)
i&&(r[1].end=Object.assign({},e[i][1].start),u=e.slice(i,s),u.unshift(r),t(e,i,s-i+1,u))
}}return!a}function N(e,n){const r=e[n][1],i=e[n][2]
let o=n-1
const l=[],u=r._tokenizer||i.parser[r.contentType](r.start),c=u.events,a=[],s={}
let f,d,p=-1,h=r,g=0,m=0
const k=[m]
for(;h;){for(;e[++o][1]!==h;);
l.push(o),h._tokenizer||(f=i.sliceStream(h),h.next||f.push(null),
d&&u.defineSkip(h.start),
h._isInFirstContentOfListItem&&(u._gfmTasklistFirstContentOfListItem=!0),
u.write(f),
h._isInFirstContentOfListItem&&(u._gfmTasklistFirstContentOfListItem=void 0)),
d=h,h=h.next}
for(h=r;++p<c.length;)'exit'===c[p][0]&&'enter'===c[p-1][0]&&c[p][1].type===c[p-1][1].type&&c[p][1].start.line!==c[p][1].end.line&&(m=p+1,
k.push(m),h._tokenizer=void 0,h.previous=void 0,h=h.next)
for(u.events=[],h?(h._tokenizer=void 0,h.previous=void 0):k.pop(),p=k.length;p--;){
const n=c.slice(k[p],k[p+1]),r=l.pop()
a.unshift([r,r+n.length-1]),t(e,r,2,n)}
for(p=-1;++p<a.length;)s[g+a[p][0]]=g+a[p][1],g+=a[p][1]-a[p][0]-1
return s}const U={tokenize:function(e,n){let t
return function(n){
return e.enter('content'),t=e.enter('chunkContent',{
contentType:'content'}),r(n)}
function r(n){
return null===n?i(n):m(n)?e.check(q,o,i)(n):(e.consume(n),r)}
function i(t){return e.exit('chunkContent'),e.exit('content'),n(t)}
function o(n){
return e.consume(n),e.exit('chunkContent'),t.next=e.enter('chunkContent',{
contentType:'content',previous:t}),t=t.next,r}},resolve:function(e){
return H(e),e}},q={tokenize:function(e,n,t){const r=this
return function(n){
return e.exit('chunkContent'),e.enter('lineEnding'),e.consume(n),
e.exit('lineEnding'),v(e,i,'linePrefix')}
function i(i){if(null===i||m(i))return t(i)
const o=r.events[r.events.length-1]
return!r.parser.constructs.disable.null.includes('codeIndented')&&o&&'linePrefix'===o[1].type&&o[2].sliceSerialize(o[1],!0).length>=4?n(i):e.interrupt(r.parser.constructs.flow,t,n)(i)
}},partial:!0}
function V(e,n,t,r,i,o,l,u,c){const a=c||Number.POSITIVE_INFINITY
let s=0
return function(n){
if(60===n)return e.enter(r),e.enter(i),e.enter(o),e.consume(n),
e.exit(o),f
if(null===n||41===n||h(n))return t(n)
return e.enter(r),e.enter(l),e.enter(u),e.enter('chunkString',{
contentType:'string'}),k(n)}
function f(t){
return 62===t?(e.enter(o),e.consume(t),e.exit(o),e.exit(i),e.exit(r),
n):(e.enter(u),e.enter('chunkString',{contentType:'string'}),d(t))}
function d(n){
return 62===n?(e.exit('chunkString'),e.exit(u),f(n)):null===n||60===n||m(n)?t(n):(e.consume(n),
92===n?p:d)}function p(n){
return 60===n||62===n||92===n?(e.consume(n),d):d(n)}function k(i){
return 40===i?++s>a?t(i):(e.consume(i),
k):41===i?s--?(e.consume(i),k):(e.exit('chunkString'),
e.exit(u),e.exit(l),e.exit(r),
n(i)):null===i||g(i)?s?t(i):(e.exit('chunkString'),
e.exit(u),e.exit(l),e.exit(r),
n(i)):h(i)?t(i):(e.consume(i),92===i?x:k)}function x(n){
return 40===n||41===n||92===n?(e.consume(n),k):k(n)}}
function W(e,n,t,r,i,o){const l=this
let u,c=0
return function(n){
return e.enter(r),e.enter(i),e.consume(n),e.exit(i),e.enter(o),a}
function a(f){
return null===f||91===f||93===f&&!u||94===f&&!c&&'_hiddenFootnoteSupport'in l.parser.constructs||c>999?t(f):93===f?(e.exit(o),
e.enter(i),
e.consume(f),e.exit(i),e.exit(r),n):m(f)?(e.enter('lineEnding'),e.consume(f),
e.exit('lineEnding'),a):(e.enter('chunkString',{contentType:'string'
}),s(f))}function s(n){
return null===n||91===n||93===n||m(n)||c++>999?(e.exit('chunkString'),
a(n)):(e.consume(n),u=u||!k(n),92===n?f:s)}function f(n){
return 91===n||92===n||93===n?(e.consume(n),c++,s):s(n)}}
function Q(e,n,t,r,i,o){let l
return function(n){
return e.enter(r),e.enter(i),e.consume(n),e.exit(i),l=40===n?41:n,u}
function u(t){
return t===l?(e.enter(i),e.consume(t),e.exit(i),e.exit(r),n):(e.enter(o),
c(t))}function c(n){
return n===l?(e.exit(o),u(l)):null===n?t(n):m(n)?(e.enter('lineEnding'),
e.consume(n),
e.exit('lineEnding'),v(e,c,'linePrefix')):(e.enter('chunkString',{
contentType:'string'}),a(n))}function a(n){
return n===l||null===n||m(n)?(e.exit('chunkString'),
c(n)):(e.consume(n),92===n?s:a)}function s(n){
return n===l||92===n?(e.consume(n),a):a(n)}}function K(e,n){let t
return function r(i){
if(m(i))return e.enter('lineEnding'),e.consume(i),e.exit('lineEnding'),
t=!0,r
if(k(i))return v(e,r,t?'linePrefix':'lineSuffix')(i)
return n(i)}}function Y(e){
return e.replace(/[\t\n\r ]+/g,' ').replace(/^ | $/g,'').toLowerCase().toUpperCase()
}const X={name:'definition',tokenize:function(e,n,t){const r=this
let i
return function(n){
return e.enter('definition'),W.call(r,e,o,t,'definitionLabel','definitionLabelMarker','definitionLabelString')(n)
}
function o(n){
return i=Y(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),
58===n?(e.enter('definitionMarker'),
e.consume(n),e.exit('definitionMarker'),K(e,V(e,e.attempt(Z,v(e,l,'whitespace'),v(e,l,'whitespace')),t,'definitionDestination','definitionDestinationLiteral','definitionDestinationLiteralMarker','definitionDestinationRaw','definitionDestinationString'))):t(n)
}function l(o){
return null===o||m(o)?(e.exit('definition'),r.parser.defined.includes(i)||r.parser.defined.push(i),
n(o)):t(o)}}},Z={tokenize:function(e,n,t){return function(n){
return g(n)?K(e,r)(n):t(n)}
function r(n){
return 34===n||39===n||40===n?Q(e,v(e,i,'whitespace'),t,'definitionTitle','definitionTitleMarker','definitionTitleString')(n):t(n)
}function i(e){return null===e||m(e)?n(e):t(e)}},partial:!0}
const $={name:'hardBreakEscape',tokenize:function(e,n,t){
return function(n){
return e.enter('hardBreakEscape'),e.enter('escapeMarker'),e.consume(n),
r}
function r(r){
return m(r)?(e.exit('escapeMarker'),e.exit('hardBreakEscape'),n(r)):t(r)
}}}
const J={name:'headingAtx',tokenize:function(e,n,t){const r=this
let i=0
return function(n){
return e.enter('atxHeading'),e.enter('atxHeadingSequence'),o(n)}
function o(u){
return 35===u&&i++<6?(e.consume(u),o):null===u||g(u)?(e.exit('atxHeadingSequence'),
r.interrupt?n(u):l(u)):t(u)}function l(t){
return 35===t?(e.enter('atxHeadingSequence'),
u(t)):null===t||m(t)?(e.exit('atxHeading'),
n(t)):k(t)?v(e,l,'whitespace')(t):(e.enter('atxHeadingText'),c(t))}
function u(n){
return 35===n?(e.consume(n),u):(e.exit('atxHeadingSequence'),l(n))}
function c(n){
return null===n||35===n||g(n)?(e.exit('atxHeadingText'),l(n)):(e.consume(n),
c)}},resolve:function(e,n){let r,i,o=e.length-2,l=3
'whitespace'===e[l][1].type&&(l+=2)
o-2>l&&'whitespace'===e[o][1].type&&(o-=2)
'atxHeadingSequence'===e[o][1].type&&(l===o-1||o-4>l&&'whitespace'===e[o-2][1].type)&&(o-=l+1===o?2:4)
o>l&&(r={type:'atxHeadingText',start:e[l][1].start,end:e[o][1].end
},i={type:'chunkText',start:e[l][1].start,end:e[o][1].end,
contentType:'text'
},t(e,l,o-l+1,[['enter',r,n],['enter',i,n],['exit',i,n],['exit',r,n]]))
return e}}
const G=['address','article','aside','base','basefont','blockquote','body','caption','center','col','colgroup','dd','details','dialog','dir','div','dl','dt','fieldset','figcaption','figure','footer','form','frame','frameset','h1','h2','h3','h4','h5','h6','head','header','hr','html','iframe','legend','li','link','main','menu','menuitem','nav','noframes','ol','optgroup','option','p','param','section','summary','table','tbody','td','tfoot','th','thead','title','tr','track','ul'],ee=['pre','script','style','textarea'],ne={
name:'htmlFlow',tokenize:function(e,n,t){const r=this
let i,o,l,u,a
return function(n){
return e.enter('htmlFlow'),e.enter('htmlFlowData'),e.consume(n),s}
function s(u){
return 33===u?(e.consume(u),d):47===u?(e.consume(u),x):63===u?(e.consume(u),
i=3,
r.interrupt?n:j):c(u)?(e.consume(u),l=String.fromCharCode(u),o=!0,y):t(u)
}function d(o){
return 45===o?(e.consume(o),i=2,p):91===o?(e.consume(o),i=5,l='CDATA[',
u=0,h):c(o)?(e.consume(o),i=4,r.interrupt?n:j):t(o)}function p(i){
return 45===i?(e.consume(i),r.interrupt?n:j):t(i)}function h(i){
return i===l.charCodeAt(u++)?(e.consume(i),
u===l.length?r.interrupt?n:P:h):t(i)}function x(n){
return c(n)?(e.consume(n),l=String.fromCharCode(n),y):t(n)}
function y(u){
return null===u||47===u||62===u||g(u)?47!==u&&o&&ee.includes(l.toLowerCase())?(i=1,
r.interrupt?n(u):P(u)):G.includes(l.toLowerCase())?(i=6,
47===u?(e.consume(u),b):r.interrupt?n(u):P(u)):(i=7,
r.interrupt&&!r.parser.lazy[r.now().line]?t(u):o?S(u):v(u)):45===u||f(u)?(e.consume(u),
l+=String.fromCharCode(u),y):t(u)}function b(i){
return 62===i?(e.consume(i),r.interrupt?n:P):t(i)}function v(n){
return k(n)?(e.consume(n),v):T(n)}function S(n){
return 47===n?(e.consume(n),T):58===n||95===n||c(n)?(e.consume(n),
C):k(n)?(e.consume(n),S):T(n)}function C(n){
return 45===n||46===n||58===n||95===n||f(n)?(e.consume(n),C):F(n)}
function F(n){
return 61===n?(e.consume(n),w):k(n)?(e.consume(n),F):S(n)}
function w(n){
return null===n||60===n||61===n||62===n||96===n?t(n):34===n||39===n?(e.consume(n),
a=n,A):k(n)?(e.consume(n),w):(a=null,D(n))}function A(n){
return null===n||m(n)?t(n):n===a?(e.consume(n),E):(e.consume(n),A)}
function D(n){
return null===n||34===n||39===n||60===n||61===n||62===n||96===n||g(n)?F(n):(e.consume(n),
D)}function E(e){return 47===e||62===e||k(e)?S(e):t(e)}function T(n){
return 62===n?(e.consume(n),L):t(n)}function L(n){
return k(n)?(e.consume(n),L):null===n||m(n)?P(n):t(n)}function P(n){
return 45===n&&2===i?(e.consume(n),
M):60===n&&1===i?(e.consume(n),B):62===n&&4===i?(e.consume(n),
H):63===n&&3===i?(e.consume(n),
j):93===n&&5===i?(e.consume(n),_):!m(n)||6!==i&&7!==i?null===n||m(n)?z(n):(e.consume(n),
P):e.check(te,H,z)(n)}function z(n){return e.exit('htmlFlowData'),I(n)
}function I(n){return null===n?N(n):m(n)?e.attempt({tokenize:O,
partial:!0},I,N)(n):(e.enter('htmlFlowData'),P(n))}function O(e,n,t){
return function(n){
return e.enter('lineEnding'),e.consume(n),e.exit('lineEnding'),i}
function i(e){return r.parser.lazy[r.now().line]?t(e):n(e)}}
function M(n){return 45===n?(e.consume(n),j):P(n)}function B(n){
return 47===n?(e.consume(n),l='',R):P(n)}function R(n){
return 62===n&&ee.includes(l.toLowerCase())?(e.consume(n),
H):c(n)&&l.length<8?(e.consume(n),l+=String.fromCharCode(n),R):P(n)}
function _(n){return 93===n?(e.consume(n),j):P(n)}function j(n){
return 62===n?(e.consume(n),H):45===n&&2===i?(e.consume(n),j):P(n)}
function H(n){
return null===n||m(n)?(e.exit('htmlFlowData'),N(n)):(e.consume(n),H)}
function N(t){return e.exit('htmlFlow'),n(t)}},resolveTo:function(e){
let n=e.length
for(;n--&&('enter'!==e[n][0]||'htmlFlow'!==e[n][1].type););
n>1&&'linePrefix'===e[n-2][1].type&&(e[n][1].start=e[n-2][1].start,
e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2))
return e},concrete:!0},te={tokenize:function(e,n,t){
return function(r){
return e.exit('htmlFlowData'),e.enter('lineEndingBlank'),e.consume(r),
e.exit('lineEndingBlank'),e.attempt(L,n,t)}},partial:!0}
const re={name:'htmlText',tokenize:function(e,n,t){const r=this
let i,o,l,u
return function(n){
return e.enter('htmlText'),e.enter('htmlTextData'),e.consume(n),a}
function a(n){
return 33===n?(e.consume(n),s):47===n?(e.consume(n),E):63===n?(e.consume(n),
A):c(n)?(e.consume(n),P):t(n)}function s(n){
return 45===n?(e.consume(n),d):91===n?(e.consume(n),
o='CDATA[',l=0,b):c(n)?(e.consume(n),w):t(n)}function d(n){
return 45===n?(e.consume(n),p):t(n)}function p(n){
return null===n||62===n?t(n):45===n?(e.consume(n),h):x(n)}
function h(e){return null===e||62===e?t(e):x(e)}function x(n){
return null===n?t(n):45===n?(e.consume(n),
y):m(n)?(u=x,j(n)):(e.consume(n),x)}function y(n){
return 45===n?(e.consume(n),N):x(n)}function b(n){
return n===o.charCodeAt(l++)?(e.consume(n),l===o.length?S:b):t(n)}
function S(n){
return null===n?t(n):93===n?(e.consume(n),C):m(n)?(u=S,j(n)):(e.consume(n),
S)}function C(n){return 93===n?(e.consume(n),F):S(n)}function F(n){
return 62===n?N(n):93===n?(e.consume(n),F):S(n)}function w(n){
return null===n||62===n?N(n):m(n)?(u=w,j(n)):(e.consume(n),w)}
function A(n){
return null===n?t(n):63===n?(e.consume(n),D):m(n)?(u=A,j(n)):(e.consume(n),
A)}function D(e){return 62===e?N(e):A(e)}function E(n){
return c(n)?(e.consume(n),T):t(n)}function T(n){
return 45===n||f(n)?(e.consume(n),T):L(n)}function L(n){
return m(n)?(u=L,j(n)):k(n)?(e.consume(n),L):N(n)}function P(n){
return 45===n||f(n)?(e.consume(n),P):47===n||62===n||g(n)?z(n):t(n)}
function z(n){
return 47===n?(e.consume(n),N):58===n||95===n||c(n)?(e.consume(n),
I):m(n)?(u=z,j(n)):k(n)?(e.consume(n),z):N(n)}function I(n){
return 45===n||46===n||58===n||95===n||f(n)?(e.consume(n),I):O(n)}
function O(n){
return 61===n?(e.consume(n),M):m(n)?(u=O,j(n)):k(n)?(e.consume(n),
O):z(n)}function M(n){
return null===n||60===n||61===n||62===n||96===n?t(n):34===n||39===n?(e.consume(n),
i=n,B):m(n)?(u=M,j(n)):k(n)?(e.consume(n),M):(e.consume(n),i=void 0,_)
}function B(n){
return n===i?(e.consume(n),R):null===n?t(n):m(n)?(u=B,j(n)):(e.consume(n),
B)}function R(e){return 62===e||47===e||g(e)?z(e):t(e)}function _(n){
return null===n||34===n||39===n||60===n||61===n||96===n?t(n):62===n||g(n)?z(n):(e.consume(n),
_)}function j(n){
return e.exit('htmlTextData'),e.enter('lineEnding'),e.consume(n),
e.exit('lineEnding'),
v(e,H,'linePrefix',r.parser.constructs.disable.null.includes('codeIndented')?void 0:4)
}function H(n){return e.enter('htmlTextData'),u(n)}function N(r){
return 62===r?(e.consume(r),
e.exit('htmlTextData'),e.exit('htmlText'),n):t(r)}}}
const ie={name:'labelEnd',tokenize:function(e,n,t){const r=this
let i,o,l=r.events.length
for(;l--;)if(('labelImage'===r.events[l][1].type||'labelLink'===r.events[l][1].type)&&!r.events[l][1]._balanced){
i=r.events[l][1]
break}return function(n){if(!i)return t(n)
return i._inactive?c(n):(o=r.parser.defined.includes(Y(r.sliceSerialize({
start:i.end,end:r.now()
}))),e.enter('labelEnd'),e.enter('labelMarker'),e.consume(n),
e.exit('labelMarker'),e.exit('labelEnd'),u)}
function u(t){
return 40===t?e.attempt(oe,n,o?n:c)(t):91===t?e.attempt(le,n,o?e.attempt(ue,n,c):c)(t):o?n(t):c(t)
}function c(e){return i._balanced=!0,t(e)}},resolveTo:function(e,n){
let i,o,l,u,c=e.length,a=0
for(;c--;)if(i=e[c][1],o){
if('link'===i.type||'labelLink'===i.type&&i._inactive)break
'enter'===e[c][0]&&'labelLink'===i.type&&(i._inactive=!0)}else if(l){
if('enter'===e[c][0]&&('labelImage'===i.type||'labelLink'===i.type)&&!i._balanced&&(o=c,
'labelLink'!==i.type)){a=2
break}}else'labelEnd'===i.type&&(l=c)
const s={type:'labelLink'===e[o][1].type?'link':'image',
start:Object.assign({},e[o][1].start),
end:Object.assign({},e[e.length-1][1].end)},f={type:'label',
start:Object.assign({},e[o][1].start),
end:Object.assign({},e[l][1].end)},d={type:'labelText',
start:Object.assign({},e[o+a+2][1].end),
end:Object.assign({},e[l-2][1].start)}
return u=[['enter',s,n],['enter',f,n]],u=r(u,e.slice(o+1,o+a+3)),u=r(u,[['enter',d,n]]),
u=r(u,A(n.parser.constructs.insideSpan.null,e.slice(o+a+4,l-3),n)),
u=r(u,[['exit',d,n],e[l-2],e[l-1],['exit',f,n]]),
u=r(u,e.slice(l+1)),u=r(u,[['exit',s,n]]),t(e,o,e.length,u),e},
resolveAll:function(e){let n,t=-1
for(;++t<e.length;)n=e[t][1],'labelImage'!==n.type&&'labelLink'!==n.type&&'labelEnd'!==n.type||(e.splice(t+1,'labelImage'===n.type?4:2),
n.type='data',t++)
return e}},oe={tokenize:function(e,n,t){return function(n){
return e.enter('resource'),
e.enter('resourceMarker'),e.consume(n),e.exit('resourceMarker'),K(e,r)
}
function r(n){
return 41===n?l(n):V(e,i,t,'resourceDestination','resourceDestinationLiteral','resourceDestinationLiteralMarker','resourceDestinationRaw','resourceDestinationString',32)(n)
}function i(n){return g(n)?K(e,o)(n):l(n)}function o(n){
return 34===n||39===n||40===n?Q(e,K(e,l),t,'resourceTitle','resourceTitleMarker','resourceTitleString')(n):l(n)
}function l(r){
return 41===r?(e.enter('resourceMarker'),e.consume(r),e.exit('resourceMarker'),
e.exit('resource'),n):t(r)}}},le={tokenize:function(e,n,t){
const r=this
return function(n){
return W.call(r,e,i,t,'reference','referenceMarker','referenceString')(n)
}
function i(e){
return r.parser.defined.includes(Y(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(e):t(e)
}}},ue={tokenize:function(e,n,t){return function(n){
return e.enter('reference'),
e.enter('referenceMarker'),e.consume(n),e.exit('referenceMarker'),r}
function r(r){
return 93===r?(e.enter('referenceMarker'),e.consume(r),e.exit('referenceMarker'),
e.exit('reference'),n):t(r)}}}
const ce={name:'labelStartImage',tokenize:function(e,n,t){const r=this
return function(n){
return e.enter('labelImage'),e.enter('labelImageMarker'),e.consume(n),
e.exit('labelImageMarker'),i}
function i(n){
return 91===n?(e.enter('labelMarker'),e.consume(n),e.exit('labelMarker'),
e.exit('labelImage'),o):t(n)}function o(e){
return 94===e&&'_hiddenFootnoteSupport'in r.parser.constructs?t(e):n(e)
}},resolveAll:ie.resolveAll}
const ae={name:'labelStartLink',tokenize:function(e,n,t){const r=this
return function(n){
return e.enter('labelLink'),e.enter('labelMarker'),e.consume(n),
e.exit('labelMarker'),e.exit('labelLink'),i}
function i(e){
return 94===e&&'_hiddenFootnoteSupport'in r.parser.constructs?t(e):n(e)
}},resolveAll:ie.resolveAll}
const se={name:'lineEnding',tokenize:function(e,n){return function(t){
return e.enter('lineEnding'),
e.consume(t),e.exit('lineEnding'),v(e,n,'linePrefix')}}}
const fe={name:'thematicBreak',tokenize:function(e,n,t){let r,i=0
return function(n){return e.enter('thematicBreak'),r=n,o(n)}
function o(u){
return u===r?(e.enter('thematicBreakSequence'),l(u)):k(u)?v(e,o,'whitespace')(u):i<3||null!==u&&!m(u)?t(u):(e.exit('thematicBreak'),
n(u))}function l(n){
return n===r?(e.consume(n),i++,l):(e.exit('thematicBreakSequence'),
o(n))}}}
const de={name:'list',tokenize:function(e,n,t){
const r=this,i=r.events[r.events.length-1]
let o=i&&'linePrefix'===i[1].type?i[2].sliceSerialize(i[1],!0).length:0,l=0
return function(n){
const i=r.containerState.type||(42===n||43===n||45===n?'listUnordered':'listOrdered')
if('listUnordered'===i?!r.containerState.marker||n===r.containerState.marker:a(n)){
if(r.containerState.type||(r.containerState.type=i,e.enter(i,{
_container:!0
})),'listUnordered'===i)return e.enter('listItemPrefix'),42===n||45===n?e.check(fe,t,c)(n):c(n)
if(!r.interrupt||49===n)return e.enter('listItemPrefix'),e.enter('listItemValue'),
u(n)}return t(n)}
function u(n){
return a(n)&&++l<10?(e.consume(n),u):(!r.interrupt||l<2)&&(r.containerState.marker?n===r.containerState.marker:41===n||46===n)?(e.exit('listItemValue'),
c(n)):t(n)}function c(n){
return e.enter('listItemMarker'),e.consume(n),e.exit('listItemMarker'),
r.containerState.marker=r.containerState.marker||n,
e.check(L,r.interrupt?t:s,e.attempt(pe,d,f))}function s(e){
return r.containerState.initialBlankLine=!0,o++,d(e)}function f(n){
return k(n)?(e.enter('listItemPrefixWhitespace'),
e.consume(n),e.exit('listItemPrefixWhitespace'),d):t(n)}function d(t){
return r.containerState.size=o+r.sliceSerialize(e.exit('listItemPrefix'),!0).length,
n(t)}},continuation:{tokenize:function(e,n,t){const r=this
return r.containerState._closeFlow=void 0,e.check(L,i,o)
function i(t){
return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,
v(e,n,'listItemIndent',r.containerState.size+1)(t)}function o(t){
return r.containerState.furtherBlankLines||!k(t)?(r.containerState.furtherBlankLines=void 0,
r.containerState.initialBlankLine=void 0,
l(t)):(r.containerState.furtherBlankLines=void 0,
r.containerState.initialBlankLine=void 0,e.attempt(he,n,l)(t))}
function l(i){
return r.containerState._closeFlow=!0,r.interrupt=void 0,v(e,e.attempt(de,n,t),'linePrefix',r.parser.constructs.disable.null.includes('codeIndented')?void 0:4)(i)
}}},exit:function(e){e.exit(this.containerState.type)}},pe={
tokenize:function(e,n,t){const r=this
return v(e,(function(e){const i=r.events[r.events.length-1]
return!k(e)&&i&&'listItemPrefixWhitespace'===i[1].type?n(e):t(e)
}),'listItemPrefixWhitespace',r.parser.constructs.disable.null.includes('codeIndented')?void 0:5)
},partial:!0},he={tokenize:function(e,n,t){const r=this
return v(e,(function(e){const i=r.events[r.events.length-1]
return i&&'listItemIndent'===i[1].type&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?n(e):t(e)
}),'listItemIndent',r.containerState.size+1)},partial:!0}
const ge={name:'setextUnderline',tokenize:function(e,n,t){const r=this
let i,o,l=r.events.length
for(;l--;)if('lineEnding'!==r.events[l][1].type&&'linePrefix'!==r.events[l][1].type&&'content'!==r.events[l][1].type){
o='paragraph'===r.events[l][1].type
break}return function(n){
if(!r.parser.lazy[r.now().line]&&(r.interrupt||o))return e.enter('setextHeadingLine'),
e.enter('setextHeadingLineSequence'),i=n,u(n)
return t(n)}
function u(n){
return n===i?(e.consume(n),u):(e.exit('setextHeadingLineSequence'),
v(e,c,'lineSuffix')(n))}function c(r){
return null===r||m(r)?(e.exit('setextHeadingLine'),n(r)):t(r)}},
resolveTo:function(e,n){let t,r,i,o=e.length
for(;o--;)if('enter'===e[o][0]){if('content'===e[o][1].type){t=o
break}'paragraph'===e[o][1].type&&(r=o)
}else'content'===e[o][1].type&&e.splice(o,1),
i||'definition'!==e[o][1].type||(i=o)
const l={type:'setextHeading',start:Object.assign({},e[r][1].start),
end:Object.assign({},e[e.length-1][1].end)}
e[r][1].type='setextHeadingText',i?(e.splice(r,0,['enter',l,n]),e.splice(i+1,0,['exit',e[t][1],n]),
e[t][1].end=Object.assign({},e[i][1].end)):e[t][1]=l
return e.push(['exit',l,n]),e}}
const me={tokenize:function(e){
const n=this,t=e.attempt(L,(function(r){
if(null===r)return void e.consume(r)
return e.enter('lineEndingBlank'),e.consume(r),e.exit('lineEndingBlank'),n.currentConstruct=void 0,
t
}),e.attempt(this.parser.constructs.flowInitial,r,v(e,e.attempt(this.parser.constructs.flow,r,e.attempt(U,r)),'linePrefix')))
return t
function r(r){
if(null!==r)return e.enter('lineEnding'),e.consume(r),e.exit('lineEnding'),
n.currentConstruct=void 0,t
e.consume(r)}}}
const ke={resolveAll:ve()},xe=be('string'),ye=be('text')
function be(e){return{tokenize:function(n){
const t=this,r=this.parser.constructs[e],i=n.attempt(r,o,l)
return o
function o(e){return c(e)?i(e):l(e)}function l(e){
if(null!==e)return n.enter('data'),n.consume(e),u
n.consume(e)}function u(e){
return c(e)?(n.exit('data'),i(e)):(n.consume(e),u)}function c(e){
if(null===e)return!0
const n=r[e]
let i=-1
if(n)for(;++i<n.length;){const e=n[i]
if(!e.previous||e.previous.call(t,t.previous))return!0}return!1}},
resolveAll:ve('text'===e?Se:void 0)}}function ve(e){
return function(n,t){let r,i=-1
for(;++i<=n.length;)void 0===r?n[i]&&'data'===n[i][1].type&&(r=i,i++):n[i]&&'data'===n[i][1].type||(i!==r+2&&(n[r][1].end=n[i-1][1].end,
n.splice(r+2,i-r-2),i=r+2),r=void 0)
return e?e(n,t):n}}function Se(e,n){let t=0
for(;++t<=e.length;)if((t===e.length||'lineEnding'===e[t][1].type)&&'data'===e[t-1][1].type){
const r=e[t-1][1],i=n.sliceStream(r)
let o,l=i.length,u=-1,c=0
for(;l--;){const e=i[l]
if('string'==typeof e){for(u=e.length;32===e.charCodeAt(u-1);)c++,u--
if(u)break
u=-1}else if(-2===e)o=!0,c++
else if(-1!==e){l++
break}}if(c){const i={
type:t===e.length||o||c<2?'lineSuffix':'hardBreakTrailing',start:{
line:r.end.line,column:r.end.column-c,offset:r.end.offset-c,
_index:r.start._index+l,_bufferIndex:l?u:r.start._bufferIndex+u},
end:Object.assign({},r.end)}
r.end=Object.assign({},i.start),r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(t,0,['enter',i,n],['exit',i,n]),
t+=2)}t++}return e}function Ce(e,n,i){
let o=Object.assign(i?Object.assign({},i):{line:1,column:1,offset:0},{
_index:0,_bufferIndex:-1})
const l={},u=[]
let c=[],a=[]
const s={consume:function(e){
m(e)?(o.line++,o.column=1,o.offset+=-3===e?2:1,v()):-1!==e&&(o.column++,
o.offset++)
o._bufferIndex<0?o._index++:(o._bufferIndex++,o._bufferIndex===c[o._index].length&&(o._bufferIndex=-1,
o._index++))
f.previous=e},enter:function(e,n){const t=n||{}
return t.type=e,t.start=h(),f.events.push(['enter',t,f]),a.push(t),t},
exit:function(e){const n=a.pop()
return n.end=h(),f.events.push(['exit',n,f]),n},
attempt:y((function(e,n){b(e,n.from)})),check:y(x),interrupt:y(x,{
interrupt:!0})},f={previous:null,code:null,containerState:{},
events:[],parser:e,sliceStream:p,sliceSerialize:function(e,n){
return function(e,n){let t=-1
const r=[]
let i
for(;++t<e.length;){const o=e[t]
let l
if('string'==typeof o)l=o
else switch(o){case-5:l='\r'
break
case-4:l='\n'
break
case-3:l="\r\n"
break
case-2:l=n?' ':'\t'
break
case-1:if(!n&&i)continue
l=' '
break
default:l=String.fromCharCode(o)}i=-2===o,r.push(l)}return r.join('')
}(p(e),n)},now:h,defineSkip:function(e){l[e.line]=e.column,v()},
write:function(e){if(c=r(c,e),g(),null!==c[c.length-1])return[]
return b(n,0),f.events=A(u,f.events,f),f.events}}
let d=n.tokenize.call(f,s)
return n.resolveAll&&u.push(n),f
function p(e){return function(e,n){
const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,o=n.end._bufferIndex
let l
t===i?l=[e[t].slice(r,o)]:(l=e.slice(t,i),r>-1&&(l[0]=l[0].slice(r)),o>0&&l.push(e[i].slice(0,o)))
return l}(c,e)}function h(){return Object.assign({},o)}function g(){
let e
for(;o._index<c.length;){const n=c[o._index]
if('string'==typeof n)for(e=o._index,o._bufferIndex<0&&(o._bufferIndex=0);o._index===e&&o._bufferIndex<n.length;)k(n.charCodeAt(o._bufferIndex))
else k(n)}}function k(e){d=d(e)}function x(e,n){n.restore()}
function y(e,n){return function(t,r,i){let l,u,c,d
return Array.isArray(t)?p(t):'tokenize'in t?p([t]):function(e){
return n
function n(n){const t=null!==n&&e[n],r=null!==n&&e.null
return p([...Array.isArray(t)?t:t?[t]:[],...Array.isArray(r)?r:r?[r]:[]])(n)
}}(t)
function p(e){return l=e,u=0,0===e.length?i:g(e[u])}function g(e){
return function(t){d=function(){
const e=h(),n=f.previous,t=f.currentConstruct,r=f.events.length,i=Array.from(a)
return{restore:l,from:r}
function l(){
o=e,f.previous=n,f.currentConstruct=t,f.events.length=r,a=i,v()}
}(),c=e,e.partial||(f.currentConstruct=e)
if(e.name&&f.parser.constructs.disable.null.includes(e.name))return k()
return e.tokenize.call(n?Object.assign(Object.create(f),n):f,s,m,k)(t)
}}function m(n){return e(c,d),r}function k(e){
return d.restore(),++u<l.length?g(l[u]):i}}}function b(e,n){
e.resolveAll&&!u.includes(e)&&u.push(e),
e.resolve&&t(f.events,n,f.events.length-n,e.resolve(f.events.slice(n),f)),
e.resolveTo&&(f.events=e.resolveTo(f.events,f))}function v(){
o.line in l&&o.column<2&&(o.column=l[o.line],o.offset+=l[o.line]-1)}}
const Fe={42:de,43:de,45:de,48:de,49:de,50:de,51:de,52:de,53:de,54:de,
55:de,56:de,57:de,62:P},we={91:X},Ae={[-2]:R,[-1]:R,32:R},De={35:J,
42:fe,45:[ge,fe],60:ne,61:ge,95:fe,96:B,126:B},Ee={38:M,92:z},Te={
[-5]:se,[-4]:se,[-3]:se,33:ce,38:M,42:D,60:[T,re],91:ae,92:[$,z],
93:ie,95:D,96:j},Le={null:[D,ke]}
var Pe=Object.freeze({__proto__:null,document:Fe,contentInitial:we,
flowInitial:Ae,flow:De,string:Ee,text:Te,insideSpan:Le,
attentionMarkers:{null:[42,95]},disable:{null:[]}})
const ze=/[\0\t\n\r]/g
function Ie(e,n){const t=Number.parseInt(e,n)
return t<9||11===t||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||65535==(65535&t)||65534==(65535&t)||t>1114111?'�':String.fromCharCode(t)
}
const Oe=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi
function Me(e,n,t){if(n)return n
if(35===t.charCodeAt(0)){const e=t.charCodeAt(1),n=120===e||88===e
return Ie(t.slice(n?2:1),n?16:10)}return O(t)||e}function Be(e){
return e&&'object'==typeof e?'position'in e||'type'in e?_e(e.position):'start'in e||'end'in e?_e(e):'line'in e||'column'in e?Re(e):'':''
}function Re(e){return je(e&&e.line)+':'+je(e&&e.column)}
function _e(e){return Re(e&&e.start)+'-'+Re(e&&e.end)}function je(e){
return e&&'number'==typeof e?e:1}
const He={}.hasOwnProperty,Ne=function(n,t,r){
return'string'!=typeof t&&(r=t,t=void 0),function(n={}){const t=Ue({
transforms:[],
canContainEols:['emphasis','fragment','heading','paragraph','strong'],
enter:{autolink:a(le),autolinkProtocol:T,autolinkEmail:T,
atxHeading:a(te),blockQuote:a($),characterEscape:T,
characterReference:T,codeFenced:a(J),codeFencedFenceInfo:s,
codeFencedFenceMeta:s,codeIndented:a(J,s),codeText:a(G,s),
codeTextData:T,data:T,codeFlowValue:T,definition:a(ee),
definitionDestinationString:s,definitionLabelString:s,
definitionTitleString:s,emphasis:a(ne),hardBreakEscape:a(re),
hardBreakTrailing:a(re),htmlFlow:a(ie,s),htmlFlowData:T,
htmlText:a(ie,s),htmlTextData:T,image:a(oe),label:s,link:a(le),
listItem:a(ce),listItemValue:m,listOrdered:a(ue,g),
listUnordered:a(ue),paragraph:a(ae),reference:V,referenceString:s,
resourceDestinationString:s,resourceTitleString:s,setextHeading:a(te),
strong:a(se),thematicBreak:a(de)},exit:{atxHeading:d(),
atxHeadingSequence:w,autolink:d(),autolinkEmail:Z,autolinkProtocol:X,
blockQuote:d(),characterEscapeValue:L,
characterReferenceMarkerHexadecimal:Q,
characterReferenceMarkerNumeric:Q,characterReferenceValue:K,
codeFenced:d(b),codeFencedFence:y,codeFencedFenceInfo:k,
codeFencedFenceMeta:x,codeFlowValue:L,codeIndented:d(v),codeText:d(B),
codeTextData:L,data:L,definition:d(),definitionDestinationString:F,
definitionLabelString:S,definitionTitleString:C,emphasis:d(),
hardBreakEscape:d(z),hardBreakTrailing:d(z),htmlFlow:d(I),
htmlFlowData:L,htmlText:d(M),htmlTextData:L,image:d(_),label:H,
labelText:j,lineEnding:P,link:d(R),listItem:d(),listOrdered:d(),
listUnordered:d(),paragraph:d(),referenceString:W,
resourceDestinationString:N,resourceTitleString:U,resource:q,
setextHeading:d(E),setextHeadingLineSequence:D,setextHeadingText:A,
strong:d(),thematicBreak:d()}},n.mdastExtensions||[]),r={}
return i
function i(e){let n={type:'root',children:[]}
const r=[],i=[],a={stack:[n],tokenStack:r,config:t,enter:f,exit:p,
buffer:s,resume:h,setData:l,getData:u}
let d=-1
for(;++d<e.length;)if('listOrdered'===e[d][1].type||'listUnordered'===e[d][1].type)if('enter'===e[d][0])i.push(d)
else{d=o(e,i.pop(),d)}for(d=-1;++d<e.length;){const n=t[e[d][0]]
He.call(n,e[d][1].type)&&n[e[d][1].type].call(Object.assign({
sliceSerialize:e[d][2].sliceSerialize},a),e[d][1])}if(r.length>0){
const e=r[r.length-1];(e[1]||Ve).call(a,void 0,e[0])}for(n.position={
start:c(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),
end:c(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})
},d=-1;++d<t.transforms.length;)n=t.transforms[d](n)||n
return n}function o(e,n,t){let r,i,o,l,u=n-1,c=-1,a=!1
for(;++u<=t;){const n=e[u]
if('listUnordered'===n[1].type||'listOrdered'===n[1].type||'blockQuote'===n[1].type?('enter'===n[0]?c++:c--,
l=void 0):'lineEndingBlank'===n[1].type?'enter'===n[0]&&(!r||l||c||o||(o=u),
l=void 0):'linePrefix'===n[1].type||'listItemValue'===n[1].type||'listItemMarker'===n[1].type||'listItemPrefix'===n[1].type||'listItemPrefixWhitespace'===n[1].type||(l=void 0),
!c&&'enter'===n[0]&&'listItemPrefix'===n[1].type||-1===c&&'exit'===n[0]&&('listUnordered'===n[1].type||'listOrdered'===n[1].type)){
if(r){let l=u
for(i=void 0;l--;){const n=e[l]
if('lineEnding'===n[1].type||'lineEndingBlank'===n[1].type){
if('exit'===n[0])continue
i&&(e[i][1].type='lineEndingBlank',a=!0),n[1].type='lineEnding',i=l
}else if('linePrefix'!==n[1].type&&'blockQuotePrefix'!==n[1].type&&'blockQuotePrefixWhitespace'!==n[1].type&&'blockQuoteMarker'!==n[1].type&&'listItemIndent'!==n[1].type)break
}
o&&(!i||o<i)&&(r._spread=!0),r.end=Object.assign({},i?e[i][1].start:n[1].end),e.splice(i||u,0,['exit',r,n[2]]),
u++,t++}'listItemPrefix'===n[1].type&&(r={type:'listItem',_spread:!1,
start:Object.assign({},n[1].start)
},e.splice(u,0,['enter',r,n[2]]),u++,t++,o=void 0,l=!0)}}
return e[n][1]._spread=a,t}function l(e,n){r[e]=n}function u(e){
return r[e]}function c(e){return{line:e.line,column:e.column,
offset:e.offset}}function a(e,n){return t
function t(t){f.call(this,e(t),t),n&&n.call(this,t)}}function s(){
this.stack.push({type:'fragment',children:[]})}function f(e,n,t){
return this.stack[this.stack.length-1].children.push(e),
this.stack.push(e),this.tokenStack.push([n,t]),e.position={
start:c(n.start)},e}function d(e){return n
function n(n){e&&e.call(this,n),p.call(this,n)}}function p(e,n){
const t=this.stack.pop(),r=this.tokenStack.pop()
if(!r)throw new Error('Cannot close `'+e.type+'` ('+Be({start:e.start,
end:e.end})+'): it’s not open')
if(r[0].type!==e.type)if(n)n.call(this,e,r[0])
else{(r[1]||Ve).call(this,e,r[0])}return t.position.end=c(e.end),t}
function h(){return function(n,t){var{includeImageAlt:r=!0}=t||{}
return e(n,r)}(this.stack.pop())}function g(){
l('expectingFirstListItemValue',!0)}function m(e){
if(u('expectingFirstListItemValue')){
this.stack[this.stack.length-2].start=Number.parseInt(this.sliceSerialize(e),10),
l('expectingFirstListItemValue')}}function k(){const e=this.resume()
this.stack[this.stack.length-1].lang=e}function x(){
const e=this.resume()
this.stack[this.stack.length-1].meta=e}function y(){
u('flowCodeInside')||(this.buffer(),l('flowCodeInside',!0))}
function b(){const e=this.resume()
this.stack[this.stack.length-1].value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,''),l('flowCodeInside')
}function v(){const e=this.resume()
this.stack[this.stack.length-1].value=e.replace(/(\r?\n|\r)$/g,'')}
function S(e){const n=this.resume(),t=this.stack[this.stack.length-1]
t.label=n,t.identifier=Y(this.sliceSerialize(e)).toLowerCase()}
function C(){const e=this.resume()
this.stack[this.stack.length-1].title=e}function F(){
const e=this.resume()
this.stack[this.stack.length-1].url=e}function w(e){
const n=this.stack[this.stack.length-1]
if(!n.depth){const t=this.sliceSerialize(e).length
n.depth=t}}function A(){l('setextHeadingSlurpLineEnding',!0)}
function D(e){
this.stack[this.stack.length-1].depth=61===this.sliceSerialize(e).charCodeAt(0)?1:2
}function E(){l('setextHeadingSlurpLineEnding')}function T(e){
const n=this.stack[this.stack.length-1]
let t=n.children[n.children.length-1]
t&&'text'===t.type||(t=fe(),t.position={start:c(e.start)
},n.children.push(t)),this.stack.push(t)}function L(e){
const n=this.stack.pop()
n.value+=this.sliceSerialize(e),n.position.end=c(e.end)}function P(e){
const n=this.stack[this.stack.length-1]
if(u('atHardBreak')){
return n.children[n.children.length-1].position.end=c(e.end),
void l('atHardBreak')}
!u('setextHeadingSlurpLineEnding')&&t.canContainEols.includes(n.type)&&(T.call(this,e),
L.call(this,e))}function z(){l('atHardBreak',!0)}function I(){
const e=this.resume()
this.stack[this.stack.length-1].value=e}function M(){
const e=this.resume()
this.stack[this.stack.length-1].value=e}function B(){
const e=this.resume()
this.stack[this.stack.length-1].value=e}function R(){
const e=this.stack[this.stack.length-1]
u('inReference')?(e.type+='Reference',e.referenceType=u('referenceType')||'shortcut',
delete e.url,
delete e.title):(delete e.identifier,delete e.label),l('referenceType')
}function _(){const e=this.stack[this.stack.length-1]
u('inReference')?(e.type+='Reference',e.referenceType=u('referenceType')||'shortcut',
delete e.url,
delete e.title):(delete e.identifier,delete e.label),l('referenceType')
}function j(e){
const n=this.stack[this.stack.length-2],t=this.sliceSerialize(e)
n.label=function(e){return e.replace(Oe,Me)
}(t),n.identifier=Y(t).toLowerCase()}function H(){
const e=this.stack[this.stack.length-1],n=this.resume(),t=this.stack[this.stack.length-1]
l('inReference',!0),'link'===t.type?t.children=e.children:t.alt=n}
function N(){const e=this.resume()
this.stack[this.stack.length-1].url=e}function U(){
const e=this.resume()
this.stack[this.stack.length-1].title=e}function q(){l('inReference')}
function V(){l('referenceType','collapsed')}function W(e){
const n=this.resume(),t=this.stack[this.stack.length-1]
t.label=n,t.identifier=Y(this.sliceSerialize(e)).toLowerCase(),l('referenceType','full')
}function Q(e){l('characterReferenceType',e.type)}function K(e){
const n=this.sliceSerialize(e),t=u('characterReferenceType')
let r
t?(r=Ie(n,'characterReferenceMarkerNumeric'===t?10:16),l('characterReferenceType')):r=O(n)
const i=this.stack.pop()
i.value+=r,i.position.end=c(e.end)}function X(e){L.call(this,e)
this.stack[this.stack.length-1].url=this.sliceSerialize(e)}
function Z(e){L.call(this,e)
this.stack[this.stack.length-1].url='mailto:'+this.sliceSerialize(e)}
function $(){return{type:'blockquote',children:[]}}function J(){
return{type:'code',lang:null,meta:null,value:''}}function G(){return{
type:'inlineCode',value:''}}function ee(){return{type:'definition',
identifier:'',label:null,title:null,url:''}}function ne(){return{
type:'emphasis',children:[]}}function te(){return{type:'heading',
depth:void 0,children:[]}}function re(){return{type:'break'}}
function ie(){return{type:'html',value:''}}function oe(){return{
type:'image',title:null,url:'',alt:null}}function le(){return{
type:'link',title:null,url:'',children:[]}}function ue(e){return{
type:'list',ordered:'listOrdered'===e.type,start:null,
spread:e._spread,children:[]}}function ce(e){return{type:'listItem',
spread:e._spread,checked:null,children:[]}}function ae(){return{
type:'paragraph',children:[]}}function se(){return{type:'strong',
children:[]}}function fe(){return{type:'text',value:''}}function de(){
return{type:'thematicBreak'}}}(r)(function(e){for(;!H(e););return e
}(function(e={}){const n={defined:[],lazy:{},
constructs:o([Pe].concat(e.extensions||[])),content:t(S),
document:t(C),flow:t(me),string:t(xe),text:t(ye)}
return n
function t(e){return function(t){return Ce(n,e,t)}}
}(r).document().write(function(){let e,n=1,t='',r=!0
return function(i,o,l){const u=[]
let c,a,s,f,d
for(i=t+i.toString(o),s=0,t='',r&&(65279===i.charCodeAt(0)&&s++,r=void 0);s<i.length;){
if(ze.lastIndex=s,
c=ze.exec(i),f=c&&void 0!==c.index?c.index:i.length,d=i.charCodeAt(f),
!c){t=i.slice(s)
break}if(10===d&&s===f&&e)u.push(-3),e=void 0
else switch(e&&(u.push(-5),e=void 0),s<f&&(u.push(i.slice(s,f)),n+=f-s),d){
case 0:u.push(65533),n++
break
case 9:for(a=4*Math.ceil(n/4),u.push(-2);n++<a;)u.push(-1)
break
case 10:u.push(-4),n=1
break
default:e=!0,n=1}s=f+1}
return l&&(e&&u.push(-5),t&&u.push(t),u.push(null)),u}}()(n,t,!0))))}
function Ue(e,n){let t=-1
for(;++t<n.length;){const r=n[t]
Array.isArray(r)?Ue(e,r):qe(e,r)}return e}function qe(e,n){let t
for(t in n)if(He.call(n,t)){
const r='canContainEols'===t||'transforms'===t,i=(He.call(e,t)?e[t]:void 0)||(e[t]=r?[]:{}),o=n[t]
o&&(r?e[t]=[...i,...o]:Object.assign(i,o))}}function Ve(e,n){
throw e?new Error('Cannot close `'+e.type+'` ('+Be({start:e.start,
end:e.end})+'): a different token (`'+n.type+'`, '+Be({start:n.start,
end:n.end
})+') is open'):new Error('Cannot close document, a token (`'+n.type+'`, '+Be({
start:n.start,end:n.end})+') is still open')}const We={
tokenize:function(e,n,t){return function(n){return e.consume(n),r}
function r(n){return 87===n||119===n?(e.consume(n),i):t(n)}
function i(n){return 87===n||119===n?(e.consume(n),o):t(n)}
function o(n){return 46===n?(e.consume(n),l):t(n)}function l(e){
return null===e||m(e)?t(e):n(e)}},partial:!0},Qe={
tokenize:function(e,n,t){let r,i
return o
function o(n){
return 38===n?e.check(Xe,u,l)(n):46===n||95===n?e.check(Ye,u,l)(n):null===n||h(n)||x(n)||45!==n&&y(n)?u(n):(e.consume(n),
o)}function l(n){
return 46===n?(i=r,r=void 0,e.consume(n),o):(95===n&&(r=!0),e.consume(n),
o)}function u(e){return i||r?t(e):n(e)}},partial:!0},Ke={
tokenize:function(e,n){let t=0
return r
function r(l){
return 38===l?e.check(Xe,n,i)(l):(40===l&&t++,41===l?e.check(Ye,o,i)(l):rn(l)?n(l):tn(l)?e.check(Ye,n,i)(l):(e.consume(l),
r))}function i(n){return e.consume(n),r}function o(e){
return t--,t<0?n(e):i(e)}},partial:!0},Ye={tokenize:function(e,n,t){
return function(n){return e.consume(n),r}
function r(i){return tn(i)?(e.consume(i),r):rn(i)?n(i):t(i)}},
partial:!0},Xe={tokenize:function(e,n,t){return function(n){
return e.consume(n),r}
function r(n){
return c(n)?(e.consume(n),r):59===n?(e.consume(n),i):t(n)}
function i(e){return rn(e)?n(e):t(e)}},partial:!0},Ze={
tokenize:function(e,n,t){const r=this
return function(n){
if(87!==n&&119!==n||!ln(r.previous)||an(r.events))return t(n)
return e.enter('literalAutolink'),e.enter('literalAutolinkWww'),e.check(We,e.attempt(Qe,e.attempt(Ke,i),t),t)(n)
}
function i(t){
return e.exit('literalAutolinkWww'),e.exit('literalAutolink'),n(t)}},
previous:ln},$e={tokenize:function(e,n,t){const r=this
return function(n){
if(72!==n&&104!==n||!un(r.previous)||an(r.events))return t(n)
return e.enter('literalAutolink'),e.enter('literalAutolinkHttp'),e.consume(n),i
}
function i(n){return 84===n||116===n?(e.consume(n),o):t(n)}
function o(n){return 84===n||116===n?(e.consume(n),l):t(n)}
function l(n){return 80===n||112===n?(e.consume(n),u):t(n)}
function u(n){return 83===n||115===n?(e.consume(n),c):c(n)}
function c(n){return 58===n?(e.consume(n),a):t(n)}function a(n){
return 47===n?(e.consume(n),s):t(n)}function s(n){
return 47===n?(e.consume(n),f):t(n)}function f(n){
return null===n||h(n)||x(n)||y(n)?t(n):e.attempt(Qe,e.attempt(Ke,d),t)(n)
}function d(t){
return e.exit('literalAutolinkHttp'),e.exit('literalAutolink'),n(t)}},
previous:un},Je={tokenize:function(e,n,t){const r=this
let i,o
return function(n){
if(!on(n)||!cn(r.previous)||an(r.events))return t(n)
return e.enter('literalAutolink'),e.enter('literalAutolinkEmail'),l(n)
}
function l(n){
return on(n)?(e.consume(n),l):64===n?(e.consume(n),u):t(n)}
function u(n){
return 46===n?e.check(Ye,p,c)(n):45===n||95===n?e.check(Ye,t,s)(n):f(n)?(!o&&a(n)&&(o=!0),
e.consume(n),u):p(n)}function c(n){return e.consume(n),i=!0,o=void 0,u
}function s(n){return e.consume(n),d}function d(n){
return 46===n?e.check(Ye,t,c)(n):u(n)}function p(r){
return i&&!o?(e.exit('literalAutolinkEmail'),
e.exit('literalAutolink'),n(r)):t(r)}},previous:cn},Ge={},en={text:Ge}
let nn=48
for(;nn<123;)Ge[nn]=Je,nn++,58===nn?nn=65:91===nn&&(nn=97)
function tn(e){
return 33===e||34===e||39===e||41===e||42===e||44===e||46===e||58===e||59===e||60===e||63===e||95===e||126===e
}function rn(e){return null===e||60===e||g(e)}function on(e){
return 43===e||45===e||46===e||95===e||f(e)}function ln(e){
return null===e||40===e||42===e||95===e||126===e||g(e)}function un(e){
return null===e||!c(e)}function cn(e){return 47!==e&&un(e)}
function an(e){let n=e.length,t=!1
for(;n--;){const r=e[n][1]
if(('labelLink'===r.type||'labelImage'===r.type)&&!r._balanced){t=!0
break}if(r._gfmAutolinkLiteralWalkedInto){t=!1
break}}
return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),
t}function sn(e){const n=[]
let t=-1,r=0,i=0
for(;++t<e.length;){const o=e.charCodeAt(t)
let l=''
if(37===o&&f(e.charCodeAt(t+1))&&f(e.charCodeAt(t+2)))i=2
else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(l=String.fromCharCode(o))
else if(o>55295&&o<57344){const n=e.charCodeAt(t+1)
o<56320&&n>56319&&n<57344?(l=String.fromCharCode(o,n),i=1):l='�'
}else l=String.fromCharCode(o)
l&&(n.push(e.slice(r,t),encodeURIComponent(l)),r=t+i+1,l=''),i&&(t+=i,i=0)
}return n.join('')+e.slice(r)}
Ge[43]=Je,Ge[45]=Je,Ge[46]=Je,Ge[95]=Je,Ge[72]=[Je,$e],
Ge[104]=[Je,$e],Ge[87]=[Je,Ze],Ge[119]=[Je,Ze]
const fn={tokenize:function(e,n,t){const r=this
return v(e,(function(e){const i=r.events[r.events.length-1]
return i&&'gfmFootnoteDefinitionIndent'===i[1].type&&4===i[2].sliceSerialize(i[1],!0).length?n(e):t(e)
}),'gfmFootnoteDefinitionIndent',5)},partial:!0}
function dn(e,n,t){const r=this
let i=r.events.length
const o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[])
let l
for(;i--;){const e=r.events[i][1]
if('labelImage'===e.type){l=e
break}
if('gfmFootnoteCall'===e.type||'labelLink'===e.type||'label'===e.type||'image'===e.type||'link'===e.type)break
}return function(i){if(!l||!l._balanced)return t(i)
const u=Y(r.sliceSerialize({start:l.end,end:r.now()}))
if(94!==u.charCodeAt(0)||!o.includes(u.slice(1)))return t(i)
return e.enter('gfmFootnoteCallLabelMarker'),e.consume(i),e.exit('gfmFootnoteCallLabelMarker'),
n(i)}}function pn(e,n){let t=e.length
for(;t--;)if('labelImage'===e[t][1].type&&'enter'===e[t][0]){e[t][1]
break}
e[t+1][1].type='data',e[t+3][1].type='gfmFootnoteCallLabelMarker'
const r={type:'gfmFootnoteCall',
start:Object.assign({},e[t+3][1].start),
end:Object.assign({},e[e.length-1][1].end)},i={
type:'gfmFootnoteCallMarker',start:Object.assign({},e[t+3][1].end),
end:Object.assign({},e[t+3][1].end)}
i.end.column++,i.end.offset++,i.end._bufferIndex++
const o={type:'gfmFootnoteCallString',start:Object.assign({},i.end),
end:Object.assign({},e[e.length-1][1].start)},l={type:'chunkString',
contentType:'string',start:Object.assign({},o.start),
end:Object.assign({},o.end)
},u=[e[t+1],e[t+2],['enter',r,n],e[t+3],e[t+4],['enter',i,n],['exit',i,n],['enter',o,n],['enter',l,n],['exit',l,n],['exit',o,n],e[e.length-2],e[e.length-1],['exit',r,n]]
return e.splice(t,e.length-t+1,...u),e}function hn(e,n,t){
const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[])
let o,l=0
return function(n){
return e.enter('gfmFootnoteCall'),e.enter('gfmFootnoteCallLabelMarker'),
e.consume(n),e.exit('gfmFootnoteCallLabelMarker'),u}
function u(n){
return 94!==n?t(n):(e.enter('gfmFootnoteCallMarker'),e.consume(n),
e.exit('gfmFootnoteCallMarker'),
e.enter('gfmFootnoteCallString'),e.enter('chunkString').contentType='string',
c)}function c(u){let s
return null===u||91===u||l++>999?t(u):93===u?o?(e.exit('chunkString'),s=e.exit('gfmFootnoteCallString'),
i.includes(Y(r.sliceSerialize(s)))?function(t){
return e.enter('gfmFootnoteCallLabelMarker'),
e.consume(t),e.exit('gfmFootnoteCallLabelMarker'),
e.exit('gfmFootnoteCall'),n
}(u):t(u)):t(u):(e.consume(u),g(u)||(o=!0),92===u?a:c)}function a(n){
return 91===n||92===n||93===n?(e.consume(n),l++,c):c(n)}}
function gn(e,n,t){
const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[])
let o,l,u=0
return function(n){
return e.enter('gfmFootnoteDefinition')._container=!0,e.enter('gfmFootnoteDefinitionLabel'),
e.enter('gfmFootnoteDefinitionLabelMarker'),
e.consume(n),e.exit('gfmFootnoteDefinitionLabelMarker'),c}
function c(n){
return 94===n?(e.enter('gfmFootnoteDefinitionMarker'),e.consume(n),
e.exit('gfmFootnoteDefinitionMarker'),
e.enter('gfmFootnoteDefinitionLabelString'),a):t(n)}function a(n){
let i
return null===n||91===n||u>999?t(n):93===n?l?(i=e.exit('gfmFootnoteDefinitionLabelString'),
o=Y(r.sliceSerialize(i)),
e.enter('gfmFootnoteDefinitionLabelMarker'),e.consume(n),
e.exit('gfmFootnoteDefinitionLabelMarker'),
e.exit('gfmFootnoteDefinitionLabel'),
d):t(n):m(n)?(e.enter('lineEnding'),e.consume(n),
e.exit('lineEnding'),u++,a):(e.enter('chunkString').contentType='string',
s(n))}function s(n){
return null===n||m(n)||91===n||93===n||u>999?(e.exit('chunkString'),
a(n)):(g(n)||(l=!0),u++,e.consume(n),92===n?f:s)}function f(n){
return 91===n||92===n||93===n?(e.consume(n),u++,s):s(n)}function d(n){
return 58===n?(e.enter('definitionMarker'),
e.consume(n),e.exit('definitionMarker'),
v(e,p,'gfmFootnoteDefinitionWhitespace')):t(n)}function p(e){
return i.includes(o)||i.push(o),n(e)}}function mn(e,n,t){
return e.check(L,n,e.attempt(fn,n,t))}function kn(e){
e.exit('gfmFootnoteDefinition')}function xn(e={}){let n=e.singleTilde
const r={tokenize:function(e,t,r){const i=this.previous,o=this.events
let l=0
return function(n){
if(126===i&&'characterEscape'!==o[o.length-1][1].type)return r(n)
return e.enter('strikethroughSequenceTemporary'),u(n)}
function u(o){const c=w(i)
if(126===o)return l>1?r(o):(e.consume(o),l++,u)
if(l<2&&!n)return r(o)
const a=e.exit('strikethroughSequenceTemporary'),s=w(o)
return a._open=!s||2===s&&Boolean(c),a._close=!c||2===c&&Boolean(s),t(o)
}},resolveAll:function(e,n){let r=-1
for(;++r<e.length;)if('enter'===e[r][0]&&'strikethroughSequenceTemporary'===e[r][1].type&&e[r][1]._close){
let i=r
for(;i--;)if('exit'===e[i][0]&&'strikethroughSequenceTemporary'===e[i][1].type&&e[i][1]._open&&e[r][1].end.offset-e[r][1].start.offset==e[i][1].end.offset-e[i][1].start.offset){
e[r][1].type='strikethroughSequence',
e[i][1].type='strikethroughSequence'
const o={type:'strikethrough',start:Object.assign({},e[i][1].start),
end:Object.assign({},e[r][1].end)},l={type:'strikethroughText',
start:Object.assign({},e[i][1].end),
end:Object.assign({},e[r][1].start)
},u=[['enter',o,n],['enter',e[i][1],n],['exit',e[i][1],n],['enter',l,n]]
t(u,u.length,0,A(n.parser.constructs.insideSpan.null,e.slice(i+1,r),n)),t(u,u.length,0,[['exit',l,n],['enter',e[r][1],n],['exit',e[r][1],n],['exit',o,n]]),
t(e,i-1,r-i+3,u),r=i+u.length-2
break}}r=-1
for(;++r<e.length;)'strikethroughSequenceTemporary'===e[r][1].type&&(e[r][1].type='data')
return e}}
return null==n&&(n=!0),{text:{126:r},insideSpan:{null:[r]},
attentionMarkers:{null:[126]}}}const yn={flow:{null:{
tokenize:function(e,n,t){const r=this,i=[]
let o,l,u=0
return function(n){
if(e.enter('table')._align=i,e.enter('tableHead'),e.enter('tableRow'),
124===n)return c(n)
return u++,e.enter('temporaryTableCellContent'),f(n)}
function c(n){
return e.enter('tableCellDivider'),e.consume(n),e.exit('tableCellDivider'),
o=!0,a}function a(n){return null===n||m(n)?function(n){
if(null===n)return t(n)
e.exit('tableRow'),e.exit('tableHead')
const i=r.interrupt
return r.interrupt=!0,e.attempt({tokenize:z,partial:!0},(function(n){
return r.interrupt=i,e.enter('tableDelimiterRow'),p(n)}),(function(e){
return r.interrupt=i,t(e)}))(n)
}(n):k(n)?(e.enter('whitespace'),e.consume(n),s):(o&&(o=void 0,
u++),124===n?c(n):(e.enter('temporaryTableCellContent'),f(n)))}
function s(n){return k(n)?(e.consume(n),s):(e.exit('whitespace'),a(n))
}function f(n){
return null===n||124===n||g(n)?(e.exit('temporaryTableCellContent'),
a(n)):(e.consume(n),92===n?d:f)}function d(n){
return 92===n||124===n?(e.consume(n),f):f(n)}function p(n){
return null===n||m(n)?S(n):k(n)?(e.enter('whitespace'),
e.consume(n),h):45===n?(e.enter('tableDelimiterFiller'),
e.consume(n),l=!0,i.push('none'),
x):58===n?(e.enter('tableDelimiterAlignment'),e.consume(n),
e.exit('tableDelimiterAlignment'),
i.push('left'),y):124===n?(e.enter('tableCellDivider'),
e.consume(n),e.exit('tableCellDivider'),p):t(n)}function h(n){
return k(n)?(e.consume(n),h):(e.exit('whitespace'),p(n))}
function x(n){
return 45===n?(e.consume(n),x):(e.exit('tableDelimiterFiller'),58===n?(e.enter('tableDelimiterAlignment'),
e.consume(n),
e.exit('tableDelimiterAlignment'),i[i.length-1]='left'===i[i.length-1]?'center':'right',
b):p(n))}function y(n){
return 45===n?(e.enter('tableDelimiterFiller'),e.consume(n),
l=!0,x):t(n)}function b(n){
return null===n||m(n)?S(n):k(n)?(e.enter('whitespace'),
e.consume(n),h):124===n?(e.enter('tableCellDivider'),
e.consume(n),e.exit('tableCellDivider'),p):t(n)}function S(n){
return e.exit('tableDelimiterRow'),
l&&u===i.length?null===n?C(n):e.check(bn,C,e.attempt({tokenize:z,
partial:!0},v(e,F,'linePrefix',4),C))(n):t(n)}function C(t){
return e.exit('table'),n(t)}function F(n){
return e.enter('tableBody'),w(n)}function w(n){
return e.enter('tableRow'),124===n?A(n):(e.enter('temporaryTableCellContent'),
T(n))}function A(n){
return e.enter('tableCellDivider'),e.consume(n),e.exit('tableCellDivider'),
D}function D(n){return null===n||m(n)?function(n){
if(e.exit('tableRow'),null===n)return P(n)
return e.check(bn,P,e.attempt({tokenize:z,partial:!0
},v(e,w,'linePrefix',4),P))(n)
}(n):k(n)?(e.enter('whitespace'),e.consume(n),E):124===n?A(n):(e.enter('temporaryTableCellContent'),
T(n))}function E(n){
return k(n)?(e.consume(n),E):(e.exit('whitespace'),D(n))}
function T(n){
return null===n||124===n||g(n)?(e.exit('temporaryTableCellContent'),
D(n)):(e.consume(n),92===n?L:T)}function L(n){
return 92===n||124===n?(e.consume(n),T):T(n)}function P(n){
return e.exit('tableBody'),C(n)}function z(e,n,t){return function(n){
return e.enter('lineEnding'),
e.consume(n),e.exit('lineEnding'),v(e,i,'linePrefix')}
function i(i){
if(r.parser.lazy[r.now().line]||null===i||m(i))return t(i)
const o=r.events[r.events.length-1]
return!r.parser.constructs.disable.null.includes('codeIndented')&&o&&'linePrefix'===o[1].type&&o[2].sliceSerialize(o[1],!0).length>=4?t(i):(r._gfmTableDynamicInterruptHack=!0,
e.check(r.parser.constructs.flow,(function(e){
return r._gfmTableDynamicInterruptHack=!1,t(e)}),(function(e){
return r._gfmTableDynamicInterruptHack=!1,n(e)}))(i))}}},
resolve:function(e,n){let t,r,i,o,l,u,c,a=-1
for(;++a<e.length;){const s=e[a][1]
if(i&&('temporaryTableCellContent'===s.type&&(o=o||a,l=a),('tableCellDivider'===s.type||'tableRow'===s.type)&&l)){
const t={type:'tableContent',start:e[o][1].start,end:e[l][1].end},r={
type:'chunkText',start:t.start,end:t.end,contentType:'text'}
e.splice(o,l-o+1,['enter',t,n],['enter',r,n],['exit',r,n],['exit',t,n]),a-=l-o-3,
o=void 0,l=void 0}
if('exit'===e[a][0]&&void 0!==u&&u+(c?0:1)<a&&('tableCellDivider'===s.type||'tableRow'===s.type&&(u+3<a||'whitespace'!==e[u][1].type))){
const i={type:r?'tableDelimiter':t?'tableHeader':'tableData',
start:e[u][1].start,end:e[a][1].end}
e.splice(a+('tableCellDivider'===s.type?1:0),0,['exit',i,n]),e.splice(u,0,['enter',i,n]),
a+=2,u=a+1,c=!0}
'tableRow'===s.type&&(i='enter'===e[a][0],i&&(u=a+1,c=!1)),'tableDelimiterRow'===s.type&&(r='enter'===e[a][0],
r&&(u=a+1,c=!1)),'tableHead'===s.type&&(t='enter'===e[a][0])}return e}
}}},bn={tokenize:function(e,n,t){let r=0
return function(n){return e.enter('check'),e.consume(n),i}
function i(o){
return-1===o||32===o?(e.consume(o),r++,4===r?n:i):null===o||g(o)?n(o):t(o)
}},partial:!0}
const vn={tokenize:function(e,n,t){const r=this
return function(n){
if(null!==r.previous||!r._gfmTasklistFirstContentOfListItem)return t(n)
return e.enter('taskListCheck'),e.enter('taskListCheckMarker'),e.consume(n),e.exit('taskListCheckMarker'),
i}
function i(n){
return g(n)?(e.enter('taskListCheckValueUnchecked'),e.consume(n),e.exit('taskListCheckValueUnchecked'),
o):88===n||120===n?(e.enter('taskListCheckValueChecked'),
e.consume(n),e.exit('taskListCheckValueChecked'),o):t(n)}
function o(r){
return 93===r?(e.enter('taskListCheckMarker'),e.consume(r),e.exit('taskListCheckMarker'),
e.exit('taskListCheck'),e.check({tokenize:Cn},n,t)):t(r)}}},Sn={text:{
91:vn}}
function Cn(e,n,t){const r=this
return v(e,(function(e){const i=r.events[r.events.length-1]
return(i&&'whitespace'===i[1].type||m(e))&&null!==e?n(e):t(e)
}),'whitespace')}function Fn(e){return o([en,{document:{91:{
tokenize:gn,continuation:{tokenize:mn},exit:kn}},text:{91:{tokenize:hn
},93:{add:'after',tokenize:dn,resolveTo:pn}}},xn(e),yn,Sn])}
function wn(e,n){const t=String(e)
if('string'!=typeof n)throw new TypeError('Expected character')
let r=0,i=t.indexOf(n)
for(;-1!==i;)r++,i=t.indexOf(n,i+n.length)
return r}const An=function(e){if(null==e)return En
if('string'==typeof e)return function(e){return Dn(n)
function n(n){return n&&n.type===e}}(e)
if('object'==typeof e)return Array.isArray(e)?function(e){const n=[]
let t=-1
for(;++t<e.length;)n[t]=An(e[t])
return Dn(r)
function r(...e){let t=-1
for(;++t<n.length;)if(n[t].call(this,...e))return!0
return!1}}(e):function(e){return Dn(n)
function n(n){let t
for(t in e)if(n[t]!==e[t])return!1
return!0}}(e)
if('function'==typeof e)return Dn(e)
throw new Error('Expected function, string, or object as test')}
function Dn(e){return function(...n){return Boolean(e.call(this,...n))
}}function En(){return!0}const Tn=function(e,n,t,r){
'function'==typeof n&&'function'!=typeof t&&(r=t,t=n,n=null)
const i=An(n),o=r?-1:1
!function e(l,u,c){const a='object'==typeof l&&null!==l?l:{}
let s
'string'==typeof a.type&&(s='string'==typeof a.tagName?a.tagName:'string'==typeof a.name?a.name:void 0,
Object.defineProperty(f,'name',{
value:'node ('+a.type+(s?'<'+s+'>':'')+')'}))
return f
function f(){let a,s,f,d=[]
if((!n||i(l,u,c[c.length-1]||null))&&(d=function(e){
if(Array.isArray(e))return e
if('number'==typeof e)return[true,e]
return[e]}(t(l,c)),false===d[0]))return d
if(l.children&&"skip"!==d[0])for(s=(r?l.children.length:-1)+o,f=c.concat(l);s>-1&&s<l.children.length;){
if(a=e(l.children[s],s,f)(),false===a[0])return a
s='number'==typeof a[1]?a[1]:s+o}return d}}(e,null,[])()}
const Ln={}.hasOwnProperty,Pn=function(e,n,t,r){let i,o
'string'==typeof n||n instanceof RegExp?(o=[[n,t]],i=r):(o=n,i=t),i||(i={})
const l=An(i.ignore||[]),u=function(e){const n=[]
if('object'!=typeof e)throw new TypeError('Expected array or object as schema')
if(Array.isArray(e)){let t=-1
for(;++t<e.length;)n.push([zn(e[t][0]),In(e[t][1])])}else{let t
for(t in e)Ln.call(e,t)&&n.push([zn(t),In(e[t])])}return n}(o)
let c=-1
for(;++c<u.length;)Tn(e,'text',a)
return e
function a(e,n){let t,r=-1
for(;++r<n.length;){const e=n[r]
if(l(e,t?t.children.indexOf(e):void 0,t))return
t=e}if(t)return function(e,n){
const t=n[n.length-1],r=u[c][0],i=u[c][1]
let o=0
const l=t.children.indexOf(e)
let a,s=!1,f=[]
r.lastIndex=0
let d=r.exec(e.value)
for(;d;){a=d.index
const t={index:d.index,input:d.input,stack:[...n,e]}
let l=i(...d,t)
if('string'==typeof l&&(l=l.length>0?{type:'text',value:l
}:void 0),!1!==l&&(o!==a&&f.push({type:'text',value:e.value.slice(o,a)
}),Array.isArray(l)?f.push(...l):l&&f.push(l),
o=a+d[0].length,s=!0),!r.global)break
d=r.exec(e.value)}s?(o<e.value.length&&f.push({type:'text',
value:e.value.slice(o)}),t.children.splice(l,1,...f)):f=[e]
return l+f.length}(e,n)}}
function zn(e){return'string'==typeof e?new RegExp(function(e){
if('string'!=typeof e)throw new TypeError('Expected a string')
return e.replace(/[|\\{}()[\]^$+*?.]/g,'\\$&').replace(/-/g,'\\x2d')
}(e),'g'):e}function In(e){return'function'==typeof e?e:()=>e}
const On={transforms:[function(e){
Pn(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Bn],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,Rn]],{
ignore:['link','linkReference']})}],enter:{
literalAutolink:function(e){this.enter({type:'link',title:null,url:'',
children:[]},e)},literalAutolinkEmail:Mn,literalAutolinkHttp:Mn,
literalAutolinkWww:Mn},exit:{literalAutolink:function(e){this.exit(e)
},literalAutolinkEmail:function(e){
this.config.exit.autolinkEmail.call(this,e)},
literalAutolinkHttp:function(e){
this.config.exit.autolinkProtocol.call(this,e)},
literalAutolinkWww:function(e){this.config.exit.data.call(this,e)
this.stack[this.stack.length-1].url='http://'+this.sliceSerialize(e)}}
}
function Mn(e){this.config.enter.autolinkProtocol.call(this,e)}
function Bn(e,n,t,r,i){let o=''
if(!_n(i))return!1
if(/^w/i.test(n)&&(t=n+t,n='',o='http://'),!function(e){
const n=e.split('.')
if(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))return!1
return!0}(t))return!1
const l=function(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e)
let t,r,i,o
if(n)for(e=e.slice(0,n.index),o=n[0],t=o.indexOf(')'),r=wn(e,'('),i=wn(e,')');-1!==t&&r>i;)e+=o.slice(0,t+1),
o=o.slice(t+1),t=o.indexOf(')'),i++
return[e,o]}(t+r)
if(!l[0])return!1
const u={type:'link',title:null,url:o+n+l[0],children:[{type:'text',
value:n+l[0]}]}
return l[1]?[u,{type:'text',value:l[1]}]:u}function Rn(e,n,t,r){
return!(!_n(r,!0)||/[_-\d]$/.test(t))&&{type:'link',title:null,
url:'mailto:'+n+'@'+t,children:[{type:'text',value:n+'@'+t}]}}
function _n(e,n){const t=e.input.charCodeAt(e.index-1)
return(0===e.index||x(t)||y(t))&&(!n||47!==t)}const jn={
canContainEols:['delete'],enter:{strikethrough:function(e){
this.enter({type:'delete',children:[]},e)}},exit:{
strikethrough:function(e){this.exit(e)}}}
const Hn={enter:{table:function(e){const n=e._align
this.enter({type:'table',align:n.map((e=>'none'===e?null:e)),
children:[]},e),this.setData('inTable',!0)},tableData:Un,
tableHeader:Un,tableRow:function(e){this.enter({type:'tableRow',
children:[]},e)}},exit:{codeText:function(e){let n=this.resume()
this.getData('inTable')&&(n=n.replace(/\\([\\|])/g,qn))
this.stack[this.stack.length-1].value=n,this.exit(e)},
table:function(e){this.exit(e),this.setData('inTable')},tableData:Nn,
tableHeader:Nn,tableRow:Nn}}
function Nn(e){this.exit(e)}function Un(e){this.enter({
type:'tableCell',children:[]},e)}function qn(e,n){return'|'===n?n:e}
const Vn={exit:{taskListCheckValueChecked:Wn,
taskListCheckValueUnchecked:Wn,paragraph:function(e){
const n=this.stack[this.stack.length-2],t=this.stack[this.stack.length-1],r=n.children,i=t.children[0]
let o,l=-1
if(n&&'listItem'===n.type&&'boolean'==typeof n.checked&&i&&'text'===i.type){
for(;++l<r.length;){const e=r[l]
if('paragraph'===e.type){o=e
break}}
o===t&&(i.value=i.value.slice(1),0===i.value.length?t.children.shift():t.position&&i.position&&'number'==typeof i.position.start.offset&&(i.position.start.column++,
i.position.start.offset++,
t.position.start=Object.assign({},i.position.start)))}this.exit(e)}}}
function Wn(e){
this.stack[this.stack.length-2].checked='taskListCheckValueChecked'===e.type
}function Qn(){return[On,{enter:{gfmFootnoteDefinition:function(e){
this.enter({type:'footnoteDefinition',identifier:'',label:'',
children:[]},e)},gfmFootnoteDefinitionLabelString:function(){
this.buffer()},gfmFootnoteCall:function(e){this.enter({
type:'footnoteReference',identifier:'',label:''},e)},
gfmFootnoteCallString:function(){this.buffer()}},exit:{
gfmFootnoteDefinition:function(e){this.exit(e)},
gfmFootnoteDefinitionLabelString:function(e){
const n=this.resume(),t=this.stack[this.stack.length-1]
t.label=n,t.identifier=Y(this.sliceSerialize(e)).toLowerCase()},
gfmFootnoteCall:function(e){this.exit(e)},
gfmFootnoteCallString:function(e){
const n=this.resume(),t=this.stack[this.stack.length-1]
t.label=n,t.identifier=Y(this.sliceSerialize(e)).toLowerCase()}}
},jn,Hn,Vn]}var Kn=function(e,n,t){var r={type:String(e)}
return null!=t||'string'!=typeof n&&!Array.isArray(n)?Object.assign(r,n):t=n,Array.isArray(t)?r.children=t:null!=t&&(r.value=String(t)),
r}
const Yn={}.hasOwnProperty
function Xn(e,n){const t=n.data||{}
return'value'in n&&!(Yn.call(t,'hName')||Yn.call(t,'hProperties')||Yn.call(t,'hChildren'))?e.augment(n,Kn('text',n.value)):e(n,'div',Jn(e,n))
}function Zn(e,n,t){const r=n&&n.type
let i
if(!r)throw new Error('Expected node, got `'+n+'`')
return i=Yn.call(e.handlers,r)?e.handlers[r]:e.passThrough&&e.passThrough.includes(r)?$n:e.unknownHandler,
('function'==typeof i?i:Xn)(e,n,t)}function $n(e,n){
return'children'in n?{...n,children:Jn(e,n)}:n}function Jn(e,n){
const t=[]
if('children'in n){const r=n.children
let i=-1
for(;++i<r.length;){const o=Zn(e,r[i],n)
if(o){
if(i&&'break'===r[i-1].type&&(Array.isArray(o)||'text'!==o.type||(o.value=o.value.replace(/^\s+/,'')),
!Array.isArray(o)&&'element'===o.type)){const e=o.children[0]
e&&'text'===e.type&&(e.value=e.value.replace(/^\s+/,''))}
Array.isArray(o)?t.push(...o):t.push(o)}}}return t}
const Gn=function(e,n,t,r){
'function'==typeof n&&'function'!=typeof t&&(r=t,t=n,
n=null),Tn(e,n,(function(e,n){const r=n[n.length-1]
return t(e,r?r.children.indexOf(e):null,r)}),r)
},et=tt('start'),nt=tt('end')
function tt(e){return function(n){
const t=n&&n.position&&n.position[e]||{}
return{line:t.line||null,column:t.column||null,
offset:t.offset>-1?t.offset:null}}}const rt={}.hasOwnProperty
function it(e){return String(e||'').toUpperCase()}function ot(e,n){
const t=[]
let r=-1
for(n&&t.push(Kn('text','\n'));++r<e.length;)r&&t.push(Kn('text','\n')),t.push(e[r])
return n&&e.length>0&&t.push(Kn('text','\n')),t}function lt(e,n){
const t=String(n.identifier),r=sn(t.toLowerCase()),i=e.footnoteOrder.indexOf(t)
let o
;-1===i?(e.footnoteOrder.push(t),e.footnoteCounts[t]=1,o=e.footnoteOrder.length):(e.footnoteCounts[t]++,
o=i+1)
const l=e.footnoteCounts[t]
return e(n,'sup',[e(n.position,'a',{href:'#'+e.clobberPrefix+'fn-'+r,
id:e.clobberPrefix+'fnref-'+r+(l>1?'-'+l:''),dataFootnoteRef:!0,
ariaDescribedBy:'footnote-label'},[Kn('text',String(o))])])}
function ut(e,n){const t=n.referenceType
let r=']'
if('collapsed'===t?r+='[]':'full'===t&&(r+='['+(n.label||n.identifier)+']'),'imageReference'===n.type)return Kn('text','!['+n.alt+r)
const i=Jn(e,n),o=i[0]
o&&'text'===o.type?o.value='['+o.value:i.unshift(Kn('text','['))
const l=i[i.length-1]
return l&&'text'===l.type?l.value+=r:i.push(Kn('text',r)),i}
function ct(e){const n=e.spread
return null==n?e.children.length>1:n}function at(e,n,t){
let r=0,i=e.length
if(n){let n=e.codePointAt(r)
for(;9===n||32===n;)r++,n=e.codePointAt(r)}if(t){
let n=e.codePointAt(i-1)
for(;9===n||32===n;)i--,n=e.codePointAt(i-1)}
return i>r?e.slice(r,i):''}const st={blockquote:function(e,n){
return e(n,'blockquote',ot(Jn(e,n),!0))},break:function(e,n){
return[e(n,'br'),Kn('text','\n')]},code:function(e,n){
const t=n.value?n.value+'\n':'',r=n.lang&&n.lang.match(/^[^ \t]+(?=[ \t]|$)/),i={}
r&&(i.className=['language-'+r])
const o=e(n,'code',i,[Kn('text',t)])
return n.meta&&(o.data={meta:n.meta}),e(n.position,'pre',[o])},
delete:function(e,n){return e(n,'del',Jn(e,n))},
emphasis:function(e,n){return e(n,'em',Jn(e,n))},footnoteReference:lt,
footnote:function(e,n){const t=e.footnoteById
let r=1
for(;r in t;)r++
const i=String(r)
return t[i]={type:'footnoteDefinition',identifier:i,children:[{
type:'paragraph',children:n.children}],position:n.position},lt(e,{
type:'footnoteReference',identifier:i,position:n.position})},
heading:function(e,n){return e(n,'h'+n.depth,Jn(e,n))},
html:function(e,n){
return e.dangerous?e.augment(n,Kn('raw',n.value)):null},
imageReference:function(e,n){const t=e.definition(n.identifier)
if(!t)return ut(e,n)
const r={src:sn(t.url||''),alt:n.alt}
return null!==t.title&&void 0!==t.title&&(r.title=t.title),e(n,'img',r)
},image:function(e,n){const t={src:sn(n.url),alt:n.alt}
return null!==n.title&&void 0!==n.title&&(t.title=n.title),e(n,'img',t)
},inlineCode:function(e,n){
return e(n,'code',[Kn('text',n.value.replace(/\r?\n|\r/g,' '))])},
linkReference:function(e,n){const t=e.definition(n.identifier)
if(!t)return ut(e,n)
const r={href:sn(t.url||'')}
return null!==t.title&&void 0!==t.title&&(r.title=t.title),e(n,'a',r,Jn(e,n))
},link:function(e,n){const t={href:sn(n.url)}
return null!==n.title&&void 0!==n.title&&(t.title=n.title),e(n,'a',t,Jn(e,n))
},listItem:function(e,n,t){const r=Jn(e,n),i=t?function(e){
let n=e.spread
const t=e.children
let r=-1
for(;!n&&++r<t.length;)n=ct(t[r])
return Boolean(n)}(t):ct(n),o={},l=[]
if('boolean'==typeof n.checked){let t
r[0]&&'element'===r[0].type&&'p'===r[0].tagName?t=r[0]:(t=e(null,'p',[]),r.unshift(t)),
t.children.length>0&&t.children.unshift(Kn('text',' ')),
t.children.unshift(e(null,'input',{type:'checkbox',checked:n.checked,
disabled:!0})),o.className=['task-list-item']}let u=-1
for(;++u<r.length;){const e=r[u]
;(i||0!==u||'element'!==e.type||'p'!==e.tagName)&&l.push(Kn('text','\n')),
'element'!==e.type||'p'!==e.tagName||i?l.push(e):l.push(...e.children)
}const c=r[r.length-1]
return!c||!i&&'tagName'in c&&'p'===c.tagName||l.push(Kn('text','\n')),e(n,'li',o,l)
},list:function(e,n){const t={},r=n.ordered?'ol':'ul',i=Jn(e,n)
let o=-1
for('number'==typeof n.start&&1!==n.start&&(t.start=n.start);++o<i.length;){
const e=i[o]
if('element'===e.type&&'li'===e.tagName&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes('task-list-item')){
t.className=['contains-task-list']
break}}return e(n,r,t,ot(i,!0))},paragraph:function(e,n){
return e(n,'p',Jn(e,n))},root:function(e,n){
return e.augment(n,Kn('root',ot(Jn(e,n))))},strong:function(e,n){
return e(n,'strong',Jn(e,n))},table:function(e,n){const t=n.children
let r=-1
const i=n.align||[],o=[]
for(;++r<t.length;){const l=t[r].children,u=0===r?'th':'td',c=[]
let a=-1
const s=n.align?i.length:l.length
for(;++a<s;){const n=l[a]
c.push(e(n,u,{align:i[a]},n?Jn(e,n):[]))}o[r]=e(t[r],'tr',ot(c,!0))}
return e(n,'table',ot([e(o[0].position,'thead',ot([o[0]],!0))].concat(o[1]?e({
start:et(o[1]),end:nt(o[o.length-1])
},'tbody',ot(o.slice(1),!0)):[]),!0))},text:function(e,n){
return e.augment(n,Kn('text',function(e){
const n=String(e),t=/\r?\n|\r/g
let r=t.exec(n),i=0
const o=[]
for(;r;)o.push(at(n.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(n)
return o.push(at(n.slice(i),i>0,!1)),o.join('')}(String(n.value))))},
thematicBreak:function(e,n){return e(n,'hr')},toml:ft,yaml:ft,
definition:ft,footnoteDefinition:ft}
function ft(){return null}const dt={}.hasOwnProperty
function pt(e,n){const t=n||{},r=t.allowDangerousHtml||!1,i={}
return l.dangerous=r,l.clobberPrefix=void 0===t.clobberPrefix||null===t.clobberPrefix?'user-content-':t.clobberPrefix,
l.footnoteLabel=t.footnoteLabel||'Footnotes',
l.footnoteLabelTagName=t.footnoteLabelTagName||'h2',
l.footnoteLabelProperties=t.footnoteLabelProperties||{
className:['sr-only']
},l.footnoteBackLabel=t.footnoteBackLabel||'Back to content',
l.definition=function(e){const n=Object.create(null)
if(!e||!e.type)throw new Error('mdast-util-definitions expected node')
return Gn(e,'definition',(e=>{const t=it(e.identifier)
t&&!rt.call(n,t)&&(n[t]=e)})),function(e){const t=it(e)
return t&&rt.call(n,t)?n[t]:null}
}(e),l.footnoteById=i,l.footnoteOrder=[],l.footnoteCounts={},
l.augment=o,l.handlers={...st,...t.handlers
},l.unknownHandler=t.unknownHandler,l.passThrough=t.passThrough,
Gn(e,'footnoteDefinition',(e=>{
const n=String(e.identifier).toUpperCase()
dt.call(i,n)||(i[n]=e)})),l
function o(e,n){if(e&&'data'in e&&e.data){const t=e.data
t.hName&&('element'!==n.type&&(n={type:'element',tagName:'',
properties:{},children:[]
}),n.tagName=t.hName),'element'===n.type&&t.hProperties&&(n.properties={
...n.properties,...t.hProperties
}),'children'in n&&n.children&&t.hChildren&&(n.children=t.hChildren)}
if(e){const r='type'in e?e:{position:e}
;(t=r)&&t.position&&t.position.start&&t.position.start.line&&t.position.start.column&&t.position.end&&t.position.end.line&&t.position.end.column&&(n.position={
start:et(r),end:nt(r)})}var t
return n}function l(e,n,t,r){return Array.isArray(t)&&(r=t,t={}),o(e,{
type:'element',tagName:n,properties:t||{},children:r||[]})}}
function ht(e,n){const t=pt(e,n),r=Zn(t,e,null),i=function(e){let n=-1
const t=[]
for(;++n<e.footnoteOrder.length;){
const r=e.footnoteById[e.footnoteOrder[n].toUpperCase()]
if(!r)continue
const i=Jn(e,r),o=String(r.identifier),l=sn(o.toLowerCase())
let u=0
const c=[]
for(;++u<=e.footnoteCounts[o];){const n={type:'element',tagName:'a',
properties:{href:'#'+e.clobberPrefix+'fnref-'+l+(u>1?'-'+u:''),
dataFootnoteBackref:!0,className:['data-footnote-backref'],
ariaLabel:e.footnoteBackLabel},children:[{type:'text',value:'↩'}]}
u>1&&n.children.push({type:'element',tagName:'sup',children:[{
type:'text',value:String(u)}]}),c.length>0&&c.push({type:'text',
value:' '}),c.push(n)}const a=i[i.length-1]
if(a&&'element'===a.type&&'p'===a.tagName){
const e=a.children[a.children.length-1]
e&&'text'===e.type?e.value+=' ':a.children.push({type:'text',value:' '
}),a.children.push(...c)}else i.push(...c)
const s={type:'element',tagName:'li',properties:{
id:e.clobberPrefix+'fn-'+l},children:ot(i,!0)}
r.position&&(s.position=r.position),t.push(s)}
return 0===t.length?null:{type:'element',tagName:'section',
properties:{dataFootnotes:!0,className:['footnotes']},children:[{
type:'element',tagName:e.footnoteLabelTagName,properties:{
...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
id:'footnote-label'},children:[Kn('text',e.footnoteLabel)]},{
type:'text',value:'\n'},{type:'element',tagName:'ol',properties:{},
children:ot(t,!0)},{type:'text',value:'\n'}]}}(t)
return i&&r.children.push(Kn('text','\n'),i),Array.isArray(r)?{
type:'root',children:r}:r}class gt{constructor(e,n,t){
this.property=e,this.normal=n,t&&(this.space=t)}}function mt(e,n){
const t={},r={}
let i=-1
for(;++i<e.length;)Object.assign(t,e[i].property),Object.assign(r,e[i].normal)
return new gt(t,r,n)}function kt(e){return e.toLowerCase()}
gt.prototype.property={},
gt.prototype.normal={},gt.prototype.space=null
class xt{constructor(e,n){this.property=e,this.attribute=n}}
xt.prototype.space=null,
xt.prototype.boolean=!1,xt.prototype.booleanish=!1,xt.prototype.overloadedBoolean=!1,
xt.prototype.number=!1,
xt.prototype.commaSeparated=!1,xt.prototype.spaceSeparated=!1,
xt.prototype.commaOrSpaceSeparated=!1,
xt.prototype.mustUseProperty=!1,xt.prototype.defined=!1
let yt=0
const bt=Dt(),vt=Dt(),St=Dt(),Ct=Dt(),Ft=Dt(),wt=Dt(),At=Dt()
function Dt(){return 2**++yt}var Et=Object.freeze({__proto__:null,
boolean:bt,booleanish:vt,overloadedBoolean:St,number:Ct,
spaceSeparated:Ft,commaSeparated:wt,commaOrSpaceSeparated:At})
const Tt=Object.keys(Et)
class Lt extends xt{constructor(e,n,t,r){let i=-1
if(super(e,n),Pt(this,'space',r),'number'==typeof t)for(;++i<Tt.length;){
const e=Tt[i]
Pt(this,Tt[i],(t&Et[e])===Et[e])}}}function Pt(e,n,t){t&&(e[n]=t)}
Lt.prototype.defined=!0
const zt={}.hasOwnProperty
function It(e){const n={},t={}
let r
for(r in e.properties)if(zt.call(e.properties,r)){
const i=e.properties[r],o=new Lt(r,e.transform(e.attributes||{},r),i,e.space)
e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),n[r]=o,
t[kt(r)]=r,t[kt(o.attribute)]=r}return new gt(n,t,e.space)}
const Ot=It({space:'xlink',
transform:(e,n)=>'xlink:'+n.slice(5).toLowerCase(),properties:{
xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,
xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Mt=It({space:'xml',
transform:(e,n)=>'xml:'+n.slice(3).toLowerCase(),properties:{
xmlLang:null,xmlBase:null,xmlSpace:null}})
function Bt(e,n){return n in e?e[n]:n}function Rt(e,n){
return Bt(e,n.toLowerCase())}const _t=It({space:'xmlns',attributes:{
xmlnsxlink:'xmlns:xlink'},transform:Rt,properties:{xmlns:null,
xmlnsXLink:null}}),jt=It({
transform:(e,n)=>'role'===n?n:'aria-'+n.slice(4).toLowerCase(),
properties:{ariaActiveDescendant:null,ariaAtomic:vt,
ariaAutoComplete:null,ariaBusy:vt,ariaChecked:vt,ariaColCount:Ct,
ariaColIndex:Ct,ariaColSpan:Ct,ariaControls:Ft,ariaCurrent:null,
ariaDescribedBy:Ft,ariaDetails:null,ariaDisabled:vt,ariaDropEffect:Ft,
ariaErrorMessage:null,ariaExpanded:vt,ariaFlowTo:Ft,ariaGrabbed:vt,
ariaHasPopup:null,ariaHidden:vt,ariaInvalid:null,
ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ft,ariaLevel:Ct,
ariaLive:null,ariaModal:vt,ariaMultiLine:vt,ariaMultiSelectable:vt,
ariaOrientation:null,ariaOwns:Ft,ariaPlaceholder:null,ariaPosInSet:Ct,
ariaPressed:vt,ariaReadOnly:vt,ariaRelevant:null,ariaRequired:vt,
ariaRoleDescription:Ft,ariaRowCount:Ct,ariaRowIndex:Ct,ariaRowSpan:Ct,
ariaSelected:vt,ariaSetSize:Ct,ariaSort:null,ariaValueMax:Ct,
ariaValueMin:Ct,ariaValueNow:Ct,ariaValueText:null,role:null}
}),Ht=It({space:'html',attributes:{acceptcharset:'accept-charset',
classname:'class',htmlfor:'for',httpequiv:'http-equiv'},transform:Rt,
mustUseProperty:['checked','multiple','muted','selected'],properties:{
abbr:null,accept:wt,acceptCharset:Ft,accessKey:Ft,action:null,
allow:null,allowFullScreen:bt,allowPaymentRequest:bt,
allowUserMedia:bt,alt:null,as:null,async:bt,autoCapitalize:null,
autoComplete:Ft,autoFocus:bt,autoPlay:bt,capture:bt,charSet:null,
checked:bt,cite:null,className:Ft,cols:Ct,colSpan:null,content:null,
contentEditable:vt,controls:bt,controlsList:Ft,coords:Ct|wt,
crossOrigin:null,data:null,dateTime:null,decoding:null,default:bt,
defer:bt,dir:null,dirName:null,disabled:bt,download:St,draggable:vt,
encType:null,enterKeyHint:null,form:null,formAction:null,
formEncType:null,formMethod:null,formNoValidate:bt,formTarget:null,
headers:Ft,height:Ct,hidden:bt,high:Ct,href:null,hrefLang:null,
htmlFor:Ft,httpEquiv:Ft,id:null,imageSizes:null,imageSrcSet:null,
inputMode:null,integrity:null,is:null,isMap:bt,itemId:null,
itemProp:Ft,itemRef:Ft,itemScope:bt,itemType:Ft,kind:null,label:null,
lang:null,language:null,list:null,loading:null,loop:bt,low:Ct,
manifest:null,max:null,maxLength:Ct,media:null,method:null,min:null,
minLength:Ct,multiple:bt,muted:bt,name:null,nonce:null,noModule:bt,
noValidate:bt,onAbort:null,onAfterPrint:null,onAuxClick:null,
onBeforeMatch:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,
onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,
onClick:null,onClose:null,onContextLost:null,onContextMenu:null,
onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,
onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,
onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,
onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,
onError:null,onFocus:null,onFormData:null,onHashChange:null,
onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,
onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,
onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,
onMessageError:null,onMouseDown:null,onMouseEnter:null,
onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,
onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,
onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,
onPopState:null,onProgress:null,onRateChange:null,
onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,
onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,
onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,
onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,
onToggle:null,onUnhandledRejection:null,onUnload:null,
onVolumeChange:null,onWaiting:null,onWheel:null,open:bt,optimum:Ct,
pattern:null,ping:Ft,placeholder:null,playsInline:bt,poster:null,
preload:null,readOnly:bt,referrerPolicy:null,rel:Ft,required:bt,
reversed:bt,rows:Ct,rowSpan:Ct,sandbox:Ft,scope:null,scoped:bt,
seamless:bt,selected:bt,shape:null,size:Ct,sizes:null,slot:null,
span:Ct,spellCheck:vt,src:null,srcDoc:null,srcLang:null,srcSet:null,
start:Ct,step:null,style:null,tabIndex:Ct,target:null,title:null,
translate:null,type:null,typeMustMatch:bt,useMap:null,value:vt,
width:Ct,wrap:null,align:null,aLink:null,archive:Ft,axis:null,
background:null,bgColor:null,border:Ct,borderColor:null,
bottomMargin:Ct,cellPadding:null,cellSpacing:null,char:null,
charOff:null,classId:null,clear:null,code:null,codeBase:null,
codeType:null,color:null,compact:bt,declare:bt,event:null,face:null,
frame:null,frameBorder:null,hSpace:Ct,leftMargin:Ct,link:null,
longDesc:null,lowSrc:null,marginHeight:Ct,marginWidth:Ct,noResize:bt,
noHref:bt,noShade:bt,noWrap:bt,object:null,profile:null,prompt:null,
rev:null,rightMargin:Ct,rules:null,scheme:null,scrolling:vt,
standby:null,summary:null,text:null,topMargin:Ct,valueType:null,
version:null,vAlign:null,vLink:null,vSpace:Ct,allowTransparency:null,
autoCorrect:null,autoSave:null,disablePictureInPicture:bt,
disableRemotePlayback:bt,prefix:null,property:null,results:Ct,
security:null,unselectable:null}}),Nt=It({space:'svg',attributes:{
accentHeight:'accent-height',alignmentBaseline:'alignment-baseline',
arabicForm:'arabic-form',baselineShift:'baseline-shift',
capHeight:'cap-height',className:'class',clipPath:'clip-path',
clipRule:'clip-rule',colorInterpolation:'color-interpolation',
colorInterpolationFilters:'color-interpolation-filters',
colorProfile:'color-profile',colorRendering:'color-rendering',
crossOrigin:'crossorigin',dataType:'datatype',
dominantBaseline:'dominant-baseline',
enableBackground:'enable-background',fillOpacity:'fill-opacity',
fillRule:'fill-rule',floodColor:'flood-color',
floodOpacity:'flood-opacity',fontFamily:'font-family',
fontSize:'font-size',fontSizeAdjust:'font-size-adjust',
fontStretch:'font-stretch',fontStyle:'font-style',
fontVariant:'font-variant',fontWeight:'font-weight',
glyphName:'glyph-name',
glyphOrientationHorizontal:'glyph-orientation-horizontal',
glyphOrientationVertical:'glyph-orientation-vertical',
hrefLang:'hreflang',horizAdvX:'horiz-adv-x',
horizOriginX:'horiz-origin-x',horizOriginY:'horiz-origin-y',
imageRendering:'image-rendering',letterSpacing:'letter-spacing',
lightingColor:'lighting-color',markerEnd:'marker-end',
markerMid:'marker-mid',markerStart:'marker-start',navDown:'nav-down',
navDownLeft:'nav-down-left',navDownRight:'nav-down-right',
navLeft:'nav-left',navNext:'nav-next',navPrev:'nav-prev',
navRight:'nav-right',navUp:'nav-up',navUpLeft:'nav-up-left',
navUpRight:'nav-up-right',onAbort:'onabort',onActivate:'onactivate',
onAfterPrint:'onafterprint',onBeforePrint:'onbeforeprint',
onBegin:'onbegin',onCancel:'oncancel',onCanPlay:'oncanplay',
onCanPlayThrough:'oncanplaythrough',onChange:'onchange',
onClick:'onclick',onClose:'onclose',onCopy:'oncopy',
onCueChange:'oncuechange',onCut:'oncut',onDblClick:'ondblclick',
onDrag:'ondrag',onDragEnd:'ondragend',onDragEnter:'ondragenter',
onDragExit:'ondragexit',onDragLeave:'ondragleave',
onDragOver:'ondragover',onDragStart:'ondragstart',onDrop:'ondrop',
onDurationChange:'ondurationchange',onEmptied:'onemptied',
onEnd:'onend',onEnded:'onended',onError:'onerror',onFocus:'onfocus',
onFocusIn:'onfocusin',onFocusOut:'onfocusout',
onHashChange:'onhashchange',onInput:'oninput',onInvalid:'oninvalid',
onKeyDown:'onkeydown',onKeyPress:'onkeypress',onKeyUp:'onkeyup',
onLoad:'onload',onLoadedData:'onloadeddata',
onLoadedMetadata:'onloadedmetadata',onLoadStart:'onloadstart',
onMessage:'onmessage',onMouseDown:'onmousedown',
onMouseEnter:'onmouseenter',onMouseLeave:'onmouseleave',
onMouseMove:'onmousemove',onMouseOut:'onmouseout',
onMouseOver:'onmouseover',onMouseUp:'onmouseup',
onMouseWheel:'onmousewheel',onOffline:'onoffline',onOnline:'ononline',
onPageHide:'onpagehide',onPageShow:'onpageshow',onPaste:'onpaste',
onPause:'onpause',onPlay:'onplay',onPlaying:'onplaying',
onPopState:'onpopstate',onProgress:'onprogress',
onRateChange:'onratechange',onRepeat:'onrepeat',onReset:'onreset',
onResize:'onresize',onScroll:'onscroll',onSeeked:'onseeked',
onSeeking:'onseeking',onSelect:'onselect',onShow:'onshow',
onStalled:'onstalled',onStorage:'onstorage',onSubmit:'onsubmit',
onSuspend:'onsuspend',onTimeUpdate:'ontimeupdate',onToggle:'ontoggle',
onUnload:'onunload',onVolumeChange:'onvolumechange',
onWaiting:'onwaiting',onZoom:'onzoom',
overlinePosition:'overline-position',
overlineThickness:'overline-thickness',paintOrder:'paint-order',
panose1:'panose-1',pointerEvents:'pointer-events',
referrerPolicy:'referrerpolicy',renderingIntent:'rendering-intent',
shapeRendering:'shape-rendering',stopColor:'stop-color',
stopOpacity:'stop-opacity',
strikethroughPosition:'strikethrough-position',
strikethroughThickness:'strikethrough-thickness',
strokeDashArray:'stroke-dasharray',
strokeDashOffset:'stroke-dashoffset',strokeLineCap:'stroke-linecap',
strokeLineJoin:'stroke-linejoin',strokeMiterLimit:'stroke-miterlimit',
strokeOpacity:'stroke-opacity',strokeWidth:'stroke-width',
tabIndex:'tabindex',textAnchor:'text-anchor',
textDecoration:'text-decoration',textRendering:'text-rendering',
typeOf:'typeof',underlinePosition:'underline-position',
underlineThickness:'underline-thickness',unicodeBidi:'unicode-bidi',
unicodeRange:'unicode-range',unitsPerEm:'units-per-em',
vAlphabetic:'v-alphabetic',vHanging:'v-hanging',
vIdeographic:'v-ideographic',vMathematical:'v-mathematical',
vectorEffect:'vector-effect',vertAdvY:'vert-adv-y',
vertOriginX:'vert-origin-x',vertOriginY:'vert-origin-y',
wordSpacing:'word-spacing',writingMode:'writing-mode',
xHeight:'x-height',playbackOrder:'playbackorder',
timelineBegin:'timelinebegin'},transform:Bt,properties:{about:At,
accentHeight:Ct,accumulate:null,additive:null,alignmentBaseline:null,
alphabetic:Ct,amplitude:Ct,arabicForm:null,ascent:Ct,
attributeName:null,attributeType:null,azimuth:Ct,bandwidth:null,
baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,
begin:null,bias:Ct,by:null,calcMode:null,capHeight:Ct,className:Ft,
clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,
colorInterpolation:null,colorInterpolationFilters:null,
colorProfile:null,colorRendering:null,content:null,
contentScriptType:null,contentStyleType:null,crossOrigin:null,
cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,
descent:Ct,diffuseConstant:Ct,direction:null,display:null,dur:null,
divisor:Ct,dominantBaseline:null,download:bt,dx:null,dy:null,
edgeMode:null,editable:null,elevation:Ct,enableBackground:null,
end:null,event:null,exponent:Ct,externalResourcesRequired:null,
fill:null,fillOpacity:Ct,fillRule:null,filter:null,filterRes:null,
filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,
focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,
fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,
format:null,fr:null,from:null,fx:null,fy:null,g1:wt,g2:wt,
glyphName:wt,glyphOrientationHorizontal:null,
glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,
gradientUnits:null,handler:null,hanging:Ct,hatchContentUnits:null,
hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Ct,
horizOriginX:Ct,horizOriginY:Ct,id:null,ideographic:Ct,
imageRendering:null,initialVisibility:null,in:null,in2:null,
intercept:Ct,k:Ct,k1:Ct,k2:Ct,k3:Ct,k4:Ct,kernelMatrix:At,
kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,
kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,
lightingColor:null,limitingConeAngle:Ct,local:null,markerEnd:null,
markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,
markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,
mathematical:null,max:null,media:null,mediaCharacterEncoding:null,
mediaContentEncodings:null,mediaSize:Ct,mediaTime:null,method:null,
min:null,mode:null,name:null,navDown:null,navDownLeft:null,
navDownRight:null,navLeft:null,navNext:null,navPrev:null,
navRight:null,navUp:null,navUpLeft:null,navUpRight:null,
numOctaves:null,observer:null,offset:null,onAbort:null,
onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,
onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,
onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,
onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,
onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,
onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,
onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,
onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,
onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,
onLoadedMetadata:null,onLoadStart:null,onMessage:null,
onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,
onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,
onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,
onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,
onProgress:null,onRateChange:null,onRepeat:null,onReset:null,
onResize:null,onScroll:null,onSeeked:null,onSeeking:null,
onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,
onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,
onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,
operator:null,order:null,orient:null,orientation:null,origin:null,
overflow:null,overlay:null,overlinePosition:Ct,overlineThickness:Ct,
paintOrder:null,panose1:null,path:null,pathLength:Ct,
patternContentUnits:null,patternTransform:null,patternUnits:null,
phase:null,ping:Ft,pitch:null,playbackOrder:null,pointerEvents:null,
points:null,pointsAtX:Ct,pointsAtY:Ct,pointsAtZ:Ct,preserveAlpha:null,
preserveAspectRatio:null,primitiveUnits:null,propagate:null,
property:At,r:null,radius:null,referrerPolicy:null,refX:null,
refY:null,rel:At,rev:At,renderingIntent:null,repeatCount:null,
repeatDur:null,requiredExtensions:At,requiredFeatures:At,
requiredFonts:At,requiredFormats:At,resource:null,restart:null,
result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,
shapeRendering:null,side:null,slope:null,snapshotTime:null,
specularConstant:Ct,specularExponent:Ct,spreadMethod:null,
spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,
stitchTiles:null,stopColor:null,stopOpacity:null,
strikethroughPosition:Ct,strikethroughThickness:Ct,string:null,
stroke:null,strokeDashArray:At,strokeDashOffset:null,
strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Ct,
strokeOpacity:Ct,strokeWidth:null,style:null,surfaceScale:Ct,
syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,
syncTolerance:null,syncToleranceDefault:null,systemLanguage:At,
tabIndex:Ct,tableValues:null,target:null,targetX:Ct,targetY:Ct,
textAnchor:null,textDecoration:null,textRendering:null,
textLength:null,timelineBegin:null,title:null,transformBehavior:null,
type:null,typeOf:At,to:null,transform:null,u1:null,u2:null,
underlinePosition:Ct,underlineThickness:Ct,unicode:null,
unicodeBidi:null,unicodeRange:null,unitsPerEm:Ct,values:null,
vAlphabetic:Ct,vMathematical:Ct,vectorEffect:null,vHanging:Ct,
vIdeographic:Ct,version:null,vertAdvY:Ct,vertOriginX:Ct,
vertOriginY:Ct,viewBox:null,viewTarget:null,visibility:null,
width:null,widths:null,wordSpacing:null,writingMode:null,x:null,
x1:null,x2:null,xChannelSelector:null,xHeight:Ct,y:null,y1:null,
y2:null,yChannelSelector:null,z:null,zoomAndPan:null}
}),Ut=/^data[-\w.:]+$/i,qt=/-[a-z]/g,Vt=/[A-Z]/g
function Wt(e,n){const t=kt(n)
let r=n,i=xt
if(t in e.normal)return e.property[e.normal[t]]
if(t.length>4&&'data'===t.slice(0,4)&&Ut.test(n)){
if('-'===n.charAt(4)){const e=n.slice(5).replace(qt,Kt)
r='data'+e.charAt(0).toUpperCase()+e.slice(1)}else{const e=n.slice(4)
if(!qt.test(e)){let t=e.replace(Vt,Qt)
'-'!==t.charAt(0)&&(t='-'+t),n='data'+t}}i=Lt}return new i(r,n)}
function Qt(e){return'-'+e.toLowerCase()}function Kt(e){
return e.charAt(1).toUpperCase()}const Yt=mt([Mt,Ot,_t,jt,Ht],'html')
mt([Mt,Ot,_t,jt,Nt],'svg')
const Xt=['area','base','basefont','bgsound','br','col','command','embed','frame','hr','image','img','input','isindex','keygen','link','menuitem','meta','nextid','param','source','track','wbr']
function Zt(e){return e.join(' ').trim()}function $t(e,n){
const t=n||{}
return(''===e[e.length-1]?[...e,'']:e).join((t.padRight?' ':'')+','+(!1===t.padLeft?'':' ')).trim()
}
export{Wt as attributeInfo,$t as comma,Ne as fromMarkdown,Fn as gfm,Qn as gfmFromMarkdown,Yt as htmlAttributes,Xt as htmlVoidElements,Zt as space,ht as toHast}
