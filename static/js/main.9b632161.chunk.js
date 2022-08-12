(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,n){"use strict";n.r(t);var a,r,l,c=n(0),i=n.n(c),o=n(66),u=n.n(o),s=n(36),p=n(37),m=p.a.div(a||(a=Object(s.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n    font-family: Arial, Helvetica, sans-serif;\n    & a {\n        color: #000;\n        text-decoration: none;\n    }\n    .nav {\n        align-items: flex-end;\n    }\n    .nav a {\n        color: #fff;\n    }\n    & ul {\n        padding: 0;\n        margin: 0;\n        display: flex;\n        overflow-x: scroll;\n        -ms-overflow-style: none;\n    }\n\n    & ul::-webkit-scrollbar{ display:none; }\n\n    & li {\n        list-style: none;\n        border-radius: 5px;\n        margin: 10px;\n    }\n    & .movie_list li {\n        box-shadow: 5px 5px 5px #d9d9d9;\n    }\n    & .movie_list li div:nth-child(1) {\n        width: 200px;\n        height: 300px;\n        border-top-left-radius: 5px;\n        border-top-right-radius: 5px;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n    }\n\n    & .movie_list li div:nth-child(2) {\n        border-top: 1px solid #d9d9d9;\n        border-bottom-left-radius: 5px;\n        border-bottom-right-radius: 5px;\n    }\n\n    & p {\n        margin: 0;\n        padding: 0 20px;\n    }\n\n    & .movie_text {\n        height: 70px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        font-size: 14px;\n    }\n\n    & .movie_text p {\n        margin: 2px 0;\n    }\n\n    & .movie_title {\n        font-weight: bold;\n    }\n\n    & img {\n        height: 100%;\n    }\n\n    form {\n        display: flex;\n        align-items: end;\n    }\n"]))),d=n(22),E=n(3),f="LOAD_ALLPOSTS_REQUEST",b=n(16),v=n(154),h=n(72),x="https://image.tmdb.org/t/p/original",g=n.n(h).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"7b60f5d61e72edfbb32b4bc1a8115f8b",language:"ko",page:1}}),y=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=Object(E.f)();return Object(c.useCallback)(function(t){e("/movieapp/detail",{state:t})},[e])},O=function(){var e=y(null),t=Object(b.c)(function(e){return e.list.results}).nowplaying;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"\ud604\uc7ac \uc0c1\uc601 \uc601\ud654 Top 20"),i.a.createElement("ul",{className:"movie_list"},t.map(function(t){return i.a.createElement("li",{key:t.id,onClick:function(){return e(t)}},i.a.createElement("div",null,i.a.createElement("img",{src:"".concat(x).concat(t.poster_path),alt:t.title})),i.a.createElement("div",{className:"movie_text"},i.a.createElement("p",{className:"movie_title"},t.title),i.a.createElement("p",null,t.release_date.replace(/-/g,"").replace(/(\d{4})(\d{2})(\d{2})/,"$2\uc6d4 $3, $1"))))})))},w=function(){var e=y(null),t=Object(b.c)(function(e){return e.list.results}).popular;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"\uc778\uae30 \uc601\ud654 Top 20"),i.a.createElement("ul",{className:"movie_list"},t.map(function(t){return i.a.createElement("li",{key:t.id,onClick:function(){return e(t)}},i.a.createElement("div",null,i.a.createElement("img",{src:"".concat(x).concat(t.poster_path),alt:t.title})),i.a.createElement("div",{className:"movie_text"},i.a.createElement("p",{className:"movie_title"},t.title),i.a.createElement("p",null,t.release_date.replace(/-/g,"").replace(/(\d{4})(\d{2})(\d{2})/,"$2\uc6d4 $3, $1"))))})))},_=function(){var e=y(null),t=Object(b.c)(function(e){return e.list.results}).toprated;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"\ub192\uc740 \ud3c9\uc810\uc758 \uc778\uae30\uc601\ud654 Top 20"),i.a.createElement("ul",{className:"movie_list"},t.map(function(t){return i.a.createElement("li",{key:t.id,onClick:function(){return e(t)}},i.a.createElement("div",null,i.a.createElement("img",{src:"".concat(x).concat(t.poster_path),alt:t.title})),i.a.createElement("div",{className:"movie_text"},i.a.createElement("p",{className:"movie_title"},t.title),i.a.createElement("p",null,t.release_date.replace(/-/g,"").replace(/(\d{4})(\d{2})(\d{2})/,"$2\uc6d4 $3, $1"))))})))},j=function(){var e=y(null),t=Object(b.c)(function(e){return e.list.results}).upcoming;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"\uac1c\ubd09 \uc608\uc815 \uc601\ud654 Top 20"),i.a.createElement("ul",{className:"movie_list"},t.map(function(t){return i.a.createElement("li",{key:t.id,onClick:function(){return e(t)}},i.a.createElement("div",null,i.a.createElement("img",{src:"".concat(x).concat(t.poster_path),alt:t.title})),i.a.createElement("div",{className:"movie_text"},i.a.createElement("p",{className:"movie_title"},t.title),i.a.createElement("p",null,t.release_date.replace(/-/g,"").replace(/(\d{4})(\d{2})(\d{2})/,"$2\uc6d4 $3, $1"))))})))},S=n(21),k=n(156),L=n(155),A="SEARCH_ALLPOSTS_REQUEST",C=function(e){var t=e.children,n=Object(b.b)(),a=Object(E.f)(),r=Object(c.useState)(""),l=Object(S.a)(r,2),o=l[0],u=l[1],s=Object(c.useCallback)(function(e){u(e.target.value)},[]),p=Object(c.useCallback)(function(e){e.preventDefault(),n({type:A,payload:{query:o}}),a("/movieapp/search")},[o]);return i.a.createElement("div",null,i.a.createElement("ul",{className:"nav"},i.a.createElement("li",null,i.a.createElement(k.a,{variant:"contained",color:"primary"},i.a.createElement(d.b,{to:"/movieapp"},"Home"))),i.a.createElement("li",null,i.a.createElement(k.a,{variant:"contained",color:"primary"},i.a.createElement(d.b,{to:"/movieapp/popular"},"\uc778\uae30"))),i.a.createElement("li",null,i.a.createElement(k.a,{variant:"contained",color:"primary"},i.a.createElement(d.b,{to:"/movieapp/nowplaying"},"\ud604\uc7ac \uc0c1\uc601 \uc911"))),i.a.createElement("li",null,i.a.createElement(k.a,{variant:"contained",color:"primary"},i.a.createElement(d.b,{to:"/movieapp/upcoming"},"\uac1c\ubd09 \uc608\uc815"))),i.a.createElement("li",null,i.a.createElement(k.a,{variant:"contained",color:"primary"},i.a.createElement(d.b,{to:"/movieapp/topLate"},"\ub192\uc740 \ud3c9\uc810"))),i.a.createElement("li",null,i.a.createElement("form",{onSubmit:p},i.a.createElement(L.a,{id:"standard-basic",label:"\uc601\ud654 \uc774\ub984 \uac80\uc0c9",variant:"standard",value:o,onChange:s}),i.a.createElement(k.a,{variant:"contained",type:"submit",color:"primary"},"\uac80\uc0c9")))),t)},T=function(){return i.a.createElement(C,null,i.a.createElement(w,null),i.a.createElement(O,null),i.a.createElement(j,null),i.a.createElement(_,null))},N=function(){return i.a.createElement(C,null,i.a.createElement(w,null))},R=function(){return i.a.createElement(C,null,i.a.createElement(O,null))},$=function(){return i.a.createElement(C,null,i.a.createElement(j,null))},U=function(){return i.a.createElement(C,null,i.a.createElement(_,null))},P="CREDITS_ALLPOSTS_REQUEST",D=function(){var e=Object(E.e)(),t=Object(b.b)(),n=Object(b.c)(function(e){return e.credits}).loading,a=Object(b.c)(function(e){return e.credits.results}).credits,r=e.state;return Object(c.useEffect)(function(){t({type:P,payload:{movie_id:r.id}})},[]),n?i.a.createElement(v.a,null):i.a.createElement(C,null,r?i.a.createElement(I,{color:r.backdrop_path},i.a.createElement("div",{className:"bg"}),i.a.createElement("div",{className:"detail-wrap"},i.a.createElement("div",{className:"movie-inner"},i.a.createElement("p",null,r.title),i.a.createElement("p",null,r.original_title),i.a.createElement("div",null,i.a.createElement("img",{src:"".concat(x).concat(r.poster_path),alt:r.title}))),i.a.createElement("div",{className:"movie-info"},i.a.createElement("p",null,i.a.createElement("b",null,"\uac1c\ubd09\uc77c")," :"," ",r.release_date.replace(/-/g,"").replace(/(\d{4})(\d{2})(\d{2})/,"$2\uc6d4 $3, $1")),i.a.createElement("p",null,i.a.createElement("b",null,"\ud3c9\xa0\xa0\xa0\uc810")," : ",r.vote_average,"\uc810"),i.a.createElement("p",{className:"synopsis"},i.a.createElement("b",null,"\uc904\uac70\ub9ac")," : ",i.a.createElement("br",null),r.overview),i.a.createElement("p",null,i.a.createElement("b",null,"\uac10\xa0\xa0\xa0\ub3c5")," :\xa0",a.crew.map(function(e){return i.a.createElement("b",{key:Math.random()},"Director"===e.job&&i.a.createElement("span",{key:e.id},e.name))})),i.a.createElement("p",null,i.a.createElement("b",null,"\ucd9c\xa0\xa0\xa0\uc5f0")," : ",i.a.createElement("br",null),a.cast.map(function(e){return i.a.createElement("b",{key:Math.random(),className:"crew"},0===e.order&&i.a.createElement("span",null,e.name,",",i.a.createElement("br",null)),1===e.order&&i.a.createElement("span",null,e.name,",",i.a.createElement("br",null)),2===e.order&&i.a.createElement("span",null,e.name,",",i.a.createElement("br",null)),3===e.order&&i.a.createElement("span",null,e.name,",",i.a.createElement("br",null)),4===e.order&&i.a.createElement("span",null,e.name,",",i.a.createElement("br",null)),5===e.order&&i.a.createElement("span",null,e.name," "))}))))):i.a.createElement("h1",null,"\ud45c\uc2dc\ud56d\ubaa9 \uc5c6\uc74c"))},I=p.a.div(r||(r=Object(s.a)(["\n  text-align: left;\n  color: #fff;\n\n  & p {\n    padding: 0;\n  }\n\n  .bg {\n    position: absolute;\n    z-index: 10;\n    width: 99vw;\n    height: 93vh;\n    background: url(","",") no-repeat center\n      top/cover;\n  }\n\n  .detail-wrap {\n    width: 99vw;\n    height: 93vh;\n    position: absolute;\n    z-index: 100;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n\n  .detail-wrap div:nth-child(1) {\n    margin: 0 30px;\n  }\n\n  .movie-inner p:nth-child(1) {\n    font-size: 30px;\n    font-weight: 600;\n    line-height: 28px;\n    margin-top: 20px;\n  }\n\n  .movie-inner p:nth-child(2) {\n    margin-bottom: 15px;\n  }\n\n  .movie-info {\n    width: 700px;\n    margin-top: 60px;\n  }\n\n  .movie-info p {\n    margin: 20px 0;\n    font-size: 18px;\n  }\n\n  .synopsis {\n    line-height: 30px;\n  }\n\n  & img {\n    width: 400px;\n    margin-bottom: 20px;\n  }\n  .crew span {\n    line-height: 30px;\n  }\n"])),x,function(e){return e.color}),F=n(8),H=n.n(F),z=n(25),q=n(11),M=function(e){return{type:"SEARCH_ALLPOSTS_SUCCESS",payload:{data:e}}},Q=function(e){return{type:"SEARCH_ALLPOSTS_FAILURE",payload:e}},J=H.a.mark(X),B=H.a.mark(Y),W=H.a.mark(Z),G="";function K(){return V.apply(this,arguments)}function V(){return(V=Object(z.a)(H.a.mark(function e(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/search/movie?query=".concat(G));case 2:return e.next=4,e.sent.data.results;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function X(e){var t;return H.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,G=e.payload.query,n.next=4,Object(q.b)(K);case 4:return t=n.sent,n.next=7,Object(q.d)(M({search:t}));case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(q.d)(Q(n.t0));case 13:case"end":return n.stop()}},J,null,[[0,9]])}function Y(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.e)(A,X);case 2:case"end":return e.stop()}},B)}function Z(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.a)([Object(q.c)(Y)]);case 2:case"end":return e.stop()}},W)}var ee=function(){var e=y(null),t=Object(b.c)(function(e){return e.search.results}).search;return i.a.createElement(i.a.Fragment,null,i.a.createElement("h3",null,"\uac80\uc0c9 \uacb0\uacfc : ",G),i.a.createElement(te,{className:"movie_list"},t.map(function(t){return i.a.createElement("li",{key:t.id,onClick:function(){return e(t)}},i.a.createElement("div",null,i.a.createElement("img",{src:"".concat(x).concat(t.poster_path),alt:t.title})),i.a.createElement("div",{className:"movie_text"},i.a.createElement("p",{className:"movie_title"},t.title),i.a.createElement("p",null,t.release_date.replace(/-/g,"").replace(/(\d{4})(\d{2})(\d{2})/,"$2\uc6d4 $3, $1"))))})))},te=p.a.ul(l||(l=Object(s.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),ne=function(){return i.a.createElement(C,null,i.a.createElement(ee,null))};var ae=function(){var e=Object(b.c)(function(e){return e.list}).loading,t=Object(b.b)();return Object(c.useEffect)(function(){t({type:f})},[]),e?i.a.createElement(v.a,null):i.a.createElement(m,{className:"App"},i.a.createElement(d.a,{basename:""},i.a.createElement(E.c,null,i.a.createElement(E.a,{path:"/movieapp",element:i.a.createElement(T,null)}),i.a.createElement(E.a,{path:"/movieapp/popular",element:i.a.createElement(N,null)}),i.a.createElement(E.a,{path:"/movieapp/nowplaying",element:i.a.createElement(R,null)}),i.a.createElement(E.a,{path:"/movieapp/upcoming",element:i.a.createElement($,null)}),i.a.createElement(E.a,{path:"/movieapp/topLate",element:i.a.createElement(U,null)}),i.a.createElement(E.a,{path:"/movieapp/detail",element:i.a.createElement(D,null)}),i.a.createElement(E.a,{path:"/movieapp/search",element:i.a.createElement(ne,null)}))))},re=n(28),le=n(79),ce=n(77),ie=n(78),oe=n(38),ue={results:{popular:[],nowplaying:[],toprated:[],upcoming:[]},loading:!1,success:!1,error:null},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;return Object(oe.a)(e,function(n){switch(t.type){case f:n.loading=!0;break;case"LOAD_ALLPOSTS_SUCCESS":n.loading=!1,n.success=!0,n.results=t.payload.data;break;case"LOAD_ALLPOSTS_FAILURE":n.error=t.payload;break;default:return e}})},pe={results:{search:[]},loading:!1,success:!1,error:null},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;return Object(oe.a)(e,function(n){switch(t.type){case A:n.loading=!0;break;case"SEARCH_ALLPOSTS_SUCCESS":n.loading=!1,n.success=!0,n.results=t.payload.data;break;case"SEARCH_ALLPOSTS_FAILURE":n.error=t.payload;break;default:return e}})},de={results:{credits:{id:0,cast:[],crew:[]}},loading:!1,success:!1,error:null},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;return Object(oe.a)(e,function(n){switch(t.type){case P:n.loading=!0;break;case"CREDITS_ALLPOSTS_SUCCESS":n.loading=!1,n.success=!0,n.results=t.payload.data;break;case"CREDITS_ALLPOSTS_FAILURE":n.error=t.payload;break;default:return e}})},fe=Object(re.combineReducers)({list:se,search:me,credits:Ee}),be=function(e){return{type:"LOAD_ALLPOSTS_SUCCESS",payload:{data:e}}},ve=function(e){return{type:"LOAD_ALLPOSTS_FAILURE",payload:e}},he=H.a.mark(Ae),xe=H.a.mark(Ce),ge=H.a.mark(Te);function ye(){return Oe.apply(this,arguments)}function Oe(){return(Oe=Object(z.a)(H.a.mark(function e(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("movie/popular");case 2:return e.next=4,e.sent.data.results;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function we(){return _e.apply(this,arguments)}function _e(){return(_e=Object(z.a)(H.a.mark(function e(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("movie/now_playing");case 2:return e.next=4,e.sent.data.results;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function je(){return Se.apply(this,arguments)}function Se(){return(Se=Object(z.a)(H.a.mark(function e(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("movie/upcoming");case 2:return e.next=4,e.sent.data.results;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ke(){return Le.apply(this,arguments)}function Le(){return(Le=Object(z.a)(H.a.mark(function e(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("movie/top_rated");case 2:return e.next=4,e.sent.data.results;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Ae(){var e,t,n,a;return H.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(q.b)(ye);case 3:return e=r.sent,r.next=6,Object(q.b)(we);case 6:return t=r.sent,r.next=9,Object(q.b)(je);case 9:return n=r.sent,r.next=12,Object(q.b)(ke);case 12:return a=r.sent,r.next=15,Object(q.d)(be({popular:e,nowplaying:t,upcoming:n,toprated:a}));case 15:r.next=21;break;case 17:return r.prev=17,r.t0=r.catch(0),r.next=21,Object(q.d)(ve(r.t0));case 21:case"end":return r.stop()}},he,null,[[0,17]])}function Ce(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.e)(f,Ae);case 2:case"end":return e.stop()}},xe)}function Te(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.a)([Object(q.c)(Ce)]);case 2:case"end":return e.stop()}},ge)}var Ne=function(e){return{type:"CREDITS_ALLPOSTS_SUCCESS",payload:{data:e}}},Re=function(e){return{type:"CREDITS_ALLPOSTS_FAILURE",payload:e}},$e=H.a.mark(He),Ue=H.a.mark(ze),Pe=H.a.mark(qe),De=0;function Ie(){return Fe.apply(this,arguments)}function Fe(){return(Fe=Object(z.a)(H.a.mark(function e(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("/movie/".concat(De,"/credits"));case 2:return e.next=4,e.sent.data;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function He(e){var t;return H.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,De=e.payload.movie_id,n.next=4,Object(q.b)(Ie);case 4:return t=n.sent,n.next=7,Object(q.d)(Ne({credits:t}));case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(q.d)(Re(n.t0));case 13:case"end":return n.stop()}},$e,null,[[0,9]])}function ze(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.e)(P,He);case 2:case"end":return e.stop()}},Ue)}function qe(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.a)([Object(q.c)(ze)]);case 2:case"end":return e.stop()}},Pe)}var Me=H.a.mark(Qe);function Qe(){return H.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.a)([Object(q.c)(Te),Object(q.c)(Z),Object(q.c)(qe)]);case 2:case"end":return e.stop()}},Me)}var Je=Object(ie.createLogger)(),Be=Object(le.a)(),We=Object(re.createStore)(fe,Object(ce.composeWithDevTools)(Object(re.applyMiddleware)(Je,Be)));u.a.createRoot(document.getElementById("root")).render(i.a.createElement(b.a,{store:We},i.a.createElement(ae,null))),Be.run(Qe)},85:function(e,t,n){e.exports=n(122)}},[[85,2,1]]]);
//# sourceMappingURL=main.9b632161.chunk.js.map