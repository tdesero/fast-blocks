!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.serverSideRender},function(e,t,n){"use strict";n.r(t);var r=n(0),l=n(2),c=n(1),o=n(3),i=n.n(o);const a=e=>Object(r.createElement)("div",{style:{width:e.width,padding:"5px"}},e.children);Object.values(fastBlockBlocks).forEach(e=>{var t,n,o;t=e.name,n=e.fields,o=e.settings,wp.blocks.registerBlockType(t,function(e,t,n){const o={};for(const[e,n]of Object.entries(t)){const t={};t.type=n.type,t.default=n.default,o[e]=t}return console.log("origAttributes",o),{edit:({attributes:o,setAttributes:u,isSelected:s})=>(console.log("attributes",o),s?Object(r.createElement)("div",{style:{backgroundColor:"#f5f5f5",padding:"15px",borderRadius:"5px",display:"flex",flexWrap:"wrap"}},Object(r.createElement)("h2",{style:{fontSize:"12px",textTransform:"uppercase",letterSpacing:"2px",marginTop:"0",width:"100%"}},n.title),Object.entries(t).map((function([e,t]){switch(t.input){case"checkbox":return Object(r.createElement)(a,{width:"100%"},Object(r.createElement)(c.ToggleControl,{label:t.label,onChange:t=>{u({[e]:!o[e]})},checked:o[e]}));case"text":return Object(r.createElement)(a,{width:"50%"},Object(r.createElement)(c.TextControl,{label:t.label,value:o[e],onChange:t=>{u({[e]:t})}}));case"select":return Object(r.createElement)(a,{width:"50%"},Object(r.createElement)(c.SelectControl,{label:t.label,value:o[e],onChange:t=>{u({[e]:t})},options:t.options}));case"image":return Object(r.createElement)(a,{width:"50%"},Object(r.createElement)(l.MediaUploadCheck,null,Object(r.createElement)(l.MediaUpload,{onSelect:t=>{u({[e]:{id:t.id,sizes:t.sizes,url:t.url}})},allowedTypes:["image"],value:o[e],render:({open:n})=>Object(r.createElement)(r.Fragment,null,o[e]?Object(r.createElement)(r.Fragment,null,Object(r.createElement)("img",{onClick:n,src:o[e].url,style:{width:"150px",height:"150px",objectFit:"cover",marginRight:"10px",background:"white"}}),Object(r.createElement)(c.Button,{onClick:()=>{u({[e]:void 0})},isSecondary:!0},"Bild entfernen")):Object(r.createElement)(c.Button,{onClick:n,isPrimary:!0},t.label))})));case"richText":return Object(r.createElement)(a,{width:"50%"},Object(r.createElement)(l.RichText,{className:"components-text-control__input",value:o[e],onChange:t=>{u({[e]:t})},placeholder:"Text einfügen..."}));default:return}}))):Object(r.createElement)(i.a,{block:e,attributes:o})),save:()=>null,...n,attributes:o}}(t,n,o))})}]);