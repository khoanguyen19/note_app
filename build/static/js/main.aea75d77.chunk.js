(this["webpackJsonppart2-notes"]=this["webpackJsonppart2-notes"]||[]).push([[0],{39:function(t,n,e){},40:function(t,n,e){"use strict";e.r(n);var c=e(0),r=e(2),o=e(15),a=e.n(o),i=e(6),u=e(3),s=function(t){var n=t.note,e=t.toggleImportance,r=n.important?"Make not important":"Make important";return Object(c.jsxs)("li",{className:"note",children:[Object(c.jsx)("span",{children:n.content}),Object(c.jsx)("button",{onClick:e,children:r})]})},l=e(4),j=e.n(l),f="/api/notes",d={getAll:function(){var t=j.a.get(f),n={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(n)}))},create:function(t){return j.a.post(f,t).then((function(t){return t.data}))},update:function(t,n){return j.a.put("".concat(f,"/").concat(t),n).then((function(t){return t.data}))}},b=function(t){var n=t.message;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})},p=function(){var t=Object(r.useState)([]),n=Object(u.a)(t,2),e=n[0],o=n[1],a=Object(r.useState)(""),l=Object(u.a)(a,2),j=l[0],f=l[1],p=Object(r.useState)(!0),h=Object(u.a)(p,2),m=h[0],O=h[1],v=Object(r.useState)(null),g=Object(u.a)(v,2),x=g[0],S=g[1];Object(r.useEffect)((function(){d.getAll().then((function(t){o(t)}))}),[]);var k=m?e:e.filter((function(t){return!0===t.important}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Notes"}),Object(c.jsx)(b,{message:x}),Object(c.jsxs)("button",{onClick:function(){O(!m)},children:["show ",m?"important":"all"]}),Object(c.jsx)("ul",{children:k.map((function(t){return Object(c.jsx)(s,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),c=Object(i.a)(Object(i.a)({},n),{},{important:!n.important});d.update(t,c).then((function(n){o(e.map((function(e){return e.id!==t?e:n})))})).catch((function(c){S("Note '".concat(n.content,"' was already removed from server")),setTimeout((function(){S(null)}),5e3),o(e.filter((function(n){return n.id!==t})))}))}(t.id)}},t.id)}))}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:j,date:(new Date).toISOString(),important:Math.random()<.5,id:e.length+1};d.create(n).then((function(t){o(e.concat(t)),f("")}))},children:[Object(c.jsx)("input",{value:j,onChange:function(t){f(t.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"Save"})]})]})};e(39);a.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.aea75d77.chunk.js.map