(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{113:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));var l=a(3),r=a(0),n=a.n(r),o=a(136),c=a(137),s=a(131),i=a(16),m=a(134),u=a(114),g=a.n(u);const d=[{title:"Iscriviti alla community su Discord",imageUrl:"img/discordLogoNew.svg",description:n.a.createElement(n.a.Fragment,null,"La community su Discord e' il nostro punto di riferimento, tutti i contenuti partono da li'"),link:"https://discord.gg/p2gtrKm"},{title:"Seguici su Instagram",imageUrl:"img/instagramLogo.svg",description:n.a.createElement(n.a.Fragment,null,"Le piu' belle stampe della community, manda quelle di cui vai piu' orgoglioso"),link:"https://instagram.com/flyingbear_ghost?igshid=12aaaycdo2k6y"},{title:"Seguici su Facebook",imageUrl:"img/facebookLogo.svg",description:n.a.createElement(n.a.Fragment,null,"La nostra pagina su Facebook"),link:"https://www.facebook.com/groups/600126627631693/"},{title:"Seguici su Youtube",imageUrl:"img/facebookLogo.svg",description:n.a.createElement(n.a.Fragment,null,"Prossimamente anche su Youtube!")}];function f({imageUrl:e,title:t,description:a,link:l}){const r=Object(m.a)(e);return n.a.createElement("div",{className:Object(o.a)("col col--4",g.a.feature)},r&&n.a.createElement("div",{className:"text--center"},n.a.createElement(s.a,{to:l},n.a.createElement("img",{className:g.a.featureImage,src:r,alt:t}))),n.a.createElement("h3",null,t),n.a.createElement("p",null,a))}function E(){const e=Object(i.default)(),{siteConfig:t={}}=e;return n.a.createElement(c.a,{title:`Hello from ${t.title}`,description:"Description will go into a meta tag in <head />"},n.a.createElement("header",{className:Object(o.a)("hero hero--primary",g.a.heroBanner)},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"hero__title"},t.title),n.a.createElement("p",{className:"hero__subtitle"},t.tagline),n.a.createElement("div",{className:g.a.buttons},n.a.createElement(s.a,{className:Object(o.a)("button button--outline button--secondary button--lg",g.a.getStarted),to:Object(m.a)("docs/")},"Get Started")))),n.a.createElement("main",null,d&&d.length>0&&n.a.createElement("section",{className:g.a.features},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},d.map(((e,t)=>n.a.createElement(f,Object(l.a)({key:t},e)))))))))}},138:function(e,t,a){"use strict";var l=a(3),r=a(0),n=a.n(r),o=a(136),c=a(131),s=a(130),i=a(134),m=a(56),u=a.n(m),g=a(135);function d({to:e,href:t,label:a,prependBaseUrlToHref:r,...o}){const s=Object(i.a)(e),m=Object(i.a)(t,{forcePrependBaseUrl:!0});return n.a.createElement(c.a,Object(l.a)({className:"footer__link-item"},t?{href:r?m:t}:{to:s},o),a)}const f=({sources:e,alt:t})=>n.a.createElement(g.a,{className:"footer__logo",alt:t,sources:e});t.a=function(){const{footer:e}=Object(s.useThemeConfig)(),{copyright:t,links:a=[],logo:l={}}=e||{},r={light:Object(i.a)(l.src),dark:Object(i.a)(l.srcDark||l.src)};return e?n.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===e.style})},n.a.createElement("div",{className:"container"},a&&a.length>0&&n.a.createElement("div",{className:"row footer__links"},a.map(((e,t)=>n.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?n.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.a.createElement("li",{key:e.href||e.to,className:"footer__item"},n.a.createElement(d,e))))):null)))),(l||t)&&n.a.createElement("div",{className:"footer__bottom text--center"},l&&(l.src||l.srcDark)&&n.a.createElement("div",{className:"margin-bottom--sm"},l.href?n.a.createElement(c.a,{href:l.href,className:u.a.footerLogoLink},n.a.createElement(f,{alt:l.alt,sources:r})):n.a.createElement(f,{alt:l.alt,sources:r})),t?n.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}}}]);