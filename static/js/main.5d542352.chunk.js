(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={container:"Section_container__SaJ43",title:"Section_title__3dmUM"}},12:function(t,e,n){t.exports={label:"ContactsFilter_label__3COeK",input:"ContactsFilter_input__3SBdO"}},14:function(t,e,n){t.exports={container:"App_container__3YiDA"}},2:function(t,e,n){t.exports={form:"Form_form__2JMbS",label:"Form_label__EhtWH",input:"Form_input__2jX_6",button:"Form_button__2ixNd"}},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(13),i=n.n(r),s=n(16),o=n(6),l=n(7),u=n(9),b=n(8),m=n(3),d=n(14),j=n.n(d),h=n(11),f=n.n(h),p=n(0);function O(t){var e=t.title,n=t.children;return Object(p.jsxs)("div",{className:f.a.container,children:[Object(p.jsx)("h2",{className:f.a.title,children:e}),n]})}var _=n(15),x=n(2),v=n.n(x),C=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(_.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(p.jsxs)("form",{className:v.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{className:v.a.label,children:["Name",Object(p.jsx)("input",{className:v.a.input,type:"text",name:"name",value:e,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(p.jsxs)("label",{className:v.a.label,children:["Number",Object(p.jsx)("input",{className:v.a.input,type:"tel",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("button",{className:v.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),g=n(4),N=n.n(g),S=function(t){var e=t.contacts,n=t.onDelete;return Object(p.jsx)("ul",{className:N.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsxs)("li",{className:N.a.item,children:[Object(p.jsxs)("p",{className:N.a.text,children:[a," :"]}),Object(p.jsx)("p",{className:N.a.text,children:c}),Object(p.jsx)("button",{className:N.a.button,onClick:function(){n(e)},children:"Delete"})]},e)}))})},y=n(12),A=n.n(y),F=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:A.a.label,children:["Find contacts by name",Object(p.jsx)("input",{className:A.a.input,type:"text",value:e,onChange:n})]})},k=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:Object(m.generate)(),name:"Rosie Simpson",number:"459-12-56"},{id:Object(m.generate)(),name:"Hermione Kline",number:"443-89-12"},{id:Object(m.generate)(),name:"Eden Clements",number:"645-17-79"},{id:Object(m.generate)(),name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){e.id;var n=e.name,a=e.number,c=t.state.contacts;console.log(n,a);var r={id:Object(m.generate)(),name:n,number:a};c.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):c.find((function(t){return t.number===a}))?alert("".concat(a," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(s.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.filterContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.filterContacts();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O,{title:"Phonebook",children:Object(p.jsx)(C,{onSubmit:this.addContact})}),Object(p.jsx)(O,{title:"Contacts",children:Object(p.jsxs)("div",{className:j.a.container,children:[Object(p.jsx)(F,{value:t,onChange:this.changeFilter}),Object(p.jsx)(S,{contacts:e,onDelete:this.deleteContact})]})})]})}}]),n}(a.Component);n(30);i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={list:"Contacts_list__26nHW",text:"Contacts_text__sUpPt",button:"Contacts_button__1GQuW"}}},[[31,1,2]]]);
//# sourceMappingURL=main.5d542352.chunk.js.map