(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[836],{7942:function(e,n,t){"use strict";var r=t(5696);n.default=void 0;var a,o=(a=t(7294))&&a.__esModule?a:{default:a},i=t(4957),c=t(9898),s=t(639);var l={};function u(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,a=c.useRouter(),f=o.default.useMemo((function(){var n=i.resolveHref(a,e.href,!0),t=r(n,2),o=t[0],c=t[1];return{href:o,as:e.as?i.resolveHref(a,e.as):c||o}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,_=e.shallow,m=e.scroll,g=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var x=(n=o.default.Children.only(p))&&"object"===typeof n&&n.ref,j=s.useIntersection({rootMargin:"200px"}),y=r(j,2),b=y[0],N=y[1],k=o.default.useCallback((function(e){b(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,b]);o.default.useEffect((function(){var e=N&&t&&i.isLocalURL(d),n="undefined"!==typeof g?g:a&&a.locale,r=l[d+"%"+h+(n?"%"+n:"")];e&&!r&&u(a,d,h,{locale:n})}),[h,d,N,g,t,a]);var C={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[a?"replace":"push"](t,r,{shallow:o,locale:s,scroll:c}))}(e,a,d,h,v,_,m,g)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(d)&&u(a,d,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof g?g:a&&a.locale,L=a&&a.isLocaleDomain&&i.getDomainLocale(h,E,a&&a.locales,a&&a.domainLocales);C.href=L||i.addBasePath(i.addLocale(h,E,a&&a.defaultLocale))}return o.default.cloneElement(n,C)};n.default=f},639:function(e,n,t){"use strict";var r=t(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,s=e.disabled||!i,l=a.useRef(),u=a.useState(!1),f=r(u,2),d=f[0],h=f[1],p=a.useState(n?n.current:null),v=r(p,2),_=v[0],m=v[1],g=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),s||d||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,i=r.elements;return i.set(e,n),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&h(e)}),{root:_,rootMargin:t}))}),[s,_,t,d]);return a.useEffect((function(){if(!i&&!d){var e=o.requestIdleCallback((function(){return h(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){n&&m(n.current)}),[n]),[g,d]};var a=t(7294),o=t(6286),i="undefined"!==typeof IntersectionObserver;var c=new Map},101:function(e,n,t){"use strict";t.d(n,{$_:function(){return f},h4:function(){return c},CU:function(){return p}});var r=t(1664),a=t(9582),o=t.n(a),i=t(5893);function c(){return(0,i.jsxs)("header",{className:o().header,children:[(0,i.jsx)(s,{name:"Polylogue.xyz",description:"A Lisbon commmunity for sharing interesting ideas with interesting people"}),(0,i.jsxs)("nav",{className:o().nav,children:[(0,i.jsx)(r.default,{href:"/",as:"/",children:(0,i.jsx)("a",{children:"Talks"})}),(0,i.jsx)(r.default,{href:"/speaker-sign-up",as:"/speaker-sign-up",children:(0,i.jsx)("a",{children:"Speaker sign up"})}),(0,i.jsx)(r.default,{href:"/contact-us",as:"/contact-us",children:(0,i.jsx)("a",{children:"Contact us"})})]})]})}function s(e){var n=e.name,t=e.description;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.default,{href:"/",children:(0,i.jsx)("a",{className:o().titleAvatar})}),(0,i.jsxs)("div",{className:o().titleInfoArea,children:[(0,i.jsx)("h1",{className:o().titleName,children:n}),(0,i.jsx)("p",{className:o().titleDescription,children:t})]})]})}var l=t(6932),u=t.n(l);function f(){return(0,i.jsx)("footer",{className:u().footer,children:"TODO: footer - email, telegram link"})}var d=t(4804),h=t.n(d);function p(e){var n=e.children;return(0,i.jsxs)("div",{className:h().container,children:[(0,i.jsx)(c,{}),(0,i.jsx)("main",{className:h().main,children:n}),(0,i.jsx)(f,{})]})}},4393:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var r=t(101),a=t(5893);function o(){return(0,a.jsx)(r.CU,{children:(0,a.jsx)("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSc6DTSdVcoKF-dSRcQj4_taUy6_eTRXZMEqKtadhx2qKjhXgg/viewform?embedded=true",width:"640",height:"978",frameBorder:"0",marginHeight:"0",marginWidth:"0",children:"Loading..."})})}},1665:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/speaker-sign-up",function(){return t(4393)}])},6932:function(e){e.exports={footer:"footer_footer__RQUzZ"}},9582:function(e){e.exports={header:"header_header__cagQO",titleAvatar:"header_titleAvatar___4hI1",titleInfoArea:"header_titleInfoArea__amf6C",titleName:"header_titleName__k_uCU",titleDescription:"header_titleDescription__Cyb7U",nav:"header_nav___KPgb"}},4804:function(e){e.exports={container:"page-frame_container__31CsM",main:"page-frame_main__oy6nJ"}},1664:function(e,n,t){e.exports=t(7942)}},function(e){e.O(0,[774,888,179],(function(){return n=1665,e(e.s=n);var n}));var n=e.O();_N_E=n}]);