(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={filterLabel:"Filter_filterLabel__CxaXQ"}},12:function(e,t,n){e.exports={title:"Section_title__2vEsp"}},13:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},21:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),o=n(9),i=n.n(o),s=(n(21),n(14)),l=n(2),u=n(10),b=n.n(u),m=n(8),j=n.n(m);var d=function(e){var t=e.contacts,n=e.onDelete;return 0===t.length?null:Object(a.jsx)("ul",{children:t.map((function(e){var t=e.id,c=e.name,r=e.number;return Object(a.jsxs)("li",{className:j.a.item,children:[Object(a.jsxs)("p",{children:[c,": ",r]}),Object(a.jsx)("button",{type:"button",onClick:function(){return n(t)},className:j.a.contactBtn,children:"Delete"})]},t)}))})},f=n(15),h=n(4),p=n.n(h),O={name:"",id:"",number:""};var x=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),s=i[0],u=i[1];function b(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":r(a);break;case"number":u(a);break;default:return}}return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n&&s?this.props.onSubmit({name:n,number:s}):alert("Some field are empty"),function(){this.setState(Object(f.a)({},O))}()},className:p.a.a,children:[Object(a.jsxs)("label",{className:p.a.label,children:["Name",Object(a.jsx)("input",{type:"text",name:"name",value:n,onChange:b,placeholder:"Enter name"})]}),Object(a.jsxs)("label",{className:p.a.label,children:["Number",Object(a.jsx)("input",{type:"tel",name:"number",value:s,onChange:b,placeholder:"Enter phone number"})]}),Object(a.jsx)("button",{type:"submit",className:p.a.addBtn,children:"Add contact"})]})},v=n(11),g=n.n(v);var C=function(e){var t=e.value,n=e.onChange;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("label",{className:g.a.filterLabel,children:["Find contact by name",Object(a.jsx)("input",{type:"text",value:t,onChange:n,placeholder:"Enter name to filter"})]})})},S=n(12),_=n.n(S);var N=function(e){var t=e.title,n=e.children;return Object(a.jsxs)("section",{children:[t&&Object(a.jsx)("h2",{className:_.a.title,children:t}),n]})},w=n(13);var F=function(){var e=Object(c.useState)((function(){var e;return null!==(e=JSON.parse(localStorage.getItem("contacts")))&&void 0!==e?e:w})),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(""),i=Object(l.a)(o,2),u=i[0],m=i[1];Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var j=function(){var e=u.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(N,{title:"Phonebook",children:Object(a.jsx)(x,{onSubmit:function(e){var t=e.name,a=e.number;if(n.map((function(e){return e.name.toLowerCase()})).includes(t.toLowerCase()))alert("".concat(t," is already in contacts"));else{var c={id:b.a.generate(),name:t,number:a};r([].concat(Object(s.a)(n),[c]))}}})}),Object(a.jsxs)(N,{title:"Contacts",children:[Object(a.jsx)(C,{filter:u,onChange:function(e){var t=e.target.value;m(t)}}),Object(a.jsx)(d,{contacts:j,onDelete:function(e){r(n.filter((function(t){return t.id!==e})))}})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root")),k()},4:function(e,t,n){e.exports={label:"Form_label__KFtnN",a:"Form_a__1rp1I"}},8:function(e,t,n){e.exports={item:"Contats_item__1lLuI",contactBtn:"Contats_contactBtn__2J8-S"}}},[[30,1,2]]]);
//# sourceMappingURL=main.8280ff5b.chunk.js.map