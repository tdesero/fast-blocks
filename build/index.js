!function(e){var t={};function l(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=7)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.serverSideRender},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.compose},function(e,t,l){"use strict";l.r(t);var n=l(0),r=l(3),a=l(1),c=l(4),o=l.n(c),i=l(5),s=l(2),u=l(6),b=({label:e,onSelect:t,onRemove:l,value:c})=>Object(n.createElement)(r.MediaUploadCheck,null,Object(n.createElement)(r.MediaUpload,{onSelect:e=>{t({id:e.id,sizes:e.sizes,url:e.url,alt:e.alt})},allowedTypes:["image"],value:c,render:({open:t})=>Object(n.createElement)(a.BaseControl,null,Object(n.createElement)(a.BaseControl,{label:e}),c&&c.url?Object(n.createElement)(n.Fragment,null,Object(n.createElement)("img",{onClick:t,src:c.url,style:{width:"150px",height:"150px",objectFit:"cover",marginRight:"10px",background:"white"}}),Object(n.createElement)(a.Button,{onClick:l,isSecondary:!0},Object(s.__)("Remove image"))):Object(n.createElement)(a.Button,{onClick:t,isPrimary:!0},Object(s.__)("Open Media Library")))})),d={checkbox:({value:e,label:t,setFieldAttributes:l})=>Object(n.createElement)(a.CheckboxControl,{label:t,onChange:l,checked:e}),toggle:({value:e,label:t,setFieldAttributes:l})=>Object(n.createElement)(a.ToggleControl,{label:t,onChange:l,checked:e}),text:({value:e,label:t,setFieldAttributes:l})=>Object(n.createElement)(a.TextControl,{label:t,value:e,onChange:l}),textarea:({value:e,label:t,setFieldAttributes:l})=>Object(n.createElement)(a.TextareaControl,{label:t,value:e,onChange:l}),number:({value:e,label:t,setFieldAttributes:l})=>Object(n.createElement)(a.TextControl,{label:t,type:"number",value:e,onChange:l}),range:({value:e,field:t,label:l,setFieldAttributes:r})=>Object(n.createElement)(a.RangeControl,{label:l,value:e,onChange:r,min:t.min,max:t.max}),select:({value:e,field:t,label:l,setFieldAttributes:r})=>Object(n.createElement)(a.SelectControl,{label:l,value:e,onChange:r,options:t.options}),image:({label:e,value:t,setFieldAttributes:l,removeFieldAttributes:r})=>Object(n.createElement)(b,{onSelect:l,onRemove:r,value:t,label:e}),richText:({value:e,label:t,setFieldAttributes:l})=>Object(n.createElement)(a.BaseControl,null,Object(n.createElement)(a.BaseControl,{label:t}),Object(n.createElement)(r.RichText,{className:"fbl_rich-text",value:e,onChange:l,placeholder:Object(s.__)("Add text…"),inlineToolbar:!0})),url:({value:e,label:t,setFieldAttributes:l})=>Object(n.createElement)(a.BaseControl,{className:"fbl_url-input"},Object(n.createElement)(a.BaseControl,{className:"fbl_url-input__label",label:t}),Object(n.createElement)(r.URLInputButton,{url:e,onChange:l}),Object(n.createElement)("small",{className:"fbl_url-input__url"},e)),date:({value:e,label:t,setFieldAttributes:l})=>{const r=Object(u.withState)({isVisible:!1})(({isVisible:t,setState:l,children:r})=>Object(n.createElement)("div",{style:{position:"relative"}},Object(n.createElement)(a.Button,{isSecondary:!0,onClick:()=>{l(e=>({isVisible:!e.isVisible}))}},e?new Date(e).toLocaleString():Object(s.__)("Date")),t&&Object(n.createElement)(a.Popover,{position:"bottom left"},r)));return Object(n.createElement)(a.BaseControl,{className:"fbl_url-input"},Object(n.createElement)(a.BaseControl,{className:"fbl_url-input__label",label:t}),Object(n.createElement)(r,null,Object(n.createElement)("div",{style:{padding:10}},Object(n.createElement)(a.DateTimePicker,{currentDate:e,onChange:l}))))}},m=({children:e,width:t})=>{const l=100*parseFloat(t);return Object(n.createElement)("div",{style:{width:l+"%"}},e)};Object.values(fastBlockBlocks).forEach(e=>{!function(e,t,l,c){const u={};for(const[e,l]of Object.entries(t)){const t={};t.type=l.type,t.default=l.default,u[e]=t}const b={edit:i=>{const{attributes:u,isSelected:b}=i,[p,j]=Object(n.useState)(0),O=l&&l.title?l.title:e;return Object(n.createElement)("div",{className:"fbl_editor-block",style:{minHeight:p},onMouseDown:e=>{if(b)return;e.currentTarget.style.minHeight=null;const t=e.currentTarget.offsetHeight;e.currentTarget.style.minHeight=t+"px",j(t)}},b||c?Object(n.createElement)(a.Card,{className:"fbl_card"},Object(n.createElement)(a.CardHeader,{className:"fbl_block-title"},"Block: ",O),Object(n.createElement)(a.CardBody,{style:{padding:"16px 14px"}},Object.entries(t).map(([e,t])=>function(e,t,l){const{attributes:r,setAttributes:c}=e,o=e=>{c({[t]:e})},i=()=>{o(void 0)};if("repeater"!==l.input){const e=d[l.input];if(void 0===e)return void console.error(l.input+" Input does not exist");const a=l.width||1;return Object(n.createElement)(m,{width:a},Object(n.createElement)(e,{setFieldAttributes:o,removeFieldAttributes:i,field:l,label:l.label,value:r[t]}))}if("repeater"===l.input){const o=()=>{const e={};Object.entries(l.query).forEach(([t,l])=>{e[t]=l.default}),e.fastBlockId=(new Date).valueOf(),console.log(e),c({[t]:[...r[t],e]})},i=e=>{const l=[...r[t]];l.splice(e,1),c({[t]:l})},u=e=>e===r[t].length-1,b=e=>0===e,m=e=>{if(b(e))return;const l=[...r[t]],n=l[e];l[e]=l[e-1],l[e-1]=n,c({[t]:l})},p=e=>{if(u(e))return;const l=[...r[t]],n=l[e];l[e]=l[e+1],l[e+1]=n,c({[t]:l})};return Object(n.createElement)(a.BaseControl,{className:"fbl_repeater-inputs"},Object(n.createElement)(a.BaseControl,{label:l.label}),Object(n.createElement)(a.Panel,null,r[t].map((r,c)=>Object(n.createElement)(a.PanelBody,{key:r.fastBlockId?`${t}_${r.fastBlockId}`:`${t}_${c}`,title:l.single?`${l.single} ${c+1}`:`Repeater ${Object(s.__)("Item")} ${c+1}`,initialOpen:!1,buttonProps:{style:{padding:"16px"}}},Object(n.createElement)(a.PanelRow,null,Object(n.createElement)(a.ButtonGroup,null,Object(n.createElement)(a.Button,{onClick:()=>{m(c)},isSmall:!0,isSecondary:!0,disabled:b(c)},Object(s.__)("Move up")),Object(n.createElement)(a.Button,{onClick:()=>{p(c)},isSmall:!0,isSecondary:!0,disabled:u(c)},Object(s.__)("Move down")),Object(n.createElement)(a.Button,{onClick:()=>{i(c)},isSmall:!0,isDestructive:!0},Object(s.__)("Remove item")))),Object.entries(r).map(([r])=>{if(l.query[r])return function({props:e,fieldName:t,field:l,subFieldName:r,subField:a,key:c}){const{attributes:o,setAttributes:i}=e,s=e=>{const l=o[t].slice(0,c),n=o[t].slice(c+1);i({[t]:[...l,{...o[t][c],[r]:e},...n]})},u=d[a.input];return Object(n.createElement)(u,{setFieldAttributes:s,removeFieldAttributes:()=>{s(void 0)},field:a,label:a.label,value:o[t][c][r]})}({props:e,fieldName:t,field:l,subFieldName:r,subField:l.query[r],key:c})})))),Object(n.createElement)(a.Button,{onClick:o,style:{width:"100%",justifyContent:"center"},isSecondary:!0},"+"))}}(i,e,t)),c&&Object(n.createElement)("div",{style:{border:"1px dashed grey",padding:"10px"}},Object(n.createElement)(r.InnerBlocks,{allowedBlocks:c,orientation:"horizontal",renderAppender:r.InnerBlocks.ButtonBlockAppender})))):Object(n.createElement)(o.a,{block:e,attributes:{...u},httpMethod:"POST"}))},save:({attributes:e})=>c?Object(n.createElement)(r.InnerBlocks.Content,null):Object(n.createElement)("div",null,Object.entries(t).map(([t,l])=>{switch(l.input){case"text":case"textarea":if("string"==typeof l.selector){const r=l.selector;return Object(n.createElement)(r,null,e[t])}return Object(n.createElement)("p",null,e[t]);case"image":return Object(n.createElement)("img",{src:"object"==typeof e[t]&&e[t].url,alt:"object"==typeof e[t]&&e[t].alt});case"richText":return Object(n.createElement)(r.RichText.Content,{tagName:"p",value:e[t]});default:return null}})),title:e,...l,attributes:u};Object(i.registerBlockType)(e,b)}(e.name,e.fields,e.settings,e.children)})}]);