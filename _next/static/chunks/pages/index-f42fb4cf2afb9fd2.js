(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7942:function(e,t,r){"use strict";var n=r(5696);t.default=void 0;var a,s=(a=r(7294))&&a.__esModule?a:{default:a},i=r(4957),o=r(9898),l=r(639);var c={};function u(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,a=o.useRouter(),f=s.default.useMemo((function(){var t=i.resolveHref(a,e.href,!0),r=n(t,2),s=r[0],o=r[1];return{href:s,as:e.as?i.resolveHref(a,e.as):o||s}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,_=e.scroll,k=e.locale;"string"===typeof v&&(v=s.default.createElement("a",null,v));var j=(t=s.default.Children.only(v))&&"object"===typeof t&&t.ref,w=l.useIntersection({rootMargin:"200px"}),y=n(w,2),g=y[0],b=y[1],x=s.default.useCallback((function(e){g(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,g]);s.default.useEffect((function(){var e=b&&r&&i.isLocalURL(d),t="undefined"!==typeof k?k:a&&a.locale,n=c[d+"%"+p+(t?"%"+t:"")];e&&!n&&u(a,d,p,{locale:t})}),[p,d,b,k,r,a]);var I={ref:x,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,s,o,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),null==o&&n.indexOf("#")>=0&&(o=!1),t[a?"replace":"push"](r,n,{shallow:s,locale:l,scroll:o}))}(e,a,d,p,h,m,_,k)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&u(a,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var O="undefined"!==typeof k?k:a&&a.locale,N=a&&a.isLocaleDomain&&i.getDomainLocale(p,O,a&&a.locales,a&&a.domainLocales);I.href=N||i.addBasePath(i.addLocale(p,O,a&&a.defaultLocale))}return s.default.cloneElement(t,I)};t.default=f},639:function(e,t,r){"use strict";var n=r(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,l=e.disabled||!i,c=a.useRef(),u=a.useState(!1),f=n(u,2),d=f[0],p=f[1],v=a.useState(t?t.current:null),h=n(v,2),m=h[0],_=h[1],k=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),l||d||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=o.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return o.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,s=n.observer,i=n.elements;return i.set(e,t),s.observe(e),function(){i.delete(e),s.unobserve(e),0===i.size&&(s.disconnect(),o.delete(a))}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:r}))}),[l,m,r,d]);return a.useEffect((function(){if(!i&&!d){var e=s.requestIdleCallback((function(){return p(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&_(t.current)}),[t]),[k,d]};var a=r(7294),s=r(6286),i="undefined"!==typeof IntersectionObserver;var o=new Map},101:function(e,t,r){"use strict";r.d(t,{$_:function(){return f},h4:function(){return o},CU:function(){return v}});var n=r(1664),a=r(9582),s=r.n(a),i=r(5893);function o(){return(0,i.jsxs)("header",{className:s().header,children:[(0,i.jsx)(l,{name:"Polylogue.xyz",description:"Sharing curious ideas with curious people"}),(0,i.jsxs)("nav",{className:s().nav,children:[(0,i.jsx)(n.default,{href:"/",as:"/",children:(0,i.jsx)("a",{children:"Talks"})}),(0,i.jsx)(n.default,{href:"/speaker-sign-up",as:"/speaker-sign-up",children:(0,i.jsx)("a",{children:"Speaker sign up"})}),(0,i.jsx)(n.default,{href:"/contact-us",as:"/contact-us",children:(0,i.jsx)("a",{children:"Contact us"})})]})]})}function l(e){var t=e.name,r=e.description;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.default,{href:"/",children:(0,i.jsx)("a",{className:s().titleAvatar})}),(0,i.jsxs)("div",{className:s().titleInfoArea,children:[(0,i.jsx)("h1",{className:s().titleName,children:t}),(0,i.jsx)("p",{className:s().titleDescription,children:r})]})]})}var c=r(6932),u=r.n(c);function f(){return(0,i.jsx)("footer",{className:u().footer,children:"TODO: footer - email, telegram link"})}var d=r(4804),p=r.n(d);function v(e){var t=e.children;return(0,i.jsxs)("div",{className:p().container,children:[(0,i.jsx)(o,{}),(0,i.jsx)("main",{className:p().main,children:t}),(0,i.jsx)(f,{})]})}},764:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n.default}});var n=r(8342)},8342:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(101),a=r(9499),s=r(7659),i=r.n(s),o=JSON.parse('[{"date":"2022 Feb 09","talks":[{"title":"Black Horse vs White Horse","speaker":"Zapping Sauvage","videoUrl":"https://www.youtube.com/watch?v=n2j4HO0B3y4","slidesUrl":""},{"title":"Black Horse vs White Horse","speaker":"Zapping Sauvage","videoUrl":"https://www.youtube.com/watch?v=n2j4HO0B3y4","slidesUrl":""},{"title":"Black Horse vs White Horse","speaker":"Zapping Sauvage","videoUrl":"https://www.youtube.com/watch?v=n2j4HO0B3y4","slidesUrl":""}]},{"date":"2022 Jan 27","talks":[{"title":"Black Horse vs White Horse","speaker":"Zapping Sauvage","videoUrl":"https://www.youtube.com/watch?v=n2j4HO0B3y4","slidesUrl":""},{"title":"Black Horse vs White Horse","speaker":"Zapping Sauvage","videoUrl":"https://www.youtube.com/watch?v=n2j4HO0B3y4","slidesUrl":""},{"title":"Black Horse vs White Horse","speaker":"Zapping Sauvage","videoUrl":"https://www.youtube.com/watch?v=n2j4HO0B3y4","slidesUrl":""},{"title":"Black Horse vs White Horse","speaker":"Zapping Sauvage","videoUrl":"https://www.youtube.com/watch?v=n2j4HO0B3y4","slidesUrl":""}]}]'),l=r(5893);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(){return(0,l.jsx)("div",{className:i().eventItemsContainer,children:o.map((function(e,t){return(0,l.jsx)(d,u({},e),t)}))})}function d(e){var t=e.date,r=e.talks;return(0,l.jsxs)("div",{className:i().eventItem,children:[(0,l.jsxs)("h2",{className:i().eventItemDate,children:["Spark: Lisbon - ",t]}),(0,l.jsx)("div",{className:i().talkItemsContainer,children:r.map((function(e,t){return(0,l.jsx)(p,u({},e),t)}))})]})}function p(e){var t=e.title,r=e.speaker;e.videoUrl;return(0,l.jsxs)("div",{className:i().talkItem,children:[(0,l.jsxs)("div",{className:i().talkItemDetails,children:[(0,l.jsx)("div",{className:i().talkItemTitle,children:t}),(0,l.jsxs)("div",{className:i().talkItemSpeaker,children:["By: ",r]})]}),(0,l.jsx)("iframe",{width:"260",height:"200",src:"https://www.youtube.com/embed/n2j4HO0B3y4",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})}function v(){return(0,l.jsx)(n.CU,{children:(0,l.jsx)(f,{})})}},8581:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(764)}])},6932:function(e){e.exports={footer:"footer_footer__RQUzZ"}},9582:function(e){e.exports={header:"header_header__cagQO",titleAvatar:"header_titleAvatar___4hI1",titleInfoArea:"header_titleInfoArea__amf6C",titleName:"header_titleName__k_uCU",titleDescription:"header_titleDescription__Cyb7U",nav:"header_nav___KPgb"}},4804:function(e){e.exports={container:"page-frame_container__31CsM",main:"page-frame_main__oy6nJ"}},7659:function(e){e.exports={eventItemsContainer:"talks_eventItemsContainer__fPZ9u",eventItem:"talks_eventItem__Znnlr",eventItemDate:"talks_eventItemDate__D1_Pi",talkItemsContainer:"talks_talkItemsContainer__da8hZ",talkItem:"talks_talkItem__m2vQ2",talkItemDetails:"talks_talkItemDetails__YYMMU",talkItemTitle:"talks_talkItemTitle__r71Pm",talkItemSpeaker:"talks_talkItemSpeaker__lSzxd"}},1664:function(e,t,r){e.exports=r(7942)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);