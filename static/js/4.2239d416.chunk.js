(this.webpackJsonpemployees=this.webpackJsonpemployees||[]).push([[4],{285:function(e,t,s){"use strict";s.d(t,"a",(function(){return g}));var n=s(3),a=s(30),i=s(31),c=s(33),o=s(32),r=s(1),d=s.n(r),u=s(6),j=s(14),b=s(0),l=function(e){return{isAuth:e.authReducer.isAuth}},g=function(e){var t=function(t){Object(c.a)(r,t);var s=Object(o.a)(r);function r(){return Object(a.a)(this,r),s.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(b.jsx)(e,Object(n.a)({},this.props)):Object(b.jsx)(u.a,{to:"/login"})}}]),r}(d.a.Component);return Object(j.b)(l)(t)}},286:function(e,t,s){},291:function(e,t,s){"use strict";s.r(t);var n=s(118),a=s(14),i=(s(286),s(0)),c=function(e){return Object(i.jsx)("div",{children:e.mame})},o=function(e){return Object(i.jsx)("div",{className:"",children:e.message})},r=s(6),d=s(119),u=s(120),j=s(68),b=s(86),l=Object(b.a)(50),g=Object(u.a)({form:"dialogAddMessageForm"})((function(e){return Object(i.jsx)("form",{onSubmit:e.handleSubmit,children:Object(i.jsxs)("div",{children:[Object(i.jsx)(d.a,{component:j.b,validate:[b.b,l],name:"newMessageBody",placeholder:"Enter your message"}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{children:"Add post"})})]})})})),m=function(e){console.log(e);var t=e.dialogsPage.dialogs.map((function(e){return Object(i.jsx)(c,{name:e.name,id:e.id},e.id)})),s=e.dialogsPage.messages.map((function(e){return Object(i.jsx)(o,{message:e.message,id:e.id},e.id)}));return e.isAuth?Object(i.jsxs)("div",{className:"dialogs",children:[Object(i.jsx)("div",{className:"dialog-item",children:t}),Object(i.jsx)("div",{className:"messages",children:s}),Object(i.jsx)(g,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})]}):Object(i.jsx)(r.a,{to:"/login"})},O=s(285),h=s(10);t.default=Object(h.d)(Object(a.b)((function(e){return{dialogsPage:e.dialogsReducer.dialogsPage,newMessageText:e.dialogsReducer.dialogsPage.newMessageText}}),(function(e){return{sendMessage:function(t){e(Object(n.b)(t))}}})),O.a)(m)}}]);
//# sourceMappingURL=4.2239d416.chunk.js.map