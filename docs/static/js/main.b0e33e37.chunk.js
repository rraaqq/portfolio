(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e){e.exports=[{name:"Project",id:1,projectUrl:"https://rraaqq.github.io/trello/"},{name:"Project",id:2,projectUrl:"https://github.com/"},{name:"Project",id:3,projectUrl:"https://github.com/"},{name:"Project",id:4,projectUrl:"https://github.com/"},{name:"Project",id:5,projectUrl:"https://github.com/"},{name:"Project",id:6,projectUrl:"https://github.com/"}]},20:function(e,t,a){e.exports=a(47)},25:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(12),r=a(49),o=a(13),m=a(14),i=a(18),s=a(15),u=a(19),E=a(48),d=(a(25),function(e){return c.a.createElement("div",{className:"navigation"},c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(E.a,{to:"/",onClick:e.scrollDown},"Home")),c.a.createElement("li",null,c.a.createElement(E.a,{to:"/about",onClick:e.scrollDown},"O mnie")),c.a.createElement("li",null,c.a.createElement(E.a,{to:"/projects",onClick:e.scrollDown},"Projekty")),c.a.createElement("li",null,c.a.createElement(E.a,{to:"/contact",onClick:e.scrollDown},"Kontakt")))))}),p=(a(29),function(){return c.a.createElement("div",{className:"logo"},c.a.createElement("hr",null),c.a.createElement(E.a,{to:"./"},c.a.createElement("h1",null,c.a.createElement("span",null,"<"),"MR",c.a.createElement("span",null,"/>"))),c.a.createElement("h2",null,"M",c.a.createElement("span",null,"icha\u0142"),c.a.createElement("br",null),"R",c.a.createElement("span",null,"aczkowski")))}),h=(a(31),a(7)),f=a(4),b=a(8),v=a(3);h.b.add(b.a,b.c,b.b,v.b);var k=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"footer__media"},c.a.createElement("a",{href:"https://github.com/rraaqq",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",{className:"footer__media-single"},c.a.createElement(f.a,{icon:b.a}))),c.a.createElement("a",{href:"https://www.linkedin.com/in/micha%C5%82-raczkowski-253b6b165/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",{className:"footer__media-single"},c.a.createElement(f.a,{icon:b.c}))),c.a.createElement("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",{className:"footer__media-single"},c.a.createElement(f.a,{icon:b.b}))),c.a.createElement("a",{href:"mailto:michal.raczkowski.88@gmail.com"},c.a.createElement("div",{className:"footer__media-single"},c.a.createElement(f.a,{icon:v.b})))),c.a.createElement("p",null,"\xa9 2018 Micha\u0142 Raczkowski. ",c.a.createElement("br",null)," All rights reserved."))},w=a(50),N=(a(34),function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"title"},c.a.createElement("h2",null,"Cze\u015b\u0107, jestem Micha\u0142."),c.a.createElement("p",null,"Chc\u0119 zosta\u0107 Junior Front-end Developerem."),c.a.createElement(E.a,{to:"/contact"},c.a.createElement("div",{className:"button"},"Napisz do mnie"))))}),j=(a(36),function(){return c.a.createElement("h1",null,"O mnie")}),g=a(16),_=(a(38),function(){return c.a.createElement("div",{className:"projects-list"},g.map(function(e){return c.a.createElement("div",{className:"single-project",key:e.id},c.a.createElement("p",null,e.name))}))});a(40);h.b.add(v.d,v.e,v.b,v.c);var z=function(){return c.a.createElement("div",{className:"contact-container"},c.a.createElement("div",{className:"contact-img"},c.a.createElement("div",{className:"contact-border"},c.a.createElement("h2",null,c.a.createElement("span",null,"Kontakt")))),c.a.createElement("div",{className:"contact-details"},c.a.createElement("div",{className:"contact-details-item"},c.a.createElement(f.a,{icon:v.e}),"Micha\u0142 Raczkowski"),c.a.createElement("div",{className:"contact-details-item"},c.a.createElement(f.a,{icon:v.d}),"Telefon: 012-345-678"),c.a.createElement("div",{className:"contact-details-item"},c.a.createElement(f.a,{icon:v.b}),"E-mail: michal.raczkowski.88@gmail.com"),c.a.createElement("div",{className:"contact-details-item"},c.a.createElement(f.a,{icon:v.c}),"Adres: \u0141\xf3d\u017a, Polska")))},C=(a(42),function(){return c.a.createElement("div",{className:"content"},c.a.createElement(w.a,{exact:!0,path:"/",component:N}),c.a.createElement(w.a,{path:"/about",component:j}),c.a.createElement(w.a,{path:"/projects",component:_}),c.a.createElement(w.a,{path:"/contact",component:z}))});a(45);h.b.add(v.a);var D=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"scrollTop",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"scrollDown",value:function(){window.scrollTo({top:900,behavior:"smooth"})}},{key:"render",value:function(){return c.a.createElement("div",{className:"app-container"},c.a.createElement("header",null,c.a.createElement(p,null),c.a.createElement(d,{scrollDown:this.scrollDown}),c.a.createElement(k,null)),c.a.createElement("section",null,c.a.createElement(C,null)),c.a.createElement("button",{className:"back-to-top",onClick:this.scrollTop},c.a.createElement(f.a,{icon:v.a})))}}]),t}(c.a.Component);Object(l.render)(c.a.createElement(r.a,null,c.a.createElement(D,null)),document.getElementById("root"))}},[[20,2,1]]]);
//# sourceMappingURL=main.b0e33e37.chunk.js.map