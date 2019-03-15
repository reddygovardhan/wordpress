this.wp=this.wp||{},this.wp.listReusableBlocks=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=201)}({0:function(t,e){!function(){t.exports=this.wp.element}()},1:function(t,e){!function(){t.exports=this.wp.i18n}()},10:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return r})},11:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n(29),o=n(3);function i(t,e){return!e||"object"!==Object(r.a)(e)&&"function"!=typeof e?Object(o.a)(t):e}},12:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",function(){return o})},13:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",function(){return r})},2:function(t,e){!function(){t.exports=this.lodash}()},201:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(1),i=n(41),c=n(2),a=n(30),u=n.n(a);function s(t,e,n){var r=new window.Blob([e],{type:n});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(r,t);else{var o=document.createElement("a");o.href=URL.createObjectURL(r),o.download=t,o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)}}function l(t){var e=new window.FileReader;return new Promise(function(n){e.onload=function(){n(e.result)},e.readAsText(t)})}function f(){return(f=Object(i.a)(regeneratorRuntime.mark(function t(e){var n,r,o,i,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u()({path:"/wp/v2/types/wp_block"});case 2:return n=t.sent,t.next=5,u()({path:"/wp/v2/".concat(n.rest_base,"/").concat(e,"?context=edit")});case 5:r=t.sent,o=r.title.raw,i=r.content.raw,a=JSON.stringify({__file:"wp_block",title:o,content:i},null,2),s(Object(c.kebabCase)(o)+".json",a,"application/json");case 11:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var p=function(t){return f.apply(this,arguments)},b=n(4),d=n(10),m=n(9),h=n(11),y=n(13),v=n(12),O=n(3),w=n(7);function j(){return(j=Object(i.a)(regeneratorRuntime.mark(function t(e){var n,r,o,i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:n=t.sent,t.prev=3,r=JSON.parse(n),t.next=10;break;case 7:throw t.prev=7,t.t0=t.catch(3),new Error("Invalid JSON file");case 10:if("wp_block"===r.__file&&r.title&&r.content&&Object(c.isString)(r.title)&&Object(c.isString)(r.content)){t.next=12;break}throw new Error("Invalid Reusable Block JSON file");case 12:return t.next=14,u()({path:"/wp/v2/types/wp_block"});case 14:return o=t.sent,t.next=17,u()({path:"/wp/v2/".concat(o.rest_base),data:{title:r.title,content:r.content,status:"publish"},method:"POST"});case 17:return i=t.sent,t.abrupt("return",i);case 19:case"end":return t.stop()}},t,this,[[3,7]])}))).apply(this,arguments)}var _=function(t){return j.apply(this,arguments)},S=function(t){function e(){var t;return Object(d.a)(this,e),(t=Object(h.a)(this,Object(y.a)(e).apply(this,arguments))).state={isLoading:!1,error:null,file:null},t.isStillMounted=!0,t.onChangeFile=t.onChangeFile.bind(Object(O.a)(Object(O.a)(t))),t.onSubmit=t.onSubmit.bind(Object(O.a)(Object(O.a)(t))),t}return Object(v.a)(e,t),Object(m.a)(e,[{key:"componentWillUnmount",value:function(){this.isStillMounted=!1}},{key:"onChangeFile",value:function(t){this.setState({file:t.target.files[0]})}},{key:"onSubmit",value:function(t){var e=this;t.preventDefault();var n=this.state.file,r=this.props.onUpload;n&&(this.setState({isLoading:!0}),_(n).then(function(t){e.isStillMounted&&(e.setState({isLoading:!1}),r(t))}).catch(function(t){if(e.isStillMounted){var n;switch(t.message){case"Invalid JSON file":n=Object(o.__)("Invalid JSON file");break;case"Invalid Reusable Block JSON file":n=Object(o.__)("Invalid Reusable Block JSON file");break;default:n=Object(o.__)("Unknown error")}e.setState({isLoading:!1,error:n})}}))}},{key:"render",value:function(){var t=this.props.instanceId,e=this.state,n=e.file,i=e.isLoading,c=e.error,a="list-reusable-blocks-import-form-"+t;return Object(r.createElement)("form",{className:"list-reusable-blocks-import-form",onSubmit:this.onSubmit},c&&Object(r.createElement)(b.Notice,{status:"error"},c),Object(r.createElement)("label",{htmlFor:a,className:"list-reusable-blocks-import-form__label"},Object(o.__)("File")),Object(r.createElement)("input",{id:a,type:"file",onChange:this.onChangeFile}),Object(r.createElement)(b.Button,{type:"submit",isBusy:i,disabled:!n||i,isDefault:!0,className:"list-reusable-blocks-import-form__button"},Object(o._x)("Import","button label")))}}]),e}(r.Component),g=Object(w.withInstanceId)(S);var k=function(t){var e=t.onUpload;return Object(r.createElement)(b.Dropdown,{position:"bottom right",contentClassName:"list-reusable-blocks-import-dropdown__content",renderToggle:function(t){var e=t.isOpen,n=t.onToggle;return Object(r.createElement)(b.Button,{type:"button","aria-expanded":e,onClick:n,isPrimary:!0},Object(o.__)("Import from JSON"))},renderContent:function(t){var n=t.onClose;return Object(r.createElement)(g,{onUpload:Object(c.flow)(n,e)})}})};document.body.addEventListener("click",function(t){t.target.classList.contains("wp-list-reusable-blocks__export")&&(t.preventDefault(),p(t.target.dataset.id))}),document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".page-title-action");if(t){var e=document.createElement("div");e.className="list-reusable-blocks__container",t.parentNode.insertBefore(e,t),Object(r.render)(Object(r.createElement)(k,{onUpload:function(){var t=document.createElement("div");t.className="notice notice-success is-dismissible",t.innerHTML="<p>".concat(Object(o.__)("Reusable block imported successfully!"),"</p>");var e=document.querySelector(".wp-header-end");e&&e.parentNode.insertBefore(t,e)}}),e)}})},29:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return(o="function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?function(t){return r(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)})(t)}n.d(e,"a",function(){return o})},3:function(t,e,n){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",function(){return r})},30:function(t,e){!function(){t.exports=this.wp.apiFetch}()},4:function(t,e){!function(){t.exports=this.wp.components}()},41:function(t,e,n){"use strict";function r(t,e,n,r,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void n(t)}a.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise(function(o,i){var c=t.apply(e,n);function a(t){r(c,o,i,a,u,"next",t)}function u(t){r(c,o,i,a,u,"throw",t)}a(void 0)})}}n.d(e,"a",function(){return o})},7:function(t,e){!function(){t.exports=this.wp.compose}()},9:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",function(){return o})}});