(window.webpackJsonp=window.webpackJsonp||[]).push([[26,12,13],{100:function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),s=a(141),n=a(152),o=a(137),c=a(146),m=a(138),i=a(135);function u({tagName:e,count:t}){const a=function(){const{selectMessage:e}=Object(i.usePluralForm)();return t=>e(t,Object(m.b)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return r.a.createElement(m.a,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:a(t),tagName:e}},'{nPosts} tagged with "{tagName}"')}t.default=function(e){const{metadata:t,items:a,sidebar:l}=e,{allTagsPath:i,name:g,count:d}=t;return r.a.createElement(s.a,{title:`Posts tagged "${g}"`,description:`Blog | Tagged "${g}"`,wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_tags_posts"}},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(c.a,{sidebar:l})),r.a.createElement("main",{className:"col col--7"},r.a.createElement("h1",null,r.a.createElement(u,{count:d,tagName:g})),r.a.createElement(o.a,{href:i},r.a.createElement(m.a,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),r.a.createElement("div",{className:"margin-vert--xl"},a.map((({content:e})=>r.a.createElement(n.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},r.a.createElement(e,null)))))))))}},142:function(e,t,a){"use strict";var l=a(3),r=a(0),s=a.n(r),n=a(136),o=a(137),c=a(135),m=a(139),i=a(57),u=a.n(i),g=a(140);function d({to:e,href:t,label:a,prependBaseUrlToHref:r,...n}){const c=Object(m.a)(e),i=Object(m.a)(t,{forcePrependBaseUrl:!0});return s.a.createElement(o.a,Object(l.a)({className:"footer__link-item"},t?{href:r?i:t}:{to:c},n),a)}const f=({sources:e,alt:t})=>s.a.createElement(g.a,{className:"footer__logo",alt:t,sources:e});t.a=function(){const{footer:e}=Object(c.useThemeConfig)(),{copyright:t,links:a=[],logo:l={}}=e||{},r={light:Object(m.a)(l.src),dark:Object(m.a)(l.srcDark||l.src)};return e?s.a.createElement("footer",{className:Object(n.default)("footer",{"footer--dark":"dark"===e.style})},s.a.createElement("div",{className:"container"},a&&a.length>0&&s.a.createElement("div",{className:"row footer__links"},a.map(((e,t)=>s.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?s.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?s.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?s.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):s.a.createElement("li",{key:e.href||e.to,className:"footer__item"},s.a.createElement(d,e))))):null)))),(l||t)&&s.a.createElement("div",{className:"footer__bottom text--center"},l&&(l.src||l.srcDark)&&s.a.createElement("div",{className:"margin-bottom--sm"},l.href?s.a.createElement(o.a,{href:l.href,className:u.a.footerLogoLink},s.a.createElement(f,{alt:l.alt,sources:r})):s.a.createElement(f,{alt:l.alt,sources:r})),t?s.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}}}]);