(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var r=a(3),i=a(8),l=(a(0),a(136)),n={title:"Calibrazione Flusso",slug:"/3dprinting/flusso"},o={unversionedId:"3dprinting/flusso",id:"3dprinting/flusso",isDocsHomePage:!1,title:"Calibrazione Flusso",description:"Calibrare il flusso e' importante per non andare fuori di testa quando si cercano i parametri ottimali per un nuovo filamento, quello col quale tutti stampano da dio, ma a te viene una mezza schifezza",source:"@site/docs/3dprinting/flusso.md",slug:"/3dprinting/flusso",permalink:"/wiki/docs/3dprinting/flusso",editUrl:"https://github.com/flyingbear-club-ita/wiki/tree/master/docs/3dprinting/flusso.md",version:"current",sidebar:"docs",previous:{title:"Temp Tower Ideamaker",permalink:"/wiki/docs/slicer/ideamaker/temptower"},next:{title:"Errori",permalink:"/wiki/docs/errori"}},c=[],s={toc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Calibrare il flusso e' importante per non andare fuori di testa quando si cercano i parametri ottimali per un nuovo filamento, quello col quale tutti stampano da dio, ma a te viene una mezza schifezza"),Object(l.b)("p",null,"Questo tipo di calibrazione viene fatta per trovare la corretta percentuale di materiale da estrudere, consente di rimuovere imperfezioni come blob (sovra estrusione) o buchi (sotto estrusione), oltre ad aumentare la qualita' delle zone con overhang molto vicino al limite prima di dover per forza utilizzare supporti (45 gradi)"),Object(l.b)("p",null,"Il test che consigliamo di utilizzare si puo' trovare facilmente su thingiverse"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://www.thingiverse.com/thing:3397997"},"Test Flusso")),Object(l.b)("p",null,"Questo test stampa solo quattro pareti, con due perimetri ciascuna"),Object(l.b)("p",null,'Una volta scaricato, aprite lo slicer che usate e caricate il file per il vostro ugello (esempio: per un ugello da 0.4, caricare 35x35_0.4mm_nozzle_flowrate_calibration.stl), poi cercate il parametro "line width" (larghezza della linea), o qualcosa di simile, nel vostro slicer preferito'),Object(l.b)("p",null,"Questo parametro determina la larghezza della linea estrusa dall'ugello (che puo' essere piu' grande o piu' piccola del diametro dell'ugello stesso)"),Object(l.b)("p",null,"Nell'esempio qui sotto, abbiamo settato una larghezza della linea di 0.4mm (solitamente questo e' il valore di default di tutti gli slicer per un ugello 0.4) "),Object(l.b)("p",null,"Il secondo parametro importante e' il numero dei perimetri, che va settato a 2 (anche se non ce ne sarebbe bisogno: le pareti sono troppo sottili per avere piu' di due strati)"),Object(l.b)("p",null,"Il terzo parametro e' il flusso, che settiamo al valore di default, 100%"),Object(l.b)("p",null,"La temperatura scelta per questo test e' la piu' bassa tra quelle indicate dal fornitore, in questo caso 190 gradi"),Object(l.b)("p",null,"Adesso un po' di calcoli:"),Object(l.b)("p",null,"Moltiplicando la larghezza della linea per il numero dei perimetri, si ottiene uno spessore di 0.8mm, che e' il nostro valore atteso per lo spessore delle pareti stampate"),Object(l.b)("p",null,"Stampate il file, il risultato sara' come in figura"),Object(l.b)("p",null,Object(l.b)("a",{target:"_blank",href:a(294).default}," ",Object(l.b)("img",{alt:"Prima stampa calcolo flusso",src:a(295).default})," ")),Object(l.b)("p",null,"Per trovare il valore corretto del flusso, bisogna prima misurare, col calibro con divisione 0.01, gli ultimi strati delle pareti, nel mezzo, una alla volta, come nelle figure"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:"center"},"Primo Lato"),Object(l.b)("th",{parentName:"tr",align:"center"},"Secondo Lato"),Object(l.b)("th",{parentName:"tr",align:"center"},"Terzo Lato"),Object(l.b)("th",{parentName:"tr",align:"center"},"Quarto Lato"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:"center"},Object(l.b)("a",{target:"_blank",href:a(296).default},Object(l.b)("img",{src:a(297).default}))),Object(l.b)("td",{parentName:"tr",align:"center"},Object(l.b)("a",{target:"_blank",href:a(298).default},Object(l.b)("img",{src:a(299).default}))),Object(l.b)("td",{parentName:"tr",align:"center"},Object(l.b)("a",{target:"_blank",href:a(300).default},Object(l.b)("img",{src:a(301).default}))),Object(l.b)("td",{parentName:"tr",align:"center"},Object(l.b)("a",{target:"_blank",href:a(302).default},Object(l.b)("img",{src:a(303).default})))))),Object(l.b)("p",null,"Come possiamo vedere, sono tutte completamente sballate."),Object(l.b)("p",null,"Facciamo la media dei valori:"),Object(l.b)("p",null,"(0.90 + 0.90 + 0.88 + 0.91)/4 = 3.59/4 = 0.8975"),Object(l.b)("p",null,"Poi usiamo la seguente formula:"),Object(l.b)("p",null,"(valore atteso / valore medio misurato) * %flusso"),Object(l.b)("p",null,"Dalla quale troveremo:"),Object(l.b)("p",null,"(0.8 / 0.8975) * 100 = 0.8913 => il valore ottimale per il flusso e' 89%"),Object(l.b)("p",null,"Adesso ristampiamo il test coi parametri aggiornati e andiamo a misurare lo spessore delle pareti"),Object(l.b)("p",null,Object(l.b)("a",{target:"_blank",href:a(174).default},Object(l.b)("img",{src:a(175).default})),"\nPrimo Lato  | Secondo Lato | Terzo Lato  | Quarto Lato",Object(l.b)("br",{parentName:"p"}),"\n",":----------:|:------------:|:-----------:|:------------:\n",Object(l.b)("a",{target:"_blank",href:a(174).default},Object(l.b)("img",{src:a(175).default})),"  |  ",Object(l.b)("a",{target:"_blank",href:a(304).default},Object(l.b)("img",{src:a(305).default})),"  | ",Object(l.b)("a",{target:"_blank",href:a(306).default},Object(l.b)("img",{src:a(307).default})),"  |  ",Object(l.b)("a",{target:"_blank",href:a(308).default},Object(l.b)("img",{src:a(309).default}))),Object(l.b)("p",null,"I valori misurati sono in linea, al centesimo di millimetro, con il valore atteso, la calibrazione del flusso adesso e' completa"))}b.isMDXComponent=!0},136:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),i=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,n=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(a),f=r,d=u["".concat(n,".").concat(f)]||u[f]||p[f]||l;return a?i.a.createElement(d,o(o({ref:t},s),{},{components:a})):i.a.createElement(d,o({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,n=new Array(l);n[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,n[1]=o;for(var s=2;s<l;s++)n[s]=a[s];return i.a.createElement.apply(null,n)}return i.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},174:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/files/afterCalib1-bfa741f09fc07c67a6037e84afb40bf4.jpg"},175:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/afterCalib1-bfa741f09fc07c67a6037e84afb40bf4.jpg"},294:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/files/primaStampaFlow-f267676025b12850b1c2d4635322b832.jpg"},295:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/primaStampaFlow-f267676025b12850b1c2d4635322b832.jpg"},296:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/files/beforeCalib1-0427ccd94d9ce7af858b1b5b1422248e.jpg"},297:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/beforeCalib1-0427ccd94d9ce7af858b1b5b1422248e.jpg"},298:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/files/beforeCalib2-8bbb80b5c654ba5f413f61ec85a32ebe.jpg"},299:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/beforeCalib2-8bbb80b5c654ba5f413f61ec85a32ebe.jpg"},300:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/files/beforeCalib3-dc53762e14d1c84c382d3f78b2f48c5b.jpg"},301:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/beforeCalib3-dc53762e14d1c84c382d3f78b2f48c5b.jpg"},302:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/files/beforeCalib4-cc7cd8a1b0cc839a05dfdb23d3842c94.jpg"},303:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/beforeCalib4-cc7cd8a1b0cc839a05dfdb23d3842c94.jpg"},304:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/files/afterCalib2-984574829a8b0fb452e2a312148cbbdb.jpg"},305:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/afterCalib2-984574829a8b0fb452e2a312148cbbdb.jpg"},306:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/files/afterCalib3-80fb67cf86ee6ef501c9482c912ae4a2.jpg"},307:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/afterCalib3-80fb67cf86ee6ef501c9482c912ae4a2.jpg"},308:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/files/afterCalib4-e63bae75a158fabc922cdb01fdaeca23.jpg"},309:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/afterCalib4-e63bae75a158fabc922cdb01fdaeca23.jpg"}}]);