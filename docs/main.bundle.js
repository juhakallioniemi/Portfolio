!function(t){function e(e){for(var o,a,c=e[0],s=e[1],p=e[2],u=0,f=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);for(l&&l(e);f.length;)f.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={0:0},i=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var l=s;i.push([244,2,1]),n()}({106:function(t){t.exports=JSON.parse('{"header":{"menu-titles":["Minusta","Projektit","Yhteydenotto"],"locale-button-disabled":"Tämä painike on poissa käytöstä nykyisessä tilassa.","repository":"GitHub ohjelmavarasto"},"main":{"noContent":"Sisältöä ei vielä saatavilla."},"footer":{"last-update":"Portfoliota on päivitetty viimeksi"},"projects":{"brand-game":"Brändi-peli"},"common":{"yes":"Kyllä","no":"Ei"},"popup":{"confirmation":{"title":"Poistu nykyisestä tilasta?","subtitle":"Tekemiäsi muutoksia ei välttämättä tallenneta!"},"project":{"title":"Miten haluat avata projektin {{project}}?","main-view":"Päänäkymä","new-tab":"Uusi välilehti"}}}')},110:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}}).call(this,n(100))},220:function(t,e,n){t.exports=n.p+"binary.jpg"},221:function(t,e,n){t.exports=n.p+"en.svg"},222:function(t,e,n){t.exports=n.p+"fi.svg"},244:function(t,e,n){"use strict";n.r(e);n(111),n(69);var o,r=n(0),i=n.n(r),a=n(42),c=(n(216),n(31)),s=function(){return(s=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},p=i.a.createContext({}),l=function(t){var e={popupType:{project:"project",confirmation:"confirmation"},activeType:"",redirectUrl:"",locationHash:"",setContext:function(t,e,n){a(s(s({},o),{activeType:t,redirectUrl:e,locationHash:n}))}},n=Object(r.useState)(e),o=n[0],a=n[1];return i.a.createElement(p.Provider,{value:o},t.children)},u=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),f=function(t){function e(e){var n=t.call(this,e)||this;return n.menuClick=function(t){var e=location.hash.split("/")[0];if(void 0!==location.hash.split("/")[2]){var o=n.context;o.setContext(o.popupType.confirmation,e+"/"+t,location.hash.split("/")[1])}else n.props.history.push(e+"/"+t),n.setState({activeButton:location.hash.split("/")[1]})},n.state={menuButtons:c.header["menu-titles"].map((function(t){return t.replace(/\s/g,"").toLowerCase()})),activeButton:location.hash.split("/")[1],activeProject:location.hash.split("/")[2]},n}return u(e,t),e.prototype.componentDidMount=function(){this.urlHandler()},e.prototype.componentDidUpdate=function(){var t=this;this.state.menuButtons.forEach((function(e){e===location.hash.split("/")[1]?a.findDOMNode(t.refs[e]).classList.add("active"):a.findDOMNode(t.refs[e]).classList.remove("active")}))},e.prototype.urlHandler=function(){var t="#"+this.props.i18n.language;this.state.activeButton&&(t+="/"+this.state.activeButton),this.state.activeProject&&(t+="/"+this.state.activeProject),this.props.history.push(t)},e.prototype.changeLanguage=function(t){this.props.changeLanguage(t),localStorage.setItem("lang",t)},e.prototype.localeButton=function(t){var e=this,n=void 0!==location.hash.split("/")[2],o="en"===t?"fi":"en";return r.createElement("button",{className:"flag-"+o,title:n?this.props.t("header.locale-button-disabled"):"",disabled:n,onClick:function(){return e.changeLanguage(o)}})},e.prototype.render=function(){var t=this;return r.createElement(r.Fragment,null,r.createElement("div",{className:"portfolio-title"},r.createElement("h1",{onClick:function(){return t.menuClick("")}},"Portfolio")),r.createElement("a",{href:"https://github.com/juhakallioniemi/portfolio",className:"repository-link",target:"_blank"},r.createElement("span",{className:"underline-animation"},this.props.t("header.repository"))),r.createElement("div",{className:"menu-links"},this.state.menuButtons.map((function(e,n){return r.createElement("button",{id:e,key:e,type:"button",className:"link-button",ref:e,onClick:function(){return t.menuClick(e)}},t.props.t("header.menu-titles")[n])}))),r.createElement("div",{className:"flag-icon"},this.localeButton(this.props.i18n.language)))},e}(r.Component);f.contextType=p;var h=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),m=function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function a(t){try{s(o.next(t))}catch(t){i(t)}}function c(t){try{s(o.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}s((o=o.apply(t,e||[])).next())}))},d=function(t,e){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},y=function(t){function e(e){var n=t.call(this,e)||this;return n.state={lastUpdate:""},n.lastModified(),n}return h(e,t),e.prototype.lastModified=function(){return m(this,void 0,void 0,(function(){var t,e;return d(this,(function(n){switch(n.label){case 0:return"https://api.github.com/repos/juhakallioniemi/portfolio/contents/docs/main.bundle.js",[4,fetch("https://api.github.com/repos/juhakallioniemi/portfolio/contents/docs/main.bundle.js")];case 1:return t=n.sent(),e=new Date(t.headers.get("Last-Modified")),this.setState({lastUpdate:e.toLocaleDateString(this.props.i18n.language)}),[2]}}))}))},e.prototype.render=function(){return r.createElement(r.Fragment,null,this.props.t("footer.last-update"),": ",this.state.lastUpdate)},e}(r.Component),v=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),b="brand-game/index.html",j=function(t){function e(e){var n=t.call(this,e)||this;return n.openProject=function(){var t=n.context;n.props.projectName===n.props.t("projects.brand-game")?t.setContext(t.popupType.project,b,location.hash+"/brand-game"):n.setState({projectInfo:n.props.t("main.noContent")})},n.state={projectInfo:n.props.projectName},n}return v(e,t),e.prototype.render=function(){this.context;return this.props.isProjectActive?r.createElement(r.Fragment,null,r.createElement("object",{className:"active-project",type:"text/html",data:b})):r.createElement(r.Fragment,null,r.createElement("div",{className:"project",onClick:this.openProject},r.createElement("div",{className:"project-content"},this.state.projectInfo)))},e}(r.Component);j.contextType=p;var g=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),E=function(t){function e(e){var n=t.call(this,e)||this;return n.state={isProjectActive:void 0!==location.hash.split("/")[2]},n}return g(e,t),e.prototype.render=function(){return this.state.isProjectActive?r.createElement("div",{className:"projects-list",style:{padding:0}},r.createElement(j,{isProjectActive:!0})):r.createElement("div",{className:"projects-list"},r.createElement(j,{projectName:this.props.t("projects.brand-game"),t:this.props.t,i18n:this.props.i18n,history:this.props.history}),r.createElement(j,{projectName:"TODO",t:this.props.t,i18n:this.props.i18n}),r.createElement(j,{projectName:"TODO",t:this.props.t,i18n:this.props.i18n}))},e}(r.Component),w=n(102),_=n.n(w),k=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),O=function(t){function e(e){var n=t.call(this,e)||this;return n.getShortId=function(){return _.a.generate()},n.state={isProjectActive:!1},n}return k(e,t),e.prototype.componentDidUpdate=function(){location.hash.split("/")[2]&&!this.state.isProjectActive?this.setState({isProjectActive:!0}):!location.hash.split("/")[2]&&this.state.isProjectActive&&this.setState({isProjectActive:!1}),console.log("main update - project active: "+this.state.isProjectActive)},e.prototype.render=function(){return location.hash.split("/")[1]===c.header["menu-titles"][1].toLowerCase()?r.createElement("div",{className:"main-content",key:this.getShortId()},r.createElement(E,{t:this.props.t,i18n:this.props.i18n,history:this.props.history})):r.createElement("div",{className:"main-content",key:this.getShortId()},r.createElement("div",{className:"no-content"},this.props.t("main.noContent")))},e}(r.Component),C=n(107),P=n(24),N=n(50),x=n(68),S=n(106),B={en:{translation:c},fi:{translation:S}};x.a.use(N.a).init({resources:B,lng:"en",fallbackLng:"en",returnObjects:!0,keySeparator:".",interpolation:{escapeValue:!1},react:{wait:!0}});x.a;var T=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),A=function(t){function e(e){var n=t.call(this,e)||this;return n.mainButtonClicked=function(t){n.props.history.push(t.locationHash),t.setContext("")},n.tabButtonClicked=function(t){window.open(t.redirectUrl,"_blank"),t.setContext("")},n.yesButtonClicked=function(t){n.props.history.push(t.redirectUrl),t.setContext("")},n.noButtonClicked=function(t){t.setContext("")},n.state={projectName:""},n}return T(e,t),e.prototype.popupModal=function(){var t=this,e=this.context;return"project"===e.activeType?r.createElement("div",{id:"popup"},r.createElement("div",{className:"popup-info"},r.createElement("button",{type:"button",className:"close popup-close",onClick:function(){return t.noButtonClicked(e)}},r.createElement("span",null,"×"))),r.createElement("h3",{className:"popup-title"},this.props.t("popup.project.title",{project:this.props.t("projects."+e.locationHash.split("/").pop())})),r.createElement("div",{className:"button-container"},r.createElement("button",{id:"popup-button-main",onClick:function(){return t.mainButtonClicked(e)}},this.props.t("popup.project.main-view")),r.createElement("button",{id:"popup-button-tab",onClick:function(){return t.tabButtonClicked(e)}},this.props.t("popup.project.new-tab")))):"confirmation"===e.activeType?r.createElement("div",{id:"popup"},r.createElement("div",{className:"popup-info"},r.createElement("button",{type:"button",className:"close popup-close",onClick:function(){return t.noButtonClicked(e)}},r.createElement("span",null,"×"))),r.createElement("h3",{className:"popup-title"},this.props.t("popup.confirmation.title")),r.createElement("h4",{className:"popup-subtitle"},this.props.t("popup.confirmation.subtitle")),r.createElement("div",{className:"button-container"},r.createElement("button",{id:"popup-button-main",onClick:function(){return t.yesButtonClicked(e)}},this.props.t("common.yes")),r.createElement("button",{id:"popup-button-tab",onClick:function(){return t.noButtonClicked(e)}},this.props.t("common.no")))):void 0},e.prototype.render=function(){return r.createElement(r.Fragment,null,this.popupModal())},e}(r.Component);A.contextType=p;var M=function(){return(M=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},L=function(){var t=Object(N.b)(),e=t.t,n=t.i18n,o=Object(r.useState)(!1),i=o[0],a=o[1],c=function(t){n.changeLanguage(t)};return i||(c(localStorage.getItem("lang")||"en"),a(!0)),r.createElement(l,null,r.createElement(C.a,null,r.createElement(P.a,{component:function(t){return r.createElement(A,M({t:e,i18n:n},t))}}),r.createElement("header",null,r.createElement(P.a,{component:function(t){return r.createElement(f,M({t:e,i18n:n,changeLanguage:c},t))}})),r.createElement("main",null,r.createElement(P.a,{component:function(t){return r.createElement(O,M({t:e,i18n:n},t))}})),r.createElement("footer",null,r.createElement(P.a,{component:function(){return r.createElement(y,{t:e,i18n:n})}}))))},U=n(110);a.render(r.createElement(L,null),document.getElementById("root")),U.a()},31:function(t){t.exports=JSON.parse('{"header":{"menu-titles":["About Me","Projects","Contact"],"locale-button-disabled":"This button is disabled in the current state.","repository":"GitHub repository"},"main":{"noContent":"Content not yet available."},"footer":{"last-update":"Portofolio was last updated on"},"projects":{"brand-game":"Brand game"},"common":{"yes":"Yes","no":"No"},"popup":{"confirmation":{"title":"Exit the current state?","subtitle":"Changes you made may not be saved!"},"project":{"title":"How do you want to open the project {{project}}?","main-view":"Main view","new-tab":"New tab"}}}')}});