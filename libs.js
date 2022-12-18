12
function e(e){if(e)throw e}var n=function(e){
return null!=e&&null!=e.constructor&&'function'==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)
},t=Object.prototype.hasOwnProperty,r=Object.prototype.toString,o=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=function(e){
return'function'==typeof Array.isArray?Array.isArray(e):'[object Array]'===r.call(e)
},u=function(e){if(!e||'[object Object]'!==r.call(e))return!1
var n,o=t.call(e,'constructor'),i=e.constructor&&e.constructor.prototype&&t.call(e.constructor.prototype,'isPrototypeOf')
if(e.constructor&&!o&&!i)return!1
for(n in e);return void 0===n||t.call(e,n)},c=function(e,n){
o&&'__proto__'===n.name?o(e,n.name,{enumerable:!0,configurable:!0,
value:n.newValue,writable:!0}):e[n.name]=n.newValue},a=function(e,n){
if('__proto__'===n){if(!t.call(e,n))return
if(i)return i(e,n).value}return e[n]},s=function e(){
var n,t,r,o,i,s,f=arguments[0],p=1,h=arguments.length,d=!1
for('boolean'==typeof f&&(d=f,f=arguments[1]||{},p=2),(null==f||'object'!=typeof f&&'function'!=typeof f)&&(f={});p<h;++p)if(null!=(n=arguments[p]))for(t in n)r=a(f,t),
f!==(o=a(n,t))&&(d&&o&&(u(o)||(i=l(o)))?(i?(i=!1,
s=r&&l(r)?r:[]):s=r&&u(r)?r:{},c(f,{name:t,newValue:e(d,s,o)
})):void 0!==o&&c(f,{name:t,newValue:o}))
return f}
function f(e){if('object'!=typeof e||null===e)return!1
const n=Object.getPrototypeOf(e)
return!(null!==n&&n!==Object.prototype&&null!==Object.getPrototypeOf(n)||Symbol.toStringTag in e||Symbol.iterator in e)
}function p(){const e=[],n={run:function(...n){let t=-1
const r=n.pop()
if('function'!=typeof r)throw new TypeError('Expected function as last argument, not '+r)
!function o(i,...l){const u=e[++t]
let c=-1
if(i)r(i)
else{for(;++c<n.length;)null!==l[c]&&void 0!==l[c]||(l[c]=n[c])
n=l,u?function(e,n){let t
return r
function r(...n){const r=e.length>n.length
let l
r&&n.push(o)
try{l=e.apply(this,n)}catch(e){if(r&&t)throw e
return o(e)}
r||(l instanceof Promise?l.then(i,o):l instanceof Error?o(l):i(l))}
function o(e,...r){t||(t=!0,n(e,...r))}function i(e){o(null,e)}
}(u,o)(...l):r(null,...l)}}(null,...n)},use:function(t){
if('function'!=typeof t)throw new TypeError('Expected `middelware` to be a function, not '+t)
return e.push(t),n}}
return n}function h(e){
return e&&'object'==typeof e?'position'in e||'type'in e?g(e.position):'start'in e||'end'in e?g(e):'line'in e||'column'in e?d(e):'':''
}function d(e){return m(e&&e.line)+':'+m(e&&e.column)}function g(e){
return d(e&&e.start)+'-'+d(e&&e.end)}function m(e){
return e&&'number'==typeof e?e:1}class y extends Error{
constructor(e,n,t){const r=[null,null]
let o={start:{line:null,column:null},end:{line:null,column:null}}
if(super(),'string'==typeof n&&(t=n,n=void 0),'string'==typeof t){
const e=t.indexOf(':')
;-1===e?r[1]=t:(r[0]=t.slice(0,e),r[1]=t.slice(e+1))}
n&&('type'in n||'position'in n?n.position&&(o=n.position):'start'in n||'end'in n?o=n:('line'in n||'column'in n)&&(o.start=n)),
this.name=h(n)||'1:1',
this.message='object'==typeof e?e.message:e,this.stack='',
'object'==typeof e&&e.stack&&(this.stack=e.stack),
this.reason=this.message,this.fatal,
this.line=o.start.line,this.column=o.start.column,
this.position=o,this.source=r[0],
this.ruleId=r[1],this.file,this.actual,this.expected,
this.url,this.note}}
y.prototype.file='',y.prototype.name='',y.prototype.reason='',
y.prototype.message='',
y.prototype.stack='',y.prototype.fatal=null,y.prototype.column=null,
y.prototype.line=null,
y.prototype.source=null,y.prototype.ruleId=null,y.prototype.position=null
const k={basename:function(e,n){
if(void 0!==n&&'string'!=typeof n)throw new TypeError('"ext" argument must be a string')
x(e)
let t,r=0,o=-1,i=e.length
if(void 0===n||0===n.length||n.length>e.length){
for(;i--;)if(47===e.charCodeAt(i)){if(t){r=i+1
break}}else o<0&&(t=!0,o=i+1)
return o<0?'':e.slice(r,o)}if(n===e)return''
let l=-1,u=n.length-1
for(;i--;)if(47===e.charCodeAt(i)){if(t){r=i+1
break}
}else l<0&&(t=!0,l=i+1),u>-1&&(e.charCodeAt(i)===n.charCodeAt(u--)?u<0&&(o=i):(u=-1,
o=l))
r===o?o=l:o<0&&(o=e.length)
return e.slice(r,o)},dirname:function(e){
if(x(e),0===e.length)return'.'
let n,t=-1,r=e.length
for(;--r;)if(47===e.charCodeAt(r)){if(n){t=r
break}}else n||(n=!0)
return t<0?47===e.charCodeAt(0)?'/':'.':1===t&&47===e.charCodeAt(0)?'//':e.slice(0,t)
},extname:function(e){x(e)
let n,t=e.length,r=-1,o=0,i=-1,l=0
for(;t--;){const u=e.charCodeAt(t)
if(47!==u)r<0&&(n=!0,r=t+1),46===u?i<0?i=t:1!==l&&(l=1):i>-1&&(l=-1)
else if(n){o=t+1
break}}if(i<0||r<0||0===l||1===l&&i===r-1&&i===o+1)return''
return e.slice(i,r)},join:function(...e){let n,t=-1
for(;++t<e.length;)x(e[t]),e[t]&&(n=void 0===n?e[t]:n+'/'+e[t])
return void 0===n?'.':function(e){x(e)
const n=47===e.charCodeAt(0)
let t=function(e,n){let t,r,o='',i=0,l=-1,u=0,c=-1
for(;++c<=e.length;){if(c<e.length)t=e.charCodeAt(c)
else{if(47===t)break
t=47}if(47===t){if(l===c-1||1===u);else if(l!==c-1&&2===u){
if(o.length<2||2!==i||46!==o.charCodeAt(o.length-1)||46!==o.charCodeAt(o.length-2))if(o.length>2){
if(r=o.lastIndexOf('/'),r!==o.length-1){
r<0?(o='',i=0):(o=o.slice(0,r),i=o.length-1-o.lastIndexOf('/')),
l=c,u=0
continue}}else if(o.length>0){o='',i=0,l=c,u=0
continue}n&&(o=o.length>0?o+'/..':'..',i=2)
}else o.length>0?o+='/'+e.slice(l+1,c):o=e.slice(l+1,c),i=c-l-1
l=c,u=0}else 46===t&&u>-1?u++:u=-1}return o}(e,!n)
0!==t.length||n||(t='.')
t.length>0&&47===e.charCodeAt(e.length-1)&&(t+='/')
return n?'/'+t:t}(n)},sep:'/'}
function x(e){
if('string'!=typeof e)throw new TypeError('Path must be a string. Received '+JSON.stringify(e))
}const b={cwd:function(){return'/'}}
function v(e){return null!==e&&'object'==typeof e&&e.href&&e.origin}
function w(e){if('string'==typeof e)e=new URL(e)
else if(!v(e)){
const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+'`')
throw n.code='ERR_INVALID_ARG_TYPE',n}if('file:'!==e.protocol){
const e=new TypeError('The URL must be of scheme file')
throw e.code='ERR_INVALID_URL_SCHEME',e}return function(e){
if(''!==e.hostname){
const e=new TypeError('File URL host must be "localhost" or empty on darwin')
throw e.code='ERR_INVALID_FILE_URL_HOST',e}const n=e.pathname
let t=-1
for(;++t<n.length;)if(37===n.charCodeAt(t)&&50===n.charCodeAt(t+1)){
const e=n.charCodeAt(t+2)
if(70===e||102===e){
const e=new TypeError('File URL path must not include encoded / characters')
throw e.code='ERR_INVALID_FILE_URL_PATH',e}}
return decodeURIComponent(n)}(e)}
const C=['history','path','basename','stem','extname','dirname']
class S{constructor(e){let t
t=e?'string'==typeof e||n(e)?{value:e}:v(e)?{path:e
}:e:{},this.data={},this.messages=[],
this.history=[],this.cwd=b.cwd(),this.value,
this.stored,this.result,this.map
let r,o=-1
for(;++o<C.length;){const e=C[o]
e in t&&void 0!==t[e]&&(this[e]='history'===e?[...t[e]]:t[e])}
for(r in t)C.includes(r)||(this[r]=t[r])}get path(){
return this.history[this.history.length-1]}set path(e){
v(e)&&(e=w(e)),F(e,'path'),this.path!==e&&this.history.push(e)}
get dirname(){
return'string'==typeof this.path?k.dirname(this.path):void 0}
set dirname(e){
E(this.basename,'dirname'),this.path=k.join(e||'',this.basename)}
get basename(){
return'string'==typeof this.path?k.basename(this.path):void 0}
set basename(e){
F(e,'basename'),A(e,'basename'),this.path=k.join(this.dirname||'',e)}
get extname(){
return'string'==typeof this.path?k.extname(this.path):void 0}
set extname(e){if(A(e,'extname'),E(this.dirname,'extname'),e){
if(46!==e.charCodeAt(0))throw new Error('`extname` must start with `.`')
if(e.includes('.',1))throw new Error('`extname` cannot contain multiple dots')
}this.path=k.join(this.dirname,this.stem+(e||''))}get stem(){
return'string'==typeof this.path?k.basename(this.path,this.extname):void 0
}set stem(e){
F(e,'stem'),A(e,'stem'),this.path=k.join(this.dirname||'',e+(this.extname||''))
}toString(e){return(this.value||'').toString(e)}message(e,n,t){
const r=new y(e,n,t)
return this.path&&(r.name=this.path+':'+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),
r}info(e,n,t){const r=this.message(e,n,t)
return r.fatal=null,r}fail(e,n,t){const r=this.message(e,n,t)
throw r.fatal=!0,r}}function A(e,n){
if(e&&e.includes(k.sep))throw new Error('`'+n+'` cannot be a path: did not expect `'+k.sep+'`')
}function F(e,n){if(!e)throw new Error('`'+n+'` cannot be empty')}
function E(e,n){
if(!e)throw new Error('Setting `'+n+'` requires `path` to be set too')
}const D=function t(){const r=p(),o=[]
let i,l={},u=-1
return c.data=function(e,n){
if('string'==typeof e)return 2===arguments.length?(P('data',i),
l[e]=n,c):L.call(l,e)&&l[e]||null
if(e)return P('data',i),l=e,c
return l},c.Parser=void 0,c.Compiler=void 0,c.freeze=function(){
if(i)return c
for(;++u<o.length;){const[e,...n]=o[u]
if(!1===n[0])continue
!0===n[0]&&(n[0]=void 0)
const t=e.call(c,...n)
'function'==typeof t&&r.use(t)}
return i=!0,u=Number.POSITIVE_INFINITY,c
},c.attachers=o,c.use=function(e,...n){let t
if(P('use',i),null==e);else if('function'==typeof e)p(e,...n)
else{
if('object'!=typeof e)throw new TypeError('Expected usable value, not `'+e+'`')
Array.isArray(e)?a(e):u(e)}
t&&(l.settings=Object.assign(l.settings||{},t))
return c
function r(e){if('function'==typeof e)p(e)
else{
if('object'!=typeof e)throw new TypeError('Expected usable value, not `'+e+'`')
if(Array.isArray(e)){const[n,...t]=e
p(n,...t)}else u(e)}}function u(e){
a(e.plugins),e.settings&&(t=Object.assign(t||{},e.settings))}
function a(e){let n=-1
if(null==e);else{
if(!Array.isArray(e))throw new TypeError('Expected a list of plugins, not `'+e+'`')
for(;++n<e.length;){r(e[n])}}}function p(e,n){let t,r=-1
for(;++r<o.length;)if(o[r][0]===e){t=o[r]
break}
t?(f(t[1])&&f(n)&&(n=s(!0,t[1],n)),t[1]=n):o.push([...arguments])}
},c.parse=function(e){c.freeze()
const n=R(e),t=c.Parser
if(I('parse',t),T(t,'parse'))return new t(String(n),n).parse()
return t(String(n),n)},c.stringify=function(e,n){c.freeze()
const t=R(n),r=c.Compiler
if(O('stringify',r),z(e),T(r,'compile'))return new r(e,t).compile()
return r(e,t)},c.run=function(e,n,t){
z(e),c.freeze(),t||'function'!=typeof n||(t=n,n=void 0)
if(!t)return new Promise(o)
function o(o,i){function l(n,r,l){r=r||e,n?i(n):o?o(r):t(null,r,l)}
r.run(e,R(n),l)}o(null,t)},c.runSync=function(n,t){let r,o
return c.run(n,t,i),M('runSync','run',o),r
function i(n,t){e(n),r=t,o=!0}},c.process=function(e,t){
if(c.freeze(),I('process',c.Parser),
O('process',c.Compiler),!t)return new Promise(r)
function r(r,o){const i=R(e)
function l(e,n){e||!n?o(e):r?r(n):t(null,n)}
c.run(c.parse(i),i,((e,t,r)=>{if(!e&&t&&r){const i=c.stringify(t,r)
null==i||('string'==typeof(o=i)||n(o)?r.value=i:r.result=i),l(e,r)
}else l(e)
var o}))}r(null,t)},c.processSync=function(n){let t
c.freeze(),I('processSync',c.Parser),O('processSync',c.Compiler)
const r=R(n)
return c.process(r,o),M('processSync','process',t),r
function o(n){t=!0,e(n)}},c
function c(){const e=t()
let n=-1
for(;++n<o.length;)e.use(...o[n])
return e.data(s(!0,{},l)),e}}().freeze(),L={}.hasOwnProperty
function T(e,n){return'function'==typeof e&&e.prototype&&(function(e){
let n
for(n in e)if(L.call(e,n))return!0
return!1}(e.prototype)||n in e.prototype)}function I(e,n){
if('function'!=typeof n)throw new TypeError('Cannot `'+e+'` without `Parser`')
}function O(e,n){
if('function'!=typeof n)throw new TypeError('Cannot `'+e+'` without `Compiler`')
}function P(e,n){
if(n)throw new Error('Cannot call `'+e+'` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.')
}function z(e){
if(!f(e)||'string'!=typeof e.type)throw new TypeError('Expected node, got `'+e+'`')
}function M(e,n,t){
if(!t)throw new Error('`'+e+'` finished async. Use `'+n+'` instead')}
function R(e){return function(e){
return Boolean(e&&'object'==typeof e&&'message'in e&&'messages'in e)
}(e)?e:new S(e)}function B(e,n){
return e&&'object'==typeof e&&(e.value||(n?e.alt:'')||'children'in e&&_(e.children,n)||Array.isArray(e)&&_(e,n))||''
}function _(e,n){for(var t=[],r=-1;++r<e.length;)t[r]=B(e[r],n)
return t.join('')}function j(e,n,t,r){const o=e.length
let i,l=0
if(n=n<0?-n>o?0:o+n:n>o?o:n,t=t>0?t:0,r.length<1e4)i=Array.from(r),i.unshift(n,t),
[].splice.apply(e,i)
else for(t&&[].splice.apply(e,[n,t]);l<r.length;)i=r.slice(l,l+1e4),i.unshift(n,0),
[].splice.apply(e,i),l+=1e4,n+=1e4}function N(e,n){
return e.length>0?(j(e,e.length,0,n),e):n}const H={}.hasOwnProperty
function U(e){const n={}
let t=-1
for(;++t<e.length;)V(n,e[t])
return n}function V(e,n){let t
for(t in n){const r=(H.call(e,t)?e[t]:void 0)||(e[t]={}),o=n[t]
let i
for(i in o){H.call(r,i)||(r[i]=[])
const e=o[i]
q(r[i],Array.isArray(e)?e:e?[e]:[])}}}function q(e,n){let t=-1
const r=[]
for(;++t<n.length;)('after'===n[t].add?e:r).push(n[t])
j(e,0,0,r)}
const W=re(/[A-Za-z]/),$=re(/\d/),Q=re(/[\dA-Fa-f]/),X=re(/[\dA-Za-z]/),Y=re(/[!-/:-@[-`{-~]/),K=re(/[#-'*+\--9=?A-Z^-~]/)
function Z(e){return null!==e&&(e<32||127===e)}function J(e){
return null!==e&&(e<0||32===e)}function G(e){return null!==e&&e<-2}
function ee(e){return-2===e||-1===e||32===e}
const ne=re(/\s/),te=re(/[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/)
function re(e){return function(n){
return null!==n&&e.test(String.fromCharCode(n))}}function oe(e,n,t,r){
const o=r?r-1:Number.POSITIVE_INFINITY
let i=0
return function(r){if(ee(r))return e.enter(t),l(r)
return n(r)}
function l(r){return ee(r)&&i++<o?(e.consume(r),l):(e.exit(t),n(r))}}
const ie={tokenize:function(e){
const n=e.attempt(this.parser.constructs.contentInitial,(function(t){
if(null===t)return void e.consume(t)
return e.enter('lineEnding'),e.consume(t),e.exit('lineEnding'),oe(e,n,'linePrefix')
}),(function(n){return e.enter('paragraph'),r(n)}))
let t
return n
function r(n){const r=e.enter('chunkText',{contentType:'text',
previous:t})
return t&&(t.next=r),t=r,o(n)}function o(n){
return null===n?(e.exit('chunkText'),
e.exit('paragraph'),void e.consume(n)):G(n)?(e.consume(n),
e.exit('chunkText'),r):(e.consume(n),o)}}}
const le={tokenize:function(e){const n=this,t=[]
let r,o,i,l=0
return u
function u(r){if(l<t.length){const o=t[l]
return n.containerState=o[1],e.attempt(o[0].continuation,c,a)(r)}
return a(r)}function c(e){if(l++,n.containerState._closeFlow){
n.containerState._closeFlow=void 0,r&&k()
const t=n.events.length
let o,i=t
for(;i--;)if('exit'===n.events[i][0]&&'chunkFlow'===n.events[i][1].type){
o=n.events[i][1].end
break}y(l)
let u=t
for(;u<n.events.length;)n.events[u][1].end=Object.assign({},o),u++
return j(n.events,i+1,0,n.events.slice(t)),n.events.length=u,a(e)}
return u(e)}function a(o){if(l===t.length){if(!r)return p(o)
if(r.currentConstruct&&r.currentConstruct.concrete)return d(o)
n.interrupt=Boolean(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)
}return n.containerState={},e.check(ue,s,f)(o)}function s(e){
return r&&k(),y(l),p(e)}function f(e){
return n.parser.lazy[n.now().line]=l!==t.length,i=n.now().offset,d(e)}
function p(t){return n.containerState={},e.attempt(ue,h,d)(t)}
function h(e){
return l++,t.push([n.currentConstruct,n.containerState]),p(e)}
function d(t){
return null===t?(r&&k(),y(0),void e.consume(t)):(r=r||n.parser.flow(n.now()),
e.enter('chunkFlow',{contentType:'flow',previous:o,_tokenizer:r
}),g(t))}function g(t){
return null===t?(m(e.exit('chunkFlow'),!0),y(0),void e.consume(t)):G(t)?(e.consume(t),
m(e.exit('chunkFlow')),l=0,n.interrupt=void 0,u):(e.consume(t),g)}
function m(e,t){const u=n.sliceStream(e)
if(t&&u.push(null),e.previous=o,o&&(o.next=e),o=e,r.defineSkip(e.start),r.write(u),
n.parser.lazy[e.start.line]){let e=r.events.length
for(;e--;)if(r.events[e][1].start.offset<i&&(!r.events[e][1].end||r.events[e][1].end.offset>i))return
const t=n.events.length
let o,u,c=t
for(;c--;)if('exit'===n.events[c][0]&&'chunkFlow'===n.events[c][1].type){
if(o){u=n.events[c][1].end
break}o=!0}
for(y(l),e=t;e<n.events.length;)n.events[e][1].end=Object.assign({},u),
e++
j(n.events,c+1,0,n.events.slice(t)),n.events.length=e}}function y(r){
let o=t.length
for(;o-- >r;){const r=t[o]
n.containerState=r[1],r[0].exit.call(n,e)}t.length=r}function k(){
r.write([null]),o=void 0,r=void 0,n.containerState._closeFlow=void 0}}
},ue={tokenize:function(e,n,t){
return oe(e,e.attempt(this.parser.constructs.document,n,t),'linePrefix',this.parser.constructs.disable.null.includes('codeIndented')?void 0:4)
}}
function ce(e){return null===e||J(e)||ne(e)?1:te(e)?2:void 0}
function ae(e,n,t){const r=[]
let o=-1
for(;++o<e.length;){const i=e[o].resolveAll
i&&!r.includes(i)&&(n=i(n,t),r.push(i))}return n}const se={
name:'attention',tokenize:function(e,n){
const t=this.parser.constructs.attentionMarkers.null,r=this.previous,o=ce(r)
let i
return function(n){return e.enter('attentionSequence'),i=n,l(n)}
function l(u){if(u===i)return e.consume(u),l
const c=e.exit('attentionSequence'),a=ce(u),s=!a||2===a&&o||t.includes(u),f=!o||2===o&&a||t.includes(r)
return c._open=Boolean(42===i?s:s&&(o||!f)),c._close=Boolean(42===i?f:f&&(a||!s)),
n(u)}},resolveAll:function(e,n){let t,r,o,i,l,u,c,a,s=-1
for(;++s<e.length;)if('enter'===e[s][0]&&'attentionSequence'===e[s][1].type&&e[s][1]._close)for(t=s;t--;)if('exit'===e[t][0]&&'attentionSequence'===e[t][1].type&&e[t][1]._open&&n.sliceSerialize(e[t][1]).charCodeAt(0)===n.sliceSerialize(e[s][1]).charCodeAt(0)){
if((e[t][1]._close||e[s][1]._open)&&(e[s][1].end.offset-e[s][1].start.offset)%3&&!((e[t][1].end.offset-e[t][1].start.offset+e[s][1].end.offset-e[s][1].start.offset)%3))continue
u=e[t][1].end.offset-e[t][1].start.offset>1&&e[s][1].end.offset-e[s][1].start.offset>1?2:1
const f=Object.assign({},e[t][1].end),p=Object.assign({},e[s][1].start)
fe(f,-u),fe(p,u),i={type:u>1?'strongSequence':'emphasisSequence',
start:f,end:Object.assign({},e[t][1].end)},l={
type:u>1?'strongSequence':'emphasisSequence',
start:Object.assign({},e[s][1].start),end:p},o={
type:u>1?'strongText':'emphasisText',
start:Object.assign({},e[t][1].end),
end:Object.assign({},e[s][1].start)},r={type:u>1?'strong':'emphasis',
start:Object.assign({},i.start),end:Object.assign({},l.end)
},e[t][1].end=Object.assign({},i.start),
e[s][1].start=Object.assign({},l.end),c=[],
e[t][1].end.offset-e[t][1].start.offset&&(c=N(c,[['enter',e[t][1],n],['exit',e[t][1],n]])),
c=N(c,[['enter',r,n],['enter',i,n],['exit',i,n],['enter',o,n]]),
c=N(c,ae(n.parser.constructs.insideSpan.null,e.slice(t+1,s),n)),
c=N(c,[['exit',o,n],['enter',l,n],['exit',l,n],['exit',r,n]]),
e[s][1].end.offset-e[s][1].start.offset?(a=2,
c=N(c,[['enter',e[s][1],n],['exit',e[s][1],n]])):a=0,
j(e,t-1,s-t+3,c),s=t+c.length-a-2
break}s=-1
for(;++s<e.length;)'attentionSequence'===e[s][1].type&&(e[s][1].type='data')
return e}}
function fe(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const pe={
name:'autolink',tokenize:function(e,n,t){let r=1
return function(n){
return e.enter('autolink'),e.enter('autolinkMarker'),e.consume(n),
e.exit('autolinkMarker'),e.enter('autolinkProtocol'),o}
function o(n){return W(n)?(e.consume(n),i):K(n)?c(n):t(n)}
function i(e){return 43===e||45===e||46===e||X(e)?l(e):c(e)}
function l(n){
return 58===n?(e.consume(n),u):(43===n||45===n||46===n||X(n))&&r++<32?(e.consume(n),
l):c(n)}function u(n){
return 62===n?(e.exit('autolinkProtocol'),p(n)):null===n||32===n||60===n||Z(n)?t(n):(e.consume(n),
u)}function c(n){
return 64===n?(e.consume(n),r=0,a):K(n)?(e.consume(n),c):t(n)}
function a(e){return X(e)?s(e):t(e)}function s(n){
return 46===n?(e.consume(n),r=0,
a):62===n?(e.exit('autolinkProtocol').type='autolinkEmail',p(n)):f(n)}
function f(n){
return(45===n||X(n))&&r++<63?(e.consume(n),45===n?f:s):t(n)}
function p(t){
return e.enter('autolinkMarker'),e.consume(t),e.exit('autolinkMarker'),
e.exit('autolink'),n}}}
const he={tokenize:function(e,n,t){return oe(e,(function(e){
return null===e||G(e)?n(e):t(e)}),'linePrefix')},partial:!0}
const de={name:'blockQuote',tokenize:function(e,n,t){const r=this
return function(n){if(62===n){const t=r.containerState
return t.open||(e.enter('blockQuote',{_container:!0
}),t.open=!0),e.enter('blockQuotePrefix'),
e.enter('blockQuoteMarker'),e.consume(n),e.exit('blockQuoteMarker'),o}
return t(n)}
function o(t){
return ee(t)?(e.enter('blockQuotePrefixWhitespace'),e.consume(t),e.exit('blockQuotePrefixWhitespace'),
e.exit('blockQuotePrefix'),n):(e.exit('blockQuotePrefix'),n(t))}},
continuation:{tokenize:function(e,n,t){
return oe(e,e.attempt(de,n,t),'linePrefix',this.parser.constructs.disable.null.includes('codeIndented')?void 0:4)
}},exit:function(e){e.exit('blockQuote')}}
const ge={name:'characterEscape',tokenize:function(e,n,t){
return function(n){
return e.enter('characterEscape'),e.enter('escapeMarker'),e.consume(n),
e.exit('escapeMarker'),r}
function r(r){
return Y(r)?(e.enter('characterEscapeValue'),e.consume(r),e.exit('characterEscapeValue'),
e.exit('characterEscape'),n):t(r)}}}
const me=document.createElement('i')
function ye(e){const n='&'+e+';'
me.innerHTML=n
const t=me.textContent
return(59!==t.charCodeAt(t.length-1)||'semi'===e)&&(t!==n&&t)}
const ke={name:'characterReference',tokenize:function(e,n,t){
const r=this
let o,i,l=0
return function(n){
return e.enter('characterReference'),e.enter('characterReferenceMarker'),
e.consume(n),e.exit('characterReferenceMarker'),u}
function u(n){
return 35===n?(e.enter('characterReferenceMarkerNumeric'),e.consume(n),
e.exit('characterReferenceMarkerNumeric'),
c):(e.enter('characterReferenceValue'),o=31,i=X,a(n))}function c(n){
return 88===n||120===n?(e.enter('characterReferenceMarkerHexadecimal'),
e.consume(n),
e.exit('characterReferenceMarkerHexadecimal'),e.enter('characterReferenceValue'),
o=6,i=Q,a):(e.enter('characterReferenceValue'),o=7,i=$,a(n))}
function a(u){let c
return 59===u&&l?(c=e.exit('characterReferenceValue'),i!==X||ye(r.sliceSerialize(c))?(e.enter('characterReferenceMarker'),
e.consume(u),
e.exit('characterReferenceMarker'),e.exit('characterReference'),n):t(u)):i(u)&&l++<o?(e.consume(u),
a):t(u)}}}
const xe={name:'codeFenced',tokenize:function(e,n,t){const r=this,o={
tokenize:function(e,n,t){let r=0
return oe(e,o,'linePrefix',this.parser.constructs.disable.null.includes('codeIndented')?void 0:4)
function o(n){
return e.enter('codeFencedFence'),e.enter('codeFencedFenceSequence'),
i(n)}function i(n){
return n===c?(e.consume(n),r++,i):r<a?t(n):(e.exit('codeFencedFenceSequence'),
oe(e,l,'whitespace')(n))}function l(r){
return null===r||G(r)?(e.exit('codeFencedFence'),n(r)):t(r)}},
partial:!0},i={tokenize:function(e,n,t){const r=this
return o
function o(n){
return e.enter('lineEnding'),e.consume(n),e.exit('lineEnding'),i}
function i(e){return r.parser.lazy[r.now().line]?t(e):n(e)}},
partial:!0
},l=this.events[this.events.length-1],u=l&&'linePrefix'===l[1].type?l[2].sliceSerialize(l[1],!0).length:0
let c,a=0
return function(n){
return e.enter('codeFenced'),e.enter('codeFencedFence'),e.enter('codeFencedFenceSequence'),
c=n,s(n)}
function s(n){
return n===c?(e.consume(n),a++,s):(e.exit('codeFencedFenceSequence'),
a<3?t(n):oe(e,f,'whitespace')(n))}function f(n){
return null===n||G(n)?g(n):(e.enter('codeFencedFenceInfo'),
e.enter('chunkString',{contentType:'string'}),p(n))}function p(n){
return null===n||J(n)?(e.exit('chunkString'),
e.exit('codeFencedFenceInfo'),oe(e,h,'whitespace')(n)):96===n&&n===c?t(n):(e.consume(n),
p)}function h(n){
return null===n||G(n)?g(n):(e.enter('codeFencedFenceMeta'),e.enter('chunkString',{
contentType:'string'}),d(n))}function d(n){
return null===n||G(n)?(e.exit('chunkString'),
e.exit('codeFencedFenceMeta'),g(n)):96===n&&n===c?t(n):(e.consume(n),
d)}function g(t){
return e.exit('codeFencedFence'),r.interrupt?n(t):m(t)}function m(n){
return null===n?k(n):G(n)?e.attempt(i,e.attempt(o,k,u?oe(e,m,'linePrefix',u+1):m),k)(n):(e.enter('codeFlowValue'),
y(n))}function y(n){
return null===n||G(n)?(e.exit('codeFlowValue'),m(n)):(e.consume(n),y)}
function k(t){return e.exit('codeFenced'),n(t)}},concrete:!0}
const be={name:'codeIndented',tokenize:function(e,n,t){const r=this
return function(n){
return e.enter('codeIndented'),oe(e,o,'linePrefix',5)(n)}
function o(e){const n=r.events[r.events.length-1]
return n&&'linePrefix'===n[1].type&&n[2].sliceSerialize(n[1],!0).length>=4?i(e):t(e)
}function i(n){
return null===n?u(n):G(n)?e.attempt(ve,i,u)(n):(e.enter('codeFlowValue'),
l(n))}function l(n){
return null===n||G(n)?(e.exit('codeFlowValue'),i(n)):(e.consume(n),l)}
function u(t){return e.exit('codeIndented'),n(t)}}},ve={
tokenize:function(e,n,t){const r=this
return o
function o(n){
return r.parser.lazy[r.now().line]?t(n):G(n)?(e.enter('lineEnding'),
e.consume(n),e.exit('lineEnding'),o):oe(e,i,'linePrefix',5)(n)}
function i(e){const i=r.events[r.events.length-1]
return i&&'linePrefix'===i[1].type&&i[2].sliceSerialize(i[1],!0).length>=4?n(e):G(e)?o(e):t(e)
}},partial:!0}
const we={name:'codeText',tokenize:function(e,n,t){let r,o,i=0
return function(n){
return e.enter('codeText'),e.enter('codeTextSequence'),l(n)}
function l(n){
return 96===n?(e.consume(n),i++,l):(e.exit('codeTextSequence'),u(n))}
function u(n){
return null===n?t(n):96===n?(o=e.enter('codeTextSequence'),r=0,a(n)):32===n?(e.enter('space'),
e.consume(n),
e.exit('space'),u):G(n)?(e.enter('lineEnding'),e.consume(n),e.exit('lineEnding'),
u):(e.enter('codeTextData'),c(n))}function c(n){
return null===n||32===n||96===n||G(n)?(e.exit('codeTextData'),
u(n)):(e.consume(n),c)}function a(t){
return 96===t?(e.consume(t),r++,a):r===i?(e.exit('codeTextSequence'),
e.exit('codeText'),n(t)):(o.type='codeTextData',c(t))}},
resolve:function(e){let n,t,r=e.length-4,o=3
if(!('lineEnding'!==e[o][1].type&&'space'!==e[o][1].type||'lineEnding'!==e[r][1].type&&'space'!==e[r][1].type))for(n=o;++n<r;)if('codeTextData'===e[n][1].type){
e[o][1].type='codeTextPadding',
e[r][1].type='codeTextPadding',o+=2,r-=2
break}n=o-1,r++
for(;++n<=r;)void 0===t?n!==r&&'lineEnding'!==e[n][1].type&&(t=n):n!==r&&'lineEnding'!==e[n][1].type||(e[t][1].type='codeTextData',
n!==t+2&&(e[t][1].end=e[n-1][1].end,
e.splice(t+2,n-t-2),r-=n-t-2,n=t+2),t=void 0)
return e},previous:function(e){
return 96!==e||'characterEscape'===this.events[this.events.length-1][1].type
}}
function Ce(e){const n={}
let t,r,o,i,l,u,c,a=-1
for(;++a<e.length;){for(;a in n;)a=n[a]
if(t=e[a],a&&'chunkFlow'===t[1].type&&'listItemPrefix'===e[a-1][1].type&&(u=t[1]._tokenizer.events,
o=0,
o<u.length&&'lineEndingBlank'===u[o][1].type&&(o+=2),o<u.length&&'content'===u[o][1].type))for(;++o<u.length&&'content'!==u[o][1].type;)'chunkText'===u[o][1].type&&(u[o][1]._isInFirstContentOfListItem=!0,
o++)
if('enter'===t[0])t[1].contentType&&(Object.assign(n,Se(e,a)),a=n[a],c=!0)
else if(t[1]._container){
for(o=a,r=void 0;o--&&(i=e[o],'lineEnding'===i[1].type||'lineEndingBlank'===i[1].type);)'enter'===i[0]&&(r&&(e[r][1].type='lineEndingBlank'),
i[1].type='lineEnding',r=o)
r&&(t[1].end=Object.assign({},e[r][1].start),l=e.slice(r,a),l.unshift(t),j(e,r,a-r+1,l))
}}return!c}function Se(e,n){const t=e[n][1],r=e[n][2]
let o=n-1
const i=[],l=t._tokenizer||r.parser[t.contentType](t.start),u=l.events,c=[],a={}
let s,f,p=-1,h=t,d=0,g=0
const m=[g]
for(;h;){for(;e[++o][1]!==h;);
i.push(o),h._tokenizer||(s=r.sliceStream(h),h.next||s.push(null),
f&&l.defineSkip(h.start),
h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),
l.write(s),
h._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),
f=h,h=h.next}
for(h=t;++p<u.length;)'exit'===u[p][0]&&'enter'===u[p-1][0]&&u[p][1].type===u[p-1][1].type&&u[p][1].start.line!==u[p][1].end.line&&(g=p+1,
m.push(g),h._tokenizer=void 0,h.previous=void 0,h=h.next)
for(l.events=[],h?(h._tokenizer=void 0,h.previous=void 0):m.pop(),p=m.length;p--;){
const n=u.slice(m[p],m[p+1]),t=i.pop()
c.unshift([t,t+n.length-1]),j(e,t,2,n)}
for(p=-1;++p<c.length;)a[d+c[p][0]]=d+c[p][1],d+=c[p][1]-c[p][0]-1
return a}const Ae={tokenize:function(e,n){let t
return function(n){
return e.enter('content'),t=e.enter('chunkContent',{
contentType:'content'}),r(n)}
function r(n){
return null===n?o(n):G(n)?e.check(Fe,i,o)(n):(e.consume(n),r)}
function o(t){return e.exit('chunkContent'),e.exit('content'),n(t)}
function i(n){
return e.consume(n),e.exit('chunkContent'),t.next=e.enter('chunkContent',{
contentType:'content',previous:t}),t=t.next,r}},resolve:function(e){
return Ce(e),e}},Fe={tokenize:function(e,n,t){const r=this
return function(n){
return e.exit('chunkContent'),e.enter('lineEnding'),e.consume(n),
e.exit('lineEnding'),oe(e,o,'linePrefix')}
function o(o){if(null===o||G(o))return t(o)
const i=r.events[r.events.length-1]
return!r.parser.constructs.disable.null.includes('codeIndented')&&i&&'linePrefix'===i[1].type&&i[2].sliceSerialize(i[1],!0).length>=4?n(o):e.interrupt(r.parser.constructs.flow,t,n)(o)
}},partial:!0}
function Ee(e,n,t,r,o,i,l,u,c){const a=c||Number.POSITIVE_INFINITY
let s=0
return function(n){
if(60===n)return e.enter(r),e.enter(o),e.enter(i),e.consume(n),
e.exit(i),f
if(null===n||41===n||Z(n))return t(n)
return e.enter(r),e.enter(l),e.enter(u),e.enter('chunkString',{
contentType:'string'}),d(n)}
function f(t){
return 62===t?(e.enter(i),e.consume(t),e.exit(i),e.exit(o),e.exit(r),
n):(e.enter(u),e.enter('chunkString',{contentType:'string'}),p(t))}
function p(n){
return 62===n?(e.exit('chunkString'),e.exit(u),f(n)):null===n||60===n||G(n)?t(n):(e.consume(n),
92===n?h:p)}function h(n){
return 60===n||62===n||92===n?(e.consume(n),p):p(n)}function d(o){
return 40===o?++s>a?t(o):(e.consume(o),
d):41===o?s--?(e.consume(o),d):(e.exit('chunkString'),
e.exit(u),e.exit(l),e.exit(r),
n(o)):null===o||J(o)?s?t(o):(e.exit('chunkString'),
e.exit(u),e.exit(l),e.exit(r),
n(o)):Z(o)?t(o):(e.consume(o),92===o?g:d)}function g(n){
return 40===n||41===n||92===n?(e.consume(n),d):d(n)}}
function De(e,n,t,r,o,i){const l=this
let u,c=0
return function(n){
return e.enter(r),e.enter(o),e.consume(n),e.exit(o),e.enter(i),a}
function a(f){
return null===f||91===f||93===f&&!u||94===f&&!c&&'_hiddenFootnoteSupport'in l.parser.constructs||c>999?t(f):93===f?(e.exit(i),
e.enter(o),
e.consume(f),e.exit(o),e.exit(r),n):G(f)?(e.enter('lineEnding'),e.consume(f),
e.exit('lineEnding'),a):(e.enter('chunkString',{contentType:'string'
}),s(f))}function s(n){
return null===n||91===n||93===n||G(n)||c++>999?(e.exit('chunkString'),
a(n)):(e.consume(n),u=u||!ee(n),92===n?f:s)}function f(n){
return 91===n||92===n||93===n?(e.consume(n),c++,s):s(n)}}
function Le(e,n,t,r,o,i){let l
return function(n){
return e.enter(r),e.enter(o),e.consume(n),e.exit(o),l=40===n?41:n,u}
function u(t){
return t===l?(e.enter(o),e.consume(t),e.exit(o),e.exit(r),n):(e.enter(i),
c(t))}function c(n){
return n===l?(e.exit(i),u(l)):null===n?t(n):G(n)?(e.enter('lineEnding'),
e.consume(n),
e.exit('lineEnding'),oe(e,c,'linePrefix')):(e.enter('chunkString',{
contentType:'string'}),a(n))}function a(n){
return n===l||null===n||G(n)?(e.exit('chunkString'),
c(n)):(e.consume(n),92===n?s:a)}function s(n){
return n===l||92===n?(e.consume(n),a):a(n)}}function Te(e,n){let t
return function r(o){
if(G(o))return e.enter('lineEnding'),e.consume(o),e.exit('lineEnding'),
t=!0,r
if(ee(o))return oe(e,r,t?'linePrefix':'lineSuffix')(o)
return n(o)}}function Ie(e){
return e.replace(/[\t\n\r ]+/g,' ').replace(/^ | $/g,'').toLowerCase().toUpperCase()
}const Oe={name:'definition',tokenize:function(e,n,t){const r=this
let o
return function(n){
return e.enter('definition'),De.call(r,e,i,t,'definitionLabel','definitionLabelMarker','definitionLabelString')(n)
}
function i(n){
return o=Ie(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),
58===n?(e.enter('definitionMarker'),
e.consume(n),e.exit('definitionMarker'),Te(e,Ee(e,e.attempt(Pe,oe(e,l,'whitespace'),oe(e,l,'whitespace')),t,'definitionDestination','definitionDestinationLiteral','definitionDestinationLiteralMarker','definitionDestinationRaw','definitionDestinationString'))):t(n)
}function l(i){
return null===i||G(i)?(e.exit('definition'),r.parser.defined.includes(o)||r.parser.defined.push(o),
n(i)):t(i)}}},Pe={tokenize:function(e,n,t){return function(n){
return J(n)?Te(e,r)(n):t(n)}
function r(n){
return 34===n||39===n||40===n?Le(e,oe(e,o,'whitespace'),t,'definitionTitle','definitionTitleMarker','definitionTitleString')(n):t(n)
}function o(e){return null===e||G(e)?n(e):t(e)}},partial:!0}
const ze={name:'hardBreakEscape',tokenize:function(e,n,t){
return function(n){
return e.enter('hardBreakEscape'),e.enter('escapeMarker'),e.consume(n),
r}
function r(r){
return G(r)?(e.exit('escapeMarker'),e.exit('hardBreakEscape'),n(r)):t(r)
}}}
const Me={name:'headingAtx',tokenize:function(e,n,t){const r=this
let o=0
return function(n){
return e.enter('atxHeading'),e.enter('atxHeadingSequence'),i(n)}
function i(u){
return 35===u&&o++<6?(e.consume(u),i):null===u||J(u)?(e.exit('atxHeadingSequence'),
r.interrupt?n(u):l(u)):t(u)}function l(t){
return 35===t?(e.enter('atxHeadingSequence'),
u(t)):null===t||G(t)?(e.exit('atxHeading'),
n(t)):ee(t)?oe(e,l,'whitespace')(t):(e.enter('atxHeadingText'),c(t))}
function u(n){
return 35===n?(e.consume(n),u):(e.exit('atxHeadingSequence'),l(n))}
function c(n){
return null===n||35===n||J(n)?(e.exit('atxHeadingText'),l(n)):(e.consume(n),
c)}},resolve:function(e,n){let t,r,o=e.length-2,i=3
'whitespace'===e[i][1].type&&(i+=2)
o-2>i&&'whitespace'===e[o][1].type&&(o-=2)
'atxHeadingSequence'===e[o][1].type&&(i===o-1||o-4>i&&'whitespace'===e[o-2][1].type)&&(o-=i+1===o?2:4)
o>i&&(t={type:'atxHeadingText',start:e[i][1].start,end:e[o][1].end
},r={type:'chunkText',start:e[i][1].start,end:e[o][1].end,
contentType:'text'
},j(e,i,o-i+1,[['enter',t,n],['enter',r,n],['exit',r,n],['exit',t,n]]))
return e}}
const Re=['address','article','aside','base','basefont','blockquote','body','caption','center','col','colgroup','dd','details','dialog','dir','div','dl','dt','fieldset','figcaption','figure','footer','form','frame','frameset','h1','h2','h3','h4','h5','h6','head','header','hr','html','iframe','legend','li','link','main','menu','menuitem','nav','noframes','ol','optgroup','option','p','param','section','summary','table','tbody','td','tfoot','th','thead','title','tr','track','ul'],Be=['pre','script','style','textarea'],_e={
name:'htmlFlow',tokenize:function(e,n,t){const r=this
let o,i,l,u,c
return function(n){
return e.enter('htmlFlow'),e.enter('htmlFlowData'),e.consume(n),a}
function a(u){
return 33===u?(e.consume(u),s):47===u?(e.consume(u),h):63===u?(e.consume(u),
o=3,
r.interrupt?n:z):W(u)?(e.consume(u),l=String.fromCharCode(u),i=!0,d):t(u)
}function s(i){
return 45===i?(e.consume(i),o=2,f):91===i?(e.consume(i),o=5,l='CDATA[',
u=0,p):W(i)?(e.consume(i),o=4,r.interrupt?n:z):t(i)}function f(o){
return 45===o?(e.consume(o),r.interrupt?n:z):t(o)}function p(o){
return o===l.charCodeAt(u++)?(e.consume(o),
u===l.length?r.interrupt?n:F:p):t(o)}function h(n){
return W(n)?(e.consume(n),l=String.fromCharCode(n),d):t(n)}
function d(u){
return null===u||47===u||62===u||J(u)?47!==u&&i&&Be.includes(l.toLowerCase())?(o=1,
r.interrupt?n(u):F(u)):Re.includes(l.toLowerCase())?(o=6,
47===u?(e.consume(u),g):r.interrupt?n(u):F(u)):(o=7,
r.interrupt&&!r.parser.lazy[r.now().line]?t(u):i?y(u):m(u)):45===u||X(u)?(e.consume(u),
l+=String.fromCharCode(u),d):t(u)}function g(o){
return 62===o?(e.consume(o),r.interrupt?n:F):t(o)}function m(n){
return ee(n)?(e.consume(n),m):S(n)}function y(n){
return 47===n?(e.consume(n),S):58===n||95===n||W(n)?(e.consume(n),
k):ee(n)?(e.consume(n),y):S(n)}function k(n){
return 45===n||46===n||58===n||95===n||X(n)?(e.consume(n),k):x(n)}
function x(n){
return 61===n?(e.consume(n),b):ee(n)?(e.consume(n),x):y(n)}
function b(n){
return null===n||60===n||61===n||62===n||96===n?t(n):34===n||39===n?(e.consume(n),
c=n,v):ee(n)?(e.consume(n),b):(c=null,w(n))}function v(n){
return null===n||G(n)?t(n):n===c?(e.consume(n),C):(e.consume(n),v)}
function w(n){
return null===n||34===n||39===n||60===n||61===n||62===n||96===n||J(n)?x(n):(e.consume(n),
w)}function C(e){return 47===e||62===e||ee(e)?y(e):t(e)}function S(n){
return 62===n?(e.consume(n),A):t(n)}function A(n){
return ee(n)?(e.consume(n),A):null===n||G(n)?F(n):t(n)}function F(n){
return 45===n&&2===o?(e.consume(n),
T):60===n&&1===o?(e.consume(n),I):62===n&&4===o?(e.consume(n),
M):63===n&&3===o?(e.consume(n),
z):93===n&&5===o?(e.consume(n),P):!G(n)||6!==o&&7!==o?null===n||G(n)?E(n):(e.consume(n),
F):e.check(je,M,E)(n)}function E(n){return e.exit('htmlFlowData'),D(n)
}function D(n){return null===n?R(n):G(n)?e.attempt({tokenize:L,
partial:!0},D,R)(n):(e.enter('htmlFlowData'),F(n))}function L(e,n,t){
return function(n){
return e.enter('lineEnding'),e.consume(n),e.exit('lineEnding'),o}
function o(e){return r.parser.lazy[r.now().line]?t(e):n(e)}}
function T(n){return 45===n?(e.consume(n),z):F(n)}function I(n){
return 47===n?(e.consume(n),l='',O):F(n)}function O(n){
return 62===n&&Be.includes(l.toLowerCase())?(e.consume(n),
M):W(n)&&l.length<8?(e.consume(n),l+=String.fromCharCode(n),O):F(n)}
function P(n){return 93===n?(e.consume(n),z):F(n)}function z(n){
return 62===n?(e.consume(n),M):45===n&&2===o?(e.consume(n),z):F(n)}
function M(n){
return null===n||G(n)?(e.exit('htmlFlowData'),R(n)):(e.consume(n),M)}
function R(t){return e.exit('htmlFlow'),n(t)}},resolveTo:function(e){
let n=e.length
for(;n--&&('enter'!==e[n][0]||'htmlFlow'!==e[n][1].type););
n>1&&'linePrefix'===e[n-2][1].type&&(e[n][1].start=e[n-2][1].start,
e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2))
return e},concrete:!0},je={tokenize:function(e,n,t){
return function(r){
return e.exit('htmlFlowData'),e.enter('lineEndingBlank'),e.consume(r),
e.exit('lineEndingBlank'),e.attempt(he,n,t)}},partial:!0}
const Ne={name:'htmlText',tokenize:function(e,n,t){const r=this
let o,i,l,u
return function(n){
return e.enter('htmlText'),e.enter('htmlTextData'),e.consume(n),c}
function c(n){
return 33===n?(e.consume(n),a):47===n?(e.consume(n),w):63===n?(e.consume(n),
b):W(n)?(e.consume(n),A):t(n)}function a(n){
return 45===n?(e.consume(n),s):91===n?(e.consume(n),
i='CDATA[',l=0,g):W(n)?(e.consume(n),x):t(n)}function s(n){
return 45===n?(e.consume(n),f):t(n)}function f(n){
return null===n||62===n?t(n):45===n?(e.consume(n),p):h(n)}
function p(e){return null===e||62===e?t(e):h(e)}function h(n){
return null===n?t(n):45===n?(e.consume(n),
d):G(n)?(u=h,P(n)):(e.consume(n),h)}function d(n){
return 45===n?(e.consume(n),M):h(n)}function g(n){
return n===i.charCodeAt(l++)?(e.consume(n),l===i.length?m:g):t(n)}
function m(n){
return null===n?t(n):93===n?(e.consume(n),y):G(n)?(u=m,P(n)):(e.consume(n),
m)}function y(n){return 93===n?(e.consume(n),k):m(n)}function k(n){
return 62===n?M(n):93===n?(e.consume(n),k):m(n)}function x(n){
return null===n||62===n?M(n):G(n)?(u=x,P(n)):(e.consume(n),x)}
function b(n){
return null===n?t(n):63===n?(e.consume(n),v):G(n)?(u=b,P(n)):(e.consume(n),
b)}function v(e){return 62===e?M(e):b(e)}function w(n){
return W(n)?(e.consume(n),C):t(n)}function C(n){
return 45===n||X(n)?(e.consume(n),C):S(n)}function S(n){
return G(n)?(u=S,P(n)):ee(n)?(e.consume(n),S):M(n)}function A(n){
return 45===n||X(n)?(e.consume(n),A):47===n||62===n||J(n)?F(n):t(n)}
function F(n){
return 47===n?(e.consume(n),M):58===n||95===n||W(n)?(e.consume(n),
E):G(n)?(u=F,P(n)):ee(n)?(e.consume(n),F):M(n)}function E(n){
return 45===n||46===n||58===n||95===n||X(n)?(e.consume(n),E):D(n)}
function D(n){
return 61===n?(e.consume(n),L):G(n)?(u=D,P(n)):ee(n)?(e.consume(n),
D):F(n)}function L(n){
return null===n||60===n||61===n||62===n||96===n?t(n):34===n||39===n?(e.consume(n),
o=n,
T):G(n)?(u=L,P(n)):ee(n)?(e.consume(n),L):(e.consume(n),o=void 0,O)}
function T(n){
return n===o?(e.consume(n),I):null===n?t(n):G(n)?(u=T,P(n)):(e.consume(n),
T)}function I(e){return 62===e||47===e||J(e)?F(e):t(e)}function O(n){
return null===n||34===n||39===n||60===n||61===n||96===n?t(n):62===n||J(n)?F(n):(e.consume(n),
O)}function P(n){
return e.exit('htmlTextData'),e.enter('lineEnding'),e.consume(n),
e.exit('lineEnding'),
oe(e,z,'linePrefix',r.parser.constructs.disable.null.includes('codeIndented')?void 0:4)
}function z(n){return e.enter('htmlTextData'),u(n)}function M(r){
return 62===r?(e.consume(r),
e.exit('htmlTextData'),e.exit('htmlText'),n):t(r)}}}
const He={name:'labelEnd',tokenize:function(e,n,t){const r=this
let o,i,l=r.events.length
for(;l--;)if(('labelImage'===r.events[l][1].type||'labelLink'===r.events[l][1].type)&&!r.events[l][1]._balanced){
o=r.events[l][1]
break}return function(n){if(!o)return t(n)
return o._inactive?c(n):(i=r.parser.defined.includes(Ie(r.sliceSerialize({
start:o.end,end:r.now()
}))),e.enter('labelEnd'),e.enter('labelMarker'),e.consume(n),
e.exit('labelMarker'),e.exit('labelEnd'),u)}
function u(t){
return 40===t?e.attempt(Ue,n,i?n:c)(t):91===t?e.attempt(Ve,n,i?e.attempt(qe,n,c):c)(t):i?n(t):c(t)
}function c(e){return o._balanced=!0,t(e)}},resolveTo:function(e,n){
let t,r,o,i,l=e.length,u=0
for(;l--;)if(t=e[l][1],r){
if('link'===t.type||'labelLink'===t.type&&t._inactive)break
'enter'===e[l][0]&&'labelLink'===t.type&&(t._inactive=!0)}else if(o){
if('enter'===e[l][0]&&('labelImage'===t.type||'labelLink'===t.type)&&!t._balanced&&(r=l,
'labelLink'!==t.type)){u=2
break}}else'labelEnd'===t.type&&(o=l)
const c={type:'labelLink'===e[r][1].type?'link':'image',
start:Object.assign({},e[r][1].start),
end:Object.assign({},e[e.length-1][1].end)},a={type:'label',
start:Object.assign({},e[r][1].start),
end:Object.assign({},e[o][1].end)},s={type:'labelText',
start:Object.assign({},e[r+u+2][1].end),
end:Object.assign({},e[o-2][1].start)}
return i=[['enter',c,n],['enter',a,n]],i=N(i,e.slice(r+1,r+u+3)),i=N(i,[['enter',s,n]]),
i=N(i,ae(n.parser.constructs.insideSpan.null,e.slice(r+u+4,o-3),n)),
i=N(i,[['exit',s,n],e[o-2],e[o-1],['exit',a,n]]),
i=N(i,e.slice(o+1)),i=N(i,[['exit',c,n]]),j(e,r,e.length,i),e},
resolveAll:function(e){let n,t=-1
for(;++t<e.length;)n=e[t][1],'labelImage'!==n.type&&'labelLink'!==n.type&&'labelEnd'!==n.type||(e.splice(t+1,'labelImage'===n.type?4:2),
n.type='data',t++)
return e}},Ue={tokenize:function(e,n,t){return function(n){
return e.enter('resource'),
e.enter('resourceMarker'),e.consume(n),e.exit('resourceMarker'),
Te(e,r)}
function r(n){
return 41===n?l(n):Ee(e,o,t,'resourceDestination','resourceDestinationLiteral','resourceDestinationLiteralMarker','resourceDestinationRaw','resourceDestinationString',32)(n)
}function o(n){return J(n)?Te(e,i)(n):l(n)}function i(n){
return 34===n||39===n||40===n?Le(e,Te(e,l),t,'resourceTitle','resourceTitleMarker','resourceTitleString')(n):l(n)
}function l(r){
return 41===r?(e.enter('resourceMarker'),e.consume(r),e.exit('resourceMarker'),
e.exit('resource'),n):t(r)}}},Ve={tokenize:function(e,n,t){
const r=this
return function(n){
return De.call(r,e,o,t,'reference','referenceMarker','referenceString')(n)
}
function o(e){
return r.parser.defined.includes(Ie(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(e):t(e)
}}},qe={tokenize:function(e,n,t){return function(n){
return e.enter('reference'),
e.enter('referenceMarker'),e.consume(n),e.exit('referenceMarker'),r}
function r(r){
return 93===r?(e.enter('referenceMarker'),e.consume(r),e.exit('referenceMarker'),
e.exit('reference'),n):t(r)}}}
const We={name:'labelStartImage',tokenize:function(e,n,t){const r=this
return function(n){
return e.enter('labelImage'),e.enter('labelImageMarker'),e.consume(n),
e.exit('labelImageMarker'),o}
function o(n){
return 91===n?(e.enter('labelMarker'),e.consume(n),e.exit('labelMarker'),
e.exit('labelImage'),i):t(n)}function i(e){
return 94===e&&'_hiddenFootnoteSupport'in r.parser.constructs?t(e):n(e)
}},resolveAll:He.resolveAll}
const $e={name:'labelStartLink',tokenize:function(e,n,t){const r=this
return function(n){
return e.enter('labelLink'),e.enter('labelMarker'),e.consume(n),
e.exit('labelMarker'),e.exit('labelLink'),o}
function o(e){
return 94===e&&'_hiddenFootnoteSupport'in r.parser.constructs?t(e):n(e)
}},resolveAll:He.resolveAll}
const Qe={name:'lineEnding',tokenize:function(e,n){return function(t){
return e.enter('lineEnding'),
e.consume(t),e.exit('lineEnding'),oe(e,n,'linePrefix')}}}
const Xe={name:'thematicBreak',tokenize:function(e,n,t){let r,o=0
return function(n){return e.enter('thematicBreak'),r=n,i(n)}
function i(u){
return u===r?(e.enter('thematicBreakSequence'),l(u)):ee(u)?oe(e,i,'whitespace')(u):o<3||null!==u&&!G(u)?t(u):(e.exit('thematicBreak'),
n(u))}function l(n){
return n===r?(e.consume(n),o++,l):(e.exit('thematicBreakSequence'),
i(n))}}}
const Ye={name:'list',tokenize:function(e,n,t){
const r=this,o=r.events[r.events.length-1]
let i=o&&'linePrefix'===o[1].type?o[2].sliceSerialize(o[1],!0).length:0,l=0
return function(n){
const o=r.containerState.type||(42===n||43===n||45===n?'listUnordered':'listOrdered')
if('listUnordered'===o?!r.containerState.marker||n===r.containerState.marker:$(n)){
if(r.containerState.type||(r.containerState.type=o,e.enter(o,{
_container:!0
})),'listUnordered'===o)return e.enter('listItemPrefix'),42===n||45===n?e.check(Xe,t,c)(n):c(n)
if(!r.interrupt||49===n)return e.enter('listItemPrefix'),e.enter('listItemValue'),
u(n)}return t(n)}
function u(n){
return $(n)&&++l<10?(e.consume(n),u):(!r.interrupt||l<2)&&(r.containerState.marker?n===r.containerState.marker:41===n||46===n)?(e.exit('listItemValue'),
c(n)):t(n)}function c(n){
return e.enter('listItemMarker'),e.consume(n),e.exit('listItemMarker'),
r.containerState.marker=r.containerState.marker||n,
e.check(he,r.interrupt?t:a,e.attempt(Ke,f,s))}function a(e){
return r.containerState.initialBlankLine=!0,i++,f(e)}function s(n){
return ee(n)?(e.enter('listItemPrefixWhitespace'),
e.consume(n),e.exit('listItemPrefixWhitespace'),f):t(n)}function f(t){
return r.containerState.size=i+r.sliceSerialize(e.exit('listItemPrefix'),!0).length,
n(t)}},continuation:{tokenize:function(e,n,t){const r=this
return r.containerState._closeFlow=void 0,e.check(he,o,i)
function o(t){
return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,
oe(e,n,'listItemIndent',r.containerState.size+1)(t)}function i(t){
return r.containerState.furtherBlankLines||!ee(t)?(r.containerState.furtherBlankLines=void 0,
r.containerState.initialBlankLine=void 0,
l(t)):(r.containerState.furtherBlankLines=void 0,
r.containerState.initialBlankLine=void 0,e.attempt(Ze,n,l)(t))}
function l(o){
return r.containerState._closeFlow=!0,r.interrupt=void 0,oe(e,e.attempt(Ye,n,t),'linePrefix',r.parser.constructs.disable.null.includes('codeIndented')?void 0:4)(o)
}}},exit:function(e){e.exit(this.containerState.type)}},Ke={
tokenize:function(e,n,t){const r=this
return oe(e,(function(e){const o=r.events[r.events.length-1]
return!ee(e)&&o&&'listItemPrefixWhitespace'===o[1].type?n(e):t(e)
}),'listItemPrefixWhitespace',r.parser.constructs.disable.null.includes('codeIndented')?void 0:5)
},partial:!0},Ze={tokenize:function(e,n,t){const r=this
return oe(e,(function(e){const o=r.events[r.events.length-1]
return o&&'listItemIndent'===o[1].type&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?n(e):t(e)
}),'listItemIndent',r.containerState.size+1)},partial:!0}
const Je={name:'setextUnderline',tokenize:function(e,n,t){const r=this
let o,i,l=r.events.length
for(;l--;)if('lineEnding'!==r.events[l][1].type&&'linePrefix'!==r.events[l][1].type&&'content'!==r.events[l][1].type){
i='paragraph'===r.events[l][1].type
break}return function(n){
if(!r.parser.lazy[r.now().line]&&(r.interrupt||i))return e.enter('setextHeadingLine'),
e.enter('setextHeadingLineSequence'),o=n,u(n)
return t(n)}
function u(n){
return n===o?(e.consume(n),u):(e.exit('setextHeadingLineSequence'),
oe(e,c,'lineSuffix')(n))}function c(r){
return null===r||G(r)?(e.exit('setextHeadingLine'),n(r)):t(r)}},
resolveTo:function(e,n){let t,r,o,i=e.length
for(;i--;)if('enter'===e[i][0]){if('content'===e[i][1].type){t=i
break}'paragraph'===e[i][1].type&&(r=i)
}else'content'===e[i][1].type&&e.splice(i,1),
o||'definition'!==e[i][1].type||(o=i)
const l={type:'setextHeading',start:Object.assign({},e[r][1].start),
end:Object.assign({},e[e.length-1][1].end)}
e[r][1].type='setextHeadingText',o?(e.splice(r,0,['enter',l,n]),e.splice(o+1,0,['exit',e[t][1],n]),
e[t][1].end=Object.assign({},e[o][1].end)):e[t][1]=l
return e.push(['exit',l,n]),e}}
const Ge={tokenize:function(e){
const n=this,t=e.attempt(he,(function(r){
if(null===r)return void e.consume(r)
return e.enter('lineEndingBlank'),e.consume(r),e.exit('lineEndingBlank'),n.currentConstruct=void 0,
t
}),e.attempt(this.parser.constructs.flowInitial,r,oe(e,e.attempt(this.parser.constructs.flow,r,e.attempt(Ae,r)),'linePrefix')))
return t
function r(r){
if(null!==r)return e.enter('lineEnding'),e.consume(r),e.exit('lineEnding'),
n.currentConstruct=void 0,t
e.consume(r)}}}
const en={resolveAll:on()},nn=rn('string'),tn=rn('text')
function rn(e){return{tokenize:function(n){
const t=this,r=this.parser.constructs[e],o=n.attempt(r,i,l)
return i
function i(e){return c(e)?o(e):l(e)}function l(e){
if(null!==e)return n.enter('data'),n.consume(e),u
n.consume(e)}function u(e){
return c(e)?(n.exit('data'),o(e)):(n.consume(e),u)}function c(e){
if(null===e)return!0
const n=r[e]
let o=-1
if(n)for(;++o<n.length;){const e=n[o]
if(!e.previous||e.previous.call(t,t.previous))return!0}return!1}},
resolveAll:on('text'===e?ln:void 0)}}function on(e){
return function(n,t){let r,o=-1
for(;++o<=n.length;)void 0===r?n[o]&&'data'===n[o][1].type&&(r=o,o++):n[o]&&'data'===n[o][1].type||(o!==r+2&&(n[r][1].end=n[o-1][1].end,
n.splice(r+2,o-r-2),o=r+2),r=void 0)
return e?e(n,t):n}}function ln(e,n){let t=0
for(;++t<=e.length;)if((t===e.length||'lineEnding'===e[t][1].type)&&'data'===e[t-1][1].type){
const r=e[t-1][1],o=n.sliceStream(r)
let i,l=o.length,u=-1,c=0
for(;l--;){const e=o[l]
if('string'==typeof e){for(u=e.length;32===e.charCodeAt(u-1);)c++,u--
if(u)break
u=-1}else if(-2===e)i=!0,c++
else if(-1!==e){l++
break}}if(c){const o={
type:t===e.length||i||c<2?'lineSuffix':'hardBreakTrailing',start:{
line:r.end.line,column:r.end.column-c,offset:r.end.offset-c,
_index:r.start._index+l,_bufferIndex:l?u:r.start._bufferIndex+u},
end:Object.assign({},r.end)}
r.end=Object.assign({},o.start),r.start.offset===r.end.offset?Object.assign(r,o):(e.splice(t,0,['enter',o,n],['exit',o,n]),
t+=2)}t++}return e}function un(e,n,t){
let r=Object.assign(t?Object.assign({},t):{line:1,column:1,offset:0},{
_index:0,_bufferIndex:-1})
const o={},i=[]
let l=[],u=[]
const c={consume:function(e){
G(e)?(r.line++,r.column=1,r.offset+=-3===e?2:1,k()):-1!==e&&(r.column++,
r.offset++)
r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,
r._index++))
a.previous=e},enter:function(e,n){const t=n||{}
return t.type=e,t.start=p(),a.events.push(['enter',t,a]),u.push(t),t},
exit:function(e){const n=u.pop()
return n.end=p(),a.events.push(['exit',n,a]),n},
attempt:m((function(e,n){y(e,n.from)})),check:m(g),interrupt:m(g,{
interrupt:!0})},a={previous:null,code:null,containerState:{},
events:[],parser:e,sliceStream:f,sliceSerialize:function(e,n){
return function(e,n){let t=-1
const r=[]
let o
for(;++t<e.length;){const i=e[t]
let l
if('string'==typeof i)l=i
else switch(i){case-5:l='\r'
break
case-4:l='\n'
break
case-3:l="\r\n"
break
case-2:l=n?' ':'\t'
break
case-1:if(!n&&o)continue
l=' '
break
default:l=String.fromCharCode(i)}o=-2===i,r.push(l)}return r.join('')
}(f(e),n)},now:p,defineSkip:function(e){o[e.line]=e.column,k()},
write:function(e){if(l=N(l,e),h(),null!==l[l.length-1])return[]
return y(n,0),a.events=ae(i,a.events,a),a.events}}
let s=n.tokenize.call(a,c)
return n.resolveAll&&i.push(n),a
function f(e){return function(e,n){
const t=n.start._index,r=n.start._bufferIndex,o=n.end._index,i=n.end._bufferIndex
let l
t===o?l=[e[t].slice(r,i)]:(l=e.slice(t,o),r>-1&&(l[0]=l[0].slice(r)),i>0&&l.push(e[o].slice(0,i)))
return l}(l,e)}function p(){return Object.assign({},r)}function h(){
let e
for(;r._index<l.length;){const n=l[r._index]
if('string'==typeof n)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<n.length;)d(n.charCodeAt(r._bufferIndex))
else d(n)}}function d(e){s=s(e)}function g(e,n){n.restore()}
function m(e,n){return function(t,o,i){let l,s,f,h
return Array.isArray(t)?d(t):'tokenize'in t?d([t]):function(e){
return n
function n(n){const t=null!==n&&e[n],r=null!==n&&e.null
return d([...Array.isArray(t)?t:t?[t]:[],...Array.isArray(r)?r:r?[r]:[]])(n)
}}(t)
function d(e){return l=e,s=0,0===e.length?i:g(e[s])}function g(e){
return function(t){h=function(){
const e=p(),n=a.previous,t=a.currentConstruct,o=a.events.length,i=Array.from(u)
return{restore:l,from:o}
function l(){
r=e,a.previous=n,a.currentConstruct=t,a.events.length=o,u=i,k()}
}(),f=e,e.partial||(a.currentConstruct=e)
if(e.name&&a.parser.constructs.disable.null.includes(e.name))return y()
return e.tokenize.call(n?Object.assign(Object.create(a),n):a,c,m,y)(t)
}}function m(n){return e(f,h),o}function y(e){
return h.restore(),++s<l.length?g(l[s]):i}}}function y(e,n){
e.resolveAll&&!i.includes(e)&&i.push(e),
e.resolve&&j(a.events,n,a.events.length-n,e.resolve(a.events.slice(n),a)),
e.resolveTo&&(a.events=e.resolveTo(a.events,a))}function k(){
r.line in o&&r.column<2&&(r.column=o[r.line],r.offset+=o[r.line]-1)}}
const cn={42:Ye,43:Ye,45:Ye,48:Ye,49:Ye,50:Ye,51:Ye,52:Ye,53:Ye,54:Ye,
55:Ye,56:Ye,57:Ye,62:de},an={91:Oe},sn={[-2]:be,[-1]:be,32:be},fn={
35:Me,42:Xe,45:[Je,Xe],60:_e,61:Je,95:Xe,96:xe,126:xe},pn={38:ke,92:ge
},hn={[-5]:Qe,[-4]:Qe,[-3]:Qe,33:We,38:ke,42:se,60:[pe,Ne],91:$e,
92:[ze,ge],93:He,95:se,96:we},dn={null:[se,en]}
var gn=Object.freeze({__proto__:null,document:cn,contentInitial:an,
flowInitial:sn,flow:fn,string:pn,text:hn,insideSpan:dn,
attentionMarkers:{null:[42,95]},disable:{null:[]}})
const mn=/[\0\t\n\r]/g
function yn(e,n){const t=Number.parseInt(e,n)
return t<9||11===t||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||65535==(65535&t)||65534==(65535&t)||t>1114111?'�':String.fromCharCode(t)
}
const kn=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi
function xn(e){return e.replace(kn,bn)}function bn(e,n,t){
if(n)return n
if(35===t.charCodeAt(0)){const e=t.charCodeAt(1),n=120===e||88===e
return yn(t.slice(n?2:1),n?16:10)}return ye(t)||e}
const vn={}.hasOwnProperty,wn=function(e,n,t){
return'string'!=typeof n&&(t=n,n=void 0),function(e={}){const n=Cn({
transforms:[],
canContainEols:['emphasis','fragment','heading','paragraph','strong'],
enter:{autolink:c(ie),autolinkProtocol:L,autolinkEmail:L,
atxHeading:c(ne),blockQuote:c(K),characterEscape:L,
characterReference:L,codeFenced:c(Z),codeFencedFenceInfo:a,
codeFencedFenceMeta:a,codeIndented:c(Z,a),codeText:c(J,a),
codeTextData:L,data:L,codeFlowValue:L,definition:c(G),
definitionDestinationString:a,definitionLabelString:a,
definitionTitleString:a,emphasis:c(ee),hardBreakEscape:c(te),
hardBreakTrailing:c(te),htmlFlow:c(re,a),htmlFlowData:L,
htmlText:c(re,a),htmlTextData:L,image:c(oe),label:a,link:c(ie),
listItem:c(ue),listItemValue:m,listOrdered:c(le,g),
listUnordered:c(le),paragraph:c(ce),reference:q,referenceString:a,
resourceDestinationString:a,resourceTitleString:a,setextHeading:c(ne),
strong:c(ae),thematicBreak:c(fe)},exit:{atxHeading:f(),
atxHeadingSequence:A,autolink:f(),autolinkEmail:Y,autolinkProtocol:X,
blockQuote:f(),characterEscapeValue:T,
characterReferenceMarkerHexadecimal:$,
characterReferenceMarkerNumeric:$,characterReferenceValue:Q,
codeFenced:f(b),codeFencedFence:x,codeFencedFenceInfo:y,
codeFencedFenceMeta:k,codeFlowValue:T,codeIndented:f(v),codeText:f(M),
codeTextData:T,data:T,definition:f(),definitionDestinationString:S,
definitionLabelString:w,definitionTitleString:C,emphasis:f(),
hardBreakEscape:f(O),hardBreakTrailing:f(O),htmlFlow:f(P),
htmlFlowData:T,htmlText:f(z),htmlTextData:T,image:f(_),label:N,
labelText:j,lineEnding:I,link:f(R),listItem:f(),listOrdered:f(),
listUnordered:f(),paragraph:f(),referenceString:W,
resourceDestinationString:H,resourceTitleString:U,resource:V,
setextHeading:f(D),setextHeadingLineSequence:E,setextHeadingText:F,
strong:f(),thematicBreak:f()}},e.mdastExtensions||[]),t={}
return r
function r(e){let t={type:'root',children:[]}
const r=[],c=[],f={stack:[t],tokenStack:r,config:n,enter:s,exit:p,
buffer:a,resume:d,setData:i,getData:l}
let h=-1
for(;++h<e.length;)if('listOrdered'===e[h][1].type||'listUnordered'===e[h][1].type)if('enter'===e[h][0])c.push(h)
else{h=o(e,c.pop(),h)}for(h=-1;++h<e.length;){const t=n[e[h][0]]
vn.call(t,e[h][1].type)&&t[e[h][1].type].call(Object.assign({
sliceSerialize:e[h][2].sliceSerialize},f),e[h][1])}if(r.length>0){
const e=r[r.length-1];(e[1]||An).call(f,void 0,e[0])}for(t.position={
start:u(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),
end:u(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})
},h=-1;++h<n.transforms.length;)t=n.transforms[h](t)||t
return t}function o(e,n,t){let r,o,i,l,u=n-1,c=-1,a=!1
for(;++u<=t;){const n=e[u]
if('listUnordered'===n[1].type||'listOrdered'===n[1].type||'blockQuote'===n[1].type?('enter'===n[0]?c++:c--,
l=void 0):'lineEndingBlank'===n[1].type?'enter'===n[0]&&(!r||l||c||i||(i=u),
l=void 0):'linePrefix'===n[1].type||'listItemValue'===n[1].type||'listItemMarker'===n[1].type||'listItemPrefix'===n[1].type||'listItemPrefixWhitespace'===n[1].type||(l=void 0),
!c&&'enter'===n[0]&&'listItemPrefix'===n[1].type||-1===c&&'exit'===n[0]&&('listUnordered'===n[1].type||'listOrdered'===n[1].type)){
if(r){let l=u
for(o=void 0;l--;){const n=e[l]
if('lineEnding'===n[1].type||'lineEndingBlank'===n[1].type){
if('exit'===n[0])continue
o&&(e[o][1].type='lineEndingBlank',a=!0),n[1].type='lineEnding',o=l
}else if('linePrefix'!==n[1].type&&'blockQuotePrefix'!==n[1].type&&'blockQuotePrefixWhitespace'!==n[1].type&&'blockQuoteMarker'!==n[1].type&&'listItemIndent'!==n[1].type)break
}
i&&(!o||i<o)&&(r._spread=!0),r.end=Object.assign({},o?e[o][1].start:n[1].end),e.splice(o||u,0,['exit',r,n[2]]),
u++,t++}'listItemPrefix'===n[1].type&&(r={type:'listItem',_spread:!1,
start:Object.assign({},n[1].start)
},e.splice(u,0,['enter',r,n[2]]),u++,t++,i=void 0,l=!0)}}
return e[n][1]._spread=a,t}function i(e,n){t[e]=n}function l(e){
return t[e]}function u(e){return{line:e.line,column:e.column,
offset:e.offset}}function c(e,n){return t
function t(t){s.call(this,e(t),t),n&&n.call(this,t)}}function a(){
this.stack.push({type:'fragment',children:[]})}function s(e,n,t){
return this.stack[this.stack.length-1].children.push(e),
this.stack.push(e),this.tokenStack.push([n,t]),e.position={
start:u(n.start)},e}function f(e){return n
function n(n){e&&e.call(this,n),p.call(this,n)}}function p(e,n){
const t=this.stack.pop(),r=this.tokenStack.pop()
if(!r)throw new Error('Cannot close `'+e.type+'` ('+h({start:e.start,
end:e.end})+'): it’s not open')
if(r[0].type!==e.type)if(n)n.call(this,e,r[0])
else{(r[1]||An).call(this,e,r[0])}return t.position.end=u(e.end),t}
function d(){return function(e,n){var{includeImageAlt:t=!0}=n||{}
return B(e,t)}(this.stack.pop())}function g(){
i('expectingFirstListItemValue',!0)}function m(e){
if(l('expectingFirstListItemValue')){
this.stack[this.stack.length-2].start=Number.parseInt(this.sliceSerialize(e),10),
i('expectingFirstListItemValue')}}function y(){const e=this.resume()
this.stack[this.stack.length-1].lang=e}function k(){
const e=this.resume()
this.stack[this.stack.length-1].meta=e}function x(){
l('flowCodeInside')||(this.buffer(),i('flowCodeInside',!0))}
function b(){const e=this.resume()
this.stack[this.stack.length-1].value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,''),i('flowCodeInside')
}function v(){const e=this.resume()
this.stack[this.stack.length-1].value=e.replace(/(\r?\n|\r)$/g,'')}
function w(e){const n=this.resume(),t=this.stack[this.stack.length-1]
t.label=n,t.identifier=Ie(this.sliceSerialize(e)).toLowerCase()}
function C(){const e=this.resume()
this.stack[this.stack.length-1].title=e}function S(){
const e=this.resume()
this.stack[this.stack.length-1].url=e}function A(e){
const n=this.stack[this.stack.length-1]
if(!n.depth){const t=this.sliceSerialize(e).length
n.depth=t}}function F(){i('setextHeadingSlurpLineEnding',!0)}
function E(e){
this.stack[this.stack.length-1].depth=61===this.sliceSerialize(e).charCodeAt(0)?1:2
}function D(){i('setextHeadingSlurpLineEnding')}function L(e){
const n=this.stack[this.stack.length-1]
let t=n.children[n.children.length-1]
t&&'text'===t.type||(t=se(),t.position={start:u(e.start)
},n.children.push(t)),this.stack.push(t)}function T(e){
const n=this.stack.pop()
n.value+=this.sliceSerialize(e),n.position.end=u(e.end)}function I(e){
const t=this.stack[this.stack.length-1]
if(l('atHardBreak')){
return t.children[t.children.length-1].position.end=u(e.end),
void i('atHardBreak')}
!l('setextHeadingSlurpLineEnding')&&n.canContainEols.includes(t.type)&&(L.call(this,e),
T.call(this,e))}function O(){i('atHardBreak',!0)}function P(){
const e=this.resume()
this.stack[this.stack.length-1].value=e}function z(){
const e=this.resume()
this.stack[this.stack.length-1].value=e}function M(){
const e=this.resume()
this.stack[this.stack.length-1].value=e}function R(){
const e=this.stack[this.stack.length-1]
l('inReference')?(e.type+='Reference',e.referenceType=l('referenceType')||'shortcut',
delete e.url,
delete e.title):(delete e.identifier,delete e.label),i('referenceType')
}function _(){const e=this.stack[this.stack.length-1]
l('inReference')?(e.type+='Reference',e.referenceType=l('referenceType')||'shortcut',
delete e.url,
delete e.title):(delete e.identifier,delete e.label),i('referenceType')
}function j(e){
const n=this.stack[this.stack.length-2],t=this.sliceSerialize(e)
n.label=xn(t),n.identifier=Ie(t).toLowerCase()}function N(){
const e=this.stack[this.stack.length-1],n=this.resume(),t=this.stack[this.stack.length-1]
i('inReference',!0),'link'===t.type?t.children=e.children:t.alt=n}
function H(){const e=this.resume()
this.stack[this.stack.length-1].url=e}function U(){
const e=this.resume()
this.stack[this.stack.length-1].title=e}function V(){i('inReference')}
function q(){i('referenceType','collapsed')}function W(e){
const n=this.resume(),t=this.stack[this.stack.length-1]
t.label=n,t.identifier=Ie(this.sliceSerialize(e)).toLowerCase(),i('referenceType','full')
}function $(e){i('characterReferenceType',e.type)}function Q(e){
const n=this.sliceSerialize(e),t=l('characterReferenceType')
let r
t?(r=yn(n,'characterReferenceMarkerNumeric'===t?10:16),i('characterReferenceType')):r=ye(n)
const o=this.stack.pop()
o.value+=r,o.position.end=u(e.end)}function X(e){T.call(this,e)
this.stack[this.stack.length-1].url=this.sliceSerialize(e)}
function Y(e){T.call(this,e)
this.stack[this.stack.length-1].url='mailto:'+this.sliceSerialize(e)}
function K(){return{type:'blockquote',children:[]}}function Z(){
return{type:'code',lang:null,meta:null,value:''}}function J(){return{
type:'inlineCode',value:''}}function G(){return{type:'definition',
identifier:'',label:null,title:null,url:''}}function ee(){return{
type:'emphasis',children:[]}}function ne(){return{type:'heading',
depth:void 0,children:[]}}function te(){return{type:'break'}}
function re(){return{type:'html',value:''}}function oe(){return{
type:'image',title:null,url:'',alt:null}}function ie(){return{
type:'link',title:null,url:'',children:[]}}function le(e){return{
type:'list',ordered:'listOrdered'===e.type,start:null,
spread:e._spread,children:[]}}function ue(e){return{type:'listItem',
spread:e._spread,checked:null,children:[]}}function ce(){return{
type:'paragraph',children:[]}}function ae(){return{type:'strong',
children:[]}}function se(){return{type:'text',value:''}}function fe(){
return{type:'thematicBreak'}}}(t)(function(e){for(;!Ce(e););return e
}(function(e={}){const n={defined:[],lazy:{},
constructs:U([gn].concat(e.extensions||[])),content:t(ie),
document:t(le),flow:t(Ge),string:t(nn),text:t(tn)}
return n
function t(e){return function(t){return un(n,e,t)}}
}(t).document().write(function(){let e,n=1,t='',r=!0
return function(o,i,l){const u=[]
let c,a,s,f,p
for(o=t+o.toString(i),s=0,t='',r&&(65279===o.charCodeAt(0)&&s++,r=void 0);s<o.length;){
if(mn.lastIndex=s,
c=mn.exec(o),f=c&&void 0!==c.index?c.index:o.length,p=o.charCodeAt(f),
!c){t=o.slice(s)
break}if(10===p&&s===f&&e)u.push(-3),e=void 0
else switch(e&&(u.push(-5),e=void 0),s<f&&(u.push(o.slice(s,f)),n+=f-s),p){
case 0:u.push(65533),n++
break
case 9:for(a=4*Math.ceil(n/4),u.push(-2);n++<a;)u.push(-1)
break
case 10:u.push(-4),n=1
break
default:e=!0,n=1}s=f+1}
return l&&(e&&u.push(-5),t&&u.push(t),u.push(null)),u}}()(e,n,!0))))}
function Cn(e,n){let t=-1
for(;++t<n.length;){const r=n[t]
Array.isArray(r)?Cn(e,r):Sn(e,r)}return e}function Sn(e,n){let t
for(t in n)if(vn.call(n,t)){
const r='canContainEols'===t||'transforms'===t,o=(vn.call(e,t)?e[t]:void 0)||(e[t]=r?[]:{}),i=n[t]
i&&(r?e[t]=[...o,...i]:Object.assign(o,i))}}function An(e,n){
throw e?new Error('Cannot close `'+e.type+'` ('+h({start:e.start,
end:e.end})+'): a different token (`'+n.type+'`, '+h({start:n.start,
end:n.end
})+') is open'):new Error('Cannot close document, a token (`'+n.type+'`, '+h({
start:n.start,end:n.end})+') is still open')}const Fn={
tokenize:function(e,n,t){return function(n){return e.consume(n),r}
function r(n){return 87===n||119===n?(e.consume(n),o):t(n)}
function o(n){return 87===n||119===n?(e.consume(n),i):t(n)}
function i(n){return 46===n?(e.consume(n),l):t(n)}function l(e){
return null===e||G(e)?t(e):n(e)}},partial:!0},En={
tokenize:function(e,n,t){let r,o
return i
function i(n){
return 38===n?e.check(Tn,u,l)(n):46===n||95===n?e.check(Ln,u,l)(n):null===n||Z(n)||ne(n)||45!==n&&te(n)?u(n):(e.consume(n),
i)}function l(n){
return 46===n?(o=r,r=void 0,e.consume(n),i):(95===n&&(r=!0),e.consume(n),
i)}function u(e){return o||r?t(e):n(e)}},partial:!0},Dn={
tokenize:function(e,n){let t=0
return r
function r(l){
return 38===l?e.check(Tn,n,o)(l):(40===l&&t++,41===l?e.check(Ln,i,o)(l):_n(l)?n(l):Bn(l)?e.check(Ln,n,o)(l):(e.consume(l),
r))}function o(n){return e.consume(n),r}function i(e){
return t--,t<0?n(e):o(e)}},partial:!0},Ln={tokenize:function(e,n,t){
return function(n){return e.consume(n),r}
function r(o){return Bn(o)?(e.consume(o),r):_n(o)?n(o):t(o)}},
partial:!0},Tn={tokenize:function(e,n,t){return function(n){
return e.consume(n),r}
function r(n){
return W(n)?(e.consume(n),r):59===n?(e.consume(n),o):t(n)}
function o(e){return _n(e)?n(e):t(e)}},partial:!0},In={
tokenize:function(e,n,t){const r=this
return function(n){
if(87!==n&&119!==n||!Nn(r.previous)||Vn(r.events))return t(n)
return e.enter('literalAutolink'),e.enter('literalAutolinkWww'),e.check(Fn,e.attempt(En,e.attempt(Dn,o),t),t)(n)
}
function o(t){
return e.exit('literalAutolinkWww'),e.exit('literalAutolink'),n(t)}},
previous:Nn},On={tokenize:function(e,n,t){const r=this
return function(n){
if(72!==n&&104!==n||!Hn(r.previous)||Vn(r.events))return t(n)
return e.enter('literalAutolink'),e.enter('literalAutolinkHttp'),e.consume(n),o
}
function o(n){return 84===n||116===n?(e.consume(n),i):t(n)}
function i(n){return 84===n||116===n?(e.consume(n),l):t(n)}
function l(n){return 80===n||112===n?(e.consume(n),u):t(n)}
function u(n){return 83===n||115===n?(e.consume(n),c):c(n)}
function c(n){return 58===n?(e.consume(n),a):t(n)}function a(n){
return 47===n?(e.consume(n),s):t(n)}function s(n){
return 47===n?(e.consume(n),f):t(n)}function f(n){
return null===n||Z(n)||ne(n)||te(n)?t(n):e.attempt(En,e.attempt(Dn,p),t)(n)
}function p(t){
return e.exit('literalAutolinkHttp'),e.exit('literalAutolink'),n(t)}},
previous:Hn},Pn={tokenize:function(e,n,t){const r=this
let o,i
return function(n){
if(!jn(n)||!Un(r.previous)||Vn(r.events))return t(n)
return e.enter('literalAutolink'),e.enter('literalAutolinkEmail'),l(n)
}
function l(n){
return jn(n)?(e.consume(n),l):64===n?(e.consume(n),u):t(n)}
function u(n){
return 46===n?e.check(Ln,f,c)(n):45===n||95===n?e.check(Ln,t,a)(n):X(n)?(!i&&$(n)&&(i=!0),
e.consume(n),u):f(n)}function c(n){return e.consume(n),o=!0,i=void 0,u
}function a(n){return e.consume(n),s}function s(n){
return 46===n?e.check(Ln,t,c)(n):u(n)}function f(r){
return o&&!i?(e.exit('literalAutolinkEmail'),
e.exit('literalAutolink'),n(r)):t(r)}},previous:Un},zn={},Mn={text:zn}
let Rn=48
for(;Rn<123;)zn[Rn]=Pn,Rn++,58===Rn?Rn=65:91===Rn&&(Rn=97)
function Bn(e){
return 33===e||34===e||39===e||41===e||42===e||44===e||46===e||58===e||59===e||60===e||63===e||95===e||126===e
}function _n(e){return null===e||60===e||J(e)}function jn(e){
return 43===e||45===e||46===e||95===e||X(e)}function Nn(e){
return null===e||40===e||42===e||95===e||126===e||J(e)}function Hn(e){
return null===e||!W(e)}function Un(e){return 47!==e&&Hn(e)}
function Vn(e){let n=e.length,t=!1
for(;n--;){const r=e[n][1]
if(('labelLink'===r.type||'labelImage'===r.type)&&!r._balanced){t=!0
break}if(r._gfmAutolinkLiteralWalkedInto){t=!1
break}}
return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),
t}function qn(e){const n=[]
let t=-1,r=0,o=0
for(;++t<e.length;){const i=e.charCodeAt(t)
let l=''
if(37===i&&X(e.charCodeAt(t+1))&&X(e.charCodeAt(t+2)))o=2
else if(i<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i))||(l=String.fromCharCode(i))
else if(i>55295&&i<57344){const n=e.charCodeAt(t+1)
i<56320&&n>56319&&n<57344?(l=String.fromCharCode(i,n),o=1):l='�'
}else l=String.fromCharCode(i)
l&&(n.push(e.slice(r,t),encodeURIComponent(l)),r=t+o+1,l=''),o&&(t+=o,o=0)
}return n.join('')+e.slice(r)}
zn[43]=Pn,zn[45]=Pn,zn[46]=Pn,zn[95]=Pn,zn[72]=[Pn,On],
zn[104]=[Pn,On],zn[87]=[Pn,In],zn[119]=[Pn,In]
const Wn={tokenize:function(e,n,t){const r=this
return oe(e,(function(e){const o=r.events[r.events.length-1]
return o&&'gfmFootnoteDefinitionIndent'===o[1].type&&4===o[2].sliceSerialize(o[1],!0).length?n(e):t(e)
}),'gfmFootnoteDefinitionIndent',5)},partial:!0}
function $n(e,n,t){const r=this
let o=r.events.length
const i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[])
let l
for(;o--;){const e=r.events[o][1]
if('labelImage'===e.type){l=e
break}
if('gfmFootnoteCall'===e.type||'labelLink'===e.type||'label'===e.type||'image'===e.type||'link'===e.type)break
}return function(o){if(!l||!l._balanced)return t(o)
const u=Ie(r.sliceSerialize({start:l.end,end:r.now()}))
if(94!==u.charCodeAt(0)||!i.includes(u.slice(1)))return t(o)
return e.enter('gfmFootnoteCallLabelMarker'),e.consume(o),e.exit('gfmFootnoteCallLabelMarker'),
n(o)}}function Qn(e,n){let t=e.length
for(;t--;)if('labelImage'===e[t][1].type&&'enter'===e[t][0]){e[t][1]
break}
e[t+1][1].type='data',e[t+3][1].type='gfmFootnoteCallLabelMarker'
const r={type:'gfmFootnoteCall',
start:Object.assign({},e[t+3][1].start),
end:Object.assign({},e[e.length-1][1].end)},o={
type:'gfmFootnoteCallMarker',start:Object.assign({},e[t+3][1].end),
end:Object.assign({},e[t+3][1].end)}
o.end.column++,o.end.offset++,o.end._bufferIndex++
const i={type:'gfmFootnoteCallString',start:Object.assign({},o.end),
end:Object.assign({},e[e.length-1][1].start)},l={type:'chunkString',
contentType:'string',start:Object.assign({},i.start),
end:Object.assign({},i.end)
},u=[e[t+1],e[t+2],['enter',r,n],e[t+3],e[t+4],['enter',o,n],['exit',o,n],['enter',i,n],['enter',l,n],['exit',l,n],['exit',i,n],e[e.length-2],e[e.length-1],['exit',r,n]]
return e.splice(t,e.length-t+1,...u),e}function Xn(e,n,t){
const r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[])
let i,l=0
return function(n){
return e.enter('gfmFootnoteCall'),e.enter('gfmFootnoteCallLabelMarker'),
e.consume(n),e.exit('gfmFootnoteCallLabelMarker'),u}
function u(n){
return 94!==n?t(n):(e.enter('gfmFootnoteCallMarker'),e.consume(n),
e.exit('gfmFootnoteCallMarker'),
e.enter('gfmFootnoteCallString'),e.enter('chunkString').contentType='string',
c)}function c(u){let s
return null===u||91===u||l++>999?t(u):93===u?i?(e.exit('chunkString'),s=e.exit('gfmFootnoteCallString'),
o.includes(Ie(r.sliceSerialize(s)))?function(t){
return e.enter('gfmFootnoteCallLabelMarker'),
e.consume(t),e.exit('gfmFootnoteCallLabelMarker'),
e.exit('gfmFootnoteCall'),n
}(u):t(u)):t(u):(e.consume(u),J(u)||(i=!0),92===u?a:c)}function a(n){
return 91===n||92===n||93===n?(e.consume(n),l++,c):c(n)}}
function Yn(e,n,t){
const r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[])
let i,l,u=0
return function(n){
return e.enter('gfmFootnoteDefinition')._container=!0,e.enter('gfmFootnoteDefinitionLabel'),
e.enter('gfmFootnoteDefinitionLabelMarker'),
e.consume(n),e.exit('gfmFootnoteDefinitionLabelMarker'),c}
function c(n){
return 94===n?(e.enter('gfmFootnoteDefinitionMarker'),e.consume(n),
e.exit('gfmFootnoteDefinitionMarker'),
e.enter('gfmFootnoteDefinitionLabelString'),a):t(n)}function a(n){
let o
return null===n||91===n||u>999?t(n):93===n?l?(o=e.exit('gfmFootnoteDefinitionLabelString'),
i=Ie(r.sliceSerialize(o)),
e.enter('gfmFootnoteDefinitionLabelMarker'),e.consume(n),
e.exit('gfmFootnoteDefinitionLabelMarker'),
e.exit('gfmFootnoteDefinitionLabel'),
p):t(n):G(n)?(e.enter('lineEnding'),e.consume(n),
e.exit('lineEnding'),u++,a):(e.enter('chunkString').contentType='string',
s(n))}function s(n){
return null===n||G(n)||91===n||93===n||u>999?(e.exit('chunkString'),
a(n)):(J(n)||(l=!0),u++,e.consume(n),92===n?f:s)}function f(n){
return 91===n||92===n||93===n?(e.consume(n),u++,s):s(n)}function p(n){
return 58===n?(e.enter('definitionMarker'),
e.consume(n),e.exit('definitionMarker'),
oe(e,h,'gfmFootnoteDefinitionWhitespace')):t(n)}function h(e){
return o.includes(i)||o.push(i),n(e)}}function Kn(e,n,t){
return e.check(he,n,e.attempt(Wn,n,t))}function Zn(e){
e.exit('gfmFootnoteDefinition')}function Jn(e={}){let n=e.singleTilde
const t={tokenize:function(e,t,r){const o=this.previous,i=this.events
let l=0
return function(n){
if(126===o&&'characterEscape'!==i[i.length-1][1].type)return r(n)
return e.enter('strikethroughSequenceTemporary'),u(n)}
function u(i){const c=ce(o)
if(126===i)return l>1?r(i):(e.consume(i),l++,u)
if(l<2&&!n)return r(i)
const a=e.exit('strikethroughSequenceTemporary'),s=ce(i)
return a._open=!s||2===s&&Boolean(c),a._close=!c||2===c&&Boolean(s),t(i)
}},resolveAll:function(e,n){let t=-1
for(;++t<e.length;)if('enter'===e[t][0]&&'strikethroughSequenceTemporary'===e[t][1].type&&e[t][1]._close){
let r=t
for(;r--;)if('exit'===e[r][0]&&'strikethroughSequenceTemporary'===e[r][1].type&&e[r][1]._open&&e[t][1].end.offset-e[t][1].start.offset==e[r][1].end.offset-e[r][1].start.offset){
e[t][1].type='strikethroughSequence',
e[r][1].type='strikethroughSequence'
const o={type:'strikethrough',start:Object.assign({},e[r][1].start),
end:Object.assign({},e[t][1].end)},i={type:'strikethroughText',
start:Object.assign({},e[r][1].end),
end:Object.assign({},e[t][1].start)
},l=[['enter',o,n],['enter',e[r][1],n],['exit',e[r][1],n],['enter',i,n]]
j(l,l.length,0,ae(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),j(l,l.length,0,[['exit',i,n],['enter',e[t][1],n],['exit',e[t][1],n],['exit',o,n]]),
j(e,r-1,t-r+3,l),t=r+l.length-2
break}}t=-1
for(;++t<e.length;)'strikethroughSequenceTemporary'===e[t][1].type&&(e[t][1].type='data')
return e}}
return null==n&&(n=!0),{text:{126:t},insideSpan:{null:[t]},
attentionMarkers:{null:[126]}}}const Gn={flow:{null:{
tokenize:function(e,n,t){const r=this,o=[]
let i,l,u=0
return function(n){
if(e.enter('table')._align=o,e.enter('tableHead'),e.enter('tableRow'),
124===n)return c(n)
return u++,e.enter('temporaryTableCellContent'),f(n)}
function c(n){
return e.enter('tableCellDivider'),e.consume(n),e.exit('tableCellDivider'),
i=!0,a}function a(n){return null===n||G(n)?function(n){
if(null===n)return t(n)
e.exit('tableRow'),e.exit('tableHead')
const o=r.interrupt
return r.interrupt=!0,e.attempt({tokenize:D,partial:!0},(function(n){
return r.interrupt=o,e.enter('tableDelimiterRow'),h(n)}),(function(e){
return r.interrupt=o,t(e)}))(n)
}(n):ee(n)?(e.enter('whitespace'),e.consume(n),s):(i&&(i=void 0,
u++),124===n?c(n):(e.enter('temporaryTableCellContent'),f(n)))}
function s(n){
return ee(n)?(e.consume(n),s):(e.exit('whitespace'),a(n))}
function f(n){
return null===n||124===n||J(n)?(e.exit('temporaryTableCellContent'),
a(n)):(e.consume(n),92===n?p:f)}function p(n){
return 92===n||124===n?(e.consume(n),f):f(n)}function h(n){
return null===n||G(n)?k(n):ee(n)?(e.enter('whitespace'),
e.consume(n),d):45===n?(e.enter('tableDelimiterFiller'),
e.consume(n),l=!0,o.push('none'),
g):58===n?(e.enter('tableDelimiterAlignment'),e.consume(n),
e.exit('tableDelimiterAlignment'),
o.push('left'),m):124===n?(e.enter('tableCellDivider'),
e.consume(n),e.exit('tableCellDivider'),h):t(n)}function d(n){
return ee(n)?(e.consume(n),d):(e.exit('whitespace'),h(n))}
function g(n){
return 45===n?(e.consume(n),g):(e.exit('tableDelimiterFiller'),58===n?(e.enter('tableDelimiterAlignment'),
e.consume(n),
e.exit('tableDelimiterAlignment'),o[o.length-1]='left'===o[o.length-1]?'center':'right',
y):h(n))}function m(n){
return 45===n?(e.enter('tableDelimiterFiller'),e.consume(n),
l=!0,g):t(n)}function y(n){
return null===n||G(n)?k(n):ee(n)?(e.enter('whitespace'),
e.consume(n),d):124===n?(e.enter('tableCellDivider'),
e.consume(n),e.exit('tableCellDivider'),h):t(n)}function k(n){
return e.exit('tableDelimiterRow'),
l&&u===o.length?null===n?x(n):e.check(et,x,e.attempt({tokenize:D,
partial:!0},oe(e,b,'linePrefix',4),x))(n):t(n)}function x(t){
return e.exit('table'),n(t)}function b(n){
return e.enter('tableBody'),v(n)}function v(n){
return e.enter('tableRow'),124===n?w(n):(e.enter('temporaryTableCellContent'),
A(n))}function w(n){
return e.enter('tableCellDivider'),e.consume(n),e.exit('tableCellDivider'),
C}function C(n){return null===n||G(n)?function(n){
if(e.exit('tableRow'),null===n)return E(n)
return e.check(et,E,e.attempt({tokenize:D,partial:!0
},oe(e,v,'linePrefix',4),E))(n)
}(n):ee(n)?(e.enter('whitespace'),e.consume(n),S):124===n?w(n):(e.enter('temporaryTableCellContent'),
A(n))}function S(n){
return ee(n)?(e.consume(n),S):(e.exit('whitespace'),C(n))}
function A(n){
return null===n||124===n||J(n)?(e.exit('temporaryTableCellContent'),
C(n)):(e.consume(n),92===n?F:A)}function F(n){
return 92===n||124===n?(e.consume(n),A):A(n)}function E(n){
return e.exit('tableBody'),x(n)}function D(e,n,t){return function(n){
return e.enter('lineEnding'),
e.consume(n),e.exit('lineEnding'),oe(e,o,'linePrefix')}
function o(o){
if(r.parser.lazy[r.now().line]||null===o||G(o))return t(o)
const i=r.events[r.events.length-1]
return!r.parser.constructs.disable.null.includes('codeIndented')&&i&&'linePrefix'===i[1].type&&i[2].sliceSerialize(i[1],!0).length>=4?t(o):(r._gfmTableDynamicInterruptHack=!0,
e.check(r.parser.constructs.flow,(function(e){
return r._gfmTableDynamicInterruptHack=!1,t(e)}),(function(e){
return r._gfmTableDynamicInterruptHack=!1,n(e)}))(o))}}},
resolve:function(e,n){let t,r,o,i,l,u,c,a=-1
for(;++a<e.length;){const s=e[a][1]
if(o&&('temporaryTableCellContent'===s.type&&(i=i||a,l=a),('tableCellDivider'===s.type||'tableRow'===s.type)&&l)){
const t={type:'tableContent',start:e[i][1].start,end:e[l][1].end},r={
type:'chunkText',start:t.start,end:t.end,contentType:'text'}
e.splice(i,l-i+1,['enter',t,n],['enter',r,n],['exit',r,n],['exit',t,n]),a-=l-i-3,
i=void 0,l=void 0}
if('exit'===e[a][0]&&void 0!==u&&u+(c?0:1)<a&&('tableCellDivider'===s.type||'tableRow'===s.type&&(u+3<a||'whitespace'!==e[u][1].type))){
const o={type:r?'tableDelimiter':t?'tableHeader':'tableData',
start:e[u][1].start,end:e[a][1].end}
e.splice(a+('tableCellDivider'===s.type?1:0),0,['exit',o,n]),e.splice(u,0,['enter',o,n]),
a+=2,u=a+1,c=!0}
'tableRow'===s.type&&(o='enter'===e[a][0],o&&(u=a+1,c=!1)),'tableDelimiterRow'===s.type&&(r='enter'===e[a][0],
r&&(u=a+1,c=!1)),'tableHead'===s.type&&(t='enter'===e[a][0])}return e}
}}},et={tokenize:function(e,n,t){let r=0
return function(n){return e.enter('check'),e.consume(n),o}
function o(i){
return-1===i||32===i?(e.consume(i),r++,4===r?n:o):null===i||J(i)?n(i):t(i)
}},partial:!0}
const nt={tokenize:function(e,n,t){const r=this
return function(n){
if(null!==r.previous||!r._gfmTasklistFirstContentOfListItem)return t(n)
return e.enter('taskListCheck'),e.enter('taskListCheckMarker'),e.consume(n),e.exit('taskListCheckMarker'),
o}
function o(n){
return J(n)?(e.enter('taskListCheckValueUnchecked'),e.consume(n),e.exit('taskListCheckValueUnchecked'),
i):88===n||120===n?(e.enter('taskListCheckValueChecked'),
e.consume(n),e.exit('taskListCheckValueChecked'),i):t(n)}
function i(r){
return 93===r?(e.enter('taskListCheckMarker'),e.consume(r),e.exit('taskListCheckMarker'),
e.exit('taskListCheck'),e.check({tokenize:rt},n,t)):t(r)}}},tt={text:{
91:nt}}
function rt(e,n,t){const r=this
return oe(e,(function(e){const o=r.events[r.events.length-1]
return(o&&'whitespace'===o[1].type||G(e))&&null!==e?n(e):t(e)
}),'whitespace')}function ot(e,n){const t=String(e)
if('string'!=typeof n)throw new TypeError('Expected character')
let r=0,o=t.indexOf(n)
for(;-1!==o;)r++,o=t.indexOf(n,o+n.length)
return r}const it=function(e){if(null==e)return ut
if('string'==typeof e)return function(e){return lt(n)
function n(n){return n&&n.type===e}}(e)
if('object'==typeof e)return Array.isArray(e)?function(e){const n=[]
let t=-1
for(;++t<e.length;)n[t]=it(e[t])
return lt(r)
function r(...e){let t=-1
for(;++t<n.length;)if(n[t].call(this,...e))return!0
return!1}}(e):function(e){return lt(n)
function n(n){let t
for(t in e)if(n[t]!==e[t])return!1
return!0}}(e)
if('function'==typeof e)return lt(e)
throw new Error('Expected function, string, or object as test')}
function lt(e){return function(...n){return Boolean(e.call(this,...n))
}}function ut(){return!0}const ct=function(e,n,t,r){
'function'==typeof n&&'function'!=typeof t&&(r=t,t=n,n=null)
const o=it(n),i=r?-1:1
!function e(l,u,c){const a='object'==typeof l&&null!==l?l:{}
let s
'string'==typeof a.type&&(s='string'==typeof a.tagName?a.tagName:'string'==typeof a.name?a.name:void 0,
Object.defineProperty(f,'name',{
value:'node ('+a.type+(s?'<'+s+'>':'')+')'}))
return f
function f(){let a,s,f,p=[]
if((!n||o(l,u,c[c.length-1]||null))&&(p=function(e){
if(Array.isArray(e))return e
if('number'==typeof e)return[true,e]
return[e]}(t(l,c)),false===p[0]))return p
if(l.children&&"skip"!==p[0])for(s=(r?l.children.length:-1)+i,f=c.concat(l);s>-1&&s<l.children.length;){
if(a=e(l.children[s],s,f)(),false===a[0])return a
s='number'==typeof a[1]?a[1]:s+i}return p}}(e,null,[])()}
const at={}.hasOwnProperty,st=function(e,n,t,r){let o,i
'string'==typeof n||n instanceof RegExp?(i=[[n,t]],o=r):(i=n,o=t),o||(o={})
const l=it(o.ignore||[]),u=function(e){const n=[]
if('object'!=typeof e)throw new TypeError('Expected array or object as schema')
if(Array.isArray(e)){let t=-1
for(;++t<e.length;)n.push([ft(e[t][0]),pt(e[t][1])])}else{let t
for(t in e)at.call(e,t)&&n.push([ft(t),pt(e[t])])}return n}(i)
let c=-1
for(;++c<u.length;)ct(e,'text',a)
return e
function a(e,n){let t,r=-1
for(;++r<n.length;){const e=n[r]
if(l(e,t?t.children.indexOf(e):void 0,t))return
t=e}if(t)return function(e,n){
const t=n[n.length-1],r=u[c][0],o=u[c][1]
let i=0
const l=t.children.indexOf(e)
let a,s=!1,f=[]
r.lastIndex=0
let p=r.exec(e.value)
for(;p;){a=p.index
const t={index:p.index,input:p.input,stack:[...n,e]}
let l=o(...p,t)
if('string'==typeof l&&(l=l.length>0?{type:'text',value:l
}:void 0),!1!==l&&(i!==a&&f.push({type:'text',value:e.value.slice(i,a)
}),Array.isArray(l)?f.push(...l):l&&f.push(l),
i=a+p[0].length,s=!0),!r.global)break
p=r.exec(e.value)}s?(i<e.value.length&&f.push({type:'text',
value:e.value.slice(i)}),t.children.splice(l,1,...f)):f=[e]
return l+f.length}(e,n)}}
function ft(e){return'string'==typeof e?new RegExp(function(e){
if('string'!=typeof e)throw new TypeError('Expected a string')
return e.replace(/[|\\{}()[\]^$+*?.]/g,'\\$&').replace(/-/g,'\\x2d')
}(e),'g'):e}function pt(e){return'function'==typeof e?e:()=>e}
const ht='phrasing',dt=['autolink','link','image','label'],gt={
transforms:[function(e){
st(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,kt],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,xt]],{
ignore:['link','linkReference']})}],enter:{
literalAutolink:function(e){this.enter({type:'link',title:null,url:'',
children:[]},e)},literalAutolinkEmail:yt,literalAutolinkHttp:yt,
literalAutolinkWww:yt},exit:{literalAutolink:function(e){this.exit(e)
},literalAutolinkEmail:function(e){
this.config.exit.autolinkEmail.call(this,e)},
literalAutolinkHttp:function(e){
this.config.exit.autolinkProtocol.call(this,e)},
literalAutolinkWww:function(e){this.config.exit.data.call(this,e)
this.stack[this.stack.length-1].url='http://'+this.sliceSerialize(e)}}
},mt={unsafe:[{character:'@',before:'[+\\-.\\w]',after:'[\\-.\\w]',
inConstruct:ht,notInConstruct:dt},{character:'.',before:'[Ww]',
after:'[\\-.\\w]',inConstruct:ht,notInConstruct:dt},{character:':',
before:'[ps]',after:'\\/',inConstruct:ht,notInConstruct:dt}]}
function yt(e){this.config.enter.autolinkProtocol.call(this,e)}
function kt(e,n,t,r,o){let i=''
if(!bt(o))return!1
if(/^w/i.test(n)&&(t=n+t,n='',i='http://'),!function(e){
const n=e.split('.')
if(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))return!1
return!0}(t))return!1
const l=function(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e)
let t,r,o,i
if(n)for(e=e.slice(0,n.index),i=n[0],t=i.indexOf(')'),r=ot(e,'('),o=ot(e,')');-1!==t&&r>o;)e+=i.slice(0,t+1),
i=i.slice(t+1),t=i.indexOf(')'),o++
return[e,i]}(t+r)
if(!l[0])return!1
const u={type:'link',title:null,url:i+n+l[0],children:[{type:'text',
value:n+l[0]}]}
return l[1]?[u,{type:'text',value:l[1]}]:u}function xt(e,n,t,r){
return!(!bt(r,!0)||/[_-\d]$/.test(t))&&{type:'link',title:null,
url:'mailto:'+n+'@'+t,children:[{type:'text',value:n+'@'+t}]}}
function bt(e,n){const t=e.input.charCodeAt(e.index-1)
return(0===e.index||ne(t)||te(t))&&(!n||47!==t)}function vt(e){
return e.label||!e.identifier?e.label||'':xn(e.identifier)}
function wt(e){const n=e||{},t=n.now||{}
let r=n.lineShift||0,o=t.line||1,i=t.column||1
return{move:function(e=""){
const n=e.split(/\r?\n|\r/g),t=n[n.length-1]
return o+=n.length-1,i=1===n.length?i+t.length:1+t.length+r,e},
current:function(){return{now:{line:o,column:i},lineShift:r}},
shift:function(e){r+=e}}}function Ct(e,n,t){
const r=n.indexStack,o=e.children||[],i=wt(t),l=[]
let u=-1
for(r.push(-1);++u<o.length;){const t=o[u]
r[r.length-1]=u,l.push(i.move(n.handle(t,e,n,{before:'\n',after:'\n',
...i.current()
}))),'list'!==t.type&&(n.bulletLastUsed=void 0),u<o.length-1&&l.push(i.move(c(t,o[u+1])))
}return r.pop(),l.join('')
function c(t,r){let o=n.join.length
for(;o--;){const i=n.join[o](t,r,e,n)
if(!0===i||1===i)break
if('number'==typeof i)return'\n'.repeat(1+i)
if(!1===i)return'\n\n\x3c!----\x3e\n\n'}return'\n\n'}}
const St=/\r?\n|\r/g
function At(e,n){const t=[]
let r,o=0,i=0
for(;r=St.exec(e);)l(e.slice(o,r.index)),t.push(r[0]),o=r.index+r[0].length,i++
return l(e.slice(o)),t.join('')
function l(e){t.push(n(e,i,!e))}}function Ft(e){if(!e._compiled){
const n=(e.atBreak?'[\\r\\n][\\t ]*':'')+(e.before?'(?:'+e.before+')':'')
e._compiled=new RegExp((n?'('+n+')':'')+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?'\\':'')+e.character+(e.after?'(?:'+e.after+')':''),'g')
}return e._compiled}function Et(e,n){
return Dt(e,n.inConstruct,!0)&&!Dt(e,n.notInConstruct,!1)}
function Dt(e,n,t){if(!n)return t
'string'==typeof n&&(n=[n])
let r=-1
for(;++r<n.length;)if(e.includes(n[r]))return!0
return!1}function Lt(e,n,t){
const r=(t.before||'')+(n||'')+(t.after||''),o=[],i=[],l={}
let u=-1
for(;++u<e.unsafe.length;){const n=e.unsafe[u]
if(!Et(e.stack,n))continue
const t=Ft(n)
let i
for(;i=t.exec(r);){
const e='before'in n||Boolean(n.atBreak),t='after'in n,r=i.index+(e?i[1].length:0)
o.includes(r)?(l[r].before&&!e&&(l[r].before=!1),l[r].after&&!t&&(l[r].after=!1)):(o.push(r),
l[r]={before:e,after:t})}}o.sort(Tt)
let c=t.before?t.before.length:0
const a=r.length-(t.after?t.after.length:0)
for(u=-1;++u<o.length;){const e=o[u]
e<c||e>=a||(e+1<a&&o[u+1]===e+1&&l[e].after&&!l[e+1].before&&!l[e+1].after||o[u-1]===e-1&&l[e].before&&!l[e-1].before&&!l[e-1].after||(c!==e&&i.push(It(r.slice(c,e),'\\')),
c=e,
!/[!-/:-@[-`{-~]/.test(r.charAt(e))||t.encode&&t.encode.includes(r.charAt(e))?(i.push('&#x'+r.charCodeAt(e).toString(16).toUpperCase()+';'),
c++):i.push('\\')))}return i.push(It(r.slice(c,a),t.after)),i.join('')
}function Tt(e,n){return e-n}function It(e,n){
const t=/\\(?=[!-/:-@[-`{-~])/g,r=[],o=[],i=e+n
let l,u=-1,c=0
for(;l=t.exec(i);)r.push(l.index)
for(;++u<r.length;)c!==r[u]&&o.push(e.slice(c,r[u])),o.push('\\'),c=r[u]
return o.push(e.slice(c)),o.join('')}function Ot(){
return e.peek=function(){return'['},{unsafe:[{character:'[',
inConstruct:['phrasing','label','reference']}],handlers:{
footnoteDefinition:function(e,n,t,r){const o=wt(r)
let i=o.move('[^')
const l=t.enter('footnoteDefinition'),u=t.enter('label')
return i+=o.move(Lt(t,vt(e),{...o.current(),before:i,after:']'
})),u(),i+=o.move(']:'+(e.children&&e.children.length>0?' ':'')),
o.shift(4),i+=o.move(At(Ct(e,t,o.current()),(function(e,n,t){
if(n)return(t?'':'    ')+e
return e}))),l(),i},footnoteReference:e}}
function e(e,n,t,r){const o=wt(r)
let i=o.move('[^')
const l=t.enter('footnoteReference'),u=t.enter('reference')
return i+=o.move(Lt(t,vt(e),{...o.current(),before:i,after:']'
})),u(),l(),i+=o.move(']'),i}}function Pt(e,n,t){
const r=n.indexStack,o=e.children||[],i=[]
let l=-1,u=t.before
r.push(-1)
let c=wt(t)
for(;++l<o.length;){const a=o[l]
let s
if(r[r.length-1]=l,l+1<o.length){let t=n.handle.handlers[o[l+1].type]
t&&t.peek&&(t=t.peek),s=t?t(o[l+1],e,n,{before:'',after:'',
...c.current()}).charAt(0):''}else s=t.after
i.length>0&&('\r'===u||'\n'===u)&&'html'===a.type&&(i[i.length-1]=i[i.length-1].replace(/(\r?\n|\r)$/,' '),
u=' ',c=wt(t),c.move(i.join(''))),i.push(c.move(n.handle(a,e,n,{
...c.current(),before:u,after:s}))),u=i[i.length-1].slice(-1)}
return r.pop(),i.join('')}const zt={canContainEols:['delete'],enter:{
strikethrough:function(e){this.enter({type:'delete',children:[]},e)}},
exit:{strikethrough:function(e){this.exit(e)}}},Mt={unsafe:[{
character:'~',inConstruct:'phrasing',
notInConstruct:['autolink','destinationLiteral','destinationRaw','reference','titleQuote','titleApostrophe']
}],handlers:{delete:Rt}}
function Rt(e,n,t,r){const o=wt(r),i=t.enter('emphasis')
let l=o.move('~~')
return l+=Pt(e,t,{...o.current(),before:l,after:'~'
}),l+=o.move('~~'),i(),l}function Bt(e,n,t){
let r=e.value||'',o='`',i=-1
for(;new RegExp('(^|[^`])'+o+'([^`]|$)').test(r);)o+='`'
for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=' '+r+' ');++i<t.unsafe.length;){
const e=t.unsafe[i],n=Ft(e)
let o
if(e.atBreak)for(;o=n.exec(r);){let e=o.index
10===r.charCodeAt(e)&&13===r.charCodeAt(e-1)&&e--,r=r.slice(0,e)+' '+r.slice(o.index+1)
}}return o+r+o}function _t(e){return e.length}function jt(e){
const n='string'==typeof e?e.codePointAt(0):0
return 67===n||99===n?99:76===n||108===n?108:82===n||114===n?114:0}
Rt.peek=function(){return'~'},Bt.peek=function(){return'`'}
const Nt={enter:{table:function(e){const n=e._align
this.enter({type:'table',align:n.map((e=>'none'===e?null:e)),
children:[]},e),this.setData('inTable',!0)},tableData:Ut,
tableHeader:Ut,tableRow:function(e){this.enter({type:'tableRow',
children:[]},e)}},exit:{codeText:function(e){let n=this.resume()
this.getData('inTable')&&(n=n.replace(/\\([\\|])/g,Vt))
this.stack[this.stack.length-1].value=n,this.exit(e)},
table:function(e){this.exit(e),this.setData('inTable')},tableData:Ht,
tableHeader:Ht,tableRow:Ht}}
function Ht(e){this.exit(e)}function Ut(e){this.enter({
type:'tableCell',children:[]},e)}function Vt(e,n){return'|'===n?n:e}
function qt(e){
const n=e||{},t=n.tableCellPadding,r=n.tablePipeAlign,o=n.stringLength,i=t?' ':'|'
return{unsafe:[{character:'\r',inConstruct:'tableCell'},{
character:'\n',inConstruct:'tableCell'},{atBreak:!0,character:'|',
after:'[\t :-]'},{character:'|',inConstruct:'tableCell'},{atBreak:!0,
character:':',after:'-'},{atBreak:!0,character:'-',after:'[:|-]'}],
handlers:{table:function(e,n,t,r){return u(function(e,n,t){
const r=e.children
let o=-1
const i=[],l=n.enter('table')
for(;++o<r.length;)i[o]=c(r[o],n,t)
return l(),i}(e,t,r),e.align)},tableRow:function(e,n,t,r){
const o=u([c(e,t,r)])
return o.slice(0,o.indexOf('\n'))},tableCell:l,
inlineCode:function(e,n,t){let r=Bt(e,0,t)
t.stack.includes('tableCell')&&(r=r.replace(/\|/g,'\\$&'))
return r}}}
function l(e,n,t,r){
const o=t.enter('tableCell'),l=t.enter('phrasing'),u=Pt(e,t,{...r,
before:i,after:i})
return l(),o(),u}function u(e,n){return function(e,n={}){
const t=(n.align||[]).concat(),r=n.stringLength||_t,o=[],i=[],l=[],u=[]
let c=0,a=-1
for(;++a<e.length;){const t=[],o=[]
let f=-1
for(e[a].length>c&&(c=e[a].length);++f<e[a].length;){
const i=null==(s=e[a][f])?'':String(s)
if(!1!==n.alignDelimiters){const e=r(i)
o[f]=e,(void 0===u[f]||e>u[f])&&(u[f]=e)}t.push(i)}i[a]=t,l[a]=o}var s
let f=-1
if('object'==typeof t&&'length'in t)for(;++f<c;)o[f]=jt(t[f])
else{const e=jt(t)
for(;++f<c;)o[f]=e}f=-1
const p=[],h=[]
for(;++f<c;){const e=o[f]
let t='',r=''
99===e?(t=':',r=':'):108===e?t=':':114===e&&(r=':')
let i=!1===n.alignDelimiters?1:Math.max(1,u[f]-t.length-r.length)
const l=t+'-'.repeat(i)+r
!1!==n.alignDelimiters&&(i=t.length+i+r.length,i>u[f]&&(u[f]=i),h[f]=i),p[f]=l
}i.splice(1,0,p),l.splice(1,0,h),a=-1
const d=[]
for(;++a<i.length;){const e=i[a],t=l[a]
f=-1
const r=[]
for(;++f<c;){const i=e[f]||''
let l='',a=''
if(!1!==n.alignDelimiters){const e=u[f]-(t[f]||0),n=o[f]
114===n?l=' '.repeat(e):99===n?e%2?(l=' '.repeat(e/2+.5),a=' '.repeat(e/2-.5)):(l=' '.repeat(e/2),
a=l):a=' '.repeat(e)}
!1===n.delimiterStart||f||r.push('|'),!1===n.padding||!1===n.alignDelimiters&&''===i||!1===n.delimiterStart&&!f||r.push(' '),
!1!==n.alignDelimiters&&r.push(l),
r.push(i),!1!==n.alignDelimiters&&r.push(a),!1!==n.padding&&r.push(' '),
!1===n.delimiterEnd&&f===c-1||r.push('|')}
d.push(!1===n.delimiterEnd?r.join('').replace(/ +$/,''):r.join(''))}
return d.join('\n')}(e,{align:n,alignDelimiters:r,padding:t,
stringLength:o})}function c(e,n,t){const r=e.children
let o=-1
const i=[],u=n.enter('tableRow')
for(;++o<r.length;)i[o]=l(r[o],0,n,t)
return u(),i}}function Wt(e,n,t,r){const o=function(e){
const n=e.options.listItemIndent||'tab'
if(1===n||'1'===n)return'one'
if('tab'!==n&&'one'!==n&&'mixed'!==n)throw new Error('Cannot serialize items with `'+n+'` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`')
return n}(t)
let i=t.bulletCurrent||function(e){const n=e.options.bullet||'*'
if('*'!==n&&'+'!==n&&'-'!==n)throw new Error('Cannot serialize items with `'+n+'` for `options.bullet`, expected `*`, `+`, or `-`')
return n}(t)
n&&'list'===n.type&&n.ordered&&(i=('number'==typeof n.start&&n.start>-1?n.start:1)+(!1===t.options.incrementListMarker?0:n.children.indexOf(e))+i)
let l=i.length+1
;('tab'===o||'mixed'===o&&(n&&'list'===n.type&&n.spread||e.spread))&&(l=4*Math.ceil(l/4))
const u=wt(r)
u.move(i+' '.repeat(l-i.length)),u.shift(l)
const c=t.enter('listItem'),a=At(Ct(e,t,u.current()),(function(e,n,t){
if(n)return(t?'':' '.repeat(l))+e
return(t?i:i+' '.repeat(l-i.length))+e}))
return c(),a}const $t={exit:{taskListCheckValueChecked:Xt,
taskListCheckValueUnchecked:Xt,paragraph:function(e){
const n=this.stack[this.stack.length-2],t=this.stack[this.stack.length-1],r=n.children,o=t.children[0]
let i,l=-1
if(n&&'listItem'===n.type&&'boolean'==typeof n.checked&&o&&'text'===o.type){
for(;++l<r.length;){const e=r[l]
if('paragraph'===e.type){i=e
break}}
i===t&&(o.value=o.value.slice(1),0===o.value.length?t.children.shift():t.position&&o.position&&'number'==typeof o.position.start.offset&&(o.position.start.column++,
o.position.start.offset++,
t.position.start=Object.assign({},o.position.start)))}this.exit(e)}}
},Qt={unsafe:[{atBreak:!0,character:'-',after:'[:|-]'}],handlers:{
listItem:function(e,n,t,r){
const o=e.children[0],i='boolean'==typeof e.checked&&o&&'paragraph'===o.type,l='['+(e.checked?'x':' ')+'] ',u=wt(r)
i&&u.move(l)
let c=Wt(e,n,t,{...r,...u.current()})
i&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,(function(e){
return e+l})))
return c}}}
function Xt(e){
this.stack[this.stack.length-2].checked='taskListCheckValueChecked'===e.type
}var Yt=function(e,n,t){var r={type:String(e)}
return null!=t||'string'!=typeof n&&!Array.isArray(n)?Object.assign(r,n):t=n,Array.isArray(t)?r.children=t:null!=t&&(r.value=String(t)),
r}
const Kt={}.hasOwnProperty
function Zt(e,n){const t=n.data||{}
return'value'in n&&!(Kt.call(t,'hName')||Kt.call(t,'hProperties')||Kt.call(t,'hChildren'))?e.augment(n,Yt('text',n.value)):e(n,'div',er(e,n))
}function Jt(e,n,t){const r=n&&n.type
let o
if(!r)throw new Error('Expected node, got `'+n+'`')
return o=Kt.call(e.handlers,r)?e.handlers[r]:e.passThrough&&e.passThrough.includes(r)?Gt:e.unknownHandler,
('function'==typeof o?o:Zt)(e,n,t)}function Gt(e,n){
return'children'in n?{...n,children:er(e,n)}:n}function er(e,n){
const t=[]
if('children'in n){const r=n.children
let o=-1
for(;++o<r.length;){const i=Jt(e,r[o],n)
if(i){
if(o&&'break'===r[o-1].type&&(Array.isArray(i)||'text'!==i.type||(i.value=i.value.replace(/^\s+/,'')),
!Array.isArray(i)&&'element'===i.type)){const e=i.children[0]
e&&'text'===e.type&&(e.value=e.value.replace(/^\s+/,''))}
Array.isArray(i)?t.push(...i):t.push(i)}}}return t}
const nr=function(e,n,t,r){
'function'==typeof n&&'function'!=typeof t&&(r=t,t=n,
n=null),ct(e,n,(function(e,n){const r=n[n.length-1]
return t(e,r?r.children.indexOf(e):null,r)}),r)
},tr=or('start'),rr=or('end')
function or(e){return function(n){
const t=n&&n.position&&n.position[e]||{}
return{line:t.line||null,column:t.column||null,
offset:t.offset>-1?t.offset:null}}}const ir={}.hasOwnProperty
function lr(e){return String(e||'').toUpperCase()}function ur(e,n){
const t=[]
let r=-1
for(n&&t.push(Yt('text','\n'));++r<e.length;)r&&t.push(Yt('text','\n')),t.push(e[r])
return n&&e.length>0&&t.push(Yt('text','\n')),t}function cr(e,n){
const t=String(n.identifier),r=qn(t.toLowerCase()),o=e.footnoteOrder.indexOf(t)
let i
;-1===o?(e.footnoteOrder.push(t),e.footnoteCounts[t]=1,i=e.footnoteOrder.length):(e.footnoteCounts[t]++,
i=o+1)
const l=e.footnoteCounts[t]
return e(n,'sup',[e(n.position,'a',{href:'#'+e.clobberPrefix+'fn-'+r,
id:e.clobberPrefix+'fnref-'+r+(l>1?'-'+l:''),dataFootnoteRef:!0,
ariaDescribedBy:'footnote-label'},[Yt('text',String(i))])])}
function ar(e,n){const t=n.referenceType
let r=']'
if('collapsed'===t?r+='[]':'full'===t&&(r+='['+(n.label||n.identifier)+']'),'imageReference'===n.type)return Yt('text','!['+n.alt+r)
const o=er(e,n),i=o[0]
i&&'text'===i.type?i.value='['+i.value:o.unshift(Yt('text','['))
const l=o[o.length-1]
return l&&'text'===l.type?l.value+=r:o.push(Yt('text',r)),o}
function sr(e){const n=e.spread
return null==n?e.children.length>1:n}function fr(e,n,t){
let r=0,o=e.length
if(n){let n=e.codePointAt(r)
for(;9===n||32===n;)r++,n=e.codePointAt(r)}if(t){
let n=e.codePointAt(o-1)
for(;9===n||32===n;)o--,n=e.codePointAt(o-1)}
return o>r?e.slice(r,o):''}const pr={blockquote:function(e,n){
return e(n,'blockquote',ur(er(e,n),!0))},break:function(e,n){
return[e(n,'br'),Yt('text','\n')]},code:function(e,n){
const t=n.value?n.value+'\n':'',r=n.lang&&n.lang.match(/^[^ \t]+(?=[ \t]|$)/),o={}
r&&(o.className=['language-'+r])
const i=e(n,'code',o,[Yt('text',t)])
return n.meta&&(i.data={meta:n.meta}),e(n.position,'pre',[i])},
delete:function(e,n){return e(n,'del',er(e,n))},
emphasis:function(e,n){return e(n,'em',er(e,n))},footnoteReference:cr,
footnote:function(e,n){const t=e.footnoteById
let r=1
for(;r in t;)r++
const o=String(r)
return t[o]={type:'footnoteDefinition',identifier:o,children:[{
type:'paragraph',children:n.children}],position:n.position},cr(e,{
type:'footnoteReference',identifier:o,position:n.position})},
heading:function(e,n){return e(n,'h'+n.depth,er(e,n))},
html:function(e,n){
return e.dangerous?e.augment(n,Yt('raw',n.value)):null},
imageReference:function(e,n){const t=e.definition(n.identifier)
if(!t)return ar(e,n)
const r={src:qn(t.url||''),alt:n.alt}
return null!==t.title&&void 0!==t.title&&(r.title=t.title),e(n,'img',r)
},image:function(e,n){const t={src:qn(n.url),alt:n.alt}
return null!==n.title&&void 0!==n.title&&(t.title=n.title),e(n,'img',t)
},inlineCode:function(e,n){
return e(n,'code',[Yt('text',n.value.replace(/\r?\n|\r/g,' '))])},
linkReference:function(e,n){const t=e.definition(n.identifier)
if(!t)return ar(e,n)
const r={href:qn(t.url||'')}
return null!==t.title&&void 0!==t.title&&(r.title=t.title),e(n,'a',r,er(e,n))
},link:function(e,n){const t={href:qn(n.url)}
return null!==n.title&&void 0!==n.title&&(t.title=n.title),e(n,'a',t,er(e,n))
},listItem:function(e,n,t){const r=er(e,n),o=t?function(e){
let n=e.spread
const t=e.children
let r=-1
for(;!n&&++r<t.length;)n=sr(t[r])
return Boolean(n)}(t):sr(n),i={},l=[]
if('boolean'==typeof n.checked){let t
r[0]&&'element'===r[0].type&&'p'===r[0].tagName?t=r[0]:(t=e(null,'p',[]),r.unshift(t)),
t.children.length>0&&t.children.unshift(Yt('text',' ')),
t.children.unshift(e(null,'input',{type:'checkbox',checked:n.checked,
disabled:!0})),i.className=['task-list-item']}let u=-1
for(;++u<r.length;){const e=r[u]
;(o||0!==u||'element'!==e.type||'p'!==e.tagName)&&l.push(Yt('text','\n')),
'element'!==e.type||'p'!==e.tagName||o?l.push(e):l.push(...e.children)
}const c=r[r.length-1]
return!c||!o&&'tagName'in c&&'p'===c.tagName||l.push(Yt('text','\n')),e(n,'li',i,l)
},list:function(e,n){const t={},r=n.ordered?'ol':'ul',o=er(e,n)
let i=-1
for('number'==typeof n.start&&1!==n.start&&(t.start=n.start);++i<o.length;){
const e=o[i]
if('element'===e.type&&'li'===e.tagName&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes('task-list-item')){
t.className=['contains-task-list']
break}}return e(n,r,t,ur(o,!0))},paragraph:function(e,n){
return e(n,'p',er(e,n))},root:function(e,n){
return e.augment(n,Yt('root',ur(er(e,n))))},strong:function(e,n){
return e(n,'strong',er(e,n))},table:function(e,n){const t=n.children
let r=-1
const o=n.align||[],i=[]
for(;++r<t.length;){const l=t[r].children,u=0===r?'th':'td',c=[]
let a=-1
const s=n.align?o.length:l.length
for(;++a<s;){const n=l[a]
c.push(e(n,u,{align:o[a]},n?er(e,n):[]))}i[r]=e(t[r],'tr',ur(c,!0))}
return e(n,'table',ur([e(i[0].position,'thead',ur([i[0]],!0))].concat(i[1]?e({
start:tr(i[1]),end:rr(i[i.length-1])
},'tbody',ur(i.slice(1),!0)):[]),!0))},text:function(e,n){
return e.augment(n,Yt('text',function(e){
const n=String(e),t=/\r?\n|\r/g
let r=t.exec(n),o=0
const i=[]
for(;r;)i.push(fr(n.slice(o,r.index),o>0,!0),r[0]),o=r.index+r[0].length,r=t.exec(n)
return i.push(fr(n.slice(o),o>0,!1)),i.join('')}(String(n.value))))},
thematicBreak:function(e,n){return e(n,'hr')},toml:hr,yaml:hr,
definition:hr,footnoteDefinition:hr}
function hr(){return null}const dr={}.hasOwnProperty
function gr(e,n){const t=n||{},r=t.allowDangerousHtml||!1,o={}
return l.dangerous=r,l.clobberPrefix=void 0===t.clobberPrefix||null===t.clobberPrefix?'user-content-':t.clobberPrefix,
l.footnoteLabel=t.footnoteLabel||'Footnotes',
l.footnoteLabelTagName=t.footnoteLabelTagName||'h2',
l.footnoteLabelProperties=t.footnoteLabelProperties||{
className:['sr-only']
},l.footnoteBackLabel=t.footnoteBackLabel||'Back to content',
l.definition=function(e){const n=Object.create(null)
if(!e||!e.type)throw new Error('mdast-util-definitions expected node')
return nr(e,'definition',(e=>{const t=lr(e.identifier)
t&&!ir.call(n,t)&&(n[t]=e)})),function(e){const t=lr(e)
return t&&ir.call(n,t)?n[t]:null}
}(e),l.footnoteById=o,l.footnoteOrder=[],l.footnoteCounts={},
l.augment=i,l.handlers={...pr,...t.handlers
},l.unknownHandler=t.unknownHandler,l.passThrough=t.passThrough,
nr(e,'footnoteDefinition',(e=>{
const n=String(e.identifier).toUpperCase()
dr.call(o,n)||(o[n]=e)})),l
function i(e,n){if(e&&'data'in e&&e.data){const t=e.data
t.hName&&('element'!==n.type&&(n={type:'element',tagName:'',
properties:{},children:[]
}),n.tagName=t.hName),'element'===n.type&&t.hProperties&&(n.properties={
...n.properties,...t.hProperties
}),'children'in n&&n.children&&t.hChildren&&(n.children=t.hChildren)}
if(e){const r='type'in e?e:{position:e}
;(t=r)&&t.position&&t.position.start&&t.position.start.line&&t.position.start.column&&t.position.end&&t.position.end.line&&t.position.end.column&&(n.position={
start:tr(r),end:rr(r)})}var t
return n}function l(e,n,t,r){return Array.isArray(t)&&(r=t,t={}),i(e,{
type:'element',tagName:n,properties:t||{},children:r||[]})}}
function mr(e,n){const t=gr(e,n),r=Jt(t,e,null),o=function(e){let n=-1
const t=[]
for(;++n<e.footnoteOrder.length;){
const r=e.footnoteById[e.footnoteOrder[n].toUpperCase()]
if(!r)continue
const o=er(e,r),i=String(r.identifier),l=qn(i.toLowerCase())
let u=0
const c=[]
for(;++u<=e.footnoteCounts[i];){const n={type:'element',tagName:'a',
properties:{href:'#'+e.clobberPrefix+'fnref-'+l+(u>1?'-'+u:''),
dataFootnoteBackref:!0,className:['data-footnote-backref'],
ariaLabel:e.footnoteBackLabel},children:[{type:'text',value:'↩'}]}
u>1&&n.children.push({type:'element',tagName:'sup',children:[{
type:'text',value:String(u)}]}),c.length>0&&c.push({type:'text',
value:' '}),c.push(n)}const a=o[o.length-1]
if(a&&'element'===a.type&&'p'===a.tagName){
const e=a.children[a.children.length-1]
e&&'text'===e.type?e.value+=' ':a.children.push({type:'text',value:' '
}),a.children.push(...c)}else o.push(...c)
const s={type:'element',tagName:'li',properties:{
id:e.clobberPrefix+'fn-'+l},children:ur(o,!0)}
r.position&&(s.position=r.position),t.push(s)}
return 0===t.length?null:{type:'element',tagName:'section',
properties:{dataFootnotes:!0,className:['footnotes']},children:[{
type:'element',tagName:e.footnoteLabelTagName,properties:{
...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
id:'footnote-label'},children:[Yt('text',e.footnoteLabel)]},{
type:'text',value:'\n'},{type:'element',tagName:'ol',properties:{},
children:ur(t,!0)},{type:'text',value:'\n'}]}}(t)
return o&&r.children.push(Yt('text','\n'),o),Array.isArray(r)?{
type:'root',children:r}:r}var yr=function(e,n){
return e&&'run'in e?function(e,n){return(t,r,o)=>{
e.run(mr(t,n),r,(e=>{o(e)}))}}(e,n):function(e){return n=>mr(n,e)
}(e||n)}
class kr{constructor(e,n,t){
this.property=e,this.normal=n,t&&(this.space=t)}}function xr(e,n){
const t={},r={}
let o=-1
for(;++o<e.length;)Object.assign(t,e[o].property),Object.assign(r,e[o].normal)
return new kr(t,r,n)}function br(e){return e.toLowerCase()}
kr.prototype.property={},
kr.prototype.normal={},kr.prototype.space=null
class vr{constructor(e,n){this.property=e,this.attribute=n}}
vr.prototype.space=null,
vr.prototype.boolean=!1,vr.prototype.booleanish=!1,vr.prototype.overloadedBoolean=!1,
vr.prototype.number=!1,
vr.prototype.commaSeparated=!1,vr.prototype.spaceSeparated=!1,
vr.prototype.commaOrSpaceSeparated=!1,
vr.prototype.mustUseProperty=!1,vr.prototype.defined=!1
let wr=0
const Cr=Tr(),Sr=Tr(),Ar=Tr(),Fr=Tr(),Er=Tr(),Dr=Tr(),Lr=Tr()
function Tr(){return 2**++wr}var Ir=Object.freeze({__proto__:null,
boolean:Cr,booleanish:Sr,overloadedBoolean:Ar,number:Fr,
spaceSeparated:Er,commaSeparated:Dr,commaOrSpaceSeparated:Lr})
const Or=Object.keys(Ir)
class Pr extends vr{constructor(e,n,t,r){let o=-1
if(super(e,n),zr(this,'space',r),'number'==typeof t)for(;++o<Or.length;){
const e=Or[o]
zr(this,Or[o],(t&Ir[e])===Ir[e])}}}function zr(e,n,t){t&&(e[n]=t)}
Pr.prototype.defined=!0
const Mr={}.hasOwnProperty
function Rr(e){const n={},t={}
let r
for(r in e.properties)if(Mr.call(e.properties,r)){
const o=e.properties[r],i=new Pr(r,e.transform(e.attributes||{},r),o,e.space)
e.mustUseProperty&&e.mustUseProperty.includes(r)&&(i.mustUseProperty=!0),n[r]=i,
t[br(r)]=r,t[br(i.attribute)]=r}return new kr(n,t,e.space)}
const Br=Rr({space:'xlink',
transform:(e,n)=>'xlink:'+n.slice(5).toLowerCase(),properties:{
xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,
xLinkShow:null,xLinkTitle:null,xLinkType:null}}),_r=Rr({space:'xml',
transform:(e,n)=>'xml:'+n.slice(3).toLowerCase(),properties:{
xmlLang:null,xmlBase:null,xmlSpace:null}})
function jr(e,n){return n in e?e[n]:n}function Nr(e,n){
return jr(e,n.toLowerCase())}const Hr=Rr({space:'xmlns',attributes:{
xmlnsxlink:'xmlns:xlink'},transform:Nr,properties:{xmlns:null,
xmlnsXLink:null}}),Ur=Rr({
transform:(e,n)=>'role'===n?n:'aria-'+n.slice(4).toLowerCase(),
properties:{ariaActiveDescendant:null,ariaAtomic:Sr,
ariaAutoComplete:null,ariaBusy:Sr,ariaChecked:Sr,ariaColCount:Fr,
ariaColIndex:Fr,ariaColSpan:Fr,ariaControls:Er,ariaCurrent:null,
ariaDescribedBy:Er,ariaDetails:null,ariaDisabled:Sr,ariaDropEffect:Er,
ariaErrorMessage:null,ariaExpanded:Sr,ariaFlowTo:Er,ariaGrabbed:Sr,
ariaHasPopup:null,ariaHidden:Sr,ariaInvalid:null,
ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Er,ariaLevel:Fr,
ariaLive:null,ariaModal:Sr,ariaMultiLine:Sr,ariaMultiSelectable:Sr,
ariaOrientation:null,ariaOwns:Er,ariaPlaceholder:null,ariaPosInSet:Fr,
ariaPressed:Sr,ariaReadOnly:Sr,ariaRelevant:null,ariaRequired:Sr,
ariaRoleDescription:Er,ariaRowCount:Fr,ariaRowIndex:Fr,ariaRowSpan:Fr,
ariaSelected:Sr,ariaSetSize:Fr,ariaSort:null,ariaValueMax:Fr,
ariaValueMin:Fr,ariaValueNow:Fr,ariaValueText:null,role:null}
}),Vr=Rr({space:'html',attributes:{acceptcharset:'accept-charset',
classname:'class',htmlfor:'for',httpequiv:'http-equiv'},transform:Nr,
mustUseProperty:['checked','multiple','muted','selected'],properties:{
abbr:null,accept:Dr,acceptCharset:Er,accessKey:Er,action:null,
allow:null,allowFullScreen:Cr,allowPaymentRequest:Cr,
allowUserMedia:Cr,alt:null,as:null,async:Cr,autoCapitalize:null,
autoComplete:Er,autoFocus:Cr,autoPlay:Cr,capture:Cr,charSet:null,
checked:Cr,cite:null,className:Er,cols:Fr,colSpan:null,content:null,
contentEditable:Sr,controls:Cr,controlsList:Er,coords:Fr|Dr,
crossOrigin:null,data:null,dateTime:null,decoding:null,default:Cr,
defer:Cr,dir:null,dirName:null,disabled:Cr,download:Ar,draggable:Sr,
encType:null,enterKeyHint:null,form:null,formAction:null,
formEncType:null,formMethod:null,formNoValidate:Cr,formTarget:null,
headers:Er,height:Fr,hidden:Cr,high:Fr,href:null,hrefLang:null,
htmlFor:Er,httpEquiv:Er,id:null,imageSizes:null,imageSrcSet:null,
inputMode:null,integrity:null,is:null,isMap:Cr,itemId:null,
itemProp:Er,itemRef:Er,itemScope:Cr,itemType:Er,kind:null,label:null,
lang:null,language:null,list:null,loading:null,loop:Cr,low:Fr,
manifest:null,max:null,maxLength:Fr,media:null,method:null,min:null,
minLength:Fr,multiple:Cr,muted:Cr,name:null,nonce:null,noModule:Cr,
noValidate:Cr,onAbort:null,onAfterPrint:null,onAuxClick:null,
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
onVolumeChange:null,onWaiting:null,onWheel:null,open:Cr,optimum:Fr,
pattern:null,ping:Er,placeholder:null,playsInline:Cr,poster:null,
preload:null,readOnly:Cr,referrerPolicy:null,rel:Er,required:Cr,
reversed:Cr,rows:Fr,rowSpan:Fr,sandbox:Er,scope:null,scoped:Cr,
seamless:Cr,selected:Cr,shape:null,size:Fr,sizes:null,slot:null,
span:Fr,spellCheck:Sr,src:null,srcDoc:null,srcLang:null,srcSet:null,
start:Fr,step:null,style:null,tabIndex:Fr,target:null,title:null,
translate:null,type:null,typeMustMatch:Cr,useMap:null,value:Sr,
width:Fr,wrap:null,align:null,aLink:null,archive:Er,axis:null,
background:null,bgColor:null,border:Fr,borderColor:null,
bottomMargin:Fr,cellPadding:null,cellSpacing:null,char:null,
charOff:null,classId:null,clear:null,code:null,codeBase:null,
codeType:null,color:null,compact:Cr,declare:Cr,event:null,face:null,
frame:null,frameBorder:null,hSpace:Fr,leftMargin:Fr,link:null,
longDesc:null,lowSrc:null,marginHeight:Fr,marginWidth:Fr,noResize:Cr,
noHref:Cr,noShade:Cr,noWrap:Cr,object:null,profile:null,prompt:null,
rev:null,rightMargin:Fr,rules:null,scheme:null,scrolling:Sr,
standby:null,summary:null,text:null,topMargin:Fr,valueType:null,
version:null,vAlign:null,vLink:null,vSpace:Fr,allowTransparency:null,
autoCorrect:null,autoSave:null,disablePictureInPicture:Cr,
disableRemotePlayback:Cr,prefix:null,property:null,results:Fr,
security:null,unselectable:null}}),qr=Rr({space:'svg',attributes:{
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
timelineBegin:'timelinebegin'},transform:jr,properties:{about:Lr,
accentHeight:Fr,accumulate:null,additive:null,alignmentBaseline:null,
alphabetic:Fr,amplitude:Fr,arabicForm:null,ascent:Fr,
attributeName:null,attributeType:null,azimuth:Fr,bandwidth:null,
baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,
begin:null,bias:Fr,by:null,calcMode:null,capHeight:Fr,className:Er,
clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,
colorInterpolation:null,colorInterpolationFilters:null,
colorProfile:null,colorRendering:null,content:null,
contentScriptType:null,contentStyleType:null,crossOrigin:null,
cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,
descent:Fr,diffuseConstant:Fr,direction:null,display:null,dur:null,
divisor:Fr,dominantBaseline:null,download:Cr,dx:null,dy:null,
edgeMode:null,editable:null,elevation:Fr,enableBackground:null,
end:null,event:null,exponent:Fr,externalResourcesRequired:null,
fill:null,fillOpacity:Fr,fillRule:null,filter:null,filterRes:null,
filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,
focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,
fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,
format:null,fr:null,from:null,fx:null,fy:null,g1:Dr,g2:Dr,
glyphName:Dr,glyphOrientationHorizontal:null,
glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,
gradientUnits:null,handler:null,hanging:Fr,hatchContentUnits:null,
hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:Fr,
horizOriginX:Fr,horizOriginY:Fr,id:null,ideographic:Fr,
imageRendering:null,initialVisibility:null,in:null,in2:null,
intercept:Fr,k:Fr,k1:Fr,k2:Fr,k3:Fr,k4:Fr,kernelMatrix:Lr,
kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,
kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,
lightingColor:null,limitingConeAngle:Fr,local:null,markerEnd:null,
markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,
markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,
mathematical:null,max:null,media:null,mediaCharacterEncoding:null,
mediaContentEncodings:null,mediaSize:Fr,mediaTime:null,method:null,
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
overflow:null,overlay:null,overlinePosition:Fr,overlineThickness:Fr,
paintOrder:null,panose1:null,path:null,pathLength:Fr,
patternContentUnits:null,patternTransform:null,patternUnits:null,
phase:null,ping:Er,pitch:null,playbackOrder:null,pointerEvents:null,
points:null,pointsAtX:Fr,pointsAtY:Fr,pointsAtZ:Fr,preserveAlpha:null,
preserveAspectRatio:null,primitiveUnits:null,propagate:null,
property:Lr,r:null,radius:null,referrerPolicy:null,refX:null,
refY:null,rel:Lr,rev:Lr,renderingIntent:null,repeatCount:null,
repeatDur:null,requiredExtensions:Lr,requiredFeatures:Lr,
requiredFonts:Lr,requiredFormats:Lr,resource:null,restart:null,
result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,
shapeRendering:null,side:null,slope:null,snapshotTime:null,
specularConstant:Fr,specularExponent:Fr,spreadMethod:null,
spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,
stitchTiles:null,stopColor:null,stopOpacity:null,
strikethroughPosition:Fr,strikethroughThickness:Fr,string:null,
stroke:null,strokeDashArray:Lr,strokeDashOffset:null,
strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:Fr,
strokeOpacity:Fr,strokeWidth:null,style:null,surfaceScale:Fr,
syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,
syncTolerance:null,syncToleranceDefault:null,systemLanguage:Lr,
tabIndex:Fr,tableValues:null,target:null,targetX:Fr,targetY:Fr,
textAnchor:null,textDecoration:null,textRendering:null,
textLength:null,timelineBegin:null,title:null,transformBehavior:null,
type:null,typeOf:Lr,to:null,transform:null,u1:null,u2:null,
underlinePosition:Fr,underlineThickness:Fr,unicode:null,
unicodeBidi:null,unicodeRange:null,unitsPerEm:Fr,values:null,
vAlphabetic:Fr,vMathematical:Fr,vectorEffect:null,vHanging:Fr,
vIdeographic:Fr,version:null,vertAdvY:Fr,vertOriginX:Fr,
vertOriginY:Fr,viewBox:null,viewTarget:null,visibility:null,
width:null,widths:null,wordSpacing:null,writingMode:null,x:null,
x1:null,x2:null,xChannelSelector:null,xHeight:Fr,y:null,y1:null,
y2:null,yChannelSelector:null,z:null,zoomAndPan:null}
}),Wr=/^data[-\w.:]+$/i,$r=/-[a-z]/g,Qr=/[A-Z]/g
function Xr(e,n){const t=br(n)
let r=n,o=vr
if(t in e.normal)return e.property[e.normal[t]]
if(t.length>4&&'data'===t.slice(0,4)&&Wr.test(n)){
if('-'===n.charAt(4)){const e=n.slice(5).replace($r,Kr)
r='data'+e.charAt(0).toUpperCase()+e.slice(1)}else{const e=n.slice(4)
if(!$r.test(e)){let t=e.replace(Qr,Yr)
'-'!==t.charAt(0)&&(t='-'+t),n='data'+t}}o=Pr}return new o(r,n)}
function Yr(e){return'-'+e.toLowerCase()}function Kr(e){
return e.charAt(1).toUpperCase()}
const Zr=xr([_r,Br,Hr,Ur,Vr],'html'),Jr=xr([_r,Br,Hr,Ur,qr],'svg')
var Gr=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,eo=/\n/g,no=/^\s*/,to=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,ro=/^:\s*/,oo=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,io=/^[;\s]*/,lo=/^\s+|\s+$/g,uo=''
function co(e){return e?e.replace(lo,uo):uo}var ao=function(e,n){
if('string'!=typeof e)throw new TypeError('First argument must be a string')
if(!e)return[]
n=n||{}
var t=1,r=1
function o(e){var n=e.match(eo)
n&&(t+=n.length)
var o=e.lastIndexOf("\n")
r=~o?e.length-o:r+e.length}function i(){var e={line:t,column:r}
return function(n){return n.position=new l(e),a(),n}}function l(e){
this.start=e,this.end={line:t,column:r},this.source=n.source}
function u(o){var i=new Error(n.source+':'+t+':'+r+': '+o)
if(i.reason=o,i.filename=n.source,i.line=t,i.column=r,i.source=e,!n.silent)throw i
}function c(n){var t=n.exec(e)
if(t){var r=t[0]
return o(r),e=e.slice(r.length),t}}function a(){c(no)}function s(e){
var n
for(e=e||[];n=f();)!1!==n&&e.push(n)
return e}function f(){var n=i()
if("/"==e.charAt(0)&&"*"==e.charAt(1)){
for(var t=2;uo!=e.charAt(t)&&("*"!=e.charAt(t)||"/"!=e.charAt(t+1));)++t
if(t+=2,uo===e.charAt(t-1))return u('End of comment missing')
var l=e.slice(2,t-2)
return r+=2,o(l),e=e.slice(t),r+=2,n({type:"comment",comment:l})}}
function p(){var e=i(),n=c(to)
if(n){if(f(),!c(ro))return u("property missing ':'")
var t=c(oo),r=e({type:"declaration",property:co(n[0].replace(Gr,uo)),
value:t?co(t[0].replace(Gr,uo)):uo})
return c(io),r}}return l.prototype.content=e,a(),function(){var e,n=[]
for(s(n);e=p();)!1!==e&&(n.push(e),s(n))
return n}()}
var so=function(e,n){var t,r=null
if(!e||'string'!=typeof e)return r
for(var o,i,l=ao(e),u='function'==typeof n,c=0,a=l.length;c<a;c++)o=(t=l[c]).property,
i=t.value,u?n(o,i,t):i&&(r||(r={}),r[o]=i)
return r}
const fo={html:'http://www.w3.org/1999/xhtml',
mathml:'http://www.w3.org/1998/Math/MathML',
svg:'http://www.w3.org/2000/svg',xlink:'http://www.w3.org/1999/xlink',
xml:'http://www.w3.org/XML/1998/namespace',
xmlns:'http://www.w3.org/2000/xmlns/'},po=fo,ho={classId:'classID',
dataType:'datatype',itemId:'itemID',strokeDashArray:'strokeDasharray',
strokeDashOffset:'strokeDashoffset',strokeLineCap:'strokeLinecap',
strokeLineJoin:'strokeLinejoin',strokeMiterLimit:'strokeMiterlimit',
typeOf:'typeof',xLinkActuate:'xlinkActuate',
xLinkArcRole:'xlinkArcrole',xLinkHref:'xlinkHref',
xLinkRole:'xlinkRole',xLinkShow:'xlinkShow',xLinkTitle:'xlinkTitle',
xLinkType:'xlinkType',xmlnsXLink:'xmlnsXlink'
},go={}.hasOwnProperty,mo=it('root'),yo=it('element'),ko=it('text')
function xo(e,n,t){
if('function'!=typeof e)throw new TypeError('h is not a function')
const r=function(e){const n=e('div',{})
return Boolean(n&&('_owner'in n||'_store'in n)&&(void 0===n.key||null===n.key))
}(e),o=function(e){const n=e('div',{})
return Boolean(n&&n.context&&n.context._isVue)}(e),i=function(e){
const n=e('div',{})
return'VirtualNode'===n.type}(e)
let l,u
if('string'==typeof t||'boolean'==typeof t?(l=t,t={}):(t||(t={}),l=t.prefix),mo(n))u=1===n.children.length&&yo(n.children[0])?n.children[0]:{
type:'element',tagName:'div',properties:{},children:n.children}
else{
if(!yo(n))throw new Error('Expected root or element, not `'+(n&&n.type||n)+'`')
u=n}return bo(e,u,{schema:'svg'===t.space?Jr:Zr,
prefix:null==l?r||o||i?'h-':null:'string'==typeof l?l:l?'h-':null,
key:0,react:r,vue:o,vdom:i,hyperscript:wo(e)})}function bo(e,n,t){
const r=t.schema
let o=r,i=n.tagName
const l={},u=[]
let c,a=-1
for(c in'html'===r.space&&'svg'===i.toLowerCase()&&(o=Jr,t.schema=o),n.properties)n.properties&&go.call(n.properties,c)&&vo(l,c,n.properties[c],t,i)
if(t.vdom&&('html'===o.space?i=i.toUpperCase():o.space&&(l.namespace=po[o.space])),
t.prefix&&(t.key++,
l.key=t.prefix+t.key),n.children)for(;++a<n.children.length;){
const r=n.children[a]
yo(r)?u.push(bo(e,r,t)):ko(r)&&u.push(r.value)}
return t.schema=r,u.length>0?e.call(n,i,l,u):e.call(n,i,l)}
function vo(e,n,t,r,o){const i=Xr(r.schema,n)
let l
null==t||'number'==typeof t&&Number.isNaN(t)||!1===t&&(r.vue||r.vdom||r.hyperscript)||!t&&i.boolean&&(r.vue||r.vdom||r.hyperscript)||(Array.isArray(t)&&(t=i.commaSeparated?function(e,n){
const t=n||{}
return(''===e[e.length-1]?[...e,'']:e).join((t.padRight?' ':'')+','+(!1===t.padLeft?'':' ')).trim()
}(t):t.join(' ').trim()),
i.boolean&&r.hyperscript&&(t=''),'style'===i.property&&'string'==typeof t&&(r.react||r.vue||r.vdom)&&(t=function(e,n){
const t={}
try{so(e,((e,n)=>{
'-ms-'===e.slice(0,4)&&(e='ms-'+e.slice(4)),t[e.replace(/-([a-z])/g,((e,n)=>n.toUpperCase()))]=n
}))}catch(e){
throw e.message=n+'[style]'+e.message.slice('undefined'.length),e}
return t
}(t,o)),r.vue?'style'!==i.property&&(l='attrs'):i.mustUseProperty||(r.vdom?'style'!==i.property&&(l='attributes'):r.hyperscript&&(l='attrs')),
l?e[l]=Object.assign(e[l]||{},{[i.attribute]:t
}):i.space&&r.react?e[ho[i.property]||i.property]=t:e[i.attribute]=t)}
function wo(e){return'context'in e&&'cleanup'in e}
const Co={}.hasOwnProperty
var So={}.hasOwnProperty,Ao=function(e,n){const t=n||{}
function r(n,...t){let o=r.invalid
const i=r.handlers
if(n&&Co.call(n,e)){const t=String(n[e])
o=Co.call(i,t)?i[t]:r.unknown}if(o)return o.call(this,n,...t)}
return r.handlers=t.handlers||{},
r.invalid=t.invalid,r.unknown=t.unknown,r}('type',{handlers:{
root:function(e,n){var t={nodeName:'#document',
mode:(e.data||{}).quirksMode?'quirks':'no-quirks',childNodes:[]}
return t.childNodes=Eo(e.children,t,n),Do(e,t)},element:function(e,n){
var t=n.space
return xo((function(t,r){var o,i,l,u,c,a=[]
for(l in r)So.call(r,l)&&!1!==r[l]&&((o=Xr(n,l)).boolean&&!r[l]||(i={
name:l,value:!0===r[l]?'':String(r[l])
},o.space&&'html'!==o.space&&'svg'!==o.space&&((u=l.indexOf(':'))<0?i.prefix='':(i.name=l.slice(u+1),
i.prefix=l.slice(0,u)),i.namespace=fo[o.space]),a.push(i)))
'html'===n.space&&'svg'===e.tagName&&(n=Jr);(c=Do(e,{nodeName:t,
tagName:t,attrs:a,namespaceURI:fo[n.space],childNodes:[],
parentNode:void 0
})).childNodes=Eo(e.children,c,n),'template'===t&&(c.content=function(e,n){
var t={nodeName:'#document-fragment',childNodes:[]}
return t.childNodes=Eo(e.children,t,n),Do(e,t)}(e.content,n))
return c}),Object.assign({},e,{children:[]}),{space:t})},
text:function(e){return Do(e,{nodeName:'#text',value:e.value,
parentNode:void 0})},comment:function(e){return Do(e,{
nodeName:'#comment',data:e.value,parentNode:void 0})},
doctype:function(e){return Do(e,{nodeName:'#documentType',name:'html',
publicId:'',systemId:'',parentNode:void 0})}}})
function Fo(e,n){return Ao(e,'svg'===n?Jr:Zr)}function Eo(e,n,t){
var r,o=-1,i=[]
if(e)for(;++o<e.length;)(r=Ao(e[o],t)).parentNode=n,i.push(r)
return i}function Do(e,n){var t=e.position
return t&&t.start&&t.end&&(n.sourceCodeLocation={
startLine:t.start.line,startCol:t.start.column,
startOffset:t.start.offset,endLine:t.end.line,endCol:t.end.column,
endOffset:t.end.offset}),n}const Lo={parse:function(e){
Object.assign(this,{Parser:n=>{const t=this.data('settings')
return wn(n,Object.assign({},t,e,{
extensions:this.data('micromarkExtensions')||[],
mdastExtensions:this.data('fromMarkdownExtensions')||[]}))}})},
gfm:function(e={}){const n=this.data()
function t(e,t){(n[e]?n[e]:n[e]=[]).push(t)}
t('micromarkExtensions',function(e){return U([Mn,{document:{91:{
tokenize:Yn,continuation:{tokenize:Kn},exit:Zn}},text:{91:{tokenize:Xn
},93:{add:'after',tokenize:$n,resolveTo:Qn}}},Jn(e),Gn,tt])
}(e)),t('fromMarkdownExtensions',[gt,{enter:{
gfmFootnoteDefinition:function(e){this.enter({
type:'footnoteDefinition',identifier:'',label:'',children:[]},e)},
gfmFootnoteDefinitionLabelString:function(){this.buffer()},
gfmFootnoteCall:function(e){this.enter({type:'footnoteReference',
identifier:'',label:''},e)},gfmFootnoteCallString:function(){
this.buffer()}},exit:{gfmFootnoteDefinition:function(e){this.exit(e)},
gfmFootnoteDefinitionLabelString:function(e){
const n=this.resume(),t=this.stack[this.stack.length-1]
t.label=n,t.identifier=Ie(this.sliceSerialize(e)).toLowerCase()},
gfmFootnoteCall:function(e){this.exit(e)},
gfmFootnoteCallString:function(e){
const n=this.resume(),t=this.stack[this.stack.length-1]
t.label=n,t.identifier=Ie(this.sliceSerialize(e)).toLowerCase()}}
},zt,Nt,$t]),t('toMarkdownExtensions',function(e){return{
extensions:[mt,Ot(),Mt,qt(e),Qt]}}(e))},rehype:yr}
export{Lo as Remark,D as Unified,Fo as toParse5,nr as unistVisit}
