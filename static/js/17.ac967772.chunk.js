(this["webpackJsonpantd-demo"]=this["webpackJsonpantd-demo"]||[]).push([[17],{313:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(17),c=n(33),r=n(60),i=n(95),s=n(82),o=n(68),l=function(e){return function(){var t=Object(c.a)(Object(a.a)().mark((function t(n){var c,l;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:r.b,payload:{loading:!0}}),t.next=3,i.a(e);case 3:!0===(c=t.sent).success?(l={current:c.data,loading:!1,isLoggedIn:!0},s.a.set("auth",l),n({type:r.c,payload:c.data}),o.a.push("/")):n({type:r.a,payload:c});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(c.a)(Object(a.a)().mark((function t(n){var c,l;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:r.b,payload:{loading:!0}}),t.next=3,i.c(e);case 3:!0===(c=t.sent).success?(l={current:c.data,loading:!1,isLoggedIn:!0},s.a.set("auth",l),n({type:r.c,payload:c.data}),o.a.push("/")):n({type:r.a,payload:c});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(){return function(){var e=Object(c.a)(Object(a.a)().mark((function e(t){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.b(),t({type:r.d}),o.a.push("/login");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},388:function(e,t,n){"use strict";var a=n(1),c=n(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},i=n(11),s=function(e,t){return c.createElement(i.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:r}))};s.displayName="LockOutlined";t.a=c.forwardRef(s)},419:function(e,t,n){"use strict";var a=n(3),c=n(4),r=n(7),i=n.n(r),s=n(0),o=n(49),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n};t.a=function(e){var t,n=s.useContext(o.b),r=n.getPrefixCls,u=n.direction,d=e.prefixCls,h=e.type,p=void 0===h?"horizontal":h,j=e.orientation,m=void 0===j?"center":j,b=e.orientationMargin,f=e.className,O=e.children,g=e.dashed,x=e.plain,y=l(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),v=r("divider",d),k=m.length>0?"-".concat(m):m,w=!!O,V="left"===m&&null!=b,N="right"===m&&null!=b,_=i()(v,"".concat(v,"-").concat(p),(t={},Object(c.a)(t,"".concat(v,"-with-text"),w),Object(c.a)(t,"".concat(v,"-with-text").concat(k),w),Object(c.a)(t,"".concat(v,"-dashed"),!!g),Object(c.a)(t,"".concat(v,"-plain"),!!x),Object(c.a)(t,"".concat(v,"-rtl"),"rtl"===u),Object(c.a)(t,"".concat(v,"-no-default-orientation-margin-left"),V),Object(c.a)(t,"".concat(v,"-no-default-orientation-margin-right"),N),t),f),I=Object(a.a)(Object(a.a)({},V&&{marginLeft:b}),N&&{marginRight:b});return s.createElement("div",Object(a.a)({className:_},y,{role:"separator"}),O&&"vertical"!==p&&s.createElement("span",{className:"".concat(v,"-inner-text"),style:I},O))}},738:function(e,t,n){"use strict";n.r(t);n(0);var a=n(292),c=n(496),r=n(498),i=n(419),s=n(740),o=n(730),l=n(288),u=n(297),d=n(388),h=n(44),p=n(313),j=n(94),m=n(151),b=n(6),f=a.a.Content,O=a.a.Footer;t.default=function(){var e=Object(j.c)(m.a).loading,t=Object(j.b)();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(a.a,{className:"layout",children:[Object(b.jsx)(c.a,{children:Object(b.jsx)(r.a,{span:12,offset:6,children:Object(b.jsxs)(f,{style:{padding:"150px 0 180px",maxWidth:"360px",margin:"0 auto"},children:[Object(b.jsx)("h1",{children:"Register"}),Object(b.jsx)(i.a,{}),Object(b.jsxs)("div",{className:"site-layout-content",children:[" ",Object(b.jsxs)(s.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(e){t(Object(p.c)(e))},children:[Object(b.jsx)(s.a.Item,{name:"ten_tai_khoan",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp t\xean \u0111\u0103ng nh\u1eadp c\u1ee7a b\u1ea1n!"}],children:Object(b.jsx)(o.a,{prefix:Object(b.jsx)(u.a,{}),placeholder:"T\xean \u0111\u0103ng nh\u1eadp"})}),Object(b.jsx)(s.a.Item,{name:"ten_nhan_vien",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp t\xean nh\xe2n vi\xean c\u1ee7a b\u1ea1n!"}],children:Object(b.jsx)(o.a,{prefix:Object(b.jsx)(u.a,{}),placeholder:"T\xean nh\xe2n vi\xean"})}),Object(b.jsx)(s.a.Item,{name:"email",rules:[{type:"email",message:"Vui l\xf2ng nh\u1eadp \u0111\xfang \u0111\u1ecbnh d\u1ea1ng email!"},{required:!0,message:"Vui l\xf2ng nh\u1eadp email c\u1ee7a b\u1ea3n!"}],children:Object(b.jsx)(o.a,{prefix:Object(b.jsx)(u.a,{className:"site-form-item-icon"}),placeholder:"admin@demo.com",autoComplete:"off"})}),Object(b.jsx)(s.a.Item,{name:"mat_khau",hasFeedback:!0,rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u c\u1ee7a b\u1ea1n!!"}],children:Object(b.jsx)(o.a.Password,{prefix:Object(b.jsx)(d.a,{className:"site-form-item-icon"}),type:"password",placeholder:"123456"})}),Object(b.jsx)(s.a.Item,{name:"xac_nhan_mat_khau",dependencies:["mat_khau"],hasFeedback:!0,rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp l\u1ea1i m\u1eadt kh\u1ea9u c\u1ee7a b\u1ea1n!"},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n&&t("mat_khau")!==n?Promise.reject(new Error("Kh\xf4ng tr\xf9ng kh\u1edbp m\u1eadt kh\u1ea9u!")):Promise.resolve()}}}],children:Object(b.jsx)(o.a.Password,{prefix:Object(b.jsx)(d.a,{}),placeholder:"X\xe1c nh\u1eadn m\u1eadt kh\u1ea9u"})}),Object(b.jsxs)(s.a.Item,{children:[Object(b.jsx)(l.a,{type:"primary",htmlType:"submit",className:"login-form-button",loading:e,children:"Register"}),"Or ",Object(b.jsx)(h.a,{to:"/login",children:"Log in!"})]})]})]})]})})}),Object(b.jsx)(O,{style:{textAlign:"center"},children:"Open Source CRM based on AntD & React \xa92020 Created by Salah Eddine Lalami"})]})})}}}]);
//# sourceMappingURL=17.ac967772.chunk.js.map