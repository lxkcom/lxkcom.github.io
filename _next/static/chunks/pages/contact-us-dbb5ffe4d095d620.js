(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[455],{7942:function(e,n,r){"use strict";var t=r(5696);n.default=void 0;var a,o=(a=r(7294))&&a.__esModule?a:{default:a},i=r(4957),c=r(9898),s=r(639);var l={};function u(e,n,r,t){if(e&&i.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,a=c.useRouter(),f=o.default.useMemo((function(){var n=i.resolveHref(a,e.href,!0),r=t(n,2),o=r[0],c=r[1];return{href:o,as:e.as?i.resolveHref(a,e.as):c||o}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,v=e.replace,_=e.shallow,m=e.scroll,x=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var g=(n=o.default.Children.only(p))&&"object"===typeof n&&n.ref,j=s.useIntersection({rootMargin:"200px"}),y=t(j,2),b=y[0],N=y[1],C=o.default.useCallback((function(e){b(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,b]);o.default.useEffect((function(){var e=N&&r&&i.isLocalURL(d),n="undefined"!==typeof x?x:a&&a.locale,t=l[d+"%"+h+(n?"%"+n:"")];e&&!t&&u(a,d,h,{locale:n})}),[h,d,N,x,r,a]);var k={ref:C,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,a,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==c&&t.indexOf("#")>=0&&(c=!1),n[a?"replace":"push"](r,t,{shallow:o,locale:s,scroll:c}))}(e,a,d,h,v,_,m,x)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),i.isLocalURL(d)&&u(a,d,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof x?x:a&&a.locale,w=a&&a.isLocaleDomain&&i.getDomainLocale(h,E,a&&a.locales,a&&a.domainLocales);k.href=w||i.addBasePath(i.addLocale(h,E,a&&a.defaultLocale))}return o.default.cloneElement(n,k)};n.default=f},639:function(e,n,r){"use strict";var t=r(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,r=e.rootMargin,s=e.disabled||!i,l=a.useRef(),u=a.useState(!1),f=t(u,2),d=f[0],h=f[1],p=a.useState(n?n.current:null),v=t(p,2),_=v[0],m=v[1],x=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),s||d||e&&e.tagName&&(l.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=c.get(n);if(r)return r;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return c.set(n,r={id:n,observer:a,elements:t}),r}(r),a=t.id,o=t.observer,i=t.elements;return i.set(e,n),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&h(e)}),{root:_,rootMargin:r}))}),[s,_,r,d]);return a.useEffect((function(){if(!i&&!d){var e=o.requestIdleCallback((function(){return h(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){n&&m(n.current)}),[n]),[x,d]};var a=r(7294),o=r(6286),i="undefined"!==typeof IntersectionObserver;var c=new Map},101:function(e,n,r){"use strict";r.d(n,{$_:function(){return f},h4:function(){return c},CU:function(){return p}});var t=r(1664),a=r(9582),o=r.n(a),i=r(5893);function c(){return(0,i.jsxs)("header",{className:o().header,children:[(0,i.jsx)(s,{name:"Polylogue.xyz",description:"Sharing curious ideas with curious people"}),(0,i.jsxs)("nav",{className:o().nav,children:[(0,i.jsx)(t.default,{href:"/",children:(0,i.jsx)("a",{children:"Talks"})}),(0,i.jsx)(t.default,{href:"/gallery",children:(0,i.jsx)("a",{children:"Gallery"})}),(0,i.jsx)(t.default,{href:"/speaker-sign-up",children:(0,i.jsx)("a",{children:"Speaker sign up"})}),(0,i.jsx)(t.default,{href:"/contact-us",children:(0,i.jsx)("a",{children:"Contact us"})})]})]})}function s(e){var n=e.name,r=e.description;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.default,{href:"/",children:(0,i.jsx)("a",{className:o().titleAvatar})}),(0,i.jsxs)("div",{className:o().titleInfoArea,children:[(0,i.jsx)("h1",{className:o().titleName,children:n}),(0,i.jsx)("p",{className:o().titleDescription,children:r})]})]})}var l=r(6932),u=r.n(l);function f(){return(0,i.jsx)("footer",{className:u().footer,children:"TODO: footer - email, telegram link"})}var d=r(4804),h=r.n(d);function p(e){var n=e.children;return(0,i.jsxs)("div",{className:h().container,children:[(0,i.jsx)(c,{}),(0,i.jsx)("main",{className:h().main,children:n}),(0,i.jsx)(f,{})]})}},925:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return o}});var t=r(101),a=r(5893);function o(){return(0,a.jsx)(t.CU,{children:"TODO: iframes page to start for google form, or obfuscated email"})}},9718:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact-us",function(){return r(925)}])},6932:function(e){e.exports={footer:"footer_footer__RQUzZ"}},9582:function(e){e.exports={header:"header_header__cagQO",titleAvatar:"header_titleAvatar___4hI1",titleInfoArea:"header_titleInfoArea__amf6C",titleName:"header_titleName__k_uCU",titleDescription:"header_titleDescription__Cyb7U",nav:"header_nav___KPgb"}},4804:function(e){e.exports={container:"page-frame_container__31CsM",main:"page-frame_main__oy6nJ"}},1664:function(e,n,r){e.exports=r(7942)}},function(e){e.O(0,[774,888,179],(function(){return n=9718,e(e.s=n);var n}));var n=e.O();_N_E=n}]);