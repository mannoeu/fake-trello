(this["webpackJsonpfake-trello"]=this["webpackJsonpfake-trello"]||[]).push([[0],{26:function(t,e,n){t.exports=n(41)},41:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(15),l=n.n(r),s=n(3),i=n(7),c=n(25),p=n(4),u=n(11),f=n.n(u),h=function(t){var e=o.a.useState({x:0,y:0}),n=Object(p.a)(e,2),a=n[0],r=n[1],l=o.a.useState(!1),s=Object(p.a)(l,2),i=s[0],c=s[1],u=o.a.useRef({x:0,y:0}),f=o.a.useRef({x:0,y:0}),h=o.a.useRef({x:0,y:0}),k=function t(){window.removeEventListener("mousemove",x),window.removeEventListener("mouseup",t),r({x:0,y:0}),c(!1)},x=function(t){u.current.x=t.clientX,u.current.y=t.clientY,d(t.clientX,t.clientY)},d=function(e,n){var a=e-f.current.x,o=n-f.current.y,l=t.current.getBoundingClientRect(),s=e-l.x-f.current.x,i=n-l.y-f.current.y;h.current.x=s/Math.abs(s)||0,h.current.y=i/Math.abs(i)||0,r({x:a,y:o})};return{coord:a,dragging:i,handleMouseDown:function(e){e.preventDefault();var n=t.current.getBoundingClientRect();f.current.x=e.clientX-n.x,f.current.y=e.clientY-n.y,d(e.clientX,e.clientY),c(!0),window.addEventListener("mousemove",x),window.addEventListener("mouseup",k)},mouseCoord:u.current,moveDirection:h.current}},k=function(t){var e=o.a.useState(new DOMRect),n=Object(p.a)(e,2),a=n[0],r=n[1],l=o.a.useRef(null),s=function(){l.current&&r(l.current.getBoundingClientRect())};return o.a.useLayoutEffect((function(){s()}),[]),o.a.useLayoutEffect((function(){s()}),[t]),[a,l]},x=n(2);function d(){var t=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 4px 8px 4px;\n  flex: 1 1 auto;\n  overflow-y: auto;\n"]);return d=function(){return t},t}function g(){var t=Object(s.a)(["\n  display: flex;\n  padding: 12px 8px;\n"]);return g=function(){return t},t}function w(){var t=Object(s.a)(["\n  padding: 12px 8px;\n  color: #172b4d;\n  font-weight: 700;\n"]);return w=function(){return t},t}function b(){var t=Object(s.a)(["\n  display: ",";\n  top: ",";\n  left: ",";\n  background: rgba(0, 0, 0, 0.32);\n  width: 272px;\n  height: ",";\n"]);return b=function(){return t},t}function v(){var t=Object(s.a)(["\n      z-index: 2;\n      transform: rotate(5deg);\n      position: fixed;\n      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);\n    "]);return v=function(){return t},t}function y(){var t=Object(s.a)(["\n  width: 272px;\n  flex: none;\n  background: #ebecf0;\n  font-size: 14px;\n  border-radius: 4px;\n  transition: box-shadow 0.2s, transform 0.2s;\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  padding: 0 4px;\n\n  ","\n"]);return y=function(){return t},t}function m(){var t=Object(s.a)(["\n  width: 272px;\n  border-radius: 4px;\n  height: ",";\n\n  & + div {\n    margin-left: 8px;\n  }\n"]);return m=function(){return t},t}var E,j=x.d.div(m(),(function(t){return t.height+"px"})),O=x.d.div(y(),(function(t){return t.dragging&&Object(x.c)(v())})),I=x.d.div(b(),(function(t){return t.dragging?"block":"none"}),(function(t){return t.y+"px"}),(function(t){return t.x+"px"}),(function(t){return t.height+"px"})),D=x.d.div(w()),C=x.d.div(g()),L=x.d.div(d()),R=n(6),z=o.a.createContext(null),M=new Array,T=function(t,e){return e.x>=t.x&&e.x<=t.x+t.width};function B(){var t=Object(s.a)(["\n  display: ",";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: inherit;\n  background: #ddd;\n"]);return B=function(){return t},t}function S(){var t=Object(s.a)(["\n  position: relative;\n  max-width: 256px;\n  flex: 1;\n  background: white;\n  padding: 8px;\n  border-radius: 4px;\n  border-bottom: 1px solid ",";\n  word-wrap: break-word;\n  font-size: 14px;\n  cursor: pointer;\n  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);\n\n  & + div {\n    margin-top: 8px;\n  }\n\n  &:hover {\n    background: #eee;\n  }\n"]);return S=function(){return t},t}var X=x.d.div(S(),(function(t){return t.dragging?"#ddd":"#bbb"})),Y=x.d.div(B(),(function(t){return t.dragging?"block":"none"})),V=function(t){var e=t.task,n=t.listIndex,a=t.index,r=o.a.useRef(null),l=o.a.useContext(z),s=l.beginTaskDrag,i=l.taskDragging,c=l.listIndex,p=l.taskIndex,u=l.moveTaskVertically;o.a.useLayoutEffect((function(){!function(t,e,n){E[t][e]=n}(n,a,r.current.getBoundingClientRect())}),[n,a,e]);var f=i&&c===n&&p===a;return o.a.createElement(X,{dragging:f,ref:r,onMouseDown:function(t){t.preventDefault(),s(a,n,t,r.current.getBoundingClientRect())},onMouseMove:function(t){if(i&&!f){var e=function(t,e){return e.y>=t.y+.5*t.height?0:e.y<=t.y+.5*t.height?-1:1}(r.current.getBoundingClientRect(),{x:t.clientX,y:t.clientY});if(!(e>0)){var n=a+e+1;n!==p&&u(n)}}}},e.title,o.a.createElement(Y,{dragging:f}))},A=function(t){var e=t.list,n=t.listIndex,a=t.draggingList,r=k(n),l=Object(p.a)(r,2),s=l[0],i=l[1],c=k(n),u=Object(p.a)(c,2),f=u[0],x=u[1],d=h(i),g=d.coord,w=d.dragging,b=d.handleMouseDown,v=d.mouseCoord,y=d.moveDirection;return o.a.useLayoutEffect((function(){var t;t=s,M[n]=t}),[s,n]),o.a.useLayoutEffect((function(){w&&a(y.x,v)}),[g]),o.a.createElement(j,{index:n,height:f.height,ref:i},o.a.createElement(O,{ref:x,dragging:w,style:w?{top:g.y,left:g.x}:{top:s.y,left:s.x}},o.a.createElement(D,{onMouseDown:b},o.a.createElement("p",null,e.title)),o.a.createElement(L,null,e.tasks.map((function(t,e){return o.a.createElement(V,{key:t.id,task:t,listIndex:n,index:e})}))),o.a.createElement(C,null,o.a.createElement(R.b,null),o.a.createElement("p",null,"Adicionar outro cart\xe3o"))),o.a.createElement(I,{dragging:w,x:s.x,y:s.y,height:f.height}))},J=function(t){var e=t.task,n=t.left,a=t.top;return o.a.createElement(X,{style:{position:"fixed",left:n,top:a,transform:"rotate(2.5deg)",boxShadow:"5px 5px 20px rgba(0, 0, 0, 0.3)",pointerEvents:"none",width:"272px"}},e.title)};function P(){var t=Object(s.a)(["\n  position: fixed;\n  background: red;\n  width: 272px;\n  height: 50px;\n"]);return P=function(){return t},t}function F(){var t=Object(s.a)(["\n  position: absolute;\n  display: flex;\n  padding: 8px;\n  height: 100%;\n  align-items: flex-start;\n"]);return F=function(){return t},t}function Q(){var t=Object(s.a)(["\n  position: relative;\n  flex: 1;\n  overflow-x: auto;\n  overflow-y: hidden;\n"]);return Q=function(){return t},t}var q=x.d.div(Q()),G=x.d.div(F()),H=(x.d.div(P()),[{title:"Backlog",tasks:["backlog task","anothter backlog task","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","very long task with a lot of blank space to test the text wrapper","A very looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong task"]},{title:"To dos",tasks:["a todo task"]},{title:"Done",tasks:["a done task"]}]),K=function(t){var e;E||(e=H.map((function(t){return t.tasks.map((function(t){return new DOMRect}))})),E=e);var n=o.a.useState((function(){return H.map((function(t){return Object(c.a)({},t,{id:f.a.generate(),tasks:t.tasks.map((function(t){return{id:f.a.generate(),title:t}}))})}))})),a=Object(p.a)(n,2),r=a[0],l=a[1],s=function(t,e){var n=o.a.useState(!1),a=Object(p.a)(n,2),r=a[0],l=a[1],s=o.a.useState({x:0,y:0}),c=Object(p.a)(s,2),u=c[0],f=c[1],h=o.a.useRef({x:0,y:0}),k=o.a.useRef({x:0,y:0}),x=o.a.useRef({taskIndex:0,listIndex:0}),d=o.a.useCallback((function(t,e){k.current={x:t,y:e},f({x:t-h.current.x,y:e-h.current.y})}),[]),g=o.a.useCallback((function(t){l(!0),d(t.clientX,t.clientY)}),[d]),w=o.a.useCallback((function(){l(!1),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",w)}),[g]),b=o.a.useCallback((function(t){return!(t<0||t>M.length-1||!T(M[t],k.current))}),[]),v=o.a.useCallback((function(n){var a=Object(i.a)(t);a[n].tasks.push(a[x.current.listIndex].tasks[x.current.taskIndex]),a[x.current.listIndex].tasks.splice(x.current.taskIndex,1),x.current={listIndex:n,taskIndex:a[n].tasks.length-1},e(a)}),[t,e]),y=o.a.useCallback((function(n){var a=Object(i.a)(t),o=a[x.current.listIndex].tasks[x.current.taskIndex];a[x.current.listIndex].tasks.splice(x.current.taskIndex,1),a[x.current.listIndex].tasks.splice(n,0,o),x.current.taskIndex=n,e(a)}),[t,e]);return o.a.useLayoutEffect((function(){if(r){var t=k.current.x-h.current.x-M[x.current.listIndex].x,e=t/Math.abs(t)||0,n=x.current.listIndex+e;e&&b(n)&&v(n)}}),[r,u,b,v]),{taskDragging:r,coord:u,beginTaskDrag:function(t,e,n,a){h.current={x:n.clientX-a.x,y:n.clientY-a.y},x.current={taskIndex:t,listIndex:e},d(n.clientX,n.clientY),window.addEventListener("mousemove",g),window.addEventListener("mouseup",w)},dragIndexes:x.current,moveTaskVertically:y}}(r,l),u=s.beginTaskDrag,h=s.coord,k=s.taskDragging,x=s.dragIndexes,d=s.moveTaskVertically,g=o.a.useCallback((function(t){return function(e,n){var a=t+e;if(a<0||a>=r.length||!T(M[a],n))return!1;var o=Object(i.a)(r),s=o[a];return o[a]=o[t],o[t]=s,l(o),!0}}),[r]),w=o.a.useMemo((function(){return{beginTaskDrag:u,taskDragging:k,taskIndex:x.taskIndex,listIndex:x.listIndex,moveTaskVertically:d}}),[x.taskIndex,x.listIndex,k,u,d]);return o.a.createElement(z.Provider,{value:w},o.a.createElement(q,null,o.a.createElement(G,null,r.map((function(t,e){return o.a.createElement(A,{draggingList:g(e),key:t.id,listIndex:e,list:t})}))),k&&o.a.createElement(J,{task:r[x.listIndex].tasks[x.taskIndex],left:h.x,top:h.y})))};function N(){var t=Object(s.a)(["\n\n\n\n  * {\n    padding: 0;\n    margin: 0;\n    outline: 0;\n    box-sizing: border-box;\n    font-family: sans-serif;\n  }\n\n  body{\n    color: #172b4d;\n  }\n\n  button {\n    cursor: pointer;\n  }\n\n"]);return N=function(){return t},t}var U=Object(x.b)(N()),W={},Z=n(19),$=n(20),_=n(21),tt=n(22),et=n(23),nt=n(24);function at(){var t=Object(s.a)(['\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  font-family: "Pacifico", cursive;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  color: white;\n']);return at=function(){return t},t}function ot(){var t=Object(s.a)(["\n  width: 100%;\n"]);return ot=function(){return t},t}function rt(){var t=Object(s.a)(["\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  background: #aaa;\n"]);return rt=function(){return t},t}function lt(){var t=Object(s.a)(["\n  border: none;\n  background: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  column-gap: 8px;\n  height: 32px;\n  min-width: 32px;\n  padding: 8px;\n  color: white;\n  font-weight: bolder;\n  font-size: 14px;\n  border-radius: 4px;\n  transition: background 0.2s;\n\n  &:hover {\n    background: ",";\n  }\n"]);return lt=function(){return t},t}function st(){var t=Object(s.a)(["\n  width: 50%;\n  display: grid;\n  column-gap: 4px;\n  grid-auto-flow: column;\n  align-items: center;\n  justify-content: ",";\n"]);return st=function(){return t},t}function it(){var t=Object(s.a)(["\n  position: relative;\n  width: 100%;\n  height: 40px;\n  padding: 4px;\n\n  display: flex;\n  background: rgba(0, 0, 0, 0.32);\n"]);return it=function(){return t},t}var ct=x.d.div(it()),pt=x.d.div.attrs((function(t){return{right:t.right||!1}}))(st(),(function(t){return t.right?"flex-end":"flex-start"})),ut=x.d.div.attrs((function(t){return{color:t.color||"rgba(255, 255, 255, .32)"}}))(lt(),(function(t){return t.color}),(function(t){var e=t.color;return Object(nt.a)(.1,e)})),ft=x.d.div(rt()),ht=(Object(x.d)(ut)(ot()),x.d.div(at())),kt=function(t){return o.a.createElement(ct,null,o.a.createElement(pt,null,o.a.createElement(ut,{as:"button"},o.a.createElement(Z.a,{size:16,color:"white"})),o.a.createElement(ut,{as:"button"},o.a.createElement($.a,{size:18,color:"white"})),o.a.createElement(ut,{as:"button"},o.a.createElement(_.a,{size:16}),o.a.createElement("p",null,"Quadros")),o.a.createElement(ut,{as:"input"})),o.a.createElement(ht,null,o.a.createElement(tt.a,{size:24}),"Trello"),o.a.createElement(pt,{right:!0},o.a.createElement(ut,{as:"button"},o.a.createElement(R.b,{size:20,color:"white"})),o.a.createElement(ut,{as:"button"},o.a.createElement(R.a,{size:20,color:"white"})),o.a.createElement(ut,{as:"button",color:"#eb5a46"},o.a.createElement(et.a,{size:20,color:"white"})),o.a.createElement(ft,null)))};function xt(){var t=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 100%;\n  min-height: 100vh;\n\n  display: flex;\n  flex-direction: column;\n\n  background: #0079bf;\n"]);return xt=function(){return t},t}var dt=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a,{theme:W},o.a.createElement(U,null),o.a.createElement(gt,null,o.a.createElement(kt,null),o.a.createElement(K,null))))},gt=x.d.div(xt());l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(dt,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.54d3f3ff.chunk.js.map