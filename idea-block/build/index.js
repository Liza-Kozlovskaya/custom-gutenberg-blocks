!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n,i,a,o,__,r,l;n=window.wp.blocks,i=window.wp.editor,a=window.wp.i18n,o=window.wp.element,window.wp.components,window._,__=a.__,r=o.createElement,l=i.RichText,i.MediaUpload,n.registerBlockType("create-block/idea-block",{title:__("Idea Block","idea-block"),icon:"align-pull-right",category:"media",attributes:{title_section:{type:"string",selector:"idea__aside-heading"},title:{type:"string",selector:"idea__heading"},description:{type:"string",selector:"idea__text"},btn_text:{source:"children",selector:"idea__button_text"},btn_url:{source:"attribute",selector:"idea__button_link",attribute:"href"}},edit:function(e){var t=e.attributes;return r("div",{className:"custom-block"},r(l,{tagName:"h2",inline:!0,placeholder:__("— hey, buddy","idea-block"),value:t.title_section,onChange:function(t){e.setAttributes({title_section:t})},className:"h2"}),r(l,{tagName:"h1",inline:!0,placeholder:__("Got Idea?","idea-block"),value:t.title,onChange:function(t){e.setAttributes({title:t})},className:"h1"}),r(l,{tagName:"p",inline:!0,placeholder:__("SENLA will provide your business with advanced solutions and help realize a unique business model in a competitive market.","idea-block"),value:t.description,onChange:function(t){e.setAttributes({description:t})},className:"p"}),r("div",{className:"block-editor__contents-btn"},r(l,{tagName:"p",inline:!0,placeholder:__("Get a free consultancy","idea-block"),value:t.btn_text,onChange:function(t){e.setAttributes({btn_text:t})},className:"block-editor-button"}),r(l,{tagName:"p",inline:!0,placeholder:__("https://senlainc.com/","idea-block"),value:t.btn_url,onChange:function(t){e.setAttributes({btn_url:t})},className:"block-editor-link"})))},save:function(e){var t=e.attributes;return r("section",{className:"idea"},r("div",{className:"idea__container container"},r("div",{className:"idea__wrapper"},r(l.Content,{tagName:"span",value:t.title_section,className:"idea__aside-heading fifth-heading"}),r(l.Content,{tagName:"h2",value:t.title,className:"idea__heading first-heading"}),r(l.Content,{tagName:"p",value:t.description,className:"idea__text first-text"}),r(l.Content,{tagName:"a",href:t.btn_url,value:t.btn_text,className:"idea__button button"}))))}})}]);