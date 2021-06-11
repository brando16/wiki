(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{124:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return l})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return p}));var n=t(3),i=t(7),r=(t(0),t(133)),o={title:"Primi Passi",slug:"/"},l={unversionedId:"primi-passi",id:"primi-passi",isDocsHomePage:!1,title:"Primi Passi",description:"Software",source:"@site/docs/primi-passi.md",slug:"/",permalink:"/wiki/docs/",editUrl:"https://github.com/flyingbear-club-ita/wiki/tree/master/docs/docs/primi-passi.md",version:"current",sidebar:"docs",next:{title:"Calibrazioni",permalink:"/wiki/docs/calibrazioni"}},c=[{value:"Software",id:"software",children:[{value:"Lingua",id:"lingua",children:[]},{value:"Sicurezza",id:"sicurezza",children:[]},{value:"Wifi",id:"wifi",children:[]},{value:"Quinto punto calibrazione",id:"quinto-punto-calibrazione",children:[]}]},{value:"Considerazioni finali",id:"considerazioni-finali",children:[]}],s={toc:c};function p(e){var a=e.components,o=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},s,o,{components:a,mdxType:"MDXLayout"}),Object(r.a)("h2",{id:"software"},"Software"),Object(r.a)("p",null,"Il firmware, cio\xe8 il programma che fa funzionare la stampante, \xe8 installato nella memoria della scheda madre, contenuta nella base "),Object(r.a)("p",null,"Pu\xf2 essere aggiornato molto facilmente tramite la scheda microSD fornita con la stampante"),Object(r.a)("p",null,"Un primo consiglio che possiamo darvi \xe8 di aggiornare immediatamente la stampante con il pi\xf9 recente firmware, da scaricare da Github (link in alto a destra, oppure nella sezione ",Object(r.a)("em",{parentName:"p"},"Firmware"),"): conterr\xe0 diversi bugfix e vi eviter\xe0 problemi di compatibilit\xe0 con le guide su questa Wiki"),Object(r.a)("p",null,"Per prima cosa, effettuare un backup della scheda (passo facoltativo, se non vi importa niente del contenuto, che, di default, dovrebbe essere il file di config per il firmware e i file stl e gcode della vite e del bullone)"),Object(r.a)("p",null,"Una volta copiato il contenuto della scheda in una cartella di vostra preferenza:"),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Scaricate il firmware"),Object(r.a)("li",{parentName:"ol"},"Scompattatelo in una cartella che terrete come backup per sicurezza"),Object(r.a)("li",{parentName:"ol"},"Copiatene il contenuto nella microSD"),Object(r.a)("li",{parentName:"ol"},"Rimuovete il dispositivo USB"),Object(r.a)("li",{parentName:"ol"},"Inserite la scheda nella stampante (attenzione: la scheda va inserita capovolta rispetto a come si inserisce nell'adattatore!)"),Object(r.a)("li",{parentName:"ol"},"Spegnere (se accesa) e accendere la stampante")),Object(r.a)("p",null,"Una volta accesa, comparir\xe0 il logo della Flying Bear e poi una barra di progresso, che indicher\xe0 lo stato dell'installazione del firmware\n",Object(r.a)("a",{target:"_blank",href:t(329).default}," ",Object(r.a)("img",{alt:"Barra di progresso aggiornamento",src:t(330).default})," ")),Object(r.a)("p",null,"Completata questa operazione, vi si presentar\xe0 il menu. Siete un passo pi\xf9 vicini alla vostra prima stampa con la Flying Bear Ghost!\nNon fatevi tentare dallo smanettare con il menu: "),Object(r.a)("ol",null,Object(r.a)("li",{parentName:"ol"},"Prendete subito la microSD"),Object(r.a)("li",{parentName:"ol"},"Estraetela"),Object(r.a)("li",{parentName:"ol"},"Inseritela nel computer"),Object(r.a)("li",{parentName:"ol"},"Scaricate il file robin_nano35_cfg.cur (controllare nome ed estensione)"),Object(r.a)("li",{parentName:"ol"},"Apritelo e salvatelo come robin_nano35_cfg.txt (",Object(r.a)("em",{parentName:"li"},"shortcut: F2 per Ubuntu, Enter per macOS"),")")),Object(r.a)("p",null,"Questo file contiente tutti i principali parametri della stampante. Cambiare un valore in questo file permette di modificare quel valore sul firmware installato"),Object(r.a)("p",null,"Vediamo come e cosa cambiare:"),Object(r.a)("p",null,"Aprite il file robin_nano35_cfg.txt che avevate creato prima, apritelo con il vosto editor preferito. Cercate le seguenti linee e cambiate il parametro corrispondente (sempre almeno uno spazio tra la parola in maiuscolo ed il valore corrispondente. pi\xf9 spazi non contano)"),Object(r.a)("h3",{id:"lingua"},"Lingua"),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre"},"cfg_language_type 7 # Language selection 2 - English 3 - Russian 7 - Italiano\n")),Object(r.a)("h3",{id:"sicurezza"},"Sicurezza"),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre",5:!0,className:"language-HEATER_0_MINTEMP",metastring:"5 # It is recommended to set exactly 5 (not -5) to avoid overheating if the sensor","#":!0,It:!0,is:!0,recommended:!0,to:!0,set:!0,exactly:!0,"(not":!0,"-5)":!0,avoid:!0,overheating:!0,if:!0,the:!0,sensor:!0},"HEATER_1_MINTEMP 5 # It is recommended to set exactly 5 (not -5 ) in order to avoid overheating in the event of a sensor breakdown\nTHERMAL_PROTECTION_PERIOD 30 # Polling time for thermal protection, seconds \nTHERMAL_PROTECTION_HYSTERESIS 10 # Change in degrees C \nWATCH_TEMP_PERIOD 30 # Polling time for thermal protection, seconds \nWATCH_TEMP_INCREASE     2\nTHERMAL_PROTECTION_BED_PERIOD 30 # Poll time for thermal protection, seconds \nTHERMAL_PROTECTION_BED_HYSTERESIS 3 # Change in degrees C \nWATCH_BED_TEMP_PERIOD 60 # Poll time for thermal protection, seconds \nWATCH_BED_TEMP_INCREASE 2 # Change \n")),Object(r.a)("h3",{id:"wifi"},"Wifi"),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre"},"CFG_WIFI_AP_NAME # name of WiFi, write before # \nCFG_WIFI_KEY_CODE # password WiFi, write before #\n")),Object(r.a)("p",null,"Inserire come in foto il nome della vostra Wi-Fi e la password di accesso al Wi-Fi\n",Object(r.a)("img",{alt:"alt text",src:t(331).default,title:"wifi"})),Object(r.a)("h3",{id:"quinto-punto-calibrazione"},"Quinto punto calibrazione"),Object(r.a)("p",null,"\xc8 possibile aggiungere un punto ulteriore di calibrazione (a scelta dell'utente) nell'intefaccia (quattro di standard), per livellare il piatto anche al centro, oltre che negli angoli"),Object(r.a)("p",null,"Suggerimento: i primi quattro punti vanno bene, le coordinate sono giuste, il quinto punto dovrebbe essere centrale, modificare con coordinate del centro"),Object(r.a)("pre",null,Object(r.a)("code",{parentName:"pre"}," cfg_point_number 5\n cfg_point1:30,30                       \n cfg_point2:235,30\n cfg_point3:235,190\n cfg_point4:30,190\n cfg_point5:125,105\n")),Object(r.a)("p",null,"La procedura di aggiornamento e' la solita"),Object(r.a)("h2",{id:"considerazioni-finali"},"Considerazioni finali"),Object(r.a)("p",null,"Una volta completati i passi precedenti, e' sempre meglio fare una copia del robin_nano_cfg.txt e cancellare il contenuto della SD"),Object(r.a)("p",null,"La stampante, cosi' com'e', e' pronta per stampare. Per aumentare la qualita' di stampa, pero', ci sono alcune calibrazioni da fare"),Object(r.a)("p",null,"Nella pagina successiva ci sono tutte le calibrazioni necessarie"))}p.isMDXComponent=!0},133:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(0),i=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var a=i.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},d=i.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=n,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return t?i.a.createElement(f,l(l({ref:a},s),{},{components:t})):i.a.createElement(f,l({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},329:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/files/TFT_Update-c87e3a174b111ea34c7b7fedefa6336b.jpg"},330:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/TFT_Update-c87e3a174b111ea34c7b7fedefa6336b.jpg"},331:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/wifi_config-1622012459a91c9a728165aa8bb90f68.png"}}]);