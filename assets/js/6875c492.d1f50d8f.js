(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{123:function(e,a,t){"use strict";var r=t(3),l=t(0),n=t.n(l),s=t(120),m=t(116),c=t(115),o=t(119),i=t(56),u=t.n(i),g=t(121);function d({to:e,href:a,label:t,prependBaseUrlToHref:l,...s}){const c=Object(o.a)(e),i=Object(o.a)(a,{forcePrependBaseUrl:!0});return n.a.createElement(m.a,Object(r.a)({className:"footer__link-item"},a?{href:l?i:a}:{to:c},s),t)}const h=({sources:e,alt:a})=>n.a.createElement(g.a,{className:"footer__logo",alt:a,sources:e});a.a=function(){const{footer:e}=Object(c.useThemeConfig)(),{copyright:a,links:t=[],logo:r={}}=e||{},l={light:Object(o.a)(r.src),dark:Object(o.a)(r.srcDark||r.src)};return e?n.a.createElement("footer",{className:Object(s.a)("footer",{"footer--dark":"dark"===e.style})},n.a.createElement("div",{className:"container"},t&&t.length>0&&n.a.createElement("div",{className:"row footer__links"},t.map(((e,a)=>n.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?n.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.a.createElement("ul",{className:"footer__items"},e.items.map(((e,a)=>e.html?n.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.a.createElement("li",{key:e.href||e.to,className:"footer__item"},n.a.createElement(d,e))))):null)))),(r||a)&&n.a.createElement("div",{className:"footer__bottom text--center"},r&&(r.src||r.srcDark)&&n.a.createElement("div",{className:"margin-bottom--sm"},r.href?n.a.createElement(m.a,{href:r.href,className:u.a.footerLogoLink},n.a.createElement(h,{alt:r.alt,sources:l})):n.a.createElement(h,{alt:r.alt,sources:l})),a?n.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}},125:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var r=t(0),l=t.n(r),n=t(117),s=t(116),m=t(57),c=t.n(m);function o(e){var a=e.sidebar;return 0===a.items.length?null:l.a.createElement("div",{className:Object(n.a)(c.a.sidebar,"thin-scrollbar")},l.a.createElement("h3",{className:c.a.sidebarItemTitle},a.title),l.a.createElement("ul",{className:c.a.sidebarItemList},a.items.map((function(e){return l.a.createElement("li",{key:e.permalink,className:c.a.sidebarItem},l.a.createElement(s.a,{isNavLink:!0,to:e.permalink,className:c.a.sidebarItemLink,activeClassName:c.a.sidebarItemLinkActive},e.title))}))))}},129:function(e,a,t){"use strict";var r=t(0),l=t.n(r),n=t(117),s=t(128),m=t(118),c=t(116),o=t(130),i=t(127),u=t(59),g=t.n(u),d=t(115);a.a=function(e){var a,t,r=(a=Object(d.usePluralForm)().selectMessage,function(e){var t=Math.ceil(e);return a(t,Object(m.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),u=e.children,h=e.frontMatter,p=e.metadata,E=e.truncated,f=e.isBlogPostPage,b=void 0!==f&&f,v=p.date,N=p.formattedDate,_=p.permalink,k=p.tags,w=p.readingTime,T=h.author,y=h.title,O=h.image,P=h.keywords,j=h.author_url||h.authorURL,L=h.author_title||h.authorTitle,M=h.author_image_url||h.authorImageURL;return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{keywords:P,image:O}),l.a.createElement("article",{className:b?void 0:"margin-bottom--xl"},(t=b?"h1":"h2",l.a.createElement("header",null,l.a.createElement(t,{className:Object(n.a)("margin-bottom--sm",g.a.blogPostTitle)},b?y:l.a.createElement(c.a,{to:_},y)),l.a.createElement("div",{className:"margin-vert--md"},l.a.createElement("time",{dateTime:v,className:g.a.blogPostDate},N,w&&l.a.createElement(l.a.Fragment,null," \xb7 ",r(w)))),l.a.createElement("div",{className:"avatar margin-vert--md"},M&&l.a.createElement(c.a,{className:"avatar__photo-link avatar__photo",href:j},l.a.createElement("img",{src:M,alt:T})),l.a.createElement("div",{className:"avatar__intro"},T&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:"avatar__name"},l.a.createElement(c.a,{href:j},T)),l.a.createElement("small",{className:"avatar__subtitle"},L)))))),l.a.createElement("div",{className:"markdown"},l.a.createElement(s.a,{components:o.a},u)),(k.length>0||E)&&l.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,l.a.createElement(m.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),k.map((function(e){var a=e.label,t=e.permalink;return l.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),E&&l.a.createElement("div",{className:"col text--right"},l.a.createElement(c.a,{to:p.permalink,"aria-label":"Read more about "+y},l.a.createElement("strong",null,l.a.createElement(m.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},91:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(122),s=t(129),m=t(116),c=t(125),o=t(118),i=t(115);function u(e){var a,t=e.tagName,r=e.count,n=(a=Object(i.usePluralForm)().selectMessage,function(e){return a(e,Object(o.b)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return l.a.createElement(o.a,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:n(r),tagName:t}},'{nPosts} tagged with "{tagName}"')}a.default=function(e){var a=e.metadata,t=e.items,r=e.sidebar,i=a.allTagsPath,g=a.name,d=a.count;return l.a.createElement(n.a,{title:'Posts tagged "'+g+'"',description:'Blog | Tagged "'+g+'"',wrapperClassName:"blog-wrapper",searchMetadatas:{tag:"blog_tags_posts"}},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--3"},l.a.createElement(c.a,{sidebar:r})),l.a.createElement("main",{className:"col col--7"},l.a.createElement("h1",null,l.a.createElement(u,{count:d,tagName:g})),l.a.createElement(m.a,{href:i},l.a.createElement(o.a,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),l.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return l.a.createElement(s.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},l.a.createElement(a,null))})))))))}}}]);