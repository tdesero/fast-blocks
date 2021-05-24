!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.serverSideRender},function(e,t,n){"use strict";n.r(t);var r=n(0),l=n(2),o=n(1),c=n(4),a=n.n(c),i=n(3),u=({attributes:e,setAttributes:t,fieldName:n,field:c})=>Object(r.createElement)(l.MediaUploadCheck,null,Object(r.createElement)(l.MediaUpload,{onSelect:e=>{t({[n]:{id:e.id,sizes:e.sizes,url:e.url}})},allowedTypes:["image"],value:e[n],render:({open:l})=>Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.BaseControl,{label:c.label}),e[n]?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("img",{onClick:l,src:e[n].url,style:{width:"150px",height:"150px",objectFit:"cover",marginRight:"10px",background:"white"}}),Object(r.createElement)(o.Button,{onClick:()=>{t({[n]:void 0})},isSecondary:!0},Object(i.__)("Remove image"))):Object(r.createElement)(o.Button,{onClick:l,isPrimary:!0},Object(i.__)("Open Media Library")))}));Object.values(fastBlockBlocks).forEach(e=>{!function(e,t,n,c){const s={};for(const[e,n]of Object.entries(t)){const t={};t.type=n.type,t.default=n.default,s[e]=t}const b={edit:s=>{const{attributes:b,setAttributes:d,isSelected:p}=s,[m,f]=Object(r.useState)(0);return Object(r.createElement)(o.Card,{style:{background:!p&&!c&&"transparent",minHeight:m},onMouseDown:e=>{if(p)return;e.currentTarget.style.minHeight=null;const t=e.currentTarget.offsetHeight;e.currentTarget.style.minHeight=t+"px",f(t)}},Object(r.createElement)(o.CardBody,null,p||c?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("label",{style:{fontSize:"10px"}},"Block: ",n.title),Object.entries(t).map(([e,t])=>function(e,t,n,c,a){switch(e.input){case"checkbox":return Object(r.createElement)(o.ToggleControl,{label:e.label,onChange:e=>{t({[n]:!c[n]})},checked:c[n]});case"text":return Object(r.createElement)(o.TextControl,{label:e.label,value:c[n],onChange:e=>{t({[n]:e})}});case"select":return Object(r.createElement)(o.SelectControl,{label:e.label,value:c[n],onChange:e=>{t({[n]:e})},options:e.options});case"image":return Object(r.createElement)(u,{attributes:c,setAttributes:t,field:e,fieldName:n});case"richText":return console.log(a),Object(r.createElement)(r.Fragment,null,Object(r.createElement)(o.BaseControl,{label:e.label}),Object(r.createElement)(l.RichText,{className:"components-text-control__input",style:{marginBottom:"24px"},value:c[n],onChange:e=>{t({[n]:e})},placeholder:Object(i.__)("Add text…"),inlineToolbar:!0}));default:return}}(t,d,e,b,s))):Object(r.createElement)(a.a,{block:e,attributes:{...b}}),c&&Object(r.createElement)("div",{style:{border:"1px dashed grey",padding:"10px"}},Object(r.createElement)(l.InnerBlocks,{allowedBlocks:c,orientation:"horizontal",renderAppender:l.InnerBlocks.ButtonBlockAppender}))))},save:()=>Object(r.createElement)(l.InnerBlocks.Content,null),...n,attributes:s};wp.blocks.registerBlockType(e,b)}(e.name,e.fields,e.settings,e.children)})}]);