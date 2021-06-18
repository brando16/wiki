(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),c=(n(0),n(136)),o={title:"Getting Started",slug:"/cndkcd"},u={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Step 1: Generate a new Docusaurus site",source:"@site/docs/getting-started.md",slug:"/cndkcd",permalink:"/wiki/docs/cndkcd",editUrl:"https://github.com/flyingbear-club-ita/wiki/tree/master/docs/getting-started.md",version:"current"},i=[{value:"Step 1: Generate a new Docusaurus site",id:"step-1-generate-a-new-docusaurus-site",children:[]},{value:"Step 2: Start your Docusaurus site",id:"step-2-start-your-docusaurus-site",children:[]},{value:"That&#39;s it!",id:"thats-it",children:[]}],s={toc:i};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"step-1-generate-a-new-docusaurus-site"},"Step 1: Generate a new Docusaurus site"),Object(c.b)("p",null,"If you haven't already, generate a new Docusaurus site using the classic template:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"npx @docusaurus/init@latest init my-website classic\n")),Object(c.b)("h2",{id:"step-2-start-your-docusaurus-site"},"Step 2: Start your Docusaurus site"),Object(c.b)("p",null,"Run the development server in the newly created ",Object(c.b)("inlineCode",{parentName:"p"},"my-website")," folder:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"cd my-website\n\nnpx docusaurus start\n")),Object(c.b)("p",null,"Open ",Object(c.b)("inlineCode",{parentName:"p"},"docs/getting-started.md")," and edit some lines. The site reloads automatically and display your changes."),Object(c.b)("h2",{id:"thats-it"},"That's it!"),Object(c.b)("p",null,"Congratulations! You've successfully run and modified your Docusaurus project."))}l.isMDXComponent=!0},136:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(o,".").concat(b)]||p[b]||d[b]||c;return n?a.a.createElement(f,u(u({ref:t},s),{},{components:n})):a.a.createElement(f,u({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);