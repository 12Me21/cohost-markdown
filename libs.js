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
var t,n,r,i,o,u,h=arguments[0],f=1,p=arguments.length,m=!1
for('boolean'==typeof h&&(m=h,h=arguments[1]||{},f=2),(null==h||'object'!=typeof h&&'function'!=typeof h)&&(h={});f<p;++f)if(null!=(t=arguments[f]))for(n in t)r=c(h,n),
h!==(i=c(t,n))&&(m&&i&&(a(i)||(o=s(i)))?(o?(o=!1,
u=r&&s(r)?r:[]):u=r&&a(r)?r:{},l(h,{name:n,newValue:e(m,u,i)
})):void 0!==i&&l(h,{name:n,newValue:i}))
return h}
function h(e){if('object'!=typeof e||null===e)return!1
const t=Object.getPrototypeOf(e)
return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)
}function f(){const e=[],t={run:function(...t){let n=-1
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
return t}function p(e){
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
this.name=p(t)||'1:1',
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
class S{constructor(e){let n
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
y(e,'basename'),O(e,'basename'),this.path=g.join(this.dirname||'',e)}
get extname(){
return'string'==typeof this.path?g.extname(this.path):void 0}
set extname(e){if(O(e,'extname'),I(this.dirname,'extname'),e){
if(46!==e.charCodeAt(0))throw new Error('`extname` must start with `.`')
if(e.includes('.',1))throw new Error('`extname` cannot contain multiple dots')
}this.path=g.join(this.dirname,this.stem+(e||''))}get stem(){
return'string'==typeof this.path?g.basename(this.path,this.extname):void 0
}set stem(e){
y(e,'stem'),O(e,'stem'),this.path=g.join(this.dirname||'',e+(this.extname||''))
}toString(e){return(this.value||'').toString(e)}message(e,t,n){
const r=new E(e,t,n)
return this.path&&(r.name=this.path+':'+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),
r}info(e,t,n){const r=this.message(e,t,n)
return r.fatal=null,r}fail(e,t,n){const r=this.message(e,t,n)
throw r.fatal=!0,r}}function O(e,t){
if(e&&e.includes(g.sep))throw new Error('`'+t+'` cannot be a path: did not expect `'+g.sep+'`')
}function y(e,t){if(!e)throw new Error('`'+t+'` cannot be empty')}
function I(e,t){
if(!e)throw new Error('Setting `'+t+'` requires `path` to be set too')
}const R=function n(){const r=f(),i=[]
let o,s={},a=-1
return l.data=function(e,t){
if('string'==typeof e)return 2===arguments.length?(P('data',o),
s[e]=t,l):L.call(s,e)&&s[e]||null
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
if(P('use',o),null==e);else if('function'==typeof e)f(e,...t)
else{
if('object'!=typeof e)throw new TypeError('Expected usable value, not `'+e+'`')
Array.isArray(e)?c(e):a(e)}
n&&(s.settings=Object.assign(s.settings||{},n))
return l
function r(e){if('function'==typeof e)f(e)
else{
if('object'!=typeof e)throw new TypeError('Expected usable value, not `'+e+'`')
if(Array.isArray(e)){const[t,...n]=e
f(t,...n)}else a(e)}}function a(e){
c(e.plugins),e.settings&&(n=Object.assign(n||{},e.settings))}
function c(e){let t=-1
if(null==e);else{
if(!Array.isArray(e))throw new TypeError('Expected a list of plugins, not `'+e+'`')
for(;++t<e.length;){r(e[t])}}}function f(e,t){let n,r=-1
for(;++r<i.length;)if(i[r][0]===e){n=i[r]
break}
n?(h(n[1])&&h(t)&&(t=u(!0,n[1],t)),n[1]=t):i.push([...arguments])}
},l.parse=function(e){l.freeze()
const t=H(e),n=l.Parser
if(x('parse',n),b(n,'parse'))return new n(String(t),t).parse()
return n(String(t),t)},l.stringify=function(e,t){l.freeze()
const n=H(t),r=l.Compiler
if(M('stringify',r),D(e),b(r,'compile'))return new r(e,n).compile()
return r(e,n)},l.run=function(e,t,n){
D(e),l.freeze(),n||'function'!=typeof t||(n=t,t=void 0)
if(!n)return new Promise(i)
function i(i,o){function s(t,r,s){r=r||e,t?o(t):i?i(r):n(null,r,s)}
r.run(e,H(t),s)}i(null,n)},l.runSync=function(t,n){let r,i
return l.run(t,n,o),v('runSync','run',i),r
function o(t,n){e(t),r=n,i=!0}},l.process=function(e,n){
if(l.freeze(),x('process',l.Parser),
M('process',l.Compiler),!n)return new Promise(r)
function r(r,i){const o=H(e)
function s(e,t){e||!t?i(e):r?r(t):n(null,t)}
l.run(l.parse(o),o,((e,n,r)=>{if(!e&&n&&r){const o=l.stringify(n,r)
null==o||('string'==typeof(i=o)||t(i)?r.value=o:r.result=o),s(e,r)
}else s(e)
var i}))}r(null,n)},l.processSync=function(t){let n
l.freeze(),x('processSync',l.Parser),M('processSync',l.Compiler)
const r=H(t)
return l.process(r,i),v('processSync','process',n),r
function i(t){n=!0,e(t)}},l
function l(){const e=n()
let t=-1
for(;++t<i.length;)e.use(...i[t])
return e.data(u(!0,{},s)),e}}().freeze(),L={}.hasOwnProperty
function b(e,t){return'function'==typeof e&&e.prototype&&(function(e){
let t
for(t in e)if(L.call(e,t))return!0
return!1}(e.prototype)||t in e.prototype)}function x(e,t){
if('function'!=typeof t)throw new TypeError('Cannot `'+e+'` without `Parser`')
}function M(e,t){
if('function'!=typeof t)throw new TypeError('Cannot `'+e+'` without `Compiler`')
}function P(e,t){
if(t)throw new Error('Cannot call `'+e+'` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.')
}function D(e){
if(!h(e)||'string'!=typeof e.type)throw new TypeError('Expected node, got `'+e+'`')
}function v(e,t,n){
if(!n)throw new Error('`'+e+'` finished async. Use `'+t+'` instead')}
function H(e){return function(e){
return Boolean(e&&'object'==typeof e&&'message'in e&&'messages'in e)
}(e)?e:new S(e)}function F(e,t){
return e&&'object'==typeof e&&(e.value||(t?e.alt:'')||'children'in e&&w(e.children,t)||Array.isArray(e)&&w(e,t))||''
}function w(e,t){for(var n=[],r=-1;++r<e.length;)n[r]=F(e[r],t)
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
const Y=re(/[A-Za-z]/),Q=re(/\d/),W=re(/[\dA-Fa-f]/),V=re(/[\dA-Za-z]/),q=re(/[!-/:-@[-`{-~]/),X=re(/[#-'*+\--9=?A-Z^-~]/)
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
return a(e)}function c(i){if(s===n.length){if(!r)return f(i)
if(r.currentConstruct&&r.currentConstruct.concrete)return m(i)
t.interrupt=Boolean(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)
}return t.containerState={},e.check(ae,u,h)(i)}function u(e){
return r&&g(),E(s),f(e)}function h(e){
return t.parser.lazy[t.now().line]=s!==n.length,o=t.now().offset,m(e)}
function f(n){return t.containerState={},e.attempt(ae,p,m)(n)}
function p(e){
return s++,n.push([t.currentConstruct,t.containerState]),f(e)}
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
const h=Object.assign({},e[n][1].end),f=Object.assign({},e[u][1].start)
he(h,-a),he(f,a),o={type:a>1?'strongSequence':'emphasisSequence',
start:h,end:Object.assign({},e[n][1].end)},s={
type:a>1?'strongSequence':'emphasisSequence',
start:Object.assign({},e[u][1].start),end:f},i={
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
function he(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const fe={
name:'autolink',tokenize:function(e,t,n){let r=1
return function(t){
return e.enter('autolink'),e.enter('autolinkMarker'),e.consume(t),
e.exit('autolinkMarker'),e.enter('autolinkProtocol'),i}
function i(t){return Y(t)?(e.consume(t),o):X(t)?l(t):n(t)}
function o(e){return 43===e||45===e||46===e||V(e)?s(e):l(e)}
function s(t){
return 58===t?(e.consume(t),a):(43===t||45===t||46===t||V(t))&&r++<32?(e.consume(t),
s):l(t)}function a(t){
return 62===t?(e.exit('autolinkProtocol'),f(t)):null===t||32===t||60===t||$(t)?n(t):(e.consume(t),
a)}function l(t){
return 64===t?(e.consume(t),r=0,c):X(t)?(e.consume(t),l):n(t)}
function c(e){return V(e)?u(e):n(e)}function u(t){
return 46===t?(e.consume(t),r=0,
c):62===t?(e.exit('autolinkProtocol').type='autolinkEmail',f(t)):h(t)}
function h(t){
return(45===t||V(t))&&r++<63?(e.consume(t),45===t?h:u):n(t)}
function f(n){
return e.enter('autolinkMarker'),e.consume(n),e.exit('autolinkMarker'),
e.exit('autolink'),t}}}
const pe={tokenize:function(e,t,n){return ie(e,(function(e){
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
return q(r)?(e.enter('characterEscapeValue'),e.consume(r),e.exit('characterEscapeValue'),
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
l):(e.enter('characterReferenceValue'),i=31,o=V,c(t))}function l(t){
return 88===t||120===t?(e.enter('characterReferenceMarkerHexadecimal'),
e.consume(t),
e.exit('characterReferenceMarkerHexadecimal'),e.enter('characterReferenceValue'),
i=6,o=W,c):(e.enter('characterReferenceValue'),i=7,o=Q,c(t))}
function c(a){let l
return 59===a&&s?(l=e.exit('characterReferenceValue'),o!==V||Ee(r.sliceSerialize(l))?(e.enter('characterReferenceMarker'),
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
e.enter('chunkString',{contentType:'string'}),f(t))}function f(t){
return null===t||Z(t)?(e.exit('chunkString'),
e.exit('codeFencedFenceInfo'),ie(e,p,'whitespace')(t)):96===t&&t===l?n(t):(e.consume(t),
f)}function p(t){
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
if('enter'===n[0])n[1].contentType&&(Object.assign(t,Se(e,c)),c=t[c],l=!0)
else if(n[1]._container){
for(i=c,r=void 0;i--&&(o=e[i],'lineEnding'===o[1].type||'lineEndingBlank'===o[1].type);)'enter'===o[0]&&(r&&(e[r][1].type='lineEndingBlank'),
o[1].type='lineEnding',r=i)
r&&(n[1].end=Object.assign({},e[r][1].start),s=e.slice(r,c),s.unshift(n),B(e,r,c-r+1,s))
}}return!l}function Se(e,t){const n=e[t][1],r=e[t][2]
let i=t-1
const o=[],s=n._tokenizer||r.parser[n.contentType](n.start),a=s.events,l=[],c={}
let u,h,f=-1,p=n,m=0,d=0
const T=[d]
for(;p;){for(;e[++i][1]!==p;);
o.push(i),p._tokenizer||(u=r.sliceStream(p),p.next||u.push(null),
h&&s.defineSkip(p.start),
p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),
s.write(u),
p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),
h=p,p=p.next}
for(p=n;++f<a.length;)'exit'===a[f][0]&&'enter'===a[f-1][0]&&a[f][1].type===a[f-1][1].type&&a[f][1].start.line!==a[f][1].end.line&&(d=f+1,
T.push(d),p._tokenizer=void 0,p.previous=void 0,p=p.next)
for(s.events=[],p?(p._tokenizer=void 0,p.previous=void 0):T.pop(),f=T.length;f--;){
const t=a.slice(T[f],T[f+1]),n=o.pop()
l.unshift([n,n+t.length-1]),B(e,n,2,t)}
for(f=-1;++f<l.length;)c[m+l[f][0]]=m+l[f][1],m+=l[f][1]-l[f][0]-1
return c}const Oe={tokenize:function(e,t){let n
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
t):(e.enter(a),e.enter('chunkString',{contentType:'string'}),f(n))}
function f(t){
return 62===t?(e.exit('chunkString'),e.exit(a),h(t)):null===t||60===t||J(t)?n(t):(e.consume(t),
92===t?p:f)}function p(t){
return 60===t||62===t||92===t?(e.consume(t),f):f(t)}function m(i){
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
function Le(e,t,n,r,i,o){let s
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
return t===s||92===t?(e.consume(t),c):c(t)}}function be(e,t){let n
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
e.consume(t),e.exit('definitionMarker'),be(e,Ie(e,e.attempt(Pe,ie(e,s,'whitespace'),ie(e,s,'whitespace')),n,'definitionDestination','definitionDestinationLiteral','definitionDestinationLiteralMarker','definitionDestinationRaw','definitionDestinationString'))):n(t)
}function s(o){
return null===o||J(o)?(e.exit('definition'),r.parser.defined.includes(i)||r.parser.defined.push(i),
t(o)):n(o)}}},Pe={tokenize:function(e,t,n){return function(t){
return Z(t)?be(e,r)(t):n(t)}
function r(t){
return 34===t||39===t||40===t?Le(e,ie(e,i,'whitespace'),n,'definitionTitle','definitionTitleMarker','definitionTitleString')(t):n(t)
}function i(e){return null===e||J(e)?t(e):n(e)}},partial:!0}
const De={name:'hardBreakEscape',tokenize:function(e,t,n){
return function(t){
return e.enter('hardBreakEscape'),e.enter('escapeMarker'),e.consume(t),
r}
function r(r){
return J(r)?(e.exit('escapeMarker'),e.exit('hardBreakEscape'),t(r)):n(r)
}}}
const ve={name:'headingAtx',tokenize:function(e,t,n){const r=this
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
const He=['address','article','aside','base','basefont','blockquote','body','caption','center','col','colgroup','dd','details','dialog','dir','div','dl','dt','fieldset','figcaption','figure','footer','form','frame','frameset','h1','h2','h3','h4','h5','h6','head','header','hr','html','iframe','legend','li','link','main','menu','menuitem','nav','noframes','ol','optgroup','option','p','param','section','summary','table','tbody','td','tfoot','th','thead','title','tr','track','ul'],Fe=['pre','script','style','textarea'],we={
name:'htmlFlow',tokenize:function(e,t,n){const r=this
let i,o,s,a,l
return function(t){
return e.enter('htmlFlow'),e.enter('htmlFlowData'),e.consume(t),c}
function c(a){
return 33===a?(e.consume(a),u):47===a?(e.consume(a),p):63===a?(e.consume(a),
i=3,
r.interrupt?t:D):Y(a)?(e.consume(a),s=String.fromCharCode(a),o=!0,m):n(a)
}function u(o){
return 45===o?(e.consume(o),i=2,h):91===o?(e.consume(o),i=5,s='CDATA[',
a=0,f):Y(o)?(e.consume(o),i=4,r.interrupt?t:D):n(o)}function h(i){
return 45===i?(e.consume(i),r.interrupt?t:D):n(i)}function f(i){
return i===s.charCodeAt(a++)?(e.consume(i),
a===s.length?r.interrupt?t:y:f):n(i)}function p(t){
return Y(t)?(e.consume(t),s=String.fromCharCode(t),m):n(t)}
function m(a){
return null===a||47===a||62===a||Z(a)?47!==a&&o&&Fe.includes(s.toLowerCase())?(i=1,
r.interrupt?t(a):y(a)):He.includes(s.toLowerCase())?(i=6,
47===a?(e.consume(a),d):r.interrupt?t(a):y(a)):(i=7,
r.interrupt&&!r.parser.lazy[r.now().line]?n(a):o?E(a):T(a)):45===a||V(a)?(e.consume(a),
s+=String.fromCharCode(a),m):n(a)}function d(i){
return 62===i?(e.consume(i),r.interrupt?t:y):n(i)}function T(t){
return ee(t)?(e.consume(t),T):S(t)}function E(t){
return 47===t?(e.consume(t),S):58===t||95===t||Y(t)?(e.consume(t),
g):ee(t)?(e.consume(t),E):S(t)}function g(t){
return 45===t||46===t||58===t||95===t||V(t)?(e.consume(t),g):_(t)}
function _(t){
return 61===t?(e.consume(t),A):ee(t)?(e.consume(t),_):E(t)}
function A(t){
return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),
l=t,C):ee(t)?(e.consume(t),A):(l=null,N(t))}function C(t){
return null===t||J(t)?n(t):t===l?(e.consume(t),k):(e.consume(t),C)}
function N(t){
return null===t||34===t||39===t||60===t||61===t||62===t||96===t||Z(t)?_(t):(e.consume(t),
N)}function k(e){return 47===e||62===e||ee(e)?E(e):n(e)}function S(t){
return 62===t?(e.consume(t),O):n(t)}function O(t){
return ee(t)?(e.consume(t),O):null===t||J(t)?y(t):n(t)}function y(t){
return 45===t&&2===i?(e.consume(t),
b):60===t&&1===i?(e.consume(t),x):62===t&&4===i?(e.consume(t),
v):63===t&&3===i?(e.consume(t),
D):93===t&&5===i?(e.consume(t),P):!J(t)||6!==i&&7!==i?null===t||J(t)?I(t):(e.consume(t),
y):e.check(Be,v,I)(t)}function I(t){return e.exit('htmlFlowData'),R(t)
}function R(t){return null===t?H(t):J(t)?e.attempt({tokenize:L,
partial:!0},R,H)(t):(e.enter('htmlFlowData'),y(t))}function L(e,t,n){
return function(t){
return e.enter('lineEnding'),e.consume(t),e.exit('lineEnding'),i}
function i(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}
function b(t){return 45===t?(e.consume(t),D):y(t)}function x(t){
return 47===t?(e.consume(t),s='',M):y(t)}function M(t){
return 62===t&&Fe.includes(s.toLowerCase())?(e.consume(t),
v):Y(t)&&s.length<8?(e.consume(t),s+=String.fromCharCode(t),M):y(t)}
function P(t){return 93===t?(e.consume(t),D):y(t)}function D(t){
return 62===t?(e.consume(t),v):45===t&&2===i?(e.consume(t),D):y(t)}
function v(t){
return null===t||J(t)?(e.exit('htmlFlowData'),H(t)):(e.consume(t),v)}
function H(n){return e.exit('htmlFlow'),t(n)}},resolveTo:function(e){
let t=e.length
for(;t--&&('enter'!==e[t][0]||'htmlFlow'!==e[t][1].type););
t>1&&'linePrefix'===e[t-2][1].type&&(e[t][1].start=e[t-2][1].start,
e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2))
return e},concrete:!0},Be={tokenize:function(e,t,n){
return function(r){
return e.exit('htmlFlowData'),e.enter('lineEndingBlank'),e.consume(r),
e.exit('lineEndingBlank'),e.attempt(pe,t,n)}},partial:!0}
const Ue={name:'htmlText',tokenize:function(e,t,n){const r=this
let i,o,s,a
return function(t){
return e.enter('htmlText'),e.enter('htmlTextData'),e.consume(t),l}
function l(t){
return 33===t?(e.consume(t),c):47===t?(e.consume(t),N):63===t?(e.consume(t),
A):Y(t)?(e.consume(t),O):n(t)}function c(t){
return 45===t?(e.consume(t),u):91===t?(e.consume(t),
o='CDATA[',s=0,d):Y(t)?(e.consume(t),_):n(t)}function u(t){
return 45===t?(e.consume(t),h):n(t)}function h(t){
return null===t||62===t?n(t):45===t?(e.consume(t),f):p(t)}
function f(e){return null===e||62===e?n(e):p(e)}function p(t){
return null===t?n(t):45===t?(e.consume(t),
m):J(t)?(a=p,P(t)):(e.consume(t),p)}function m(t){
return 45===t?(e.consume(t),v):p(t)}function d(t){
return t===o.charCodeAt(s++)?(e.consume(t),s===o.length?T:d):n(t)}
function T(t){
return null===t?n(t):93===t?(e.consume(t),E):J(t)?(a=T,P(t)):(e.consume(t),
T)}function E(t){return 93===t?(e.consume(t),g):T(t)}function g(t){
return 62===t?v(t):93===t?(e.consume(t),g):T(t)}function _(t){
return null===t||62===t?v(t):J(t)?(a=_,P(t)):(e.consume(t),_)}
function A(t){
return null===t?n(t):63===t?(e.consume(t),C):J(t)?(a=A,P(t)):(e.consume(t),
A)}function C(e){return 62===e?v(e):A(e)}function N(t){
return Y(t)?(e.consume(t),k):n(t)}function k(t){
return 45===t||V(t)?(e.consume(t),k):S(t)}function S(t){
return J(t)?(a=S,P(t)):ee(t)?(e.consume(t),S):v(t)}function O(t){
return 45===t||V(t)?(e.consume(t),O):47===t||62===t||Z(t)?y(t):n(t)}
function y(t){
return 47===t?(e.consume(t),v):58===t||95===t||Y(t)?(e.consume(t),
I):J(t)?(a=y,P(t)):ee(t)?(e.consume(t),y):v(t)}function I(t){
return 45===t||46===t||58===t||95===t||V(t)?(e.consume(t),I):R(t)}
function R(t){
return 61===t?(e.consume(t),L):J(t)?(a=R,P(t)):ee(t)?(e.consume(t),
R):y(t)}function L(t){
return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),
i=t,
b):J(t)?(a=L,P(t)):ee(t)?(e.consume(t),L):(e.consume(t),i=void 0,M)}
function b(t){
return t===i?(e.consume(t),x):null===t?n(t):J(t)?(a=b,P(t)):(e.consume(t),
b)}function x(e){return 62===e||47===e||Z(e)?y(e):n(e)}function M(t){
return null===t||34===t||39===t||60===t||61===t||96===t?n(t):62===t||Z(t)?y(t):(e.consume(t),
M)}function P(t){
return e.exit('htmlTextData'),e.enter('lineEnding'),e.consume(t),
e.exit('lineEnding'),
ie(e,D,'linePrefix',r.parser.constructs.disable.null.includes('codeIndented')?void 0:4)
}function D(t){return e.enter('htmlTextData'),a(t)}function v(r){
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
be(e,r)}
function r(t){
return 41===t?s(t):Ie(e,i,n,'resourceDestination','resourceDestinationLiteral','resourceDestinationLiteralMarker','resourceDestinationRaw','resourceDestinationString',32)(t)
}function i(t){return Z(t)?be(e,o)(t):s(t)}function o(t){
return 34===t||39===t||40===t?Le(e,be(e,s),n,'resourceTitle','resourceTitleMarker','resourceTitleString')(t):s(t)
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
const Ve={name:'thematicBreak',tokenize:function(e,t,n){let r,i=0
return function(t){return e.enter('thematicBreak'),r=t,o(t)}
function o(a){
return a===r?(e.enter('thematicBreakSequence'),s(a)):ee(a)?ie(e,o,'whitespace')(a):i<3||null!==a&&!J(a)?n(a):(e.exit('thematicBreak'),
t(a))}function s(t){
return t===r?(e.consume(t),i++,s):(e.exit('thematicBreakSequence'),
o(t))}}}
const qe={name:'list',tokenize:function(e,t,n){
const r=this,i=r.events[r.events.length-1]
let o=i&&'linePrefix'===i[1].type?i[2].sliceSerialize(i[1],!0).length:0,s=0
return function(t){
const i=r.containerState.type||(42===t||43===t||45===t?'listUnordered':'listOrdered')
if('listUnordered'===i?!r.containerState.marker||t===r.containerState.marker:Q(t)){
if(r.containerState.type||(r.containerState.type=i,e.enter(i,{
_container:!0
})),'listUnordered'===i)return e.enter('listItemPrefix'),42===t||45===t?e.check(Ve,n,l)(t):l(t)
if(!r.interrupt||49===t)return e.enter('listItemPrefix'),e.enter('listItemValue'),
a(t)}return n(t)}
function a(t){
return Q(t)&&++s<10?(e.consume(t),a):(!r.interrupt||s<2)&&(r.containerState.marker?t===r.containerState.marker:41===t||46===t)?(e.exit('listItemValue'),
l(t)):n(t)}function l(t){
return e.enter('listItemMarker'),e.consume(t),e.exit('listItemMarker'),
r.containerState.marker=r.containerState.marker||t,
e.check(pe,r.interrupt?n:c,e.attempt(Xe,h,u))}function c(e){
return r.containerState.initialBlankLine=!0,o++,h(e)}function u(t){
return ee(t)?(e.enter('listItemPrefixWhitespace'),
e.consume(t),e.exit('listItemPrefixWhitespace'),h):n(t)}function h(n){
return r.containerState.size=o+r.sliceSerialize(e.exit('listItemPrefix'),!0).length,
t(n)}},continuation:{tokenize:function(e,t,n){const r=this
return r.containerState._closeFlow=void 0,e.check(pe,i,o)
function i(n){
return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,
ie(e,t,'listItemIndent',r.containerState.size+1)(n)}function o(n){
return r.containerState.furtherBlankLines||!ee(n)?(r.containerState.furtherBlankLines=void 0,
r.containerState.initialBlankLine=void 0,
s(n)):(r.containerState.furtherBlankLines=void 0,
r.containerState.initialBlankLine=void 0,e.attempt($e,t,s)(n))}
function s(i){
return r.containerState._closeFlow=!0,r.interrupt=void 0,ie(e,e.attempt(qe,t,n),'linePrefix',r.parser.constructs.disable.null.includes('codeIndented')?void 0:4)(i)
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
const t=this,n=e.attempt(pe,(function(r){
if(null===r)return void e.consume(r)
return e.enter('lineEndingBlank'),e.consume(r),e.exit('lineEndingBlank'),t.currentConstruct=void 0,
n
}),e.attempt(this.parser.constructs.flowInitial,r,ie(e,e.attempt(this.parser.constructs.flow,r,e.attempt(Oe,r)),'linePrefix')))
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
return n.type=e,n.start=f(),c.events.push(['enter',n,c]),a.push(n),n},
exit:function(e){const t=a.pop()
return t.end=f(),c.events.push(['exit',t,c]),t},
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
}(h(e),t)},now:f,defineSkip:function(e){i[e.line]=e.column,g()},
write:function(e){if(s=U(s,e),p(),null!==s[s.length-1])return[]
return E(t,0),c.events=ce(o,c.events,c),c.events}}
let u=t.tokenize.call(c,l)
return t.resolveAll&&o.push(t),c
function h(e){return function(e,t){
const n=t.start._index,r=t.start._bufferIndex,i=t.end._index,o=t.end._bufferIndex
let s
n===i?s=[e[n].slice(r,o)]:(s=e.slice(n,i),r>-1&&(s[0]=s[0].slice(r)),o>0&&s.push(e[i].slice(0,o)))
return s}(s,e)}function f(){return Object.assign({},r)}function p(){
let e
for(;r._index<s.length;){const t=s[r._index]
if('string'==typeof t)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)m(t.charCodeAt(r._bufferIndex))
else m(t)}}function m(e){u=u(e)}function d(e,t){t.restore()}
function T(e,t){return function(n,i,o){let s,u,h,p
return Array.isArray(n)?m(n):'tokenize'in n?m([n]):function(e){
return t
function t(t){const n=null!==t&&e[t],r=null!==t&&e.null
return m([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)
}}(n)
function m(e){return s=e,u=0,0===e.length?o:d(e[u])}function d(e){
return function(n){p=function(){
const e=f(),t=c.previous,n=c.currentConstruct,i=c.events.length,o=Array.from(a)
return{restore:s,from:i}
function s(){
r=e,c.previous=t,c.currentConstruct=n,c.events.length=i,a=o,g()}
}(),h=e,e.partial||(c.currentConstruct=e)
if(e.name&&c.parser.constructs.disable.null.includes(e.name))return E()
return e.tokenize.call(t?Object.assign(Object.create(c),t):c,l,T,E)(n)
}}function T(t){return e(h,p),i}function E(e){
return p.restore(),++u<s.length?d(s[u]):o}}}function E(e,t){
e.resolveAll&&!o.includes(e)&&o.push(e),
e.resolve&&B(c.events,t,c.events.length-t,e.resolve(c.events.slice(t),c)),
e.resolveTo&&(c.events=e.resolveTo(c.events,c))}function g(){
r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}
const at={42:qe,43:qe,45:qe,48:qe,49:qe,50:qe,51:qe,52:qe,53:qe,54:qe,
55:qe,56:qe,57:qe,62:me},lt={91:Me},ct={[-2]:Ae,[-1]:Ae,32:Ae},ut={
35:ve,42:Ve,45:[Ze,Ve],60:we,61:Ze,95:Ve,96:_e,126:_e},ht={38:ge,92:de
},ft={[-5]:We,[-4]:We,[-3]:We,33:Ye,38:ge,42:ue,60:[fe,Ue],91:Qe,
92:[De,de],93:Ge,95:ue,96:Ne},pt={null:[ue,et]}
var mt=Object.freeze({__proto__:null,document:at,contentInitial:lt,
flowInitial:ct,flow:ut,string:ht,text:ft,insideSpan:pt,
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
enter:{autolink:l(oe),autolinkProtocol:L,autolinkEmail:L,
atxHeading:l(te),blockQuote:l(X),characterEscape:L,
characterReference:L,codeFenced:l($),codeFencedFenceInfo:c,
codeFencedFenceMeta:c,codeIndented:l($,c),codeText:l(Z,c),
codeTextData:L,data:L,codeFlowValue:L,definition:l(J),
definitionDestinationString:c,definitionLabelString:c,
definitionTitleString:c,emphasis:l(ee),hardBreakEscape:l(ne),
hardBreakTrailing:l(ne),htmlFlow:l(re,c),htmlFlowData:L,
htmlText:l(re,c),htmlTextData:L,image:l(ie),label:c,link:l(oe),
listItem:l(ae),listItemValue:T,listOrdered:l(se,d),
listUnordered:l(se),paragraph:l(le),reference:j,referenceString:c,
resourceDestinationString:c,resourceTitleString:c,setextHeading:l(te),
strong:l(ce),thematicBreak:l(he)},exit:{atxHeading:h(),
atxHeadingSequence:O,autolink:h(),autolinkEmail:q,autolinkProtocol:V,
blockQuote:h(),characterEscapeValue:b,
characterReferenceMarkerHexadecimal:Q,
characterReferenceMarkerNumeric:Q,characterReferenceValue:W,
codeFenced:h(A),codeFencedFence:_,codeFencedFenceInfo:E,
codeFencedFenceMeta:g,codeFlowValue:b,codeIndented:h(C),codeText:h(v),
codeTextData:b,data:b,definition:h(),definitionDestinationString:S,
definitionLabelString:N,definitionTitleString:k,emphasis:h(),
hardBreakEscape:h(M),hardBreakTrailing:h(M),htmlFlow:h(P),
htmlFlowData:b,htmlText:h(D),htmlTextData:b,image:h(w),label:U,
labelText:B,lineEnding:x,link:h(H),listItem:h(),listOrdered:h(),
listUnordered:h(),paragraph:h(),referenceString:Y,
resourceDestinationString:G,resourceTitleString:K,resource:z,
setextHeading:h(R),setextHeadingLineSequence:I,setextHeadingText:y,
strong:h(),thematicBreak:h()}},e.mdastExtensions||[]),n={}
return r
function r(e){let n={type:'root',children:[]}
const r=[],l=[],h={stack:[n],tokenStack:r,config:t,enter:u,exit:f,
buffer:c,resume:m,setData:o,getData:s}
let p=-1
for(;++p<e.length;)if('listOrdered'===e[p][1].type||'listUnordered'===e[p][1].type)if('enter'===e[p][0])l.push(p)
else{p=i(e,l.pop(),p)}for(p=-1;++p<e.length;){const n=t[e[p][0]]
At.call(n,e[p][1].type)&&n[e[p][1].type].call(Object.assign({
sliceSerialize:e[p][2].sliceSerialize},h),e[p][1])}if(r.length>0){
const e=r[r.length-1];(e[1]||St).call(h,void 0,e[0])}for(n.position={
start:a(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),
end:a(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})
},p=-1;++p<t.transforms.length;)n=t.transforms[p](n)||n
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
function t(t){e&&e.call(this,t),f.call(this,t)}}function f(e,t){
const n=this.stack.pop(),r=this.tokenStack.pop()
if(!r)throw new Error('Cannot close `'+e.type+'` ('+p({start:e.start,
end:e.end})+'): it’s not open')
if(r[0].type!==e.type)if(t)t.call(this,e,r[0])
else{(r[1]||St).call(this,e,r[0])}return n.position.end=a(e.end),n}
function m(){return function(e,t){var{includeImageAlt:n=!0}=t||{}
return F(e,n)}(this.stack.pop())}function d(){
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
this.stack[this.stack.length-1].title=e}function S(){
const e=this.resume()
this.stack[this.stack.length-1].url=e}function O(e){
const t=this.stack[this.stack.length-1]
if(!t.depth){const n=this.sliceSerialize(e).length
t.depth=n}}function y(){o('setextHeadingSlurpLineEnding',!0)}
function I(e){
this.stack[this.stack.length-1].depth=61===this.sliceSerialize(e).charCodeAt(0)?1:2
}function R(){o('setextHeadingSlurpLineEnding')}function L(e){
const t=this.stack[this.stack.length-1]
let n=t.children[t.children.length-1]
n&&'text'===n.type||(n=ue(),n.position={start:a(e.start)
},t.children.push(n)),this.stack.push(n)}function b(e){
const t=this.stack.pop()
t.value+=this.sliceSerialize(e),t.position.end=a(e.end)}function x(e){
const n=this.stack[this.stack.length-1]
if(s('atHardBreak')){
return n.children[n.children.length-1].position.end=a(e.end),
void o('atHardBreak')}
!s('setextHeadingSlurpLineEnding')&&t.canContainEols.includes(n.type)&&(L.call(this,e),
b.call(this,e))}function M(){o('atHardBreak',!0)}function P(){
const e=this.resume()
this.stack[this.stack.length-1].value=e}function D(){
const e=this.resume()
this.stack[this.stack.length-1].value=e}function v(){
const e=this.resume()
this.stack[this.stack.length-1].value=e}function H(){
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
i.value+=r,i.position.end=a(e.end)}function V(e){b.call(this,e)
this.stack[this.stack.length-1].url=this.sliceSerialize(e)}
function q(e){b.call(this,e)
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
let l,c,u,h,f
for(i=n+i.toString(o),u=0,n='',r&&(65279===i.charCodeAt(0)&&u++,r=void 0);u<i.length;){
if(dt.lastIndex=u,
l=dt.exec(i),h=l&&void 0!==l.index?l.index:i.length,f=i.charCodeAt(h),
!l){n=i.slice(u)
break}if(10===f&&u===h&&e)a.push(-3),e=void 0
else switch(e&&(a.push(-5),e=void 0),u<h&&(a.push(i.slice(u,h)),t+=h-u),f){
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
o&&(r?e[n]=[...i,...o]:Object.assign(i,o))}}function St(e,t){
throw e?new Error('Cannot close `'+e.type+'` ('+p({start:e.start,
end:e.end})+'): a different token (`'+t.type+'`, '+p({start:t.start,
end:t.end
})+') is open'):new Error('Cannot close document, a token (`'+t.type+'`, '+p({
start:t.start,end:t.end})+') is still open')}const Ot={
tokenize:function(e,t,n){return function(t){return e.consume(t),r}
function r(t){return 87===t||119===t?(e.consume(t),i):n(t)}
function i(t){return 87===t||119===t?(e.consume(t),o):n(t)}
function o(t){return 46===t?(e.consume(t),s):n(t)}function s(e){
return null===e||J(e)?n(e):t(e)}},partial:!0},yt={
tokenize:function(e,t,n){let r,i
return o
function o(t){
return 38===t?e.check(Lt,a,s)(t):46===t||95===t?e.check(Rt,a,s)(t):null===t||$(t)||te(t)||45!==t&&ne(t)?a(t):(e.consume(t),
o)}function s(t){
return 46===t?(i=r,r=void 0,e.consume(t),o):(95===t&&(r=!0),e.consume(t),
o)}function a(e){return i||r?n(e):t(e)}},partial:!0},It={
tokenize:function(e,t){let n=0
return r
function r(s){
return 38===s?e.check(Lt,t,i)(s):(40===s&&n++,41===s?e.check(Rt,o,i)(s):Ft(s)?t(s):Ht(s)?e.check(Rt,t,i)(s):(e.consume(s),
r))}function i(t){return e.consume(t),r}function o(e){
return n--,n<0?t(e):i(e)}},partial:!0},Rt={tokenize:function(e,t,n){
return function(t){return e.consume(t),r}
function r(i){return Ht(i)?(e.consume(i),r):Ft(i)?t(i):n(i)}},
partial:!0},Lt={tokenize:function(e,t,n){return function(t){
return e.consume(t),r}
function r(t){
return Y(t)?(e.consume(t),r):59===t?(e.consume(t),i):n(t)}
function i(e){return Ft(e)?t(e):n(e)}},partial:!0},bt={
tokenize:function(e,t,n){const r=this
return function(t){
if(87!==t&&119!==t||!Bt(r.previous)||Kt(r.events))return n(t)
return e.enter('literalAutolink'),e.enter('literalAutolinkWww'),e.check(Ot,e.attempt(yt,e.attempt(It,i),n),n)(t)
}
function i(n){
return e.exit('literalAutolinkWww'),e.exit('literalAutolink'),t(n)}},
previous:Bt},xt={tokenize:function(e,t,n){const r=this
return function(t){
if(72!==t&&104!==t||!Ut(r.previous)||Kt(r.events))return n(t)
return e.enter('literalAutolink'),e.enter('literalAutolinkHttp'),e.consume(t),i
}
function i(t){return 84===t||116===t?(e.consume(t),o):n(t)}
function o(t){return 84===t||116===t?(e.consume(t),s):n(t)}
function s(t){return 80===t||112===t?(e.consume(t),a):n(t)}
function a(t){return 83===t||115===t?(e.consume(t),l):l(t)}
function l(t){return 58===t?(e.consume(t),c):n(t)}function c(t){
return 47===t?(e.consume(t),u):n(t)}function u(t){
return 47===t?(e.consume(t),h):n(t)}function h(t){
return null===t||$(t)||te(t)||ne(t)?n(t):e.attempt(yt,e.attempt(It,f),n)(t)
}function f(n){
return e.exit('literalAutolinkHttp'),e.exit('literalAutolink'),t(n)}},
previous:Ut},Mt={tokenize:function(e,t,n){const r=this
let i,o
return function(t){
if(!wt(t)||!Gt(r.previous)||Kt(r.events))return n(t)
return e.enter('literalAutolink'),e.enter('literalAutolinkEmail'),s(t)
}
function s(t){
return wt(t)?(e.consume(t),s):64===t?(e.consume(t),a):n(t)}
function a(t){
return 46===t?e.check(Rt,h,l)(t):45===t||95===t?e.check(Rt,n,c)(t):V(t)?(!o&&Q(t)&&(o=!0),
e.consume(t),a):h(t)}function l(t){return e.consume(t),i=!0,o=void 0,a
}function c(t){return e.consume(t),u}function u(t){
return 46===t?e.check(Rt,n,l)(t):a(t)}function h(r){
return i&&!o?(e.exit('literalAutolinkEmail'),
e.exit('literalAutolink'),t(r)):n(r)}},previous:Gt},Pt={},Dt={text:Pt}
let vt=48
for(;vt<123;)Pt[vt]=Mt,vt++,58===vt?vt=65:91===vt&&(vt=97)
function Ht(e){
return 33===e||34===e||39===e||41===e||42===e||44===e||46===e||58===e||59===e||60===e||63===e||95===e||126===e
}function Ft(e){return null===e||60===e||Z(e)}function wt(e){
return 43===e||45===e||46===e||95===e||V(e)}function Bt(e){
return null===e||40===e||42===e||95===e||126===e||Z(e)}function Ut(e){
return null===e||!Y(e)}function Gt(e){return 47!==e&&Ut(e)}
function Kt(e){let t=e.length,n=!1
for(;t--;){const r=e[t][1]
if(('labelLink'===r.type||'labelImage'===r.type)&&!r._balanced){n=!0
break}if(r._gfmAutolinkLiteralWalkedInto){n=!1
break}}
return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),
n}function zt(e){const t=[]
let n=-1,r=0,i=0
for(;++n<e.length;){const o=e.charCodeAt(n)
let s=''
if(37===o&&V(e.charCodeAt(n+1))&&V(e.charCodeAt(n+2)))i=2
else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o))
else if(o>55295&&o<57344){const t=e.charCodeAt(n+1)
o<56320&&t>56319&&t<57344?(s=String.fromCharCode(o,t),i=1):s='�'
}else s=String.fromCharCode(o)
s&&(t.push(e.slice(r,n),encodeURIComponent(s)),r=n+i+1,s=''),i&&(n+=i,i=0)
}return t.join('')+e.slice(r)}
Pt[43]=Mt,Pt[45]=Mt,Pt[46]=Mt,Pt[95]=Mt,Pt[72]=[Mt,xt],
Pt[104]=[Mt,xt],Pt[87]=[Mt,bt],Pt[119]=[Mt,bt]
const jt={tokenize:function(e,t,n){const r=this
return ie(e,(function(e){const i=r.events[r.events.length-1]
return i&&'gfmFootnoteDefinitionIndent'===i[1].type&&4===i[2].sliceSerialize(i[1],!0).length?t(e):n(e)
}),'gfmFootnoteDefinitionIndent',5)},partial:!0}
function Yt(e,t,n){const r=this
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
t(i)}}function Qt(e,t){let n=e.length
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
return e.splice(n,e.length-n+1,...a),e}function Wt(e,t,n){
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
f):n(t):J(t)?(e.enter('lineEnding'),e.consume(t),
e.exit('lineEnding'),a++,c):(e.enter('chunkString').contentType='string',
u(t))}function u(t){
return null===t||J(t)||91===t||93===t||a>999?(e.exit('chunkString'),
c(t)):(Z(t)||(s=!0),a++,e.consume(t),92===t?h:u)}function h(t){
return 91===t||92===t||93===t?(e.consume(t),a++,u):u(t)}function f(t){
return 58===t?(e.enter('definitionMarker'),
e.consume(t),e.exit('definitionMarker'),
ie(e,p,'gfmFootnoteDefinitionWhitespace')):n(t)}function p(e){
return i.includes(o)||i.push(o),t(e)}}function qt(e,t,n){
return e.check(pe,t,e.attempt(jt,t,n))}function Xt(e){
e.exit('gfmFootnoteDefinition')}function $t(e={}){let t=e.singleTilde
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
attentionMarkers:{null:[126]}}}const Zt={flow:{null:{
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
return r.interrupt=i,e.enter('tableDelimiterRow'),p(t)}),(function(e){
return r.interrupt=i,n(e)}))(t)
}(t):ee(t)?(e.enter('whitespace'),e.consume(t),u):(o&&(o=void 0,
a++),124===t?l(t):(e.enter('temporaryTableCellContent'),h(t)))}
function u(t){
return ee(t)?(e.consume(t),u):(e.exit('whitespace'),c(t))}
function h(t){
return null===t||124===t||Z(t)?(e.exit('temporaryTableCellContent'),
c(t)):(e.consume(t),92===t?f:h)}function f(t){
return 92===t||124===t?(e.consume(t),h):h(t)}function p(t){
return null===t||J(t)?g(t):ee(t)?(e.enter('whitespace'),
e.consume(t),m):45===t?(e.enter('tableDelimiterFiller'),
e.consume(t),s=!0,i.push('none'),
d):58===t?(e.enter('tableDelimiterAlignment'),e.consume(t),
e.exit('tableDelimiterAlignment'),
i.push('left'),T):124===t?(e.enter('tableCellDivider'),
e.consume(t),e.exit('tableCellDivider'),p):n(t)}function m(t){
return ee(t)?(e.consume(t),m):(e.exit('whitespace'),p(t))}
function d(t){
return 45===t?(e.consume(t),d):(e.exit('tableDelimiterFiller'),58===t?(e.enter('tableDelimiterAlignment'),
e.consume(t),
e.exit('tableDelimiterAlignment'),i[i.length-1]='left'===i[i.length-1]?'center':'right',
E):p(t))}function T(t){
return 45===t?(e.enter('tableDelimiterFiller'),e.consume(t),
s=!0,d):n(t)}function E(t){
return null===t||J(t)?g(t):ee(t)?(e.enter('whitespace'),
e.consume(t),m):124===t?(e.enter('tableCellDivider'),
e.consume(t),e.exit('tableCellDivider'),p):n(t)}function g(t){
return e.exit('tableDelimiterRow'),
s&&a===i.length?null===t?_(t):e.check(Jt,_,e.attempt({tokenize:R,
partial:!0},ie(e,A,'linePrefix',4),_))(t):n(t)}function _(n){
return e.exit('table'),t(n)}function A(t){
return e.enter('tableBody'),C(t)}function C(t){
return e.enter('tableRow'),124===t?N(t):(e.enter('temporaryTableCellContent'),
O(t))}function N(t){
return e.enter('tableCellDivider'),e.consume(t),e.exit('tableCellDivider'),
k}function k(t){return null===t||J(t)?function(t){
if(e.exit('tableRow'),null===t)return I(t)
return e.check(Jt,I,e.attempt({tokenize:R,partial:!0
},ie(e,C,'linePrefix',4),I))(t)
}(t):ee(t)?(e.enter('whitespace'),e.consume(t),S):124===t?N(t):(e.enter('temporaryTableCellContent'),
O(t))}function S(t){
return ee(t)?(e.consume(t),S):(e.exit('whitespace'),k(t))}
function O(t){
return null===t||124===t||Z(t)?(e.exit('temporaryTableCellContent'),
k(t)):(e.consume(t),92===t?y:O)}function y(t){
return 92===t||124===t?(e.consume(t),O):O(t)}function I(t){
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
}}},Jt={tokenize:function(e,t,n){let r=0
return function(t){return e.enter('check'),e.consume(t),i}
function i(o){
return-1===o||32===o?(e.consume(o),r++,4===r?t:i):null===o||Z(o)?t(o):n(o)
}},partial:!0}
const en={tokenize:function(e,t,n){const r=this
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
e.exit('taskListCheck'),e.check({tokenize:nn},t,n)):n(r)}}},tn={text:{
91:en}}
function nn(e,t,n){const r=this
return ie(e,(function(e){const i=r.events[r.events.length-1]
return(i&&'whitespace'===i[1].type||J(e))&&null!==e?t(e):n(e)
}),'whitespace')}function rn(e,t){const n=String(e)
if('string'!=typeof t)throw new TypeError('Expected character')
let r=0,i=n.indexOf(t)
for(;-1!==i;)r++,i=n.indexOf(t,i+t.length)
return r}const on=function(e){if(null==e)return an
if('string'==typeof e)return function(e){return sn(t)
function t(t){return t&&t.type===e}}(e)
if('object'==typeof e)return Array.isArray(e)?function(e){const t=[]
let n=-1
for(;++n<e.length;)t[n]=on(e[n])
return sn(r)
function r(...e){let n=-1
for(;++n<t.length;)if(t[n].call(this,...e))return!0
return!1}}(e):function(e){return sn(t)
function t(t){let n
for(n in e)if(t[n]!==e[n])return!1
return!0}}(e)
if('function'==typeof e)return sn(e)
throw new Error('Expected function, string, or object as test')}
function sn(e){return function(...t){return Boolean(e.call(this,...t))
}}function an(){return!0}const ln=function(e,t,n,r){
'function'==typeof t&&'function'!=typeof n&&(r=n,n=t,t=null)
const i=on(t),o=r?-1:1
!function e(s,a,l){const c='object'==typeof s&&null!==s?s:{}
let u
'string'==typeof c.type&&(u='string'==typeof c.tagName?c.tagName:'string'==typeof c.name?c.name:void 0,
Object.defineProperty(h,'name',{
value:'node ('+c.type+(u?'<'+u+'>':'')+')'}))
return h
function h(){let c,u,h,f=[]
if((!t||i(s,a,l[l.length-1]||null))&&(f=function(e){
if(Array.isArray(e))return e
if('number'==typeof e)return[true,e]
return[e]}(n(s,l)),false===f[0]))return f
if(s.children&&"skip"!==f[0])for(u=(r?s.children.length:-1)+o,h=l.concat(s);u>-1&&u<s.children.length;){
if(c=e(s.children[u],u,h)(),false===c[0])return c
u='number'==typeof c[1]?c[1]:u+o}return f}}(e,null,[])()}
const cn={}.hasOwnProperty,un=function(e,t,n,r){let i,o
'string'==typeof t||t instanceof RegExp?(o=[[t,n]],i=r):(o=t,i=n),i||(i={})
const s=on(i.ignore||[]),a=function(e){const t=[]
if('object'!=typeof e)throw new TypeError('Expected array or object as schema')
if(Array.isArray(e)){let n=-1
for(;++n<e.length;)t.push([hn(e[n][0]),fn(e[n][1])])}else{let n
for(n in e)cn.call(e,n)&&t.push([hn(n),fn(e[n])])}return t}(o)
let l=-1
for(;++l<a.length;)ln(e,'text',c)
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
let f=r.exec(e.value)
for(;f;){c=f.index
const n={index:f.index,input:f.input,stack:[...t,e]}
let s=i(...f,n)
if('string'==typeof s&&(s=s.length>0?{type:'text',value:s
}:void 0),!1!==s&&(o!==c&&h.push({type:'text',value:e.value.slice(o,c)
}),Array.isArray(s)?h.push(...s):s&&h.push(s),
o=c+f[0].length,u=!0),!r.global)break
f=r.exec(e.value)}u?(o<e.value.length&&h.push({type:'text',
value:e.value.slice(o)}),n.children.splice(s,1,...h)):h=[e]
return s+h.length}(e,t)}}
function hn(e){return'string'==typeof e?new RegExp(function(e){
if('string'!=typeof e)throw new TypeError('Expected a string')
return e.replace(/[|\\{}()[\]^$+*?.]/g,'\\$&').replace(/-/g,'\\x2d')
}(e),'g'):e}function fn(e){return'function'==typeof e?e:()=>e}
const pn='phrasing',mn=['autolink','link','image','label'],dn={
transforms:[function(e){
un(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,gn],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,_n]],{
ignore:['link','linkReference']})}],enter:{
literalAutolink:function(e){this.enter({type:'link',title:null,url:'',
children:[]},e)},literalAutolinkEmail:En,literalAutolinkHttp:En,
literalAutolinkWww:En},exit:{literalAutolink:function(e){this.exit(e)
},literalAutolinkEmail:function(e){
this.config.exit.autolinkEmail.call(this,e)},
literalAutolinkHttp:function(e){
this.config.exit.autolinkProtocol.call(this,e)},
literalAutolinkWww:function(e){this.config.exit.data.call(this,e)
this.stack[this.stack.length-1].url='http://'+this.sliceSerialize(e)}}
},Tn={unsafe:[{character:'@',before:'[+\\-.\\w]',after:'[\\-.\\w]',
inConstruct:pn,notInConstruct:mn},{character:'.',before:'[Ww]',
after:'[\\-.\\w]',inConstruct:pn,notInConstruct:mn},{character:':',
before:'[ps]',after:'\\/',inConstruct:pn,notInConstruct:mn}]}
function En(e){this.config.enter.autolinkProtocol.call(this,e)}
function gn(e,t,n,r,i){let o=''
if(!An(i))return!1
if(/^w/i.test(t)&&(n=t+n,t='',o='http://'),!function(e){
const t=e.split('.')
if(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))return!1
return!0}(n))return!1
const s=function(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e)
let n,r,i,o
if(t)for(e=e.slice(0,t.index),o=t[0],n=o.indexOf(')'),r=rn(e,'('),i=rn(e,')');-1!==n&&r>i;)e+=o.slice(0,n+1),
o=o.slice(n+1),n=o.indexOf(')'),i++
return[e,o]}(n+r)
if(!s[0])return!1
const a={type:'link',title:null,url:o+t+s[0],children:[{type:'text',
value:t+s[0]}]}
return s[1]?[a,{type:'text',value:s[1]}]:a}function _n(e,t,n,r){
return!(!An(r,!0)||/[_-\d]$/.test(n))&&{type:'link',title:null,
url:'mailto:'+t+'@'+n,children:[{type:'text',value:t+'@'+n}]}}
function An(e,t){const n=e.input.charCodeAt(e.index-1)
return(0===e.index||te(n)||ne(n))&&(!t||47!==n)}function Cn(e){
return e.label||!e.identifier?e.label||'':gt(e.identifier)}
function Nn(e){const t=e||{},n=t.now||{}
let r=t.lineShift||0,i=n.line||1,o=n.column||1
return{move:function(e=""){
const t=e.split(/\r?\n|\r/g),n=t[t.length-1]
return i+=t.length-1,o=1===t.length?o+n.length:1+n.length+r,e},
current:function(){return{now:{line:i,column:o},lineShift:r}},
shift:function(e){r+=e}}}function kn(e,t,n){
const r=t.indexStack,i=e.children||[],o=Nn(n),s=[]
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
const Sn=/\r?\n|\r/g
function On(e,t){const n=[]
let r,i=0,o=0
for(;r=Sn.exec(e);)s(e.slice(i,r.index)),n.push(r[0]),i=r.index+r[0].length,o++
return s(e.slice(i)),n.join('')
function s(e){n.push(t(e,o,!e))}}function yn(e){if(!e._compiled){
const t=(e.atBreak?'[\\r\\n][\\t ]*':'')+(e.before?'(?:'+e.before+')':'')
e._compiled=new RegExp((t?'('+t+')':'')+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?'\\':'')+e.character+(e.after?'(?:'+e.after+')':''),'g')
}return e._compiled}function In(e,t){
return Rn(e,t.inConstruct,!0)&&!Rn(e,t.notInConstruct,!1)}
function Rn(e,t,n){if(!t)return n
'string'==typeof t&&(t=[t])
let r=-1
for(;++r<t.length;)if(e.includes(t[r]))return!0
return!1}function Ln(e,t,n){
const r=(n.before||'')+(t||'')+(n.after||''),i=[],o=[],s={}
let a=-1
for(;++a<e.unsafe.length;){const t=e.unsafe[a]
if(!In(e.stack,t))continue
const n=yn(t)
let o
for(;o=n.exec(r);){
const e='before'in t||Boolean(t.atBreak),n='after'in t,r=o.index+(e?o[1].length:0)
i.includes(r)?(s[r].before&&!e&&(s[r].before=!1),s[r].after&&!n&&(s[r].after=!1)):(i.push(r),
s[r]={before:e,after:n})}}i.sort(bn)
let l=n.before?n.before.length:0
const c=r.length-(n.after?n.after.length:0)
for(a=-1;++a<i.length;){const e=i[a]
e<l||e>=c||(e+1<c&&i[a+1]===e+1&&s[e].after&&!s[e+1].before&&!s[e+1].after||i[a-1]===e-1&&s[e].before&&!s[e-1].before&&!s[e-1].after||(l!==e&&o.push(xn(r.slice(l,e),'\\')),
l=e,
!/[!-/:-@[-`{-~]/.test(r.charAt(e))||n.encode&&n.encode.includes(r.charAt(e))?(o.push('&#x'+r.charCodeAt(e).toString(16).toUpperCase()+';'),
l++):o.push('\\')))}return o.push(xn(r.slice(l,c),n.after)),o.join('')
}function bn(e,t){return e-t}function xn(e,t){
const n=/\\(?=[!-/:-@[-`{-~])/g,r=[],i=[],o=e+t
let s,a=-1,l=0
for(;s=n.exec(o);)r.push(s.index)
for(;++a<r.length;)l!==r[a]&&i.push(e.slice(l,r[a])),i.push('\\'),l=r[a]
return i.push(e.slice(l)),i.join('')}function Mn(){
return e.peek=function(){return'['},{unsafe:[{character:'[',
inConstruct:['phrasing','label','reference']}],handlers:{
footnoteDefinition:function(e,t,n,r){const i=Nn(r)
let o=i.move('[^')
const s=n.enter('footnoteDefinition'),a=n.enter('label')
return o+=i.move(Ln(n,Cn(e),{...i.current(),before:o,after:']'
})),a(),o+=i.move(']:'+(e.children&&e.children.length>0?' ':'')),
i.shift(4),o+=i.move(On(kn(e,n,i.current()),(function(e,t,n){
if(t)return(n?'':'    ')+e
return e}))),s(),o},footnoteReference:e}}
function e(e,t,n,r){const i=Nn(r)
let o=i.move('[^')
const s=n.enter('footnoteReference'),a=n.enter('reference')
return o+=i.move(Ln(n,Cn(e),{...i.current(),before:o,after:']'
})),a(),s(),o+=i.move(']'),o}}function Pn(e,t,n){
const r=t.indexStack,i=e.children||[],o=[]
let s=-1,a=n.before
r.push(-1)
let l=Nn(n)
for(;++s<i.length;){const c=i[s]
let u
if(r[r.length-1]=s,s+1<i.length){let n=t.handle.handlers[i[s+1].type]
n&&n.peek&&(n=n.peek),u=n?n(i[s+1],e,t,{before:'',after:'',
...l.current()}).charAt(0):''}else u=n.after
o.length>0&&('\r'===a||'\n'===a)&&'html'===c.type&&(o[o.length-1]=o[o.length-1].replace(/(\r?\n|\r)$/,' '),
a=' ',l=Nn(n),l.move(o.join(''))),o.push(l.move(t.handle(c,e,t,{
...l.current(),before:a,after:u}))),a=o[o.length-1].slice(-1)}
return r.pop(),o.join('')}const Dn={canContainEols:['delete'],enter:{
strikethrough:function(e){this.enter({type:'delete',children:[]},e)}},
exit:{strikethrough:function(e){this.exit(e)}}},vn={unsafe:[{
character:'~',inConstruct:'phrasing',
notInConstruct:['autolink','destinationLiteral','destinationRaw','reference','titleQuote','titleApostrophe']
}],handlers:{delete:Hn}}
function Hn(e,t,n,r){const i=Nn(r),o=n.enter('emphasis')
let s=i.move('~~')
return s+=Pn(e,n,{...i.current(),before:s,after:'~'
}),s+=i.move('~~'),o(),s}function Fn(e,t,n){
let r=e.value||'',i='`',o=-1
for(;new RegExp('(^|[^`])'+i+'([^`]|$)').test(r);)i+='`'
for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=' '+r+' ');++o<n.unsafe.length;){
const e=n.unsafe[o],t=yn(e)
let i
if(e.atBreak)for(;i=t.exec(r);){let e=i.index
10===r.charCodeAt(e)&&13===r.charCodeAt(e-1)&&e--,r=r.slice(0,e)+' '+r.slice(i.index+1)
}}return i+r+i}function wn(e){return e.length}function Bn(e){
const t='string'==typeof e?e.codePointAt(0):0
return 67===t||99===t?99:76===t||108===t?108:82===t||114===t?114:0}
Hn.peek=function(){return'~'},Fn.peek=function(){return'`'}
const Un={enter:{table:function(e){const t=e._align
this.enter({type:'table',align:t.map((e=>'none'===e?null:e)),
children:[]},e),this.setData('inTable',!0)},tableData:Kn,
tableHeader:Kn,tableRow:function(e){this.enter({type:'tableRow',
children:[]},e)}},exit:{codeText:function(e){let t=this.resume()
this.getData('inTable')&&(t=t.replace(/\\([\\|])/g,zn))
this.stack[this.stack.length-1].value=t,this.exit(e)},
table:function(e){this.exit(e),this.setData('inTable')},tableData:Gn,
tableHeader:Gn,tableRow:Gn}}
function Gn(e){this.exit(e)}function Kn(e){this.enter({
type:'tableCell',children:[]},e)}function zn(e,t){return'|'===t?t:e}
function jn(e){
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
inlineCode:function(e,t,n){let r=Fn(e,0,n)
n.stack.includes('tableCell')&&(r=r.replace(/\|/g,'\\$&'))
return r}}}
function s(e,t,n,r){
const i=n.enter('tableCell'),s=n.enter('phrasing'),a=Pn(e,n,{...r,
before:o,after:o})
return s(),i(),a}function a(e,t){return function(e,t={}){
const n=(t.align||[]).concat(),r=t.stringLength||wn,i=[],o=[],s=[],a=[]
let l=0,c=-1
for(;++c<e.length;){const n=[],i=[]
let h=-1
for(e[c].length>l&&(l=e[c].length);++h<e[c].length;){
const o=null==(u=e[c][h])?'':String(u)
if(!1!==t.alignDelimiters){const e=r(o)
i[h]=e,(void 0===a[h]||e>a[h])&&(a[h]=e)}n.push(o)}o[c]=n,s[c]=i}var u
let h=-1
if('object'==typeof n&&'length'in n)for(;++h<l;)i[h]=Bn(n[h])
else{const e=Bn(n)
for(;++h<l;)i[h]=e}h=-1
const f=[],p=[]
for(;++h<l;){const e=i[h]
let n='',r=''
99===e?(n=':',r=':'):108===e?n=':':114===e&&(r=':')
let o=!1===t.alignDelimiters?1:Math.max(1,a[h]-n.length-r.length)
const s=n+'-'.repeat(o)+r
!1!==t.alignDelimiters&&(o=n.length+o+r.length,o>a[h]&&(a[h]=o),p[h]=o),f[h]=s
}o.splice(1,0,f),s.splice(1,0,p),c=-1
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
return a(),o}}function Yn(e,t,n,r){const i=function(e){
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
const a=Nn(r)
a.move(o+' '.repeat(s-o.length)),a.shift(s)
const l=n.enter('listItem'),c=On(kn(e,n,a.current()),(function(e,t,n){
if(t)return(n?'':' '.repeat(s))+e
return(n?o:o+' '.repeat(s-o.length))+e}))
return l(),c}const Qn={exit:{taskListCheckValueChecked:Vn,
taskListCheckValueUnchecked:Vn,paragraph:function(e){
const t=this.stack[this.stack.length-2],n=this.stack[this.stack.length-1],r=t.children,i=n.children[0]
let o,s=-1
if(t&&'listItem'===t.type&&'boolean'==typeof t.checked&&i&&'text'===i.type){
for(;++s<r.length;){const e=r[s]
if('paragraph'===e.type){o=e
break}}
o===n&&(i.value=i.value.slice(1),0===i.value.length?n.children.shift():n.position&&i.position&&'number'==typeof i.position.start.offset&&(i.position.start.column++,
i.position.start.offset++,
n.position.start=Object.assign({},i.position.start)))}this.exit(e)}}
},Wn={unsafe:[{atBreak:!0,character:'-',after:'[:|-]'}],handlers:{
listItem:function(e,t,n,r){
const i=e.children[0],o='boolean'==typeof e.checked&&i&&'paragraph'===i.type,s='['+(e.checked?'x':' ')+'] ',a=Nn(r)
o&&a.move(s)
let l=Yn(e,t,n,{...r,...a.current()})
o&&(l=l.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,(function(e){
return e+s})))
return l}}}
function Vn(e){
this.stack[this.stack.length-2].checked='taskListCheckValueChecked'===e.type
}var qn=function(e,t,n){var r={type:String(e)}
return null!=n||'string'!=typeof t&&!Array.isArray(t)?Object.assign(r,t):n=t,Array.isArray(n)?r.children=n:null!=n&&(r.value=String(n)),
r}
const Xn={}.hasOwnProperty
function $n(e,t){const n=t.data||{}
return'value'in t&&!(Xn.call(n,'hName')||Xn.call(n,'hProperties')||Xn.call(n,'hChildren'))?e.augment(t,qn('text',t.value)):e(t,'div',er(e,t))
}function Zn(e,t,n){const r=t&&t.type
let i
if(!r)throw new Error('Expected node, got `'+t+'`')
return i=Xn.call(e.handlers,r)?e.handlers[r]:e.passThrough&&e.passThrough.includes(r)?Jn:e.unknownHandler,
('function'==typeof i?i:$n)(e,t,n)}function Jn(e,t){
return'children'in t?{...t,children:er(e,t)}:t}function er(e,t){
const n=[]
if('children'in t){const r=t.children
let i=-1
for(;++i<r.length;){const o=Zn(e,r[i],t)
if(o){
if(i&&'break'===r[i-1].type&&(Array.isArray(o)||'text'!==o.type||(o.value=o.value.replace(/^\s+/,'')),
!Array.isArray(o)&&'element'===o.type)){const e=o.children[0]
e&&'text'===e.type&&(e.value=e.value.replace(/^\s+/,''))}
Array.isArray(o)?n.push(...o):n.push(o)}}}return n}
const tr=function(e,t,n,r){
'function'==typeof t&&'function'!=typeof n&&(r=n,n=t,
t=null),ln(e,t,(function(e,t){const r=t[t.length-1]
return n(e,r?r.children.indexOf(e):null,r)}),r)
},nr=ir('start'),rr=ir('end')
function ir(e){return function(t){
const n=t&&t.position&&t.position[e]||{}
return{line:n.line||null,column:n.column||null,
offset:n.offset>-1?n.offset:null}}}const or={}.hasOwnProperty
function sr(e){return String(e||'').toUpperCase()}function ar(e,t){
const n=[]
let r=-1
for(t&&n.push(qn('text','\n'));++r<e.length;)r&&n.push(qn('text','\n')),n.push(e[r])
return t&&e.length>0&&n.push(qn('text','\n')),n}function lr(e,t){
const n=String(t.identifier),r=zt(n.toLowerCase()),i=e.footnoteOrder.indexOf(n)
let o
;-1===i?(e.footnoteOrder.push(n),e.footnoteCounts[n]=1,o=e.footnoteOrder.length):(e.footnoteCounts[n]++,
o=i+1)
const s=e.footnoteCounts[n]
return e(t,'sup',[e(t.position,'a',{href:'#'+e.clobberPrefix+'fn-'+r,
id:e.clobberPrefix+'fnref-'+r+(s>1?'-'+s:''),dataFootnoteRef:!0,
ariaDescribedBy:'footnote-label'},[qn('text',String(o))])])}
function cr(e,t){const n=t.referenceType
let r=']'
if('collapsed'===n?r+='[]':'full'===n&&(r+='['+(t.label||t.identifier)+']'),'imageReference'===t.type)return qn('text','!['+t.alt+r)
const i=er(e,t),o=i[0]
o&&'text'===o.type?o.value='['+o.value:i.unshift(qn('text','['))
const s=i[i.length-1]
return s&&'text'===s.type?s.value+=r:i.push(qn('text',r)),i}
function ur(e){const t=e.spread
return null==t?e.children.length>1:t}function hr(e,t,n){
let r=0,i=e.length
if(t){let t=e.codePointAt(r)
for(;9===t||32===t;)r++,t=e.codePointAt(r)}if(n){
let t=e.codePointAt(i-1)
for(;9===t||32===t;)i--,t=e.codePointAt(i-1)}
return i>r?e.slice(r,i):''}const fr={blockquote:function(e,t){
return e(t,'blockquote',ar(er(e,t),!0))},break:function(e,t){
return[e(t,'br'),qn('text','\n')]},code:function(e,t){
const n=t.value?t.value+'\n':'',r=t.lang&&t.lang.match(/^[^ \t]+(?=[ \t]|$)/),i={}
r&&(i.className=['language-'+r])
const o=e(t,'code',i,[qn('text',n)])
return t.meta&&(o.data={meta:t.meta}),e(t.position,'pre',[o])},
delete:function(e,t){return e(t,'del',er(e,t))},
emphasis:function(e,t){return e(t,'em',er(e,t))},footnoteReference:lr,
footnote:function(e,t){const n=e.footnoteById
let r=1
for(;r in n;)r++
const i=String(r)
return n[i]={type:'footnoteDefinition',identifier:i,children:[{
type:'paragraph',children:t.children}],position:t.position},lr(e,{
type:'footnoteReference',identifier:i,position:t.position})},
heading:function(e,t){return e(t,'h'+t.depth,er(e,t))},
html:function(e,t){
return e.dangerous?e.augment(t,qn('raw',t.value)):null},
imageReference:function(e,t){const n=e.definition(t.identifier)
if(!n)return cr(e,t)
const r={src:zt(n.url||''),alt:t.alt}
return null!==n.title&&void 0!==n.title&&(r.title=n.title),e(t,'img',r)
},image:function(e,t){const n={src:zt(t.url),alt:t.alt}
return null!==t.title&&void 0!==t.title&&(n.title=t.title),e(t,'img',n)
},inlineCode:function(e,t){
return e(t,'code',[qn('text',t.value.replace(/\r?\n|\r/g,' '))])},
linkReference:function(e,t){const n=e.definition(t.identifier)
if(!n)return cr(e,t)
const r={href:zt(n.url||'')}
return null!==n.title&&void 0!==n.title&&(r.title=n.title),e(t,'a',r,er(e,t))
},link:function(e,t){const n={href:zt(t.url)}
return null!==t.title&&void 0!==t.title&&(n.title=t.title),e(t,'a',n,er(e,t))
},listItem:function(e,t,n){const r=er(e,t),i=n?function(e){
let t=e.spread
const n=e.children
let r=-1
for(;!t&&++r<n.length;)t=ur(n[r])
return Boolean(t)}(n):ur(t),o={},s=[]
if('boolean'==typeof t.checked){let n
r[0]&&'element'===r[0].type&&'p'===r[0].tagName?n=r[0]:(n=e(null,'p',[]),r.unshift(n)),
n.children.length>0&&n.children.unshift(qn('text',' ')),
n.children.unshift(e(null,'input',{type:'checkbox',checked:t.checked,
disabled:!0})),o.className=['task-list-item']}let a=-1
for(;++a<r.length;){const e=r[a]
;(i||0!==a||'element'!==e.type||'p'!==e.tagName)&&s.push(qn('text','\n')),
'element'!==e.type||'p'!==e.tagName||i?s.push(e):s.push(...e.children)
}const l=r[r.length-1]
return!l||!i&&'tagName'in l&&'p'===l.tagName||s.push(qn('text','\n')),e(t,'li',o,s)
},list:function(e,t){const n={},r=t.ordered?'ol':'ul',i=er(e,t)
let o=-1
for('number'==typeof t.start&&1!==t.start&&(n.start=t.start);++o<i.length;){
const e=i[o]
if('element'===e.type&&'li'===e.tagName&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes('task-list-item')){
n.className=['contains-task-list']
break}}return e(t,r,n,ar(i,!0))},paragraph:function(e,t){
return e(t,'p',er(e,t))},root:function(e,t){
return e.augment(t,qn('root',ar(er(e,t))))},strong:function(e,t){
return e(t,'strong',er(e,t))},table:function(e,t){const n=t.children
let r=-1
const i=t.align||[],o=[]
for(;++r<n.length;){const s=n[r].children,a=0===r?'th':'td',l=[]
let c=-1
const u=t.align?i.length:s.length
for(;++c<u;){const t=s[c]
l.push(e(t,a,{align:i[c]},t?er(e,t):[]))}o[r]=e(n[r],'tr',ar(l,!0))}
return e(t,'table',ar([e(o[0].position,'thead',ar([o[0]],!0))].concat(o[1]?e({
start:nr(o[1]),end:rr(o[o.length-1])
},'tbody',ar(o.slice(1),!0)):[]),!0))},text:function(e,t){
return e.augment(t,qn('text',function(e){
const t=String(e),n=/\r?\n|\r/g
let r=n.exec(t),i=0
const o=[]
for(;r;)o.push(hr(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t)
return o.push(hr(t.slice(i),i>0,!1)),o.join('')}(String(t.value))))},
thematicBreak:function(e,t){return e(t,'hr')},toml:pr,yaml:pr,
definition:pr,footnoteDefinition:pr}
function pr(){return null}const mr={}.hasOwnProperty
function dr(e,t){const n=t||{},r=n.allowDangerousHtml||!1,i={}
return s.dangerous=r,s.clobberPrefix=void 0===n.clobberPrefix||null===n.clobberPrefix?'user-content-':n.clobberPrefix,
s.footnoteLabel=n.footnoteLabel||'Footnotes',
s.footnoteLabelTagName=n.footnoteLabelTagName||'h2',
s.footnoteLabelProperties=n.footnoteLabelProperties||{
className:['sr-only']
},s.footnoteBackLabel=n.footnoteBackLabel||'Back to content',
s.definition=function(e){const t=Object.create(null)
if(!e||!e.type)throw new Error('mdast-util-definitions expected node')
return tr(e,'definition',(e=>{const n=sr(e.identifier)
n&&!or.call(t,n)&&(t[n]=e)})),function(e){const n=sr(e)
return n&&or.call(t,n)?t[n]:null}
}(e),s.footnoteById=i,s.footnoteOrder=[],s.footnoteCounts={},
s.augment=o,s.handlers={...fr,...n.handlers
},s.unknownHandler=n.unknownHandler,s.passThrough=n.passThrough,
tr(e,'footnoteDefinition',(e=>{
const t=String(e.identifier).toUpperCase()
mr.call(i,t)||(i[t]=e)})),s
function o(e,t){if(e&&'data'in e&&e.data){const n=e.data
n.hName&&('element'!==t.type&&(t={type:'element',tagName:'',
properties:{},children:[]
}),t.tagName=n.hName),'element'===t.type&&n.hProperties&&(t.properties={
...t.properties,...n.hProperties
}),'children'in t&&t.children&&n.hChildren&&(t.children=n.hChildren)}
if(e){const r='type'in e?e:{position:e}
;(n=r)&&n.position&&n.position.start&&n.position.start.line&&n.position.start.column&&n.position.end&&n.position.end.line&&n.position.end.column&&(t.position={
start:nr(r),end:rr(r)})}var n
return t}function s(e,t,n,r){return Array.isArray(n)&&(r=n,n={}),o(e,{
type:'element',tagName:t,properties:n||{},children:r||[]})}}
function Tr(e,t){const n=dr(e,t),r=Zn(n,e,null),i=function(e){let t=-1
const n=[]
for(;++t<e.footnoteOrder.length;){
const r=e.footnoteById[e.footnoteOrder[t].toUpperCase()]
if(!r)continue
const i=er(e,r),o=String(r.identifier),s=zt(o.toLowerCase())
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
id:e.clobberPrefix+'fn-'+s},children:ar(i,!0)}
r.position&&(u.position=r.position),n.push(u)}
return 0===n.length?null:{type:'element',tagName:'section',
properties:{dataFootnotes:!0,className:['footnotes']},children:[{
type:'element',tagName:e.footnoteLabelTagName,properties:{
...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
id:'footnote-label'},children:[qn('text',e.footnoteLabel)]},{
type:'text',value:'\n'},{type:'element',tagName:'ol',properties:{},
children:ar(n,!0)},{type:'text',value:'\n'}]}}(n)
return i&&r.children.push(qn('text','\n'),i),Array.isArray(r)?{
type:'root',children:r}:r}var Er=function(e,t){
return e&&'run'in e?function(e,t){return(n,r,i)=>{
e.run(Tr(n,t),r,(e=>{i(e)}))}}(e,t):function(e){return t=>Tr(t,e)
}(e||t)}
var gr={}
const _r=[65534,65535,131070,131071,196606,196607,262142,262143,327678,327679,393214,393215,458750,458751,524286,524287,589822,589823,655358,655359,720894,720895,786430,786431,851966,851967,917502,917503,983038,983039,1048574,1048575,1114110,1114111]
gr.REPLACEMENT_CHARACTER='�',gr.CODE_POINTS={EOF:-1,NULL:0,
TABULATION:9,CARRIAGE_RETURN:13,LINE_FEED:10,FORM_FEED:12,SPACE:32,
EXCLAMATION_MARK:33,QUOTATION_MARK:34,NUMBER_SIGN:35,AMPERSAND:38,
APOSTROPHE:39,HYPHEN_MINUS:45,SOLIDUS:47,DIGIT_0:48,DIGIT_9:57,
SEMICOLON:59,LESS_THAN_SIGN:60,EQUALS_SIGN:61,GREATER_THAN_SIGN:62,
QUESTION_MARK:63,LATIN_CAPITAL_A:65,LATIN_CAPITAL_F:70,
LATIN_CAPITAL_X:88,LATIN_CAPITAL_Z:90,RIGHT_SQUARE_BRACKET:93,
GRAVE_ACCENT:96,LATIN_SMALL_A:97,LATIN_SMALL_F:102,LATIN_SMALL_X:120,
LATIN_SMALL_Z:122,REPLACEMENT_CHARACTER:65533
},gr.CODE_POINT_SEQUENCES={DASH_DASH_STRING:[45,45],
DOCTYPE_STRING:[68,79,67,84,89,80,69],
CDATA_START_STRING:[91,67,68,65,84,65,91],
SCRIPT_STRING:[115,99,114,105,112,116],
PUBLIC_STRING:[80,85,66,76,73,67],SYSTEM_STRING:[83,89,83,84,69,77]
},gr.isSurrogate=function(e){return e>=55296&&e<=57343
},gr.isSurrogatePair=function(e){return e>=56320&&e<=57343
},gr.getSurrogatePairCodePoint=function(e,t){
return 1024*(e-55296)+9216+t},gr.isControlCodePoint=function(e){
return 32!==e&&10!==e&&13!==e&&9!==e&&12!==e&&e>=1&&e<=31||e>=127&&e<=159
},gr.isUndefinedCodePoint=function(e){
return e>=64976&&e<=65007||_r.indexOf(e)>-1}
var Ar={
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
const Cr=gr,Nr=Ar,kr=Cr.CODE_POINTS
var Sr=class{constructor(){
this.html=null,this.pos=-1,this.lastGapPos=-1,this.lastCharPos=-1,
this.gapStack=[],
this.skipNextNewLine=!1,this.lastChunkWritten=!1,this.endOfChunkHit=!1,
this.bufferWaterline=65536}_err(){}_addGap(){
this.gapStack.push(this.lastGapPos),this.lastGapPos=this.pos}
_processSurrogate(e){if(this.pos!==this.lastCharPos){
const t=this.html.charCodeAt(this.pos+1)
if(Cr.isSurrogatePair(t))return this.pos++,this._addGap(),Cr.getSurrogatePairCodePoint(e,t)
}else if(!this.lastChunkWritten)return this.endOfChunkHit=!0,kr.EOF
return this._err(Nr.surrogateInInputStream),e}dropParsedChunk(){
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
kr.EOF
let e=this.html.charCodeAt(this.pos)
if(this.skipNextNewLine&&e===kr.LINE_FEED)return this.skipNextNewLine=!1,this._addGap(),
this.advance()
if(e===kr.CARRIAGE_RETURN)return this.skipNextNewLine=!0,kr.LINE_FEED
this.skipNextNewLine=!1,Cr.isSurrogate(e)&&(e=this._processSurrogate(e))
return e>31&&e<127||e===kr.LINE_FEED||e===kr.CARRIAGE_RETURN||e>159&&e<64976||this._checkForProblematicCharacters(e),
e}_checkForProblematicCharacters(e){
Cr.isControlCodePoint(e)?this._err(Nr.controlCharacterInInputStream):Cr.isUndefinedCodePoint(e)&&this._err(Nr.noncharacterInInputStream)
}retreat(){
this.pos===this.lastGapPos&&(this.lastGapPos=this.gapStack.pop(),this.pos--),
this.pos--}
},Or=new Uint16Array([4,52,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,106,303,412,810,1432,1701,1796,1987,2114,2360,2420,2484,3170,3251,4140,4393,4575,4610,5106,5512,5728,6117,6274,6315,6345,6427,6516,7002,7910,8733,9323,9870,10170,10631,10893,11318,11386,11467,12773,13092,14474,14922,15448,15542,16419,17666,18166,18611,19004,19095,19298,19397,4,16,69,77,97,98,99,102,103,108,109,110,111,112,114,115,116,117,140,150,158,169,176,194,199,210,216,222,226,242,256,266,283,294,108,105,103,5,198,1,59,148,1,198,80,5,38,1,59,156,1,38,99,117,116,101,5,193,1,59,167,1,193,114,101,118,101,59,1,258,4,2,105,121,182,191,114,99,5,194,1,59,189,1,194,59,1,1040,114,59,3,55349,56580,114,97,118,101,5,192,1,59,208,1,192,112,104,97,59,1,913,97,99,114,59,1,256,100,59,1,10835,4,2,103,112,232,237,111,110,59,1,260,102,59,3,55349,56632,112,108,121,70,117,110,99,116,105,111,110,59,1,8289,105,110,103,5,197,1,59,264,1,197,4,2,99,115,272,277,114,59,3,55349,56476,105,103,110,59,1,8788,105,108,100,101,5,195,1,59,292,1,195,109,108,5,196,1,59,301,1,196,4,8,97,99,101,102,111,114,115,117,321,350,354,383,388,394,400,405,4,2,99,114,327,336,107,115,108,97,115,104,59,1,8726,4,2,118,119,342,345,59,1,10983,101,100,59,1,8966,121,59,1,1041,4,3,99,114,116,362,369,379,97,117,115,101,59,1,8757,110,111,117,108,108,105,115,59,1,8492,97,59,1,914,114,59,3,55349,56581,112,102,59,3,55349,56633,101,118,101,59,1,728,99,114,59,1,8492,109,112,101,113,59,1,8782,4,14,72,79,97,99,100,101,102,104,105,108,111,114,115,117,442,447,456,504,542,547,569,573,577,616,678,784,790,796,99,121,59,1,1063,80,89,5,169,1,59,454,1,169,4,3,99,112,121,464,470,497,117,116,101,59,1,262,4,2,59,105,476,478,1,8914,116,97,108,68,105,102,102,101,114,101,110,116,105,97,108,68,59,1,8517,108,101,121,115,59,1,8493,4,4,97,101,105,111,514,520,530,535,114,111,110,59,1,268,100,105,108,5,199,1,59,528,1,199,114,99,59,1,264,110,105,110,116,59,1,8752,111,116,59,1,266,4,2,100,110,553,560,105,108,108,97,59,1,184,116,101,114,68,111,116,59,1,183,114,59,1,8493,105,59,1,935,114,99,108,101,4,4,68,77,80,84,591,596,603,609,111,116,59,1,8857,105,110,117,115,59,1,8854,108,117,115,59,1,8853,105,109,101,115,59,1,8855,111,4,2,99,115,623,646,107,119,105,115,101,67,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8754,101,67,117,114,108,121,4,2,68,81,658,671,111,117,98,108,101,81,117,111,116,101,59,1,8221,117,111,116,101,59,1,8217,4,4,108,110,112,117,688,701,736,753,111,110,4,2,59,101,696,698,1,8759,59,1,10868,4,3,103,105,116,709,717,722,114,117,101,110,116,59,1,8801,110,116,59,1,8751,111,117,114,73,110,116,101,103,114,97,108,59,1,8750,4,2,102,114,742,745,59,1,8450,111,100,117,99,116,59,1,8720,110,116,101,114,67,108,111,99,107,119,105,115,101,67,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8755,111,115,115,59,1,10799,99,114,59,3,55349,56478,112,4,2,59,67,803,805,1,8915,97,112,59,1,8781,4,11,68,74,83,90,97,99,101,102,105,111,115,834,850,855,860,865,888,903,916,921,1011,1415,4,2,59,111,840,842,1,8517,116,114,97,104,100,59,1,10513,99,121,59,1,1026,99,121,59,1,1029,99,121,59,1,1039,4,3,103,114,115,873,879,883,103,101,114,59,1,8225,114,59,1,8609,104,118,59,1,10980,4,2,97,121,894,900,114,111,110,59,1,270,59,1,1044,108,4,2,59,116,910,912,1,8711,97,59,1,916,114,59,3,55349,56583,4,2,97,102,927,998,4,2,99,109,933,992,114,105,116,105,99,97,108,4,4,65,68,71,84,950,957,978,985,99,117,116,101,59,1,180,111,4,2,116,117,964,967,59,1,729,98,108,101,65,99,117,116,101,59,1,733,114,97,118,101,59,1,96,105,108,100,101,59,1,732,111,110,100,59,1,8900,102,101,114,101,110,116,105,97,108,68,59,1,8518,4,4,112,116,117,119,1021,1026,1048,1249,102,59,3,55349,56635,4,3,59,68,69,1034,1036,1041,1,168,111,116,59,1,8412,113,117,97,108,59,1,8784,98,108,101,4,6,67,68,76,82,85,86,1065,1082,1101,1189,1211,1236,111,110,116,111,117,114,73,110,116,101,103,114,97,108,59,1,8751,111,4,2,116,119,1089,1092,59,1,168,110,65,114,114,111,119,59,1,8659,4,2,101,111,1107,1141,102,116,4,3,65,82,84,1117,1124,1136,114,114,111,119,59,1,8656,105,103,104,116,65,114,114,111,119,59,1,8660,101,101,59,1,10980,110,103,4,2,76,82,1149,1177,101,102,116,4,2,65,82,1158,1165,114,114,111,119,59,1,10232,105,103,104,116,65,114,114,111,119,59,1,10234,105,103,104,116,65,114,114,111,119,59,1,10233,105,103,104,116,4,2,65,84,1199,1206,114,114,111,119,59,1,8658,101,101,59,1,8872,112,4,2,65,68,1218,1225,114,114,111,119,59,1,8657,111,119,110,65,114,114,111,119,59,1,8661,101,114,116,105,99,97,108,66,97,114,59,1,8741,110,4,6,65,66,76,82,84,97,1264,1292,1299,1352,1391,1408,114,114,111,119,4,3,59,66,85,1276,1278,1283,1,8595,97,114,59,1,10515,112,65,114,114,111,119,59,1,8693,114,101,118,101,59,1,785,101,102,116,4,3,82,84,86,1310,1323,1334,105,103,104,116,86,101,99,116,111,114,59,1,10576,101,101,86,101,99,116,111,114,59,1,10590,101,99,116,111,114,4,2,59,66,1345,1347,1,8637,97,114,59,1,10582,105,103,104,116,4,2,84,86,1362,1373,101,101,86,101,99,116,111,114,59,1,10591,101,99,116,111,114,4,2,59,66,1384,1386,1,8641,97,114,59,1,10583,101,101,4,2,59,65,1399,1401,1,8868,114,114,111,119,59,1,8615,114,114,111,119,59,1,8659,4,2,99,116,1421,1426,114,59,3,55349,56479,114,111,107,59,1,272,4,16,78,84,97,99,100,102,103,108,109,111,112,113,115,116,117,120,1466,1470,1478,1489,1515,1520,1525,1536,1544,1593,1609,1617,1650,1664,1668,1677,71,59,1,330,72,5,208,1,59,1476,1,208,99,117,116,101,5,201,1,59,1487,1,201,4,3,97,105,121,1497,1503,1512,114,111,110,59,1,282,114,99,5,202,1,59,1510,1,202,59,1,1069,111,116,59,1,278,114,59,3,55349,56584,114,97,118,101,5,200,1,59,1534,1,200,101,109,101,110,116,59,1,8712,4,2,97,112,1550,1555,99,114,59,1,274,116,121,4,2,83,86,1563,1576,109,97,108,108,83,113,117,97,114,101,59,1,9723,101,114,121,83,109,97,108,108,83,113,117,97,114,101,59,1,9643,4,2,103,112,1599,1604,111,110,59,1,280,102,59,3,55349,56636,115,105,108,111,110,59,1,917,117,4,2,97,105,1624,1640,108,4,2,59,84,1631,1633,1,10869,105,108,100,101,59,1,8770,108,105,98,114,105,117,109,59,1,8652,4,2,99,105,1656,1660,114,59,1,8496,109,59,1,10867,97,59,1,919,109,108,5,203,1,59,1675,1,203,4,2,105,112,1683,1689,115,116,115,59,1,8707,111,110,101,110,116,105,97,108,69,59,1,8519,4,5,99,102,105,111,115,1713,1717,1722,1762,1791,121,59,1,1060,114,59,3,55349,56585,108,108,101,100,4,2,83,86,1732,1745,109,97,108,108,83,113,117,97,114,101,59,1,9724,101,114,121,83,109,97,108,108,83,113,117,97,114,101,59,1,9642,4,3,112,114,117,1770,1775,1781,102,59,3,55349,56637,65,108,108,59,1,8704,114,105,101,114,116,114,102,59,1,8497,99,114,59,1,8497,4,12,74,84,97,98,99,100,102,103,111,114,115,116,1822,1827,1834,1848,1855,1877,1882,1887,1890,1896,1978,1984,99,121,59,1,1027,5,62,1,59,1832,1,62,109,109,97,4,2,59,100,1843,1845,1,915,59,1,988,114,101,118,101,59,1,286,4,3,101,105,121,1863,1869,1874,100,105,108,59,1,290,114,99,59,1,284,59,1,1043,111,116,59,1,288,114,59,3,55349,56586,59,1,8921,112,102,59,3,55349,56638,101,97,116,101,114,4,6,69,70,71,76,83,84,1915,1933,1944,1953,1959,1971,113,117,97,108,4,2,59,76,1925,1927,1,8805,101,115,115,59,1,8923,117,108,108,69,113,117,97,108,59,1,8807,114,101,97,116,101,114,59,1,10914,101,115,115,59,1,8823,108,97,110,116,69,113,117,97,108,59,1,10878,105,108,100,101,59,1,8819,99,114,59,3,55349,56482,59,1,8811,4,8,65,97,99,102,105,111,115,117,2005,2012,2026,2032,2036,2049,2073,2089,82,68,99,121,59,1,1066,4,2,99,116,2018,2023,101,107,59,1,711,59,1,94,105,114,99,59,1,292,114,59,1,8460,108,98,101,114,116,83,112,97,99,101,59,1,8459,4,2,112,114,2055,2059,102,59,1,8461,105,122,111,110,116,97,108,76,105,110,101,59,1,9472,4,2,99,116,2079,2083,114,59,1,8459,114,111,107,59,1,294,109,112,4,2,68,69,2097,2107,111,119,110,72,117,109,112,59,1,8782,113,117,97,108,59,1,8783,4,14,69,74,79,97,99,100,102,103,109,110,111,115,116,117,2144,2149,2155,2160,2171,2189,2194,2198,2209,2245,2307,2329,2334,2341,99,121,59,1,1045,108,105,103,59,1,306,99,121,59,1,1025,99,117,116,101,5,205,1,59,2169,1,205,4,2,105,121,2177,2186,114,99,5,206,1,59,2184,1,206,59,1,1048,111,116,59,1,304,114,59,1,8465,114,97,118,101,5,204,1,59,2207,1,204,4,3,59,97,112,2217,2219,2238,1,8465,4,2,99,103,2225,2229,114,59,1,298,105,110,97,114,121,73,59,1,8520,108,105,101,115,59,1,8658,4,2,116,118,2251,2281,4,2,59,101,2257,2259,1,8748,4,2,103,114,2265,2271,114,97,108,59,1,8747,115,101,99,116,105,111,110,59,1,8898,105,115,105,98,108,101,4,2,67,84,2293,2300,111,109,109,97,59,1,8291,105,109,101,115,59,1,8290,4,3,103,112,116,2315,2320,2325,111,110,59,1,302,102,59,3,55349,56640,97,59,1,921,99,114,59,1,8464,105,108,100,101,59,1,296,4,2,107,109,2347,2352,99,121,59,1,1030,108,5,207,1,59,2358,1,207,4,5,99,102,111,115,117,2372,2386,2391,2397,2414,4,2,105,121,2378,2383,114,99,59,1,308,59,1,1049,114,59,3,55349,56589,112,102,59,3,55349,56641,4,2,99,101,2403,2408,114,59,3,55349,56485,114,99,121,59,1,1032,107,99,121,59,1,1028,4,7,72,74,97,99,102,111,115,2436,2441,2446,2452,2467,2472,2478,99,121,59,1,1061,99,121,59,1,1036,112,112,97,59,1,922,4,2,101,121,2458,2464,100,105,108,59,1,310,59,1,1050,114,59,3,55349,56590,112,102,59,3,55349,56642,99,114,59,3,55349,56486,4,11,74,84,97,99,101,102,108,109,111,115,116,2508,2513,2520,2562,2585,2981,2986,3004,3011,3146,3167,99,121,59,1,1033,5,60,1,59,2518,1,60,4,5,99,109,110,112,114,2532,2538,2544,2548,2558,117,116,101,59,1,313,98,100,97,59,1,923,103,59,1,10218,108,97,99,101,116,114,102,59,1,8466,114,59,1,8606,4,3,97,101,121,2570,2576,2582,114,111,110,59,1,317,100,105,108,59,1,315,59,1,1051,4,2,102,115,2591,2907,116,4,10,65,67,68,70,82,84,85,86,97,114,2614,2663,2672,2728,2735,2760,2820,2870,2888,2895,4,2,110,114,2620,2633,103,108,101,66,114,97,99,107,101,116,59,1,10216,114,111,119,4,3,59,66,82,2644,2646,2651,1,8592,97,114,59,1,8676,105,103,104,116,65,114,114,111,119,59,1,8646,101,105,108,105,110,103,59,1,8968,111,4,2,117,119,2679,2692,98,108,101,66,114,97,99,107,101,116,59,1,10214,110,4,2,84,86,2699,2710,101,101,86,101,99,116,111,114,59,1,10593,101,99,116,111,114,4,2,59,66,2721,2723,1,8643,97,114,59,1,10585,108,111,111,114,59,1,8970,105,103,104,116,4,2,65,86,2745,2752,114,114,111,119,59,1,8596,101,99,116,111,114,59,1,10574,4,2,101,114,2766,2792,101,4,3,59,65,86,2775,2777,2784,1,8867,114,114,111,119,59,1,8612,101,99,116,111,114,59,1,10586,105,97,110,103,108,101,4,3,59,66,69,2806,2808,2813,1,8882,97,114,59,1,10703,113,117,97,108,59,1,8884,112,4,3,68,84,86,2829,2841,2852,111,119,110,86,101,99,116,111,114,59,1,10577,101,101,86,101,99,116,111,114,59,1,10592,101,99,116,111,114,4,2,59,66,2863,2865,1,8639,97,114,59,1,10584,101,99,116,111,114,4,2,59,66,2881,2883,1,8636,97,114,59,1,10578,114,114,111,119,59,1,8656,105,103,104,116,97,114,114,111,119,59,1,8660,115,4,6,69,70,71,76,83,84,2922,2936,2947,2956,2962,2974,113,117,97,108,71,114,101,97,116,101,114,59,1,8922,117,108,108,69,113,117,97,108,59,1,8806,114,101,97,116,101,114,59,1,8822,101,115,115,59,1,10913,108,97,110,116,69,113,117,97,108,59,1,10877,105,108,100,101,59,1,8818,114,59,3,55349,56591,4,2,59,101,2992,2994,1,8920,102,116,97,114,114,111,119,59,1,8666,105,100,111,116,59,1,319,4,3,110,112,119,3019,3110,3115,103,4,4,76,82,108,114,3030,3058,3070,3098,101,102,116,4,2,65,82,3039,3046,114,114,111,119,59,1,10229,105,103,104,116,65,114,114,111,119,59,1,10231,105,103,104,116,65,114,114,111,119,59,1,10230,101,102,116,4,2,97,114,3079,3086,114,114,111,119,59,1,10232,105,103,104,116,97,114,114,111,119,59,1,10234,105,103,104,116,97,114,114,111,119,59,1,10233,102,59,3,55349,56643,101,114,4,2,76,82,3123,3134,101,102,116,65,114,114,111,119,59,1,8601,105,103,104,116,65,114,114,111,119,59,1,8600,4,3,99,104,116,3154,3158,3161,114,59,1,8466,59,1,8624,114,111,107,59,1,321,59,1,8810,4,8,97,99,101,102,105,111,115,117,3188,3192,3196,3222,3227,3237,3243,3248,112,59,1,10501,121,59,1,1052,4,2,100,108,3202,3213,105,117,109,83,112,97,99,101,59,1,8287,108,105,110,116,114,102,59,1,8499,114,59,3,55349,56592,110,117,115,80,108,117,115,59,1,8723,112,102,59,3,55349,56644,99,114,59,1,8499,59,1,924,4,9,74,97,99,101,102,111,115,116,117,3271,3276,3283,3306,3422,3427,4120,4126,4137,99,121,59,1,1034,99,117,116,101,59,1,323,4,3,97,101,121,3291,3297,3303,114,111,110,59,1,327,100,105,108,59,1,325,59,1,1053,4,3,103,115,119,3314,3380,3415,97,116,105,118,101,4,3,77,84,86,3327,3340,3365,101,100,105,117,109,83,112,97,99,101,59,1,8203,104,105,4,2,99,110,3348,3357,107,83,112,97,99,101,59,1,8203,83,112,97,99,101,59,1,8203,101,114,121,84,104,105,110,83,112,97,99,101,59,1,8203,116,101,100,4,2,71,76,3389,3405,114,101,97,116,101,114,71,114,101,97,116,101,114,59,1,8811,101,115,115,76,101,115,115,59,1,8810,76,105,110,101,59,1,10,114,59,3,55349,56593,4,4,66,110,112,116,3437,3444,3460,3464,114,101,97,107,59,1,8288,66,114,101,97,107,105,110,103,83,112,97,99,101,59,1,160,102,59,1,8469,4,13,59,67,68,69,71,72,76,78,80,82,83,84,86,3492,3494,3517,3536,3578,3657,3685,3784,3823,3860,3915,4066,4107,1,10988,4,2,111,117,3500,3510,110,103,114,117,101,110,116,59,1,8802,112,67,97,112,59,1,8813,111,117,98,108,101,86,101,114,116,105,99,97,108,66,97,114,59,1,8742,4,3,108,113,120,3544,3552,3571,101,109,101,110,116,59,1,8713,117,97,108,4,2,59,84,3561,3563,1,8800,105,108,100,101,59,3,8770,824,105,115,116,115,59,1,8708,114,101,97,116,101,114,4,7,59,69,70,71,76,83,84,3600,3602,3609,3621,3631,3637,3650,1,8815,113,117,97,108,59,1,8817,117,108,108,69,113,117,97,108,59,3,8807,824,114,101,97,116,101,114,59,3,8811,824,101,115,115,59,1,8825,108,97,110,116,69,113,117,97,108,59,3,10878,824,105,108,100,101,59,1,8821,117,109,112,4,2,68,69,3666,3677,111,119,110,72,117,109,112,59,3,8782,824,113,117,97,108,59,3,8783,824,101,4,2,102,115,3692,3724,116,84,114,105,97,110,103,108,101,4,3,59,66,69,3709,3711,3717,1,8938,97,114,59,3,10703,824,113,117,97,108,59,1,8940,115,4,6,59,69,71,76,83,84,3739,3741,3748,3757,3764,3777,1,8814,113,117,97,108,59,1,8816,114,101,97,116,101,114,59,1,8824,101,115,115,59,3,8810,824,108,97,110,116,69,113,117,97,108,59,3,10877,824,105,108,100,101,59,1,8820,101,115,116,101,100,4,2,71,76,3795,3812,114,101,97,116,101,114,71,114,101,97,116,101,114,59,3,10914,824,101,115,115,76,101,115,115,59,3,10913,824,114,101,99,101,100,101,115,4,3,59,69,83,3838,3840,3848,1,8832,113,117,97,108,59,3,10927,824,108,97,110,116,69,113,117,97,108,59,1,8928,4,2,101,105,3866,3881,118,101,114,115,101,69,108,101,109,101,110,116,59,1,8716,103,104,116,84,114,105,97,110,103,108,101,4,3,59,66,69,3900,3902,3908,1,8939,97,114,59,3,10704,824,113,117,97,108,59,1,8941,4,2,113,117,3921,3973,117,97,114,101,83,117,4,2,98,112,3933,3952,115,101,116,4,2,59,69,3942,3945,3,8847,824,113,117,97,108,59,1,8930,101,114,115,101,116,4,2,59,69,3963,3966,3,8848,824,113,117,97,108,59,1,8931,4,3,98,99,112,3981,4e3,4045,115,101,116,4,2,59,69,3990,3993,3,8834,8402,113,117,97,108,59,1,8840,99,101,101,100,115,4,4,59,69,83,84,4015,4017,4025,4037,1,8833,113,117,97,108,59,3,10928,824,108,97,110,116,69,113,117,97,108,59,1,8929,105,108,100,101,59,3,8831,824,101,114,115,101,116,4,2,59,69,4056,4059,3,8835,8402,113,117,97,108,59,1,8841,105,108,100,101,4,4,59,69,70,84,4080,4082,4089,4100,1,8769,113,117,97,108,59,1,8772,117,108,108,69,113,117,97,108,59,1,8775,105,108,100,101,59,1,8777,101,114,116,105,99,97,108,66,97,114,59,1,8740,99,114,59,3,55349,56489,105,108,100,101,5,209,1,59,4135,1,209,59,1,925,4,14,69,97,99,100,102,103,109,111,112,114,115,116,117,118,4170,4176,4187,4205,4212,4217,4228,4253,4259,4292,4295,4316,4337,4346,108,105,103,59,1,338,99,117,116,101,5,211,1,59,4185,1,211,4,2,105,121,4193,4202,114,99,5,212,1,59,4200,1,212,59,1,1054,98,108,97,99,59,1,336,114,59,3,55349,56594,114,97,118,101,5,210,1,59,4226,1,210,4,3,97,101,105,4236,4241,4246,99,114,59,1,332,103,97,59,1,937,99,114,111,110,59,1,927,112,102,59,3,55349,56646,101,110,67,117,114,108,121,4,2,68,81,4272,4285,111,117,98,108,101,81,117,111,116,101,59,1,8220,117,111,116,101,59,1,8216,59,1,10836,4,2,99,108,4301,4306,114,59,3,55349,56490,97,115,104,5,216,1,59,4314,1,216,105,4,2,108,109,4323,4332,100,101,5,213,1,59,4330,1,213,101,115,59,1,10807,109,108,5,214,1,59,4344,1,214,101,114,4,2,66,80,4354,4380,4,2,97,114,4360,4364,114,59,1,8254,97,99,4,2,101,107,4372,4375,59,1,9182,101,116,59,1,9140,97,114,101,110,116,104,101,115,105,115,59,1,9180,4,9,97,99,102,104,105,108,111,114,115,4413,4422,4426,4431,4435,4438,4448,4471,4561,114,116,105,97,108,68,59,1,8706,121,59,1,1055,114,59,3,55349,56595,105,59,1,934,59,1,928,117,115,77,105,110,117,115,59,1,177,4,2,105,112,4454,4467,110,99,97,114,101,112,108,97,110,101,59,1,8460,102,59,1,8473,4,4,59,101,105,111,4481,4483,4526,4531,1,10939,99,101,100,101,115,4,4,59,69,83,84,4498,4500,4507,4519,1,8826,113,117,97,108,59,1,10927,108,97,110,116,69,113,117,97,108,59,1,8828,105,108,100,101,59,1,8830,109,101,59,1,8243,4,2,100,112,4537,4543,117,99,116,59,1,8719,111,114,116,105,111,110,4,2,59,97,4555,4557,1,8759,108,59,1,8733,4,2,99,105,4567,4572,114,59,3,55349,56491,59,1,936,4,4,85,102,111,115,4585,4594,4599,4604,79,84,5,34,1,59,4592,1,34,114,59,3,55349,56596,112,102,59,1,8474,99,114,59,3,55349,56492,4,12,66,69,97,99,101,102,104,105,111,114,115,117,4636,4642,4650,4681,4704,4763,4767,4771,5047,5069,5081,5094,97,114,114,59,1,10512,71,5,174,1,59,4648,1,174,4,3,99,110,114,4658,4664,4668,117,116,101,59,1,340,103,59,1,10219,114,4,2,59,116,4675,4677,1,8608,108,59,1,10518,4,3,97,101,121,4689,4695,4701,114,111,110,59,1,344,100,105,108,59,1,342,59,1,1056,4,2,59,118,4710,4712,1,8476,101,114,115,101,4,2,69,85,4722,4748,4,2,108,113,4728,4736,101,109,101,110,116,59,1,8715,117,105,108,105,98,114,105,117,109,59,1,8651,112,69,113,117,105,108,105,98,114,105,117,109,59,1,10607,114,59,1,8476,111,59,1,929,103,104,116,4,8,65,67,68,70,84,85,86,97,4792,4840,4849,4905,4912,4972,5022,5040,4,2,110,114,4798,4811,103,108,101,66,114,97,99,107,101,116,59,1,10217,114,111,119,4,3,59,66,76,4822,4824,4829,1,8594,97,114,59,1,8677,101,102,116,65,114,114,111,119,59,1,8644,101,105,108,105,110,103,59,1,8969,111,4,2,117,119,4856,4869,98,108,101,66,114,97,99,107,101,116,59,1,10215,110,4,2,84,86,4876,4887,101,101,86,101,99,116,111,114,59,1,10589,101,99,116,111,114,4,2,59,66,4898,4900,1,8642,97,114,59,1,10581,108,111,111,114,59,1,8971,4,2,101,114,4918,4944,101,4,3,59,65,86,4927,4929,4936,1,8866,114,114,111,119,59,1,8614,101,99,116,111,114,59,1,10587,105,97,110,103,108,101,4,3,59,66,69,4958,4960,4965,1,8883,97,114,59,1,10704,113,117,97,108,59,1,8885,112,4,3,68,84,86,4981,4993,5004,111,119,110,86,101,99,116,111,114,59,1,10575,101,101,86,101,99,116,111,114,59,1,10588,101,99,116,111,114,4,2,59,66,5015,5017,1,8638,97,114,59,1,10580,101,99,116,111,114,4,2,59,66,5033,5035,1,8640,97,114,59,1,10579,114,114,111,119,59,1,8658,4,2,112,117,5053,5057,102,59,1,8477,110,100,73,109,112,108,105,101,115,59,1,10608,105,103,104,116,97,114,114,111,119,59,1,8667,4,2,99,104,5087,5091,114,59,1,8475,59,1,8625,108,101,68,101,108,97,121,101,100,59,1,10740,4,13,72,79,97,99,102,104,105,109,111,113,115,116,117,5134,5150,5157,5164,5198,5203,5259,5265,5277,5283,5374,5380,5385,4,2,67,99,5140,5146,72,99,121,59,1,1065,121,59,1,1064,70,84,99,121,59,1,1068,99,117,116,101,59,1,346,4,5,59,97,101,105,121,5176,5178,5184,5190,5195,1,10940,114,111,110,59,1,352,100,105,108,59,1,350,114,99,59,1,348,59,1,1057,114,59,3,55349,56598,111,114,116,4,4,68,76,82,85,5216,5227,5238,5250,111,119,110,65,114,114,111,119,59,1,8595,101,102,116,65,114,114,111,119,59,1,8592,105,103,104,116,65,114,114,111,119,59,1,8594,112,65,114,114,111,119,59,1,8593,103,109,97,59,1,931,97,108,108,67,105,114,99,108,101,59,1,8728,112,102,59,3,55349,56650,4,2,114,117,5289,5293,116,59,1,8730,97,114,101,4,4,59,73,83,85,5306,5308,5322,5367,1,9633,110,116,101,114,115,101,99,116,105,111,110,59,1,8851,117,4,2,98,112,5329,5347,115,101,116,4,2,59,69,5338,5340,1,8847,113,117,97,108,59,1,8849,101,114,115,101,116,4,2,59,69,5358,5360,1,8848,113,117,97,108,59,1,8850,110,105,111,110,59,1,8852,99,114,59,3,55349,56494,97,114,59,1,8902,4,4,98,99,109,112,5395,5420,5475,5478,4,2,59,115,5401,5403,1,8912,101,116,4,2,59,69,5411,5413,1,8912,113,117,97,108,59,1,8838,4,2,99,104,5426,5468,101,101,100,115,4,4,59,69,83,84,5440,5442,5449,5461,1,8827,113,117,97,108,59,1,10928,108,97,110,116,69,113,117,97,108,59,1,8829,105,108,100,101,59,1,8831,84,104,97,116,59,1,8715,59,1,8721,4,3,59,101,115,5486,5488,5507,1,8913,114,115,101,116,4,2,59,69,5498,5500,1,8835,113,117,97,108,59,1,8839,101,116,59,1,8913,4,11,72,82,83,97,99,102,104,105,111,114,115,5536,5546,5552,5567,5579,5602,5607,5655,5695,5701,5711,79,82,78,5,222,1,59,5544,1,222,65,68,69,59,1,8482,4,2,72,99,5558,5563,99,121,59,1,1035,121,59,1,1062,4,2,98,117,5573,5576,59,1,9,59,1,932,4,3,97,101,121,5587,5593,5599,114,111,110,59,1,356,100,105,108,59,1,354,59,1,1058,114,59,3,55349,56599,4,2,101,105,5613,5631,4,2,114,116,5619,5627,101,102,111,114,101,59,1,8756,97,59,1,920,4,2,99,110,5637,5647,107,83,112,97,99,101,59,3,8287,8202,83,112,97,99,101,59,1,8201,108,100,101,4,4,59,69,70,84,5668,5670,5677,5688,1,8764,113,117,97,108,59,1,8771,117,108,108,69,113,117,97,108,59,1,8773,105,108,100,101,59,1,8776,112,102,59,3,55349,56651,105,112,108,101,68,111,116,59,1,8411,4,2,99,116,5717,5722,114,59,3,55349,56495,114,111,107,59,1,358,4,14,97,98,99,100,102,103,109,110,111,112,114,115,116,117,5758,5789,5805,5823,5830,5835,5846,5852,5921,5937,6089,6095,6101,6108,4,2,99,114,5764,5774,117,116,101,5,218,1,59,5772,1,218,114,4,2,59,111,5781,5783,1,8607,99,105,114,59,1,10569,114,4,2,99,101,5796,5800,121,59,1,1038,118,101,59,1,364,4,2,105,121,5811,5820,114,99,5,219,1,59,5818,1,219,59,1,1059,98,108,97,99,59,1,368,114,59,3,55349,56600,114,97,118,101,5,217,1,59,5844,1,217,97,99,114,59,1,362,4,2,100,105,5858,5905,101,114,4,2,66,80,5866,5892,4,2,97,114,5872,5876,114,59,1,95,97,99,4,2,101,107,5884,5887,59,1,9183,101,116,59,1,9141,97,114,101,110,116,104,101,115,105,115,59,1,9181,111,110,4,2,59,80,5913,5915,1,8899,108,117,115,59,1,8846,4,2,103,112,5927,5932,111,110,59,1,370,102,59,3,55349,56652,4,8,65,68,69,84,97,100,112,115,5955,5985,5996,6009,6026,6033,6044,6075,114,114,111,119,4,3,59,66,68,5967,5969,5974,1,8593,97,114,59,1,10514,111,119,110,65,114,114,111,119,59,1,8645,111,119,110,65,114,114,111,119,59,1,8597,113,117,105,108,105,98,114,105,117,109,59,1,10606,101,101,4,2,59,65,6017,6019,1,8869,114,114,111,119,59,1,8613,114,114,111,119,59,1,8657,111,119,110,97,114,114,111,119,59,1,8661,101,114,4,2,76,82,6052,6063,101,102,116,65,114,114,111,119,59,1,8598,105,103,104,116,65,114,114,111,119,59,1,8599,105,4,2,59,108,6082,6084,1,978,111,110,59,1,933,105,110,103,59,1,366,99,114,59,3,55349,56496,105,108,100,101,59,1,360,109,108,5,220,1,59,6115,1,220,4,9,68,98,99,100,101,102,111,115,118,6137,6143,6148,6152,6166,6250,6255,6261,6267,97,115,104,59,1,8875,97,114,59,1,10987,121,59,1,1042,97,115,104,4,2,59,108,6161,6163,1,8873,59,1,10982,4,2,101,114,6172,6175,59,1,8897,4,3,98,116,121,6183,6188,6238,97,114,59,1,8214,4,2,59,105,6194,6196,1,8214,99,97,108,4,4,66,76,83,84,6209,6214,6220,6231,97,114,59,1,8739,105,110,101,59,1,124,101,112,97,114,97,116,111,114,59,1,10072,105,108,100,101,59,1,8768,84,104,105,110,83,112,97,99,101,59,1,8202,114,59,3,55349,56601,112,102,59,3,55349,56653,99,114,59,3,55349,56497,100,97,115,104,59,1,8874,4,5,99,101,102,111,115,6286,6292,6298,6303,6309,105,114,99,59,1,372,100,103,101,59,1,8896,114,59,3,55349,56602,112,102,59,3,55349,56654,99,114,59,3,55349,56498,4,4,102,105,111,115,6325,6330,6333,6339,114,59,3,55349,56603,59,1,926,112,102,59,3,55349,56655,99,114,59,3,55349,56499,4,9,65,73,85,97,99,102,111,115,117,6365,6370,6375,6380,6391,6405,6410,6416,6422,99,121,59,1,1071,99,121,59,1,1031,99,121,59,1,1070,99,117,116,101,5,221,1,59,6389,1,221,4,2,105,121,6397,6402,114,99,59,1,374,59,1,1067,114,59,3,55349,56604,112,102,59,3,55349,56656,99,114,59,3,55349,56500,109,108,59,1,376,4,8,72,97,99,100,101,102,111,115,6445,6450,6457,6472,6477,6501,6505,6510,99,121,59,1,1046,99,117,116,101,59,1,377,4,2,97,121,6463,6469,114,111,110,59,1,381,59,1,1047,111,116,59,1,379,4,2,114,116,6483,6497,111,87,105,100,116,104,83,112,97,99,101,59,1,8203,97,59,1,918,114,59,1,8488,112,102,59,1,8484,99,114,59,3,55349,56501,4,16,97,98,99,101,102,103,108,109,110,111,112,114,115,116,117,119,6550,6561,6568,6612,6622,6634,6645,6672,6699,6854,6870,6923,6933,6963,6974,6983,99,117,116,101,5,225,1,59,6559,1,225,114,101,118,101,59,1,259,4,6,59,69,100,105,117,121,6582,6584,6588,6591,6600,6609,1,8766,59,3,8766,819,59,1,8767,114,99,5,226,1,59,6598,1,226,116,101,5,180,1,59,6607,1,180,59,1,1072,108,105,103,5,230,1,59,6620,1,230,4,2,59,114,6628,6630,1,8289,59,3,55349,56606,114,97,118,101,5,224,1,59,6643,1,224,4,2,101,112,6651,6667,4,2,102,112,6657,6663,115,121,109,59,1,8501,104,59,1,8501,104,97,59,1,945,4,2,97,112,6678,6692,4,2,99,108,6684,6688,114,59,1,257,103,59,1,10815,5,38,1,59,6697,1,38,4,2,100,103,6705,6737,4,5,59,97,100,115,118,6717,6719,6724,6727,6734,1,8743,110,100,59,1,10837,59,1,10844,108,111,112,101,59,1,10840,59,1,10842,4,7,59,101,108,109,114,115,122,6753,6755,6758,6762,6814,6835,6848,1,8736,59,1,10660,101,59,1,8736,115,100,4,2,59,97,6770,6772,1,8737,4,8,97,98,99,100,101,102,103,104,6790,6793,6796,6799,6802,6805,6808,6811,59,1,10664,59,1,10665,59,1,10666,59,1,10667,59,1,10668,59,1,10669,59,1,10670,59,1,10671,116,4,2,59,118,6821,6823,1,8735,98,4,2,59,100,6830,6832,1,8894,59,1,10653,4,2,112,116,6841,6845,104,59,1,8738,59,1,197,97,114,114,59,1,9084,4,2,103,112,6860,6865,111,110,59,1,261,102,59,3,55349,56658,4,7,59,69,97,101,105,111,112,6886,6888,6891,6897,6900,6904,6908,1,8776,59,1,10864,99,105,114,59,1,10863,59,1,8778,100,59,1,8779,115,59,1,39,114,111,120,4,2,59,101,6917,6919,1,8776,113,59,1,8778,105,110,103,5,229,1,59,6931,1,229,4,3,99,116,121,6941,6946,6949,114,59,3,55349,56502,59,1,42,109,112,4,2,59,101,6957,6959,1,8776,113,59,1,8781,105,108,100,101,5,227,1,59,6972,1,227,109,108,5,228,1,59,6981,1,228,4,2,99,105,6989,6997,111,110,105,110,116,59,1,8755,110,116,59,1,10769,4,16,78,97,98,99,100,101,102,105,107,108,110,111,112,114,115,117,7036,7041,7119,7135,7149,7155,7219,7224,7347,7354,7463,7489,7786,7793,7814,7866,111,116,59,1,10989,4,2,99,114,7047,7094,107,4,4,99,101,112,115,7058,7064,7073,7080,111,110,103,59,1,8780,112,115,105,108,111,110,59,1,1014,114,105,109,101,59,1,8245,105,109,4,2,59,101,7088,7090,1,8765,113,59,1,8909,4,2,118,119,7100,7105,101,101,59,1,8893,101,100,4,2,59,103,7113,7115,1,8965,101,59,1,8965,114,107,4,2,59,116,7127,7129,1,9141,98,114,107,59,1,9142,4,2,111,121,7141,7146,110,103,59,1,8780,59,1,1073,113,117,111,59,1,8222,4,5,99,109,112,114,116,7167,7181,7188,7193,7199,97,117,115,4,2,59,101,7176,7178,1,8757,59,1,8757,112,116,121,118,59,1,10672,115,105,59,1,1014,110,111,117,59,1,8492,4,3,97,104,119,7207,7210,7213,59,1,946,59,1,8502,101,101,110,59,1,8812,114,59,3,55349,56607,103,4,7,99,111,115,116,117,118,119,7241,7262,7288,7305,7328,7335,7340,4,3,97,105,117,7249,7253,7258,112,59,1,8898,114,99,59,1,9711,112,59,1,8899,4,3,100,112,116,7270,7275,7281,111,116,59,1,10752,108,117,115,59,1,10753,105,109,101,115,59,1,10754,4,2,113,116,7294,7300,99,117,112,59,1,10758,97,114,59,1,9733,114,105,97,110,103,108,101,4,2,100,117,7318,7324,111,119,110,59,1,9661,112,59,1,9651,112,108,117,115,59,1,10756,101,101,59,1,8897,101,100,103,101,59,1,8896,97,114,111,119,59,1,10509,4,3,97,107,111,7362,7436,7458,4,2,99,110,7368,7432,107,4,3,108,115,116,7377,7386,7394,111,122,101,110,103,101,59,1,10731,113,117,97,114,101,59,1,9642,114,105,97,110,103,108,101,4,4,59,100,108,114,7411,7413,7419,7425,1,9652,111,119,110,59,1,9662,101,102,116,59,1,9666,105,103,104,116,59,1,9656,107,59,1,9251,4,2,49,51,7442,7454,4,2,50,52,7448,7451,59,1,9618,59,1,9617,52,59,1,9619,99,107,59,1,9608,4,2,101,111,7469,7485,4,2,59,113,7475,7478,3,61,8421,117,105,118,59,3,8801,8421,116,59,1,8976,4,4,112,116,119,120,7499,7504,7517,7523,102,59,3,55349,56659,4,2,59,116,7510,7512,1,8869,111,109,59,1,8869,116,105,101,59,1,8904,4,12,68,72,85,86,98,100,104,109,112,116,117,118,7549,7571,7597,7619,7655,7660,7682,7708,7715,7721,7728,7750,4,4,76,82,108,114,7559,7562,7565,7568,59,1,9559,59,1,9556,59,1,9558,59,1,9555,4,5,59,68,85,100,117,7583,7585,7588,7591,7594,1,9552,59,1,9574,59,1,9577,59,1,9572,59,1,9575,4,4,76,82,108,114,7607,7610,7613,7616,59,1,9565,59,1,9562,59,1,9564,59,1,9561,4,7,59,72,76,82,104,108,114,7635,7637,7640,7643,7646,7649,7652,1,9553,59,1,9580,59,1,9571,59,1,9568,59,1,9579,59,1,9570,59,1,9567,111,120,59,1,10697,4,4,76,82,108,114,7670,7673,7676,7679,59,1,9557,59,1,9554,59,1,9488,59,1,9484,4,5,59,68,85,100,117,7694,7696,7699,7702,7705,1,9472,59,1,9573,59,1,9576,59,1,9516,59,1,9524,105,110,117,115,59,1,8863,108,117,115,59,1,8862,105,109,101,115,59,1,8864,4,4,76,82,108,114,7738,7741,7744,7747,59,1,9563,59,1,9560,59,1,9496,59,1,9492,4,7,59,72,76,82,104,108,114,7766,7768,7771,7774,7777,7780,7783,1,9474,59,1,9578,59,1,9569,59,1,9566,59,1,9532,59,1,9508,59,1,9500,114,105,109,101,59,1,8245,4,2,101,118,7799,7804,118,101,59,1,728,98,97,114,5,166,1,59,7812,1,166,4,4,99,101,105,111,7824,7829,7834,7846,114,59,3,55349,56503,109,105,59,1,8271,109,4,2,59,101,7841,7843,1,8765,59,1,8909,108,4,3,59,98,104,7855,7857,7860,1,92,59,1,10693,115,117,98,59,1,10184,4,2,108,109,7872,7885,108,4,2,59,101,7879,7881,1,8226,116,59,1,8226,112,4,3,59,69,101,7894,7896,7899,1,8782,59,1,10926,4,2,59,113,7905,7907,1,8783,59,1,8783,4,15,97,99,100,101,102,104,105,108,111,114,115,116,117,119,121,7942,8021,8075,8080,8121,8126,8157,8279,8295,8430,8446,8485,8491,8707,8726,4,3,99,112,114,7950,7956,8007,117,116,101,59,1,263,4,6,59,97,98,99,100,115,7970,7972,7977,7984,7998,8003,1,8745,110,100,59,1,10820,114,99,117,112,59,1,10825,4,2,97,117,7990,7994,112,59,1,10827,112,59,1,10823,111,116,59,1,10816,59,3,8745,65024,4,2,101,111,8013,8017,116,59,1,8257,110,59,1,711,4,4,97,101,105,117,8031,8046,8056,8061,4,2,112,114,8037,8041,115,59,1,10829,111,110,59,1,269,100,105,108,5,231,1,59,8054,1,231,114,99,59,1,265,112,115,4,2,59,115,8069,8071,1,10828,109,59,1,10832,111,116,59,1,267,4,3,100,109,110,8088,8097,8104,105,108,5,184,1,59,8095,1,184,112,116,121,118,59,1,10674,116,5,162,2,59,101,8112,8114,1,162,114,100,111,116,59,1,183,114,59,3,55349,56608,4,3,99,101,105,8134,8138,8154,121,59,1,1095,99,107,4,2,59,109,8146,8148,1,10003,97,114,107,59,1,10003,59,1,967,114,4,7,59,69,99,101,102,109,115,8174,8176,8179,8258,8261,8268,8273,1,9675,59,1,10691,4,3,59,101,108,8187,8189,8193,1,710,113,59,1,8791,101,4,2,97,100,8200,8223,114,114,111,119,4,2,108,114,8210,8216,101,102,116,59,1,8634,105,103,104,116,59,1,8635,4,5,82,83,97,99,100,8235,8238,8241,8246,8252,59,1,174,59,1,9416,115,116,59,1,8859,105,114,99,59,1,8858,97,115,104,59,1,8861,59,1,8791,110,105,110,116,59,1,10768,105,100,59,1,10991,99,105,114,59,1,10690,117,98,115,4,2,59,117,8288,8290,1,9827,105,116,59,1,9827,4,4,108,109,110,112,8305,8326,8376,8400,111,110,4,2,59,101,8313,8315,1,58,4,2,59,113,8321,8323,1,8788,59,1,8788,4,2,109,112,8332,8344,97,4,2,59,116,8339,8341,1,44,59,1,64,4,3,59,102,108,8352,8354,8358,1,8705,110,59,1,8728,101,4,2,109,120,8365,8371,101,110,116,59,1,8705,101,115,59,1,8450,4,2,103,105,8382,8395,4,2,59,100,8388,8390,1,8773,111,116,59,1,10861,110,116,59,1,8750,4,3,102,114,121,8408,8412,8417,59,3,55349,56660,111,100,59,1,8720,5,169,2,59,115,8424,8426,1,169,114,59,1,8471,4,2,97,111,8436,8441,114,114,59,1,8629,115,115,59,1,10007,4,2,99,117,8452,8457,114,59,3,55349,56504,4,2,98,112,8463,8474,4,2,59,101,8469,8471,1,10959,59,1,10961,4,2,59,101,8480,8482,1,10960,59,1,10962,100,111,116,59,1,8943,4,7,100,101,108,112,114,118,119,8507,8522,8536,8550,8600,8697,8702,97,114,114,4,2,108,114,8516,8519,59,1,10552,59,1,10549,4,2,112,115,8528,8532,114,59,1,8926,99,59,1,8927,97,114,114,4,2,59,112,8545,8547,1,8630,59,1,10557,4,6,59,98,99,100,111,115,8564,8566,8573,8587,8592,8596,1,8746,114,99,97,112,59,1,10824,4,2,97,117,8579,8583,112,59,1,10822,112,59,1,10826,111,116,59,1,8845,114,59,1,10821,59,3,8746,65024,4,4,97,108,114,118,8610,8623,8663,8672,114,114,4,2,59,109,8618,8620,1,8631,59,1,10556,121,4,3,101,118,119,8632,8651,8656,113,4,2,112,115,8639,8645,114,101,99,59,1,8926,117,99,99,59,1,8927,101,101,59,1,8910,101,100,103,101,59,1,8911,101,110,5,164,1,59,8670,1,164,101,97,114,114,111,119,4,2,108,114,8684,8690,101,102,116,59,1,8630,105,103,104,116,59,1,8631,101,101,59,1,8910,101,100,59,1,8911,4,2,99,105,8713,8721,111,110,105,110,116,59,1,8754,110,116,59,1,8753,108,99,116,121,59,1,9005,4,19,65,72,97,98,99,100,101,102,104,105,106,108,111,114,115,116,117,119,122,8773,8778,8783,8821,8839,8854,8887,8914,8930,8944,9036,9041,9058,9197,9227,9258,9281,9297,9305,114,114,59,1,8659,97,114,59,1,10597,4,4,103,108,114,115,8793,8799,8805,8809,103,101,114,59,1,8224,101,116,104,59,1,8504,114,59,1,8595,104,4,2,59,118,8816,8818,1,8208,59,1,8867,4,2,107,108,8827,8834,97,114,111,119,59,1,10511,97,99,59,1,733,4,2,97,121,8845,8851,114,111,110,59,1,271,59,1,1076,4,3,59,97,111,8862,8864,8880,1,8518,4,2,103,114,8870,8876,103,101,114,59,1,8225,114,59,1,8650,116,115,101,113,59,1,10871,4,3,103,108,109,8895,8902,8907,5,176,1,59,8900,1,176,116,97,59,1,948,112,116,121,118,59,1,10673,4,2,105,114,8920,8926,115,104,116,59,1,10623,59,3,55349,56609,97,114,4,2,108,114,8938,8941,59,1,8643,59,1,8642,4,5,97,101,103,115,118,8956,8986,8989,8996,9001,109,4,3,59,111,115,8965,8967,8983,1,8900,110,100,4,2,59,115,8975,8977,1,8900,117,105,116,59,1,9830,59,1,9830,59,1,168,97,109,109,97,59,1,989,105,110,59,1,8946,4,3,59,105,111,9009,9011,9031,1,247,100,101,5,247,2,59,111,9020,9022,1,247,110,116,105,109,101,115,59,1,8903,110,120,59,1,8903,99,121,59,1,1106,99,4,2,111,114,9048,9053,114,110,59,1,8990,111,112,59,1,8973,4,5,108,112,116,117,119,9070,9076,9081,9130,9144,108,97,114,59,1,36,102,59,3,55349,56661,4,5,59,101,109,112,115,9093,9095,9109,9116,9122,1,729,113,4,2,59,100,9102,9104,1,8784,111,116,59,1,8785,105,110,117,115,59,1,8760,108,117,115,59,1,8724,113,117,97,114,101,59,1,8865,98,108,101,98,97,114,119,101,100,103,101,59,1,8966,110,4,3,97,100,104,9153,9160,9172,114,114,111,119,59,1,8595,111,119,110,97,114,114,111,119,115,59,1,8650,97,114,112,111,111,110,4,2,108,114,9184,9190,101,102,116,59,1,8643,105,103,104,116,59,1,8642,4,2,98,99,9203,9211,107,97,114,111,119,59,1,10512,4,2,111,114,9217,9222,114,110,59,1,8991,111,112,59,1,8972,4,3,99,111,116,9235,9248,9252,4,2,114,121,9241,9245,59,3,55349,56505,59,1,1109,108,59,1,10742,114,111,107,59,1,273,4,2,100,114,9264,9269,111,116,59,1,8945,105,4,2,59,102,9276,9278,1,9663,59,1,9662,4,2,97,104,9287,9292,114,114,59,1,8693,97,114,59,1,10607,97,110,103,108,101,59,1,10662,4,2,99,105,9311,9315,121,59,1,1119,103,114,97,114,114,59,1,10239,4,18,68,97,99,100,101,102,103,108,109,110,111,112,113,114,115,116,117,120,9361,9376,9398,9439,9444,9447,9462,9495,9531,9585,9598,9614,9659,9755,9771,9792,9808,9826,4,2,68,111,9367,9372,111,116,59,1,10871,116,59,1,8785,4,2,99,115,9382,9392,117,116,101,5,233,1,59,9390,1,233,116,101,114,59,1,10862,4,4,97,105,111,121,9408,9414,9430,9436,114,111,110,59,1,283,114,4,2,59,99,9421,9423,1,8790,5,234,1,59,9428,1,234,108,111,110,59,1,8789,59,1,1101,111,116,59,1,279,59,1,8519,4,2,68,114,9453,9458,111,116,59,1,8786,59,3,55349,56610,4,3,59,114,115,9470,9472,9482,1,10906,97,118,101,5,232,1,59,9480,1,232,4,2,59,100,9488,9490,1,10902,111,116,59,1,10904,4,4,59,105,108,115,9505,9507,9515,9518,1,10905,110,116,101,114,115,59,1,9191,59,1,8467,4,2,59,100,9524,9526,1,10901,111,116,59,1,10903,4,3,97,112,115,9539,9544,9564,99,114,59,1,275,116,121,4,3,59,115,118,9554,9556,9561,1,8709,101,116,59,1,8709,59,1,8709,112,4,2,49,59,9571,9583,4,2,51,52,9577,9580,59,1,8196,59,1,8197,1,8195,4,2,103,115,9591,9594,59,1,331,112,59,1,8194,4,2,103,112,9604,9609,111,110,59,1,281,102,59,3,55349,56662,4,3,97,108,115,9622,9635,9640,114,4,2,59,115,9629,9631,1,8917,108,59,1,10723,117,115,59,1,10865,105,4,3,59,108,118,9649,9651,9656,1,949,111,110,59,1,949,59,1,1013,4,4,99,115,117,118,9669,9686,9716,9747,4,2,105,111,9675,9680,114,99,59,1,8790,108,111,110,59,1,8789,4,2,105,108,9692,9696,109,59,1,8770,97,110,116,4,2,103,108,9705,9710,116,114,59,1,10902,101,115,115,59,1,10901,4,3,97,101,105,9724,9729,9734,108,115,59,1,61,115,116,59,1,8799,118,4,2,59,68,9741,9743,1,8801,68,59,1,10872,112,97,114,115,108,59,1,10725,4,2,68,97,9761,9766,111,116,59,1,8787,114,114,59,1,10609,4,3,99,100,105,9779,9783,9788,114,59,1,8495,111,116,59,1,8784,109,59,1,8770,4,2,97,104,9798,9801,59,1,951,5,240,1,59,9806,1,240,4,2,109,114,9814,9822,108,5,235,1,59,9820,1,235,111,59,1,8364,4,3,99,105,112,9834,9838,9843,108,59,1,33,115,116,59,1,8707,4,2,101,111,9849,9859,99,116,97,116,105,111,110,59,1,8496,110,101,110,116,105,97,108,101,59,1,8519,4,12,97,99,101,102,105,106,108,110,111,112,114,115,9896,9910,9914,9921,9954,9960,9967,9989,9994,10027,10036,10164,108,108,105,110,103,100,111,116,115,101,113,59,1,8786,121,59,1,1092,109,97,108,101,59,1,9792,4,3,105,108,114,9929,9935,9950,108,105,103,59,1,64259,4,2,105,108,9941,9945,103,59,1,64256,105,103,59,1,64260,59,3,55349,56611,108,105,103,59,1,64257,108,105,103,59,3,102,106,4,3,97,108,116,9975,9979,9984,116,59,1,9837,105,103,59,1,64258,110,115,59,1,9649,111,102,59,1,402,4,2,112,114,1e4,10005,102,59,3,55349,56663,4,2,97,107,10011,10016,108,108,59,1,8704,4,2,59,118,10022,10024,1,8916,59,1,10969,97,114,116,105,110,116,59,1,10765,4,2,97,111,10042,10159,4,2,99,115,10048,10155,4,6,49,50,51,52,53,55,10062,10102,10114,10135,10139,10151,4,6,50,51,52,53,54,56,10076,10083,10086,10093,10096,10099,5,189,1,59,10081,1,189,59,1,8531,5,188,1,59,10091,1,188,59,1,8533,59,1,8537,59,1,8539,4,2,51,53,10108,10111,59,1,8532,59,1,8534,4,3,52,53,56,10122,10129,10132,5,190,1,59,10127,1,190,59,1,8535,59,1,8540,53,59,1,8536,4,2,54,56,10145,10148,59,1,8538,59,1,8541,56,59,1,8542,108,59,1,8260,119,110,59,1,8994,99,114,59,3,55349,56507,4,17,69,97,98,99,100,101,102,103,105,106,108,110,111,114,115,116,118,10206,10217,10247,10254,10268,10273,10358,10363,10374,10380,10385,10406,10458,10464,10470,10497,10610,4,2,59,108,10212,10214,1,8807,59,1,10892,4,3,99,109,112,10225,10231,10244,117,116,101,59,1,501,109,97,4,2,59,100,10239,10241,1,947,59,1,989,59,1,10886,114,101,118,101,59,1,287,4,2,105,121,10260,10265,114,99,59,1,285,59,1,1075,111,116,59,1,289,4,4,59,108,113,115,10283,10285,10288,10308,1,8805,59,1,8923,4,3,59,113,115,10296,10298,10301,1,8805,59,1,8807,108,97,110,116,59,1,10878,4,4,59,99,100,108,10318,10320,10324,10345,1,10878,99,59,1,10921,111,116,4,2,59,111,10332,10334,1,10880,4,2,59,108,10340,10342,1,10882,59,1,10884,4,2,59,101,10351,10354,3,8923,65024,115,59,1,10900,114,59,3,55349,56612,4,2,59,103,10369,10371,1,8811,59,1,8921,109,101,108,59,1,8503,99,121,59,1,1107,4,4,59,69,97,106,10395,10397,10400,10403,1,8823,59,1,10898,59,1,10917,59,1,10916,4,4,69,97,101,115,10416,10419,10434,10453,59,1,8809,112,4,2,59,112,10426,10428,1,10890,114,111,120,59,1,10890,4,2,59,113,10440,10442,1,10888,4,2,59,113,10448,10450,1,10888,59,1,8809,105,109,59,1,8935,112,102,59,3,55349,56664,97,118,101,59,1,96,4,2,99,105,10476,10480,114,59,1,8458,109,4,3,59,101,108,10489,10491,10494,1,8819,59,1,10894,59,1,10896,5,62,6,59,99,100,108,113,114,10512,10514,10527,10532,10538,10545,1,62,4,2,99,105,10520,10523,59,1,10919,114,59,1,10874,111,116,59,1,8919,80,97,114,59,1,10645,117,101,115,116,59,1,10876,4,5,97,100,101,108,115,10557,10574,10579,10599,10605,4,2,112,114,10563,10570,112,114,111,120,59,1,10886,114,59,1,10616,111,116,59,1,8919,113,4,2,108,113,10586,10592,101,115,115,59,1,8923,108,101,115,115,59,1,10892,101,115,115,59,1,8823,105,109,59,1,8819,4,2,101,110,10616,10626,114,116,110,101,113,113,59,3,8809,65024,69,59,3,8809,65024,4,10,65,97,98,99,101,102,107,111,115,121,10653,10658,10713,10718,10724,10760,10765,10786,10850,10875,114,114,59,1,8660,4,4,105,108,109,114,10668,10674,10678,10684,114,115,112,59,1,8202,102,59,1,189,105,108,116,59,1,8459,4,2,100,114,10690,10695,99,121,59,1,1098,4,3,59,99,119,10703,10705,10710,1,8596,105,114,59,1,10568,59,1,8621,97,114,59,1,8463,105,114,99,59,1,293,4,3,97,108,114,10732,10748,10754,114,116,115,4,2,59,117,10741,10743,1,9829,105,116,59,1,9829,108,105,112,59,1,8230,99,111,110,59,1,8889,114,59,3,55349,56613,115,4,2,101,119,10772,10779,97,114,111,119,59,1,10533,97,114,111,119,59,1,10534,4,5,97,109,111,112,114,10798,10803,10809,10839,10844,114,114,59,1,8703,116,104,116,59,1,8763,107,4,2,108,114,10816,10827,101,102,116,97,114,114,111,119,59,1,8617,105,103,104,116,97,114,114,111,119,59,1,8618,102,59,3,55349,56665,98,97,114,59,1,8213,4,3,99,108,116,10858,10863,10869,114,59,3,55349,56509,97,115,104,59,1,8463,114,111,107,59,1,295,4,2,98,112,10881,10887,117,108,108,59,1,8259,104,101,110,59,1,8208,4,15,97,99,101,102,103,105,106,109,110,111,112,113,115,116,117,10925,10936,10958,10977,10990,11001,11039,11045,11101,11192,11220,11226,11237,11285,11299,99,117,116,101,5,237,1,59,10934,1,237,4,3,59,105,121,10944,10946,10955,1,8291,114,99,5,238,1,59,10953,1,238,59,1,1080,4,2,99,120,10964,10968,121,59,1,1077,99,108,5,161,1,59,10975,1,161,4,2,102,114,10983,10986,59,1,8660,59,3,55349,56614,114,97,118,101,5,236,1,59,10999,1,236,4,4,59,105,110,111,11011,11013,11028,11034,1,8520,4,2,105,110,11019,11024,110,116,59,1,10764,116,59,1,8749,102,105,110,59,1,10716,116,97,59,1,8489,108,105,103,59,1,307,4,3,97,111,112,11053,11092,11096,4,3,99,103,116,11061,11065,11088,114,59,1,299,4,3,101,108,112,11073,11076,11082,59,1,8465,105,110,101,59,1,8464,97,114,116,59,1,8465,104,59,1,305,102,59,1,8887,101,100,59,1,437,4,5,59,99,102,111,116,11113,11115,11121,11136,11142,1,8712,97,114,101,59,1,8453,105,110,4,2,59,116,11129,11131,1,8734,105,101,59,1,10717,100,111,116,59,1,305,4,5,59,99,101,108,112,11154,11156,11161,11179,11186,1,8747,97,108,59,1,8890,4,2,103,114,11167,11173,101,114,115,59,1,8484,99,97,108,59,1,8890,97,114,104,107,59,1,10775,114,111,100,59,1,10812,4,4,99,103,112,116,11202,11206,11211,11216,121,59,1,1105,111,110,59,1,303,102,59,3,55349,56666,97,59,1,953,114,111,100,59,1,10812,117,101,115,116,5,191,1,59,11235,1,191,4,2,99,105,11243,11248,114,59,3,55349,56510,110,4,5,59,69,100,115,118,11261,11263,11266,11271,11282,1,8712,59,1,8953,111,116,59,1,8949,4,2,59,118,11277,11279,1,8948,59,1,8947,59,1,8712,4,2,59,105,11291,11293,1,8290,108,100,101,59,1,297,4,2,107,109,11305,11310,99,121,59,1,1110,108,5,239,1,59,11316,1,239,4,6,99,102,109,111,115,117,11332,11346,11351,11357,11363,11380,4,2,105,121,11338,11343,114,99,59,1,309,59,1,1081,114,59,3,55349,56615,97,116,104,59,1,567,112,102,59,3,55349,56667,4,2,99,101,11369,11374,114,59,3,55349,56511,114,99,121,59,1,1112,107,99,121,59,1,1108,4,8,97,99,102,103,104,106,111,115,11404,11418,11433,11438,11445,11450,11455,11461,112,112,97,4,2,59,118,11413,11415,1,954,59,1,1008,4,2,101,121,11424,11430,100,105,108,59,1,311,59,1,1082,114,59,3,55349,56616,114,101,101,110,59,1,312,99,121,59,1,1093,99,121,59,1,1116,112,102,59,3,55349,56668,99,114,59,3,55349,56512,4,23,65,66,69,72,97,98,99,100,101,102,103,104,106,108,109,110,111,112,114,115,116,117,118,11515,11538,11544,11555,11560,11721,11780,11818,11868,12136,12160,12171,12203,12208,12246,12275,12327,12509,12523,12569,12641,12732,12752,4,3,97,114,116,11523,11528,11532,114,114,59,1,8666,114,59,1,8656,97,105,108,59,1,10523,97,114,114,59,1,10510,4,2,59,103,11550,11552,1,8806,59,1,10891,97,114,59,1,10594,4,9,99,101,103,109,110,112,113,114,116,11580,11586,11594,11600,11606,11624,11627,11636,11694,117,116,101,59,1,314,109,112,116,121,118,59,1,10676,114,97,110,59,1,8466,98,100,97,59,1,955,103,4,3,59,100,108,11615,11617,11620,1,10216,59,1,10641,101,59,1,10216,59,1,10885,117,111,5,171,1,59,11634,1,171,114,4,8,59,98,102,104,108,112,115,116,11655,11657,11669,11673,11677,11681,11685,11690,1,8592,4,2,59,102,11663,11665,1,8676,115,59,1,10527,115,59,1,10525,107,59,1,8617,112,59,1,8619,108,59,1,10553,105,109,59,1,10611,108,59,1,8610,4,3,59,97,101,11702,11704,11709,1,10923,105,108,59,1,10521,4,2,59,115,11715,11717,1,10925,59,3,10925,65024,4,3,97,98,114,11729,11734,11739,114,114,59,1,10508,114,107,59,1,10098,4,2,97,107,11745,11758,99,4,2,101,107,11752,11755,59,1,123,59,1,91,4,2,101,115,11764,11767,59,1,10635,108,4,2,100,117,11774,11777,59,1,10639,59,1,10637,4,4,97,101,117,121,11790,11796,11811,11815,114,111,110,59,1,318,4,2,100,105,11802,11807,105,108,59,1,316,108,59,1,8968,98,59,1,123,59,1,1083,4,4,99,113,114,115,11828,11832,11845,11864,97,59,1,10550,117,111,4,2,59,114,11840,11842,1,8220,59,1,8222,4,2,100,117,11851,11857,104,97,114,59,1,10599,115,104,97,114,59,1,10571,104,59,1,8626,4,5,59,102,103,113,115,11880,11882,12008,12011,12031,1,8804,116,4,5,97,104,108,114,116,11895,11913,11935,11947,11996,114,114,111,119,4,2,59,116,11905,11907,1,8592,97,105,108,59,1,8610,97,114,112,111,111,110,4,2,100,117,11925,11931,111,119,110,59,1,8637,112,59,1,8636,101,102,116,97,114,114,111,119,115,59,1,8647,105,103,104,116,4,3,97,104,115,11959,11974,11984,114,114,111,119,4,2,59,115,11969,11971,1,8596,59,1,8646,97,114,112,111,111,110,115,59,1,8651,113,117,105,103,97,114,114,111,119,59,1,8621,104,114,101,101,116,105,109,101,115,59,1,8907,59,1,8922,4,3,59,113,115,12019,12021,12024,1,8804,59,1,8806,108,97,110,116,59,1,10877,4,5,59,99,100,103,115,12043,12045,12049,12070,12083,1,10877,99,59,1,10920,111,116,4,2,59,111,12057,12059,1,10879,4,2,59,114,12065,12067,1,10881,59,1,10883,4,2,59,101,12076,12079,3,8922,65024,115,59,1,10899,4,5,97,100,101,103,115,12095,12103,12108,12126,12131,112,112,114,111,120,59,1,10885,111,116,59,1,8918,113,4,2,103,113,12115,12120,116,114,59,1,8922,103,116,114,59,1,10891,116,114,59,1,8822,105,109,59,1,8818,4,3,105,108,114,12144,12150,12156,115,104,116,59,1,10620,111,111,114,59,1,8970,59,3,55349,56617,4,2,59,69,12166,12168,1,8822,59,1,10897,4,2,97,98,12177,12198,114,4,2,100,117,12184,12187,59,1,8637,4,2,59,108,12193,12195,1,8636,59,1,10602,108,107,59,1,9604,99,121,59,1,1113,4,5,59,97,99,104,116,12220,12222,12227,12235,12241,1,8810,114,114,59,1,8647,111,114,110,101,114,59,1,8990,97,114,100,59,1,10603,114,105,59,1,9722,4,2,105,111,12252,12258,100,111,116,59,1,320,117,115,116,4,2,59,97,12267,12269,1,9136,99,104,101,59,1,9136,4,4,69,97,101,115,12285,12288,12303,12322,59,1,8808,112,4,2,59,112,12295,12297,1,10889,114,111,120,59,1,10889,4,2,59,113,12309,12311,1,10887,4,2,59,113,12317,12319,1,10887,59,1,8808,105,109,59,1,8934,4,8,97,98,110,111,112,116,119,122,12345,12359,12364,12421,12446,12467,12474,12490,4,2,110,114,12351,12355,103,59,1,10220,114,59,1,8701,114,107,59,1,10214,103,4,3,108,109,114,12373,12401,12409,101,102,116,4,2,97,114,12382,12389,114,114,111,119,59,1,10229,105,103,104,116,97,114,114,111,119,59,1,10231,97,112,115,116,111,59,1,10236,105,103,104,116,97,114,114,111,119,59,1,10230,112,97,114,114,111,119,4,2,108,114,12433,12439,101,102,116,59,1,8619,105,103,104,116,59,1,8620,4,3,97,102,108,12454,12458,12462,114,59,1,10629,59,3,55349,56669,117,115,59,1,10797,105,109,101,115,59,1,10804,4,2,97,98,12480,12485,115,116,59,1,8727,97,114,59,1,95,4,3,59,101,102,12498,12500,12506,1,9674,110,103,101,59,1,9674,59,1,10731,97,114,4,2,59,108,12517,12519,1,40,116,59,1,10643,4,5,97,99,104,109,116,12535,12540,12548,12561,12564,114,114,59,1,8646,111,114,110,101,114,59,1,8991,97,114,4,2,59,100,12556,12558,1,8651,59,1,10605,59,1,8206,114,105,59,1,8895,4,6,97,99,104,105,113,116,12583,12589,12594,12597,12614,12635,113,117,111,59,1,8249,114,59,3,55349,56513,59,1,8624,109,4,3,59,101,103,12606,12608,12611,1,8818,59,1,10893,59,1,10895,4,2,98,117,12620,12623,59,1,91,111,4,2,59,114,12630,12632,1,8216,59,1,8218,114,111,107,59,1,322,5,60,8,59,99,100,104,105,108,113,114,12660,12662,12675,12680,12686,12692,12698,12705,1,60,4,2,99,105,12668,12671,59,1,10918,114,59,1,10873,111,116,59,1,8918,114,101,101,59,1,8907,109,101,115,59,1,8905,97,114,114,59,1,10614,117,101,115,116,59,1,10875,4,2,80,105,12711,12716,97,114,59,1,10646,4,3,59,101,102,12724,12726,12729,1,9667,59,1,8884,59,1,9666,114,4,2,100,117,12739,12746,115,104,97,114,59,1,10570,104,97,114,59,1,10598,4,2,101,110,12758,12768,114,116,110,101,113,113,59,3,8808,65024,69,59,3,8808,65024,4,14,68,97,99,100,101,102,104,105,108,110,111,112,115,117,12803,12809,12893,12908,12914,12928,12933,12937,13011,13025,13032,13049,13052,13069,68,111,116,59,1,8762,4,4,99,108,112,114,12819,12827,12849,12887,114,5,175,1,59,12825,1,175,4,2,101,116,12833,12836,59,1,9794,4,2,59,101,12842,12844,1,10016,115,101,59,1,10016,4,2,59,115,12855,12857,1,8614,116,111,4,4,59,100,108,117,12869,12871,12877,12883,1,8614,111,119,110,59,1,8615,101,102,116,59,1,8612,112,59,1,8613,107,101,114,59,1,9646,4,2,111,121,12899,12905,109,109,97,59,1,10793,59,1,1084,97,115,104,59,1,8212,97,115,117,114,101,100,97,110,103,108,101,59,1,8737,114,59,3,55349,56618,111,59,1,8487,4,3,99,100,110,12945,12954,12985,114,111,5,181,1,59,12952,1,181,4,4,59,97,99,100,12964,12966,12971,12976,1,8739,115,116,59,1,42,105,114,59,1,10992,111,116,5,183,1,59,12983,1,183,117,115,4,3,59,98,100,12995,12997,13e3,1,8722,59,1,8863,4,2,59,117,13006,13008,1,8760,59,1,10794,4,2,99,100,13017,13021,112,59,1,10971,114,59,1,8230,112,108,117,115,59,1,8723,4,2,100,112,13038,13044,101,108,115,59,1,8871,102,59,3,55349,56670,59,1,8723,4,2,99,116,13058,13063,114,59,3,55349,56514,112,111,115,59,1,8766,4,3,59,108,109,13077,13079,13087,1,956,116,105,109,97,112,59,1,8888,97,112,59,1,8888,4,24,71,76,82,86,97,98,99,100,101,102,103,104,105,106,108,109,111,112,114,115,116,117,118,119,13142,13165,13217,13229,13247,13330,13359,13414,13420,13508,13513,13579,13602,13626,13631,13762,13767,13855,13936,13995,14214,14285,14312,14432,4,2,103,116,13148,13152,59,3,8921,824,4,2,59,118,13158,13161,3,8811,8402,59,3,8811,824,4,3,101,108,116,13173,13200,13204,102,116,4,2,97,114,13181,13188,114,114,111,119,59,1,8653,105,103,104,116,97,114,114,111,119,59,1,8654,59,3,8920,824,4,2,59,118,13210,13213,3,8810,8402,59,3,8810,824,105,103,104,116,97,114,114,111,119,59,1,8655,4,2,68,100,13235,13241,97,115,104,59,1,8879,97,115,104,59,1,8878,4,5,98,99,110,112,116,13259,13264,13270,13275,13308,108,97,59,1,8711,117,116,101,59,1,324,103,59,3,8736,8402,4,5,59,69,105,111,112,13287,13289,13293,13298,13302,1,8777,59,3,10864,824,100,59,3,8779,824,115,59,1,329,114,111,120,59,1,8777,117,114,4,2,59,97,13316,13318,1,9838,108,4,2,59,115,13325,13327,1,9838,59,1,8469,4,2,115,117,13336,13344,112,5,160,1,59,13342,1,160,109,112,4,2,59,101,13352,13355,3,8782,824,59,3,8783,824,4,5,97,101,111,117,121,13371,13385,13391,13407,13411,4,2,112,114,13377,13380,59,1,10819,111,110,59,1,328,100,105,108,59,1,326,110,103,4,2,59,100,13399,13401,1,8775,111,116,59,3,10861,824,112,59,1,10818,59,1,1085,97,115,104,59,1,8211,4,7,59,65,97,100,113,115,120,13436,13438,13443,13466,13472,13478,13494,1,8800,114,114,59,1,8663,114,4,2,104,114,13450,13454,107,59,1,10532,4,2,59,111,13460,13462,1,8599,119,59,1,8599,111,116,59,3,8784,824,117,105,118,59,1,8802,4,2,101,105,13484,13489,97,114,59,1,10536,109,59,3,8770,824,105,115,116,4,2,59,115,13503,13505,1,8708,59,1,8708,114,59,3,55349,56619,4,4,69,101,115,116,13523,13527,13563,13568,59,3,8807,824,4,3,59,113,115,13535,13537,13559,1,8817,4,3,59,113,115,13545,13547,13551,1,8817,59,3,8807,824,108,97,110,116,59,3,10878,824,59,3,10878,824,105,109,59,1,8821,4,2,59,114,13574,13576,1,8815,59,1,8815,4,3,65,97,112,13587,13592,13597,114,114,59,1,8654,114,114,59,1,8622,97,114,59,1,10994,4,3,59,115,118,13610,13612,13623,1,8715,4,2,59,100,13618,13620,1,8956,59,1,8954,59,1,8715,99,121,59,1,1114,4,7,65,69,97,100,101,115,116,13647,13652,13656,13661,13665,13737,13742,114,114,59,1,8653,59,3,8806,824,114,114,59,1,8602,114,59,1,8229,4,4,59,102,113,115,13675,13677,13703,13725,1,8816,116,4,2,97,114,13684,13691,114,114,111,119,59,1,8602,105,103,104,116,97,114,114,111,119,59,1,8622,4,3,59,113,115,13711,13713,13717,1,8816,59,3,8806,824,108,97,110,116,59,3,10877,824,4,2,59,115,13731,13734,3,10877,824,59,1,8814,105,109,59,1,8820,4,2,59,114,13748,13750,1,8814,105,4,2,59,101,13757,13759,1,8938,59,1,8940,105,100,59,1,8740,4,2,112,116,13773,13778,102,59,3,55349,56671,5,172,3,59,105,110,13787,13789,13829,1,172,110,4,4,59,69,100,118,13800,13802,13806,13812,1,8713,59,3,8953,824,111,116,59,3,8949,824,4,3,97,98,99,13820,13823,13826,59,1,8713,59,1,8951,59,1,8950,105,4,2,59,118,13836,13838,1,8716,4,3,97,98,99,13846,13849,13852,59,1,8716,59,1,8958,59,1,8957,4,3,97,111,114,13863,13892,13899,114,4,4,59,97,115,116,13874,13876,13883,13888,1,8742,108,108,101,108,59,1,8742,108,59,3,11005,8421,59,3,8706,824,108,105,110,116,59,1,10772,4,3,59,99,101,13907,13909,13914,1,8832,117,101,59,1,8928,4,2,59,99,13920,13923,3,10927,824,4,2,59,101,13929,13931,1,8832,113,59,3,10927,824,4,4,65,97,105,116,13946,13951,13971,13982,114,114,59,1,8655,114,114,4,3,59,99,119,13961,13963,13967,1,8603,59,3,10547,824,59,3,8605,824,103,104,116,97,114,114,111,119,59,1,8603,114,105,4,2,59,101,13990,13992,1,8939,59,1,8941,4,7,99,104,105,109,112,113,117,14011,14036,14060,14080,14085,14090,14106,4,4,59,99,101,114,14021,14023,14028,14032,1,8833,117,101,59,1,8929,59,3,10928,824,59,3,55349,56515,111,114,116,4,2,109,112,14045,14050,105,100,59,1,8740,97,114,97,108,108,101,108,59,1,8742,109,4,2,59,101,14067,14069,1,8769,4,2,59,113,14075,14077,1,8772,59,1,8772,105,100,59,1,8740,97,114,59,1,8742,115,117,4,2,98,112,14098,14102,101,59,1,8930,101,59,1,8931,4,3,98,99,112,14114,14157,14171,4,4,59,69,101,115,14124,14126,14130,14133,1,8836,59,3,10949,824,59,1,8840,101,116,4,2,59,101,14141,14144,3,8834,8402,113,4,2,59,113,14151,14153,1,8840,59,3,10949,824,99,4,2,59,101,14164,14166,1,8833,113,59,3,10928,824,4,4,59,69,101,115,14181,14183,14187,14190,1,8837,59,3,10950,824,59,1,8841,101,116,4,2,59,101,14198,14201,3,8835,8402,113,4,2,59,113,14208,14210,1,8841,59,3,10950,824,4,4,103,105,108,114,14224,14228,14238,14242,108,59,1,8825,108,100,101,5,241,1,59,14236,1,241,103,59,1,8824,105,97,110,103,108,101,4,2,108,114,14254,14269,101,102,116,4,2,59,101,14263,14265,1,8938,113,59,1,8940,105,103,104,116,4,2,59,101,14279,14281,1,8939,113,59,1,8941,4,2,59,109,14291,14293,1,957,4,3,59,101,115,14301,14303,14308,1,35,114,111,59,1,8470,112,59,1,8199,4,9,68,72,97,100,103,105,108,114,115,14332,14338,14344,14349,14355,14369,14376,14408,14426,97,115,104,59,1,8877,97,114,114,59,1,10500,112,59,3,8781,8402,97,115,104,59,1,8876,4,2,101,116,14361,14365,59,3,8805,8402,59,3,62,8402,110,102,105,110,59,1,10718,4,3,65,101,116,14384,14389,14393,114,114,59,1,10498,59,3,8804,8402,4,2,59,114,14399,14402,3,60,8402,105,101,59,3,8884,8402,4,2,65,116,14414,14419,114,114,59,1,10499,114,105,101,59,3,8885,8402,105,109,59,3,8764,8402,4,3,65,97,110,14440,14445,14468,114,114,59,1,8662,114,4,2,104,114,14452,14456,107,59,1,10531,4,2,59,111,14462,14464,1,8598,119,59,1,8598,101,97,114,59,1,10535,4,18,83,97,99,100,101,102,103,104,105,108,109,111,112,114,115,116,117,118,14512,14515,14535,14560,14597,14603,14618,14643,14657,14662,14701,14741,14747,14769,14851,14877,14907,14916,59,1,9416,4,2,99,115,14521,14531,117,116,101,5,243,1,59,14529,1,243,116,59,1,8859,4,2,105,121,14541,14557,114,4,2,59,99,14548,14550,1,8858,5,244,1,59,14555,1,244,59,1,1086,4,5,97,98,105,111,115,14572,14577,14583,14587,14591,115,104,59,1,8861,108,97,99,59,1,337,118,59,1,10808,116,59,1,8857,111,108,100,59,1,10684,108,105,103,59,1,339,4,2,99,114,14609,14614,105,114,59,1,10687,59,3,55349,56620,4,3,111,114,116,14626,14630,14640,110,59,1,731,97,118,101,5,242,1,59,14638,1,242,59,1,10689,4,2,98,109,14649,14654,97,114,59,1,10677,59,1,937,110,116,59,1,8750,4,4,97,99,105,116,14672,14677,14693,14698,114,114,59,1,8634,4,2,105,114,14683,14687,114,59,1,10686,111,115,115,59,1,10683,110,101,59,1,8254,59,1,10688,4,3,97,101,105,14709,14714,14719,99,114,59,1,333,103,97,59,1,969,4,3,99,100,110,14727,14733,14736,114,111,110,59,1,959,59,1,10678,117,115,59,1,8854,112,102,59,3,55349,56672,4,3,97,101,108,14755,14759,14764,114,59,1,10679,114,112,59,1,10681,117,115,59,1,8853,4,7,59,97,100,105,111,115,118,14785,14787,14792,14831,14837,14841,14848,1,8744,114,114,59,1,8635,4,4,59,101,102,109,14802,14804,14817,14824,1,10845,114,4,2,59,111,14811,14813,1,8500,102,59,1,8500,5,170,1,59,14822,1,170,5,186,1,59,14829,1,186,103,111,102,59,1,8886,114,59,1,10838,108,111,112,101,59,1,10839,59,1,10843,4,3,99,108,111,14859,14863,14873,114,59,1,8500,97,115,104,5,248,1,59,14871,1,248,108,59,1,8856,105,4,2,108,109,14884,14893,100,101,5,245,1,59,14891,1,245,101,115,4,2,59,97,14901,14903,1,8855,115,59,1,10806,109,108,5,246,1,59,14914,1,246,98,97,114,59,1,9021,4,12,97,99,101,102,104,105,108,109,111,114,115,117,14948,14992,14996,15033,15038,15068,15090,15189,15192,15222,15427,15441,114,4,4,59,97,115,116,14959,14961,14976,14989,1,8741,5,182,2,59,108,14968,14970,1,182,108,101,108,59,1,8741,4,2,105,108,14982,14986,109,59,1,10995,59,1,11005,59,1,8706,121,59,1,1087,114,4,5,99,105,109,112,116,15009,15014,15019,15024,15027,110,116,59,1,37,111,100,59,1,46,105,108,59,1,8240,59,1,8869,101,110,107,59,1,8241,114,59,3,55349,56621,4,3,105,109,111,15046,15057,15063,4,2,59,118,15052,15054,1,966,59,1,981,109,97,116,59,1,8499,110,101,59,1,9742,4,3,59,116,118,15076,15078,15087,1,960,99,104,102,111,114,107,59,1,8916,59,1,982,4,2,97,117,15096,15119,110,4,2,99,107,15103,15115,107,4,2,59,104,15110,15112,1,8463,59,1,8462,118,59,1,8463,115,4,9,59,97,98,99,100,101,109,115,116,15140,15142,15148,15151,15156,15168,15171,15179,15184,1,43,99,105,114,59,1,10787,59,1,8862,105,114,59,1,10786,4,2,111,117,15162,15165,59,1,8724,59,1,10789,59,1,10866,110,5,177,1,59,15177,1,177,105,109,59,1,10790,119,111,59,1,10791,59,1,177,4,3,105,112,117,15200,15208,15213,110,116,105,110,116,59,1,10773,102,59,3,55349,56673,110,100,5,163,1,59,15220,1,163,4,10,59,69,97,99,101,105,110,111,115,117,15244,15246,15249,15253,15258,15334,15347,15367,15416,15421,1,8826,59,1,10931,112,59,1,10935,117,101,59,1,8828,4,2,59,99,15264,15266,1,10927,4,6,59,97,99,101,110,115,15280,15282,15290,15299,15303,15329,1,8826,112,112,114,111,120,59,1,10935,117,114,108,121,101,113,59,1,8828,113,59,1,10927,4,3,97,101,115,15311,15319,15324,112,112,114,111,120,59,1,10937,113,113,59,1,10933,105,109,59,1,8936,105,109,59,1,8830,109,101,4,2,59,115,15342,15344,1,8242,59,1,8473,4,3,69,97,115,15355,15358,15362,59,1,10933,112,59,1,10937,105,109,59,1,8936,4,3,100,102,112,15375,15378,15404,59,1,8719,4,3,97,108,115,15386,15392,15398,108,97,114,59,1,9006,105,110,101,59,1,8978,117,114,102,59,1,8979,4,2,59,116,15410,15412,1,8733,111,59,1,8733,105,109,59,1,8830,114,101,108,59,1,8880,4,2,99,105,15433,15438,114,59,3,55349,56517,59,1,968,110,99,115,112,59,1,8200,4,6,102,105,111,112,115,117,15462,15467,15472,15478,15485,15491,114,59,3,55349,56622,110,116,59,1,10764,112,102,59,3,55349,56674,114,105,109,101,59,1,8279,99,114,59,3,55349,56518,4,3,97,101,111,15499,15520,15534,116,4,2,101,105,15506,15515,114,110,105,111,110,115,59,1,8461,110,116,59,1,10774,115,116,4,2,59,101,15528,15530,1,63,113,59,1,8799,116,5,34,1,59,15540,1,34,4,21,65,66,72,97,98,99,100,101,102,104,105,108,109,110,111,112,114,115,116,117,120,15586,15609,15615,15620,15796,15855,15893,15931,15977,16001,16039,16183,16204,16222,16228,16285,16312,16318,16363,16408,16416,4,3,97,114,116,15594,15599,15603,114,114,59,1,8667,114,59,1,8658,97,105,108,59,1,10524,97,114,114,59,1,10511,97,114,59,1,10596,4,7,99,100,101,110,113,114,116,15636,15651,15656,15664,15687,15696,15770,4,2,101,117,15642,15646,59,3,8765,817,116,101,59,1,341,105,99,59,1,8730,109,112,116,121,118,59,1,10675,103,4,4,59,100,101,108,15675,15677,15680,15683,1,10217,59,1,10642,59,1,10661,101,59,1,10217,117,111,5,187,1,59,15694,1,187,114,4,11,59,97,98,99,102,104,108,112,115,116,119,15721,15723,15727,15739,15742,15746,15750,15754,15758,15763,15767,1,8594,112,59,1,10613,4,2,59,102,15733,15735,1,8677,115,59,1,10528,59,1,10547,115,59,1,10526,107,59,1,8618,112,59,1,8620,108,59,1,10565,105,109,59,1,10612,108,59,1,8611,59,1,8605,4,2,97,105,15776,15781,105,108,59,1,10522,111,4,2,59,110,15788,15790,1,8758,97,108,115,59,1,8474,4,3,97,98,114,15804,15809,15814,114,114,59,1,10509,114,107,59,1,10099,4,2,97,107,15820,15833,99,4,2,101,107,15827,15830,59,1,125,59,1,93,4,2,101,115,15839,15842,59,1,10636,108,4,2,100,117,15849,15852,59,1,10638,59,1,10640,4,4,97,101,117,121,15865,15871,15886,15890,114,111,110,59,1,345,4,2,100,105,15877,15882,105,108,59,1,343,108,59,1,8969,98,59,1,125,59,1,1088,4,4,99,108,113,115,15903,15907,15914,15927,97,59,1,10551,100,104,97,114,59,1,10601,117,111,4,2,59,114,15922,15924,1,8221,59,1,8221,104,59,1,8627,4,3,97,99,103,15939,15966,15970,108,4,4,59,105,112,115,15950,15952,15957,15963,1,8476,110,101,59,1,8475,97,114,116,59,1,8476,59,1,8477,116,59,1,9645,5,174,1,59,15975,1,174,4,3,105,108,114,15985,15991,15997,115,104,116,59,1,10621,111,111,114,59,1,8971,59,3,55349,56623,4,2,97,111,16007,16028,114,4,2,100,117,16014,16017,59,1,8641,4,2,59,108,16023,16025,1,8640,59,1,10604,4,2,59,118,16034,16036,1,961,59,1,1009,4,3,103,110,115,16047,16167,16171,104,116,4,6,97,104,108,114,115,116,16063,16081,16103,16130,16143,16155,114,114,111,119,4,2,59,116,16073,16075,1,8594,97,105,108,59,1,8611,97,114,112,111,111,110,4,2,100,117,16093,16099,111,119,110,59,1,8641,112,59,1,8640,101,102,116,4,2,97,104,16112,16120,114,114,111,119,115,59,1,8644,97,114,112,111,111,110,115,59,1,8652,105,103,104,116,97,114,114,111,119,115,59,1,8649,113,117,105,103,97,114,114,111,119,59,1,8605,104,114,101,101,116,105,109,101,115,59,1,8908,103,59,1,730,105,110,103,100,111,116,115,101,113,59,1,8787,4,3,97,104,109,16191,16196,16201,114,114,59,1,8644,97,114,59,1,8652,59,1,8207,111,117,115,116,4,2,59,97,16214,16216,1,9137,99,104,101,59,1,9137,109,105,100,59,1,10990,4,4,97,98,112,116,16238,16252,16257,16278,4,2,110,114,16244,16248,103,59,1,10221,114,59,1,8702,114,107,59,1,10215,4,3,97,102,108,16265,16269,16273,114,59,1,10630,59,3,55349,56675,117,115,59,1,10798,105,109,101,115,59,1,10805,4,2,97,112,16291,16304,114,4,2,59,103,16298,16300,1,41,116,59,1,10644,111,108,105,110,116,59,1,10770,97,114,114,59,1,8649,4,4,97,99,104,113,16328,16334,16339,16342,113,117,111,59,1,8250,114,59,3,55349,56519,59,1,8625,4,2,98,117,16348,16351,59,1,93,111,4,2,59,114,16358,16360,1,8217,59,1,8217,4,3,104,105,114,16371,16377,16383,114,101,101,59,1,8908,109,101,115,59,1,8906,105,4,4,59,101,102,108,16394,16396,16399,16402,1,9657,59,1,8885,59,1,9656,116,114,105,59,1,10702,108,117,104,97,114,59,1,10600,59,1,8478,4,19,97,98,99,100,101,102,104,105,108,109,111,112,113,114,115,116,117,119,122,16459,16466,16472,16572,16590,16672,16687,16746,16844,16850,16924,16963,16988,17115,17121,17154,17206,17614,17656,99,117,116,101,59,1,347,113,117,111,59,1,8218,4,10,59,69,97,99,101,105,110,112,115,121,16494,16496,16499,16513,16518,16531,16536,16556,16564,16569,1,8827,59,1,10932,4,2,112,114,16505,16508,59,1,10936,111,110,59,1,353,117,101,59,1,8829,4,2,59,100,16524,16526,1,10928,105,108,59,1,351,114,99,59,1,349,4,3,69,97,115,16544,16547,16551,59,1,10934,112,59,1,10938,105,109,59,1,8937,111,108,105,110,116,59,1,10771,105,109,59,1,8831,59,1,1089,111,116,4,3,59,98,101,16582,16584,16587,1,8901,59,1,8865,59,1,10854,4,7,65,97,99,109,115,116,120,16606,16611,16634,16642,16646,16652,16668,114,114,59,1,8664,114,4,2,104,114,16618,16622,107,59,1,10533,4,2,59,111,16628,16630,1,8600,119,59,1,8600,116,5,167,1,59,16640,1,167,105,59,1,59,119,97,114,59,1,10537,109,4,2,105,110,16659,16665,110,117,115,59,1,8726,59,1,8726,116,59,1,10038,114,4,2,59,111,16679,16682,3,55349,56624,119,110,59,1,8994,4,4,97,99,111,121,16697,16702,16716,16739,114,112,59,1,9839,4,2,104,121,16708,16713,99,121,59,1,1097,59,1,1096,114,116,4,2,109,112,16724,16729,105,100,59,1,8739,97,114,97,108,108,101,108,59,1,8741,5,173,1,59,16744,1,173,4,2,103,109,16752,16770,109,97,4,3,59,102,118,16762,16764,16767,1,963,59,1,962,59,1,962,4,8,59,100,101,103,108,110,112,114,16788,16790,16795,16806,16817,16828,16832,16838,1,8764,111,116,59,1,10858,4,2,59,113,16801,16803,1,8771,59,1,8771,4,2,59,69,16812,16814,1,10910,59,1,10912,4,2,59,69,16823,16825,1,10909,59,1,10911,101,59,1,8774,108,117,115,59,1,10788,97,114,114,59,1,10610,97,114,114,59,1,8592,4,4,97,101,105,116,16860,16883,16891,16904,4,2,108,115,16866,16878,108,115,101,116,109,105,110,117,115,59,1,8726,104,112,59,1,10803,112,97,114,115,108,59,1,10724,4,2,100,108,16897,16900,59,1,8739,101,59,1,8995,4,2,59,101,16910,16912,1,10922,4,2,59,115,16918,16920,1,10924,59,3,10924,65024,4,3,102,108,112,16932,16938,16958,116,99,121,59,1,1100,4,2,59,98,16944,16946,1,47,4,2,59,97,16952,16954,1,10692,114,59,1,9023,102,59,3,55349,56676,97,4,2,100,114,16970,16985,101,115,4,2,59,117,16978,16980,1,9824,105,116,59,1,9824,59,1,8741,4,3,99,115,117,16996,17028,17089,4,2,97,117,17002,17015,112,4,2,59,115,17009,17011,1,8851,59,3,8851,65024,112,4,2,59,115,17022,17024,1,8852,59,3,8852,65024,117,4,2,98,112,17035,17062,4,3,59,101,115,17043,17045,17048,1,8847,59,1,8849,101,116,4,2,59,101,17056,17058,1,8847,113,59,1,8849,4,3,59,101,115,17070,17072,17075,1,8848,59,1,8850,101,116,4,2,59,101,17083,17085,1,8848,113,59,1,8850,4,3,59,97,102,17097,17099,17112,1,9633,114,4,2,101,102,17106,17109,59,1,9633,59,1,9642,59,1,9642,97,114,114,59,1,8594,4,4,99,101,109,116,17131,17136,17142,17148,114,59,3,55349,56520,116,109,110,59,1,8726,105,108,101,59,1,8995,97,114,102,59,1,8902,4,2,97,114,17160,17172,114,4,2,59,102,17167,17169,1,9734,59,1,9733,4,2,97,110,17178,17202,105,103,104,116,4,2,101,112,17188,17197,112,115,105,108,111,110,59,1,1013,104,105,59,1,981,115,59,1,175,4,5,98,99,109,110,112,17218,17351,17420,17423,17427,4,9,59,69,100,101,109,110,112,114,115,17238,17240,17243,17248,17261,17267,17279,17285,17291,1,8834,59,1,10949,111,116,59,1,10941,4,2,59,100,17254,17256,1,8838,111,116,59,1,10947,117,108,116,59,1,10945,4,2,69,101,17273,17276,59,1,10955,59,1,8842,108,117,115,59,1,10943,97,114,114,59,1,10617,4,3,101,105,117,17299,17335,17339,116,4,3,59,101,110,17308,17310,17322,1,8834,113,4,2,59,113,17317,17319,1,8838,59,1,10949,101,113,4,2,59,113,17330,17332,1,8842,59,1,10955,109,59,1,10951,4,2,98,112,17345,17348,59,1,10965,59,1,10963,99,4,6,59,97,99,101,110,115,17366,17368,17376,17385,17389,17415,1,8827,112,112,114,111,120,59,1,10936,117,114,108,121,101,113,59,1,8829,113,59,1,10928,4,3,97,101,115,17397,17405,17410,112,112,114,111,120,59,1,10938,113,113,59,1,10934,105,109,59,1,8937,105,109,59,1,8831,59,1,8721,103,59,1,9834,4,13,49,50,51,59,69,100,101,104,108,109,110,112,115,17455,17462,17469,17476,17478,17481,17496,17509,17524,17530,17536,17548,17554,5,185,1,59,17460,1,185,5,178,1,59,17467,1,178,5,179,1,59,17474,1,179,1,8835,59,1,10950,4,2,111,115,17487,17491,116,59,1,10942,117,98,59,1,10968,4,2,59,100,17502,17504,1,8839,111,116,59,1,10948,115,4,2,111,117,17516,17520,108,59,1,10185,98,59,1,10967,97,114,114,59,1,10619,117,108,116,59,1,10946,4,2,69,101,17542,17545,59,1,10956,59,1,8843,108,117,115,59,1,10944,4,3,101,105,117,17562,17598,17602,116,4,3,59,101,110,17571,17573,17585,1,8835,113,4,2,59,113,17580,17582,1,8839,59,1,10950,101,113,4,2,59,113,17593,17595,1,8843,59,1,10956,109,59,1,10952,4,2,98,112,17608,17611,59,1,10964,59,1,10966,4,3,65,97,110,17622,17627,17650,114,114,59,1,8665,114,4,2,104,114,17634,17638,107,59,1,10534,4,2,59,111,17644,17646,1,8601,119,59,1,8601,119,97,114,59,1,10538,108,105,103,5,223,1,59,17664,1,223,4,13,97,98,99,100,101,102,104,105,111,112,114,115,119,17694,17709,17714,17737,17742,17749,17754,17860,17905,17957,17964,18090,18122,4,2,114,117,17700,17706,103,101,116,59,1,8982,59,1,964,114,107,59,1,9140,4,3,97,101,121,17722,17728,17734,114,111,110,59,1,357,100,105,108,59,1,355,59,1,1090,111,116,59,1,8411,108,114,101,99,59,1,8981,114,59,3,55349,56625,4,4,101,105,107,111,17764,17805,17836,17851,4,2,114,116,17770,17786,101,4,2,52,102,17777,17780,59,1,8756,111,114,101,59,1,8756,97,4,3,59,115,118,17795,17797,17802,1,952,121,109,59,1,977,59,1,977,4,2,99,110,17811,17831,107,4,2,97,115,17818,17826,112,112,114,111,120,59,1,8776,105,109,59,1,8764,115,112,59,1,8201,4,2,97,115,17842,17846,112,59,1,8776,105,109,59,1,8764,114,110,5,254,1,59,17858,1,254,4,3,108,109,110,17868,17873,17901,100,101,59,1,732,101,115,5,215,3,59,98,100,17884,17886,17898,1,215,4,2,59,97,17892,17894,1,8864,114,59,1,10801,59,1,10800,116,59,1,8749,4,3,101,112,115,17913,17917,17953,97,59,1,10536,4,4,59,98,99,102,17927,17929,17934,17939,1,8868,111,116,59,1,9014,105,114,59,1,10993,4,2,59,111,17945,17948,3,55349,56677,114,107,59,1,10970,97,59,1,10537,114,105,109,101,59,1,8244,4,3,97,105,112,17972,17977,18082,100,101,59,1,8482,4,7,97,100,101,109,112,115,116,17993,18051,18056,18059,18066,18072,18076,110,103,108,101,4,5,59,100,108,113,114,18009,18011,18017,18032,18035,1,9653,111,119,110,59,1,9663,101,102,116,4,2,59,101,18026,18028,1,9667,113,59,1,8884,59,1,8796,105,103,104,116,4,2,59,101,18045,18047,1,9657,113,59,1,8885,111,116,59,1,9708,59,1,8796,105,110,117,115,59,1,10810,108,117,115,59,1,10809,98,59,1,10701,105,109,101,59,1,10811,101,122,105,117,109,59,1,9186,4,3,99,104,116,18098,18111,18116,4,2,114,121,18104,18108,59,3,55349,56521,59,1,1094,99,121,59,1,1115,114,111,107,59,1,359,4,2,105,111,18128,18133,120,116,59,1,8812,104,101,97,100,4,2,108,114,18143,18154,101,102,116,97,114,114,111,119,59,1,8606,105,103,104,116,97,114,114,111,119,59,1,8608,4,18,65,72,97,98,99,100,102,103,104,108,109,111,112,114,115,116,117,119,18204,18209,18214,18234,18250,18268,18292,18308,18319,18343,18379,18397,18413,18504,18547,18553,18584,18603,114,114,59,1,8657,97,114,59,1,10595,4,2,99,114,18220,18230,117,116,101,5,250,1,59,18228,1,250,114,59,1,8593,114,4,2,99,101,18241,18245,121,59,1,1118,118,101,59,1,365,4,2,105,121,18256,18265,114,99,5,251,1,59,18263,1,251,59,1,1091,4,3,97,98,104,18276,18281,18287,114,114,59,1,8645,108,97,99,59,1,369,97,114,59,1,10606,4,2,105,114,18298,18304,115,104,116,59,1,10622,59,3,55349,56626,114,97,118,101,5,249,1,59,18317,1,249,4,2,97,98,18325,18338,114,4,2,108,114,18332,18335,59,1,8639,59,1,8638,108,107,59,1,9600,4,2,99,116,18349,18374,4,2,111,114,18355,18369,114,110,4,2,59,101,18363,18365,1,8988,114,59,1,8988,111,112,59,1,8975,114,105,59,1,9720,4,2,97,108,18385,18390,99,114,59,1,363,5,168,1,59,18395,1,168,4,2,103,112,18403,18408,111,110,59,1,371,102,59,3,55349,56678,4,6,97,100,104,108,115,117,18427,18434,18445,18470,18475,18494,114,114,111,119,59,1,8593,111,119,110,97,114,114,111,119,59,1,8597,97,114,112,111,111,110,4,2,108,114,18457,18463,101,102,116,59,1,8639,105,103,104,116,59,1,8638,117,115,59,1,8846,105,4,3,59,104,108,18484,18486,18489,1,965,59,1,978,111,110,59,1,965,112,97,114,114,111,119,115,59,1,8648,4,3,99,105,116,18512,18537,18542,4,2,111,114,18518,18532,114,110,4,2,59,101,18526,18528,1,8989,114,59,1,8989,111,112,59,1,8974,110,103,59,1,367,114,105,59,1,9721,99,114,59,3,55349,56522,4,3,100,105,114,18561,18566,18572,111,116,59,1,8944,108,100,101,59,1,361,105,4,2,59,102,18579,18581,1,9653,59,1,9652,4,2,97,109,18590,18595,114,114,59,1,8648,108,5,252,1,59,18601,1,252,97,110,103,108,101,59,1,10663,4,15,65,66,68,97,99,100,101,102,108,110,111,112,114,115,122,18643,18648,18661,18667,18847,18851,18857,18904,18909,18915,18931,18937,18943,18949,18996,114,114,59,1,8661,97,114,4,2,59,118,18656,18658,1,10984,59,1,10985,97,115,104,59,1,8872,4,2,110,114,18673,18679,103,114,116,59,1,10652,4,7,101,107,110,112,114,115,116,18695,18704,18711,18720,18742,18754,18810,112,115,105,108,111,110,59,1,1013,97,112,112,97,59,1,1008,111,116,104,105,110,103,59,1,8709,4,3,104,105,114,18728,18732,18735,105,59,1,981,59,1,982,111,112,116,111,59,1,8733,4,2,59,104,18748,18750,1,8597,111,59,1,1009,4,2,105,117,18760,18766,103,109,97,59,1,962,4,2,98,112,18772,18791,115,101,116,110,101,113,4,2,59,113,18784,18787,3,8842,65024,59,3,10955,65024,115,101,116,110,101,113,4,2,59,113,18803,18806,3,8843,65024,59,3,10956,65024,4,2,104,114,18816,18822,101,116,97,59,1,977,105,97,110,103,108,101,4,2,108,114,18834,18840,101,102,116,59,1,8882,105,103,104,116,59,1,8883,121,59,1,1074,97,115,104,59,1,8866,4,3,101,108,114,18865,18884,18890,4,3,59,98,101,18873,18875,18880,1,8744,97,114,59,1,8891,113,59,1,8794,108,105,112,59,1,8942,4,2,98,116,18896,18901,97,114,59,1,124,59,1,124,114,59,3,55349,56627,116,114,105,59,1,8882,115,117,4,2,98,112,18923,18927,59,3,8834,8402,59,3,8835,8402,112,102,59,3,55349,56679,114,111,112,59,1,8733,116,114,105,59,1,8883,4,2,99,117,18955,18960,114,59,3,55349,56523,4,2,98,112,18966,18981,110,4,2,69,101,18973,18977,59,3,10955,65024,59,3,8842,65024,110,4,2,69,101,18988,18992,59,3,10956,65024,59,3,8843,65024,105,103,122,97,103,59,1,10650,4,7,99,101,102,111,112,114,115,19020,19026,19061,19066,19072,19075,19089,105,114,99,59,1,373,4,2,100,105,19032,19055,4,2,98,103,19038,19043,97,114,59,1,10847,101,4,2,59,113,19050,19052,1,8743,59,1,8793,101,114,112,59,1,8472,114,59,3,55349,56628,112,102,59,3,55349,56680,59,1,8472,4,2,59,101,19081,19083,1,8768,97,116,104,59,1,8768,99,114,59,3,55349,56524,4,14,99,100,102,104,105,108,109,110,111,114,115,117,118,119,19125,19146,19152,19157,19173,19176,19192,19197,19202,19236,19252,19269,19286,19291,4,3,97,105,117,19133,19137,19142,112,59,1,8898,114,99,59,1,9711,112,59,1,8899,116,114,105,59,1,9661,114,59,3,55349,56629,4,2,65,97,19163,19168,114,114,59,1,10234,114,114,59,1,10231,59,1,958,4,2,65,97,19182,19187,114,114,59,1,10232,114,114,59,1,10229,97,112,59,1,10236,105,115,59,1,8955,4,3,100,112,116,19210,19215,19230,111,116,59,1,10752,4,2,102,108,19221,19225,59,3,55349,56681,117,115,59,1,10753,105,109,101,59,1,10754,4,2,65,97,19242,19247,114,114,59,1,10233,114,114,59,1,10230,4,2,99,113,19258,19263,114,59,3,55349,56525,99,117,112,59,1,10758,4,2,112,116,19275,19281,108,117,115,59,1,10756,114,105,59,1,9651,101,101,59,1,8897,101,100,103,101,59,1,8896,4,8,97,99,101,102,105,111,115,117,19316,19335,19349,19357,19362,19367,19373,19379,99,4,2,117,121,19323,19332,116,101,5,253,1,59,19330,1,253,59,1,1103,4,2,105,121,19341,19346,114,99,59,1,375,59,1,1099,110,5,165,1,59,19355,1,165,114,59,3,55349,56630,99,121,59,1,1111,112,102,59,3,55349,56682,99,114,59,3,55349,56526,4,2,99,109,19385,19389,121,59,1,1102,108,5,255,1,59,19395,1,255,4,10,97,99,100,101,102,104,105,111,115,119,19419,19426,19441,19446,19462,19467,19472,19480,19486,19492,99,117,116,101,59,1,378,4,2,97,121,19432,19438,114,111,110,59,1,382,59,1,1079,111,116,59,1,380,4,2,101,116,19452,19458,116,114,102,59,1,8488,97,59,1,950,114,59,3,55349,56631,99,121,59,1,1078,103,114,97,114,114,59,1,8669,112,102,59,3,55349,56683,99,114,59,3,55349,56527,4,2,106,110,19498,19501,59,1,8205,106,59,1,8204])
const yr=Sr,Ir=gr,Rr=Or,Lr=Ar,br=Ir.CODE_POINTS,xr=Ir.CODE_POINT_SEQUENCES,Mr={
128:8364,130:8218,131:402,132:8222,133:8230,134:8224,135:8225,136:710,
137:8240,138:352,139:8249,140:338,142:381,145:8216,146:8217,147:8220,
148:8221,149:8226,150:8211,151:8212,152:732,153:8482,154:353,155:8250,
156:339,158:382,159:376
},Pr='DATA_STATE',Dr='RCDATA_STATE',vr='RAWTEXT_STATE',Hr='SCRIPT_DATA_STATE',Fr='PLAINTEXT_STATE',wr='TAG_OPEN_STATE',Br='END_TAG_OPEN_STATE',Ur='TAG_NAME_STATE',Gr='RCDATA_LESS_THAN_SIGN_STATE',Kr='RCDATA_END_TAG_OPEN_STATE',zr='RCDATA_END_TAG_NAME_STATE',jr='RAWTEXT_LESS_THAN_SIGN_STATE',Yr='RAWTEXT_END_TAG_OPEN_STATE',Qr='RAWTEXT_END_TAG_NAME_STATE',Wr='SCRIPT_DATA_LESS_THAN_SIGN_STATE',Vr='SCRIPT_DATA_END_TAG_OPEN_STATE',qr='SCRIPT_DATA_END_TAG_NAME_STATE',Xr='SCRIPT_DATA_ESCAPE_START_STATE',$r='SCRIPT_DATA_ESCAPE_START_DASH_STATE',Zr='SCRIPT_DATA_ESCAPED_STATE',Jr='SCRIPT_DATA_ESCAPED_DASH_STATE',ei='SCRIPT_DATA_ESCAPED_DASH_DASH_STATE',ti='SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE',ni='SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE',ri='SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE',ii='SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE',oi='SCRIPT_DATA_DOUBLE_ESCAPED_STATE',si='SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE',ai='SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE',li='SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE',ci='SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE',ui='BEFORE_ATTRIBUTE_NAME_STATE',hi='ATTRIBUTE_NAME_STATE',fi='AFTER_ATTRIBUTE_NAME_STATE',pi='BEFORE_ATTRIBUTE_VALUE_STATE',mi='ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE',di='ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE',Ti='ATTRIBUTE_VALUE_UNQUOTED_STATE',Ei='AFTER_ATTRIBUTE_VALUE_QUOTED_STATE',gi='SELF_CLOSING_START_TAG_STATE',_i='BOGUS_COMMENT_STATE',Ai='MARKUP_DECLARATION_OPEN_STATE',Ci='COMMENT_START_STATE',Ni='COMMENT_START_DASH_STATE',ki='COMMENT_STATE',Si='COMMENT_LESS_THAN_SIGN_STATE',Oi='COMMENT_LESS_THAN_SIGN_BANG_STATE',yi='COMMENT_LESS_THAN_SIGN_BANG_DASH_STATE',Ii='COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH_STATE',Ri='COMMENT_END_DASH_STATE',Li='COMMENT_END_STATE',bi='COMMENT_END_BANG_STATE',xi='DOCTYPE_STATE',Mi='BEFORE_DOCTYPE_NAME_STATE',Pi='DOCTYPE_NAME_STATE',Di='AFTER_DOCTYPE_NAME_STATE',vi='AFTER_DOCTYPE_PUBLIC_KEYWORD_STATE',Hi='BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE',Fi='DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE',wi='DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE',Bi='AFTER_DOCTYPE_PUBLIC_IDENTIFIER_STATE',Ui='BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE',Gi='AFTER_DOCTYPE_SYSTEM_KEYWORD_STATE',Ki='BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE',zi='DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE',ji='DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE',Yi='AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE',Qi='BOGUS_DOCTYPE_STATE',Wi='CDATA_SECTION_STATE',Vi='CDATA_SECTION_BRACKET_STATE',qi='CDATA_SECTION_END_STATE',Xi='CHARACTER_REFERENCE_STATE',$i='NAMED_CHARACTER_REFERENCE_STATE',Zi='AMBIGUOS_AMPERSAND_STATE',Ji='NUMERIC_CHARACTER_REFERENCE_STATE',eo='HEXADEMICAL_CHARACTER_REFERENCE_START_STATE',to='DECIMAL_CHARACTER_REFERENCE_START_STATE',no='HEXADEMICAL_CHARACTER_REFERENCE_STATE',ro='DECIMAL_CHARACTER_REFERENCE_STATE',io='NUMERIC_CHARACTER_REFERENCE_END_STATE'
function oo(e){
return e===br.SPACE||e===br.LINE_FEED||e===br.TABULATION||e===br.FORM_FEED
}function so(e){return e>=br.DIGIT_0&&e<=br.DIGIT_9}function ao(e){
return e>=br.LATIN_CAPITAL_A&&e<=br.LATIN_CAPITAL_Z}function lo(e){
return e>=br.LATIN_SMALL_A&&e<=br.LATIN_SMALL_Z}function co(e){
return lo(e)||ao(e)}function uo(e){return co(e)||so(e)}function ho(e){
return e>=br.LATIN_CAPITAL_A&&e<=br.LATIN_CAPITAL_F}function fo(e){
return e>=br.LATIN_SMALL_A&&e<=br.LATIN_SMALL_F}function po(e){
return e+32}function mo(e){
return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode(e>>>10&1023|55296)+String.fromCharCode(56320|1023&e))
}function To(e){return String.fromCharCode(po(e))}function Eo(e,t){
const n=Rr[++e]
let r=++e,i=r+n-1
for(;r<=i;){const e=r+i>>>1,o=Rr[e]
if(o<t)r=e+1
else{if(!(o>t))return Rr[e+n]
i=e-1}}return-1}let go=class{constructor(){
this.preprocessor=new yr,this.tokenQueue=[],
this.allowCDATA=!1,this.state=Pr,this.returnState='',
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
return this.active=!1,this.tokenQueue.push({type:go.HIBERNATION_TOKEN
}),!0}return!1}_consume(){
return this.consumedAfterSnapshot++,this.preprocessor.advance()}
_unconsume(){this.consumedAfterSnapshot--,this.preprocessor.retreat()}
_reconsumeInState(e){this.state=e,this._unconsume()}
_consumeSequenceIfMatch(e,t,n){let r=0,i=!0
const o=e.length
let s,a=0,l=t
for(;a<o;a++){if(a>0&&(l=this._consume(),r++),l===br.EOF){i=!1
break}if(s=e[a],l!==s&&(n||l!==po(s))){i=!1
break}}if(!i)for(;r--;)this._unconsume()
return i}_isTempBufferEqualToScriptString(){
if(this.tempBuff.length!==xr.SCRIPT_STRING.length)return!1
for(let e=0;e<this.tempBuff.length;e++)if(this.tempBuff[e]!==xr.SCRIPT_STRING[e])return!1
return!0}_createStartTagToken(){this.currentToken={
type:go.START_TAG_TOKEN,tagName:'',selfClosing:!1,ackSelfClosing:!1,
attrs:[]}}_createEndTagToken(){this.currentToken={
type:go.END_TAG_TOKEN,tagName:'',selfClosing:!1,attrs:[]}}
_createCommentToken(){this.currentToken={type:go.COMMENT_TOKEN,data:''
}}_createDoctypeToken(e){this.currentToken={type:go.DOCTYPE_TOKEN,
name:e,forceQuirks:!1,publicId:null,systemId:null}}
_createCharacterToken(e,t){this.currentCharacterToken={type:e,chars:t}
}_createEOFToken(){this.currentToken={type:go.EOF_TOKEN}}
_createAttr(e){this.currentAttr={name:e,value:''}}_leaveAttrName(e){
null===go.getTokenAttr(this.currentToken,this.currentAttr.name)?this.currentToken.attrs.push(this.currentAttr):this._err(Lr.duplicateAttribute),
this.state=e}_leaveAttrValue(e){this.state=e}_emitCurrentToken(){
this._emitCurrentCharacterToken()
const e=this.currentToken
this.currentToken=null,e.type===go.START_TAG_TOKEN?this.lastStartTagName=e.tagName:e.type===go.END_TAG_TOKEN&&(e.attrs.length>0&&this._err(Lr.endTagWithAttributes),
e.selfClosing&&this._err(Lr.endTagWithTrailingSolidus)),
this.tokenQueue.push(e)}_emitCurrentCharacterToken(){
this.currentCharacterToken&&(this.tokenQueue.push(this.currentCharacterToken),
this.currentCharacterToken=null)}_emitEOFToken(){
this._createEOFToken(),this._emitCurrentToken()}
_appendCharToCurrentCharacterToken(e,t){
this.currentCharacterToken&&this.currentCharacterToken.type!==e&&this._emitCurrentCharacterToken(),
this.currentCharacterToken?this.currentCharacterToken.chars+=t:this._createCharacterToken(e,t)
}_emitCodePoint(e){let t=go.CHARACTER_TOKEN
oo(e)?t=go.WHITESPACE_CHARACTER_TOKEN:e===br.NULL&&(t=go.NULL_CHARACTER_TOKEN),this._appendCharToCurrentCharacterToken(t,mo(e))
}_emitSeveralCodePoints(e){
for(let t=0;t<e.length;t++)this._emitCodePoint(e[t])}_emitChars(e){
this._appendCharToCurrentCharacterToken(go.CHARACTER_TOKEN,e)}
_matchNamedCharacterReference(e){let t=null,n=1,r=Eo(0,e)
for(this.tempBuff.push(e);r>-1;){const e=Rr[r],i=e<7
i&&1&e&&(t=2&e?[Rr[++r],Rr[++r]]:[Rr[++r]],n=0)
const o=this._consume()
if(this.tempBuff.push(o),n++,o===br.EOF)break
r=i?4&e?Eo(r,o):-1:o===e?++r:-1}
for(;n--;)this.tempBuff.pop(),this._unconsume()
return t}_isCharacterReferenceInAttribute(){
return this.returnState===mi||this.returnState===di||this.returnState===Ti
}_isCharacterReferenceAttributeQuirk(e){
if(!e&&this._isCharacterReferenceInAttribute()){
const e=this._consume()
return this._unconsume(),e===br.EQUALS_SIGN||uo(e)}return!1}
_flushCodePointsConsumedAsCharacterReference(){
if(this._isCharacterReferenceInAttribute())for(let e=0;e<this.tempBuff.length;e++)this.currentAttr.value+=mo(this.tempBuff[e])
else this._emitSeveralCodePoints(this.tempBuff)
this.tempBuff=[]}[Pr](e){
this.preprocessor.dropParsedChunk(),e===br.LESS_THAN_SIGN?this.state=wr:e===br.AMPERSAND?(this.returnState=Pr,
this.state=Xi):e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this._emitCodePoint(e)):e===br.EOF?this._emitEOFToken():this._emitCodePoint(e)
}[Dr](e){
this.preprocessor.dropParsedChunk(),e===br.AMPERSAND?(this.returnState=Dr,
this.state=Xi):e===br.LESS_THAN_SIGN?this.state=Gr:e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this._emitChars(Ir.REPLACEMENT_CHARACTER)):e===br.EOF?this._emitEOFToken():this._emitCodePoint(e)
}[vr](e){
this.preprocessor.dropParsedChunk(),e===br.LESS_THAN_SIGN?this.state=jr:e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this._emitChars(Ir.REPLACEMENT_CHARACTER)):e===br.EOF?this._emitEOFToken():this._emitCodePoint(e)
}[Hr](e){
this.preprocessor.dropParsedChunk(),e===br.LESS_THAN_SIGN?this.state=Wr:e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this._emitChars(Ir.REPLACEMENT_CHARACTER)):e===br.EOF?this._emitEOFToken():this._emitCodePoint(e)
}[Fr](e){
this.preprocessor.dropParsedChunk(),e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this._emitChars(Ir.REPLACEMENT_CHARACTER)):e===br.EOF?this._emitEOFToken():this._emitCodePoint(e)
}[wr](e){
e===br.EXCLAMATION_MARK?this.state=Ai:e===br.SOLIDUS?this.state=Br:co(e)?(this._createStartTagToken(),
this._reconsumeInState(Ur)):e===br.QUESTION_MARK?(this._err(Lr.unexpectedQuestionMarkInsteadOfTagName),
this._createCommentToken(),
this._reconsumeInState(_i)):e===br.EOF?(this._err(Lr.eofBeforeTagName),
this._emitChars('<'),
this._emitEOFToken()):(this._err(Lr.invalidFirstCharacterOfTagName),
this._emitChars('<'),this._reconsumeInState(Pr))}[Br](e){
co(e)?(this._createEndTagToken(),
this._reconsumeInState(Ur)):e===br.GREATER_THAN_SIGN?(this._err(Lr.missingEndTagName),
this.state=Pr):e===br.EOF?(this._err(Lr.eofBeforeTagName),
this._emitChars('</'),
this._emitEOFToken()):(this._err(Lr.invalidFirstCharacterOfTagName),
this._createCommentToken(),this._reconsumeInState(_i))}[Ur](e){
oo(e)?this.state=ui:e===br.SOLIDUS?this.state=gi:e===br.GREATER_THAN_SIGN?(this.state=Pr,
this._emitCurrentToken()):ao(e)?this.currentToken.tagName+=To(e):e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this.currentToken.tagName+=Ir.REPLACEMENT_CHARACTER):e===br.EOF?(this._err(Lr.eofInTag),
this._emitEOFToken()):this.currentToken.tagName+=mo(e)}[Gr](e){
e===br.SOLIDUS?(this.tempBuff=[],
this.state=Kr):(this._emitChars('<'),this._reconsumeInState(Dr))}
[Kr](e){
co(e)?(this._createEndTagToken(),this._reconsumeInState(zr)):(this._emitChars('</'),
this._reconsumeInState(Dr))}[zr](e){
if(ao(e))this.currentToken.tagName+=To(e),this.tempBuff.push(e)
else if(lo(e))this.currentToken.tagName+=mo(e),this.tempBuff.push(e)
else{if(this.lastStartTagName===this.currentToken.tagName){
if(oo(e))return void(this.state=ui)
if(e===br.SOLIDUS)return void(this.state=gi)
if(e===br.GREATER_THAN_SIGN)return this.state=Pr,void this._emitCurrentToken()
}
this._emitChars('</'),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState(Dr)
}}[jr](e){
e===br.SOLIDUS?(this.tempBuff=[],this.state=Yr):(this._emitChars('<'),
this._reconsumeInState(vr))}[Yr](e){
co(e)?(this._createEndTagToken(),this._reconsumeInState(Qr)):(this._emitChars('</'),
this._reconsumeInState(vr))}[Qr](e){
if(ao(e))this.currentToken.tagName+=To(e),this.tempBuff.push(e)
else if(lo(e))this.currentToken.tagName+=mo(e),this.tempBuff.push(e)
else{if(this.lastStartTagName===this.currentToken.tagName){
if(oo(e))return void(this.state=ui)
if(e===br.SOLIDUS)return void(this.state=gi)
if(e===br.GREATER_THAN_SIGN)return this._emitCurrentToken(),void(this.state=Pr)
}
this._emitChars('</'),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState(vr)
}}[Wr](e){
e===br.SOLIDUS?(this.tempBuff=[],this.state=Vr):e===br.EXCLAMATION_MARK?(this.state=Xr,
this._emitChars('<!')):(this._emitChars('<'),
this._reconsumeInState(Hr))}[Vr](e){
co(e)?(this._createEndTagToken(),this._reconsumeInState(qr)):(this._emitChars('</'),
this._reconsumeInState(Hr))}[qr](e){
if(ao(e))this.currentToken.tagName+=To(e),this.tempBuff.push(e)
else if(lo(e))this.currentToken.tagName+=mo(e),this.tempBuff.push(e)
else{if(this.lastStartTagName===this.currentToken.tagName){
if(oo(e))return void(this.state=ui)
if(e===br.SOLIDUS)return void(this.state=gi)
if(e===br.GREATER_THAN_SIGN)return this._emitCurrentToken(),void(this.state=Pr)
}
this._emitChars('</'),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState(Hr)
}}[Xr](e){
e===br.HYPHEN_MINUS?(this.state=$r,this._emitChars('-')):this._reconsumeInState(Hr)
}[$r](e){
e===br.HYPHEN_MINUS?(this.state=ei,this._emitChars('-')):this._reconsumeInState(Hr)
}[Zr](e){
e===br.HYPHEN_MINUS?(this.state=Jr,this._emitChars('-')):e===br.LESS_THAN_SIGN?this.state=ti:e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this._emitChars(Ir.REPLACEMENT_CHARACTER)):e===br.EOF?(this._err(Lr.eofInScriptHtmlCommentLikeText),
this._emitEOFToken()):this._emitCodePoint(e)}[Jr](e){
e===br.HYPHEN_MINUS?(this.state=ei,
this._emitChars('-')):e===br.LESS_THAN_SIGN?this.state=ti:e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this.state=Zr,
this._emitChars(Ir.REPLACEMENT_CHARACTER)):e===br.EOF?(this._err(Lr.eofInScriptHtmlCommentLikeText),
this._emitEOFToken()):(this.state=Zr,this._emitCodePoint(e))}[ei](e){
e===br.HYPHEN_MINUS?this._emitChars('-'):e===br.LESS_THAN_SIGN?this.state=ti:e===br.GREATER_THAN_SIGN?(this.state=Hr,
this._emitChars('>')):e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this.state=Zr,
this._emitChars(Ir.REPLACEMENT_CHARACTER)):e===br.EOF?(this._err(Lr.eofInScriptHtmlCommentLikeText),
this._emitEOFToken()):(this.state=Zr,this._emitCodePoint(e))}[ti](e){
e===br.SOLIDUS?(this.tempBuff=[],
this.state=ni):co(e)?(this.tempBuff=[],this._emitChars('<'),
this._reconsumeInState(ii)):(this._emitChars('<'),
this._reconsumeInState(Zr))}[ni](e){
co(e)?(this._createEndTagToken(),this._reconsumeInState(ri)):(this._emitChars('</'),
this._reconsumeInState(Zr))}[ri](e){
if(ao(e))this.currentToken.tagName+=To(e),this.tempBuff.push(e)
else if(lo(e))this.currentToken.tagName+=mo(e),this.tempBuff.push(e)
else{if(this.lastStartTagName===this.currentToken.tagName){
if(oo(e))return void(this.state=ui)
if(e===br.SOLIDUS)return void(this.state=gi)
if(e===br.GREATER_THAN_SIGN)return this._emitCurrentToken(),void(this.state=Pr)
}
this._emitChars('</'),this._emitSeveralCodePoints(this.tempBuff),this._reconsumeInState(Zr)
}}[ii](e){
oo(e)||e===br.SOLIDUS||e===br.GREATER_THAN_SIGN?(this.state=this._isTempBufferEqualToScriptString()?oi:Zr,
this._emitCodePoint(e)):ao(e)?(this.tempBuff.push(po(e)),
this._emitCodePoint(e)):lo(e)?(this.tempBuff.push(e),
this._emitCodePoint(e)):this._reconsumeInState(Zr)}[oi](e){
e===br.HYPHEN_MINUS?(this.state=si,
this._emitChars('-')):e===br.LESS_THAN_SIGN?(this.state=li,
this._emitChars('<')):e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this._emitChars(Ir.REPLACEMENT_CHARACTER)):e===br.EOF?(this._err(Lr.eofInScriptHtmlCommentLikeText),
this._emitEOFToken()):this._emitCodePoint(e)}[si](e){
e===br.HYPHEN_MINUS?(this.state=ai,
this._emitChars('-')):e===br.LESS_THAN_SIGN?(this.state=li,
this._emitChars('<')):e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this.state=oi,
this._emitChars(Ir.REPLACEMENT_CHARACTER)):e===br.EOF?(this._err(Lr.eofInScriptHtmlCommentLikeText),
this._emitEOFToken()):(this.state=oi,this._emitCodePoint(e))}[ai](e){
e===br.HYPHEN_MINUS?this._emitChars('-'):e===br.LESS_THAN_SIGN?(this.state=li,
this._emitChars('<')):e===br.GREATER_THAN_SIGN?(this.state=Hr,
this._emitChars('>')):e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this.state=oi,
this._emitChars(Ir.REPLACEMENT_CHARACTER)):e===br.EOF?(this._err(Lr.eofInScriptHtmlCommentLikeText),
this._emitEOFToken()):(this.state=oi,this._emitCodePoint(e))}[li](e){
e===br.SOLIDUS?(this.tempBuff=[],
this.state=ci,this._emitChars('/')):this._reconsumeInState(oi)}
[ci](e){
oo(e)||e===br.SOLIDUS||e===br.GREATER_THAN_SIGN?(this.state=this._isTempBufferEqualToScriptString()?Zr:oi,
this._emitCodePoint(e)):ao(e)?(this.tempBuff.push(po(e)),
this._emitCodePoint(e)):lo(e)?(this.tempBuff.push(e),
this._emitCodePoint(e)):this._reconsumeInState(oi)}[ui](e){
oo(e)||(e===br.SOLIDUS||e===br.GREATER_THAN_SIGN||e===br.EOF?this._reconsumeInState(fi):e===br.EQUALS_SIGN?(this._err(Lr.unexpectedEqualsSignBeforeAttributeName),
this._createAttr('='),
this.state=hi):(this._createAttr(''),this._reconsumeInState(hi)))}
[hi](e){
oo(e)||e===br.SOLIDUS||e===br.GREATER_THAN_SIGN||e===br.EOF?(this._leaveAttrName(fi),
this._unconsume()):e===br.EQUALS_SIGN?this._leaveAttrName(pi):ao(e)?this.currentAttr.name+=To(e):e===br.QUOTATION_MARK||e===br.APOSTROPHE||e===br.LESS_THAN_SIGN?(this._err(Lr.unexpectedCharacterInAttributeName),
this.currentAttr.name+=mo(e)):e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this.currentAttr.name+=Ir.REPLACEMENT_CHARACTER):this.currentAttr.name+=mo(e)
}[fi](e){
oo(e)||(e===br.SOLIDUS?this.state=gi:e===br.EQUALS_SIGN?this.state=pi:e===br.GREATER_THAN_SIGN?(this.state=Pr,
this._emitCurrentToken()):e===br.EOF?(this._err(Lr.eofInTag),
this._emitEOFToken()):(this._createAttr(''),
this._reconsumeInState(hi)))}[pi](e){
oo(e)||(e===br.QUOTATION_MARK?this.state=mi:e===br.APOSTROPHE?this.state=di:e===br.GREATER_THAN_SIGN?(this._err(Lr.missingAttributeValue),
this.state=Pr,this._emitCurrentToken()):this._reconsumeInState(Ti))}
[mi](e){
e===br.QUOTATION_MARK?this.state=Ei:e===br.AMPERSAND?(this.returnState=mi,
this.state=Xi):e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this.currentAttr.value+=Ir.REPLACEMENT_CHARACTER):e===br.EOF?(this._err(Lr.eofInTag),
this._emitEOFToken()):this.currentAttr.value+=mo(e)}[di](e){
e===br.APOSTROPHE?this.state=Ei:e===br.AMPERSAND?(this.returnState=di,
this.state=Xi):e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this.currentAttr.value+=Ir.REPLACEMENT_CHARACTER):e===br.EOF?(this._err(Lr.eofInTag),
this._emitEOFToken()):this.currentAttr.value+=mo(e)}[Ti](e){
oo(e)?this._leaveAttrValue(ui):e===br.AMPERSAND?(this.returnState=Ti,
this.state=Xi):e===br.GREATER_THAN_SIGN?(this._leaveAttrValue(Pr),
this._emitCurrentToken()):e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this.currentAttr.value+=Ir.REPLACEMENT_CHARACTER):e===br.QUOTATION_MARK||e===br.APOSTROPHE||e===br.LESS_THAN_SIGN||e===br.EQUALS_SIGN||e===br.GRAVE_ACCENT?(this._err(Lr.unexpectedCharacterInUnquotedAttributeValue),
this.currentAttr.value+=mo(e)):e===br.EOF?(this._err(Lr.eofInTag),
this._emitEOFToken()):this.currentAttr.value+=mo(e)}[Ei](e){
oo(e)?this._leaveAttrValue(ui):e===br.SOLIDUS?this._leaveAttrValue(gi):e===br.GREATER_THAN_SIGN?(this._leaveAttrValue(Pr),
this._emitCurrentToken()):e===br.EOF?(this._err(Lr.eofInTag),
this._emitEOFToken()):(this._err(Lr.missingWhitespaceBetweenAttributes),
this._reconsumeInState(ui))}[gi](e){
e===br.GREATER_THAN_SIGN?(this.currentToken.selfClosing=!0,
this.state=Pr,this._emitCurrentToken()):e===br.EOF?(this._err(Lr.eofInTag),
this._emitEOFToken()):(this._err(Lr.unexpectedSolidusInTag),
this._reconsumeInState(ui))}[_i](e){
e===br.GREATER_THAN_SIGN?(this.state=Pr,this._emitCurrentToken()):e===br.EOF?(this._emitCurrentToken(),
this._emitEOFToken()):e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this.currentToken.data+=Ir.REPLACEMENT_CHARACTER):this.currentToken.data+=mo(e)
}[Ai](e){
this._consumeSequenceIfMatch(xr.DASH_DASH_STRING,e,!0)?(this._createCommentToken(),
this.state=Ci):this._consumeSequenceIfMatch(xr.DOCTYPE_STRING,e,!1)?this.state=xi:this._consumeSequenceIfMatch(xr.CDATA_START_STRING,e,!0)?this.allowCDATA?this.state=Wi:(this._err(Lr.cdataInHtmlContent),
this._createCommentToken(),
this.currentToken.data='[CDATA[',this.state=_i):this._ensureHibernation()||(this._err(Lr.incorrectlyOpenedComment),
this._createCommentToken(),this._reconsumeInState(_i))}[Ci](e){
e===br.HYPHEN_MINUS?this.state=Ni:e===br.GREATER_THAN_SIGN?(this._err(Lr.abruptClosingOfEmptyComment),
this.state=Pr,this._emitCurrentToken()):this._reconsumeInState(ki)}
[Ni](e){
e===br.HYPHEN_MINUS?this.state=Li:e===br.GREATER_THAN_SIGN?(this._err(Lr.abruptClosingOfEmptyComment),
this.state=Pr,
this._emitCurrentToken()):e===br.EOF?(this._err(Lr.eofInComment),this._emitCurrentToken(),
this._emitEOFToken()):(this.currentToken.data+='-',
this._reconsumeInState(ki))}[ki](e){
e===br.HYPHEN_MINUS?this.state=Ri:e===br.LESS_THAN_SIGN?(this.currentToken.data+='<',
this.state=Si):e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this.currentToken.data+=Ir.REPLACEMENT_CHARACTER):e===br.EOF?(this._err(Lr.eofInComment),
this._emitCurrentToken(),
this._emitEOFToken()):this.currentToken.data+=mo(e)}[Si](e){
e===br.EXCLAMATION_MARK?(this.currentToken.data+='!',
this.state=Oi):e===br.LESS_THAN_SIGN?this.currentToken.data+='!':this._reconsumeInState(ki)
}[Oi](e){e===br.HYPHEN_MINUS?this.state=yi:this._reconsumeInState(ki)}
[yi](e){e===br.HYPHEN_MINUS?this.state=Ii:this._reconsumeInState(Ri)}
[Ii](e){
e!==br.GREATER_THAN_SIGN&&e!==br.EOF&&this._err(Lr.nestedComment),this._reconsumeInState(Li)
}[Ri](e){
e===br.HYPHEN_MINUS?this.state=Li:e===br.EOF?(this._err(Lr.eofInComment),
this._emitCurrentToken(),
this._emitEOFToken()):(this.currentToken.data+='-',this._reconsumeInState(ki))
}[Li](e){
e===br.GREATER_THAN_SIGN?(this.state=Pr,this._emitCurrentToken()):e===br.EXCLAMATION_MARK?this.state=bi:e===br.HYPHEN_MINUS?this.currentToken.data+='-':e===br.EOF?(this._err(Lr.eofInComment),
this._emitCurrentToken(),
this._emitEOFToken()):(this.currentToken.data+='--',this._reconsumeInState(ki))
}[bi](e){
e===br.HYPHEN_MINUS?(this.currentToken.data+='--!',this.state=Ri):e===br.GREATER_THAN_SIGN?(this._err(Lr.incorrectlyClosedComment),
this.state=Pr,
this._emitCurrentToken()):e===br.EOF?(this._err(Lr.eofInComment),this._emitCurrentToken(),
this._emitEOFToken()):(this.currentToken.data+='--!',
this._reconsumeInState(ki))}[xi](e){
oo(e)?this.state=Mi:e===br.GREATER_THAN_SIGN?this._reconsumeInState(Mi):e===br.EOF?(this._err(Lr.eofInDoctype),
this._createDoctypeToken(null),
this.currentToken.forceQuirks=!0,this._emitCurrentToken(),
this._emitEOFToken()):(this._err(Lr.missingWhitespaceBeforeDoctypeName),
this._reconsumeInState(Mi))}[Mi](e){
oo(e)||(ao(e)?(this._createDoctypeToken(To(e)),
this.state=Pi):e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this._createDoctypeToken(Ir.REPLACEMENT_CHARACTER),
this.state=Pi):e===br.GREATER_THAN_SIGN?(this._err(Lr.missingDoctypeName),
this._createDoctypeToken(null),
this.currentToken.forceQuirks=!0,this._emitCurrentToken(),
this.state=Pr):e===br.EOF?(this._err(Lr.eofInDoctype),
this._createDoctypeToken(null),
this.currentToken.forceQuirks=!0,this._emitCurrentToken(),
this._emitEOFToken()):(this._createDoctypeToken(mo(e)),this.state=Pi))
}[Pi](e){
oo(e)?this.state=Di:e===br.GREATER_THAN_SIGN?(this.state=Pr,this._emitCurrentToken()):ao(e)?this.currentToken.name+=To(e):e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this.currentToken.name+=Ir.REPLACEMENT_CHARACTER):e===br.EOF?(this._err(Lr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.name+=mo(e)
}[Di](e){
oo(e)||(e===br.GREATER_THAN_SIGN?(this.state=Pr,this._emitCurrentToken()):e===br.EOF?(this._err(Lr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):this._consumeSequenceIfMatch(xr.PUBLIC_STRING,e,!1)?this.state=vi:this._consumeSequenceIfMatch(xr.SYSTEM_STRING,e,!1)?this.state=Gi:this._ensureHibernation()||(this._err(Lr.invalidCharacterSequenceAfterDoctypeName),
this.currentToken.forceQuirks=!0,this._reconsumeInState(Qi)))}[vi](e){
oo(e)?this.state=Hi:e===br.QUOTATION_MARK?(this._err(Lr.missingWhitespaceAfterDoctypePublicKeyword),
this.currentToken.publicId='',
this.state=Fi):e===br.APOSTROPHE?(this._err(Lr.missingWhitespaceAfterDoctypePublicKeyword),
this.currentToken.publicId='',
this.state=wi):e===br.GREATER_THAN_SIGN?(this._err(Lr.missingDoctypePublicIdentifier),
this.currentToken.forceQuirks=!0,
this.state=Pr,this._emitCurrentToken()):e===br.EOF?(this._err(Lr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):(this._err(Lr.missingQuoteBeforeDoctypePublicIdentifier),
this.currentToken.forceQuirks=!0,this._reconsumeInState(Qi))}[Hi](e){
oo(e)||(e===br.QUOTATION_MARK?(this.currentToken.publicId='',
this.state=Fi):e===br.APOSTROPHE?(this.currentToken.publicId='',
this.state=wi):e===br.GREATER_THAN_SIGN?(this._err(Lr.missingDoctypePublicIdentifier),
this.currentToken.forceQuirks=!0,
this.state=Pr,this._emitCurrentToken()):e===br.EOF?(this._err(Lr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):(this._err(Lr.missingQuoteBeforeDoctypePublicIdentifier),
this.currentToken.forceQuirks=!0,this._reconsumeInState(Qi)))}[Fi](e){
e===br.QUOTATION_MARK?this.state=Bi:e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this.currentToken.publicId+=Ir.REPLACEMENT_CHARACTER):e===br.GREATER_THAN_SIGN?(this._err(Lr.abruptDoctypePublicIdentifier),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this.state=Pr):e===br.EOF?(this._err(Lr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.publicId+=mo(e)
}[wi](e){
e===br.APOSTROPHE?this.state=Bi:e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this.currentToken.publicId+=Ir.REPLACEMENT_CHARACTER):e===br.GREATER_THAN_SIGN?(this._err(Lr.abruptDoctypePublicIdentifier),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this.state=Pr):e===br.EOF?(this._err(Lr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.publicId+=mo(e)
}[Bi](e){
oo(e)?this.state=Ui:e===br.GREATER_THAN_SIGN?(this.state=Pr,this._emitCurrentToken()):e===br.QUOTATION_MARK?(this._err(Lr.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),
this.currentToken.systemId='',
this.state=zi):e===br.APOSTROPHE?(this._err(Lr.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers),
this.currentToken.systemId='',
this.state=ji):e===br.EOF?(this._err(Lr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):(this._err(Lr.missingQuoteBeforeDoctypeSystemIdentifier),
this.currentToken.forceQuirks=!0,this._reconsumeInState(Qi))}[Ui](e){
oo(e)||(e===br.GREATER_THAN_SIGN?(this._emitCurrentToken(),
this.state=Pr):e===br.QUOTATION_MARK?(this.currentToken.systemId='',
this.state=zi):e===br.APOSTROPHE?(this.currentToken.systemId='',
this.state=ji):e===br.EOF?(this._err(Lr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):(this._err(Lr.missingQuoteBeforeDoctypeSystemIdentifier),
this.currentToken.forceQuirks=!0,this._reconsumeInState(Qi)))}[Gi](e){
oo(e)?this.state=Ki:e===br.QUOTATION_MARK?(this._err(Lr.missingWhitespaceAfterDoctypeSystemKeyword),
this.currentToken.systemId='',
this.state=zi):e===br.APOSTROPHE?(this._err(Lr.missingWhitespaceAfterDoctypeSystemKeyword),
this.currentToken.systemId='',
this.state=ji):e===br.GREATER_THAN_SIGN?(this._err(Lr.missingDoctypeSystemIdentifier),
this.currentToken.forceQuirks=!0,
this.state=Pr,this._emitCurrentToken()):e===br.EOF?(this._err(Lr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):(this._err(Lr.missingQuoteBeforeDoctypeSystemIdentifier),
this.currentToken.forceQuirks=!0,this._reconsumeInState(Qi))}[Ki](e){
oo(e)||(e===br.QUOTATION_MARK?(this.currentToken.systemId='',
this.state=zi):e===br.APOSTROPHE?(this.currentToken.systemId='',
this.state=ji):e===br.GREATER_THAN_SIGN?(this._err(Lr.missingDoctypeSystemIdentifier),
this.currentToken.forceQuirks=!0,
this.state=Pr,this._emitCurrentToken()):e===br.EOF?(this._err(Lr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):(this._err(Lr.missingQuoteBeforeDoctypeSystemIdentifier),
this.currentToken.forceQuirks=!0,this._reconsumeInState(Qi)))}[zi](e){
e===br.QUOTATION_MARK?this.state=Yi:e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this.currentToken.systemId+=Ir.REPLACEMENT_CHARACTER):e===br.GREATER_THAN_SIGN?(this._err(Lr.abruptDoctypeSystemIdentifier),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this.state=Pr):e===br.EOF?(this._err(Lr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.systemId+=mo(e)
}[ji](e){
e===br.APOSTROPHE?this.state=Yi:e===br.NULL?(this._err(Lr.unexpectedNullCharacter),
this.currentToken.systemId+=Ir.REPLACEMENT_CHARACTER):e===br.GREATER_THAN_SIGN?(this._err(Lr.abruptDoctypeSystemIdentifier),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this.state=Pr):e===br.EOF?(this._err(Lr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):this.currentToken.systemId+=mo(e)
}[Yi](e){
oo(e)||(e===br.GREATER_THAN_SIGN?(this._emitCurrentToken(),this.state=Pr):e===br.EOF?(this._err(Lr.eofInDoctype),
this.currentToken.forceQuirks=!0,
this._emitCurrentToken(),this._emitEOFToken()):(this._err(Lr.unexpectedCharacterAfterDoctypeSystemIdentifier),
this._reconsumeInState(Qi)))}[Qi](e){
e===br.GREATER_THAN_SIGN?(this._emitCurrentToken(),
this.state=Pr):e===br.NULL?this._err(Lr.unexpectedNullCharacter):e===br.EOF&&(this._emitCurrentToken(),
this._emitEOFToken())}[Wi](e){
e===br.RIGHT_SQUARE_BRACKET?this.state=Vi:e===br.EOF?(this._err(Lr.eofInCdata),
this._emitEOFToken()):this._emitCodePoint(e)}[Vi](e){
e===br.RIGHT_SQUARE_BRACKET?this.state=qi:(this._emitChars(']'),
this._reconsumeInState(Wi))}[qi](e){
e===br.GREATER_THAN_SIGN?this.state=Pr:e===br.RIGHT_SQUARE_BRACKET?this._emitChars(']'):(this._emitChars(']]'),
this._reconsumeInState(Wi))}[Xi](e){
this.tempBuff=[br.AMPERSAND],e===br.NUMBER_SIGN?(this.tempBuff.push(e),
this.state=Ji):uo(e)?this._reconsumeInState($i):(this._flushCodePointsConsumedAsCharacterReference(),
this._reconsumeInState(this.returnState))}[$i](e){
const t=this._matchNamedCharacterReference(e)
if(this._ensureHibernation())this.tempBuff=[br.AMPERSAND]
else if(t){
const e=this.tempBuff[this.tempBuff.length-1]===br.SEMICOLON
this._isCharacterReferenceAttributeQuirk(e)||(e||this._errOnNextCodePoint(Lr.missingSemicolonAfterCharacterReference),
this.tempBuff=t),
this._flushCodePointsConsumedAsCharacterReference(),this.state=this.returnState
}else this._flushCodePointsConsumedAsCharacterReference(),
this.state=Zi}[Zi](e){
uo(e)?this._isCharacterReferenceInAttribute()?this.currentAttr.value+=mo(e):this._emitCodePoint(e):(e===br.SEMICOLON&&this._err(Lr.unknownNamedCharacterReference),
this._reconsumeInState(this.returnState))}[Ji](e){
this.charRefCode=0,e===br.LATIN_SMALL_X||e===br.LATIN_CAPITAL_X?(this.tempBuff.push(e),
this.state=eo):this._reconsumeInState(to)}[eo](e){!function(e){
return so(e)||ho(e)||fo(e)
}(e)?(this._err(Lr.absenceOfDigitsInNumericCharacterReference),
this._flushCodePointsConsumedAsCharacterReference(),
this._reconsumeInState(this.returnState)):this._reconsumeInState(no)}
[to](e){
so(e)?this._reconsumeInState(ro):(this._err(Lr.absenceOfDigitsInNumericCharacterReference),
this._flushCodePointsConsumedAsCharacterReference(),
this._reconsumeInState(this.returnState))}[no](e){
ho(e)?this.charRefCode=16*this.charRefCode+e-55:fo(e)?this.charRefCode=16*this.charRefCode+e-87:so(e)?this.charRefCode=16*this.charRefCode+e-48:e===br.SEMICOLON?this.state=io:(this._err(Lr.missingSemicolonAfterCharacterReference),
this._reconsumeInState(io))}[ro](e){
so(e)?this.charRefCode=10*this.charRefCode+e-48:e===br.SEMICOLON?this.state=io:(this._err(Lr.missingSemicolonAfterCharacterReference),
this._reconsumeInState(io))}[io](){
if(this.charRefCode===br.NULL)this._err(Lr.nullCharacterReference),
this.charRefCode=br.REPLACEMENT_CHARACTER
else if(this.charRefCode>1114111)this._err(Lr.characterReferenceOutsideUnicodeRange),
this.charRefCode=br.REPLACEMENT_CHARACTER
else if(Ir.isSurrogate(this.charRefCode))this._err(Lr.surrogateCharacterReference),
this.charRefCode=br.REPLACEMENT_CHARACTER
else if(Ir.isUndefinedCodePoint(this.charRefCode))this._err(Lr.noncharacterCharacterReference)
else if(Ir.isControlCodePoint(this.charRefCode)||this.charRefCode===br.CARRIAGE_RETURN){
this._err(Lr.controlCharacterReference)
const e=Mr[this.charRefCode]
e&&(this.charRefCode=e)}
this.tempBuff=[this.charRefCode],this._flushCodePointsConsumedAsCharacterReference(),
this._reconsumeInState(this.returnState)}}
go.CHARACTER_TOKEN='CHARACTER_TOKEN',go.NULL_CHARACTER_TOKEN='NULL_CHARACTER_TOKEN',
go.WHITESPACE_CHARACTER_TOKEN='WHITESPACE_CHARACTER_TOKEN',
go.START_TAG_TOKEN='START_TAG_TOKEN',
go.END_TAG_TOKEN='END_TAG_TOKEN',go.COMMENT_TOKEN='COMMENT_TOKEN',
go.DOCTYPE_TOKEN='DOCTYPE_TOKEN',
go.EOF_TOKEN='EOF_TOKEN',go.HIBERNATION_TOKEN='HIBERNATION_TOKEN',
go.MODE={DATA:Pr,RCDATA:Dr,RAWTEXT:vr,SCRIPT_DATA:Hr,PLAINTEXT:Fr
},go.getTokenAttr=function(e,t){
for(let n=e.attrs.length-1;n>=0;n--)if(e.attrs[n].name===t)return e.attrs[n].value
return null}
var _o=go,Ao={}
const Co=Ao.NAMESPACES={HTML:'http://www.w3.org/1999/xhtml',
MATHML:'http://www.w3.org/1998/Math/MathML',
SVG:'http://www.w3.org/2000/svg',XLINK:'http://www.w3.org/1999/xlink',
XML:'http://www.w3.org/XML/1998/namespace',
XMLNS:'http://www.w3.org/2000/xmlns/'}
Ao.ATTRS={TYPE:'type',ACTION:'action',ENCODING:'encoding',
PROMPT:'prompt',NAME:'name',COLOR:'color',FACE:'face',SIZE:'size'
},Ao.DOCUMENT_MODE={NO_QUIRKS:'no-quirks',QUIRKS:'quirks',
LIMITED_QUIRKS:'limited-quirks'}
const No=Ao.TAG_NAMES={A:'a',ADDRESS:'address',
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
Ao.SPECIAL_ELEMENTS={[Co.HTML]:{[No.ADDRESS]:!0,[No.APPLET]:!0,
[No.AREA]:!0,[No.ARTICLE]:!0,[No.ASIDE]:!0,[No.BASE]:!0,
[No.BASEFONT]:!0,[No.BGSOUND]:!0,[No.BLOCKQUOTE]:!0,[No.BODY]:!0,
[No.BR]:!0,[No.BUTTON]:!0,[No.CAPTION]:!0,[No.CENTER]:!0,[No.COL]:!0,
[No.COLGROUP]:!0,[No.DD]:!0,[No.DETAILS]:!0,[No.DIR]:!0,[No.DIV]:!0,
[No.DL]:!0,[No.DT]:!0,[No.EMBED]:!0,[No.FIELDSET]:!0,
[No.FIGCAPTION]:!0,[No.FIGURE]:!0,[No.FOOTER]:!0,[No.FORM]:!0,
[No.FRAME]:!0,[No.FRAMESET]:!0,[No.H1]:!0,[No.H2]:!0,[No.H3]:!0,
[No.H4]:!0,[No.H5]:!0,[No.H6]:!0,[No.HEAD]:!0,[No.HEADER]:!0,
[No.HGROUP]:!0,[No.HR]:!0,[No.HTML]:!0,[No.IFRAME]:!0,[No.IMG]:!0,
[No.INPUT]:!0,[No.LI]:!0,[No.LINK]:!0,[No.LISTING]:!0,[No.MAIN]:!0,
[No.MARQUEE]:!0,[No.MENU]:!0,[No.META]:!0,[No.NAV]:!0,[No.NOEMBED]:!0,
[No.NOFRAMES]:!0,[No.NOSCRIPT]:!0,[No.OBJECT]:!0,[No.OL]:!0,[No.P]:!0,
[No.PARAM]:!0,[No.PLAINTEXT]:!0,[No.PRE]:!0,[No.SCRIPT]:!0,
[No.SECTION]:!0,[No.SELECT]:!0,[No.SOURCE]:!0,[No.STYLE]:!0,
[No.SUMMARY]:!0,[No.TABLE]:!0,[No.TBODY]:!0,[No.TD]:!0,
[No.TEMPLATE]:!0,[No.TEXTAREA]:!0,[No.TFOOT]:!0,[No.TH]:!0,
[No.THEAD]:!0,[No.TITLE]:!0,[No.TR]:!0,[No.TRACK]:!0,[No.UL]:!0,
[No.WBR]:!0,[No.XMP]:!0},[Co.MATHML]:{[No.MI]:!0,[No.MO]:!0,
[No.MN]:!0,[No.MS]:!0,[No.MTEXT]:!0,[No.ANNOTATION_XML]:!0},[Co.SVG]:{
[No.TITLE]:!0,[No.FOREIGN_OBJECT]:!0,[No.DESC]:!0}}
const ko=Ao,So=ko.TAG_NAMES,Oo=ko.NAMESPACES
function yo(e){switch(e.length){case 1:return e===So.P
case 2:
return e===So.RB||e===So.RP||e===So.RT||e===So.DD||e===So.DT||e===So.LI
case 3:return e===So.RTC
case 6:return e===So.OPTION
case 8:return e===So.OPTGROUP}return!1}function Io(e){
switch(e.length){case 1:return e===So.P
case 2:
return e===So.RB||e===So.RP||e===So.RT||e===So.DD||e===So.DT||e===So.LI||e===So.TD||e===So.TH||e===So.TR
case 3:return e===So.RTC
case 5:return e===So.TBODY||e===So.TFOOT||e===So.THEAD
case 6:return e===So.OPTION
case 7:return e===So.CAPTION
case 8:return e===So.OPTGROUP||e===So.COLGROUP}return!1}
function Ro(e,t){switch(e.length){case 2:
if(e===So.TD||e===So.TH)return t===Oo.HTML
if(e===So.MI||e===So.MO||e===So.MN||e===So.MS)return t===Oo.MATHML
break
case 4:if(e===So.HTML)return t===Oo.HTML
if(e===So.DESC)return t===Oo.SVG
break
case 5:if(e===So.TABLE)return t===Oo.HTML
if(e===So.MTEXT)return t===Oo.MATHML
if(e===So.TITLE)return t===Oo.SVG
break
case 6:return(e===So.APPLET||e===So.OBJECT)&&t===Oo.HTML
case 7:return(e===So.CAPTION||e===So.MARQUEE)&&t===Oo.HTML
case 8:return e===So.TEMPLATE&&t===Oo.HTML
case 13:return e===So.FOREIGN_OBJECT&&t===Oo.SVG
case 14:return e===So.ANNOTATION_XML&&t===Oo.MATHML}return!1}
var Lo=class{constructor(e,t){
this.stackTop=-1,this.items=[],this.current=e,this.currentTagName=null,
this.currentTmplContent=null,this.tmplCount=0,this.treeAdapter=t}
_indexOf(e){let t=-1
for(let n=this.stackTop;n>=0;n--)if(this.items[n]===e){t=n
break}return t}_isInTemplate(){
return this.currentTagName===So.TEMPLATE&&this.treeAdapter.getNamespaceURI(this.current)===Oo.HTML
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
if(this.pop(),t===e&&n===Oo.HTML)break}}popUntilElementPopped(e){
for(;this.stackTop>-1;){const t=this.current
if(this.pop(),t===e)break}}popUntilNumberedHeaderPopped(){
for(;this.stackTop>-1;){
const e=this.currentTagName,t=this.treeAdapter.getNamespaceURI(this.current)
if(this.pop(),e===So.H1||e===So.H2||e===So.H3||e===So.H4||e===So.H5||e===So.H6&&t===Oo.HTML)break
}}popUntilTableCellPopped(){for(;this.stackTop>-1;){
const e=this.currentTagName,t=this.treeAdapter.getNamespaceURI(this.current)
if(this.pop(),e===So.TD||e===So.TH&&t===Oo.HTML)break}}
popAllUpToHtmlElement(){this.stackTop=0,this._updateCurrentElement()}
clearBackToTableContext(){
for(;this.currentTagName!==So.TABLE&&this.currentTagName!==So.TEMPLATE&&this.currentTagName!==So.HTML||this.treeAdapter.getNamespaceURI(this.current)!==Oo.HTML;)this.pop()
}clearBackToTableBodyContext(){
for(;this.currentTagName!==So.TBODY&&this.currentTagName!==So.TFOOT&&this.currentTagName!==So.THEAD&&this.currentTagName!==So.TEMPLATE&&this.currentTagName!==So.HTML||this.treeAdapter.getNamespaceURI(this.current)!==Oo.HTML;)this.pop()
}clearBackToTableRowContext(){
for(;this.currentTagName!==So.TR&&this.currentTagName!==So.TEMPLATE&&this.currentTagName!==So.HTML||this.treeAdapter.getNamespaceURI(this.current)!==Oo.HTML;)this.pop()
}remove(e){for(let t=this.stackTop;t>=0;t--)if(this.items[t]===e){
this.items.splice(t,1),this.stackTop--,this._updateCurrentElement()
break}}tryPeekProperlyNestedBodyElement(){const e=this.items[1]
return e&&this.treeAdapter.getTagName(e)===So.BODY?e:null}contains(e){
return this._indexOf(e)>-1}getCommonAncestor(e){let t=this._indexOf(e)
return--t>=0?this.items[t]:null}isRootHtmlElementCurrent(){
return 0===this.stackTop&&this.currentTagName===So.HTML}hasInScope(e){
for(let t=this.stackTop;t>=0;t--){
const n=this.treeAdapter.getTagName(this.items[t]),r=this.treeAdapter.getNamespaceURI(this.items[t])
if(n===e&&r===Oo.HTML)return!0
if(Ro(n,r))return!1}return!0}hasNumberedHeaderInScope(){
for(let e=this.stackTop;e>=0;e--){
const t=this.treeAdapter.getTagName(this.items[e]),n=this.treeAdapter.getNamespaceURI(this.items[e])
if((t===So.H1||t===So.H2||t===So.H3||t===So.H4||t===So.H5||t===So.H6)&&n===Oo.HTML)return!0
if(Ro(t,n))return!1}return!0}hasInListItemScope(e){
for(let t=this.stackTop;t>=0;t--){
const n=this.treeAdapter.getTagName(this.items[t]),r=this.treeAdapter.getNamespaceURI(this.items[t])
if(n===e&&r===Oo.HTML)return!0
if((n===So.UL||n===So.OL)&&r===Oo.HTML||Ro(n,r))return!1}return!0}
hasInButtonScope(e){for(let t=this.stackTop;t>=0;t--){
const n=this.treeAdapter.getTagName(this.items[t]),r=this.treeAdapter.getNamespaceURI(this.items[t])
if(n===e&&r===Oo.HTML)return!0
if(n===So.BUTTON&&r===Oo.HTML||Ro(n,r))return!1}return!0}
hasInTableScope(e){for(let t=this.stackTop;t>=0;t--){
const n=this.treeAdapter.getTagName(this.items[t])
if(this.treeAdapter.getNamespaceURI(this.items[t])===Oo.HTML){
if(n===e)return!0
if(n===So.TABLE||n===So.TEMPLATE||n===So.HTML)return!1}}return!0}
hasTableBodyContextInTableScope(){for(let e=this.stackTop;e>=0;e--){
const t=this.treeAdapter.getTagName(this.items[e])
if(this.treeAdapter.getNamespaceURI(this.items[e])===Oo.HTML){
if(t===So.TBODY||t===So.THEAD||t===So.TFOOT)return!0
if(t===So.TABLE||t===So.HTML)return!1}}return!0}hasInSelectScope(e){
for(let t=this.stackTop;t>=0;t--){
const n=this.treeAdapter.getTagName(this.items[t])
if(this.treeAdapter.getNamespaceURI(this.items[t])===Oo.HTML){
if(n===e)return!0
if(n!==So.OPTION&&n!==So.OPTGROUP)return!1}}return!0}
generateImpliedEndTags(){for(;yo(this.currentTagName);)this.pop()}
generateImpliedEndTagsThoroughly(){
for(;Io(this.currentTagName);)this.pop()}
generateImpliedEndTagsWithExclusion(e){
for(;yo(this.currentTagName)&&this.currentTagName!==e;)this.pop()}}
let bo=class{constructor(e){
this.length=0,this.entries=[],this.treeAdapter=e,this.bookmark=null}
_getNoahArkConditionCandidates(e){const t=[]
if(this.length>=3){
const n=this.treeAdapter.getAttrList(e).length,r=this.treeAdapter.getTagName(e),i=this.treeAdapter.getNamespaceURI(e)
for(let e=this.length-1;e>=0;e--){const o=this.entries[e]
if(o.type===bo.MARKER_ENTRY)break
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
insertMarker(){this.entries.push({type:bo.MARKER_ENTRY}),this.length++
}pushElement(e,t){this._ensureNoahArkCondition(e),this.entries.push({
type:bo.ELEMENT_ENTRY,element:e,token:t}),this.length++}
insertElementAfterBookmark(e,t){let n=this.length-1
for(;n>=0&&this.entries[n]!==this.bookmark;n--);
this.entries.splice(n+1,0,{type:bo.ELEMENT_ENTRY,element:e,token:t
}),this.length++}removeEntry(e){
for(let t=this.length-1;t>=0;t--)if(this.entries[t]===e){
this.entries.splice(t,1),this.length--
break}}clearToLastMarker(){for(;this.length;){
const e=this.entries.pop()
if(this.length--,e.type===bo.MARKER_ENTRY)break}}
getElementEntryInScopeWithTagName(e){
for(let t=this.length-1;t>=0;t--){const n=this.entries[t]
if(n.type===bo.MARKER_ENTRY)return null
if(this.treeAdapter.getTagName(n.element)===e)return n}return null}
getElementEntry(e){for(let t=this.length-1;t>=0;t--){
const n=this.entries[t]
if(n.type===bo.ELEMENT_ENTRY&&n.element===e)return n}return null}}
bo.MARKER_ENTRY='MARKER_ENTRY',bo.ELEMENT_ENTRY='ELEMENT_ENTRY'
var xo=bo
let Mo=class{constructor(e){
const t={},n=this._getOverriddenMethods(this,t)
for(const r of Object.keys(n))'function'==typeof n[r]&&(t[r]=e[r],e[r]=n[r])
}_getOverriddenMethods(){throw new Error('Not implemented')}}
Mo.install=function(e,t,n){e.__mixins||(e.__mixins=[])
for(let n=0;n<e.__mixins.length;n++)if(e.__mixins[n].constructor===t)return e.__mixins[n]
const r=new t(e,n)
return e.__mixins.push(r),r}
var Po=Mo
const Do=Po
var vo=class extends Do{constructor(e){
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
const Ho=Po,Fo=_o,wo=vo
var Bo=class extends Ho{constructor(e){
super(e),this.tokenizer=e,this.posTracker=Ho.install(e.preprocessor,wo),
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
this.currentToken.type===Fo.EOF_TOKEN?(n.endLine=n.startLine,
n.endCol=n.startCol,
n.endOffset=n.startOffset):(n.endLine=e.posTracker.line,n.endCol=e.posTracker.col+1,
n.endOffset=e.posTracker.offset+1),t._emitCurrentToken.call(this)},
_emitCurrentCharacterToken(){
const n=this.currentCharacterToken&&this.currentCharacterToken.location
n&&-1===n.endOffset&&(n.endLine=e.posTracker.line,n.endCol=e.posTracker.col,n.endOffset=e.posTracker.offset),
t._emitCurrentCharacterToken.call(this)}}
return Object.keys(Fo.MODE).forEach((r=>{const i=Fo.MODE[r]
n[i]=function(n){e.ctLoc=e._getCurrentLocation(),t[i].call(this,n)}
})),n}}
const Uo=Po
var Go=class extends Uo{constructor(e,t){
super(e),this.onItemPop=t.onItemPop}_getOverriddenMethods(e,t){return{
pop(){e.onItemPop(this.current),t.pop.call(this)},
popAllUpToHtmlElement(){
for(let t=this.stackTop;t>0;t--)e.onItemPop(this.items[t])
t.popAllUpToHtmlElement.call(this)},remove(n){
e.onItemPop(this.current),t.remove.call(this,n)}}}}
const Ko=Po,zo=_o,jo=Bo,Yo=Go,Qo=Ao.TAG_NAMES
var Wo=class extends Ko{constructor(e){
super(e),this.parser=e,this.treeAdapter=this.parser.treeAdapter,
this.posTracker=null,
this.lastStartTagToken=null,this.lastFosterParentingLocation=null,
this.currentToken=null}_setStartLocation(e){let t=null
this.lastStartTagToken&&(t=Object.assign({},this.lastStartTagToken.location),t.startTag=this.lastStartTagToken.location),
this.treeAdapter.setNodeSourceCodeLocation(e,t)}_setEndLocation(e,t){
if(this.treeAdapter.getNodeSourceCodeLocation(e)&&t.location){
const n=t.location,r=this.treeAdapter.getTagName(e),i={}
t.type===zo.END_TAG_TOKEN&&r===t.tagName?(i.endTag=Object.assign({},n),i.endLine=n.endLine,
i.endCol=n.endCol,
i.endOffset=n.endOffset):(i.endLine=n.startLine,i.endCol=n.startCol,
i.endOffset=n.startOffset),
this.treeAdapter.updateNodeSourceCodeLocation(e,i)}}
_getOverriddenMethods(e,t){return{_bootstrap(n,r){
t._bootstrap.call(this,n,r),e.lastStartTagToken=null,
e.lastFosterParentingLocation=null,e.currentToken=null
const i=Ko.install(this.tokenizer,jo)
e.posTracker=i.posTracker,Ko.install(this.openElements,Yo,{
onItemPop:function(t){e._setEndLocation(t,e.currentToken)}})},
_runParsingLoop(n){t._runParsingLoop.call(this,n)
for(let t=this.openElements.stackTop;t>=0;t--)e._setEndLocation(this.openElements.items[t],e.currentToken)
},_processTokenInForeignContent(n){
e.currentToken=n,t._processTokenInForeignContent.call(this,n)},
_processToken(n){e.currentToken=n,t._processToken.call(this,n)
if(n.type===zo.END_TAG_TOKEN&&(n.tagName===Qo.HTML||n.tagName===Qo.BODY&&this.openElements.hasInScope(Qo.BODY)))for(let t=this.openElements.stackTop;t>=0;t--){
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
const Vo=Po
var qo=class extends Vo{constructor(e,t){
super(e),this.posTracker=null,this.onParseError=t.onParseError}
_setErrorLocation(e){
e.startLine=e.endLine=this.posTracker.line,e.startCol=e.endCol=this.posTracker.col,
e.startOffset=e.endOffset=this.posTracker.offset}_reportError(e){
const t={code:e,startLine:-1,startCol:-1,startOffset:-1,endLine:-1,
endCol:-1,endOffset:-1}
this._setErrorLocation(t),this.onParseError(t)}
_getOverriddenMethods(e){return{_err(t){e._reportError(t)}}}}
const Xo=qo,$o=vo,Zo=Po
var Jo=class extends Xo{constructor(e,t){
super(e,t),this.posTracker=Zo.install(e,$o),this.lastErrOffset=-1}
_reportError(e){
this.lastErrOffset!==this.posTracker.offset&&(this.lastErrOffset=this.posTracker.offset,
super._reportError(e))}}
const es=qo,ts=Jo,ns=Po
var rs=class extends es{constructor(e,t){super(e,t)
const n=ns.install(e.preprocessor,ts,t)
this.posTracker=n.posTracker}}
const is=qo,os=rs,ss=Bo,as=Po
var ls=class extends is{constructor(e,t){
super(e,t),this.opts=t,this.ctLoc=null,this.locBeforeToken=!1}
_setErrorLocation(e){
this.ctLoc&&(e.startLine=this.ctLoc.startLine,e.startCol=this.ctLoc.startCol,
e.startOffset=this.ctLoc.startOffset,
e.endLine=this.locBeforeToken?this.ctLoc.startLine:this.ctLoc.endLine,
e.endCol=this.locBeforeToken?this.ctLoc.startCol:this.ctLoc.endCol,
e.endOffset=this.locBeforeToken?this.ctLoc.startOffset:this.ctLoc.endOffset)
}_getOverriddenMethods(e,t){return{_bootstrap(n,r){
t._bootstrap.call(this,n,r),as.install(this.tokenizer,os,e.opts),
as.install(this.tokenizer,ss)},_processInputToken(n){
e.ctLoc=n.location,t._processInputToken.call(this,n)},_err(t,n){
e.locBeforeToken=n&&n.beforeToken,e._reportError(t)}}}},cs={}
const{DOCUMENT_MODE:us}=Ao
cs.createDocument=function(){return{nodeName:'#document',
mode:us.NO_QUIRKS,childNodes:[]}
},cs.createDocumentFragment=function(){return{
nodeName:'#document-fragment',childNodes:[]}
},cs.createElement=function(e,t,n){return{nodeName:e,tagName:e,
attrs:n,namespaceURI:t,childNodes:[],parentNode:null}
},cs.createCommentNode=function(e){return{nodeName:'#comment',data:e,
parentNode:null}}
const hs=function(e){return{nodeName:'#text',value:e,parentNode:null}
},fs=cs.appendChild=function(e,t){e.childNodes.push(t),t.parentNode=e
},ps=cs.insertBefore=function(e,t,n){const r=e.childNodes.indexOf(n)
e.childNodes.splice(r,0,t),t.parentNode=e}
cs.setTemplateContent=function(e,t){e.content=t
},cs.getTemplateContent=function(e){return e.content
},cs.setDocumentType=function(e,t,n,r){let i=null
for(let t=0;t<e.childNodes.length;t++)if('#documentType'===e.childNodes[t].nodeName){
i=e.childNodes[t]
break}i?(i.name=t,i.publicId=n,i.systemId=r):fs(e,{
nodeName:'#documentType',name:t,publicId:n,systemId:r})
},cs.setDocumentMode=function(e,t){e.mode=t
},cs.getDocumentMode=function(e){return e.mode
},cs.detachNode=function(e){if(e.parentNode){
const t=e.parentNode.childNodes.indexOf(e)
e.parentNode.childNodes.splice(t,1),e.parentNode=null}
},cs.insertText=function(e,t){if(e.childNodes.length){
const n=e.childNodes[e.childNodes.length-1]
if('#text'===n.nodeName)return void(n.value+=t)}fs(e,hs(t))
},cs.insertTextBefore=function(e,t,n){
const r=e.childNodes[e.childNodes.indexOf(n)-1]
r&&'#text'===r.nodeName?r.value+=t:ps(e,hs(t),n)
},cs.adoptAttributes=function(e,t){const n=[]
for(let t=0;t<e.attrs.length;t++)n.push(e.attrs[t].name)
for(let r=0;r<t.length;r++)-1===n.indexOf(t[r].name)&&e.attrs.push(t[r])
},cs.getFirstChild=function(e){return e.childNodes[0]
},cs.getChildNodes=function(e){return e.childNodes
},cs.getParentNode=function(e){return e.parentNode
},cs.getAttrList=function(e){return e.attrs
},cs.getTagName=function(e){return e.tagName
},cs.getNamespaceURI=function(e){return e.namespaceURI
},cs.getTextNodeContent=function(e){return e.value
},cs.getCommentNodeContent=function(e){return e.data
},cs.getDocumentTypeNodeName=function(e){return e.name
},cs.getDocumentTypeNodePublicId=function(e){return e.publicId
},cs.getDocumentTypeNodeSystemId=function(e){return e.systemId
},cs.isTextNode=function(e){return'#text'===e.nodeName
},cs.isCommentNode=function(e){return'#comment'===e.nodeName
},cs.isDocumentTypeNode=function(e){return'#documentType'===e.nodeName
},cs.isElementNode=function(e){return!!e.tagName
},cs.setNodeSourceCodeLocation=function(e,t){e.sourceCodeLocation=t
},cs.getNodeSourceCodeLocation=function(e){return e.sourceCodeLocation
},cs.updateNodeSourceCodeLocation=function(e,t){
e.sourceCodeLocation=Object.assign(e.sourceCodeLocation,t)}
var ms={}
const{DOCUMENT_MODE:ds}=Ao,Ts='html',Es=['+//silmaril//dtd html pro v0r11 19970101//','-//as//dtd html 3.0 aswedit + extensions//','-//advasoft ltd//dtd html 3.0 aswedit + extensions//','-//ietf//dtd html 2.0 level 1//','-//ietf//dtd html 2.0 level 2//','-//ietf//dtd html 2.0 strict level 1//','-//ietf//dtd html 2.0 strict level 2//','-//ietf//dtd html 2.0 strict//','-//ietf//dtd html 2.0//','-//ietf//dtd html 2.1e//','-//ietf//dtd html 3.0//','-//ietf//dtd html 3.2 final//','-//ietf//dtd html 3.2//','-//ietf//dtd html 3//','-//ietf//dtd html level 0//','-//ietf//dtd html level 1//','-//ietf//dtd html level 2//','-//ietf//dtd html level 3//','-//ietf//dtd html strict level 0//','-//ietf//dtd html strict level 1//','-//ietf//dtd html strict level 2//','-//ietf//dtd html strict level 3//','-//ietf//dtd html strict//','-//ietf//dtd html//','-//metrius//dtd metrius presentational//','-//microsoft//dtd internet explorer 2.0 html strict//','-//microsoft//dtd internet explorer 2.0 html//','-//microsoft//dtd internet explorer 2.0 tables//','-//microsoft//dtd internet explorer 3.0 html strict//','-//microsoft//dtd internet explorer 3.0 html//','-//microsoft//dtd internet explorer 3.0 tables//','-//netscape comm. corp.//dtd html//','-//netscape comm. corp.//dtd strict html//',"-//o'reilly and associates//dtd html 2.0//","-//o'reilly and associates//dtd html extended 1.0//","-//o'reilly and associates//dtd html extended relaxed 1.0//",'-//sq//dtd html 2.0 hotmetal + extensions//','-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//','-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//','-//spyglass//dtd html 2.0 extended//','-//sun microsystems corp.//dtd hotjava html//','-//sun microsystems corp.//dtd hotjava strict html//','-//w3c//dtd html 3 1995-03-24//','-//w3c//dtd html 3.2 draft//','-//w3c//dtd html 3.2 final//','-//w3c//dtd html 3.2//','-//w3c//dtd html 3.2s draft//','-//w3c//dtd html 4.0 frameset//','-//w3c//dtd html 4.0 transitional//','-//w3c//dtd html experimental 19960712//','-//w3c//dtd html experimental 970421//','-//w3c//dtd w3 html//','-//w3o//dtd w3 html 3.0//','-//webtechs//dtd mozilla html 2.0//','-//webtechs//dtd mozilla html//'],gs=Es.concat(['-//w3c//dtd html 4.01 frameset//','-//w3c//dtd html 4.01 transitional//']),_s=['-//w3o//dtd w3 html strict 3.0//en//','-/w3c/dtd html 4.0 transitional/en','html'],As=['-//w3c//dtd xhtml 1.0 frameset//','-//w3c//dtd xhtml 1.0 transitional//'],Cs=As.concat(['-//w3c//dtd html 4.01 frameset//','-//w3c//dtd html 4.01 transitional//'])
function Ns(e){const t=-1!==e.indexOf('"')?"'":'"'
return t+e+t}function ks(e,t){
for(let n=0;n<t.length;n++)if(0===e.indexOf(t[n]))return!0
return!1}ms.isConforming=function(e){
return e.name===Ts&&null===e.publicId&&(null===e.systemId||"about:legacy-compat"===e.systemId)
},ms.getDocumentMode=function(e){if(e.name!==Ts)return ds.QUIRKS
const t=e.systemId
if(t&&"http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd"===t.toLowerCase())return ds.QUIRKS
let n=e.publicId
if(null!==n){if(n=n.toLowerCase(),_s.indexOf(n)>-1)return ds.QUIRKS
let e=null===t?gs:Es
if(ks(n,e))return ds.QUIRKS
if(e=null===t?As:Cs,ks(n,e))return ds.LIMITED_QUIRKS}
return ds.NO_QUIRKS},ms.serializeContent=function(e,t,n){
let r='!DOCTYPE '
return e&&(r+=e),t?r+=' PUBLIC '+Ns(t):n&&(r+=' SYSTEM'),null!==n&&(r+=' '+Ns(n)),
r}
var Ss={}
const Os=_o,ys=Ao,Is=ys.TAG_NAMES,Rs=ys.NAMESPACES,Ls=ys.ATTRS,bs='text/html',xs='application/xhtml+xml',Ms={
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
ychannelselector:'yChannelSelector',zoomandpan:'zoomAndPan'},Ps={
'xlink:actuate':{prefix:'xlink',name:'actuate',namespace:Rs.XLINK},
'xlink:arcrole':{prefix:'xlink',name:'arcrole',namespace:Rs.XLINK},
'xlink:href':{prefix:'xlink',name:'href',namespace:Rs.XLINK},
'xlink:role':{prefix:'xlink',name:'role',namespace:Rs.XLINK},
'xlink:show':{prefix:'xlink',name:'show',namespace:Rs.XLINK},
'xlink:title':{prefix:'xlink',name:'title',namespace:Rs.XLINK},
'xlink:type':{prefix:'xlink',name:'type',namespace:Rs.XLINK},
'xml:base':{prefix:'xml',name:'base',namespace:Rs.XML},'xml:lang':{
prefix:'xml',name:'lang',namespace:Rs.XML},'xml:space':{prefix:'xml',
name:'space',namespace:Rs.XML},xmlns:{prefix:'',name:'xmlns',
namespace:Rs.XMLNS},'xmlns:xlink':{prefix:'xmlns',name:'xlink',
namespace:Rs.XMLNS}},Ds=Ss.SVG_TAG_NAMES_ADJUSTMENT_MAP={
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
textpath:'textPath'},vs={[Is.B]:!0,[Is.BIG]:!0,[Is.BLOCKQUOTE]:!0,
[Is.BODY]:!0,[Is.BR]:!0,[Is.CENTER]:!0,[Is.CODE]:!0,[Is.DD]:!0,
[Is.DIV]:!0,[Is.DL]:!0,[Is.DT]:!0,[Is.EM]:!0,[Is.EMBED]:!0,[Is.H1]:!0,
[Is.H2]:!0,[Is.H3]:!0,[Is.H4]:!0,[Is.H5]:!0,[Is.H6]:!0,[Is.HEAD]:!0,
[Is.HR]:!0,[Is.I]:!0,[Is.IMG]:!0,[Is.LI]:!0,[Is.LISTING]:!0,
[Is.MENU]:!0,[Is.META]:!0,[Is.NOBR]:!0,[Is.OL]:!0,[Is.P]:!0,
[Is.PRE]:!0,[Is.RUBY]:!0,[Is.S]:!0,[Is.SMALL]:!0,[Is.SPAN]:!0,
[Is.STRONG]:!0,[Is.STRIKE]:!0,[Is.SUB]:!0,[Is.SUP]:!0,[Is.TABLE]:!0,
[Is.TT]:!0,[Is.U]:!0,[Is.UL]:!0,[Is.VAR]:!0}
Ss.causesExit=function(e){const t=e.tagName
return!!(t===Is.FONT&&(null!==Os.getTokenAttr(e,Ls.COLOR)||null!==Os.getTokenAttr(e,Ls.SIZE)||null!==Os.getTokenAttr(e,Ls.FACE)))||vs[t]
},Ss.adjustTokenMathMLAttrs=function(e){
for(let t=0;t<e.attrs.length;t++)if("definitionurl"===e.attrs[t].name){
e.attrs[t].name="definitionURL"
break}},Ss.adjustTokenSVGAttrs=function(e){
for(let t=0;t<e.attrs.length;t++){const n=Ms[e.attrs[t].name]
n&&(e.attrs[t].name=n)}},Ss.adjustTokenXMLAttrs=function(e){
for(let t=0;t<e.attrs.length;t++){const n=Ps[e.attrs[t].name]
n&&(e.attrs[t].prefix=n.prefix,e.attrs[t].name=n.name,e.attrs[t].namespace=n.namespace)
}},Ss.adjustTokenSVGTagName=function(e){const t=Ds[e.tagName]
t&&(e.tagName=t)},Ss.isIntegrationPoint=function(e,t,n,r){
return!(r&&r!==Rs.HTML||!function(e,t,n){
if(t===Rs.MATHML&&e===Is.ANNOTATION_XML)for(let e=0;e<n.length;e++)if(n[e].name===Ls.ENCODING){
const t=n[e].value.toLowerCase()
return t===bs||t===xs}
return t===Rs.SVG&&(e===Is.FOREIGN_OBJECT||e===Is.DESC||e===Is.TITLE)
}(e,t,n))||!(r&&r!==Rs.MATHML||!function(e,t){
return t===Rs.MATHML&&(e===Is.MI||e===Is.MO||e===Is.MN||e===Is.MS||e===Is.MTEXT)
}(e,t))}
const Hs=_o,Fs=Lo,ws=xo,Bs=Wo,Us=ls,Gs=Po,Ks=cs,zs=function(e,t){
return[e,t=t||Object.create(null)].reduce(((e,t)=>(Object.keys(t).forEach((n=>{
e[n]=t[n]})),e)),Object.create(null))
},js=ms,Ys=Ss,Qs=Ar,Ws=gr,Vs=Ao,qs=Vs.TAG_NAMES,Xs=Vs.NAMESPACES,$s=Vs.ATTRS,Zs={
scriptingEnabled:!0,sourceCodeLocationInfo:!1,onParseError:null,
treeAdapter:Ks
},Js='hidden',ea='INITIAL_MODE',ta='BEFORE_HTML_MODE',na='BEFORE_HEAD_MODE',ra='IN_HEAD_MODE',ia='IN_HEAD_NO_SCRIPT_MODE',oa='AFTER_HEAD_MODE',sa='IN_BODY_MODE',aa='TEXT_MODE',la='IN_TABLE_MODE',ca='IN_TABLE_TEXT_MODE',ua='IN_CAPTION_MODE',ha='IN_COLUMN_GROUP_MODE',fa='IN_TABLE_BODY_MODE',pa='IN_ROW_MODE',ma='IN_CELL_MODE',da='IN_SELECT_MODE',Ta='IN_SELECT_IN_TABLE_MODE',Ea='IN_TEMPLATE_MODE',ga='AFTER_BODY_MODE',_a='IN_FRAMESET_MODE',Aa='AFTER_FRAMESET_MODE',Ca='AFTER_AFTER_BODY_MODE',Na='AFTER_AFTER_FRAMESET_MODE',ka={
[qs.TR]:pa,[qs.TBODY]:fa,[qs.THEAD]:fa,[qs.TFOOT]:fa,[qs.CAPTION]:ua,
[qs.COLGROUP]:ha,[qs.TABLE]:la,[qs.BODY]:sa,[qs.FRAMESET]:_a},Sa={
[qs.CAPTION]:la,[qs.COLGROUP]:la,[qs.TBODY]:la,[qs.TFOOT]:la,
[qs.THEAD]:la,[qs.COL]:ha,[qs.TR]:fa,[qs.TD]:pa,[qs.TH]:pa},Oa={[ea]:{
[Hs.CHARACTER_TOKEN]:Ua,[Hs.NULL_CHARACTER_TOKEN]:Ua,
[Hs.WHITESPACE_CHARACTER_TOKEN]:Da,[Hs.COMMENT_TOKEN]:Ha,
[Hs.DOCTYPE_TOKEN]:function(e,t){e._setDocumentType(t)
const n=t.forceQuirks?Vs.DOCUMENT_MODE.QUIRKS:js.getDocumentMode(t)
js.isConforming(t)||e._err(Qs.nonConformingDoctype)
e.treeAdapter.setDocumentMode(e.document,n),e.insertionMode=ta},
[Hs.START_TAG_TOKEN]:Ua,[Hs.END_TAG_TOKEN]:Ua,[Hs.EOF_TOKEN]:Ua},
[ta]:{[Hs.CHARACTER_TOKEN]:Ga,[Hs.NULL_CHARACTER_TOKEN]:Ga,
[Hs.WHITESPACE_CHARACTER_TOKEN]:Da,[Hs.COMMENT_TOKEN]:Ha,
[Hs.DOCTYPE_TOKEN]:Da,[Hs.START_TAG_TOKEN]:function(e,t){
t.tagName===qs.HTML?(e._insertElement(t,Xs.HTML),
e.insertionMode=na):Ga(e,t)},[Hs.END_TAG_TOKEN]:function(e,t){
const n=t.tagName
n!==qs.HTML&&n!==qs.HEAD&&n!==qs.BODY&&n!==qs.BR||Ga(e,t)},
[Hs.EOF_TOKEN]:Ga},[na]:{[Hs.CHARACTER_TOKEN]:Ka,
[Hs.NULL_CHARACTER_TOKEN]:Ka,[Hs.WHITESPACE_CHARACTER_TOKEN]:Da,
[Hs.COMMENT_TOKEN]:Ha,[Hs.DOCTYPE_TOKEN]:va,
[Hs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===qs.HTML?sl(e,t):n===qs.HEAD?(e._insertElement(t,Xs.HTML),e.headElement=e.openElements.current,
e.insertionMode=ra):Ka(e,t)},[Hs.END_TAG_TOKEN]:function(e,t){
const n=t.tagName
n===qs.HEAD||n===qs.BODY||n===qs.HTML||n===qs.BR?Ka(e,t):e._err(Qs.endTagWithoutMatchingOpenElement)
},[Hs.EOF_TOKEN]:Ka},[ra]:{[Hs.CHARACTER_TOKEN]:Ya,
[Hs.NULL_CHARACTER_TOKEN]:Ya,[Hs.WHITESPACE_CHARACTER_TOKEN]:wa,
[Hs.COMMENT_TOKEN]:Ha,[Hs.DOCTYPE_TOKEN]:va,[Hs.START_TAG_TOKEN]:za,
[Hs.END_TAG_TOKEN]:ja,[Hs.EOF_TOKEN]:Ya},[ia]:{
[Hs.CHARACTER_TOKEN]:Qa,[Hs.NULL_CHARACTER_TOKEN]:Qa,
[Hs.WHITESPACE_CHARACTER_TOKEN]:wa,[Hs.COMMENT_TOKEN]:Ha,
[Hs.DOCTYPE_TOKEN]:va,[Hs.START_TAG_TOKEN]:function(e,t){
const n=t.tagName
n===qs.HTML?sl(e,t):n===qs.BASEFONT||n===qs.BGSOUND||n===qs.HEAD||n===qs.LINK||n===qs.META||n===qs.NOFRAMES||n===qs.STYLE?za(e,t):n===qs.NOSCRIPT?e._err(Qs.nestedNoscriptInHead):Qa(e,t)
},[Hs.END_TAG_TOKEN]:function(e,t){const n=t.tagName
n===qs.NOSCRIPT?(e.openElements.pop(),e.insertionMode=ra):n===qs.BR?Qa(e,t):e._err(Qs.endTagWithoutMatchingOpenElement)
},[Hs.EOF_TOKEN]:Qa},[oa]:{[Hs.CHARACTER_TOKEN]:Wa,
[Hs.NULL_CHARACTER_TOKEN]:Wa,[Hs.WHITESPACE_CHARACTER_TOKEN]:wa,
[Hs.COMMENT_TOKEN]:Ha,[Hs.DOCTYPE_TOKEN]:va,
[Hs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===qs.HTML?sl(e,t):n===qs.BODY?(e._insertElement(t,Xs.HTML),e.framesetOk=!1,e.insertionMode=sa):n===qs.FRAMESET?(e._insertElement(t,Xs.HTML),
e.insertionMode=_a):n===qs.BASE||n===qs.BASEFONT||n===qs.BGSOUND||n===qs.LINK||n===qs.META||n===qs.NOFRAMES||n===qs.SCRIPT||n===qs.STYLE||n===qs.TEMPLATE||n===qs.TITLE?(e._err(Qs.abandonedHeadElementChild),
e.openElements.push(e.headElement),
za(e,t),e.openElements.remove(e.headElement)):n===qs.HEAD?e._err(Qs.misplacedStartTagForHeadElement):Wa(e,t)
},[Hs.END_TAG_TOKEN]:function(e,t){const n=t.tagName
n===qs.BODY||n===qs.HTML||n===qs.BR?Wa(e,t):n===qs.TEMPLATE?ja(e,t):e._err(Qs.endTagWithoutMatchingOpenElement)
},[Hs.EOF_TOKEN]:Wa},[sa]:{[Hs.CHARACTER_TOKEN]:qa,
[Hs.NULL_CHARACTER_TOKEN]:Da,[Hs.WHITESPACE_CHARACTER_TOKEN]:Va,
[Hs.COMMENT_TOKEN]:Ha,[Hs.DOCTYPE_TOKEN]:Da,[Hs.START_TAG_TOKEN]:sl,
[Hs.END_TAG_TOKEN]:ul,[Hs.EOF_TOKEN]:hl},[aa]:{
[Hs.CHARACTER_TOKEN]:wa,[Hs.NULL_CHARACTER_TOKEN]:wa,
[Hs.WHITESPACE_CHARACTER_TOKEN]:wa,[Hs.COMMENT_TOKEN]:Da,
[Hs.DOCTYPE_TOKEN]:Da,[Hs.START_TAG_TOKEN]:Da,
[Hs.END_TAG_TOKEN]:function(e,t){
t.tagName===qs.SCRIPT&&(e.pendingScript=e.openElements.current)
e.openElements.pop(),e.insertionMode=e.originalInsertionMode},
[Hs.EOF_TOKEN]:function(e,t){
e._err(Qs.eofInElementThatCanContainOnlyText),e.openElements.pop(),
e.insertionMode=e.originalInsertionMode,e._processToken(t)}},[la]:{
[Hs.CHARACTER_TOKEN]:fl,[Hs.NULL_CHARACTER_TOKEN]:fl,
[Hs.WHITESPACE_CHARACTER_TOKEN]:fl,[Hs.COMMENT_TOKEN]:Ha,
[Hs.DOCTYPE_TOKEN]:Da,[Hs.START_TAG_TOKEN]:pl,[Hs.END_TAG_TOKEN]:ml,
[Hs.EOF_TOKEN]:hl},[ca]:{[Hs.CHARACTER_TOKEN]:function(e,t){
e.pendingCharacterTokens.push(t),
e.hasNonWhitespacePendingCharacterToken=!0},
[Hs.NULL_CHARACTER_TOKEN]:Da,
[Hs.WHITESPACE_CHARACTER_TOKEN]:function(e,t){
e.pendingCharacterTokens.push(t)},[Hs.COMMENT_TOKEN]:Tl,
[Hs.DOCTYPE_TOKEN]:Tl,[Hs.START_TAG_TOKEN]:Tl,[Hs.END_TAG_TOKEN]:Tl,
[Hs.EOF_TOKEN]:Tl},[ua]:{[Hs.CHARACTER_TOKEN]:qa,
[Hs.NULL_CHARACTER_TOKEN]:Da,[Hs.WHITESPACE_CHARACTER_TOKEN]:Va,
[Hs.COMMENT_TOKEN]:Ha,[Hs.DOCTYPE_TOKEN]:Da,
[Hs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===qs.CAPTION||n===qs.COL||n===qs.COLGROUP||n===qs.TBODY||n===qs.TD||n===qs.TFOOT||n===qs.TH||n===qs.THEAD||n===qs.TR?e.openElements.hasInTableScope(qs.CAPTION)&&(e.openElements.generateImpliedEndTags(),
e.openElements.popUntilTagNamePopped(qs.CAPTION),
e.activeFormattingElements.clearToLastMarker(),
e.insertionMode=la,e._processToken(t)):sl(e,t)},
[Hs.END_TAG_TOKEN]:function(e,t){const n=t.tagName
n===qs.CAPTION||n===qs.TABLE?e.openElements.hasInTableScope(qs.CAPTION)&&(e.openElements.generateImpliedEndTags(),
e.openElements.popUntilTagNamePopped(qs.CAPTION),
e.activeFormattingElements.clearToLastMarker(),
e.insertionMode=la,n===qs.TABLE&&e._processToken(t)):n!==qs.BODY&&n!==qs.COL&&n!==qs.COLGROUP&&n!==qs.HTML&&n!==qs.TBODY&&n!==qs.TD&&n!==qs.TFOOT&&n!==qs.TH&&n!==qs.THEAD&&n!==qs.TR&&ul(e,t)
},[Hs.EOF_TOKEN]:hl},[ha]:{[Hs.CHARACTER_TOKEN]:El,
[Hs.NULL_CHARACTER_TOKEN]:El,[Hs.WHITESPACE_CHARACTER_TOKEN]:wa,
[Hs.COMMENT_TOKEN]:Ha,[Hs.DOCTYPE_TOKEN]:Da,
[Hs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===qs.HTML?sl(e,t):n===qs.COL?(e._appendElement(t,Xs.HTML),t.ackSelfClosing=!0):n===qs.TEMPLATE?za(e,t):El(e,t)
},[Hs.END_TAG_TOKEN]:function(e,t){const n=t.tagName
n===qs.COLGROUP?e.openElements.currentTagName===qs.COLGROUP&&(e.openElements.pop(),
e.insertionMode=la):n===qs.TEMPLATE?ja(e,t):n!==qs.COL&&El(e,t)},
[Hs.EOF_TOKEN]:hl},[fa]:{[Hs.CHARACTER_TOKEN]:fl,
[Hs.NULL_CHARACTER_TOKEN]:fl,[Hs.WHITESPACE_CHARACTER_TOKEN]:fl,
[Hs.COMMENT_TOKEN]:Ha,[Hs.DOCTYPE_TOKEN]:Da,
[Hs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===qs.TR?(e.openElements.clearBackToTableBodyContext(),e._insertElement(t,Xs.HTML),
e.insertionMode=pa):n===qs.TH||n===qs.TD?(e.openElements.clearBackToTableBodyContext(),
e._insertFakeElement(qs.TR),
e.insertionMode=pa,e._processToken(t)):n===qs.CAPTION||n===qs.COL||n===qs.COLGROUP||n===qs.TBODY||n===qs.TFOOT||n===qs.THEAD?e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),
e.openElements.pop(),e.insertionMode=la,e._processToken(t)):pl(e,t)},
[Hs.END_TAG_TOKEN]:function(e,t){const n=t.tagName
n===qs.TBODY||n===qs.TFOOT||n===qs.THEAD?e.openElements.hasInTableScope(n)&&(e.openElements.clearBackToTableBodyContext(),
e.openElements.pop(),
e.insertionMode=la):n===qs.TABLE?e.openElements.hasTableBodyContextInTableScope()&&(e.openElements.clearBackToTableBodyContext(),
e.openElements.pop(),
e.insertionMode=la,e._processToken(t)):(n!==qs.BODY&&n!==qs.CAPTION&&n!==qs.COL&&n!==qs.COLGROUP||n!==qs.HTML&&n!==qs.TD&&n!==qs.TH&&n!==qs.TR)&&ml(e,t)
},[Hs.EOF_TOKEN]:hl},[pa]:{[Hs.CHARACTER_TOKEN]:fl,
[Hs.NULL_CHARACTER_TOKEN]:fl,[Hs.WHITESPACE_CHARACTER_TOKEN]:fl,
[Hs.COMMENT_TOKEN]:Ha,[Hs.DOCTYPE_TOKEN]:Da,
[Hs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===qs.TH||n===qs.TD?(e.openElements.clearBackToTableRowContext(),e._insertElement(t,Xs.HTML),
e.insertionMode=ma,
e.activeFormattingElements.insertMarker()):n===qs.CAPTION||n===qs.COL||n===qs.COLGROUP||n===qs.TBODY||n===qs.TFOOT||n===qs.THEAD||n===qs.TR?e.openElements.hasInTableScope(qs.TR)&&(e.openElements.clearBackToTableRowContext(),
e.openElements.pop(),e.insertionMode=fa,e._processToken(t)):pl(e,t)},
[Hs.END_TAG_TOKEN]:function(e,t){const n=t.tagName
n===qs.TR?e.openElements.hasInTableScope(qs.TR)&&(e.openElements.clearBackToTableRowContext(),
e.openElements.pop(),
e.insertionMode=fa):n===qs.TABLE?e.openElements.hasInTableScope(qs.TR)&&(e.openElements.clearBackToTableRowContext(),
e.openElements.pop(),
e.insertionMode=fa,e._processToken(t)):n===qs.TBODY||n===qs.TFOOT||n===qs.THEAD?(e.openElements.hasInTableScope(n)||e.openElements.hasInTableScope(qs.TR))&&(e.openElements.clearBackToTableRowContext(),
e.openElements.pop(),
e.insertionMode=fa,e._processToken(t)):(n!==qs.BODY&&n!==qs.CAPTION&&n!==qs.COL&&n!==qs.COLGROUP||n!==qs.HTML&&n!==qs.TD&&n!==qs.TH)&&ml(e,t)
},[Hs.EOF_TOKEN]:hl},[ma]:{[Hs.CHARACTER_TOKEN]:qa,
[Hs.NULL_CHARACTER_TOKEN]:Da,[Hs.WHITESPACE_CHARACTER_TOKEN]:Va,
[Hs.COMMENT_TOKEN]:Ha,[Hs.DOCTYPE_TOKEN]:Da,
[Hs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===qs.CAPTION||n===qs.COL||n===qs.COLGROUP||n===qs.TBODY||n===qs.TD||n===qs.TFOOT||n===qs.TH||n===qs.THEAD||n===qs.TR?(e.openElements.hasInTableScope(qs.TD)||e.openElements.hasInTableScope(qs.TH))&&(e._closeTableCell(),
e._processToken(t)):sl(e,t)},[Hs.END_TAG_TOKEN]:function(e,t){
const n=t.tagName
n===qs.TD||n===qs.TH?e.openElements.hasInTableScope(n)&&(e.openElements.generateImpliedEndTags(),
e.openElements.popUntilTagNamePopped(n),
e.activeFormattingElements.clearToLastMarker(),
e.insertionMode=pa):n===qs.TABLE||n===qs.TBODY||n===qs.TFOOT||n===qs.THEAD||n===qs.TR?e.openElements.hasInTableScope(n)&&(e._closeTableCell(),
e._processToken(t)):n!==qs.BODY&&n!==qs.CAPTION&&n!==qs.COL&&n!==qs.COLGROUP&&n!==qs.HTML&&ul(e,t)
},[Hs.EOF_TOKEN]:hl},[da]:{[Hs.CHARACTER_TOKEN]:wa,
[Hs.NULL_CHARACTER_TOKEN]:Da,[Hs.WHITESPACE_CHARACTER_TOKEN]:wa,
[Hs.COMMENT_TOKEN]:Ha,[Hs.DOCTYPE_TOKEN]:Da,[Hs.START_TAG_TOKEN]:gl,
[Hs.END_TAG_TOKEN]:_l,[Hs.EOF_TOKEN]:hl},[Ta]:{
[Hs.CHARACTER_TOKEN]:wa,[Hs.NULL_CHARACTER_TOKEN]:Da,
[Hs.WHITESPACE_CHARACTER_TOKEN]:wa,[Hs.COMMENT_TOKEN]:Ha,
[Hs.DOCTYPE_TOKEN]:Da,[Hs.START_TAG_TOKEN]:function(e,t){
const n=t.tagName
n===qs.CAPTION||n===qs.TABLE||n===qs.TBODY||n===qs.TFOOT||n===qs.THEAD||n===qs.TR||n===qs.TD||n===qs.TH?(e.openElements.popUntilTagNamePopped(qs.SELECT),
e._resetInsertionMode(),e._processToken(t)):gl(e,t)},
[Hs.END_TAG_TOKEN]:function(e,t){const n=t.tagName
n===qs.CAPTION||n===qs.TABLE||n===qs.TBODY||n===qs.TFOOT||n===qs.THEAD||n===qs.TR||n===qs.TD||n===qs.TH?e.openElements.hasInTableScope(n)&&(e.openElements.popUntilTagNamePopped(qs.SELECT),
e._resetInsertionMode(),e._processToken(t)):_l(e,t)},[Hs.EOF_TOKEN]:hl
},[Ea]:{[Hs.CHARACTER_TOKEN]:qa,[Hs.NULL_CHARACTER_TOKEN]:Da,
[Hs.WHITESPACE_CHARACTER_TOKEN]:Va,[Hs.COMMENT_TOKEN]:Ha,
[Hs.DOCTYPE_TOKEN]:Da,[Hs.START_TAG_TOKEN]:function(e,t){
const n=t.tagName
if(n===qs.BASE||n===qs.BASEFONT||n===qs.BGSOUND||n===qs.LINK||n===qs.META||n===qs.NOFRAMES||n===qs.SCRIPT||n===qs.STYLE||n===qs.TEMPLATE||n===qs.TITLE)za(e,t)
else{const r=Sa[n]||sa
e._popTmplInsertionMode(),e._pushTmplInsertionMode(r),e.insertionMode=r,e._processToken(t)
}},[Hs.END_TAG_TOKEN]:function(e,t){t.tagName===qs.TEMPLATE&&ja(e,t)},
[Hs.EOF_TOKEN]:Al},[ga]:{[Hs.CHARACTER_TOKEN]:Cl,
[Hs.NULL_CHARACTER_TOKEN]:Cl,[Hs.WHITESPACE_CHARACTER_TOKEN]:Va,
[Hs.COMMENT_TOKEN]:function(e,t){
e._appendCommentNode(t,e.openElements.items[0])},
[Hs.DOCTYPE_TOKEN]:Da,[Hs.START_TAG_TOKEN]:function(e,t){
t.tagName===qs.HTML?sl(e,t):Cl(e,t)},[Hs.END_TAG_TOKEN]:function(e,t){
t.tagName===qs.HTML?e.fragmentContext||(e.insertionMode=Ca):Cl(e,t)},
[Hs.EOF_TOKEN]:Ba},[_a]:{[Hs.CHARACTER_TOKEN]:Da,
[Hs.NULL_CHARACTER_TOKEN]:Da,[Hs.WHITESPACE_CHARACTER_TOKEN]:wa,
[Hs.COMMENT_TOKEN]:Ha,[Hs.DOCTYPE_TOKEN]:Da,
[Hs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===qs.HTML?sl(e,t):n===qs.FRAMESET?e._insertElement(t,Xs.HTML):n===qs.FRAME?(e._appendElement(t,Xs.HTML),
t.ackSelfClosing=!0):n===qs.NOFRAMES&&za(e,t)},
[Hs.END_TAG_TOKEN]:function(e,t){
t.tagName!==qs.FRAMESET||e.openElements.isRootHtmlElementCurrent()||(e.openElements.pop(),
e.fragmentContext||e.openElements.currentTagName===qs.FRAMESET||(e.insertionMode=Aa))
},[Hs.EOF_TOKEN]:Ba},[Aa]:{[Hs.CHARACTER_TOKEN]:Da,
[Hs.NULL_CHARACTER_TOKEN]:Da,[Hs.WHITESPACE_CHARACTER_TOKEN]:wa,
[Hs.COMMENT_TOKEN]:Ha,[Hs.DOCTYPE_TOKEN]:Da,
[Hs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===qs.HTML?sl(e,t):n===qs.NOFRAMES&&za(e,t)},
[Hs.END_TAG_TOKEN]:function(e,t){
t.tagName===qs.HTML&&(e.insertionMode=Na)},[Hs.EOF_TOKEN]:Ba},[Ca]:{
[Hs.CHARACTER_TOKEN]:Nl,[Hs.NULL_CHARACTER_TOKEN]:Nl,
[Hs.WHITESPACE_CHARACTER_TOKEN]:Va,[Hs.COMMENT_TOKEN]:Fa,
[Hs.DOCTYPE_TOKEN]:Da,[Hs.START_TAG_TOKEN]:function(e,t){
t.tagName===qs.HTML?sl(e,t):Nl(e,t)},[Hs.END_TAG_TOKEN]:Nl,
[Hs.EOF_TOKEN]:Ba},[Na]:{[Hs.CHARACTER_TOKEN]:Da,
[Hs.NULL_CHARACTER_TOKEN]:Da,[Hs.WHITESPACE_CHARACTER_TOKEN]:Va,
[Hs.COMMENT_TOKEN]:Fa,[Hs.DOCTYPE_TOKEN]:Da,
[Hs.START_TAG_TOKEN]:function(e,t){const n=t.tagName
n===qs.HTML?sl(e,t):n===qs.NOFRAMES&&za(e,t)},[Hs.END_TAG_TOKEN]:Da,
[Hs.EOF_TOKEN]:Ba}}
var ya=class{constructor(e){
this.options=zs(Zs,e),this.treeAdapter=this.options.treeAdapter,
this.pendingScript=null,
this.options.sourceCodeLocationInfo&&Gs.install(this,Bs),
this.options.onParseError&&Gs.install(this,Us,{
onParseError:this.options.onParseError})}parse(e){
const t=this.treeAdapter.createDocument()
return this._bootstrap(t,null),this.tokenizer.write(e,!0),this._runParsingLoop(null),
t}parseFragment(e,t){
t||(t=this.treeAdapter.createElement(qs.TEMPLATE,Xs.HTML,[]))
const n=this.treeAdapter.createElement('documentmock',Xs.HTML,[])
this._bootstrap(n,t),this.treeAdapter.getTagName(t)===qs.TEMPLATE&&this._pushTmplInsertionMode(Ea),
this._initTokenizerForFragmentParsing(),
this._insertFakeRootElement(),this._resetInsertionMode(),
this._findFormInFragmentContext(),
this.tokenizer.write(e,!0),this._runParsingLoop(null)
const r=this.treeAdapter.getFirstChild(n),i=this.treeAdapter.createDocumentFragment()
return this._adoptNodes(r,i),i}_bootstrap(e,t){
this.tokenizer=new Hs(this.options),
this.stopped=!1,this.insertionMode=ea,this.originalInsertionMode='',
this.document=e,
this.fragmentContext=t,this.headElement=null,this.formElement=null,
this.openElements=new Fs(this.document,this.treeAdapter),
this.activeFormattingElements=new ws(this.treeAdapter),
this.tmplInsertionModeStack=[],
this.tmplInsertionModeStackTop=-1,this.currentTmplInsertionMode=null,
this.pendingCharacterTokens=[],
this.hasNonWhitespacePendingCharacterToken=!1,this.framesetOk=!0,
this.skipNextNewLine=!1,this.fosterParentingEnabled=!1}_err(){}
_runParsingLoop(e){for(;!this.stopped;){
this._setupTokenizerCDATAMode()
const t=this.tokenizer.getNextToken()
if(t.type===Hs.HIBERNATION_TOKEN)break
if(this.skipNextNewLine&&(this.skipNextNewLine=!1,t.type===Hs.WHITESPACE_CHARACTER_TOKEN&&'\n'===t.chars[0])){
if(1===t.chars.length)continue
t.chars=t.chars.substr(1)}
if(this._processInputToken(t),e&&this.pendingScript)break}}
runParsingLoopForCurrentChunk(e,t){
if(this._runParsingLoop(t),t&&this.pendingScript){
const e=this.pendingScript
return this.pendingScript=null,void t(e)}e&&e()}
_setupTokenizerCDATAMode(){const e=this._getAdjustedCurrentElement()
this.tokenizer.allowCDATA=e&&e!==this.document&&this.treeAdapter.getNamespaceURI(e)!==Xs.HTML&&!this._isIntegrationPoint(e)
}_switchToTextParsing(e,t){
this._insertElement(e,Xs.HTML),this.tokenizer.state=t,
this.originalInsertionMode=this.insertionMode,this.insertionMode=aa}
switchToPlaintextParsing(){
this.insertionMode=aa,this.originalInsertionMode=sa,this.tokenizer.state=Hs.MODE.PLAINTEXT
}_getAdjustedCurrentElement(){
return 0===this.openElements.stackTop&&this.fragmentContext?this.fragmentContext:this.openElements.current
}_findFormInFragmentContext(){let e=this.fragmentContext
do{if(this.treeAdapter.getTagName(e)===qs.FORM){this.formElement=e
break}e=this.treeAdapter.getParentNode(e)}while(e)}
_initTokenizerForFragmentParsing(){
if(this.treeAdapter.getNamespaceURI(this.fragmentContext)===Xs.HTML){
const e=this.treeAdapter.getTagName(this.fragmentContext)
e===qs.TITLE||e===qs.TEXTAREA?this.tokenizer.state=Hs.MODE.RCDATA:e===qs.STYLE||e===qs.XMP||e===qs.IFRAME||e===qs.NOEMBED||e===qs.NOFRAMES||e===qs.NOSCRIPT?this.tokenizer.state=Hs.MODE.RAWTEXT:e===qs.SCRIPT?this.tokenizer.state=Hs.MODE.SCRIPT_DATA:e===qs.PLAINTEXT&&(this.tokenizer.state=Hs.MODE.PLAINTEXT)
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
const t=this.treeAdapter.createElement(e,Xs.HTML,[])
this._attachElementToTree(t),this.openElements.push(t)}
_insertTemplate(e){
const t=this.treeAdapter.createElement(e.tagName,Xs.HTML,e.attrs),n=this.treeAdapter.createDocumentFragment()
this.treeAdapter.setTemplateContent(t,n),this._attachElementToTree(t),this.openElements.push(t)
}_insertFakeRootElement(){
const e=this.treeAdapter.createElement(qs.HTML,Xs.HTML,[])
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
if(n===Xs.HTML)return!1
if(this.treeAdapter.getTagName(t)===qs.ANNOTATION_XML&&n===Xs.MATHML&&e.type===Hs.START_TAG_TOKEN&&e.tagName===qs.SVG)return!1
const r=e.type===Hs.CHARACTER_TOKEN||e.type===Hs.NULL_CHARACTER_TOKEN||e.type===Hs.WHITESPACE_CHARACTER_TOKEN
return(!(e.type===Hs.START_TAG_TOKEN&&e.tagName!==qs.MGLYPH&&e.tagName!==qs.MALIGNMARK)&&!r||!this._isIntegrationPoint(t,Xs.MATHML))&&((e.type!==Hs.START_TAG_TOKEN&&!r||!this._isIntegrationPoint(t,Xs.HTML))&&e.type!==Hs.EOF_TOKEN)
}_processToken(e){Oa[this.insertionMode][e.type](this,e)}
_processTokenInBodyMode(e){Oa[sa][e.type](this,e)}
_processTokenInForeignContent(e){
e.type===Hs.CHARACTER_TOKEN?function(e,t){
e._insertCharacters(t),e.framesetOk=!1
}(this,e):e.type===Hs.NULL_CHARACTER_TOKEN?function(e,t){
t.chars=Ws.REPLACEMENT_CHARACTER,e._insertCharacters(t)
}(this,e):e.type===Hs.WHITESPACE_CHARACTER_TOKEN?wa(this,e):e.type===Hs.COMMENT_TOKEN?Ha(this,e):e.type===Hs.START_TAG_TOKEN?function(e,t){
if(Ys.causesExit(t)&&!e.fragmentContext){
for(;e.treeAdapter.getNamespaceURI(e.openElements.current)!==Xs.HTML&&!e._isIntegrationPoint(e.openElements.current);)e.openElements.pop()
e._processToken(t)}else{
const n=e._getAdjustedCurrentElement(),r=e.treeAdapter.getNamespaceURI(n)
r===Xs.MATHML?Ys.adjustTokenMathMLAttrs(t):r===Xs.SVG&&(Ys.adjustTokenSVGTagName(t),
Ys.adjustTokenSVGAttrs(t)),
Ys.adjustTokenXMLAttrs(t),t.selfClosing?e._appendElement(t,r):e._insertElement(t,r),
t.ackSelfClosing=!0}
}(this,e):e.type===Hs.END_TAG_TOKEN&&function(e,t){
for(let n=e.openElements.stackTop;n>0;n--){
const r=e.openElements.items[n]
if(e.treeAdapter.getNamespaceURI(r)===Xs.HTML){e._processToken(t)
break}if(e.treeAdapter.getTagName(r).toLowerCase()===t.tagName){
e.openElements.popUntilElementPopped(r)
break}}}(this,e)}_processInputToken(e){
this._shouldProcessTokenInForeignContent(e)?this._processTokenInForeignContent(e):this._processToken(e),
e.type===Hs.START_TAG_TOKEN&&e.selfClosing&&!e.ackSelfClosing&&this._err(Qs.nonVoidHtmlElementStartTagWithTrailingSolidus)
}_isIntegrationPoint(e,t){
const n=this.treeAdapter.getTagName(e),r=this.treeAdapter.getNamespaceURI(e),i=this.treeAdapter.getAttrList(e)
return Ys.isIntegrationPoint(n,r,i,t)}
_reconstructActiveFormattingElements(){
const e=this.activeFormattingElements.length
if(e){let t=e,n=null
do{
if(t--,n=this.activeFormattingElements.entries[t],n.type===ws.MARKER_ENTRY||this.openElements.contains(n.element)){
t++
break}}while(t>0)
for(let r=t;r<e;r++)n=this.activeFormattingElements.entries[r],this._insertElement(n.token,this.treeAdapter.getNamespaceURI(n.element)),
n.element=this.openElements.current}}_closeTableCell(){
this.openElements.generateImpliedEndTags(),
this.openElements.popUntilTableCellPopped(),
this.activeFormattingElements.clearToLastMarker(),
this.insertionMode=pa}_closePElement(){
this.openElements.generateImpliedEndTagsWithExclusion(qs.P),
this.openElements.popUntilTagNamePopped(qs.P)}_resetInsertionMode(){
for(let e=this.openElements.stackTop,t=!1;e>=0;e--){
let n=this.openElements.items[e]
0===e&&(t=!0,this.fragmentContext&&(n=this.fragmentContext))
const r=this.treeAdapter.getTagName(n),i=ka[r]
if(i){this.insertionMode=i
break}if(!(t||r!==qs.TD&&r!==qs.TH)){this.insertionMode=ma
break}if(!t&&r===qs.HEAD){this.insertionMode=ra
break}if(r===qs.SELECT){this._resetInsertionModeForSelect(e)
break}if(r===qs.TEMPLATE){
this.insertionMode=this.currentTmplInsertionMode
break}if(r===qs.HTML){this.insertionMode=this.headElement?oa:na
break}if(t){this.insertionMode=sa
break}}}_resetInsertionModeForSelect(e){if(e>0)for(let t=e-1;t>0;t--){
const e=this.openElements.items[t],n=this.treeAdapter.getTagName(e)
if(n===qs.TEMPLATE)break
if(n===qs.TABLE)return void(this.insertionMode=Ta)}
this.insertionMode=da}_pushTmplInsertionMode(e){
this.tmplInsertionModeStack.push(e),
this.tmplInsertionModeStackTop++,this.currentTmplInsertionMode=e}
_popTmplInsertionMode(){
this.tmplInsertionModeStack.pop(),this.tmplInsertionModeStackTop--,
this.currentTmplInsertionMode=this.tmplInsertionModeStack[this.tmplInsertionModeStackTop]
}_isElementCausesFosterParenting(e){
const t=this.treeAdapter.getTagName(e)
return t===qs.TABLE||t===qs.TBODY||t===qs.TFOOT||t===qs.THEAD||t===qs.TR
}_shouldFosterParentOnInsertion(){
return this.fosterParentingEnabled&&this._isElementCausesFosterParenting(this.openElements.current)
}_findFosterParentingLocation(){const e={parent:null,
beforeElement:null}
for(let t=this.openElements.stackTop;t>=0;t--){
const n=this.openElements.items[t],r=this.treeAdapter.getTagName(n),i=this.treeAdapter.getNamespaceURI(n)
if(r===qs.TEMPLATE&&i===Xs.HTML){
e.parent=this.treeAdapter.getTemplateContent(n)
break}if(r===qs.TABLE){
e.parent=this.treeAdapter.getParentNode(n),e.parent?e.beforeElement=n:e.parent=this.openElements.items[t-1]
break}}return e.parent||(e.parent=this.openElements.items[0]),e}
_fosterParentElement(e){const t=this._findFosterParentingLocation()
t.beforeElement?this.treeAdapter.insertBefore(t.parent,e,t.beforeElement):this.treeAdapter.appendChild(t.parent,e)
}_fosterParentText(e){const t=this._findFosterParentingLocation()
t.beforeElement?this.treeAdapter.insertTextBefore(t.parent,e,t.beforeElement):this.treeAdapter.insertText(t.parent,e)
}_isSpecialElement(e){
const t=this.treeAdapter.getTagName(e),n=this.treeAdapter.getNamespaceURI(e)
return Vs.SPECIAL_ELEMENTS[n][t]}}
function Ia(e,t){
let n=e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName)
return n?e.openElements.contains(n.element)?e.openElements.hasInScope(t.tagName)||(n=null):(e.activeFormattingElements.removeEntry(n),
n=null):cl(e,t),n}function Ra(e,t){let n=null
for(let r=e.openElements.stackTop;r>=0;r--){
const i=e.openElements.items[r]
if(i===t.element)break
e._isSpecialElement(i)&&(n=i)}
return n||(e.openElements.popUntilElementPopped(t.element),
e.activeFormattingElements.removeEntry(t)),n}function La(e,t,n){
let r=t,i=e.openElements.getCommonAncestor(t)
for(let o=0,s=i;s!==n;o++,s=i){i=e.openElements.getCommonAncestor(s)
const n=e.activeFormattingElements.getElementEntry(s),a=n&&o>=3
!n||a?(a&&e.activeFormattingElements.removeEntry(n),e.openElements.remove(s)):(s=ba(e,n),
r===t&&(e.activeFormattingElements.bookmark=n),
e.treeAdapter.detachNode(r),e.treeAdapter.appendChild(s,r),r=s)}
return r}function ba(e,t){
const n=e.treeAdapter.getNamespaceURI(t.element),r=e.treeAdapter.createElement(t.token.tagName,n,t.token.attrs)
return e.openElements.replace(t.element,r),t.element=r,r}
function xa(e,t,n){
if(e._isElementCausesFosterParenting(t))e._fosterParentElement(n)
else{
const r=e.treeAdapter.getTagName(t),i=e.treeAdapter.getNamespaceURI(t)
r===qs.TEMPLATE&&i===Xs.HTML&&(t=e.treeAdapter.getTemplateContent(t)),e.treeAdapter.appendChild(t,n)
}}function Ma(e,t,n){
const r=e.treeAdapter.getNamespaceURI(n.element),i=n.token,o=e.treeAdapter.createElement(i.tagName,r,i.attrs)
e._adoptNodes(t,o),e.treeAdapter.appendChild(t,o),e.activeFormattingElements.insertElementAfterBookmark(o,n.token),
e.activeFormattingElements.removeEntry(n),
e.openElements.remove(n.element),e.openElements.insertAfter(t,o)}
function Pa(e,t){let n
for(let r=0;r<8&&(n=Ia(e,t),n);r++){const t=Ra(e,n)
if(!t)break
e.activeFormattingElements.bookmark=n
const r=La(e,t,n.element),i=e.openElements.getCommonAncestor(n.element)
e.treeAdapter.detachNode(r),xa(e,i,r),Ma(e,t,n)}}function Da(){}
function va(e){e._err(Qs.misplacedDoctype)}function Ha(e,t){
e._appendCommentNode(t,e.openElements.currentTmplContent||e.openElements.current)
}function Fa(e,t){e._appendCommentNode(t,e.document)}function wa(e,t){
e._insertCharacters(t)}function Ba(e){e.stopped=!0}function Ua(e,t){
e._err(Qs.missingDoctype,{beforeToken:!0
}),e.treeAdapter.setDocumentMode(e.document,Vs.DOCUMENT_MODE.QUIRKS),
e.insertionMode=ta,e._processToken(t)}function Ga(e,t){
e._insertFakeRootElement(),e.insertionMode=na,e._processToken(t)}
function Ka(e,t){
e._insertFakeElement(qs.HEAD),e.headElement=e.openElements.current,
e.insertionMode=ra,e._processToken(t)}function za(e,t){
const n=t.tagName
n===qs.HTML?sl(e,t):n===qs.BASE||n===qs.BASEFONT||n===qs.BGSOUND||n===qs.LINK||n===qs.META?(e._appendElement(t,Xs.HTML),
t.ackSelfClosing=!0):n===qs.TITLE?e._switchToTextParsing(t,Hs.MODE.RCDATA):n===qs.NOSCRIPT?e.options.scriptingEnabled?e._switchToTextParsing(t,Hs.MODE.RAWTEXT):(e._insertElement(t,Xs.HTML),
e.insertionMode=ia):n===qs.NOFRAMES||n===qs.STYLE?e._switchToTextParsing(t,Hs.MODE.RAWTEXT):n===qs.SCRIPT?e._switchToTextParsing(t,Hs.MODE.SCRIPT_DATA):n===qs.TEMPLATE?(e._insertTemplate(t,Xs.HTML),
e.activeFormattingElements.insertMarker(),
e.framesetOk=!1,e.insertionMode=Ea,e._pushTmplInsertionMode(Ea)):n===qs.HEAD?e._err(Qs.misplacedStartTagForHeadElement):Ya(e,t)
}function ja(e,t){const n=t.tagName
n===qs.HEAD?(e.openElements.pop(),e.insertionMode=oa):n===qs.BODY||n===qs.BR||n===qs.HTML?Ya(e,t):n===qs.TEMPLATE&&e.openElements.tmplCount>0?(e.openElements.generateImpliedEndTagsThoroughly(),
e.openElements.currentTagName!==qs.TEMPLATE&&e._err(Qs.closingOfElementWithOpenChildElements),
e.openElements.popUntilTagNamePopped(qs.TEMPLATE),
e.activeFormattingElements.clearToLastMarker(),
e._popTmplInsertionMode(),e._resetInsertionMode()):e._err(Qs.endTagWithoutMatchingOpenElement)
}function Ya(e,t){
e.openElements.pop(),e.insertionMode=oa,e._processToken(t)}
function Qa(e,t){
const n=t.type===Hs.EOF_TOKEN?Qs.openElementsLeftAfterEof:Qs.disallowedContentInNoscriptInHead
e._err(n),e.openElements.pop(),e.insertionMode=ra,e._processToken(t)}
function Wa(e,t){
e._insertFakeElement(qs.BODY),e.insertionMode=sa,e._processToken(t)}
function Va(e,t){
e._reconstructActiveFormattingElements(),e._insertCharacters(t)}
function qa(e,t){
e._reconstructActiveFormattingElements(),e._insertCharacters(t),
e.framesetOk=!1}function Xa(e,t){
e.openElements.hasInButtonScope(qs.P)&&e._closePElement(),
e._insertElement(t,Xs.HTML)}function $a(e,t){
e.openElements.hasInButtonScope(qs.P)&&e._closePElement(),
e._insertElement(t,Xs.HTML),e.skipNextNewLine=!0,e.framesetOk=!1}
function Za(e,t){
e._reconstructActiveFormattingElements(),e._insertElement(t,Xs.HTML),
e.activeFormattingElements.pushElement(e.openElements.current,t)}
function Ja(e,t){
e._reconstructActiveFormattingElements(),e._insertElement(t,Xs.HTML),
e.activeFormattingElements.insertMarker(),e.framesetOk=!1}
function el(e,t){
e._reconstructActiveFormattingElements(),e._appendElement(t,Xs.HTML),
e.framesetOk=!1,t.ackSelfClosing=!0}function tl(e,t){
e._appendElement(t,Xs.HTML),t.ackSelfClosing=!0}function nl(e,t){
e._switchToTextParsing(t,Hs.MODE.RAWTEXT)}function rl(e,t){
e.openElements.currentTagName===qs.OPTION&&e.openElements.pop(),
e._reconstructActiveFormattingElements(),e._insertElement(t,Xs.HTML)}
function il(e,t){
e.openElements.hasInScope(qs.RUBY)&&e.openElements.generateImpliedEndTags(),
e._insertElement(t,Xs.HTML)}function ol(e,t){
e._reconstructActiveFormattingElements(),e._insertElement(t,Xs.HTML)}
function sl(e,t){const n=t.tagName
switch(n.length){case 1:
n===qs.I||n===qs.S||n===qs.B||n===qs.U?Za(e,t):n===qs.P?Xa(e,t):n===qs.A?function(e,t){
const n=e.activeFormattingElements.getElementEntryInScopeWithTagName(qs.A)
n&&(Pa(e,t),e.openElements.remove(n.element),e.activeFormattingElements.removeEntry(n)),
e._reconstructActiveFormattingElements(),
e._insertElement(t,Xs.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)
}(e,t):ol(e,t)
break
case 2:
n===qs.DL||n===qs.OL||n===qs.UL?Xa(e,t):n===qs.H1||n===qs.H2||n===qs.H3||n===qs.H4||n===qs.H5||n===qs.H6?function(e,t){
e.openElements.hasInButtonScope(qs.P)&&e._closePElement()
const n=e.openElements.currentTagName
n!==qs.H1&&n!==qs.H2&&n!==qs.H3&&n!==qs.H4&&n!==qs.H5&&n!==qs.H6||e.openElements.pop(),
e._insertElement(t,Xs.HTML)
}(e,t):n===qs.LI||n===qs.DD||n===qs.DT?function(e,t){e.framesetOk=!1
const n=t.tagName
for(let t=e.openElements.stackTop;t>=0;t--){
const r=e.openElements.items[t],i=e.treeAdapter.getTagName(r)
let o=null
if(n===qs.LI&&i===qs.LI?o=qs.LI:n!==qs.DD&&n!==qs.DT||i!==qs.DD&&i!==qs.DT||(o=i),
o){
e.openElements.generateImpliedEndTagsWithExclusion(o),e.openElements.popUntilTagNamePopped(o)
break}
if(i!==qs.ADDRESS&&i!==qs.DIV&&i!==qs.P&&e._isSpecialElement(r))break}
e.openElements.hasInButtonScope(qs.P)&&e._closePElement(),
e._insertElement(t,Xs.HTML)
}(e,t):n===qs.EM||n===qs.TT?Za(e,t):n===qs.BR?el(e,t):n===qs.HR?function(e,t){
e.openElements.hasInButtonScope(qs.P)&&e._closePElement(),
e._appendElement(t,Xs.HTML),e.framesetOk=!1,t.ackSelfClosing=!0
}(e,t):n===qs.RB?il(e,t):n===qs.RT||n===qs.RP?function(e,t){
e.openElements.hasInScope(qs.RUBY)&&e.openElements.generateImpliedEndTagsWithExclusion(qs.RTC),
e._insertElement(t,Xs.HTML)
}(e,t):n!==qs.TH&&n!==qs.TD&&n!==qs.TR&&ol(e,t)
break
case 3:
n===qs.DIV||n===qs.DIR||n===qs.NAV?Xa(e,t):n===qs.PRE?$a(e,t):n===qs.BIG?Za(e,t):n===qs.IMG||n===qs.WBR?el(e,t):n===qs.XMP?function(e,t){
e.openElements.hasInButtonScope(qs.P)&&e._closePElement(),
e._reconstructActiveFormattingElements(),
e.framesetOk=!1,e._switchToTextParsing(t,Hs.MODE.RAWTEXT)
}(e,t):n===qs.SVG?function(e,t){
e._reconstructActiveFormattingElements(),Ys.adjustTokenSVGAttrs(t),
Ys.adjustTokenXMLAttrs(t),
t.selfClosing?e._appendElement(t,Xs.SVG):e._insertElement(t,Xs.SVG),
t.ackSelfClosing=!0}(e,t):n===qs.RTC?il(e,t):n!==qs.COL&&ol(e,t)
break
case 4:n===qs.HTML?function(e,t){
0===e.openElements.tmplCount&&e.treeAdapter.adoptAttributes(e.openElements.items[0],t.attrs)
}(e,t):n===qs.BASE||n===qs.LINK||n===qs.META?za(e,t):n===qs.BODY?function(e,t){
const n=e.openElements.tryPeekProperlyNestedBodyElement()
n&&0===e.openElements.tmplCount&&(e.framesetOk=!1,e.treeAdapter.adoptAttributes(n,t.attrs))
}(e,t):n===qs.MAIN||n===qs.MENU?Xa(e,t):n===qs.FORM?function(e,t){
const n=e.openElements.tmplCount>0
e.formElement&&!n||(e.openElements.hasInButtonScope(qs.P)&&e._closePElement(),e._insertElement(t,Xs.HTML),
n||(e.formElement=e.openElements.current))
}(e,t):n===qs.CODE||n===qs.FONT?Za(e,t):n===qs.NOBR?function(e,t){
e._reconstructActiveFormattingElements(),
e.openElements.hasInScope(qs.NOBR)&&(Pa(e,t),
e._reconstructActiveFormattingElements()),
e._insertElement(t,Xs.HTML),e.activeFormattingElements.pushElement(e.openElements.current,t)
}(e,t):n===qs.AREA?el(e,t):n===qs.MATH?function(e,t){
e._reconstructActiveFormattingElements(),
Ys.adjustTokenMathMLAttrs(t),Ys.adjustTokenXMLAttrs(t),
t.selfClosing?e._appendElement(t,Xs.MATHML):e._insertElement(t,Xs.MATHML),
t.ackSelfClosing=!0}(e,t):n===qs.MENU?function(e,t){
e.openElements.hasInButtonScope(qs.P)&&e._closePElement(),
e._insertElement(t,Xs.HTML)}(e,t):n!==qs.HEAD&&ol(e,t)
break
case 5:
n===qs.STYLE||n===qs.TITLE?za(e,t):n===qs.ASIDE?Xa(e,t):n===qs.SMALL?Za(e,t):n===qs.TABLE?function(e,t){
e.treeAdapter.getDocumentMode(e.document)!==Vs.DOCUMENT_MODE.QUIRKS&&e.openElements.hasInButtonScope(qs.P)&&e._closePElement(),
e._insertElement(t,Xs.HTML),e.framesetOk=!1,e.insertionMode=la
}(e,t):n===qs.EMBED?el(e,t):n===qs.INPUT?function(e,t){
e._reconstructActiveFormattingElements(),e._appendElement(t,Xs.HTML)
const n=Hs.getTokenAttr(t,$s.TYPE)
n&&n.toLowerCase()===Js||(e.framesetOk=!1),t.ackSelfClosing=!0
}(e,t):n===qs.PARAM||n===qs.TRACK?tl(e,t):n===qs.IMAGE?function(e,t){
t.tagName=qs.IMG,el(e,t)
}(e,t):n!==qs.FRAME&&n!==qs.TBODY&&n!==qs.TFOOT&&n!==qs.THEAD&&ol(e,t)
break
case 6:
n===qs.SCRIPT?za(e,t):n===qs.CENTER||n===qs.FIGURE||n===qs.FOOTER||n===qs.HEADER||n===qs.HGROUP||n===qs.DIALOG?Xa(e,t):n===qs.BUTTON?function(e,t){
e.openElements.hasInScope(qs.BUTTON)&&(e.openElements.generateImpliedEndTags(),
e.openElements.popUntilTagNamePopped(qs.BUTTON)),
e._reconstructActiveFormattingElements(),
e._insertElement(t,Xs.HTML),e.framesetOk=!1
}(e,t):n===qs.STRIKE||n===qs.STRONG?Za(e,t):n===qs.APPLET||n===qs.OBJECT?Ja(e,t):n===qs.KEYGEN?el(e,t):n===qs.SOURCE?tl(e,t):n===qs.IFRAME?function(e,t){
e.framesetOk=!1,e._switchToTextParsing(t,Hs.MODE.RAWTEXT)
}(e,t):n===qs.SELECT?function(e,t){
e._reconstructActiveFormattingElements(),e._insertElement(t,Xs.HTML),
e.framesetOk=!1,
e.insertionMode===la||e.insertionMode===ua||e.insertionMode===fa||e.insertionMode===pa||e.insertionMode===ma?e.insertionMode=Ta:e.insertionMode=da
}(e,t):n===qs.OPTION?rl(e,t):ol(e,t)
break
case 7:
n===qs.BGSOUND?za(e,t):n===qs.DETAILS||n===qs.ADDRESS||n===qs.ARTICLE||n===qs.SECTION||n===qs.SUMMARY?Xa(e,t):n===qs.LISTING?$a(e,t):n===qs.MARQUEE?Ja(e,t):n===qs.NOEMBED?nl(e,t):n!==qs.CAPTION&&ol(e,t)
break
case 8:n===qs.BASEFONT?za(e,t):n===qs.FRAMESET?function(e,t){
const n=e.openElements.tryPeekProperlyNestedBodyElement()
e.framesetOk&&n&&(e.treeAdapter.detachNode(n),e.openElements.popAllUpToHtmlElement(),
e._insertElement(t,Xs.HTML),e.insertionMode=_a)
}(e,t):n===qs.FIELDSET?Xa(e,t):n===qs.TEXTAREA?function(e,t){
e._insertElement(t,Xs.HTML),
e.skipNextNewLine=!0,e.tokenizer.state=Hs.MODE.RCDATA,
e.originalInsertionMode=e.insertionMode,
e.framesetOk=!1,e.insertionMode=aa
}(e,t):n===qs.TEMPLATE?za(e,t):n===qs.NOSCRIPT?e.options.scriptingEnabled?nl(e,t):ol(e,t):n===qs.OPTGROUP?rl(e,t):n!==qs.COLGROUP&&ol(e,t)
break
case 9:n===qs.PLAINTEXT?function(e,t){
e.openElements.hasInButtonScope(qs.P)&&e._closePElement(),
e._insertElement(t,Xs.HTML),e.tokenizer.state=Hs.MODE.PLAINTEXT
}(e,t):ol(e,t)
break
case 10:n===qs.BLOCKQUOTE||n===qs.FIGCAPTION?Xa(e,t):ol(e,t)
break
default:ol(e,t)}}function al(e,t){const n=t.tagName
e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n))
}function ll(e,t){const n=t.tagName
e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTags(),e.openElements.popUntilTagNamePopped(n),
e.activeFormattingElements.clearToLastMarker())}function cl(e,t){
const n=t.tagName
for(let t=e.openElements.stackTop;t>0;t--){
const r=e.openElements.items[t]
if(e.treeAdapter.getTagName(r)===n){
e.openElements.generateImpliedEndTagsWithExclusion(n),
e.openElements.popUntilElementPopped(r)
break}if(e._isSpecialElement(r))break}}function ul(e,t){
const n=t.tagName
switch(n.length){case 1:
n===qs.A||n===qs.B||n===qs.I||n===qs.S||n===qs.U?Pa(e,t):n===qs.P?function(e){
e.openElements.hasInButtonScope(qs.P)||e._insertFakeElement(qs.P),
e._closePElement()}(e):cl(e,t)
break
case 2:n===qs.DL||n===qs.UL||n===qs.OL?al(e,t):n===qs.LI?function(e){
e.openElements.hasInListItemScope(qs.LI)&&(e.openElements.generateImpliedEndTagsWithExclusion(qs.LI),
e.openElements.popUntilTagNamePopped(qs.LI))
}(e):n===qs.DD||n===qs.DT?function(e,t){const n=t.tagName
e.openElements.hasInScope(n)&&(e.openElements.generateImpliedEndTagsWithExclusion(n),
e.openElements.popUntilTagNamePopped(n))
}(e,t):n===qs.H1||n===qs.H2||n===qs.H3||n===qs.H4||n===qs.H5||n===qs.H6?function(e){
e.openElements.hasNumberedHeaderInScope()&&(e.openElements.generateImpliedEndTags(),
e.openElements.popUntilNumberedHeaderPopped())
}(e):n===qs.BR?function(e){
e._reconstructActiveFormattingElements(),e._insertFakeElement(qs.BR),
e.openElements.pop(),e.framesetOk=!1
}(e):n===qs.EM||n===qs.TT?Pa(e,t):cl(e,t)
break
case 3:
n===qs.BIG?Pa(e,t):n===qs.DIR||n===qs.DIV||n===qs.NAV||n===qs.PRE?al(e,t):cl(e,t)
break
case 4:n===qs.BODY?function(e){
e.openElements.hasInScope(qs.BODY)&&(e.insertionMode=ga)
}(e):n===qs.HTML?function(e,t){
e.openElements.hasInScope(qs.BODY)&&(e.insertionMode=ga,
e._processToken(t))}(e,t):n===qs.FORM?function(e){
const t=e.openElements.tmplCount>0,n=e.formElement
t||(e.formElement=null),(n||t)&&e.openElements.hasInScope(qs.FORM)&&(e.openElements.generateImpliedEndTags(),
t?e.openElements.popUntilTagNamePopped(qs.FORM):e.openElements.remove(n))
}(e):n===qs.CODE||n===qs.FONT||n===qs.NOBR?Pa(e,t):n===qs.MAIN||n===qs.MENU?al(e,t):cl(e,t)
break
case 5:n===qs.ASIDE?al(e,t):n===qs.SMALL?Pa(e,t):cl(e,t)
break
case 6:
n===qs.CENTER||n===qs.FIGURE||n===qs.FOOTER||n===qs.HEADER||n===qs.HGROUP||n===qs.DIALOG?al(e,t):n===qs.APPLET||n===qs.OBJECT?ll(e,t):n===qs.STRIKE||n===qs.STRONG?Pa(e,t):cl(e,t)
break
case 7:
n===qs.ADDRESS||n===qs.ARTICLE||n===qs.DETAILS||n===qs.SECTION||n===qs.SUMMARY||n===qs.LISTING?al(e,t):n===qs.MARQUEE?ll(e,t):cl(e,t)
break
case 8:n===qs.FIELDSET?al(e,t):n===qs.TEMPLATE?ja(e,t):cl(e,t)
break
case 10:n===qs.BLOCKQUOTE||n===qs.FIGCAPTION?al(e,t):cl(e,t)
break
default:cl(e,t)}}function hl(e,t){
e.tmplInsertionModeStackTop>-1?Al(e,t):e.stopped=!0}function fl(e,t){
const n=e.openElements.currentTagName
n===qs.TABLE||n===qs.TBODY||n===qs.TFOOT||n===qs.THEAD||n===qs.TR?(e.pendingCharacterTokens=[],
e.hasNonWhitespacePendingCharacterToken=!1,
e.originalInsertionMode=e.insertionMode,
e.insertionMode=ca,e._processToken(t)):dl(e,t)}function pl(e,t){
const n=t.tagName
switch(n.length){case 2:n===qs.TD||n===qs.TH||n===qs.TR?function(e,t){
e.openElements.clearBackToTableContext(),
e._insertFakeElement(qs.TBODY),e.insertionMode=fa,e._processToken(t)
}(e,t):dl(e,t)
break
case 3:n===qs.COL?function(e,t){
e.openElements.clearBackToTableContext(),e._insertFakeElement(qs.COLGROUP),
e.insertionMode=ha,e._processToken(t)}(e,t):dl(e,t)
break
case 4:n===qs.FORM?function(e,t){
e.formElement||0!==e.openElements.tmplCount||(e._insertElement(t,Xs.HTML),
e.formElement=e.openElements.current,e.openElements.pop())
}(e,t):dl(e,t)
break
case 5:n===qs.TABLE?function(e,t){
e.openElements.hasInTableScope(qs.TABLE)&&(e.openElements.popUntilTagNamePopped(qs.TABLE),
e._resetInsertionMode(),e._processToken(t))
}(e,t):n===qs.STYLE?za(e,t):n===qs.TBODY||n===qs.TFOOT||n===qs.THEAD?function(e,t){
e.openElements.clearBackToTableContext(),
e._insertElement(t,Xs.HTML),e.insertionMode=fa
}(e,t):n===qs.INPUT?function(e,t){const n=Hs.getTokenAttr(t,$s.TYPE)
n&&n.toLowerCase()===Js?e._appendElement(t,Xs.HTML):dl(e,t),t.ackSelfClosing=!0
}(e,t):dl(e,t)
break
case 6:n===qs.SCRIPT?za(e,t):dl(e,t)
break
case 7:n===qs.CAPTION?function(e,t){
e.openElements.clearBackToTableContext(),e.activeFormattingElements.insertMarker(),
e._insertElement(t,Xs.HTML),e.insertionMode=ua}(e,t):dl(e,t)
break
case 8:n===qs.COLGROUP?function(e,t){
e.openElements.clearBackToTableContext(),e._insertElement(t,Xs.HTML),
e.insertionMode=ha}(e,t):n===qs.TEMPLATE?za(e,t):dl(e,t)
break
default:dl(e,t)}}function ml(e,t){const n=t.tagName
n===qs.TABLE?e.openElements.hasInTableScope(qs.TABLE)&&(e.openElements.popUntilTagNamePopped(qs.TABLE),
e._resetInsertionMode()):n===qs.TEMPLATE?ja(e,t):n!==qs.BODY&&n!==qs.CAPTION&&n!==qs.COL&&n!==qs.COLGROUP&&n!==qs.HTML&&n!==qs.TBODY&&n!==qs.TD&&n!==qs.TFOOT&&n!==qs.TH&&n!==qs.THEAD&&n!==qs.TR&&dl(e,t)
}function dl(e,t){const n=e.fosterParentingEnabled
e.fosterParentingEnabled=!0,e._processTokenInBodyMode(t),e.fosterParentingEnabled=n
}function Tl(e,t){let n=0
if(e.hasNonWhitespacePendingCharacterToken)for(;n<e.pendingCharacterTokens.length;n++)dl(e,e.pendingCharacterTokens[n])
else for(;n<e.pendingCharacterTokens.length;n++)e._insertCharacters(e.pendingCharacterTokens[n])
e.insertionMode=e.originalInsertionMode,e._processToken(t)}
function El(e,t){
e.openElements.currentTagName===qs.COLGROUP&&(e.openElements.pop(),
e.insertionMode=la,e._processToken(t))}function gl(e,t){
const n=t.tagName
n===qs.HTML?sl(e,t):n===qs.OPTION?(e.openElements.currentTagName===qs.OPTION&&e.openElements.pop(),
e._insertElement(t,Xs.HTML)):n===qs.OPTGROUP?(e.openElements.currentTagName===qs.OPTION&&e.openElements.pop(),
e.openElements.currentTagName===qs.OPTGROUP&&e.openElements.pop(),
e._insertElement(t,Xs.HTML)):n===qs.INPUT||n===qs.KEYGEN||n===qs.TEXTAREA||n===qs.SELECT?e.openElements.hasInSelectScope(qs.SELECT)&&(e.openElements.popUntilTagNamePopped(qs.SELECT),
e._resetInsertionMode(),
n!==qs.SELECT&&e._processToken(t)):n!==qs.SCRIPT&&n!==qs.TEMPLATE||za(e,t)
}function _l(e,t){const n=t.tagName
if(n===qs.OPTGROUP){
const t=e.openElements.items[e.openElements.stackTop-1],n=t&&e.treeAdapter.getTagName(t)
e.openElements.currentTagName===qs.OPTION&&n===qs.OPTGROUP&&e.openElements.pop(),
e.openElements.currentTagName===qs.OPTGROUP&&e.openElements.pop()
}else n===qs.OPTION?e.openElements.currentTagName===qs.OPTION&&e.openElements.pop():n===qs.SELECT&&e.openElements.hasInSelectScope(qs.SELECT)?(e.openElements.popUntilTagNamePopped(qs.SELECT),
e._resetInsertionMode()):n===qs.TEMPLATE&&ja(e,t)}function Al(e,t){
e.openElements.tmplCount>0?(e.openElements.popUntilTagNamePopped(qs.TEMPLATE),
e.activeFormattingElements.clearToLastMarker(),
e._popTmplInsertionMode(),e._resetInsertionMode(),
e._processToken(t)):e.stopped=!0}function Cl(e,t){
e.insertionMode=sa,e._processToken(t)}function Nl(e,t){
e.insertionMode=sa,e._processToken(t)}class kl{constructor(e,t,n){
this.property=e,this.normal=t,n&&(this.space=n)}}function Sl(e,t){
const n={},r={}
let i=-1
for(;++i<e.length;)Object.assign(n,e[i].property),Object.assign(r,e[i].normal)
return new kl(n,r,t)}function Ol(e){return e.toLowerCase()}
kl.prototype.property={},
kl.prototype.normal={},kl.prototype.space=null
class yl{constructor(e,t){this.property=e,this.attribute=t}}
yl.prototype.space=null,
yl.prototype.boolean=!1,yl.prototype.booleanish=!1,yl.prototype.overloadedBoolean=!1,
yl.prototype.number=!1,
yl.prototype.commaSeparated=!1,yl.prototype.spaceSeparated=!1,
yl.prototype.commaOrSpaceSeparated=!1,
yl.prototype.mustUseProperty=!1,yl.prototype.defined=!1
let Il=0
const Rl=vl(),Ll=vl(),bl=vl(),xl=vl(),Ml=vl(),Pl=vl(),Dl=vl()
function vl(){return 2**++Il}var Hl=Object.freeze({__proto__:null,
boolean:Rl,booleanish:Ll,overloadedBoolean:bl,number:xl,
spaceSeparated:Ml,commaSeparated:Pl,commaOrSpaceSeparated:Dl})
const Fl=Object.keys(Hl)
class wl extends yl{constructor(e,t,n,r){let i=-1
if(super(e,t),Bl(this,'space',r),'number'==typeof n)for(;++i<Fl.length;){
const e=Fl[i]
Bl(this,Fl[i],(n&Hl[e])===Hl[e])}}}function Bl(e,t,n){n&&(e[t]=n)}
wl.prototype.defined=!0
const Ul={}.hasOwnProperty
function Gl(e){const t={},n={}
let r
for(r in e.properties)if(Ul.call(e.properties,r)){
const i=e.properties[r],o=new wl(r,e.transform(e.attributes||{},r),i,e.space)
e.mustUseProperty&&e.mustUseProperty.includes(r)&&(o.mustUseProperty=!0),t[r]=o,
n[Ol(r)]=r,n[Ol(o.attribute)]=r}return new kl(t,n,e.space)}
const Kl=Gl({space:'xlink',
transform:(e,t)=>'xlink:'+t.slice(5).toLowerCase(),properties:{
xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,
xLinkShow:null,xLinkTitle:null,xLinkType:null}}),zl=Gl({space:'xml',
transform:(e,t)=>'xml:'+t.slice(3).toLowerCase(),properties:{
xmlLang:null,xmlBase:null,xmlSpace:null}})
function jl(e,t){return t in e?e[t]:t}function Yl(e,t){
return jl(e,t.toLowerCase())}const Ql=Gl({space:'xmlns',attributes:{
xmlnsxlink:'xmlns:xlink'},transform:Yl,properties:{xmlns:null,
xmlnsXLink:null}}),Wl=Gl({
transform:(e,t)=>'role'===t?t:'aria-'+t.slice(4).toLowerCase(),
properties:{ariaActiveDescendant:null,ariaAtomic:Ll,
ariaAutoComplete:null,ariaBusy:Ll,ariaChecked:Ll,ariaColCount:xl,
ariaColIndex:xl,ariaColSpan:xl,ariaControls:Ml,ariaCurrent:null,
ariaDescribedBy:Ml,ariaDetails:null,ariaDisabled:Ll,ariaDropEffect:Ml,
ariaErrorMessage:null,ariaExpanded:Ll,ariaFlowTo:Ml,ariaGrabbed:Ll,
ariaHasPopup:null,ariaHidden:Ll,ariaInvalid:null,
ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ml,ariaLevel:xl,
ariaLive:null,ariaModal:Ll,ariaMultiLine:Ll,ariaMultiSelectable:Ll,
ariaOrientation:null,ariaOwns:Ml,ariaPlaceholder:null,ariaPosInSet:xl,
ariaPressed:Ll,ariaReadOnly:Ll,ariaRelevant:null,ariaRequired:Ll,
ariaRoleDescription:Ml,ariaRowCount:xl,ariaRowIndex:xl,ariaRowSpan:xl,
ariaSelected:Ll,ariaSetSize:xl,ariaSort:null,ariaValueMax:xl,
ariaValueMin:xl,ariaValueNow:xl,ariaValueText:null,role:null}
}),Vl=Gl({space:'html',attributes:{acceptcharset:'accept-charset',
classname:'class',htmlfor:'for',httpequiv:'http-equiv'},transform:Yl,
mustUseProperty:['checked','multiple','muted','selected'],properties:{
abbr:null,accept:Pl,acceptCharset:Ml,accessKey:Ml,action:null,
allow:null,allowFullScreen:Rl,allowPaymentRequest:Rl,
allowUserMedia:Rl,alt:null,as:null,async:Rl,autoCapitalize:null,
autoComplete:Ml,autoFocus:Rl,autoPlay:Rl,capture:Rl,charSet:null,
checked:Rl,cite:null,className:Ml,cols:xl,colSpan:null,content:null,
contentEditable:Ll,controls:Rl,controlsList:Ml,coords:xl|Pl,
crossOrigin:null,data:null,dateTime:null,decoding:null,default:Rl,
defer:Rl,dir:null,dirName:null,disabled:Rl,download:bl,draggable:Ll,
encType:null,enterKeyHint:null,form:null,formAction:null,
formEncType:null,formMethod:null,formNoValidate:Rl,formTarget:null,
headers:Ml,height:xl,hidden:Rl,high:xl,href:null,hrefLang:null,
htmlFor:Ml,httpEquiv:Ml,id:null,imageSizes:null,imageSrcSet:null,
inputMode:null,integrity:null,is:null,isMap:Rl,itemId:null,
itemProp:Ml,itemRef:Ml,itemScope:Rl,itemType:Ml,kind:null,label:null,
lang:null,language:null,list:null,loading:null,loop:Rl,low:xl,
manifest:null,max:null,maxLength:xl,media:null,method:null,min:null,
minLength:xl,multiple:Rl,muted:Rl,name:null,nonce:null,noModule:Rl,
noValidate:Rl,onAbort:null,onAfterPrint:null,onAuxClick:null,
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
onVolumeChange:null,onWaiting:null,onWheel:null,open:Rl,optimum:xl,
pattern:null,ping:Ml,placeholder:null,playsInline:Rl,poster:null,
preload:null,readOnly:Rl,referrerPolicy:null,rel:Ml,required:Rl,
reversed:Rl,rows:xl,rowSpan:xl,sandbox:Ml,scope:null,scoped:Rl,
seamless:Rl,selected:Rl,shape:null,size:xl,sizes:null,slot:null,
span:xl,spellCheck:Ll,src:null,srcDoc:null,srcLang:null,srcSet:null,
start:xl,step:null,style:null,tabIndex:xl,target:null,title:null,
translate:null,type:null,typeMustMatch:Rl,useMap:null,value:Ll,
width:xl,wrap:null,align:null,aLink:null,archive:Ml,axis:null,
background:null,bgColor:null,border:xl,borderColor:null,
bottomMargin:xl,cellPadding:null,cellSpacing:null,char:null,
charOff:null,classId:null,clear:null,code:null,codeBase:null,
codeType:null,color:null,compact:Rl,declare:Rl,event:null,face:null,
frame:null,frameBorder:null,hSpace:xl,leftMargin:xl,link:null,
longDesc:null,lowSrc:null,marginHeight:xl,marginWidth:xl,noResize:Rl,
noHref:Rl,noShade:Rl,noWrap:Rl,object:null,profile:null,prompt:null,
rev:null,rightMargin:xl,rules:null,scheme:null,scrolling:Ll,
standby:null,summary:null,text:null,topMargin:xl,valueType:null,
version:null,vAlign:null,vLink:null,vSpace:xl,allowTransparency:null,
autoCorrect:null,autoSave:null,disablePictureInPicture:Rl,
disableRemotePlayback:Rl,prefix:null,property:null,results:xl,
security:null,unselectable:null}}),ql=Gl({space:'svg',attributes:{
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
timelineBegin:'timelinebegin'},transform:jl,properties:{about:Dl,
accentHeight:xl,accumulate:null,additive:null,alignmentBaseline:null,
alphabetic:xl,amplitude:xl,arabicForm:null,ascent:xl,
attributeName:null,attributeType:null,azimuth:xl,bandwidth:null,
baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,
begin:null,bias:xl,by:null,calcMode:null,capHeight:xl,className:Ml,
clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,
colorInterpolation:null,colorInterpolationFilters:null,
colorProfile:null,colorRendering:null,content:null,
contentScriptType:null,contentStyleType:null,crossOrigin:null,
cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,
descent:xl,diffuseConstant:xl,direction:null,display:null,dur:null,
divisor:xl,dominantBaseline:null,download:Rl,dx:null,dy:null,
edgeMode:null,editable:null,elevation:xl,enableBackground:null,
end:null,event:null,exponent:xl,externalResourcesRequired:null,
fill:null,fillOpacity:xl,fillRule:null,filter:null,filterRes:null,
filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,
focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,
fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,
format:null,fr:null,from:null,fx:null,fy:null,g1:Pl,g2:Pl,
glyphName:Pl,glyphOrientationHorizontal:null,
glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,
gradientUnits:null,handler:null,hanging:xl,hatchContentUnits:null,
hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:xl,
horizOriginX:xl,horizOriginY:xl,id:null,ideographic:xl,
imageRendering:null,initialVisibility:null,in:null,in2:null,
intercept:xl,k:xl,k1:xl,k2:xl,k3:xl,k4:xl,kernelMatrix:Dl,
kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,
kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,
lightingColor:null,limitingConeAngle:xl,local:null,markerEnd:null,
markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,
markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,
mathematical:null,max:null,media:null,mediaCharacterEncoding:null,
mediaContentEncodings:null,mediaSize:xl,mediaTime:null,method:null,
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
overflow:null,overlay:null,overlinePosition:xl,overlineThickness:xl,
paintOrder:null,panose1:null,path:null,pathLength:xl,
patternContentUnits:null,patternTransform:null,patternUnits:null,
phase:null,ping:Ml,pitch:null,playbackOrder:null,pointerEvents:null,
points:null,pointsAtX:xl,pointsAtY:xl,pointsAtZ:xl,preserveAlpha:null,
preserveAspectRatio:null,primitiveUnits:null,propagate:null,
property:Dl,r:null,radius:null,referrerPolicy:null,refX:null,
refY:null,rel:Dl,rev:Dl,renderingIntent:null,repeatCount:null,
repeatDur:null,requiredExtensions:Dl,requiredFeatures:Dl,
requiredFonts:Dl,requiredFormats:Dl,resource:null,restart:null,
result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,
shapeRendering:null,side:null,slope:null,snapshotTime:null,
specularConstant:xl,specularExponent:xl,spreadMethod:null,
spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,
stitchTiles:null,stopColor:null,stopOpacity:null,
strikethroughPosition:xl,strikethroughThickness:xl,string:null,
stroke:null,strokeDashArray:Dl,strokeDashOffset:null,
strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:xl,
strokeOpacity:xl,strokeWidth:null,style:null,surfaceScale:xl,
syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,
syncTolerance:null,syncToleranceDefault:null,systemLanguage:Dl,
tabIndex:xl,tableValues:null,target:null,targetX:xl,targetY:xl,
textAnchor:null,textDecoration:null,textRendering:null,
textLength:null,timelineBegin:null,title:null,transformBehavior:null,
type:null,typeOf:Dl,to:null,transform:null,u1:null,u2:null,
underlinePosition:xl,underlineThickness:xl,unicode:null,
unicodeBidi:null,unicodeRange:null,unitsPerEm:xl,values:null,
vAlphabetic:xl,vMathematical:xl,vectorEffect:null,vHanging:xl,
vIdeographic:xl,version:null,vertAdvY:xl,vertOriginX:xl,
vertOriginY:xl,viewBox:null,viewTarget:null,visibility:null,
width:null,widths:null,wordSpacing:null,writingMode:null,x:null,
x1:null,x2:null,xChannelSelector:null,xHeight:xl,y:null,y1:null,
y2:null,yChannelSelector:null,z:null,zoomAndPan:null}
}),Xl=/^data[-\w.:]+$/i,$l=/-[a-z]/g,Zl=/[A-Z]/g
function Jl(e,t){const n=Ol(t)
let r=t,i=yl
if(n in e.normal)return e.property[e.normal[n]]
if(n.length>4&&'data'===n.slice(0,4)&&Xl.test(t)){
if('-'===t.charAt(4)){const e=t.slice(5).replace($l,tc)
r='data'+e.charAt(0).toUpperCase()+e.slice(1)}else{const e=t.slice(4)
if(!$l.test(e)){let n=e.replace(Zl,ec)
'-'!==n.charAt(0)&&(n='-'+n),t='data'+n}}i=wl}return new i(r,t)}
function ec(e){return'-'+e.toLowerCase()}function tc(e){
return e.charAt(1).toUpperCase()}
const nc=Sl([zl,Kl,Ql,Wl,Vl],'html'),rc=Sl([zl,Kl,Ql,Wl,ql],'svg')
var ic=/[#.]/g
function oc(e){const t=String(e||'').trim()
return t?t.split(/[ \t\n\r\f]+/g):[]}function sc(e){
const t=[],n=String(e||'')
let r=n.indexOf(','),i=0,o=!1
for(;!o;){-1===r&&(r=n.length,o=!0)
const e=n.slice(i,r).trim()
!e&&o||t.push(e),i=r+1,r=n.indexOf(',',i)}return t}
const ac=new Set(['menu','submit','reset','button']),lc={}.hasOwnProperty
function cc(e,t,n){const r=n&&function(e){const t={}
let n=-1
for(;++n<e.length;)t[e[n].toLowerCase()]=e[n]
return t}(n)
return function(n,i,...o){let s,a=-1
if(null==n)s={type:'root',children:[]},o.unshift(i)
else if(s=function(e,t="div"){
for(var n,r,i,o=e||'',s={},a=0;a<o.length;)ic.lastIndex=a,
i=ic.exec(o),(n=o.slice(a,i?i.index:o.length))&&(r?'#'===r?s.id=n:Array.isArray(s.className)?s.className.push(n):s.className=[n]:t=n,
a+=n.length),i&&(r=i[0],a++)
return{type:'element',tagName:t,properties:s,children:[]}
}(n,t),s.tagName=s.tagName.toLowerCase(),
r&&lc.call(r,s.tagName)&&(s.tagName=r[s.tagName]),function(e,t){
if(null==e||'object'!=typeof e||Array.isArray(e))return!1
if('input'===t||!e.type||'string'!=typeof e.type)return!0
if('children'in e&&Array.isArray(e.children))return!1
if('button'===t)return ac.has(e.type.toLowerCase())
return!('value'in e)}(i,s.tagName)){let t
for(t in i)lc.call(i,t)&&uc(e,s.properties,t,i[t])}else o.unshift(i)
for(;++a<o.length;)hc(s.children,o[a])
return'element'===s.type&&'template'===s.tagName&&(s.content={
type:'root',children:s.children},s.children=[]),s}}
function uc(e,t,n,r){const i=Jl(e,n)
let o,s=-1
if(null!=r){if('number'==typeof r){if(Number.isNaN(r))return
o=r
}else o='boolean'==typeof r?r:'string'==typeof r?i.spaceSeparated?oc(r):i.commaSeparated?sc(r):i.commaOrSpaceSeparated?oc(sc(r).join(' ')):fc(i,i.property,r):Array.isArray(r)?r.concat():'style'===i.property?function(e){
const t=[]
let n
for(n in e)lc.call(e,n)&&t.push([n,e[n]].join(': '))
return t.join('; ')}(r):String(r)
if(Array.isArray(o)){const e=[]
for(;++s<o.length;)e[s]=fc(i,i.property,o[s])
o=e}
'className'===i.property&&Array.isArray(t.className)&&(o=t.className.concat(o)),
t[i.property]=o}}function hc(e,t){let n=-1
if(null==t);else if('string'==typeof t||'number'==typeof t)e.push({
type:'text',value:String(t)})
else if(Array.isArray(t))for(;++n<t.length;)hc(e,t[n])
else{
if('object'!=typeof t||!('type'in t))throw new Error('Expected node, nodes, or string, got `'+t+'`')
'root'===t.type?hc(e,t.children):e.push(t)}}function fc(e,t,n){
if('string'==typeof n){
if(e.number&&n&&!Number.isNaN(Number(n)))return Number(n)
if((e.boolean||e.overloadedBoolean)&&(''===n||Ol(n)===Ol(t)))return!0}
return n}
const pc=cc(nc,'div'),mc=cc(rc,'g',['altGlyph','altGlyphDef','altGlyphItem','animateColor','animateMotion','animateTransform','clipPath','feBlend','feColorMatrix','feComponentTransfer','feComposite','feConvolveMatrix','feDiffuseLighting','feDisplacementMap','feDistantLight','feDropShadow','feFlood','feFuncA','feFuncB','feFuncG','feFuncR','feGaussianBlur','feImage','feMerge','feMergeNode','feMorphology','feOffset','fePointLight','feSpecularLighting','feSpotLight','feTile','feTurbulence','foreignObject','glyphRef','linearGradient','radialGradient','solidColor','textArea','textPath'])
const dc={html:'http://www.w3.org/1999/xhtml',
mathml:'http://www.w3.org/1998/Math/MathML',
svg:'http://www.w3.org/2000/svg',xlink:'http://www.w3.org/1999/xlink',
xml:'http://www.w3.org/XML/1998/namespace',
xmlns:'http://www.w3.org/2000/xmlns/'},Tc={}.hasOwnProperty,Ec={
'#document':_c,'#document-fragment':_c,'#text':function(e,t){return{
type:'text',value:t.value}},'#comment':function(e,t){return{
type:'comment',value:t.data}},'#documentType':function(){return{
type:'doctype'}}}
function gc(e,t){
const n=e.schema,r=Tc.call(Ec,t.nodeName)?Ec[t.nodeName]:Ac
let i
'tagName'in t&&(e.schema=t.namespaceURI===dc.svg?rc:nc),'childNodes'in t&&(i=function(e,t){
let n=-1
const r=[]
for(;++n<t.length;)r[n]=gc(e,t[n])
return r}(e,t.childNodes))
const o=r(e,t,i)
if('sourceCodeLocation'in t&&t.sourceCodeLocation&&e.file){
const n=Cc(e,o,t.sourceCodeLocation)
n&&(e.location=!0,o.position=n)}return e.schema=n,o}
function _c(e,t,n){const r={type:'root',children:n,data:{
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
function Ac(e,t,n){const r='svg'===e.schema.space?mc:pc
let i=-1
const o={}
for(;++i<t.attrs.length;){const e=t.attrs[i]
o[(e.prefix?e.prefix+':':'')+e.name]=e.value}const s=r(t.tagName,o,n)
if('template'===s.tagName&&'content'in t){
const n=t.sourceCodeLocation,r=n&&n.startTag&&Nc(n.startTag),i=n&&n.endTag&&Nc(n.endTag),o=gc(e,t.content)
r&&i&&e.file&&(o.position={start:r.end,end:i.start}),s.content=o}
return s}function Cc(e,t,n){const r=Nc(n)
if('element'===t.type){const i=t.children[t.children.length-1]
if(r&&!n.endTag&&i&&i.position&&i.position.end&&(r.end=Object.assign({},i.position.end)),
e.verbose){const r={}
let i
for(i in n.attrs)Tc.call(n.attrs,i)&&(r[Jl(e.schema,i).property]=Nc(n.attrs[i]))
t.data={position:{opening:Nc(n.startTag),
closing:n.endTag?Nc(n.endTag):null,properties:r}}}}return r}
function Nc(e){const t=kc({line:e.startLine,column:e.startCol,
offset:e.startOffset}),n=kc({line:e.endLine,column:e.endCol,
offset:e.endOffset})
return t||n?{start:t,end:n}:null}function kc(e){
return e.line&&e.column?e:null}
var Sc=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,Oc=/\n/g,yc=/^\s*/,Ic=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Rc=/^:\s*/,Lc=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,bc=/^[;\s]*/,xc=/^\s+|\s+$/g,Mc='',Pc=function(e,t){
if('string'!=typeof e)throw new TypeError('First argument must be a string')
if(!e)return[]
t=t||{}
var n=1,r=1
function i(e){var t=e.match(Oc)
t&&(n+=t.length)
var i=e.lastIndexOf("\n")
r=~i?e.length-i:r+e.length}function o(){var e={line:n,column:r}
return function(t){return t.position=new s(e),c(),t}}function s(e){
this.start=e,this.end={line:n,column:r},this.source=t.source}
function a(i){var o=new Error(t.source+':'+n+':'+r+': '+i)
if(o.reason=i,o.filename=t.source,o.line=n,o.column=r,o.source=e,!t.silent)throw o
}function l(t){var n=t.exec(e)
if(n){var r=n[0]
return i(r),e=e.slice(r.length),n}}function c(){l(yc)}function u(e){
var t
for(e=e||[];t=h();)!1!==t&&e.push(t)
return e}function h(){var t=o()
if("/"==e.charAt(0)&&"*"==e.charAt(1)){
for(var n=2;Mc!=e.charAt(n)&&("*"!=e.charAt(n)||"/"!=e.charAt(n+1));)++n
if(n+=2,Mc===e.charAt(n-1))return a('End of comment missing')
var s=e.slice(2,n-2)
return r+=2,i(s),e=e.slice(n),r+=2,t({type:"comment",comment:s})}}
function f(){var e=o(),t=l(Ic)
if(t){if(h(),!l(Rc))return a("property missing ':'")
var n=l(Lc),r=e({type:"declaration",property:Dc(t[0].replace(Sc,Mc)),
value:n?Dc(n[0].replace(Sc,Mc)):Mc})
return l(bc),r}}return s.prototype.content=e,c(),function(){var e,t=[]
for(u(t);e=f();)!1!==e&&(t.push(e),u(t))
return t}()}
function Dc(e){return e?e.replace(xc,Mc):Mc}var vc=Pc
var Hc=function(e,t){var n,r=null
if(!e||'string'!=typeof e)return r
for(var i,o,s=vc(e),a='function'==typeof t,l=0,c=s.length;l<c;l++)i=(n=s[l]).property,
o=n.value,a?t(i,o,n):o&&(r||(r={}),r[i]=o)
return r}
const Fc=dc,wc={classId:'classID',dataType:'datatype',itemId:'itemID',
strokeDashArray:'strokeDasharray',strokeDashOffset:'strokeDashoffset',
strokeLineCap:'strokeLinecap',strokeLineJoin:'strokeLinejoin',
strokeMiterLimit:'strokeMiterlimit',typeOf:'typeof',
xLinkActuate:'xlinkActuate',xLinkArcRole:'xlinkArcrole',
xLinkHref:'xlinkHref',xLinkRole:'xlinkRole',xLinkShow:'xlinkShow',
xLinkTitle:'xlinkTitle',xLinkType:'xlinkType',xmlnsXLink:'xmlnsXlink'
},Bc={}.hasOwnProperty,Uc=on('root'),Gc=on('element'),Kc=on('text')
function zc(e,t,n){
if('function'!=typeof e)throw new TypeError('h is not a function')
const r=function(e){const t=e('div',{})
return Boolean(t&&('_owner'in t||'_store'in t)&&(void 0===t.key||null===t.key))
}(e),i=function(e){const t=e('div',{})
return Boolean(t&&t.context&&t.context._isVue)}(e),o=function(e){
const t=e('div',{})
return'VirtualNode'===t.type}(e)
let s,a
if('string'==typeof n||'boolean'==typeof n?(s=n,n={}):(n||(n={}),s=n.prefix),Uc(t))a=1===t.children.length&&Gc(t.children[0])?t.children[0]:{
type:'element',tagName:'div',properties:{},children:t.children}
else{
if(!Gc(t))throw new Error('Expected root or element, not `'+(t&&t.type||t)+'`')
a=t}return jc(e,a,{schema:'svg'===n.space?rc:nc,
prefix:null==s?r||i||o?'h-':null:'string'==typeof s?s:s?'h-':null,
key:0,react:r,vue:i,vdom:o,hyperscript:Qc(e)})}function jc(e,t,n){
const r=n.schema
let i=r,o=t.tagName
const s={},a=[]
let l,c=-1
for(l in'html'===r.space&&'svg'===o.toLowerCase()&&(i=rc,n.schema=i),t.properties)t.properties&&Bc.call(t.properties,l)&&Yc(s,l,t.properties[l],n,o)
if(n.vdom&&('html'===i.space?o=o.toUpperCase():i.space&&(s.namespace=Fc[i.space])),
n.prefix&&(n.key++,
s.key=n.prefix+n.key),t.children)for(;++c<t.children.length;){
const r=t.children[c]
Gc(r)?a.push(jc(e,r,n)):Kc(r)&&a.push(r.value)}
return n.schema=r,a.length>0?e.call(t,o,s,a):e.call(t,o,s)}
function Yc(e,t,n,r,i){const o=Jl(r.schema,t)
let s
null==n||'number'==typeof n&&Number.isNaN(n)||!1===n&&(r.vue||r.vdom||r.hyperscript)||!n&&o.boolean&&(r.vue||r.vdom||r.hyperscript)||(Array.isArray(n)&&(n=o.commaSeparated?function(e,t){
const n=t||{}
return(''===e[e.length-1]?[...e,'']:e).join((n.padRight?' ':'')+','+(!1===n.padLeft?'':' ')).trim()
}(n):n.join(' ').trim()),
o.boolean&&r.hyperscript&&(n=''),'style'===o.property&&'string'==typeof n&&(r.react||r.vue||r.vdom)&&(n=function(e,t){
const n={}
try{Hc(e,((e,t)=>{
'-ms-'===e.slice(0,4)&&(e='ms-'+e.slice(4)),n[e.replace(/-([a-z])/g,((e,t)=>t.toUpperCase()))]=t
}))}catch(e){
throw e.message=t+'[style]'+e.message.slice('undefined'.length),e}
return n
}(n,i)),r.vue?'style'!==o.property&&(s='attrs'):o.mustUseProperty||(r.vdom?'style'!==o.property&&(s='attributes'):r.hyperscript&&(s='attrs')),
s?e[s]=Object.assign(e[s]||{},{[o.attribute]:n
}):o.space&&r.react?e[wc[o.property]||o.property]=n:e[o.attribute]=n)}
function Qc(e){return'context'in e&&'cleanup'in e}
const Wc={}.hasOwnProperty
function Vc(e,t){const n=t||{}
function r(t,...n){let i=r.invalid
const o=r.handlers
if(t&&Wc.call(t,e)){const n=String(t[e])
i=Wc.call(o,n)?o[n]:r.unknown}if(i)return i.call(this,t,...n)}
return r.handlers=n.handlers||{},
r.invalid=n.invalid,r.unknown=n.unknown,r}
var qc={}.hasOwnProperty,Xc=Vc('type',{handlers:{root:function(e,t){
var n={nodeName:'#document',
mode:(e.data||{}).quirksMode?'quirks':'no-quirks',childNodes:[]}
return n.childNodes=$c(e.children,n,t),Zc(e,n)},element:function(e,t){
var n=t.space
return zc((function(n,r){var i,o,s,a,l,c=[]
for(s in r)qc.call(r,s)&&!1!==r[s]&&((i=Jl(t,s)).boolean&&!r[s]||(o={
name:s,value:!0===r[s]?'':String(r[s])
},i.space&&'html'!==i.space&&'svg'!==i.space&&((a=s.indexOf(':'))<0?o.prefix='':(o.name=s.slice(a+1),
o.prefix=s.slice(0,a)),o.namespace=dc[i.space]),c.push(o)))
'html'===t.space&&'svg'===e.tagName&&(t=rc);(l=Zc(e,{nodeName:n,
tagName:n,attrs:c,namespaceURI:dc[t.space],childNodes:[],
parentNode:void 0
})).childNodes=$c(e.children,l,t),'template'===n&&(l.content=function(e,t){
var n={nodeName:'#document-fragment',childNodes:[]}
return n.childNodes=$c(e.children,n,t),Zc(e,n)}(e.content,t))
return l}),Object.assign({},e,{children:[]}),{space:n})},
text:function(e){return Zc(e,{nodeName:'#text',value:e.value,
parentNode:void 0})},comment:function(e){return Zc(e,{
nodeName:'#comment',data:e.value,parentNode:void 0})},
doctype:function(e){return Zc(e,{nodeName:'#documentType',name:'html',
publicId:'',systemId:'',parentNode:void 0})}}})
function $c(e,t,n){var r,i=-1,o=[]
if(e)for(;++i<e.length;)(r=Xc(e[i],n)).parentNode=t,o.push(r)
return o}function Zc(e,t){var n=e.position
return n&&n.start&&n.end&&(t.sourceCodeLocation={
startLine:n.start.line,startCol:n.start.column,
startOffset:n.start.offset,endLine:n.end.line,endCol:n.end.column,
endOffset:n.end.offset}),t}
const Jc=['area','base','basefont','bgsound','br','col','command','embed','frame','hr','image','img','input','isindex','keygen','link','menuitem','meta','nextid','param','source','track','wbr'],eu='END_TAG_TOKEN',tu={
sourceCodeLocationInfo:!0,scriptingEnabled:!1},nu=function(e,t,n){
let r=-1
const i=new ya(tu),o=Vc('type',{handlers:{root:function(e){
p(e.children)},element:function(e){
T(),i._processInputToken(ru(e)),p(e.children),
Jc.includes(e.tagName)||(T(),i._processInputToken(function(e){
const t=Object.assign(su(e))
return t.startTag=Object.assign({},t),{type:eu,tagName:e.tagName,
attrs:[],location:t}}(e)))},text:function(e){
T(),i._processInputToken({type:"CHARACTER_TOKEN",chars:e.value,
location:su(e)})},comment:m,doctype:function(e){
T(),i._processInputToken({type:"DOCTYPE_TOKEN",name:'html',
forceQuirks:!1,publicId:'',systemId:'',location:su(e)})},
raw:function(e){const t=nr(e),n=t.line||1,r=t.column||1,o=t.offset||0
if(!l)throw new Error('Expected `preprocessor`')
if(!a)throw new Error('Expected `tokenizer`')
if(!c)throw new Error('Expected `posTracker`')
if(!u)throw new Error('Expected `locationTracker`')
l.html=void 0,l.pos=-1,l.lastGapPos=-1,l.lastCharPos=-1,l.gapStack=[],l.skipNextNewLine=!1,
l.lastChunkWritten=!1,
l.endOfChunkHit=!1,c.isEol=!1,c.lineStartPos=1-r,c.droppedBufferSize=o,
c.offset=0,
c.col=1,c.line=n,u.currentAttrLocation=void 0,u.ctLoc=su(e),a.write(e.value),
i._runParsingLoop(null),
('NAMED_CHARACTER_REFERENCE_STATE'===a.state||'NUMERIC_CHARACTER_REFERENCE_END_STATE'===a.state)&&(l.lastChunkWritten=!0,
a[a.state](a._consume()))}},unknown:ou})
let s,a,l,c,u
var h
if(h=t,Boolean(h&&!('message'in h&&'messages'in h))&&(n=t,t=void 0),n&&n.passThrough)for(;++r<n.passThrough.length;)o.handlers[n.passThrough[r]]=d
const f=function(e,t={}){let n,r
return'messages'in t?(r=t,n={}):(r=t.file,n=t),gc({
schema:'svg'===n.space?rc:nc,file:r,verbose:n.verbose,location:!1},e)
}(function(e){const t='root'===e.type?e.children[0]:e
return Boolean(t&&('doctype'===t.type||'element'===t.type&&'html'===t.tagName))
}(e)?function(){const t=i.treeAdapter.createDocument()
if(i._bootstrap(t,void 0),a=i.tokenizer,!a)throw new Error('Expected `tokenizer`')
return l=a.preprocessor,u=a.__mixins[0],c=u.posTracker,o(e),T(),t
}():function(){const t={nodeName:'template',tagName:'template',
attrs:[],namespaceURI:dc.html,childNodes:[]},n={
nodeName:'documentmock',tagName:'documentmock',attrs:[],
namespaceURI:dc.html,childNodes:[]},r={nodeName:'#document-fragment',
childNodes:[]}
if(i._bootstrap(n,t),i._pushTmplInsertionMode("IN_TEMPLATE_MODE"),i._initTokenizerForFragmentParsing(),
i._insertFakeRootElement(),
i._resetInsertionMode(),i._findFormInFragmentContext(),
a=i.tokenizer,!a)throw new Error('Expected `tokenizer`')
return l=a.preprocessor,u=a.__mixins[0],c=u.posTracker,o(e),T(),i._adoptNodes(n.childNodes[0],r),
r}(),t)
return s&&tr(f,'comment',((e,t,n)=>{const r=e
if(r.value.stitch&&null!==n&&null!==t)return n.children[t]=r.value.stitch,t
})),'root'!==e.type&&'root'===f.type&&1===f.children.length?f.children[0]:f
function p(e){let t=-1
if(e)for(;++t<e.length;)o(e[t])}function m(e){
T(),i._processInputToken({type:"COMMENT_TOKEN",data:e.value,
location:su(e)})}function d(e){let r
s=!0,r='children'in e?{...e,children:nu({type:'root',
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
function ru(e){const t=Object.assign(su(e))
return t.startTag=Object.assign({},t),{type:"START_TAG_TOKEN",
tagName:e.tagName,selfClosing:!1,attrs:iu(e),location:t}}
function iu(e){return function(e,t){return Xc(e,'svg'===t?rc:nc)}({
tagName:e.tagName,type:'element',properties:e.properties,children:[]
}).attrs}function ou(e){
throw new Error('Cannot compile `'+e.type+'` node')}function su(e){
const t=nr(e),n=rr(e)
return{startLine:t.line,startCol:t.column,startOffset:t.offset,
endLine:n.line,endCol:n.column,endOffset:n.offset}}const au={
strip:['script'],clobberPrefix:'user-content-',clobber:['name','id'],
ancestors:{tbody:['table'],tfoot:['table'],thead:['table'],
td:['table'],th:['table'],tr:['table']},protocols:{
href:['http','https','mailto','xmpp','irc','ircs'],
cite:['http','https'],src:['http','https'],longDesc:['http','https']},
tagNames:['h1','h2','h3','h4','h5','h6','br','b','i','strong','em','a','pre','code','img','tt','div','ins','del','sup','sub','p','ol','ul','table','thead','tbody','tfoot','blockquote','dl','dt','dd','kbd','q','samp','var','hr','ruby','rt','rp','li','tr','td','th','s','strike','summary','details','caption','figure','figcaption','abbr','bdo','cite','dfn','mark','small','span','time','wbr','input'],
attributes:{a:['href'],img:['src','longDesc'],
input:[['type','checkbox'],['disabled',!0]],
li:[['className','task-list-item']],div:['itemScope','itemType'],
blockquote:['cite'],del:['cite'],ins:['cite'],q:['cite'],
'*':['abbr','accept','acceptCharset','accessKey','action','align','alt','ariaDescribedBy','ariaHidden','ariaLabel','ariaLabelledBy','axis','border','cellPadding','cellSpacing','char','charOff','charSet','checked','clear','cols','colSpan','color','compact','coords','dateTime','dir','disabled','encType','htmlFor','frame','headers','height','hrefLang','hSpace','isMap','id','label','lang','maxLength','media','method','multiple','name','noHref','noShade','noWrap','open','prompt','readOnly','rel','rev','rows','rowSpan','rules','scope','selected','shape','size','span','start','summary','tabIndex','target','title','type','useMap','vAlign','value','vSpace','width','itemProp']
},required:{input:{type:'checkbox',disabled:!0}}}
var lu={}.hasOwnProperty,cu=[].push,uu={root:{children:fu},
doctype:function(e){return e.allowDoctypes?{name:pu}:null},
comment:function(e){return e.allowComments?{value:du}:null},element:{
tagName:mu,properties:function(e,t,n,r){
var i,o,s,a=mu(e,n.tagName,n,r),l=e.required||{},c=t||{},u=Object.assign({},_u(e.attributes['*']),_u(a&&lu.call(e.attributes,a)?e.attributes[a]:[])),h={}
for(s in c)if(lu.call(c,s)){if(lu.call(u,s))i=u[s]
else{
if(!((f=s).length>4&&'data'===f.slice(0,4).toLowerCase()&&lu.call(u,'data*')))continue
i=u['data*']}
o=c[s],null!=(o=Array.isArray(o)?Eu(e,o,s,i):gu(e,o,s,i))&&(h[s]=o)}
var f
if(a&&lu.call(l,a))for(s in l[a])lu.call(h,s)||(h[s]=l[a][s])
return h},children:fu},text:{value:function(e,t){
return'string'==typeof t?t:''}},'*':{data:Tu,position:Tu}}
function hu(e,t,n){var r,i,o,s,a,l=t&&t.type,c={type:t.type}
if(lu.call(uu,l)&&('function'==typeof(i=uu[l])&&(i=i(e,t)),i))for(a in r=!0,o=Object.assign({},i,uu['*']))lu.call(o,a)&&(!1===(s=o[a](e,t[a],t,n))?(r=null,
c[a]=t[a]):null!=s&&(c[a]=s))
return r?c:'element'!==c.type||e.strip.includes(c.tagName)?null:c.children
}function fu(e,t,n,r){var i,o=[],s=-1
if(Array.isArray(t)){
for('element'===n.type&&r.push(n.tagName);++s<t.length;)(i=hu(e,t[s],r))&&('length'in i?cu.apply(o,i):o.push(i))
'element'===n.type&&r.pop()}return o}function pu(){return'html'}
function mu(e,t,n,r){var i='string'==typeof t?t:'',o=-1
if(!i||'*'===i||!e.tagNames.includes(i))return!1
if(lu.call(e.ancestors,i)){
for(;++o<e.ancestors[i].length;)if(r.includes(e.ancestors[i][o]))return i
return!1}return i}function du(e,t){
var n='string'==typeof t?t:'',r=n.indexOf('--\x3e')
return r<0?n:n.slice(0,r)}function Tu(e,t){return t}
function Eu(e,t,n,r){
for(var i,o=-1,s=[];++o<t.length;)null!=(i=gu(e,t[o],n,r))&&s.push(i)
return s}function gu(e,t,n,r){
if(('boolean'==typeof t||'number'==typeof t||'string'==typeof t)&&function(e,t,n){
var r=String(t),i=r.indexOf(':'),o=r.indexOf('?'),s=r.indexOf('#'),a=r.indexOf('/'),l=lu.call(e.protocols,n)?e.protocols[n].concat():[],c=-1
if(0===l.length||i<0||a>-1&&i>a||o>-1&&i>o||s>-1&&i>s)return!0
for(;++c<l.length;)if(i===l[c].length&&r.slice(0,l[c].length)===l[c])return!0
return!1
}(e,t,n)&&(0===r.length||r.includes(t)))return e.clobber.includes(n)?e.clobberPrefix+t:t
}function _u(e){
for(var t,n={},r=-1;++r<e.length;)t=e[r],Array.isArray(t)?n[t[0]]=t.slice(1):n[t]=[]
return n}const Au=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,Cu=/^[a-zA-Z]:\\/
const Nu=['nofollow'],ku=['http','https']
function Su(e,t){return'function'==typeof e?e(t):e}var Ou=function(e){
return function(e){return!!e&&'object'==typeof e}(e)&&!function(e){
var t=Object.prototype.toString.call(e)
return'[object RegExp]'===t||'[object Date]'===t||function(e){
return e.$$typeof===yu}(e)}(e)}
var yu='function'==typeof Symbol&&Symbol.for?Symbol.for('react.element'):60103
function Iu(e,t){
return!1!==t.clone&&t.isMergeableObject(e)?Mu((n=e,Array.isArray(n)?[]:{}),e,t):e
var n}function Ru(e,t,n){return e.concat(t).map((function(e){
return Iu(e,n)}))}function Lu(e){
return Object.keys(e).concat(function(e){
return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){
return e.propertyIsEnumerable(t)})):[]}(e))}function bu(e,t){try{
return t in e}catch(e){return!1}}function xu(e,t,n){var r={}
return n.isMergeableObject(e)&&Lu(e).forEach((function(t){
r[t]=Iu(e[t],n)})),Lu(t).forEach((function(i){(function(e,t){
return bu(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))
})(e,i)||(bu(e,i)&&n.isMergeableObject(t[i])?r[i]=function(e,t){
if(!t.customMerge)return Mu
var n=t.customMerge(e)
return'function'==typeof n?n:Mu}(i,n)(e[i],t[i],n):r[i]=Iu(t[i],n))
})),r}function Mu(e,t,n){
(n=n||{}).arrayMerge=n.arrayMerge||Ru,n.isMergeableObject=n.isMergeableObject||Ou,
n.cloneUnlessOtherwiseSpecified=Iu
var r=Array.isArray(t)
return r===Array.isArray(e)?r?n.arrayMerge(e,t,n):xu(e,t,n):Iu(t,n)}
Mu.all=function(e,t){
if(!Array.isArray(e))throw new Error('first argument should be an array')
return e.reduce((function(e,n){return Mu(e,n,t)}),{})}
var Pu=Mu,Du={},vu=Pc
function Hu(e,t){var n,r=null
if(!e||'string'!=typeof e)return r
for(var i,o,s=vu(e),a='function'==typeof t,l=0,c=s.length;l<c;l++)i=(n=s[l]).property,
o=n.value,a?t(i,o,n):o&&(r||(r={}),r[i]=o)
return r}({get exports(){return Du},set exports(e){Du=e}
}).exports=Hu,Du.default=Hu
var Fu=Du
const wu={parse:function(e){Object.assign(this,{Parser:t=>{
const n=this.data('settings')
return Ct(t,Object.assign({},n,e,{
extensions:this.data('micromarkExtensions')||[],
mdastExtensions:this.data('fromMarkdownExtensions')||[]}))}})},
gfm:function(e={}){const t=this.data()
function n(e,n){(t[e]?t[e]:t[e]=[]).push(n)}
n('micromarkExtensions',function(e){return K([Dt,{document:{91:{
tokenize:Vt,continuation:{tokenize:qt},exit:Xt}},text:{91:{tokenize:Wt
},93:{add:'after',tokenize:Yt,resolveTo:Qt}}},$t(e),Zt,tn])
}(e)),n('fromMarkdownExtensions',[dn,{enter:{
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
},Dn,Un,Qn]),n('toMarkdownExtensions',function(e){return{
extensions:[Tn,Mn(),vn,jn(e),Wn]}}(e))},rehype:Er},Bu={
raw:function(e={}){return(t,n)=>nu(t,n,e)},sanitize:function(e=au){
return t=>function(e,t){var n,r={type:'root',children:[]}
return e&&'object'==typeof e&&e.type&&(n=hu(Object.assign({},au,t||{}),e,[]))&&(Array.isArray(n)?1===n.length?r=n[0]:r.children=n:r=n),
r}(t,e)},externalLinks:function(e={}){return t=>{tr(t,'element',(t=>{
if('a'===t.tagName&&t.properties&&'string'==typeof t.properties.href){
const n=t.properties.href,r=n.slice(0,n.indexOf(':')),i=Su(e.target,t),o=Su(e.rel,t)||Nu,s='string'==typeof o?oc(o):o,a=Su(e.protocols,t)||ku,l=Su(e.content,t),c=l&&!Array.isArray(l)?[l]:l,h=Su(e.contentProperties,t)||{}
;(function(e){
if('string'!=typeof e)throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``)
return!Cu.test(e)&&Au.test(e)
}(n)?a.includes(r):n.startsWith('//'))&&(i&&(t.properties.target=i),
s.length>0&&(t.properties.rel=s.concat()),c&&t.children.push({
type:'element',tagName:'span',properties:u(!0,h),children:u(!0,c)}))}
}))}},defaultSchema:au}
export{Bu as Rehype,wu as Remark,R as Unified,Pu as deepmerge,Fu as styleToObject}
