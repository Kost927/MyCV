parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FOZT":[function(require,module,exports) {
"use strict";function t(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return'<div class="row" style="'.concat(e,'">').concat(t,"</div>")}function e(t){return'<div class="col-sm">'.concat(t,"</div>")}function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("string"==typeof t)return t;return Object.keys(t).map(function(e){return"".concat(e,": ").concat(t[e])}).join(";")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.row=t,exports.col=e,exports.css=n;
},{}],"dDFO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextBlock=exports.ColumnsBlock=exports.ImageBlock=exports.TitleBlock=void 0;var t=require("../utils");function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function r(t){var e=i();return function(){var o,n=s(t);if(e){var r=s(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return c(this,o)}}function c(t,o){return!o||"object"!==e(o)&&"function"!=typeof o?u(t):o}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e,o){return e&&a(t.prototype,e),o&&a(t,o),t}var p=function(){function t(e,o){l(this,t),this.value=e,this.options=o}return f(t,[{key:"toHTML",value:function(){throw new Error("Метод toHTML должен быть реализован")}}]),t}(),y=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options,o=e.tag,n=void 0===o?"h1":o,r=e.styles;return(0,t.row)((0,t.col)("<".concat(n,">").concat(this.value,"</").concat(n,">")),(0,t.css)(r))}}]),c}();exports.TitleBlock=y;var h=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.options,o=e.imageStyles,n=e.alt,r=void 0===n?"":n,c=e.styles;return(0,t.row)('<img src="'.concat(this.value,'" alt="').concat(r,'" style="').concat((0,t.css)(o),'" />'),(0,t.css)(c))}}]),c}();exports.ImageBlock=h;var v=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){var e=this.value.map(t.col).join("");return(0,t.row)(e,(0,t.css)(this.options.styles))}}]),c}();exports.ColumnsBlock=v;var b=function(e){o(c,p);var n=r(c);function c(t,e){return l(this,c),n.call(this,t,e)}return f(c,[{key:"toHTML",value:function(){return(0,t.row)((0,t.col)("<p>".concat(this.value,"</p>")),(0,t.css)(this.options.styles))}}]),c}();exports.TextBlock=b;
},{"../utils":"FOZT"}],"iJA9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.goit=exports.english=exports.academy=exports.proj=exports.text=exports.contact=exports.languages=exports.soft=exports.tech=void 0;var i="<ul>\n<li>HTML5</li>\n<li>CSS3</li>\n<li>GIT</li>\n<li>WebPack</li>\n<li>Redux</li>\n<li>npm</li>\n<li>JavaScript</li>\n<li>React.js</li>\n</ul>";exports.tech=i;var n="<ul>\n<li>Result-oriented</li>\n<li>Sociable</li>\n<li>Reliable</li>\n<li>Patient</li>\n<li>Fast learner</li>\n<li>Good team player</li>\n<li>Optimistic & open to people.</li>\n</ul>";exports.soft=n;var e="<ul>\n<li>Ukranian</li>\n<li>English</li>\n<li>Russian</li>\n</ul>";exports.languages=e;var l='<ul>\n<li>Phone number: +380992903619</li>\n<li>Email: kost927@gmail.com</li>\n<li>Kiev</li>\n<li><a href="https://www.linkedin.com/in/kostyantin-polishko/">LinkedIn</a></li>\n\n</ul>';exports.contact=l;var t="\nI’m looking for a junior position to get a proper background in web development and gain practical skills. I’ve gotten decent skills of HTML/CSS and basic knowledge of JS & React during the intensive full-time course (4 months, 40 hours per week).  My plan is to get the first paid-job in the field max in 6 months. So, now, I want to focus on learning new skills and getting a real-life experience in Front-End.\n";exports.text=t;var o='<ul>\n<li>\n<a href="https://bit.ly/2FBj2LS">HELLENGLISH: </a> => CSS_3/HTML_5 => Chrome DevTools, Responsive Web, Mobile First, BEM, Bootstrap 4, SASS, Gulp \n</li>\n<li>\n<a href="https://bit.ly/3iDVm88">HOME APPLIANCES STORE: </a> => JavaScript=> OOP, ES6+, DOM, NPM, Webpack, REST/JSON, AJAX, CRUD, Firebase DB\n</li>\n<li>\n<a href="https://make-it-habit.netlify.app">MAKE IT HABIT: </a> => React.JS => React (Lazy/Suspense), Redux, React Hooks\n</li>\n<li>\n<a href="https://polishkocv.firebaseapp.com/">My CV: ( VanillaJS ) </a> => JavaScript => OOP, Parcel, Firebase DB, Firebase hosting, NPM, Bootstrap.\n</li>\n</ul>';exports.proj=o;var a="<ul>\n<li>\nEnd date 2011\n</li>\n<li>\nFoundry production, Master’s degree\n</li>\n</ul>";exports.academy=a;var r="<ul>\n<li>\nCourse.\n</li>\n<li>\nTraining center in Dnipro.\n</li>\n</ul>";exports.english=r;var s="<ul>\n<li>\nIT Bootcamp.\n</li>\n<li>\nFront end development.\n</li>\n</ul>";exports.goit=s;
},{}],"JDu1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.model=void 0;var e=require("./classes/blocks"),t=require("./constants"),l=[new e.TitleBlock("CAREER GOALS",{tag:"h2",styles:{color:"black",padding:"1.5rem","text-align":"left","font-weight":"black"}}),new e.TextBlock(t.text,{styles:{padding:"1rem","font-weight":"500","font-style":"italic"}}),new e.TitleBlock("PROJECTS",{tag:"h2",styles:{color:"black",padding:"1.5rem","text-align":"left","font-weight":"black"}}),new e.TextBlock(t.proj,{styles:{padding:"1rem","font-weight":"500","font-style":"italic"}}),new e.TitleBlock("EMPLOYMENT HISTORY",{tag:"h2",styles:{color:"black",padding:"1.5rem","text-align":"left","font-weight":"black"}}),new e.TitleBlock("English training school",{tag:"h4",styles:{color:"black",padding:"0.2rem 1.5rem","text-align":"left","font-weight":"black"}}),new e.TitleBlock("English teacher (Shanghai, CHINA) 2017 / 08 - 2020 / 03",{tag:"h5",styles:{color:"black",padding:"0.2rem 1.5rem","text-align":"left","font-weight":"black"}}),new e.TextBlock("Was awarded for being the best teacher at the school according to parents’ feedback and the number of students’ assignment.",{styles:{padding:"1rem","font-weight":"500","font-style":"italic"}}),new e.TitleBlock("Epicentr K",{tag:"h4",styles:{color:"black",padding:"0.2rem 1.5rem","text-align":"left","font-weight":"black"}}),new e.TitleBlock("Senior sales consultant 2016 / 03 - 2017 / 07",{tag:"h5",styles:{color:"black",padding:"0.2rem 1.5rem","text-align":"left","font-weight":"black"}}),new e.TextBlock("Became a senior consultant within 6 months after assessment of the work results and passing the tests.",{styles:{padding:"1rem","font-weight":"500","font-style":"italic"}}),new e.TitleBlock("Trubostal",{tag:"h4",styles:{color:"black",padding:"0.2rem 1.5rem","text-align":"left","font-weight":"black"}}),new e.TitleBlock("Head of Planning Production Department(Supply Chain) 2011 / 02 - 2016 / 03",{tag:"h5",styles:{color:"black",padding:"0.2rem 1.5rem","text-align":"left","font-weight":"black"}}),new e.TextBlock("Implemented new approaches for supply analysis to reduce waste, and completing all the production cycle on time to deliver a shipment according to the terms.",{styles:{padding:"1rem","font-weight":"500","font-style":"italic"}}),new e.TitleBlock("ACADEMIC HISTORY",{tag:"h2",styles:{color:"black",padding:"1.5rem","text-align":"left","font-weight":"black"}}),new e.TitleBlock("National Metallurgical Academy",{tag:"h4",styles:{color:"black",padding:"0.2rem 1.5rem","text-align":"left","font-weight":"black"}}),new e.TextBlock(t.academy,{styles:{"font-weight":"500","font-style":"italic"}}),new e.TitleBlock("English",{tag:"h4",styles:{color:"black",padding:"0.2rem 1.5rem","text-align":"left","font-weight":"black"}}),new e.TextBlock(t.english,{styles:{"font-weight":"500","font-style":"italic"}}),new e.TitleBlock("GOIT",{tag:"h4",styles:{color:"black",padding:"0.2rem 1.5rem","text-align":"left","font-weight":"black"}}),new e.TextBlock(t.goit,{styles:{"font-weight":"500","font-style":"italic"}})];exports.model=l;
},{"./classes/blocks":"dDFO","./constants":"iJA9"}],"V48B":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Site=void 0;var r=function(){function n(t){e(this,n),this.$el=document.querySelector(t)}return t(n,[{key:"render",value:function(e){var n=this;this.$el.innerHTML="",e.forEach(function(e){n.$el.insertAdjacentHTML("beforeend",e.toHTML())})}}]),n}();exports.Site=r;
},{}],"Nuwy":[function(require,module,exports) {
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Panel=void 0;var r=function(){function n(t){e(this,n),this.$el=document.querySelector(t)}return t(n,[{key:"render",value:function(e){var n=this;this.$el.innerHTML="",e.forEach(function(e){n.$el.insertAdjacentHTML("beforeend",e.toHTML())})}}]),n}();exports.Panel=r;
},{}],"Z1kE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=void 0;var e=require("./site"),n=require("./panel");function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function i(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}var o=function(){function t(e,n){r(this,t),this.model=e,this.sidebar=n}return i(t,[{key:"init",value:function(){new e.Site("#site").render(this.model),new n.Panel("#panel").render(this.sidebar)}}]),t}();exports.App=o;
},{"./site":"V48B","./panel":"Nuwy"}],"PUTY":[function(require,module,exports) {
module.exports="/polishko.357141a0.jpg";
},{}],"ZxGC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.sidebar=void 0;var e=i(require("./assets/polishko.jpg")),t=require("./classes/blocks"),l=require("./constants");function i(e){return e&&e.__esModule?e:{default:e}}var n=[new t.ImageBlock(e.default,{styles:{padding:"2rem 0",display:"flex","justify-content":"center"},imageStyles:{width:"80%",height:"auto","border-radius":"50%",border:"5px solid white"},alt:"My photo"}),new t.TitleBlock("KOSTIANTYN POLISHKO",{tag:"h1",styles:{padding:"0.3rem 1.5rem","text-align":"left","font-weight":"black"}}),new t.TitleBlock("Front-end developer",{tag:"h4",styles:{padding:"0 1.5rem","text-align":"left","font-weight":"black","font-style":"italic"}}),new t.TitleBlock("TECH SKILLS",{tag:"h2",styles:{padding:"1.5rem 1.5rem 0 1.5rem","text-align":"left","font-weight":"black"}}),new t.TextBlock(l.tech,{styles:{padding:"0 1.5rem 0 1.5rem","font-weight":"500","font-style":"italic"}}),new t.TitleBlock("SOFT SKILLS",{tag:"h2",styles:{padding:"1.5rem 1.5rem 0 1.5rem","text-align":"left","font-weight":"black"}}),new t.TextBlock(l.soft,{styles:{padding:"0 1.5rem 0 1.5rem","font-weight":"500","font-style":"italic"}}),new t.TitleBlock("LANGUAGES",{tag:"h2",styles:{padding:"1.5rem 1.5rem 0 1.5rem","text-align":"left","font-weight":"black"}}),new t.TextBlock(l.languages,{styles:{padding:"0 1.5rem 0 1.5rem","font-weight":"500","font-style":"italic"}}),new t.TitleBlock("CONTACT DETAILS:",{tag:"h2",styles:{padding:"1.5rem 1.5rem 0 1.5rem","text-align":"left","font-weight":"black"}}),new t.TextBlock(l.contact,{styles:{padding:"0 1.5rem 0 1.5rem","font-weight":"500","font-style":"italic"}})];exports.sidebar=n;
},{"./assets/polishko.jpg":"PUTY","./classes/blocks":"dDFO","./constants":"iJA9"}],"jExt":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./model"),r=require("./classes/app"),s=require("./sidebar");require("./styles/main.css"),new r.App(e.model,s.sidebar).init();
},{"./model":"JDu1","./classes/app":"Z1kE","./sidebar":"ZxGC","./styles/main.css":"jExt"}]},{},["Focm"], null)