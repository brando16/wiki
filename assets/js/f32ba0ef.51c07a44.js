(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{125:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return s}));var t=r(3),o=r(7),i=(r(0),r(133)),a={title:"Generale",slug:"/slicer"},c={unversionedId:"slicer/slicer",id:"slicer/slicer",isDocsHomePage:!1,title:"Generale",description:"GCode",source:"@site/docs/slicer/slicer.md",slug:"/slicer",permalink:"/wiki/docs/slicer",editUrl:"https://github.com/flyingbear-club-ita/wiki/tree/master/docs/docs/slicer/slicer.md",version:"current",sidebar:"docs",previous:{title:"Firmware",permalink:"/wiki/docs/firmware"},next:{title:"Informazioni",permalink:"/wiki/docs/slicer/cura"}},l=[{value:"GCode",id:"gcode",children:[{value:"Start Gcode",id:"start-gcode",children:[]},{value:"End Gcode",id:"end-gcode",children:[]}]}],u={toc:l};function s(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(t.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"gcode"},"GCode"),Object(i.a)("h3",{id:"start-gcode"},"Start Gcode"),Object(i.a)("p",null,"Comune per tutti gli slicer"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"}," M220 S100 ;Reset Feedrate\n M221 S100 ;Reset Flowrate  --\x3e da rimuovere in Ideamaker\n \n G28 ;Home\n \n ;Code for nozzle cleaning and flow normalization\n G92 E0 ;Reset Extruder\n G1 Z2.0 F3000 ;Move Z Axis up\n G1 X10.4 Y20 Z0.28 F5000.0\n G1 X10.4 Y170.0 Z0.28 F1500.0 E15\n G1 X10.1 Y170.0 Z0.28 F5000.0\n G1 X10.1 Y40 Z0.28 F1500.0 E30\n \n G92 E0 ;Reset Extruder\n G1 Z2.0 F3000 ;Move Z Axis up\n")),Object(i.a)("h3",{id:"end-gcode"},"End Gcode"),Object(i.a)("p",null,"Comune per tutti gli slicer"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"}," G91 ;Relative positioning\n G1 E-2 F2700 ;Retract the filament\n G1 E-2 Z0.2 F2400 ;Retract and raise Z\n G1 X5 Y5 F3000 ;Wipe out\n G1 Z10 ;Raise Z more\n G90 ;Absolute positionning\n \n G28 X0 Y0 ;Home X and Y \n \n M106 S0 ;Turn-off fan\n M104 S0 ;Turn-off hotend\n M140 S0 ;Turn-off bed\n \n M84 X Y E ;Disable all steppers but Z\n")))}s.isMDXComponent=!0},133:function(e,n,r){"use strict";r.d(n,"a",(function(){return f}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=t,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||i;return r?o.a.createElement(m,c(c({ref:n},u),{},{components:r})):o.a.createElement(m,c({ref:n},u))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);