(this["webpackJsonpfood-recipe"]=this["webpackJsonpfood-recipe"]||[]).push([[0],[,function(e,a,t){e.exports={outercontainer:"main_outercontainer__5-x-N",searchDetails:"main_searchDetails__20ahY",innerBox:"main_innerBox__1LpzT",heading:"main_heading__FMmHB",searchDiv:"main_searchDiv__3NazO",formControl:"main_formControl__3VpMT",searchButton:"main_searchButton__3hfdj",formBox:"main_formBox__1joOd",recipeBox:"main_recipeBox__3sJ3J",dataoffood:"main_dataoffood__lRkua"}},,,,,function(e,a,t){e.exports={fooddataBaseTable:"fooddatabase_fooddataBaseTable__2OVdG",image:"fooddatabase_image__3eyke",food:"fooddatabase_food__275tB",quantity:"fooddatabase_quantity__2SKx9",unit:"fooddatabase_unit__1rPi9",healthLables:"fooddatabase_healthLables__vNoOl"}},,,function(e,a,t){e.exports={recipe:"recipe_recipe__2UvKH"}},function(e,a,t){e.exports=t.p+"static/media/cooking.2d0ff9ee.svg"},function(e,a,t){e.exports={outercontainer:"footer_outercontainer__3Zsun",love:"footer_love__3dLdq"}},,,,function(e,a,t){e.exports={outercontainer:"header_outercontainer__35kgv"}},function(e,a,t){e.exports=t.p+"static/media/heart.a8cd76c1.svg"},function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),o=t.n(c),l=(t(22),t(2)),i=t(3),s=t(5),u=t(4),m=(t(23),t(8)),d=t.n(m),p=t(14),f=t(7),h=t(1),_=t.n(h),E=t(9),b=t.n(E),v=function(e){var a=e.title,t=e.calories,n=e.image,c=e.ingredients,o=e.url;return r.a.createElement("div",{className:b.a.recipe},r.a.createElement("h1",null,"Recipe"),r.a.createElement("h1",null,a),r.a.createElement("p",null,r.a.createElement("b",null,"Calories: ",t)),r.a.createElement("img",{className:b.a.image,src:n,alt:""}),r.a.createElement("ol",null,c.map((function(e){return r.a.createElement("li",null,e.text)}))),r.a.createElement("p",null,"Link: ",r.a.createElement("a",{href:o},o)))},g=t(6),y=t.n(g),x=function(e){var a=e.title,t=e.image,n=e.digest;return r.a.createElement("div",{className:y.a.database},r.a.createElement("div",{className:y.a.fooddatadiv},r.a.createElement("div",{className:y.a.subdivfooddata},r.a.createElement("h3",null,a),r.a.createElement("img",{className:y.a.image,src:t,alt:"",style:{width:"80%"}}),r.a.createElement("p",null," Quantity: 100 g "),r.a.createElement("h3",null,"Healthy : "),n.map((function(e){return r.a.createElement("p",null,e.label,": ",e.total,e.unit)})))))},O=function(){var e=Object(n.useState)([]),a=Object(f.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(""),l=Object(f.a)(o,2),i=l[0],s=l[1],u=Object(n.useState)(""),m=Object(f.a)(u,2),h=m[0],E=m[1],b=function(){var e=Object(p.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(h,"&app_id=").concat("c5344576","&app_key=").concat("a73b4d8f6cc9d7942748a775780a8554"));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,c(t.hits),console.log(t.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){b()}),[h]);return r.a.createElement("div",{className:_.a.outercontainer},r.a.createElement("div",{className:_.a.innerBox},r.a.createElement("div",{className:_.a.heading},r.a.createElement("h1",null,"Food And Recipe Search")),r.a.createElement("div",{className:_.a.searchDetails},r.a.createElement("h1",null,"Searching by keyword"),r.a.createElement("p",null,'Enter a what you have eaten, like "coffee and croissant" or "chicken enchilada" to see how it works. We have accurate data tens of thousands of foods, including international dishes')),r.a.createElement("div",{className:_.a.searchDiv},r.a.createElement("form",{className:_.a.formBox,onSubmit:function(e){e.preventDefault(),E(i),s("")}},r.a.createElement("input",{type:"text",placeholder:"Foods",className:_.a.formControl,value:i,onChange:function(e){s(e.target.value)}}),"\xa0 \xa0",r.a.createElement("button",{type:"submit",className:_.a.searchButton},"Search"))),r.a.createElement("h2",null,"Food Database"),r.a.createElement("div",{className:_.a.dataoffood},t.map((function(e){return r.a.createElement(x,{key:e.recipe.label,title:e.recipe.label,image:e.recipe.image,digest:e.recipe.digest})}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:_.a.recipeBox},r.a.createElement("h2",null,"Recipes "),t.map((function(e){return r.a.createElement(v,{key:e.recipe.label,title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,url:e.recipe.url})})))))},j=t(15),N=t.n(j),k=t(10),B=t.n(k),w=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:N.a.outercontainer},r.a.createElement("img",{src:B.a,alt:"chef"}),r.a.createElement("h1",null,"Food-Recipe"),r.a.createElement("img",{src:B.a,alt:"chef"}))}}]),t}(n.Component),C=t(11),S=t.n(C),D=t(16),F=t.n(D),H=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:S.a.outercontainer},r.a.createElement("div",{className:S.a.love},r.a.createElement("p",null,"Made with")," ",r.a.createElement("img",{src:F.a,alt:"heart"}),r.a.createElement("p",null," by Karuna")),r.a.createElement("p",null,"Happy Cooking!"),r.a.createElement("br",null),r.a.createElement("p",null,"Hope It will help You!"))}}]),t}(n.Component),L=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(O,null),r.a.createElement(H,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.8cc70ac7.chunk.js.map