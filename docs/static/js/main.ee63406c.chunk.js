(this.webpackJsonptestrobinfood=this.webpackJsonptestrobinfood||[]).push([[0],{169:function(e,t,s){},170:function(e,t,s){},173:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),n=s(52),i=s.n(n),r=(s(59),s(60),s(5)),o=s(0),j=Object(c.createContext)(),l=function(e){var t=Object(c.useState)({}),s=Object(r.a)(t,2),a=s[0],n=s[1];return Object(o.jsx)(j.Provider,{value:{dataGlobal:a,setDataGlobal:n},children:e.children})},d=s(14),u=s(3),b=s(11),O=s(54),x=Object(c.createContext)(),m=function(e){var t=Object(c.useState)({user:"",password:"",login:!1}),s=Object(r.a)(t,2),a=s[0],n=s[1];return Object(o.jsx)(x.Provider,{value:{login:a,setLogin:n},children:e.children})},p=["component"],h=function(e){var t=e.component,s=Object(O.a)(e,p),a=Object(c.useContext)(x).login;return Object(o.jsx)(u.b,Object(b.a)(Object(b.a)({},s),{},{render:function(e){return a.login?Object(o.jsx)(t,Object(b.a)({},e)):Object(o.jsx)(u.a,{to:"/login"})}}))},g=(s(67),Object(c.createContext)()),v=function(e){var t=Object(c.useState)({}),s=Object(r.a)(t,2),a=s[0],n=s[1];return Object(o.jsx)(g.Provider,{value:{store:a,setStore:n},children:e.children})},f=(s(68),s.p+"static/media/Best_Pizza_blanco.f5492127.png"),A=function(){return Object(o.jsxs)("div",{className:"contFooter",children:[Object(o.jsx)("div",{className:"side"}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("div",{className:"social",children:[Object(o.jsx)("i",{className:"fa fa-facebook-official","aria-hidden":"true"}),Object(o.jsx)("i",{className:"fa fa-instagram","aria-hidden":"true"})]})}),Object(o.jsx)("div",{className:"sideFinal",children:Object(o.jsx)("img",{src:f,alt:""})})]})},N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAnCAYAAACIVoEIAAAAAXNSR0IArs4c6QAAAVdJREFUWAntVI3NgjAQBSdgBEdwBEdwJEdgA7sBbGK/CT6dADbA9wiNkfTsRQomtS+5HL1r7z2uP0WR8cMdqPDvF9gVNkyeY8a/giNYOxjFzI3xI2xTsBNOUIvvw8S+hz/DehjznLcZDJjYHQry4Ywg8wa2GSyYSHoQGBln/irkVwmTkPYOmjne9Ttv9MvBLEq7AblTSXfqhL/jW+Out/Pup93Y56U5/0iw7se4YaWPcGns7aNaBuSSfC2I3Pn2aVueZqeqqiqapimGYRg9x2sjeMuMMdDzBMcQpbGPtQeL933/VISvruuCaybRoqjoZ6osxZsuipgnFouq6/ql5nz8kow0UG2FtXbcQnrwak2UuLhTrIxzNRI4L7IpE1FEKbnU09IV1bbt2AXn1S0RJobuLw/tWhC5092+2K0Mdeoem3Cq97ek7gmLLUz7IGrm3VCPdTPS7MADZxvamKjKut8AAAAASUVORK5CYII=",z=function(){var e=Object(c.useContext)(g).store,t=Object(u.g)(),s=Object(c.useContext)(x).setLogin;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"containerPizzeria",children:[Object(o.jsx)("div",{className:"side"}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("p",{className:"pestana",children:e.name}),Object(o.jsxs)("div",{className:"contEncabezado",children:[Object(o.jsx)("p",{className:"descripcion",children:e.description}),Object(o.jsx)("img",{src:e.logo,alt:""})]}),Object(o.jsx)("p",{className:"address",children:e.address}),Object(o.jsx)("div",{className:"titulo",children:"Productos:"}),Object(o.jsx)("div",{className:"products",children:e.products.map((function(e,t){return Object(o.jsxs)("ul",{children:[Object(o.jsx)("i",{className:"fa fa-star"}),Object(o.jsxs)("li",{children:[" ",e.name," "]})]},t)}))})]}),Object(o.jsxs)("div",{className:"sideFinal",children:[Object(o.jsxs)("div",{className:"contExit",onClick:function(){s({login:!1}),t.push("/inicio")},children:[Object(o.jsx)("img",{src:N,alt:""}),Object(o.jsx)("p",{className:"exit",children:"Salir"})]}),Object(o.jsx)("div",{className:"side"}),Object(o.jsxs)("div",{className:"volver",onClick:function(){t.push("/inicio")},children:[Object(o.jsx)("i",{className:"fa fa-chevron-circle-left"}),Object(o.jsx)("p",{children:"Volver"})]})]})]}),Object(o.jsx)(A,{})]})},C=(s(69),function(){var e=Object(u.g)(),t=Object(c.useContext)(j).dataGlobal,s=Object(c.useContext)(g).setStore,a=Object(c.useContext)(x).setLogin,n=Object(c.useState)(""),i=Object(r.a)(n,2),l=i[0],d=i[1],b=Object(c.useState)(!1),O=Object(r.a)(b,2),m=O[0],p=O[1],h=Object(c.useState)([]),v=Object(r.a)(h,2),f=v[0],z=v[1];return Object(c.useEffect)((function(){if(""!==l&&l){var e=l.toLowerCase(),s=t.stores.filter((function(t){return t.name.toLowerCase().includes(e)}));p(!0),z(s)}else p(!1)}),[l]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"containerBrandMenu",children:[Object(o.jsx)("div",{className:"side"}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("p",{className:"pestana",children:"Pizzerias"}),Object(o.jsx)("p",{className:"titulo",children:"Tiendas"}),Object(o.jsx)("p",{className:"subtitulo",children:"Escoge tu pizzeria favorita"}),Object(o.jsxs)("div",{className:"inputIcon",children:[Object(o.jsx)("input",{className:"inputBusqueda",type:"text",name:"busqueda",value:l,onChange:function(e){return d(e.target.value)},placeholder:"Busca tu Pizzeria favorita"}),Object(o.jsx)("i",{className:"fa fa-search"})]}),m?Object(o.jsx)("div",{className:"brands",children:f.map((function(t){return Object(o.jsxs)("div",{className:"brand",onClick:function(){s(t),e.push("/pizzeria")},children:[Object(o.jsx)("img",{src:t.logo,alt:t.name}),Object(o.jsxs)("p",{className:"pizzeriaName",children:[" ",t.name," "]}),Object(o.jsxs)("p",{className:"pizzeriaDireccion",children:[" ",t.address," "]})]},t.id)}))}):Object(o.jsx)("div",{className:"brands",children:t.stores.map((function(t){return Object(o.jsxs)("div",{className:"brand animate__bounceIn",onClick:function(){s(t),e.push("/pizzeria")},children:[Object(o.jsx)("img",{src:t.logo,alt:t.name}),Object(o.jsxs)("p",{className:"pizzeriaName",children:[" ",t.name," "]}),Object(o.jsxs)("p",{className:"pizzeriaDireccion",children:[" ",t.address," "]})]},t.id)}))})]}),Object(o.jsx)("div",{className:"sideFinal",children:Object(o.jsxs)("div",{className:"contExit",onClick:function(){a({login:!1}),e.push("/inicio")},children:[Object(o.jsx)("img",{src:N,alt:""}),Object(o.jsx)("p",{className:"exit",children:"Salir"})]})})]}),Object(o.jsx)(A,{})]})}),w=s(17),S=s.n(w),E=s(26),I=(s(71),s.p+"static/media/Login-Best-Pizza.ebd7e7bc.png"),k=s(12),P=s.n(k),F=s(19),L=s(27),B=s.n(L),V=(s(90),function(){return Object(o.jsx)("div",{className:"containerLoader animate__fadeOut",children:Object(o.jsx)("div",{className:"loader"})})}),q=Object(c.createContext)(),M=function(e){var t=Object(c.useState)([]),s=Object(r.a)(t,2),a=s[0],n=s[1];return Object(o.jsx)(q.Provider,{value:{pizzerias:a,getpizzerias:n},children:e.children})},U=function(){var e=Object(c.useContext)(j),t=e.dataGlobal,s=e.setDataGlobal,a=Object(c.useContext)(q),n=a.pizzerias,i=a.getpizzerias,l=Object(u.g)(),d=Object(c.useState)({user:"",password:"",login:""}),O=Object(r.a)(d,2),m=O[0],p=O[1],h=Object(c.useContext)(x).setLogin,g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),s=Object(r.a)(t,2),a=s[0],n=s[1];return[a,function(e){var t=e.target;n(Object(b.a)(Object(b.a)({},a),{},Object(F.a)({},t.name,t.value)))},function(){n(e)}]}({user:"jgonzalez@gonzalez.com",password:"jgonzalez123",login:!1}),v=Object(r.a)(g,2),f=v[0],A=v[1],z=Object(c.useState)(!0),C=Object(r.a)(z,2),w=C[0],k=C[1],L=f.user,M=f.password;Object(c.useEffect)((function(){!t.stores&&U()}),[]);var U=function(){var e=Object(E.a)(S.a.mark((function e(){var t,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.get("https://pruebas-muy-candidatos.s3.us-east-2.amazonaws.com/RH.json".toString());case 3:t=e.sent,c=t.data,s(c.response),setTimeout((function(){D(c.response),i(c.response)}),2e3),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("!UPS! Ocurrio un error con el servicio, por favor vuelve a ingresar mas tarde, Error: ".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(E.a)(S.a.mark((function e(t){var c,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.get("https://demo0453307.mockable.io/pizzerias").then(k(!1));case 3:c=e.sent,a=c.data,t.stores.map((function(e,t){a.length>0&&a.filter((function(s){s.id===t+1&&(e.logo=s.logo)}))})),t.length>0&&s(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("!UPS! Ocurrio un error con el servicio, por favor vuelve a ingresar mas tarde, Error: ".concat(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),R=function(e){e.preventDefault(),Q(),Q()&&y()},Q=function(){var e={};return e.user=P.a.isEmpty(L)?"El campo usuario debe estar diligenciado":null,P.a.isEmpty(L)||(P.a.isLength(L.toString(),{min:5,max:40})||(e.user="El usuario diligenciado es invalido, debe contener m\xe1s de 5 caracteres"),P.a.isEmail(L)||(e.user="El usuario diligenciado es un email invalido")),e.password=P.a.isEmpty(M)?"El campo password debe estar diligenciado":null,P.a.isEmpty(M)||(e.password=P.a.isLength(M.toString(),{min:5,max:40})?null:"La contrase\xf1a diligenciada tiene una longitud invalida"),p(Object(b.a)({},e)),!Object.values(e).some((function(e){return e}))},y=function(){var e;t.users.find((function(t){(e=t.email===f.user)&&((e=t.password===f.password)?(h({user:f.user,password:f.password,login:e}),l.push("/inicio")):p({login:"Usuario o Contrase\xf1a invalido, revisa las credenciales"}))}))};return Object(o.jsxs)(o.Fragment,{children:[w&&0===n.length?Object(o.jsx)(V,{}):null,Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"side"}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("img",{className:"bestPizza center",src:I,alt:""}),Object(o.jsxs)("div",{className:"titulos",children:[Object(o.jsx)("p",{className:"tituloLogin textCenter",children:"Bienvenido"}),Object(o.jsx)("p",{className:"subtituloLogin textCenter",children:"A las mejores pizzas del pa\xeds"})]}),Object(o.jsxs)("form",{className:"center",onSubmit:R,children:[Object(o.jsxs)("div",{className:"inputIcon",children:[Object(o.jsx)("input",{type:"text",name:"user",value:L,onChange:A,placeholder:"Usuario",required:!0}),Object(o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAoCAYAAAB5ADPdAAAAAXNSR0IArs4c6QAAAbNJREFUWAntVsFxgzAQJMknv7gEOrBKoARKoIR0EHeQEkIHcSoIqSB0gDsweeaV7GaQzTA+xEkC58HNrE9Id3urkxiTJKutHfjrgMHv5j/0IoWIV+CnhwbjJ+AqAnMUPvbE9IVx/Lm0sBQFxwRZgeziYlaiki3s8rxri1iLKi4xdn2nVXSrTejiHxR56gvvK0qhKWFXVeYr6k1RpVbEBoVmyLZ3Zswfgqp4JJfIGRPEYzMevMEpOzCw+FAcj8xb0A2SQ20DghxIO6I9fN2NVzdrB0KPj0e3BbKeyhbjD2DxI6QI/tkOL3j/ucH6M0DhsxoLvAP94q7xEfEFMIsZsHL3LhHS+ktsVewQdywVnDofVVgdQZAVXoAr2AowWMIYnh1n50W7E1fOC3sMR0nOoZNG94j6BqpJ0ReCcszF6M6Qo7lQ6zTl+p7KTpFxBynojETpEiUmSoSKefFKuEQpaqhDMynDJUrcjUSomG+lWJeoWkqMMO/NbVCcOxq+PaHPVeimChDEFMYObUJFMT8FSiCkQwfkPwJO037kcYdZBwPP5y0wtC9M1EDb+QqeWG3twFU68AvF4gqtw7/abAAAAABJRU5ErkJggg==",alt:""}),Object(o.jsx)("small",{children:m.user})]}),Object(o.jsxs)("div",{className:"inputIcon",children:[Object(o.jsx)("input",{type:"password",name:"password",value:M,onChange:A,placeholder:"Contrase\xf1a",required:!0}),Object(o.jsx)("img",{src:N,alt:""}),Object(o.jsx)("small",{children:m.password})]}),Object(o.jsx)("p",{className:"textCenter remember",children:"Olvidaste tu contrase\xf1a?"}),Object(o.jsx)("button",{onClick:R,children:"Iniciar Sesi\xf3n"}),Object(o.jsx)("small",{className:"textCenter",children:m.login})]})]})]})]})},D=(s(169),function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(d.a,{children:Object(o.jsx)("div",{children:Object(o.jsxs)(u.d,{children:[Object(o.jsx)(u.b,{exact:!0,path:"/login",component:U}),Object(o.jsx)(h,{exact:!0,path:"/inicio",component:C}),Object(o.jsx)(h,{exact:!0,path:"/pizzeria",component:z}),Object(o.jsx)(u.a,{to:"/login"})]})})})})}),R=(s(170),s.p+"static/media/Pizza.2fd5c979.png"),Q=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"oldDesk imgContainer",children:Object(o.jsx)("img",{className:"center",src:R,alt:""})})})};var y=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"superContainer",children:Object(o.jsx)(l,{children:Object(o.jsx)(v,{children:Object(o.jsx)(M,{children:Object(o.jsxs)(m,{children:[Object(o.jsx)(Q,{}),Object(o.jsx)(D,{})]})})})})})})},G=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,174)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};s(171),s(172);i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),G()},59:function(e,t,s){},60:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},71:function(e,t,s){},90:function(e,t,s){}},[[173,1,2]]]);
//# sourceMappingURL=main.ee63406c.chunk.js.map