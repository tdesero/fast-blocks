!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=17)}([function(e,t){e.exports=window.wp.element},function(e,t,n){e.exports=n(13)()},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.primitives},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=window.React},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var r=function(){return"undefined"!=typeof window?window:e},o=function(){var e=r();return e&&e.tinymce?e.tinymce:null}}).call(this,n(15))},,function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.serverSideRender},function(e,t){e.exports=window.wp.compose},function(e,t,n){"use strict";var r=n(14);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,l){if(l!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=window.wp.tinymce},function(e,t,n){"use strict";n.r(t);var r=n(10),o=n(0),i=n(3),l=n(2),c=n(11),a=n.n(c),s=n(4);function u(e=""){return function(e){return e.replace(/<[^>]*>?/gm,"")}(e).split("").length}var d=n(5),p=Object(o.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(d.Path,{d:"M20 5h-5.7c0-1.3-1-2.3-2.3-2.3S9.7 3.7 9.7 5H4v2h1.5v.3l1.7 11.1c.1 1 1 1.7 2 1.7h5.7c1 0 1.8-.7 2-1.7l1.7-11.1V7H20V5zm-3.2 2l-1.7 11.1c0 .1-.1.2-.3.2H9.1c-.1 0-.3-.1-.3-.2L7.2 7h9.6z"}));const f=({label:e,onSelect:t,onRemove:n,value:r})=>Object(o.createElement)(i.MediaUploadCheck,null,Object(o.createElement)(i.MediaUpload,{onSelect:e=>{console.log(e),t({id:e.id,sizes:e.sizes,url:e.url,alt:e.alt,title:e.title,description:e.description,caption:e.caption})},allowedTypes:["image"],value:r,render:({open:t})=>Object(o.createElement)(l.BaseControl,null,Object(o.createElement)(l.BaseControl,{label:e}),r&&r.url?Object(o.createElement)("div",{className:"fbl_img-preview-box"},Object(o.createElement)("img",{onClick:t,src:r.url,className:"fbl_img-preview-box__img"}),Object(o.createElement)(l.Button,{className:"fbl_img-preview-box__btn",isPrimary:!0,isDestructive:!0,onClick:n,icon:p})):Object(o.createElement)(l.Button,{onClick:t,isPrimary:!0},Object(s.__)("Open Media Library")))})),b=({label:e,onSelect:t,onRemove:n,value:r})=>Object(o.createElement)(i.MediaUploadCheck,null,Object(o.createElement)(i.MediaUpload,{onSelect:e=>{console.log(e),t({filename:e.filename,id:e.id,sizes:e.sizes,url:e.url,alt:e.alt,title:e.title,description:e.description,caption:e.caption})},value:r,render:({open:t})=>Object(o.createElement)(l.BaseControl,null,Object(o.createElement)(l.BaseControl,{label:e}),r?Object(o.createElement)("div",{style:{display:"inline-flex"}},Object(o.createElement)(l.Button,{isSecondary:!0,isOutline:!0,onClick:t},r.filename),Object(o.createElement)(l.Button,{isPrimary:!0,isDestructive:!0,onClick:n,icon:p})):Object(o.createElement)(l.Button,{onClick:t,isPrimary:!0},Object(s.__)("Open Media Library")))}));var m,h,v=n(12),g=n(7),y=n(1),O=function(){return(O=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},j={onActivate:y.func,onAddUndo:y.func,onBeforeAddUndo:y.func,onBeforeExecCommand:y.func,onBeforeGetContent:y.func,onBeforeRenderUI:y.func,onBeforeSetContent:y.func,onBeforePaste:y.func,onBlur:y.func,onChange:y.func,onClearUndos:y.func,onClick:y.func,onContextMenu:y.func,onCopy:y.func,onCut:y.func,onDblclick:y.func,onDeactivate:y.func,onDirty:y.func,onDrag:y.func,onDragDrop:y.func,onDragEnd:y.func,onDragGesture:y.func,onDragOver:y.func,onDrop:y.func,onExecCommand:y.func,onFocus:y.func,onFocusIn:y.func,onFocusOut:y.func,onGetContent:y.func,onHide:y.func,onInit:y.func,onKeyDown:y.func,onKeyPress:y.func,onKeyUp:y.func,onLoadContent:y.func,onMouseDown:y.func,onMouseEnter:y.func,onMouseLeave:y.func,onMouseMove:y.func,onMouseOut:y.func,onMouseOver:y.func,onMouseUp:y.func,onNodeChange:y.func,onObjectResizeStart:y.func,onObjectResized:y.func,onObjectSelected:y.func,onPaste:y.func,onPostProcess:y.func,onPostRender:y.func,onPreProcess:y.func,onProgressState:y.func,onRedo:y.func,onRemove:y.func,onReset:y.func,onSaveContent:y.func,onSelectionChange:y.func,onSetAttrib:y.func,onSetContent:y.func,onShow:y.func,onSubmit:y.func,onUndo:y.func,onVisualAid:y.func},E=O({apiKey:y.string,id:y.string,inline:y.bool,init:y.object,initialValue:y.string,onEditorChange:y.func,outputFormat:y.oneOf(["html","text"]),value:y.string,tagName:y.string,cloudChannel:y.string,plugins:y.oneOfType([y.string,y.array]),toolbar:y.oneOfType([y.string,y.array]),disabled:y.bool,textareaName:y.string,tinymceScriptSrc:y.string,scriptLoading:y.shape({async:y.bool,defer:y.bool,delay:y.number})},j),C=function(e){return"function"==typeof e},w=function(e){return e in j},k=function(e){return e.substr(2)},B=function(e,t,n,r,o){return function(t,n,r,o,i,l,c){var a=Object.keys(i).filter(w),s=Object.keys(l).filter(w),u=a.filter((function(e){return void 0===l[e]})),d=s.filter((function(e){return void 0===i[e]}));u.forEach((function(e){var t=k(e),n=c[t];r(t,n),delete c[t]})),d.forEach((function(r){var o=function(t,n){return function(r){var o;return null===(o=t(n))||void 0===o?void 0:o(r,e)}}(t,r),i=k(r);c[i]=o,n(i,o)}))}(o,e.on.bind(e),e.off.bind(e),0,t,n,r)},_=0,x=function(e){var t=Date.now();return e+"_"+Math.floor(1e9*Math.random())+ ++_+String(t)},S=function(e){return null!==e&&("textarea"===e.tagName.toLowerCase()||"input"===e.tagName.toLowerCase())},P=function(e){return void 0===e||""===e?[]:Array.isArray(e)?e:e.split(" ")},T=function(){return{listeners:[],scriptId:x("tiny-script"),scriptLoading:!1,scriptLoaded:!1}},N=(m=T(),{load:function(e,t,n,r,o,i){var l=function(){return function(e,t,n,r,o,i){var l=t.createElement("script");l.referrerPolicy="origin",l.type="application/javascript",l.id=e,l.src=n,l.async=r,l.defer=o;var c=function(){l.removeEventListener("load",c),m.listeners.forEach((function(e){return e()})),m.scriptLoaded=!0};l.addEventListener("load",c),t.head&&t.head.appendChild(l)}(m.scriptId,e,t,n,r)};m.scriptLoaded?i():(m.listeners.push(i),m.scriptLoading||(m.scriptLoading=!0,o>0?setTimeout(l,o):l()))},reinitialize:function(){m=T()}}),L=n(8),F=(h=function(e,t){return(h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function __(){this.constructor=e}h(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}),I=function(){return(I=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},A=function(){var e,t,n;return(null===(n=null===(t=null===(e=Object(L.a)())||void 0===e?void 0:e.Env)||void 0===t?void 0:t.browser)||void 0===n?void 0:n.isIE())?"change keyup compositionend setcontent":"change input compositionend setcontent"},M=function(){return window.InputEvent&&"function"==typeof InputEvent.prototype.getTargetRanges?"beforeinput SelectionChange":"SelectionChange"},R=function(e){function t(t){var n,r,o,i=e.call(this,t)||this;return i.rollbackTimer=void 0,i.valueCursor=void 0,i.rollbackChange=function(){var e=i.editor,t=i.props.value;e&&t&&t!==i.currentContent&&e.undoManager.ignore((function(){if(e.setContent(t),i.valueCursor&&(!i.inline||e.hasFocus()))try{e.selection.moveToBookmark(i.valueCursor)}catch(e){}})),i.rollbackTimer=void 0},i.handleBeforeInput=function(e){if(void 0!==i.props.value&&i.props.value===i.currentContent&&i.editor&&(!i.inline||i.editor.hasFocus))try{i.valueCursor=i.editor.selection.getBookmark(3)}catch(e){}},i.handleBeforeInputSpecial=function(e){"Enter"!==e.key&&"Backspace"!==e.key&&"Delete"!==e.key||i.handleBeforeInput(e)},i.handleEditorChange=function(e){var t=i.editor;if(t&&t.initialized){var n=t.getContent();if(void 0!==i.props.value&&i.props.value!==n&&(i.rollbackTimer||(i.rollbackTimer=window.setTimeout(i.rollbackChange,200))),n!==i.currentContent&&(i.currentContent=n,C(i.props.onEditorChange))){var r=i.props.outputFormat,o="html"===r?n:t.getContent({format:r});i.props.onEditorChange(o,t)}}},i.handleEditorChangeSpecial=function(e){"Backspace"!==e.key&&"Delete"!==e.key||i.handleEditorChange(e)},i.initialise=function(e){var t,n,r;void 0===e&&(e=0);var o=i.elementRef.current;if(o)if(function(e){for(var t=e,n=e.parentNode;null!=n;)n=(t=n).parentNode;return t===e.ownerDocument}(o)){var l=Object(L.a)();if(!l)throw new Error("tinymce should have been loaded into global scope");var c,a,s=I(I({},i.props.init),{selector:void 0,target:o,readonly:i.props.disabled,inline:i.inline,plugins:(c=null===(t=i.props.init)||void 0===t?void 0:t.plugins,a=i.props.plugins,P(c).concat(P(a))),toolbar:null!==(n=i.props.toolbar)&&void 0!==n?n:null===(r=i.props.init)||void 0===r?void 0:r.toolbar,setup:function(e){i.editor=e,i.bindHandlers({}),i.inline&&!S(o)&&e.once("PostRender",(function(t){e.setContent(i.getInitialValue(),{no_events:!0})})),i.props.init&&C(i.props.init.setup)&&i.props.init.setup(e)},init_instance_callback:function(e){var t,n,r=i.getInitialValue();i.currentContent=null!==(t=i.currentContent)&&void 0!==t?t:e.getContent(),i.currentContent!==r&&(i.currentContent=r,e.setContent(r),e.undoManager.clear(),e.undoManager.add(),e.setDirty(!1));var o=null!==(n=i.props.disabled)&&void 0!==n&&n;e.setMode(o?"readonly":"design"),i.props.init&&C(i.props.init.init_instance_callback)&&i.props.init.init_instance_callback(e)}});i.inline||(o.style.visibility=""),S(o)&&(o.value=i.getInitialValue()),l.init(s)}else if(0===e)setTimeout((function(){return i.initialise(1)}),1);else{if(!(e<11))throw new Error("tinymce can only be initialised when in a document");setTimeout((function(){return i.initialise(e+1)}),100)}},i.id=i.props.id||x("tiny-react"),i.elementRef=g.createRef(),i.inline=null!==(o=null!==(n=i.props.inline)&&void 0!==n?n:null===(r=i.props.init)||void 0===r?void 0:r.inline)&&void 0!==o&&o,i.boundHandlers={},i}return F(t,e),t.prototype.componentDidUpdate=function(e){var t,n,r=this;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(e),this.editor.initialized)){if(this.currentContent=null!==(t=this.currentContent)&&void 0!==t?t:this.editor.getContent(),"string"==typeof this.props.initialValue&&this.props.initialValue!==e.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if("string"==typeof this.props.value&&this.props.value!==this.currentContent){var o=this.editor;o.undoManager.transact((function(){var e;if(!r.inline||o.hasFocus())try{e=o.selection.getBookmark(3)}catch(e){}var t=r.valueCursor;if(o.setContent(r.props.value),!r.inline||o.hasFocus())for(var n=0,i=[e,t];n<i.length;n++){var l=i[n];if(l)try{o.selection.moveToBookmark(l),r.valueCursor=l;break}catch(e){}}}))}if(this.props.disabled!==e.disabled){var i=null!==(n=this.props.disabled)&&void 0!==n&&n;this.editor.setMode(i?"readonly":"design")}}},t.prototype.componentDidMount=function(){var e,t,n,r,o,i;null!==Object(L.a)()?this.initialise():this.elementRef.current&&this.elementRef.current.ownerDocument&&N.load(this.elementRef.current.ownerDocument,this.getScriptSrc(),null!==(t=null===(e=this.props.scriptLoading)||void 0===e?void 0:e.async)&&void 0!==t&&t,null!==(r=null===(n=this.props.scriptLoading)||void 0===n?void 0:n.defer)&&void 0!==r&&r,null!==(i=null===(o=this.props.scriptLoading)||void 0===o?void 0:o.delay)&&void 0!==i?i:0,this.initialise)},t.prototype.componentWillUnmount=function(){var e=this,t=this.editor;t&&(t.off(A(),this.handleEditorChange),t.off(M(),this.handleBeforeInput),t.off("keypress",this.handleEditorChangeSpecial),t.off("keydown",this.handleBeforeInputSpecial),t.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach((function(n){t.off(n,e.boundHandlers[n])})),this.boundHandlers={},t.remove(),this.editor=void 0)},t.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},t.prototype.renderInline=function(){var e=this.props.tagName,t=void 0===e?"div":e;return g.createElement(t,{ref:this.elementRef,id:this.id})},t.prototype.renderIframe=function(){return g.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},t.prototype.getScriptSrc=function(){if("string"==typeof this.props.tinymceScriptSrc)return this.props.tinymceScriptSrc;var e=this.props.cloudChannel;return"https://cdn.tiny.cloud/1/"+(this.props.apiKey?this.props.apiKey:"no-api-key")+"/tinymce/"+e+"/tinymce.min.js"},t.prototype.getInitialValue=function(){return"string"==typeof this.props.initialValue?this.props.initialValue:"string"==typeof this.props.value?this.props.value:""},t.prototype.bindHandlers=function(e){var t=this;if(void 0!==this.editor){B(this.editor,e,this.props,this.boundHandlers,(function(e){return t.props[e]}));var n=function(e){return void 0!==e.onEditorChange||void 0!==e.value},r=n(e),o=n(this.props);!r&&o?(this.editor.on(A(),this.handleEditorChange),this.editor.on(M(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):r&&!o&&(this.editor.off(A(),this.handleEditorChange),this.editor.off(M(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},t.propTypes=E,t.defaultProps={cloudChannel:"5"},t}(g.Component),D=n(6);n(16);var V={checkbox:function({value:e,label:t,setFieldAttributes:n}){return Object(o.createElement)(l.CheckboxControl,{label:t,onChange:n,checked:e})},toggle:function({value:e,label:t,setFieldAttributes:n}){return Object(o.createElement)(l.ToggleControl,{label:t,onChange:n,checked:e})},text:function({value:e,label:t,setFieldAttributes:n,field:r}){const[i,c]=Object(o.useState)(u(e));Object(o.useEffect)(()=>{c(u(e))});const a=r.charLimit?`${Object(s.__)("Characters")}: ${i} / ${r.charLimit}`:void 0,d=!(r.charLimit&&i>r.charLimit);return Object(o.createElement)(l.TextControl,{className:d?"":"components-base-control--error",label:t,help:a,value:e,onChange:n})},email:function({value:e,label:t,setFieldAttributes:n}){const[r,i]=Object(o.useState)(!0);return Object(o.createElement)(l.TextControl,{type:"email",className:r?"":"components-base-control--error",label:t,value:e,onChange:n,onFocus:e=>{e.target.reportValidity()},onBlur:e=>{const t=e.target.checkValidity();i(t)}})},textarea:function({value:e,label:t,setFieldAttributes:n,field:r}){const[i,c]=Object(o.useState)(u(e));Object(o.useEffect)(()=>{c(u(e))});const a=r.charLimit?`${Object(s.__)("Characters")}: ${i} / ${r.charLimit}`:void 0,d=!(r.charLimit&&i>r.charLimit);return Object(o.createElement)(l.TextareaControl,{className:d?"":"components-base-control--error",label:t,help:a,value:e,onChange:n})},number:function({value:e,label:t,setFieldAttributes:n}){return Object(o.createElement)(l.TextControl,{type:"number",label:t,value:e,onChange:n})},range:function({value:e,field:t,label:n,setFieldAttributes:r}){return Object(o.createElement)(l.RangeControl,{label:n,value:e,onChange:r,step:t.step,min:t.min,max:t.max})},select:function({value:e,field:t,label:n,setFieldAttributes:r}){return Object(o.createElement)(l.SelectControl,{label:n,value:e,onChange:r,options:t.options})},image:function({label:e,value:t,setFieldAttributes:n,removeFieldAttributes:r}){return Object(o.createElement)(f,{onSelect:n,onRemove:r,value:t,label:e})},file:function({label:e,value:t,setFieldAttributes:n,removeFieldAttributes:r}){return Object(o.createElement)(b,{onSelect:n,onRemove:r,value:t,label:e})},richText:function({value:e,label:t,setFieldAttributes:n,field:r}){const[c,a]=Object(o.useState)(u(e));Object(o.useEffect)(()=>{a(u(e))});const d=r.charLimit?`${Object(s.__)("Characters")}: ${c} / ${r.charLimit}`:void 0,p=!(r.charLimit&&c>r.charLimit);return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(l.BaseControl,{className:p?"":"components-base-control--error"},Object(o.createElement)("label",{className:"fbl_url-input__label"},t),Object(o.createElement)(i.RichText,{className:"fbl_rich-text",value:e,allowedFormats:r.allowedFormats,onChange:n,placeholder:Object(s.__)("Add text…"),inlineToolbar:!0})),r.charLimit&&Object(o.createElement)("p",{style:{fontStyle:"normal",color:"rgb(117, 117, 117)",fontSize:12}},d))},url:function({value:e,label:t,setFieldAttributes:n}){return Object(o.createElement)(l.BaseControl,{className:"fbl_url-input"},Object(o.createElement)("label",{className:"fbl_url-input__label"},t),Object(o.createElement)(i.URLInputButton,{url:e,onChange:n}),Object(o.createElement)("small",{className:"fbl_url-input__url"},e))},date:function({value:e,label:t,setFieldAttributes:n}){const r=Object(v.withState)({isVisible:!1})(({isVisible:t,setState:n,children:r})=>Object(o.createElement)("div",{style:{position:"relative"}},Object(o.createElement)(l.Button,{isSecondary:!0,onClick:t?null:()=>{n(()=>({isVisible:!0}))}},e?new Date(e).toLocaleString():Object(s.__)("Date")),t&&Object(o.createElement)(l.Popover,{onClose:()=>{n(()=>({isVisible:!1}))},position:"bottom left"},r)));return Object(o.createElement)(l.BaseControl,{className:"fbl_url-input"},Object(o.createElement)(l.BaseControl,{className:"fbl_url-input__label",label:t}),Object(o.createElement)(r,null,Object(o.createElement)("div",{style:{padding:10}},Object(o.createElement)(l.DateTimePicker,{currentDate:e,onChange:e=>{e||(e=""),n(e)}}))))},classicEditor:({value:e,label:t,setFieldAttributes:n,field:r})=>{const i=Object(D.select)("core/block-editor").getSettings().colors,c=[],[a,d]=Object(o.useState)(u(e));i.forEach(e=>{c.push(e.color.substring(1)),c.push(e.slug)}),Object(o.useEffect)(()=>{d(u(e))});const p=r.charLimit?`${Object(s.__)("Characters")}: ${a} / ${r.charLimit}`:void 0,f=!(r.charLimit&&a>r.charLimit);return Object(o.createElement)(l.BaseControl,{className:f?"":"components-base-control--error"},Object(o.createElement)(l.BaseControl,{label:t}),Object(o.createElement)(R,{onEditorChange:e=>{n(e)},value:e,plugins:"lists textcolor colorpicker link",init:{height:300,menubar:!1,branding:!1,textcolor_map:c,toolbar:"undo redo formatselect bold italic forecolor backcolor alignleft aligncenter alignright alignjustify bullist numlist outdent indent link unlink removeformat help",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"}}),r.charLimit&&Object(o.createElement)("p",{style:{fontStyle:"normal",color:"rgb(117, 117, 117)",fontSize:12}},p))},postTypeEntry:function({value:e,label:t,setFieldAttributes:n,field:r}){const i=r.postType,c=Object(D.useSelect)(e=>e("core").getEntityRecords("postType",i,{per_page:-1})),[a,s]=Object(o.useState)([]);return Object(o.useEffect)(()=>{if(c){const e=c.slice().map(e=>({value:e.id,label:e.title.rendered}));s(e)}},[c]),Object(o.createElement)(l.ComboboxControl,{label:t,value:e,onChange:e=>{n(e||-1)},options:a})}},H=({children:e,width:t})=>{const n=100*parseFloat(t);return Object(o.createElement)("div",{style:{width:n+"%"}},e)};function z({editProps:e,fieldName:t,field:n,subFieldName:r,subField:i,indexKey:l}){const{attributes:c,setAttributes:a}=e,s=e=>{const n=c[t].slice(0,l),o=c[t].slice(l+1);a({[t]:[...n,{...c[t][l],[r]:e},...o]})},u=V[i.input];return Object(o.createElement)(u,{setFieldAttributes:s,removeFieldAttributes:()=>{s(void 0)},field:i,label:i.label,value:c[t][l][r]})}var $=Object(o.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(d.Path,{d:"M12.5 3.9L6.7 9.7l1.1 1.1 4-4V20h1.4V6.7l4.5 4.1 1.1-1.1z"})),U=Object(o.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(d.Path,{d:"M16.2 13.2l-4 4V4h-1.5v13.3l-4.5-4.1-1 1.1 6.2 5.8 5.8-5.8-1-1.1z"}));function K({field:e,setAttributes:t,fieldName:n,attributes:r,editProps:i}){const c=e=>e===r[n].length-1,a=e=>0===e;return Object(o.createElement)(l.BaseControl,{className:"fbl_repeater-inputs"},Object(o.createElement)(l.BaseControl,{label:e.label}),Object(o.createElement)(l.Panel,null,r[n].map((u,d)=>Object(o.createElement)(l.PanelBody,{key:u.fastBlockId?`${n}_${u.fastBlockId}`:`${n}_${d}`,title:e.single?`${e.single} ${d+1}`:`Repeater ${Object(s.__)("Item")} ${d+1}`,initialOpen:!1,buttonProps:{style:{padding:"16px"}}},Object(o.createElement)("div",{className:"fbl_repeater-btns"},Object(o.createElement)(l.Button,{onClick:()=>{(e=>{if(a(e))return;const o=[...r[n]],i=o[e];o[e]=o[e-1],o[e-1]=i,t({[n]:o})})(d)},disabled:a(d),icon:$}),Object(o.createElement)(l.Button,{onClick:()=>{(e=>{if(c(e))return;const o=[...r[n]],i=o[e];o[e]=o[e+1],o[e+1]=i,t({[n]:o})})(d)},disabled:c(d),icon:U}),Object(o.createElement)(l.Button,{onClick:()=>{(e=>{const o=[...r[n]];o.splice(e,1),t({[n]:o})})(d)},icon:p})),Object.entries(u).map(([t])=>{if(e.query[t]){const r={editProps:i,fieldName:n,field:e,subFieldName:t,subField:e.query[t],indexKey:d};return Object(o.createElement)(z,r)}})))),(!e.limit||e.limit>r[n].length)&&Object(o.createElement)(l.Button,{onClick:()=>{const o={};Object.entries(e.query).forEach(([e,t])=>{o[e]=t.default}),o.fastBlockId=(new Date).valueOf(),console.log(o),t({[n]:[...r[n],o]})},style:{width:"100%",justifyContent:"center"},isSecondary:!0},"+"))}function G({editProps:e,fieldName:t,field:n}){const{attributes:r,setAttributes:c}=e,a=e=>{c({[t]:e})},s=()=>{a(void 0)};if("repeater"===n.input){const i={field:n,setAttributes:c,fieldName:t,attributes:r,editProps:e};return Object(o.createElement)(K,i)}return Object(o.createElement)(o.Fragment,null,(()=>{const e=V[n.input],c=()=>Object(o.createElement)(e,{setFieldAttributes:a,removeFieldAttributes:s,field:n,label:n.label,value:r[t]});if(void 0===e)return n.input&&console.error(n.input+" Input does not exist inside field "+t),null;const u=n.width||1;return"inspector"===n.location?Object(o.createElement)(i.InspectorControls,null,Object(o.createElement)(l.PanelBody,null,c())):Object(o.createElement)(H,{width:u},c())})())}var q=Object(o.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)(d.Path,{d:"M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"}));function W({title:e,fields:t,editProps:n,isSelected:r}){const[i,c]=Object(o.useState)(!1),a=()=>{c(()=>!1)},s=r?" is-selected":"";return Object(o.createElement)("div",{className:"fbl_edit-btn-overlay"+s},Object.entries(t).filter(([e,t])=>"inspector"===t.location).map(([e,t])=>{const r={editProps:n,fieldName:e,field:t};return Object(o.createElement)(G,r)}),Object(o.createElement)(l.Button,{isPrimary:!0,icon:q,onClick:()=>{c(()=>!0)}}),i&&Object(o.createElement)(l.Modal,{title:"Block: "+e,onRequestClose:a,style:{width:600},shouldCloseOnClickOutside:!1},Object.entries(t).filter(([e,t])=>"inspector"!==t.location).map(([e,t])=>{const r={editProps:n,fieldName:e,field:t};return Object(o.createElement)(G,r)}),Object(o.createElement)("div",{style:{textAlign:"right",marginTop:"2rem"}},Object(o.createElement)(l.Button,{isPrimary:!0,onClick:a},"Okay"))))}const Y=({children:e,fields:t})=>({attributes:n})=>e?Object(o.createElement)(i.InnerBlocks.Content,null):Object(o.createElement)("div",null,Object.entries(t).map(([e,t])=>{switch(t.input){case"text":case"textarea":if("string"==typeof t.selector){const r=t.selector;return Object(o.createElement)(r,null,n[e])}return Object(o.createElement)("p",null,n[e]);case"image":return Object(o.createElement)("img",{src:"object"==typeof n[e]&&n[e].url,alt:"object"==typeof n[e]&&n[e].alt});case"richText":return Object(o.createElement)(i.RichText.Content,{tagName:"p",value:n[e]});default:return null}})),J=({attributes:e,children:t,fields:n,settings:r})=>[{attributes:e,...r,save:Y({children:t,fields:n}),apiVersion:1}];Object.values(fastBlockBlocks).forEach(e=>{!function(e){const{name:t,settings:n,children:c,allowTransformFrom:s}=e,u=e.fields||[],d={};for(const[e,t]of Object.entries(u)){const n={};n.type=t.type,n.default=t.default,d[e]=n}const p=function({settings:e,name:t,children:n,fields:r,editWidth:c,editView:s,childrenLimit:u,preview:d}){return p=>{const{attributes:f,isSelected:b,clientId:m}=p,[h,v]=Object(o.useState)(0),g=Object(i.useBlockProps)({style:{flexBasis:100*c+"%"}}),y=e&&e.title?e.title:t,O="popover"===s||"inspector"===s,j=Object(D.useSelect)(e=>e("core/block-editor").getBlock(m).innerBlocks).length,E=(!u||j<u)&&i.InnerBlocks.ButtonBlockAppender;function C(e){return Object.entries(r).map(([t,n])=>{const r={editProps:e,fieldName:t,field:n};return Object(o.createElement)(G,r)})}return Object(o.createElement)("div",g,Object(o.createElement)("div",{className:"fbl_editor-block",style:{minHeight:h},onMouseDown:e=>{if(b)return;e.currentTarget.style.minHeight=null;const t=e.currentTarget.offsetHeight;e.currentTarget.style.minHeight=t+"px",v(t)},onBlur:()=>{v(0)}},b&&!O||n||!1===d?Object(o.createElement)(l.Card,{className:"fbl_card",size:"small"},Object(o.createElement)(l.CardHeader,{className:"fbl_block-title"},"Block: ",y),Object(o.createElement)(l.CardBody,{style:{padding:"16px 14px"}},C(p),n&&Object(o.createElement)("div",{style:{border:"1px dashed #ddd",padding:0,borderRadius:2}},Object(o.createElement)(i.InnerBlocks,{allowedBlocks:Array.isArray(n)?n:void 0,orientation:"horizontal",renderAppender:E})))):Object(o.createElement)("div",{style:{border:"1px dashed #ddd",padding:0,minHeight:50}},"popover"===s&&Object(o.createElement)(W,{title:y,fields:r,editProps:p,isSelected:b}),Object(o.createElement)(a.a,{block:t,attributes:{...f},httpMethod:"POST"}),b&&"inspector"===s&&Object(o.createElement)(i.InspectorControls,null,Object(o.createElement)(l.PanelBody,null,C(p))))))}}({fields:u,...e}),f=function({children:e,fields:t}){return({attributes:n,className:r})=>{const l=i.useBlockProps.save({className:r});return e?Object(o.createElement)(i.InnerBlocks.Content,null):Object(o.createElement)("div",l,Object.entries(t).map(([e,t])=>{switch(t.input){case"text":case"textarea":if("string"==typeof t.selector){const r=t.selector;return Object(o.createElement)(r,null,n[e])}return Object(o.createElement)("p",null,n[e]);case"image":return Object(o.createElement)("img",{src:"object"==typeof n[e]&&n[e].url,alt:"object"==typeof n[e]&&n[e].alt});case"richText":case"classicEditor":return Object(o.createElement)(i.RichText.Content,{value:n[e]});default:return null}}))}}({children:c,fields:u});s&&(n.transforms={from:[{type:"block",blocks:s,transform:(e,n)=>Object(r.createBlock)(t,e,n)}]});const b={apiVersion:2,edit:p,save:f,title:t,...n,attributes:d,deprecated:J({attributes:d,children:c,fields:u,settings:n})};Object(r.registerBlockType)(t,b)}(e)})}]);