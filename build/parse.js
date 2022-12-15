12
function e(e){if(e)throw e}var t=function(e){
return null!=e&&null!=e.constructor&&'function'==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)
},n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,s=function(e){
return'function'==typeof Array.isArray?Array.isArray(e):'[object Array]'===r.call(e)
},a=function(e){if(!e||'[object Object]'!==r.call(e))return!1
var t,i=n.call(e,'constructor'),o=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,'isPrototypeOf')
if(e.constructor&&!i&&!o)return!1
for(t in e);return void 0===t||n.call(e,t)},l=function(e,t){
i&&'__proto__'===t.name?i(e,t.name,{enumerable:!0,configurable:!0,
value:t.newValue,writable:!0}):e[t.name]=t.newValue},c=function(e,t){
if('__proto__'===t){if(!n.call(e,t))return
if(o)return o(e,t).value}return e[t]},u=function e(){
var t,n,r,i,o,u,h=arguments[0],p=1,f=arguments.length,m=!1
for('boolean'==typeof h&&(m=h,h=arguments[1]||{},p=2),(null==h||'object'!=typeof h&&'function'!=typeof h)&&(h={});p<f;++p)if(null!=(t=arguments[p]))for(n in t)r=c(h,n),
h!==(i=c(t,n))&&(m&&i&&(a(i)||(o=s(i)))?(o?(o=!1,
u=r&&s(r)?r:[]):u=r&&a(r)?r:{},l(h,{name:n,newValue:e(m,u,i)
})):void 0!==i&&l(h,{name:n,newValue:i}))
return h}
function h(e){if('object'!=typeof e||null===e)return!1
const t=Object.getPrototypeOf(e)
return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)
}function p(){const e=[],t={run:function(...t){let n=-1
const r=t.pop()
if('function'!=typeof r)throw new TypeError('Expected function as last argument, not '+r)
!function i(o,...s){const a=e[++n]
let l=-1
if(o)r(o)
else{for(;++l<t.length;)null!==s[l]&&void 0!==s[l]||(s[l]=t[l])
t=s,a?function(e,t){let n
return r
function r(...t){const r=e.length>t.length
let s
r&&t.push(i)
try{s=e.apply(this,t)}catch(e){if(r&&n)throw e
return i(e)}
r||(s instanceof Promise?s.then(o,i):s instanceof Error?i(s):o(s))}
function i(e,...r){n||(n=!0,t(e,...r))}function o(e){i(null,e)}
}(a,i)(...s):r(null,...s)}}(null,...t)},use:function(n){
if('function'!=typeof n)throw new TypeError('Expected `middelware` to be a function, not '+n)
return e.push(n),t}}
return t}function f(e){
return e&&'object'==typeof e?'position'in e||'type'in e?d(e.position):'start'in e||'end'in e?d(e):'line'in e||'column'in e?m(e):'':''
}function m(e){return T(e&&e.line)+':'+T(e&&e.column)}function d(e){
return m(e&&e.start)+'-'+m(e&&e.end)}function T(e){
return e&&'number'==typeof e?e:1}class E extends Error{
constructor(e,t,n){const r=[null,null]
let i={start:{line:null,column:null},end:{line:null,column:null}}
if(super(),'string'==typeof t&&(n=t,t=void 0),'string'==typeof n){
const e=n.indexOf(':')
;-1===e?r[1]=n:(r[0]=n.slice(0,e),r[1]=n.slice(e+1))}
t&&('type'in t||'position'in t?t.position&&(i=t.position):'start'in t||'end'in t?i=t:('line'in t||'column'in t)&&(i.start=t)),
this.name=f(t)||'1:1',
this.message='object'==typeof e?e.message:e,this.stack='',
'object'==typeof e&&e.stack&&(this.stack=e.stack),
this.reason=this.message,this.fatal,
this.line=i.start.line,this.column=i.start.column,
this.position=i,this.source=r[0],
this.ruleId=r[1],this.file,this.actual,this.expected,
this.url,this.note}}
E.prototype.file='',E.prototype.name='',E.prototype.reason='',
E.prototype.message='',
E.prototype.stack='',E.prototype.fatal=null,E.prototype.column=null,
E.prototype.line=null,
E.prototype.source=null,E.prototype.ruleId=null,E.prototype.position=null
const g={basename:function(e,t){
if(void 0!==t&&'string'!=typeof t)throw new TypeError('"ext" argument must be a string')
_(e)
let n,r=0,i=-1,o=e.length
if(void 0===t||0===t.length||t.length>e.length){
for(;o--;)if(47===e.charCodeAt(o)){if(n){r=o+1
break}}else i<0&&(n=!0,i=o+1)
return i<0?'':e.slice(r,i)}if(t===e)return''
let s=-1,a=t.length-1
for(;o--;)if(47===e.charCodeAt(o)){if(n){r=o+1
break}
}else s<0&&(n=!0,s=o+1),a>-1&&(e.charCodeAt(o)===t.charCodeAt(a--)?a<0&&(i=o):(a=-1,
i=s))
r===i?i=s:i<0&&(i=e.length)
return e.slice(r,i)},dirname:function(e){
if(_(e),0===e.length)return'.'
let t,n=-1,r=e.length
for(;--r;)if(47===e.charCodeAt(r)){if(t){n=r
break}}else t||(t=!0)
return n<0?47===e.charCodeAt(0)?'/':'.':1===n&&47===e.charCodeAt(0)?'//':e.slice(0,n)
},extname:function(e){_(e)
let t,n=e.length,r=-1,i=0,o=-1,s=0
for(;n--;){const a=e.charCodeAt(n)
if(47!==a)r<0&&(t=!0,r=n+1),46===a?o<0?o=n:1!==s&&(s=1):o>-1&&(s=-1)
else if(t){i=n+1
break}}if(o<0||r<0||0===s||1===s&&o===r-1&&o===i+1)return''
return e.slice(o,r)},join:function(...e){let t,n=-1
for(;++n<e.length;)_(e[n]),e[n]&&(t=void 0===t?e[n]:t+'/'+e[n])
return void 0===t?'.':function(e){_(e)
const t=47===e.charCodeAt(0)
let n=function(e,t){let n,r,i='',o=0,s=-1,a=0,l=-1
for(;++l<=e.length;){if(l<e.length)n=e.charCodeAt(l)
else{if(47===n)break
n=47}if(47===n){if(s===l-1||1===a);else if(s!==l-1&&2===a){
if(i.length<2||2!==o||46!==i.charCodeAt(i.length-1)||46!==i.charCodeAt(i.length-2))if(i.length>2){
if(r=i.lastIndexOf('/'),r!==i.length-1){
r<0?(i='',o=0):(i=i.slice(0,r),o=i.length-1-i.lastIndexOf('/')),
s=l,a=0
continue}}else if(i.length>0){i='',o=0,s=l,a=0
continue}t&&(i=i.length>0?i+'/..':'..',o=2)
}else i.length>0?i+='/'+e.slice(s+1,l):i=e.slice(s+1,l),o=l-s-1
s=l,a=0}else 46===n&&a>-1?a++:a=-1}return i}(e,!t)
0!==n.length||t||(n='.')
n.length>0&&47===e.charCodeAt(e.length-1)&&(n+='/')
return t?'/'+n:n}(t)},sep:'/'}
function _(e){
if('string'!=typeof e)throw new TypeError('Path must be a string. Received '+JSON.stringify(e))
}const A={cwd:function(){return'/'}}
function C(e){return null!==e&&'object'==typeof e&&e.href&&e.origin}
function N(e){if('string'==typeof e)e=new URL(e)
else if(!C(e)){
const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+'`')
throw t.code='ERR_INVALID_ARG_TYPE',t}if('file:'!==e.protocol){
const e=new TypeError('The URL must be of scheme file')
throw e.code='ERR_INVALID_URL_SCHEME',e}return function(e){
if(''!==e.hostname){
const e=new TypeError('File URL host must be "localhost" or empty on darwin')
throw e.code='ERR_INVALID_FILE_URL_HOST',e}const t=e.pathname
let n=-1
for(;++n<t.length;)if(37===t.charCodeAt(n)&&50===t.charCodeAt(n+1)){
const e=t.charCodeAt(n+2)
if(70===e||102===e){
const e=new TypeError('File URL path must not include encoded / characters')
throw e.code='ERR_INVALID_FILE_URL_PATH',e}}
return decodeURIComponent(t)}(e)}
const k=['history','path','basename','stem','extname','dirname']
class O{constructor(e){let n
n=e?'string'==typeof e||t(e)?{value:e}:C(e)?{path:e
}:e:{},this.data={},this.messages=[],
this.history=[],this.cwd=A.cwd(),this.value,
this.stored,this.result,this.map
let r,i=-1
for(;++i<k.length;){const e=k[i]
e in n&&void 0!==n[e]&&(this[e]='history'===e?[...n[e]]:n[e])}
for(r in n)k.includes(r)||(this[r]=n[r])}get path(){
return this.history[this.history.length-1]}set path(e){
C(e)&&(e=N(e)),y(e,'path'),this.path!==e&&this.history.push(e)}
get dirname(){
return'string'==typeof this.path?g.dirname(this.path):void 0}
set dirname(e){
I(this.basename,'dirname'),this.path=g.join(e||'',this.basename)}
get basename(){
return'string'==typeof this.path?g.basename(this.path):void 0}
set basename(e){
y(e,'basename'),S(e,'basename'),this.path=g.join(this.dirname||'',e)}
get extname(){
return'string'==typeof this.path?g.extname(this.path):void 0}
set extname(e){if(S(e,'extname'),I(this.dirname,'extname'),e){
if(46!==e.charCodeAt(0))throw new Error('`extname` must start with `.`')
if(e.includes('.',1))throw new Error('`extname` cannot contain multiple dots')
}this.path=g.join(this.dirname,this.stem+(e||''))}get stem(){
return'string'==typeof this.path?g.basename(this.path,this.extname):void 0
}set stem(e){
y(e,'stem'),S(e,'stem'),this.path=g.join(this.dirname||'',e+(this.extname||''))
}toString(e){return(this.value||'').toString(e)}message(e,t,n){
const r=new E(e,t,n)
return this.path&&(r.name=this.path+':'+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),
r}info(e,t,n){const r=this.message(e,t,n)
return r.fatal=null,r}fail(e,t,n){const r=this.message(e,t,n)
throw r.fatal=!0,r}}function S(e,t){
if(e&&e.includes(g.sep))throw new Error('`'+t+'` cannot be a path: did not expect `'+g.sep+'`')
}function y(e,t){if(!e)throw new Error('`'+t+'` cannot be empty')}
function I(e,t){
if(!e)throw new Error('Setting `'+t+'` requires `path` to be set too')
}const R=function n(){const r=p(),i=[]
let o,s={},a=-1
return l.data=function(e,t){
if('string'==typeof e)return 2===arguments.length?(P('data',o),
s[e]=t,l):b.call(s,e)&&s[e]||null
if(e)return P('data',o),s=e,l
return s},l.Parser=void 0,l.Compiler=void 0,l.freeze=function(){
if(o)return l
for(;++a<i.length;){const[e,...t]=i[a]
if(!1===t[0])continue
!0===t[0]&&(t[0]=void 0)
const n=e.call(l,...t)
'function'==typeof n&&r.use(n)}
return o=!0,a=Number.POSITIVE_INFINITY,l
},l.attachers=i,l.use=function(e,...t){let n
if(P('use',o),null==e);else if('function'==typeof e)p(e,...t)
else{
if('object'!=typeof e)throw new TypeError('Expected usable value, not `'+e+'`')
Array.isArray(e)?c(e):a(e)}
n&&(s.settings=Object.assign(s.settings||{},n))
return l
function r(e){if('function'==typeof e)p(e)
else{
if('object'!=typeof e)throw new TypeError('Expected usable value, not `'+e+'`')
if(Array.isArray(e)){const[t,...n]=e
p(t,...n)}else a(e)}}function a(e){
c(e.plugins),e.settings&&(n=Object.assign(n||{},e.settings))}
function c(e){let t=-1
if(null==e);else{
if(!Array.isArray(e))throw new TypeError('Expected a list of plugins, not `'+e+'`')
for(;++t<e.length;){r(e[t])}}}function p(e,t){let n,r=-1
for(;++r<i.length;)if(i[r][0]===e){n=i[r]
break}
n?(h(n[1])&&h(t)&&(t=u(!0,n[1],t)),n[1]=t):i.push([...arguments])}
},l.parse=function(e){l.freeze()
const t=F(e),n=l.Parser
if(x('parse',n),L(n,'parse'))return new n(String(t),t).parse()
return n(String(t),t)},l.stringify=function(e,t){l.freeze()
const n=F(t),r=l.Compiler
if(M('stringify',r),v(e),L(r,'compile'))return new r(e,n).compile()
return r(e,n)},l.run=function(e,t,n){
v(e),l.freeze(),n||'function'!=typeof t||(n=t,t=void 0)
if(!n)return new Promise(i)
function i(i,o){function s(t,r,s){r=r||e,t?o(t):i?i(r):n(null,r,s)}
r.run(e,F(t),s)}i(null,n)},l.runSync=function(t,n){let r,i
return l.run(t,n,o),D('runSync','run',i),r
function o(t,n){e(t),r=n,i=!0}},l.process=function(e,n){
if(l.freeze(),x('process',l.Parser),
M('process',l.Compiler),!n)return new Promise(r)
function r(r,i){const o=F(e)
function s(e,t){e||!t?i(e):r?r(t):n(null,t)}
l.run(l.parse(o),o,((e,n,r)=>{if(!e&&n&&r){const o=l.stringify(n,r)
null==o||('string'==typeof(i=o)||t(i)?r.value=o:r.result=o),s(e,r)
}else s(e)
var i}))}r(null,n)},l.processSync=function(t){let n
l.freeze(),x('processSync',l.Parser),M('processSync',l.Compiler)
const r=F(t)
return l.process(r,i),D('processSync','process',n),r
function i(t){n=!0,e(t)}},l
function l(){const e=n()
let t=-1
for(;++t<i.length;)e.use(...i[t])
return e.data(u(!0,{},s)),e}}().freeze(),b={}.hasOwnProperty
function L(e,t){return'function'==typeof e&&e.prototype&&(function(e){
let t
for(t in e)if(b.call(e,t))return!0
return!1}(e.prototype)||t in e.prototype)}function x(e,t){
if('function'!=typeof t)throw new TypeError('Cannot `'+e+'` without `Parser`')
}function M(e,t){
if('function'!=typeof t)throw new TypeError('Cannot `'+e+'` without `Compiler`')
}function P(e,t){
if(t)throw new Error('Cannot call `'+e+'` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.')
}function v(e){
if(!h(e)||'string'!=typeof e.type)throw new TypeError('Expected node, got `'+e+'`')
}function D(e,t,n){
if(!n)throw new Error('`'+e+'` finished async. Use `'+t+'` instead')}
function F(e){return function(e){
return Boolean(e&&'object'==typeof e&&'message'in e&&'messages'in e)
}(e)?e:new O(e)}function H(e,t){
return e&&'object'==typeof e&&(e.value||(t?e.alt:'')||'children'in e&&w(e.children,t)||Array.isArray(e)&&w(e,t))||''
}function w(e,t){for(var n=[],r=-1;++r<e.length;)n[r]=H(e[r],t)
return n.join('')}function B(e,t,n,r){const i=e.length
let o,s=0
if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),
[].splice.apply(e,o)
else for(n&&[].splice.apply(e,[t,n]);s<r.length;)o=r.slice(s,s+1e4),o.unshift(t,0),
[].splice.apply(e,o),s+=1e4,t+=1e4}function U(e,t){
return e.length>0?(B(e,e.length,0,t),e):t}const G={}.hasOwnProperty
function K(e){const t={}
let n=-1
for(;++n<e.length;)z(t,e[n])
return t}function z(e,t){let n
for(n in t){const r=(G.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n]
let o
for(o in i){G.call(r,o)||(r[o]=[])
const e=i[o]
j(r[o],Array.isArray(e)?e:e?[e]:[])}}}function j(e,t){let n=-1
const r=[]
for(;++n<t.length;)('after'===t[n].add?e:r).push(t[n])
B(e,0,0,r)}
const Y=re(/[A-Za-z]/),Q=re(/\d/),W=re(/[\dA-Fa-f]/),q=re(/[\dA-Za-z]/),V=re(/[!-/:-@[-`{-~]/),X=re(/[#-'*+\--9=?A-Z^-~]/)
function $(e){return null!==e&&(e<32||127===e)}function Z(e){
return null!==e&&(e<0||32===e)}function J(e){return null!==e&&e<-2}
function ee(e){return-2===e||-1===e||32===e}
const te=re(/\s/),ne=re(/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/)
function re(e){return function(t){
return null!==t&&e.test(String.fromCharCode(t))}}function ie(e,t,n,r){
const i=r?r-1:Number.POSITIVE_INFINITY
let o=0
return function(r){if(ee(r))return e.enter(n),s(r)
return t(r)}
function s(r){return ee(r)&&o++<i?(e.consume(r),s):(e.exit(n),t(r))}}
const oe={tokenize:function(e){
const t=e.attempt(this.parser.constructs.contentInitial,(function(n){
if(null===n)return void e.consume(n)
return e.enter('lineEnding'),e.consume(n),e.exit('lineEnding'),ie(e,t,'linePrefix')
}),(function(t){return e.enter('paragraph'),r(t)}))
let n
return t
function r(t){const r=e.enter('chunkText',{contentType:'text',
previous:n})
return n&&(n.next=r),n=r,i(t)}function i(t){
return null===t?(e.exit('chunkText'),
e.exit('paragraph'),void e.consume(t)):J(t)?(e.consume(t),
e.exit('chunkText'),r):(e.consume(t),i)}}}
const se={tokenize:function(e){const t=this,n=[]
let r,i,o,s=0
return a
function a(r){if(s<n.length){const i=n[s]
return t.containerState=i[1],e.attempt(i[0].continuation,l,c)(r)}
return c(r)}function l(e){if(s++,t.containerState._closeFlow){
t.containerState._closeFlow=void 0,r&&g()
const n=t.events.length
let i,o=n
for(;o--;)if('exit'===t.events[o][0]&&'chunkFlow'===t.events[o][1].type){
i=t.events[o][1].end
break}E(s)
let a=n
for(;a<t.events.length;)t.events[a][1].end=Object.assign({},i),a++
return B(t.events,o+1,0,t.events.slice(n)),t.events.length=a,c(e)}
return a(e)}function c(i){if(s===n.length){if(!r)return p(i)
if(r.currentConstruct&&r.currentConstruct.concrete)return m(i)
t.interrupt=Boolean(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)
}return t.containerState={},e.check(ae,u,h)(i)}function u(e){
return r&&g(),E(s),p(e)}function h(e){
return t.parser.lazy[t.now().line]=s!==n.length,o=t.now().offset,m(e)}
function p(n){return t.containerState={},e.attempt(ae,f,m)(n)}
function f(e){
return s++,n.push([t.currentConstruct,t.containerState]),p(e)}
function m(n){
return null===n?(r&&g(),E(0),void e.consume(n)):(r=r||t.parser.flow(t.now()),
e.enter('chunkFlow',{contentType:'flow',previous:i,_tokenizer:r
}),d(n))}function d(n){
return null===n?(T(e.exit('chunkFlow'),!0),E(0),void e.consume(n)):J(n)?(e.consume(n),
T(e.exit('chunkFlow')),s=0,t.interrupt=void 0,a):(e.consume(n),d)}
function T(e,n){const a=t.sliceStream(e)
if(n&&a.push(null),e.previous=i,i&&(i.next=e),i=e,r.defineSkip(e.start),r.write(a),
t.parser.lazy[e.start.line]){let e=r.events.length
for(;e--;)if(r.events[e][1].start.offset<o&&(!r.events[e][1].end||r.events[e][1].end.offset>o))return
const n=t.events.length
let i,a,l=n
for(;l--;)if('exit'===t.events[l][0]&&'chunkFlow'===t.events[l][1].type){
if(i){a=t.events[l][1].end
break}i=!0}
for(E(s),e=n;e<t.events.length;)t.events[e][1].end=Object.assign({},a),
e++
B(t.events,l+1,0,t.events.slice(n)),t.events.length=e}}function E(r){
let i=n.length
for(;i-- >r;){const r=n[i]
t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function g(){
r.write([null]),i=void 0,r=void 0,t.containerState._closeFlow=void 0}}
},ae={tokenize:function(e,t,n){
return ie(e,e.attempt(this.parser.constructs.document,t,n),'linePrefix',this.parser.constructs.disable.null.includes('codeIndented')?void 0:4)
}}
function le(e){return null===e||Z(e)||te(e)?1:ne(e)?2:void 0}
function ce(e,t,n){const r=[]
let i=-1
for(;++i<e.length;){const o=e[i].resolveAll
o&&!r.includes(o)&&(t=o(t,n),r.push(o))}return t}const ue={
name:'attention',tokenize:function(e,t){
const n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=le(r)
let o
return function(t){return e.enter('attentionSequence'),o=t,s(t)}
function s(a){if(a===o)return e.consume(a),s
const l=e.exit('attentionSequence'),c=le(a),u=!c||2===c&&i||n.includes(a),h=!i||2===i&&c||n.includes(r)
return l._open=Boolean(42===o?u:u&&(i||!h)),l._close=Boolean(42===o?h:h&&(c||!u)),
t(a)}},resolveAll:function(e,t){let n,r,i,o,s,a,l,c,u=-1
for(;++u<e.length;)if('enter'===e[u][0]&&'attentionSequence'===e[u][1].type&&e[u][1]._close)for(n=u;n--;)if('exit'===e[n][0]&&'attentionSequence'===e[n][1].type&&e[n][1]._open&&t.sliceSerialize(e[n][1]).charCodeAt(0)===t.sliceSerialize(e[u][1]).charCodeAt(0)){
if((e[n][1]._close||e[u][1]._open)&&(e[u][1].end.offset-e[u][1].start.offset)%3&&!((e[n][1].end.offset-e[n][1].start.offset+e[u][1].end.offset-e[u][1].start.offset)%3))continue
a=e[n][1].end.offset-e[n][1].start.offset>1&&e[u][1].end.offset-e[u][1].start.offset>1?2:1
const h=Object.assign({},e[n][1].end),p=Object.assign({},e[u][1].start)
he(h,-a),he(p,a),o={type:a>1?'strongSequence':'emphasisSequence',
start:h,end:Object.assign({},e[n][1].end)},s={
type:a>1?'strongSequence':'emphasisSequence',
start:Object.assign({},e[u][1].start),end:p},i={
type:a>1?'strongText':'emphasisText',
start:Object.assign({},e[n][1].end),
end:Object.assign({},e[u][1].start)},r={type:a>1?'strong':'emphasis',
start:Object.assign({},o.start),end:Object.assign({},s.end)
},e[n][1].end=Object.assign({},o.start),
e[u][1].start=Object.assign({},s.end),l=[],
e[n][1].end.offset-e[n][1].start.offset&&(l=U(l,[['enter',e[n][1],t],['exit',e[n][1],t]])),
l=U(l,[['enter',r,t],['enter',o,t],['exit',o,t],['enter',i,t]]),
l=U(l,ce(t.parser.constructs.insideSpan.null,e.slice(n+1,u),t)),
l=U(l,[['exit',i,t],['enter',s,t],['exit',s,t],['exit',r,t]]),
e[u][1].end.offset-e[u][1].start.offset?(c=2,
l=U(l,[['enter',e[u][1],t],['exit',e[u][1],t]])):c=0,
B(e,n-1,u-n+3,l),u=n+l.length-c-2
break}u=-1
for(;++u<e.length;)'attentionSequence'===e[u][1].type&&(e[u][1].type='data')
return e}}
function he(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const pe={
name:'autolink',tokenize:function(e,t,n){let r=1
return function(t){
return e.enter('autolink'),e.enter('autolinkMarker'),e.consume(t),
e.exit('autolinkMarker'),e.enter('autolinkProtocol'),i}
function i(t){return Y(t)?(e.consume(t),o):X(t)?l(t):n(t)}
function o(e){return 43===e||45===e||46===e||q(e)?s(e):l(e)}
function s(t){
return 58===t?(e.consume(t),a):(43===t||45===t||46===t||q(t))&&r++<32?(e.consume(t),
s):l(t)}function a(t){
return 62===t?(e.exit('autolinkProtocol'),p(t)):null===t||32===t||60===t||$(t)?n(t):(e.consume(t),
a)}function l(t){
return 64===t?(e.consume(t),r=0,c):X(t)?(e.consume(t),l):n(t)}
function c(e){return q(e)?u(e):n(e)}function u(t){
return 46===t?(e.consume(t),r=0,
c):62===t?(e.exit('autolinkProtocol').type='autolinkEmail',p(t)):h(t)}
function h(t){
return(45===t||q(t))&&r++<63?(e.consume(t),45===t?h:u):n(t)}
function p(n){
return e.enter('autolinkMarker'),e.consume(n),e.exit('autolinkMarker'),
e.exit('autolink'),t}}}
const fe={tokenize:function(e,t,n){return ie(e,(function(e){
return null===e||J(e)?t(e):n(e)}),'linePrefix')},partial:!0}
const me={name:'blockQuote',tokenize:function(e,t,n){const r=this
return function(t){if(62===t){const n=r.containerState
return n.open||(e.enter('blockQuote',{_container:!0
}),n.open=!0),e.enter('blockQuotePrefix'),
e.enter('blockQuoteMarker'),e.consume(t),e.exit('blockQuoteMarker'),i}
return n(t)}
function i(n){
return ee(n)?(e.enter('blockQuotePrefixWhitespace'),e.consume(n),e.exit('blockQuotePrefixWhitespace'),
e.exit('blockQuotePrefix'),t):(e.exit('blockQuotePrefix'),t(n))}},
continuation:{tokenize:function(e,t,n){
return ie(e,e.attempt(me,t,n),'linePrefix',this.parser.constructs.disable.null.includes('codeIndented')?void 0:4)
}},exit:function(e){e.exit('blockQuote')}}
const de={name:'characterEscape',tokenize:function(e,t,n){
return function(t){
return e.enter('characterEscape'),e.enter('escapeMarker'),e.consume(t),
e.exit('escapeMarker'),r}
function r(r){
return V(r)?(e.enter('characterEscapeValue'),e.consume(r),e.exit('characterEscapeValue'),
e.exit('characterEscape'),t):n(r)}}}
const Te=document.createElement('i')
function Ee(e){const t='&'+e+';'
Te.innerHTML=t
const n=Te.textContent
return(59!==n.charCodeAt(n.length-1)||'semi'===e)&&(n!==t&&n)}
const ge={name:'characterReference',tokenize:function(e,t,n){
const r=this
let i,o,s=0
return function(t){
return e.enter('characterReference'),e.enter('characterReferenceMarker'),
e.consume(t),e.exit('characterReferenceMarker'),a}
function a(t){
return 35===t?(e.enter('characterReferenceMarkerNumeric'),e.consume(t),
e.exit('characterReferenceMarkerNumeric'),
l):(e.enter('characterReferenceValue'),i=31,o=q,c(t))}function l(t){
return 88===t||120===t?(e.enter('characterReferenceMarkerHexadecimal'),
e.consume(t),
e.exit('characterReferenceMarkerHexadecimal'),e.enter('characterReferenceValue'),
i=6,o=W,c):(e.enter('characterReferenceValue'),i=7,o=Q,c(t))}
function c(a){let l
return 59===a&&s?(l=e.exit('characterReferenceValue'),o!==q||Ee(r.sliceSerialize(l))?(e.enter('characterReferenceMarker'),
e.consume(a),
e.exit('characterReferenceMarker'),e.exit('characterReference'),t):n(a)):o(a)&&s++<i?(e.consume(a),
c):n(a)}}}
const _e={name:'codeFenced',tokenize:function(e,t,n){const r=this,i={
tokenize:function(e,t,n){let r=0
return ie(e,i,'linePrefix',this.parser.constructs.disable.null.includes('codeIndented')?void 0:4)
function i(t){
return e.enter('codeFencedFence'),e.enter('codeFencedFenceSequence'),
o(t)}function o(t){
return t===l?(e.consume(t),r++,o):r<c?n(t):(e.exit('codeFencedFenceSequence'),
ie(e,s,'whitespace')(t))}function s(r){
return null===r||J(r)?(e.exit('codeFencedFence'),t(r)):n(r)}},
partial:!0},o={tokenize:function(e,t,n){const r=this
return i
function i(t){
return e.enter('lineEnding'),e.consume(t),e.exit('lineEnding'),o}
function o(e){return r.parser.lazy[r.now().line]?n(e):t(e)}},
partial:!0
},s=this.events[this.events.length-1],a=s&&'linePrefix'===s[1].type?s[2].sliceSerialize(s[1],!0).length:0
let l,c=0
return function(t){
return e.enter('codeFenced'),e.enter('codeFencedFence'),e.enter('codeFencedFenceSequence'),
l=t,u(t)}
function u(t){
return t===l?(e.consume(t),c++,u):(e.exit('codeFencedFenceSequence'),
c<3?n(t):ie(e,h,'whitespace')(t))}function h(t){
return null===t||J(t)?d(t):(e.enter('codeFencedFenceInfo'),
e.enter('chunkString',{contentType:'string'}),p(t))}function p(t){
return null===t||Z(t)?(e.exit('chunkString'),
e.exit('codeFencedFenceInfo'),ie(e,f,'whitespace')(t)):96===t&&t===l?n(t):(e.consume(t),
p)}function f(t){
return null===t||J(t)?d(t):(e.enter('codeFencedFenceMeta'),e.enter('chunkString',{
contentType:'string'}),m(t))}function m(t){
return null===t||J(t)?(e.exit('chunkString'),
e.exit('codeFencedFenceMeta'),d(t)):96===t&&t===l?n(t):(e.consume(t),
m)}function d(n){
return e.exit('codeFencedFence'),r.interrupt?t(n):T(n)}function T(t){
return null===t?g(t):J(t)?e.attempt(o,e.attempt(i,g,a?ie(e,T,'linePrefix',a+1):T),g)(t):(e.enter('codeFlowValue'),
E(t))}function E(t){
return null===t||J(t)?(e.exit('codeFlowValue'),T(t)):(e.consume(t),E)}
function g(n){return e.exit('codeFenced'),t(n)}},concrete:!0}
const Ae={name:'codeIndented',tokenize:function(e,t,n){const r=this
return function(t){
return e.enter('codeIndented'),ie(e,i,'linePrefix',5)(t)}
function i(e){const t=r.events[r.events.length-1]
return t&&'linePrefix'===t[1].type&&t[2].sliceSerialize(t[1],!0).length>=4?o(e):n(e)
}function o(t){
return null===t?a(t):J(t)?e.attempt(Ce,o,a)(t):(e.enter('codeFlowValue'),
s(t))}function s(t){
return null===t||J(t)?(e.exit('codeFlowValue'),o(t)):(e.consume(t),s)}
function a(n){return e.exit('codeIndented'),t(n)}}},Ce={
tokenize:function(e,t,n){const r=this
return i
function i(t){
return r.parser.lazy[r.now().line]?n(t):J(t)?(e.enter('lineEnding'),
e.consume(t),e.exit('lineEnding'),i):ie(e,o,'linePrefix',5)(t)}
function o(e){const o=r.events[r.events.length-1]
return o&&'linePrefix'===o[1].type&&o[2].sliceSerialize(o[1],!0).length>=4?t(e):J(e)?i(e):n(e)
}},partial:!0}
const Ne={name:'codeText',tokenize:function(e,t,n){let r,i,o=0
return function(t){
return e.enter('codeText'),e.enter('codeTextSequence'),s(t)}
function s(t){
return 96===t?(e.consume(t),o++,s):(e.exit('codeTextSequence'),a(t))}
function a(t){
return null===t?n(t):96===t?(i=e.enter('codeTextSequence'),r=0,c(t)):32===t?(e.enter('space'),
e.consume(t),
e.exit('space'),a):J(t)?(e.enter('lineEnding'),e.consume(t),e.exit('lineEnding'),
a):(e.enter('codeTextData'),l(t))}function l(t){
return null===t||32===t||96===t||J(t)?(e.exit('codeTextData'),
a(t)):(e.consume(t),l)}function c(n){
return 96===n?(e.consume(n),r++,c):r===o?(e.exit('codeTextSequence'),
e.exit('codeText'),t(n)):(i.type='codeTextData',l(n))}},
resolve:function(e){let t,n,r=e.length-4,i=3
if(!('lineEnding'!==e[i][1].type&&'space'!==e[i][1].type||'lineEnding'!==e[r][1].type&&'space'!==e[r][1].type))for(t=i;++t<r;)if('codeTextData'===e[t][1].type){
e[i][1].type='codeTextPadding',
e[r][1].type='codeTextPadding',i+=2,r-=2
break}t=i-1,r++
for(;++t<=r;)void 0===n?t!==r&&'lineEnding'!==e[t][1].type&&(n=t):t!==r&&'lineEnding'!==e[t][1].type||(e[n][1].type='codeTextData',
t!==n+2&&(e[n][1].end=e[t-1][1].end,
e.splice(n+2,t-n-2),r-=t-n-2,t=n+2),n=void 0)
return e},previous:function(e){
return 96!==e||'characterEscape'===this.events[this.events.length-1][1].type
}}
function ke(e){const t={}
let n,r,i,o,s,a,l,c=-1
for(;++c<e.length;){for(;c in t;)c=t[c]
if(n=e[c],c&&'chunkFlow'===n[1].type&&'listItemPrefix'===e[c-1][1].type&&(a=n[1]._tokenizer.events,
i=0,
i<a.length&&'lineEndingBlank'===a[i][1].type&&(i+=2),i<a.length&&'content'===a[i][1].type))for(;++i<a.length&&'content'!==a[i][1].type;)'chunkText'===a[i][1].type&&(a[i][1]._isInFirstContentOfListItem=!0,
i++)
if('enter'===n[0])n[1].contentType&&(Object.assign(t,Oe(e,c)),c=t[c],l=!0)
else if(n[1]._container){
for(i=c,r=void 0;i--&&(o=e[i],'lineEnding'===o[1].type||'lineEndingBlank'===o[1].type);)'enter'===o[0]&&(r&&(e[r][1].type='lineEndingBlank'),
o[1].type='lineEnding',r=i)
r&&(n[1].end=Object.assign({},e[r][1].start),s=e.slice(r,c),s.unshift(n),B(e,r,c-r+1,s))
}}return!l}function Oe(e,t){const n=e[t][1],r=e[t][2]
let i=t-1
const o=[],s=n._tokenizer||r.parser[n.contentType](n.start),a=s.events,l=[],c={}
let u,h,p=-1,f=n,m=0,d=0
const T=[d]
for(;f;){for(;e[++i][1]!==f;);
o.push(i),f._tokenizer||(u=r.sliceStream(f),f.next||u.push(null),
h&&s.defineSkip(f.start),
f._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),
s.write(u),
f._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),
h=f,f=f.next}
for(f=n;++p<a.length;)'exit'===a[p][0]&&'enter'===a[p-1][0]&&a[p][1].type===a[p-1][1].type&&a[p][1].start.line!==a[p][1].end.line&&(d=p+1,
T.push(d),f._tokenizer=void 0,f.previous=void 0,f=f.next)
for(s.events=[],f?(f._tokenizer=void 0,f.previous=void 0):T.pop(),p=T.length;p--;){
const t=a.slice(T[p],T[p+1]),n=o.pop()
l.unshift([n,n+t.length-1]),B(e,n,2,t)}
for(p=-1;++p<l.length;)c[m+l[p][0]]=m+l[p][1],m+=l[p][1]-l[p][0]-1
return c}const Se={tokenize:function(e,t){let n
return function(t){
return e.enter('content'),n=e.enter('chunkContent',{
contentType:'content'}),r(t)}
function r(t){
return null===t?i(t):J(t)?e.check(ye,o,i)(t):(e.consume(t),r)}
function i(n){return e.exit('chunkContent'),e.exit('content'),t(n)}
function o(t){
return e.consume(t),e.exit('chunkContent'),n.next=e.enter('chunkContent',{
contentType:'content',previous:n}),n=n.next,r}},resolve:function(e){
return ke(e),e}},ye={tokenize:function(e,t,n){const r=this
return function(t){
return e.exit('chunkContent'),e.enter('lineEnding'),e.consume(t),
e.exit('lineEnding'),ie(e,i,'linePrefix')}
function i(i){if(null===i||J(i))return n(i)
const o=r.events[r.events.length-1]
return!r.parser.constructs.disable.null.includes('codeIndented')&&o&&'linePrefix'===o[1].type&&o[2].sliceSerialize(o[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)
}},partial:!0}
function Ie(e,t,n,r,i,o,s,a,l){const c=l||Number.POSITIVE_INFINITY
let u=0
return function(t){
if(60===t)return e.enter(r),e.enter(i),e.enter(o),e.consume(t),
e.exit(o),h
if(null===t||41===t||$(t))return n(t)
return e.enter(r),e.enter(s),e.enter(a),e.enter('chunkString',{
contentType:'string'}),m(t)}
function h(n){
return 62===n?(e.enter(o),e.consume(n),e.exit(o),e.exit(i),e.exit(r),
t):(e.enter(a),e.enter('chunkString',{contentType:'string'}),p(n))}
function p(t){
return 62===t?(e.exit('chunkString'),e.exit(a),h(t)):null===t||60===t||J(t)?n(t):(e.consume(t),
92===t?f:p)}function f(t){
return 60===t||62===t||92===t?(e.consume(t),p):p(t)}function m(i){
return 40===i?++u>c?n(i):(e.consume(i),
m):41===i?u--?(e.consume(i),m):(e.exit('chunkString'),
e.exit(a),e.exit(s),e.exit(r),
t(i)):null===i||Z(i)?u?n(i):(e.exit('chunkString'),
e.exit(a),e.exit(s),e.exit(r),
t(i)):$(i)?n(i):(e.consume(i),92===i?d:m)}function d(t){
return 40===t||41===t||92===t?(e.consume(t),m):m(t)}}
function Re(e,t,n,r,i,o){const s=this
let a,l=0
return function(t){
return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(o),c}
function c(h){
return null===h||91===h||93===h&&!a||94===h&&!l&&'_hiddenFootnoteSupport'in s.parser.constructs||l>999?n(h):93===h?(e.exit(o),
e.enter(i),
e.consume(h),e.exit(i),e.exit(r),t):J(h)?(e.enter('lineEnding'),e.consume(h),
e.exit('lineEnding'),c):(e.enter('chunkString',{contentType:'string'
}),u(h))}function u(t){
return null===t||91===t||93===t||J(t)||l++>999?(e.exit('chunkString'),
c(t)):(e.consume(t),a=a||!ee(t),92===t?h:u)}function h(t){
return 91===t||92===t||93===t?(e.consume(t),l++,u):u(t)}}
function be(e,t,n,r,i,o){let s
return function(t){
return e.enter(r),e.enter(i),e.consume(t),e.exit(i),s=40===t?41:t,a}
function a(n){
return n===s?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(o),
l(n))}function l(t){
return t===s?(e.exit(o),a(s)):null===t?n(t):J(t)?(e.enter('lineEnding'),
e.consume(t),
e.exit('lineEnding'),ie(e,l,'linePrefix')):(e.enter('chunkString',{
contentType:'string'}),c(t))}function c(t){
return t===s||null===t||J(t)?(e.exit('chunkString'),
l(t)):(e.consume(t),92===t?u:c)}function u(t){
return t===s||92===t?(e.consume(t),c):c(t)}}function Le(e,t){let n
return function r(i){
if(J(i))return e.enter('lineEnding'),e.consume(i),e.exit('lineEnding'),
n=!0,r
if(ee(i))return ie(e,r,n?'linePrefix':'lineSuffix')(i)
return t(i)}}function xe(e){
return e.replace(/[\t\n\r ]+/g,' ').replace(/^ | $/g,'').toLowerCase().toUpperCase()
}const Me={name:'definition',tokenize:function(e,t,n){const r=this
let i
return function(t){
return e.enter('definition'),Re.call(r,e,o,n,'definitionLabel','definitionLabelMarker','definitionLabelString')(t)
}
function o(t){
return i=xe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),
58===t?(e.enter('definitionMarker'),
e.consume(t),e.exit('definitionMarker'),Le(e,Ie(e,e.attempt(Pe,ie(e,s,'whitespace'),ie(e,s,'whitespace')),n,'definitionDestination','definitionDestinationLiteral','definitionDestinationLiteralMarker','definitionDestinationRaw','definitionDestinationString'))):n(t)
}function s(o){
return null===o||J(o)?(e.exit('definition'),r.parser.defined.includes(i)||r.parser.defined.push(i),
t(o)):n(o)}}},Pe={tokenize:function(e,t,n){return function(t){
return Z(t)?Le(e,r)(t):n(t)}
function r(t){
return 34===t||39===t||40===t?be(e,ie(e,i,'whitespace'),n,'definitionTitle','definitionTitleMarker','definitionTitleString')(t):n(t)
}function i(e){return null===e||J(e)?t(e):n(e)}},partial:!0}
const ve={name:'hardBreakEscape',tokenize:function(e,t,n){
return function(t){
return e.enter('hardBreakEscape'),e.enter('escapeMarker'),e.consume(t),
r}
function r(r){
return J(r)?(e.exit('escapeMarker'),e.exit('hardBreakEscape'),t(r)):n(r)
}}}
const De={name:'headingAtx',tokenize:function(e,t,n){const r=this
let i=0
return function(t){
return e.enter('atxHeading'),e.enter('atxHeadingSequence'),o(t)}
function o(a){
return 35===a&&i++<6?(e.consume(a),o):null===a||Z(a)?(e.exit('atxHeadingSequence'),
r.interrupt?t(a):s(a)):n(a)}function s(n){
return 35===n?(e.enter('atxHeadingSequence'),
a(n)):null===n||J(n)?(e.exit('atxHeading'),
t(n)):ee(n)?ie(e,s,'whitespace')(n):(e.enter('atxHeadingText'),l(n))}
function a(t){
return 35===t?(e.consume(t),a):(e.exit('atxHeadingSequence'),s(t))}
function l(t){
return null===t||35===t||Z(t)?(e.exit('atxHeadingText'),s(t)):(e.consume(t),
l)}},resolve:function(e,t){let n,r,i=e.length-2,o=3
'whitespace'===e[o][1].type&&(o+=2)
i-2>o&&'whitespace'===e[i][1].type&&(i-=2)
'atxHeadingSequence'===e[i][1].type&&(o===i-1||i-4>o&&'whitespace'===e[i-2][1].type)&&(i-=o+1===i?2:4)
i>o&&(n={type:'atxHeadingText',start:e[o][1].start,end:e[i][1].end
},r={type:'chunkText',start:e[o][1].start,end:e[i][1].end,
contentType:'text'
},B(e,o,i-o+1,[['enter',n,t],['enter',r,t],['exit',r,t],['exit',n,t]]))
return e}}
const Fe=['address','article','aside','base','basefont','blockquote','body','caption','center','col','colgroup','dd','details','dialog','dir','div','dl','dt','fieldset','figcaption','figure','footer','form','frame','frameset','h1','h2','h3','h4','h5','h6','head','header','hr','html','iframe','legend','li','link','main','menu','menuitem','nav','noframes','ol','optgroup','option','p','param','section','summary','table','tbody','td','tfoot','th','thead','title','tr','track','ul'],He=['pre','script','style','textarea'],we={
name:'htmlFlow',tokenize:function(e,t,n){const r=this
let i,o,s,a,l
return function(t){
return e.enter('htmlFlow'),e.enter('htmlFlowData'),e.consume(t),c}
function c(a){
return 33===a?(e.consume(a),u):47===a?(e.consume(a),f):63===a?(e.consume(a),
i=3,
r.interrupt?t:v):Y(a)?(e.consume(a),s=String.fromCharCode(a),o=!0,m):n(a)
}function u(o){
return 45===o?(e.consume(o),i=2,h):91===o?(e.consume(o),i=5,s='CDATA[',
a=0,p):Y(o)?(e.consume(o),i=4,r.interrupt?t:v):n(o)}function h(i){
return 45===i?(e.consume(i),r.interrupt?t:v):n(i)}function p(i){
return i===s.charCodeAt(a++)?(e.consume(i),
a===s.length?r.interrupt?t:y:p):n(i)}function f(t){
return Y(t)?(e.consume(t),s=String.fromCharCode(t),m):n(t)}
function m(a){
return null===a||47===a||62===a||Z(a)?47!==a&&o&&He.includes(s.toLowerCase())?(i=1,
r.interrupt?t(a):y(a)):Fe.includes(s.toLowerCase())?(i=6,
47===a?(e.consume(a),d):r.interrupt?t(a):y(a)):(i=7,
r.interrupt&&!r.parser.lazy[r.now().line]?n(a):o?E(a):T(a)):45===a||q(a)?(e.consume(a),
s+=String.fromCharCode(a),m):n(a)}function d(i){
return 62===i?(e.consume(i),r.interrupt?t:y):n(i)}function T(t){
return ee(t)?(e.consume(t),T):O(t)}function E(t){
return 47===t?(e.consume(t),O):58===t||95===t||Y(t)?(e.consume(t),
g):ee(t)?(e.consume(t),E):O(t)}function g(t){
return 45===t||46===t||58===t||95===t||q(t)?(e.consume(t),g):_(t)}
function _(t){
return 61===t?(e.consume(t),A):ee(t)?(e.consume(t),_):E(t)}
function A(t){
return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),
l=t,C):ee(t)?(e.consume(t),A):(l=null,N(t))}function C(t){
return null===t||J(t)?n(t):t===l?(e.consume(t),k):(e.consume(t),C)}
function N(t){
return null===t||34===t||39===t||60===t||61===t||62===t||96===t||Z(t)?_(t):(e.consume(t),
N)}function k(e){return 47===e||62===e||ee(e)?E(e):n(e)}function O(t){
return 62===t?(e.consume(t),S):n(t)}function S(t){
return ee(t)?(e.consume(t),S):null===t||J(t)?y(t):n(t)}function y(t){
return 45===t&&2===i?(e.consume(t),
L):60===t&&1===i?(e.consume(t),x):62===t&&4===i?(e.consume(t),
D):63===t&&3===i?(e.consume(t),
v):93===t&&5===i?(e.consume(t),P):!J(t)||6!==i&&7!==i?null===t||J(t)?I(t):(e.consume(t),
y):e.check(Be,D,I)(t)}function I(t){return e.exit('htmlFlowData'),R(t)
}function R(t){return null===t?F(t):J(t)?e.attempt({tokenize:b,
partial:!0},R,F)(t):(e.enter('htmlFlowData'),y(t))}function b(e,t,n){
return function(t){
return e.enter('lineEnding'),e.consume(t),e.exit('lineEnding'),i}
function i(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}
function L(t){return 45===t?(e.consume(t),v):y(t)}function x(t){
return 47===t?(e.consume(t),s='',M):y(t)}function M(t){
return 62===t&&He.includes(s.toLowerCase())?(e.consume(t),
D):Y(t)&&s.length<8?(e.consume(t),s+=String.fromCharCode(t),M):y(t)}
function P(t){return 93===t?(e.consume(t),v):y(t)}function v(t){
return 62===t?(e.consume(t),D):45===t&&2===i?(e.consume(t),v):y(t)}
function D(t){
return null===t||J(t)?(e.exit('htmlFlowData'),F(t)):(e.consume(t),D)}
function F(n){return e.exit('htmlFlow'),t(n)}},resolveTo:function(e){
let t=e.length
for(;t--&&('enter'!==e[t][0]||'htmlFlow'!==e[t][1].type););
t>1&&'linePrefix'===e[t-2][1].type&&(e[t][1].start=e[t-2][1].start,
e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2))
return e},concrete:!0},Be={tokenize:function(e,t,n){
return function(r){
return e.exit('htmlFlowData'),e.enter('lineEndingBlank'),e.consume(r),
e.exit('lineEndingBlank'),e.attempt(fe,t,n)}},partial:!0}
const Ue={name:'htmlText',tokenize:function(e,t,n){const r=this
let i,o,s,a
return function(t){
return e.enter('htmlText'),e.enter('htmlTextData'),e.consume(t),l}
function l(t){
return 33===t?(e.consume(t),c):47===t?(e.consume(t),N):63===t?(e.consume(t),
A):Y(t)?(e.consume(t),S):n(t)}function c(t){
return 45===t?(e.consume(t),u):91===t?(e.consume(t),
o='CDATA[',s=0,d):Y(t)?(e.consume(t),_):n(t)}function u(t){
return 45===t?(e.consume(t),h):n(t)}function h(t){
return null===t||62===t?n(t):45===t?(e.consume(t),p):f(t)}
function p(e){return null===e||62===e?n(e):f(e)}function f(t){
return null===t?n(t):45===t?(e.consume(t),
m):J(t)?(a=f,P(t)):(e.consume(t),f)}function m(t){
return 45===t?(e.consume(t),D):f(t)}function d(t){
return t===o.charCodeAt(s++)?(e.consume(t),s===o.length?T:d):n(t)}
function T(t){
return null===t?n(t):93===t?(e.consume(t),E):J(t)?(a=T,P(t)):(e.consume(t),
T)}function E(t){return 93===t?(e.consume(t),g):T(t)}function g(t){
return 62===t?D(t):93===t?(e.consume(t),g):T(t)}function _(t){
return null===t||62===t?D(t):J(t)?(a=_,P(t)):(e.consume(t),_)}
function A(t){
return null===t?n(t):63===t?(e.consume(t),C):J(t)?(a=A,P(t)):(e.consume(t),
A)}function C(e){return 62===e?D(e):A(e)}function N(t){
return Y(t)?(e.consume(t),k):n(t)}function k(t){
return 45===t||q(t)?(e.consume(t),k):O(t)}function O(t){
return J(t)?(a=O,P(t)):ee(t)?(e.consume(t),O):D(t)}function S(t){
return 45===t||q(t)?(e.consume(t),S):47===t||62===t||Z(t)?y(t):n(t)}
function y(t){
return 47===t?(e.consume(t),D):58===t||95===t||Y(t)?(e.consume(t),
I):J(t)?(a=y,P(t)):ee(t)?(e.consume(t),y):D(t)}function I(t){
return 45===t||46===t||58===t||95===t||q(t)?(e.consume(t),I):R(t)}
function R(t){
return 61===t?(e.consume(t),b):J(t)?(a=R,P(t)):ee(t)?(e.consume(t),
R):y(t)}function b(t){
return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),
i=t,
L):J(t)?(a=b,P(t)):ee(t)?(e.consume(t),b):(e.consume(t),i=void 0,M)}
function L(t){
return t===i?(e.consume(t),x):null===t?n(t):J(t)?(a=L,P(t)):(e.consume(t),
L)}function x(e){return 62===e||47===e||Z(e)?y(e):n(e)}function M(t){
return null===t||34===t||39===t||60===t||61===t||96===t?n(t):62===t||Z(t)?y(t):(e.consume(t),
M)}function P(t){
return e.exit('htmlTextData'),e.enter('lineEnding'),e.consume(t),
e.exit('lineEnding'),
ie(e,v,'linePrefix',r.parser.constructs.disable.null.includes('codeIndented')?void 0:4)
}function v(t){return e.enter('htmlTextData'),a(t)}function D(r){
return 62===r?(e.consume(r),
e.exit('htmlTextData'),e.exit('htmlText'),t):n(r)}}}
const Ge={name:'labelEnd',tokenize:function(e,t,n){const r=this
let i,o,s=r.events.length
for(;s--;)if(('labelImage'===r.events[s][1].type||'labelLink'===r.events[s][1].type)&&!r.events[s][1]._balanced){
i=r.events[s][1]
break}return function(t){if(!i)return n(t)
return i._inactive?l(t):(o=r.parser.defined.includes(xe(r.sliceSerialize({
start:i.end,end:r.now()
}))),e.enter('labelEnd'),e.enter('labelMarker'),e.consume(t),
e.exit('labelMarker'),e.exit('labelEnd'),a)}
function a(n){
return 40===n?e.attempt(Ke,t,o?t:l)(n):91===n?e.attempt(ze,t,o?e.attempt(je,t,l):l)(n):o?t(n):l(n)
}function l(e){return i._balanced=!0,n(e)}},resolveTo:function(e,t){
let n,r,i,o,s=e.length,a=0
for(;s--;)if(n=e[s][1],r){
if('link'===n.type||'labelLink'===n.type&&n._inactive)break
'enter'===e[s][0]&&'labelLink'===n.type&&(n._inactive=!0)}else if(i){
if('enter'===e[s][0]&&('labelImage'===n.type||'labelLink'===n.type)&&!n._balanced&&(r=s,
'labelLink'!==n.type)){a=2
break}}else'labelEnd'===n.type&&(i=s)
const l={type:'labelLink'===e[r][1].type?'link':'image',
start:Object.assign({},e[r][1].start),
end:Object.assign({},e[e.length-1][1].end)},c={type:'label',
start:Object.assign({},e[r][1].start),
end:Object.assign({},e[i][1].end)},u={type:'labelText',
start:Object.assign({},e[r+a+2][1].end),
end:Object.assign({},e[i-2][1].start)}
return o=[['enter',l,t],['enter',c,t]],o=U(o,e.slice(r+1,r+a+3)),o=U(o,[['enter',u,t]]),
o=U(o,ce(t.parser.constructs.insideSpan.null,e.slice(r+a+4,i-3),t)),
o=U(o,[['exit',u,t],e[i-2],e[i-1],['exit',c,t]]),
o=U(o,e.slice(i+1)),o=U(o,[['exit',l,t]]),B(e,r,e.length,o),e},
resolveAll:function(e){let t,n=-1
for(;++n<e.length;)t=e[n][1],'labelImage'!==t.type&&'labelLink'!==t.type&&'labelEnd'!==t.type||(e.splice(n+1,'labelImage'===t.type?4:2),
t.type='data',n++)
return e}},Ke={tokenize:function(e,t,n){return function(t){
return e.enter('resource'),
e.enter('resourceMarker'),e.consume(t),e.exit('resourceMarker'),
Le(e,r)}
function r(t){
return 41===t?s(t):Ie(e,i,n,'resourceDestination','resourceDestinationLiteral','resourceDestinationLiteralMarker','resourceDestinationRaw','resourceDestinationString',32)(t)
}function i(t){return Z(t)?Le(e,o)(t):s(t)}function o(t){
return 34===t||39===t||40===t?be(e,Le(e,s),n,'resourceTitle','resourceTitleMarker','resourceTitleString')(t):s(t)
}function s(r){
return 41===r?(e.enter('resourceMarker'),e.consume(r),e.exit('resourceMarker'),
e.exit('resource'),t):n(r)}}},ze={tokenize:function(e,t,n){
const r=this
return function(t){
return Re.call(r,e,i,n,'reference','referenceMarker','referenceString')(t)
}
function i(e){
return r.parser.defined.includes(xe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)
}}},je={tokenize:function(e,t,n){return function(t){
return e.enter('reference'),
e.enter('referenceMarker'),e.consume(t),e.exit('referenceMarker'),r}
function r(r){
return 93===r?(e.enter('referenceMarker'),e.consume(r),e.exit('referenceMarker'),
e.exit('reference'),t):n(r)}}}
const Ye={name:'labelStartImage',tokenize:function(e,t,n){const r=this
return function(t){
return e.enter('labelImage'),e.enter('labelImageMarker'),e.consume(t),
e.exit('labelImageMarker'),i}
function i(t){
return 91===t?(e.enter('labelMarker'),e.consume(t),e.exit('labelMarker'),
e.exit('labelImage'),o):n(t)}function o(e){
return 94===e&&'_hiddenFootnoteSupport'in r.parser.constructs?n(e):t(e)
}},resolveAll:Ge.resolveAll}
const Qe={name:'labelStartLink',tokenize:function(e,t,n){const r=this
return function(t){
return e.enter('labelLink'),e.enter('labelMarker'),e.consume(t),
e.exit('labelMarker'),e.exit('labelLink'),i}
function i(e){
return 94===e&&'_hiddenFootnoteSupport'in r.parser.constructs?n(e):t(e)
}},resolveAll:Ge.resolveAll}
const We={name:'lineEnding',tokenize:function(e,t){return function(n){
return e.enter('lineEnding'),
e.consume(n),e.exit('lineEnding'),ie(e,t,'linePrefix')}}}
const qe={name:'thematicBreak',tokenize:function(e,t,n){let r,i=0
return function(t){return e.enter('thematicBreak'),r=t,o(t)}
function o(a){
return a===r?(e.enter('thematicBreakSequence'),s(a)):ee(a)?ie(e,o,'whitespace')(a):i<3||null!==a&&!J(a)?n(a):(e.exit('thematicBreak'),
t(a))}function s(t){
return t===r?(e.consume(t),i++,s):(e.exit('thematicBreakSequence'),
o(t))}}}
const Ve={name:'list',tokenize:function(e,t,n){
const r=this,i=r.events[r.events.length-1]
let o=i&&'linePrefix'===i[1].type?i[2].sliceSerialize(i[1],!0).length:0,s=0
return function(t){
const i=r.containerState.type||(42===t||43===t||45===t?'listUnordered':'listOrdered')
if('listUnordered'===i?!r.containerState.marker||t===r.containerState.marker:Q(t)){
if(r.containerState.type||(r.containerState.type=i,e.enter(i,{
_container:!0
})),'listUnordered'===i)return e.enter('listItemPrefix'),42===t||45===t?e.check(qe,n,l)(t):l(t)
if(!r.interrupt||49===t)return e.enter('listItemPrefix'),e.enter('listItemValue'),
a(t)}return n(t)}
function a(t){
return Q(t)&&++s<10?(e.consume(t),a):(!r.interrupt||s<2)&&(r.containerState.marker?t===r.containerState.marker:41===t||46===t)?(e.exit('listItemValue'),
l(t)):n(t)}function l(t){
return e.enter('listItemMarker'),e.consume(t),e.exit('listItemMarker'),
r.containerState.marker=r.containerState.marker||t,
e.check(fe,r.interrupt?n:c,e.attempt(Xe,h,u))}function c(e){
return r.containerState.initialBlankLine=!0,o++,h(e)}function u(t){
return ee(t)?(e.enter('listItemPrefixWhitespace'),
e.consume(t),e.exit('listItemPrefixWhitespace'),h):n(t)}function h(n){
return r.containerState.size=o+r.sliceSerialize(e.exit('listItemPrefix'),!0).length,
t(n)}},continuation:{tokenize:function(e,t,n){const r=this
return r.containerState._closeFlow=void 0,e.check(fe,i,o)
function i(n){
return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,
ie(e,t,'listItemIndent',r.containerState.size+1)(n)}function o(n){
return r.containerState.furtherBlankLines||!ee(n)?(r.containerState.furtherBlankLines=void 0,
r.containerState.initialBlankLine=void 0,
s(n)):(r.containerState.furtherBlankLines=void 0,
r.containerState.initialBlankLine=void 0,e.attempt($e,t,s)(n))}
function s(i){
return r.containerState._closeFlow=!0,r.interrupt=void 0,ie(e,e.attempt(Ve,t,n),'linePrefix',r.parser.constructs.disable.null.includes('codeIndented')?void 0:4)(i)
}}},exit:function(e){e.exit(this.containerState.type)}},Xe={
tokenize:function(e,t,n){const r=this
return ie(e,(function(e){const i=r.events[r.events.length-1]
return!ee(e)&&i&&'listItemPrefixWhitespace'===i[1].type?t(e):n(e)
}),'listItemPrefixWhitespace',r.parser.constructs.disable.null.includes('codeIndented')?void 0:5)
},partial:!0},$e={tokenize:function(e,t,n){const r=this
return ie(e,(function(e){const i=r.events[r.events.length-1]
return i&&'listItemIndent'===i[1].type&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)
}),'listItemIndent',r.containerState.size+1)},partial:!0}
const Ze={name:'setextUnderline',tokenize:function(e,t,n){const r=this
let i,o,s=r.events.length
for(;s--;)if('lineEnding'!==r.events[s][1].type&&'linePrefix'!==r.events[s][1].type&&'content'!==r.events[s][1].type){
o='paragraph'===r.events[s][1].type
break}return function(t){
if(!r.parser.lazy[r.now().line]&&(r.interrupt||o))return e.enter('setextHeadingLine'),
e.enter('setextHeadingLineSequence'),i=t,a(t)
return n(t)}
function a(t){
return t===i?(e.consume(t),a):(e.exit('setextHeadingLineSequence'),
ie(e,l,'lineSuffix')(t))}function l(r){
return null===r||J(r)?(e.exit('setextHeadingLine'),t(r)):n(r)}},
resolveTo:function(e,t){let n,r,i,o=e.length
for(;o--;)if('enter'===e[o][0]){if('content'===e[o][1].type){n=o
break}'paragraph'===e[o][1].type&&(r=o)
}else'content'===e[o][1].type&&e.splice(o,1),
i||'definition'!==e[o][1].type||(i=o)
const s={type:'setextHeading',start:Object.assign({},e[r][1].start),
end:Object.assign({},e[e.length-1][1].end)}
e[r][1].type='setextHeadingText',i?(e.splice(r,0,['enter',s,t]),e.splice(i+1,0,['exit',e[n][1],t]),
e[n][1].end=Object.assign({},e[i][1].end)):e[n][1]=s
return e.push(['exit',s,t]),e}}
const Je={tokenize:function(e){
const t=this,n=e.attempt(fe,(function(r){
if(null===r)return void e.consume(r)
return e.enter('lineEndingBlank'),e.consume(r),e.exit('lineEndingBlank'),t.currentConstruct=void 0,
n
}),e.attempt(this.parser.constructs.flowInitial,r,ie(e,e.attempt(this.parser.constructs.flow,r,e.attempt(Se,r)),'linePrefix')))
return n
function r(r){
if(null!==r)return e.enter('lineEnding'),e.consume(r),e.exit('lineEnding'),
t.currentConstruct=void 0,n
e.consume(r)}}}
const et={resolveAll:it()},tt=rt('string'),nt=rt('text')
function rt(e){return{tokenize:function(t){
const n=this,r=this.parser.constructs[e],i=t.attempt(r,o,s)
return o
function o(e){return l(e)?i(e):s(e)}function s(e){
if(null!==e)return t.enter('data'),t.consume(e),a
t.consume(e)}function a(e){
return l(e)?(t.exit('data'),i(e)):(t.consume(e),a)}function l(e){
if(null===e)return!0
const t=r[e]
let i=-1
if(t)for(;++i<t.length;){const e=t[i]
if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}},
resolveAll:it('text'===e?ot:void 0)}}function it(e){
return function(t,n){let r,i=-1
for(;++i<=t.length;)void 0===r?t[i]&&'data'===t[i][1].type&&(r=i,i++):t[i]&&'data'===t[i][1].type||(i!==r+2&&(t[r][1].end=t[i-1][1].end,
t.splice(r+2,i-r-2),i=r+2),r=void 0)
return e?e(t,n):t}}function ot(e,t){let n=0
for(;++n<=e.length;)if((n===e.length||'lineEnding'===e[n][1].type)&&'data'===e[n-1][1].type){
const r=e[n-1][1],i=t.sliceStream(r)
let o,s=i.length,a=-1,l=0
for(;s--;){const e=i[s]
if('string'==typeof e){for(a=e.length;32===e.charCodeAt(a-1);)l++,a--
if(a)break
a=-1}else if(-2===e)o=!0,l++
else if(-1!==e){s++
break}}if(l){const i={
type:n===e.length||o||l<2?'lineSuffix':'hardBreakTrailing',start:{
line:r.end.line,column:r.end.column-l,offset:r.end.offset-l,
_index:r.start._index+s,_bufferIndex:s?a:r.start._bufferIndex+a},
end:Object.assign({},r.end)}
r.end=Object.assign({},i.start),r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(n,0,['enter',i,t],['exit',i,t]),
n+=2)}n++}return e}function st(e,t,n){
let r=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{
_index:0,_bufferIndex:-1})
const i={},o=[]
let s=[],a=[]
const l={consume:function(e){
J(e)?(r.line++,r.column=1,r.offset+=-3===e?2:1,g()):-1!==e&&(r.column++,
r.offset++)
r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===s[r._index].length&&(r._bufferIndex=-1,
r._index++))
c.previous=e},enter:function(e,t){const n=t||{}
return n.type=e,n.start=p(),c.events.push(['enter',n,c]),a.push(n),n},
exit:function(e){const t=a.pop()
return t.end=p(),c.events.push(['exit',t,c]),t},
attempt:T((function(e,t){E(e,t.from)})),check:T(d),interrupt:T(d,{
interrupt:!0})},c={previous:null,code:null,containerState:{},
events:[],parser:e,sliceStream:h,sliceSerialize:function(e,t){
return function(e,t){let n=-1
const r=[]
let i
for(;++n<e.length;){const o=e[n]
let s
if('string'==typeof o)s=o
else switch(o){case-5:s='\r'
break
case-4:s='\n'
break
case-3:s="\r\n"
break
case-2:s=t?' ':'\t'
break
case-1:if(!t&&i)continue
s=' '
break
default:s=String.fromCharCode(o)}i=-2===o,r.push(s)}return r.join('')
}(h(e),t)},now:p,defineSkip:function(e){i[e.line]=e.column,g()},
write:function(e){if(s=U(s,e),f(),null!==s[s.length-1])return[]
return E(t,0),c.events=ce(o,c.events,c),c.events}}
let u=t.tokenize.call(c,l)
return t.resolveAll&&o.push(t),c
function h(e){return function(e,t){
const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex
let s
n===i?s=[e[n].slice(r,o)]:(s=e.slice(n,i),r>-1&&(s[0]=s[0].slice(r)),o>0&&s.push(e[i].slice(0,o)))
return s}(s,e)}function p(){return Object.assign({},r)}function f(){
let e
for(;r._index<s.length;){const t=s[r._index]
if('string'==typeof t)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)m(t.charCodeAt(r._bufferIndex))
else m(t)}}function m(e){u=u(e)}function d(e,t){t.restore()}
function T(e,t){return function(n,i,o){let s,u,h,f
return Array.isArray(n)?m(n):'tokenize'in n?m([n]):function(e){
return t
function t(t){const n=null!==t&&e[t],r=null!==t&&e.null
return m([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)
}}(n)
function m(e){return s=e,u=0,0===e.length?o:d(e[u])}function d(e){
return function(n){f=function(){
const e=p(),t=c.previous,n=c.currentConstruct,i=c.events.length,o=Array.from(a)
return{restore:s,from:i}
function s(){
r=e,c.previous=t,c.currentConstruct=n,c.events.length=i,a=o,g()}
}(),h=e,e.partial||(c.currentConstruct=e)
if(e.name&&c.parser.constructs.disable.null.includes(e.name))return E()
return e.tokenize.call(t?Object.assign(Object.create(c),t):c,l,T,E)(n)
}}function T(t){return e(h,f),i}function E(e){
return f.restore(),++u<s.length?d(s[u]):o}}}function E(e,t){
e.resolveAll&&!o.includes(e)&&o.push(e),
e.resolve&&B(c.events,t,c.events.length-t,e.resolve(c.events.slice(t),c)),
e.resolveTo&&(c.events=e.resolveTo(c.events,c))}function g(){
r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}
const at={42:Ve,43:Ve,45:Ve,48:Ve,49:Ve,50:Ve,51:Ve,52:Ve,53:Ve,54:Ve,
55:Ve,56:Ve,57:Ve,62:me},lt={91:Me},ct={[-2]:Ae,[-1]:Ae,32:Ae},ut={
35:De,42:qe,45:[Ze,qe],60:we,61:Ze,95:qe,96:_e,126:_e},ht={38:ge,92:de
},pt={[-5]:We,[-4]:We,[-3]:We,33:Ye,38:ge,42:ue,60:[pe,Ue],91:Qe,
92:[ve,de],93:Ge,95:ue,96:Ne},ft={null:[ue,et]}
var mt=Object.freeze({__proto__:null,document:at,contentInitial:lt,
flowInitial:ct,flow:ut,string:ht,text:pt,insideSpan:ft,
attentionMarkers:{null:[42,95]},disable:{null:[]}})
const dt=/[\0\t\n\r]/g
function Tt(e,t){const n=Number.parseInt(e,t)
return n<9||11===n||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||65535==(65535&n)||65534==(65535&n)||n>1114111?'�':String.fromCharCode(n)
}
const Et=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi
function gt(e){return e.replace(Et,_t)}function _t(e,t,n){
if(t)return t
if(35===n.charCodeAt(0)){const e=n.charCodeAt(1),t=120===e||88===e
return Tt(n.slice(t?2:1),t?16:10)}return Ee(n)||e}
const At={}.hasOwnProperty,Ct=function(e,t,n){
return'string'!=typeof t&&(n=t,t=void 0),function(e={}){const t=Nt({
transforms:[],
canContainEols:['emphasis','fragment','heading','paragraph','strong'],
enter:{autolink:l(oe),autolinkProtocol:b,autolinkEmail:b,
atxHeading:l(te),blockQuote:l(X),characterEscape:b,
characterReference:b,codeFenced:l($),codeFencedFenceInfo:c,
codeFencedFenceMeta:c,codeIndented:l($,c),codeText:l(Z,c),
codeTextData:b,data:b,codeFlowValue:b,definition:l(J),
definitionDestinationString:c,definitionLabelString:c,
definitionTitleString:c,emphasis:l(ee),hardBreakEscape:l(ne),
hardBreakTrailing:l(ne),htmlFlow:l(re,c),htmlFlowData:b,
htmlText:l(re,c),htmlTextData:b,image:l(ie),label:c,link:l(oe),
listItem:l(ae),listItemValue:T,listOrdered:l(se,d),
listUnordered:l(se),paragraph:l(le),reference:j,referenceString:c,
resourceDestinationString:c,resourceTitleString:c,setextHeading:l(te),
strong:l(ce),thematicBreak:l(he)},exit:{atxHeading:h(),
atxHeadingSequence:S,autolink:h(),autolinkEmail:V,autolinkProtocol:q,
blockQuote:h(),characterEscapeValue:L,
characterReferenceMarkerHexadecimal:Q,
characterReferenceMarkerNumeric:Q,characterReferenceValue:W,
codeFenced:h(A),codeFencedFence:_,codeFencedFenceInfo:E,
codeFencedFenceMeta:g,codeFlowValue:L,codeIndented:h(C),codeText:h(D),
codeTextData:L,data:L,definition:h(),definitionDestinationString:O,
definitionLabelString:N,definitionTitleString:k,emphasis:h(),
hardBreakEscape:h(M),hardBreakTrailing:h(M),htmlFlow:h(P),
htmlFlowData:L,htmlText:h(v),htmlTextData:L,image:h(w),label:U,
labelText:B,lineEnding:x,link:h(F),listItem:h(),listOrdered:h(),
listUnordered:h(),paragraph:h(),referenceString:Y,
resourceDestinationString:G,resourceTitleString:K,resource:z,
setextHeading:h(R),setextHeadingLineSequence:I,setextHeadingText:y,
strong:h(),thematicBreak:h()}},e.mdastExtensions||[]),n={}
return r
function r(e){let n={type:'root',children:[]}
const r=[],l=[],h={stack:[n],tokenStack:r,config:t,enter:u,exit:p,
buffer:c,resume:m,setData:o,getData:s}
let f=-1
for(;++f<e.length;)if('listOrdered'===e[f][1].type||'listUnordered'===e[f][1].type)if('enter'===e[f][0])l.push(f)
else{f=i(e,l.pop(),f)}for(f=-1;++f<e.length;){const n=t[e[f][0]]
At.call(n,e[f][1].type)&&n[e[f][1].type].call(Object.assign({
sliceSerialize:e[f][2].sliceSerialize},h),e[f][1])}if(r.length>0){
const e=r[r.length-1];(e[1]||Ot).call(h,void 0,e[0])}for(n.position={
start:a(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),
end:a(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})
},f=-1;++f<t.transforms.length;)n=t.transforms[f](n)||n
return n}function i(e,t,n){let r,i,o,s,a=t-1,l=-1,c=!1
for(;++a<=n;){const t=e[a]
if('listUnordered'===t[1].type||'listOrdered'===t[1].type||'blockQuote'===t[1].type?('enter'===t[0]?l++:l--,
s=void 0):'lineEndingBlank'===t[1].type?'enter'===t[0]&&(!r||s||l||o||(o=a),
s=void 0):'linePrefix'===t[1].type||'listItemValue'===t[1].type||'listItemMarker'===t[1].type||'listItemPrefix'===t[1].type||'listItemPrefixWhitespace'===t[1].type||(s=void 0),
!l&&'enter'===t[0]&&'listItemPrefix'===t[1].type||-1===l&&'exit'===t[0]&&('listUnordered'===t[1].type||'listOrdered'===t[1].type)){
if(r){let s=a
for(i=void 0;s--;){const t=e[s]
if('lineEnding'===t[1].type||'lineEndingBlank'===t[1].type){
if('exit'===t[0])continue
i&&(e[i][1].type='lineEndingBlank',c=!0),t[1].type='lineEnding',i=s
}else if('linePrefix'!==t[1].type&&'blockQuotePrefix'!==t[1].type&&'blockQuotePrefixWhitespace'!==t[1].type&&'blockQuoteMarker'!==t[1].type&&'listItemIndent'!==t[1].type)break
}
o&&(!i||o<i)&&(r._spread=!0),r.end=Object.assign({},i?e[i][1].start:t[1].end),e.splice(i||a,0,['exit',r,t[2]]),
a++,n++}'listItemPrefix'===t[1].type&&(r={type:'listItem',_spread:!1,
start:Object.assign({},t[1].start)
},e.splice(a,0,['enter',r,t[2]]),a++,n++,o=void 0,s=!0)}}
return e[t][1]._spread=c,n}function o(e,t){n[e]=t}function s(e){
return n[e]}function a(e){return{line:e.line,column:e.column,
offset:e.offset}}function l(e,t){return n
function n(n){u.call(this,e(n),n),t&&t.call(this,n)}}function c(){
this.stack.push({type:'fragment',children:[]})}function u(e,t,n){
return this.stack[this.stack.length-1].children.push(e),
this.stack.push(e),this.tokenStack.push([t,n]),e.position={
start:a(t.start)},e}function h(e){return t
function t(t){e&&e.call(this,t),p.call(this,t)}}function p(e,t){
const n=this.stack.pop(),r=this.tokenStack.pop()
if(!r)throw new Error('Cannot close `'+e.type+'` ('+f({start:e.start,
end:e.end})+'): it’s not open')
if(r[0].type!==e.type)if(t)t.call(this,e,r[0])
else{(r[1]||Ot).call(this,e,r[0])}return n.position.end=a(e.end),n}
function m(){return function(e,t){var{includeImageAlt:n=!0}=t||{}
return H(e,n)}(this.stack.pop())}function d(){
o('expectingFirstListItemValue',!0)}function T(e){
if(s('expectingFirstListItemValue')){
this.stack[this.stack.length-2].start=Number.parseInt(this.sliceSerialize(e),10),
o('expectingFirstListItemValue')}}function E(){const e=this.resume()
this.stack[this.stack.length-1].lang=e}function g(){
const e=this.resume()
this.stack[this.stack.length-1].meta=e}function _(){
s('flowCodeInside')||(this.buffer(),o('flowCodeInside',!0))}
function A(){const e=this.resume()
this.stack[this.stack.length-1].value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,''),o('flowCodeInside')
}function C(){const e=this.resume()
this.stack[this.stack.length-1].value=e.replace(/(\r?\n|\r)$/g,'')}
function N(e){const t=this.resume(),n=this.stack[this.stack.length-1]
n.label=t,n.identifier=xe(this.sliceSerialize(e)).toLowerCase()}
function k(){const e=this.resume()
this.stack[this.stack.length-1].title=e}function O(){
const e=this.resume()
this.stack[this.stack.length-1].url=e}function S(e){
const t=this.stack[this.stack.length-1]
if(!t.depth){const n=this.sliceSerialize(e).length
t.depth=n}}function y(){o('setextHeadingSlurpLineEnding',!0)}
function I(e){
this.stack[this.stack.length-1].depth=61===this.sliceSerialize(e).charCodeAt(0)?1:2
}function R(){o('setextHeadingSlurpLineEnding')}function b(e){
const t=this.stack[this.stack.length-1]
let n=t.children[t.children.length-1]
n&&'text'===n.type||(n=ue(),n.position={start:a(e.start)
},t.children.push(n)),this.stack.push(n)}function L(e){
const t=this.stack.pop()
t.value+=this.sliceSerialize(e),t.position.end=a(e.end)}function x(e){
const n=this.stack[this.stack.length-1]
if(s('atHardBreak')){
return n.children[n.children.length-1].position.end=a(e.end),
void o('atHardBreak')}
!s('setextHeadingSlurpLineEnding')&&t.canContainEols.includes(n.type)&&(b.call(this,e),
L.call(this,e))}function M(){o('atHardBreak',!0)}function P(){
const e=this.resume()
this.stack[this.stack.length-1].value=e}function v(){
const e=this.resume()
this.stack[this.stack.length-1].value=e}function D(){
const e=this.resume()
this.stack[this.stack.length-1].value=e}function F(){
const e=this.stack[this.stack.length-1]
s('inReference')?(e.type+='Reference',e.referenceType=s('referenceType')||'shortcut',
delete e.url,
delete e.title):(delete e.identifier,delete e.label),o('referenceType')
}function w(){const e=this.stack[this.stack.length-1]
s('inReference')?(e.type+='Reference',e.referenceType=s('referenceType')||'shortcut',
delete e.url,
delete e.title):(delete e.identifier,delete e.label),o('referenceType')
}function B(e){
const t=this.stack[this.stack.length-2],n=this.sliceSerialize(e)
t.label=gt(n),t.identifier=xe(n).toLowerCase()}function U(){
const e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1]
o('inReference',!0),'link'===n.type?n.children=e.children:n.alt=t}
function G(){const e=this.resume()
this.stack[this.stack.length-1].url=e}function K(){
const e=this.resume()
this.stack[this.stack.length-1].title=e}function z(){o('inReference')}
function j(){o('referenceType','collapsed')}function Y(e){
const t=this.resume(),n=this.stack[this.stack.length-1]
n.label=t,n.identifier=xe(this.sliceSerialize(e)).toLowerCase(),o('referenceType','full')
}function Q(e){o('characterReferenceType',e.type)}function W(e){
const t=this.sliceSerialize(e),n=s('characterReferenceType')
let r
n?(r=Tt(t,'characterReferenceMarkerNumeric'===n?10:16),o('characterReferenceType')):r=Ee(t)
const i=this.stack.pop()
i.value+=r,i.position.end=a(e.end)}function q(e){L.call(this,e)
this.stack[this.stack.length-1].url=this.sliceSerialize(e)}
function V(e){L.call(this,e)
this.stack[this.stack.length-1].url='mailto:'+this.sliceSerialize(e)}
function X(){return{type:'blockquote',children:[]}}function $(){
return{type:'code',lang:null,meta:null,value:''}}function Z(){return{
type:'inlineCode',value:''}}function J(){return{type:'definition',
identifier:'',label:null,title:null,url:''}}function ee(){return{
type:'emphasis',children:[]}}function te(){return{type:'heading',
depth:void 0,children:[]}}function ne(){return{type:'break'}}
function re(){return{type:'html',value:''}}function ie(){return{
type:'image',title:null,url:'',alt:null}}function oe(){return{
type:'link',title:null,url:'',children:[]}}function se(e){return{
type:'list',ordered:'listOrdered'===e.type,start:null,
spread:e._spread,children:[]}}function ae(e){return{type:'listItem',
spread:e._spread,checked:null,children:[]}}function le(){return{
type:'paragraph',children:[]}}function ce(){return{type:'strong',
children:[]}}function ue(){return{type:'text',value:''}}function he(){
return{type:'thematicBreak'}}}(n)(function(e){for(;!ke(e););return e
}(function(e={}){const t={defined:[],lazy:{},
constructs:K([mt].concat(e.extensions||[])),content:n(oe),
document:n(se),flow:n(Je),string:n(tt),text:n(nt)}
return t
function n(e){return function(n){return st(t,e,n)}}
}(n).document().write(function(){let e,t=1,n='',r=!0
return function(i,o,s){const a=[]
let l,c,u,h,p
for(i=n+i.toString(o),u=0,n='',r&&(65279===i.charCodeAt(0)&&u++,r=void 0);u<i.length;){
if(dt.lastIndex=u,
l=dt.exec(i),h=l&&void 0!==l.index?l.index:i.length,p=i.charCodeAt(h),
!l){n=i.slice(u)
break}if(10===p&&u===h&&e)a.push(-3),e=void 0
else switch(e&&(a.push(-5),e=void 0),u<h&&(a.push(i.slice(u,h)),t+=h-u),p){
case 0:a.push(65533),t++
break
case 9:for(c=4*Math.ceil(t/4),a.push(-2);t++<c;)a.push(-1)
break
case 10:a.push(-4),t=1
break
default:e=!0,t=1}u=h+1}
return s&&(e&&a.push(-5),n&&a.push(n),a.push(null)),a}}()(e,t,!0))))}
function Nt(e,t){let n=-1
for(;++n<t.length;){const r=t[n]
Array.isArray(r)?Nt(e,r):kt(e,r)}return e}function kt(e,t){let n
for(n in t)if(At.call(t,n)){
const r='canContainEols'===n||'transforms'===n,i=(At.call(e,n)?e[n]:void 0)||(e[n]=r?[]:{}),o=t[n]
o&&(r?e[n]=[...i,...o]:Object.assign(i,o))}}function Ot(e,t){
throw e?new Error('Cannot close `'+e.type+'` ('+f({start:e.start,
end:e.end})+'): a different token (`'+t.type+'`, '+f({start:t.start,
end:t.end
})+') is open'):new Error('Cannot close document, a token (`'+t.type+'`, '+f({
start:t.start,end:t.end})+') is still open')}function St(e){
Object.assign(this,{Parser:t=>{const n=this.data('settings')
return Ct(t,Object.assign({},n,e,{
extensions:this.data('micromarkExtensions')||[],
mdastExtensions:this.data('fromMarkdownExtensions')||[]}))}})}
const yt={tokenize:function(e,t,n){return function(t){
return e.consume(t),r}
function r(t){return 87===t||119===t?(e.consume(t),i):n(t)}
function i(t){return 87===t||119===t?(e.consume(t),o):n(t)}
function o(t){return 46===t?(e.consume(t),s):n(t)}function s(e){
return null===e||J(e)?n(e):t(e)}},partial:!0},It={
tokenize:function(e,t,n){let r,i
return o
function o(t){
return 38===t?e.check(Lt,a,s)(t):46===t||95===t?e.check(bt,a,s)(t):null===t||$(t)||te(t)||45!==t&&ne(t)?a(t):(e.consume(t),
o)}function s(t){
return 46===t?(i=r,r=void 0,e.consume(t),o):(95===t&&(r=!0),e.consume(t),
o)}function a(e){return i||r?n(e):t(e)}},partial:!0},Rt={
tokenize:function(e,t){let n=0
return r
function r(s){
return 38===s?e.check(Lt,t,i)(s):(40===s&&n++,41===s?e.check(bt,o,i)(s):wt(s)?t(s):Ht(s)?e.check(bt,t,i)(s):(e.consume(s),
r))}function i(t){return e.consume(t),r}function o(e){
return n--,n<0?t(e):i(e)}},partial:!0},bt={tokenize:function(e,t,n){
return function(t){return e.consume(t),r}
function r(i){return Ht(i)?(e.consume(i),r):wt(i)?t(i):n(i)}},
partial:!0},Lt={tokenize:function(e,t,n){return function(t){
return e.consume(t),r}
function r(t){
return Y(t)?(e.consume(t),r):59===t?(e.consume(t),i):n(t)}
function i(e){return wt(e)?t(e):n(e)}},partial:!0},xt={
tokenize:function(e,t,n){const r=this
return function(t){
if(87!==t&&119!==t||!Ut(r.previous)||zt(r.events))return n(t)
return e.enter('literalAutolink'),e.enter('literalAutolinkWww'),e.check(yt,e.attempt(It,e.attempt(Rt,i),n),n)(t)
}
function i(n){
return e.exit('literalAutolinkWww'),e.exit('literalAutolink'),t(n)}},
previous:Ut},Mt={tokenize:function(e,t,n){const r=this
return function(t){
if(72!==t&&104!==t||!Gt(r.previous)||zt(r.events))return n(t)
return e.enter('literalAutolink'),e.enter('literalAutolinkHttp'),e.consume(t),i
}
function i(t){return 84===t||116===t?(e.consume(t),o):n(t)}
function o(t){return 84===t||116===t?(e.consume(t),s):n(t)}
function s(t){return 80===t||112===t?(e.consume(t),a):n(t)}
function a(t){return 83===t||115===t?(e.consume(t),l):l(t)}
function l(t){return 58===t?(e.consume(t),c):n(t)}function c(t){
return 47===t?(e.consume(t),u):n(t)}function u(t){
return 47===t?(e.consume(t),h):n(t)}function h(t){
return null===t||$(t)||te(t)||ne(t)?n(t):e.attempt(It,e.attempt(Rt,p),n)(t)
}function p(n){
return e.exit('literalAutolinkHttp'),e.exit('literalAutolink'),t(n)}},
previous:Gt},Pt={tokenize:function(e,t,n){const r=this
let i,o
return function(t){
if(!Bt(t)||!Kt(r.previous)||zt(r.events))return n(t)
return e.enter('literalAutolink'),e.enter('literalAutolinkEmail'),s(t)
}
function s(t){
return Bt(t)?(e.consume(t),s):64===t?(e.consume(t),a):n(t)}
function a(t){
return 46===t?e.check(bt,h,l)(t):45===t||95===t?e.check(bt,n,c)(t):q(t)?(!o&&Q(t)&&(o=!0),
e.consume(t),a):h(t)}function l(t){return e.consume(t),i=!0,o=void 0,a
}function c(t){return e.consume(t),u}function u(t){
return 46===t?e.check(bt,n,l)(t):a(t)}function h(r){
return i&&!o?(e.exit('literalAutolinkEmail'),
e.exit('literalAutolink'),t(r)):n(r)}},previous:Kt},vt={},Dt={text:vt}
let Ft=48
for(;Ft<123;)vt[Ft]=Pt,Ft++,58===Ft?Ft=65:91===Ft&&(Ft=97)
function Ht(e){
return 33===e||34===e||39===e||41===e||42===e||44===e||46===e||58===e||59===e||60===e||63===e||95===e||126===e
}function wt(e){return null===e||60===e||Z(e)}function Bt(e){
return 43===e||45===e||46===e||95===e||q(e)}function Ut(e){
return null===e||40===e||42===e||95===e||126===e||Z(e)}function Gt(e){
return null===e||!Y(e)}function Kt(e){return 47!==e&&Gt(e)}
function zt(e){let t=e.length,n=!1
for(;t--;){const r=e[t][1]
if(('labelLink'===r.type||'labelImage'===r.type)&&!r._balanced){n=!0
break}if(r._gfmAutolinkLiteralWalkedInto){n=!1
break}}
return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),
n}function jt(e){const t=[]
let n=-1,r=0,i=0
for(;++n<e.length;){const o=e.charCodeAt(n)
let s=''
if(37===o&&q(e.charCodeAt(n+1))&&q(e.charCodeAt(n+2)))i=2
else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o))
else if(o>55295&&o<57344){const t=e.charCodeAt(n+1)
o<56320&&t>56319&&t<57344?(s=String.fromCharCode(o,t),i=1):s='�'
}else s=String.fromCharCode(o)
s&&(t.push(e.slice(r,n),encodeURIComponent(s)),r=n+i+1,s=''),i&&(n+=i,i=0)
}return t.join('')+e.slice(r)}
vt[43]=Pt,vt[45]=Pt,vt[46]=Pt,vt[95]=Pt,vt[72]=[Pt,Mt],
vt[104]=[Pt,Mt],vt[87]=[Pt,xt],vt[119]=[Pt,xt]
const Yt={tokenize:function(e,t,n){const r=this
return ie(e,(function(e){const i=r.events[r.events.length-1]
return i&&'gfmFootnoteDefinitionIndent'===i[1].type&&4===i[2].sliceSerialize(i[1],!0).length?t(e):n(e)
}),'gfmFootnoteDefinitionIndent',5)},partial:!0}
function Qt(e,t,n){const r=this
let i=r.events.length
const o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[])
let s
for(;i--;){const e=r.events[i][1]
if('labelImage'===e.type){s=e
break}
if('gfmFootnoteCall'===e.type||'labelLink'===e.type||'label'===e.type||'image'===e.type||'link'===e.type)break
}return function(i){if(!s||!s._balanced)return n(i)
const a=xe(r.sliceSerialize({start:s.end,end:r.now()}))
if(94!==a.charCodeAt(0)||!o.includes(a.slice(1)))return n(i)
return e.enter('gfmFootnoteCallLabelMarker'),e.consume(i),e.exit('gfmFootnoteCallLabelMarker'),
t(i)}}function Wt(e,t){let n=e.length
for(;n--;)if('labelImage'===e[n][1].type&&'enter'===e[n][0]){e[n][1]
break}
e[n+1][1].type='data',e[n+3][1].type='gfmFootnoteCallLabelMarker'
const r={type:'gfmFootnoteCall',
start:Object.assign({},e[n+3][1].start),
end:Object.assign({},e[e.length-1][1].end)},i={
type:'gfmFootnoteCallMarker',start:Object.assign({},e[n+3][1].end),
end:Object.assign({},e[n+3][1].end)}
i.end.column++,i.end.offset++,i.end._bufferIndex++
const o={type:'gfmFootnoteCallString',start:Object.assign({},i.end),
end:Object.assign({},e[e.length-1][1].start)},s={type:'chunkString',
contentType:'string',start:Object.assign({},o.start),
end:Object.assign({},o.end)
},a=[e[n+1],e[n+2],['enter',r,t],e[n+3],e[n+4],['enter',i,t],['exit',i,t],['enter',o,t],['enter',s,t],['exit',s,t],['exit',o,t],e[e.length-2],e[e.length-1],['exit',r,t]]
return e.splice(n,e.length-n+1,...a),e}function qt(e,t,n){
const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[])
let o,s=0
return function(t){
return e.enter('gfmFootnoteCall'),e.enter('gfmFootnoteCallLabelMarker'),
e.consume(t),e.exit('gfmFootnoteCallLabelMarker'),a}
function a(t){
return 94!==t?n(t):(e.enter('gfmFootnoteCallMarker'),e.consume(t),
e.exit('gfmFootnoteCallMarker'),
e.enter('gfmFootnoteCallString'),e.enter('chunkString').contentType='string',
l)}function l(a){let u
return null===a||91===a||s++>999?n(a):93===a?o?(e.exit('chunkString'),u=e.exit('gfmFootnoteCallString'),
i.includes(xe(r.sliceSerialize(u)))?function(n){
return e.enter('gfmFootnoteCallLabelMarker'),
e.consume(n),e.exit('gfmFootnoteCallLabelMarker'),
e.exit('gfmFootnoteCall'),t
}(a):n(a)):n(a):(e.consume(a),Z(a)||(o=!0),92===a?c:l)}function c(t){
return 91===t||92===t||93===t?(e.consume(t),s++,l):l(t)}}
function Vt(e,t,n){
const r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[])
let o,s,a=0
return function(t){
return e.enter('gfmFootnoteDefinition')._container=!0,e.enter('gfmFootnoteDefinitionLabel'),
e.enter('gfmFootnoteDefinitionLabelMarker'),
e.consume(t),e.exit('gfmFootnoteDefinitionLabelMarker'),l}
function l(t){
return 94===t?(e.enter('gfmFootnoteDefinitionMarker'),e.consume(t),
e.exit('gfmFootnoteDefinitionMarker'),
e.enter('gfmFootnoteDefinitionLabelString'),c):n(t)}function c(t){
let i
return null===t||91===t||a>999?n(t):93===t?s?(i=e.exit('gfmFootnoteDefinitionLabelString'),
o=xe(r.sliceSerialize(i)),
e.enter('gfmFootnoteDefinitionLabelMarker'),e.consume(t),
e.exit('gfmFootnoteDefinitionLabelMarker'),
e.exit('gfmFootnoteDefinitionLabel'),
p):n(t):J(t)?(e.enter('lineEnding'),e.consume(t),
e.exit('lineEnding'),a++,c):(e.enter('chunkString').contentType='string',
u(t))}function u(t){
return null===t||J(t)||91===t||93===t||a>999?(e.exit('chunkString'),
c(t)):(Z(t)||(s=!0),a++,e.consume(t),92===t?h:u)}function h(t){
return 91===t||92===t||93===t?(e.consume(t),a++,u):u(t)}function p(t){
return 58===t?(e.enter('definitionMarker'),
e.consume(t),e.exit('definitionMarker'),
ie(e,f,'gfmFootnoteDefinitionWhitespace')):n(t)}function f(e){
return i.includes(o)||i.push(o),t(e)}}function Xt(e,t,n){
return e.check(fe,t,e.attempt(Yt,t,n))}function $t(e){
e.exit('gfmFootnoteDefinition')}function Zt(e={}){let t=e.singleTilde
const n={tokenize:function(e,n,r){const i=this.previous,o=this.events
let s=0
return function(t){
if(126===i&&'characterEscape'!==o[o.length-1][1].type)return r(t)
return e.enter('strikethroughSequenceTemporary'),a(t)}
function a(o){const l=le(i)
if(126===o)return s>1?r(o):(e.consume(o),s++,a)
if(s<2&&!t)return r(o)
const c=e.exit('strikethroughSequenceTemporary'),u=le(o)
return c._open=!u||2===u&&Boolean(l),c._close=!l||2===l&&Boolean(u),n(o)
}},resolveAll:function(e,t){let n=-1
for(;++n<e.length;)if('enter'===e[n][0]&&'strikethroughSequenceTemporary'===e[n][1].type&&e[n][1]._close){
let r=n
for(;r--;)if('exit'===e[r][0]&&'strikethroughSequenceTemporary'===e[r][1].type&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset==e[r][1].end.offset-e[r][1].start.offset){
e[n][1].type='strikethroughSequence',
e[r][1].type='strikethroughSequence'
const i={type:'strikethrough',start:Object.assign({},e[r][1].start),
end:Object.assign({},e[n][1].end)},o={type:'strikethroughText',
start:Object.assign({},e[r][1].end),
end:Object.assign({},e[n][1].start)
},s=[['enter',i,t],['enter',e[r][1],t],['exit',e[r][1],t],['enter',o,t]]
B(s,s.length,0,ce(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),B(s,s.length,0,[['exit',o,t],['enter',e[n][1],t],['exit',e[n][1],t],['exit',i,t]]),
B(e,r-1,n-r+3,s),n=r+s.length-2
break}}n=-1
for(;++n<e.length;)'strikethroughSequenceTemporary'===e[n][1].type&&(e[n][1].type='data')
return e}}
return null==t&&(t=!0),{text:{126:n},insideSpan:{null:[n]},
attentionMarkers:{null:[126]}}}const Jt={flow:{null:{
tokenize:function(e,t,n){const r=this,i=[]
let o,s,a=0
return function(t){
if(e.enter('table')._align=i,e.enter('tableHead'),e.enter('tableRow'),
124===t)return l(t)
return a++,e.enter('temporaryTableCellContent'),h(t)}
function l(t){
return e.enter('tableCellDivider'),e.consume(t),e.exit('tableCellDivider'),
o=!0,c}function c(t){return null===t||J(t)?function(t){
if(null===t)return n(t)
e.exit('tableRow'),e.exit('tableHead')
const i=r.interrupt
return r.interrupt=!0,e.attempt({tokenize:R,partial:!0},(function(t){
return r.interrupt=i,e.enter('tableDelimiterRow'),f(t)}),(function(e){
return r.interrupt=i,n(e)}))(t)
}(t):ee(t)?(e.enter('whitespace'),e.consume(t),u):(o&&(o=void 0,
a++),124===t?l(t):(e.enter('temporaryTableCellContent'),h(t)))}
function u(t){
return ee(t)?(e.consume(t),u):(e.exit('whitespace'),c(t))}
function h(t){
return null===t||124===t||Z(t)?(e.exit('temporaryTableCellContent'),
c(t)):(e.consume(t),92===t?p:h)}function p(t){
return 92===t||124===t?(e.consume(t),h):h(t)}function f(t){
return null===t||J(t)?g(t):ee(t)?(e.enter('whitespace'),
e.consume(t),m):45===t?(e.enter('tableDelimiterFiller'),
e.consume(t),s=!0,i.push('none'),
d):58===t?(e.enter('tableDelimiterAlignment'),e.consume(t),
e.exit('tableDelimiterAlignment'),
i.push('left'),T):124===t?(e.enter('tableCellDivider'),
e.consume(t),e.exit('tableCellDivider'),f):n(t)}function m(t){
return ee(t)?(e.consume(t),m):(e.exit('whitespace'),f(t))}
function d(t){
return 45===t?(e.consume(t),d):(e.exit('tableDelimiterFiller'),58===t?(e.enter('tableDelimiterAlignment'),
e.consume(t),
e.exit('tableDelimiterAlignment'),i[i.length-1]='left'===i[i.length-1]?'center':'right',
E):f(t))}function T(t){
return 45===t?(e.enter('tableDelimiterFiller'),e.consume(t),
s=!0,d):n(t)}function E(t){
return null===t||J(t)?g(t):ee(t)?(e.enter('whitespace'),
e.consume(t),m):124===t?(e.enter('tableCellDivider'),
e.consume(t),e.exit('tableCellDivider'),f):n(t)}function g(t){
return e.exit('tableDelimiterRow'),
s&&a===i.length?null===t?_(t):e.check(en,_,e.attempt({tokenize:R,
partial:!0},ie(e,A,'linePrefix',4),_))(t):n(t)}function _(n){
return e.exit('table'),t(n)}function A(t){
return e.enter('tableBody'),C(t)}function C(t){
return e.enter('tableRow'),124===t?N(t):(e.enter('temporaryTableCellContent'),
S(t))}function N(t){
return e.enter('tableCellDivider'),e.consume(t),e.exit('tableCellDivider'),
k}function k(t){return null===t||J(t)?function(t){
if(e.exit('tableRow'),null===t)return I(t)
return e.check(en,I,e.attempt({tokenize:R,partial:!0
},ie(e,C,'linePrefix',4),I))(t)
}(t):ee(t)?(e.enter('whitespace'),e.consume(t),O):124===t?N(t):(e.enter('temporaryTableCellContent'),
S(t))}function O(t){
return ee(t)?(e.consume(t),O):(e.exit('whitespace'),k(t))}
function S(t){
return null===t||124===t||Z(t)?(e.exit('temporaryTableCellContent'),
k(t)):(e.consume(t),92===t?y:S)}function y(t){
return 92===t||124===t?(e.consume(t),S):S(t)}function I(t){
return e.exit('tableBody'),_(t)}function R(e,t,n){return function(t){
return e.enter('lineEnding'),
e.consume(t),e.exit('lineEnding'),ie(e,i,'linePrefix')}
function i(i){
if(r.parser.lazy[r.now().line]||null===i||J(i))return n(i)
const o=r.events[r.events.length-1]
return!r.parser.constructs.disable.null.includes('codeIndented')&&o&&'linePrefix'===o[1].type&&o[2].sliceSerialize(o[1],!0).length>=4?n(i):(r._gfmTableDynamicInterruptHack=!0,
e.check(r.parser.constructs.flow,(function(e){
return r._gfmTableDynamicInterruptHack=!1,n(e)}),(function(e){
return r._gfmTableDynamicInterruptHack=!1,t(e)}))(i))}}},
resolve:function(e,t){let n,r,i,o,s,a,l,c=-1
for(;++c<e.length;){const u=e[c][1]
if(i&&('temporaryTableCellContent'===u.type&&(o=o||c,s=c),('tableCellDivider'===u.type||'tableRow'===u.type)&&s)){
const n={type:'tableContent',start:e[o][1].start,end:e[s][1].end},r={
type:'chunkText',start:n.start,end:n.end,contentType:'text'}
e.splice(o,s-o+1,['enter',n,t],['enter',r,t],['exit',r,t],['exit',n,t]),c-=s-o-3,
o=void 0,s=void 0}
if('exit'===e[c][0]&&void 0!==a&&a+(l?0:1)<c&&('tableCellDivider'===u.type||'tableRow'===u.type&&(a+3<c||'whitespace'!==e[a][1].type))){
const i={type:r?'tableDelimiter':n?'tableHeader':'tableData',
start:e[a][1].start,end:e[c][1].end}
e.splice(c+('tableCellDivider'===u.type?1:0),0,['exit',i,t]),e.splice(a,0,['enter',i,t]),
c+=2,a=c+1,l=!0}
'tableRow'===u.type&&(i='enter'===e[c][0],i&&(a=c+1,l=!1)),'tableDelimiterRow'===u.type&&(r='enter'===e[c][0],
r&&(a=c+1,l=!1)),'tableHead'===u.type&&(n='enter'===e[c][0])}return e}
}}},en={tokenize:function(e,t,n){let r=0
return function(t){return e.enter('check'),e.consume(t),i}
function i(o){
return-1===o||32===o?(e.consume(o),r++,4===r?t:i):null===o||Z(o)?t(o):n(o)
}},partial:!0}
const tn={tokenize:function(e,t,n){const r=this
return function(t){
if(null!==r.previous||!r._gfmTasklistFirstContentOfListItem)return n(t)
return e.enter('taskListCheck'),e.enter('taskListCheckMarker'),e.consume(t),e.exit('taskListCheckMarker'),
i}
function i(t){
return Z(t)?(e.enter('taskListCheckValueUnchecked'),e.consume(t),e.exit('taskListCheckValueUnchecked'),
o):88===t||120===t?(e.enter('taskListCheckValueChecked'),
e.consume(t),e.exit('taskListCheckValueChecked'),o):n(t)}
function o(r){
return 93===r?(e.enter('taskListCheckMarker'),e.consume(r),e.exit('taskListCheckMarker'),
e.exit('taskListCheck'),e.check({tokenize:rn},t,n)):n(r)}}},nn={text:{
91:tn}}
function rn(e,t,n){const r=this
return ie(e,(function(e){const i=r.events[r.events.length-1]
return(i&&'whitespace'===i[1].type||J(e))&&null!==e?t(e):n(e)
}),'whitespace')}function on(e,t){const n=String(e)
if('string'!=typeof t)throw new TypeError('Expected character')
let r=0,i=n.indexOf(t)
for(;-1!==i;)r++,i=n.indexOf(t,i+t.length)
return r}const sn=function(e){if(null==e)return ln
if('string'==typeof e)return function(e){return an(t)
function t(t){return t&&t.type===e}}(e)
if('object'==typeof e)return Array.isArray(e)?function(e){const t=[]
let n=-1
for(;++n<e.length;)t[n]=sn(e[n])
return an(r)
function r(...e){let n=-1
for(;++n<t.length;)if(t[n].call(this,...e))return!0
return!1}}(e):function(e){return an(t)
function t(t){let n
for(n in e)if(t[n]!==e[n])return!1
return!0}}(e)
if('function'==typeof e)return an(e)
throw new Error('Expected function, string, or object as test')}
function an(e){return function(...t){return Boolean(e.call(this,...t))
}}function ln(){return!0}const cn='skip',un=function(e,t,n,r){
'function'==typeof t&&'function'!=typeof n&&(r=n,n=t,t=null)
const i=sn(t),o=r?-1:1
!function e(s,a,l){const c='object'==typeof s&&null!==s?s:{}
let u
'string'==typeof c.type&&(u='string'==typeof c.tagName?c.tagName:'string'==typeof c.name?c.name:void 0,
Object.defineProperty(h,'name',{
value:'node ('+c.type+(u?'<'+u+'>':'')+')'}))
return h
function h(){let c,u,h,p=[]
if((!t||i(s,a,l[l.length-1]||null))&&(p=function(e){
if(Array.isArray(e))return e
if('number'==typeof e)return[true,e]
return[e]}(n(s,l)),false===p[0]))return p
if(s.children&&p[0]!==cn)for(u=(r?s.children.length:-1)+o,h=l.concat(s);u>-1&&u<s.children.length;){
if(c=e(s.children[u],u,h)(),false===c[0])return c
u='number'==typeof c[1]?c[1]:u+o}return p}}(e,null,[])()}
const hn={}.hasOwnProperty,pn=function(e,t,n,r){let i,o
'string'==typeof t||t instanceof RegExp?(o=[[t,n]],i=r):(o=t,i=n),i||(i={})
const s=sn(i.ignore||[]),a=function(e){const t=[]
if('object'!=typeof e)throw new TypeError('Expected array or object as schema')
if(Array.isArray(e)){let n=-1
for(;++n<e.length;)t.push([fn(e[n][0]),mn(e[n][1])])}else{let n
for(n in e)hn.call(e,n)&&t.push([fn(n),mn(e[n])])}return t}(o)
let l=-1
for(;++l<a.length;)un(e,'text',c)
return e
function c(e,t){let n,r=-1
for(;++r<t.length;){const e=t[r]
if(s(e,n?n.children.indexOf(e):void 0,n))return
n=e}if(n)return function(e,t){
const n=t[t.length-1],r=a[l][0],i=a[l][1]
let o=0
const s=n.children.indexOf(e)
let c,u=!1,h=[]
r.lastIndex=0
let p=r.exec(e.value)
for(;p;){c=p.index
const n={index:p.index,input:p.input,stack:[...t,e]}
let s=i(...p,n)
if('string'==typeof s&&(s=s.length>0?{type:'text',value:s
}:void 0),!1!==s&&(o!==c&&h.push({type:'text',value:e.value.slice(o,c)
}),Array.isArray(s)?h.push(...s):s&&h.push(s),
o=c+p[0].length,u=!0),!r.global)break
p=r.exec(e.value)}u?(o<e.value.length&&h.push({type:'text',
value:e.value.slice(o)}),n.children.splice(s,1,...h)):h=[e]
return s+h.length}(e,t)}}
function fn(e){return'string'==typeof e?new RegExp(function(e){
if('string'!=typeof e)throw new TypeError('Expected a string')
return e.replace(/[|\\{}()[\]^$+*?.]/g,'\\$&').replace(/-/g,'\\x2d')
}(e),'g'):e}function mn(e){return'function'==typeof e?e:()=>e}
const dn='phrasing',Tn=['autolink','link','image','label'],En={
transforms:[function(e){
pn(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,An],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,Cn]],{
ignore:['link','linkReference']})}],enter:{
literalAutolink:function(e){this.enter({type:'link',title:null,url:'',
children:[]},e)},literalAutolinkEmail:_n,literalAutolinkHttp:_n,
literalAutolinkWww:_n},exit:{literalAutolink:function(e){this.exit(e)
},literalAutolinkEmail:function(e){
this.config.exit.autolinkEmail.call(this,e)},
literalAutolinkHttp:function(e){
this.config.exit.autolinkProtocol.call(this,e)},
literalAutolinkWww:function(e){this.config.exit.data.call(this,e)
this.stack[this.stack.length-1].url='http://'+this.sliceSerialize(e)}}
},gn={unsafe:[{character:'@',before:'[+\\-.\\w]',after:'[\\-.\\w]',
inConstruct:dn,notInConstruct:Tn},{character:'.',before:'[Ww]',
after:'[\\-.\\w]',inConstruct:dn,notInConstruct:Tn},{character:':',
before:'[ps]',after:'\\/',inConstruct:dn,notInConstruct:Tn}]}
function _n(e){this.config.enter.autolinkProtocol.call(this,e)}
function An(e,t,n,r,i){let o=''
if(!Nn(i))return!1
if(/^w/i.test(t)&&(n=t+n,t='',o='http://'),!function(e){
const t=e.split('.')
if(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))return!1
return!0}(n))return!1
const s=function(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e)
let n,r,i,o
if(t)for(e=e.slice(0,t.index),o=t[0],n=o.indexOf(')'),r=on(e,'('),i=on(e,')');-1!==n&&r>i;)e+=o.slice(0,n+1),
o=o.slice(n+1),n=o.indexOf(')'),i++
return[e,o]}(n+r)
if(!s[0])return!1
const a={type:'link',title:null,url:o+t+s[0],children:[{type:'text',
value:t+s[0]}]}
return s[1]?[a,{type:'text',value:s[1]}]:a}function Cn(e,t,n,r){
return!(!Nn(r,!0)||/[_-\d]$/.test(n))&&{type:'link',title:null,
url:'mailto:'+t+'@'+n,children:[{type:'text',value:t+'@'+n}]}}
function Nn(e,t){const n=e.input.charCodeAt(e.index-1)
return(0===e.index||te(n)||ne(n))&&(!t||47!==n)}function kn(e){
return e.label||!e.identifier?e.label||'':gt(e.identifier)}
function On(e){const t=e||{},n=t.now||{}
let r=t.lineShift||0,i=n.line||1,o=n.column||1
return{move:function(e=""){
const t=e.split(/\r?\n|\r/g),n=t[t.length-1]
return i+=t.length-1,o=1===t.length?o+n.length:1+n.length+r,e},
current:function(){return{now:{line:i,column:o},lineShift:r}},
shift:function(e){r+=e}}}function Sn(e,t,n){
const r=t.indexStack,i=e.children||[],o=On(n),s=[]
let a=-1
for(r.push(-1);++a<i.length;){const n=i[a]
r[r.length-1]=a,s.push(o.move(t.handle(n,e,t,{before:'\n',after:'\n',
...o.current()
}))),'list'!==n.type&&(t.bulletLastUsed=void 0),a<i.length-1&&s.push(o.move(l(n,i[a+1])))
}return r.pop(),s.join('')
function l(n,r){let i=t.join.length
for(;i--;){const o=t.join[i](n,r,e,t)
if(!0===o||1===o)break
if('number'==typeof o)return'\n'.repeat(1+o)
if(!1===o)return'\n\n\x3c!----\x3e\n\n'}return'\n\n'}}
const yn=/\r?\n|\r/g
function In(e,t){const n=[]
let r,i=0,o=0
for(;r=yn.exec(e);)s(e.slice(i,r.index)),n.push(r[0]),i=r.index+r[0].length,o++
return s(e.slice(i)),n.join('')
function s(e){n.push(t(e,o,!e))}}function Rn(e){if(!e._compiled){
const t=(e.atBreak?'[\\r\\n][\\t ]*':'')+(e.before?'(?:'+e.before+')':'')
e._compiled=new RegExp((t?'('+t+')':'')+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?'\\':'')+e.character+(e.after?'(?:'+e.after+')':''),'g')
}return e._compiled}function bn(e,t){
return Ln(e,t.inConstruct,!0)&&!Ln(e,t.notInConstruct,!1)}
function Ln(e,t,n){if(!t)return n
'string'==typeof t&&(t=[t])
let r=-1
for(;++r<t.length;)if(e.includes(t[r]))return!0
return!1}function xn(e,t,n){
const r=(n.before||'')+(t||'')+(n.after||''),i=[],o=[],s={}
let a=-1
for(;++a<e.unsafe.length;){const t=e.unsafe[a]
if(!bn(e.stack,t))continue
const n=Rn(t)
let o
for(;o=n.exec(r);){
const e='before'in t||Boolean(t.atBreak),n='after'in t,r=o.index+(e?o[1].length:0)
i.includes(r)?(s[r].before&&!e&&(s[r].before=!1),s[r].after&&!n&&(s[r].after=!1)):(i.push(r),
s[r]={before:e,after:n})}}i.sort(Mn)
let l=n.before?n.before.length:0
const c=r.length-(n.after?n.after.length:0)
for(a=-1;++a<i.length;){const e=i[a]
e<l||e>=c||(e+1<c&&i[a+1]===e+1&&s[e].after&&!s[e+1].before&&!s[e+1].after||i[a-1]===e-1&&s[e].before&&!s[e-1].before&&!s[e-1].after||(l!==e&&o.push(Pn(r.slice(l,e),'\\')),
l=e,
!/[!-/:-@[-`{-~]/.test(r.charAt(e))||n.encode&&n.encode.includes(r.charAt(e))?(o.push('&#x'+r.charCodeAt(e).toString(16).toUpperCase()+';'),
l++):o.push('\\')))}return o.push(Pn(r.slice(l,c),n.after)),o.join('')
}function Mn(e,t){return e-t}function Pn(e,t){
const n=/\\(?=[!-/:-@[-`{-~])/g,r=[],i=[],o=e+t
let s,a=-1,l=0
for(;s=n.exec(o);)r.push(s.index)
for(;++a<r.length;)l!==r[a]&&i.push(e.slice(l,r[a])),i.push('\\'),l=r[a]
return i.push(e.slice(l)),i.join('')}function vn(){
return e.peek=function(){return'['},{unsafe:[{character:'[',
inConstruct:['phrasing','label','reference']}],handlers:{
footnoteDefinition:function(e,t,n,r){const i=On(r)
let o=i.move('[^')
const s=n.enter('footnoteDefinition'),a=n.enter('label')
return o+=i.move(xn(n,kn(e),{...i.current(),before:o,after:']'
})),a(),o+=i.move(']:'+(e.children&&e.children.length>0?' ':'')),
i.shift(4),o+=i.move(In(Sn(e,n,i.current()),(function(e,t,n){
if(t)return(n?'':'    ')+e
return e}))),s(),o},footnoteReference:e}}
function e(e,t,n,r){const i=On(r)
let o=i.move('[^')
const s=n.enter('footnoteReference'),a=n.enter('reference')
return o+=i.move(xn(n,kn(e),{...i.current(),before:o,after:']'
})),a(),s(),o+=i.move(']'),o}}function Dn(e,t,n){
const r=t.indexStack,i=e.children||[],o=[]
let s=-1,a=n.before
r.push(-1)
let l=On(n)
for(;++s<i.length;){const c=i[s]
let u
if(r[r.length-1]=s,s+1<i.length){let n=t.handle.handlers[i[s+1].type]
n&&n.peek&&(n=n.peek),u=n?n(i[s+1],e,t,{before:'',after:'',
...l.current()}).charAt(0):''}else u=n.after
o.length>0&&('\r'===a||'\n'===a)&&'html'===c.type&&(o[o.length-1]=o[o.length-1].replace(/(\r?\n|\r)$/,' '),
a=' ',l=On(n),l.move(o.join(''))),o.push(l.move(t.handle(c,e,t,{
...l.current(),before:a,after:u}))),a=o[o.length-1].slice(-1)}
return r.pop(),o.join('')}const Fn={canContainEols:['delete'],enter:{
strikethrough:function(e){this.enter({type:'delete',children:[]},e)}},
exit:{strikethrough:function(e){this.exit(e)}}},Hn={unsafe:[{
character:'~',inConstruct:'phrasing',
notInConstruct:['autolink','destinationLiteral','destinationRaw','reference','titleQuote','titleApostrophe']
}],handlers:{delete:wn}}
function wn(e,t,n,r){const i=On(r),o=n.enter('emphasis')
let s=i.move('~~')
return s+=Dn(e,n,{...i.current(),before:s,after:'~'
}),s+=i.move('~~'),o(),s}function Bn(e,t,n){
let r=e.value||'',i='`',o=-1
for(;new RegExp('(^|[^`])'+i+'([^`]|$)').test(r);)i+='`'
for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=' '+r+' ');++o<n.unsafe.length;){
const e=n.unsafe[o],t=Rn(e)
let i
if(e.atBreak)for(;i=t.exec(r);){let e=i.index
10===r.charCodeAt(e)&&13===r.charCodeAt(e-1)&&e--,r=r.slice(0,e)+' '+r.slice(i.index+1)
}}return i+r+i}function Un(e){return e.length}function Gn(e){
const t='string'==typeof e?e.codePointAt(0):0
return 67===t||99===t?99:76===t||108===t?108:82===t||114===t?114:0}
wn.peek=function(){return'~'},Bn.peek=function(){return'`'}
const Kn={enter:{table:function(e){const t=e._align
this.enter({type:'table',align:t.map((e=>'none'===e?null:e)),
children:[]},e),this.setData('inTable',!0)},tableData:jn,
tableHeader:jn,tableRow:function(e){this.enter({type:'tableRow',
children:[]},e)}},exit:{codeText:function(e){let t=this.resume()
this.getData('inTable')&&(t=t.replace(/\\([\\|])/g,Yn))
this.stack[this.stack.length-1].value=t,this.exit(e)},
table:function(e){this.exit(e),this.setData('inTable')},tableData:zn,
tableHeader:zn,tableRow:zn}}
function zn(e){this.exit(e)}function jn(e){this.enter({
type:'tableCell',children:[]},e)}function Yn(e,t){return'|'===t?t:e}
function Qn(e){
const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,o=n?' ':'|'
return{unsafe:[{character:'\r',inConstruct:'tableCell'},{
character:'\n',inConstruct:'tableCell'},{atBreak:!0,character:'|',
after:'[\t :-]'},{character:'|',inConstruct:'tableCell'},{atBreak:!0,
character:':',after:'-'},{atBreak:!0,character:'-',after:'[:|-]'}],
handlers:{table:function(e,t,n,r){return a(function(e,t,n){
const r=e.children
let i=-1
const o=[],s=t.enter('table')
for(;++i<r.length;)o[i]=l(r[i],t,n)
return s(),o}(e,n,r),e.align)},tableRow:function(e,t,n,r){
const i=a([l(e,n,r)])
return i.slice(0,i.indexOf('\n'))},tableCell:s,
inlineCode:function(e,t,n){let r=Bn(e,0,n)
n.stack.includes('tableCell')&&(r=r.replace(/\|/g,'\\$&'))
return r}}}
function s(e,t,n,r){
const i=n.enter('tableCell'),s=n.enter('phrasing'),a=Dn(e,n,{...r,
before:o,after:o})
return s(),i(),a}function a(e,t){return function(e,t={}){
const n=(t.align||[]).concat(),r=t.stringLength||Un,i=[],o=[],s=[],a=[]
let l=0,c=-1
for(;++c<e.length;){const n=[],i=[]
let h=-1
for(e[c].length>l&&(l=e[c].length);++h<e[c].length;){
const o=null==(u=e[c][h])?'':String(u)
if(!1!==t.alignDelimiters){const e=r(o)
i[h]=e,(void 0===a[h]||e>a[h])&&(a[h]=e)}n.push(o)}o[c]=n,s[c]=i}var u
let h=-1
if('object'==typeof n&&'length'in n)for(;++h<l;)i[h]=Gn(n[h])
else{const e=Gn(n)
for(;++h<l;)i[h]=e}h=-1
const p=[],f=[]
for(;++h<l;){const e=i[h]
let n='',r=''
99===e?(n=':',r=':'):108===e?n=':':114===e&&(r=':')
let o=!1===t.alignDelimiters?1:Math.max(1,a[h]-n.length-r.length)
const s=n+'-'.repeat(o)+r
!1!==t.alignDelimiters&&(o=n.length+o+r.length,o>a[h]&&(a[h]=o),f[h]=o),p[h]=s
}o.splice(1,0,p),s.splice(1,0,f),c=-1
const m=[]
for(;++c<o.length;){const e=o[c],n=s[c]
h=-1
const r=[]
for(;++h<l;){const o=e[h]||''
let s='',c=''
if(!1!==t.alignDelimiters){const e=a[h]-(n[h]||0),t=i[h]
114===t?s=' '.repeat(e):99===t?e%2?(s=' '.repeat(e/2+.5),c=' '.repeat(e/2-.5)):(s=' '.repeat(e/2),
c=s):c=' '.repeat(e)}
!1===t.delimiterStart||h||r.push('|'),!1===t.padding||!1===t.alignDelimiters&&''===o||!1===t.delimiterStart&&!h||r.push(' '),
!1!==t.alignDelimiters&&r.push(s),
r.push(o),!1!==t.alignDelimiters&&r.push(c),!1!==t.padding&&r.push(' '),
!1===t.delimiterEnd&&h===l-1||r.push('|')}
m.push(!1===t.delimiterEnd?r.join('').replace(/ +$/,''):r.join(''))}
return m.join('\n')}(e,{align:t,alignDelimiters:r,padding:n,
stringLength:i})}function l(e,t,n){const r=e.children
let i=-1
const o=[],a=t.enter('tableRow')
for(;++i<r.length;)o[i]=s(r[i],0,t,n)
return a(),o}}function Wn(e,t,n,r){const i=function(e){
const t=e.options.listItemIndent||'tab'
if(1===t||'1'===t)return'one'
if('tab'!==t&&'one'!==t&&'mixed'!==t)throw new Error('Cannot serialize items with `'+t+'` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`')
return t}(n)
let o=n.bulletCurrent||function(e){const t=e.options.bullet||'*'
if('*'!==t&&'+'!==t&&'-'!==t)throw new Error('Cannot serialize items with `'+t+'` for `options.bullet`, expected `*`, `+`, or `-`')
return t}(n)
t&&'list'===t.type&&t.ordered&&(o=('number'==typeof t.start&&t.start>-1?t.start:1)+(!1===n.options.incrementListMarker?0:t.children.indexOf(e))+o)
let s=o.length+1
;('tab'===i||'mixed'===i&&(t&&'list'===t.type&&t.spread||e.spread))&&(s=4*Math.ceil(s/4))
const a=On(r)
a.move(o+' '.repeat(s-o.length)),a.shift(s)
const l=n.enter('listItem'),c=In(Sn(e,n,a.current()),(function(e,t,n){
if(t)return(n?'':' '.repeat(s))+e
return(n?o:o+' '.repeat(s-o.length))+e}))
return l(),c}const qn={exit:{taskListCheckValueChecked:Xn,
taskListCheckValueUnchecked:Xn,paragraph:function(e){
const t=this.stack[this.stack.length-2],n=this.stack[this.stack.length-1],r=t.children,i=n.children[0]
let o,s=-1
if(t&&'listItem'===t.type&&'boolean'==typeof t.checked&&i&&'text'===i.type){
for(;++s<r.length;){const e=r[s]
if('paragraph'===e.type){o=e
break}}
o===n&&(i.value=i.value.slice(1),0===i.value.length?n.children.shift():n.position&&i.position&&'number'==typeof i.position.start.offset&&(i.position.start.column++,
i.position.start.offset++,
n.position.start=Object.assign({},i.position.start)))}this.exit(e)}}
},Vn={unsafe:[{atBreak:!0,character:'-',after:'[:|-]'}],handlers:{
listItem:function(e,t,n,r){
const i=e.children[0],o='boolean'==typeof e.checked&&i&&'paragraph'===i.type,s='['+(e.checked?'x':' ')+'] ',a=On(r)
o&&a.move(s)
let l=Wn(e,t,n,{...r,...a.current()})
o&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,(function(e){
return e+s})))
return l}}}
function Xn(e){
this.stack[this.stack.length-2].checked='taskListCheckValueChecked'===e.type
}function $n(e={}){const t=this.data()
function n(e,n){(t[e]?t[e]:t[e]=[]).push(n)}
n('micromarkExtensions',function(e){return K([Dt,{document:{91:{
tokenize:Vt,continuation:{tokenize:Xt},exit:$t}},text:{91:{tokenize:qt
},93:{add:'after',tokenize:Qt,resolveTo:Wt}}},Zt(e),Jt,nn])
}(e)),n('fromMarkdownExtensions',[En,{enter:{
gfmFootnoteDefinition:function(e){this.enter({
type:'footnoteDefinition',identifier:'',label:'',children:[]},e)},
gfmFootnoteDefinitionLabelString:function(){this.buffer()},
gfmFootnoteCall:function(e){this.enter({type:'footnoteReference',
identifier:'',label:''},e)},gfmFootnoteCallString:function(){
this.buffer()}},exit:{gfmFootnoteDefinition:function(e){this.exit(e)},
gfmFootnoteDefinitionLabelString:function(e){
const t=this.resume(),n=this.stack[this.stack.length-1]
n.label=t,n.identifier=xe(this.sliceSerialize(e)).toLowerCase()},
gfmFootnoteCall:function(e){this.exit(e)},
gfmFootnoteCallString:function(e){
const t=this.resume(),n=this.stack[this.stack.length-1]
n.label=t,n.identifier=xe(this.sliceSerialize(e)).toLowerCase()}}
},Fn,Kn,qn]),n('toMarkdownExtensions',function(e){return{
extensions:[gn,vn(),Hn,Qn(e),Vn]}}(e))}var Zn=function(e,t,n){var r={
type:String(e)}
return null!=n||'string'!=typeof t&&!Array.isArray(t)?Object.assign(r,t):n=t,Array.isArray(n)?r.children=n:null!=n&&(r.value=String(n)),
r}
const Jn={}.hasOwnProperty
function er(e,t){const n=t.data||{}
return'value'in t&&!(Jn.call(n,'hName')||Jn.call(n,'hProperties')||Jn.call(n,'hChildren'))?e.augment(t,Zn('text',t.value)):e(t,'div',rr(e,t))
}function tr(e,t,n){const r=t&&t.type
let i
if(!r)throw new Error('Expected node, got `'+t+'`')
return i=Jn.call(e.handlers,r)?e.handlers[r]:e.passThrough&&e.passThrough.includes(r)?nr:e.unknownHandler,
('function'==typeof i?i:er)(e,t,n)}function nr(e,t){
return'children'in t?{...t,children:rr(e,t)}:t}function rr(e,t){
const n=[]
if('children'in t){const r=t.children
let i=-1
for(;++i<r.length;){const o=tr(e,r[i],t)
if(o){
if(i&&'break'===r[i-1].type&&(Array.isArray(o)||'text'!==o.type||(o.value=o.value.replace(/^\s+/,'')),
!Array.isArray(o)&&'element'===o.type)){const e=o.children[0]
e&&'text'===e.type&&(e.value=e.value.replace(/^\s+/,''))}
Array.isArray(o)?n.push(...o):n.push(o)}}}return n}
const ir=function(e,t,n,r){
'function'==typeof t&&'function'!=typeof n&&(r=n,n=t,
t=null),un(e,t,(function(e,t){const r=t[t.length-1]
return n(e,r?r.children.indexOf(e):null,r)}),r)
},or=ar('start'),sr=ar('end')
function ar(e){return function(t){
const n=t&&t.position&&t.position[e]||{}
return{line:n.line||null,column:n.column||null,
offset:n.offset>-1?n.offset:null}}}const lr={}.hasOwnProperty
function cr(e){return String(e||'').toUpperCase()}function ur(e,t){
const n=[]
let r=-1
for(t&&n.push(Zn('text','\n'));++r<e.length;)r&&n.push(Zn('text','\n')),n.push(e[r])
return t&&e.length>0&&n.push(Zn('text','\n')),n}function hr(e,t){
const n=String(t.identifier),r=jt(n.toLowerCase()),i=e.footnoteOrder.indexOf(n)
let o
;-1===i?(e.footnoteOrder.push(n),e.footnoteCounts[n]=1,o=e.footnoteOrder.length):(e.footnoteCounts[n]++,
o=i+1)
const s=e.footnoteCounts[n]
return e(t,'sup',[e(t.position,'a',{href:'#'+e.clobberPrefix+'fn-'+r,
id:e.clobberPrefix+'fnref-'+r+(s>1?'-'+s:''),dataFootnoteRef:!0,
ariaDescribedBy:'footnote-label'},[Zn('text',String(o))])])}
function pr(e,t){const n=t.referenceType
let r=']'
if('collapsed'===n?r+='[]':'full'===n&&(r+='['+(t.label||t.identifier)+']'),'imageReference'===t.type)return Zn('text','!['+t.alt+r)
const i=rr(e,t),o=i[0]
o&&'text'===o.type?o.value='['+o.value:i.unshift(Zn('text','['))
const s=i[i.length-1]
return s&&'text'===s.type?s.value+=r:i.push(Zn('text',r)),i}
function fr(e){const t=e.spread
return null==t?e.children.length>1:t}function mr(e,t,n){
let r=0,i=e.length
if(t){let t=e.codePointAt(r)
for(;9===t||32===t;)r++,t=e.codePointAt(r)}if(n){
let t=e.codePointAt(i-1)
for(;9===t||32===t;)i--,t=e.codePointAt(i-1)}
return i>r?e.slice(r,i):''}const dr={blockquote:function(e,t){
return e(t,'blockquote',ur(rr(e,t),!0))},break:function(e,t){
return[e(t,'br'),Zn('text','\n')]},code:function(e,t){
const n=t.value?t.value+'\n':'',r=t.lang&&t.lang.match(/^[^ \t]+(?=[ \t]|$)/),i={}
r&&(i.className=['language-'+r])
const o=e(t,'code',i,[Zn('text',n)])
return t.meta&&(o.data={meta:t.meta}),e(t.position,'pre',[o])},
delete:function(e,t){return e(t,'del',rr(e,t))},
emphasis:function(e,t){return e(t,'em',rr(e,t))},footnoteReference:hr,
footnote:function(e,t){const n=e.footnoteById
let r=1
for(;r in n;)r++
const i=String(r)
return n[i]={type:'footnoteDefinition',identifier:i,children:[{
type:'paragraph',children:t.children}],position:t.position},hr(e,{
type:'footnoteReference',identifier:i,position:t.position})},
heading:function(e,t){return e(t,'h'+t.depth,rr(e,t))},
html:function(e,t){
return e.dangerous?e.augment(t,Zn('raw',t.value)):null},
imageReference:function(e,t){const n=e.definition(t.identifier)
if(!n)return pr(e,t)
const r={src:jt(n.url||''),alt:t.alt}
return null!==n.title&&void 0!==n.title&&(r.title=n.title),e(t,'img',r)
},image:function(e,t){const n={src:jt(t.url),alt:t.alt}
return null!==t.title&&void 0!==t.title&&(n.title=t.title),e(t,'img',n)
},inlineCode:function(e,t){
return e(t,'code',[Zn('text',t.value.replace(/\r?\n|\r/g,' '))])},
linkReference:function(e,t){const n=e.definition(t.identifier)
if(!n)return pr(e,t)
const r={href:jt(n.url||'')}
return null!==n.title&&void 0!==n.title&&(r.title=n.title),e(t,'a',r,rr(e,t))
},link:function(e,t){const n={href:jt(t.url)}
return null!==t.title&&void 0!==t.title&&(n.title=t.title),e(t,'a',n,rr(e,t))
},listItem:function(e,t,n){const r=rr(e,t),i=n?function(e){
let t=e.spread
const n=e.children
let r=-1
for(;!t&&++r<n.length;)t=fr(n[r])
return Boolean(t)}(n):fr(t),o={},s=[]
if('boolean'==typeof t.checked){let n
r[0]&&'element'===r[0].type&&'p'===r[0].tagName?n=r[0]:(n=e(null,'p',[]),r.unshift(n)),
n.children.length>0&&n.children.unshift(Zn('text',' ')),
n.children.unshift(e(null,'input',{type:'checkbox',checked:t.checked,
disabled:!0})),o.className=['task-list-item']}let a=-1
for(;++a<r.length;){const e=r[a]
;(i||0!==a||'element'!==e.type||'p'!==e.tagName)&&s.push(Zn('text','\n')),
'element'!==e.type||'p'!==e.tagName||i?s.push(e):s.push(...e.children)
}const l=r[r.length-1]
return!l||!i&&'tagName'in l&&'p'===l.tagName||s.push(Zn('text','\n')),e(t,'li',o,s)
},list:function(e,t){const n={},r=t.ordered?'ol':'ul',i=rr(e,t)
let o=-1
for('number'==typeof t.start&&1!==t.start&&(n.start=t.start);++o<i.length;){
const e=i[o]
if('element'===e.type&&'li'===e.tagName&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes('task-list-item')){
n.className=['contains-task-list']
break}}return e(t,r,n,ur(i,!0))},paragraph:function(e,t){
return e(t,'p',rr(e,t))},root:function(e,t){
return e.augment(t,Zn('root',ur(rr(e,t))))},strong:function(e,t){
return e(t,'strong',rr(e,t))},table:function(e,t){const n=t.children
let r=-1
const i=t.align||[],o=[]
for(;++r<n.length;){const s=n[r].children,a=0===r?'th':'td',l=[]
let c=-1
const u=t.align?i.length:s.length
for(;++c<u;){const t=s[c]
l.push(e(t,a,{align:i[c]},t?rr(e,t):[]))}o[r]=e(n[r],'tr',ur(l,!0))}
return e(t,'table',ur([e(o[0].position,'thead',ur([o[0]],!0))].concat(o[1]?e({
start:or(o[1]),end:sr(o[o.length-1])
},'tbody',ur(o.slice(1),!0)):[]),!0))},text:function(e,t){
return e.augment(t,Zn('text',function(e){
const t=String(e),n=/\r?\n|\r/g
let r=n.exec(t),i=0
const o=[]
for(;r;)o.push(mr(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t)
return o.push(mr(t.slice(i),i>0,!1)),o.join('')}(String(t.value))))},
thematicBreak:function(e,t){return e(t,'hr')},toml:Tr,yaml:Tr,
definition:Tr,footnoteDefinition:Tr}
function Tr(){return null}const Er={}.hasOwnProperty
function gr(e,t){const n=t||{},r=n.allowDangerousHtml||!1,i={}
return s.dangerous=r,s.clobberPrefix=void 0===n.clobberPrefix||null===n.clobberPrefix?'user-content-':n.clobberPrefix,
s.footnoteLabel=n.footnoteLabel||'Footnotes',
s.footnoteLabelTagName=n.footnoteLabelTagName||'h2',
s.footnoteLabelProperties=n.footnoteLabelProperties||{
className:['sr-only']
},s.footnoteBackLabel=n.footnoteBackLabel||'Back to content',
s.definition=function(e){const t=Object.create(null)
if(!e||!e.type)throw new Error('mdast-util-definitions expected node')
return ir(e,'definition',(e=>{const n=cr(e.identifier)
n&&!lr.call(t,n)&&(t[n]=e)})),function(e){const n=cr(e)
return n&&lr.call(t,n)?t[n]:null}
}(e),s.footnoteById=i,s.footnoteOrder=[],s.footnoteCounts={},
s.augment=o,s.handlers={...dr,...n.handlers
},s.unknownHandler=n.unknownHandler,s.passThrough=n.passThrough,
ir(e,'footnoteDefinition',(e=>{
const t=String(e.identifier).toUpperCase()
Er.call(i,t)||(i[t]=e)})),s
function o(e,t){if(e&&'data'in e&&e.data){const n=e.data
n.hName&&('element'!==t.type&&(t={type:'element',tagName:'',
properties:{},children:[]
}),t.tagName=n.hName),'element'===t.type&&n.hProperties&&(t.properties={
...t.properties,...n.hProperties
}),'children'in t&&t.children&&n.hChildren&&(t.children=n.hChildren)}
if(e){const r='type'in e?e:{position:e}
;(n=r)&&n.position&&n.position.start&&n.position.start.line&&n.position.start.column&&n.position.end&&n.position.end.line&&n.position.end.column&&(t.position={
start:or(r),end:sr(r)})}var n
return t}function s(e,t,n,r){return Array.isArray(n)&&(r=n,n={}),o(e,{
type:'element',tagName:t,properties:n||{},children:r||[]})}}
function _r(e,t){const n=gr(e,t),r=tr(n,e,null),i=function(e){let t=-1
const n=[]
for(;++t<e.footnoteOrder.length;){
const r=e.footnoteById[e.footnoteOrder[t].toUpperCase()]
if(!r)continue
const i=rr(e,r),o=String(r.identifier),s=jt(o.toLowerCase())
let a=0
const l=[]
for(;++a<=e.footnoteCounts[o];){const t={type:'element',tagName:'a',
properties:{href:'#'+e.clobberPrefix+'fnref-'+s+(a>1?'-'+a:''),
dataFootnoteBackref:!0,className:['data-footnote-backref'],
ariaLabel:e.footnoteBackLabel},children:[{type:'text',value:'↩'}]}
a>1&&t.children.push({type:'element',tagName:'sup',children:[{
type:'text',value:String(a)}]}),l.length>0&&l.push({type:'text',
value:' '}),l.push(t)}const c=i[i.length-1]
if(c&&'element'===c.type&&'p'===c.tagName){
const e=c.children[c.children.length-1]
e&&'text'===e.type?e.value+=' ':c.children.push({type:'text',value:' '
}),c.children.push(...l)}else i.push(...l)
const u={type:'element',tagName:'li',properties:{
id:e.clobberPrefix+'fn-'+s},children:ur(i,!0)}
r.position&&(u.position=r.position),n.push(u)}
return 0===n.length?null:{type:'element',tagName:'section',
properties:{dataFootnotes:!0,className:['footnotes']},children:[{
type:'element',tagName:e.footnoteLabelTagName,properties:{
...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
id:'footnote-label'},children:[Zn('text',e.footnoteLabel)]},{
type:'text',value:'\n'},{type:'element',tagName:'ol',properties:{},
children:ur(n,!0)},{type:'text',value:'\n'}]}}(n)
return i&&r.children.push(Zn('text','\n'),i),Array.isArray(r)?{
type:'root',children:r}:r}var Ar=function(e,t){
return e&&'run'in e?function(e,t){return(n,r,i)=>{
e.run(_r(n,t),r,(e=>{i(e)}))}}(e,t):function(e){return t=>_r(t,e)
}(e||t)}
var Cr={}
const Nr=[65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111]
Cr.REPLACEMENT_CHARACTER='�',Cr.CODE_POINTS={EOF:-1,NULL:0,
TABULATION:9,CARRIAGE_RETURN:13,LINE_FEED:10,FORM_FEED:12,SPACE:32,
EXCLAMATION_MARK:33,QUOTATION_MARK:34,NUMBER_SIGN:35,AMPERSAND:38,
APOSTROPHE:39,HYPHEN_MINUS:45,SOLIDUS:47,DIGIT_0:48,DIGIT_9:57,
SEMICOLON:59,LESS_THAN_SIGN:60,EQUALS_SIGN:61,GREATER_THAN_SIGN:62,
QUESTION_MARK:63,LATIN_CAPITAL_A:65,LATIN_CAPITAL_F:70,
LATIN_CAPITAL_X:88,LATIN_CAPITAL_Z:90,RIGHT_SQUARE_BRACKET:93,
GRAVE_ACCENT:96,LATIN_SMALL_A:97,LATIN_SMALL_F:102,LATIN_SMALL_X:120,
LATIN_SMALL_Z:122,REPLACEMENT_CHARACTER:65533
},Cr.CODE_POINT_SEQUENCES={DASH_DASH_STRING:[45,45],
DOCTYPE_STRING:[68,79,67,84,89,80,69],
CDATA_START_STRING:[91,67,68,65,84,65,91],
SCRIPT_STRING:[115,99,114,105,112,116],
PUBLIC_STRING:[80,85,66,76,73,67],SYSTEM_STRING:[83,89,83,84,69,77]
},Cr.isSurrogate=function(e){return e>=55296&&e<=57343
},Cr.isSurrogatePair=function(e){return e>=56320&&e<=57343
},Cr.getSurrogatePairCodePoint=function(e,t){
return 1024*(e-55296)+9216+t},Cr.isControlCodePoint=function(e){
return 32!==e&&10!==e&&13!==e&&9!==e&&12!==e&&e>=1&&e<=31||e>=127&&e<=159
},Cr.isUndefinedCodePoint=function(e){
return e>=64976&&e<=65007||Nr.indexOf(e)>-1}
var kr={
controlCharacterInInputStream:'control-character-in-input-stream',
noncharacterInInputStream:'noncharacter-in-input-stream',
surrogateInInputStream:'surrogate-in-input-stream',
nonVoidHtmlElementStartTagWithTrailingSolidus:'non-void-html-element-start-tag-with-trailing-solidus',
endTagWithAttributes:'end-tag-with-attributes',
endTagWithTrailingSolidus:'end-tag-with-trailing-solidus',
unexpectedSolidusInTag:'unexpected-solidus-in-tag',
unexpectedNullCharacter:'unexpected-null-character',
unexpectedQuestionMarkInsteadOfTagName:'unexpected-question-mark-instead-of-tag-name',
invalidFirstCharacterOfTagName:'invalid-first-character-of-tag-name',
unexpectedEqualsSignBeforeAttributeName:'unexpected-equals-sign-before-attribute-name',
missingEndTagName:'missing-end-tag-name',
unexpectedCharacterInAttributeName:'unexpected-character-in-attribute-name',
unknownNamedCharacterReference:'unknown-named-character-reference',
missingSemicolonAfterCharacterReference:'missing-semicolon-after-character-reference',
unexpectedCharacterAfterDoctypeSystemIdentifier:'unexpected-character-after-doctype-system-identifier',
unexpectedCharacterInUnquotedAttributeValue:'unexpected-character-in-unquoted-attribute-value',
eofBeforeTagName:'eof-before-tag-name',eofInTag:'eof-in-tag',
missingAttributeValue:'missing-attribute-value',
missingWhitespaceBetweenAttributes:'missing-whitespace-between-attributes',
missingWhitespaceAfterDoctypePublicKeyword:'missing-whitespace-after-doctype-public-keyword',
missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers:'missing-whitespace-between-doctype-public-and-system-identifiers',
missingWhitespaceAfterDoctypeSystemKeyword:'missing-whitespace-after-doctype-system-keyword',
missingQuoteBeforeDoctypePublicIdentifier:'missing-quote-before-doctype-public-identifier',
missingQuoteBeforeDoctypeSystemIdentifier:'missing-quote-before-doctype-system-identifier',
missingDoctypePublicIdentifier:'missing-doctype-public-identifier',
missingDoctypeSystemIdentifier:'missing-doctype-system-identifier',
abruptDoctypePublicIdentifier:'abrupt-doctype-public-identifier',
abruptDoctypeSystemIdentifier:'abrupt-doctype-system-identifier',
cdataInHtmlContent:'cdata-in-html-content',
incorrectlyOpenedComment:'incorrectly-opened-comment',
eofInScriptHtmlCommentLikeText:'eof-in-script-html-comment-like-text',
eofInDoctype:'eof-in-doctype',nestedComment:'nested-comment',
abruptClosingOfEmptyComment:'abrupt-closing-of-empty-comment',
eofInComment:'eof-in-comment',
incorrectlyClosedComment:'incorrectly-closed-comment',
eofInCdata:'eof-in-cdata',
absenceOfDigitsInNumericCharacterReference:'absence-of-digits-in-numeric-character-reference',
nullCharacterReference:'null-character-reference',
surrogateCharacterReference:'surrogate-character-reference',
characterReferenceOutsideUnicodeRange:'character-reference-outside-unicode-range',
controlCharacterReference:'control-character-reference',
noncharacterCharacterReference:'noncharacter-character-reference',
missingWhitespaceBeforeDoctypeName:'missing-whitespace-before-doctype-name',
missingDoctypeName:'missing-doctype-name',
invalidCharacterSequenceAfterDoctypeName:'invalid-character-sequence-after-doctype-name',
duplicateAttribute:'duplicate-attribute',
nonConformingDoctype:'non-conforming-doctype',
missingDoctype:'missing-doctype',misplacedDoctype:'misplaced-doctype',
endTagWithoutMatchingOpenElement:'end-tag-without-matching-open-element',
closingOfElementWithOpenChildElements:'closing-of-element-with-open-child-elements',
disallowedContentInNoscriptInHead:'disallowed-content-in-noscript-in-head',
openElementsLeftAfterEof:'open-elements-left-after-eof',
abandonedHeadElementChild:'abandoned-head-element-child',
misplacedStartTagForHeadElement:'misplaced-start-tag-for-head-element',
nestedNoscriptInHead:'nested-noscript-in-head',
eofInElementThatCanContainOnlyText:'eof-in-element-that-can-contain-only-text'
}
const Or=Cr,Sr=kr,yr=Or.CODE_POINTS
var Ir=class{constructor(){
this.html=null,this.pos=-1,this.lastGapPos=-1,this.lastCharPos=-1,
this.gapStack=[],
this.skipNextNewLine=!1,this.lastChunkWritten=!1,this.endOfChunkHit=!1,
this.bufferWaterline=65536}_err(){}_addGap(){
this.gapStack.push(this.lastGapPos),this.lastGapPos=this.pos}
_processSurrogate(e){if(this.pos!==this.lastCharPos){
const t=this.html.charCodeAt(this.pos+1)
if(Or.isSurrogatePair(t))return this.pos++,this._addGap(),Or.getSurrogatePairCodePoint(e,t)
}else if(!this.lastChunkWritten)return this.endOfChunkHit=!0,yr.EOF
return this._err(Sr.surrogateInInputStream),e}dropParsedChunk(){
this.pos>this.bufferWaterline&&(this.lastCharPos-=this.pos,
this.html=this.html.substring(this.pos),
this.pos=0,this.lastGapPos=-1,this.gapStack=[])}write(e,t){
this.html?this.html+=e:this.html=e,
this.lastCharPos=this.html.length-1,this.endOfChunkHit=!1,
this.lastChunkWritten=t}insertHtmlAtCurrentPos(e){
this.html=this.html.substring(0,this.pos+1)+e+this.html.substring(this.pos+1,this.html.length),
this.lastCharPos=this.html.length-1,this.endOfChunkHit=!1}advance(){
if(this.pos++,
this.pos>this.lastCharPos)return this.endOfChunkHit=!this.lastChunkWritten,
yr.EOF
let e=this.html.charCodeAt(this.pos)
if(this.skipNextNewLine&&e===yr.LINE_FEED)return this.skipNextNewLine=!1,this._addGap(),
this.advance()
if(e===yr.CARRIAGE_RETURN)return this.skipNextNewLine=!0,yr.LINE_FEED
this.skipNextNewLine=!1,Or.isSurrogate(e)&&(e=this._processSurrogate(e))
return e>31&&e<127||e===yr.LINE_FEED||e===yr.CARRIAGE_RETURN||e>159&&e<64976||this._checkForProblematicCharacters(e),
e}_checkForProblematicCharacters(e){
Or.isControlCodePoint(e)?this._err(Sr.controlCharacterInInputStream):Or.isUndefinedCodePoint(e)&&this._err(Sr.noncharacterInInputStream)
}retreat(){
this.pos===this.lastGapPos&&(this.lastGapPos=this.gapStack.pop(),this.pos--),
this.pos--}
},Rr=new Uint16Array([4,52,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,106,303,412,810,1432,1701,1796,1987,2114,2360,2420,2484,3170,3251,4140,4393,4575,4610,5106,5512,5728,6117,6274,6315,6345,6427,6516,7002,7910,8733,9323,9870,10170,10631,10893,11318,11386,11467,12773,13092,14474,14922,15448,15542,16419,17666,18166,18611,19004,19095,19298,19397,4,16,69,77,97,98,99,102,103,108,109,110,111,112,114,115,116,117,140,150,158,169,176,194,199,210,216,222,226,242,256,266,283,294,108,105,103,5,198,1,59,148,1,198,80,5,38,1,59,156,1,38,99,117,116,101,5,193,1,59,167,1,193,114,101,118,101,59,1,258,4,2,105,121,182,191,114,99,5,194,1,59,189,1,194,59,1,1040,114,59,3,55349,56580,114,97,118,101,5,192,1,59,208,1,192,112,104,97,59,1,913,97,99,114,59,1,256,100,59,1,10835,4,2,103,112,232,237,111,110,59,1,260,102,59,3,55349,56632,112,108,121,70,117,110,99,116,105,111,110,59,1,8289,105,110,103,5,197,1,59,264,1,197,4,2,99,115,272,277,114,59,3,55349,56476,105,103,110,59,1,8788,105,108,100,101,5,195,1,59,292,1,195,109,108,5,196,1,59,301,1,196,4,8,97,99,101,102,111,114,115,117,321,350,354,383,388,394,400,405,4,2,99,114,327,336,107,115,108,97,115,104,59,1,8726,4,2,118,119,342,345,59,1,10983,101,100,59,1,8966,121,59,1,1041,4,3,99,114,116,362,369,379,97,117,115,101,59,1,8757,110,111,117,108,108,105,115,59,1,8492,97,59,1,914,114,59,3,55349,56581,112,102,59,3,55349,56633,101,118,101,59,1,728,99,114,59,1,8492,109,112,101,113,59,1,8782,4,14,72,79,97,99,100,101,102,104,105,108,111,114,115,117,442,447,456,504,542,547,569,573,577,616,678,784,790,796,99,121,59,1,1063,80,89,5,169,1,59,454,1,169,4,3,99,112,121,464,470,497,117,116,101,59,1,262,4,2,59,105,476,478,1,8914,116,97,108,68,105,102,102,101,114,101,110,116,105,97,108,68,59,1,8517,108,101,121,115,59,1,8493,4,4,97,101,105,111,514,520,530,535,114,111,110,59,1,268,100,105,108,5,199,1,59,528,1,199,114,99,59,1,264,110,105,110,116,59,1,8752,111,116,59,1,266,4,2,100,110,553,560,105,108,108,97,59,1,184,116,101,114,68,111,116,59,1,183,114,59,1,8493,105,59,1,935,114,99,108,101,4,4,68,77,80,84,591,596,603,609,111,116,59,1,8857,105,110,117,115,59,1,8854,108,117,115,59,1,8853,105,109,101,115,59,1,8855,111,4,2,99,115,623,646,107,119,105,115,101,67,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8754,101,67,117,114,108,121,4,2,68,81,658,671,111,117,98,108,101,81,117,111,116,101,59,1,8221,117,111,116,101,59,1,8217,4,4,108,110,112,117,688,701,736,753,111,110,4,2,59,101,696,698,1,8759,59,1,10868,4,3,103,105,116,709,717,722,114,117,101,110,116,59,1,8801,110,116,59,1,8751,111,117,114,73,110,116,101,103,114,97,108,59,1,8750,4,2,102,114,742,745,59,1,8450,111,100,117,99,116,59,1,8720,110,116,101,114,67,108,111,99,107,119,105,115,101,67,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8755,111,115,115,59,1,10799,99,114,59,3,55349,56478,112,4,2,59,67,803,805,1,8915,97,112,59,1,8781,4,11,68,74,83,90,97,99,101,102,105,111,115,834,850,855,860,865,888,903,916,921,1011,1415,4,2,59,111,840,842,1,8517,116,114,97,104,100,59,1,10513,99,121,59,1,1026,99,121,59,1,1029,99,121,59,1,1039,4,3,103,114,115,873,879,883,103,101,114,59,1,8225,114,59,1,8609,104,118,59,1,10980,4,2,97,121,894,900,114,111,110,59,1,270,59,1,1044,108,4,2,59,116,910,912,1,8711,97,59,1,916,114,59,3,55349,56583,4,2,97,102,927,998,4,2,99,109,933,992,114,105,116,105,99,97,108,4,4,65,68,71,84,950,957,978,985,99,117,116,101,59,1,180,111,4,2,116,117,964,967,59,1,729,98,108,101,65,99,117,116,101,59,1,733,114,97,118,101,59,1,96,105,108,100,101,59,1,732,111,110,100,59,1,8900,102,101,114,101,110,116,105,97,108,68,59,1,8518,4,4,112,116,117,119,1021,1026,1048,1249,102,59,3,55349,56635,4,3,59,68,69,1034,1036,1041,1,168,111,116,59,1,8412,113,117,97,108,59,1,8784,98,108,101,4,6,67,68,76,82,85,86,1065,1082,1101,1189,1211,1236,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8751,111,4,2,116,119,1089,1092,59,1,168,110,65,114,114,111,119,59,1,8659,4,2,101,111,1107,1141,102,116,4,3,65,82,84,1117,1124,1136,114,114,111,119,59,1,8656,105,103,104,116,65,114,114,111,119,59,1,8660,101,101,59,1,10980,110,103,4,2,76,82,1149,1177,101,102,116,4,2,65,82,1158,1165,114,114,111,119,59,1,10232,105,103,104,116,65,114,114,111,119,59,1,10234,105,103,104,116,65,114,114,111,119,59,1,10233,105,103,104,116,4,2,65,84,1199,1206,114,114,111,119,59,1,8658,101,101,59,1,8872,112,4,2,65,68,1218,1225,114,114,111,119,59,1,8657,111,119,110,65,114,114,111,119,59,1,8661,101,114,116,105,99,97,108,66,97,114,59,1,8741,110,4,6,65,66,76,82,84,97,1264,1292,1299,1352,1391,1408,114,114,111,119,4,3,59,66,85,1276,1278,1283,1,8595,97,114,59,1,10515,112,65,114,114,111,119,59,1,8693,114,101,118,101,59,1,785,101,102,116,4,3,82,84,86,1310,1323,1334,105,103,104,116,86,101,99,116,111,114,59,1,10576,101,101,86,101,99,116,111,114,59,1,10590,101,99,116,111,114,4,2,59,66,1345,1347,1,8637,97,114,59,1,10582,105,103,104,116,4,2,84,86,1362,1373,101,101,86,101,99,116,111,114,59,1,10591,101,99,116,111,114,4,2,59,66,1384,1386,1,8641,97,114,59,1,10583,101,101,4,2,59,65,1399,1401,1,8868,114,114,111,119,59,1,8615,114,114,111,119,59,1,8659,4,2,99,116,1421,1426,114,59,3,55349,56479,114,111,107,59,1,272,4,16,78,84,97,99,100,102,103,108,109,111,112,113,115,116,117,120,1466,1470,1478,1489,1515,1520,1525,1536,1544,1593,1609,1617,1650,1664,1668,1677,71,59,1,330,72,5,208,1,59,1476,1,208,99,117,116,101,5,201,1,59,1487,1,201,4,3,97,105,121,1497,1503,1512,114,111,110,59,1,282,114,99,5,202,1,59,1510,1,202,59,1,1069,111,116,59,1,278,114,59,3,55349,56584,114,97,118,101,5,200,1,59,1534,1,200,101,109,101,110,116,59,1,8712,4,2,97,112,1550,1555,99,114,59,1,274,116,121,4,2,83,86,1563,1576,109,97,108,108,83,113,117,97,114,101,59,1,9723,101,114,121,83,109,97,108,108,83,113,117,97,114,101,59,1,9643,4,2,103,112,1599,1604,111,110,59,1,280,102,59,3,55349,56636,115,105,108,111,110,59,1,917,117,4,2,97,105,1624,1640,108,4,2,59,84,1631,1633,1,10869,105,108,100,101,59,1,8770,108,105,98,114,105,117,109,59,1,8652,4,2,99,105,1656,1660,114,59,1,8496,109,59,1,10867,97,59,1,919,109,108,5,203,1,59,1675,1,203,4,2,105,112,1683,1689,115,116,115,59,1,8707,111,110,101,110,116,105,97,108,69,59,1,8519,4,5,99,102,105,111,115,1713,1717,1722,1762,1791,121,59,1,1060,114,59,3,55349,56585,108,108,101,100,4,2,83,86,1732,1745,109,97,108,108,83,113,117,97,114,101,59,1,9724,101,114,121,83,109,97,108,108,83,113,117,97,114,101,59,1,9642,4,3,112,114,117,1770,1775,1781,102,59,3,55349,56637,65,108,108,59,1,8704,114,105,101,114,116,114,102,59,1,8497,99,114,59,1,8497,4,12,74,84,97,98,99,100,102,103,111,114,115,116,1822,1827,1834,1848,1855,1877,1882,1887,1890,1896,1978,1984,99,121,59,1,1027,5,62,1,59,1832,1,62,109,109,97,4,2,59,100,1843,1845,1,915,59,1,988,114,101,118,101,59,1,286,4,3,101,105,121,1863,1869,1874,100,105,108,59,1,290,114,99,59,1,284,59,1,1043,111,116,59,1,288,114,59,3,55349,56586,59,1,8921,112,102,59,3,55349,56638,101,97,116,101,114,4,6,69,70,71,76,83,84,1915,1933,1944,1953,1959,1971,113,117,97,108,4,2,59,76,1925,1927,1,8805,101,115,115,59,1,8923,117,108,108,69,113,117,97,108,59,1,8807,114,101,97,116,101,114,59,1,10914,101,115,115,59,1,8823,108,97,110,116,69,113,117,97,108,59,1,10878,105,108,100,101,59,1,8819,99,114,59,3,55349,56482,59,1,8811,4,8,65,97,99,102,105,111,115,117,2005,2012,2026,2032,2036,2049,2073,2089,82,68,99,121,59,1,1066,4,2,99,116,2018,2023,101,107,59,1,711,59,1,94,105,114,99,59,1,292,114,59,1,8460,108,98,101,114,116,83,112,97,99,101,59,1,8459,4,2,112,114,2055,2059,102,59,1,8461,105,122,111,110,116,97,108,76,105,110,101,59,1,9472,4,2,99,116,2079,2083,114,59,1,8459,114,111,107,59,1,294,109,112,4,2,68,69,2097,2107,111,119,110,72,117,109,112,59,1,8782,113,117,97,108,59,1,8783,4,14,69,74,79,97,99,100,102,103,109,110,111,115,116,117,2144,2149,2155,2160,2171,2189,2194,2198,2209,2245,2307,2329,2334,2341,99,121,59,1,1045,108,105,103,59,1,306,99,121,59,1,1025,99,117,116,101,5,205,1,59,2169,1,205,4,2,105,121,2177,2186,114,99,5,206,1,59,2184,1,206,59,1,1048,111,116,59,1,304,114,59,1,8465,114,97,118,101,5,204,1,59,2207,1,204,4,3,59,97,112,2217,2219,2238,1,8465,4,2,99,103,2225,2229,114,59,1,298,105,110,97,114,121,73,59,1,8520,108,105,101,115,59,1,8658,4,2,116,118,2251,2281,4,2,59,101,2257,2259,1,8748,4,2,103,114,2265,2271,114,97,108,59,1,8747,115,101,99,116,105,111,110,59,1,8898,105,115,105,98,108,101,4,2,67,84,2293,2300,111,109,109,97,59,1,8291,105,109,101,115,59,1,8290,4,3,103,112,116,2315,2320,2325,111,110,59,1,302,102,59,3,55349,56640,97,59,1,921,99,114,59,1,8464,105,108,100,101,59,1,296,4,2,107,109,2347,2352,99,121,59,1,1030,108,5,207,1,59,2358,1,207,4,5,99,102,111,115,117,2372,2386,2391,2397,2414,4,2,105,121,2378,2383,114,99,59,1,308,59,1,1049,114,59,3,55349,56589,112,102,59,3,55349,56641,4,2,99,101,2403,2408,114,59,3,55349,56485,114,99,121,59,1,1032,107,99,121,59,1,1028,4,7,72,74,97,99,102,111,115,2436,2441,2446,2452,2467,2472,2478,99,121,59,1,1061,99,121,59,1,1036,112,112,97,59,1,922,4,2,101,121,2458,2464,100,105,108,59,1,310,59,1,1050,114,59,3,55349,56590,112,102,59,3,55349,56642,99,114,59,3,55349,56486,4,11,74,84,97,99,101,102,108,109,111,115,116,2508,2513,2520,2562,2585,2981,2986,3004,3011,3146,3167,99,121,59,1,1033,5,60,1,59,2518,1,60,4,5,99,109,110,112,114,2532,2538,2544,2548,2558,117,116,101,59,1,313,98,100,97,59,1,923,103,59,1,10218,108,97,99,101,116,114,102,59,1,8466,114,59,1,8606,4,3,97,101,121,2570,2576,2582,114,111,110,59,1,317,100,105,108,59,1,315,59,1,1051,4,2,102,115,2591,2907,116,4,10,65,67,68,70,82,84,85,86,97,114,2614,2663,2672,2728,2735,2760,2820,2870,2888,2895,4,2,110,114,2620,2633,103,108,101,66,114,97,99,107,101,116,59,1,10216,114,111,119,4,3,59,66,82,2644,2646,2651,1,8592,97,114,59,1,8676,105,103,104,116,65,114,114,111,119,59,1,8646,101,105,108,105,110,103,59,1,8968,111,4,2,117,119,2679,2692,98,108,101,66,114,97,99,107,101,116,59,1,10214,110,4,2,84,86,2699,2710,101,101,86,101,99,116,111,114,59,1,10593,101,99,116,111,114,4,2,59,66,2721,2723,1,8643,97,114,59,1,10585,108,111,111,114,59,1,8970,105,103,104,116,4,2,65,86,2745,2752,114,114,111,119,59,1,8596,101,99,116,111,114,59,1,10574,4,2,101,114,2766,2792,101,4,3,59,65,86,2775,2777,2784,1,8867,114,114,111,119,59,1,8612,101,99,116,111,114,59,1,10586,105,97,110,103,108,101,4,3,59,66,69,2806,2808,2813,1,8882,97,114,59,1,10703,113,117,97,108,59,1,8884,112,4,3,68,84,86,2829,2841,2852,111,119,110,86,101,99,116,111,114,59,1,10577,101,101,86,101,99,116,111,114,59,1,10592,101,99,116,111,114,4,2,59,66,2863,2865,1,8639,97,114,59,1,10584,101,99,116,111,114,4,2,59,66,2881,2883,1,8636,97,114,59,1,10578,114,114,111,119,59,1,8656,105,103,104,116,97,114,114,111,119,59,1,8660,115,4,6,69,70,71,76,83,84,2922,2936,2947,2956,2962,2974,113,117,97,108,71,114,101,97,116,101,114,59,1,8922,117,108,108,69,113,117,97,108,59,1,8806,114,101,97,116,101,114,59,1,8822,101,115,115,59,1,10913,108,97,110,116,69,113,117,97,108,59,1,10877,105,108,100,101,59,1,8818,114,59,3,55349,56591,4,2,59,101,2992,2994,1,8920,102,116,97,114,114,111,119,59,1,8666,105,100,111,116,59,1,319,4,3,110,112,119,3019,3110,3115,103,4,4,76,82,108,114,3030,3058,3070,3098,101,102,116,4,2,65,82,3039,3046,114,114,111,119,59,1,10229,105,103,104,116,65,114,114,111,119,59,1,10231,105,103,104,116,65,114,114,111,119,59,1,10230,101,102,116,4,2,97,114,3079,3086,114,114,111,119,59,1,10232,105,103,104,116,97,114,114,111,119,59,1,10234,105,103,104,116,97,114,114,111,119,59,1,10233,102,59,3,55349,56643,101,114,4,2,76,82,3123,3134,101,102,116,65,114,114,111,119,59,1,8601,105,103,104,116,65,114,114,111,119,59,1,8600,4,3,99,104,116,3154,3158,3161,114,59,1,8466,59,1,8624,114,111,107,59,1,321,59,1,8810,4,8,97,99,101,102,105,111,115,117,3188,3192,3196,3222,3227,3237,3243,3248,112,59,1,10501,121,59,1,1052,4,2,100,108,3202,3213,105,117,109,83,112,97,99,101,59,1,8287,108,105,110,116,114,102,59,1,8499,114,59,3,55349,56592,110,117,115,80,108,117,115,59,1,8723,112,102,59,3,55349,56644,99,114,59,1,8499,59,1,924,4,9,74,97,99,101,102,111,115,116,117,3271,3276,3283,3306,3422,3427,4120,4126,4137,99,121,59,1,1034,99,117,116,101,59,1,323,4,3,97,101,121,3291,3297,3303,114,111,110,59,1,327,100,105,108,59,1,325,59,1,1053,4,3,103,115,119,3314,3380,3415,97,116,105,118,101,4,3,77,84,86,3327,3340,3365,101,100,105,117,109,83,112,97,99,101,59,1,8203,104,105,4,2,99,110,3348,3357,107,83,112,97,99,101,59,1,8203,83,112,97,99,101,59,1,8203,101,114,121,84,104,105,110,83,112,97,99,101,59,1,8203,116,101,100,4,2,71,76,3389,3405,114,101,97,116,101,114,71,114,101,97,116,101,114,59,1,8811,101,115,115,76,101,115,115,59,1,8810,76,105,110,101,59,1,10,114,59,3,55349,56593,4,4,66,110,112,116,3437,3444,3460,3464,114,101,97,107,59,1,8288,66,114,101,97,107,105,110,103,83,112,97,99,101,59,1,160,102,59,1,8469,4,13,59,67,68,69,71,72,76,78,80,82,83,84,86,3492,3494,3517,3536,3578,3657,3685,3784,3823,3860,3915,4066,4107,1,10988,4,2,111,117,3500,3510,110,103,114,117,101,110,116,59,1,8802,112,67,97,112,59,1,8813,111,117,98,108,101,86,101,114,116,105,99,97,108,66,97,114,59,1,8742,4,3,108,113,120,3544,3552,3571,101,109,101,110,116,59,1,8713,117,97,108,4,2,59,84,3561,3563,1,8800,105,108,100,101,59,3,8770,824,105,115,116,115,59,1,8708,114,101,97,116,101,114,4,7,59,69,70,71,76,83,84,3600,3602,3609,3621,3631,3637,3650,1,8815,113,117,97,108,59,1,8817,117,108,108,69,113,117,97,108,59,3,8807,824,114,101,97,116,101,114,59,3,8811,824,101,115,115,59,1,8825,108,97,110,116,69,113,117,97,108,59,3,10878,824,105,108,100,101,59,1,8821,117,109,112,4,2,68,69,3666,3677,111,119,110,72,117,109,112,59,3,8782,824,113,117,97,108,59,3,8783,824,101,4,2,102,115,3692,3724,116,84,114,105,97,110,103,108,101,4,3,59,66,69,3709,3711,3717,1,8938,97,114,59,3,10703,824,113,117,97,108,59,1,8940,115,4,6,59,69,71,76,83,84,3739,3741,3748,3757,3764,3777,1,8814,113,117,97,108,59,1,8816,114,101,97,116,101,114,59,1,8824,101,115,115,59,3,8810,824,108,97,110,116,69,113,117,97,108,59,3,10877,824,105,108,100,101,59,1,8820,101,115,116,101,100,4,2,71,76,3795,3812,114,101,97,116,101,114,71,114,101,97,116,101,114,59,3,10914,824,101,115,115,76,101,115,115,59,3,10913,824,114,101,99,101,100,101,115,4,3,59,69,83,3838,3840,3848,1,8832,113,117,97,108,59,3,10927,824,108,97,110,116,69,113,117,97,108,59,1,8928,4,2,101,105,3866,3881,118,101,114,115,101,69,108,101,109,101,110,116,59,1,8716,103,104,116,84,114,105,97,110,103,108,101,4,3,59,66,69,3900,3902,3908,1,8939,97,114,59,3,10704,824,113,117,97,108,59,1,8941,4,2,113,117,3921,3973,117,97,114,101,83,117,4,2,98,112,3933,3952,115,101,116,4,2,59,69,3942,3945,3,8847,824,113,117,97,108,59,1,8930,101,114,115,101,116,4,2,59,69,3963,3966,3,8848,824,113,117,97,108,59,1,8931,4,3,98,99,112,3981,4e3,4045,115,101,116,4,2,59,69,3990,3993,3,8834,8402,113,117,97,108,59,1,8840,99,101,101,100,115,4,4,59,69,83,84,4015,4017,4025,4037,1,8833,113,117,97,108,59,3,10928,824,108,97,110,116,69,113,117,97,108,59,1,8929,105,108,100,101,59,3,8831,824,101,114,115,101,116,4,2,59,69,4056,4059,3,8835,8402,113,117,97,108,59,1,8841,105,108,100,101,4,4,59,69,70,84,4080,4082,4089,4100,1,8769,113,117,97,108,59,1,8772,117,108,108,69,113,117,97,108,59,1,8775,105,108,100,101,59,1,8777,101,114,116,105,99,97,108,66,97,114,59,1,8740,99,114,59,3,55349,56489,105,108,100,101,5,209,1,59,4135,1,209,59,1,925,4,14,69,97,99,100,102,103,109,111,112,114,115,116,117,118,4170,4176,4187,4205,4212,4217,4228,4253,4259,4292,4295,4316,4337,4346,108,105,103,59,1,338,99,117,116,101,5,211,1,59,4185,1,211,4,2,105,121,4193,4202,114,99,5,212,1,59,4200,1,212,59,1,1054,98,108,97,99,59,1,336,114,59,3,55349,56594,114,97,118,101,5,210,1,59,4226,1,210,4,3,97,101,105,4236,4241,4246,99,114,59,1,332,103,97,59,1,937,99,114,111,110,59,1,927,112,102,59,3,55349,56646,101,110,67,117,114,108,121,4,2,68,81,4272,4285,111,117,98,108,101,81,117,111,116,101,59,1,8220,117,111,116,101,59,1,8216,59,1,10836,4,2,99,108,4301,4306,114,59,3,55349,56490,97,115,104,5,216,1,59,4314,1,216,105,4,2,108,109,4323,4332,100,101,5,213,1,59,4330,1,213,101,115,59,1,10807,109,108,5,214,1,59,4344,1,214,101,114,4,2,66,80,4354,4380,4,2,97,114,4360,4364,114,59,1,8254,97,99,4,2,101,107,4372,4375,59,1,9182,101,116,59,1,9140,97,114,101,110,116,104,101,115,105,115,59,1,9180,4,9,97,99,102,104,105,108,111,114,115,4413,4422,4426,4431,4435,4438,4448,4471,4561,114,116,105,97,108,68,59,1,8706,121,59,1,1055,114,59,3,55349,56595,105,59,1,934,59,1,928,117,115,77,105,110,117,115,59,1,177,4,2,105,112,4454,4467,110,99,97,114,101,112,108,97,110,101,59,1,8460,102,59,1,8473,4,4,59,101,105,111,4481,4483,4526,4531,1,10939,99,101,100,101,115,4,4,59,69,83,84,4498,4500,4507,4519,1,8826,113,117,97,108,59,1,10927,108,97,110,116,69,113,117,97,108,59,1,8828,105,108,100,101,59,1,8830,109,101,59,1,8243,4,2,100,112,4537,4543,117,99,116,59,1,8719,111,114,116,105,111,110,4,2,59,97,4555,4557,1,8759,108,59,1,8733,4,2,99,105,4567,4572,114,59,3,55349,56491,59,1,936,4,4,85,102,111,115,4585,4594,4599,4604,79,84,5,34,1,59,4592,1,34,114,59,3,55349,56596,112,102,59,1,8474,99,114,59,3,55349,56492,4,12,66,69,97,99,101,102,104,105,111,114,115,117,4636,4642,4650,4681,4704,4763,4767,4771,5047,5069,5081,5094,97,114,114,59,1,10512,71,5,174,1,59,4648,1,174,4,3,99,110,114,4658,4664,4668,117,116,101,59,1,340,103,59,1,10219,114,4,2,59,116,4675,4677,1,8608,108,59,1,10518,4,3,97,101,121,4689,4695,4701,114,111,110,59,1,344,100,105,108,59,1,342,59,1,1056,4,2,59,118,4710,4712,1,8476,101,114,115,101,4,2,69,85,4722,4748,4,2,108,113,4728,4736,101,109,101,110,116,59,1,8715,117,105,108,105,98,114,105,117,109,59,1,8651,112,69,113,117,105,108,105,98,114,105,117,109,59,1,10607,114,59,1,8476,111,59,1,929,103,104,116,4,8,65,67,68,70,84,85,86,97,4792,4840,4849,4905,4912,4972,5022,5040,4,2,110,114,4798,4811,103,108,101,66,114,97,99,107,101,116,59,1,10217,114,111,119,4,3,59,66,76,4822,4824,4829,1,8594,97,114,59,1,8677,101,102,116,65,114,114,111,119,59,1,8644,101,105,108,105,110,103,59,1,8969,111,4,2,117,119,4856,4869,98,108,101,66,114,97,99,107,101,116,59,1,10215,110,4,2,84,86,4876,4887,101,101,86,101,99,116,111,114,59,1,10589,101,99,116,111,114,4,2,59,66,4898,4900,1,8642,97,114,59,1,10581,108,111,111,114,59,1,8971,4,2,101,114,4918,4944,101,4,3,59,65,86,4927,4929,4936,1,8866,114,114,111,119,59,1,8614,101,99,116,111,114,59,1,10587,105,97,110,103,108,101,4,3,59,66,69,4958,4960,4965,1,8883,97,114,59,1,10704,113,117,97,108,59,1,8885,112,4,3,68,84,86,4981,4993,5004,111,119,110,86,101,99,116,111,114,59,1,10575,101,101,86,101,99,116,111,114,59,1,10588,101,99,116,111,114,4,2,59,66,5015,5017,1,8638,97,114,59,1,10580,101,99,116,111,114,4,2,59,66,5033,5035,1,8640,97,114,59,1,10579,114,114,111,119,59,1,8658,4,2,112,117,5053,5057,102,59,1,8477,110,100,73,109,112,108,105,101,115,59,1,10608,105,103,104,116,97,114,114,111,119,59,1,8667,4,2,99,104,5087,5091,114,59,1,8475,59,1,8625,108,101,68,101,108,97,121,101,100,59,1,10740,4,13,72,79,97,99,102,104,105,109,111,113,115,116,117,5134,5150,5157,5164,5198,5203,5259,5265,5277,5283,5374,5380,5385,4,2,67,99,5140,5146,72,99,121,59,1,1065,121,59,1,1064,70,84,99,121,59,1,1068,99,117,116,101,59,1,346,4,5,59,97,101,105,121,5176,5178,5184,5190,5195,1,10940,114,111,110,59,1,352,100,105,108,59,1,350,114,99,59,1,348,59,1,1057,114,59,3,55349,56598,111,114,116,4,4,68,76,82,85,5216,5227,5238,5250,111,119,110,65,114,114,111,119,59,1,8595,101,102,116,65,114,114,111,119,59,1,8592,105,103,104,116,65,114,114,111,119,59,1,8594,112,65,114,114,111,119,59,1,8593,103,109,97,59,1,931,97,108,108,67,105,114,99,108,101,59,1,8728,112,102,59,3,55349,56650,4,2,114,117,5289,5293,116,59,1,8730,97,114,101,4,4,59,73,83,85,5306,5308,5322,5367,1,9633,110,116,101,114,115,101,99,116,105,111,110,59,1,8851,117,4,2,98,112,5329,5347,115,101,116,4,2,59,69,5338,5340,1,8847,113,117,97,108,59,1,8849,101,114,115,101,116,4,2,59,69,5358,5360,1,8848,113,117,97,108,59,1,8850,110,105,111,110,59,1,8852,99,114,59,3,55349,56494,97,114,59,1,8902,4,4,98,99,109,112,5395,5420,5475,5478,4,2,59,115,5401,5403,1,8912,101,116,4,2,59,69,5411,5413,1,8912,113,117,97,108,59,1,8838,4,2,99,104,5426,5468,101,101,100,115,4,4,59,69,83,84,5440,5442,5449,5461,1,8827,113,117,97,108,59,1,10928,108,97,110,116,69,113,117,97,108,59,1,8829,105,108,100,101,59,1,8831,84,104,97,116,59,1,8715,59,1,8721,4,3,59,101,115,5486,5488,5507,1,8913,114,115,101,116,4,2,59,69,5498,5500,1,8835,113,117,97,108,59,1,8839,101,116,59,1,8913,4,11,72,82,83,97,99,102,104,105,111,114,115,5536,5546,5552,5567,5579,5602,5607,5655,5695,5701,5711,79,82,78,5,222,1,59,5544,1,222,65,68,69,59,1,8482,4,2,72,99,5558,5563,99,121,59,1,1035,121,59,1,1062,4,2,98,117,5573,5576,59,1,9,59,1,932,4,3,97,101,121,5587,5593,5599,114,111,110,59,1,356,100,105,108,59,1,354,59,1,1058,114,59,3,55349,56599,4,2,101,105,5613,5631,4,2,114,116,5619,5627,101,102,111,114,101,59,1,8756,97,59,1,920,4,2,99,110,5637,5647,107,83,112,97,99,101,59,3,8287,8202,83,112,97,99,101,59,1,8201,108,100,101,4,4,59,69,70,84,5668,5670,5677,5688,1,8764,113,117,97,108,59,1,8771,117,108,108,69,113,117,97,108,59,1,8773,105,108,100,101,59,1,8776,112,102,59,3,55349,56651,105,112,108,101,68,111,116,59,1,8411,4,2,99,116,5717,5722,114,59,3,55349,56495,114,111,107,59,1,358,4,14,97,98,99,100,102,103,109,110,111,112,114,115,116,117,5758,5789,5805,5823,5830,5835,5846,5852,5921,5937,6089,6095,6101,6108,4,2,99,114,5764,5774,117,116,101,5,218,1,59,5772,1,218,114,4,2,59,111,5781,5783,1,8607,99,105,114,59,1,10569,114,4,2,99,101,5796,5800,121,59,1,1038,118,101,59,1,364,4,2,105,121,5811,5820,114,99,5,219,1,59,5818,1,219,59,1,1059,98,108,97,99,59,1,368,114,59,3,55349,56600,114,97,118,101,5,217,1,59,5844,1,217,97,99,114,59,1,362,4,2,100,105,5858,5905,101,114,4,2,66,80,5866,5892,4,2,97,114,5872,5876,114,59,1,95,97,99,4,2,101,107,5884,5887,59,1,9183,101,116,59,1,9141,97,114,101,110,116,104,101,115,105,115,59,1,9181,111,110,4,2,59,80,5913,5915,1,8899,108,117,115,59,1,8846,4,2,103,112,5927,5932,111,110,59,1,370,102,59,3,55349,56652,4,8,65,68,69,84,97,100,112,115,5955,5985,5996,6009,6026,6033,6044,6075,114,114,111,119,4,3,59,66,68,5967,5969,5974,1,8593,97,114,59,1,10514,111,119,110,65,114,114,111,119,59,1,8645,111,119,110,65,114,114,111,119,59,1,8597,113,117,105,108,105,98,114,105,117,109,59,1,10606,101,101,4,2,59,65,6017,6019,1,8869,114,114,111,119,59,1,8613,114,114,111,119,59,1,8657,111,119,110,97,114,114,111,119,59,1,8661,101,114,4,2,76,82,6052,6063,101,102,116,65,114,114,111,119,59,1,8598,105,103,104,116,65,114,114,111,119,59,1,8599,105,4,2,59,108,6082,6084,1,978,111,110,59,1,933,105,110,103,59,1,366,99,114,59,3,55349,56496,105,108,100,101,59,1,360,109,108,5,220,1,59,6115,1,220,4,9,68,98,99,100,101,102,111,115,118,6137,6143,6148,6152,6166,6250,6255,6261,6267,97,115,104,59,1,8875,97,114,59,1,10987,121,59,1,1042,97,115,104,4,2,59,108,6161,6163,1,8873,59,1,10982,4,2,101,114,6172,6175,59,1,8897,4,3,98,116,121,6183,6188,6238,97,114,59,1,8214,4,2,59,105,6194,6196,1,8214,99,97,108,4,4,66,76,83,84,6209,6214,6220,6231,97,114,59,1,8739,105,110,101,59,1,124,101,112,97,114,97,116,111,114,59,1,10072,105,108,100,101,59,1,8768,84,104,105,110,83,112,97,99,101,59,1,8202,114,59,3,55349,56601,112,102,59,3,55349,56653,99,114,59,3,55349,56497,100,97,115,104,59,1,8874,4,5,99,101,102,111,115,6286,6292,6298,6303,6309,105,114,99,59,1,372,100,103,101,59,1,8896,114,59,3,55349,56602,112,102,59,3,55349,56654,99,114,59,3,55349,56498,4,4,102,105,111,115,6325,6330,6333,6339,114,59,3,55349,56603,59,1,926,112,102,59,3,55349,56655,99,114,59,3,55349,56499,4,9,65,73,85,97,99,102,111,115,117,6365,6370,6375,6380,6391,6405,6410,6416,6422,99,121,59,1,1071,99,121,59,1,1031,99,121,59,1,1070,99,117,116,101,5,221,1,59,6389,1,221,4,2,105,121,6397,6402,114,99,59,1,374,59,1,1067,114,59,3,55349,56604,112,102,59,3,55349,56656,99,114,59,3,55349,56500,109,108,59,1,376,4,8,72,97,99,100,101,102,111,115,6445,6450,6457,6472,6477,6501,6505,6510,99,121,59,1,1046,99,117,116,101,59,1,377,4,2,97,121,6463,6469,114,111,110,59,1,381,59,1,1047,111,116,59,1,379,4,2,114,116,6483,6497,111,87,105,100,116,104,83,112,97,99,101,59,1,8203,97,59,1,918,114,59,1,8488,112,102,59,1,8484,99,114,59,3,55349,56501,4,16,97,98,99,101,102,103,108,109,110,111,112,114,115,116,117,119,6550,6561,6568,6612,6622,6634,6645,6672,6699,6854,6870,6923,6933,6963,6974,6983,99,117,116,101,5,225,1,59,6559,1,225,114,101,118,101,59,1,259,4,6,59,69,100,105,117,121,6582,6584,6588,6591,6600,6609,1,8766,59,3,8766,819,59,1,8767,114,99,5,226,1,59,6598,1,226,116,101,5,180,1,59,6607,1,180,59,1,1072,108,105,103,5,230,1,59,6620,1,230,4,2,59,114,6628,6630,1,8289,59,3,55349,56606,114,97,118,101,5,224,1,59,6643,1,224,4,2,101,112,6651,6667,4,2,102,112,6657,6663,115,121,109,59,1,8501,104,59,1,8501,104,97,59,1,945,4,2,97,112,6678,6692,4,2,99,108,6684,6688,114,59,1,257,103,59,1,10815,5,38,1,59,6697,1,38,4,2,100,103,6705,6737,4,5,59,97,100,115,118,6717,6719,6724,6727,6734,1,8743,110,100,59,1,10837,59,1,10844,108,111,112,101,59,1,10840,59,1,10842,4,7,59,101,108,109,114,115,122,6753,6755,6758,6762,6814,6835,6848,1,8736,59,1,10660,101,59,1,8736,115,100,4,2,59,97,6770,6772,1,8737,4,8,97,98,99,100,101,102,103,104,6790,6793,6796,6799,6802,6805,6808,6811,59,1,10664,59,1,10665,59,1,10666,59,1,10667,59,1,10668,59,1,10669,59,1,10670,59,1,10671,116,4,2,59,118,6821,6823,1,8735,98,4,2,59,100,6830,6832,1,8894,59,1,10653,4,2,112,116,6841,6845,104,59,1,8738,59,1,197,97,114,114,59,1,9084,4,2,103,112,6860,6865,111,110,59,1,261,102,59,3,55349,56658,4,7,59,69,97,101,105,111,112,6886,6888,6891,6897,6900,6904,6908,1,8776,59,1,10864,99,105,114,59,1,10863,59,1,8778,100,59,1,8779,115,59,1,39,114,111,120,4,2,59,101,6917,6919,1,8776,113,59,1,8778,105,110,103,5,229,1,59,6931,1,229,4,3,99,116,121,6941,6946,6949,114,59,3,55349,56502,59,1,42,109,112,4,2,59,101,6957,6959,1,8776,113,59,1,8781,105,108,100,101,5,227,1,59,6972,1,227,109,108,5,228,1,59,6981,1,228,4,2,99,105,6989,6997,111,110,105,110,116,59,1,8755,110,116,59,1,10769,4,16,78,97,98,99,100,101,102,105,107,108,110,111,112,114,115,117,7036,7041,7119,7135,7149,7155,7219,7224,7347,7354,7463,7489,7786,7793,7814,7866,111,116,59,1,10989,4,2,99,114,7047,7094,107,4,4,99,101,112,115,7058,7064,7073,7080,111,110,103,59,1,8780,112,115,105,108,111,110,59,1,1014,114,105,109,101,59,1,8245,105,109,4,2,59,101,7088,7090,1,8765,113,59,1,8909,4,2,118,119,7100,7105,101,101,59,1,8893,101,100,4,2,59,103,7113,7115,1,8965,101,59,1,8965,114,107,4,2,59,116,7127,7129,1,9141,98,114,107,59,1,9142,4,2,111,121,7141,7146,110,103,59,1,8780,59,1,1073,113,117,111,59,1,8222,4,5,99,109,112,114,116,7167,7181,7188,7193,7199,97,117,115,4,2,59,101,7176,7178,1,8757,59,1,8757,112,116,121,118,59,1,10672,115,105,59,1,1014,110,111,117,59,1,8492,4,3,97,104,119,7207,7210,7213,59,1,946,59,1,8502,101,101,110,59,1,8812,114,59,3,55349,56607,103,4,7,99,111,115,116,117,118,119,7241,7262,7288,7305,7328,7335,7340,4,3,97,105,117,7249,7253,7258,112,59,1,8898,114,99,59,1,9711,112,59,1,8899,4,3,100,112,116,7270,7275,7281,111,116,59,1,10752,108,117,115,59,1,10753,105,109,101,115,59,1,10754,4,2,113,116,7294,7300,99,117,112,59,1,10758,97,114,59,1,9733,114,105,97,110,103,108,101,4,2,100,117,7318,7324,111,119,110,59,1,9661,112,59,1,9651,112,108,117,115,59,1,10756,101,101,59,1,8897,101,100,103,101,59,1,8896,97,114,111,119,59,1,10509,4,3,97,107,111,7362,7436,7458,4,2,99,110,7368,7432,107,4,3,108,115,116,7377,7386,7394,111,122,101,110,103,101,59,1,10731,113,117,97,114,101,59,1,9642,114,105,97,110,103,108,101,4,4,59,100,108,114,7411,7413,7419,7425,1,9652,111,119,110,59,1,9662,101,102,116,59,1,9666,105,103,104,116,59,1,9656,107,59,1,9251,4,2,49,51,7442,7454,4,2,50,52,7448,7451,59,1,9618,59,1,9617,52,59,1,9619,99,107,59,1,9608,4,2,101,111,7469,7485,4,2,59,113,7475,7478,3,61,8421,117,105,118,59,3,8801,8421,116,59,1,8976,4,4,112,116,119,120,7499,7504,7517,7523,102,59,3,55349,56659,4,2,59,116,7510,7512,1,8869,111,109,59,1,8869,116,105,101,59,1,8904,4,12,68,72,85,86,98,100,104,109,112,116,117,118,7549,7571,7597,7619,7655,7660,7682,7708,7715,7721,7728,7750,4,4,76,82,108,114,7559,7562,7565,7568,59,1,9559,59,1,9556,59,1,9558,59,1,9555,4,5,59,68,85,100,117,7583,7585,7588,7591,7594,1,9552,59,1,9574,59,1,9577,59,1,9572,59,1,9575,4,4,76,82,108,114,7607,7610,7613,7616,59,1,9565,59,1,9562,59,1,9564,59,1,9561,4,7,59,72,76,82,104,108,114,7635,7637,7640,7643,7646,7649,7652,1,9553,59,1,9580,59,1,9571,59,1,9568,59,1,9579,59,1,9570,59,1,9567,111,120,59,1,10697,4,4,76,82,108,114,7670,7673,7676,7679,59,1,9557,59,1,9554,59,1,9488,59,1,9484,4,5,59,68,85,100,117,7694,7696,7699,7702,7705,1,9472,59,1,9573,59,1,9576,59,1,9516,59,1,9524,105,110,117,115,59,1,8863,108,117,115,59,1,8862,105,109,101,115,59,1,8864,4,4,76,82,108,114,7738,7741,7744,7747,59,1,9563,59,1,9560,59,1,9496,59,1,9492,4,7,59,72,76,82,104,108,114,7766,7768,7771,7774,7777,7780,7783,1,9474,59,1,9578,59,1,9569,59,1,9566,59,1,9532,59,1,9508,59,1,9500,114,105,109,101,59,1,8245,4,2,101,118,7799,7804,118,101,59,1,728,98,97,114,5,166,1,59,7812,1,166,4,4,99,101,105,111,7824,7829,7834,7846,114,59,3,55349,56503,109,105,59,1,8271,109,4,2,59,101,7841,7843,1,8765,59,1,8909,108,4,3,59,98,104,7855,7857,7860,1,92,59,1,10693,115,117,98,59,1,10184,4,2,108,109,7872,7885,108,4,2,59,101,7879,7881,1,8226,116,59,1,8226,112,4,3,59,69,101,7894,7896,7899,1,8782,59,1,10926,4,2,59,113,7905,7907,1,8783,59,1,8783,4,15,97,99,100,101,102,104,105,108,111,114,115,116,117,119,121,7942,8021,8075,8080,8121,8126,8157,8279,8295,8430,8446,8485,8491,8707,8726,4,3,99,112,114,7950,7956,8007,117,116,101,59,1,263,4,6,59,97,98,99,100,115,7970,7972,7977,7984,7998,8003,1,8745,110,100,59,1,10820,114,99,117,112,59,1,10825,4,2,97,117,7990,7994,112,59,1,10827,112,59,1,10823,111,116,59,1,10816,59,3,8745,65024,4,2,101,111,8013,8017,116,59,1,8257,110,59,1,711,4,4,97,101,105,117,8031,8046,8056,8061,4,2,112,114,8037,8041,115,59,1,10829,111,110,59,1,269,100,105,108,5,231,1,59,8054,1,231,114,99,59,1,265,112,115,4,2,59,115,8069,8071,1,10828,109,59,1,10832,111,116,59,1,267,4,3,100,109,110,8088,8097,8104,105,108,5,184,1,59,8095,1,184,112,116,121,118,59,1,10674,116,5,162,2,59,101,8112,8114,1,162,114,100,111,116,59,1,183,114,59,3,55349,56608,4,3,99,101,105,8134,8138,8154,121,59,1,1095,99,107,4,2,59,109,8146,8148,1,10003,97,114,107,59,1,10003,59,1,967,114,4,7,59,69,99,101,102,109,115,8174,8176,8179,8258,8261,8268,8273,1,9675,59,1,10691,4,3,59,101,108,8187,8189,8193,1,710,113,59,1,8791,101,4,2,97,100,8200,8223,114,114,111,119,4,2,108,114,8210,8216,101,102,116,59,1,8634,105,103,104,116,59,1,8635,4,5,82,83,97,99,100,8235,8238,8241,8246,8252,59,1,174,59,1,9416,115,116,59,1,8859,105,114,99,59,1,8858,97,115,104,59,1,8861,59,1,8791,110,105,110,116,59,1,10768,105,100,59,1,10991,99,105,114,59,1,10690,117,98,115,4,2,59,117,8288,8290,1,9827,105,116,59,1,9827,4,4,108,109,110,112,8305,8326,8376,8400,111,110,4,2,59,101,8313,8315,1,58,4,2,59,113,8321,8323,1,8788,59,1,8788,4,2,109,112,8332,8344,97,4,2,59,116,8339,8341,1,44,59,1,64,4,3,59,102,108,8352,8354,8358,1,8705,110,59,1,8728,101,4,2,109,120,8365,8371,101,110,116,59,1,8705,101,115,59,1,8450,4,2,103,105,8382,8395,4,2,59,100,8388,8390,1,8773,111,116,59,1,10861,110,116,59,1,8750,4,3,102,114,121,8408,8412,8417,59,3,55349,56660,111,100,59,1,8720,5,169,2,59,115,8424,8426,1,169,114,59,1,8471,4,2,97,111,8436,8441,114,114,59,1,8629,115,115,59,1,10007,4,2,99,117,8452,8457,114,59,3,55349,56504,4,2,98,112,8463,8474,4,2,59,101,8469,8471,1,10959,59,1,10961,4,2,59,101,8480,8482,1,10960,59,1,10962,100,111,116,59,1,8943,4,7,100,101,108,112,114,118,119,8507,8522,8536,8550,8600,8697,8702,97,114,114,4,2,108,114,8516,8519,59,1,10552,59,1,10549,4,2,112,115,8528,8532,114,59,1,8926,99,59,1,8927,97,114,114,4,2,59,112,8545,8547,1,8630,59,1,10557,4,6,59,98,99,100,111,115,8564,8566,8573,8587,8592,8596,1,8746,114,99,97,112,59,1,10824,4,2,97,117,8579,8583,112,59,1,10822,112,59,1,10826,111,116,59,1,8845,114,59,1,10821,59,3,8746,65024,4,4,97,108,114,118,8610,8623,8663,8672,114,114,4,2,59,109,8618,8620,1,8631,59,1,10556,121,4,3,101,118,119,8632,8651,8656,113,4,2,112,115,8639,8645,114,101,99,59,1,8926,117,99,99,59,1,8927,101,101,59,1,8910,101,100,103,101,59,1,8911,101,110,5,164,1,59,8670,1,164,101,97,114,114,111,119,4,2,108,114,8684,8690,101,102,116,59,1,8630,105,103,104,116,59,1,8631,101,101,59,1,8910,101,100,59,1,8911,4,2,99,105,8713,8721,111,110,105,110,116,59,1,8754,110,116,59,1,8753,108,99,116,121,59,1,9005,4,19,65,72,97,98,99,100,101,102,104,105,106,108,111,114,115,116,117,119,122,8773,8778,8783,8821,8839,8854,8887,8914,8930,8944,9036,9041,9058,9197,9227,9258,9281,9297,9305,114,114,59,1,8659,97,114,59,1,10597,4,4,103,108,114,115,8793,8799,8805,8809,103,101,114,59,1,8224,101,116,104,59,1,8504,114,59,1,8595,104,4,2,59,118,8816,8818,1,8208,59,1,8867,4,2,107,108,8827,8834,97,114,111,119,59,1,10511,97,99,59,1,733,4,2,97,121,8845,8851,114,111,110,59,1,271,59,1,1076,4,3,59,97,111,8862,8864,8880,1,8518,4,2,103,114,8870,8876,103,101,114,59,1,8225,114,59,1,8650,116,115,101,113,59,1,10871,4,3,103,108,109,8895,8902,8907,5,176,1,59,8900,1,176,116,97,59,1,948,112,116,121,118,59,1,10673,4,2,105,114,8920,8926,115,104,116,59,1,10623,59,3,55349,56609,97,114,4,2,108,114,8938,8941,59,1,8643,59,1,8642,4,5,97,101,103,115,118,8956,8986,8989,8996,9001,109,4,3,59,111,115,8965,8967,8983,1,8900,110,100,4,2,59,115,8975,8977,1,8900,117,105,116,59,1,9830,59,1,9830,59,1,168,97,109,109,97,59,1,989,105,110,59,1,8946,4,3,59,105,111,9009,9011,9031,1,247,100,101,5,247,2,59,111,9020,9022,1,247,110,116,105,109,101,115,59,1,8903,110,120,59,1,8903,99,121,59,1,1106,99,4,2,111,114,9048,9053,114,110,59,1,8990,111,112,59,1,8973,4,5,108,112,116,117,119,9070,9076,9081,9130,9144,108,97,114,59,1,36,102,59,3,55349,56661,4,5,59,101,109,112,115,9093,9095,9109,9116,9122,1,729,113,4,2,59,100,9102,9104,1,8784,111,116,59,1,8785,105,110,117,115,59,1,8760,108,117,115,59,1,8724,113,117,97,114,101,59,1,8865,98,108,101,98,97,114,119,101,100,103,101,59,1,8966,110,4,3,97,100,104,9153,9160,9172,114,114,111,119,59,1,8595,111,119,110,97,114,114,111,119,115,59,1,8650,97,114,112,111,111,110,4,2,108,114,9184,9190,101,102,116,59,1,8643,105,103,104,116,59,1,8642,4,2,98,99,9203,9211,107,97,114,111,119,59,1,10512,4,2,111,114,9217,9222,114,110,59,1,8991,111,112,59,1,8972,4,3,99,111,116,9235,9248,9252,4,2,114,121,9241,9245,59,3,55349,56505,59,1,1109,108,59,1,10742,114,111,107,59,1,273,4,2,100,114,9264,9269,111,116,59,1,8945,105,4,2,59,102,9276,9278,1,9663,59,1,9662,4,2,97,104,9287,9292,114,114,59,1,8693,97,114,59,1,10607,97,110,103,108,101,59,1,10662,4,2,99,105,9311,9315,121,59,1,1119,103,114,97,114,114,59,1,10239,4,18,68,97,99,100,101,102,103,108,109,110,111,112,113,114,115,116,117,120,9361,9376,9398,9439,9444,9447,9462,9495,9531,9585,9598,9614,9659,9755,9771,9792,9808,9826,4,2,68,111,9367,9372,111,116,59,1,10871,116,59,1,8785,4,2,99,115,9382,9392,117,116,101,5,233,1,59,9390,1,233,116,101,114,59,1,10862,4,4,97,105,111,121,9408,9414,9430,9436,114,111,110,59,1,283,114,4,2,59,99,9421,9423,1,8790,5,234,1,59,9428,1,234,108,111,110,59,1,8789,59,1,1101,111,116,59,1,279,59,1,8519,4,2,68,114,9453,9458,111,116,59,1,8786,59,3,55349,56610,4,3,59,114,115,9470,9472,9482,1,10906,97,118,101,5,232,1,59,9480,1,232,4,2,59,100,9488,9490,1,10902,111,116,59,1,10904,4,4,59,105,108,115,9505,9507,9515,9518,1,10905,110,116,101,114,115,59,1,9191,59,1,8467,4,2,59,100,9524,9526,1,10901,111,116,59,1,10903,4,3,97,112,115,9539,9544,9564,99,114,59,1,275,116,121,4,3,59,115,118,9554,9556,9561,1,8709,101,116,59,1,8709,59,1,8709,112,4,2,49,59,9571,9583,4,2,51,52,9577,9580,59,1,8196,59,1,8197,1,8195,4,2,103,115,9591,9594,59,1,331,112,59,1,8194,4,2,103,112,9604,9609,111,110,59,1,281,102,59,3,55349,56662,4,3,97,108,115,9622,9635,9640,114,4,2,59,115,9629,9631,1,8917,108,59,1,10723,117,115,59,1,10865,105,4,3,59,108,118,9649,9651,9656,1,949,111,110,59,1,949,59,1,1013,4,4,99,115,117,118,9669,9686,9716,9747,4,2,105,111,9675,9680,114,99,59,1,8790,108,111,110,59,1,8789,4,2,105,108,9692,9696,109,59,1,8770,97,110,116,4,2,103,108,9705,9710,116,114,59,1,10902,101,115,115,59,1,10901,4,3,97,101,105,9724,9729,9734,108,115,59,1,61,115,116,59,1,8799,118,4,2,59,68,9741,9743,1,8801,68,59,1,10872,112,97,114,115,108,59,1,10725,4,2,68,97,9761,9766,111,116,59,1,8787,114,114,59,1,10609,4,3,99,100,105,9779,9783,9788,114,59,1,8495,111,116,59,1,8784,109,59,1,8770,4,2,97,104,9798,9801,59,1,951,5,240,1,59,9806,1,240,4,2,109,114,9814,9822,108,5,235,1,59,9820,1,235,111,59,1,8364,4,3,99,105,112,9834,9838,9843,108,59,1,33,115,116,59,1,8707,4,2,101,111,9849,9859,99,116,97,116,105,111,110,59,1,8496,110,101,110,116,105,97,108,101,59,1,8519,4,12,97,99,101,102,105,106,108,110,111,112,114,115,9896,9910,9914,9921,9954,9960,9967,9989,9994,10027,10036,10164,108,108,105,110,103,100,111,116,115,101,113,59,1,8786,121,59,1,1092,109,97,108,101,59,1,9792,4,3,105,108,114,9929,9935,9950,108,105,103,59,1,64259,4,2,105,108,9941,9945,103,59,1,64256,105,103,59,1,64260,59,3,55349,56611,108,105,103,59,1,64257,108,105,103,59,3,102,106,4,3,97,108,116,9975,9979,9984,116,59,1,9837,105,103,59,1,64258,110,115,59,1,9649,111,102,59,1,402,4,2,112,114,1e4,10005,102,59,3,55349,56663,4,2,97,107,10011,10016,108,108,59,1,8704,4,2,59,118,10022,10024,1,8916,59,1,10969,97,114,116,105,110,116,59,1,10765,4,2,97,111,10042,10159,4,2,99,115,10048,10155,4,6,49,50,51,52,53,55,10062,10102,10114,10135,10139,10151,4,6,50,51,52,53,54,56,10076,10083,10086,10093,10096,10099,5,189,1,59,10081,1,189,59,1,8531,5,188,1,59,10091,1,188,59,1,8533,59,1,8537,59,1,8539,4,2,51,53,10108,10111,59,1,8532,59,1,8534,4,3,52,53,56,10122,10129,10132,5,190,1,59,10127,1,190,59,1,8535,59,1,8540,53,59,1,8536,4,2,54,56,10145,10148,59,1,8538,59,1,8541,56,59,1,8542,108,59,1,8260,119,110,59,1,8994,99,114,59,3,55349,56507,4,17,69,97,98,99,100,101,102,103,105,106,108,110,111,114,115,116,118,10206,10217,10247,10254,10268,10273,10358,10363,10374,10380,10385,10406,10458,10464,10470,10497,10610,4,2,59,108,10212,10214,1,8807,59,1,10892,4,3,99,109,112,10225,10231,10244,117,116,101,59,1,501,109,97,4,2,59,100,10239,10241,1,947,59,1,989,59,1,10886,114,101,118,101,59,1,287,4,2,105,121,10260,10265,114,99,59,1,285,59,1,1075,111,116,59,1,289,4,4,59,108,113,115,10283,10285,10288,10308,1,8805,59,1,8923,4,3,59,113,115,10296,10298,10301,1,8805,59,1,8807,108,97,110,116,59,1,10878,4,4,59,99,100,108,10318,10320,10324,10345,1,10878,99,59,1,10921,111,116,4,2,59,111,10332,10334,1,10880,4,2,59,108,10340,10342,1,10882,59,1,10884,4,2,59,101,10351,10354,3,8923,65024,115,59,1,10900,114,59,3,55349,56612,4,2,59,103,10369,10371,1,8811,59,1,8921,109,101,108,59,1,8503,99,121,59,1,1107,4,4,59,69,97,106,10395,10397,10400,10403,1,8823,59,1,10898,59,1,10917,59,1,10916,4,4,69,97,101,115,10416,10419,10434,10453,59,1,8809,112,4,2,59,112,10426,10428,1,10890,114,111,120,59,1,10890,4,2,59,113,10440,10442,1,10888,4,2,59,113,10448,10450,1,10888,59,1,8809,105,109,59,1,8935,112,102,59,3,55349,56664,97,118,101,59,1,96,4,2,99,105,10476,10480,114,59,1,8458,109,4,3,59,101,108,10489,10491,10494,1,8819,59,1,10894,59,1,10896,5,62,6,59,99,100,108,113,114,10512,10514,10527,10532,10538,10545,1,62,4,2,99,105,10520,10523,59,1,10919,114,59,1,10874,111,116,59,1,8919,80,97,114,59,1,10645,117,101,115,116,59,1,10876,4,5,97,100,101,108,115,10557,10574,10579,10599,10605,4,2,112,114,10563,10570,112,114,111,120,59,1,10886,114,59,1,10616,111,116,59,1,8919,113,4,2,108,113,10586,10592,101,115,115,59,1,8923,108,101,115,115,59,1,10892,101,115,115,59,1,8823,105,109,59,1,8819,4,2,101,110,10616,10626,114,116,110,101,113,113,59,3,8809,65024,69,59,3,8809,65024,4,10,65,97,98,99,101,102,107,111,115,121,10653,10658,10713,10718,10724,10760,10765,10786,10850,10875,114,114,59,1,8660,4,4,105,108,109,114,10668,10674,10678,10684,114,115,112,59,1,8202,102,59,1,189,105,108,116,59,1,8459,4,2,100,114,10690,10695,99,121,59,1,1098,4,3,59,99,119,10703,10705,10710,1,8596,105,114,59,1,10568,59,1,8621,97,114,59,1,8463,105,114,99,59,1,293,4,3,97,108,114,10732,10748,10754,114,116,115,4,2,59,117,10741,10743,1,9829,105,116,59,1,9829,108,105,112,59,1,8230,99,111,110,59,1,8889,114,59,3,55349,56613,115,4,2,101,119,10772,10779,97,114,111,119,59,1,10533,97,114,111,119,59,1,10534,4,5,97,109,111,112,114,10798,10803,10809,10839,10844,114,114,59,1,8703,116,104,116,59,1,8763,107,4,2,108,114,10816,10827,101,102,116,97,114,114,111,119,59,1,8617,105,103,104,116,97,114,114,111,119,59,1,8618,102,59,3,55349,56665,98,97,114,59,1,8213,4,3,99,108,116,10858,10863,10869,114,59,3,55349,56509,97,115,104,59,1,8463,114,111,107,59,1,295,4,2,98,112,10881,10887,117,108,108,59,1,8259,104,101,110,59,1,8208,4,15,97,99,101,102,103,105,106,109,110,111,112,113,115,116,117,10925,10936,10958,10977,10990,11001,11039,11045,11101,11192,11220,11226,11237,11285,11299,99,117,116,101,5,237,1,59,10934,1,237,4,3,59,105,121,10944,10946,10955,1,8291,114,99,5,238,1,59,10953,1,238,59,1,1080,4,2,99,120,10964,10968,121,59,1,1077,99,108,5,161,1,59,10975,1,161,4,2,102,114,10983,10986,59,1,8660,59,3,55349,56614,114,97,118,101,5,236,1,59,10999,1,236,4,4,59,105,110,111,11011,11013,11028,11034,1,8520,4,2,105,110,11019,11024,110,116,59,1,10764,116,59,1,8749,102,105,110,59,1,10716,116,97,59,1,8489,108,105,103,59,1,307,4,3,97,111,112,11053,11092,11096,4,3,99,103,116,11061,11065,11088,114,59,1,299,4,3,101,108,112,11073,11076,11082,59,1,8465,105,110,101,59,1,8464,97,114,116,59,1,8465,104,59,1,305,102,59,1,8887,101,100,59,1,437,4,5,59,99,102,111,116,11113,11115,11121,11136,11142,1,8712,97,114,101,59,1,8453,105,110,4,2,59,116,11129,11131,1,8734,105,101,59,1,10717,100,111,116,59,1,305,4,5,59,99,101,108,112,11154,11156,11161,11179,11186,1,8747,97,108,59,1,8890,4,2,103,114,11167,11173,101,114,115,59,1,8484,99,97,108,59,1,8890,97,114,104,107,59,1,10775,114,111,100,59,1,10812,4,4,99,103,112,116,11202,11206,11211,11216,121,59,1,1105,111,110,59,1,303,102,59,3,55349,56666,97,59,1,953,114,111,100,59,1,10812,117,101,115,116,5,191,1,59,11235,1,191,4,2,99,105,11243,11248,114,59,3,55349,56510,110,4,5,59,69,100,115,118,11261,11263,11266,11271,11282,1,8712,59,1,8953,111,116,59,1,8949,4,2,59,118,11277,11279,1,8948,59,1,8947,59,1,8712,4,2,59,105,11291,11293,1,8290,108,100,101,59,1,297,4,2,107,109,11305,11310,99,121,59,1,1110,108,5,239,1,59,11316,1,239,4,6,99,102,109,111,115,117,11332,11346,11351,11357,11363,11380,4,2,105,121,11338,11343,114,99,59,1,309,59,1,1081,114,59,3,55349,56615,97,116,104,59,1,567,112,102,59,3,55349,56667,4,2,99,101,11369,11374,114,59,3,55349,56511,114,99,121,59,1,1112,107,99,121,59,1,1108,4,8,97,99,102,103,104,106,111,115,11404,11418,11433,11438,11445,11450,11455,11461,112,112,97,4,2,59,118,11413,11415,1,954,59,1,1008,4,2,101,121,11424,11430,100,105,108,59,1,311,59,1,1082,114,59,3,55349,56616,114,101,101,110,59,1,312,99,121,59,1,1093,99,121,59,1,1116,112,102,59,3,55349,56668,99,114,59,3,55349,56512,4,23,65,66,69,72,97,98,99,100,101,102,103,104,106,108,109,110,111,112,114,115,116,117,118,11515,11538,11544,11555,11560,11721,11780,11818,11868,12136,12160,12171,12203,12208,12246,12275,12327,12509,12523,12569,12641,12732,12752,4,3,97,114,116,11523,11528,11532,114,114,59,1,8666,114,59,1,8656,97,105,108,59,1,10523,97,114,114,59,1,10510,4,2,59,103,11550,11552,1,8806,59,1,10891,97,114,59,1,10594,4,9,99,101,103,109,110,112,113,114,116,11580,11586,11594,11600,11606,11624,11627,11636,11694,117,116,101,59,1,314,109,112,116,121,118,59,1,10676,114,97,110,59,1,8466,98,100,97,59,1,955,103,4,3,59,100,108,11615,11617,11620,1,10216,59,1,10641,101,59,1,10216,59,1,10885,117,111,5,171,1,59,11634,1,171,114,4,8,59,98,102,104,108,112,115,116,11655,11657,11669,11673,11677,11681,11685,11690,1,8592,4,2,59,102,11663,11665,1,8676,115,59,1,10527,115,59,1,10525,107,59,1,8617,112,59,1,8619,108,59,1,10553,105,109,59,1,10611,108,59,1,8610,4,3,59,97,101,11702,11704,11709,1,10923,105,108,59,1,10521,4,2,59,115,11715,11717,1,10925,59,3,10925,65024,4,3,97,98,114,11729,11734,11739,114,114,59,1,10508,114,107,59,1,10098,4,2,97,107,11745,11758,99,4,2,101,107,11752,11755,59,1,123,59,1,91,4,2,101,115,11764,11767,59,1,10635,108,4,2,100,117,11774,11777,59,1,10639,59,1,10637,4,4,97,101,117,121,11790,11796,11811,11815,114,111,110,59,1,318,4,2,100,105,11802,11807,105,108,59,1,316,108,59,1,8968,98,59,1,123,59,1,1083,4,4,99,113,114,115,11828,11832,11845,11864,97,59,1,10550,117,111,4,2,59,114,11840,11842,1,8220,59,1,8222,4,2,100,117,11851,11857,104,97,114,59,1,10599,115,104,97,114,59,1,10571,104,59,1,8626,4,5,59,102,103,113,115,11880,11882,12008,12011,12031,1,8804,116,4,5,97,104,108,114,116,11895,11913,11935,11947,11996,114,114,111,119,4,2,59,116,11905,11907,1,8592,97,105,108,59,1,8610,97,114,112,111,111,110,4,2,100,117,11925,11931,111,119,110,59,1,8637,112,59,1,8636,101,102,116,97,114,114,111,119,115,59,1,8647,105,103,104,116,4,3,97,104,115,11959,11974,11984,114,114,111,119,4,2,59,115,11969,11971,1,8596,59,1,8646,97,114,112,111,111,110,115,59,1,8651,113,117,105,103,97,114,114,111,119,59,1,8621,104,114,101,101,116,105,109,101,115,59,1,8907,59,1,8922,4,3,59,113,115,12019,12021,12024,1,8804,59,1,8806,108,97,110,116,59,1,10877,4,5,59,99,100,103,115,12043,12045,12049,12070,12083,1,10877,99,59,1,10920,111,116,4,2,59,111,12057,12059,1,10879,4,2,59,114,12065,12067,1,10881,59,1,10883,4,2,59,101,12076,12079,3,8922,65024,115,59,1,10899,4,5,97,100,101,103,115,12095,12103,12108,12126,12131,112,112,114,111,120,59,1,10885,111,116,59,1,8918,113,4,2,103,113,12115,12120,116,114,59,1,8922,103,116,114,59,1,10891,116,114,59,1,8822,105,109,59,1,8818,4,3,105,108,114,12144,12150,12156,115,104,116,59,1,10620,111,111,114,59,1,8970,59,3,55349,56617,4,2,59,69,12166,12168,1,8822,59,1,10897,4,2,97,98,12177,12198,114,4,2,100,117,12184,12187,59,1,8637,4,2,59,108,12193,12195,1,8636,59,1,10602,108,107,59,1,9604,99,121,59,1,1113,4,5,59,97,99,104,116,12220,12222,12227,12235,12241,1,8810,114,114,59,1,8647,111,114,110,101,114,59,1,8990,97,114,100,59,1,10603,114,105,59,1,9722,4,2,105,111,12252,12258,100,111,116,59,1,320,117,115,116,4,2,59,97,12267,12269,1,9136,99,104,101,59,1,9136,4,4,69,97,101,115,12285,12288,12303,12322,59,1,8808,112,4,2,59,112,12295,12297,1,10889,114,111,120,59,1,10889,4,2,59,113,12309,12311,1,10887,4,2,59,113,12317,12319,1,10887,59,1,8808,105,109,59,1,8934,4,8,97,98,110,111,112,116,119,122,12345,12359,12364,12421,12446,12467,12474,12490,4,2,110,114,12351,12355,103,59,1,10220,114,59,1,8701,114,107,59,1,10214,103,4,3,108,109,114,12373,12401,12409,101,102,116,4,2,97,114,12382,12389,114,114,111,119,59,1,10229,105,103,104,116,97,114,114,111,119,59,1,10231,97,112,115,116,111,59,1,10236,105,103,104,116,97,114,114,111,119,59,1,10230,112,97,114,114,111,119,4,2,108,114,12433,12439,101,102,116,59,1,8619,105,103,104,116,59,1,8620,4,3,97,102,108,12454,12458,12462,114,59,1,10629,59,3,55349,56669,117,115,59,1,10797,105,109,101,115,59,1,10804,4,2,97,98,12480,12485,115,116,59,1,8727,97,114,59,1,95,4,3,59,101,102,12498,12500,12506,1,9674,110,103,101,59,1,9674,59,1,10731,97,114,4,2,59,108,12517,12519,1,40,116,59,1,10643,4,5,97,99,104,109,116,12535,12540,12548,12561,12564,114,114,59,1,8646,111,114,110,101,114,59,1,8991,97,114,4,2,59,100,12556,12558,1,8651,59,1,10605,59,1,8206,114,105,59,1,8895,4,6,97,99,104,105,113,116,12583,12589,12594,12597,12614,12635,113,117,111,59,1,8249,114,59,3,55349,56513,59,1,8624,109,4,3,59,101,103,12606,12608,12611,1,8818,59,1,10893,59,1,10895,4,2,98,117,12620,12623,59,1,91,111,4,2,59,114,12630,12632,1,8216,59,1,8218,114,111,107,59,1,322,5,60,8,59,99,100,104,105,108,113,114,12660,12662,12675,12680,12686,12692,12698,12705,1,60,4,2,99,105,12668,12671,59,1,10918,114,59,1,10873,111,116,59,1,8918,114,101,101,59,1,8907,109,101,115,59,1,8905,97,114,114,59,1,10614,117,101,115,116,59,1,10875,4,2,80,105,12711,12716,97,114,59,1,10646,4,3,59,101,102,12724,12726,12729,1,9667,59,1,8884,59,1,9666,114,4,2,100,117,12739,12746,115,104,97,114,59,1,10570,104,97,114,59,1,10598,4,2,101,110,12758,12768,114,116,110,101,113,113,59,3,8808,65024,69,59,3,8808,65024,4,14,68,97,99,100,101,102,104,105,108,110,111,112,115,117,12803,12809,12893,12908,12914,12928,12933,12937,13011,13025,13032,13049,13052,13069,68,111,116,59,1,8762,4,4,99,108,112,114,12819,12827,12849,12887,114,5,175,1,59,12825,1,175,4,2,101,116,12833,12836,59,1,9794,4,2,59,101,12842,12844,1,10016,115,101,59,1,10016,4,2,59,115,12855,12857,1,8614,116,111,4,4,59,100,108,117,12869,12871,12877,12883,1,8614,111,119,110,59,1,8615,101,102,116,59,1,8612,112,59,1,8613,107,101,114,59,1,9646,4,2,111,121,12899,12905,109,109,97,59,1,10793,59,1,1084,97,115,104,59,1,8212,97,115,117,114,101,100,97,110,103,108,101,59,1,8737,114,59,3,55349,56618,111,59,1,8487,4,3,99,100,110,12945,12954,12985,114,111,5,181,1,59,12952,1,181,4,4,59,97,99,100,12964,12966,12971,12976,1,8739,115,116,59,1,42,105,114,59,1,10992,111,116,5,183,1,59,12983,1,183,117,115,4,3,59,98,100,12995,12997,13e3,1,8722,59,1,8863,4,2,59,117,13006,13008,1,8760,59,1,10794,4,2,99,100,13017,13021,112,59,1,10971,114,59,1,8230,112,108,117,115,59,1,8723,4,2,100,112,13038,13044,101,108,115,59,1,8871,102,59,3,55349,56670,59,1,8723,4,2,99,116,13058,13063,114,59,3,55349,56514,112,111,115,59,1,8766,4,3,59,108,109,13077,13079,13087,1,956,116,105,109,97,112,59,1,8888,97,112,59,1,8888,4,24,71,76,82,86,97,98,99,100,101,102,103,104,105,106,108,109,111,112,114,115,116,117,118,119,13142,13165,13217,13229,13247,13330,13359,13414,13420,13508,13513,13579,13602,13626,13631,13762,13767,13855,13936,13995,14214,14285,14312,14432,4,2,103,116,13148,13152,59,3,8921,824,4,2,59,118,13158,13161,3,8811,8402,59,3,8811,824,4,3,101,108,116,13173,13200,13204,102,116,4,2,97,114,13181,13188,114,114,111,119,59,1,8653,105,103,104,116,97,114,114,111,119,59,1,8654,59,3,8920,824,4,2,59,118,13210,13213,3,8810,8402,59,3,8810,824,105,103,104,116,97,114,114,111,119,59,1,8655,4,2,68,100,13235,13241,97,115,104,59,1,8879,97,115,104,59,1,8878,4,5,98,99,110,112,116,13259,13264,13270,13275,13308,108,97,59,1,8711,117,116,101,59,1,324,103,59,3,8736,8402,4,5,59,69,105,111,112,13287,13289,13293,13298,13302,1,8777,59,3,10864,824,100,59,3,8779,824,115,59,1,329,114,111,120,59,1,8777,117,114,4,2,59,97,13316,13318,1,9838,108,4,2,59,115,13325,13327,1,9838,59,1,8469,4,2,115,117,13336,13344,112,5,160,1,59,13342,1,160,109,112,4,2,59,101,13352,13355,3,8782,824,59,3,8783,824,4,5,97,101,111,117,121,13371,13385,13391,13407,13411,4,2,112,114,13377,13380,59,1,10819,111,110,59,1,328,100,105,108,59,1,326,110,103,4,2,59,100,13399,13401,1,8775,111,116,59,3,10861,824,112,59,1,10818,59,1,1085,97,115,104,59,1,8211,4,7,59,65,97,100,113,115,120,13436,13438,13443,13466,13472,13478,13494,1,8800,114,114,59,1,8663,114,4,2,104,114,13450,13454,107,59,1,10532,4,2,59,111,13460,13462,1,8599,119,59,1,8599,111,116,59,3,8784,824,117,105,118,59,1,8802,4,2,101,105,13484,13489,97,114,59,1,10536,109,59,3,8770,824,105,115,116,4,2,59,115,13503,13505,1,8708,59,1,8708,114,59,3,55349,56619,4,4,69,101,115,116,13523,13527,13563,13568,59,3,8807,824,4,3,59,113,115,13535,13537,13559,1,8817,4,3,59,113,115,13545,13547,13551,1,8817,59,3,8807,824,108,97,110,116,59,3,10878,824,59,3,10878,824,105,109,59,1,8821,4,2,59,114,13574,13576,1,8815,59,1,8815,4,3,65,97,112,13587,13592,13597,114,114,59,1,8654,114,114,59,1,8622,97,114,59,1,10994,4,3,59,115,118,13610,13612,13623,1,8715,4,2,59,100,13618,13620,1,8956,59,1,8954,59,1,8715,99,121,59,1,1114,4,7,65,69,97,100,101,115,116,13647,13652,13656,13661,13665,13737,13742,114,114,59,1,8653,59,3,8806,824,114,114,59,1,8602,114,59,1,8229,4,4,59,102,113,115,13675,13677,13703,13725,1,8816,116,4,2,97,114,13684,13691,114,114,111,119,59,1,8602,105,103,104,116,97,114,114,111,119,59,1,8622,4,3,59,113,115,13711,13713,13717,1,8816,59,3,8806,824,108,97,110,116,59,3,10877,824,4,2,59,115,13731,13734,3,10877,824,59,1,8814,105,109,59,1,8820,4,2,59,114,13748,13750,1,8814,105,4,2,59,101,13757,13759,1,8938,59,1,8940,105,100,59,1,8740,4,2,112,116,13773,13778,102,59,3,55349,56671,5,172,3,59,105,110,13787,13789,13829,1,172,110,4,4,59,69,100,118,13800,13802,13806,13812,1,8713,59,3,8953,824,111,116,59,3,8949,824,4,3,97,98,99,13820,13823,13826,59,1,8713,59,1,8951,59,1,8950,105,4,2,59,118,13836,13838,1,8716,4,3,97,98,99,13846,13849,13852,59,1,8716,59,1,8958,59,1,8957,4,3,97,111,114,13863,13892,13899,114,4,4,59,97,115,116,13874,13876,13883,13888,1,8742,108,108,101,108,59,1,8742,108,59,3,11005,8421,59,3,8706,824,108,105,110,116,59,1,10772,4,3,59,99,101,13907,13909,13914,1,8832,117,101,59,1,8928,4,2,59,99,13920,13923,3,10927,824,4,2,59,101,13929,13931,1,8832,113,59,3,10927,824,4,4,65,97,105,116,13946,13951,13971,13982,114,114,59,1,8655,114,114,4,3,59,99,119,13961,13963,13967,1,8603,59,3,10547,824,59,3,8605,824,103,104,116,97,114,114,111,119,59,1,8603,114,105,4,2,59,101,13990,13992,1,8939,59,1,8941,4,7,99,104,105,109,112,113,117,14011,14036,14060,14080,14085,14090,14106,4,4,59,99,101,114,14021,14023,14028,14032,1,8833,117,101,59,1,8929,59,3,10928,824,59,3,55349,56515,111,114,116,4,2,109,112,14045,14050,105,100,59,1,8740,97,114,97,108,108,101,108,59,1,8742,109,4,2,59,101,14067,14069,1,8769,4,2,59,113,14075,14077,1,8772,59,1,8772,105,100,59,1,8740,97,114,59,1,8742,115,117,4,2,98,112,14098,14102,101,59,1,8930,101,59,1,8931,4,3,98,99,112,14114,14157,14171,4,4,59,69,101,115,14124,14126,14130,14133,1,8836,59,3,10949,824,59,1,8840,101,116,4,2,59,101,14141,14144,3,8834,8402,113,4,2,59,113,14151,14153,1,8840,59,3,10949,824,99,4,2,59,101,14164,14166,1,8833,113,59,3,10928,824,4,4,59,69,101,115,14181,14183,14187,14190,1,8837,59,3,10950,824,59,1,8841,101,116,4,2,59,101,14198,14201,3,8835,8402,113,4,2,59,113,14208,14210,1,8841,59,3,10950,824,4,4,103,105,108,114,14224,14228,14238,14242,108,59,1,8825,108,100,101,5,241,1,59,14236,1,241,103,59,1,8824,105,97,110,103,108,101,4,2,108,114,14254,14269,101,102,116,4,2,59,101,14263,14265,1,8938,113,59,1,8940,105,103,104,116,4,2,59,101,14279,14281,1,8939,113,59,1,8941,4,2,59,109,14291,14293,1,957,4,3,59,101,115,14301,14303,14308,1,35,114,111,59,1,8470,112,59,1,8199,4,9,68,72,97,100,103,105,108,114,115,14332,14338,14344,14349,14355,14369,14376,14408,14426,97,115,104,59,1,8877,97,114,114,59,1,10500,112,59,3,8781,8402,97,115,104,59,1,8876,4,2,101,116,14361,14365,59,3,8805,8402,59,3,62,8402,110,102,105,110,59,1,10718,4,3,65,101,116,14384,14389,14393,114,114,59,1,10498,59,3,8804,8402,4,2,59,114,14399,14402,3,60,8402,105,101,59,3,8884,8402,4,2,65,116,14414,14419,114,114,59,1,10499,114,105,101,59,3,8885,8402,105,109,59,3,8764,8402,4,3,65,97,110,14440,14445,14468,114,114,59,1,8662,114,4,2,104,114,14452,14456,107,59,1,10531,4,2,59,111,14462,14464,1,8598,119,59,1,8598,101,97,114,59,1,10535,4,18,83,97,99,100,101,102,103,104,105,108,109,111,112,114,115,116,117,118,14512,14515,14535,14560,14597,14603,14618,14643,14657,14662,14701,14741,14747,14769,14851,14877,14907,14916,59,1,9416,4,2,99,115,14521,14531,117,116,101,5,243,1,59,14529,1,243,116,59,1,8859,4,2,105,121,14541,14557,114,4,2,59,99,14548,14550,1,8858,5,244,1,59,14555,1,244,59,1,1086,4,5,97,98,105,111,115,14572,14577,14583,14587,14591,115,104,59,1,8861,108,97,99,59,1,337,118,59,1,10808,116,59,1,8857,111,108,100,59,1,10684,108,105,103,59,1,339,4,2,99,114,14609,14614,105,114,59,1,10687,59,3,55349,56620,4,3,111,114,116,14626,14630,14640,110,59,1,731,97,118,101,5,242,1,59,14638,1,242,59,1,10689,4,2,98,109,14649,14654,97,114,59,1,10677,59,1,937,110,116,59,1,8750,4,4,97,99,105,116,14672,14677,14693,14698,114,114,59,1,8634,4,2,105,114,14683,14687,114,59,1,10686,111,115,115,59,1,10683,110,101,59,1,8254,59,1,10688,4,3,97,101,105,14709,14714,14719,99,114,59,1,333,103,97,59,1,969,4,3,99,100,110,14727,14733,14736,114,111,110,59,1,959,59,1,10678,117,115,59,1,8854,112,102,59,3,55349,56672,4,3,97,101,108,14755,14759,14764,114,59,1,10679,114,112,59,1,10681,117,115,59,1,8853,4,7,59,97,100,105,111,115,118,14785,14787,14792,14831,14837,14841,14848,1,8744,114,114,59,1,8635,4,4,59,101,102,109,14802,14804,14817,14824,1,10845,114,4,2,59,111,14811,14813,1,8500,102,59,1,8500,5,170,1,59,14822,1,170,5,186,1,59,14829,1,186,103,111,102,59,1,8886,114,59,1,10838,108,111,112,101,59,1,10839,59,1,10843,4,3,99,108,111,14859,14863,14873,114,59,1,8500,97,115,104,5,248,1,59,14871,1,248,108,59,1,8856,105,4,2,108,109,14884,14893,100,101,5,245,1,59,14891,1,245,101,115,4,2,59,97,14901,14903,1,8855,115,59,1,10806,109,108,5,246,1,59,14914,1,246,98,97,114,59,1,9021,4,12,97,99,101,102,104,105,108,109,111,114,115,117,14948,14992,14996,15033,15038,15068,15090,15189,15192,15222,15427,15441,114,4,4,59,97,115,116,14959,14961,14976,14989,1,8741,5,182,2,59,108,14968,14970,1,182,108,101,108,59,1,8741,4,2,105,108,14982,14986,109,59,1,10995,59,1,11005,59,1,8706,121,59,1,1087,114,4,5,99,105,109,112,116,15009,15014,15019,15024,15027,110,116,59,1,37,111,100,59,1,46,105,108,59,1,8240,59,1,8869,101,110,107,59,1,8241,114,59,3,55349,56621,4,3,105,109,111,15046,15057,15063,4,2,59,118,15052,15054,1,966,59,1,981,109,97,116,59,1,8499,110,101,59,1,9742,4,3,59,116,118,15076,15078,15087,1,960,99,104,102,111,114,107,59,1,8916,59,1,982,4,2,97,117,15096,15119,110,4,2,99,107,15103,15115,107,4,2,59,104,15110,15112,1,8463,59,1,8462,118,59,1,8463,115,4,9,59,97,98,99,100,101,109,115,116,15140,15142,15148,15151,15156,15168,15171,15179,15184,1,43,99,105,114,59,1,10787,59,1,8862,105,114,59,1,10786,4,2,111,117,15162,15165,59,1,8724,59,1,10789,59,1,10866,110,5,177,1,59,15177,1,177,105,109,59,1,10790,119,111,59,1,10791,59,1,177,4,3,105,112,117,15200,15208,15213,110,116,105,110,116,59,1,10773,102,59,3,55349,56673,110,100,5,163,1,59,15220,1,163,4,10,59,69,97,99,101,105,110,111,115,117,15244,15246,15249,15253,15258,15334,15347,15367,15416,15421,1,8826,59,1,10931,112,59,1,10935,117,101,59,1,8828,4,2,59,99,15264,15266,1,10927,4,6,59,97,99,101,110,115,15280,15282,15290,15299,15303,15329,1,8826,112,112,114,111,120,59,1,10935,117,114,108,121,101,113,59,1,8828,113,59,1,10927,4,3,97,101,115,15311,15319,15324,112,112,114,111,120,59,1,10937,113,113,59,1,10933,105,109,59,1,8936,105,109,59,1,8830,109,101,4,2,59,115,15342,15344,1,8242,59,1,8473,4,3,69,97,115,15355,15358,15362,59,1,10933,112,59,1,10937,105,109,59,1,8936,4,3,100,102,112,15375,15378,15404,59,1,8719,4,3,97,108,115,15386,15392,15398,108,97,114,59,1,9006,105,110,101,59,1,8978,117,114,102,59,1,8979,4,2,59,116,15410,15412,1,8733,111,59,1,8733,105,109,59,1,8830,114,101,108,59,1,8880,4,2,99,105,15433,15438,114,59,3,55349,56517,59,1,968,110,99,115,112,59,1,8200,4,6,102,105,111,112,115,117,15462,15467,15472,15478,15485,15491,114,59,3,55349,56622,110,116,59,1,10764,112,102,59,3,55349,56674,114,105,109,101,59,1,8279,99,114,59,3,55349,56518,4,3,97,101,111,15499,15520,15534,116,4,2,101,105,15506,15515,114,110,105,111,110,115,59,1,8461,110,116,59,1,10774,115,116,4,2,59,101,15528,15530,1,63,113,59,1,8799,116,5,34,1,59,15540,1,34,4,21,65,66,72,97,98,99,100,101,102,104,105,108,109,110,111,112,114,115,116,117,120,15586,15609,15615,15620,15796,15855,15893,15931,15977,16001,16039,16183,16204,16222,16228,16285,16312,16318,16363,16408,16416,4,3,97,114,116,15594,15599,15603,114,114,59,1,8667,114,59,1,8658,97,105,108,59,1,10524,97,114,114,59,1,10511,97,114,59,1,10596,4,7,99,100,101,110,113,114,116,15636,15651,15656,15664,15687,15696,15770,4,2,101,117,15642,15646,59,3,8765,817,116,101,59,1,341,105,99,59,1,8730,109,112,116,121,118,59,1,10675,103,4,4,59,100,101,108,15675,15677,15680,15683,1,10217,59,1,10642,59,1,10661,101,59,1,10217,117,111,5,187,1,59,15694,1,187,114,4,11,59,97,98,99,102,104,108,112,115,116,119,15721,15723,15727,15739,15742,15746,15750,15754,15758,15763,15767,1,8594,112,59,1,10613,4,2,59,102,15733,15735,1,8677,115,59,1,10528,59,1,10547,115,59,1,10526,107,59,1,8618,112,59,1,8620,108,59,1,10565,105,109,59,1,10612,108,59,1,8611,59,1,8605,4,2,97,105,15776,15781,105,108,59,1,10522,111,4,2,59,110,15788,15790,1,8758,97,108,115,59,1,8474,4,3,97,98,114,15804,15809,15814,114,114,59,1,10509,114,107,59,1,10099,4,2,97,107,15820,15833,99,4,2,101,107,15827,15830,59,1,125,59,1,93,4,2,101,115,15839,15842,59,1,10636,108,4,2,100,117,15849,15852,59,1,10638,59,1,10640,4,4,97,101,117,121,15865,15871,15886,15890,114,111,110,59,1,345,4,2,100,105,15877,15882,105,108,59,1,343,108,59,1,8969,98,59,1,125,59,1,1088,4,4,99,108,113,115,15903,15907,15914,15927,97,59,1,10551,100,104,97,114,59,1,10601,117,111,4,2,59,114,15922,15924,1,8221,59,1,8221,104,59,1,8627,4,3,97,99,103,15939,15966,15970,108,4,4,59,105,112,115,15950,15952,15957,15963,1,8476,110,101,59,1,8475,97,114,116,59,1,8476,59,1,8477,116,59,1,9645,5,174,1,59,15975,1,174,4,3,105,108,114,15985,15991,15997,115,104,116,59,1,10621,111,111,114,59,1,8971,59,3,55349,56623,4,2,97,111,16007,16028,114,4,2,100,117,16014,16017,59,1,8641,4,2,59,108,16023,16025,1,8640,59,1,10604,4,2,59,118,16034,16036,1,961,59,1,1009,4,3,103,110,115,16047,16167,16171,104,116,4,6,97,104,108,114,115,116,16063,16081,16103,16130,16143,16155,114,114,111,119,4,2,59,116,16073,16075,1,8594,97,105,108,59,1,8611,97,114,112,111,111,110,4,2,100,117,16093,16099,111,119,110,59,1,8641,112,59,1,8640,101,102,116,4,2,97,104,16112,16120,114,114,111,119,115,59,1,8644,97,114,112,111,111,110,115,59,1,8652,105,103,104,116,97,114,114,111,119,115,59,1,8649,113,117,105,103,97,114,114,111,119,59,1,8605,104,114,101,101,116,105,109,101,115,59,1,8908,103,59,1,730,105,110,103,100,111,116,115,101,113,59,1,8787,4,3,97,104,109,16191,16196,16201,114,114,59,1,8644,97,114,59,1,8652,59,1,8207,111,117,115,116,4,2,59,97,16214,16216,1,9137,99,104,101,59,1,9137,109,105,100,59,1,10990,4,4,97,98,112,116,16238,16252,16257,16278,4,2,110,114,16244,16248,103,59,1,10221,114,59,1,8702,114,107,59,1,10215,4,3,97,102,108,16265,16269,16273,114,59,1,10630,59,3,55349,56675,117,115,59,1,10798,105,109,101,115,59,1,10805,4,2,97,112,16291,16304,114,4,2,59,103,16298,16300,1,41,116,59,1,10644,111,108,105,110,116,59,1,10770,97,114,114,59,1,8649,4,4,97,99,104,113,16328,16334,16339,16342,113,117,111,59,1,8250,114,59,3,55349,56519,59,1,8625,4,2,98,117,16348,16351,59,1,93,111,4,2,59,114,16358,16360,1,8217,59,1,8217,4,3,104,105,114,16371,16377,16383,114,101,101,59,1,8908,109,101,115,59,1,8906,105,4,4,59,101,102,108,16394,16396,16399,16402,1,9657,59,1,8885,59,1,9656,116,114,105,59,1,10702,108,117,104,97,114,59,1,10600,59,1,8478,4,19,97,98,99,100,101,102,104,105,108,109,111,112,113,114,115,116,117,119,122,16459,16466,16472,16572,16590,16672,16687,16746,16844,16850,16924,16963,16988,17115,17121,17154,17206,17614,17656,99,117,116,101,59,1,347,113,117,111,59,1,8218,4,10,59,69,97,99,101,105,110,112,115,121,16494,16496,16499,16513,16518,16531,16536,16556,16564,16569,1,8827,59,1,10932,4,2,112,114,16505,16508,59,1,10936,111,110,59,1,353,117,101,59,1,8829,4,2,59,100,16524,16526,1,10928,105,108,59,1,351,114,99,59,1,349,4,3,69,97,115,16544,16547,16551,59,1,10934,112,59,1,10938,105,109,59,1,8937,111,108,105,110,116,59,1,10771,105,109,59,1,8831,59,1,1089,111,116,4,3,59,98,101,16582,16584,16587,1,8901,59,1,8865,59,1,10854,4,7,65,97,99,109,115,116,120,16606,16611,16634,16642,16646,16652,16668,114,114,59,1,8664,114,4,2,104,114,16618,16622,107,59,1,10533,4,2,59,111,16628,16630,1,8600,119,59,1,8600,116,5,167,1,59,16640,1,167,105,59,1,59,119,97,114,59,1,10537,109,4,2,105,110,16659,16665,110,117,115,59,1,8726,59,1,8726,116,59,1,10038,114,4,2,59,111,16679,16682,3,55349,56624,119,110,59,1,8994,4,4,97,99,111,121,16697,16702,16716,16739,114,112,59,1,9839,4,2,104,121,16708,16713,99,121,59,1,1097,59,1,1096,114,116,4,2,109,112,16724,16729,105,100,59,1,8739,97,114,97,108,108,101,108,59,1,8741,5,173,1,59,16744,1,173,4,2,103,109,16752,16770,109,97,4,3,59,102,118,16762,16764,16767,1,963,59,1,962,59,1,962,4,8,59,100,101,103,108,110,112,114,16788,16790,16795,16806,16817,16828,16832,16838,1,8764,111,116,59,1,10858,4,2,59,113,16801,16803,1,8771,59,1,8771,4,2,59,69,16812,16814,1,10910,59,1,10912,4,2,59,69,16823,16825,1,10909,59,1,10911,101,59,1,8774,108,117,115,59,1,10788,97,114,114,59,1,10610,97,114,114,59,1,8592,4,4,97,101,105,116,16860,16883,16891,16904,4,2,108,115,16866,16878,108,115,101,116,109,105,110,117,115,59,1,8726,104,112,59,1,10803,112,97,114,115,108,59,1,10724,4,2,100,108,16897,16900,59,1,8739,101,59,1,8995,4,2,59,101,16910,16912,1,10922,4,2,59,115,16918,16920,1,10924,59,3,10924,65024,4,3,102,108,112,16932,16938,16958,116,99,121,59,1,1100,4,2,59,98,16944,16946,1,47,4,2,59,97,16952,16954,1,10692,114,59,1,9023,102,59,3,55349,56676,97,4,2,100,114,16970,16985,101,115,4,2,59,117,16978,16980,1,9824,105,116,59,1,9824,59,1,8741,4,3,99,115,117,16996,17028,17089,4,2,97,117,17002,17015,112,4,2,59,115,17009,17011,1,8851,59,3,8851,65024,112,4,2,59,115,17022,17024,1,8852,59,3,8852,65024,117,4,2,98,112,17035,17062,4,3,59,101,115,17043,17045,17048,1,8847,59,1,8849,101,116,4,2,59,101,17056,17058,1,8847,113,59,1,8849,4,3,59,101,115,17070,17072,17075,1,8848,59,1,8850,101,116,4,2,59,101,17083,17085,1,8848,113,59,1,8850,4,3,59,97,102,17097,17099,17112,1,9633,114,4,2,101,102,17106,17109,59,1,9633,59,1,9642,59,1,9642,97,114,114,59,1,8594,4,4,99,101,109,116,17131,17136,17142,17148,114,59,3,55349,56520,116,109,110,59,1,8726,105,108,101,59,1,8995,97,114,102,59,1,8902,4,2,97,114,17160,17172,114,4,2,59,102,17167,17169,1,9734,59,1,9733,4,2,97,110,17178,17202,105,103,104,116,4,2,101,112,17188,17197,112,115,105,108,111,110,59,1,1013,104,105,59,1,981,115,59,1,175,4,5,98,99,109,110,112,17218,17351,17420,17423,17427,4,9,59,69,100,101,109,110,112,114,115,17238,17240,17243,17248,17261,17267,17279,17285,17291,1,8834,59,1,10949,111,116,59,1,10941,4,2,59,100,17254,17256,1,8838,111,116,59,1,10947,117,108,116,59,1,10945,4,2,69,101,17273,17276,59,1,10955,59,1,8842,108,117,115,59,1,10943,97,114,114,59,1,10617,4,3,101,105,117,17299,17335,17339,116,4,3,59,101,110,17308,17310,17322,1,8834,113,4,2,59,113,17317,17319,1,8838,59,1,10949,101,113,4,2,59,113,17330,17332,1,8842,59,1,10955,109,59,1,10951,4,2,98,112,17345,17348,59,1,10965,59,1,10963,99,4,6,59,97,99,101,110,115,17366,17368,17376,17385,17389,17415,1,8827,112,112,114,111,120,59,1,10936,117,114,108,121,101,113,59,1,8829,113,59,1,10928,4,3,97,101,115,17397,17405,17410,112,112,114,111,120,59,1,10938,113,113,59,1,10934,105,109,59,1,8937,105,109,59,1,8831,59,1,8721,103,59,1,9834,4,13,49,50,51,59,69,100,101,104,108,109,110,112,115,17455,17462,17469,17476,17478,17481,17496,17509,17524,17530,17536,17548,17554,5,185,1,59,17460,1,185,5,178,1,59,17467,1,178,5,179,1,59,17474,1,179,1,8835,59,1,10950,4,2,111,115,17487,17491,116,59,1,10942,117,98,59,1,10968,4,2,59,100,17502,17504,1,8839,111,116,59,1,10948,115,4,2,111,117,17516,17520,108,59,1,10185,98,59,1,10967,97,114,114,59,1,10619,117,108,116,59,1,10946,4,2,69,101,17542,17545,59,1,10956,59,1,8843,108,117,115,59,1,10944,4,3,101,105,117,17562,17598,17602,116,4,3,59,101,110,17571,17573,17585,1,8835,113,4,2,59,113,17580,17582,1,8839,59,1,10950,101,113,4,2,59,113,17593,17595,1,8843,59,1,10956,109,59,1,10952,4,2,98,112,17608,17611,59,1,10964,59,1,10966,4,3,65,97,110,17622,17627,17650,114,114,59,1,8665,114,4,2,104,114,17634,17638,107,59,1,10534,4,2,59,111,17644,17646,1,8601,119,59,1,8601,119,97,114,59,1,10538,108,105,103,5,223,1,59,17664,1,223,4,13,97,98,99,100,101,102,104,105,111,112,114,115,119,17694,17709,17714,17737,17742,17749,17754,17860,17905,17957,17964,18090,18122,4,2,114,117,17700,17706,103,101,116,59,1,8982,59,1,964,114,107,59,1,9140,4,3,97,101,121,17722,17728,17734,114,111,110,59,1,357,100,105,108,59,1,355,59,1,1090,111,116,59,1,8411,108,114,101,99,59,1,8981,114,59,3,55349,56625,4,4,101,105,107,111,17764,17805,17836,17851,4,2,114,116,17770,17786,101,4,2,52,102,17777,17780,59,1,8756,111,114,101,59,1,8756,97,4,3,59,115,118,17795,17797,17802,1,952,121,109,59,1,977,59,1,977,4,2,99,110,17811,17831,107,4,2,97,115,17818,17826,112,112,114,111,120,59,1,8776,105,109,59,1,8764,115,112,59,1,8201,4,2,97,115,17842,17846,112,59,1,8776,105,109,59,1,8764,114,110,5,254,1,59,17858,1,254,4,3,108,109,110,17868,17873,17901,100,101,59,1,732,101,115,5,215,3,59,98,100,17884,17886,17898,1,215,4,2,59,97,17892,17894,1,8864,114,59,1,10801,59,1,10800,116,59,1,8749,4,3,101,112,115,17913,17917,17953,97,59,1,10536,4,4,59,98,99,102,17927,17929,17934,17939,1,8868,111,116,59,1,9014,105,114,59,1,10993,4,2,59,111,17945,17948,3,55349,56677,114,107,59,1,10970,97,59,1,10537,114,105,109,101,59,1,8244,4,3,97,105,112,17972,17977,18082,100,101,59,1,8482,4,7,97,100,101,109,112,115,116,17993,18051,18056,18059,18066,18072,18076,110,103,108,101,4,5,59,100,108,113,114,18009,18011,18017,18032,18035,1,9653,111,119,110,59,1,9663,101,102,116,4,2,59,101,18026,18028,1,9667,113,59,1,8884,59,1,8796,105,103,104,116,4,2,59,101,18045,18047,1,9657,113,59,1,8885,111,116,59,1,9708,59,1,8796,105,110,117,115,59,1,10810,108,117,115,59,1,10809,98,59,1,10701,105,109,101,59,1,10811,101,122,105,117,109,59,1,9186,4,3,99,104,116,18098,18111,18116,4,2,114,121,18104,18108,59,3,55349,56521,59,1,1094,99,121,59,1,1115,114,111,107,59,1,359,4,2,105,111,18128,18133,120,116,59,1,8812,104,101,97,100,4,2,108,114,18143,18154,101,102,116,97,114,114,111,119,59,1,8606,105,103,104,116,97,114,114,111,119,59,1,8608,4,18,65,72,97,98,99,100,102,103,104,108,109,111,112,114,115,116,117,119,18204,18209,18214,18234,18250,18268,18292,18308,18319,18343,18379,18397,18413,18504,18547,18553,18584,18603,114,114,59,1,8657,97,114,59,1,10595,4,2,99,114,18220,18230,117,116,101,5,250,1,59,18228,1,250,114,59,1,8593,114,4,2,99,101,18241,18245,121,59,1,1118,118,101,59,1,365,4,2,105,121,18256,18265,114,99,5,251,1,59,18263,1,251,59,1,1091,4,3,97,98,104,18276,18281,18287,114,114,59,1,8645,108,97,99,59,1,369,97,114,59,1,10606,4,2,105,114,18298,18304,115,104,116,59,1,10622,59,3,55349,56626,114,97,118,101,5,249,1,59,18317,1,249,4,2,97,98,18325,18338,114,4,2,108,114,18332,18335,59,1,8639,59,1,8638,108,107,59,1,9600,4,2,99,116,18349,18374,4,2,111,114,18355,18369,114,110,4,2,59,101,18363,18365,1,8988,114,59,1,8988,111,112,59,1,8975,114,105,59,1,9720,4,2,97,108,18385,18390,99,114,59,1,363,5,168,1,59,18395,1,168,4,2,103,112,18403,18408,111,110,59,1,371,102,59,3,55349,56678,4,6,97,100,104,108,115,117,18427,18434,18445,18470,18475,18494,114,114,111,119,59,1,8593,111,119,110,97,114,114,111,119,59,1,8597,97,114,112,111,111,110,4,2,108,114,18457,18463,101,102,116,59,1,8639,105,103,104,116,59,1,8638,117,115,59,1,8846,105,4,3,59,104,108,18484,18486,18489,1,965,59,1,978,111,110,59,1,965,112,97,114,114,111,119,115,59,1,8648,4,3,99,105,116,18512,18537,18542,4,2,111,114,18518,18532,114,110,4,2,59,101,18526,18528,1,8989,114,59,1,8989,111,112,59,1,8974,110,103,59,1,367,114,105,59,1,9721,99,114,59,3,55349,56522,4,3,100,105,114,18561,18566,18572,111,116,59,1,8944,108,100,101,59,1,361,105,4,2,59,102,18579,18581,1,9653,59,1,9652,4,2,97,109,18590,18595,114,114,59,1,8648,108,5,252,1,59,18601,1,252,97,110,103,108,101,59,1,10663,4,15,65,66,68,97,99,100,101,102,108,110,111,112,114,115,122,18643,18648,18661,18667,18847,18851,18857,18904,18909,18915,18931,18937,18943,18949,18996,114,114,59,1,8661,97,114,4,2,59,118,18656,18658,1,10984,59,1,10985,97,115,104,59,1,8872,4,2,110,114,18673,18679,103,114,116,59,1,10652,4,7,101,107,110,112,114,115,116,18695,18704,18711,18720,18742,18754,18810,112,115,105,108,111,110,59,1,1013,97,112,112,97,59,1,1008,111,116,104,105,110,103,59,1,8709,4,3,104,105,114,18728,18732,18735,105,59,1,981,59,1,982,111,112,116,111,59,1,8733,4,2,59,104,18748,18750,1,8597,111,59,1,1009,4,2,105,117,18760,18766,103,109,97,59,1,962,4,2,98,112,18772,18791,115,101,116,110,101,113,4,2,59,113,18784,18787,3,8842,65024,59,3,10955,65024,115,101,116,110,101,113,4,2,59,113,18803,18806,3,8843,65024,59,3,10956,65024,4,2,104,114,18816,18822,101,116,97,59,1,977,105,97,110,103,108,101,4,2,108,114,18834,18840,101,102,116,59,1,8882,105,103,104,116,59,1,8883,121,59,1,1074,97,115,104,59,1,8866,4,3,101,108,114,18865,18884,18890,4,3,59,98,101,18873,18875,18880,1,8744,97,114,59,1,8891,113,59,1,8794,108,105,112,59,1,8942,4,2,98,116,18896,18901,97,114,59,1,124,59,1,124,114,59,3,55349,56627,116,114,105,59,1,8882,115,117,4,2,98,112,18923,18927,59,3,8834,8402,59,3,8835,8402,112,102,59,3,55349,56679,114,111,112,59,1,8733,116,114,105,59,1,8883,4,2,99,117,18955,18960,114,59,3,55349,56523,4,2,98,112,18966,18981,110,4,2,69,101,18973,18977,59,3,10955,65024,59,3,8842,65024,110,4,2,69,101,18988,18992,59,3,10956,65024,59,3,8843,65024,105,103,122,97,103,59,1,10650,4,7,99,101,102,111,112,114,115,19020,19026,19061,19066,19072,19075,19089,105,114,99,59,1,373,4,2,100,105,19032,19055,4,2,98,103,19038,19043,97,114,59,1,10847,101,4,2,59,113,19050,19052,1,8743,59,1,8793,101,114,112,59,1,8472,114,59,3,55349,56628,112,102,59,3,55349,56680,59,1,8472,4,2,59,101,19081,19083,1,8768,97,116,104,59,1,8768,99,114,59,3,55349,56524,4,14,99,100,102,104,105,108,109,110,111,114,115,117,118,119,19125,19146,19152,19157,19173,19176,19192,19197,19202,19236,19252,19269,19286,19291,4,3,97,105,117,19133,19137,19142,112,59,1,8898,114,99,59,1,9711,112,59,1,8899,116,114,105,59,1,9661,114,59,3,55349,56629,4,2,65,97,19163,19168,114,114,59,1,10234,114,114,59,1,10231,59,1,958,4,2,65,97,19182,19187,114,114,59,1,10232,114,114,59,1,10229,97,112,59,1,10236,105,115,59,1,8955,4,3,100,112,116,19210,19215,19230,111,116,59,1,10752,4,2,102,108,19221,19225,59,3,55349,56681,117,115,59,1,10753,105,109,101,59,1,10754,4,2,65,97,19242,19247,114,114,59,1,10233,114,114,59,1,10230,4,2,99,113,19258,19263,114,59,3,55349,56525,99,117,112,59,1,10758,4,2,112,116,19275,19281,108,117,115,59,1,10756,114,105,59,1,9651,101,101,59,1,8897,101,100,103,101,59,1,8896,4,8,97,99,101,102,105,111,115,117,19316,19335,19349,19357,19362,19367,19373,19379,99,4,2,117,121,19323,19332,116,101,5,253,1,59,19330,1,253,59,1,1103,4,2,105,121,19341,19346,114,99,59,1,375,59,1,1099,110,5,165,1,59,19355,1,165,114,59,3,55349,56630,99,121,59,1,1111,112,102,59,3,55349,56682,99,114,59,3,55349,56526,4,2,99,109,19385,19389,121,59,1,1102,108,5,255,1,59,19395,1,255,4,10,97,99,100,101,102,104,105,111,115,119,19419,19426,19441,19446,19462,19467,19472,19480,19486,19492,99,117,116,101,59,1,378,4,2,97,121,19432,19438,114,111,110,59,1,382,59,1,1079,111,116,59,1,380,4,2,101,116,19452,19458,116,114,102,59,1,8488,97,59,1,950,114,59,3,55349,56631,99,121,59,1,1078,103,114,97,114,114,59,1,8669,112,102,59,3,55349,56683,99,114,59,3,55349,56527,4,2,106,110,19498,19501,59,1,8205,106,59,1,8204])
const br=Ir,Lr=Cr,xr=Rr,Mr=kr,Pr=Lr.CODE_POINTS,vr=Lr.CODE_POINT_SEQUENCES,Dr={
128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,
137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,
148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,
156:339,158:382,159:376
},Fr='DATA_STATE',Hr='RCDATA_STATE',wr='RAWTEXT_STATE',Br='SCRIPT_DATA_STATE',Ur='PLAINTEXT_STATE',Gr='TAG_OPEN_STATE',Kr='END_TAG_OPEN_STATE',zr='TAG_NAME_STATE',jr='RCDATA_LESS_THAN_SIGN_STATE',Yr='RCDATA_END_TAG_OPEN_STATE',Qr='RCDATA_END_TAG_NAME_STATE',Wr='RAWTEXT_LESS_THAN_SIGN_STATE',qr='RAWTEXT_END_TAG_OPEN_STATE',Vr='RAWTEXT_END_TAG_NAME_STATE',Xr='SCRIPT_DATA_LESS_THAN_SIGN_STATE',$r='SCRIPT_DATA_END_TAG_OPEN_STATE',Zr='SCRIPT_DATA_END_TAG_NAME_STATE',Jr='SCRIPT_DATA_ESCAPE_START_STATE',ei='SCRIPT_DATA_ESCAPE_START_DASH_STATE',ti='SCRIPT_DATA_ESCAPED_STATE',ni='SCRIPT_DATA_ESCAPED_DASH_STATE',ri='SCRIPT_DATA_ESCAPED_DASH_DASH_STATE',ii='SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE',oi='SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE',si='SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE',ai='SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE',li='SCRIPT_DATA_DOUBLE_ESCAPED_STATE',ci='SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE',ui='SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE',hi='SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE',pi='SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE',fi='BEFORE_ATTRIBUTE_NAME_STATE',mi='ATTRIBUTE_NAME_STATE',di='AFTER_ATTRIBUTE_NAME_STATE',Ti='BEFORE_ATTRIBUTE_VALUE_STATE',Ei='ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE',gi='ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE',_i='ATTRIBUTE_VALUE_UNQUOTED_STATE',Ai='AFTER_ATTRIBUTE_VALUE_QUOTED_STATE',Ci='SELF_CLOSING_START_TAG_STATE',Ni='BOGUS_COMMENT_STATE',ki='MARKUP_DECLARATION_OPEN_STATE',Oi='COMMENT_START_STATE',Si='COMMENT_START_DASH_STATE',yi='COMMENT_STATE',Ii='COMMENT_LESS_THAN_SIGN_STATE',Ri='COMMENT_LESS_THAN_SIGN_BANG_STATE',bi='COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE',Li='COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE',xi='COMMENT_END_DASH_STATE',Mi='COMMENT_END_STATE',Pi='COMMENT_END_BANG_STATE',vi='DOCTYPE_STATE',Di='BEFORE_DOCTYPE_NAME_STATE',Fi='DOCTYPE_NAME_STATE',Hi='AFTER_DOCTYPE_NAME_STATE',wi='AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE',Bi='BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE',Ui='DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE',Gi='DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE',Ki='AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE',zi='BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE',ji='AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE',Yi='BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE',Qi='DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE',Wi='DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE',qi='AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE',Vi='BOGUS_DOCTYPE_STATE',Xi='CDATA_SECTION_STATE',$i='CDATA_SECTION_BRACKET_STATE',Zi='CDATA_SECTION_END_STATE',Ji='CHARACTER_REFERENCE_STATE',eo='NAMED_CHARACTER_REFERENCE_STATE',to='AMBIGUOS_AMPERSAND_STATE',no='NUMERIC_CHARACTER_REFERENCE_STATE',ro='HEXADEMICAL_CHARACTER_REFERENCE_START_STATE',io='DECIMAL_CHARACTER_REFERENCE_START_STATE',oo='HEXADEMICAL_CHARACTER_REFERENCE_STATE',so='DECIMAL_CHARACTER_REFERENCE_STATE',ao='NUMERIC_CHARACTER_REFERENCE_END_STATE'
function lo(e){
return e===Pr.SPACE||e===Pr.LINE_FEED||e===Pr.TABULATION||e===Pr.FORM_FEED
}function co(e){return e>=Pr.DIGIT_0&&e<=Pr.DIGIT_9}function uo(e){
return e>=Pr.LATIN_CAPITAL_A&&e<=Pr.LATIN_CAPITAL_Z}function ho(e){
return e>=Pr.LATIN_SMALL_A&&e<=Pr.LATIN_SMALL_Z}function po(e){
return ho(e)||uo(e)}function fo(e){return po(e)||co(e)}function mo(e){
return e>=Pr.LATIN_CAPITAL_A&&e<=Pr.LATIN_CAPITAL_F}function To(e){
return e>=Pr.LATIN_SMALL_A&&e<=Pr.LATIN_SMALL_F}function Eo(e){
return e+32}function go(e){
return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(e>>>10&1023|55296)+String.fromCharCode(56320|1023&e))
}function _o(e){return String.fromCharCode(Eo(e))}function Ao(e,t){
const n=xr[++e]
let r=++e,i=r+n-1
for(;r<=i;){const e=r+i>>>1,o=xr[e]
if(o<t)r=e+1
else{if(!(o>t))return xr[e+n]
i=e-1}}return-1}let Co=class{constructor(){
this.preprocessor=new br,this.tokenQueue=[],
this.allowCDATA=!1,this.state=Fr,this.returnState='',
this.charRefCode=-1,this.tempBuff=[],
this.lastStartTagName='',this.consumedAfterSnapshot=-1,
this.active=!1,this.currentCharacterToken=null,
this.currentToken=null,this.currentAttr=null}_err(){}
_errOnNextCodePoint(e){this._consume(),this._err(e),this._unconsume()}
getNextToken(){for(;!this.tokenQueue.length&&this.active;){
this.consumedAfterSnapshot=0
const e=this._consume()
this._ensureHibernation()||this[this.state](e)}
return this.tokenQueue.shift()}write(e,t){
this.active=!0,this.preprocessor.write(e,t)}insertHtmlAtCurrentPos(e){
this.active=!0,this.preprocessor.insertHtmlAtCurrentPos(e)}
_ensureHibernation(){if(this.preprocessor.endOfChunkHit){
for(;this.consumedAfterSnapshot>0;this.consumedAfterSnapshot--)this.preprocessor.retreat()
return this.active=!1,this.tokenQueue.push({type:Co.HIBERNATION_TOKEN
}),!0}return!1}_consume(){
return this.consumedAfterSnapshot++,this.preprocessor.advance()}
_unconsume(){this.consumedAfterSnapshot--,this.preprocessor.retreat()}
_reconsumeInState(e){this.state=e,this._unconsume()}
_consumeSequenceIfMatch(e,t,n){let r=0,i=!0
const o=e.length
let s,a=0,l=t
for(;a<o;a++){if(a>0&&(l=this._consume(),r++),l===Pr.EOF){i=!1
break}if(s=e[a],l!==s&&(n||l!==Eo(s))){i=!1
break}}if(!i)for(;r--;)this._unconsume()
return i}_isTempBufferEqualToScriptString(){
if(this.tempBuff.length!==vr.SCRIPT_STRING.length)return!1
for(let e=0;e<this.tempBuff.length;e++)if(this.tempBuff[e]!==vr.SCRIPT_STRING[e])return!1
return!0}_createStartTagToken(){this.currentToken={
type:Co.START_TAG_TOKEN,tagName:'',selfClosing:!1,ackSelfClosing:!1,
attrs:[]}}_createEndTagToken(){this.currentToken={
type:Co.END_TAG_TOKEN,tagName:'',selfClosing:!1,attrs:[]}}
_createCommentToken(){this.currentToken={type:Co.COMMENT_TOKEN,data:''
}}_createDoctypeToken(e){this.currentToken={type:Co.DOCTYPE_TOKEN,
name:e,forceQuirks:!1,publicId:null,systemId:null}}
_createCharacterToken(e,t){this.currentCharacterToken={type:e,chars:t}
}_createEOFToken(){this.currentToken={type:Co.EOF_TOKEN}}
_createAttr(e){this.currentAttr={name:e,value:''}}_leaveAttrName(e){
null===Co.getTokenAttr(this.currentToken,this.currentAttr.name)?this.currentToken.attrs.push(this.currentAttr):this._err(Mr.duplicateAttribute),
this.state=e}_leaveAttrValue(e){this.state=e}_emitCurrentToken(){
this._emitCurrentCharacterToken()
const e=this.currentToken
this.currentToken=null,e.type===Co.START_TAG_TOKEN?this.lastStartTagName=e.tagName:e.type===Co.END_TAG_TOKEN&&(e.attrs.length>0&&this._err(Mr.endTagWithAttributes),
e.selfClosing&&this._err(Mr.endTagWithTrailingSolidus)),
this.tokenQueue.push(e)}_emitCurrentCharacterToken(){
this.currentCharacterToken&&(this.tokenQueue.push(this.currentCharacterToken),
this.currentCharacterToken=null)}_emitEOFToken(){
this._createEOFToken(),this._emitCurrentToken()}
_appendCharToCurrentCharacterToken(e,t){
this.currentCharacterToken&&this.currentCharacterToken.type!==e&&this._emitCurrentCharacterToken(),
this.currentCharacterToken?this.currentCharacterToken.chars+=t:this._createCharacterToken(e,t)
}_emitCodePoint(e){let t=Co.CHARACTER_TOKEN
lo(e)?t=Co.WHITESPACE_CHARACTER_TOKEN:e===Pr.NULL&&(t=Co.NULL_CHARACTER_TOKEN),this._appendCharToCurrentCharacterToken(t,go(e))
}_emitSeveralCodePoints(e){
for(let t=0;t<e.length;t++)this._emitCodePoint(e[t])}_emitChars(e){
this._appendCharToCurrentCharacterToken(Co.CHARACTER_TOKEN,e)}
_matchNamedCharacterReference(e){let t=null,n=1,r=Ao(0,e)
for(this.tempBuff.push(e);r>-1;){const e=xr[r],i=e<7
i&&1&e&&(t=2&e?[xr[++r],xr[++r]]:[xr[++r]],n=0)
const o=this._consume()
if(this.tempBuff.push(o),n++,o===Pr.EOF)break
r=i?4&e?Ao(r,o):-1:o===e?++r:-1}
for(;n--;)this.tempBuff.pop(),this._unconsume()
return t}_isCharacterReferenceInAttribute(){
return this.returnState===Ei||this.returnState===gi||this.returnState===_i
}_isCharacterReferenceAttributeQuirk(e){
if(!e&&this._isCharacterReferenceInAttribute()){
const e=this._consume()
return this._unconsume(),e===Pr.EQUALS_SIGN||fo(e)}return!1}
_flushCodePointsConsumedAsCharacterReference(){
if(this._isCharacterReferenceInAttribute())for(let e=0;e<this.tempBuff.length;e++)this.currentAttr.value+=go(this.tempBuff[e])
else this._emitSeveralCodePoints(this.tempBuff)
this.tempBuff=[]}[Fr](e){
this.preprocessor.dropParsedChunk(),e===Pr.LESS_THAN_SIGN?this.state=Gr:e===Pr.AMPERSAND?(this.returnState=Fr,
this.state=Ji):e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this._emitCodePoint(e)):e===Pr.EOF?this._emitEOFToken():this._emitCodePoint(e)
}[Hr](e){
this.preprocessor.dropParsedChunk(),e===Pr.AMPERSAND?(this.returnState=Hr,
this.state=Ji):e===Pr.LESS_THAN_SIGN?this.state=jr:e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this._emitChars(Lr.REPLACEMENT_CHARACTER)):e===Pr.EOF?this._emitEOFToken():this._emitCodePoint(e)
}[wr](e){
this.preprocessor.dropParsedChunk(),e===Pr.LESS_THAN_SIGN?this.state=Wr:e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this._emitChars(Lr.REPLACEMENT_CHARACTER)):e===Pr.EOF?this._emitEOFToken():this._emitCodePoint(e)
}[Br](e){
this.preprocessor.dropParsedChunk(),e===Pr.LESS_THAN_SIGN?this.state=Xr:e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this._emitChars(Lr.REPLACEMENT_CHARACTER)):e===Pr.EOF?this._emitEOFToken():this._emitCodePoint(e)
}[Ur](e){
this.preprocessor.dropParsedChunk(),e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this._emitChars(Lr.REPLACEMENT_CHARACTER)):e===Pr.EOF?this._emitEOFToken():this._emitCodePoint(e)
}[Gr](e){
e===Pr.EXCLAMATION_MARK?this.state=ki:e===Pr.SOLIDUS?this.state=Kr:po(e)?(this._createStartTagToken(),
this._reconsumeInState(zr)):e===Pr.QUESTION_MARK?(this._err(Mr.unexpectedQuestionMarkInsteadOfTagName),
this._createCommentToken(),
this._reconsumeInState(Ni)):e===Pr.EOF?(this._err(Mr.eofBeforeTagName),
this._emitChars('<'),
this._emitEOFToken()):(this._err(Mr.invalidFirstCharacterOfTagName),
this._emitChars('<'),this._reconsumeInState(Fr))}[Kr](e){
po(e)?(this._createEndTagToken(),
this._reconsumeInState(zr)):e===Pr.GREATER_THAN_SIGN?(this._err(Mr.missingEndTagName),
this.state=Fr):e===Pr.EOF?(this._err(Mr.eofBeforeTagName),
this._emitChars('</'),
this._emitEOFToken()):(this._err(Mr.invalidFirstCharacterOfTagName),
this._createCommentToken(),this._reconsumeInState(Ni))}[zr](e){
lo(e)?this.state=fi:e===Pr.SOLIDUS?this.state=Ci:e===Pr.GREATER_THAN_SIGN?(this.state=Fr,
this._emitCurrentToken()):uo(e)?this.currentToken.tagName+=_o(e):e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this.currentToken.tagName+=Lr.REPLACEMENT_CHARACTER):e===Pr.EOF?(this._err(Mr.eofInTag),
this._emitEOFToken()):this.currentToken.tagName+=go(e)}[jr](e){
e===Pr.SOLIDUS?(this.tempBuff=[],
this.state=Yr):(this._emitChars('<'),this._reconsumeInState(Hr))}
[Yr](e){
po(e)?(this._createEndTagToken(),this._reconsumeInState(Qr)):(this._emitChars('</'),
this._reconsumeInState(Hr))}[Qr](e){
if(uo(e))this.currentToken.tagName+=_o(e),this.tempBuff.push(e)
else if(ho(e))this.currentToken.tagName+=go(e),this.tempBuff.push(e)
else{if(this.lastStartTagName===this.currentToken.tagName){
if(lo(e))return void(this.state=fi)
if(e===Pr.SOLIDUS)return void(this.state=Ci)
if(e===Pr.GREATER_THAN_SIGN)return this.state=Fr,void this._emitCurrentToken()
}
this._emitChars('</'),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState(Hr)
}}[Wr](e){
e===Pr.SOLIDUS?(this.tempBuff=[],this.state=qr):(this._emitChars('<'),
this._reconsumeInState(wr))}[qr](e){
po(e)?(this._createEndTagToken(),this._reconsumeInState(Vr)):(this._emitChars('</'),
this._reconsumeInState(wr))}[Vr](e){
if(uo(e))this.currentToken.tagName+=_o(e),this.tempBuff.push(e)
else if(ho(e))this.currentToken.tagName+=go(e),this.tempBuff.push(e)
else{if(this.lastStartTagName===this.currentToken.tagName){
if(lo(e))return void(this.state=fi)
if(e===Pr.SOLIDUS)return void(this.state=Ci)
if(e===Pr.GREATER_THAN_SIGN)return this._emitCurrentToken(),void(this.state=Fr)
}
this._emitChars('</'),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState(wr)
}}[Xr](e){
e===Pr.SOLIDUS?(this.tempBuff=[],this.state=$r):e===Pr.EXCLAMATION_MARK?(this.state=Jr,
this._emitChars('<!')):(this._emitChars('<'),
this._reconsumeInState(Br))}[$r](e){
po(e)?(this._createEndTagToken(),this._reconsumeInState(Zr)):(this._emitChars('</'),
this._reconsumeInState(Br))}[Zr](e){
if(uo(e))this.currentToken.tagName+=_o(e),this.tempBuff.push(e)
else if(ho(e))this.currentToken.tagName+=go(e),this.tempBuff.push(e)
else{if(this.lastStartTagName===this.currentToken.tagName){
if(lo(e))return void(this.state=fi)
if(e===Pr.SOLIDUS)return void(this.state=Ci)
if(e===Pr.GREATER_THAN_SIGN)return this._emitCurrentToken(),void(this.state=Fr)
}
this._emitChars('</'),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState(Br)
}}[Jr](e){
e===Pr.HYPHEN_MINUS?(this.state=ei,this._emitChars('-')):this._reconsumeInState(Br)
}[ei](e){
e===Pr.HYPHEN_MINUS?(this.state=ri,this._emitChars('-')):this._reconsumeInState(Br)
}[ti](e){
e===Pr.HYPHEN_MINUS?(this.state=ni,this._emitChars('-')):e===Pr.LESS_THAN_SIGN?this.state=ii:e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this._emitChars(Lr.REPLACEMENT_CHARACTER)):e===Pr.EOF?(this._err(Mr.eofInScriptHtmlCommentLikeText),
this._emitEOFToken()):this._emitCodePoint(e)}[ni](e){
e===Pr.HYPHEN_MINUS?(this.state=ri,
this._emitChars('-')):e===Pr.LESS_THAN_SIGN?this.state=ii:e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this.state=ti,
this._emitChars(Lr.REPLACEMENT_CHARACTER)):e===Pr.EOF?(this._err(Mr.eofInScriptHtmlCommentLikeText),
this._emitEOFToken()):(this.state=ti,this._emitCodePoint(e))}[ri](e){
e===Pr.HYPHEN_MINUS?this._emitChars('-'):e===Pr.LESS_THAN_SIGN?this.state=ii:e===Pr.GREATER_THAN_SIGN?(this.state=Br,
this._emitChars('>')):e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this.state=ti,
this._emitChars(Lr.REPLACEMENT_CHARACTER)):e===Pr.EOF?(this._err(Mr.eofInScriptHtmlCommentLikeText),
this._emitEOFToken()):(this.state=ti,this._emitCodePoint(e))}[ii](e){
e===Pr.SOLIDUS?(this.tempBuff=[],
this.state=oi):po(e)?(this.tempBuff=[],this._emitChars('<'),
this._reconsumeInState(ai)):(this._emitChars('<'),
this._reconsumeInState(ti))}[oi](e){
po(e)?(this._createEndTagToken(),this._reconsumeInState(si)):(this._emitChars('</'),
this._reconsumeInState(ti))}[si](e){
if(uo(e))this.currentToken.tagName+=_o(e),this.tempBuff.push(e)
else if(ho(e))this.currentToken.tagName+=go(e),this.tempBuff.push(e)
else{if(this.lastStartTagName===this.currentToken.tagName){
if(lo(e))return void(this.state=fi)
if(e===Pr.SOLIDUS)return void(this.state=Ci)
if(e===Pr.GREATER_THAN_SIGN)return this._emitCurrentToken(),void(this.state=Fr)
}
this._emitChars('</'),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState(ti)
}}[ai](e){
lo(e)||e===Pr.SOLIDUS||e===Pr.GREATER_THAN_SIGN?(this.state=this._isTempBufferEqualToScriptString()?li:ti,
this._emitCodePoint(e)):uo(e)?(this.tempBuff.push(Eo(e)),
this._emitCodePoint(e)):ho(e)?(this.tempBuff.push(e),
this._emitCodePoint(e)):this._reconsumeInState(ti)}[li](e){
e===Pr.HYPHEN_MINUS?(this.state=ci,
this._emitChars('-')):e===Pr.LESS_THAN_SIGN?(this.state=hi,
this._emitChars('<')):e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this._emitChars(Lr.REPLACEMENT_CHARACTER)):e===Pr.EOF?(this._err(Mr.eofInScriptHtmlCommentLikeText),
this._emitEOFToken()):this._emitCodePoint(e)}[ci](e){
e===Pr.HYPHEN_MINUS?(this.state=ui,
this._emitChars('-')):e===Pr.LESS_THAN_SIGN?(this.state=hi,
this._emitChars('<')):e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this.state=li,
this._emitChars(Lr.REPLACEMENT_CHARACTER)):e===Pr.EOF?(this._err(Mr.eofInScriptHtmlCommentLikeText),
this._emitEOFToken()):(this.state=li,this._emitCodePoint(e))}[ui](e){
e===Pr.HYPHEN_MINUS?this._emitChars('-'):e===Pr.LESS_THAN_SIGN?(this.state=hi,
this._emitChars('<')):e===Pr.GREATER_THAN_SIGN?(this.state=Br,
this._emitChars('>')):e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this.state=li,
this._emitChars(Lr.REPLACEMENT_CHARACTER)):e===Pr.EOF?(this._err(Mr.eofInScriptHtmlCommentLikeText),
this._emitEOFToken()):(this.state=li,this._emitCodePoint(e))}[hi](e){
e===Pr.SOLIDUS?(this.tempBuff=[],
this.state=pi,this._emitChars('/')):this._reconsumeInState(li)}
[pi](e){
lo(e)||e===Pr.SOLIDUS||e===Pr.GREATER_THAN_SIGN?(this.state=this._isTempBufferEqualToScriptString()?ti:li,
this._emitCodePoint(e)):uo(e)?(this.tempBuff.push(Eo(e)),
this._emitCodePoint(e)):ho(e)?(this.tempBuff.push(e),
this._emitCodePoint(e)):this._reconsumeInState(li)}[fi](e){
lo(e)||(e===Pr.SOLIDUS||e===Pr.GREATER_THAN_SIGN||e===Pr.EOF?this._reconsumeInState(di):e===Pr.EQUALS_SIGN?(this._err(Mr.unexpectedEqualsSignBeforeAttributeName),
this._createAttr('='),
this.state=mi):(this._createAttr(''),this._reconsumeInState(mi)))}
[mi](e){
lo(e)||e===Pr.SOLIDUS||e===Pr.GREATER_THAN_SIGN||e===Pr.EOF?(this._leaveAttrName(di),
this._unconsume()):e===Pr.EQUALS_SIGN?this._leaveAttrName(Ti):uo(e)?this.currentAttr.name+=_o(e):e===Pr.QUOTATION_MARK||e===Pr.APOSTROPHE||e===Pr.LESS_THAN_SIGN?(this._err(Mr.unexpectedCharacterInAttributeName),
this.currentAttr.name+=go(e)):e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this.currentAttr.name+=Lr.REPLACEMENT_CHARACTER):this.currentAttr.name+=go(e)
}[di](e){
lo(e)||(e===Pr.SOLIDUS?this.state=Ci:e===Pr.EQUALS_SIGN?this.state=Ti:e===Pr.GREATER_THAN_SIGN?(this.state=Fr,
this._emitCurrentToken()):e===Pr.EOF?(this._err(Mr.eofInTag),
this._emitEOFToken()):(this._createAttr(''),
this._reconsumeInState(mi)))}[Ti](e){
lo(e)||(e===Pr.QUOTATION_MARK?this.state=Ei:e===Pr.APOSTROPHE?this.state=gi:e===Pr.GREATER_THAN_SIGN?(this._err(Mr.missingAttributeValue),
this.state=Fr,this._emitCurrentToken()):this._reconsumeInState(_i))}
[Ei](e){
e===Pr.QUOTATION_MARK?this.state=Ai:e===Pr.AMPERSAND?(this.returnState=Ei,
this.state=Ji):e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this.currentAttr.value+=Lr.REPLACEMENT_CHARACTER):e===Pr.EOF?(this._err(Mr.eofInTag),
this._emitEOFToken()):this.currentAttr.value+=go(e)}[gi](e){
e===Pr.APOSTROPHE?this.state=Ai:e===Pr.AMPERSAND?(this.returnState=gi,
this.state=Ji):e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this.currentAttr.value+=Lr.REPLACEMENT_CHARACTER):e===Pr.EOF?(this._err(Mr.eofInTag),
this._emitEOFToken()):this.currentAttr.value+=go(e)}[_i](e){
lo(e)?this._leaveAttrValue(fi):e===Pr.AMPERSAND?(this.returnState=_i,
this.state=Ji):e===Pr.GREATER_THAN_SIGN?(this._leaveAttrValue(Fr),
this._emitCurrentToken()):e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this.currentAttr.value+=Lr.REPLACEMENT_CHARACTER):e===Pr.QUOTATION_MARK||e===Pr.APOSTROPHE||e===Pr.LESS_THAN_SIGN||e===Pr.EQUALS_SIGN||e===Pr.GRAVE_ACCENT?(this._err(Mr.unexpectedCharacterInUnquotedAttributeValue),
this.currentAttr.value+=go(e)):e===Pr.EOF?(this._err(Mr.eofInTag),
this._emitEOFToken()):this.currentAttr.value+=go(e)}[Ai](e){
lo(e)?this._leaveAttrValue(fi):e===Pr.SOLIDUS?this._leaveAttrValue(Ci):e===Pr.GREATER_THAN_SIGN?(this._leaveAttrValue(Fr),
this._emitCurrentToken()):e===Pr.EOF?(this._err(Mr.eofInTag),
this._emitEOFToken()):(this._err(Mr.missingWhitespaceBetweenAttributes),
this._reconsumeInState(fi))}[Ci](e){
e===Pr.GREATER_THAN_SIGN?(this.currentToken.selfClosing=!0,
this.state=Fr,this._emitCurrentToken()):e===Pr.EOF?(this._err(Mr.eofInTag),
this._emitEOFToken()):(this._err(Mr.unexpectedSolidusInTag),
this._reconsumeInState(fi))}[Ni](e){
e===Pr.GREATER_THAN_SIGN?(this.state=Fr,this._emitCurrentToken()):e===Pr.EOF?(this._emitCurrentToken(),
this._emitEOFToken()):e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this.currentToken.data+=Lr.REPLACEMENT_CHARACTER):this.currentToken.data+=go(e)
}[ki](e){
this._consumeSequenceIfMatch(vr.DASH_DASH_STRING,e,!0)?(this._createCommentToken(),
this.state=Oi):this._consumeSequenceIfMatch(vr.DOCTYPE_STRING,e,!1)?this.state=vi:this._consumeSequenceIfMatch(vr.CDATA_START_STRING,e,!0)?this.allowCDATA?this.state=Xi:(this._err(Mr.cdataInHtmlContent),
this._createCommentToken(),
this.currentToken.data='[CDATA[',this.state=Ni):this._ensureHibernation()||(this._err(Mr.incorrectlyOpenedComment),
this._createCommentToken(),this._reconsumeInState(Ni))}[Oi](e){
e===Pr.HYPHEN_MINUS?this.state=Si:e===Pr.GREATER_THAN_SIGN?(this._err(Mr.abruptClosingOfEmptyComment),
this.state=Fr,this._emitCurrentToken()):this._reconsumeInState(yi)}
[Si](e){
e===Pr.HYPHEN_MINUS?this.state=Mi:e===Pr.GREATER_THAN_SIGN?(this._err(Mr.abruptClosingOfEmptyComment),
this.state=Fr,
this._emitCurrentToken()):e===Pr.EOF?(this._err(Mr.eofInComment),this._emitCurrentToken(),
this._emitEOFToken()):(this.currentToken.data+='-',
this._reconsumeInState(yi))}[yi](e){
e===Pr.HYPHEN_MINUS?this.state=xi:e===Pr.LESS_THAN_SIGN?(this.currentToken.data+='<',
this.state=Ii):e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this.currentToken.data+=Lr.REPLACEMENT_CHARACTER):e===Pr.EOF?(this._err(Mr.eofInComment),
this._emitCurrentToken(),
this._emitEOFToken()):this.currentToken.data+=go(e)}[Ii](e){
e===Pr.EXCLAMATION_MARK?(this.currentToken.data+='!',
this.state=Ri):e===Pr.LESS_THAN_SIGN?this.currentToken.data+='!':this._reconsumeInState(yi)
}[Ri](e){e===Pr.HYPHEN_MINUS?this.state=bi:this._reconsumeInState(yi)}
[bi](e){e===Pr.HYPHEN_MINUS?this.state=Li:this._reconsumeInState(xi)}
[Li](e){
e!==Pr.GREATER_THAN_SIGN&&e!==Pr.EOF&&this._err(Mr.nestedComment),this._reconsumeInState(Mi)
}[xi](e){
e===Pr.HYPHEN_MINUS?this.state=Mi:e===Pr.EOF?(this._err(Mr.eofInComment),
this._emitCurrentToken(),
this._emitEOFToken()):(this.currentToken.data+='-',this._reconsumeInState(yi))
}[Mi](e){
e===Pr.GREATER_THAN_SIGN?(this.state=Fr,this._emitCurrentToken()):e===Pr.EXCLAMATION_MARK?this.state=Pi:e===Pr.HYPHEN_MINUS?this.currentToken.data+='-':e===Pr.EOF?(this._err(Mr.eofInComment),
this._emitCurrentToken(),
this._emitEOFToken()):(this.currentToken.data+='--',this._reconsumeInState(yi))
}[Pi](e){
e===Pr.HYPHEN_MINUS?(this.currentToken.data+='--!',this.state=xi):e===Pr.GREATER_THAN_SIGN?(this._err(Mr.incorrectlyClosedComment),
this.state=Fr,
this._emitCurrentToken()):e===Pr.EOF?(this._err(Mr.eofInComment),this._emitCurrentToken(),
this._emitEOFToken()):(this.currentToken.data+='--!',
this._reconsumeInState(yi))}[vi](e){
lo(e)?this.state=Di:e===Pr.GREATER_THAN_SIGN?this._reconsumeInState(Di):e===Pr.EOF?(this._err(Mr.eofInDoctype),
this._createDoctypeToken(null),
this.currentToken.forceQuirks=!0,this._emitCurrentToken(),
this._emitEOFToken()):(this._err(Mr.missingWhitespaceBeforeDoctypeName),
this._reconsumeInState(Di))}[Di](e){
lo(e)||(uo(e)?(this._createDoctypeToken(_o(e)),
this.state=Fi):e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this._createDoctypeToken(Lr.REPLACEMENT_CHARACTER),
this.state=Fi):e===Pr.GREATER_THAN_SIGN?(this._err(Mr.missingDoctypeName),
this._createDoctypeToken(null),
this.currentToken.forceQuirks=!0,this._emitCurrentToken(),
this.state=Fr):e===Pr.EOF?(this._err(Mr.eofInDoctype),
this._createDoctypeToken(null),
this.currentToken.forceQuirks=!0,this._emitCurrentToken(),
this._emitEOFToken()):(this._createDoctypeToken(go(e)),this.state=Fi))
}[Fi](e){
lo(e)?this.state=Hi:e===Pr.GREATER_THAN_SIGN?(this.state=Fr,this._emitCurrentToken()):uo(e)?this.currentToken.name+=_o(e):e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this.currentToken.name+=Lr.REPLACEMENT_CHARACTER):e===Pr.EOF?(this._err(Mr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.name+=go(e)
}[Hi](e){
lo(e)||(e===Pr.GREATER_THAN_SIGN?(this.state=Fr,this._emitCurrentToken()):e===Pr.EOF?(this._err(Mr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):this._consumeSequenceIfMatch(vr.PUBLIC_STRING,e,!1)?this.state=wi:this._consumeSequenceIfMatch(vr.SYSTEM_STRING,e,!1)?this.state=ji:this._ensureHibernation()||(this._err(Mr.invalidCharacterSequenceAfterDoctypeName),
this.currentToken.forceQuirks=!0,this._reconsumeInState(Vi)))}[wi](e){
lo(e)?this.state=Bi:e===Pr.QUOTATION_MARK?(this._err(Mr.missingWhitespaceAfterDoctypePublicKeyword),
this.currentToken.publicId='',
this.state=Ui):e===Pr.APOSTROPHE?(this._err(Mr.missingWhitespaceAfterDoctypePublicKeyword),
this.currentToken.publicId='',
this.state=Gi):e===Pr.GREATER_THAN_SIGN?(this._err(Mr.missingDoctypePublicIdentifier),
this.currentToken.forceQuirks=!0,
this.state=Fr,this._emitCurrentToken()):e===Pr.EOF?(this._err(Mr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):(this._err(Mr.missingQuoteBeforeDoctypePublicIdentifier),
this.currentToken.forceQuirks=!0,this._reconsumeInState(Vi))}[Bi](e){
lo(e)||(e===Pr.QUOTATION_MARK?(this.currentToken.publicId='',
this.state=Ui):e===Pr.APOSTROPHE?(this.currentToken.publicId='',
this.state=Gi):e===Pr.GREATER_THAN_SIGN?(this._err(Mr.missingDoctypePublicIdentifier),
this.currentToken.forceQuirks=!0,
this.state=Fr,this._emitCurrentToken()):e===Pr.EOF?(this._err(Mr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):(this._err(Mr.missingQuoteBeforeDoctypePublicIdentifier),
this.currentToken.forceQuirks=!0,this._reconsumeInState(Vi)))}[Ui](e){
e===Pr.QUOTATION_MARK?this.state=Ki:e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this.currentToken.publicId+=Lr.REPLACEMENT_CHARACTER):e===Pr.GREATER_THAN_SIGN?(this._err(Mr.abruptDoctypePublicIdentifier),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this.state=Fr):e===Pr.EOF?(this._err(Mr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.publicId+=go(e)
}[Gi](e){
e===Pr.APOSTROPHE?this.state=Ki:e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this.currentToken.publicId+=Lr.REPLACEMENT_CHARACTER):e===Pr.GREATER_THAN_SIGN?(this._err(Mr.abruptDoctypePublicIdentifier),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this.state=Fr):e===Pr.EOF?(this._err(Mr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.publicId+=go(e)
}[Ki](e){
lo(e)?this.state=zi:e===Pr.GREATER_THAN_SIGN?(this.state=Fr,this._emitCurrentToken()):e===Pr.QUOTATION_MARK?(this._err(Mr.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),
this.currentToken.systemId='',
this.state=Qi):e===Pr.APOSTROPHE?(this._err(Mr.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),
this.currentToken.systemId='',
this.state=Wi):e===Pr.EOF?(this._err(Mr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):(this._err(Mr.missingQuoteBeforeDoctypeSystemIdentifier),
this.currentToken.forceQuirks=!0,this._reconsumeInState(Vi))}[zi](e){
lo(e)||(e===Pr.GREATER_THAN_SIGN?(this._emitCurrentToken(),
this.state=Fr):e===Pr.QUOTATION_MARK?(this.currentToken.systemId='',
this.state=Qi):e===Pr.APOSTROPHE?(this.currentToken.systemId='',
this.state=Wi):e===Pr.EOF?(this._err(Mr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):(this._err(Mr.missingQuoteBeforeDoctypeSystemIdentifier),
this.currentToken.forceQuirks=!0,this._reconsumeInState(Vi)))}[ji](e){
lo(e)?this.state=Yi:e===Pr.QUOTATION_MARK?(this._err(Mr.missingWhitespaceAfterDoctypeSystemKeyword),
this.currentToken.systemId='',
this.state=Qi):e===Pr.APOSTROPHE?(this._err(Mr.missingWhitespaceAfterDoctypeSystemKeyword),
this.currentToken.systemId='',
this.state=Wi):e===Pr.GREATER_THAN_SIGN?(this._err(Mr.missingDoctypeSystemIdentifier),
this.currentToken.forceQuirks=!0,
this.state=Fr,this._emitCurrentToken()):e===Pr.EOF?(this._err(Mr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):(this._err(Mr.missingQuoteBeforeDoctypeSystemIdentifier),
this.currentToken.forceQuirks=!0,this._reconsumeInState(Vi))}[Yi](e){
lo(e)||(e===Pr.QUOTATION_MARK?(this.currentToken.systemId='',
this.state=Qi):e===Pr.APOSTROPHE?(this.currentToken.systemId='',
this.state=Wi):e===Pr.GREATER_THAN_SIGN?(this._err(Mr.missingDoctypeSystemIdentifier),
this.currentToken.forceQuirks=!0,
this.state=Fr,this._emitCurrentToken()):e===Pr.EOF?(this._err(Mr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):(this._err(Mr.missingQuoteBeforeDoctypeSystemIdentifier),
this.currentToken.forceQuirks=!0,this._reconsumeInState(Vi)))}[Qi](e){
e===Pr.QUOTATION_MARK?this.state=qi:e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this.currentToken.systemId+=Lr.REPLACEMENT_CHARACTER):e===Pr.GREATER_THAN_SIGN?(this._err(Mr.abruptDoctypeSystemIdentifier),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this.state=Fr):e===Pr.EOF?(this._err(Mr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.systemId+=go(e)
}[Wi](e){
e===Pr.APOSTROPHE?this.state=qi:e===Pr.NULL?(this._err(Mr.unexpectedNullCharacter),
this.currentToken.systemId+=Lr.REPLACEMENT_CHARACTER):e===Pr.GREATER_THAN_SIGN?(this._err(Mr.abruptDoctypeSystemIdentifier),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this.state=Fr):e===Pr.EOF?(this._err(Mr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.systemId+=go(e)
}[qi](e){
lo(e)||(e===Pr.GREATER_THAN_SIGN?(this._emitCurrentToken(),this.state=Fr):e===Pr.EOF?(this._err(Mr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):(this._err(Mr.unexpectedCharacterAfterDoctypeSystemIdentifier),
this._reconsumeInState(Vi)))}[Vi](e){
e===Pr.GREATER_THAN_SIGN?(this._emitCurrentToken(),
this.state=Fr):e===Pr.NULL?this._err(Mr.unexpectedNullCharacter):e===Pr.EOF&&(this._emitCurrentToken(),
this._emitEOFToken())}[Xi](e){
e===Pr.RIGHT_SQUARE_BRACKET?this.state=$i:e===Pr.EOF?(this._err(Mr.eofInCdata),
this._emitEOFToken()):this._emitCodePoint(e)}[$i](e){
e===Pr.RIGHT_SQUARE_BRACKET?this.state=Zi:(this._emitChars(']'),
this._reconsumeInState(Xi))}[Zi](e){
e===Pr.GREATER_THAN_SIGN?this.state=Fr:e===Pr.RIGHT_SQUARE_BRACKET?this._emitChars(']'):(this._emitChars(']]'),
this._reconsumeInState(Xi))}[Ji](e){
this.tempBuff=[Pr.AMPERSAND],e===Pr.NUMBER_SIGN?(this.tempBuff.push(e),
this.state=no):fo(e)?this._reconsumeInState(eo):(this._flushCodePointsConsumedAsCharacterReference(),
this._reconsumeInState(this.returnState))}[eo](e){
const t=this._matchNamedCharacterReference(e)
if(this._ensureHibernation())this.tempBuff=[Pr.AMPERSAND]
else if(t){
const e=this.tempBuff[this.tempBuff.length-1]===Pr.SEMICOLON
this._isCharacterReferenceAttributeQuirk(e)||(e||this._errOnNextCodePoint(Mr.missingSemicolonAfterCharacterReference),
this.tempBuff=t),
this._flushCodePointsConsumedAsCharacterReference(),this.state=this.returnState
}else this._flushCodePointsConsumedAsCharacterReference(),
this.state=to}[to](e){
fo(e)?this._isCharacterReferenceInAttribute()?this.currentAttr.value+=go(e):this._emitCodePoint(e):(e===Pr.SEMICOLON&&this._err(Mr.unknownNamedCharacterReference),
this._reconsumeInState(this.returnState))}[no](e){
this.charRefCode=0,e===Pr.LATIN_SMALL_X||e===Pr.LATIN_CAPITAL_X?(this.tempBuff.push(e),
this.state=ro):this._reconsumeInState(io)}[ro](e){!function(e){
return co(e)||mo(e)||To(e)
}(e)?(this._err(Mr.absenceOfDigitsInNumericCharacterReference),
this._flushCodePointsConsumedAsCharacterReference(),
this._reconsumeInState(this.returnState)):this._reconsumeInState(oo)}
[io](e){
co(e)?this._reconsumeInState(so):(this._err(Mr.absenceOfDigitsInNumericCharacterReference),
this._flushCodePointsConsumedAsCharacterReference(),
this._reconsumeInState(this.returnState))}[oo](e){
mo(e)?this.charRefCode=16*this.charRefCode+e-55:To(e)?this.charRefCode=16*this.charRefCode+e-87:co(e)?this.charRefCode=16*this.charRefCode+e-48:e===Pr.SEMICOLON?this.state=ao:(this._err(Mr.missingSemicolonAfterCharacterReference),
this._reconsumeInState(ao))}[so](e){
co(e)?this.charRefCode=10*this.charRefCode+e-48:e===Pr.SEMICOLON?this.state=ao:(this._err(Mr.missingSemicolonAfterCharacterReference),
this._reconsumeInState(ao))}[ao](){
if(this.charRefCode===Pr.NULL)this._err(Mr.nullCharacterReference),
this.charRefCode=Pr.REPLACEMENT_CHARACTER
else if(this.charRefCode>1114111)this._err(Mr.characterReferenceOutsideUnicodeRange),
this.charRefCode=Pr.REPLACEMENT_CHARACTER
else if(Lr.isSurrogate(this.charRefCode))this._err(Mr.surrogateCharacterReference),
this.charRefCode=Pr.REPLACEMENT_CHARACTER
else if(Lr.isUndefinedCodePoint(this.charRefCode))this._err(Mr.noncharacterCharacterReference)
else if(Lr.isControlCodePoint(this.charRefCode)||this.charRefCode===Pr.CARRIAGE_RETURN){
this._err(Mr.controlCharacterReference)
const e=Dr[this.charRefCode]
e&&(this.charRefCode=e)}
this.tempBuff=[this.charRefCode],this._flushCodePointsConsumedAsCharacterReference(),
this._reconsumeInState(this.returnState)}}
Co.CHARACTER_TOKEN='CHARACTER_TOKEN',Co.NULL_CHARACTER_TOKEN='NULL_CHARACTER_TOKEN',
Co.WHITESPACE_CHARACTER_TOKEN='WHITESPACE_CHARACTER_TOKEN',
Co.START_TAG_TOKEN='START_TAG_TOKEN',
Co.END_TAG_TOKEN='END_TAG_TOKEN',Co.COMMENT_TOKEN='COMMENT_TOKEN',
Co.DOCTYPE_TOKEN='DOCTYPE_TOKEN',
Co.EOF_TOKEN='EOF_TOKEN',Co.HIBERNATION_TOKEN='HIBERNATION_TOKEN',
Co.MODE={DATA:Fr,RCDATA:Hr,RAWTEXT:wr,SCRIPT_DATA:Br,PLAINTEXT:Ur
},Co.getTokenAttr=function(e,t){
for(let n=e.attrs.length-1;n>=0;n--)if(e.attrs[n].name===t)return e.attrs[n].value
return null}
var No=Co,ko={}
const Oo=ko.NAMESPACES={HTML:'http://www.w3.org/1999/xhtml',
MATHML:'http://www.w3.org/1998/Math/MathML',
SVG:'http://www.w3.org/2000/svg',XLINK:'http://www.w3.org/1999/xlink',
XML:'http://www.w3.org/XML/1998/namespace',
XMLNS:'http://www.w3.org/2000/xmlns/'}
ko.ATTRS={TYPE:'type',ACTION:'action',ENCODING:'encoding',
PROMPT:'prompt',NAME:'name',COLOR:'color',FACE:'face',SIZE:'size'
},ko.DOCUMENT_MODE={NO_QUIRKS:'no-quirks',QUIRKS:'quirks',
LIMITED_QUIRKS:'limited-quirks'}
const So=ko.TAG_NAMES={A:'a',ADDRESS:'address',
ANNOTATION_XML:'annotation-xml',APPLET:'applet',AREA:'area',
ARTICLE:'article',ASIDE:'aside',B:'b',BASE:'base',BASEFONT:'basefont',
BGSOUND:'bgsound',BIG:'big',BLOCKQUOTE:'blockquote',BODY:'body',
BR:'br',BUTTON:'button',CAPTION:'caption',CENTER:'center',CODE:'code',
COL:'col',COLGROUP:'colgroup',DD:'dd',DESC:'desc',DETAILS:'details',
DIALOG:'dialog',DIR:'dir',DIV:'div',DL:'dl',DT:'dt',EM:'em',
EMBED:'embed',FIELDSET:'fieldset',FIGCAPTION:'figcaption',
FIGURE:'figure',FONT:'font',FOOTER:'footer',
FOREIGN_OBJECT:'foreignObject',FORM:'form',FRAME:'frame',
FRAMESET:'frameset',H1:'h1',H2:'h2',H3:'h3',H4:'h4',H5:'h5',H6:'h6',
HEAD:'head',HEADER:'header',HGROUP:'hgroup',HR:'hr',HTML:'html',I:'i',
IMG:'img',IMAGE:'image',INPUT:'input',IFRAME:'iframe',KEYGEN:'keygen',
LABEL:'label',LI:'li',LINK:'link',LISTING:'listing',MAIN:'main',
MALIGNMARK:'malignmark',MARQUEE:'marquee',MATH:'math',MENU:'menu',
META:'meta',MGLYPH:'mglyph',MI:'mi',MO:'mo',MN:'mn',MS:'ms',
MTEXT:'mtext',NAV:'nav',NOBR:'nobr',NOFRAMES:'noframes',
NOEMBED:'noembed',NOSCRIPT:'noscript',OBJECT:'object',OL:'ol',
OPTGROUP:'optgroup',OPTION:'option',P:'p',PARAM:'param',
PLAINTEXT:'plaintext',PRE:'pre',RB:'rb',RP:'rp',RT:'rt',RTC:'rtc',
RUBY:'ruby',S:'s',SCRIPT:'script',SECTION:'section',SELECT:'select',
SOURCE:'source',SMALL:'small',SPAN:'span',STRIKE:'strike',
STRONG:'strong',STYLE:'style',SUB:'sub',SUMMARY:'summary',SUP:'sup',
TABLE:'table',TBODY:'tbody',TEMPLATE:'template',TEXTAREA:'textarea',
TFOOT:'tfoot',TD:'td',TH:'th',THEAD:'thead',TITLE:'title',TR:'tr',
TRACK:'track',TT:'tt',U:'u',UL:'ul',SVG:'svg',VAR:'var',WBR:'wbr',
XMP:'xmp'}
ko.SPECIAL_ELEMENTS={[Oo.HTML]:{[So.ADDRESS]:!0,[So.APPLET]:!0,
[So.AREA]:!0,[So.ARTICLE]:!0,[So.ASIDE]:!0,[So.BASE]:!0,
[So.BASEFONT]:!0,[So.BGSOUND]:!0,[So.BLOCKQUOTE]:!0,[So.BODY]:!0,
[So.BR]:!0,[So.BUTTON]:!0,[So.CAPTION]:!0,[So.CENTER]:!0,[So.COL]:!0,
[So.COLGROUP]:!0,[So.DD]:!0,[So.DETAILS]:!0,[So.DIR]:!0,[So.DIV]:!0,
[So.DL]:!0,[So.DT]:!0,[So.EMBED]:!0,[So.FIELDSET]:!0,
[So.FIGCAPTION]:!0,[So.FIGURE]:!0,[So.FOOTER]:!0,[So.FORM]:!0,
[So.FRAME]:!0,[So.FRAMESET]:!0,[So.H1]:!0,[So.H2]:!0,[So.H3]:!0,
[So.H4]:!0,[So.H5]:!0,[So.H6]:!0,[So.HEAD]:!0,[So.HEADER]:!0,
[So.HGROUP]:!0,[So.HR]:!0,[So.HTML]:!0,[So.IFRAME]:!0,[So.IMG]:!0,
[So.INPUT]:!0,[So.LI]:!0,[So.LINK]:!0,[So.LISTING]:!0,[So.MAIN]:!0,
[So.MARQUEE]:!0,[So.MENU]:!0,[So.META]:!0,[So.NAV]:!0,[So.NOEMBED]:!0,
[So.NOFRAMES]:!0,[So.NOSCRIPT]:!0,[So.OBJECT]:!0,[So.OL]:!0,[So.P]:!0,
[So.PARAM]:!0,[So.PLAINTEXT]:!0,[So.PRE]:!0,[So.SCRIPT]:!0,
[So.SECTION]:!0,[So.SELECT]:!0,[So.SOURCE]:!0,[So.STYLE]:!0,
[So.SUMMARY]:!0,[So.TABLE]:!0,[So.TBODY]:!0,[So.TD]:!0,
[So.TEMPLATE]:!0,[So.TEXTAREA]:!0,[So.TFOOT]:!0,[So.TH]:!0,
[So.THEAD]:!0,[So.TITLE]:!0,[So.TR]:!0,[So.TRACK]:!0,[So.UL]:!0,
[So.WBR]:!0,[So.XMP]:!0},[Oo.MATHML]:{[So.MI]:!0,[So.MO]:!0,
[So.MN]:!0,[So.MS]:!0,[So.MTEXT]:!0,[So.ANNOTATION_XML]:!0},[Oo.SVG]:{
[So.TITLE]:!0,[So.FOREIGN_OBJECT]:!0,[So.DESC]:!0}}
const yo=ko,Io=yo.TAG_NAMES,Ro=yo.NAMESPACES
function bo(e){switch(e.length){case 1:return e===Io.P
case 2:
return e===Io.RB||e===Io.RP||e===Io.RT||e===Io.DD||e===Io.DT||e===Io.LI
case 3:return e===Io.RTC
case 6:return e===Io.OPTION
case 8:return e===Io.OPTGROUP}return!1}function Lo(e){
switch(e.length){case 1:return e===Io.P
case 2:
return e===Io.RB||e===Io.RP||e===Io.RT||e===Io.DD||e===Io.DT||e===Io.LI||e===Io.TD||e===Io.TH||e===Io.TR
case 3:return e===Io.RTC
case 5:return e===Io.TBODY||e===Io.TFOOT||e===Io.THEAD
case 6:return e===Io.OPTION
case 7:return e===Io.CAPTION
case 8:return e===Io.OPTGROUP||e===Io.COLGROUP}return!1}
function xo(e,t){switch(e.length){case 2:
if(e===Io.TD||e===Io.TH)return t===Ro.HTML
if(e===Io.MI||e===Io.MO||e===Io.MN||e===Io.MS)return t===Ro.MATHML
break
case 4:if(e===Io.HTML)return t===Ro.HTML
if(e===Io.DESC)return t===Ro.SVG
break
case 5:if(e===Io.TABLE)return t===Ro.HTML
if(e===Io.MTEXT)return t===Ro.MATHML
if(e===Io.TITLE)return t===Ro.SVG
break
case 6:return(e===Io.APPLET||e===Io.OBJECT)&&t===Ro.HTML
case 7:return(e===Io.CAPTION||e===Io.MARQUEE)&&t===Ro.HTML
case 8:return e===Io.TEMPLATE&&t===Ro.HTML
case 13:return e===Io.FOREIGN_OBJECT&&t===Ro.SVG
case 14:return e===Io.ANNOTATION_XML&&t===Ro.MATHML}return!1}
var Mo=class{constructor(e,t){
this.stackTop=-1,this.items=[],this.current=e,this.currentTagName=null,
this.currentTmplContent=null,this.tmplCount=0,this.treeAdapter=t}
_indexOf(e){let t=-1
for(let n=this.stackTop;n>=0;n--)if(this.items[n]===e){t=n
break}return t}_isInTemplate(){
return this.currentTagName===Io.TEMPLATE&&this.treeAdapter.getNamespaceURI(this.current)===Ro.HTML
}_updateCurrentElement(){
this.current=this.items[this.stackTop],this.currentTagName=this.current&&this.treeAdapter.getTagName(this.current),
this.currentTmplContent=this._isInTemplate()?this.treeAdapter.getTemplateContent(this.current):null
}push(e){
this.items[++this.stackTop]=e,this._updateCurrentElement(),this._isInTemplate()&&this.tmplCount++
}pop(){
this.stackTop--,this.tmplCount>0&&this._isInTemplate()&&this.tmplCount--,
this._updateCurrentElement()}replace(e,t){const n=this._indexOf(e)
this.items[n]=t,n===this.stackTop&&this._updateCurrentElement()}
insertAfter(e,t){const n=this._indexOf(e)+1
this.items.splice(n,0,t),n===++this.stackTop&&this._updateCurrentElement()
}popUntilTagNamePopped(e){for(;this.stackTop>-1;){
const t=this.currentTagName,n=this.treeAdapter.getNamespaceURI(this.current)
if(this.pop(),t===e&&n===Ro.HTML)break}}popUntilElementPopped(e){
for(;this.stackTop>-1;){const t=this.current
if(this.pop(),t===e)break}}popUntilNumberedHeaderPopped(){
for(;this.stackTop>-1;){
const e=this.currentTagName,t=this.treeAdapter.getNamespaceURI(this.current)
if(this.pop(),e===Io.H1||e===Io.H2||e===Io.H3||e===Io.H4||e===Io.H5||e===Io.H6&&t===Ro.HTML)break
}}popUntilTableCellPopped(){for(;this.stackTop>-1;){
const e=this.currentTagName,t=this.treeAdapter.getNamespaceURI(this.current)
if(this.pop(),e===Io.TD||e===Io.TH&&t===Ro.HTML)break}}
popAllUpToHtmlElement(){this.stackTop=0,this._updateCurrentElement()}
clearBackToTableContext(){
for(;this.currentTagName!==Io.TABLE&&this.currentTagName!==Io.TEMPLATE&&this.currentTagName!==Io.HTML||this.treeAdapter.getNamespaceURI(this.current)!==Ro.HTML;)this.pop()
}clearBackToTableBodyContext(){
for(;this.currentTagName!==Io.TBODY&&this.currentTagName!==Io.TFOOT&&this.currentTagName!==Io.THEAD&&this.currentTagName!==Io.TEMPLATE&&this.currentTagName!==Io.HTML||this.treeAdapter.getNamespaceURI(this.current)!==Ro.HTML;)this.pop()
}clearBackToTableRowContext(){
for(;this.currentTagName!==Io.TR&&this.currentTagName!==Io.TEMPLATE&&this.currentTagName!==Io.HTML||this.treeAdapter.getNamespaceURI(this.current)!==Ro.HTML;)this.pop()
}remove(e){for(let t=this.stackTop;t>=0;t--)if(this.items[t]===e){
this.items.splice(t,1),this.stackTop--,this._updateCurrentElement()
break}}tryPeekProperlyNestedBodyElement(){const e=this.items[1]
return e&&this.treeAdapter.getTagName(e)===Io.BODY?e:null}contains(e){
return this._indexOf(e)>-1}getCommonAncestor(e){let t=this._indexOf(e)
return--t>=0?this.items[t]:null}isRootHtmlElementCurrent(){
return 0===this.stackTop&&this.currentTagName===Io.HTML}hasInScope(e){
for(let t=this.stackTop;t>=0;t--){
const n=this.treeAdapter.getTagName(this.items[t]),r=this.treeAdapter.getNamespaceURI(this.items[t])
if(n===e&&r===Ro.HTML)return!0
if(xo(n,r))return!1}return!0}hasNumberedHeaderInScope(){
for(let e=this.stackTop;e>=0;e--){
const t=this.treeAdapter.getTagName(this.items[e]),n=this.treeAdapter.getNamespaceURI(this.items[e])
if((t===Io.H1||t===Io.H2||t===Io.H3||t===Io.H4||t===Io.H5||t===Io.H6)&&n===Ro.HTML)return!0
if(xo(t,n))return!1}return!0}hasInListItemScope(e){
for(let t=this.stackTop;t>=0;t--){
const n=this.treeAdapter.getTagName(this.items[t]),r=this.treeAdapter.getNamespaceURI(this.items[t])
if(n===e&&r===Ro.HTML)return!0
if((n===Io.UL||n===Io.OL)&&r===Ro.HTML||xo(n,r))return!1}return!0}
hasInButtonScope(e){for(let t=this.stackTop;t>=0;t--){
const n=this.treeAdapter.getTagName(this.items[t]),r=this.treeAdapter.getNamespaceURI(this.items[t])
if(n===e&&r===Ro.HTML)return!0
if(n===Io.BUTTON&&r===Ro.HTML||xo(n,r))return!1}return!0}
hasInTableScope(e){for(let t=this.stackTop;t>=0;t--){
const n=this.treeAdapter.getTagName(this.items[t])
if(this.treeAdapter.getNamespaceURI(this.items[t])===Ro.HTML){
if(n===e)return!0
if(n===Io.TABLE||n===Io.TEMPLATE||n===Io.HTML)return!1}}return!0}
hasTableBodyContextInTableScope(){for(let e=this.stackTop;e>=0;e--){
const t=this.treeAdapter.getTagName(this.items[e])
if(this.treeAdapter.getNamespaceURI(this.items[e])===Ro.HTML){
if(t===Io.TBODY||t===Io.THEAD||t===Io.TFOOT)return!0
if(t===Io.TABLE||t===Io.HTML)return!1}}return!0}hasInSelectScope(e){
for(let t=this.stackTop;t>=0;t--){
const n=this.treeAdapter.getTagName(this.items[t])
if(this.treeAdapter.getNamespaceURI(this.items[t])===Ro.HTML){
if(n===e)return!0
if(n!==Io.OPTION&&n!==Io.OPTGROUP)return!1}}return!0}
generateImpliedEndTags(){for(;bo(this.currentTagName);)this.pop()}
generateImpliedEndTagsThoroughly(){
for(;Lo(this.currentTagName);)this.pop()}
generateImpliedEndTagsWithExclusion(e){
for(;bo(this.currentTagName)&&this.currentTagName!==e;)this.pop()}}
let Po=class{constructor(e){
this.length=0,this.entries=[],this.treeAdapter=e,this.bookmark=null}
_getNoahArkConditionCandidates(e){const t=[]
if(this.length>=3){
const n=this.treeAdapter.getAttrList(e).length,r=this.treeAdapter.getTagName(e),i=this.treeAdapter.getNamespaceURI(e)
for(let e=this.length-1;e>=0;e--){const o=this.entries[e]
if(o.type===Po.MARKER_ENTRY)break
const s=o.element,a=this.treeAdapter.getAttrList(s)
this.treeAdapter.getTagName(s)===r&&this.treeAdapter.getNamespaceURI(s)===i&&a.length===n&&t.push({
idx:e,attrs:a})}}return t.length<3?[]:t}_ensureNoahArkCondition(e){
const t=this._getNoahArkConditionCandidates(e)
let n=t.length
if(n){
const r=this.treeAdapter.getAttrList(e),i=r.length,o=Object.create(null)
for(let e=0;e<i;e++){const t=r[e]
o[t.name]=t.value}for(let e=0;e<i;e++)for(let r=0;r<n;r++){
const i=t[r].attrs[e]
if(o[i.name]!==i.value&&(t.splice(r,1),n--),t.length<3)return}
for(let e=n-1;e>=2;e--)this.entries.splice(t[e].idx,1),this.length--}}
insertMarker(){this.entries.push({type:Po.MARKER_ENTRY}),this.length++
}pushElement(e,t){this._ensureNoahArkCondition(e),this.entries.push({
type:Po.ELEMENT_ENTRY,element:e,token:t}),this.length++}
insertElementAfterBookmark(e,t){let n=this.length-1
for(;n>=0&&this.entries[n]!==this.bookmark;n--);
this.entries.splice(n+1,0,{type:Po.ELEMENT_ENTRY,element:e,token:t
}),this.length++}removeEntry(e){
for(let t=this.length-1;t>=0;t--)if(this.entries[t]===e){
this.entries.splice(t,1),this.length--
break}}clearToLastMarker(){for(;this.length;){
const e=this.entries.pop()
if(this.length--,e.type===Po.MARKER_ENTRY)break}}
getElementEntryInScopeWithTagName(e){
for(let t=this.length-1;t>=0;t--){const n=this.entries[t]
if(n.type===Po.MARKER_ENTRY)return null
if(this.treeAdapter.getTagName(n.element)===e)return n}return null}
getElementEntry(e){for(let t=this.length-1;t>=0;t--){
const n=this.entries[t]
if(n.type===Po.ELEMENT_ENTRY&&n.element===e)return n}return null}}
Po.MARKER_ENTRY='MARKER_ENTRY',Po.ELEMENT_ENTRY='ELEMENT_ENTRY'
var vo=Po
let Do=class{constructor(e){
const t={},n=this._getOverriddenMethods(this,t)
for(const r of Object.keys(n))'function'==typeof n[r]&&(t[r]=e[r],e[r]=n[r])
}_getOverriddenMethods(){throw new Error('Not implemented')}}
Do.install=function(e,t,n){e.__mixins||(e.__mixins=[])
for(let n=0;n<e.__mixins.length;n++)if(e.__mixins[n].constructor===t)return e.__mixins[n]
const r=new t(e,n)
return e.__mixins.push(r),r}
var Fo=Do
const Ho=Fo
var wo=class extends Ho{constructor(e){
super(e),this.preprocessor=e,this.isEol=!1,
this.lineStartPos=0,this.droppedBufferSize=0,
this.offset=0,this.col=0,this.line=1}_getOverriddenMethods(e,t){
return{advance(){const n=this.pos+1,r=this.html[n]
return e.isEol&&(e.isEol=!1,e.line++,e.lineStartPos=n),('\n'===r||'\r'===r&&'\n'!==this.html[n+1])&&(e.isEol=!0),
e.col=n-e.lineStartPos+1,
e.offset=e.droppedBufferSize+n,t.advance.call(this)},retreat(){
t.retreat.call(this),e.isEol=!1,e.col=this.pos-e.lineStartPos+1},
dropParsedChunk(){const n=this.pos
t.dropParsedChunk.call(this)
const r=n-this.pos
e.lineStartPos-=r,e.droppedBufferSize+=r,e.offset=e.droppedBufferSize+this.pos
}}}}
const Bo=Fo,Uo=No,Go=wo
var Ko=class extends Bo{constructor(e){
super(e),this.tokenizer=e,this.posTracker=Bo.install(e.preprocessor,Go),
this.currentAttrLocation=null,this.ctLoc=null}_getCurrentLocation(){
return{startLine:this.posTracker.line,startCol:this.posTracker.col,
startOffset:this.posTracker.offset,endLine:-1,endCol:-1,endOffset:-1}}
_attachCurrentAttrLocationInfo(){
this.currentAttrLocation.endLine=this.posTracker.line,
this.currentAttrLocation.endCol=this.posTracker.col,
this.currentAttrLocation.endOffset=this.posTracker.offset
const e=this.tokenizer.currentToken,t=this.tokenizer.currentAttr
e.location.attrs||(e.location.attrs=Object.create(null)),e.location.attrs[t.name]=this.currentAttrLocation
}_getOverriddenMethods(e,t){const n={_createStartTagToken(){
t._createStartTagToken.call(this),this.currentToken.location=e.ctLoc},
_createEndTagToken(){
t._createEndTagToken.call(this),this.currentToken.location=e.ctLoc},
_createCommentToken(){
t._createCommentToken.call(this),this.currentToken.location=e.ctLoc},
_createDoctypeToken(n){
t._createDoctypeToken.call(this,n),this.currentToken.location=e.ctLoc
},_createCharacterToken(n,r){
t._createCharacterToken.call(this,n,r),this.currentCharacterToken.location=e.ctLoc
},_createEOFToken(){
t._createEOFToken.call(this),this.currentToken.location=e._getCurrentLocation()
},_createAttr(n){
t._createAttr.call(this,n),e.currentAttrLocation=e._getCurrentLocation()
},_leaveAttrName(n){
t._leaveAttrName.call(this,n),e._attachCurrentAttrLocationInfo()},
_leaveAttrValue(n){
t._leaveAttrValue.call(this,n),e._attachCurrentAttrLocationInfo()},
_emitCurrentToken(){const n=this.currentToken.location
this.currentCharacterToken&&(this.currentCharacterToken.location.endLine=n.startLine,
this.currentCharacterToken.location.endCol=n.startCol,
this.currentCharacterToken.location.endOffset=n.startOffset),
this.currentToken.type===Uo.EOF_TOKEN?(n.endLine=n.startLine,
n.endCol=n.startCol,
n.endOffset=n.startOffset):(n.endLine=e.posTracker.line,n.endCol=e.posTracker.col+1,
n.endOffset=e.posTracker.offset+1),t._emitCurrentToken.call(this)},
_emitCurrentCharacterToken(){
const n=this.currentCharacterToken&&this.currentCharacterToken.location
n&&-1===n.endOffset&&(n.endLine=e.posTracker.line,n.endCol=e.posTracker.col,n.endOffset=e.posTracker.offset),
t._emitCurrentCharacterToken.call(this)}}
return Object.keys(Uo.MODE).forEach((r=>{const i=Uo.MODE[r]
n[i]=function(n){e.ctLoc=e._getCurrentLocation(),t[i].call(this,n)}
})),n}}
const zo=Fo
var jo=class extends zo{constructor(e,t){
super(e),this.onItemPop=t.onItemPop}_getOverriddenMethods(e,t){return{
pop(){e.onItemPop(this.current),t.pop.call(this)},
popAllUpToHtmlElement(){
for(let t=this.stackTop;t>0;t--)e.onItemPop(this.items[t])
t.popAllUpToHtmlElement.call(this)},remove(n){
e.onItemPop(this.current),t.remove.call(this,n)}}}}
const Yo=Fo,Qo=No,Wo=Ko,qo=jo,Vo=ko.TAG_NAMES
var Xo=class extends Yo{constructor(e){
super(e),this.parser=e,this.treeAdapter=this.parser.treeAdapter,
this.posTracker=null,
this.lastStartTagToken=null,this.lastFosterParentingLocation=null,
this.currentToken=null}_setStartLocation(e){let t=null
this.lastStartTagToken&&(t=Object.assign({},this.lastStartTagToken.location),t.startTag=this.lastStartTagToken.location),
this.treeAdapter.setNodeSourceCodeLocation(e,t)}_setEndLocation(e,t){
if(this.treeAdapter.getNodeSourceCodeLocation(e)&&t.location){
const n=t.location,r=this.treeAdapter.getTagName(e),i={}
t.type===Qo.END_TAG_TOKEN&&r===t.tagName?(i.endTag=Object.assign({},n),i.endLine=n.endLine,
i.endCol=n.endCol,
i.endOffset=n.endOffset):(i.endLine=n.startLine,i.endCol=n.startCol,
i.endOffset=n.startOffset),
this.treeAdapter.updateNodeSourceCodeLocation(e,i)}}
_getOverriddenMethods(e,t){return{_bootstrap(n,r){
t._bootstrap.call(this,n,r),e.lastStartTagToken=null,
e.lastFosterParentingLocation=null,e.currentToken=null
const i=Yo.install(this.tokenizer,Wo)
e.posTracker=i.posTracker,Yo.install(this.openElements,qo,{
onItemPop:function(t){e._setEndLocation(t,e.currentToken)}})},
_runParsingLoop(n){t._runParsingLoop.call(this,n)
for(let t=this.openElements.stackTop;t>=0;t--)e._setEndLocation(this.openElements.items[t],e.currentToken)
},_processTokenInForeignContent(n){
e.currentToken=n,t._processTokenInForeignContent.call(this,n)},
_processToken(n){e.currentToken=n,t._processToken.call(this,n)
if(n.type===Qo.END_TAG_TOKEN&&(n.tagName===Vo.HTML||n.tagName===Vo.BODY&&this.openElements.hasInScope(Vo.BODY)))for(let t=this.openElements.stackTop;t>=0;t--){
const r=this.openElements.items[t]
if(this.treeAdapter.getTagName(r)===n.tagName){e._setEndLocation(r,n)
break}}},_setDocumentType(e){t._setDocumentType.call(this,e)
const n=this.treeAdapter.getChildNodes(this.document),r=n.length
for(let t=0;t<r;t++){const r=n[t]
if(this.treeAdapter.isDocumentTypeNode(r)){
this.treeAdapter.setNodeSourceCodeLocation(r,e.location)
break}}},_attachElementToTree(n){
e._setStartLocation(n),e.lastStartTagToken=null,
t._attachElementToTree.call(this,n)},_appendElement(n,r){
e.lastStartTagToken=n,t._appendElement.call(this,n,r)},
_insertElement(n,r){
e.lastStartTagToken=n,t._insertElement.call(this,n,r)},
_insertTemplate(n){
e.lastStartTagToken=n,t._insertTemplate.call(this,n)
const r=this.treeAdapter.getTemplateContent(this.openElements.current)
this.treeAdapter.setNodeSourceCodeLocation(r,null)},
_insertFakeRootElement(){
t._insertFakeRootElement.call(this),this.treeAdapter.setNodeSourceCodeLocation(this.openElements.current,null)
},_appendCommentNode(e,n){t._appendCommentNode.call(this,e,n)
const r=this.treeAdapter.getChildNodes(n),i=r[r.length-1]
this.treeAdapter.setNodeSourceCodeLocation(i,e.location)},
_findFosterParentingLocation(){
return e.lastFosterParentingLocation=t._findFosterParentingLocation.call(this),
e.lastFosterParentingLocation},_insertCharacters(n){
t._insertCharacters.call(this,n)
const r=this._shouldFosterParentOnInsertion(),i=r&&e.lastFosterParentingLocation.parent||this.openElements.currentTmplContent||this.openElements.current,o=this.treeAdapter.getChildNodes(i),s=r&&e.lastFosterParentingLocation.beforeElement?o.indexOf(e.lastFosterParentingLocation.beforeElement)-1:o.length-1,a=o[s]
if(this.treeAdapter.getNodeSourceCodeLocation(a)){
const{endLine:e,endCol:t,endOffset:r}=n.location
this.treeAdapter.updateNodeSourceCodeLocation(a,{endLine:e,endCol:t,
endOffset:r})
}else this.treeAdapter.setNodeSourceCodeLocation(a,n.location)}}}}
const $o=Fo
var Zo=class extends $o{constructor(e,t){
super(e),this.posTracker=null,this.onParseError=t.onParseError}
_setErrorLocation(e){
e.startLine=e.endLine=this.posTracker.line,e.startCol=e.endCol=this.posTracker.col,
e.startOffset=e.endOffset=this.posTracker.offset}_reportError(e){
const t={code:e,startLine:-1,startCol:-1,startOffset:-1,endLine:-1,
endCol:-1,endOffset:-1}
this._setErrorLocation(t),this.onParseError(t)}
_getOverriddenMethods(e){return{_err(t){e._reportError(t)}}}}
const Jo=Zo,es=wo,ts=Fo
var ns=class extends Jo{constructor(e,t){
super(e,t),this.posTracker=ts.install(e,es),this.lastErrOffset=-1}
_reportError(e){
this.lastErrOffset!==this.posTracker.offset&&(this.lastErrOffset=this.posTracker.offset,
super._reportError(e))}}
const rs=Zo,is=ns,os=Fo
var ss=class extends rs{constructor(e,t){super(e,t)
const n=os.install(e.preprocessor,is,t)
this.posTracker=n.posTracker}}
const as=Zo,ls=ss,cs=Ko,us=Fo
var hs=class extends as{constructor(e,t){
super(e,t),this.opts=t,this.ctLoc=null,this.locBeforeToken=!1}
_setErrorLocation(e){
this.ctLoc&&(e.startLine=this.ctLoc.startLine,e.startCol=this.ctLoc.startCol,
e.startOffset=this.ctLoc.startOffset,
e.endLine=this.locBeforeToken?this.ctLoc.startLine:this.ctLoc.endLine,
e.endCol=this.locBeforeToken?this.ctLoc.startCol:this.ctLoc.endCol,
e.endOffset=this.locBeforeToken?this.ctLoc.startOffset:this.ctLoc.endOffset)
}_getOverriddenMethods(e,t){return{_bootstrap(n,r){
t._bootstrap.call(this,n,r),us.install(this.tokenizer,ls,e.opts),
us.install(this.tokenizer,cs)},_processInputToken(n){
e.ctLoc=n.location,t._processInputToken.call(this,n)},_err(t,n){
e.locBeforeToken=n&&n.beforeToken,e._reportError(t)}}}},ps={}
const{DOCUMENT_MODE:fs}=ko
ps.createDocument=function(){return{nodeName:'#document',
mode:fs.NO_QUIRKS,childNodes:[]}
},ps.createDocumentFragment=function(){return{
nodeName:'#document-fragment',childNodes:[]}
},ps.createElement=function(e,t,n){return{nodeName:e,tagName:e,
attrs:n,namespaceURI:t,childNodes:[],parentNode:null}
},ps.createCommentNode=function(e){return{nodeName:'#comment',data:e,
parentNode:null}}
const ms=function(e){return{nodeName:'#text',value:e,parentNode:null}
},ds=ps.appendChild=function(e,t){e.childNodes.push(t),t.parentNode=e
},Ts=ps.insertBefore=function(e,t,n){const r=e.childNodes.indexOf(n)
e.childNodes.splice(r,0,t),t.parentNode=e}
ps.setTemplateContent=function(e,t){e.content=t
},ps.getTemplateContent=function(e){return e.content
},ps.setDocumentType=function(e,t,n,r){let i=null
for(let t=0;t<e.childNodes.length;t++)if('#documentType'===e.childNodes[t].nodeName){
i=e.childNodes[t]
break}i?(i.name=t,i.publicId=n,i.systemId=r):ds(e,{
nodeName:'#documentType',name:t,publicId:n,systemId:r})
},ps.setDocumentMode=function(e,t){e.mode=t
},ps.getDocumentMode=function(e){return e.mode
},ps.detachNode=function(e){if(e.parentNode){
const t=e.parentNode.childNodes.indexOf(e)
e.parentNode.childNodes.splice(t,1),e.parentNode=null}
},ps.insertText=function(e,t){if(e.childNodes.length){
const n=e.childNodes[e.childNodes.length-1]
if('#text'===n.nodeName)return void(n.value+=t)}ds(e,ms(t))
},ps.insertTextBefore=function(e,t,n){
const r=e.childNodes[e.childNodes.indexOf(n)-1]
r&&'#text'===r.nodeName?r.value+=t:Ts(e,ms(t),n)
},ps.adoptAttributes=function(e,t){const n=[]
for(let t=0;t<e.attrs.length;t++)n.push(e.attrs[t].name)
for(let r=0;r<t.length;r++)-1===n.indexOf(t[r].name)&&e.attrs.push(t[r])
},ps.getFirstChild=function(e){return e.childNodes[0]
},ps.getChildNodes=function(e){return e.childNodes
},ps.getParentNode=function(e){return e.parentNode
},ps.getAttrList=function(e){return e.attrs
},ps.getTagName=function(e){return e.tagName
},ps.getNamespaceURI=function(e){return e.namespaceURI
},ps.getTextNodeContent=function(e){return e.value
},ps.getCommentNodeContent=function(e){return e.data
},ps.getDocumentTypeNodeName=function(e){return e.name
},ps.getDocumentTypeNodePublicId=function(e){return e.publicId
},ps.getDocumentTypeNodeSystemId=function(e){return e.systemId
},ps.isTextNode=function(e){return'#text'===e.nodeName
},ps.isCommentNode=function(e){return'#comment'===e.nodeName
},ps.isDocumentTypeNode=function(e){return'#documentType'===e.nodeName
},ps.isElementNode=function(e){return!!e.tagName
},ps.setNodeSourceCodeLocation=function(e,t){e.sourceCodeLocation=t
},ps.getNodeSourceCodeLocation=function(e){return e.sourceCodeLocation
},ps.updateNodeSourceCodeLocation=function(e,t){
e.sourceCodeLocation=Object.assign(e.sourceCodeLocation,t)}
var Es={}
const{DOCUMENT_MODE:gs}=ko,_s='html',As=['+//silmaril//dtd html pro v0r11 19970101//','-//as//dtd html 3.0 aswedit + extensions//','-//advasoft ltd//dtd html 3.0 aswedit + extensions//','-//ietf//dtd html 2.0 level 1//','-//ietf//dtd html 2.0 level 2//','-//ietf//dtd html 2.0 strict level 1//','-//ietf//dtd html 2.0 strict level 2//','-//ietf//dtd html 2.0 strict//','-//ietf//dtd html 2.0//','-//ietf//dtd html 2.1e//','-//ietf//dtd html 3.0//','-//ietf//dtd html 3.2 final//','-//ietf//dtd html 3.2//','-//ietf//dtd html 3//','-//ietf//dtd html level 0//','-//ietf//dtd html level 1//','-//ietf//dtd html level 2//','-//ietf//dtd html level 3//','-//ietf//dtd html strict level 0//','-//ietf//dtd html strict level 1//','-//ietf//dtd html strict level 2//','-//ietf//dtd html strict level 3//','-//ietf//dtd html strict//','-//ietf//dtd html//','-//metrius//dtd metrius presentational//','-//microsoft//dtd internet explorer 2.0 html strict//','-//microsoft//dtd internet explorer 2.0 html//','-//microsoft//dtd internet explorer 2.0 tables//','-//microsoft//dtd internet explorer 3.0 html strict//','-//microsoft//dtd internet explorer 3.0 html//','-//microsoft//dtd internet explorer 3.0 tables//','-//netscape comm. corp.//dtd html//','-//netscape comm. corp.//dtd strict html//',"-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//",'-//sq//dtd html 2.0 hotmetal + extensions//','-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//','-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//','-//spyglass//dtd html 2.0 extended//','-//sun microsystems corp.//dtd hotjava html//','-//sun microsystems corp.//dtd hotjava strict html//','-//w3c//dtd html 3 1995-03-24//','-//w3c//dtd html 3.2 draft//','-//w3c//dtd html 3.2 final//','-//w3c//dtd html 3.2//','-//w3c//dtd html 3.2s draft//','-//w3c//dtd html 4.0 frameset//','-//w3c//dtd html 4.0 transitional//','-//w3c//dtd html experimental 19960712//','-//w3c//dtd html experimental 970421//','-//w3c//dtd w3 html//','-//w3o//dtd w3 html 3.0//','-//webtechs//dtd mozilla html 2.0//','-//webtechs//dtd mozilla html//'],Cs=As.concat(['-//w3c//dtd html 4.01 frameset//','-//w3c//dtd html 4.01 transitional//']),Ns=['-//w3o//dtd w3 html strict 3.0//en//','-/w3c/dtd html 4.0 transitional/en','html'],ks=['-//w3c//dtd xhtml 1.0 frameset//','-//w3c//dtd xhtml 1.0 transitional//'],Os=ks.concat(['-//w3c//dtd html 4.01 frameset//','-//w3c//dtd html 4.01 transitional//'])
function Ss(e){const t=-1!==e.indexOf('"')?"'":'"'
return t+e+t}function ys(e,t){
for(let n=0;n<t.length;n++)if(0===e.indexOf(t[n]))return!0
return!1}Es.isConforming=function(e){
return e.name===_s&&null===e.publicId&&(null===e.systemId||"about:legacy-compat"===e.systemId)
},Es.getDocumentMode=function(e){if(e.name!==_s)return gs.QUIRKS
const t=e.systemId
if(t&&"http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd"===t.toLowerCase())return gs.QUIRKS
let n=e.publicId
if(null!==n){if(n=n.toLowerCase(),Ns.indexOf(n)>-1)return gs.QUIRKS
let e=null===t?Cs:As
if(ys(n,e))return gs.QUIRKS
if(e=null===t?ks:Os,ys(n,e))return gs.LIMITED_QUIRKS}
return gs.NO_QUIRKS},Es.serializeContent=function(e,t,n){
let r='!DOCTYPE '
return e&&(r+=e),t?r+=' PUBLIC '+Ss(t):n&&(r+=' SYSTEM'),null!==n&&(r+=' '+Ss(n)),
r}
var Is={}
const Rs=No,bs=ko,Ls=bs.TAG_NAMES,xs=bs.NAMESPACES,Ms=bs.ATTRS,Ps='text/html',vs='application/xhtml+xml',Ds={
attributename:'attributeName',attributetype:'attributeType',
basefrequency:'baseFrequency',baseprofile:'baseProfile',
calcmode:'calcMode',clippathunits:'clipPathUnits',
diffuseconstant:'diffuseConstant',edgemode:'edgeMode',
filterunits:'filterUnits',glyphref:'glyphRef',
gradienttransform:'gradientTransform',gradientunits:'gradientUnits',
kernelmatrix:'kernelMatrix',kernelunitlength:'kernelUnitLength',
keypoints:'keyPoints',keysplines:'keySplines',keytimes:'keyTimes',
lengthadjust:'lengthAdjust',limitingconeangle:'limitingConeAngle',
markerheight:'markerHeight',markerunits:'markerUnits',
markerwidth:'markerWidth',maskcontentunits:'maskContentUnits',
maskunits:'maskUnits',numoctaves:'numOctaves',pathlength:'pathLength',
patterncontentunits:'patternContentUnits',
patterntransform:'patternTransform',patternunits:'patternUnits',
pointsatx:'pointsAtX',pointsaty:'pointsAtY',pointsatz:'pointsAtZ',
preservealpha:'preserveAlpha',
preserveaspectratio:'preserveAspectRatio',
primitiveunits:'primitiveUnits',refx:'refX',refy:'refY',
repeatcount:'repeatCount',repeatdur:'repeatDur',
requiredextensions:'requiredExtensions',
requiredfeatures:'requiredFeatures',
specularconstant:'specularConstant',
specularexponent:'specularExponent',spreadmethod:'spreadMethod',
startoffset:'startOffset',stddeviation:'stdDeviation',
stitchtiles:'stitchTiles',surfacescale:'surfaceScale',
systemlanguage:'systemLanguage',tablevalues:'tableValues',
targetx:'targetX',targety:'targetY',textlength:'textLength',
viewbox:'viewBox',viewtarget:'viewTarget',
xchannelselector:'xChannelSelector',
ychannelselector:'yChannelSelector',zoomandpan:'zoomAndPan'},Fs={
'xlink:actuate':{prefix:'xlink',name:'actuate',namespace:xs.XLINK},
'xlink:arcrole':{prefix:'xlink',name:'arcrole',namespace:xs.XLINK},
'xlink:href':{prefix:'xlink',name:'href',namespace:xs.XLINK},
'xlink:role':{prefix:'xlink',name:'role',namespace:xs.XLINK},
'xlink:show':{prefix:'xlink',name:'show',namespace:xs.XLINK},
'xlink:title':{prefix:'xlink',name:'title',namespace:xs.XLINK},
'xlink:type':{prefix:'xlink',name:'type',namespace:xs.XLINK},
'xml:base':{prefix:'xml',name:'base',namespace:xs.XML},'xml:lang':{
prefix:'xml',name:'lang',namespace:xs.XML},'xml:space':{prefix:'xml',
name:'space',namespace:xs.XML},xmlns:{prefix:'',name:'xmlns',
namespace:xs.XMLNS},'xmlns:xlink':{prefix:'xmlns',name:'xlink',
namespace:xs.XMLNS}},Hs=Is.SVG_TAG_NAMES_ADJUSTMENT_MAP={
altglyph:'altGlyph',altglyphdef:'altGlyphDef',
altglyphitem:'altGlyphItem',animatecolor:'animateColor',
animatemotion:'animateMotion',animatetransform:'animateTransform',
clippath:'clipPath',feblend:'feBlend',fecolormatrix:'feColorMatrix',
fecomponenttransfer:'feComponentTransfer',fecomposite:'feComposite',
feconvolvematrix:'feConvolveMatrix',
fediffuselighting:'feDiffuseLighting',
fedisplacementmap:'feDisplacementMap',fedistantlight:'feDistantLight',
feflood:'feFlood',fefunca:'feFuncA',fefuncb:'feFuncB',
fefuncg:'feFuncG',fefuncr:'feFuncR',fegaussianblur:'feGaussianBlur',
feimage:'feImage',femerge:'feMerge',femergenode:'feMergeNode',
femorphology:'feMorphology',feoffset:'feOffset',
fepointlight:'fePointLight',fespecularlighting:'feSpecularLighting',
fespotlight:'feSpotLight',fetile:'feTile',feturbulence:'feTurbulence',
foreignobject:'foreignObject',glyphref:'glyphRef',
lineargradient:'linearGradient',radialgradient:'radialGradient',
textpath:'textPath'},ws={[Ls.B]:!0,[Ls.BIG]:!0,[Ls.BLOCKQUOTE]:!0,
[Ls.BODY]:!0,[Ls.BR]:!0,[Ls.CENTER]:!0,[Ls.CODE]:!0,[Ls.DD]:!0,
[Ls.DIV]:!0,[Ls.DL]:!0,[Ls.DT]:!0,[Ls.EM]:!0,[Ls.EMBED]:!0,[Ls.H1]:!0,
[Ls.H2]:!0,[Ls.H3]:!0,[Ls.H4]:!0,[Ls.H5]:!0,[Ls.H6]:!0,[Ls.HEAD]:!0,
[Ls.HR]:!0,[Ls.I]:!0,[Ls.IMG]:!0,[Ls.LI]:!0,[Ls.LISTING]:!0,
[Ls.MENU]:!0,[Ls.META]:!0,[Ls.NOBR]:!0,[Ls.OL]:!0,[Ls.P]:!0,
[Ls.PRE]:!0,[Ls.RUBY]:!0,[Ls.S]:!0,[Ls.SMALL]:!0,[Ls.SPAN]:!0,
[Ls.STRONG]:!0,[Ls.STRIKE]:!0,[Ls.SUB]:!0,[Ls.SUP]:!0,[Ls.TABLE]:!0,
[Ls.TT]:!0,[Ls.U]:!0,[Ls.UL]:!0,[Ls.VAR]:!0}
Is.causesExit=function(e){const t=e.tagName
return!!(t===Ls.FONT&&(null!==Rs.getTokenAttr(e,Ms.COLOR)||null!==Rs.getTokenAttr(e,Ms.SIZE)||null!==Rs.getTokenAttr(e,Ms.FACE)))||ws[t]
},Is.adjustTokenMathMLAttrs=function(e){
for(let t=0;t<e.attrs.length;t++)if("definitionurl"===e.attrs[t].name){
e.attrs[t].name="definitionURL"
break}},Is.adjustTokenSVGAttrs=function(e){
for(let t=0;t<e.attrs.length;t++){const n=Ds[e.attrs[t].name]
n&&(e.attrs[t].name=n)}},Is.adjustTokenXMLAttrs=function(e){
for(let t=0;t<e.attrs.length;t++){const n=Fs[e.attrs[t].name]
n&&(e.attrs[t].prefix=n.prefix,e.attrs[t].name=n.name,e.attrs[t].namespace=n.namespace)
}},Is.adjustTokenSVGTagName=function(e){const t=Hs[e.tagName]
t&&(e.tagName=t)},Is.isIntegrationPoint=function(e,t,n,r){
return!(r&&r!==xs.HTML||!function(e,t,n){
if(t===xs.MATHML&&e===Ls.ANNOTATION_XML)for(let e=0;e<n.length;e++)if(n[e].name===Ms.ENCODING){
const t=n[e].value.toLowerCase()
return t===Ps||t===vs}
return t===xs.SVG&&(e===Ls.FOREIGN_OBJECT||e===Ls.DESC||e===Ls.TITLE)
}(e,t,n))||!(r&&r!==xs.MATHML||!function(e,t){
return t===xs.MATHML&&(e===Ls.MI||e===Ls.MO||e===Ls.MN||e===Ls.MS||e===Ls.MTEXT)
}(e,t))}
const Bs=No,Us=Mo,Gs=vo,Ks=Xo,zs=hs,js=Fo,Ys=ps,Qs=function(e,t){
return[e,t=t||Object.create(null)].reduce(((e,t)=>(Object.keys(t).forEach((n=>{
e[n]=t[n]})),e)),Object.create(null))
},Ws=Es,qs=Is,Vs=kr,Xs=Cr,$s=ko,Zs=$s.TAG_NAMES,Js=$s.NAMESPACES,ea=$s.ATTRS,ta={
scriptingEnabled:!0,sourceCodeLocationInfo:!1,onParseError:null,
treeAdapter:Ys
},na='hidden',ra='INITIAL_MODE',ia='BEFORE_HTML_MODE',oa='BEFORE_HEAD_MODE',sa='IN_HEAD_MODE',aa='IN_HEAD_NO_SCRIPT_MODE',la='AFTER_HEAD_MODE',ca='IN_BODY_MODE',ua='TEXT_MODE',ha='IN_TABLE_MODE',pa='IN_TABLE_TEXT_MODE',fa='IN_CAPTION_MODE',ma='IN_COLUMN_GROUP_MODE',da='IN_TABLE_BODY_MODE',Ta='IN_ROW_MODE',Ea='IN_CELL_MODE',ga='IN_SELECT_MODE',_a='IN_SELECT_IN_TABLE_MODE',Aa='IN_TEMPLATE_MODE',Ca='AFTER_BODY_MODE',Na='IN_FRAMESET_MODE',ka='AFTER_FRAMESET_MODE',Oa='AFTER_AFTER_BODY_MODE',Sa='AFTER_AFTER_FRAMESET_MODE',ya={
[Zs.TR]:Ta,[Zs.TBODY]:da,[Zs.THEAD]:da,[Zs.TFOOT]:da,[Zs.CAPTION]:fa,
[Zs.COLGROUP]:ma,[Zs.TABLE]:ha,[Zs.BODY]:ca,[Zs.FRAMESET]:Na},Ia={
[Zs.CAPTION]:ha,[Zs.COLGROUP]:ha,[Zs.TBODY]:ha,[Zs.TFOOT]:ha,
[Zs.THEAD]:ha,[Zs.COL]:ma,[Zs.TR]:da,[Zs.TD]:Ta,[Zs.TH]:Ta},Ra={[ra]:{
[Bs.CHARACTER_TOKEN]:za,[Bs.NULL_CHARACTER_TOKEN]:za,
[Bs.WHITESPACE_CHARACTER_TOKEN]:Ha,[Bs.COMMENT_TOKEN]:Ba,
[Bs.DOCTYPE_TOKEN]:function(e,t){e._setDocumentType(t)
const n=t.forceQuirks?$s.DOCUMENT_MODE.QUIRKS:Ws.getDocumentMode(t)
Ws.isConforming(t)||e._err(Vs.nonConformingDoctype)
e.treeAdapter.setDocumentMode(e.document,n),e.insertionMode=ia},
[Bs.START_TAG_TOKEN]:za,[Bs.END_TAG_TOKEN]:za,[Bs.EOF_TOKEN]:za},
[ia]:{[Bs.CHARACTER_TOKEN]:ja,[Bs.NULL_CHARACTER_TOKEN]:ja,
[Bs.WHITESPACE_CHARACTER_TOKEN]:Ha,[Bs.COMMENT_TOKEN]:Ba,
[Bs.DOCTYPE_TOKEN]:Ha,[Bs.START_TAG_TOKEN]:function(e,t){
t.tagName===Zs.HTML?(e._insertElement(t,Js.HTML),
e.insertionMode=oa):ja(e,t)},[Bs.END_TAG_TOKEN]:function(e,t){
const n=t.tagName
n!==Zs.HTML&&n!==Zs.HEAD&&n!==Zs.BODY&&n!==Zs.BR||ja(e,t)},
[Bs.EOF_TOKEN]:ja},[oa]:{[Bs.CHARACTER_TOKEN]:Ya,
[Bs.NULL_CHARACTER_TOKEN]:Ya,[Bs.WHITESPACE_CHARACTER_TOKEN]:Ha,
[Bs.COMMENT_TOKEN]:Ba,[Bs.DOCTYPE_TOKEN]:wa,
[Bs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===Zs.HTML?cl(e,t):n===Zs.HEAD?(e._insertElement(t,Js.HTML),e.headElement=e.openElements.current,
e.insertionMode=sa):Ya(e,t)},[Bs.END_TAG_TOKEN]:function(e,t){
const n=t.tagName
n===Zs.HEAD||n===Zs.BODY||n===Zs.HTML||n===Zs.BR?Ya(e,t):e._err(Vs.endTagWithoutMatchingOpenElement)
},[Bs.EOF_TOKEN]:Ya},[sa]:{[Bs.CHARACTER_TOKEN]:qa,
[Bs.NULL_CHARACTER_TOKEN]:qa,[Bs.WHITESPACE_CHARACTER_TOKEN]:Ga,
[Bs.COMMENT_TOKEN]:Ba,[Bs.DOCTYPE_TOKEN]:wa,[Bs.START_TAG_TOKEN]:Qa,
[Bs.END_TAG_TOKEN]:Wa,[Bs.EOF_TOKEN]:qa},[aa]:{
[Bs.CHARACTER_TOKEN]:Va,[Bs.NULL_CHARACTER_TOKEN]:Va,
[Bs.WHITESPACE_CHARACTER_TOKEN]:Ga,[Bs.COMMENT_TOKEN]:Ba,
[Bs.DOCTYPE_TOKEN]:wa,[Bs.START_TAG_TOKEN]:function(e,t){
const n=t.tagName
n===Zs.HTML?cl(e,t):n===Zs.BASEFONT||n===Zs.BGSOUND||n===Zs.HEAD||n===Zs.LINK||n===Zs.META||n===Zs.NOFRAMES||n===Zs.STYLE?Qa(e,t):n===Zs.NOSCRIPT?e._err(Vs.nestedNoscriptInHead):Va(e,t)
},[Bs.END_TAG_TOKEN]:function(e,t){const n=t.tagName
n===Zs.NOSCRIPT?(e.openElements.pop(),e.insertionMode=sa):n===Zs.BR?Va(e,t):e._err(Vs.endTagWithoutMatchingOpenElement)
},[Bs.EOF_TOKEN]:Va},[la]:{[Bs.CHARACTER_TOKEN]:Xa,
[Bs.NULL_CHARACTER_TOKEN]:Xa,[Bs.WHITESPACE_CHARACTER_TOKEN]:Ga,
[Bs.COMMENT_TOKEN]:Ba,[Bs.DOCTYPE_TOKEN]:wa,
[Bs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===Zs.HTML?cl(e,t):n===Zs.BODY?(e._insertElement(t,Js.HTML),e.framesetOk=!1,e.insertionMode=ca):n===Zs.FRAMESET?(e._insertElement(t,Js.HTML),
e.insertionMode=Na):n===Zs.BASE||n===Zs.BASEFONT||n===Zs.BGSOUND||n===Zs.LINK||n===Zs.META||n===Zs.NOFRAMES||n===Zs.SCRIPT||n===Zs.STYLE||n===Zs.TEMPLATE||n===Zs.TITLE?(e._err(Vs.abandonedHeadElementChild),
e.openElements.push(e.headElement),
Qa(e,t),e.openElements.remove(e.headElement)):n===Zs.HEAD?e._err(Vs.misplacedStartTagForHeadElement):Xa(e,t)
},[Bs.END_TAG_TOKEN]:function(e,t){const n=t.tagName
n===Zs.BODY||n===Zs.HTML||n===Zs.BR?Xa(e,t):n===Zs.TEMPLATE?Wa(e,t):e._err(Vs.endTagWithoutMatchingOpenElement)
},[Bs.EOF_TOKEN]:Xa},[ca]:{[Bs.CHARACTER_TOKEN]:Za,
[Bs.NULL_CHARACTER_TOKEN]:Ha,[Bs.WHITESPACE_CHARACTER_TOKEN]:$a,
[Bs.COMMENT_TOKEN]:Ba,[Bs.DOCTYPE_TOKEN]:Ha,[Bs.START_TAG_TOKEN]:cl,
[Bs.END_TAG_TOKEN]:fl,[Bs.EOF_TOKEN]:ml},[ua]:{
[Bs.CHARACTER_TOKEN]:Ga,[Bs.NULL_CHARACTER_TOKEN]:Ga,
[Bs.WHITESPACE_CHARACTER_TOKEN]:Ga,[Bs.COMMENT_TOKEN]:Ha,
[Bs.DOCTYPE_TOKEN]:Ha,[Bs.START_TAG_TOKEN]:Ha,
[Bs.END_TAG_TOKEN]:function(e,t){
t.tagName===Zs.SCRIPT&&(e.pendingScript=e.openElements.current)
e.openElements.pop(),e.insertionMode=e.originalInsertionMode},
[Bs.EOF_TOKEN]:function(e,t){
e._err(Vs.eofInElementThatCanContainOnlyText),e.openElements.pop(),
e.insertionMode=e.originalInsertionMode,e._processToken(t)}},[ha]:{
[Bs.CHARACTER_TOKEN]:dl,[Bs.NULL_CHARACTER_TOKEN]:dl,
[Bs.WHITESPACE_CHARACTER_TOKEN]:dl,[Bs.COMMENT_TOKEN]:Ba,
[Bs.DOCTYPE_TOKEN]:Ha,[Bs.START_TAG_TOKEN]:Tl,[Bs.END_TAG_TOKEN]:El,
[Bs.EOF_TOKEN]:ml},[pa]:{[Bs.CHARACTER_TOKEN]:function(e,t){
e.pendingCharacterTokens.push(t),
e.hasNonWhitespacePendingCharacterToken=!0},
[Bs.NULL_CHARACTER_TOKEN]:Ha,
[Bs.WHITESPACE_CHARACTER_TOKEN]:function(e,t){
e.pendingCharacterTokens.push(t)},[Bs.COMMENT_TOKEN]:_l,
[Bs.DOCTYPE_TOKEN]:_l,[Bs.START_TAG_TOKEN]:_l,[Bs.END_TAG_TOKEN]:_l,
[Bs.EOF_TOKEN]:_l},[fa]:{[Bs.CHARACTER_TOKEN]:Za,
[Bs.NULL_CHARACTER_TOKEN]:Ha,[Bs.WHITESPACE_CHARACTER_TOKEN]:$a,
[Bs.COMMENT_TOKEN]:Ba,[Bs.DOCTYPE_TOKEN]:Ha,
[Bs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===Zs.CAPTION||n===Zs.COL||n===Zs.COLGROUP||n===Zs.TBODY||n===Zs.TD||n===Zs.TFOOT||n===Zs.TH||n===Zs.THEAD||n===Zs.TR?e.openElements.hasInTableScope(Zs.CAPTION)&&(e.openElements.generateImpliedEndTags(),
e.openElements.popUntilTagNamePopped(Zs.CAPTION),
e.activeFormattingElements.clearToLastMarker(),
e.insertionMode=ha,e._processToken(t)):cl(e,t)},
[Bs.END_TAG_TOKEN]:function(e,t){const n=t.tagName
n===Zs.CAPTION||n===Zs.TABLE?e.openElements.hasInTableScope(Zs.CAPTION)&&(e.openElements.generateImpliedEndTags(),
e.openElements.popUntilTagNamePopped(Zs.CAPTION),
e.activeFormattingElements.clearToLastMarker(),
e.insertionMode=ha,n===Zs.TABLE&&e._processToken(t)):n!==Zs.BODY&&n!==Zs.COL&&n!==Zs.COLGROUP&&n!==Zs.HTML&&n!==Zs.TBODY&&n!==Zs.TD&&n!==Zs.TFOOT&&n!==Zs.TH&&n!==Zs.THEAD&&n!==Zs.TR&&fl(e,t)
},[Bs.EOF_TOKEN]:ml},[ma]:{[Bs.CHARACTER_TOKEN]:Al,
[Bs.NULL_CHARACTER_TOKEN]:Al,[Bs.WHITESPACE_CHARACTER_TOKEN]:Ga,
[Bs.COMMENT_TOKEN]:Ba,[Bs.DOCTYPE_TOKEN]:Ha,
[Bs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===Zs.HTML?cl(e,t):n===Zs.COL?(e._appendElement(t,Js.HTML),t.ackSelfClosing=!0):n===Zs.TEMPLATE?Qa(e,t):Al(e,t)
},[Bs.END_TAG_TOKEN]:function(e,t){const n=t.tagName
n===Zs.COLGROUP?e.openElements.currentTagName===Zs.COLGROUP&&(e.openElements.pop(),
e.insertionMode=ha):n===Zs.TEMPLATE?Wa(e,t):n!==Zs.COL&&Al(e,t)},
[Bs.EOF_TOKEN]:ml},[da]:{[Bs.CHARACTER_TOKEN]:dl,
[Bs.NULL_CHARACTER_TOKEN]:dl,[Bs.WHITESPACE_CHARACTER_TOKEN]:dl,
[Bs.COMMENT_TOKEN]:Ba,[Bs.DOCTYPE_TOKEN]:Ha,
[Bs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===Zs.TR?(e.openElements.clearBackToTableBodyContext(),e._insertElement(t,Js.HTML),
e.insertionMode=Ta):n===Zs.TH||n===Zs.TD?(e.openElements.clearBackToTableBodyContext(),
e._insertFakeElement(Zs.TR),
e.insertionMode=Ta,e._processToken(t)):n===Zs.CAPTION||n===Zs.COL||n===Zs.COLGROUP||n===Zs.TBODY||n===Zs.TFOOT||n===Zs.THEAD?e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),
e.openElements.pop(),e.insertionMode=ha,e._processToken(t)):Tl(e,t)},
[Bs.END_TAG_TOKEN]:function(e,t){const n=t.tagName
n===Zs.TBODY||n===Zs.TFOOT||n===Zs.THEAD?e.openElements.hasInTableScope(n)&&(e.openElements.clearBackToTableBodyContext(),
e.openElements.pop(),
e.insertionMode=ha):n===Zs.TABLE?e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),
e.openElements.pop(),
e.insertionMode=ha,e._processToken(t)):(n!==Zs.BODY&&n!==Zs.CAPTION&&n!==Zs.COL&&n!==Zs.COLGROUP||n!==Zs.HTML&&n!==Zs.TD&&n!==Zs.TH&&n!==Zs.TR)&&El(e,t)
},[Bs.EOF_TOKEN]:ml},[Ta]:{[Bs.CHARACTER_TOKEN]:dl,
[Bs.NULL_CHARACTER_TOKEN]:dl,[Bs.WHITESPACE_CHARACTER_TOKEN]:dl,
[Bs.COMMENT_TOKEN]:Ba,[Bs.DOCTYPE_TOKEN]:Ha,
[Bs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===Zs.TH||n===Zs.TD?(e.openElements.clearBackToTableRowContext(),e._insertElement(t,Js.HTML),
e.insertionMode=Ea,
e.activeFormattingElements.insertMarker()):n===Zs.CAPTION||n===Zs.COL||n===Zs.COLGROUP||n===Zs.TBODY||n===Zs.TFOOT||n===Zs.THEAD||n===Zs.TR?e.openElements.hasInTableScope(Zs.TR)&&(e.openElements.clearBackToTableRowContext(),
e.openElements.pop(),e.insertionMode=da,e._processToken(t)):Tl(e,t)},
[Bs.END_TAG_TOKEN]:function(e,t){const n=t.tagName
n===Zs.TR?e.openElements.hasInTableScope(Zs.TR)&&(e.openElements.clearBackToTableRowContext(),
e.openElements.pop(),
e.insertionMode=da):n===Zs.TABLE?e.openElements.hasInTableScope(Zs.TR)&&(e.openElements.clearBackToTableRowContext(),
e.openElements.pop(),
e.insertionMode=da,e._processToken(t)):n===Zs.TBODY||n===Zs.TFOOT||n===Zs.THEAD?(e.openElements.hasInTableScope(n)||e.openElements.hasInTableScope(Zs.TR))&&(e.openElements.clearBackToTableRowContext(),
e.openElements.pop(),
e.insertionMode=da,e._processToken(t)):(n!==Zs.BODY&&n!==Zs.CAPTION&&n!==Zs.COL&&n!==Zs.COLGROUP||n!==Zs.HTML&&n!==Zs.TD&&n!==Zs.TH)&&El(e,t)
},[Bs.EOF_TOKEN]:ml},[Ea]:{[Bs.CHARACTER_TOKEN]:Za,
[Bs.NULL_CHARACTER_TOKEN]:Ha,[Bs.WHITESPACE_CHARACTER_TOKEN]:$a,
[Bs.COMMENT_TOKEN]:Ba,[Bs.DOCTYPE_TOKEN]:Ha,
[Bs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===Zs.CAPTION||n===Zs.COL||n===Zs.COLGROUP||n===Zs.TBODY||n===Zs.TD||n===Zs.TFOOT||n===Zs.TH||n===Zs.THEAD||n===Zs.TR?(e.openElements.hasInTableScope(Zs.TD)||e.openElements.hasInTableScope(Zs.TH))&&(e._closeTableCell(),
e._processToken(t)):cl(e,t)},[Bs.END_TAG_TOKEN]:function(e,t){
const n=t.tagName
n===Zs.TD||n===Zs.TH?e.openElements.hasInTableScope(n)&&(e.openElements.generateImpliedEndTags(),
e.openElements.popUntilTagNamePopped(n),
e.activeFormattingElements.clearToLastMarker(),
e.insertionMode=Ta):n===Zs.TABLE||n===Zs.TBODY||n===Zs.TFOOT||n===Zs.THEAD||n===Zs.TR?e.openElements.hasInTableScope(n)&&(e._closeTableCell(),
e._processToken(t)):n!==Zs.BODY&&n!==Zs.CAPTION&&n!==Zs.COL&&n!==Zs.COLGROUP&&n!==Zs.HTML&&fl(e,t)
},[Bs.EOF_TOKEN]:ml},[ga]:{[Bs.CHARACTER_TOKEN]:Ga,
[Bs.NULL_CHARACTER_TOKEN]:Ha,[Bs.WHITESPACE_CHARACTER_TOKEN]:Ga,
[Bs.COMMENT_TOKEN]:Ba,[Bs.DOCTYPE_TOKEN]:Ha,[Bs.START_TAG_TOKEN]:Cl,
[Bs.END_TAG_TOKEN]:Nl,[Bs.EOF_TOKEN]:ml},[_a]:{
[Bs.CHARACTER_TOKEN]:Ga,[Bs.NULL_CHARACTER_TOKEN]:Ha,
[Bs.WHITESPACE_CHARACTER_TOKEN]:Ga,[Bs.COMMENT_TOKEN]:Ba,
[Bs.DOCTYPE_TOKEN]:Ha,[Bs.START_TAG_TOKEN]:function(e,t){
const n=t.tagName
n===Zs.CAPTION||n===Zs.TABLE||n===Zs.TBODY||n===Zs.TFOOT||n===Zs.THEAD||n===Zs.TR||n===Zs.TD||n===Zs.TH?(e.openElements.popUntilTagNamePopped(Zs.SELECT),
e._resetInsertionMode(),e._processToken(t)):Cl(e,t)},
[Bs.END_TAG_TOKEN]:function(e,t){const n=t.tagName
n===Zs.CAPTION||n===Zs.TABLE||n===Zs.TBODY||n===Zs.TFOOT||n===Zs.THEAD||n===Zs.TR||n===Zs.TD||n===Zs.TH?e.openElements.hasInTableScope(n)&&(e.openElements.popUntilTagNamePopped(Zs.SELECT),
e._resetInsertionMode(),e._processToken(t)):Nl(e,t)},[Bs.EOF_TOKEN]:ml
},[Aa]:{[Bs.CHARACTER_TOKEN]:Za,[Bs.NULL_CHARACTER_TOKEN]:Ha,
[Bs.WHITESPACE_CHARACTER_TOKEN]:$a,[Bs.COMMENT_TOKEN]:Ba,
[Bs.DOCTYPE_TOKEN]:Ha,[Bs.START_TAG_TOKEN]:function(e,t){
const n=t.tagName
if(n===Zs.BASE||n===Zs.BASEFONT||n===Zs.BGSOUND||n===Zs.LINK||n===Zs.META||n===Zs.NOFRAMES||n===Zs.SCRIPT||n===Zs.STYLE||n===Zs.TEMPLATE||n===Zs.TITLE)Qa(e,t)
else{const r=Ia[n]||ca
e._popTmplInsertionMode(),e._pushTmplInsertionMode(r),e.insertionMode=r,e._processToken(t)
}},[Bs.END_TAG_TOKEN]:function(e,t){t.tagName===Zs.TEMPLATE&&Wa(e,t)},
[Bs.EOF_TOKEN]:kl},[Ca]:{[Bs.CHARACTER_TOKEN]:Ol,
[Bs.NULL_CHARACTER_TOKEN]:Ol,[Bs.WHITESPACE_CHARACTER_TOKEN]:$a,
[Bs.COMMENT_TOKEN]:function(e,t){
e._appendCommentNode(t,e.openElements.items[0])},
[Bs.DOCTYPE_TOKEN]:Ha,[Bs.START_TAG_TOKEN]:function(e,t){
t.tagName===Zs.HTML?cl(e,t):Ol(e,t)},[Bs.END_TAG_TOKEN]:function(e,t){
t.tagName===Zs.HTML?e.fragmentContext||(e.insertionMode=Oa):Ol(e,t)},
[Bs.EOF_TOKEN]:Ka},[Na]:{[Bs.CHARACTER_TOKEN]:Ha,
[Bs.NULL_CHARACTER_TOKEN]:Ha,[Bs.WHITESPACE_CHARACTER_TOKEN]:Ga,
[Bs.COMMENT_TOKEN]:Ba,[Bs.DOCTYPE_TOKEN]:Ha,
[Bs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===Zs.HTML?cl(e,t):n===Zs.FRAMESET?e._insertElement(t,Js.HTML):n===Zs.FRAME?(e._appendElement(t,Js.HTML),
t.ackSelfClosing=!0):n===Zs.NOFRAMES&&Qa(e,t)},
[Bs.END_TAG_TOKEN]:function(e,t){
t.tagName!==Zs.FRAMESET||e.openElements.isRootHtmlElementCurrent()||(e.openElements.pop(),
e.fragmentContext||e.openElements.currentTagName===Zs.FRAMESET||(e.insertionMode=ka))
},[Bs.EOF_TOKEN]:Ka},[ka]:{[Bs.CHARACTER_TOKEN]:Ha,
[Bs.NULL_CHARACTER_TOKEN]:Ha,[Bs.WHITESPACE_CHARACTER_TOKEN]:Ga,
[Bs.COMMENT_TOKEN]:Ba,[Bs.DOCTYPE_TOKEN]:Ha,
[Bs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===Zs.HTML?cl(e,t):n===Zs.NOFRAMES&&Qa(e,t)},
[Bs.END_TAG_TOKEN]:function(e,t){
t.tagName===Zs.HTML&&(e.insertionMode=Sa)},[Bs.EOF_TOKEN]:Ka},[Oa]:{
[Bs.CHARACTER_TOKEN]:Sl,[Bs.NULL_CHARACTER_TOKEN]:Sl,
[Bs.WHITESPACE_CHARACTER_TOKEN]:$a,[Bs.COMMENT_TOKEN]:Ua,
[Bs.DOCTYPE_TOKEN]:Ha,[Bs.START_TAG_TOKEN]:function(e,t){
t.tagName===Zs.HTML?cl(e,t):Sl(e,t)},[Bs.END_TAG_TOKEN]:Sl,
[Bs.EOF_TOKEN]:Ka},[Sa]:{[Bs.CHARACTER_TOKEN]:Ha,
[Bs.NULL_CHARACTER_TOKEN]:Ha,[Bs.WHITESPACE_CHARACTER_TOKEN]:$a,
[Bs.COMMENT_TOKEN]:Ua,[Bs.DOCTYPE_TOKEN]:Ha,
[Bs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===Zs.HTML?cl(e,t):n===Zs.NOFRAMES&&Qa(e,t)},[Bs.END_TAG_TOKEN]:Ha,
[Bs.EOF_TOKEN]:Ka}}
var ba=class{constructor(e){
this.options=Qs(ta,e),this.treeAdapter=this.options.treeAdapter,
this.pendingScript=null,
this.options.sourceCodeLocationInfo&&js.install(this,Ks),
this.options.onParseError&&js.install(this,zs,{
onParseError:this.options.onParseError})}parse(e){
const t=this.treeAdapter.createDocument()
return this._bootstrap(t,null),this.tokenizer.write(e,!0),this._runParsingLoop(null),
t}parseFragment(e,t){
t||(t=this.treeAdapter.createElement(Zs.TEMPLATE,Js.HTML,[]))
const n=this.treeAdapter.createElement('documentmock',Js.HTML,[])
this._bootstrap(n,t),this.treeAdapter.getTagName(t)===Zs.TEMPLATE&&this._pushTmplInsertionMode(Aa),
this._initTokenizerForFragmentParsing(),
this._insertFakeRootElement(),this._resetInsertionMode(),
this._findFormInFragmentContext(),
this.tokenizer.write(e,!0),this._runParsingLoop(null)
const r=this.treeAdapter.getFirstChild(n),i=this.treeAdapter.createDocumentFragment()
return this._adoptNodes(r,i),i}_bootstrap(e,t){
this.tokenizer=new Bs(this.options),
this.stopped=!1,this.insertionMode=ra,this.originalInsertionMode='',
this.document=e,
this.fragmentContext=t,this.headElement=null,this.formElement=null,
this.openElements=new Us(this.document,this.treeAdapter),
this.activeFormattingElements=new Gs(this.treeAdapter),
this.tmplInsertionModeStack=[],
this.tmplInsertionModeStackTop=-1,this.currentTmplInsertionMode=null,
this.pendingCharacterTokens=[],
this.hasNonWhitespacePendingCharacterToken=!1,this.framesetOk=!0,
this.skipNextNewLine=!1,this.fosterParentingEnabled=!1}_err(){}
_runParsingLoop(e){for(;!this.stopped;){
this._setupTokenizerCDATAMode()
const t=this.tokenizer.getNextToken()
if(t.type===Bs.HIBERNATION_TOKEN)break
if(this.skipNextNewLine&&(this.skipNextNewLine=!1,t.type===Bs.WHITESPACE_CHARACTER_TOKEN&&'\n'===t.chars[0])){
if(1===t.chars.length)continue
t.chars=t.chars.substr(1)}
if(this._processInputToken(t),e&&this.pendingScript)break}}
runParsingLoopForCurrentChunk(e,t){
if(this._runParsingLoop(t),t&&this.pendingScript){
const e=this.pendingScript
return this.pendingScript=null,void t(e)}e&&e()}
_setupTokenizerCDATAMode(){const e=this._getAdjustedCurrentElement()
this.tokenizer.allowCDATA=e&&e!==this.document&&this.treeAdapter.getNamespaceURI(e)!==Js.HTML&&!this._isIntegrationPoint(e)
}_switchToTextParsing(e,t){
this._insertElement(e,Js.HTML),this.tokenizer.state=t,
this.originalInsertionMode=this.insertionMode,this.insertionMode=ua}
switchToPlaintextParsing(){
this.insertionMode=ua,this.originalInsertionMode=ca,this.tokenizer.state=Bs.MODE.PLAINTEXT
}_getAdjustedCurrentElement(){
return 0===this.openElements.stackTop&&this.fragmentContext?this.fragmentContext:this.openElements.current
}_findFormInFragmentContext(){let e=this.fragmentContext
do{if(this.treeAdapter.getTagName(e)===Zs.FORM){this.formElement=e
break}e=this.treeAdapter.getParentNode(e)}while(e)}
_initTokenizerForFragmentParsing(){
if(this.treeAdapter.getNamespaceURI(this.fragmentContext)===Js.HTML){
const e=this.treeAdapter.getTagName(this.fragmentContext)
e===Zs.TITLE||e===Zs.TEXTAREA?this.tokenizer.state=Bs.MODE.RCDATA:e===Zs.STYLE||e===Zs.XMP||e===Zs.IFRAME||e===Zs.NOEMBED||e===Zs.NOFRAMES||e===Zs.NOSCRIPT?this.tokenizer.state=Bs.MODE.RAWTEXT:e===Zs.SCRIPT?this.tokenizer.state=Bs.MODE.SCRIPT_DATA:e===Zs.PLAINTEXT&&(this.tokenizer.state=Bs.MODE.PLAINTEXT)
}}_setDocumentType(e){
const t=e.name||'',n=e.publicId||'',r=e.systemId||''
this.treeAdapter.setDocumentType(this.document,t,n,r)}
_attachElementToTree(e){
if(this._shouldFosterParentOnInsertion())this._fosterParentElement(e)
else{
const t=this.openElements.currentTmplContent||this.openElements.current
this.treeAdapter.appendChild(t,e)}}_appendElement(e,t){
const n=this.treeAdapter.createElement(e.tagName,t,e.attrs)
this._attachElementToTree(n)}_insertElement(e,t){
const n=this.treeAdapter.createElement(e.tagName,t,e.attrs)
this._attachElementToTree(n),this.openElements.push(n)}
_insertFakeElement(e){
const t=this.treeAdapter.createElement(e,Js.HTML,[])
this._attachElementToTree(t),this.openElements.push(t)}
_insertTemplate(e){
const t=this.treeAdapter.createElement(e.tagName,Js.HTML,e.attrs),n=this.treeAdapter.createDocumentFragment()
this.treeAdapter.setTemplateContent(t,n),this._attachElementToTree(t),this.openElements.push(t)
}_insertFakeRootElement(){
const e=this.treeAdapter.createElement(Zs.HTML,Js.HTML,[])
this.treeAdapter.appendChild(this.openElements.current,e),this.openElements.push(e)
}_appendCommentNode(e,t){
const n=this.treeAdapter.createCommentNode(e.data)
this.treeAdapter.appendChild(t,n)}_insertCharacters(e){
if(this._shouldFosterParentOnInsertion())this._fosterParentText(e.chars)
else{
const t=this.openElements.currentTmplContent||this.openElements.current
this.treeAdapter.insertText(t,e.chars)}}_adoptNodes(e,t){
for(let n=this.treeAdapter.getFirstChild(e);n;n=this.treeAdapter.getFirstChild(e))this.treeAdapter.detachNode(n),
this.treeAdapter.appendChild(t,n)}
_shouldProcessTokenInForeignContent(e){
const t=this._getAdjustedCurrentElement()
if(!t||t===this.document)return!1
const n=this.treeAdapter.getNamespaceURI(t)
if(n===Js.HTML)return!1
if(this.treeAdapter.getTagName(t)===Zs.ANNOTATION_XML&&n===Js.MATHML&&e.type===Bs.START_TAG_TOKEN&&e.tagName===Zs.SVG)return!1
const r=e.type===Bs.CHARACTER_TOKEN||e.type===Bs.NULL_CHARACTER_TOKEN||e.type===Bs.WHITESPACE_CHARACTER_TOKEN
return(!(e.type===Bs.START_TAG_TOKEN&&e.tagName!==Zs.MGLYPH&&e.tagName!==Zs.MALIGNMARK)&&!r||!this._isIntegrationPoint(t,Js.MATHML))&&((e.type!==Bs.START_TAG_TOKEN&&!r||!this._isIntegrationPoint(t,Js.HTML))&&e.type!==Bs.EOF_TOKEN)
}_processToken(e){Ra[this.insertionMode][e.type](this,e)}
_processTokenInBodyMode(e){Ra[ca][e.type](this,e)}
_processTokenInForeignContent(e){
e.type===Bs.CHARACTER_TOKEN?function(e,t){
e._insertCharacters(t),e.framesetOk=!1
}(this,e):e.type===Bs.NULL_CHARACTER_TOKEN?function(e,t){
t.chars=Xs.REPLACEMENT_CHARACTER,e._insertCharacters(t)
}(this,e):e.type===Bs.WHITESPACE_CHARACTER_TOKEN?Ga(this,e):e.type===Bs.COMMENT_TOKEN?Ba(this,e):e.type===Bs.START_TAG_TOKEN?function(e,t){
if(qs.causesExit(t)&&!e.fragmentContext){
for(;e.treeAdapter.getNamespaceURI(e.openElements.current)!==Js.HTML&&!e._isIntegrationPoint(e.openElements.current);)e.openElements.pop()
e._processToken(t)}else{
const n=e._getAdjustedCurrentElement(),r=e.treeAdapter.getNamespaceURI(n)
r===Js.MATHML?qs.adjustTokenMathMLAttrs(t):r===Js.SVG&&(qs.adjustTokenSVGTagName(t),
qs.adjustTokenSVGAttrs(t)),
qs.adjustTokenXMLAttrs(t),t.selfClosing?e._appendElement(t,r):e._insertElement(t,r),
t.ackSelfClosing=!0}
}(this,e):e.type===Bs.END_TAG_TOKEN&&function(e,t){
for(let n=e.openElements.stackTop;n>0;n--){
const r=e.openElements.items[n]
if(e.treeAdapter.getNamespaceURI(r)===Js.HTML){e._processToken(t)
break}if(e.treeAdapter.getTagName(r).toLowerCase()===t.tagName){
e.openElements.popUntilElementPopped(r)
break}}}(this,e)}_processInputToken(e){
this._shouldProcessTokenInForeignContent(e)?this._processTokenInForeignContent(e):this._processToken(e),
e.type===Bs.START_TAG_TOKEN&&e.selfClosing&&!e.ackSelfClosing&&this._err(Vs.nonVoidHtmlElementStartTagWithTrailingSolidus)
}_isIntegrationPoint(e,t){
const n=this.treeAdapter.getTagName(e),r=this.treeAdapter.getNamespaceURI(e),i=this.treeAdapter.getAttrList(e)
return qs.isIntegrationPoint(n,r,i,t)}
_reconstructActiveFormattingElements(){
const e=this.activeFormattingElements.length
if(e){let t=e,n=null
do{
if(t--,n=this.activeFormattingElements.entries[t],n.type===Gs.MARKER_ENTRY||this.openElements.contains(n.element)){
t++
break}}while(t>0)
for(let r=t;r<e;r++)n=this.activeFormattingElements.entries[r],this._insertElement(n.token,this.treeAdapter.getNamespaceURI(n.element)),
n.element=this.openElements.current}}_closeTableCell(){
this.openElements.generateImpliedEndTags(),
this.openElements.popUntilTableCellPopped(),
this.activeFormattingElements.clearToLastMarker(),
this.insertionMode=Ta}_closePElement(){
this.openElements.generateImpliedEndTagsWithExclusion(Zs.P),
this.openElements.popUntilTagNamePopped(Zs.P)}_resetInsertionMode(){
for(let e=this.openElements.stackTop,t=!1;e>=0;e--){
let n=this.openElements.items[e]
0===e&&(t=!0,this.fragmentContext&&(n=this.fragmentContext))
const r=this.treeAdapter.getTagName(n),i=ya[r]
if(i){this.insertionMode=i
break}if(!(t||r!==Zs.TD&&r!==Zs.TH)){this.insertionMode=Ea
break}if(!t&&r===Zs.HEAD){this.insertionMode=sa
break}if(r===Zs.SELECT){this._resetInsertionModeForSelect(e)
break}if(r===Zs.TEMPLATE){
this.insertionMode=this.currentTmplInsertionMode
break}if(r===Zs.HTML){this.insertionMode=this.headElement?la:oa
break}if(t){this.insertionMode=ca
break}}}_resetInsertionModeForSelect(e){if(e>0)for(let t=e-1;t>0;t--){
const e=this.openElements.items[t],n=this.treeAdapter.getTagName(e)
if(n===Zs.TEMPLATE)break
if(n===Zs.TABLE)return void(this.insertionMode=_a)}
this.insertionMode=ga}_pushTmplInsertionMode(e){
this.tmplInsertionModeStack.push(e),
this.tmplInsertionModeStackTop++,this.currentTmplInsertionMode=e}
_popTmplInsertionMode(){
this.tmplInsertionModeStack.pop(),this.tmplInsertionModeStackTop--,
this.currentTmplInsertionMode=this.tmplInsertionModeStack[this.tmplInsertionModeStackTop]
}_isElementCausesFosterParenting(e){
const t=this.treeAdapter.getTagName(e)
return t===Zs.TABLE||t===Zs.TBODY||t===Zs.TFOOT||t===Zs.THEAD||t===Zs.TR
}_shouldFosterParentOnInsertion(){
return this.fosterParentingEnabled&&this._isElementCausesFosterParenting(this.openElements.current)
}_findFosterParentingLocation(){const e={parent:null,
beforeElement:null}
for(let t=this.openElements.stackTop;t>=0;t--){
const n=this.openElements.items[t],r=this.treeAdapter.getTagName(n),i=this.treeAdapter.getNamespaceURI(n)
if(r===Zs.TEMPLATE&&i===Js.HTML){
e.parent=this.treeAdapter.getTemplateContent(n)
break}if(r===Zs.TABLE){
e.parent=this.treeAdapter.getParentNode(n),e.parent?e.beforeElement=n:e.parent=this.openElements.items[t-1]
break}}return e.parent||(e.parent=this.openElements.items[0]),e}
_fosterParentElement(e){const t=this._findFosterParentingLocation()
t.beforeElement?this.treeAdapter.insertBefore(t.parent,e,t.beforeElement):this.treeAdapter.appendChild(t.parent,e)
}_fosterParentText(e){const t=this._findFosterParentingLocation()
t.beforeElement?this.treeAdapter.insertTextBefore(t.parent,e,t.beforeElement):this.treeAdapter.insertText(t.parent,e)
}_isSpecialElement(e){
const t=this.treeAdapter.getTagName(e),n=this.treeAdapter.getNamespaceURI(e)
return $s.SPECIAL_ELEMENTS[n][t]}}
function La(e,t){
let n=e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName)
return n?e.openElements.contains(n.element)?e.openElements.hasInScope(t.tagName)||(n=null):(e.activeFormattingElements.removeEntry(n),
n=null):pl(e,t),n}function xa(e,t){let n=null
for(let r=e.openElements.stackTop;r>=0;r--){
const i=e.openElements.items[r]
if(i===t.element)break
e._isSpecialElement(i)&&(n=i)}
return n||(e.openElements.popUntilElementPopped(t.element),
e.activeFormattingElements.removeEntry(t)),n}function Ma(e,t,n){
let r=t,i=e.openElements.getCommonAncestor(t)
for(let o=0,s=i;s!==n;o++,s=i){i=e.openElements.getCommonAncestor(s)
const n=e.activeFormattingElements.getElementEntry(s),a=n&&o>=3
!n||a?(a&&e.activeFormattingElements.removeEntry(n),e.openElements.remove(s)):(s=Pa(e,n),
r===t&&(e.activeFormattingElements.bookmark=n),
e.treeAdapter.detachNode(r),e.treeAdapter.appendChild(s,r),r=s)}
return r}function Pa(e,t){
const n=e.treeAdapter.getNamespaceURI(t.element),r=e.treeAdapter.createElement(t.token.tagName,n,t.token.attrs)
return e.openElements.replace(t.element,r),t.element=r,r}
function va(e,t,n){
if(e._isElementCausesFosterParenting(t))e._fosterParentElement(n)
else{
const r=e.treeAdapter.getTagName(t),i=e.treeAdapter.getNamespaceURI(t)
r===Zs.TEMPLATE&&i===Js.HTML&&(t=e.treeAdapter.getTemplateContent(t)),e.treeAdapter.appendChild(t,n)
}}function Da(e,t,n){
const r=e.treeAdapter.getNamespaceURI(n.element),i=n.token,o=e.treeAdapter.createElement(i.tagName,r,i.attrs)
e._adoptNodes(t,o),e.treeAdapter.appendChild(t,o),e.activeFormattingElements.insertElementAfterBookmark(o,n.token),
e.activeFormattingElements.removeEntry(n),
e.openElements.remove(n.element),e.openElements.insertAfter(t,o)}
function Fa(e,t){let n
for(let r=0;r<8&&(n=La(e,t),n);r++){const t=xa(e,n)
if(!t)break
e.activeFormattingElements.bookmark=n
const r=Ma(e,t,n.element),i=e.openElements.getCommonAncestor(n.element)
e.treeAdapter.detachNode(r),va(e,i,r),Da(e,t,n)}}function Ha(){}
function wa(e){e._err(Vs.misplacedDoctype)}function Ba(e,t){
e._appendCommentNode(t,e.openElements.currentTmplContent||e.openElements.current)
}function Ua(e,t){e._appendCommentNode(t,e.document)}function Ga(e,t){
e._insertCharacters(t)}function Ka(e){e.stopped=!0}function za(e,t){
e._err(Vs.missingDoctype,{beforeToken:!0
}),e.treeAdapter.setDocumentMode(e.document,$s.DOCUMENT_MODE.QUIRKS),
e.insertionMode=ia,e._processToken(t)}function ja(e,t){
e._insertFakeRootElement(),e.insertionMode=oa,e._processToken(t)}
function Ya(e,t){
e._insertFakeElement(Zs.HEAD),e.headElement=e.openElements.current,
e.insertionMode=sa,e._processToken(t)}function Qa(e,t){
const n=t.tagName
n===Zs.HTML?cl(e,t):n===Zs.BASE||n===Zs.BASEFONT||n===Zs.BGSOUND||n===Zs.LINK||n===Zs.META?(e._appendElement(t,Js.HTML),
t.ackSelfClosing=!0):n===Zs.TITLE?e._switchToTextParsing(t,Bs.MODE.RCDATA):n===Zs.NOSCRIPT?e.options.scriptingEnabled?e._switchToTextParsing(t,Bs.MODE.RAWTEXT):(e._insertElement(t,Js.HTML),
e.insertionMode=aa):n===Zs.NOFRAMES||n===Zs.STYLE?e._switchToTextParsing(t,Bs.MODE.RAWTEXT):n===Zs.SCRIPT?e._switchToTextParsing(t,Bs.MODE.SCRIPT_DATA):n===Zs.TEMPLATE?(e._insertTemplate(t,Js.HTML),
e.activeFormattingElements.insertMarker(),
e.framesetOk=!1,e.insertionMode=Aa,e._pushTmplInsertionMode(Aa)):n===Zs.HEAD?e._err(Vs.misplacedStartTagForHeadElement):qa(e,t)
}function Wa(e,t){const n=t.tagName
n===Zs.HEAD?(e.openElements.pop(),e.insertionMode=la):n===Zs.BODY||n===Zs.BR||n===Zs.HTML?qa(e,t):n===Zs.TEMPLATE&&e.openElements.tmplCount>0?(e.openElements.generateImpliedEndTagsThoroughly(),
e.openElements.currentTagName!==Zs.TEMPLATE&&e._err(Vs.closingOfElementWithOpenChildElements),
e.openElements.popUntilTagNamePopped(Zs.TEMPLATE),
e.activeFormattingElements.clearToLastMarker(),
e._popTmplInsertionMode(),e._resetInsertionMode()):e._err(Vs.endTagWithoutMatchingOpenElement)
}function qa(e,t){
e.openElements.pop(),e.insertionMode=la,e._processToken(t)}
function Va(e,t){
const n=t.type===Bs.EOF_TOKEN?Vs.openElementsLeftAfterEof:Vs.disallowedContentInNoscriptInHead
e._err(n),e.openElements.pop(),e.insertionMode=sa,e._processToken(t)}
function Xa(e,t){
e._insertFakeElement(Zs.BODY),e.insertionMode=ca,e._processToken(t)}
function $a(e,t){
e._reconstructActiveFormattingElements(),e._insertCharacters(t)}
function Za(e,t){
e._reconstructActiveFormattingElements(),e._insertCharacters(t),
e.framesetOk=!1}function Ja(e,t){
e.openElements.hasInButtonScope(Zs.P)&&e._closePElement(),
e._insertElement(t,Js.HTML)}function el(e,t){
e.openElements.hasInButtonScope(Zs.P)&&e._closePElement(),
e._insertElement(t,Js.HTML),e.skipNextNewLine=!0,e.framesetOk=!1}
function tl(e,t){
e._reconstructActiveFormattingElements(),e._insertElement(t,Js.HTML),
e.activeFormattingElements.pushElement(e.openElements.current,t)}
function nl(e,t){
e._reconstructActiveFormattingElements(),e._insertElement(t,Js.HTML),
e.activeFormattingElements.insertMarker(),e.framesetOk=!1}
function rl(e,t){
e._reconstructActiveFormattingElements(),e._appendElement(t,Js.HTML),
e.framesetOk=!1,t.ackSelfClosing=!0}function il(e,t){
e._appendElement(t,Js.HTML),t.ackSelfClosing=!0}function ol(e,t){
e._switchToTextParsing(t,Bs.MODE.RAWTEXT)}function sl(e,t){
e.openElements.currentTagName===Zs.OPTION&&e.openElements.pop(),
e._reconstructActiveFormattingElements(),e._insertElement(t,Js.HTML)}
function al(e,t){
e.openElements.hasInScope(Zs.RUBY)&&e.openElements.generateImpliedEndTags(),
e._insertElement(t,Js.HTML)}function ll(e,t){
e._reconstructActiveFormattingElements(),e._insertElement(t,Js.HTML)}
function cl(e,t){const n=t.tagName
switch(n.length){case 1:
n===Zs.I||n===Zs.S||n===Zs.B||n===Zs.U?tl(e,t):n===Zs.P?Ja(e,t):n===Zs.A?function(e,t){
const n=e.activeFormattingElements.getElementEntryInScopeWithTagName(Zs.A)
n&&(Fa(e,t),e.openElements.remove(n.element),e.activeFormattingElements.removeEntry(n)),
e._reconstructActiveFormattingElements(),
e._insertElement(t,Js.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)
}(e,t):ll(e,t)
break
case 2:
n===Zs.DL||n===Zs.OL||n===Zs.UL?Ja(e,t):n===Zs.H1||n===Zs.H2||n===Zs.H3||n===Zs.H4||n===Zs.H5||n===Zs.H6?function(e,t){
e.openElements.hasInButtonScope(Zs.P)&&e._closePElement()
const n=e.openElements.currentTagName
n!==Zs.H1&&n!==Zs.H2&&n!==Zs.H3&&n!==Zs.H4&&n!==Zs.H5&&n!==Zs.H6||e.openElements.pop(),
e._insertElement(t,Js.HTML)
}(e,t):n===Zs.LI||n===Zs.DD||n===Zs.DT?function(e,t){e.framesetOk=!1
const n=t.tagName
for(let t=e.openElements.stackTop;t>=0;t--){
const r=e.openElements.items[t],i=e.treeAdapter.getTagName(r)
let o=null
if(n===Zs.LI&&i===Zs.LI?o=Zs.LI:n!==Zs.DD&&n!==Zs.DT||i!==Zs.DD&&i!==Zs.DT||(o=i),
o){
e.openElements.generateImpliedEndTagsWithExclusion(o),e.openElements.popUntilTagNamePopped(o)
break}
if(i!==Zs.ADDRESS&&i!==Zs.DIV&&i!==Zs.P&&e._isSpecialElement(r))break}
e.openElements.hasInButtonScope(Zs.P)&&e._closePElement(),
e._insertElement(t,Js.HTML)
}(e,t):n===Zs.EM||n===Zs.TT?tl(e,t):n===Zs.BR?rl(e,t):n===Zs.HR?function(e,t){
e.openElements.hasInButtonScope(Zs.P)&&e._closePElement(),
e._appendElement(t,Js.HTML),e.framesetOk=!1,t.ackSelfClosing=!0
}(e,t):n===Zs.RB?al(e,t):n===Zs.RT||n===Zs.RP?function(e,t){
e.openElements.hasInScope(Zs.RUBY)&&e.openElements.generateImpliedEndTagsWithExclusion(Zs.RTC),
e._insertElement(t,Js.HTML)
}(e,t):n!==Zs.TH&&n!==Zs.TD&&n!==Zs.TR&&ll(e,t)
break
case 3:
n===Zs.DIV||n===Zs.DIR||n===Zs.NAV?Ja(e,t):n===Zs.PRE?el(e,t):n===Zs.BIG?tl(e,t):n===Zs.IMG||n===Zs.WBR?rl(e,t):n===Zs.XMP?function(e,t){
e.openElements.hasInButtonScope(Zs.P)&&e._closePElement(),
e._reconstructActiveFormattingElements(),
e.framesetOk=!1,e._switchToTextParsing(t,Bs.MODE.RAWTEXT)
}(e,t):n===Zs.SVG?function(e,t){
e._reconstructActiveFormattingElements(),qs.adjustTokenSVGAttrs(t),
qs.adjustTokenXMLAttrs(t),
t.selfClosing?e._appendElement(t,Js.SVG):e._insertElement(t,Js.SVG),
t.ackSelfClosing=!0}(e,t):n===Zs.RTC?al(e,t):n!==Zs.COL&&ll(e,t)
break
case 4:n===Zs.HTML?function(e,t){
0===e.openElements.tmplCount&&e.treeAdapter.adoptAttributes(e.openElements.items[0],t.attrs)
}(e,t):n===Zs.BASE||n===Zs.LINK||n===Zs.META?Qa(e,t):n===Zs.BODY?function(e,t){
const n=e.openElements.tryPeekProperlyNestedBodyElement()
n&&0===e.openElements.tmplCount&&(e.framesetOk=!1,e.treeAdapter.adoptAttributes(n,t.attrs))
}(e,t):n===Zs.MAIN||n===Zs.MENU?Ja(e,t):n===Zs.FORM?function(e,t){
const n=e.openElements.tmplCount>0
e.formElement&&!n||(e.openElements.hasInButtonScope(Zs.P)&&e._closePElement(),e._insertElement(t,Js.HTML),
n||(e.formElement=e.openElements.current))
}(e,t):n===Zs.CODE||n===Zs.FONT?tl(e,t):n===Zs.NOBR?function(e,t){
e._reconstructActiveFormattingElements(),
e.openElements.hasInScope(Zs.NOBR)&&(Fa(e,t),
e._reconstructActiveFormattingElements()),
e._insertElement(t,Js.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)
}(e,t):n===Zs.AREA?rl(e,t):n===Zs.MATH?function(e,t){
e._reconstructActiveFormattingElements(),
qs.adjustTokenMathMLAttrs(t),qs.adjustTokenXMLAttrs(t),
t.selfClosing?e._appendElement(t,Js.MATHML):e._insertElement(t,Js.MATHML),
t.ackSelfClosing=!0}(e,t):n===Zs.MENU?function(e,t){
e.openElements.hasInButtonScope(Zs.P)&&e._closePElement(),
e._insertElement(t,Js.HTML)}(e,t):n!==Zs.HEAD&&ll(e,t)
break
case 5:
n===Zs.STYLE||n===Zs.TITLE?Qa(e,t):n===Zs.ASIDE?Ja(e,t):n===Zs.SMALL?tl(e,t):n===Zs.TABLE?function(e,t){
e.treeAdapter.getDocumentMode(e.document)!==$s.DOCUMENT_MODE.QUIRKS&&e.openElements.hasInButtonScope(Zs.P)&&e._closePElement(),
e._insertElement(t,Js.HTML),e.framesetOk=!1,e.insertionMode=ha
}(e,t):n===Zs.EMBED?rl(e,t):n===Zs.INPUT?function(e,t){
e._reconstructActiveFormattingElements(),e._appendElement(t,Js.HTML)
const n=Bs.getTokenAttr(t,ea.TYPE)
n&&n.toLowerCase()===na||(e.framesetOk=!1),t.ackSelfClosing=!0
}(e,t):n===Zs.PARAM||n===Zs.TRACK?il(e,t):n===Zs.IMAGE?function(e,t){
t.tagName=Zs.IMG,rl(e,t)
}(e,t):n!==Zs.FRAME&&n!==Zs.TBODY&&n!==Zs.TFOOT&&n!==Zs.THEAD&&ll(e,t)
break
case 6:
n===Zs.SCRIPT?Qa(e,t):n===Zs.CENTER||n===Zs.FIGURE||n===Zs.FOOTER||n===Zs.HEADER||n===Zs.HGROUP||n===Zs.DIALOG?Ja(e,t):n===Zs.BUTTON?function(e,t){
e.openElements.hasInScope(Zs.BUTTON)&&(e.openElements.generateImpliedEndTags(),
e.openElements.popUntilTagNamePopped(Zs.BUTTON)),
e._reconstructActiveFormattingElements(),
e._insertElement(t,Js.HTML),e.framesetOk=!1
}(e,t):n===Zs.STRIKE||n===Zs.STRONG?tl(e,t):n===Zs.APPLET||n===Zs.OBJECT?nl(e,t):n===Zs.KEYGEN?rl(e,t):n===Zs.SOURCE?il(e,t):n===Zs.IFRAME?function(e,t){
e.framesetOk=!1,e._switchToTextParsing(t,Bs.MODE.RAWTEXT)
}(e,t):n===Zs.SELECT?function(e,t){
e._reconstructActiveFormattingElements(),e._insertElement(t,Js.HTML),
e.framesetOk=!1,
e.insertionMode===ha||e.insertionMode===fa||e.insertionMode===da||e.insertionMode===Ta||e.insertionMode===Ea?e.insertionMode=_a:e.insertionMode=ga
}(e,t):n===Zs.OPTION?sl(e,t):ll(e,t)
break
case 7:
n===Zs.BGSOUND?Qa(e,t):n===Zs.DETAILS||n===Zs.ADDRESS||n===Zs.ARTICLE||n===Zs.SECTION||n===Zs.SUMMARY?Ja(e,t):n===Zs.LISTING?el(e,t):n===Zs.MARQUEE?nl(e,t):n===Zs.NOEMBED?ol(e,t):n!==Zs.CAPTION&&ll(e,t)
break
case 8:n===Zs.BASEFONT?Qa(e,t):n===Zs.FRAMESET?function(e,t){
const n=e.openElements.tryPeekProperlyNestedBodyElement()
e.framesetOk&&n&&(e.treeAdapter.detachNode(n),e.openElements.popAllUpToHtmlElement(),
e._insertElement(t,Js.HTML),e.insertionMode=Na)
}(e,t):n===Zs.FIELDSET?Ja(e,t):n===Zs.TEXTAREA?function(e,t){
e._insertElement(t,Js.HTML),
e.skipNextNewLine=!0,e.tokenizer.state=Bs.MODE.RCDATA,
e.originalInsertionMode=e.insertionMode,
e.framesetOk=!1,e.insertionMode=ua
}(e,t):n===Zs.TEMPLATE?Qa(e,t):n===Zs.NOSCRIPT?e.options.scriptingEnabled?ol(e,t):ll(e,t):n===Zs.OPTGROUP?sl(e,t):n!==Zs.COLGROUP&&ll(e,t)
break
case 9:n===Zs.PLAINTEXT?function(e,t){
e.openElements.hasInButtonScope(Zs.P)&&e._closePElement(),
e._insertElement(t,Js.HTML),e.tokenizer.state=Bs.MODE.PLAINTEXT
}(e,t):ll(e,t)
break
case 10:n===Zs.BLOCKQUOTE||n===Zs.FIGCAPTION?Ja(e,t):ll(e,t)
break
default:ll(e,t)}}function ul(e,t){const n=t.tagName
e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n))
}function hl(e,t){const n=t.tagName
e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n),
e.activeFormattingElements.clearToLastMarker())}function pl(e,t){
const n=t.tagName
for(let t=e.openElements.stackTop;t>0;t--){
const r=e.openElements.items[t]
if(e.treeAdapter.getTagName(r)===n){
e.openElements.generateImpliedEndTagsWithExclusion(n),
e.openElements.popUntilElementPopped(r)
break}if(e._isSpecialElement(r))break}}function fl(e,t){
const n=t.tagName
switch(n.length){case 1:
n===Zs.A||n===Zs.B||n===Zs.I||n===Zs.S||n===Zs.U?Fa(e,t):n===Zs.P?function(e){
e.openElements.hasInButtonScope(Zs.P)||e._insertFakeElement(Zs.P),
e._closePElement()}(e):pl(e,t)
break
case 2:n===Zs.DL||n===Zs.UL||n===Zs.OL?ul(e,t):n===Zs.LI?function(e){
e.openElements.hasInListItemScope(Zs.LI)&&(e.openElements.generateImpliedEndTagsWithExclusion(Zs.LI),
e.openElements.popUntilTagNamePopped(Zs.LI))
}(e):n===Zs.DD||n===Zs.DT?function(e,t){const n=t.tagName
e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTagsWithExclusion(n),
e.openElements.popUntilTagNamePopped(n))
}(e,t):n===Zs.H1||n===Zs.H2||n===Zs.H3||n===Zs.H4||n===Zs.H5||n===Zs.H6?function(e){
e.openElements.hasNumberedHeaderInScope()&&(e.openElements.generateImpliedEndTags(),
e.openElements.popUntilNumberedHeaderPopped())
}(e):n===Zs.BR?function(e){
e._reconstructActiveFormattingElements(),e._insertFakeElement(Zs.BR),
e.openElements.pop(),e.framesetOk=!1
}(e):n===Zs.EM||n===Zs.TT?Fa(e,t):pl(e,t)
break
case 3:
n===Zs.BIG?Fa(e,t):n===Zs.DIR||n===Zs.DIV||n===Zs.NAV||n===Zs.PRE?ul(e,t):pl(e,t)
break
case 4:n===Zs.BODY?function(e){
e.openElements.hasInScope(Zs.BODY)&&(e.insertionMode=Ca)
}(e):n===Zs.HTML?function(e,t){
e.openElements.hasInScope(Zs.BODY)&&(e.insertionMode=Ca,
e._processToken(t))}(e,t):n===Zs.FORM?function(e){
const t=e.openElements.tmplCount>0,n=e.formElement
t||(e.formElement=null),(n||t)&&e.openElements.hasInScope(Zs.FORM)&&(e.openElements.generateImpliedEndTags(),
t?e.openElements.popUntilTagNamePopped(Zs.FORM):e.openElements.remove(n))
}(e):n===Zs.CODE||n===Zs.FONT||n===Zs.NOBR?Fa(e,t):n===Zs.MAIN||n===Zs.MENU?ul(e,t):pl(e,t)
break
case 5:n===Zs.ASIDE?ul(e,t):n===Zs.SMALL?Fa(e,t):pl(e,t)
break
case 6:
n===Zs.CENTER||n===Zs.FIGURE||n===Zs.FOOTER||n===Zs.HEADER||n===Zs.HGROUP||n===Zs.DIALOG?ul(e,t):n===Zs.APPLET||n===Zs.OBJECT?hl(e,t):n===Zs.STRIKE||n===Zs.STRONG?Fa(e,t):pl(e,t)
break
case 7:
n===Zs.ADDRESS||n===Zs.ARTICLE||n===Zs.DETAILS||n===Zs.SECTION||n===Zs.SUMMARY||n===Zs.LISTING?ul(e,t):n===Zs.MARQUEE?hl(e,t):pl(e,t)
break
case 8:n===Zs.FIELDSET?ul(e,t):n===Zs.TEMPLATE?Wa(e,t):pl(e,t)
break
case 10:n===Zs.BLOCKQUOTE||n===Zs.FIGCAPTION?ul(e,t):pl(e,t)
break
default:pl(e,t)}}function ml(e,t){
e.tmplInsertionModeStackTop>-1?kl(e,t):e.stopped=!0}function dl(e,t){
const n=e.openElements.currentTagName
n===Zs.TABLE||n===Zs.TBODY||n===Zs.TFOOT||n===Zs.THEAD||n===Zs.TR?(e.pendingCharacterTokens=[],
e.hasNonWhitespacePendingCharacterToken=!1,
e.originalInsertionMode=e.insertionMode,
e.insertionMode=pa,e._processToken(t)):gl(e,t)}function Tl(e,t){
const n=t.tagName
switch(n.length){case 2:n===Zs.TD||n===Zs.TH||n===Zs.TR?function(e,t){
e.openElements.clearBackToTableContext(),
e._insertFakeElement(Zs.TBODY),e.insertionMode=da,e._processToken(t)
}(e,t):gl(e,t)
break
case 3:n===Zs.COL?function(e,t){
e.openElements.clearBackToTableContext(),e._insertFakeElement(Zs.COLGROUP),
e.insertionMode=ma,e._processToken(t)}(e,t):gl(e,t)
break
case 4:n===Zs.FORM?function(e,t){
e.formElement||0!==e.openElements.tmplCount||(e._insertElement(t,Js.HTML),
e.formElement=e.openElements.current,e.openElements.pop())
}(e,t):gl(e,t)
break
case 5:n===Zs.TABLE?function(e,t){
e.openElements.hasInTableScope(Zs.TABLE)&&(e.openElements.popUntilTagNamePopped(Zs.TABLE),
e._resetInsertionMode(),e._processToken(t))
}(e,t):n===Zs.STYLE?Qa(e,t):n===Zs.TBODY||n===Zs.TFOOT||n===Zs.THEAD?function(e,t){
e.openElements.clearBackToTableContext(),
e._insertElement(t,Js.HTML),e.insertionMode=da
}(e,t):n===Zs.INPUT?function(e,t){const n=Bs.getTokenAttr(t,ea.TYPE)
n&&n.toLowerCase()===na?e._appendElement(t,Js.HTML):gl(e,t),t.ackSelfClosing=!0
}(e,t):gl(e,t)
break
case 6:n===Zs.SCRIPT?Qa(e,t):gl(e,t)
break
case 7:n===Zs.CAPTION?function(e,t){
e.openElements.clearBackToTableContext(),e.activeFormattingElements.insertMarker(),
e._insertElement(t,Js.HTML),e.insertionMode=fa}(e,t):gl(e,t)
break
case 8:n===Zs.COLGROUP?function(e,t){
e.openElements.clearBackToTableContext(),e._insertElement(t,Js.HTML),
e.insertionMode=ma}(e,t):n===Zs.TEMPLATE?Qa(e,t):gl(e,t)
break
default:gl(e,t)}}function El(e,t){const n=t.tagName
n===Zs.TABLE?e.openElements.hasInTableScope(Zs.TABLE)&&(e.openElements.popUntilTagNamePopped(Zs.TABLE),
e._resetInsertionMode()):n===Zs.TEMPLATE?Wa(e,t):n!==Zs.BODY&&n!==Zs.CAPTION&&n!==Zs.COL&&n!==Zs.COLGROUP&&n!==Zs.HTML&&n!==Zs.TBODY&&n!==Zs.TD&&n!==Zs.TFOOT&&n!==Zs.TH&&n!==Zs.THEAD&&n!==Zs.TR&&gl(e,t)
}function gl(e,t){const n=e.fosterParentingEnabled
e.fosterParentingEnabled=!0,e._processTokenInBodyMode(t),e.fosterParentingEnabled=n
}function _l(e,t){let n=0
if(e.hasNonWhitespacePendingCharacterToken)for(;n<e.pendingCharacterTokens.length;n++)gl(e,e.pendingCharacterTokens[n])
else for(;n<e.pendingCharacterTokens.length;n++)e._insertCharacters(e.pendingCharacterTokens[n])
e.insertionMode=e.originalInsertionMode,e._processToken(t)}
function Al(e,t){
e.openElements.currentTagName===Zs.COLGROUP&&(e.openElements.pop(),
e.insertionMode=ha,e._processToken(t))}function Cl(e,t){
const n=t.tagName
n===Zs.HTML?cl(e,t):n===Zs.OPTION?(e.openElements.currentTagName===Zs.OPTION&&e.openElements.pop(),
e._insertElement(t,Js.HTML)):n===Zs.OPTGROUP?(e.openElements.currentTagName===Zs.OPTION&&e.openElements.pop(),
e.openElements.currentTagName===Zs.OPTGROUP&&e.openElements.pop(),
e._insertElement(t,Js.HTML)):n===Zs.INPUT||n===Zs.KEYGEN||n===Zs.TEXTAREA||n===Zs.SELECT?e.openElements.hasInSelectScope(Zs.SELECT)&&(e.openElements.popUntilTagNamePopped(Zs.SELECT),
e._resetInsertionMode(),
n!==Zs.SELECT&&e._processToken(t)):n!==Zs.SCRIPT&&n!==Zs.TEMPLATE||Qa(e,t)
}function Nl(e,t){const n=t.tagName
if(n===Zs.OPTGROUP){
const t=e.openElements.items[e.openElements.stackTop-1],n=t&&e.treeAdapter.getTagName(t)
e.openElements.currentTagName===Zs.OPTION&&n===Zs.OPTGROUP&&e.openElements.pop(),
e.openElements.currentTagName===Zs.OPTGROUP&&e.openElements.pop()
}else n===Zs.OPTION?e.openElements.currentTagName===Zs.OPTION&&e.openElements.pop():n===Zs.SELECT&&e.openElements.hasInSelectScope(Zs.SELECT)?(e.openElements.popUntilTagNamePopped(Zs.SELECT),
e._resetInsertionMode()):n===Zs.TEMPLATE&&Wa(e,t)}function kl(e,t){
e.openElements.tmplCount>0?(e.openElements.popUntilTagNamePopped(Zs.TEMPLATE),
e.activeFormattingElements.clearToLastMarker(),
e._popTmplInsertionMode(),e._resetInsertionMode(),
e._processToken(t)):e.stopped=!0}function Ol(e,t){
e.insertionMode=ca,e._processToken(t)}function Sl(e,t){
e.insertionMode=ca,e._processToken(t)}class yl{constructor(e,t,n){
this.property=e,this.normal=t,n&&(this.space=n)}}function Il(e,t){
const n={},r={}
let i=-1
for(;++i<e.length;)Object.assign(n,e[i].property),Object.assign(r,e[i].normal)
return new yl(n,r,t)}function Rl(e){return e.toLowerCase()}
yl.prototype.property={},
yl.prototype.normal={},yl.prototype.space=null
class bl{constructor(e,t){this.property=e,this.attribute=t}}
bl.prototype.space=null,
bl.prototype.boolean=!1,bl.prototype.booleanish=!1,bl.prototype.overloadedBoolean=!1,
bl.prototype.number=!1,
bl.prototype.commaSeparated=!1,bl.prototype.spaceSeparated=!1,
bl.prototype.commaOrSpaceSeparated=!1,
bl.prototype.mustUseProperty=!1,bl.prototype.defined=!1
let Ll=0
const xl=wl(),Ml=wl(),Pl=wl(),vl=wl(),Dl=wl(),Fl=wl(),Hl=wl()
function wl(){return 2**++Ll}var Bl=Object.freeze({__proto__:null,
boolean:xl,booleanish:Ml,overloadedBoolean:Pl,number:vl,
spaceSeparated:Dl,commaSeparated:Fl,commaOrSpaceSeparated:Hl})
const Ul=Object.keys(Bl)
class Gl extends bl{constructor(e,t,n,r){let i=-1
if(super(e,t),Kl(this,'space',r),'number'==typeof n)for(;++i<Ul.length;){
const e=Ul[i]
Kl(this,Ul[i],(n&Bl[e])===Bl[e])}}}function Kl(e,t,n){n&&(e[t]=n)}
Gl.prototype.defined=!0
const zl={}.hasOwnProperty
function jl(e){const t={},n={}
let r
for(r in e.properties)if(zl.call(e.properties,r)){
const i=e.properties[r],o=new Gl(r,e.transform(e.attributes||{},r),i,e.space)
e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,
n[Rl(r)]=r,n[Rl(o.attribute)]=r}return new yl(t,n,e.space)}
const Yl=jl({space:'xlink',
transform:(e,t)=>'xlink:'+t.slice(5).toLowerCase(),properties:{
xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,
xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Ql=jl({space:'xml',
transform:(e,t)=>'xml:'+t.slice(3).toLowerCase(),properties:{
xmlLang:null,xmlBase:null,xmlSpace:null}})
function Wl(e,t){return t in e?e[t]:t}function ql(e,t){
return Wl(e,t.toLowerCase())}const Vl=jl({space:'xmlns',attributes:{
xmlnsxlink:'xmlns:xlink'},transform:ql,properties:{xmlns:null,
xmlnsXLink:null}}),Xl=jl({
transform:(e,t)=>'role'===t?t:'aria-'+t.slice(4).toLowerCase(),
properties:{ariaActiveDescendant:null,ariaAtomic:Ml,
ariaAutoComplete:null,ariaBusy:Ml,ariaChecked:Ml,ariaColCount:vl,
ariaColIndex:vl,ariaColSpan:vl,ariaControls:Dl,ariaCurrent:null,
ariaDescribedBy:Dl,ariaDetails:null,ariaDisabled:Ml,ariaDropEffect:Dl,
ariaErrorMessage:null,ariaExpanded:Ml,ariaFlowTo:Dl,ariaGrabbed:Ml,
ariaHasPopup:null,ariaHidden:Ml,ariaInvalid:null,
ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Dl,ariaLevel:vl,
ariaLive:null,ariaModal:Ml,ariaMultiLine:Ml,ariaMultiSelectable:Ml,
ariaOrientation:null,ariaOwns:Dl,ariaPlaceholder:null,ariaPosInSet:vl,
ariaPressed:Ml,ariaReadOnly:Ml,ariaRelevant:null,ariaRequired:Ml,
ariaRoleDescription:Dl,ariaRowCount:vl,ariaRowIndex:vl,ariaRowSpan:vl,
ariaSelected:Ml,ariaSetSize:vl,ariaSort:null,ariaValueMax:vl,
ariaValueMin:vl,ariaValueNow:vl,ariaValueText:null,role:null}
}),$l=jl({space:'html',attributes:{acceptcharset:'accept-charset',
classname:'class',htmlfor:'for',httpequiv:'http-equiv'},transform:ql,
mustUseProperty:['checked','multiple','muted','selected'],properties:{
abbr:null,accept:Fl,acceptCharset:Dl,accessKey:Dl,action:null,
allow:null,allowFullScreen:xl,allowPaymentRequest:xl,
allowUserMedia:xl,alt:null,as:null,async:xl,autoCapitalize:null,
autoComplete:Dl,autoFocus:xl,autoPlay:xl,capture:xl,charSet:null,
checked:xl,cite:null,className:Dl,cols:vl,colSpan:null,content:null,
contentEditable:Ml,controls:xl,controlsList:Dl,coords:vl|Fl,
crossOrigin:null,data:null,dateTime:null,decoding:null,default:xl,
defer:xl,dir:null,dirName:null,disabled:xl,download:Pl,draggable:Ml,
encType:null,enterKeyHint:null,form:null,formAction:null,
formEncType:null,formMethod:null,formNoValidate:xl,formTarget:null,
headers:Dl,height:vl,hidden:xl,high:vl,href:null,hrefLang:null,
htmlFor:Dl,httpEquiv:Dl,id:null,imageSizes:null,imageSrcSet:null,
inputMode:null,integrity:null,is:null,isMap:xl,itemId:null,
itemProp:Dl,itemRef:Dl,itemScope:xl,itemType:Dl,kind:null,label:null,
lang:null,language:null,list:null,loading:null,loop:xl,low:vl,
manifest:null,max:null,maxLength:vl,media:null,method:null,min:null,
minLength:vl,multiple:xl,muted:xl,name:null,nonce:null,noModule:xl,
noValidate:xl,onAbort:null,onAfterPrint:null,onAuxClick:null,
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
onVolumeChange:null,onWaiting:null,onWheel:null,open:xl,optimum:vl,
pattern:null,ping:Dl,placeholder:null,playsInline:xl,poster:null,
preload:null,readOnly:xl,referrerPolicy:null,rel:Dl,required:xl,
reversed:xl,rows:vl,rowSpan:vl,sandbox:Dl,scope:null,scoped:xl,
seamless:xl,selected:xl,shape:null,size:vl,sizes:null,slot:null,
span:vl,spellCheck:Ml,src:null,srcDoc:null,srcLang:null,srcSet:null,
start:vl,step:null,style:null,tabIndex:vl,target:null,title:null,
translate:null,type:null,typeMustMatch:xl,useMap:null,value:Ml,
width:vl,wrap:null,align:null,aLink:null,archive:Dl,axis:null,
background:null,bgColor:null,border:vl,borderColor:null,
bottomMargin:vl,cellPadding:null,cellSpacing:null,char:null,
charOff:null,classId:null,clear:null,code:null,codeBase:null,
codeType:null,color:null,compact:xl,declare:xl,event:null,face:null,
frame:null,frameBorder:null,hSpace:vl,leftMargin:vl,link:null,
longDesc:null,lowSrc:null,marginHeight:vl,marginWidth:vl,noResize:xl,
noHref:xl,noShade:xl,noWrap:xl,object:null,profile:null,prompt:null,
rev:null,rightMargin:vl,rules:null,scheme:null,scrolling:Ml,
standby:null,summary:null,text:null,topMargin:vl,valueType:null,
version:null,vAlign:null,vLink:null,vSpace:vl,allowTransparency:null,
autoCorrect:null,autoSave:null,disablePictureInPicture:xl,
disableRemotePlayback:xl,prefix:null,property:null,results:vl,
security:null,unselectable:null}}),Zl=jl({space:'svg',attributes:{
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
timelineBegin:'timelinebegin'},transform:Wl,properties:{about:Hl,
accentHeight:vl,accumulate:null,additive:null,alignmentBaseline:null,
alphabetic:vl,amplitude:vl,arabicForm:null,ascent:vl,
attributeName:null,attributeType:null,azimuth:vl,bandwidth:null,
baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,
begin:null,bias:vl,by:null,calcMode:null,capHeight:vl,className:Dl,
clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,
colorInterpolation:null,colorInterpolationFilters:null,
colorProfile:null,colorRendering:null,content:null,
contentScriptType:null,contentStyleType:null,crossOrigin:null,
cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,
descent:vl,diffuseConstant:vl,direction:null,display:null,dur:null,
divisor:vl,dominantBaseline:null,download:xl,dx:null,dy:null,
edgeMode:null,editable:null,elevation:vl,enableBackground:null,
end:null,event:null,exponent:vl,externalResourcesRequired:null,
fill:null,fillOpacity:vl,fillRule:null,filter:null,filterRes:null,
filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,
focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,
fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,
format:null,fr:null,from:null,fx:null,fy:null,g1:Fl,g2:Fl,
glyphName:Fl,glyphOrientationHorizontal:null,
glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,
gradientUnits:null,handler:null,hanging:vl,hatchContentUnits:null,
hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:vl,
horizOriginX:vl,horizOriginY:vl,id:null,ideographic:vl,
imageRendering:null,initialVisibility:null,in:null,in2:null,
intercept:vl,k:vl,k1:vl,k2:vl,k3:vl,k4:vl,kernelMatrix:Hl,
kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,
kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,
lightingColor:null,limitingConeAngle:vl,local:null,markerEnd:null,
markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,
markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,
mathematical:null,max:null,media:null,mediaCharacterEncoding:null,
mediaContentEncodings:null,mediaSize:vl,mediaTime:null,method:null,
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
overflow:null,overlay:null,overlinePosition:vl,overlineThickness:vl,
paintOrder:null,panose1:null,path:null,pathLength:vl,
patternContentUnits:null,patternTransform:null,patternUnits:null,
phase:null,ping:Dl,pitch:null,playbackOrder:null,pointerEvents:null,
points:null,pointsAtX:vl,pointsAtY:vl,pointsAtZ:vl,preserveAlpha:null,
preserveAspectRatio:null,primitiveUnits:null,propagate:null,
property:Hl,r:null,radius:null,referrerPolicy:null,refX:null,
refY:null,rel:Hl,rev:Hl,renderingIntent:null,repeatCount:null,
repeatDur:null,requiredExtensions:Hl,requiredFeatures:Hl,
requiredFonts:Hl,requiredFormats:Hl,resource:null,restart:null,
result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,
shapeRendering:null,side:null,slope:null,snapshotTime:null,
specularConstant:vl,specularExponent:vl,spreadMethod:null,
spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,
stitchTiles:null,stopColor:null,stopOpacity:null,
strikethroughPosition:vl,strikethroughThickness:vl,string:null,
stroke:null,strokeDashArray:Hl,strokeDashOffset:null,
strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:vl,
strokeOpacity:vl,strokeWidth:null,style:null,surfaceScale:vl,
syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,
syncTolerance:null,syncToleranceDefault:null,systemLanguage:Hl,
tabIndex:vl,tableValues:null,target:null,targetX:vl,targetY:vl,
textAnchor:null,textDecoration:null,textRendering:null,
textLength:null,timelineBegin:null,title:null,transformBehavior:null,
type:null,typeOf:Hl,to:null,transform:null,u1:null,u2:null,
underlinePosition:vl,underlineThickness:vl,unicode:null,
unicodeBidi:null,unicodeRange:null,unitsPerEm:vl,values:null,
vAlphabetic:vl,vMathematical:vl,vectorEffect:null,vHanging:vl,
vIdeographic:vl,version:null,vertAdvY:vl,vertOriginX:vl,
vertOriginY:vl,viewBox:null,viewTarget:null,visibility:null,
width:null,widths:null,wordSpacing:null,writingMode:null,x:null,
x1:null,x2:null,xChannelSelector:null,xHeight:vl,y:null,y1:null,
y2:null,yChannelSelector:null,z:null,zoomAndPan:null}
}),Jl=/^data[-\w.:]+$/i,ec=/-[a-z]/g,tc=/[A-Z]/g
function nc(e,t){const n=Rl(t)
let r=t,i=bl
if(n in e.normal)return e.property[e.normal[n]]
if(n.length>4&&'data'===n.slice(0,4)&&Jl.test(t)){
if('-'===t.charAt(4)){const e=t.slice(5).replace(ec,ic)
r='data'+e.charAt(0).toUpperCase()+e.slice(1)}else{const e=t.slice(4)
if(!ec.test(e)){let n=e.replace(tc,rc)
'-'!==n.charAt(0)&&(n='-'+n),t='data'+n}}i=Gl}return new i(r,t)}
function rc(e){return'-'+e.toLowerCase()}function ic(e){
return e.charAt(1).toUpperCase()}
const oc=Il([Ql,Yl,Vl,Xl,$l],'html'),sc=Il([Ql,Yl,Vl,Xl,Zl],'svg')
var ac=/[#.]/g
function lc(e){const t=String(e||'').trim()
return t?t.split(/[ \t\n\r\f]+/g):[]}function cc(e){
return e.join(' ').trim()}function uc(e){const t=[],n=String(e||'')
let r=n.indexOf(','),i=0,o=!1
for(;!o;){-1===r&&(r=n.length,o=!0)
const e=n.slice(i,r).trim()
!e&&o||t.push(e),i=r+1,r=n.indexOf(',',i)}return t}function hc(e,t){
const n=t||{}
return(''===e[e.length-1]?[...e,'']:e).join((n.padRight?' ':'')+','+(!1===n.padLeft?'':' ')).trim()
}
const pc=new Set(['menu','submit','reset','button']),fc={}.hasOwnProperty
function mc(e,t,n){const r=n&&function(e){const t={}
let n=-1
for(;++n<e.length;)t[e[n].toLowerCase()]=e[n]
return t}(n)
return function(n,i,...o){let s,a=-1
if(null==n)s={type:'root',children:[]},o.unshift(i)
else if(s=function(e,t="div"){
for(var n,r,i,o=e||'',s={},a=0;a<o.length;)ac.lastIndex=a,
i=ac.exec(o),(n=o.slice(a,i?i.index:o.length))&&(r?'#'===r?s.id=n:Array.isArray(s.className)?s.className.push(n):s.className=[n]:t=n,
a+=n.length),i&&(r=i[0],a++)
return{type:'element',tagName:t,properties:s,children:[]}
}(n,t),s.tagName=s.tagName.toLowerCase(),
r&&fc.call(r,s.tagName)&&(s.tagName=r[s.tagName]),function(e,t){
if(null==e||'object'!=typeof e||Array.isArray(e))return!1
if('input'===t||!e.type||'string'!=typeof e.type)return!0
if('children'in e&&Array.isArray(e.children))return!1
if('button'===t)return pc.has(e.type.toLowerCase())
return!('value'in e)}(i,s.tagName)){let t
for(t in i)fc.call(i,t)&&dc(e,s.properties,t,i[t])}else o.unshift(i)
for(;++a<o.length;)Tc(s.children,o[a])
return'element'===s.type&&'template'===s.tagName&&(s.content={
type:'root',children:s.children},s.children=[]),s}}
function dc(e,t,n,r){const i=nc(e,n)
let o,s=-1
if(null!=r){if('number'==typeof r){if(Number.isNaN(r))return
o=r
}else o='boolean'==typeof r?r:'string'==typeof r?i.spaceSeparated?lc(r):i.commaSeparated?uc(r):i.commaOrSpaceSeparated?lc(uc(r).join(' ')):Ec(i,i.property,r):Array.isArray(r)?r.concat():'style'===i.property?function(e){
const t=[]
let n
for(n in e)fc.call(e,n)&&t.push([n,e[n]].join(': '))
return t.join('; ')}(r):String(r)
if(Array.isArray(o)){const e=[]
for(;++s<o.length;)e[s]=Ec(i,i.property,o[s])
o=e}
'className'===i.property&&Array.isArray(t.className)&&(o=t.className.concat(o)),
t[i.property]=o}}function Tc(e,t){let n=-1
if(null==t);else if('string'==typeof t||'number'==typeof t)e.push({
type:'text',value:String(t)})
else if(Array.isArray(t))for(;++n<t.length;)Tc(e,t[n])
else{
if('object'!=typeof t||!('type'in t))throw new Error('Expected node, nodes, or string, got `'+t+'`')
'root'===t.type?Tc(e,t.children):e.push(t)}}function Ec(e,t,n){
if('string'==typeof n){
if(e.number&&n&&!Number.isNaN(Number(n)))return Number(n)
if((e.boolean||e.overloadedBoolean)&&(''===n||Rl(n)===Rl(t)))return!0}
return n}
const gc=mc(oc,'div'),_c=mc(sc,'g',['altGlyph','altGlyphDef','altGlyphItem','animateColor','animateMotion','animateTransform','clipPath','feBlend','feColorMatrix','feComponentTransfer','feComposite','feConvolveMatrix','feDiffuseLighting','feDisplacementMap','feDistantLight','feDropShadow','feFlood','feFuncA','feFuncB','feFuncG','feFuncR','feGaussianBlur','feImage','feMerge','feMergeNode','feMorphology','feOffset','fePointLight','feSpecularLighting','feSpotLight','feTile','feTurbulence','foreignObject','glyphRef','linearGradient','radialGradient','solidColor','textArea','textPath'])
const Ac={html:'http://www.w3.org/1999/xhtml',
mathml:'http://www.w3.org/1998/Math/MathML',
svg:'http://www.w3.org/2000/svg',xlink:'http://www.w3.org/1999/xlink',
xml:'http://www.w3.org/XML/1998/namespace',
xmlns:'http://www.w3.org/2000/xmlns/'},Cc={}.hasOwnProperty,Nc={
'#document':Oc,'#document-fragment':Oc,'#text':function(e,t){return{
type:'text',value:t.value}},'#comment':function(e,t){return{
type:'comment',value:t.data}},'#documentType':function(){return{
type:'doctype'}}}
function kc(e,t){
const n=e.schema,r=Cc.call(Nc,t.nodeName)?Nc[t.nodeName]:Sc
let i
'tagName'in t&&(e.schema=t.namespaceURI===Ac.svg?sc:oc),'childNodes'in t&&(i=function(e,t){
let n=-1
const r=[]
for(;++n<t.length;)r[n]=kc(e,t[n])
return r}(e,t.childNodes))
const o=r(e,t,i)
if('sourceCodeLocation'in t&&t.sourceCodeLocation&&e.file){
const n=yc(e,o,t.sourceCodeLocation)
n&&(e.location=!0,o.position=n)}return e.schema=n,o}
function Oc(e,t,n){const r={type:'root',children:n,data:{
quirksMode:'quirks'===t.mode||'limited-quirks'===t.mode}}
if(e.file&&e.location){const t=String(e.file),n=function(e){
for(var t=String(e),n=[],r=/\r?\n|\r/g;r.test(t);)n.push(r.lastIndex)
return n.push(t.length+1),{toPoint:function(e){var t=-1
if(e>-1&&e<n[n.length-1])for(;++t<n.length;)if(n[t]>e)return{line:t+1,
column:e-(n[t-1]||0)+1,offset:e}
return{line:void 0,column:void 0,offset:void 0}},toOffset:function(e){
var t,r=e&&e.line,i=e&&e.column
return'number'!=typeof r||'number'!=typeof i||Number.isNaN(r)||Number.isNaN(i)||!(r-1 in n)||(t=(n[r-2]||0)+i-1||0),
t>-1&&t<n[n.length-1]?t:-1}}}(t)
r.position={start:n.toPoint(0),end:n.toPoint(t.length)}}return r}
function Sc(e,t,n){const r='svg'===e.schema.space?_c:gc
let i=-1
const o={}
for(;++i<t.attrs.length;){const e=t.attrs[i]
o[(e.prefix?e.prefix+':':'')+e.name]=e.value}const s=r(t.tagName,o,n)
if('template'===s.tagName&&'content'in t){
const n=t.sourceCodeLocation,r=n&&n.startTag&&Ic(n.startTag),i=n&&n.endTag&&Ic(n.endTag),o=kc(e,t.content)
r&&i&&e.file&&(o.position={start:r.end,end:i.start}),s.content=o}
return s}function yc(e,t,n){const r=Ic(n)
if('element'===t.type){const i=t.children[t.children.length-1]
if(r&&!n.endTag&&i&&i.position&&i.position.end&&(r.end=Object.assign({},i.position.end)),
e.verbose){const r={}
let i
for(i in n.attrs)Cc.call(n.attrs,i)&&(r[nc(e.schema,i).property]=Ic(n.attrs[i]))
t.data={position:{opening:Ic(n.startTag),
closing:n.endTag?Ic(n.endTag):null,properties:r}}}}return r}
function Ic(e){const t=Rc({line:e.startLine,column:e.startCol,
offset:e.startOffset}),n=Rc({line:e.endLine,column:e.endCol,
offset:e.endOffset})
return t||n?{start:t,end:n}:null}function Rc(e){
return e.line&&e.column?e:null}
var bc=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Lc=/\n/g,xc=/^\s*/,Mc=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Pc=/^:\s*/,vc=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Dc=/^[;\s]*/,Fc=/^\s+|\s+$/g,Hc='',wc=function(e,t){
if('string'!=typeof e)throw new TypeError('First argument must be a string')
if(!e)return[]
t=t||{}
var n=1,r=1
function i(e){var t=e.match(Lc)
t&&(n+=t.length)
var i=e.lastIndexOf("\n")
r=~i?e.length-i:r+e.length}function o(){var e={line:n,column:r}
return function(t){return t.position=new s(e),c(),t}}function s(e){
this.start=e,this.end={line:n,column:r},this.source=t.source}
function a(i){var o=new Error(t.source+':'+n+':'+r+': '+i)
if(o.reason=i,o.filename=t.source,o.line=n,o.column=r,o.source=e,!t.silent)throw o
}function l(t){var n=t.exec(e)
if(n){var r=n[0]
return i(r),e=e.slice(r.length),n}}function c(){l(xc)}function u(e){
var t
for(e=e||[];t=h();)!1!==t&&e.push(t)
return e}function h(){var t=o()
if("/"==e.charAt(0)&&"*"==e.charAt(1)){
for(var n=2;Hc!=e.charAt(n)&&("*"!=e.charAt(n)||"/"!=e.charAt(n+1));)++n
if(n+=2,Hc===e.charAt(n-1))return a('End of comment missing')
var s=e.slice(2,n-2)
return r+=2,i(s),e=e.slice(n),r+=2,t({type:"comment",comment:s})}}
function p(){var e=o(),t=l(Mc)
if(t){if(h(),!l(Pc))return a("property missing ':'")
var n=l(vc),r=e({type:"declaration",property:Bc(t[0].replace(bc,Hc)),
value:n?Bc(n[0].replace(bc,Hc)):Hc})
return l(Dc),r}}return s.prototype.content=e,c(),function(){var e,t=[]
for(u(t);e=p();)!1!==e&&(t.push(e),u(t))
return t}()}
function Bc(e){return e?e.replace(Fc,Hc):Hc}var Uc=wc
var Gc=function(e,t){var n,r=null
if(!e||'string'!=typeof e)return r
for(var i,o,s=Uc(e),a='function'==typeof t,l=0,c=s.length;l<c;l++)i=(n=s[l]).property,
o=n.value,a?t(i,o,n):o&&(r||(r={}),r[i]=o)
return r}
const Kc=Ac,zc={classId:'classID',dataType:'datatype',itemId:'itemID',
strokeDashArray:'strokeDasharray',strokeDashOffset:'strokeDashoffset',
strokeLineCap:'strokeLinecap',strokeLineJoin:'strokeLinejoin',
strokeMiterLimit:'strokeMiterlimit',typeOf:'typeof',
xLinkActuate:'xlinkActuate',xLinkArcRole:'xlinkArcrole',
xLinkHref:'xlinkHref',xLinkRole:'xlinkRole',xLinkShow:'xlinkShow',
xLinkTitle:'xlinkTitle',xLinkType:'xlinkType',xmlnsXLink:'xmlnsXlink'
},jc={}.hasOwnProperty,Yc=sn('root'),Qc=sn('element'),Wc=sn('text')
function qc(e,t,n){
if('function'!=typeof e)throw new TypeError('h is not a function')
const r=function(e){const t=e('div',{})
return Boolean(t&&('_owner'in t||'_store'in t)&&(void 0===t.key||null===t.key))
}(e),i=function(e){const t=e('div',{})
return Boolean(t&&t.context&&t.context._isVue)}(e),o=function(e){
const t=e('div',{})
return'VirtualNode'===t.type}(e)
let s,a
if('string'==typeof n||'boolean'==typeof n?(s=n,n={}):(n||(n={}),s=n.prefix),Yc(t))a=1===t.children.length&&Qc(t.children[0])?t.children[0]:{
type:'element',tagName:'div',properties:{},children:t.children}
else{
if(!Qc(t))throw new Error('Expected root or element, not `'+(t&&t.type||t)+'`')
a=t}return Vc(e,a,{schema:'svg'===n.space?sc:oc,
prefix:null==s?r||i||o?'h-':null:'string'==typeof s?s:s?'h-':null,
key:0,react:r,vue:i,vdom:o,hyperscript:$c(e)})}function Vc(e,t,n){
const r=n.schema
let i=r,o=t.tagName
const s={},a=[]
let l,c=-1
for(l in'html'===r.space&&'svg'===o.toLowerCase()&&(i=sc,n.schema=i),t.properties)t.properties&&jc.call(t.properties,l)&&Xc(s,l,t.properties[l],n,o)
if(n.vdom&&('html'===i.space?o=o.toUpperCase():i.space&&(s.namespace=Kc[i.space])),
n.prefix&&(n.key++,
s.key=n.prefix+n.key),t.children)for(;++c<t.children.length;){
const r=t.children[c]
Qc(r)?a.push(Vc(e,r,n)):Wc(r)&&a.push(r.value)}
return n.schema=r,a.length>0?e.call(t,o,s,a):e.call(t,o,s)}
function Xc(e,t,n,r,i){const o=nc(r.schema,t)
let s
null==n||'number'==typeof n&&Number.isNaN(n)||!1===n&&(r.vue||r.vdom||r.hyperscript)||!n&&o.boolean&&(r.vue||r.vdom||r.hyperscript)||(Array.isArray(n)&&(n=o.commaSeparated?hc(n):cc(n)),
o.boolean&&r.hyperscript&&(n=''),
'style'===o.property&&'string'==typeof n&&(r.react||r.vue||r.vdom)&&(n=function(e,t){
const n={}
try{Gc(e,((e,t)=>{
'-ms-'===e.slice(0,4)&&(e='ms-'+e.slice(4)),n[e.replace(/-([a-z])/g,((e,t)=>t.toUpperCase()))]=t
}))}catch(e){
throw e.message=t+'[style]'+e.message.slice('undefined'.length),e}
return n
}(n,i)),r.vue?'style'!==o.property&&(s='attrs'):o.mustUseProperty||(r.vdom?'style'!==o.property&&(s='attributes'):r.hyperscript&&(s='attrs')),
s?e[s]=Object.assign(e[s]||{},{[o.attribute]:n
}):o.space&&r.react?e[zc[o.property]||o.property]=n:e[o.attribute]=n)}
function $c(e){return'context'in e&&'cleanup'in e}
const Zc={}.hasOwnProperty
function Jc(e,t){const n=t||{}
function r(t,...n){let i=r.invalid
const o=r.handlers
if(t&&Zc.call(t,e)){const n=String(t[e])
i=Zc.call(o,n)?o[n]:r.unknown}if(i)return i.call(this,t,...n)}
return r.handlers=n.handlers||{},
r.invalid=n.invalid,r.unknown=n.unknown,r}
var eu={}.hasOwnProperty,tu=Jc('type',{handlers:{root:function(e,t){
var n={nodeName:'#document',
mode:(e.data||{}).quirksMode?'quirks':'no-quirks',childNodes:[]}
return n.childNodes=nu(e.children,n,t),ru(e,n)},element:function(e,t){
var n=t.space
return qc((function(n,r){var i,o,s,a,l,c=[]
for(s in r)eu.call(r,s)&&!1!==r[s]&&((i=nc(t,s)).boolean&&!r[s]||(o={
name:s,value:!0===r[s]?'':String(r[s])
},i.space&&'html'!==i.space&&'svg'!==i.space&&((a=s.indexOf(':'))<0?o.prefix='':(o.name=s.slice(a+1),
o.prefix=s.slice(0,a)),o.namespace=Ac[i.space]),c.push(o)))
'html'===t.space&&'svg'===e.tagName&&(t=sc);(l=ru(e,{nodeName:n,
tagName:n,attrs:c,namespaceURI:Ac[t.space],childNodes:[],
parentNode:void 0
})).childNodes=nu(e.children,l,t),'template'===n&&(l.content=function(e,t){
var n={nodeName:'#document-fragment',childNodes:[]}
return n.childNodes=nu(e.children,n,t),ru(e,n)}(e.content,t))
return l}),Object.assign({},e,{children:[]}),{space:n})},
text:function(e){return ru(e,{nodeName:'#text',value:e.value,
parentNode:void 0})},comment:function(e){return ru(e,{
nodeName:'#comment',data:e.value,parentNode:void 0})},
doctype:function(e){return ru(e,{nodeName:'#documentType',name:'html',
publicId:'',systemId:'',parentNode:void 0})}}})
function nu(e,t,n){var r,i=-1,o=[]
if(e)for(;++i<e.length;)(r=tu(e[i],n)).parentNode=t,o.push(r)
return o}function ru(e,t){var n=e.position
return n&&n.start&&n.end&&(t.sourceCodeLocation={
startLine:n.start.line,startCol:n.start.column,
startOffset:n.start.offset,endLine:n.end.line,endCol:n.end.column,
endOffset:n.end.offset}),t}
const iu=['area','base','basefont','bgsound','br','col','command','embed','frame','hr','image','img','input','isindex','keygen','link','menuitem','meta','nextid','param','source','track','wbr'],ou='END_TAG_TOKEN',su={
sourceCodeLocationInfo:!0,scriptingEnabled:!1},au=function(e,t,n){
let r=-1
const i=new ba(su),o=Jc('type',{handlers:{root:function(e){
f(e.children)},element:function(e){
T(),i._processInputToken(lu(e)),f(e.children),
iu.includes(e.tagName)||(T(),i._processInputToken(function(e){
const t=Object.assign(hu(e))
return t.startTag=Object.assign({},t),{type:ou,tagName:e.tagName,
attrs:[],location:t}}(e)))},text:function(e){
T(),i._processInputToken({type:"CHARACTER_TOKEN",chars:e.value,
location:hu(e)})},comment:m,doctype:function(e){
T(),i._processInputToken({type:"DOCTYPE_TOKEN",name:'html',
forceQuirks:!1,publicId:'',systemId:'',location:hu(e)})},
raw:function(e){const t=or(e),n=t.line||1,r=t.column||1,o=t.offset||0
if(!l)throw new Error('Expected `preprocessor`')
if(!a)throw new Error('Expected `tokenizer`')
if(!c)throw new Error('Expected `posTracker`')
if(!u)throw new Error('Expected `locationTracker`')
l.html=void 0,l.pos=-1,l.lastGapPos=-1,l.lastCharPos=-1,l.gapStack=[],l.skipNextNewLine=!1,
l.lastChunkWritten=!1,
l.endOfChunkHit=!1,c.isEol=!1,c.lineStartPos=1-r,c.droppedBufferSize=o,
c.offset=0,
c.col=1,c.line=n,u.currentAttrLocation=void 0,u.ctLoc=hu(e),a.write(e.value),
i._runParsingLoop(null),
('NAMED_CHARACTER_REFERENCE_STATE'===a.state||'NUMERIC_CHARACTER_REFERENCE_END_STATE'===a.state)&&(l.lastChunkWritten=!0,
a[a.state](a._consume()))}},unknown:uu})
let s,a,l,c,u
var h
if(h=t,Boolean(h&&!('message'in h&&'messages'in h))&&(n=t,t=void 0),n&&n.passThrough)for(;++r<n.passThrough.length;)o.handlers[n.passThrough[r]]=d
const p=function(e,t={}){let n,r
return'messages'in t?(r=t,n={}):(r=t.file,n=t),kc({
schema:'svg'===n.space?sc:oc,file:r,verbose:n.verbose,location:!1},e)
}(function(e){const t='root'===e.type?e.children[0]:e
return Boolean(t&&('doctype'===t.type||'element'===t.type&&'html'===t.tagName))
}(e)?function(){const t=i.treeAdapter.createDocument()
if(i._bootstrap(t,void 0),a=i.tokenizer,!a)throw new Error('Expected `tokenizer`')
return l=a.preprocessor,u=a.__mixins[0],c=u.posTracker,o(e),T(),t
}():function(){const t={nodeName:'template',tagName:'template',
attrs:[],namespaceURI:Ac.html,childNodes:[]},n={
nodeName:'documentmock',tagName:'documentmock',attrs:[],
namespaceURI:Ac.html,childNodes:[]},r={nodeName:'#document-fragment',
childNodes:[]}
if(i._bootstrap(n,t),i._pushTmplInsertionMode("IN_TEMPLATE_MODE"),i._initTokenizerForFragmentParsing(),
i._insertFakeRootElement(),
i._resetInsertionMode(),i._findFormInFragmentContext(),
a=i.tokenizer,!a)throw new Error('Expected `tokenizer`')
return l=a.preprocessor,u=a.__mixins[0],c=u.posTracker,o(e),T(),i._adoptNodes(n.childNodes[0],r),
r}(),t)
return s&&ir(p,'comment',((e,t,n)=>{const r=e
if(r.value.stitch&&null!==n&&null!==t)return n.children[t]=r.value.stitch,t
})),'root'!==e.type&&'root'===p.type&&1===p.children.length?p.children[0]:p
function f(e){let t=-1
if(e)for(;++t<e.length;)o(e[t])}function m(e){
T(),i._processInputToken({type:"COMMENT_TOKEN",data:e.value,
location:hu(e)})}function d(e){let r
s=!0,r='children'in e?{...e,children:au({type:'root',
children:e.children},t,n).children}:{...e},m({type:'comment',value:{
stitch:r}})}function T(){if(!a)throw new Error('Expected `tokenizer`')
if(!c)throw new Error('Expected `posTracker`')
const e=a.currentCharacterToken
e&&(e.location.endLine=c.line,e.location.endCol=c.col+1,e.location.endOffset=c.offset+1,
i._processInputToken(e)),
a.tokenQueue=[],a.state="DATA_STATE",a.returnState='',a.charRefCode=-1,
a.tempBuff=[],
a.lastStartTagName='',a.consumedAfterSnapshot=-1,a.active=!1,a.currentCharacterToken=void 0,
a.currentToken=void 0,a.currentAttr=void 0}}
function lu(e){const t=Object.assign(hu(e))
return t.startTag=Object.assign({},t),{type:"START_TAG_TOKEN",
tagName:e.tagName,selfClosing:!1,attrs:cu(e),location:t}}
function cu(e){return function(e,t){return tu(e,'svg'===t?sc:oc)}({
tagName:e.tagName,type:'element',properties:e.properties,children:[]
}).attrs}function uu(e){
throw new Error('Cannot compile `'+e.type+'` node')}function hu(e){
const t=or(e),n=sr(e)
return{startLine:t.line,startCol:t.column,startOffset:t.offset,
endLine:n.line,endCol:n.column,endOffset:n.offset}}function pu(e={}){
return(t,n)=>au(t,n,e)}const fu={strip:['script'],
clobberPrefix:'user-content-',clobber:['name','id'],ancestors:{
tbody:['table'],tfoot:['table'],thead:['table'],td:['table'],
th:['table'],tr:['table']},protocols:{
href:['http','https','mailto','xmpp','irc','ircs'],
cite:['http','https'],src:['http','https'],longDesc:['http','https']},
tagNames:['h1','h2','h3','h4','h5','h6','br','b','i','strong','em','a','pre','code','img','tt','div','ins','del','sup','sub','p','ol','ul','table','thead','tbody','tfoot','blockquote','dl','dt','dd','kbd','q','samp','var','hr','ruby','rt','rp','li','tr','td','th','s','strike','summary','details','caption','figure','figcaption','abbr','bdo','cite','dfn','mark','small','span','time','wbr','input'],
attributes:{a:['href'],img:['src','longDesc'],
input:[['type','checkbox'],['disabled',!0]],
li:[['className','task-list-item']],div:['itemScope','itemType'],
blockquote:['cite'],del:['cite'],ins:['cite'],q:['cite'],
'*':['abbr','accept','acceptCharset','accessKey','action','align','alt','ariaDescribedBy','ariaHidden','ariaLabel','ariaLabelledBy','axis','border','cellPadding','cellSpacing','char','charOff','charSet','checked','clear','cols','colSpan','color','compact','coords','dateTime','dir','disabled','encType','htmlFor','frame','headers','height','hrefLang','hSpace','isMap','id','label','lang','maxLength','media','method','multiple','name','noHref','noShade','noWrap','open','prompt','readOnly','rel','rev','rows','rowSpan','rules','scope','selected','shape','size','span','start','summary','tabIndex','target','title','type','useMap','vAlign','value','vSpace','width','itemProp']
},required:{input:{type:'checkbox',disabled:!0}}}
var mu={}.hasOwnProperty,du=[].push,Tu={root:{children:gu},
doctype:function(e){return e.allowDoctypes?{name:_u}:null},
comment:function(e){return e.allowComments?{value:Cu}:null},element:{
tagName:Au,properties:function(e,t,n,r){
var i,o,s,a=Au(e,n.tagName,n,r),l=e.required||{},c=t||{},u=Object.assign({},Su(e.attributes['*']),Su(a&&mu.call(e.attributes,a)?e.attributes[a]:[])),h={}
for(s in c)if(mu.call(c,s)){if(mu.call(u,s))i=u[s]
else{
if(!((p=s).length>4&&'data'===p.slice(0,4).toLowerCase()&&mu.call(u,'data*')))continue
i=u['data*']}
o=c[s],null!=(o=Array.isArray(o)?ku(e,o,s,i):Ou(e,o,s,i))&&(h[s]=o)}
var p
if(a&&mu.call(l,a))for(s in l[a])mu.call(h,s)||(h[s]=l[a][s])
return h},children:gu},text:{value:function(e,t){
return'string'==typeof t?t:''}},'*':{data:Nu,position:Nu}}
function Eu(e,t,n){var r,i,o,s,a,l=t&&t.type,c={type:t.type}
if(mu.call(Tu,l)&&('function'==typeof(i=Tu[l])&&(i=i(e,t)),i))for(a in r=!0,o=Object.assign({},i,Tu['*']))mu.call(o,a)&&(!1===(s=o[a](e,t[a],t,n))?(r=null,
c[a]=t[a]):null!=s&&(c[a]=s))
return r?c:'element'!==c.type||e.strip.includes(c.tagName)?null:c.children
}function gu(e,t,n,r){var i,o=[],s=-1
if(Array.isArray(t)){
for('element'===n.type&&r.push(n.tagName);++s<t.length;)(i=Eu(e,t[s],r))&&('length'in i?du.apply(o,i):o.push(i))
'element'===n.type&&r.pop()}return o}function _u(){return'html'}
function Au(e,t,n,r){var i='string'==typeof t?t:'',o=-1
if(!i||'*'===i||!e.tagNames.includes(i))return!1
if(mu.call(e.ancestors,i)){
for(;++o<e.ancestors[i].length;)if(r.includes(e.ancestors[i][o]))return i
return!1}return i}function Cu(e,t){
var n='string'==typeof t?t:'',r=n.indexOf('--\x3e')
return r<0?n:n.slice(0,r)}function Nu(e,t){return t}
function ku(e,t,n,r){
for(var i,o=-1,s=[];++o<t.length;)null!=(i=Ou(e,t[o],n,r))&&s.push(i)
return s}function Ou(e,t,n,r){
if(('boolean'==typeof t||'number'==typeof t||'string'==typeof t)&&function(e,t,n){
var r=String(t),i=r.indexOf(':'),o=r.indexOf('?'),s=r.indexOf('#'),a=r.indexOf('/'),l=mu.call(e.protocols,n)?e.protocols[n].concat():[],c=-1
if(0===l.length||i<0||a>-1&&i>a||o>-1&&i>o||s>-1&&i>s)return!0
for(;++c<l.length;)if(i===l[c].length&&r.slice(0,l[c].length)===l[c])return!0
return!1
}(e,t,n)&&(0===r.length||r.includes(t)))return e.clobber.includes(n)?e.clobberPrefix+t:t
}function Su(e){
for(var t,n={},r=-1;++r<e.length;)t=e[r],Array.isArray(t)?n[t[0]]=t.slice(1):n[t]=[]
return n}function yu(e=fu){return t=>function(e,t){var n,r={
type:'root',children:[]}
return e&&'object'==typeof e&&e.type&&(n=Eu(Object.assign({},fu,t||{}),e,[]))&&(Array.isArray(n)?1===n.length?r=n[0]:r.children=n:r=n),
r}(t,e)}const Iu=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,Ru=/^[a-zA-Z]:\\/
const bu=['nofollow'],Lu=['http','https']
function xu(e,t){return'function'==typeof e?e(t):e}function Mu(e={}){
return t=>{ir(t,'element',(t=>{
if('a'===t.tagName&&t.properties&&'string'==typeof t.properties.href){
const n=t.properties.href,r=n.slice(0,n.indexOf(':')),i=xu(e.target,t),o=xu(e.rel,t)||bu,s='string'==typeof o?lc(o):o,a=xu(e.protocols,t)||Lu,l=xu(e.content,t),c=l&&!Array.isArray(l)?[l]:l,h=xu(e.contentProperties,t)||{}
;(function(e){
if('string'!=typeof e)throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``)
return!Ru.test(e)&&Iu.test(e)
}(n)?a.includes(r):n.startsWith('//'))&&(i&&(t.properties.target=i),
s.length>0&&(t.properties.rel=s.concat()),c&&t.children.push({
type:'element',tagName:'span',properties:u(!0,h),children:u(!0,c)}))}
}))}}const Pu=function(e,t,n,r,i){const o=vu(t)
if(null!=n&&('number'!=typeof n||n<0||n===Number.POSITIVE_INFINITY))throw new Error('Expected positive finite index for child node')
if(!(null==r||r.type&&r.children))throw new Error('Expected parent node')
if(!e||!e.type||'string'!=typeof e.type)return!1
if(null==r!=(null==n))throw new Error('Expected both parent and index')
return o.call(i,e,n,r)},vu=function(e){if(null==e)return Fu
if('string'==typeof e)return function(e){return t
function t(t){return Fu(t)&&t.tagName===e}}(e)
if('object'==typeof e)return function(e){const t=[]
let n=-1
for(;++n<e.length;)t[n]=vu(e[n])
return Du(r)
function r(...e){let n=-1
for(;++n<t.length;)if(t[n].call(this,...e))return!0
return!1}}(e)
if('function'==typeof e)return Du(e)
throw new Error('Expected function, string, or array as test')}
function Du(e){return function(t,...n){
return Fu(t)&&Boolean(e.call(this,t,...n))}}function Fu(e){
return Boolean(e&&'object'==typeof e&&'element'===e.type&&'string'==typeof e.tagName)
}const Hu=sn('comment')
function wu(e){
var t=e&&'object'==typeof e&&'text'===e.type?e.value||'':e
return'string'==typeof t&&''===t.replace(/[ \t\n\f\r]/g,'')}
const Bu=Gu(1),Uu=Gu(-1)
function Gu(e){return function(t,n,r){const i=t&&t.children
let o=n+e,s=i&&i[o]
if(!r)for(;s&&wu(s);)o+=e,s=i[o]
return s}}const Ku=sn('text')
function zu(e){return Ku(e)&&wu(e.value.charAt(0))}
const ju={}.hasOwnProperty
function Yu(e){return function(t,n,r){
return ju.call(e,t.tagName)&&e[t.tagName](t,n,r)}}const Qu=Yu({
html:function(e,t,n){const r=Bu(n,t)
return!r||!Hu(r)},head:Wu,body:function(e,t,n){const r=Bu(n,t)
return!r||!Hu(r)},p:function(e,t,n){const r=Bu(n,t)
return r?Pu(r,['address','article','aside','blockquote','details','div','dl','fieldset','figcaption','figure','footer','form','h1','h2','h3','h4','h5','h6','header','hgroup','hr','main','menu','nav','ol','p','pre','section','table','ul']):!n||!Pu(n,['a','audio','del','ins','map','noscript','video'])
},li:function(e,t,n){const r=Bu(n,t)
return!r||Pu(r,'li')},dt:function(e,t,n){const r=Bu(n,t)
return r&&Pu(r,['dt','dd'])},dd:function(e,t,n){const r=Bu(n,t)
return!r||Pu(r,['dt','dd'])},rt:qu,rp:qu,optgroup:function(e,t,n){
const r=Bu(n,t)
return!r||Pu(r,'optgroup')},option:function(e,t,n){const r=Bu(n,t)
return!r||Pu(r,['option','optgroup'])},menuitem:function(e,t,n){
const r=Bu(n,t)
return!r||Pu(r,['menuitem','hr','menu'])},colgroup:Wu,caption:Wu,
thead:function(e,t,n){const r=Bu(n,t)
return r&&Pu(r,['tbody','tfoot'])},tbody:function(e,t,n){
const r=Bu(n,t)
return!r||Pu(r,['tbody','tfoot'])},tfoot:function(e,t,n){
return!Bu(n,t)},tr:function(e,t,n){const r=Bu(n,t)
return!r||Pu(r,'tr')},td:Vu,th:Vu})
function Wu(e,t,n){const r=Bu(n,t,!0)
return!r||!Hu(r)&&!zu(r)}function qu(e,t,n){const r=Bu(n,t)
return!r||Pu(r,['rp','rt'])}function Vu(e,t,n){const r=Bu(n,t)
return!r||Pu(r,['td','th'])}const Xu=Yu({html:function(e){
const t=Bu(e,-1)
return!t||!Hu(t)},head:function(e){const t=e.children,n=[]
let r,i=-1
for(;++i<t.length;)if(r=t[i],Pu(r,['title','base'])){
if(n.includes(r.tagName))return!1
n.push(r.tagName)}return t.length>0},body:function(e){
const t=Bu(e,-1,!0)
return!t||!Hu(t)&&!zu(t)&&!Pu(t,['meta','link','script','style','template'])
},colgroup:function(e,t,n){const r=Uu(n,t),i=Bu(e,-1,!0)
if(Pu(r,'colgroup')&&Qu(r,n.children.indexOf(r),n))return!1
return i&&Pu(i,'col')},tbody:function(e,t,n){
const r=Uu(n,t),i=Bu(e,-1)
if(Pu(r,['thead','tbody'])&&Qu(r,n.children.indexOf(r),n))return!1
return i&&Pu(i,'tr')}})
const $u={opening:Xu,closing:Qu}
function Zu(e,t){return e=e.replace(t.subset?function(e){const t=[]
let n=-1
for(;++n<e.length;)t.push(e[n].replace(/[|\\{}()[\]^$+*?.]/g,'\\$&'))
return new RegExp('(?:'+t.join('|')+')','g')
}(t.subset):/["&'<>`]/g,n),t.subset||t.escapeOnly?e:e.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,(function(e,n,r){
return t.format(1024*(e.charCodeAt(0)-55296)+e.charCodeAt(1)-56320+65536,r.charCodeAt(n+2),t)
})).replace(/[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,n)
function n(e,n,r){return t.format(e.charCodeAt(0),r.charCodeAt(n+1),t)
}}
const Ju=['AElig','AMP','Aacute','Acirc','Agrave','Aring','Atilde','Auml','COPY','Ccedil','ETH','Eacute','Ecirc','Egrave','Euml','GT','Iacute','Icirc','Igrave','Iuml','LT','Ntilde','Oacute','Ocirc','Ograve','Oslash','Otilde','Ouml','QUOT','REG','THORN','Uacute','Ucirc','Ugrave','Uuml','Yacute','aacute','acirc','acute','aelig','agrave','amp','aring','atilde','auml','brvbar','ccedil','cedil','cent','copy','curren','deg','divide','eacute','ecirc','egrave','eth','euml','frac12','frac14','frac34','gt','iacute','icirc','iexcl','igrave','iquest','iuml','laquo','lt','macr','micro','middot','nbsp','not','ntilde','oacute','ocirc','ograve','ordf','ordm','oslash','otilde','ouml','para','plusmn','pound','quot','raquo','reg','sect','shy','sup1','sup2','sup3','szlig','thorn','times','uacute','ucirc','ugrave','uml','uuml','yacute','yen','yuml'],eh={
nbsp:' ',iexcl:'¡',cent:'¢',pound:'£',curren:'¤',yen:'¥',brvbar:'¦',
sect:'§',uml:'¨',copy:'©',ordf:'ª',laquo:'«',not:'¬',shy:'­',reg:'®',
macr:'¯',deg:'°',plusmn:'±',sup2:'²',sup3:'³',acute:'´',micro:'µ',
para:'¶',middot:'·',cedil:'¸',sup1:'¹',ordm:'º',raquo:'»',frac14:'¼',
frac12:'½',frac34:'¾',iquest:'¿',Agrave:'À',Aacute:'Á',Acirc:'Â',
Atilde:'Ã',Auml:'Ä',Aring:'Å',AElig:'Æ',Ccedil:'Ç',Egrave:'È',
Eacute:'É',Ecirc:'Ê',Euml:'Ë',Igrave:'Ì',Iacute:'Í',Icirc:'Î',
Iuml:'Ï',ETH:'Ð',Ntilde:'Ñ',Ograve:'Ò',Oacute:'Ó',Ocirc:'Ô',
Otilde:'Õ',Ouml:'Ö',times:'×',Oslash:'Ø',Ugrave:'Ù',Uacute:'Ú',
Ucirc:'Û',Uuml:'Ü',Yacute:'Ý',THORN:'Þ',szlig:'ß',agrave:'à',
aacute:'á',acirc:'â',atilde:'ã',auml:'ä',aring:'å',aelig:'æ',
ccedil:'ç',egrave:'è',eacute:'é',ecirc:'ê',euml:'ë',igrave:'ì',
iacute:'í',icirc:'î',iuml:'ï',eth:'ð',ntilde:'ñ',ograve:'ò',
oacute:'ó',ocirc:'ô',otilde:'õ',ouml:'ö',divide:'÷',oslash:'ø',
ugrave:'ù',uacute:'ú',ucirc:'û',uuml:'ü',yacute:'ý',thorn:'þ',
yuml:'ÿ',fnof:'ƒ',Alpha:'Α',Beta:'Β',Gamma:'Γ',Delta:'Δ',Epsilon:'Ε',
Zeta:'Ζ',Eta:'Η',Theta:'Θ',Iota:'Ι',Kappa:'Κ',Lambda:'Λ',Mu:'Μ',
Nu:'Ν',Xi:'Ξ',Omicron:'Ο',Pi:'Π',Rho:'Ρ',Sigma:'Σ',Tau:'Τ',
Upsilon:'Υ',Phi:'Φ',Chi:'Χ',Psi:'Ψ',Omega:'Ω',alpha:'α',beta:'β',
gamma:'γ',delta:'δ',epsilon:'ε',zeta:'ζ',eta:'η',theta:'θ',iota:'ι',
kappa:'κ',lambda:'λ',mu:'μ',nu:'ν',xi:'ξ',omicron:'ο',pi:'π',rho:'ρ',
sigmaf:'ς',sigma:'σ',tau:'τ',upsilon:'υ',phi:'φ',chi:'χ',psi:'ψ',
omega:'ω',thetasym:'ϑ',upsih:'ϒ',piv:'ϖ',bull:'•',hellip:'…',
prime:'′',Prime:'″',oline:'‾',frasl:'⁄',weierp:'℘',image:'ℑ',real:'ℜ',
trade:'™',alefsym:'ℵ',larr:'←',uarr:'↑',rarr:'→',darr:'↓',harr:'↔',
crarr:'↵',lArr:'⇐',uArr:'⇑',rArr:'⇒',dArr:'⇓',hArr:'⇔',forall:'∀',
part:'∂',exist:'∃',empty:'∅',nabla:'∇',isin:'∈',notin:'∉',ni:'∋',
prod:'∏',sum:'∑',minus:'−',lowast:'∗',radic:'√',prop:'∝',infin:'∞',
ang:'∠',and:'∧',or:'∨',cap:'∩',cup:'∪',int:'∫',there4:'∴',sim:'∼',
cong:'≅',asymp:'≈',ne:'≠',equiv:'≡',le:'≤',ge:'≥',sub:'⊂',sup:'⊃',
nsub:'⊄',sube:'⊆',supe:'⊇',oplus:'⊕',otimes:'⊗',perp:'⊥',sdot:'⋅',
lceil:'⌈',rceil:'⌉',lfloor:'⌊',rfloor:'⌋',lang:'〈',rang:'〉',loz:'◊',
spades:'♠',clubs:'♣',hearts:'♥',diams:'♦',quot:'"',amp:'&',lt:'<',
gt:'>',OElig:'Œ',oelig:'œ',Scaron:'Š',scaron:'š',Yuml:'Ÿ',circ:'ˆ',
tilde:'˜',ensp:' ',emsp:' ',thinsp:' ',zwnj:'‌',zwj:'‍',lrm:'‎',
rlm:'‏',ndash:'–',mdash:'—',lsquo:'‘',rsquo:'’',sbquo:'‚',ldquo:'“',
rdquo:'”',bdquo:'„',dagger:'†',Dagger:'‡',permil:'‰',lsaquo:'‹',
rsaquo:'›',euro:'€'
},th=['cent','copy','divide','gt','lt','not','para','times'],nh={}.hasOwnProperty,rh={}
let ih
for(ih in eh)nh.call(eh,ih)&&(rh[eh[ih]]=ih)
function oh(e,t,n){let r,i=function(e,t,n){
const r='&#x'+e.toString(16).toUpperCase()
return n&&t&&!/[\dA-Fa-f]/.test(String.fromCharCode(t))?r:r+';'
}(e,t,n.omitOptionalSemicolons)
if((n.useNamedReferences||n.useShortestReferences)&&(r=function(e,t,n,r){
const i=String.fromCharCode(e)
if(nh.call(rh,i)){const e=rh[i],o='&'+e
return n&&Ju.includes(e)&&!th.includes(e)&&(!r||t&&61!==t&&/[^\da-z]/i.test(String.fromCharCode(t)))?o:o+';'
}return''
}(e,t,n.omitOptionalSemicolons,n.attribute)),(n.useShortestReferences||!r)&&n.useShortestReferences){
const r=function(e,t,n){const r='&#'+String(e)
return n&&t&&!/\d/.test(String.fromCharCode(t))?r:r+';'
}(e,t,n.omitOptionalSemicolons)
r.length<i.length&&(i=r)}
return r&&(!n.useShortestReferences||r.length<i.length)?r:i}
function sh(e,t){return Zu(e,Object.assign({format:oh},t))}const ah={
name:[['\t\n\f\r &/=>'.split(''),'\t\n\f\r "&\'/=>`'.split('')],['\0\t\n\f\r "&\'/<=>'.split(''),'\0\t\n\f\r "&\'/<=>`'.split('')]],
unquoted:[['\t\n\f\r &>'.split(''),'\0\t\n\f\r "&\'<=>`'.split('')],['\0\t\n\f\r "&\'<=>`'.split(''),'\0\t\n\f\r "&\'<=>`'.split('')]],
single:[["&'".split(''),'"&\'`'.split('')],["\0&'".split(''),'\0"&\'`'.split('')]],
double:[['"&'.split(''),'"&\'`'.split('')],['\0"&'.split(''),'\0"&\'`'.split('')]]
}
function lh(e,t,n,r){
return!r||'element'!==r.type||'script'!==r.tagName&&'style'!==r.tagName?sh(t.value,Object.assign({},e.entities,{
subset:['<','&']})):t.value}const ch={comment:function(e,t){
return e.bogusComments?'<?'+sh(t.value,Object.assign({},e.entities,{
subset:['>']
}))+'>':'\x3c!--'+t.value.replace(/^>|^->|<!--|-->|--!>|<!-$/g,(function(t){
return sh(t,Object.assign({},e.entities,{subset:['<','>']}))
}))+'--\x3e'},doctype:function(e){
return'<!'+(e.upperDoctype?'DOCTYPE':'doctype')+(e.tightDoctype?'':' ')+'html>'
},element:function(e,t,n,r){
const i=e.schema,o='svg'===i.space?void 0:e.omit
let s='svg'===i.space?e.closeEmpty:e.voids.includes(t.tagName.toLowerCase())
const a=[]
let l
'html'===i.space&&'svg'===t.tagName&&(e.schema=sc)
const c=function(e,t){const n=[]
let r,i,o,s=-1
for(r in t)void 0!==t[r]&&null!==t[r]&&(i=fh(e,r,t[r]),i&&n.push(i))
for(;++s<n.length;)o=e.tight?n[s].charAt(n[s].length-1):null,s!==n.length-1&&'"'!==o&&"'"!==o&&(n[s]+=' ')
return n.join('')
}(e,t.properties),u=ph(e,'html'===i.space&&'template'===t.tagName?t.content:t)
e.schema=i,u&&(s=!1)
!c&&o&&o.opening(t,n,r)||(a.push('<',t.tagName,c?' '+c:''),s&&('svg'===i.space||e.close)&&(l=c.charAt(c.length-1),
(!e.tightClose||'/'===l||l&&'"'!==l&&"'"!==l)&&a.push(' '),
a.push('/')),a.push('>'))
a.push(u),s||o&&o.closing(t,n,r)||a.push('</'+t.tagName+'>')
return a.join('')},raw:function(e,t,n,r){
return e.dangerous?t.value:lh(e,t,0,r)},root:ph,text:lh
},uh={}.hasOwnProperty
function hh(e,t,n,r){
if(!t||!t.type)throw new Error('Expected node, not `'+t+'`')
if(!uh.call(ch,t.type))throw new Error('Cannot compile unknown node `'+t.type+'`')
return ch[t.type](e,t,n,r)}function ph(e,t){
const n=[],r=t&&t.children||[]
let i=-1
for(;++i<r.length;)n[i]=hh(e,r[i],i,t)
return n.join('')}function fh(e,t,n){const r=nc(e.schema,t)
let i,o=e.quote
if(!r.overloadedBoolean||n!==r.attribute&&''!==n?(r.boolean||r.overloadedBoolean&&'string'!=typeof n)&&(n=Boolean(n)):n=!0,
null==n||!1===n||'number'==typeof n&&Number.isNaN(n))return''
const s=sh(r.attribute,Object.assign({},e.entities,{
subset:ah.name['html'===e.schema.space?e.valid:1][e.safe]}))
return!0===n?s:(n='object'==typeof n&&'length'in n?(r.commaSeparated?hc:cc)(n,{
padLeft:!e.tightLists
}):String(n),e.collapseEmpty&&!n?s:(e.unquoted&&(i=sh(n,Object.assign({},e.entities,{
subset:ah.unquoted[e.valid][e.safe],attribute:!0
}))),i!==n&&(e.smart&&on(n,o)>on(n,e.alternative)&&(o=e.alternative),
i=o+sh(n,Object.assign({},e.entities,{
subset:("'"===o?ah.single:ah.double)['html'===e.schema.space?e.valid:1][e.safe],
attribute:!0}))+o),s+(i?'='+i:i)))}function mh(e){
const t=this.data('settings'),n=Object.assign({},t,e)
Object.assign(this,{Compiler:function(e){return function(e,t={}){
const n=t.quote||'"',r='"'===n?"'":'"'
if('"'!==n&&"'"!==n)throw new Error('Invalid quote `'+n+'`, expected `\'` or `"`')
return hh({valid:t.allowParseErrors?0:1,
safe:t.allowDangerousCharacters?0:1,schema:'svg'===t.space?sc:oc,
omit:t.omitOptionalTags?$u:void 0,quote:n,alternative:r,
smart:t.quoteSmart,unquoted:t.preferUnquoted,tight:t.tightAttributes,
upperDoctype:t.upperDoctype,tightDoctype:t.tightDoctype,
bogusComments:t.bogusComments,tightLists:t.tightCommaSeparatedLists,
tightClose:t.tightSelfClosing,collapseEmpty:t.collapseEmptyAttributes,
dangerous:t.allowDangerousHtml,voids:t.voids||iu.concat(),
entities:t.entities||{},close:t.closeSelfClosing,
closeEmpty:t.closeEmptyElements},Array.isArray(e)?{type:'root',
children:e}:e,null,null)}(e,n)}})}function dh(){return e=>{ir(e,{
type:'element',tagName:'img'},(e=>{
e.properties?.alt&&(e.properties.title=e.properties.alt)}))}}
function Th(){return e=>{ir(e,'element',((e,t,n)=>{
if('a'==e.tagName&&e.properties?.id?.includes('fnref'))return n.children.splice(t,1,...e.children),
[cn,t]
if('a'==e.tagName&&e.properties?.href?.includes('fnref'))return n.children.splice(t,1),
[cn,t]
if('h2'==e.tagName&&e.properties?.id?.includes('footnote-label')){
const e={type:'element',tagName:'hr',properties:{
'aria-label':'Footnotes',style:"margin-bottom: -0.5rem;"},children:[]}
n.children.splice(t,1,e)}}))}}var Eh={exports:{}},gh=wc
function _h(e,t){var n,r=null
if(!e||'string'!=typeof e)return r
for(var i,o,s=gh(e),a='function'==typeof t,l=0,c=s.length;l<c;l++)i=(n=s[l]).property,
o=n.value,a?t(i,o,n):o&&(r||(r={}),r[i]=o)
return r}Eh.exports=_h,Eh.exports.default=_h
var Ah=Eh.exports
const Ch=+new Date("2022-06-29T18:00Z"),Nh=+new Date("2022-11-14T06:00Z")
function kh({date:e}){return e=+e,t=>{ir(t,"element",((t,n,r)=>{
if('string'==typeof t.properties?.style)try{let n=!1
const r=Ah(t.properties.style)
if(!r)return
for(const t in r)e>=Nh&&t.startsWith("--")&&(delete r[t],n=!0)
if(e>=Ch&&/fixed/i.test(r.position)&&(r.position='static',n=!0),!n)return
t.properties.style=Object.entries(r).map((e=>e.join(':'))).join(";")
}catch(e){console.warn('error while filtering styles',e)}}))}}
const Oh=/(^|[^\w@\\/])([@＠])([a-zA-Z0-9-]{3,})(?![@＠]|[\xC0-\xD6\xD8-\xF6\xF8-\xFF\u0100-\u024F\u0253\u0254\u0256\u0257\u0259\u025B\u0263\u0268\u026F\u0272\u0289\u028B\u02BB\u0300-\u036F\u1E00-\u1EFF]|:[/][/])/g
function Sh(){return e=>{ir(e,'text',((e,t,n)=>{const r=e.value,i=[]
if(r.replace(Oh,((e,t,n,r,o)=>{const s=o+t.length,a=s+r.length+1
return i.push({handle:r,indices:[s,a]}),e})),i.length){const e=[]
let o=0
return i.forEach((({indices:[t,n],handle:i},s,a)=>{e.push({
type:'text',value:r.slice(o,t)}),e.push({type:'element',
tagName:'Mention',properties:{handle:i},children:[{type:'text',
value:`@${i}`}]}),o=n,s==a.length-1&&e.push({type:'text',
value:r.slice(o)})})),n.children.splice(t,1,...e),[cn,t+e.length]}}))}
}function yh(){return e=>{ir(e,{type:'element',tagName:'a'
},((e,t,n)=>{const r=e.children
if(1==n.children.length&&1==r.length&&'text'==r[0].type&&e.position&&r[0].position&&r[0].position.start.offset==e.position.start.offset)return'element'==n.type&&(n.tagName='div'),
n.children.splice(t,1,{type:'element',tagName:'IframelyEmbed',
properties:{url:e.properties?.href},children:[]}),!0}))}}const Ih={
chunks:{url:'f59b84127fa7b6c48b6c.png',cohost_plus:!1},eggbug:{
url:'41454e429d62b5cb7963.png',cohost_plus:!1},sixty:{
url:'9a6014af31fb1ca65a1f.png',cohost_plus:!1},unyeah:{
url:'5cf84d596a2c422967de.png',cohost_plus:!1},yeah:{
url:'014b0a8cc35206ef151d.png',cohost_plus:!1},'host-aww':{
url:'9bb403f3822c6457baf6.png',cohost_plus:!0},'host-cry':{
url:'530f8cf75eac87716702.png',cohost_plus:!0},'host-evil':{
url:'cb9a5640d7ef7b361a1a.png',cohost_plus:!0},'host-frown':{
url:'99c7fbf98de865cc9726.png',cohost_plus:!0},'host-joy':{
url:'53635f5fe850274b1a7d.png',cohost_plus:!0},'host-love':{
url:'c45b6d8f9de20f725b98.png',cohost_plus:!0},'host-nervous':{
url:'e5d55348f39c65a20148.png',cohost_plus:!0},'host-plead':{
url:'fa883e2377fea8945237.png',cohost_plus:!0},'host-shock':{
url:'bfa6d6316fd95ae76803.png',cohost_plus:!0},'host-stare':{
url:'a09d966cd188c9ebaa4c.png',cohost_plus:!0}},Rh=/:[\w-]+:/g
function bh({hasCohostPlus:e}){return t=Rh,n=(t,n,r,i,o)=>{const s=[]
return n.forEach(((n,r)=>{if(s.push({type:'text',value:n
}),r>=t.length)return
const i=t[r].slice(1,-1)
let o=Ih[i]
!o||o.cohost_plus&&!e?s.push({type:'text',value:t[r]}):s.push({
type:'element',tagName:'CustomEmoji',properties:{name:i,
url:`https://cohost.org/static/${o.url}`}})
})),o.children.splice(i,1,...s),[cn,i+s.length]},e=>{
ir(e,'text',((e,r,i)=>{const o=e.value.match(t)
if(o){const s=e.value.split(t)
if(s.length!=o.length+1)return
return n(o,s,e,r,i)}}))}
var t,n}var Lh=function(e){return function(e){
return!!e&&'object'==typeof e}(e)&&!function(e){
var t=Object.prototype.toString.call(e)
return'[object RegExp]'===t||'[object Date]'===t||function(e){
return e.$$typeof===xh}(e)}(e)}
var xh='function'==typeof Symbol&&Symbol.for?Symbol.for('react.element'):60103
function Mh(e,t){
return!1!==t.clone&&t.isMergeableObject(e)?Hh((n=e,Array.isArray(n)?[]:{}),e,t):e
var n}function Ph(e,t,n){return e.concat(t).map((function(e){
return Mh(e,n)}))}function vh(e){
return Object.keys(e).concat(function(e){
return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){
return e.propertyIsEnumerable(t)})):[]}(e))}function Dh(e,t){try{
return t in e}catch(e){return!1}}function Fh(e,t,n){var r={}
return n.isMergeableObject(e)&&vh(e).forEach((function(t){
r[t]=Mh(e[t],n)})),vh(t).forEach((function(i){(function(e,t){
return Dh(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))
})(e,i)||(Dh(e,i)&&n.isMergeableObject(t[i])?r[i]=function(e,t){
if(!t.customMerge)return Hh
var n=t.customMerge(e)
return'function'==typeof n?n:Hh}(i,n)(e[i],t[i],n):r[i]=Mh(t[i],n))
})),r}function Hh(e,t,n){
(n=n||{}).arrayMerge=n.arrayMerge||Ph,n.isMergeableObject=n.isMergeableObject||Lh,
n.cloneUnlessOtherwiseSpecified=Mh
var r=Array.isArray(t)
return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):Fh(e,t,n):Mh(t,n)}
Hh.all=function(e,t){
if(!Array.isArray(e))throw new Error('first argument should be an array')
return e.reduce((function(e,n){return Hh(e,n,t)}),{})}
const wh=Hh(fu,{tagNames:['video','audio','aside'],attributes:{
'*':['style']}})
const Bh=function(e){return e.match(/$/gm).length}
function Uh(e,t){const{text:n,disableGfm:r}=function(e){let t,n
return Array.isArray(e)?(t=e.some((e=>Bh(e)>=256)),n=e.join("\n\n")):(n=String(e),
t=Bh(n)>=256),{text:n,disableGfm:t}}(e)
let i=function({date:e=1/0,hasCohostPlus:t=!1,externalLinksInNewTab:n=!0,disableHtml:r=!1,disableEmbeds:i=!1,disableGfm:o=!1}){
const s=n?{target:'_blank',rel:['nofollow','noopener','noreferrer']}:{
target:'_self',rel:['nofollow']}
return R().use(St).use(o?null:$n,{singleTilde:!1}).use(Ar,{
allowDangerousHtml:!r
}).use(dh).use(Th).use(r?null:pu).use(yu,wh).use(kh,{date:e
}).use(Mu,s).use(Sh).use(i?null:yh).use(bh,{hasCohostPlus:t})}(t={
__proto__:t,disableGfm:r}).use(mh)
return i.processSync(n).value}export{Uh as default}
