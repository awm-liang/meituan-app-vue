(function(t){function e(e){for(var a,i,s=e[0],o=e[1],l=e[2],u=0,d=[];u<s.length;u++)i=s[u],r[i]&&d.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);f&&f(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(a=!1)}a&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r={app:0},c=[];function s(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-15242704":"8bd4175d","chunk-3bb1fccc":"617ca478","chunk-5082d656":"55ce8619","chunk-7a1da052":"cdfb9dfd","chunk-8344d360":"66be9ee0","chunk-a7bfb2a6":"8500abeb","chunk-a847e6e0":"15813625","chunk-d65a8ff8":"db23a679","chunk-fd540550":"a09120f5"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n={"chunk-15242704":1,"chunk-3bb1fccc":1,"chunk-5082d656":1,"chunk-7a1da052":1,"chunk-8344d360":1,"chunk-a7bfb2a6":1,"chunk-a847e6e0":1,"chunk-d65a8ff8":1,"chunk-fd540550":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-15242704":"d44dc1b6","chunk-3bb1fccc":"b9335a7e","chunk-5082d656":"0e58904f","chunk-7a1da052":"3cdb5181","chunk-8344d360":"4894a953","chunk-a7bfb2a6":"f9021803","chunk-a847e6e0":"9731b809","chunk-d65a8ff8":"0e122786","chunk-fd540550":"df711b42"}[t]+".css",r=o.p+a,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var l=c[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===r)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||r,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.request=a,delete i[t],f.parentNode.removeChild(f),n(c)},f.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){i[t]=0}));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=s(t),l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");c.type=a,c.request=i,n[1](c)}r[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"076e":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"login_bar"},[n("router-link",{staticClass:"login logins",attrs:{to:"/login"}},[t._v("登陆")]),n("router-link",{staticClass:"register logins",attrs:{to:"/register"}},[t._v("注册")]),n("div",{staticClass:"position_bar"},[t._v("城市：\n      "),n("router-link",{staticClass:"position_button logins",attrs:{to:"/position"}},[t._v(t._s(t.city))])],1)],1),n("div",{staticClass:"nav"},[n("p",{staticClass:"nav_item"},[n("router-link",{attrs:{to:"/"}},[t._v("首页")]),t._v("|\n      "),n("router-link",{attrs:{to:"/myPerson"}},[t._v("我的")]),t._v("|\n      "),n("router-link",{attrs:{to:"/https://itunes.apple.com/cn/app/mei-tuan-tuan-gou-tuan-gou/id423084029?mt=8"}},[t._v("美团下载")]),t._v("|\n      "),n("router-link",{attrs:{to:"/homm"}},[t._v("电脑版")]),t._v("|\n      "),n("router-link",{attrs:{to:"/help"}},[t._v("帮助")])],1)]),t._m(0),t._m(1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blogroll"},[n("p",[n("span",[t._v("友情链接：")]),n("a",{staticClass:"first",attrs:{href:"javascript:0"}},[t._v("猫眼电影")]),n("a",{attrs:{href:"javascript:0"}},[t._v("大众点评")]),n("a",{attrs:{href:"javascript:0"}},[t._v("美团旅行")]),n("a",{attrs:{href:"javascript:0"}},[t._v("棒国民宿")]),n("a",{attrs:{href:"javascript:0"}},[t._v("大众点评下载")]),n("a",{attrs:{href:"javascript:0"}},[t._v("美团收银官网")]),n("a",{attrs:{href:"javascript:0"}},[t._v("美团点评餐饮学院")]),n("a",{attrs:{href:"javascript:0"}},[t._v("快驴进货商家合作")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"copyright"},[n("p",[t._v("———— ©2019 美团网 京ICP证070791号 ————")])])}],r={data:function(){return{}},created:function(){},props:["city"]},c=r,s=(n("f187"),n("17cc")),o=Object(s["a"])(c,a,i,!1,null,null,null);e["a"]=o.exports},"0bc68":function(t,e,n){t.exports=n.p+"img/food.74fd15fb.png"},1:function(t,e){},"15d1":function(t,e,n){"use strict";var a=n("3579"),i=n.n(a);i.a},"21bb":function(t,e,n){"use strict";var a=n("72de"),i=n.n(a);i.a},"29a9":function(t,e,n){},3579:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("5c07"),n("53da"),n("2556"),n("d0f8");var a=n("fd9b"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",[n("router-view")],1)],1)},r=[],c=(n("5c0b"),n("17cc")),s={},o=Object(c["a"])(s,i,r,!1,null,null,null),l=o.exports,u=n("081a"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("header",{staticClass:"header"},[a("section",{staticClass:"nav_bar"},[a("router-link",{staticClass:"my_position",attrs:{tag:"div",to:"/position"}},[a("a",{staticClass:"position_content"},[t._v("\n          "+t._s(t.city)+"\n          "),a("i",{staticClass:"el-icon-arrow-down icon-downarrow"})])]),a("router-link",{staticClass:"search_bar",attrs:{tag:"div",to:"/search"}},[a("i",{staticClass:"el-icon-search search-icon"}),a("div",{staticClass:"search_input"},[t._v("输入商家/品类/商圈")])]),a("router-link",{staticClass:"my_person",attrs:{tag:"div",to:"/myPerson"}},[a("div",{staticClass:"rightMy"},[a("img",{attrs:{src:n("c121"),alt:""}}),a("p",[t._v("我的")])])])],1)]),a("main",{staticClass:"main"},[t._m(0),a("div",{staticClass:"seletedList ab"},[a("ul",t._l(t.seletedList,function(e,i){return a("router-link",{key:i,attrs:{tag:"li",to:"/listBar/"+e.id}},[a("div",{staticClass:"item_img"},[a("img",{attrs:{src:n("0bc68"),alt:""}})]),a("p",[t._v(t._s(e.name))])])}),1)]),a("div",{staticClass:"your_like"},[a("h6",{staticClass:"like_title"},[t._v("猜你喜欢")]),a("hr"),a("ShopList"),a("router-link",{staticClass:"like_title more",attrs:{tag:"h6",to:"/allList"},on:{click:t.backTop}},[t._v("\n        查看全部团购\n        "),a("span",{staticClass:"el-icon-arrow-right"})])],1)]),a("my-footer",{attrs:{city:t.city}})],1)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://itunes.apple.com/cn/app/mei-tuan-tuan-gou-tuan-gou/id423084029?mt=8"}},[a("img",{attrs:{src:n("ec24"),alt:""}})])}],p=n("6668"),h=n("660a"),m=n.n(h),_=n("076e"),b={name:"home",data:function(){return{city:this.$store.state.city||"深圳",seletedList:[{id:0,name:"美食",imgUrl:"../static/food.png"},{id:1,name:"生活服务",imgUrl:"../static/food.png"},{id:2,name:"酒店",imgUrl:"../static/food.png"},{id:3,name:"休闲娱乐",imgUrl:"../static/food.png"},{id:4,name:"外卖",imgUrl:"../static/food.png"},{id:5,name:"小吃快餐",imgUrl:"../static/food.png"},{id:6,name:"丽人",imgUrl:"../static/food.png"},{id:7,name:"火车票",imgUrl:"../static/food.png"},{id:8,name:"今日新单",imgUrl:"../static/food.png"},{id:9,name:"全部分类",imgUrl:"../static/food.png"}]}},methods:{backTop:function(){document.body.scrollTop=document.documentElement.scrollTop=0},getListBar:function(){var t=this;this.$http.get("http://localhost:3000/seletedList").then(function(e){Object(h["Toast"])("获取数据成功！"),t.seletedList=e.data},function(t){Object(h["Toast"])("获取数据错误！已采用本地数据！")})}},components:{ShopList:p["a"],myFooter:_["a"]},created:function(){this.backTop(),this.getListBar()}},g=b,v=(n("21bb"),Object(c["a"])(g,d,f,!1,null,null,null)),k=v.exports;a["default"].use(u["a"]);var y=new u["a"]({routes:[{path:"/",name:"home",component:k},{path:"/position",name:"SeletedPosition",component:function(){return n.e("chunk-a7bfb2a6").then(n.bind(null,"7545"))}},{path:"/search",name:"searchMain",component:function(){return n.e("chunk-8344d360").then(n.bind(null,"cecd"))}},{path:"/myPerson",name:"myPerson",component:function(){return n.e("chunk-5082d656").then(n.bind(null,"6339"))}},{path:"/listBar/:id",name:"listBar",component:function(){return n.e("chunk-15242704").then(n.bind(null,"a62d"))}},{path:"/commodityInfo/:id",name:"commodityInfo",component:function(){return n.e("chunk-fd540550").then(n.bind(null,"3380"))}},{path:"/allList",name:"allList",component:function(){return n.e("chunk-3bb1fccc").then(n.bind(null,"9c73"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-a847e6e0").then(n.bind(null,"dd7b"))}},{path:"/register",name:"register",component:function(){return n.e("chunk-d65a8ff8").then(n.bind(null,"7803"))}},{path:"/person-info",name:"person-info",component:function(){return n.e("chunk-7a1da052").then(n.bind(null,"34d9"))}}]}),C=n("52c1");a["default"].use(C["a"]);var j=new C["a"].Store({state:{city:"深圳",userId:null},mutations:{changeCity:function(t,e){t.city=e},changeUserId:function(t,e){t.userId=e}},actions:{}}),w=n("5a4b"),S=n("26e8");n("5197"),n("4f89");a["default"].use(w["a"]),a["default"].use(S["Icon"]),a["default"].use(S["Rate"]),a["default"].use(m.a),a["default"].config.productionTip=!1,new a["default"]({router:y,store:j,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("7508"),i=n.n(a);i.a},6668:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.yourLikeList,function(e,a){return n("router-link",{key:a,staticClass:"like_item",attrs:{tag:"div",to:"/commodityInfo/"+e.id}},[n("div",{staticClass:"item_wrap"},[n("div",{staticClass:"item_img"},[n("img",{attrs:{src:e.imgSrc}})]),n("div",{staticClass:"item_info"},[n("div",{staticClass:"item_title"},[n("p",[t._v(t._s(e.title))]),n("p",[t._v(t._s(e.info))])]),n("div",{staticClass:"item_price"},[n("span",[t._v("\n            "+t._s(e.price)+"\n            "),n("span",[t._v("元")])]),t._v("\n          门市价:"+t._s(e.facade)+"元\n          "),n("span",[t._v("已售"+t._s(e.sell))])])])]),n("hr")])}),1)},i=[],r=n("660a"),c={data:function(){return{yourLikeList:[{id:0,title:"海螺朝天游泳馆",info:"[4店通用]100元代金券1张，可叠加",imgSrc:"//p0.meituan.net/200.0/deal/f3677b71db061d51880e0ec626d0b66b111431.jpg",price:88,facade:100,sell:38e3},{id:1,title:"探炉烤鱼",info:"[福田区]【爆款推荐】中式/泰式按摩双钟套餐（2选1）",imgSrc:"https://p0.meituan.net/200.0/deal/910c44bfe99b19382ee4af6beee6b5eb27245.jpg@79_0_341_341a%7C267h_267w_2e_90Q",price:159,facade:336,sell:5800},{id:2,title:"正新鸡排",info:"[3店通用]正新鸡排1份，提供免费WiFi",imgSrc:"https://p1.meituan.net/200.0/deal/7b284ae8426ed2e34557596523fafaf6169906.jpg@69_0_564_564a%7C267h_267w_2e_90Q",price:8.9,facade:15,sell:135647},{id:3,title:"御蝶坊生日蛋糕",info:"[深圳等]10元代金券1张，除生日蛋糕、饮料和月饼外全场通用",imgSrc:"https://p1.meituan.net/200.0/deal/35bef73b777ac0ab61921fe8228bfe9e47775.jpg@128_0_385_385a%7C267h_267w_2e_90Q",price:8.8,facade:10,sell:280411},{id:0,title:"海螺朝天游泳馆",info:"[4店通用]100元代金券1张，可叠加",imgSrc:"//p0.meituan.net/200.0/deal/f3677b71db061d51880e0ec626d0b66b111431.jpg",price:88,facade:100,sell:38e3},{id:1,title:"探炉烤鱼",info:"[福田区]【爆款推荐】中式/泰式按摩双钟套餐（2选1）",imgSrc:"https://p0.meituan.net/200.0/deal/910c44bfe99b19382ee4af6beee6b5eb27245.jpg@79_0_341_341a%7C267h_267w_2e_90Q",price:159,facade:336,sell:5800},{id:1,title:"烤鱼",info:"[福田区]【爆款推荐】中式/泰式按摩双钟套餐（2选1）",imgSrc:"https://p0.meituan.net/200.0/deal/910c44bfe99b19382ee4af6beee6b5eb27245.jpg@79_0_341_341a%7C267h_267w_2e_90Q",price:159,facade:336,sell:5800},{id:2,title:"正新鸡排",info:"[3店通用]正新鸡排1份，提供免费WiFi",imgSrc:"https://p1.meituan.net/200.0/deal/7b284ae8426ed2e34557596523fafaf6169906.jpg@69_0_564_564a%7C267h_267w_2e_90Q",price:8.9,facade:15,sell:135647},{id:3,title:"御蝶坊生日蛋糕",info:"[深圳等]10元代金券1张，除生日蛋糕、饮料外全场通用",imgSrc:"https://p1.meituan.net/200.0/deal/35bef73b777ac0ab61921fe8228bfe9e47775.jpg@128_0_385_385a%7C267h_267w_2e_90Q",price:8.8,facade:10,sell:280411},{id:4,title:"鹿角巷THE ALLEY",info:"[海雅缤纷城]♥网红♥招牌饮品3选1",imgSrc:"https://p0.meituan.net/200.0/deal/6675ee8adeb7e29b713c0c2b3d49b44868593.jpg@0_137_688_688a%7C267h_267w_2e_90Q",price:15.8,facade:23,sell:3138},{id:5,title:"真功夫",info:"[深圳等]冬(香)菇鸡腿肉饭+香滑蒸蛋1份",imgSrc:"https://p0.meituan.net/200.0/deal/e4b18ae7e48350d1b313c8befc8782e5242830.jpg@267h_267w_2e_90Q",price:19,facade:24,sell:6346},{id:6,title:"蛙奴炭烧牛蛙",info:"[3店通用]钜惠3到4人餐，提供免费WiFi",imgSrc:"https://p0.meituan.net/200.0/deal/4c00fe7c31155c97016f83a26400f12a64512.jpg@103_0_500_500a%7C267h_267w_2e_90Q",price:178,facade:243,sell:9715},{id:7,title:"四海一家",info:"[世界之窗]单人自助午餐",imgSrc:"https://p0.meituan.net/200.0/deal/d5e142c3dcca778edcad372f638212ef584033.jpg@698_0_1802_1802a%7C267h_267w_2e_90Q",price:163,facade:178,sell:41019},{id:8,title:"五谷芳乳鸽王",info:"[6店通用]100元代金劵1张，可叠加",imgSrc:"https://p1.meituan.net/200.0/deal/f1f5a165dbb6f1017ee11e95d0ff8d2847903.jpg@114_0_452_452a%7C267h_267w_2e_90Q",price:83,facade:100,sell:56033},{id:9,title:"汤响自助回转火锅百汇",info:"[3店通用]超值自助回转火锅",imgSrc:"https://p0.meituan.net/200.0/deal/e5d23cf845b1689d274f1a6761ca66cc48157.jpg@100_0_400_400a%7C267h_267w_2e_90Q",price:42,facade:59,sell:24706}]}},created:function(){this.backTop(),this.getShopList()},methods:{backTop:function(){setTimeout(function(){document.body.scrollTop=document.documentElement.scrollTop=0},100)},getShopList:function(){var t=this;this.$http.get("http://localhost:3000/yourLikeList").then(function(e){Object(r["Toast"])("获取数据成功！"),t.yourLikeList=e.data},function(t){Object(r["Toast"])("获取数据错误！已采用本地数据！")})}}},s=c,o=(n("15d1"),n("17cc")),l=Object(o["a"])(s,a,i,!1,null,"4c00bec0",null);e["a"]=l.exports},"72de":function(t,e,n){},7508:function(t,e,n){},c121:function(t,e,n){t.exports=n.p+"img/user.c7f0ad55.png"},ec24:function(t,e,n){t.exports=n.p+"img/banner.a7bfcba1.png"},f187:function(t,e,n){"use strict";var a=n("29a9"),i=n.n(a);i.a}});
//# sourceMappingURL=app.40b99287.js.map