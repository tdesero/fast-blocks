!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=13)}([function(e,t){e.exports=window.wp.element},function(e,t,n){e.exports=n(10)()},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.React},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r}));var o=function(){return"undefined"!=typeof window?window:e},r=function(){var e=o();return e&&e.tinymce?e.tinymce:null}}).call(this,n(12))},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.serverSideRender},function(e,t){e.exports=window.wp.compose},function(e,t,n){"use strict";var o=n(11);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,l){if(l!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var o=n(7),r=n(0),i=n(3),l=n(2),a=n(8),c=n.n(a),s=n(4);const u=({label:e,onSelect:t,onRemove:n,value:o})=>Object(r.createElement)(i.MediaUploadCheck,null,Object(r.createElement)(i.MediaUpload,{onSelect:e=>{console.log(e),t({id:e.id,sizes:e.sizes,url:e.url,alt:e.alt,title:e.title,description:e.description,caption:e.caption})},allowedTypes:["image"],value:o,render:({open:t})=>Object(r.createElement)(l.BaseControl,null,Object(r.createElement)(l.BaseControl,{label:e}),o&&o.url?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("img",{onClick:t,src:o.url,style:{width:"150px",height:"150px",objectFit:"cover",marginRight:"10px",background:"white"}}),Object(r.createElement)(l.Button,{onClick:n,isSecondary:!0},Object(s.__)("Remove image"))):Object(r.createElement)(l.Button,{onClick:t,isPrimary:!0},Object(s.__)("Open Media Library")))}));var d,p,f=n(9),b=n(5),h=n(1),m=function(){return(m=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},v={onActivate:h.func,onAddUndo:h.func,onBeforeAddUndo:h.func,onBeforeExecCommand:h.func,onBeforeGetContent:h.func,onBeforeRenderUI:h.func,onBeforeSetContent:h.func,onBeforePaste:h.func,onBlur:h.func,onChange:h.func,onClearUndos:h.func,onClick:h.func,onContextMenu:h.func,onCopy:h.func,onCut:h.func,onDblclick:h.func,onDeactivate:h.func,onDirty:h.func,onDrag:h.func,onDragDrop:h.func,onDragEnd:h.func,onDragGesture:h.func,onDragOver:h.func,onDrop:h.func,onExecCommand:h.func,onFocus:h.func,onFocusIn:h.func,onFocusOut:h.func,onGetContent:h.func,onHide:h.func,onInit:h.func,onKeyDown:h.func,onKeyPress:h.func,onKeyUp:h.func,onLoadContent:h.func,onMouseDown:h.func,onMouseEnter:h.func,onMouseLeave:h.func,onMouseMove:h.func,onMouseOut:h.func,onMouseOver:h.func,onMouseUp:h.func,onNodeChange:h.func,onObjectResizeStart:h.func,onObjectResized:h.func,onObjectSelected:h.func,onPaste:h.func,onPostProcess:h.func,onPostRender:h.func,onPreProcess:h.func,onProgressState:h.func,onRedo:h.func,onRemove:h.func,onReset:h.func,onSaveContent:h.func,onSelectionChange:h.func,onSetAttrib:h.func,onSetContent:h.func,onShow:h.func,onSubmit:h.func,onUndo:h.func,onVisualAid:h.func},y=m({apiKey:h.string,id:h.string,inline:h.bool,init:h.object,initialValue:h.string,onEditorChange:h.func,outputFormat:h.oneOf(["html","text"]),value:h.string,tagName:h.string,cloudChannel:h.string,plugins:h.oneOfType([h.string,h.array]),toolbar:h.oneOfType([h.string,h.array]),disabled:h.bool,textareaName:h.string,tinymceScriptSrc:h.string,scriptLoading:h.shape({async:h.bool,defer:h.bool,delay:h.number})},v),g=function(e){return"function"==typeof e},O=function(e){return e in v},j=function(e){return e.substr(2)},C=function(e,t,n,o,r){return function(t,n,o,r,i,l,a){var c=Object.keys(i).filter(O),s=Object.keys(l).filter(O),u=c.filter((function(e){return void 0===l[e]})),d=s.filter((function(e){return void 0===i[e]}));u.forEach((function(e){var t=j(e),n=a[t];o(t,n),delete a[t]})),d.forEach((function(o){var r=function(t,n){return function(o){var r;return null===(r=t(n))||void 0===r?void 0:r(o,e)}}(t,o),i=j(o);a[i]=r,n(i,r)}))}(r,e.on.bind(e),e.off.bind(e),0,t,n,o)},E=0,k=function(e){var t=Date.now();return e+"_"+Math.floor(1e9*Math.random())+ ++E+String(t)},w=function(e){return null!==e&&("textarea"===e.tagName.toLowerCase()||"input"===e.tagName.toLowerCase())},_=function(e){return void 0===e||""===e?[]:Array.isArray(e)?e:e.split(" ")},B=function(){return{listeners:[],scriptId:k("tiny-script"),scriptLoading:!1,scriptLoaded:!1}},x=(d=B(),{load:function(e,t,n,o,r,i){var l=function(){return function(e,t,n,o,r,i){var l=t.createElement("script");l.referrerPolicy="origin",l.type="application/javascript",l.id=e,l.src=n,l.async=o,l.defer=r;var a=function(){l.removeEventListener("load",a),d.listeners.forEach((function(e){return e()})),d.scriptLoaded=!0};l.addEventListener("load",a),t.head&&t.head.appendChild(l)}(d.scriptId,e,t,n,o)};d.scriptLoaded?i():(d.listeners.push(i),d.scriptLoading||(d.scriptLoading=!0,r>0?setTimeout(l,r):l()))},reinitialize:function(){d=B()}}),S=n(6),T=(p=function(e,t){return(p=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}p(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}),P=function(){return(P=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},I=function(){var e,t,n;return(null===(n=null===(t=null===(e=Object(S.a)())||void 0===e?void 0:e.Env)||void 0===t?void 0:t.browser)||void 0===n?void 0:n.isIE())?"change keyup compositionend setcontent":"change input compositionend setcontent"},F=function(){return window.InputEvent&&"function"==typeof InputEvent.prototype.getTargetRanges?"beforeinput SelectionChange":"SelectionChange"},R=function(e){function t(t){var n,o,r,i=e.call(this,t)||this;return i.rollbackTimer=void 0,i.valueCursor=void 0,i.rollbackChange=function(){var e=i.editor,t=i.props.value;e&&t&&t!==i.currentContent&&e.undoManager.ignore((function(){if(e.setContent(t),i.valueCursor&&(!i.inline||e.hasFocus()))try{e.selection.moveToBookmark(i.valueCursor)}catch(e){}})),i.rollbackTimer=void 0},i.handleBeforeInput=function(e){if(void 0!==i.props.value&&i.props.value===i.currentContent&&i.editor&&(!i.inline||i.editor.hasFocus))try{i.valueCursor=i.editor.selection.getBookmark(3)}catch(e){}},i.handleBeforeInputSpecial=function(e){"Enter"!==e.key&&"Backspace"!==e.key&&"Delete"!==e.key||i.handleBeforeInput(e)},i.handleEditorChange=function(e){var t=i.editor;if(t&&t.initialized){var n=t.getContent();if(void 0!==i.props.value&&i.props.value!==n&&(i.rollbackTimer||(i.rollbackTimer=window.setTimeout(i.rollbackChange,200))),n!==i.currentContent&&(i.currentContent=n,g(i.props.onEditorChange))){var o=i.props.outputFormat,r="html"===o?n:t.getContent({format:o});i.props.onEditorChange(r,t)}}},i.handleEditorChangeSpecial=function(e){"Backspace"!==e.key&&"Delete"!==e.key||i.handleEditorChange(e)},i.initialise=function(e){var t,n,o;void 0===e&&(e=0);var r=i.elementRef.current;if(r)if(function(e){for(var t=e,n=e.parentNode;null!=n;)n=(t=n).parentNode;return t===e.ownerDocument}(r)){var l=Object(S.a)();if(!l)throw new Error("tinymce should have been loaded into global scope");var a,c,s=P(P({},i.props.init),{selector:void 0,target:r,readonly:i.props.disabled,inline:i.inline,plugins:(a=null===(t=i.props.init)||void 0===t?void 0:t.plugins,c=i.props.plugins,_(a).concat(_(c))),toolbar:null!==(n=i.props.toolbar)&&void 0!==n?n:null===(o=i.props.init)||void 0===o?void 0:o.toolbar,setup:function(e){i.editor=e,i.bindHandlers({}),i.inline&&!w(r)&&e.once("PostRender",(function(t){e.setContent(i.getInitialValue(),{no_events:!0})})),i.props.init&&g(i.props.init.setup)&&i.props.init.setup(e)},init_instance_callback:function(e){var t,n,o=i.getInitialValue();i.currentContent=null!==(t=i.currentContent)&&void 0!==t?t:e.getContent(),i.currentContent!==o&&(i.currentContent=o,e.setContent(o),e.undoManager.clear(),e.undoManager.add(),e.setDirty(!1));var r=null!==(n=i.props.disabled)&&void 0!==n&&n;e.setMode(r?"readonly":"design"),i.props.init&&g(i.props.init.init_instance_callback)&&i.props.init.init_instance_callback(e)}});i.inline||(r.style.visibility=""),w(r)&&(r.value=i.getInitialValue()),l.init(s)}else if(0===e)setTimeout((function(){return i.initialise(1)}),1);else{if(!(e<11))throw new Error("tinymce can only be initialised when in a document");setTimeout((function(){return i.initialise(e+1)}),100)}},i.id=i.props.id||k("tiny-react"),i.elementRef=b.createRef(),i.inline=null!==(r=null!==(n=i.props.inline)&&void 0!==n?n:null===(o=i.props.init)||void 0===o?void 0:o.inline)&&void 0!==r&&r,i.boundHandlers={},i}return T(t,e),t.prototype.componentDidUpdate=function(e){var t,n,o=this;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(e),this.editor.initialized)){if(this.currentContent=null!==(t=this.currentContent)&&void 0!==t?t:this.editor.getContent(),"string"==typeof this.props.initialValue&&this.props.initialValue!==e.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if("string"==typeof this.props.value&&this.props.value!==this.currentContent){var r=this.editor;r.undoManager.transact((function(){var e;if(!o.inline||r.hasFocus())try{e=r.selection.getBookmark(3)}catch(e){}var t=o.valueCursor;if(r.setContent(o.props.value),!o.inline||r.hasFocus())for(var n=0,i=[e,t];n<i.length;n++){var l=i[n];if(l)try{r.selection.moveToBookmark(l),o.valueCursor=l;break}catch(e){}}}))}if(this.props.disabled!==e.disabled){var i=null!==(n=this.props.disabled)&&void 0!==n&&n;this.editor.setMode(i?"readonly":"design")}}},t.prototype.componentDidMount=function(){var e,t,n,o,r,i;null!==Object(S.a)()?this.initialise():this.elementRef.current&&this.elementRef.current.ownerDocument&&x.load(this.elementRef.current.ownerDocument,this.getScriptSrc(),null!==(t=null===(e=this.props.scriptLoading)||void 0===e?void 0:e.async)&&void 0!==t&&t,null!==(o=null===(n=this.props.scriptLoading)||void 0===n?void 0:n.defer)&&void 0!==o&&o,null!==(i=null===(r=this.props.scriptLoading)||void 0===r?void 0:r.delay)&&void 0!==i?i:0,this.initialise)},t.prototype.componentWillUnmount=function(){var e=this,t=this.editor;t&&(t.off(I(),this.handleEditorChange),t.off(F(),this.handleBeforeInput),t.off("keypress",this.handleEditorChangeSpecial),t.off("keydown",this.handleBeforeInputSpecial),t.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach((function(n){t.off(n,e.boundHandlers[n])})),this.boundHandlers={},t.remove(),this.editor=void 0)},t.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},t.prototype.renderInline=function(){var e=this.props.tagName,t=void 0===e?"div":e;return b.createElement(t,{ref:this.elementRef,id:this.id})},t.prototype.renderIframe=function(){return b.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},t.prototype.getScriptSrc=function(){if("string"==typeof this.props.tinymceScriptSrc)return this.props.tinymceScriptSrc;var e=this.props.cloudChannel;return"https://cdn.tiny.cloud/1/"+(this.props.apiKey?this.props.apiKey:"no-api-key")+"/tinymce/"+e+"/tinymce.min.js"},t.prototype.getInitialValue=function(){return"string"==typeof this.props.initialValue?this.props.initialValue:"string"==typeof this.props.value?this.props.value:""},t.prototype.bindHandlers=function(e){var t=this;if(void 0!==this.editor){C(this.editor,e,this.props,this.boundHandlers,(function(e){return t.props[e]}));var n=function(e){return void 0!==e.onEditorChange||void 0!==e.value},o=n(e),r=n(this.props);!o&&r?(this.editor.on(I(),this.handleEditorChange),this.editor.on(F(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):o&&!r&&(this.editor.off(I(),this.handleEditorChange),this.editor.off(F(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},t.propTypes=y,t.defaultProps={cloudChannel:"5"},t}(b.Component),N={checkbox:function({value:e,label:t,setFieldAttributes:n}){return Object(r.createElement)(l.CheckboxControl,{label:t,onChange:n,checked:e})},toggle:function({value:e,label:t,setFieldAttributes:n}){return Object(r.createElement)(l.ToggleControl,{label:t,onChange:n,checked:e})},text:function({value:e,label:t,setFieldAttributes:n}){return Object(r.createElement)(l.TextControl,{label:t,value:e,onChange:n})},email:function({value:e,label:t,setFieldAttributes:n}){const[o,i]=Object(r.useState)(!0);return Object(r.createElement)(l.TextControl,{type:"email",className:o?"":"components-base-control--error",label:t,value:e,onChange:n,onFocus:e=>{e.target.reportValidity()},onBlur:e=>{const t=e.target.checkValidity();i(t)}})},textarea:function({value:e,label:t,setFieldAttributes:n}){return Object(r.createElement)(l.TextareaControl,{label:t,value:e,onChange:n})},number:function({value:e,label:t,setFieldAttributes:n}){return Object(r.createElement)(l.TextControl,{type:"number",label:t,value:e,onChange:n})},range:function({value:e,field:t,label:n,setFieldAttributes:o}){return Object(r.createElement)(l.RangeControl,{label:n,value:e,onChange:o,step:t.step,min:t.min,max:t.max})},select:function({value:e,field:t,label:n,setFieldAttributes:o}){return Object(r.createElement)(l.SelectControl,{label:n,value:e,onChange:o,options:t.options})},image:function({label:e,value:t,setFieldAttributes:n,removeFieldAttributes:o}){return Object(r.createElement)(u,{onSelect:n,onRemove:o,value:t,label:e})},richText:function({value:e,label:t,setFieldAttributes:n}){return Object(r.createElement)(l.BaseControl,null,Object(r.createElement)("label",{className:"fbl_url-input__label"},t),Object(r.createElement)(i.RichText,{className:"fbl_rich-text",value:e,onChange:n,placeholder:Object(s.__)("Add text…"),inlineToolbar:!0}))},url:function({value:e,label:t,setFieldAttributes:n}){return Object(r.createElement)(l.BaseControl,{className:"fbl_url-input"},Object(r.createElement)("label",{className:"fbl_url-input__label"},t),Object(r.createElement)(i.URLInputButton,{url:e,onChange:n}),Object(r.createElement)("small",{className:"fbl_url-input__url"},e))},date:function({value:e,label:t,setFieldAttributes:n}){const o=Object(f.withState)({isVisible:!1})(({isVisible:t,setState:n,children:o})=>Object(r.createElement)("div",{style:{position:"relative"}},Object(r.createElement)(l.Button,{isSecondary:!0,onClick:t?null:()=>{n(()=>({isVisible:!0}))}},e?new Date(e).toLocaleString():Object(s.__)("Date")),t&&Object(r.createElement)(l.Popover,{onClose:()=>{n(()=>({isVisible:!1}))},position:"bottom left"},o)));return Object(r.createElement)(l.BaseControl,{className:"fbl_url-input"},Object(r.createElement)(l.BaseControl,{className:"fbl_url-input__label",label:t}),Object(r.createElement)(o,null,Object(r.createElement)("div",{style:{padding:10}},Object(r.createElement)(l.DateTimePicker,{currentDate:e,onChange:n}))))},classicEditor:({value:e,label:t,setFieldAttributes:n})=>Object(r.createElement)(l.BaseControl,null,Object(r.createElement)(l.BaseControl,{label:t}),Object(r.createElement)(R,{onEditorChange:e=>{n(e)},value:e,plugins:"lists",init:{height:300,menubar:!1,branding:!1,toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"}}))},A=({children:e,width:t})=>{const n=100*parseFloat(t);return Object(r.createElement)("div",{style:{width:n+"%"}},e)};function D(e,t,n){const{attributes:o,setAttributes:a}=e,c=e=>{a({[t]:e})},u=()=>{c(void 0)};if("repeater"!==n.input){const e=N[n.input],a=()=>Object(r.createElement)(e,{setFieldAttributes:c,removeFieldAttributes:u,field:n,label:n.label,value:o[t]});if(void 0===e)return void(n.input&&console.error(n.input+" Input does not exist inside field "+t));const s=n.width||1;return"inspector"===n.location?Object(r.createElement)(i.InspectorControls,null,Object(r.createElement)(l.PanelBody,null,a())):Object(r.createElement)(A,{width:s},a())}if("repeater"===n.input)return function({field:e,setAttributes:t,fieldName:n,attributes:o,props:i}){const a=e=>e===o[n].length-1,c=e=>0===e;return Object(r.createElement)(l.BaseControl,{className:"fbl_repeater-inputs"},Object(r.createElement)(l.BaseControl,{label:e.label}),Object(r.createElement)(l.Panel,null,o[n].map((u,d)=>Object(r.createElement)(l.PanelBody,{key:u.fastBlockId?`${n}_${u.fastBlockId}`:`${n}_${d}`,title:e.single?`${e.single} ${d+1}`:`Repeater ${Object(s.__)("Item")} ${d+1}`,initialOpen:!1,buttonProps:{style:{padding:"16px"}}},Object(r.createElement)(l.PanelRow,null,Object(r.createElement)(l.ButtonGroup,null,Object(r.createElement)(l.Button,{onClick:()=>{(e=>{if(c(e))return;const r=[...o[n]],i=r[e];r[e]=r[e-1],r[e-1]=i,t({[n]:r})})(d)},isSmall:!0,isSecondary:!0,disabled:c(d)},Object(s.__)("Move up")),Object(r.createElement)(l.Button,{onClick:()=>{(e=>{if(a(e))return;const r=[...o[n]],i=r[e];r[e]=r[e+1],r[e+1]=i,t({[n]:r})})(d)},isSmall:!0,isSecondary:!0,disabled:a(d)},Object(s.__)("Move down")),Object(r.createElement)(l.Button,{onClick:()=>{(e=>{const r=[...o[n]];r.splice(e,1),t({[n]:r})})(d)},isSmall:!0,isDestructive:!0},Object(s.__)("Remove item")))),Object.entries(u).map(([t])=>{if(e.query[t])return function({props:e,fieldName:t,field:n,subFieldName:o,subField:i,key:l}){const{attributes:a,setAttributes:c}=e,s=e=>{const n=a[t].slice(0,l),r=a[t].slice(l+1);c({[t]:[...n,{...a[t][l],[o]:e},...r]})},u=N[i.input];return Object(r.createElement)(u,{setFieldAttributes:s,removeFieldAttributes:()=>{s(void 0)},field:i,label:i.label,value:a[t][l][o]})}({props:i,fieldName:n,field:e,subFieldName:t,subField:e.query[t],key:d})})))),(!e.limit||e.limit>o[n].length)&&Object(r.createElement)(l.Button,{onClick:()=>{const r={};Object.entries(e.query).forEach(([e,t])=>{r[e]=t.default}),r.fastBlockId=(new Date).valueOf(),console.log(r),t({[n]:[...o[n],r]})},style:{width:"100%",justifyContent:"center"},isSecondary:!0},"+"))}({field:n,setAttributes:a,fieldName:t,attributes:o,props:e})}function M({title:e,fields:t,EditProps:n,onClose:o}){return Object(r.createElement)(l.Popover,{position:"middle center",onClose:o},Object(r.createElement)(l.Card,{className:"fbl_card",size:"small",style:{width:600}},Object(r.createElement)(l.CardHeader,{className:"fbl_block-title"},"Block: ",e),Object(r.createElement)(l.CardBody,{style:{padding:"16px 14px"}},Object.entries(t).map(([e,t])=>D(n,e,t)))))}const V=({children:e,fields:t})=>({attributes:n})=>e?Object(r.createElement)(i.InnerBlocks.Content,null):Object(r.createElement)("div",null,Object.entries(t).map(([e,t])=>{switch(t.input){case"text":case"textarea":if("string"==typeof t.selector){const o=t.selector;return Object(r.createElement)(o,null,n[e])}return Object(r.createElement)("p",null,n[e]);case"image":return Object(r.createElement)("img",{src:"object"==typeof n[e]&&n[e].url,alt:"object"==typeof n[e]&&n[e].alt});case"richText":return Object(r.createElement)(i.RichText.Content,{tagName:"p",value:n[e]});default:return null}})),L=({attributes:e,children:t,fields:n,settings:o})=>[{attributes:e,...o,save:V({children:t,fields:n}),apiVersion:1}];Object.values(fastBlockBlocks).forEach(e=>{!function(e){const{name:t,settings:n,children:a}=e,s=e.fields||[],u={};for(const[e,t]of Object.entries(s)){const n={};n.type=t.type,n.default=t.default,u[e]=n}const d={apiVersion:2,edit:function({settings:e,name:t,children:n,fields:o,editWidth:a,editView:s}){return u=>{const{attributes:d,isSelected:p}=u,[f,b]=Object(r.useState)(0),h=Object(i.useBlockProps)({style:{width:100*a+"%"}}),m=e&&e.title?e.title:t,[v,y]=Object(r.useState)(!1),g="popover"===s||"inspector"===s;return Object(r.createElement)("div",h,Object(r.createElement)("div",{className:"fbl_editor-block",style:{minHeight:f},onMouseDown:e=>{if(p)return;e.currentTarget.style.minHeight=null;const t=e.currentTarget.offsetHeight;e.currentTarget.style.minHeight=t+"px",b(t)},onBlur:()=>{b(0)}},p&&!g||n?Object(r.createElement)(l.Card,{className:"fbl_card",size:"small"},Object(r.createElement)(l.CardHeader,{className:"fbl_block-title"},"Block: ",m),Object(r.createElement)(l.CardBody,{style:{padding:"16px 14px"}},Object.entries(o).map(([e,t])=>D(u,e,t)),n&&Object(r.createElement)("div",{style:{border:"1px dashed #ddd",padding:0,borderRadius:2}},Object(r.createElement)(i.InnerBlocks,{allowedBlocks:n,orientation:"horizontal",renderAppender:i.InnerBlocks.ButtonBlockAppender})))):Object(r.createElement)("div",{onClick:()=>{y(()=>!0)},style:{border:"1px dashed #ddd",padding:0,minHeight:50}},p&&"popover"===s&&v&&Object(r.createElement)(M,{title:m,fields:o,EditProps:u,onClose:()=>{y(()=>!1)}}),Object(r.createElement)(c.a,{block:t,attributes:{...d},httpMethod:"POST"}),p&&"inspector"===s&&Object(r.createElement)(i.InspectorControls,null,Object(r.createElement)(l.PanelBody,null,Object.entries(o).map(([e,t])=>D(u,e,t)))))))}}({fields:s,...e}),save:function({children:e,fields:t}){return({attributes:n,className:o})=>{const l=i.useBlockProps.save({className:o});return e?Object(r.createElement)(i.InnerBlocks.Content,null):Object(r.createElement)("div",l,Object.entries(t).map(([e,t])=>{switch(t.input){case"text":case"textarea":if("string"==typeof t.selector){const o=t.selector;return Object(r.createElement)(o,null,n[e])}return Object(r.createElement)("p",null,n[e]);case"image":return Object(r.createElement)("img",{src:"object"==typeof n[e]&&n[e].url,alt:"object"==typeof n[e]&&n[e].alt});case"richText":case"classicEditor":return Object(r.createElement)(i.RichText.Content,{value:n[e]});default:return null}}))}}({children:a,fields:s}),title:t,...n,attributes:u,deprecated:L({attributes:u,children:a,fields:s,settings:n})};Object(o.registerBlockType)(t,d)}(e)})}]);