var TouchSlide=function(e){var t={slideCell:(e=e||{}).slideCell||"#touchSlide",titCell:e.titCell||".hd li",mainCell:e.mainCell||".bd",effect:e.effect||"left",autoPlay:e.autoPlay||!1,delayTime:e.delayTime||200,interTime:e.interTime||2500,defaultIndex:e.defaultIndex||0,titOnClassName:e.titOnClassName||"on",autoPage:e.autoPage||!1,prevCell:e.prevCell||".prev",nextCell:e.nextCell||".next",setTitle:e.setTitle||!1,title:e.title||["a"],pageStateCell:e.pageStateCell||".pageState",pnLoop:"undefined "==e.pnLoop||e.pnLoop,startFun:e.startFun||null,endFun:e.endFun||null,switchLoad:e.switchLoad||null},n=document.getElementById(t.slideCell.replace("#",""));if(!n)return!1;var a=function(e,t){e=e.split(" ");var n=[],a=[t=t||document];for(var l in e)0!=e[l].length&&n.push(e[l]);for(var l in n){if(0==a.length)return!1;var i=[];for(var r in a)if("#"==n[l][0])i.push(document.getElementById(n[l].replace("#","")));else if("."==n[l][0])for(var o=a[r].getElementsByTagName("*"),s=0;s<o.length;s++){var c=o[s].className;c&&-1!=c.search(new RegExp("\\b"+n[l].replace(".","")+"\\b"))&&i.push(o[s])}else for(var o=a[r].getElementsByTagName(n[l]),s=0;s<o.length;s++)i.push(o[s]);a=i}return 0!=a.length&&a[0]!=t&&a},l=function(e,t){!e||!t||e.className&&-1!=e.className.search(new RegExp("\\b"+t+"\\b"))||(e.className+=(e.className?" ":"")+t)},i=function(e,t){!e||!t||e.className&&-1==e.className.search(new RegExp("\\b"+t+"\\b"))||(e.className=e.className.replace(new RegExp("\\s*\\b"+t+"\\b","g"),""))},r=t.effect,o=a(t.prevCell,n)[0],s=a(t.nextCell,n)[0],c=a(t.pageStateCell)[0],u=a(t.mainCell,n)[0];if(!u)return!1;var d,f,p=u.children.length,m=a(t.titCell,n),v=m?m.length:p,h=t.switchLoad,g=t.title,T=parseInt(t.defaultIndex),L=parseInt(t.delayTime),b=parseInt(t.interTime),C="false"!=t.autoPlay&&0!=t.autoPlay,w="false"!=t.autoPage&&0!=t.autoPage,y=("false"!=t.setTitle&&t.setTitle,"false"!=t.pnLoop&&0!=t.pnLoop),x=T,N=null,E=null,I=null,P=0,k=0,M=0,S=0,F=/hp-tablet/gi.test(navigator.appVersion),D="ontouchstart"in window&&!F,B=D?"touchstart":"mousedown",O=D?"touchmove":"",A=D?"touchend":"mouseup",H=u.parentNode.clientWidth,R=p;if(0==v&&(v=p),w){v=p,(m=m[0]).innerHTML="";var z="";if(1==t.setTitle&&t.title.length)for($=0;$<t.title.length;$++)z+="<li><span>"+g[$]+"</span></li>";else if(1==t.autoPage||"true"==t.autoPage)for($=0;$<v;$++)z+="<li>"+($+1)+"</li>";else for($=0;$<v;$++)z+=t.autoPage.replace("$",$+1);m.innerHTML=z,m=m.children}"leftLoop"==r&&(R+=2,u.appendChild(u.children[0].cloneNode(!0)),u.insertBefore(u.children[p-1].cloneNode(!0),u.children[0])),d=function(e,t){var n=document.createElement("div");n.innerHTML=t,n=n.children[0];var a=e.cloneNode(!0);return n.appendChild(a),e.parentNode.replaceChild(n,e),u=a,n}(u,'<div class="tempWrap" style="overflow:hidden; position:relative;"></div>'),u.style.cssText="width:"+R*H+"px;position:relative;overflow:hidden;padding:0;margin:0;";for($=0;$<R;$++)u.children[$].style.cssText="display:table-cell;vertical-align:top;width:"+H+"px";var W=function(){"function"==typeof t.startFun&&t.startFun(T,v)},X=function(){"function"==typeof t.endFun&&t.endFun(T,v)},Y=function(e){var t=("leftLoop"==r?T+1:T)+e,n=function(e){for(var t=u.children[e].getElementsByTagName("img"),n=0;n<t.length;n++)t[n].getAttribute(h)&&(t[n].setAttribute("src",t[n].getAttribute(h)),t[n].removeAttribute(h))};if(n(t),"leftLoop"==r)switch(t){case 0:n(p);break;case 1:n(p+1);break;case p:n(0);break;case p+1:n(1)}};window.addEventListener("resize",function(){H=d.clientWidth,u.style.width=R*H+"px";for(var e=0;e<R;e++)u.children[e].style.width=H+"px";V(-("leftLoop"==r?T+1:T)*H,0)},!1);var V=function(e,t,n){(n=n?n.style:u.style).webkitTransitionDuration=n.MozTransitionDuration=n.msTransitionDuration=n.OTransitionDuration=n.transitionDuration=t+"ms",n.webkitTransform="translate("+e+"px,0)translateZ(0)",n.msTransform=n.MozTransform=n.OTransform="translateX("+e+"px)"},Z=function(e){switch(r){case"left":T>=v?T=e?T-1:0:T<0&&(T=e?0:v-1),null!=h&&Y(0),V(-T*H,L),x=T;break;case"leftLoop":null!=h&&Y(0),V(-(T+1)*H,L),-1==T?(E=setTimeout(function(){V(-v*H,0)},L),T=v-1):T==v&&(E=setTimeout(function(){V(-H,0)},L),T=0),x=T}W(),I=setTimeout(function(){X()},L);for(var n=0;n<v;n++)i(m[n],t.titOnClassName),n==T&&l(m[n],t.titOnClassName);0==y&&(i(s,"nextStop"),i(o,"prevStop"),0==T?l(o,"prevStop"):T==v-1&&l(s,"nextStop")),c&&(c.innerHTML="<span>"+(T+1)+"</span>/"+v)};if(Z(),C&&(N=setInterval(function(){T++,Z()},b)),m)for(var $=0;$<v;$++)!function(){var e=$;m[e].addEventListener("click",function(t){clearTimeout(E),clearTimeout(I),T=e,Z()})}();s&&s.addEventListener("click",function(e){1!=y&&T==v-1||(clearTimeout(E),clearTimeout(I),T++,Z())}),o&&o.addEventListener("click",function(e){1!=y&&0==T||(clearTimeout(E),clearTimeout(I),T--,Z())});var j=function(e){if(!D||!(e.touches.length>1||e.scale&&1!==e.scale)){var t=D?e.touches[0]:e;if(M=t.pageX-P,S=t.pageY-k,void 0===f&&(f=!!(f||Math.abs(M)<Math.abs(S))),!f){switch(e.preventDefault(),C&&clearInterval(N),r){case"left":(0==T&&M>0||T>=v-1&&M<0)&&(M*=.4),V(-T*H+M,0);break;case"leftLoop":V(-(T+1)*H+M,0)}null!=h&&Math.abs(M)>H/3&&Y(M>-0?-1:1)}}},q=function(e){0!=M&&(e.preventDefault(),f||(Math.abs(M)>H/10&&(M>0?T--:T++),Z(!0),C&&(N=setInterval(function(){T++,Z()},b))),u.removeEventListener(O,j,!1),u.removeEventListener(A,q,!1))};u.addEventListener(B,function(e){clearTimeout(E),clearTimeout(I),f=void 0,M=0;var t=D?e.touches[0]:e;P=t.pageX,k=t.pageY,u.addEventListener(O,j,!1),u.addEventListener(A,q,!1)},!1)};