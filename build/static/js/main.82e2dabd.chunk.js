(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{29:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(0),c=t.n(a),i=t(15),o=t.n(i),s=t(3),u=t(4),l=t.n(u),d=t(9),b=t(2),f=t(5),p=t(6);function x(){var n=Object(f.a)(["\n\n   transition: all 0.3s ease;\n\n   :hover {\n       opacity: 0.8;\n   }\n\n   button {\n       cursor: pointer;\n       user-select: none;\n       font-size: 1.2rem;\n       width: 100%;\n       height: 50px;\n       margin: 5px 0;\n       background: ",";\n    border: 3px solid #fff;\n    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    color: #fff;\n    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25)\n   }\n"]);return x=function(){return n},n}function j(){var n=Object(f.a)(["\nmax-width: 1100px;\nbackground: #ebfeff;\nborder-radius: 10px;\nborder: 2px solid #0085a3;\npadding: 20px;\nbox-shadow: 0px, 5px, 10px rgba(0, 0, 0, 0.25);\ntext-align: center;\n\np {\n    font-size: 1.5rem;\n}\n"]);return j=function(){return n},n}var g,h=p.b.div(j()),O=p.b.div(x(),(function(n){var e=n.correct,t=n.userClicked;return e?"linear-gradient(90deg, #56ffa4, #59bc86)":!e&&t?"linear-gradient(90deg, #ff5656, #c16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),m=function(n){var e=n.question,t=n.answers,a=n.callback,c=n.userAnswer,i=n.questionNr,o=n.totalQuestions;return Object(r.jsxs)(h,{children:[Object(r.jsxs)("p",{className:"number",children:["Question: ",i," / ",o]}),Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:e}}),Object(r.jsx)("div",{children:t.map((function(n){return Object(r.jsx)(O,{correct:(null===c||void 0===c?void 0:c.correctAnswer)===n,userClicked:(null===c||void 0===c?void 0:c.answer)===n,children:Object(r.jsx)("button",{disabled:!!c,value:n,onClick:a,children:Object(r.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})})},n)}))})]})},v=t(13);!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(g||(g={}));var w=function(){var n=Object(d.a)(l.a.mark((function n(e,t){var r,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(e,"&difficulty=").concat(t,"&type=multiple"),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return a=n.sent,n.abrupt("return",a.results.map((function(n){return Object(v.a)(Object(v.a)({},n),{},{answers:(e=[].concat(Object(s.a)(n.incorrect_answers),[n.correct_answer]),Object(s.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),k=t.p+"static/media/bg.616e45fe.jpg";function y(){var n=Object(f.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n\n> p {\n    color: #fff;\n}\n.score {\n    color: #fff;\n    font-size: 2rem;\n    margin: 0;\n}\nh1 {\n    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n    background-image: linear-gradient(180deg, #fff, #87f1ff);\n    background-size: 100%;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent;\n    filter: drop-shadow(2px 2px #0085a3);\n    font-size: 70px;\n    font-weight: 400;\n    text-align: center;\n    margin: 20px;\n}\n.start, .next {\n    cursor: pointer;\n    background: linear-gradient(180deg, #fff, #ffcc91);\n    border: 2px solid #d38558;\n    box-shadow: 0px, 5px, 10px rgba(0, 0, 0, 0.25);\n    border-radius: 10px;\n    height: 40px;\n    margin: 20px;\n    padding: 0 40px;\n    font-size: 18px;\n}\n.start {\n    max-width: 200px;\n}\n"]);return y=function(){return n},n}function S(){var n=Object(f.a)(["\nhtml {\n    height: 100%;\n}\nbody {\n    background-image: url(","); \n    background-size: cover;\n    margin: 0;\n    padding: 0 20px;\n    display: flex;\n    justify-content: center;\n}\n* {\n    box-sizing: border-box;\n    font-family: 'catamaran', sans-serif;\n}\n"]);return S=function(){return n},n}var z=Object(p.a)(S(),k),A=p.b.div(y()),q=10,N=function(){var n=Object(a.useState)(!1),e=Object(b.a)(n,2),t=e[0],c=e[1],i=Object(a.useState)([]),o=Object(b.a)(i,2),u=o[0],f=o[1],p=Object(a.useState)(0),x=Object(b.a)(p,2),j=x[0],h=x[1],O=Object(a.useState)([]),v=Object(b.a)(O,2),k=v[0],y=v[1],S=Object(a.useState)(0),N=Object(b.a)(S,2),_=N[0],C=N[1],E=Object(a.useState)(!0),I=Object(b.a)(E,2),M=I[0],Q=I[1];console.log(w(q,g.EASY));var H=function(){var n=Object(d.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),Q(!1),n.next=4,w(q,g.EASY);case 4:e=n.sent,f(e),C(0),y([]),h(0),c(!1);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(z,{}),Object(r.jsxs)(A,{children:[Object(r.jsx)("h1",{children:"REACT QUIZ"}),M||k.length===q?Object(r.jsx)("button",{className:"start",onClick:H,children:"Start"}):null,M?null:Object(r.jsxs)("p",{className:"score",children:["Score: ",_]}),t&&Object(r.jsx)("p",{children:"Loading Questions ..."}),!t&&!M&&Object(r.jsx)(m,{questionNr:j+1,totalQuestions:q,question:u[j].question,answers:u[j].answers,userAnswer:k?k[j]:void 0,callback:function(n){if(!M){var e=n.currentTarget.value,t=u[j].correct_answer===e;t&&C((function(n){return n+1}));var r={question:u[j].question,answer:e,correct:t,correctAnswer:u[j].correct_answer};y((function(n){return[].concat(Object(s.a)(n),[r])}))}}}),M||t||k.length!==j+1||9===j?null:Object(r.jsx)("button",{className:"next",onClick:function(){var n=j+1;n===q?Q(!0):h(n)},children:"Next Question"})]})]})};o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.82e2dabd.chunk.js.map