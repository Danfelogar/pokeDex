(this["webpackJsonppokedex-api"]=this["webpackJsonppokedex-api"]||[]).push([[0],{29:function(e,t,c){},31:function(e,t,c){},37:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(19),s=c.n(r),o=(c(29),c(24)),i=c(4),l=c.n(i),j=c(8),d=c(7),u=c(23),p=c(3),h=(c(31),function(){var e=Object(j.a)(l.a.mark((function e(t){var c,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c="https://pokeapi.co/api/v2/pokemon/".concat(t),e.next=4,fetch(c);case 4:return n=e.sent,e.next=7,n.json();case 7:return a=e.sent,e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()),b=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c,n,a,r,s=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:21,c=s.length>1&&void 0!==s[1]?s[1]:0,e.prev=2,n="https://pokeapi.co/api/v2/pokemon?limit=".concat(t,"&offset=").concat(c),e.next=6,fetch(n);case 6:return a=e.sent,e.next=9,a.json();case 9:return r=e.sent,e.abrupt("return",r);case 13:e.prev=13,e.t0=e.catch(2);case 15:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(j.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),f=c(9),m=c(10),O=(c(37),a.a.createContext({favoritePokemons:[],updateFavoritePokemons:function(e){return null}})),v=O.Provider,k=O,g=c(0),N=function(e){var t=e.onSearch,c=Object(p.f)(),a=Object(n.useContext)(k).favoritePokemons,r=Object(n.useState)(""),s=Object(d.a)(r,2),o=s[0],i=s[1],u=function(){var e=Object(j.a)(l.a.mark((function e(c){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=o.toLocaleLowerCase(),t(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)("nav",{className:"navBar",children:[Object(g.jsx)("div",{}),Object(g.jsx)("div",{className:"navBar-wrap-logo",children:Object(g.jsx)("img",{onClick:function(){return c.push("/")},src:"https://datadex.talzz.com/_images/graphics/logo.png",alt:"logo",className:"navBar-img"})}),Object(g.jsxs)("div",{className:"navBar-wrap-input",children:[Object(g.jsx)("input",{className:"navBar-input",type:"text",placeholder:"Find your pokemon...",onChange:function(e){i(e.target.value),0===e.target.value.length&&t(null)},autoComplete:"off"}),Object(g.jsx)("button",{className:"navBar-btn-search",onClick:u,children:Object(g.jsx)(f.a,{icon:m.d})})]}),Object(g.jsxs)("div",{className:"navBar-icon",children:[Object(g.jsx)(f.a,{onClick:function(){return c.push("/favoritespks")},className:"navBar-icon-heart",icon:m.c}),a.length]})]})},w=(c(44),function(e){var t=e.onLeftClick,c=e.onRightClick,n=e.page,a=e.totalPages;return Object(g.jsxs)("div",{className:"pagination",children:[Object(g.jsx)("button",{onClick:t,children:Object(g.jsx)(f.a,{icon:m.a})}),Object(g.jsxs)("div",{children:[" ",n," de ",a," "]}),Object(g.jsx)("button",{onClick:c,children:Object(g.jsx)(f.a,{icon:m.b})})]})}),C=(c(45),c(22)),y=c.n(C),S=(c(46),function(e){var t=e.pokemon;console.log(t);var c=t.stats.map((function(e){return e.base_stat})),a=Object(n.useContext)(k),r=a.favoritePokemons,s=a.updateFavoritePokemons,o=Object(n.useState)(!1),i=Object(d.a)(o,2),l=i[0],j=i[1],u=function(){j(!l)},p=r.includes(t)?"\u2764\ufe0f":"\ud83d\udda4",h={grass:"#63BB5B",fire:"#FF9C54",water:"#4E90D5",electric:"#F3D23B",ice:"#74CEC0",poison:"#AB6AC8",ground:"#D97746",rock:"#C7B78B",bug:"#90C12C",dragon:"#0A6DC4",normal:"#a4acaf",flying:"#8FA8DD",fighting:"#D80A49",psychic:"#F97176",ghost:"#5269AC",dark:"#5A5366",steel:"#5A8EA1",fairy:"#EC8FE6"},b=function(e){return h[e]},x=function(e){return e<=29?"#fa5858":e<=59?"#faac58":e<=79?"#f7d358":e<=99?"#82fa58":e>=100?"#58faac":void 0};return Object(g.jsxs)(y.a,{isFlipped:l,flipDirection:"vertical",children:[Object(g.jsxs)("div",{className:"pokemonCard",children:[Object(g.jsx)("div",{className:"pokemonCard-img",children:Object(g.jsx)("img",{src:t.sprites.other.dream_world.front_default,alt:t.name})}),Object(g.jsxs)("div",{className:"pokemonCard-content",children:[Object(g.jsxs)("div",{className:"pokemonCard-text-1",children:[Object(g.jsxs)("div",{className:"pokemonCard-text-1-details",children:[Object(g.jsxs)("p",{children:["N.\xb0",t.id]}),Object(g.jsx)("p",{style:{cursor:"pointer"},onClick:u,children:" Show Stats "})]}),Object(g.jsx)("h3",{children:t.name})]}),Object(g.jsxs)("div",{className:"pokemonCard-text-2",children:[Object(g.jsx)("div",{className:"pokemonCard-type",children:t.types.map((function(e,t){return Object(g.jsx)("div",{style:{display:"flex",backgroundColor:"".concat(b(e.type.name)),borderRadius:"25px",marginBottom:"5px",fontSize:"22px",fontWeight:"400",width:"130px",letterSpacing:"1.4px",wordSpacing:"1px",textTransform:"capitalize",justifyContent:"center"},children:e.type.name},t)}))}),Object(g.jsx)("div",{className:"pokemonCard-icon",onClick:function(e){e.preventDefault(),s(t)},children:p})]})]})]}),Object(g.jsxs)("div",{className:"pokemonCard-back",onClick:u,children:[Object(g.jsx)("div",{className:"pokemonCard-back-title",children:"Stats"}),Object(g.jsxs)("div",{className:"pokemonCard-back-content",children:[Object(g.jsx)("h4",{className:"container-title-1",children:"Hp"}),Object(g.jsx)("div",{className:"percent-content",children:Object(g.jsx)("div",{className:"percent",style:{backgroundColor:"".concat(x(c[0])),height:"12px",width:"".concat(c[0],"%")}})}),Object(g.jsx)("h5",{style:{color:"".concat(x(c[0]))},children:c[0]}),Object(g.jsx)("h4",{className:"container-title-2",children:"Attack"}),Object(g.jsx)("div",{className:"percent-content",children:Object(g.jsx)("div",{className:"percent",style:{backgroundColor:"".concat(x(c[1])),height:"12px",width:"".concat(c[1],"%")}})}),Object(g.jsx)("h5",{style:{color:"".concat(x(c[1]))},children:c[1]}),Object(g.jsx)("h4",{className:"container-title-3",children:"Defense"}),Object(g.jsx)("div",{className:"percent-content",children:Object(g.jsx)("div",{className:"percent",style:{backgroundColor:"".concat(x(c[2])),height:"12px",width:"".concat(c[2],"%")}})}),Object(g.jsx)("h5",{style:{color:"".concat(x(c[2]))},children:c[2]}),Object(g.jsx)("h4",{className:"container-title-4",children:"Special-attac"}),Object(g.jsx)("div",{className:"percent-content",children:Object(g.jsx)("div",{className:"percent",style:{backgroundColor:"".concat(x(c[3])),height:"12px",width:"".concat(c[3],"%")}})}),Object(g.jsx)("h5",{style:{color:"".concat(x(c[3]))},children:c[3]}),Object(g.jsx)("h4",{className:"container-title-5",children:"Special-defense"}),Object(g.jsx)("div",{className:"percent-content",children:Object(g.jsx)("div",{className:"percent",style:{backgroundColor:"".concat(x(c[4])),height:"12px",width:"".concat(c[4],"%")}})}),Object(g.jsx)("h5",{style:{color:"".concat(x(c[4]))},children:c[4]}),Object(g.jsx)("h4",{className:"container-title-6",children:"Speed"}),Object(g.jsx)("div",{className:"percent-content",children:Object(g.jsx)("div",{className:"percent",style:{backgroundColor:"".concat(x(c[5])),height:"12px",width:"".concat(c[5],"%")}})}),Object(g.jsx)("h5",{style:{color:"".concat(x(c[5]))},children:c[5]})]})]})]})}),B=function(e){var t=e.pokemons,c=e.page,n=e.setPage,a=e.total,r=e.loading;return Object(g.jsxs)("div",{className:"pokedex",children:[Object(g.jsxs)("div",{className:"pokedex-header",children:[Object(g.jsx)("h1",{children:"Pokedex"}),Object(g.jsx)(w,{page:c+1,totalPages:a,onLeftClick:function(){var e=Math.max(c-1,0);n(e)},onRightClick:function(){var e=Math.min(c+1,a);n(e)}})]}),r?Object(g.jsx)("div",{children:"Loading Pokemons..."}):Object(g.jsx)("div",{className:"pokedex-grid",children:t.map((function(e,t){return Object(g.jsx)(S,{pokemon:e},t)}))})]})},P=(c(47),function(){return Object(g.jsxs)("nav",{className:"footer",children:[Object(g.jsx)("div",{}),Object(g.jsx)("div",{className:"footer-wrap-logo",children:Object(g.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png",alt:"logo",className:"footer-img"})}),Object(g.jsx)("div",{className:"footer-wrap-content",children:Object(g.jsx)("h2",{children:"Danfelogar frontend developer, made with love \xa9 2021"})}),Object(g.jsxs)("div",{className:"footer-social-networks",children:[Object(g.jsx)("a",{href:"https://www.instagram.com/danfelo18/",children:Object(g.jsx)("i",{className:"fab fa-instagram"})}),Object(g.jsx)("a",{href:"https://www.facebook.com/daniel.pologarcia/",children:Object(g.jsx)("i",{class:"fab fa-facebook-f"})}),Object(g.jsx)("a",{href:"https://www.linkedin.com/in/daniel-felipe-polo-garcia-9a985b210/",children:Object(g.jsx)("i",{className:"fab fa-linkedin-in"})})]})]})}),A=(c(48),function(e){var t=e.favorites;return console.log(t),Object(g.jsx)("div",{className:"favorites",children:Object(g.jsx)("div",{className:"favorites-grid",children:t.map((function(e,t){return Object(g.jsx)(S,{pokemon:e},t)}))})})}),F="favorite_pokemon";var D=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(0),s=Object(d.a)(r,2),i=s[0],f=s[1],m=Object(n.useState)(!0),O=Object(d.a)(m,2),k=O[0],w=O[1],C=Object(n.useState)([]),y=Object(d.a)(C,2),S=y[0],D=y[1],_=Object(n.useState)(!1),E=Object(d.a)(_,2),I=E[0],L=E[1],z=Object(n.useState)([]),J=Object(d.a)(z,2),M=J[0],R=J[1],T=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,b(21,21*c);case 4:return t=e.sent,n=t.results.map(function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t.url);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=8,Promise.all(n);case 8:a=e.sent,R(a),w(!1),f(Math.ceil(t.count/21)),L(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),alert(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){!function(){var e=JSON.parse(window.localStorage.getItem(F))||[];D(e)}()}),[]),Object(n.useEffect)((function(){T()}),[c]);var H=function(){var e=Object(j.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",T());case 2:return w(!0),L(!1),e.next=6,h(t);case 6:if(c=e.sent){e.next=13;break}return L(!0),w(!1),e.abrupt("return");case 13:R([c]),a(0),f(1);case 16:w(!1);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)(v,{value:{favoritePokemons:S,updateFavoritePokemons:function(e){var t=Object(o.a)(S),c=S.indexOf(e);c>=0?t.splice(c,1):t.push(e),D(t),window.localStorage.setItem(F,JSON.stringify(t)),console.log(S)}},children:Object(g.jsx)("div",{children:Object(g.jsxs)(u.a,{children:[Object(g.jsx)(N,{onSearch:H}),Object(g.jsxs)(p.c,{children:[Object(g.jsx)(p.a,{exact:!0,path:"/",children:I?Object(g.jsx)("div",{className:"notFound",children:"The searched pokemon was not found \ud83d\ude14"}):Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(B,{pokemons:M,page:c,setPage:a,total:i,loading:k})})}),Object(g.jsx)(p.a,{exact:!0,path:"/favoritespks",children:Object(g.jsx)(A,{favorites:S})})]}),Object(g.jsx)(P,{})]})})})};s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(D,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.3e5bfc25.chunk.js.map