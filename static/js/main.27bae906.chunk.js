(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c(0),d=c.n(i),r=c(7),a=c.n(r),s=(c(24),c(25),c(8)),l=(c(17),c(3));function o(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],d=t[1],r=Object(i.useState)(""),a=Object(s.a)(r,2),o=a[0],j=a[1],b=Object(l.c)();var u=Object(n.jsx)("div",{className:"list",children:Object(n.jsx)("div",{className:"action",children:Object(n.jsx)("button",{onClick:function(e){d(!0)},children:"+ Add a List"})})}),O=Object(n.jsx)("div",{className:"list",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==o&&b({type:"ADDLIST",title:o})},children:[Object(n.jsx)("input",{type:"text",name:"text",value:o,onChange:function(e){j(e.target.value)}}),Object(n.jsx)("button",{children:"Add List"}),Object(n.jsx)("button",{onClick:function(e){d(!1)},children:"X"})]})});return Object(n.jsx)("div",{className:"list-wrapper",children:c?O:u})}var j=c(4),b=(c(32),c(6));function u(e){return Object(n.jsx)(b.b,{draggableId:e.id,index:e.index,children:function(t){return Object(n.jsx)("div",Object(j.a)(Object(j.a)(Object(j.a)({className:"card",id:e.id},t.draggableProps),t.dragHandleProps),{},{ref:t.innerRef,children:e.title}))}})}var O=c(9);function p(e){var t=Object(i.useState)(!1),c=Object(s.a)(t,2),d=c[0],r=c[1],a=Object(i.useState)(""),o=Object(s.a)(a,2),p=o[0],h=o[1],x=Object(l.c)();var f=[];Object(l.d)((function(t){var c=e.cardIds,i=t.cardReducer,d=0;for(var r in c)for(var a in i)i[a].id===c[r]&&(f.push(Object(n.jsx)(u,{title:i[a].title,id:i[a].id,index:d},i[a].id)),d++)}));var v=Object(n.jsxs)("div",{className:"list",id:e.id,children:[Object(n.jsx)("div",{className:"title",children:e.title}),Object(n.jsx)(b.c,{droppableId:e.id,children:function(e){return Object(n.jsxs)("div",Object(j.a)(Object(j.a)({ref:e.innerRef},e.droppableProps),{},{className:"cardWrapper",children:[f,e.placeholder]}))}}),Object(n.jsx)("div",{className:"action",children:Object(n.jsx)("button",{onClick:function(e){r(!0)},children:"Add a Card"})})]}),I=Object(n.jsxs)("div",{className:"list",children:[Object(n.jsx)("div",{className:"title",children:e.title}),Object(n.jsx)(b.c,{droppableId:e.id,children:function(e){return Object(n.jsxs)("div",Object(j.a)(Object(j.a)({ref:e.innerRef},e.droppableProps),{},{className:"cardWrapper",children:[f,e.placeholder]}))}}),Object(n.jsx)("input",{type:"text",value:p,onChange:function(e){h(e.target.value)}}),Object(n.jsx)("button",{onClick:function(){var t,c,n;""!==p&&x((t=e.id,c=p,n="card-"+Object(O.a)(),{type:"ADDCARD",title:c,listId:t,newcardId:n})),h("")},children:"Add Card"}),Object(n.jsx)("button",{onClick:function(e){r(!1)},children:"X"})]});return Object(n.jsx)("div",{className:"list-wrapper",children:d?I:v})}var h=function(){var e=Object(l.c)(),t=Object(l.d)((function(e){return e.listReducer.map((function(e){return Object(n.jsx)(p,{id:e.id,title:e.title,cardIds:e.cardIds},e.id)}))}));return Object(n.jsx)(b.a,{onDragEnd:function(t){var c=t.destination,n=t.source;t.draggableId,console.log(t),c&&(c.droppableId===n.droppableId&&c.index===n.index||c.droppableId===n.droppableId&&(console.log(c.index,n.index),console.log(n.droppabledId),e(function(e,t,c){return console.log(e),{type:"SWITCHCARDINLIST",listId:e,destination:t,source:c}}(n.droppableId,c.index,n.index))))},children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{className:"App-header",children:Object(n.jsx)("h1",{children:"My Trello"})}),Object(n.jsxs)("div",{className:"main-board",children:[t,Object(n.jsx)(o,{})]})]})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,d=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),d(e),r(e)}))},f=c(5),v=c(11),I=[{id:"list-0",title:"React",cardIds:["card-0","card-1","card-2"]},{id:"list-1",title:"Redux",cardIds:["card-3"]}],g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDLIST":return console.log(e),[].concat(Object(v.a)(e),[{id:"list-"+Object(O.a)(),title:t.title,cardIds:[]}]);case"ADDCARD":var c=e.map((function(e){return e.id===t.listId?Object(j.a)(Object(j.a)({},e),{},{cardIds:[].concat(Object(v.a)(e.cardIds),[t.newcardId])}):e}));return console.log(c),c;case"SWITCHCARDINLIST":var n=e.map((function(e){if(console.log(e.id,t.listId),e.id===t.listId){var c=e.cardIds,n=[c[t.source],c[t.destination]];return c[t.destination]=n[0],c[t.source]=n[1],Object(j.a)(Object(j.a)({},e),{},{cardIds:c})}return e}));return n;default:return e}},m=[{id:"card-0",title:"Go crazy"},{id:"card-1",title:"youtube video"},{id:"card-2",title:"there's no hope in life"},{id:"card-3",title:"triple for loop is awesome"}],C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDCARD":return console.log(e),console.log(t.newcardId),[].concat(Object(v.a)(e),[{id:t.newcardId,title:t.title}]);default:return e}},D=Object(f.c)({listReducer:g,cardReducer:C}),N=Object(f.e)(D);a.a.render(Object(n.jsx)(l.a,{store:N,children:Object(n.jsx)(d.a.StrictMode,{children:Object(n.jsx)(h,{})})}),document.getElementById("root")),x()}},[[33,1,2]]]);
//# sourceMappingURL=main.27bae906.chunk.js.map