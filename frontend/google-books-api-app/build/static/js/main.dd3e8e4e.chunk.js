(this["webpackJsonpgoogle-books-api-app"]=this["webpackJsonpgoogle-books-api-app"]||[]).push([[0],{21:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),a=c(15),i=c.n(a),s=c(3),r=(c(21),c(16)),l=c.n(r),j=c(0);var b=function(){var e,t=Object(n.useState)(["universe"]),c=Object(s.a)(t,2),o=c[0],a=c[1],i=Object(n.useState)(),r=Object(s.a)(i,2),b=r[0],d=r[1],u=Object(n.useState)([]),h=Object(s.a)(u,2),p=h[0],O=h[1],x=Object(n.useState)(1),g=Object(s.a)(x,2),f=g[0],v=g[1],m=Object(n.useState)(),k=Object(s.a)(m,2),N=k[0],w=k[1],S=Object(n.useState)(),P=Object(s.a)(S,2),C=P[0],A=P[1],I=Object(n.useState)(20),y=Object(s.a)(I,2),z=y[0],B=y[1];return Object(n.useEffect)((function(){l.a.get("https://Google-Books-API-App.matthewclarkosu.repl.co/volumeSearch",{params:{searchWord:o,page:f,itemsPerPage:z}}).then((function(e){O(e.data.items),w(e.data.hasNextPage),A(e.data.hasPreviousPage)}))}),[f,o,z]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"search-container",children:[Object(j.jsx)("h1",{children:"Google Books API App"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(b),v(1)},children:[Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{id:"search-box",type:"text",autoComplete:"off",onChange:function(e){var t=e.target.value;d(t)},className:"input-control",placeholder:"Input Search - i.e. 'Universe'"})}),Object(j.jsx)("button",{id:"search-button",type:"submit",className:"btn btn-info text-white",children:"Search"})]}),Object(j.jsx)("div",{id:"dropdown-container",children:Object(j.jsxs)("select",{id:"results-per-page-dropdown",className:"btn btn-info dropdown-toggle",onChange:function(t){e=t.target.value,B(e)},children:[Object(j.jsx)("option",{value:"2",children:"2 books per page"}),Object(j.jsx)("option",{value:"4",children:"4 books per page"}),Object(j.jsx)("option",{value:"8",children:"8 books per page"}),Object(j.jsx)("option",{value:"10",children:"10 books per page"}),Object(j.jsx)("option",{selected:!0,value:"20",children:"20 books per page"}),Object(j.jsx)("option",{value:"40",children:"40 books per page"})]})}),Object(j.jsx)("hr",{id:"horizontal-rule"})]}),Object(j.jsx)("div",{className:"card-container",children:p.length>0?p.map((function(e){return Object(j.jsx)("a",{target:"_blank",href:e.link,children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:e.image,alt:"book image failed to load"}),Object(j.jsx)("div",{id:"book-title",children:e.title}),Object(j.jsx)("div",{id:"book-authors",children:e.authors}),Object(j.jsx)("div",{id:"book-date",children:e.publishedDate}),Object(j.jsx)("div",{id:"book-description",children:e.description}),Object(j.jsx)("p",{children:"..."})]},e.id)})})):Object(j.jsx)("p",{children:"No results found"})}),Object(j.jsxs)("div",{id:"page-buttons",children:[Object(j.jsx)("a",{href:"#horizontal-rule",children:Object(j.jsx)("button",{id:"previous-page",onClick:function(){v(C?function(e){return e-1}:function(e){return e})},className:"btn btn-info text-white",children:"Previous"})}),Object(j.jsx)("a",{href:"#horizontal-rule",children:Object(j.jsx)("button",{id:"next-page",onClick:function(){v(N?function(e){return e+1}:function(e){return e})},className:"btn btn-info text-white",children:"Next"})})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/matt-clark-372756212/",target:"_blank",children:Object(j.jsx)("footer",{children:"Matt Clark - 2021"})})]})};i.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.dd3e8e4e.chunk.js.map