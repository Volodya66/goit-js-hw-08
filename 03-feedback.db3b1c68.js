function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var o,i,r,a,u,f,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function S(e){return l=e,u=setTimeout(O,t),c?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function O(){var e=m();if(j(e))return h(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?v(n,r-(e-l)):n}(e))}function h(e){return u=void 0,p&&o?b(e):(o=i=void 0,a)}function w(){var e=m(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(O,t),b(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=i=u=void 0},w.flush=function(){return void 0===u?a:h(m())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form"),S=b.querySelector('input[type="email"]'),j=b.querySelector('textarea[name="message"]');console.log(j),console.log(S);const O=localStorage.getItem("feedback-form-state");if(null!==O){const e=JSON.parse(O),{email:t,message:n}=e;S.value=t,j.value=n}console.log(O),b.addEventListener("input",e(t)((function(){const e={email:S.value,message:j.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(O)),localStorage.removeItem("feedback-form-state"),S.value="",j.value=""}));
//# sourceMappingURL=03-feedback.db3b1c68.js.map
