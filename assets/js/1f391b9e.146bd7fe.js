(window.webpackJsonp=window.webpackJsonp||[]).push([[13,12],{141:function(e,t,a){"use strict";var r=a(3),l=a(0),o=a.n(l),s=a(135),c=a(136),n=a(134),m=a(138),i=a(56),f=a.n(i),_=a(139);function u({to:e,href:t,label:a,prependBaseUrlToHref:l,...s}){const n=Object(m.a)(e),i=Object(m.a)(t,{forcePrependBaseUrl:!0});return o.a.createElement(c.a,Object(r.a)({className:"footer__link-item"},t?{href:l?i:t}:{to:n},s),a)}const h=({sources:e,alt:t})=>o.a.createElement(_.a,{className:"footer__logo",alt:t,sources:e});t.a=function(){const{footer:e}=Object(n.useThemeConfig)(),{copyright:t,links:a=[],logo:r={}}=e||{},l={light:Object(m.a)(r.src),dark:Object(m.a)(r.srcDark||r.src)};return e?o.a.createElement("footer",{className:Object(s.default)("footer",{"footer--dark":"dark"===e.style})},o.a.createElement("div",{className:"container"},a&&a.length>0&&o.a.createElement("div",{className:"row footer__links"},a.map(((e,t)=>o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(u,e))))):null)))),(r||t)&&o.a.createElement("div",{className:"footer__bottom text--center"},r&&(r.src||r.srcDark)&&o.a.createElement("div",{className:"margin-bottom--sm"},r.href?o.a.createElement(c.a,{href:r.href,className:f.a.footerLogoLink},o.a.createElement(h,{alt:r.alt,sources:l})):o.a.createElement(h,{alt:r.alt,sources:l})),t?o.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}}}]);