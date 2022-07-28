"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[785],{925:function(n,e,t){t.d(e,{DW:function(){return s},e6:function(){return a},Kd:function(){return i},fh:function(){return o}});var r="Fill the field",a={required:r,pattern:{value:/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,message:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}},o={required:r,validate:function(n){return!(n.length<7)||"The Password must contain at least 7 values"}},s={required:r},i={required:r,pattern:{value:/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +."}}},9785:function(n,e,t){t.r(e),t.d(e,{ContactsPage:function(){return G}});var r,a,o,s,i,c,u,l=t(5861),d=t(7757),f=t.n(d),m=t(890),h=t(9e3),p=t(168),x=t(9958),v=Object.freeze({colors:{white:"#ffffff",gray:"#afb3c0",light:"#F0FFFF",dark:"#212121",shadow:" rgba(175, 203, 225, 0.39)",green:"#008B00",orange:"#FFA500",red:" #ff0000",darkGray:"#83868d",titleBC:"#E0EEEE",title:"#0884F9",accent:"#FF4500",valueBC:"#C1CDCD"},border:{transactionBorder:"2px solid #83868d"},shadow:"4px 4px 8px 0px rgba(94, 20, 4, 0.27)"}),g=x.Z.ul(r||(r=(0,p.Z)(["\n  margin: 0px;\n  padding: 0px;\n"]))),b=x.Z.li(a||(a=(0,p.Z)(["\n  display: flex;\n  gap: 15px;\n  align-items: baseline;s\n  padding: 8px;\n  height: 30px;\n"]))),C=x.Z.p(o||(o=(0,p.Z)(["\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 1.71;\n  letter-spacing: 0.03em;\n  color: ",";\n"])),v.colors.title),Z=x.Z.button(s||(s=(0,p.Z)(["\n  font-size: 18px;\n\n   transition: all 0.3s ease;\n  &:hover {\n  box-shadow: ",";\n font-size:20px;\n  border-radius: 5px;\n\n"])),v.shadow),j=t(9434),w=function(n){return n.contacts.items},F=function(n){var e=function(n){return n.contacts.filter}(n).toLowerCase();return w(n).filter((function(n){return n.name.toLowerCase().includes(e)})).sort((function(n,e){return n.name.localeCompare(e.name)}))},y=t(4569),k=t.n(y),z=t(8728),A={addContact:function(n){var e=n.name,t=n.number;return function(n){var r={name:e,number:t};n((0,z.md)()),k().post("/contacts",r).then((function(e){var t=e.data;return n((0,z.ff)(t))})).catch((function(e){return n((0,z.xZ)(e.message))}))}},fetchContacts:function(){return function(){var n=(0,l.Z)(f().mark((function n(e){var t,r;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e((0,z.$0)()),n.prev=1,n.next=4,k().get("/contacts");case 4:t=n.sent,r=t.data,e((0,z.v2)(r)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),e((0,z.I7)(n.t0.message));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},deleteContact:function(n){return function(e){e((0,z.us)()),k().delete("/contacts/".concat(n)).then((function(){return e((0,z.uv)(n))})).catch((function(n){return e((0,z.EF)(n.message))}))}}},D=A,E=t(3329);function T(){var n=(0,j.I0)(),e=(0,j.v9)(F);return(0,E.jsx)(g,{children:e.map((function(e){var t=e.id,r=e.name,a=e.number;return(0,E.jsxs)(b,{children:[(0,E.jsxs)(C,{children:[r," : ",a]}),(0,E.jsx)(Z,{type:"button",onClick:function(){n(D.deleteContact(t))},children:(0,E.jsx)(h.HLd,{})})]},t)}))})}var I=x.Z.div(i||(i=(0,p.Z)([""]))),B=x.Z.h3(c||(c=(0,p.Z)(["\n  color: ",";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.71;\n  letter-spacing: 0.03em;\n  color: ",";\n"])),v.colors.title,v.colors.title),L=x.Z.input(u||(u=(0,p.Z)(["\n  padding: 3px;\n  border-radius: 5px;\n"])));function W(){var n=(0,j.v9)((function(n){return n.contacts.filter})),e=(0,j.I0)();return(0,E.jsxs)(I,{children:[(0,E.jsxs)(B,{children:["Find contacts by name ",(0,E.jsx)(h.tpn,{})]}),(0,E.jsx)(L,{type:"text",name:"filter",value:n,onChange:function(n){return e((0,z.Vs)(n.currentTarget.value))}})]})}var q=t(4554),N=t(6151),P=t(4708),_=t(7107),O=t(7012),S=t(1106),V=t(925),K=t(5290),M=(0,_.Z)();function Q(){var n=(0,K.cI)(),e=n.handleSubmit,t=n.reset,r=n.control,a=n.formState.errors,o=(0,j.I0)(),s=(0,j.v9)(w);return(0,E.jsx)(O.Z,{theme:M,children:(0,E.jsxs)(q.Z,{component:"div",maxWidth:"xs",children:[(0,E.jsx)(P.ZP,{}),(0,E.jsxs)(q.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column"},children:[(0,E.jsx)(m.Z,{component:"h1",variant:"h5",children:"ADD CONTACT FORM"}),(0,E.jsxs)(q.Z,{component:"form",onSubmit:e((function(n){var e=n.name,r=n.number;if(!s.find((function(n){return n.name.toLowerCase()===e.toLowerCase()})))return o(D.addContact({name:e,number:r})),void t({data:n});alert("".concat(e," is already in contacts")),t({data:n})})),sx:{mt:2,display:"flex",flexDirection:"column"},children:[(0,E.jsx)(K.Qr,{control:r,rules:V.e6,name:"name",defaultValue:"",render:function(n){var e,t,r=n.field;return(0,E.jsx)(S.Z,{autoFocus:!0,autoComplete:"off",label:"Name",onChange:function(n){return r.onChange(n)},value:r.value||"",error:!(null===(e=a.name)||void 0===e||!e.message),helperText:null===(t=a.name)||void 0===t?void 0:t.message,margin:"normal",sx:{maxWidth:"350px"}})}}),(0,E.jsx)(K.Qr,{control:r,name:"number",rules:V.Kd,render:function(n){var e,t,r=n.field;return(0,E.jsx)(S.Z,{type:"tel",label:"Number",autoFocus:!0,autoComplete:"off",defaultValue:"",onChange:function(n){return r.onChange(n)},value:r.value||"",error:!(null===(e=a.number)||void 0===e||!e.message),helperText:null===(t=a.number)||void 0===t?void 0:t.message,sx:{maxWidth:"350px"}})}}),(0,E.jsx)(N.Z,{type:"submit",variant:"contained",sx:{mt:3,mb:2,maxWidth:"150px"},children:"Add contact"})]})]})]})})}var $=t(2791);function G(){var n=(0,j.I0)(),e=(0,j.v9)(w);return(0,$.useEffect)((function(){var e=function(){var e=(0,l.Z)(f().mark((function e(){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(D.fetchContacts());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Q,{}),0!==e.length?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(W,{}),(0,E.jsx)(T,{})]}):(0,E.jsx)(m.Z,{component:"span",variant:"body2",children:"You haven't contacts"})]})}}}]);
//# sourceMappingURL=785.6bcd3793.chunk.js.map